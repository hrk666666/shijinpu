/* ==========================================================================
   Reader — paginated / scrolling text, immersive chrome, live typography
   ========================================================================== */

import { el, esc, snackbar, openSheet, makeSlider, makeSegmented } from "../ui.js";
import { icon } from "../icons.js";
import { book } from "../data.js";
import * as shelf from "../shelf.js";
import { get, set, subscribe, clearDynamicSeed } from "../store.js";

const CHAPTER_CACHE = new Map();
const PENDING = new Map();

/**
 * 章节正文以 <script> 注入而非 fetch 读取：
 * 浏览器在 file:// 协议下会以 CORS 拦截 fetch，但不会拦截脚本，
 * 这样双击 index.html 也能读出全文，无需本地服务器。
 */
function loadChunk(bookId) {
  if (window.__CH && window.__CH[bookId]) return Promise.resolve(window.__CH[bookId]);
  if (PENDING.has(bookId)) return PENDING.get(bookId);
  const p = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `assets/data/ch-${bookId}.js`;
    s.async = true;
    s.onload = () => {
      if (window.__CH && window.__CH[bookId]) resolve(window.__CH[bookId]);
      else reject(new Error("no-text"));
    };
    s.onerror = () => reject(new Error("no-text"));
    document.head.appendChild(s);
  });
  PENDING.set(bookId, p);
  return p;
}

async function loadAll(bookId) {
  if (CHAPTER_CACHE.has(bookId)) return CHAPTER_CACHE.get(bookId);
  const all = await loadChunk(bookId);
  CHAPTER_CACHE.set(bookId, all);
  return all;
}

async function loadChapter(bookId, itemId) {
  const all = await loadAll(bookId);
  return all[itemId] || null;
}

