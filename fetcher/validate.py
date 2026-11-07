#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""离线校验 EPUB：结构、XML 合法性、manifest/spine 引用、封面、元数据完整性。"""
import sys, zipfile, xml.etree.ElementTree as ET
from pathlib import Path

OPF = "{http://www.idpf.org/2007/opf}"
DC = "{http://purl.org/dc/elements/1.1/}"


def check(p: Path) -> dict:
    r = {"file": str(p), "ok": True, "problems": [], "chapters": 0, "meta": {}}
    try:
        z = zipfile.ZipFile(p)
    except Exception as e:
        r["ok"] = False
        r["problems"].append(f"不是合法 zip: {e}")
        return r
    names = set(z.namelist())

    # mimetype 必须是第一个且不压缩
    first = z.infolist()[0]
    if first.filename != "mimetype" or first.compress_type != zipfile.ZIP_STORED:
        r["ok"] = False
        r["problems"].append("mimetype 位置或压缩方式错误")
    if z.read("mimetype") != b"application/epub+zip":
        r["ok"] = False
        r["problems"].append("mimetype 内容错误")

    for need in ("META-INF/container.xml", "OEBPS/content.opf"):
        if need not in names:
            r["ok"] = False
            r["problems"].append(f"缺少 {need}")
    if not r["ok"]:
        return r

    # 全量 XML 合法性
    bad = 0
    for n in names:
        if n.endswith((".xhtml", ".opf", ".ncx", ".xml")):
            try:
                ET.fromstring(z.read(n))
            except Exception as e:
                bad += 1
                if bad <= 3:
                    r["problems"].append(f"XML 错误 {n}: {str(e)[:70]}")
    if bad:
        r["ok"] = False

    root = ET.fromstring(z.read("OEBPS/content.opf"))
    man = {}
    for it in root.iter(OPF + "item"):
        man[it.get("id")] = it.get("href")
    for it in root.iter(OPF + "item"):
        href = it.get("href")
        full = "OEBPS/" + href
        if full not in names:
            r["ok"] = False
            r["problems"].append(f"manifest 指向不存在的文件 {href}")
    spine = [x.get("idref") for x in root.iter(OPF + "itemref")]
    for s in spine:
        if s not in man:
            r["ok"] = False
            r["problems"].append(f"spine 引用了未声明的 id {s}")
    r["chapters"] = sum(1 for i in man if i.startswith("ch"))

    md = root.find(OPF + "metadata")
    for tag, key in ((DC + "title", "title"), (DC + "creator", "author"),
                     (DC + "language", "lang"), (DC + "identifier", "id")):
        el = md.find(tag) if md is not None else None
        r["meta"][key] = (el.text or "") if el is not None else ""
    desc = md.find(DC + "description") if md is not None else None
    r["meta"]["desc"] = len(desc.text or "") if desc is not None else 0
    subs = [e.text for e in md.findall(DC + "subject")] if md is not None else []
    r["meta"]["subjects"] = len([s for s in subs if s])
    r["meta"]["cover"] = any(i.get("properties") == "cover-image" for i in root.iter(OPF + "item"))

    if not r["meta"]["title"]:
        r["ok"] = False; r["problems"].append("缺 dc:title")
    if not r["meta"]["author"]:
        r["ok"] = False; r["problems"].append("缺 dc:creator")
    if r["meta"]["desc"] <= 0:
        r["problems"].append("简介为空")
    if not r["meta"]["cover"]:
        r["problems"].append("无封面")
    return r


def main(root: str):
    files = sorted(Path(root).rglob("*.epub"))
    bad = 0
    no_cover = 0
    for f in files:
        r = check(f)
        if not r["ok"]:
            bad += 1
            print("✗", f.name)
            for p in r["problems"][:4]:
                print("   ", p)
        elif r["problems"]:
            no_cover += 1
    print(f"\n共 {len(files)} 本；结构错误 {bad} 本；仅有元数据告警 {no_cover} 本")
    return 0 if bad == 0 else 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1] if len(sys.argv) > 1 else "/workspace/novels"))
