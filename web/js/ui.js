/* ==========================================================================
   UI primitives — element helpers, ripple, sheets, snackbars, app-bar scroll
   ========================================================================== */

import { icon } from "./icons.js";

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

export function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

export function frag(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content;
}

export const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* Tween a number with rAF, honoring the motion preference. */
export function animate({ from = 0, to = 1, duration = 300, easing = "standard-decelerate", onUpdate, onDone }) {
  const curve = {
    standard: [0.2, 0, 0, 1],
    "standard-decelerate": [0, 0, 0, 1],
    "standard-accelerate": [0.3, 0, 1, 1],
    "emphasized-decelerate": [0.05, 0.7, 0.1, 1],
    "emphasized-accelerate": [0.3, 0, 0.8, 0.15],
  }[easing] || [0.2, 0, 0, 1];
  const scale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--md-motion-scale")) || 1;
  const dur = Math.max(1, duration * scale);
  const t0 = performance.now();
  const bez = (t) => {
    // Cubic-bezier solve (Newton-ish); good enough for UI easing.
    const [x1, y1, x2, y2] = curve;
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const sx = (tt) => ((ax * tt + bx) * tt + cx) * tt;
    const sy = (tt) => ((ay * tt + by) * tt + cy) * tt;
    let lo = 0, hi = 1, tt = t;
    for (let i = 0; i < 8; i++) {
      const x = sx(tt);
      if (Math.abs(x - t) < 1e-4) break;
      if (x < t) lo = tt; else hi = tt;
      tt = (lo + hi) / 2;
    }
    return sy(tt);
  };
  let raf = 0;
  const tick = (now) => {
    const p = Math.min(1, (now - t0) / dur);
    const v = from + (to - from) * bez(p);
    onUpdate?.(v, p);
    if (p < 1) raf = requestAnimationFrame(tick);
    else onDone?.();
  };
  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}

/* --------------------------------- Ripple -------------------------------- */

let rippleId = 0;
export function bindRipples(root = document.body) {
  let active = null;

  const down = (e) => {
    const host = e.target.closest("[data-ripple], .md-btn, .md-icon-btn, .md-fab, .md-chip, .md-list-item, .md-segmented button, .nav-dest");
    if (!host) return;
    if (host.hasAttribute("disabled") || host.getAttribute("aria-disabled") === "true") return;
    const rect = host.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const r = Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y));
    let layer = host.querySelector(":scope > .rippler");
    if (!layer) {
      layer = document.createElement("span");
      layer.className = "rippler";
      host.appendChild(layer);
    }
    const span = document.createElement("span");
    span.className = "ripple";
    span.dataset.id = String(++rippleId);
    span.style.cssText = `left:${x - r}px;top:${y - r}px;width:${r * 2}px;height:${r * 2}px`;
    layer.appendChild(span);
    active = span;
    const clean = () => {
      span.classList.add("fade");
      setTimeout(() => span.remove(), 300);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
    const up = () => clean();
    window.addEventListener("pointerup", up, { once: true });
    window.addEventListener("pointercancel", up, { once: true });
  };
  root.addEventListener("pointerdown", down);
}

/* -------------------------------- Snackbar ------------------------------- */

let snackHost = null;
export function snackbar(message, action, onAction) {
  if (!snackHost) {
    snackHost = el(`<div class="md-snackbar-host" id="snackbar-host"></div>`);
    document.getElementById("overlay-root")?.appendChild(snackHost) ||
      document.body.appendChild(snackHost);
  }
  const bar = el(`<div class="md-snackbar" role="status">
      <span class="msg"></span>
      ${action ? `<span class="action" role="button">${esc(action)}</span>` : ""}
    </div>`);
  bar.querySelector(".msg").textContent = message;
  if (action) bar.querySelector(".action").addEventListener("click", () => {
    onAction?.();
    dismiss();
  });
  snackHost.appendChild(bar);
  requestAnimationFrame(() => bar.classList.add("show"));
  const timer = setTimeout(dismiss, 4200);
  function dismiss() {
    clearTimeout(timer);
    bar.classList.remove("show");
    setTimeout(() => bar.remove(), 250);
  }
  return dismiss;
}

/* ----------------------------- Bottom sheet ------------------------------ */

