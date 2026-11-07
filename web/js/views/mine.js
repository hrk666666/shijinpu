/* ==========================================================================
   Mine — profile, stats, entry points, theme shortcut
   ========================================================================== */

import { el, esc, snackbar } from "../ui.js";
import { icon } from "../icons.js";
import { navBar } from "./nav.js";
import { get, set, subscribe } from "../store.js";
import * as shelf from "../shelf.js";
import { book } from "../data.js";

export function MineView({ router }) {
  const root = el(`<div class="page tab-page"></div>`);

  const appBar = el(`<header class="app-bar">
      <div class="bar-row">
        <div class="brand"><div class="brand-title">我的</div></div>
        <button class="md-icon-btn" data-act="settings">${icon("settings", 22)}</button>
      </div>
    </header>`);

  const scroll = el(`<div class="page-scroll"></div>`);
  const content = el(`<div></div>`);
  scroll.appendChild(content);
  root.append(appBar, scroll, navBar(router, "mine"));

  function paint() {
    const st = shelf.stats();
    const last = shelf.list()[0];
    const lastBook = last ? book(last.id) : null;

    content.replaceChildren();

    const profile = el(`<div class="profile-card">
        <div class="row" style="gap:14px">
          <div class="avatar">读</div>
          <div class="grow" style="min-width:0">
            <div class="t-title-l" style="font-weight:600">本地读者</div>
            <div class="t-body-s" style="opacity:.78;margin-top:2px">未登录 · 数据仅存本机</div>
          </div>
          <button class="md-icon-btn" style="color:inherit">${icon("square-pen", 20)}</button>
        </div>
        <div class="stats-row">
          <div class="stat"><b>${st.total}</b><span>收藏</span></div>
          <div class="stat"><b>${st.finished}</b><span>读完</span></div>
          <div class="stat"><b>${(2.4 * st.total + shelf.list().reduce((a, x) => a + (x.percent || 0), 0) * 6).toFixed(0)}h</b><span>阅读时长</span></div>
        </div>
      </div>`);
    content.appendChild(profile);

    // Continue reading card
    if (lastBook) {
      const cont = el(`<div class="mine-continue">
          <div class="row" style="gap:12px;padding:14px 16px">
            <div class="cover" style="width:44px;height:58px;border-radius:8px;overflow:hidden">
              <img src="${esc(lastBook.cover)}" alt="" style="width:100%;height:100%;object-fit:cover">
            </div>
            <div class="grow" style="min-width:0">
              <div class="t-body-s on-surface-variant">接着看</div>
              <div class="t-title-s ellipsis">${esc(lastBook.title)}</div>
              <div class="md-progress" style="margin-top:6px"><i style="width:${Math.round((last.percent || 0) * 100)}%"></i></div>
            </div>
            <button class="md-btn filled">继续</button>
          </div>
        </div>`);
      cont.querySelector("button").addEventListener("click", () => router.push("reader", { id: lastBook.id, chapter: last.chapter || 0 }));
      content.appendChild(cont);
    }

    const groups = [
      {
        title: "内容",
        items: [
          { i: "history", l: "阅读历史", s: "最近读过的作品与进度", go: () => router.push("history", {}) },
          { i: "download", l: "离线缓存", s: "已用 42.6 MB · 6 本", go: () => snackbar("缓存管理") },
          { i: "message-circle", l: "我的书评", s: "写过的段评与书评", go: () => snackbar("还没有写过书评") },
          { i: "bookmark", l: "书单收藏", s: "自己整理的主题书单", go: () => snackbar("书单功能演示") },
        ],
      },
      {
        title: "偏好",
        items: [
          { i: "palette", l: "外观与主题", s: "动态取色、深浅模式、圆角", go: () => router.push("settings-section", { key: "appearance" }) },
          { i: "type", l: "阅读设置", s: "字体、字号、行距、翻页", go: () => router.push("settings-section", { key: "reading" }) },
          { i: "headphones", l: "听书设置", s: "音色、语速、定时关闭", go: () => router.push("settings-section", { key: "audio" }) },
          { i: "sliders-horizontal", l: "全部设置", s: "短剧、数据、关于", go: () => router.push("settings", {}) },
        ],
      },
    ];

    groups.forEach((g) => {
      const block = el(`<div class="mine-group"><div class="group-title">${esc(g.title)}</div></div>`);
      g.items.forEach((it, idx) => {
        const row = el(`<div class="md-list-item two-line" style="border-radius:16px">
            <span class="lead">${icon(it.i, 22)}</span>
            <span class="body"><span class="label">${esc(it.l)}</span><span class="support">${esc(it.s)}</span></span>
            <span class="trail">${icon("chevron-right", 18)}</span>
          </div>`);
        row.addEventListener("click", it.go);
        block.appendChild(row);
      });
      content.appendChild(block);
    });

    // Quick theme switch
    const themeBlock = el(`<div class="mine-group"><div class="group-title">快速切换</div>
        <div style="padding:4px 8px 8px"><div id="quick-theme"></div></div></div>`);
    content.appendChild(themeBlock);
    import("../ui.js").then(({ makeSegmented }) => {
      const seg = makeSegmented([
        { value: "light", label: "浅色" },
        { value: "dark", label: "深色" },
        { value: "system", label: "跟随系统" },
      ], get("themeMode") === "eink" ? "system" : get("themeMode"), (v) => {
        set({ themeMode: v });
        snackbar(`外观：${{ light: "浅色", dark: "深色", system: "跟随系统" }[v]}`);
      });
      themeBlock.querySelector("#quick-theme").appendChild(seg);
    });

    content.appendChild(el(`<div class="bottom-spacer"></div>`));
    content.appendChild(el(`<div style="text-align:center;padding:8px 0 24px;color:var(--md-sys-color-on-surface-variant);font-size:11px">
        什锦铺 · MD3 Web 版 · 内容来自公开接口
      </div>`));
  }

  appBar.querySelector('[data-act="settings"]').addEventListener("click", () => router.push("settings", {}));
  scroll.addEventListener("scroll", () => appBar.classList.toggle("scrolled", scroll.scrollTop > 4), { passive: true });

  paint();
  const unsub = subscribe(() => paint());

  return {
    el: root,
    onResume() { paint(); },
    onExit() { unsub?.(); },
  };
}
