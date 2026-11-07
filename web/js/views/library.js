/* ==========================================================================
   Library — grid / list shelf with progress and sorting
   ========================================================================== */

import { el, esc, snackbar } from "../ui.js";
import { icon } from "../icons.js";
import { book, fmtWords } from "../data.js";
import * as shelf from "../shelf.js";
import { navBar } from "./nav.js";

const VIEW_KEY = "fqapp-md3:shelf-view";
const SORT_KEY = "fqapp-md3:shelf-sort";

export function LibraryView({ router }) {
  const root = el(`<div class="page tab-page"></div>`);
  let view = localStorage.getItem(VIEW_KEY) || "grid";
  let sort = localStorage.getItem(SORT_KEY) || "recent";

  const appBar = el(`<header class="app-bar">
      <div class="bar-row">
        <div class="brand"><div class="brand-title">书架</div></div>
        <button class="md-icon-btn" data-act="search">${icon("search", 22)}</button>
        <button class="md-icon-btn" data-act="more">${icon("more-vertical", 22)}</button>
      </div>
    </header>`);

  const scroll = el(`<div class="page-scroll"></div>`);
  const summary = el(`<div class="shelf-summary" style="padding:0 20px 8px"></div>`);
  const toolbar = el(`<div class="shelf-toolbar"></div>`);
  const host = el(`<div></div>`);
  scroll.append(summary, toolbar, host);

  function sortItems(items) {
    const arr = items.slice();
    if (sort === "recent") arr.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
    else if (sort === "progress") arr.sort((a, b) => (b.percent || 0) - (a.percent || 0));
    else if (sort === "name") arr.sort((a, b) => (book(a.id)?.title || "").localeCompare(book(b.id)?.title || "", "zh"));
    return arr;
  }

  function paint() {
    const items = sortItems(shelf.list());
    const st = shelf.stats();
    summary.innerHTML = `<div class="row" style="gap:16px">
        <div><span class="t-title-l">${st.total}</span> <span class="t-body-s on-surface-variant">本收藏</span></div>
        <div><span class="t-title-l">${st.reading}</span> <span class="t-body-s on-surface-variant">在读</span></div>
      </div>`;

    toolbar.replaceChildren();
    const gridBtn = el(`<button class="md-icon-btn ${view === "grid" ? "selected" : ""}" data-tip="网格">${icon("layout-grid", 20)}</button>`);
    const listBtn = el(`<button class="md-icon-btn ${view === "list" ? "selected" : ""}" data-tip="列表">${icon("list", 20)}</button>`);
    gridBtn.addEventListener("click", () => { view = "grid"; localStorage.setItem(VIEW_KEY, view); paint(); });
    listBtn.addEventListener("click", () => { view = "list"; localStorage.setItem(VIEW_KEY, view); paint(); });
    const sortBtn = el(`<button class="md-chip">${icon("arrow-down-up", 14)}${sort === "recent" ? "最近阅读" : sort === "progress" ? "阅读进度" : "书名"}</button>`);
    sortBtn.addEventListener("click", () => {
      sort = sort === "recent" ? "progress" : sort === "progress" ? "name" : "recent";
      localStorage.setItem(SORT_KEY, sort);
      paint();
    });
    toolbar.append(gridBtn, listBtn, el(`<div class="grow"></div>`), sortBtn);

    if (!items.length) {
      host.replaceChildren(el(`<div class="empty-state">
          ${icon("library-big", 44)}
          <div class="t-title-m">书架还是空的</div>
          <div class="t-body-m on-surface-variant" style="max-width:260px">在详情页点「加入书架」，书就会出现在这里，阅读进度会自动记住。</div>
          <button class="md-btn tonal" style="margin-top:12px">去发现好书</button>
        </div>`));
      host.querySelector("button").addEventListener("click", () => router.switchTab("home"));
      return;
    }

    if (view === "grid") {
      const grid = el(`<div class="shelf-grid"></div>`);
      items.forEach((it, i) => {
        const b = book(it.id);
        if (!b) return;
        const card = el(`<div class="shelf-item reveal">
            <div class="cover">
              <img src="${esc(b.cover)}" alt="${esc(b.title)}" loading="lazy">
              <span class="progress-tag">${Math.round((it.percent || 0) * 100)}%</span>
            </div>
            <div class="t clamp-2">${esc(b.title)}</div>
            <div class="s">${esc(b.toc?.[it.chapter]?.t || `${it.chapter + 1} 章`)}</div>
          </div>`);
        card.addEventListener("click", () => router.push("reader", { id: b.id, chapter: it.chapter || 0 }));
        card.addEventListener("contextmenu", (e) => { e.preventDefault(); manage(b, it); });
        setTimeout(() => card.classList.add("in"), i * 22);
        grid.appendChild(card);
      });
      host.replaceChildren(grid);
    } else {
      const list = el(`<div class="shelf-list"></div>`);
      items.forEach((it) => {
        const b = book(it.id);
        if (!b) return;
        const row = el(`<div class="shelf-row">
            <div class="cover"><img src="${esc(b.cover)}" alt=""></div>
            <div class="meta">
              <div class="t-title-s ellipsis">${esc(b.title)}</div>
              <div class="t-body-s on-surface-variant ellipsis" style="margin-top:2px">${esc(b.author)} · ${esc(b.toc?.[it.chapter]?.t || "")}</div>
              <div class="md-progress" style="margin-top:8px"><i style="width:${Math.round((it.percent || 0) * 100)}%"></i></div>
            </div>
            <button class="md-icon-btn" data-tip="更多">${icon("more-vertical", 20)}</button>
          </div>`);
        row.addEventListener("click", (e) => {
          if (e.target.closest("button")) return;
          router.push("reader", { id: b.id, chapter: it.chapter || 0 });
        });
        row.querySelector("button").addEventListener("click", () => manage(b, it));
        list.appendChild(row);
      });
      host.replaceChildren(list);
    }
  }

  function manage(b, it) {
    import("../ui.js").then(({ openSheet, confirmDialog }) => {
      const hostEl = el(`<div style="margin:-8px 0">
          <div class="md-list-item"><span class="lead">${icon("book-open", 22)}</span>
            <span class="body"><span class="label">继续阅读</span><span class="support">${esc(b.toc?.[it.chapter]?.t || "")}</span></span></div>
          <div class="md-list-item"><span class="lead">${icon("list", 22)}</span>
            <span class="body"><span class="label">查看目录</span></span></div>
          <div class="md-list-item"><span class="lead">${icon("trash-2", 22)}</span>
            <span class="body"><span class="label">移出书架</span></span></div>
        </div>`);
      const rows = hostEl.querySelectorAll(".md-list-item");
      rows[0].addEventListener("click", () => { sheet.close(); router.push("reader", { id: b.id, chapter: it.chapter || 0 }); });
      rows[1].addEventListener("click", () => { sheet.close(); router.push("detail", { id: b.id }); });
      rows[2].addEventListener("click", async () => {
        sheet.close();
        const ok = await confirmDialog({ title: "移出书架？", message: `《${b.title}》的阅读进度会一并清除。`, confirm: "移出", danger: true });
        if (ok) { shelf.toggle(b.id); paint(); snackbar("已移出书架"); }
      });
      const sheet = openSheet({ title: b.title, subtitle: `${esc(b.author)} · 已读 ${Math.round((it.percent || 0) * 100)}%`, content: hostEl });
    });
  }

  appBar.querySelector('[data-act="search"]').addEventListener("click", () => router.push("search", {}));
  appBar.querySelector('[data-act="more"]').addEventListener("click", () => {
    import("../ui.js").then(({ openSheet, confirmDialog }) => {
      const hostEl = el(`<div style="margin:-8px 0">
          <div class="md-list-item"><span class="lead">${icon("history", 22)}</span><span class="body"><span class="label">阅读历史</span></span></div>
          <div class="md-list-item"><span class="lead">${icon("download", 22)}</span><span class="body"><span class="label">离线缓存</span></span></div>
          <div class="md-list-item"><span class="lead">${icon("folder-down", 22)}</span><span class="body"><span class="label">备份书架</span></span></div>
        </div>`);
      const rows = hostEl.querySelectorAll(".md-list-item");
      rows[0].addEventListener("click", () => { sheet.close(); router.push("history", {}); });
      rows[1].addEventListener("click", () => { sheet.close(); snackbar("缓存管理：已用 42.6 MB"); });
      rows[2].addEventListener("click", () => { sheet.close(); snackbar("已导出书架备份（JSON）"); });
      const sheet = openSheet({ title: "书架操作", content: hostEl });
    });
  });

  scroll.addEventListener("scroll", () => {
    appBar.classList.toggle("scrolled", scroll.scrollTop > 4);
  }, { passive: true });

  paint();
  root.append(appBar, scroll, navBar(router, "library"));

  return {
    el: root,
    onResume() { paint(); },
  };
}