export function openSheet({ title, subtitle, content, actions, onClose, fullHeight = false }) {
  const overlay = document.getElementById("overlay-root");
  const scrim = el(`<div class="md-scrim"></div>`);
  const sheet = el(`<div class="md-sheet" role="dialog" aria-modal="true">
      <div class="handle"></div>
      ${title ? `<div class="sheet-head">
        <div class="t-title-l">${esc(title)}</div>
        ${subtitle ? `<div class="t-body-m on-surface-variant">${esc(subtitle)}</div>` : ""}
      </div>` : ""}
      <div class="sheet-body"></div>
      ${actions ? `<div class="sheet-actions"></div>` : ""}
    </div>`);
  if (fullHeight) sheet.style.height = "88%";
  const body = sheet.querySelector(".sheet-body");
  if (typeof content === "string") body.innerHTML = content;
  else if (content) body.appendChild(content);
  if (actions) {
    const host = sheet.querySelector(".sheet-actions");
    host.style.cssText = "display:flex;gap:8px;padding:8px 24px 24px;justify-content:flex-end";
    actions.forEach((a) => host.appendChild(a));
  }
  overlay.append(scrim, sheet);
  requestAnimationFrame(() => {
    scrim.classList.add("show");
    sheet.classList.add("open");
  });

  let dragging = false, startY = 0, dy = 0;
  const onDown = (e) => {
    if (!e.target.closest(".handle, .sheet-head")) return;
    dragging = true; startY = e.clientY; dy = 0;
    sheet.classList.add("dragging");
    sheet.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    if (!dragging) return;
    dy = Math.max(0, e.clientY - startY);
    sheet.style.transform = `translateY(${dy}px)`;
  };
  const onUp = () => {
    if (!dragging) return;
    dragging = false;
    sheet.classList.remove("dragging");
    sheet.style.transform = "";
    if (dy > 96) close();
  };
  sheet.addEventListener("pointerdown", onDown);
  sheet.addEventListener("pointermove", onMove);
  sheet.addEventListener("pointerup", onUp);
  scrim.addEventListener("click", close);
  const onKey = (e) => { if (e.key === "Escape") close(); };
  document.addEventListener("keydown", onKey);

  let closed = false;
  function close() {
    if (closed) return;
    closed = true;
    document.removeEventListener("keydown", onKey);
    scrim.classList.remove("show");
    sheet.classList.remove("open");
    sheet.style.transform = "";
    setTimeout(() => { scrim.remove(); sheet.remove(); }, 350);
    onClose?.();
  }
  return { close, sheet, body };
}

/* --------------------------------- Dialog -------------------------------- */

export function confirmDialog({ title, message, confirm = "确定", cancel = "取消", danger = false }) {
  return new Promise((resolve) => {
    const host = el(`<div class="md-dialog">
        <div class="surface" role="alertdialog" aria-modal="true">
          <h2 class="headline">${esc(title)}</h2>
          ${message ? `<div class="supporting">${esc(message)}</div>` : ""}
          <div class="actions"></div>
        </div>
      </div>`);
    const actions = host.querySelector(".actions");
    const btnCancel = el(`<button class="md-btn text">${esc(cancel)}</button>`);
    const btnOk = el(`<button class="md-btn ${danger ? "filled" : "filled"}">${esc(confirm)}</button>`);
    if (danger) btnOk.style.setProperty("--_bg", "var(--md-sys-color-error)"), btnOk.style.setProperty("--_fg", "var(--md-sys-color-on-error)");
    actions.append(btnCancel, btnOk);
    document.getElementById("overlay-root").appendChild(host);
    requestAnimationFrame(() => host.classList.add("show"));
    const done = (v) => {
      host.classList.remove("show");
      setTimeout(() => host.remove(), 220);
      resolve(v);
    };
    btnCancel.addEventListener("click", () => done(false));
    btnOk.addEventListener("click", () => done(true));
    host.addEventListener("click", (e) => { if (e.target === host) done(false); });
  });
}

/* ------------------------------- Controls -------------------------------- */

export function makeSwitch(checked, onChange, { id } = {}) {
  const s = el(`<div class="md-switch" role="switch" tabindex="0" aria-checked="${checked}">
      <span class="thumb">${icon("check", 14)}</span>
    </div>`);
  if (id) s.id = id;
  const toggle = () => {
    const v = s.getAttribute("aria-checked") !== "true";
    s.setAttribute("aria-checked", String(v));
    onChange?.(v);
  };
  s.addEventListener("click", toggle);
  s.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); }
  });
  return s;
}

