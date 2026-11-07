/* ==========================================================================
   Drama — full-bleed vertical feed (short-form series)
   ========================================================================== */

import { el, esc, snackbar } from "../ui.js";
import { icon } from "../icons.js";
import { DB, book } from "../data.js";
import { navBar } from "./nav.js";

export function DramaView({ router }) {
  const root = el(`<div class="page tab-page drama-page" style="background:#000"></div>`);
  const feed = el(`<div class="drama-feed"></div>`);

  const ids = (DB.sections.forYou || []).slice(0, 6);
  ids.forEach((id, i) => {
    const b = book(id);
    if (!b) return;
    const card = el(`<section class="drama-card">
        <img class="bg" src="${esc(b.cover)}" alt="">
        <div class="grad"></div>
        <button class="play-big">${icon("play", 30)}</button>
        <div class="info">
          <div class="row" style="gap:8px;margin-bottom:8px">
            <span class="md-chip sm" style="background:rgba(255,255,255,.18);color:#fff;box-shadow:none;border:0">
              ${icon("flame", 12)} ${esc(b.category || "短剧")}
            </span>
            <span class="md-chip sm" style="background:rgba(255,255,255,.18);color:#fff;box-shadow:none;border:0">全 ${28 + i * 6} 集</span>
          </div>
          <h3>${esc(b.title)}</h3>
          <p class="clamp-2">${esc((b.abstract || "").replace(/\s+/g, " ").slice(0, 70))}</p>
          <div class="episode-rail">
            ${Array.from({ length: 8 }).map((_, k) => `<span class="ep ${k === 0 ? "on" : ""}">第 ${k + 1} 集</span>`).join("")}
          </div>
        </div>
        <div class="drama-side">
          <div class="side-act" data-act="like">${icon("heart", 24)}<span>${(1.2 + i * 0.4).toFixed(1)}w</span></div>
          <div class="side-act" data-act="bookmark">${icon("bookmark", 24)}<span>追剧</span></div>
          <div class="side-act" data-act="comment">${icon("message-circle", 24)}<span>${340 + i * 57}</span></div>
          <div class="side-act" data-act="share">${icon("share-2", 24)}<span>分享</span></div>
        </div>
      </section>`);
    card.querySelector(".play-big").addEventListener("click", () => {
      snackbar(`开始播放《${b.title}》`, "详情", () => router.push("detail", { id: b.id }));
    });
    card.querySelectorAll(".side-act").forEach((a) => a.addEventListener("click", () => {
      const act = a.dataset.act;
      if (act === "like") { a.querySelector(".lucide").style.fill = "currentColor"; a.querySelector(".lucide").style.color = "#ff6b6b"; }
      if (act === "bookmark") snackbar("已加入追剧");
      if (act === "comment") snackbar("评论功能演示");
      if (act === "share") snackbar("链接已复制");
    }));
    card.querySelectorAll(".ep").forEach((ep) => {
      ep.addEventListener("click", () => {
        card.querySelectorAll(".ep").forEach((x) => x.classList.remove("on"));
        ep.classList.add("on");
        snackbar(`播放 ${ep.textContent}`);
      });
    });
    feed.appendChild(card);
  });

  root.append(feed, navBar(router, "drama"));
  return { el: root };
}
