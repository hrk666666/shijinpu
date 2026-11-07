#!/usr/bin/env python3
"""把 MD3 静态站打包成可直接双击打开的发行目录（file:// 可用）。

产出：
  dist/            浏览器目录版（index.html 直接打开，无服务器）
  dist/fqapp-壳/   Electron 套壳版（可选，需本机 npm i）
"""
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"


def find_esbuild():
    """按 环境变量 → 项目内 node_modules → PATH 的顺序找 esbuild。"""
    env = os.environ.get("ESBUILD")
    if env and Path(env).exists():
        return Path(env)
    local = ROOT / "node_modules" / ".bin" / "esbuild"
    if local.exists():
        return local
    found = shutil.which("esbuild")
    if found:
        return Path(found)
    sys.exit("找不到 esbuild：先 npm i -D esbuild，或设置环境变量 ESBUILD=/path/to/esbuild")


ESBUILD = find_esbuild()


def run(cmd, **kw):
    print("  $", " ".join(str(x) for x in cmd))
    subprocess.run([str(x) for x in cmd], check=True, **kw)


def main():
    if DIST.exists():
        shutil.rmtree(DIST)
    (DIST / "js").mkdir(parents=True)
    (DIST / "css").mkdir()
    (DIST / "assets" / "covers").mkdir(parents=True)
    (DIST / "assets" / "data").mkdir(parents=True)

    print("[1/5] 复制样式")
    for f in (ROOT / "css").glob("*.css"):
        shutil.copy2(f, DIST / "css" / f.name)

    print("[2/5] 复制封面")
    n = 0
    for f in (ROOT / "assets" / "covers").glob("*"):
        if f.is_file():
            shutil.copy2(f, DIST / "assets" / "covers" / f.name)
            n += 1
    print(f"      {n} 张")

    print("[3/5] 章节正文 json → js")
    for f in sorted((ROOT / "assets" / "data").glob("ch-*.json")):
        bid = f.stem[3:]
        raw = f.read_text(encoding="utf-8")
        # 直接内联成脚本赋值，避免 file:// 下 fetch 被 CORS 拦截
        out = "window.__CH=window.__CH||{};window.__CH[%s]=%s;\n" % (
            json.dumps(bid), raw)
        (DIST / "assets" / "data" / f"{f.stem}.js").write_text(out, encoding="utf-8")
        print(f"      {f.name} → {f.stem}.js  {len(out) / 1048576:.1f} MB")

    print("[4/5] 打包脚本")
    if not ESBUILD.exists():
        sys.exit("缺少 esbuild：npm i esbuild 后重试")
    run([ESBUILD, ROOT / "js" / "app.js", "--bundle", "--format=iife",
         "--target=es2017", "--charset=utf8", "--legal-comments=none",
         "--outfile=" + str(DIST / "js" / "app.js")])

    print("[5/5] 生成入口页")
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    html = html.replace('<script type="module" src="js/app.js"></script>',
                        '<script src="js/app.js" defer></script>')
    (DIST / "index.html").write_text(html, encoding="utf-8")

    shutil.copy2(ROOT / "README.md", DIST / "README.md")

    # Electron 壳
    shell = DIST / "fqapp-shell"
    shell.mkdir()
    for item in ("index.html", "css", "js", "assets"):
        src = DIST / item
        if src.is_dir():
            shutil.copytree(src, shell / item)
        else:
            shutil.copy2(src, shell / item)
    (shell / "package.json").write_text(json.dumps({
        "name": "shijinpu",
        "productName": "什锦铺",
        "version": "1.0.0",
        "description": "Material 3 小说阅读器（本地套壳）",
        "main": "main.js",
        "scripts": {"start": "electron .", "dist": "electron-builder --dir"},
        "devDependencies": {"electron": "^33.0.0"},
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    shutil.copy2(ROOT / "shell-main.js", shell / "main.js")
    shutil.copy2(ROOT / "README.md", shell / "README.md")

    size = sum(f.stat().st_size for f in DIST.rglob("*") if f.is_file())
    print(f"\n完成：{DIST}  共 {size / 1048576:.0f} MB")


if __name__ == "__main__":
    main()
