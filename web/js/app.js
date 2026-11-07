/* ==========================================================================
   App bootstrap — routes, ripples, global shortcuts
   ========================================================================== */

import { Router } from "./router.js";
import { bindRipples } from "./ui.js";
import { applyAll, set as setStore, get as getStore } from "./store.js";
import { HomeView } from "./views/home.js";
import { DramaView } from "./views/drama.js";
import { LibraryView } from "./views/library.js";
import { MineView } from "./views/mine.js";
import { DetailView } from "./views/detail.js";
import { ReaderView } from "./views/reader.js";
import { SearchView } from "./views/search.js";
import { SettingsView, SettingsSectionView } from "./views/settings.js";
import { AudioView } from "./views/audio.js";
import { HistoryView } from "./views/history.js";
import { createRail } from "./views/rail.js";

const host = document.getElementById("view-root");
const overlay = document.getElementById("overlay-root");

let rail = null;
const router = new Router(host, {
  onStackChange(name) {
    if (rail && name) rail.setActive(name);
  },
});
rail = createRail(router);
document.getElementById("app").appendChild(rail.el);
router.register("home", HomeView);
router.register("drama", DramaView);
router.register("library", LibraryView);
router.register("mine", MineView);
router.register("detail", DetailView);
router.register("reader", ReaderView);
router.register("search", SearchView);
router.register("settings", SettingsView);
router.register("settings-section", SettingsSectionView);
router.register("audio", AudioView);
router.register("history", HistoryView);

bindRipples(document.body);
applyAll();

// Seed the first tab.
router.switchTab("home");

// Splash out
requestAnimationFrame(() => {
  document.getElementById("splash")?.classList.add("gone");
  setTimeout(() => document.getElementById("splash")?.remove(), 420);
});

// Keep the URL meaningful without a server-side router.
window.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    router.push("search", {});
  }
});

// Expose for debugging in the console.
window.__app = { router, store: { set: setStore, get: getStore } };
