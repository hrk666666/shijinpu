/* ==========================================================================
   Navigation rail — MD3 NavigationRail for wide viewports (>= 900px)
   ========================================================================== */

import { el, esc } from "../ui.js";
import { icon } from "../icons.js";

export const DESTINATIONS = [
  { key: "home", icon: "house", label: "首页" },
  { key: "drama", icon: "clapperboard", label: "短剧" },
  { key: "library", icon: "library-big", label: "书架" },
  { key: "mine", icon: "circle-user-round", label: "我的" },
];

export function createRail(router) {
  const rail = el(`<aside class="md-nav-rail" role="tablist" aria-label="主导航">
      <div class="rail-head">
        <div class="rail-mark">什</div>
      </div>
      <div class="rail-items"></div>
      <div class="rail-foot"></div>
    </aside>`);

  const items = rail.querySelector(".rail-items");
  const map = new Map();

  DESTINATIONS.forEach((d) => {
    const item = el(`<button class="rail-dest" role="tab" aria-selected="false" data-key="${d.key}">
        <span class="indicator">${icon(d.icon, 24)}</span>
        <span class="label">${esc(d.label)}</span>
      </button>`);
    item.addEventListener("click", () => {
      if (item.classList.contains("active") && !router.stack.length) {
        router.tabs.get(d.key)?.el?.querySelector(".page-scroll")?.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      router.switchTab(d.key);
    });
    items.appendChild(item);
    map.set(d.key, item);
  });

  const search = el(`<button class="rail-dest rail-search" aria-label="搜索">
      <span class="indicator">${icon("search", 24)}</span>
      <span class="label">搜索</span>
    </button>`);
  search.addEventListener("click", () => router.push("search", {}));
  rail.querySelector(".rail-foot").appendChild(search);

  function setActive(key) {
    if (!map.has(key)) return;
    map.forEach((node, k) => {
      const on = k === key;
      node.classList.toggle("active", on);
      node.setAttribute("aria-selected", String(on));
    });
  }
  setActive("home");

  return { el: rail, setActive };
}
