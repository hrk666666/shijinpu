#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""EPUB 3 打包器：把抓取结果写成带完整元数据 + 内嵌封面的电子书。

元数据覆盖：书名/副标题/作者/角色/简介(全文)/分类/标签/评分/评分人数/
字数/章节数/连载状态/出版社/出版日期/最后更新/来源/版权/语言/唯一标识。

用法（被 fqdl.py 调用）：
    build(book_dict, out_epub_path, out_txt_path, cover_bytes=None)
"""

from __future__ import annotations

import ast
import datetime as _dt
import html
import re
import uuid
import zipfile
from pathlib import Path

__all__ = ["build", "build_txt", "slug_filename"]

_NS = "https://fqnovel.local/ns#"


def E(s) -> str:
    """XML/HTML 文本转义（保留中文，转义 & < > " '）。"""
    return html.escape("" if s is None else str(s), quote=True)


def _clean(s) -> str:
    """去掉控制字符、压缩空行，避免 XHTML 非法字符。"""
    if not s:
        return ""
    t = "".join(ch for ch in str(s) if ch >= " " or ch in "\t\n")
    t = t.replace("\u3000", " ")
    t = re.sub(r"[ \t]+", " ", t)
    t = re.sub(r"\n{3,}", "\n\n", t)
    return t.strip()


def slug_filename(title: str, author: str = "", limit: int = 80) -> str:
    """生成安全的文件名：保留中文，去掉路径分隔符与非法字符。"""
    t = re.sub(r'[\\/:*?"<>|\r\n\t]+', " ", title or "").strip()
    t = re.sub(r"\s{2,}", " ", t)
    a = re.sub(r'[\\/:*?"<>|\r\n\t]+', " ", author or "").strip()
    if a and a not in ("佚名", "未知"):
        base = f"{t}（{a}）"
    else:
        base = t
    return base[:limit] or "未命名"


# --------------------------------------------------------------------------
# 样式
# --------------------------------------------------------------------------

CSS = """@charset "utf-8";

html { font-size: 100%; }
body {
  font-family: "Noto Serif SC", "Source Han Serif SC", "Songti SC", "STSong", "SimSun", serif;
  line-height: 1.78;
  margin: 0 0.6em;
  color: #1f1c18;
  background: #fdfbf7;
  -webkit-hyphens: auto;
  hyphens: auto;
}

/* ---------- 封面页 ---------- */
.cover-page { margin: 0; padding: 0; text-align: center; }
.cover-page img { max-width: 100%; max-height: 100%; }

/* ---------- 书名页 / 版权页 ---------- */
.titlepage { padding: 1.2em 0.4em; }
.titlepage .cover-thumb {
  display: block; margin: 0 auto 1.4em; width: 46%; max-width: 220px;
  border-radius: 4px; box-shadow: 0 6px 18px rgba(0,0,0,.22);
}
.titlepage h1 {
  font-size: 1.6em; line-height: 1.35; text-align: center;
  margin: 0 0 .5em; letter-spacing: .02em;
}
.titlepage .subtitle {
  text-align: center; font-size: .92em; color: #6b6259; margin: -.2em 0 1.6em;
}
.titlepage .byline { text-align: center; font-size: 1em; color: #3d372f; margin: 0 0 1.6em; }

.facts { margin: 0 auto 1.6em; width: 100%; border-collapse: collapse; font-size: .86em; }
.facts th, .facts td { padding: .42em .3em; vertical-align: top; text-align: left; }
.facts th { width: 5.4em; color: #7a7168; font-weight: normal; white-space: nowrap; }
.facts tr + tr th, .facts tr + tr td { border-top: 1px solid #e8e1d7; }

.section-title {
  font-size: 1.02em; font-weight: bold; margin: 2em 0 .8em;
  padding-left: .55em; border-left: 3px solid #b4532a; line-height: 1.3;
}
.intro p { text-indent: 2em; margin: .6em 0; color: #322c25; font-size: .95em; }
.tags { margin: .2em 0 0; padding: 0; list-style: none; font-size: .84em; }
.tags li {
  display: inline-block; margin: 0 .4em .45em 0; padding: .16em .62em;
  border: 1px solid #d8cec1; border-radius: 999px; color: #6b6259;
}
.colophon { margin-top: 2.4em; font-size: .78em; color: #8a8177; line-height: 1.7; }
.colophon p { text-indent: 0; margin: .25em 0; }

/* ---------- 正文 ---------- */
.chapter { padding-top: .4em; }
h2.chapter-title {
  font-size: 1.22em; line-height: 1.45; text-align: center;
  margin: 1.1em 0 1.5em; font-weight: bold; letter-spacing: .02em;
}
h2.chapter-title .num { display: block; font-size: .62em; color: #9a9086; font-weight: normal; margin-bottom: .35em; }
p { text-indent: 2em; margin: .52em 0; text-align: justify; }
p.first { text-indent: 2em; }

.volume {
  text-align: center; font-size: 1.02em; color: #8a8177;
  margin: 2.2em 0 1.2em; letter-spacing: .3em;
}

/* ---------- 目录页 ---------- */
.toc h2 { text-align: center; font-size: 1.3em; margin: 1.2em 0 1.4em; }
.toc ol { list-style: none; margin: 0; padding: 0; font-size: .92em; }
.toc li { margin: 0; padding: .34em 0; border-bottom: 1px dotted #e4dccf; }
.toc li a { color: #2b2620; text-decoration: none; }
.toc li .v { color: #9a9086; font-size: .86em; }

/* ---------- 深色阅读器 ---------- */
@media (prefers-color-scheme: dark) {
  body { background: #14120f; color: #cfc7ba; }
  .intro p { color: #bdb4a7; }
  .facts th, .titlepage .subtitle, .colophon { color: #8b8377; }
  .toc li a { color: #ddd5c8; }
  .toc li { border-bottom-color: #2a2620; }
}
"""


