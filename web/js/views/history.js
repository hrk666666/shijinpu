/* ==========================================================================
   History — recently read
   ========================================================================== */

import { el, esc } from "../ui.js";
import { icon } from "../icons.js";
import { book } from "../data.js";
import * as shelf from "../shelf.js";

export function HistoryView({ router }) {
  const root = el(`<div class="page"></div>`);
  const bar = el(`<header class="app-bar"><div class="bar-row">
      <button class="md-icon-btn" data-act="back">${icon("arrow-left", 24)}</button>
      <div class="bar-title">阅读历史</div>
    </div></header>`);
  bar.querySelector('[data-act="back"]').addEventListener("click", () => router.pop());

  const scroll = el(`<div class="page-scroll"></div>`);
  const wrap = el(`<div class="container-narrow" style="padding:8px 12px 40px"></div>`);
  scroll.appendChild(wrap);
  root.append(bar, scroll);

  const items = shelf.list().filter((x) => (x.percent || 0) > 0);
  if (!items.length) {
    wrap.appendChild(el(`<div class="empty-state">${icon("history", 44)}
        <div class="t-title-m">还没有阅读记录</div>
        <div class="t-body-m on-surface-variant">打开一本书读几页，这里就会记下来</div></div>`));
    return { el: root };
  }

  items.forEach((it) => {
    const b = book(it.id);
    if (!b) return;
    const row = el(`<div class="shelf-row">
        <div class="cover"><img src="${esc(b.cover)}" alt=""></div>
        <div class="meta">
          <div class="t-title-s ellipsis">${esc(b.title)}</div>
          <div class="t-body-s on-surface-variant ellipsis" style="margin-top:2px">
            ${esc(b.toc?.[it.chapter]?.t || "第 1 章")} · ${Math.round((it.percent || 0) * 100)}%
          </div>
          <div class="md-progress" style="margin-top:8px"><i style="width:${Math.round((it.percent || 0) * 100)}%"></i></div>
        </div>
        <span class="t-body-s on-surface-variant">${esc(it.updated || "")}</span>
      </div>`);
    row.addEventListener("click", () => router.push("reader", { id: b.id, chapter: it.chapter || 0 }));
    wrap.appendChild(row);
  });

  return { el: root };
}
