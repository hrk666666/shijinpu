/* ==========================================================================
   Home — large app bar, category tabs, hero carousel, curated sections
   ========================================================================== */

import { el, esc, coverImg, emptyState } from "../ui.js";
import { icon } from "../icons.js";
import { DB, book, fmtWords, fmtShelf } from "../data.js";
import { navBar } from "./nav.js";

const TABS = DB.tabs;

function sectionHead(title, moreLabel = "查看全部", onMore) {
  const h = el(`<div class="section-head">
      <h2>${esc(title)}</h2>
      ${moreLabel ? `<span class="more">${esc(moreLabel)}${icon("chevron-right", 14)}</span>` : ""}
    </div>`);
  if (onMore) h.querySelector(".more")?.addEventListener("click", onMore);
  return h;
}

function tile(b, { rank = null, subtitle = "" } = {}) {
  const t = el(`<div class="book-tile reveal" role="button" tabindex="0">
      <div class="cover">
        <img src="${esc(b.cover)}" alt="${esc(b.title)}" loading="lazy" draggable="false">
        ${rank ? `<span class="rank-badge">${rank}</span>` : ""}
      </div>
      <div class="t">${esc(b.title)}</div>
      <div class="s">${esc(subtitle || b.author || "")}</div>
    </div>`);
  return t;
}