def _xhtml(title: str, body: str, css_href: str = "../style.css", cls: str = "") -> str:
    return (
        '<?xml version="1.0" encoding="utf-8"?>\n'
        "<!DOCTYPE html>\n"
        '<html xmlns="http://www.w3.org/1999/xhtml" '
        'xmlns:epub="http://www.idpf.org/2007/ops" '
        'xml:lang="zh-CN" lang="zh-CN">\n'
        "<head>\n"
        '  <meta charset="utf-8"/>\n'
        f"  <title>{E(title)}</title>\n"
        f'  <link rel="stylesheet" type="text/css" href="{css_href}"/>\n'
        "</head>\n"
        f'<body class="{cls}">\n{body}\n</body>\n</html>\n'
    )


# --------------------------------------------------------------------------
# 元数据
# --------------------------------------------------------------------------

_STATUS = {"0": "已完结", "1": "连载中", "4": "连载中", "2": "已下架"}


def _iso(ts) -> str:
    """秒级时间戳 → ISO8601（UTC）。"""
    try:
        ts = int(ts)
    except (TypeError, ValueError):
        return ""
    if ts <= 0:
        return ""
    return _dt.datetime.fromtimestamp(ts, _dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def _date_only(ts) -> str:
    s = _iso(ts)
    return s[:10] if s else ""


def _fmt_words(n) -> str:
    try:
        n = int(float(n))
    except (TypeError, ValueError):
        return ""
    if n >= 10000:
        return f"{n / 10000:.1f} 万字".replace(".0 万", " 万")
    return f"{n} 字"


def _fmt_count(n) -> str:
    try:
        n = int(float(n))
    except (TypeError, ValueError):
        return ""
    if n >= 100000000:
        return f"{n / 100000000:.1f} 亿"
    if n >= 10000:
        return f"{n / 10000:.1f} 万"
    return str(n)


def _roles(v) -> list[str]:
    """roles 可能是 list、JSON 字符串或逗号串，统一成字符串列表。"""
    if not v:
        return []
    if isinstance(v, str):
        t = v.strip()
        if t.startswith("[") and t.endswith("]"):
            try:
                v = ast.literal_eval(t)
            except Exception:
                v = [x for x in re.split(r"[,、\s]+", t.strip("[]")) if x]
        else:
            v = [x for x in re.split(r"[,、]+", t) if x]
    if not isinstance(v, (list, tuple, set)):
        v = [v]
    out = []
    for r in v:
        if isinstance(r, dict):
            r = r.get("name") or r.get("role_name") or r.get("RoleName") or ""
        r = str(r).strip().strip("'\"")
        if r and r not in out:
            out.append(r)
    return out


def _score(v):
    try:
        f = float(v)
    except (TypeError, ValueError):
        return None
    if f <= 0:
        return None
    # 上游可能存在 0–100 或 0–10 两种刻度
    return round(f / 10, 1) if f > 10 else round(f, 1)


def meta_block(b: dict) -> dict:
    """把内部 book dict 规整成可直接用于 OPF / 书名页的字段表。"""
    tags = [t.strip() for t in (b.get("tags") or "").split(",") if t.strip()]
    cat = (b.get("category") or "").strip()
    score = _score(b.get("score"))
    status = _STATUS.get(str(b.get("creation_status")), b.get("status_text") or "")
    return {
        "id": str(b.get("book_id") or ""),
        "title": (b.get("title") or "").strip() or "未命名",
        "subtitle": (b.get("sub_title") or "").strip(),
        "author": (b.get("author") or "").strip() or "佚名",
        "abstract": _clean((b.get("abstract") or "").strip()),
        "category": cat,
        "tags": tags,
        "score": score,
        "score_count": b.get("score_count") or "",
        "word_number": b.get("word_number") or "",
        "chapters": len(b.get("chapters") or []),
        "serial_count": b.get("serial_count") or "",
        "status": status,
        "publisher": (b.get("publisher") or b.get("press") or "").strip(),
        "published": _date_only(b.get("published_date")),
        "updated": _date_only(b.get("last_chapter_update_time")),
        "read_count": b.get("read_count") or "",
        "shelf_count": b.get("add_bookshelf_count") or "",
        "source": (b.get("source_url") or "").strip(),
        "original_name": (b.get("original_book_name") or "").strip(),
        "roles": _roles(b.get("roles")),
    }


def _opf(m: dict, uid: str, cover_name: str | None, cover_mime: str, modified: str) -> str:
    subj = []
    if m["category"]:
        subj.append(m["category"])
    for t in m["tags"]:
        if t != m["category"]:
            subj.append(t)

    L = []
    A = L.append
    A('<?xml version="1.0" encoding="utf-8"?>')
    A("<package xmlns=\"http://www.idpf.org/2007/opf\" version=\"3.0\" "
      f'unique-identifier="bookid" xml:lang="zh-CN" '
      f'prefix="schema: http://schema.org/ fq: {_NS}">')
    A('  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" '
      'xmlns:opf="http://www.idpf.org/2007/opf">')
    A(f'    <dc:identifier id="bookid">{E(uid)}</dc:identifier>')
    if m["id"]:
        A(f'    <dc:identifier id="source-id">fanqie:{E(m["id"])}</dc:identifier>')
    A(f'    <dc:title id="main-title">{E(m["title"])}</dc:title>')
    A('    <meta refines="#main-title" property="title-type">main</meta>')
    A('    <meta refines="#main-title" property="display-seq">1</meta>')
    if m["subtitle"]:
        A(f'    <dc:title id="sub-title">{E(m["subtitle"])}</dc:title>')
        A('    <meta refines="#sub-title" property="title-type">subtitle</meta>')
    A(f'    <dc:creator id="creator">{E(m["author"])}</dc:creator>')
    A('    <meta refines="#creator" property="role" scheme="marc:relators">aut</meta>')
    A(f'    <meta refines="#creator" property="file-as">{E(m["author"])}</meta>')
    A('    <dc:language>zh-CN</dc:language>')
    A('    <dc:contributor id="platform">番茄小说</dc:contributor>')
    A('    <meta refines="#platform" property="role" scheme="marc:relators">pbl</meta>')
    if m["abstract"]:
        A(f'    <dc:description>{E(m["abstract"])}</dc:description>')
    if m["publisher"]:
        A(f'    <dc:publisher>{E(m["publisher"])}</dc:publisher>')
    if m["published"]:
        A(f'    <dc:date>{E(m["published"])}</dc:date>')
    for s in subj:
        A(f'    <dc:subject>{E(s)}</dc:subject>')
    if m["source"]:
        A(f'    <dc:source>{E(m["source"])}</dc:source>')
    A("    <dc:rights>仅供个人阅读存档，版权归原作者及原平台所有。</dc:rights>")
    A(f'    <meta property="dcterms:modified">{E(modified)}</meta>')
    A('    <meta property="rendition:layout">reflowable</meta>')
    A('    <meta property="rendition:flow">scrolled-doc</meta>')

    # 结构化扩展（schema.org / 自定义命名空间），阅读器会忽略，工具链可读
    if m["score"] is not None:
        A(f'    <meta property="schema:ratingValue">{m["score"]}</meta>')
        A('    <meta property="schema:ratingBestRating">10</meta>')
        A('    <meta property="schema:ratingWorstRating">0</meta>')
    if m["score_count"]:
        A(f'    <meta property="schema:ratingCount">{E(m["score_count"])}</meta>')
    if m["word_number"]:
        A(f'    <meta property="schema:wordCount">{E(m["word_number"])}</meta>')
    A(f'    <meta property="schema:numberOfPages">{m["chapters"]}</meta>')
    if m["status"]:
        A(f'    <meta property="fq:serialStatus">{E(m["status"])}</meta>')
    if m["updated"]:
        A(f'    <meta property="fq:lastUpdated">{E(m["updated"])}</meta>')
    if m["read_count"]:
        A(f'    <meta property="fq:readCount">{E(m["read_count"])}</meta>')
    if m["shelf_count"]:
        A(f'    <meta property="fq:shelfCount">{E(m["shelf_count"])}</meta>')
    if m["category"]:
        A(f'    <meta property="belongs-to-collection" id="col">{E(m["category"])}</meta>')
        A('    <meta refines="#col" property="collection-type">set</meta>')
    if cover_name:
        # EPUB2 兼容：老阅读器只认这个
        A('    <meta name="cover" content="cover-image"/>')
    A("  </metadata>")

    A("  <manifest>")
    A('    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>')
    A('    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>')
    A('    <item id="css" href="style.css" media-type="text/css"/>')
    A('    <item id="titlepage" href="text/titlepage.xhtml" media-type="application/xhtml+xml"/>')
    A('    <item id="tocpage" href="text/toc.xhtml" media-type="application/xhtml+xml"/>')
    if cover_name:
        A(f'    <item id="cover-image" href="images/{cover_name}" '
          f'media-type="{cover_mime}" properties="cover-image"/>')
        A('    <item id="coverpage" href="text/cover.xhtml" media-type="application/xhtml+xml"/>')
    A("__CHAPTER_MANIFEST__")
    A("  </manifest>")

    A('  <spine toc="ncx">')
    if cover_name:
        A('    <itemref idref="coverpage" linear="no"/>')
    A('    <itemref idref="titlepage"/>')
    A('    <itemref idref="tocpage"/>')
    A("__CHAPTER_SPINE__")
    A("  </spine>")
    A("</package>")
    return "\n".join(L)


# --------------------------------------------------------------------------
# 页面
# --------------------------------------------------------------------------


def _cover_page(m: dict, cover_name: str) -> str:
    body = ('<div class="cover-page">'
            f'<img src="../images/{cover_name}" alt="{E(m["title"])}"/></div>')
    return _xhtml("封面", body, cls="cover")


def _titlepage(m: dict, cover_name: str | None) -> str:
    rows = []
    if m["category"]:
        rows.append(("分类", m["category"]))
    if m["status"]:
        rows.append(("状态", m["status"]))
    if m["score"] is not None:
        sc = f"{m['score']} / 10"
        if m["score_count"]:
            sc += f"（{_fmt_count(m['score_count'])} 人评分）"
        rows.append(("评分", sc))
    if m["word_number"]:
        rows.append(("字数", _fmt_words(m["word_number"])))
    if m["chapters"]:
        extra = f"（连载至 {m['serial_count']} 章）" if m["serial_count"] and str(m["serial_count"]) != str(m["chapters"]) else ""
        rows.append(("章节", f"{m['chapters']} 章{extra}"))
    if m["read_count"] and str(m["read_count"]) not in ("0", "0.0"):
        rows.append(("在读", f"{_fmt_count(m['read_count'])} 人"))
    if m["shelf_count"] and str(m["shelf_count"]) not in ("0", "0.0"):
        rows.append(("收藏", f"{_fmt_count(m['shelf_count'])} 人"))
    if m["publisher"]:
        rows.append(("出版", m["publisher"]))
    if m["published"]:
        rows.append(("首发", m["published"]))
    if m["updated"]:
        rows.append(("更新", m["updated"]))
    if m["original_name"] and m["original_name"] != m["title"]:
        rows.append(("原名", m["original_name"]))
    if m["roles"]:
        rows.append(("角色", "、".join(m["roles"][:8])))

    parts = ['<div class="titlepage">']
    if cover_name:
        parts.append(f'<img class="cover-thumb" src="../images/{cover_name}" alt="{E(m["title"])}"/>')
    parts.append(f'<h1>{E(m["title"])}</h1>')
    if m["subtitle"]:
        parts.append(f'<div class="subtitle">{E(m["subtitle"])}</div>')
    parts.append(f'<div class="byline">{E(m["author"])} 著</div>')

    if rows:
        parts.append('<table class="facts">')
        for k, v in rows:
            parts.append(f"<tr><th>{E(k)}</th><td>{E(v)}</td></tr>")
        parts.append("</table>")

    if m["tags"]:
        parts.append('<div class="section-title">标签</div><ul class="tags">')
        for t in m["tags"]:
            parts.append(f"<li>{E(t)}</li>")
        parts.append("</ul>")

    if m["abstract"]:
        parts.append('<div class="section-title">内容简介</div><div class="intro">')
        for para in re.split(r"\n+", m["abstract"]):
            para = para.replace("\u3000", " ").strip()
            if para:
                parts.append(f"<p>{E(para)}</p>")
        parts.append("</div>")

    parts.append('<div class="colophon">')
    parts.append("<p>本电子书由抓取工具自动汇编，仅作个人阅读存档。</p>")
    if m["id"]:
        parts.append(f"<p>作品编号：{E(m['id'])}</p>")
    if m["source"]:
        parts.append(f"<p>来源：{E(m['source'])}</p>")
    parts.append("<p>正文、简介、评分、标签等著作权归原作者及原平台所有，请勿用于商业用途。</p>")
    parts.append("</div></div>")
    return _xhtml(m["title"], "\n".join(parts), cls="titlepage-body")


def _toc_page(chapters: list) -> str:
    items = []
    for i, c in enumerate(chapters, 1):
        items.append(f'<li><a href="ch{i:05d}.xhtml">{E(c["title"])}</a></li>')
    body = ('<div class="toc"><h2>目录</h2><ol>' + "".join(items) + "</ol></div>")
    return _xhtml("目录", body, cls="toc-page")


def _chapter_page(c: dict, vol_head: str = "") -> str:
    title = c["title"]
    num = ""
    rest = title
    mt = re.match(r"^第\s*([0-9０-９零一二三四五六七八九十百千万]+)\s*[章节回卷]\s*[：:.、]?\s*(.*)$", title)
    if mt and mt.group(2).strip():
        num = f"第 {mt.group(1)} 章"
        rest = mt.group(2).strip()
    head = '<h2 class="chapter-title">'
    if num:
        head += f'<span class="num">{E(num)}</span>'
    head += f"{E(rest)}</h2>"
    ps = "".join(f"<p>{E(p)}</p>" for p in c.get("paras") or [])
    body = f'<div class="chapter">{head}{ps}</div>'
    return _xhtml(title, body)


def _nav(m: dict, chapters: list, cover_name: str | None = None) -> str:
    L = ['<?xml version="1.0" encoding="utf-8"?>', "<!DOCTYPE html>",
         '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" '
         'xml:lang="zh-CN" lang="zh-CN">',
         "<head><meta charset=\"utf-8\"/><title>目录</title>",
         '<link rel="stylesheet" type="text/css" href="style.css"/></head>', "<body>",
         '  <nav epub:type="toc" id="toc"><h1>目录</h1><ol>',
         '    <li><a href="text/titlepage.xhtml">书籍信息</a></li>']
    for i, c in enumerate(chapters, 1):
        L.append(f'    <li><a href="text/ch{i:05d}.xhtml">{E(c["title"])}</a></li>')
    L.append("  </ol></nav>")
    L.append('  <nav epub:type="landmarks" id="landmarks" hidden="hidden"><h2>导航</h2><ol>')
    if cover_name:
        L.append('    <li><a epub:type="cover" href="text/cover.xhtml">封面</a></li>')
    L.append('    <li><a epub:type="toc" href="text/toc.xhtml">目录</a></li>')
    L.append('    <li><a epub:type="bodymatter" href="text/ch00001.xhtml">正文</a></li>')
    L.append("  </ol></nav>")
    L.append("</body></html>")
    return "\n".join(L)


def _ncx(m: dict, uid: str, chapters: list) -> str:
    L = ['<?xml version="1.0" encoding="utf-8"?>',
         '<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1" xml:lang="zh-CN">',
         "  <head>",
         f'    <meta name="dtb:uid" content="{E(uid)}"/>',
         '    <meta name="dtb:depth" content="1"/>',
         '    <meta name="dtb:totalPageCount" content="0"/>',
         '    <meta name="dtb:maxPageNumber" content="0"/>',
         "  </head>",
         f"  <docTitle><text>{E(m['title'])}</text></docTitle>",
         f"  <docAuthor><text>{E(m['author'])}</text></docAuthor>",
         "  <navMap>"]
    order = 1
    L.append(f'    <navPoint id="np-title" playOrder="{order}">'
             f"<navLabel><text>书籍信息</text></navLabel>"
             f'<content src="text/titlepage.xhtml"/></navPoint>')
    for i, c in enumerate(chapters, 1):
        order += 1
        L.append(f'    <navPoint id="np{i}" playOrder="{order}">'
                 f"<navLabel><text>{E(c['title'])}</text></navLabel>"
                 f'<content src="text/ch{i:05d}.xhtml"/></navPoint>')
    L.append("  </navMap></ncx>")
    return "\n".join(L)


CONTAINER = ('<?xml version="1.0" encoding="utf-8"?>\n'
             '<container version="1.0" '
             'xmlns="urn:oasis:names:tc:opendocument:xmlns:container">\n'
             "  <rootfiles>\n"
             '    <rootfile full-path="OEBPS/content.opf" '
             'media-type="application/oebps-package+xml"/>\n'
             "  </rootfiles>\n"
             "</container>\n")


def _sniff_cover(data: bytes):
    """返回 (扩展名, mime)。"""
    if data[:3] == b"\xff\xd8\xff":
        return "jpg", "image/jpeg"
    if data[:8] == b"\x89PNG\r\n\x1a\n":
        return "png", "image/png"
    if data[:4] == b"RIFF" and data[8:12] == b"WEBP":
        return "webp", "image/webp"
    if data[:6] in (b"GIF87a", b"GIF89a"):
        return "gif", "image/gif"
    return None, None


# --------------------------------------------------------------------------
# 主入口
# --------------------------------------------------------------------------


def build(b: dict, epub_path: str | Path, cover_bytes: bytes | None = None,
          txt_path: str | Path | None = None) -> dict:
    """把一本书写成 EPUB3（可选同时写 TXT）。返回统计信息。"""
    m = meta_block(b)
    chapters = b.get("chapters") or []
    if not chapters:
        raise ValueError("no chapters")

    uid = "urn:uuid:" + str(uuid.uuid5(uuid.NAMESPACE_URL, f"fanqie:{m['id'] or m['title']}"))
    ext, mime = _sniff_cover(cover_bytes or b"")
    cover_name = f"cover.{ext}" if ext else None

    now = _dt.datetime.now(_dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    opf = _opf(m, uid, cover_name, mime or "", now)

    man = "\n".join(f'    <item id="ch{i}" href="text/ch{i:05d}.xhtml" '
                    f'media-type="application/xhtml+xml"/>'
                    for i in range(1, len(chapters) + 1))
    spine = "\n".join(f'    <itemref idref="ch{i}"/>' for i in range(1, len(chapters) + 1))
    opf = opf.replace("__CHAPTER_MANIFEST__", man).replace("__CHAPTER_SPINE__", spine)

    epub_path = Path(epub_path)
    epub_path.parent.mkdir(parents=True, exist_ok=True)
    tmp = epub_path.with_suffix(epub_path.suffix + ".tmp")

    with zipfile.ZipFile(tmp, "w", allowZip64=True) as z:
        zi = zipfile.ZipInfo("mimetype")
        zi.compress_type = zipfile.ZIP_STORED
        z.writestr(zi, "application/epub+zip")

        def put(name, data, comp=zipfile.ZIP_DEFLATED):
            if isinstance(data, str):
                data = data.encode("utf-8")
            z.writestr(name, data, compress_type=comp)

        put("META-INF/container.xml", CONTAINER)
        put("OEBPS/content.opf", opf)
        put("OEBPS/nav.xhtml", _nav(m, chapters, cover_name))
        put("OEBPS/toc.ncx", _ncx(m, uid, chapters))
        put("OEBPS/style.css", CSS)
        put("OEBPS/text/titlepage.xhtml", _titlepage(m, cover_name))
        put("OEBPS/text/toc.xhtml", _toc_page(chapters))
        if cover_name:
            put("OEBPS/text/cover.xhtml", _cover_page(m, cover_name))
            put(f"OEBPS/images/{cover_name}", cover_bytes, zipfile.ZIP_STORED)
        prev_vol = ""
        for i, c in enumerate(chapters, 1):
            vol = (c.get("volume") or "").strip()
            head = vol if (vol and vol != prev_vol) else ""
            prev_vol = vol
            put(f"OEBPS/text/ch{i:05d}.xhtml", _chapter_page(c, head))

    tmp.replace(epub_path)

    if txt_path:
        build_txt(b, m, txt_path)

    size = epub_path.stat().st_size
    return {"epub": str(epub_path), "size": size, "chapters": len(chapters),
            "uid": uid, "cover": bool(cover_name)}


def build_txt(b: dict, m: dict | None, txt_path: str | Path) -> Path:
    """纯文本版：书头信息 + 简介 + 目录 + 正文。"""
    m = m or meta_block(b)
    chapters = b.get("chapters") or []
    txt_path = Path(txt_path)
    txt_path.parent.mkdir(parents=True, exist_ok=True)
    tmp = txt_path.with_suffix(txt_path.suffix + ".tmp")

    with open(tmp, "w", encoding="utf-8", newline="\n") as f:
        f.write(f"{m['title']}\n")
        if m["subtitle"]:
            f.write(f"{m['subtitle']}\n")
        f.write(f"作者：{m['author']}\n")
        if m["category"]:
            f.write(f"分类：{m['category']}\n")
        if m["tags"]:
            f.write(f"标签：{'、'.join(m['tags'])}\n")
        if m["score"] is not None:
            f.write(f"评分：{m['score']} / 10\n")
        if m["status"]:
            f.write(f"状态：{m['status']}\n")
        if m["word_number"]:
            f.write(f"字数：{_fmt_words(m['word_number'])}（{m['word_number']}）\n")
        f.write(f"章节：{len(chapters)} 章\n")
        if m["updated"]:
            f.write(f"最后更新：{m['updated']}\n")
        if m["source"]:
            f.write(f"来源：{m['source']}\n")
        if m["abstract"]:
            f.write("\n" + "=" * 28 + " 简介 " + "=" * 28 + "\n\n")
            f.write(m["abstract"].replace("\u3000", " ").strip() + "\n")
        f.write("\n" + "=" * 28 + " 目录 " + "=" * 28 + "\n\n")
        for i, c in enumerate(chapters, 1):
            f.write(f"{i:>4}. {c['title']}\n")
        f.write("\n")
        for c in chapters:
            f.write("\n\n" + c["title"] + "\n\n")
            for p in c.get("paras") or []:
                f.write(p + "\n")

    tmp.replace(txt_path)
    return txt_path
