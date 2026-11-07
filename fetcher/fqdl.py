#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""fqdl — 番茄小说批量抓取 / 打包工具

子命令
------
  discover   搜索并筛出「已完结」书目，写入 state/candidates.json
  grab       下载正文 + 封面（断点续传，已完成的自动跳过）
  pack       把 state 里的成品打成 EPUB + TXT
  all        discover → grab → pack 一条龙
  status     查看当前进度

用法
----
  python3 fqdl.py all --want 250 --out /workspace/novels
  python3 fqdl.py grab --limit 20
  python3 fqdl.py pack

设计要点
--------
* 正文走 /chapters/full（CM-DH + AES-256，一次可解整本），比逐章接口快两个数量级；
  失败时按批次二分回退，再退到逐章 /chapters/{id}（HTML）。
* 每本书一个 state 目录，body.json.gz 覆盖全部章节即视为完成 → 断点续传零成本。
* 所有产物先写 .tmp 再原子 rename，中断不会留下半截文件。
* 并发自适应：错误率升高自动降并发，恢复后再升回去。
"""

from __future__ import annotations

import argparse
import concurrent.futures as cf
import csv
import gzip
import html
import io
import json
import math
import os
import random
import re
import signal
import sys
import threading
import time
import traceback
import urllib.parse
from datetime import datetime, timezone
from pathlib import Path

import requests
from requests.adapters import HTTPAdapter

sys.path.insert(0, str(Path(__file__).resolve().parent))
from pack_epub import build, build_txt, meta_block, slug_filename  # noqa: E402

# ---------------------------------------------------------------------------
# 配置
# ---------------------------------------------------------------------------

API = os.environ.get("FQ_API", "http://127.0.0.1:18921/api/v1")
ROOT = Path(__file__).resolve().parent
STATE = ROOT / "state"
STATE.mkdir(parents=True, exist_ok=True)

CHUNK = int(os.environ.get("FQ_CHUNK", "120"))     # 每次 full 请求的章节数
BOOK_WORKERS = int(os.environ.get("FQ_WORKERS", "3"))
HTTP_TIMEOUT = (10, 180)
RETRIES = 5

_print_lock = threading.Lock()


def log(msg: str) -> None:
    with _print_lock:
        print(msg, flush=True)


# ---------------------------------------------------------------------------
# HTTP
# ---------------------------------------------------------------------------

class Permanent(Exception):
    """不可重试的错误（404 / 参数错）。"""


class Transient(Exception):
    """可重试的错误。"""


class Client:
    def __init__(self, base: str = API, workers: int = BOOK_WORKERS):
        self.base = base.rstrip("/")
        self.s = requests.Session()
        ad = HTTPAdapter(pool_connections=max(8, workers * 2),
                         pool_maxsize=max(16, workers * 4),
                         max_retries=0)
        self.s.mount("http://", ad)
        self.s.mount("https://", ad)
        self.s.headers.update({"Accept": "application/json, text/plain, */*"})
        self._err_streak = 0

    def get_json(self, path: str, params: dict | None = None, timeout=HTTP_TIMEOUT,
                 retries: int = RETRIES) -> dict:
        url = self.base + path
        last = None
        for attempt in range(retries):
            try:
                r = self.s.get(url, params=params, timeout=timeout)
                if r.status_code == 404:
                    raise Permanent(f"404 {path}")
                if r.status_code >= 500:
                    raise Transient(f"HTTP {r.status_code}")
                if r.status_code == 429:
                    raise Transient("HTTP 429")
                r.raise_for_status()
                d = r.json()
                if d.get("code") not in (0, None):
                    msg = str(d.get("message") or d.get("error") or "")[:120]
                    if (d.get("code") in (101104, 1011, 404) or "not found" in msg.lower()
                            or "不存在" in msg or "停止合作" in msg or "已下架" in msg):
                        raise Permanent(msg)
                    raise Transient(f"api {d.get('code')}: {msg}")
                self._err_streak = 0
                return d
            except Permanent:
                raise
            except (Transient, requests.RequestException, ValueError) as e:
                last = e
                self._err_streak += 1
                if attempt == retries - 1:
                    break
                sleep = min(8.0, 0.6 * (2 ** attempt)) * (0.7 + random.random() * 0.6)
                time.sleep(sleep)
        raise Transient(f"{path}: {last}")

    def get_bytes(self, url: str, timeout=(10, 60)) -> bytes:
        last = None
        for attempt in range(3):
            try:
                r = self.s.get(url, timeout=timeout)
                r.raise_for_status()
                return r.content
            except Exception as e:  # noqa: BLE001
                last = e
                time.sleep(0.5 * (attempt + 1))
        raise Transient(f"cover: {last}")


# ---------------------------------------------------------------------------
# 文本处理
# ---------------------------------------------------------------------------

_P_RE = re.compile(r"<p[^>]*>(.*?)</p>", re.S | re.I)
_TAG_RE = re.compile(r"<[^>]+>")


def html_to_paras(h: str) -> list[str]:
    """HTML 正文 → 段落数组。"""
    if not h:
        return []
    out = []
    for m in _P_RE.finditer(h):
        t = re.sub(r"<br\s*/?>", "\n", m.group(1), flags=re.I)
        t = html.unescape(_TAG_RE.sub("", t)).replace("\u3000", " ").strip()
        if t:
            out.append(t)
    if not out:
        t = html.unescape(_TAG_RE.sub("", h)).strip()
        if t:
            out = [x.strip() for x in t.split("\n") if x.strip()]
    return out


def plain_to_paras(t: str) -> list[str]:
    """纯文本正文 → 段落数组。"""
    if not t:
        return []
    if "<p" in t.lower():
        return html_to_paras(t)
    t = html.unescape(t).replace("\u3000", " ").replace("\r\n", "\n").replace("\r", "\n")
    return [x.strip() for x in t.split("\n") if x.strip()]


# ---------------------------------------------------------------------------
# 进度
# ---------------------------------------------------------------------------

class Progress:
    def __init__(self, path: Path):
        self.path = path
        self.data = {"phase": "idle", "total": 0, "done": 0, "failed": 0,
                     "current": "", "started_at": time.time(), "log": []}
        self.lock = threading.Lock()

    def update(self, **kw):
        with self.lock:
            self.data.update(kw)
            self._flush()

    def add_log(self, line: str):
        with self.lock:
            self.data["log"].append(line)
            self.data["log"] = self.data["log"][-40:]
            self._flush()

    def _flush(self):
        tmp = self.path.with_suffix(".tmp")
        try:
            tmp.write_text(json.dumps(self.data, ensure_ascii=False, indent=1), encoding="utf-8")
            tmp.replace(self.path)
        except Exception:
            pass


PROG = Progress(STATE / "progress.json")


def bar(n: int, total: int, width: int = 28) -> str:
    if total <= 0:
        return "░" * width
    k = max(0, min(width, int(width * n / total)))
    return "█" * k + "░" * (width - k)


def human(n: float) -> str:
    for unit in ("B", "KB", "MB", "GB"):
        if n < 1024:
            return f"{n:.0f}{unit}" if unit == "B" else f"{n:.1f}{unit}"
        n /= 1024
    return f"{n:.1f}TB"


# ---------------------------------------------------------------------------
# 发现
# ---------------------------------------------------------------------------

# 搜索会返回带 <em> 高亮的标题，且会混进不适合收录的题材，这里统一处理。
_TAG_STRIP = re.compile(r"</?[a-zA-Z][^>]*>")
BLOCK_WORDS = (
    "毛泽东", "习近平", "邓小平", "江泽民", "胡锦涛", "共产党", "中共", "党史",
    "文革", "文化大革命", "六四", "反右", "政治斗争", "中南海", "红卫兵",
)

SEED_QUERIES = [
    "都市", "玄幻", "修真", "系统", "重生", "穿越", "历史", "军事", "科幻", "悬疑",
    "灵异", "推理", "武侠", "仙侠", "网游", "竞技", "校园", "职场", "豪门", "年代",
    "赘婿", "总裁", "甜宠", "古言", "宫斗", "快穿", "无限流", "末世", "种田", "长生",
    "西医", "中医", "大国", "工业", "直播", "娱乐圈", "神豪", "大佬", "学霸", "rule",
]


def clean_text(t: str) -> str:
    return _TAG_STRIP.sub("", t or "").replace("\u3000", " ").strip()


def blocked(text: str) -> bool:
    return any(w in text for w in BLOCK_WORDS)


def discover(client: Client, want: int, per_query_pages: int = 6) -> list[dict]:
    """搜索足够多的书，筛出完结的，去重后排好序。"""
    cand: dict[str, dict] = {}
    quota = max(want * 3, 300)
    t0 = time.time()
    for q in SEED_QUERIES:
        if len(cand) >= quota:
            break
        for page in range(per_query_pages):
            try:
                d = client.get_json("/search/fanqie", {"query": q, "offset": page * 10})
            except Exception as e:  # noqa: BLE001
                log(f"  ! search {q} p{page}: {e}")
                break
            data = d.get("data") or {}
            rows = data.get("ret_data") or []
            for b in rows:
                bid = str(b.get("book_id") or "")
                if not bid or bid in cand:
                    continue
                title = clean_text(b.get("title"))
                abstract = clean_text(b.get("abstract"))
                if blocked(title) or blocked(abstract[:120]):
                    continue
                cand[bid] = {
                    "book_id": bid,
                    "title": title,
                    "author": clean_text(b.get("author")),
                    "abstract": abstract,
                    "category": b.get("category") or "",
                    "creation_status": str(b.get("creation_status") or ""),
                    "score": b.get("score") or "",
                    "shelf": int(float(b.get("add_bookshelf_count") or 0)),
                    "genre": b.get("genre") or "",
                }
            if not data.get("has_more"):
                break
            time.sleep(0.05)
        log(f"  发现 {len(cand):>4} 本  ({q})")

    done = [b for b in cand.values() if b["creation_status"] == "0"]
    done.sort(key=lambda b: (-b["shelf"], b["title"]))

    # 同名书只留最热的一本（不同 book_id 常是同一本书的重发版本）
    uniq: dict[str, dict] = {}
    for b in done:
        key = re.sub(r"[\s《》（）()·,，.。:：!！?？\-—_]+", "", b["title"]).lower()
        if key not in uniq:
            uniq[key] = b
    dedup = list(uniq.values())
    log(f"候选 {len(cand)} 本，已完结 {len(done)} 本，去重后 {len(dedup)} 本，用时 {time.time() - t0:.0f}s")
    return dedup


# ---------------------------------------------------------------------------
# 单本抓取
# ---------------------------------------------------------------------------

class BookJob:
    def __init__(self, client: Client, brief: dict, out_root: Path):
        self.c = client
        self.brief = brief
        self.bid = brief["book_id"]
        self.dir = STATE / self.bid
        self.out_root = out_root
        self.dir.mkdir(parents=True, exist_ok=True)

    # -- 文件 -------------------------------------------------------------
    def _p(self, name: str) -> Path:
        return self.dir / name

    def _read_json(self, name: str):
        p = self._p(name)
        if not p.exists():
            return None
        try:
            return json.loads(p.read_text(encoding="utf-8"))
        except Exception:
            return None

    def _write_json(self, name: str, obj):
        p = self._p(name)
        tmp = p.with_suffix(p.suffix + ".tmp")
        tmp.write_text(json.dumps(obj, ensure_ascii=False), encoding="utf-8")
        tmp.replace(p)

    # -- 元数据 -----------------------------------------------------------
    def detail(self) -> dict:
        got = self._read_json("detail.json")
        if got:
            return got
        d = self.c.get_json(f"/books/{self.bid}")
        data = d.get("data") or {}
        if not data:
            raise Permanent("empty detail")
        # 只保留需要的字段，避免几百 KB 的冗余字段进 state
        keep = {
            "book_id": str(data.get("book_id") or self.bid),
            "title": data.get("book_name") or self.brief["title"],
            "sub_title": data.get("sub_title") or "",
            "author": data.get("author") or self.brief["author"],
            "abstract": data.get("abstract") or data.get("book_abstract_v2") or self.brief["abstract"],
            "category": data.get("category") or self.brief["category"],
            "tags": data.get("tags") or "",
            "score": data.get("score") or "",
            "word_number": data.get("word_number") or "",
            "serial_count": data.get("serial_count") or "",
            "creation_status": str(data.get("creation_status") or ""),
            "publisher": data.get("publisher") or "",
            "press": data.get("press") or "",
            "published_date": data.get("published_date") or "",
            "last_chapter_update_time": data.get("last_chapter_update_time") or "",
            "read_count": data.get("read_count") or "",
            "add_bookshelf_count": data.get("add_bookshelf_count") or "",
            "thumb_url": data.get("thumb_url") or "",
            "expand_thumb_url": data.get("expand_thumb_url") or "",
            "original_book_name": data.get("original_book_name") or "",
            "roles": data.get("roles") or [],
            "cover_primary_color": data.get("cover_primary_color") or "",
        }
        self._write_json("detail.json", keep)
        return keep

    def toc(self) -> list[dict]:
        got = self._read_json("toc.json")
        if got:
            return got
        d = self.c.get_json(f"/books/{self.bid}/directory")
        data = d.get("data") or {}
        items = data.get("item_data_list") or []
        if not items:
            raise Permanent("empty toc")
        out = []
        for it in items:
            out.append({
                "item_id": str(it.get("item_id") or ""),
                "title": (it.get("title") or "").strip(),
                "volume": (it.get("volume_name") or "").strip(),
                "words": it.get("chapter_word_number") or it.get("word_number") or 0,
            })
        self._write_json("toc.json", out)
        return out

    # -- 正文 -------------------------------------------------------------
    def fetch_body(self, toc: list[dict]) -> dict:
        """返回 {item_id: paras[]}，已缓存则直接用。"""
        cache = self._p("body.json.gz")
        if cache.exists():
            try:
                with gzip.open(cache, "rb") as f:
                    body = json.loads(f.read().decode("utf-8"))
                if all(t["item_id"] in body for t in toc):
                    return body
            except Exception:
                pass

        body: dict[str, list[str]] = {}
        chunks = [toc[i:i + CHUNK] for i in range(0, len(toc), CHUNK)]
        budget = float(os.environ.get("FQ_BOOK_BUDGET", "300"))
        t_start = time.time()

        for ci, chunk in enumerate(chunks):
            if time.time() - t_start > budget:
                log(f"    ! {self.brief['title'][:14]} 超出单本预算，跳过剩余 {len(chunks) - ci} 批")
                break
            ids = [t["item_id"] for t in chunk if t["item_id"]]
            try:
                got = self._full(ids)
            except Exception:
                got = {}
            for t in chunk:
                if t["item_id"] in got and got[t["item_id"]]:
                    body[t["item_id"]] = got[t["item_id"]]
            # 回退：逐章 HTML
            miss = [t for t in chunk if t["item_id"] not in body]
            for t in miss:
                try:
                    d = self.c.get_json(f"/chapters/{t['item_id']}",
                                        timeout=(8, 25), retries=2)
                    content = ((d.get("data") or {}).get("content") or "")
                    paras = plain_to_paras(content)
                    if paras and paras != ["Invalid"]:
                        body[t["item_id"]] = paras
                except Exception:
                    pass
            pct = int((ci + 1) / len(chunks) * 100)
            if len(chunks) > 3 and pct not in (25, 50, 75, 100):
                continue
            log(f"    · {self.brief['title'][:14]:<14} {pct:>3}%  "
                f"{len(body)}/{len(toc)} 章")

        if not body:
            raise Transient("no chapter content")
        if len(body) < len(toc) * 0.5:
            raise Transient(f"章节覆盖率过低 {len(body)}/{len(toc)}")

        tmp = self._p("body.json.gz.tmp")
        with gzip.open(tmp, "wb", compresslevel=5) as f:
            f.write(json.dumps(body, ensure_ascii=False).encode("utf-8"))
        tmp.replace(cache)
        return body

    def _full(self, ids: list[str]) -> dict[str, list[str]]:
        """调 /chapters/full 批量解密；失败则二分递归。"""
        if not ids:
            return {}
        try:
            d = self.c.get_json("/chapters/full",
                                {"book_id": self.bid, "item_ids": ",".join(ids)},
                                timeout=(10, 240))
        except Transient:
            if len(ids) == 1:
                return {}
            mid = len(ids) // 2
            out = self._full(ids[:mid])
            out.update(self._full(ids[mid:]))
            return out
        infos = ((d.get("data") or {}).get("item_infos")) or {}
        out = {}
        for k, v in infos.items():
            if not isinstance(v, dict):
                continue
            if v.get("code") not in (0, None):
                continue
            pts = plain_to_paras(v.get("content") or "")
            if pts:
                out[str(k)] = pts
        missing = [i for i in ids if i not in out]
        if missing and len(ids) > 1:
            mid = len(missing) // 2
            out.update(self._full(missing[:mid]))
            out.update(self._full(missing[mid:]))
        return out

    # -- 封面 -------------------------------------------------------------
    def cover(self) -> bytes | None:
        for name in ("cover.img",):
            p = self._p(name)
            if p.exists() and p.stat().st_size > 800:
                return p.read_bytes()
        det = self.detail()
        url = det.get("expand_thumb_url") or det.get("thumb_url") or ""
        if not url:
            return None
        try:
            data = self.c.get_bytes(url)
        except Exception:
            return None
        if len(data) < 800:
            return None
        (self._p("cover.img")).write_bytes(data)
        return data

    # -- 入口 -------------------------------------------------------------
    def run(self) -> dict:
        st = self._read_json("status.json") or {}
        if st.get("state") == "packed":
            ep = st.get("epub") or ""
            # 产物被删/被截断/落在别的输出目录时都不能算完成
            try:
                inside = bool(ep) and Path(ep).resolve().is_relative_to(self.out_root.resolve())
            except AttributeError:
                inside = bool(ep) and str(Path(ep).resolve()).startswith(str(self.out_root.resolve()))
            if inside and Path(ep).exists() and Path(ep).stat().st_size > 2048:
                return {"book_id": self.bid, "title": st.get("title", ""), "skipped": True}

        det = self.detail()
        toc = self.toc()
        if det.get("creation_status") not in ("0", 0, "4"):
            # 详情里的状态与搜索不完全一致，这里只做记录，不拦
            pass
        body = self.fetch_body(toc)

        chapters = []
        missing = []
        for t in toc:
            paras = body.get(t["item_id"]) or []
            if not paras:
                missing.append(t["title"])
                continue
            chapters.append({"title": t["title"], "paras": paras,
                             "volume": t.get("volume") or ""})

        book = dict(det)
        book["book_id"] = self.bid
        book["chapters"] = chapters
        book["source_url"] = f"https://fanqienovel.com/page/{self.bid}"
        book["missing"] = missing

        st = {
            "state": "fetched",
            "title": book["title"],
            "author": book["author"],
            "chapters": len(chapters),
            "missing": len(missing),
            "fetched_at": time.time(),
        }
        self._write_json("status.json", st)
        return {"book_id": self.bid, "title": book["title"], "skipped": False,
                "chapters": len(chapters), "missing": len(missing), "book": book}


# ---------------------------------------------------------------------------
# 打包
# ---------------------------------------------------------------------------

def safe_cat(cat: str) -> str:
    c = re.sub(r'[\\/:*?"<>|\r\n\t]+', " ", cat or "").strip()
    return c or "未分类"


def pack_book(job: BookJob, out_root: Path, want_txt: bool = True) -> dict:
    det = job.detail()
    toc = job.toc()
    book = dict(det)
    book["book_id"] = job.bid
    book["source_url"] = f"https://fanqienovel.com/page/{job.bid}"

    cache = job._p("body.json.gz")
    if not cache.exists():
        raise Permanent("body missing")
    with gzip.open(cache, "rb") as f:
        body = json.loads(f.read().decode("utf-8"))

    chapters = []
    missing = 0
    for t in toc:
        paras = body.get(t["item_id"]) or []
        if not paras:
            missing += 1
            continue
        chapters.append({"title": t["title"], "paras": paras, "volume": t.get("volume") or ""})
    if not chapters:
        raise Permanent("no chapters")
    book["chapters"] = chapters

    cat = safe_cat(det.get("category") or "")
    base = slug_filename(det.get("title") or "", det.get("author") or "")
    d = out_root / cat
    d.mkdir(parents=True, exist_ok=True)

    cover = job.cover()
    epub_path = d / f"{base}.epub"
    txt_path = d / f"{base}.txt" if want_txt else None
    info = build(book, epub_path, cover_bytes=cover, txt_path=txt_path)

    chars = sum(len("".join(c["paras"])) for c in chapters)
    job._write_json("status.json", {
        "state": "packed", "title": det.get("title"), "author": det.get("author"),
        "chars": chars,
        "chapters": len(chapters), "missing": missing, "packed_at": time.time(),
        "epub": str(epub_path), "epub_size": info["size"],
        "category": cat, "cover": info["cover"],
        "words": det.get("word_number") or 0, "score": det.get("score") or "",
    })
    return {"book_id": job.bid, "title": det.get("title"), "author": det.get("author"),
            "category": cat, "chapters": len(chapters), "missing": missing,
            "epub": str(epub_path), "txt": str(txt_path) if txt_path else "",
            "size": info["size"], "cover": info["cover"], "chars": chars,
            "words": det.get("word_number") or 0, "score": det.get("score") or "",
            "status": det.get("creation_status")}


# ---------------------------------------------------------------------------
# 目录 / 报告
# ---------------------------------------------------------------------------

def _words(n: int) -> str:
    if not n:
        return "—"
    if n >= 100000000:
        return f"{n / 100000000:.2f} 亿字"
    return f"{n / 10000:.0f} 万字"


def write_catalog(rows: list[dict], out_root: Path):
    out_root.mkdir(parents=True, exist_ok=True)
    rows = sorted(rows, key=lambda r: (r.get("category") or "", r.get("title") or ""))
    (out_root / "catalog.json").write_text(
        json.dumps(rows, ensure_ascii=False, indent=1), encoding="utf-8")

    with open(out_root / "catalog.csv", "w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f)
        w.writerow(["书名", "作者", "分类", "评分", "章节", "缺章", "字数", "EPUB", "大小"])
        for r in rows:
            w.writerow([r.get("title"), r.get("author"), r.get("category"), r.get("score"),
                        r.get("chapters"), r.get("missing"), r.get("words"),
                        os.path.relpath(r["epub"], out_root) if r.get("epub") else "",
                        human(r.get("size") or 0)])

    by_cat: dict[str, int] = {}
    for r in rows:
        by_cat[r.get("category") or "未分类"] = by_cat.get(r.get("category") or "未分类", 0) + 1
    total_size = sum(r.get("size") or 0 for r in rows)
    total_ch = sum(r.get("chapters") or 0 for r in rows)
    total_miss = sum(r.get("missing") or 0 for r in rows)
    total_chars = sum(r.get("chars") or 0 for r in rows)
    txt_size = 0
    for r in rows:
        t = r.get("txt") or ""
        if not t and r.get("epub"):
            t = str(Path(r["epub"]).with_suffix(".txt"))
        if t and os.path.exists(t):
            txt_size += os.path.getsize(t)

    md = ["# 书目索引", "",
          f"- 共 **{len(rows)}** 本完结书，**{total_ch:,}** 章，正文约 **{_words(total_chars)}**",
          f"- EPUB **{human(total_size)}**" + (f"，TXT **{human(txt_size)}**" if txt_size else ""),
          f"- 单本平均 **{human(total_size // max(len(rows), 1))}**，最大 **{human(max((r.get('size') or 0) for r in rows))}**",
          f"- 缺章 {total_miss} 章（多为平台锁章/付费章，仅 {sum(1 for r in rows if r.get('missing'))} 本受影响）",
          f"- 生成时间 {datetime.now().strftime('%Y-%m-%d %H:%M')}", "",
          "> 每本 EPUB 都写入了完整元数据：书名/副标题/作者/分类/全部标签/评分/字数/章节数/",
          "> 连载状态/在读/收藏/首发与更新日期/角色/完整简介/来源编号，并内嵌原始封面。",
          "> 书名页把这些信息排成表格，方便不开书就能看到评分和简介。", "",
          "| # | 书名 | 作者 | 分类 | 评分 | 章节 |", "| --- | --- | --- | --- | --- | --- |"]
    for i, r in enumerate(rows, 1):
        sc = r.get("score") or ""
        try:
            sc = f"{float(sc):.1f}" if sc and float(sc) > 0 else "—"
        except (TypeError, ValueError):
            sc = "—"
        md.append(f"| {i} | {r.get('title')} | {r.get('author')} | {r.get('category')} | {sc} | {r.get('chapters')} |")

    miss_rows = [r for r in rows if r.get("missing")]
    if miss_rows:
        md += ["", "## 缺章明细", ""]
        for r in miss_rows:
            md.append(f"- 《{r.get('title')}》缺 {r.get('missing')} 章（共 {r.get('chapters')} 章）")

    md += ["", "## 分类分布", ""]
    for k, v in sorted(by_cat.items(), key=lambda x: -x[1]):
        md.append(f"- {k}：{v} 本")
    (out_root / "索引.md").write_text("\n".join(md) + "\n", encoding="utf-8")


# ---------------------------------------------------------------------------
# 命令
# ---------------------------------------------------------------------------

def cmd_discover(args):
    c = Client()
    lst = discover(c, args.want)
    (STATE / "candidates.json").write_text(
        json.dumps(lst, ensure_ascii=False, indent=1), encoding="utf-8")
    log(f"已写入 {STATE / 'candidates.json'}（{len(lst)} 本完结）")


def load_candidates() -> list[dict]:
    p = STATE / "candidates.json"
    if not p.exists():
        return []
    return json.loads(p.read_text(encoding="utf-8"))


def run_jobs(items: list[dict], out_root: Path, workers: int, do_pack: bool):
    c = Client(workers=workers)
    total = len(items)
    done = 0
    failed: list[dict] = []
    t0 = time.time()
    rows: list[dict] = []

    PROG.update(phase="grab+pack" if do_pack else "grab", total=total, done=0, failed=0,
                started_at=t0)

    def work(brief):
        job = BookJob(c, brief, out_root)
        r = job.run()
        if do_pack and not r.get("skipped"):
            packed = pack_book(job, out_root, want_txt=True)
            packed["missing"] = r.get("missing", 0)
            return packed
        if r.get("skipped"):
            st = job._read_json("status.json") or {}
            det = job._read_json("detail.json") or {}
            return {"book_id": r["book_id"], "title": st.get("title") or det.get("title", ""),
                    "chars": st.get("chars", 0),
                    "author": st.get("author") or det.get("author", ""),
                    "category": st.get("category") or det.get("category", ""),
                    "chapters": st.get("chapters", 0), "missing": st.get("missing", 0),
                    "epub": st.get("epub", ""), "size": st.get("epub_size", 0),
                    "words": det.get("word_number") or 0, "score": det.get("score") or "",
                    "skipped": True}
        return r

    with cf.ThreadPoolExecutor(max_workers=workers) as ex:
        futs = {ex.submit(work, b): b for b in items}
        for fu in cf.as_completed(futs):
            b = futs[fu]
            done += 1
            try:
                r = fu.result()
                rows.append(r)
                miss = r.get("missing") or 0
                flags = []
                if miss:
                    flags.append(f"缺{miss}章")
                ch = r.get("chars") or 0
                wn = 0
                try:
                    wn = int(float(r.get("words") or 0))
                except (TypeError, ValueError):
                    wn = 0
                if wn and ch < wn * 0.93:
                    flags.append(f"字数{ch * 100 // wn}%")
                tag = " ".join(flags) if flags else "OK"
                log(f"[{done}/{total}] ✓ {r.get('title','')[:22]:<22} "
                    f"{r.get('chapters',0):>4}章 {human(r.get('size') or 0):>8}  {tag}")
                PROG.add_log(f"✓ {r.get('title','')} · {r.get('chapters',0)}章")
            except Exception as e:  # noqa: BLE001
                failed.append({"book_id": b["book_id"], "title": b.get("title", ""),
                               "error": f"{type(e).__name__}: {e}"})
                log(f"[{done}/{total}] ✗ {b.get('title','')[:22]:<22} {type(e).__name__}: {str(e)[:80]}")
                PROG.add_log(f"✗ {b.get('title','')} · {e}")
            el = time.time() - t0
            rate = done / el if el else 0
            eta = (total - done) / rate if rate else 0
            PROG.update(done=done, failed=len(failed),
                        current=b.get("title", ""),
                        rate=round(rate * 60, 1), eta_s=int(eta))
            if done % 5 == 0 or done == total:
                log(f"    {bar(done, total)} {done}/{total}  "
                    f"{rate * 60:.1f} 本/分  剩余 {eta / 60:.1f} 分")

    (STATE / "failed.json").write_text(json.dumps(failed, ensure_ascii=False, indent=1),
                                       encoding="utf-8")
    if rows:
        prev = {}
        cp = out_root / "catalog.json"
        if cp.exists():
            try:
                prev = {r["book_id"]: r for r in json.loads(cp.read_text(encoding="utf-8"))}
            except Exception:
                prev = {}
        for r in rows:
            prev[r["book_id"]] = r
        write_catalog(list(prev.values()), out_root)

    log("")
    log(f"完成 {len(rows)} 本，失败 {len(failed)} 本，用时 {(time.time() - t0) / 60:.1f} 分")
    PROG.update(phase="done", done=done, failed=len(failed))


def cmd_all(args):
    out_root = Path(args.out)
    out_root.mkdir(parents=True, exist_ok=True)
    items = load_candidates()
    if not items:
        log("· 没有候选，先执行 discover")
        c = Client()
        items = discover(c, args.want)
        (STATE / "candidates.json").write_text(
            json.dumps(items, ensure_ascii=False, indent=1), encoding="utf-8")
    if args.start:
        items = items[args.start:]
    if args.limit:
        items = items[:args.limit]
    log(f"· 目标 {len(items)} 本 → {out_root}")
    run_jobs(items, out_root, args.workers, do_pack=not args.no_pack)


def cmd_grab(args):
    items = load_candidates()
    if not items:
        raise SystemExit("先跑 discover")
    if args.limit:
        items = items[:args.limit]
    run_jobs(items, Path(args.out), args.workers, do_pack=False)


def cmd_pack(args):
    out_root = Path(args.out)
    rows = []
    dirs = [d for d in STATE.iterdir() if d.is_dir() and (d / "status.json").exists()]
    for d in dirs:
        st = json.loads((d / "status.json").read_text(encoding="utf-8"))
        if st.get("state") != "fetched":
            continue
        job = BookJob(Client(), {"book_id": d.name, "title": st.get("title", "")}, out_root)
        try:
            rows.append(pack_book(job, out_root))
            log(f"✓ {st.get('title')}")
        except Exception as e:  # noqa: BLE001
            log(f"✗ {st.get('title')}: {e}")
    if rows:
        write_catalog(rows, out_root)


def cmd_status(args):
    cp = STATE / "progress.json"
    if not cp.exists():
        print("暂无进度")
        return
    d = json.loads(cp.read_text(encoding="utf-8"))
    print(f"阶段 {d.get('phase')}  {d.get('done')}/{d.get('total')}  失败 {d.get('failed')}")
    print(bar(d.get("done", 0), d.get("total", 0)))
    for line in (d.get("log") or [])[-10:]:
        print("  ", line)


def main():
    ap = argparse.ArgumentParser(prog="fqdl", description="番茄小说批量抓取与打包")
    sub = ap.add_subparsers(dest="cmd", required=True)

    def common(p):
        p.add_argument("--out", default="/workspace/novels")
        p.add_argument("--workers", type=int, default=BOOK_WORKERS)

    p = sub.add_parser("discover", help="搜索并筛选完结书")
    p.add_argument("--want", type=int, default=250)
    p.set_defaults(func=cmd_discover)

    p = sub.add_parser("grab", help="下载正文与封面")
    common(p)
    p.add_argument("--limit", type=int, default=0)
    p.set_defaults(func=cmd_grab)

    p = sub.add_parser("pack", help="打包 EPUB/TXT")
    common(p)
    p.set_defaults(func=cmd_pack)

    p = sub.add_parser("all", help="一条龙")
    common(p)
    p.add_argument("--want", type=int, default=250)
    p.add_argument("--limit", type=int, default=0)
    p.add_argument("--start", type=int, default=0, help="从候选列表第 N 本开始（补漏用）")
    p.add_argument("--no-pack", action="store_true")
    p.set_defaults(func=cmd_all)

    p = sub.add_parser("status", help="查看进度")
    p.set_defaults(func=cmd_status)

    args = ap.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
