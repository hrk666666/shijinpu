/* ==========================================================================
   Bottom navigation (shared by tab pages) — MD3 NavigationBar
   ========================================================================== */

import { el, esc } from "../ui.js";
import { icon } from "../icons.js";

const DESTINATIONS = [
  { key: "home", icon: "house", label: "首页" },
  { key: "drama", icon: "clapperboard", label: "短剧" },
  { key: "library", icon: "library-big", label: "书架" },
  { key: "mine", icon: "circle-user-round", label: "我的" },
];

export function navBar(router, active) {
  const bar = el(`<nav class="md-nav-bar" role="tablist" aria-label="主导航"></nav>`);
  DESTINATIONS.forEach((d) => {
    const dest = el(`<div class="dest nav-dest ${d.key === active ? "active" : ""}" role="tab"
        aria-selected="${d.key === active}" data-key="${d.key}" tabindex="0">
        <span class="indicator">${icon(d.icon, 24)}</span>
        <span class="label">${esc(d.label)}</span>
      </div>`);
    const go = () => {
      if (dest.classList.contains("active") && !router.stack.length) {
        // Re-tap the current tab: scroll to top (Material convention).
        router.tabs.get(d.key)?.el?.querySelector(".page-scroll")?.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      router.switchTab(d.key);
    };
    dest.addEventListener("click", go);
    dest.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
    });
    bar.appendChild(dest);
  });
  return bar;
}
