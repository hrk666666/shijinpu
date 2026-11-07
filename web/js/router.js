/* ==========================================================================
   Router — page stack with Material shared-axis transitions + edge back
   ========================================================================== */

const EASE_IN = "cubic-bezier(0.05, 0.7, 0.1, 1)";     // emphasized decelerate
const EASE_OUT = "cubic-bezier(0.3, 0, 0.8, 0.15)";    // emphasized accelerate
const DUR = 420;

export class Router {
  constructor(host, { onStackChange } = {}) {
    this.host = host;
    this.stack = [];
    this.routes = new Map();
    this.onStackChange = onStackChange;
    this.busy = false;
    this.tabs = new Map();
    this.currentTab = "home";
    this._bindGestures();
    window.addEventListener("popstate", () => {
      if (this.stack.length > 1) this.pop(true);
      else history.pushState({ depth: 1 }, "");
    });
  }

  register(name, factory) {
    this.routes.set(name, factory);
  }

  /* ------------------------------ tabs -------------------------------- */

  switchTab(name, params = {}) {
    if (this.busy) return;
    if (name === this.currentTab && this.tabs.has(name) && !this.stack.length) return;
    this.busy = true;
    const prev = this.tabs.get(this.currentTab);
    const factory = this.routes.get(name);
    let next = this.tabs.get(name);
    if (!next) {
      next = factory({ router: this, params, isTab: true });
      this.tabs.set(name, next);
      next.el.classList.add("page", "tab-page");
      this.host.appendChild(next.el);
    }
    const wasStack = this.stack.length > 0;
    if (wasStack) this._clearStack(0);

    // A pushed page dims and hides the tab beneath it; restore every tab so a
    // tab switch from a pushed page never lands on an invisible page.
    this.tabs.forEach((tab) => {
      tab.el.style.visibility = "";
      tab.el.style.transform = "";
      tab.el.style.transition = "";
      if (tab.el !== next.el) tab.el.style.opacity = "";
    });

    next.el.style.display = "";
    this._fadeThrough(prev?.el, next.el);
    this.currentTab = name;
    this.onStackChange?.(name, 0);
    next.onResume?.();
    setTimeout(() => { this.busy = false; }, 60);
  }

  /* ------------------------------ push -------------------------------- */

  push(name, params = {}) {
    if (this.busy) return null;
    const factory = this.routes.get(name);
    if (!factory) throw new Error(`unknown route ${name}`);
    const page = factory({ router: this, params });
    page.el.classList.add("page", "pushed-page");
    page.el.style.transform = "translateX(30%)";
    page.el.style.opacity = "0";
    page.el.__page = page;
    this.host.appendChild(page.el);
    const below = this._topEl();
    this.stack.push(page);
    this.busy = true;

    requestAnimationFrame(() => {
      page.el.style.transition = `transform ${DUR}ms ${EASE_IN}, opacity ${Math.round(DUR * 0.7)}ms linear`;
      if (below) below.style.transition = `transform ${DUR}ms ${EASE_IN}, opacity ${Math.round(DUR * 0.7)}ms linear`;
      page.el.style.transform = "translateX(0)";
      page.el.style.opacity = "1";
      if (below) {
        below.style.transform = "translateX(-22%) scale(0.98)";
        below.style.opacity = "0.35";
      }
      setTimeout(() => {
        if (below) {
          below.style.visibility = "hidden";
          below.style.transition = "";
          below.style.transform = "";
          below.style.opacity = "";
        }
        page.el.style.transition = "";
        this.busy = false;
        page.onEnter?.();
      }, DUR);
    });
    history.pushState({ depth: this.stack.length + 1 }, "");
    this.onStackChange?.(name, this.stack.length);
    return page;
  }

  pop(fromHistory = false) {
    if (this.busy || !this.stack.length) return false;
    const page = this.stack.pop();
    const below = this._topEl();
    this.busy = true;
    page.el.style.transition = `transform ${Math.round(DUR * 0.78)}ms ${EASE_OUT}, opacity ${Math.round(DUR * 0.5)}ms linear`;
    page.el.style.transform = "translateX(30%)";
    page.el.style.opacity = "0";
    if (below) {
      below.style.visibility = "";
      below.style.transition = `transform ${DUR}ms ${EASE_IN}, opacity ${DUR}ms ${EASE_IN}`;
      below.style.transform = "translateX(0) scale(1)";
      below.style.opacity = "1";
    }
    setTimeout(() => {
      page.onExit?.();
      page.el.remove();
      if (below) { below.style.transition = ""; below.style.transform = ""; below.style.opacity = ""; }
      this.busy = false;
      (below && below.__page ? below.__page.onResume?.() : this.tabs.get(this.currentTab)?.onResume?.());
      this.onStackChange?.(below?._name || this.currentTab, this.stack.length);
    }, Math.round(DUR * 0.8));
    if (!fromHistory) history.back();
    return true;
  }