export function ReaderView({ router, params }) {
  const b = book(params.id);
  const root = el(`<div class="page reader-page" data-rtheme="${esc(get("readerTheme"))}"></div>`);

  if (!b) {
    root.appendChild(el(`<div class="empty-state">${icon("ban", 36)}<div class="t-title-m">书不存在</div></div>`));
    return { el: root };
  }

  clearDynamicSeed();
  const toc = b.toc || [];
  let chapterIndex = Math.max(0, Math.min(toc.length - 1, params.chapter || 0));
  let pages = [];
  let pageIndex = 0;
  let mode = get("flipMode");
  let chrome = false;

  /* ------------------------------- chrome ------------------------------- */
  const top = el(`<div class="reader-top">
      <div class="bar">
        <button class="md-icon-btn" data-act="back">${icon("arrow-left", 22)}</button>
        <div class="grow" style="min-width:0">
          <div class="title ellipsis" id="r-title"></div>
          <div class="sub ellipsis" id="r-sub"></div>
        </div>
        <button class="md-icon-btn" data-act="shelf">${icon(shelf.has(b.id) ? "bookmark-check" : "bookmark", 22)}</button>
        <button class="md-icon-btn" data-act="more">${icon("more-vertical", 22)}</button>
      </div>
    </div>`);

  const bottom = el(`<div class="reader-bottom">
      <div class="progress-row">
        <span id="r-pos">0%</span>
        <div class="grow"><div class="md-progress"><i id="r-bar" style="width:0%"></i></div></div>
        <span id="r-pages"></span>
      </div>
      <div class="tools">
        <div class="reader-tool" data-act="toc">${icon("list", 22)}<span>目录</span></div>
        <div class="reader-tool" data-act="prev">${icon("chevron-left", 22)}<span>上一章</span></div>
        <div class="reader-tool" data-act="next">${icon("chevron-right", 22)}<span>下一章</span></div>
        <div class="reader-tool" data-act="settings">${icon("type", 22)}<span>排版</span></div>
      </div>
    </div>`);

  const stage = el(`<div class="reader-body"><div class="stage-inner" style="height:100%"></div></div>`);
  root.append(stage, top, bottom);

  /* ------------------------------ layout ------------------------------- */
  let pageEls = [];
  let pagesHost = null;

  function clearStage() {
    stage.replaceChildren();
    pagesHost = null;
    pageEls = [];
  }

  function pageWidth() {
    return stage.clientWidth || 390;
  }

  function renderChapter(title, paras) {
    clearStage();

    if (mode === "scroll") {
      root.classList.add("reader-scroll-mode");
      const wrap = el(`<div class="reader-content"></div>`);
      if (title) wrap.appendChild(el(`<h2 class="reader-chapter-head">${esc(title)}</h2>`));
      paras.forEach((p, i) => {
        wrap.appendChild(el(`<p class="${i === 0 ? "first" : ""}">${esc(p)}</p>`));
      });
      stage.appendChild(wrap);
      pages = [0];
      pageIndex = 0;
      attachScrollProgress(wrap);
      updateProgress();
      return;
    }

    root.classList.remove("reader-scroll-mode");
    // Real pagination: one CSS column per page, translated horizontally.
    const viewport = el(`<div class="reader-viewport"></div>`);
    const flow = el(`<div class="reader-flow"></div>`);
    const w = pageWidth();
    flow.style.height = "100%";
    flow.style.columnWidth = `${w}px`;
    flow.style.columnGap = "0px";
    flow.style.padding = "56px 0 40px";
    flow.style.width = `${w}px`;
    flow.style.columnFill = "auto";

    if (title) flow.appendChild(el(`<h2 class="reader-chapter-head">${esc(title)}</h2>`));
    paras.forEach((p, i) => {
      flow.appendChild(el(`<p class="${i === 0 ? "first" : ""}">${esc(p)}</p>`));
    });

    viewport.appendChild(flow);
    stage.appendChild(viewport);
    pagesHost = viewport;
    pageEls = [];
    pageIndex = 0;

    // Measure how many columns the layout produced.
    requestAnimationFrame(() => {
      const total = Math.max(1, Math.round(flow.scrollWidth / w));
      pages = new Array(total).fill(0);
      pageEls = new Array(total).fill(flow);
      viewport.addEventListener("scroll", () => {
        const i = Math.round(viewport.scrollLeft / w);
        if (i !== pageIndex) {
          pageIndex = i;
          updateProgress();
        }
      }, { passive: true });
      updateProgress();
    });
  }

  let scrollHandler = null;
  function attachScrollProgress(scroller) {
    if (scrollHandler) scroller.removeEventListener("scroll", scrollHandler);
    scrollHandler = () => {
      const max = scroller.scrollHeight - scroller.clientHeight;
      const p = max > 0 ? scroller.scrollTop / max : 1;
      updateProgress(p);
    };
    scroller.addEventListener("scroll", scrollHandler, { passive: true });
    scrollHandler();
  }

  /* ----------------------------- navigation ---------------------------- */
  async function openChapter(i, { animate = true } = {}) {
    if (i < 0) {
      snackbar("已经是第一章了");
      return;
    }
    if (i >= toc.length) {
      snackbar("已经是最后一章了");
      return;
    }
    chapterIndex = i;
    const item = toc[i];
    clearStage();
    stage.appendChild(el(`<div class="reader-loading" style="padding:80px 24px">
        <div class="sk-line" style="width:70%;height:22px"></div>
        <div class="sk-line" style="width:92%"></div>
        <div class="sk-line" style="width:88%"></div>
        <div class="sk-line" style="width:95%"></div>
        <div class="sk-line" style="width:60%"></div>
      </div>`));
    try {
      const data = await loadChapter(b.id, item.i);
      if (!data) throw new Error("missing");
      top.querySelector("#r-title").textContent = item.t;
      top.querySelector("#r-sub").textContent = `${b.title} · 第 ${i + 1}/${toc.length} 章`;
      renderChapter(data.title || item.t, data.paras);
      shelf.progress(b.id, i, i / Math.max(1, toc.length));
      if (animate) {
        stage.classList.remove("anim-in");
        void stage.offsetWidth;
        stage.classList.add("anim-in");
      }
    } catch (e) {
      clearStage();
      stage.appendChild(el(`<div class="empty-state" style="padding-top:120px">
          ${icon("wifi-off", 40)}
          <div class="t-title-m">这一章还没有缓存</div>
          <div class="t-body-m on-surface-variant" style="max-width:300px">
            《${esc(b.title)}》的正文需要联网拉取。演示版内置了《重生2006》《爆红从报警开始》两本全文，可以在书架里打开。
          </div>
        </div>`));
      const btns = el(`<div class="row" style="justify-content:center;margin-top:16px;gap:8px">
          <button class="md-btn tonal">返回详情</button>
        </div>`);
      btns.querySelector("button").addEventListener("click", () => router.pop());
      stage.querySelector(".empty-state").after(btns);
    }
  }

  function turnPage(dir) {
    if (mode === "scroll") {
      const sc = stage.querySelector(".reader-content");
      if (!sc) return;
      sc.scrollBy({ top: dir * (sc.clientHeight * 0.86), behavior: "smooth" });
      return;
    }
    const next = pageIndex + dir;
    if (next < 0) {
      // Previous chapter, jump to its last page
      openChapter(chapterIndex - 1).then(() => goToPage(pages.length - 1));
      return;
    }
    if (next >= pages.length) {
      openChapter(chapterIndex + 1);
      return;
    }
    goToPage(next);
  }

  function goToPage(i) {
    if (!pagesHost) return;
    pageIndex = i;
    pagesHost.scrollTo({ left: i * pageWidth(), behavior: "smooth" });
    updateProgress();
  }

  function updateProgress(explicit) {
    const bar = bottom.querySelector("#r-bar");
    const pos = bottom.querySelector("#r-pos");
    const pi = bottom.querySelector("#r-pages");
    if (!bar) return;
    if (mode === "scroll") {
      const sc = stage.querySelector(".reader-content");
      const max = sc ? sc.scrollHeight - sc.clientHeight : 0;
      const local = max > 0 ? (sc.scrollTop / max) : 1;
      const total = (chapterIndex + local) / Math.max(1, toc.length);
      bar.style.width = `${Math.round(total * 100)}%`;
      pos.textContent = `${Math.round(total * 100)}%`;
      pi.textContent = `第 ${chapterIndex + 1}/${toc.length} 章`;
      shelf.progress(b.id, chapterIndex, total);
    } else {
      const local = pages.length > 1 ? pageIndex / (pages.length - 1) : 1;
      const total = (chapterIndex + local) / Math.max(1, toc.length);
      bar.style.width = `${Math.round(total * 100)}%`;
      pos.textContent = `${Math.round(total * 100)}%`;
      pi.textContent = `${pageIndex + 1}/${pages.length} 页`;
      shelf.progress(b.id, chapterIndex, total);
    }
  }

  /* ---------------------------- interactions --------------------------- */
  function setChrome(on) {
    chrome = on;
    root.classList.toggle("chrome", on);
  }

  let tapTimer = null;
  stage.addEventListener("click", (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const w = rect.width;
    if (chrome) {
      // Clicking the text area hides the chrome first.
      if (x > w * 0.25 && x < w * 0.75) { setChrome(false); return; }
    }
    if (!get("tapTurn")) { setChrome(!chrome); return; }
    if (x < w * 0.3) { turnPage(-1); return; }
    if (x > w * 0.7) { turnPage(1); return; }
    setChrome(!chrome);
  });

  // Keyboard: arrows / space / esc
  const onKey = (e) => {
    if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); turnPage(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); turnPage(-1); }
    else if (e.key === "Escape") { router.pop(); }
    else if (e.key === "ArrowDown") { turnPage(1); }
    else if (e.key === "ArrowUp") { turnPage(-1); }
  };
  document.addEventListener("keydown", onKey);

  // Wheel: horizontal scroll pages
  stage.addEventListener("wheel", (e) => {
    if (mode === "scroll") return;
    if (Math.abs(e.deltaY) < 12 && Math.abs(e.deltaX) < 12) return;
    e.preventDefault();
    if (Date.now() - (stage._lastWheel || 0) < 320) return;
    stage._lastWheel = Date.now();
    turnPage((e.deltaY || e.deltaX) > 0 ? 1 : -1);
  }, { passive: false });

  top.querySelector('[data-act="back"]').addEventListener("click", () => router.pop());
  top.querySelector('[data-act="shelf"]').addEventListener("click", () => {
    const now = shelf.toggle(b.id);
    top.querySelector('[data-act="shelf"]').innerHTML = icon(now ? "bookmark-check" : "bookmark", 22);
    snackbar(now ? "已加入书架" : "已从书架移除");
  });
  top.querySelector('[data-act="more"]').addEventListener("click", () => {
    openSheet({
      title: "阅读选项",
      content: (() => {
        const host = el(`<div></div>`);
        [
          { i: "share-2", t: "分享当前章节" },
          { i: "download", t: "缓存本章" },
          { i: "message-circle", t: "查看段评" },
          { i: "bug", t: "反馈错别字" },
        ].forEach((r) => {
          const row = el(`<div class="md-list-item"><span class="lead">${icon(r.i, 22)}</span>
              <span class="body"><span class="label">${esc(r.t)}</span></span></div>`);
          row.addEventListener("click", () => snackbar(`${r.t}：已记录`));
          host.appendChild(row);
        });
        return host;
      })(),
    });
  });

  bottom.querySelector('[data-act="prev"]').addEventListener("click", () => openChapter(chapterIndex - 1));
  bottom.querySelector('[data-act="next"]').addEventListener("click", () => openChapter(chapterIndex + 1));
  bottom.querySelector('[data-act="toc"]').addEventListener("click", openToc);
  bottom.querySelector('[data-act="settings"]').addEventListener("click", openSettings);

  function openToc() {
    const host = el(`<div class="chapter-list" style="margin:-8px 0"></div>`);
    toc.forEach((c, i) => {
      const row = el(`<div class="chapter-row ${i === chapterIndex ? "current" : ""}">
          <span class="idx">${String(i + 1).padStart(2, "0")}</span>
          <span class="nm">${esc(c.t)}</span>
        </div>`);
      row.addEventListener("click", () => { sheet.close(); openChapter(i); });
      host.appendChild(row);
    });
    const sheet = openSheet({ title: "目录", subtitle: `${toc.length} 章 · ${esc(b.title)}`, content: host, fullHeight: true });
  }

  function openSettings() {
    const host = el(`<div></div>`);
    const add = (node) => host.appendChild(node);

    // Font size
    const sizeRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">字号</span><span class="t-body-s on-surface-variant" id="v-size">${get("readerSize")} px</span></div>
      </div>`);
    sizeRow.appendChild(makeSlider({
      value: get("readerSize"), min: 15, max: 30, step: 1,
      format: (v) => `${v} px`,
      onChange: (v) => {
        sizeRow.querySelector("#v-size").textContent = `${v} px`;
        set({ readerSize: v }, { silent: false });
        rerender();
      },
    }));
    add(sizeRow);

    // Line height
    const lineRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">行距</span><span class="t-body-s on-surface-variant" id="v-line">${get("readerLine").toFixed(1)}</span></div>
      </div>`);
    lineRow.appendChild(makeSlider({
      value: get("readerLine") * 10, min: 13, max: 24, step: 1,
      format: (v) => (v / 10).toFixed(1),
      onChange: (v) => {
        lineRow.querySelector("#v-line").textContent = (v / 10).toFixed(1);
        set({ readerLine: v / 10 });
        rerender();
      },
    }));
    add(lineRow);

    // Margins
    const padRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">页边距</span><span class="t-body-s on-surface-variant" id="v-pad">${get("readerPad")} px</span></div>
      </div>`);
    padRow.appendChild(makeSlider({
      value: get("readerPad"), min: 12, max: 48, step: 2,
      format: (v) => `${v} px`,
      onChange: (v) => {
        padRow.querySelector("#v-pad").textContent = `${v} px`;
        set({ readerPad: v });
        rerender();
      },
    }));
    add(padRow);

    // Typeface
    add(el(`<div class="setting-row column"><div class="head"><span class="t-title-s">字体</span></div>
      <div id="font-seg"></div></div>`));
    host.querySelector("#font-seg").appendChild(makeSegmented([
      { value: "serif-cn", label: "宋体" },
      { value: "sans-cn", label: "黑体" },
      { value: "rounded", label: "圆体" },
    ], get("readerFont"), (v) => { set({ readerFont: v }); rerender(); }));

    // Background
    const themes = [
      { v: "paper", c: "#fbf7f0", n: "米白" },
      { v: "sepia", c: "#f3e6cd", n: "羊皮" },
      { v: "green", c: "#e3ecdd", n: "护眼" },
      { v: "dark", c: "#14120f", n: "夜间" },
      { v: "oled", c: "#000000", n: "纯黑" },
    ];
    const themeRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">背景</span></div>
      <div class="row" style="gap:10px" id="theme-row"></div></div>`);
    themes.forEach((t) => {
      const dot = el(`<button class="seed-dot ${get("readerTheme") === t.v ? "on" : ""}" title="${esc(t.n)}"
          style="background:${t.c};border:1px solid var(--md-sys-color-outline-variant)"></button>`);
      dot.addEventListener("click", () => {
        themeRow.querySelectorAll(".seed-dot").forEach((d) => d.classList.remove("on"));
        dot.classList.add("on");
        set({ readerTheme: t.v });
        root.dataset.rtheme = t.v;
      });
      themeRow.querySelector("#theme-row").appendChild(dot);
    });
    add(themeRow);

    // Flip mode
    add(el(`<div class="setting-row column"><div class="head"><span class="t-title-s">翻页方式</span></div>
      <div id="flip-seg"></div></div>`));
    host.querySelector("#flip-seg").appendChild(makeSegmented([
      { value: "page", label: "左右翻页" },
      { value: "scroll", label: "上下滚动" },
    ], mode, (v) => {
      mode = v;
      set({ flipMode: v });
      openChapter(chapterIndex, { animate: false });
    }));

    // Page animation
    add(el(`<div class="setting-row column"><div class="head"><span class="t-title-s">翻页动画</span></div>
      <div id="anim-seg"></div></div>`));
    host.querySelector("#anim-seg").appendChild(makeSegmented([
      { value: "slide", label: "平移" },
      { value: "fade", label: "淡入" },
      { value: "none", label: "无" },
    ], get("flipAnim"), (v) => { set({ flipAnim: v }); if (pagesHost) pagesHost.className = `reader-pages anim-${v}`; }));

    // Progress + tap zones
    const progRow = el(`<div class="setting-row clickable">
        <div class="body"><div class="l">显示阅读进度</div><div class="s">底部进度与百分比</div></div>
        <div class="trail" id="prog-sw"></div>
      </div>`);
    const tapRow = el(`<div class="setting-row clickable">
        <div class="body"><div class="l">点击两侧翻页</div><div class="s">关闭后点击两侧只呼出菜单</div></div>
        <div class="trail" id="tap-sw"></div>
      </div>`);
    add(progRow); add(tapRow);
    import("../ui.js").then(({ makeSwitch }) => {
      progRow.querySelector("#prog-sw").appendChild(makeSwitch(get("showReaderProgress"), (v) => {
        set({ showReaderProgress: v });
        bottom.querySelector(".progress-row").style.display = v ? "" : "none";
      }));
      tapRow.querySelector("#tap-sw").appendChild(makeSwitch(get("tapTurn"), (v) => set({ tapTurn: v })));
    });
    bottom.querySelector(".progress-row").style.display = get("showReaderProgress") ? "" : "none";

    openSheet({ title: "排版", content: host, fullHeight: true });
  }

  function rerender() {
    const data = CHAPTER_CACHE.get(b.id)?.[toc[chapterIndex]?.i];
    if (data) renderChapter(data.title || toc[chapterIndex].t, data.paras);
  }

  /* ------------------------------- start ------------------------------- */
  openChapter(chapterIndex, { animate: false });
  top.querySelector("#r-title").textContent = toc[chapterIndex]?.t || b.title;

  // Restore chrome state on exit
  return {
    el: root,
    onExit() {
      document.removeEventListener("keydown", onKey);
    },
  };
}
