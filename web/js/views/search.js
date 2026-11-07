/* ==========================================================================
   Search — MD3 search view (expand from bar), live local filtering
   ========================================================================== */

import { el, esc, snackbar } from "../ui.js";
import { icon } from "../icons.js";
import { DB, allBooks, fmtWords } from "../data.js";

const HISTORY_KEY = "fqapp-md3:search-history:v1";

function history() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}
function pushHistory(q) {
  const list = [q, ...history().filter((x) => x !== q)].slice(0, 8);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(list));
}

function highlight(text, q) {
  if (!q) return esc(text);
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return esc(text);
  return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(text.slice(i + q.length));
}

export function SearchView({ router, params }) {
  const root = el(`<div class="page search-page"></div>`);

  const head = el(`<div class="search-head">
      <button class="md-icon-btn" data-act="back">${icon("arrow-left", 24)}</button>
      <div class="search-field">
        ${icon("search", 20)}
        <input type="search" placeholder="搜书名、作者、分类" autocomplete="off" enterkeyhint="search">
        <button class="md-icon-btn sm hidden" data-act="clear">${icon("x", 18)}</button>
      </div>
      <button class="md-btn text" data-act="cancel">取消</button>
    </div>`);

  const body = el(`<div class="page-scroll search-body"></div>`);
  root.append(head, body);

  const input = head.querySelector("input");
  const clearBtn = head.querySelector('[data-act="clear"]');

  function renderIdle() {
    const hs = history();
    const hot = allBooks().slice(0, 8);
    body.replaceChildren();
    if (hs.length) {
      const block = el(`<div class="search-block"><h4>最近搜索</h4>
          <div class="row" style="flex-wrap:wrap;gap:8px" id="hist"></div></div>`);
      hs.forEach((h) => {
        const chip = el(`<button class="md-chip">${icon("history", 14)}${esc(h)}</button>`);
        chip.addEventListener("click", () => { input.value = h; run(h); });
        block.querySelector("#hist").appendChild(chip);
      });
      body.appendChild(block);
    }
    const hotBlock = el(`<div class="search-block"><h4>大家在搜</h4><div id="hot"></div></div>`);
    const list = hotBlock.querySelector("#hot");
    hot.forEach((b, i) => {
      const row = el(`<div class="result-row">
          <div class="num" style="width:20px;font-weight:700;color:${i < 3 ? "var(--md-sys-color-primary)" : "var(--md-sys-color-on-surface-variant)"}">${i + 1}</div>
          <div class="cover"><img src="${esc(b.cover)}" alt=""></div>
          <div class="meta">
            <div class="t ellipsis">${esc(b.title)}</div>
            <div class="a ellipsis">${esc(b.author)} · ${esc(b.category || "")}</div>
          </div>
          ${icon("chevron-right", 18)}
        </div>`);
      row.addEventListener("click", () => router.push("detail", { id: b.id }));
      list.appendChild(row);
    });
    body.appendChild(hotBlock);
    body.appendChild(el(`<div class="search-block"><h4>按分类</h4>
        <div class="cat-cloud" style="padding:0 0 12px">
          ${(DB.categories || []).slice(0, 12).map((c) => `<button class="md-chip" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}
        </div></div>`));
    body.querySelectorAll("[data-cat]").forEach((c) => {
      c.addEventListener("click", () => { input.value = c.dataset.cat; run(c.dataset.cat); });
    });
  }

  function run(q) {
    q = q.trim();
    if (!q) { renderIdle(); return; }
    const pool = allBooks();
    const scored = [];
    for (const b of pool) {
      const t = b.title || "";
      const a = b.author || "";
      const c = b.category || "";
      let score = 0;
      if (t === q) score = 100;
      else if (t.includes(q)) score = 80 - t.indexOf(q);
      else if (a.includes(q)) score = 50;
      else if (c.includes(q)) score = 30;
      else if ((b.abstract || "").includes(q)) score = 10;
      if (score > 0) scored.push([score, b]);
    }
    scored.sort((x, y) => y[0] - x[0]);
    const results = scored.slice(0, 30).map((x) => x[1]);

    body.replaceChildren();
    if (!results.length) {
      body.appendChild(el(`<div class="empty-state">${icon("search-x", 40)}
          <div class="t-title-m">没有找到「${esc(q)}」</div>
          <div class="t-body-m on-surface-variant">换个关键词，或试试书名里的两个字</div></div>`));
      body.appendChild(el(`<div class="search-block"><h4>换个词试试</h4>
          <div class="row" style="flex-wrap:wrap;gap:8px">
            ${["都市", "系统", "重生", "悬疑", "校园"].map((x) => `<button class="md-chip" data-s="${x}">${x}</button>`).join("")}
          </div></div>`));
      body.querySelectorAll("[data-s]").forEach((c) => c.addEventListener("click", () => {
        input.value = c.dataset.s; run(c.dataset.s);
      }));
      return;
    }
    const block = el(`<div class="search-block"><h4>${results.length} 个结果</h4><div id="res"></div></div>`);
    const list = block.querySelector("#res");
    results.forEach((b) => {
      const row = el(`<div class="result-row">
          <div class="cover"><img src="${esc(b.cover)}" alt="" loading="lazy"></div>
          <div class="meta">
            <div class="t">${highlight(b.title, q)}</div>
            <div class="a">${highlight(b.author || "", q)} · ${esc(b.category || "")} · ${esc(fmtWords(b.wordNumber) || (b.serialCount ? b.serialCount + " 章" : ""))}</div>
            <div class="abs">${highlight((b.abstract || "").replace(/\s+/g, " "), q)}</div>
          </div>
        </div>`);
      row.addEventListener("click", () => { pushHistory(q); router.push("detail", { id: b.id }); });
      list.appendChild(row);
    });
    body.appendChild(block);
    body.classList.remove("anim-in");
    void body.offsetWidth;
    body.classList.add("anim-in");
  }

  let t = null;
  input.addEventListener("input", () => {
    clearBtn.classList.toggle("hidden", !input.value);
    clearTimeout(t);
    t = setTimeout(() => run(input.value), 120);
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { pushHistory(input.value.trim()); run(input.value); }
  });
  clearBtn.addEventListener("click", () => { input.value = ""; clearBtn.classList.add("hidden"); renderIdle(); input.focus(); });
  head.querySelector('[data-act="back"]').addEventListener("click", () => router.pop());
  head.querySelector('[data-act="cancel"]').addEventListener("click", () => router.pop());

  if (params.initial) { input.value = params.initial; run(params.initial); }
  else renderIdle();
  setTimeout(() => input.focus({ preventScroll: true }), 380);

  return {
    el: root,
    onEnter() { input.focus({ preventScroll: true }); },
  };
}