export function makeSlider({ value, min = 0, max = 100, step = 1, format = (v) => v, onChange, onCommit }) {
  const root = el(`<div class="md-slider" tabindex="0" role="slider">
      <div class="track"><div class="active"></div></div>
      <div class="handle"></div>
      <div class="value"></div>
    </div>`);
  const active = root.querySelector(".active");
  const handle = root.querySelector(".handle");
  const label = root.querySelector(".value");
  let v = value;

  const render = () => {
    const p = ((v - min) / (max - min)) * 100;
    active.style.width = `${p}%`;
    handle.style.left = `${p}%`;
    label.style.left = `${p}%`;
    label.textContent = format(v);
    root.setAttribute("aria-valuenow", String(v));
  };
  const setFromEvent = (e) => {
    const rect = root.getBoundingClientRect();
    let p = (e.clientX - rect.left) / rect.width;
    p = Math.max(0, Math.min(1, p));
    let nv = min + p * (max - min);
    nv = Math.round(nv / step) * step;
    nv = Math.max(min, Math.min(max, nv));
    if (nv !== v) { v = nv; render(); onChange?.(v); }
  };
  root.addEventListener("pointerdown", (e) => {
    root.classList.add("dragging");
    root.setPointerCapture?.(e.pointerId);
    setFromEvent(e);
  });
  root.addEventListener("pointermove", (e) => { if (root.classList.contains("dragging")) setFromEvent(e); });
  const end = () => {
    if (!root.classList.contains("dragging")) return;
    root.classList.remove("dragging");
    root.classList.add("show-value");
    setTimeout(() => root.classList.remove("show-value"), 700);
    onCommit?.(v);
  };
  root.addEventListener("pointerup", end);
  root.addEventListener("pointercancel", end);
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") { v = Math.min(max, v + step); render(); onChange?.(v); onCommit?.(v); }
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") { v = Math.max(min, v - step); render(); onChange?.(v); onCommit?.(v); }
  });
  render();
  return root;
}

export function makeSegmented(options, value, onChange) {
  const root = el(`<div class="md-segmented" role="tablist"></div>`);
  options.forEach((o) => {
    const b = el(`<button role="tab" aria-selected="${o.value === value}" class="${o.value === value ? "selected" : ""}">
        <span class="check">${icon("check", 18)}</span>
        <span>${esc(o.label)}</span>
      </button>`);
    b.dataset.value = o.value;
    b.addEventListener("click", () => {
      Array.from(root.children).forEach((c) => {
        c.classList.toggle("selected", c === b);
        c.setAttribute("aria-selected", String(c === b));
      });
      onChange?.(o.value);
    });
    root.appendChild(b);
  });
  return root;
}

/* ---------------------------- App bar scrolling --------------------------- */

export function bindAppBar(scrollEl, barEl, { threshold = 12 } = {}) {
  let last = 0;
  const onScroll = () => {
    const y = scrollEl.scrollTop;
    barEl.classList.toggle("scrolled", y > threshold);
    if (barEl.dataset.collapse === "true") {
      barEl.classList.toggle("collapsed", y > 96);
    }
    last = y;
  };
  scrollEl.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  return onScroll;
}

/* ------------------------------ Card builders ---------------------------- */

export function coverImg(book, { w = 84, h = 112, radius = 8, alt = "" } = {}) {
  const src = book.cover || "";
  return `<div class="cover" style="width:${w}px;height:${h}px;border-radius:${radius}px">
      ${src ? `<img src="${esc(src)}" alt="${esc(alt || book.title)}" loading="lazy" draggable="false">` : `<span class="cover-ph">${esc((book.title || "?")[0])}</span>`}
    </div>`;
}

export function skeletonCard(w = 120) {
  return `<div class="sk-card" style="width:${w}px">
      <div class="sk-cover ${w < 100 ? "sm" : ""}"></div>
      <div class="sk-line" style="width:80%"></div>
      <div class="sk-line" style="width:55%"></div>
    </div>`;
}

export function emptyState(iconName, title, message) {
  return `<div class="empty-state">
      <div class="empty-icon">${icon(iconName, 40)}</div>
      <div class="t-title-m">${esc(title)}</div>
      <div class="t-body-m on-surface-variant">${esc(message)}</div>
    </div>`;
}