export function HomeView({ router }) {
  const root = el(`<div class="page tab-page home-page"></div>`);

  /* ------------------------------ app bar ------------------------------ */
  const appBar = el(`<header class="app-bar">
      <div class="bar-row">
        <div class="brand">
          <div class="brand-mark">什</div>
          <div class="brand-title">什锦铺<small>看到停不下来</small></div>
        </div>
        <button class="md-icon-btn" data-act="search" aria-label="搜索">${icon("search", 24)}</button>
        <button class="md-icon-btn" data-act="history" aria-label="阅读历史">${icon("history", 24)}</button>
      </div>
      <div class="large-head">
        <h1>发现</h1>
        <span class="tiny" id="today-tip"></span>
      </div>
    </header>`);

  const scroll = el(`<div class="page-scroll"></div>`);
  const tabStrip = el(`<div class="tab-strip" role="tablist"></div>`);
  const content = el(`<div class="feed"></div>`);
  scroll.append(tabStrip, content);
  root.append(appBar, scroll);

  /* ------------------------------- tabs -------------------------------- */
  let activeTab = "全部";
  TABS.forEach((t) => {
    const chip = el(`<button class="md-chip ${t === activeTab ? "selected" : ""}" role="tab"
        aria-selected="${t === activeTab}">${esc(t)}</button>`);
    chip.addEventListener("click", () => {
      if (t === activeTab) return;
      activeTab = t;
      tabStrip.querySelectorAll(".md-chip").forEach((c) => {
        c.classList.toggle("selected", c === chip);
        c.setAttribute("aria-selected", String(c === chip));
      });
      renderFeed(true);
      scroll.scrollTo({ top: 96, behavior: "smooth" });
    });
    tabStrip.appendChild(chip);
  });

  /* ------------------------------ carousel ------------------------------ */
  function heroCarousel(ids) {
    const wrap = el(`<div class="home-hero">
        <div class="carousel" id="hero-carousel"></div>
        <div class="dots" id="hero-dots"></div>
      </div>`);
    const track = wrap.querySelector("#hero-carousel");
    const dots = wrap.querySelector("#hero-dots");
    const list = ids.map((id) => book(id)).filter(Boolean);

    list.forEach((b, i) => {
      const card = el(`<article class="hero-card" role="button" tabindex="0">
          <div class="wash" style="background-image:url('${esc(b.cover)}')"></div>
          <div class="content">
            <div class="eyebrow">${esc(b.category || "精选")} · ${esc(fmtShelf(b.shelf) || "编辑推荐")}</div>
            <h3>${esc(b.title)}</h3>
            <p>${esc((b.abstract || "").replace(/\s+/g, " ").slice(0, 42))}</p>
            <span class="cta">${icon("play", 13)} 立即阅读</span>
          </div>
          <div class="art"><img src="${esc(b.cover)}" alt=""></div>
        </article>`);
      card.addEventListener("click", () => openDetail(b.id, card.querySelector(".art img")));
      track.appendChild(card);
      const dot = el(`<i class="${i === 0 ? "on" : ""}"></i>`);
      dots.appendChild(dot);
    });

    let idx = 0;
    let timer = null;
    let paused = false;
    const sync = () => {
      const w = track.firstElementChild?.getBoundingClientRect().width || 1;
      idx = Math.round(track.scrollLeft / (w + 12));
      Array.from(dots.children).forEach((d, i) => d.classList.toggle("on", i === idx));
    };
    track.addEventListener("scroll", sync, { passive: true });
    track.addEventListener("pointerdown", () => { paused = true; });
    window.addEventListener("pointerup", () => setTimeout(() => { paused = false; }, 2600));
    const tick = () => {
      if (paused || document.hidden) return;
      const card = track.children[idx + 1] || track.children[0];
      const target = idx + 1 < track.children.length ? card : track.children[0];
      track.scrollTo({ left: target.offsetLeft - 16, behavior: "smooth" });
    };
    clearInterval(timer);
    timer = setInterval(tick, 4600);

    wrap.addEventListener("mouseenter", () => { paused = true; });
    wrap.addEventListener("mouseleave", () => { paused = false; });
    return wrap;
  }

  /* ----------------------------- sections ------------------------------ */
  function continueRail() {
    const ids = DB.sections.continue.slice(0, 4);
    if (!ids.length) return null;
    const wrap = el(`<section class="section"></section>`);
    wrap.appendChild(sectionHead("接着看", "书架", () => router.switchTab("library")));
    const rail = el(`<div class="continue-rail"></div>`);
    ids.forEach((id) => {
      const b = book(id);
      const entry = DB.shelf.find((s) => s.id === id) || { percent: 0.12, chapter: 0 };
      if (!b) return;
      const toc = b.toc || [];
      const chTitle = toc[entry.chapter]?.t || "第 1 章";
      const card = el(`<div class="continue-card" role="button" tabindex="0">
          <div class="cover"><img src="${esc(b.cover)}" alt=""></div>
          <div class="info">
            <div class="t ellipsis">${esc(b.title)}</div>
            <div class="c ellipsis">${esc(chTitle)}</div>
            <div class="bar md-progress"><i style="width:${Math.round((entry.percent || 0) * 100)}%"></i></div>
          </div>
          <div class="play">${icon("play", 18)}</div>
        </div>`);
      card.addEventListener("click", () => router.push("reader", { id, chapter: entry.chapter || 0 }));
      rail.appendChild(card);
    });
    wrap.appendChild(rail);
    return wrap;
  }

  function bookGrid(title, ids, { cols = "auto" } = {}) {
    const wrap = el(`<section class="section"></section>`);
    wrap.appendChild(sectionHead(title, "", null));
    const grid = el(`<div class="book-grid" ${cols !== "auto" ? `style="grid-template-columns:repeat(${cols},1fr)"` : ""}></div>`);
    ids.forEach((id) => {
      const b = book(id);
      if (!b) return;
      const t = el(`<div class="book-tile reveal" role="button" tabindex="0" style="width:100%">
          <div class="cover" style="width:100%;height:auto;aspect-ratio:3/4">
            <img src="${esc(b.cover)}" alt="${esc(b.title)}" loading="lazy">
          </div>
          <div class="t">${esc(b.title)}</div>
          <div class="s">${esc(b.author)} · ${esc(b.category || "")}</div>
        </div>`);
      t.addEventListener("click", () => openDetail(id, t.querySelector("img")));
      grid.appendChild(t);
    });
    wrap.appendChild(grid);
    return wrap;
  }

  function rankSection(title, ids) {
    const wrap = el(`<section class="section"></section>`);
    wrap.appendChild(sectionHead(title, "更多", () => router.push("search", { initial: "" })));
    const list = el(`<div class="rank-list"></div>`);
    ids.forEach((id, i) => {
      const b = book(id);
      if (!b) return;
      const row = el(`<div class="rank-row reveal" role="button" tabindex="0">
          <div class="num">${i + 1}</div>
          <div class="cover"><img src="${esc(b.cover)}" alt="" loading="lazy"></div>
          <div class="meta">
            <div class="t ellipsis">${esc(b.title)}</div>
            <div class="a ellipsis">${esc(b.author)} · ${esc(b.category || "")}</div>
            <div class="tags">
              <span class="md-chip sm">${esc(fmtWords(b.wordNumber) || (b.serialCount ? b.serialCount + " 章" : "连载"))}</span>
              ${b.score ? `<span class="md-chip sm">${esc(b.score)} 分</span>` : ""}
            </div>
          </div>
          <div class="score">${esc(b.score || "9.2")}</div>
        </div>`);
      row.addEventListener("click", () => openDetail(id, row.querySelector("img")));
      list.appendChild(row);
    });
    wrap.appendChild(list);
    return wrap;
  }

  function categoryCloud() {
    const wrap = el(`<section class="section"></section>`);
    wrap.appendChild(sectionHead("按口味找", "", null));
    const cloud = el(`<div class="cat-cloud"></div>`);
    (DB.categories || []).slice(0, 14).forEach((c) => {
      const chip = el(`<button class="md-chip">${esc(c)}</button>`);
      chip.addEventListener("click", () => router.push("search", { initial: c }));
      cloud.appendChild(chip);
    });
    wrap.appendChild(cloud);
    return wrap;
  }

  /* Video-style cards for drama / comic tabs */
  function videoGrid(title, ids) {
    const wrap = el(`<section class="section"></section>`);
    wrap.appendChild(sectionHead(title, "", null));
    const grid = el(`<div class="book-grid" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))"></div>`);
    ids.forEach((id, i) => {
      const b = book(id);
      if (!b) return;
      const card = el(`<div class="video-card reveal" role="button" tabindex="0">
          <div class="thumb">
            <img src="${esc(b.cover)}" alt="" loading="lazy">
            <span class="dur">${["01:24", "02:36", "03:08", "00:58"][i % 4]}</span>
            <span class="play-dot">${icon("play", 16)}</span>
          </div>
          <div class="t clamp-2">${esc(b.title)}</div>
          <div class="s">${esc(b.category)} · ${12 + (i * 7) % 60} 集</div>
        </div>`);
      card.addEventListener("click", () => openDetail(id, card.querySelector("img")));
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    return wrap;
  }

  /* ------------------------------ feed --------------------------------- */
  function renderFeed(animate = false) {
    const heroIds = DB.sections.hero;
    const forYou = DB.sections.forYou;
    const rising = DB.sections.rising;
    const ranked = DB.sections.forYou.slice(0, 8);

    const frag = document.createDocumentFragment();
    if (activeTab === "全部") {
      frag.append(heroCarousel(heroIds));
      const c = continueRail();
      if (c) frag.append(c);
      frag.append(bookGrid("为你推荐", forYou.slice(0, 12)));
      frag.append(rankSection("本週口碑榜", ranked));
      frag.append(categoryCloud());
    } else if (activeTab === "小说") {
      frag.append(heroCarousel(heroIds));
      frag.append(bookGrid("小说精选", forYou.slice(0, 18)));
      frag.append(rankSection("小说热榜", ranked));
    } else if (activeTab === "听书") {
      frag.append(audioGrid("正在热播的有声书", rising.concat(forYou.slice(0, 6))));
    } else if (activeTab === "漫画" || activeTab === "漫剧") {
      frag.append(videoGrid(activeTab === "漫画" ? "条漫长图" : "漫剧新番", forYou.slice(0, 12)));
    } else if (activeTab === "短剧" || activeTab === "视频") {
      frag.append(videoGrid(activeTab === "短剧" ? "竖屏短剧" : "热门视频", forYou.slice(0, 12)));
    } else {
      frag.append(bookGrid(activeTab, forYou.slice(0, 12)));
    }
    frag.append(el(`<div class="bottom-spacer"></div>`));

    content.replaceChildren(frag);
    // Staggered reveal
    requestAnimationFrame(() => {
      Array.from(content.querySelectorAll(".reveal")).slice(0, 40).forEach((n, i) => {
        n.style.transitionDelay = `${Math.min(i * 18, 260)}ms`;
        n.classList.add("in");
      });
    });
    if (animate) {
      content.classList.remove("anim-in");
      void content.offsetWidth;
      content.classList.add("anim-in");
    }
  }

  function audioGrid(title, ids) {
    const wrap = el(`<section class="section"></section>`);
    wrap.appendChild(sectionHead(title, "", null));
    const grid = el(`<div class="book-grid" style="grid-template-columns:repeat(auto-fill,minmax(120px,1fr))"></div>`);
    ids.forEach((id, i) => {
      const b = book(id);
      if (!b) return;
      const card = el(`<div class="audio-tile reveal" role="button" tabindex="0">
          <div class="sq"><img src="${esc(b.cover)}" alt="" loading="lazy">
            <span class="mic">${icon("headphones", 14)}</span>
          </div>
          <div class="t clamp-2">${esc(b.title)}</div>
          <div class="s">${esc(b.author)} · ${(2 + (i % 6))} 小时</div>
        </div>`);
      card.addEventListener("click", () => router.push("audio", { id }));
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    return wrap;
  }

  /* --------------------------- interactions ---------------------------- */
  function openDetail(id, sourceEl) {
    const from = sourceEl?.getBoundingClientRect();
    router.push("detail", { id, from });
  }

  appBar.querySelector('[data-act="search"]').addEventListener("click", () => router.push("search", {}));
  appBar.querySelector('[data-act="history"]').addEventListener("click", () => router.push("history", {}));

  scroll.addEventListener("scroll", () => {
    const y = scroll.scrollTop;
    appBar.classList.toggle("scrolled", y > 8);
    appBar.classList.toggle("collapsed", y > 56);
    tabStrip.classList.toggle("stuck", y > 56);
  }, { passive: true });

  /* FAB: continue reading, shrinks to a circle on scroll */
  const fab = el(`<button class="md-fab extended" id="home-fab" style="position:absolute;right:16px;bottom:calc(var(--nav-bar-height) + 16px);z-index:15">
      ${icon("play", 22)}<span class="label">接着看</span>
    </button>`);
  fab.addEventListener("click", () => {
    const first = DB.sections.continue[0];
    if (first) router.push("reader", { id: first, chapter: DB.shelf.find((s) => s.id === first)?.chapter || 0 });
    else router.push("search", {});
  });
  let fabShrunk = false;
  scroll.addEventListener("scroll", () => {
    const shrink = scroll.scrollTop > 160;
    if (shrink !== fabShrunk) {
      fabShrunk = shrink;
      fab.classList.toggle("extended", !shrink);
    }
  }, { passive: true });

  renderFeed();
  root.append(scroll, fab, navBar(router, "home"));

  // "今天有 N 本新书" tip
  const tip = appBar.querySelector("#today-tip");
  if (tip) tip.textContent = `${Object.keys(DB.books).length} 本在架`;

  return {
    el: root,
    onResume() {
      // Refresh continue rail when coming back from the reader
      if (activeTab === "全部") renderFeed();
    },
  };
}
