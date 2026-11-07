/* ==========================================================================
   Audio player — listening mode with chapter list and simulated playback
   ========================================================================== */

import { el, esc, snackbar, openSheet, makeSegmented } from "../ui.js";
import { icon } from "../icons.js";
import { book } from "../data.js";
import { get, set } from "../store.js";

export function AudioView({ router, params }) {
  const b = book(params.id);
  const root = el(`<div class="page audio-page"></div>`);
  if (!b) return { el: root };

  const toc = b.toc || [];
  let idx = 0;
  let playing = false;
  let elapsed = 0;
  let duration = 0;
  let timer = null;
  let speed = get("ttsSpeed");

  const bar = el(`<header class="app-bar"><div class="bar-row">
      <button class="md-icon-btn" data-act="back">${icon("chevron-down", 24)}</button>
      <div class="grow" style="text-align:center">
        <div class="t-body-s on-surface-variant">正在播放</div>
      </div>
      <button class="md-icon-btn" data-act="more">${icon("more-vertical", 22)}</button>
    </div></header>`);

  const hero = el(`<div class="audio-hero">
      <div class="audio-cover"><img src="${esc(b.cover)}" alt=""></div>
      <div class="audio-meta">
        <h2 id="a-title">${esc(b.title)}</h2>
        <p id="a-chapter"></p>
      </div>
      <div class="waveform" id="wave"></div>
      <div style="width:100%;max-width:420px">
        <div class="md-slider" id="a-seek" style="margin-bottom:6px">
          <div class="track"><div class="active" id="a-active" style="width:0%"></div></div>
          <div class="handle" id="a-handle" style="left:0%"></div>
        </div>
        <div class="spread" style="font-size:11px;color:var(--md-sys-color-on-surface-variant);font-variant-numeric:tabular-nums">
          <span id="a-cur">00:00</span><span id="a-dur">00:00</span>
        </div>
      </div>
      <div class="row" style="gap:20px;margin-top:12px">
        <button class="md-icon-btn" data-act="rewind">${icon("rotate-ccw", 22)}</button>
        <button class="md-icon-btn filled" data-act="play" style="width:64px;height:64px">${icon("play", 30)}</button>
        <button class="md-icon-btn" data-act="forward">${icon("skip-forward", 22)}</button>
      </div>
      <div class="row" style="gap:10px;margin-top:6px">
        <button class="md-chip" data-act="speed">${speed.toFixed(1)}× 倍速</button>
        <button class="md-chip" data-act="timer">${get("sleepTimer") ? get("sleepTimer") + " 分钟" : "定时"}</button>
        <button class="md-chip" data-act="toc">${icon("list", 14)}目录</button>
      </div>
    </div>`);

  const bottomBar = el(`<div style="padding:0 20px 24px">
      <div class="md-list-item" style="border-radius:20px;background:var(--md-sys-color-surface-container-low)" id="next-up"></div>
    </div>`);

  root.append(bar, hero, bottomBar);

  /* ------------------------------ waveform ----------------------------- */
  const wave = hero.querySelector("#wave");
  const bars = 48;
  for (let i = 0; i < bars; i++) {
    const h = 6 + Math.abs(Math.sin(i * 0.7)) * 26 + (i % 5) * 1.5;
    wave.appendChild(el(`<i style="height:${h}px"></i>`));
  }
  let waveRaf = 0;
  function animateWave(t) {
    if (!playing) return;
    const nodes = wave.children;
    for (let i = 0; i < nodes.length; i++) {
      const v = 6 + Math.abs(Math.sin(t / 220 + i * 0.55)) * 30;
      nodes[i].style.height = `${v}px`;
      nodes[i].style.opacity = String(0.35 + 0.45 * Math.abs(Math.sin(t / 400 + i * 0.2)));
    }
    waveRaf = requestAnimationFrame(animateWave);
  }

  /* ------------------------------ playback ----------------------------- */
  function chapter() {
    return toc[idx] || { t: b.title, w: 2500 };
  }
  function fmt(s) {
    const m = Math.floor(s / 60);
    return `${String(m).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  }
  function setChapter(i) {
    idx = Math.max(0, Math.min(toc.length - 1, i));
    const c = chapter();
    hero.querySelector("#a-chapter").textContent = c.t || "";
    duration = Math.max(90, (c.w || 2500) * 0.22);
    elapsed = 0;
    hero.querySelector("#a-dur").textContent = fmt(duration);
    const next = toc[idx + 1];
    bottomBar.querySelector("#next-up").innerHTML = `
      <span class="lead">${icon("skip-forward", 20)}</span>
      <span class="body"><span class="label">接下来</span>
      <span class="support">${esc(next ? next.t : "已经是最后一章")}</span></span>
      ${next ? icon("play", 18) : ""}`;
    tick();
  }
  function tick() {
    hero.querySelector("#a-cur").textContent = fmt(elapsed);
    const p = duration ? (elapsed / duration) * 100 : 0;
    hero.querySelector("#a-active").style.width = `${p}%`;
    hero.querySelector("#a-handle").style.left = `${p}%`;
  }
  function play() {
    playing = true;
    hero.querySelector('[data-act="play"]').innerHTML = icon("pause", 30);
    hero.querySelector(".audio-cover").classList.add("playing");
    animateWave(performance.now());
    timer = setInterval(() => {
      elapsed += 1 * speed;
      if (elapsed >= duration) {
        if (get("autoNextChapter") && idx < toc.length - 1) setChapter(idx + 1);
        else { elapsed = duration; pause(); }
      }
      tick();
    }, 1000);
  }
  function pause() {
    playing = false;
    clearInterval(timer);
    cancelAnimationFrame(waveRaf);
    hero.querySelector('[data-act="play"]').innerHTML = icon("play", 30);
    hero.querySelector(".audio-cover").classList.remove("playing");
  }

  bar.querySelector('[data-act="back"]').addEventListener("click", () => { pause(); router.pop(); });
  bar.querySelector('[data-act="more"]').addEventListener("click", () => {
    openSheet({
      title: "播放选项",
      content: (() => {
        const host = el(`<div style="margin:-8px 0"></div>`);
        ["定时关闭", "章节循环", "跳过片头", "后台播放"].forEach((t) => {
          const r = el(`<div class="md-list-item"><span class="body"><span class="label">${esc(t)}</span></span></div>`);
          r.addEventListener("click", () => snackbar(`${t}：已设置`));
          host.appendChild(r);
        });
        return host;
      })(),
    });
  });
  hero.querySelector('[data-act="play"]').addEventListener("click", () => (playing ? pause() : play()));
  hero.querySelector('[data-act="forward"]').addEventListener("click", () => setChapter(idx + 1));
  hero.querySelector('[data-act="rewind"]').addEventListener("click", () => setChapter(idx - 1));
  hero.querySelector('[data-act="speed"]').addEventListener("click", () => {
    const steps = [0.75, 1, 1.25, 1.5, 2];
    speed = steps[(steps.indexOf(speed) + 1) % steps.length];
    set({ ttsSpeed: speed });
    hero.querySelector('[data-act="speed"]').textContent = `${speed.toFixed(2).replace(/0$/, "")}× 倍速`;
  });
  hero.querySelector('[data-act="timer"]').addEventListener("click", () => {
    const opts = [0, 15, 30, 60];
    const cur = get("sleepTimer") || 0;
    const next = opts[(opts.indexOf(cur) + 1) % opts.length];
    set({ sleepTimer: next });
    hero.querySelector('[data-act="timer"]').textContent = next ? `${next} 分钟` : "定时";
    snackbar(next ? `${next} 分钟后停止` : "已取消定时");
  });
  hero.querySelector('[data-act="toc"]').addEventListener("click", () => {
    const host = el(`<div class="chapter-list" style="margin:-8px 0"></div>`);
    toc.forEach((c, i) => {
      const r = el(`<div class="chapter-row ${i === idx ? "current" : ""}">
          <span class="idx">${String(i + 1).padStart(2, "0")}</span>
          <span class="nm">${esc(c.t)}</span>
        </div>`);
      r.addEventListener("click", () => { setChapter(i); sheet.close(); if (!playing) play(); });
      host.appendChild(r);
    });
    const sheet = openSheet({ title: "播放列表", subtitle: b.title, content: host, fullHeight: true });
  });

  // Seek
  const seek = hero.querySelector("#a-seek");
  seek.addEventListener("pointerdown", (e) => {
    const move = (ev) => {
      const rect = seek.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
      elapsed = p * duration;
      tick();
    };
    move(e);
    const up = () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  });

  setChapter(params.chapter || 0);

  return {
    el: root,
    onExit() { pause(); },
  };
}
