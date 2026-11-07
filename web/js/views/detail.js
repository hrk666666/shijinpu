/* ==========================================================================
   Detail — container transform from the tapped cover, collapsing hero,
   segmented sections (简介 / 目录 / 书评)
   ========================================================================== */

import { el, esc, snackbar, openSheet, bindAppBar } from "../ui.js";
import { icon } from "../icons.js";
import { book, allBooks, fmtWords, fmtShelf } from "../data.js";
import * as shelf from "../shelf.js";
import { setDynamicSeed, clearDynamicSeed } from "../store.js";

function factChip(text) {
  return `<span class="md-chip sm">${esc(text)}</span>`;
}

export function DetailView({ router, params }) {
  const b = book(params.id);
  const root = el(`<div class="page detail-page"></div>`);

  if (!b) {
    root.appendChild(el(`<div class="empty-state">${icon("search-x", 40)}<div class="t-title-m">找不到这本书</div></div>`));
    return { el: root };
  }

  setDynamicSeed(null); // reset, then tint from this cover once loaded

  const toc = b.toc || [];
  const hasToc = toc.length > 0;
  const inShelf = shelf.has(b.id);
  const saved = shelf.entry(b.id);

  /* ------------------------------ app bar ------------------------------ */
  const appBar = el(`<header class="app-bar over-hero">
      <div class="bar-row">
        <button class="md-icon-btn" data-act="back" aria-label="返回">${icon("arrow-left", 24)}</button>
        <div class="bar-title ellipsis">${esc(b.title)}</div>
        <button class="md-icon-btn" data-act="shelf" aria-label="收藏">${icon(inShelf ? "bookmark-check" : "bookmark", 22)}</button>
        <button class="md-icon-btn" data-act="more" aria-label="更多">${icon("more-vertical", 22)}</button>
      </div>
    </header>`);

  /* ------------------------------- hero -------------------------------- */
  const hero = el(`<div class="detail-hero">
      <div class="ambient" style="background-image:url('${esc(b.cover)}')"></div>
      <div class="hero-inner">
        <div class="cover-wrap"><img src="${esc(b.cover)}" alt="${esc(b.title)}"></div>
        <div class="head">
          <h1>${esc(b.title)}</h1>
          <div class="author">${icon("square-pen", 13)} ${esc(b.author || "佚名")}</div>
          <div class="facts">
            ${b.score ? factChip(`${b.score} 分`) : ""}
            ${b.category ? factChip(b.category) : ""}
            ${b.serialCount ? factChip(`${b.serialCount} 章`) : ""}
            ${b.wordNumber ? factChip(fmtWords(b.wordNumber)) : ""}
            ${b.creationStatus === 0 || b.creationStatus === "0" ? factChip("已完结") : factChip("连载中")}
          </div>
        </div>
      </div>
    </div>`);

  const actions = el(`<div class="detail-actions">
      <button class="md-btn outlined with-icon" data-act="shelf-btn">
        ${icon(inShelf ? "bookmark-check" : "bookmark-plus", 18)}<span>${inShelf ? "已在书架" : "加入书架"}</span>
      </button>
      <button class="md-btn filled with-icon" data-act="read">${icon("book-open", 18)}<span>${saved ? "继续阅读" : "立即阅读"}</span></button>
      <button class="md-icon-btn tonal" data-act="listen" aria-label="听书" style="width:48px;height:48px">${icon("headphones", 22)}</button>
    </div>`);

  const tabsHost = el(`<div class="detail-tabs"></div>`);
  const seg = el(`<div class="md-segmented" role="tablist">
      <button class="selected" data-seg="intro" role="tab" aria-selected="true"><span class="check">${icon("check", 18)}</span><span>简介</span></button>
      <button data-seg="toc" role="tab" aria-selected="false"><span class="check">${icon("check", 18)}</span><span>目录</span></button>
      <button data-seg="reviews" role="tab" aria-selected="false"><span class="check">${icon("check", 18)}</span><span>书评</span></button>
    </div>`);
  tabsHost.appendChild(seg);

  const body = el(`<div class="detail-body"></div>`);
  const scroll = el(`<div class="page-scroll"></div>`);
  scroll.append(hero, actions, tabsHost, body);

  /* --------------------------- bottom bar ------------------------------ */
  const bottomBar = el(`<div class="detail-bottom-bar">
      <div class="cover" style="width:40px;height:52px;border-radius:8px;overflow:hidden;flex:0 0 auto">
        <img src="${esc(b.cover)}" alt="" style="width:100%;height:100%;object-fit:cover">
      </div>
      <div class="meta">
        <div class="t ellipsis">${esc(saved ? "继续阅读" : "从头开始")}</div>
        <div class="s ellipsis">${esc(hasToc ? toc[saved?.chapter || 0]?.t || "第 1 章" : "章节索引待加载")}</div>
      </div>
      <button class="md-btn filled with-icon" data-act="read-bottom">${icon("play", 18)}<span>阅读</span></button>
    </div>`);

  root.append(appBar, scroll, bottomBar);

  bindAppBar(scroll, appBar, { threshold: 120 });

  /* ------------------------------ content ------------------------------ */
  function renderIntro() {
    const longText = (b.abstract || "暂无简介").trim();
    const frag = document.createDocumentFragment();

    frag.appendChild(el(`<div class="detail-abstract clamped" id="abs">${esc(longText)}</div>`));
    const expandBtn = el(`<div class="expand-btn">展开全部 ${icon("chevron-down", 14)}</div>`);
    expandBtn.addEventListener("click", () => {
      const abs = body.querySelector("#abs");
      const on = abs.classList.toggle("clamped");
      expandBtn.innerHTML = on ? `展开全部 ${icon("chevron-down", 14)}` : `收起 ${icon("chevron-up", 14)}`;
    });
    frag.appendChild(expandBtn);

    // Meta strip
    frag.appendChild(el(`<div class="detail-meta-grid">
        <div><span>${esc(b.author || "佚名")}</span><small>作者</small></div>
        <div><span>${esc(b.category || "—")}</span><small>分类</small></div>
        <div><span>${esc(fmtWords(b.wordNumber) || "—")}</span><small>字数</small></div>
        <div><span>${b.serialCount || "—"}</span><small>章节</small></div>
      </div>`));

    // Chapter preview
    if (hasToc) {
      frag.appendChild(el(`<div class="section-head" style="padding:24px 0 6px">
          <h2>目录预览</h2>
          <span class="more" id="all-ch">全部 ${toc.length} 章 ${icon("chevron-right", 14)}</span>
        </div>`));
      const list = el(`<div class="chapter-list" style="margin:0 -12px"></div>`);
      toc.slice(0, 4).forEach((c, i) => {
        const row = el(`<div class="chapter-row">
            <span class="idx">${String(i + 1).padStart(2, "0")}</span>
            <span class="nm">${esc(c.t)}</span>
            <span class="w">${c.w ? Math.round(c.w / 100) / 10 + "k" : ""}</span>
          </div>`);
        row.addEventListener("click", () => router.push("reader", { id: b.id, chapter: i }));
        list.appendChild(row);
      });
      frag.appendChild(list);
      frag.querySelector("#all-ch").addEventListener("click", () => {
        seg.querySelector('[data-seg="toc"]').click();
      });
    }

    // Reader reviews teaser
    frag.appendChild(el(`<div class="section-head" style="padding:24px 0 8px">
        <h2>书友怎么说</h2>
        <span class="more" id="all-rv">全部书评 ${icon("chevron-right", 14)}</span>
      </div>`));
    frag.appendChild(el(`<div class="review-quote">
        <div class="stars">${[1, 2, 3, 4, 5].map(() => icon("star", 12)).join("")}</div>
        <p>“节奏快、信息密度高，几乎每章都有钩子。” —— 夜航船</p>
        <p>“人物不脸谱化，配角也有自己的动机。” —— 三月的风</p>
      </div>`));

    // Similar books
    frag.appendChild(el(`<div class="section-head" style="padding:24px 0 8px"><h2>同类好文</h2></div>`));
    const rail = el(`<div class="rail" style="padding-left:0;padding-right:0"></div>`);
    const pool = allBooks().filter((x) => x.id !== b.id && x.cover).slice(0, 10);
    pool.forEach((x) => {
      const t = el(`<div class="book-tile" style="width:96px">
          <div class="cover" style="width:96px;height:128px">
            <img src="${esc(x.cover)}" alt="" loading="lazy">
          </div>
          <div class="t">${esc(x.title)}</div>
        </div>`);
      t.addEventListener("click", () => router.push("detail", { id: x.id }));
      rail.appendChild(t);
    });
    frag.appendChild(rail);

    body.replaceChildren(frag);
    frag.querySelector("#all-rv")?.addEventListener("click", () => {
      seg.querySelector('[data-seg="reviews"]').click();
    });
  }

  function renderToc() {
    if (!hasToc) {
      body.replaceChildren(
        el(`<div class="empty-state">
            ${icon("wifi-off", 36)}
            <div class="t-title-m">章节索引未缓存</div>
            <div class="t-body-m on-surface-variant" style="max-width:280px">
              这本书的目录需要联网获取。应用内打开时会自动拉取，离线状态下仅已缓存的书目可读。
            </div>
          </div>`)
      );
      return;
    }
    const list = el(`<div class="chapter-list"></div>`);
    toc.slice(0, 30).forEach((c, i) => {
      const row = el(`<div class="chapter-row ${saved && saved.chapter === i ? "current" : ""}" role="button" tabindex="0">
          <span class="idx">${String(i + 1).padStart(2, "0")}</span>
          <span class="nm">${esc(c.t)}</span>
          <span class="w">${c.w ? Math.round(c.w / 100) / 10 + "k" : ""}</span>
        </div>`);
      row.addEventListener("click", () => router.push("reader", { id: b.id, chapter: i }));
      list.appendChild(row);
    });
    body.replaceChildren(list);
    if (toc.length > 30) {
      const more = el(`<button class="md-btn text block" style="margin-top:8px">查看全部 ${toc.length} 章</button>`);
      more.addEventListener("click", () => openSheet({
        title: "全部章节",
        subtitle: `${toc.length} 章 · ${fmtWords(b.wordNumber) || ""}`,
        content: (() => {
          const host = el(`<div class="chapter-list"></div>`);
          toc.forEach((c, i) => {
            const row = el(`<div class="chapter-row" role="button" tabindex="0">
                <span class="idx">${String(i + 1).padStart(2, "0")}</span>
                <span class="nm">${esc(c.t)}</span>
              </div>`);
            row.addEventListener("click", () => { router.push("reader", { id: b.id, chapter: i }); });
            host.appendChild(row);
          });
          return host;
        })(),
        fullHeight: true,
      }));
      body.appendChild(more);
    }
  }

  function renderReviews() {
    const reviews = [
      { n: "夜航船", s: 5, t: "节奏是真的快，作者很懂怎么卡点。看到关键处切一章，心里骂一句又点下一章。" },
      { n: "半糖少冰", s: 4, t: "设定挺有意思，前期铺得扎实，中段稍微有点拖，但整体值得追。" },
      { n: "三月的风", s: 5, t: "人物不脸谱化，配角都有自己的动机，这点很难得。" },
    ];
    const host = el(`<div></div>`);
    host.appendChild(el(`<div class="spread" style="padding:4px 0 12px">
        <div class="row" style="gap:8px">
          <span class="t-display-s" style="font-weight:700">${esc(b.score || "9.2")}</span>
          <div>
            <div class="row stars" style="gap:2px;color:var(--md-sys-color-primary)">
              ${[1, 2, 3, 4, 5].map((i) => icon("star", 14)).join("")}
            </div>
            <div class="t-body-s on-surface-variant">共 ${(1200 + (b.shelf % 900)).toLocaleString()} 条书评</div>
          </div>
        </div>
        <button class="md-btn tonal">写书评</button>
      </div>`));
    reviews.forEach((r) => {
      host.appendChild(el(`<div class="review-card">
          <div class="row" style="gap:10px;margin-bottom:8px">
            <div class="avatar-sm">${esc(r.n[0])}</div>
            <div>
              <div class="t-title-s">${esc(r.n)}</div>
              <div class="row stars" style="gap:1px;color:var(--md-sys-color-primary)">
                ${Array.from({ length: r.s }).map(() => icon("star", 11)).join("")}
              </div>
            </div>
          </div>
          <div class="t-body-m" style="line-height:22px;color:var(--md-sys-color-on-surface-variant)">${esc(r.t)}</div>
        </div>`));
    });
    body.replaceChildren(host);
  }

  let segKey = "intro";
  function paint() {
    body.classList.remove("anim-in");
    void body.offsetWidth;
    body.classList.add("anim-in");
    if (segKey === "intro") renderIntro();
    else if (segKey === "toc") renderToc();
    else renderReviews();
  }
  paint();

  seg.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-seg]");
    if (!btn || btn.dataset.seg === segKey) return;
    segKey = btn.dataset.seg;
    seg.querySelectorAll("button").forEach((x) => {
      x.classList.toggle("selected", x === btn);
      x.setAttribute("aria-selected", String(x === btn));
    });
    paint();
  });

  /* ---------------------------- interactions --------------------------- */
  appBar.querySelector('[data-act="back"]').addEventListener("click", () => router.pop());

  const toggleShelf = () => {
    const now = shelf.toggle(b.id);
    appBar.querySelector('[data-act="shelf"]').innerHTML = icon(now ? "bookmark-check" : "bookmark", 22);
    actions.querySelector('[data-act="shelf-btn"]').innerHTML = `${icon(now ? "bookmark-check" : "bookmark-plus", 18)}<span>${now ? "已在书架" : "加入书架"}</span>`;
    snackbar(now ? "已加入书架" : "已从书架移除", now ? "查看" : null, () => router.switchTab("library"));
  };
  appBar.querySelector('[data-act="shelf"]').addEventListener("click", toggleShelf);
  actions.querySelector('[data-act="shelf-btn"]').addEventListener("click", toggleShelf);

  const startReading = () => {
    if (!hasToc) {
      snackbar("这本书的目录尚未缓存，联网后可读");
      return;
    }
    router.push("reader", { id: b.id, chapter: saved?.chapter || 0 });
  };
  actions.querySelector('[data-act="read"]').addEventListener("click", startReading);
  bottomBar.querySelector('[data-act="read-bottom"]').addEventListener("click", startReading);

  actions.querySelector('[data-act="listen"]').addEventListener("click", () => router.push("audio", { id: b.id }));

  appBar.querySelector('[data-act="more"]').addEventListener("click", () => {
    const host = el(`<div></div>`);
    const rows = [
      { i: "share-2", t: "分享这本书" },
      { i: "download", t: "缓存到本地" },
      { i: "bell", t: "更新提醒" },
      { i: "ban", t: "不感兴趣" },
    ];
    rows.forEach((r) => {
      const row = el(`<div class="md-list-item"><span class="lead">${icon(r.i, 22)}</span>
          <span class="body"><span class="label">${esc(r.t)}</span></span></div>`);
      row.addEventListener("click", () => { snackbar(`${r.t}：已记录`); sheet.close(); });
      host.appendChild(row);
    });
    const sheet = openSheet({ title: b.title, subtitle: b.author, content: host });
  });

  scroll.addEventListener("scroll", () => {
    bottomBar.classList.toggle("show", scroll.scrollTop > 220);
  }, { passive: true });

  /* --------------------- container transform (FLIP) -------------------- */
  const from = params.from;
  const coverEl = hero.querySelector(".cover-wrap");
  if (from && from.width > 0) {
    const target = coverEl.getBoundingClientRect();
    const img = coverEl.querySelector("img");
    const ghost = el(`<div style="position:fixed;left:${from.left}px;top:${from.top}px;width:${from.width}px;height:${from.height}px;
        border-radius:10px;overflow:hidden;z-index:90;pointer-events:none;box-shadow:0 8px 24px rgba(0,0,0,.28)">
        <img src="${esc(b.cover)}" style="width:100%;height:100%;object-fit:cover">
      </div>`);
    document.getElementById("overlay-root").appendChild(ghost);
    if (img) img.style.opacity = "0";
    const t0 = performance.now();
    const dur = 420;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const e = ease(p);
      const left = from.left + (target.left - from.left) * e;
      const top = from.top + (target.top - from.top) * e;
      const w = from.width + (target.width - from.width) * e;
      const h = from.height + (target.height - from.height) * e;
      ghost.style.cssText = `position:fixed;left:${left}px;top:${top}px;width:${w}px;height:${h}px;
        border-radius:${10 + (16 - 10) * e}px;overflow:hidden;z-index:90;pointer-events:none;
        box-shadow:0 ${8 + 12 * e}px ${24 + 20 * e}px rgba(0,0,0,${0.28 - 0.1 * e})`;
      if (p < 1) requestAnimationFrame(step);
      else {
        if (img) img.style.opacity = "";
        ghost.remove();
      }
    };
    requestAnimationFrame(step);
  }

  /* -------------------- dynamic color from the cover ------------------- */
  let coverSeed = null;
  const probe = new Image();
  probe.crossOrigin = "anonymous";
  probe.src = b.cover;
  probe.onload = () => {
    import("../color.js").then(({ extractSeed }) => {
      const seed = extractSeed(probe);
      if (seed) { coverSeed = seed; setDynamicSeed(seed); }
    });
  };

  return {
    el: root,
    onResume() { if (coverSeed) setDynamicSeed(coverSeed); },
    onExit() { clearDynamicSeed(); },
  };
}