  popToTop() {
    while (this.stack.length) this.pop();
  }

  _topEl() {
    const t = this.stack[this.stack.length - 1];
    if (t) return t.el;
    return this.tabs.get(this.currentTab)?.el;
  }

  _clearStack() {
    this.stack.forEach((p) => { p.onExit?.(); p.el.remove(); });
    this.stack = [];
  }

  _fadeThrough(prevEl, nextEl) {
    if (prevEl && prevEl !== nextEl) {
      prevEl.style.transition = `opacity 90ms linear, transform 90ms linear`;
      prevEl.style.opacity = "0";
      prevEl.style.transform = "scale(0.98)";
      setTimeout(() => {
        prevEl.style.display = "none";
        prevEl.style.transition = "";
        prevEl.style.opacity = "";
        prevEl.style.transform = "";
      }, 100);
    }
    nextEl.style.opacity = "0";
    nextEl.style.transform = "scale(0.96)";
    requestAnimationFrame(() => {
      nextEl.style.transition = `opacity 210ms linear 90ms, transform 300ms ${EASE_IN} 90ms`;
      nextEl.style.opacity = "1";
      nextEl.style.transform = "scale(1)";
      setTimeout(() => { nextEl.style.transition = ""; }, 420);
    });
  }

  /* --------------------------- edge back gesture ----------------------- */

  _bindGestures() {
    let startX = 0, startY = 0, tracking = false, page = null, below = null, width = 0;
    this.host.addEventListener("pointerdown", (e) => {
      if (!this.stack.length || this.busy) return;
      if (e.clientX > 28) return;
      if (e.pointerType === "mouse" && e.buttons !== 1) return;
      tracking = true; startX = e.clientX; startY = e.clientY; width = this.host.clientWidth;
      page = this.stack[this.stack.length - 1];
      below = this._belowEl();
      page.el.style.transition = "none";
      if (below) { below.style.visibility = ""; below.style.transition = "none"; }
    });
    this.host.addEventListener("pointermove", (e) => {
      if (!tracking) return;
      const dx = Math.max(0, e.clientX - startX);
      const dy = Math.abs(e.clientY - startY);
      if (dy > 40 && dx < 20) { tracking = false; this._resetGesture(page, below); return; }
      const p = Math.min(1, dx / width);
      page.el.style.transform = `translateX(${p * 100}%)`;
      page.el.style.opacity = String(1 - p * 0.6);
      if (below) {
        below.style.transform = `translateX(${-22 + p * 22}%) scale(${0.98 + p * 0.02})`;
        below.style.opacity = String(0.35 + p * 0.65);
      }
    });
    const end = (e) => {
      if (!tracking) return;
      tracking = false;
      const dx = Math.max(0, (e.clientX || 0) - startX);
      const p = dx / width;
      if (p > 0.32) {
        page.el.style.transform = "";
        page.el.style.opacity = "";
        this.pop();
      } else {
        this._resetGesture(page, below, true);
      }
    };
    this.host.addEventListener("pointerup", end);
    this.host.addEventListener("pointercancel", end);
  }

  _belowEl() {
    const t = this.stack[this.stack.length - 2];
    return t ? t.el : this.tabs.get(this.currentTab)?.el;
  }

  _resetGesture(page, below, animated) {
    if (!page) return;
    const t = animated ? `transform 260ms ${EASE_IN}, opacity 260ms linear` : "none";
    page.el.style.transition = t;
    page.el.style.transform = "";
    page.el.style.opacity = "";
    if (below) {
      below.style.transition = t;
      below.style.transform = "";
      below.style.opacity = "";
    }
    if (animated) setTimeout(() => { page.el.style.transition = ""; if (below) below.style.transition = ""; }, 280);
  }
}
