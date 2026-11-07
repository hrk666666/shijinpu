/* ==========================================================================
   Preferences store — persisted settings + theme application
   ========================================================================== */

import { applyScheme, hexToHsl, hslCss } from "./color.js";

const KEY = "fqapp-md3:settings:v1";

export const DEFAULTS = {
  // Appearance
  themeMode: "system",        // system | light | dark | eink
  dynamicColor: true,         // pull seed from the open book's cover
  seed: "#E8452C",            // brand seed (original app accent)
  contrast: 0,                // 0 | 0.5 | 1
  oled: false,
  motion: "full",             // full | reduced | off
  shape: "standard",          // standard | rounded | sharp
  fontScale: 1,               // 0.9 .. 1.2
  // Reading
  readerTheme: "paper",       // paper | sepia | green | dark
  readerFont: "serif-cn",     // serif-cn | sans-cn | rounded | system
  readerSize: 19,             // px
  readerLine: 1.8,            // line-height
  readerPad: 24,              // horizontal padding
  flipMode: "page",           // page | scroll
  flipAnim: "slide",          // slide | cover | fade
  showReaderProgress: true,
  tapTurn: true,
  // Audio
  ttsSpeed: 1.0,
  ttsVoice: "云希",
  autoNextChapter: true,
  sleepTimer: 0,
  // Drama
  dramaAutoNext: true,
  dramaQuality: "1080P",
  dramaSplit: "auto",         // auto | always | off
  // System
  haptics: true,
  volumeKeys: true,
  comicAutoCache: true,
};

const listeners = new Set();
let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULTS };
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULTS };
  }
}

export function get(key) {
  return key ? state[key] : state;
}

export function set(patch, { silent = false } = {}) {
  const changed = Object.entries(patch).filter(([k, v]) => state[k] !== v);
  if (!changed.length) return;
  state = { ...state, ...patch };
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {}
  if (!silent) {
    changed.forEach(([k, v]) => listeners.forEach((fn) => fn(k, v, state)));
    applyAll();
  }
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function reset() {
  state = { ...DEFAULTS };
  localStorage.removeItem(KEY);
  applyAll();
  listeners.forEach((fn) => fn("reset", null, state));
}

/* ------------------------------ theme ---------------------------------- */

export function prefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function isDark() {
  if (state.themeMode === "eink") return false;
  if (state.themeMode === "dark") return true;
  if (state.themeMode === "light") return false;
  return prefersDark();
}

export function currentSeed() {
  return state.seed;
}

let dynamicSeed = null;
export function setDynamicSeed(hex) {
  if (!hex) return;
  dynamicSeed = hex;
  if (state.dynamicColor) applyAll();
}
export function clearDynamicSeed() {
  dynamicSeed = null;
  if (state.dynamicColor) applyAll();
}

export function applyAll() {
  const root = document.documentElement;
  const dark = isDark();
  const seed = state.dynamicColor && dynamicSeed ? dynamicSeed : state.seed;

  if (state.themeMode === "eink") {
    applyEink();
  } else {
    applyScheme(seed, dark, state.contrast, state.oled);
  }

  root.dataset.motion = state.motion;
  root.dataset.shape = state.shape;
  root.style.setProperty("--app-font-scale", state.fontScale);
  root.style.fontSize = `${16 * state.fontScale}px`;

  // Reader variables (used by the reader view)
  root.style.setProperty("--reader-size", `${state.readerSize}px`);
  root.style.setProperty("--reader-line", String(state.readerLine));
  root.style.setProperty("--reader-pad", `${state.readerPad}px`);
  root.style.setProperty("--reader-font", fontStack(state.readerFont));

  applyShape();
  syncChrome();
}

/* 安卓壳：把状态栏/导航栏刷成页面底色，避免深色主题下顶部出现一条米色。 */
let chromeTimer = 0;
function syncChrome() {
  const shell = window.AndroidShell;
  if (!shell || typeof shell.chrome !== "function") return;
  clearTimeout(chromeTimer);
  chromeTimer = setTimeout(() => {
    const hex = toHex(getComputedStyle(document.documentElement)
      .getPropertyValue("--md-sys-color-surface").trim());
    if (hex) shell.chrome(hex, isLightBg(hex));
  }, 60);
}

function toHex(value) {
  if (!value) return null;
  const probe = document.createElement("span");
  probe.style.color = value;
  if (!probe.style.color) return null;
  document.documentElement.appendChild(probe);
  const rgb = getComputedStyle(probe).color;
  probe.remove();
  const m = rgb.match(/[\d.]+/g);
  if (!m || m.length < 3) return null;
  return "#" + m.slice(0, 3)
    .map((n) => Math.round(Number(n)).toString(16).padStart(2, "0"))
    .join("");
}

function isLightBg(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 140;
}

function fontStack(f) {
  switch (f) {
    case "serif-cn":
      return '"Noto Serif SC", "Source Han Serif SC", "Songti SC", "STSong", "SimSun", serif';
    case "sans-cn":
      return '"Noto Sans SC", "Source Han Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif';
    case "rounded":
      return '"Quicksand", "PingFang SC", "Yuanti SC", "Hiragino Sans GB", sans-serif';
    default:
      return "var(--md-sys-font-family)";
  }
}

function applyShape() {
  const root = document.documentElement;
  const map = {
    standard: [4, 8, 12, 16, 28],
    rounded: [8, 12, 18, 24, 32],
    sharp: [0, 2, 4, 6, 12],
  }[state.shape] || [4, 8, 12, 16, 28];
  root.style.setProperty("--md-sys-shape-corner-extra-small", `${map[0]}px`);
  root.style.setProperty("--md-sys-shape-corner-small", `${map[1]}px`);
  root.style.setProperty("--md-sys-shape-corner-medium", `${map[2]}px`);
  root.style.setProperty("--md-sys-shape-corner-large", `${map[3]}px`);
  root.style.setProperty("--md-sys-shape-corner-extra-large", `${map[4]}px`);
}

function applyEink() {
  const root = document.documentElement;
  const roles = {
    primary: "#000000", "on-primary": "#ffffff", "primary-container": "#e6e6e6", "on-primary-container": "#000000",
    secondary: "#1a1a1a", "on-secondary": "#ffffff", "secondary-container": "#cccccc", "on-secondary-container": "#000000",
    tertiary: "#1a1a1a", "on-tertiary": "#ffffff", "tertiary-container": "#dddddd", "on-tertiary-container": "#000000",
    error: "#000000", "on-error": "#ffffff", "error-container": "#e0e0e0", "on-error-container": "#000000",
    background: "#ffffff", "on-background": "#000000",
    surface: "#ffffff", "on-surface": "#000000",
    "surface-variant": "#eeeeee", "on-surface-variant": "#333333",
    "surface-dim": "#f2f2f2", "surface-bright": "#ffffff",
    "surface-container-lowest": "#ffffff", "surface-container-low": "#fafafa",
    "surface-container": "#f5f5f5", "surface-container-high": "#efefef", "surface-container-highest": "#e8e8e8",
    "inverse-surface": "#111111", "inverse-on-surface": "#f5f5f5", "inverse-primary": "#dddddd",
    outline: "#555555", "outline-variant": "#c4c4c4",
    scrim: "#000000", shadow: "#000000",
  };
  for (const [k, v] of Object.entries(roles)) root.style.setProperty(`--md-sys-color-${k}`, v);
  root.style.colorScheme = "light";
  root.dataset.theme = "eink";
}

/* Follow the OS while in "system" mode. */
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (state.themeMode === "system") applyAll();
});

/* Seed presets — MD3-ish tonal sources. */
export const SEED_PRESETS = [
  { name: "朱砂", seed: "#E8452C" },
  { name: "黛蓝", seed: "#2D5BA8" },
  { name: "松绿", seed: "#2E7D5B" },
  { name: "赭石", seed: "#B4692F" },
  { name: "紫檀", seed: "#6B4C9A" },
  { name: "藕荷", seed: "#C2568D" },
  { name: "墨青", seed: "#2A6F7A" },
  { name: "杏黄", seed: "#C79A2E" },
];

export function seedLabel(hex) {
  const { h, s, l } = hexToHsl(hex);
  const preset = SEED_PRESETS.find((p) => p.seed.toLowerCase() === hex.toLowerCase());
  if (preset) return preset.name;
  return hslCss(h, s, l);
}

applyAll();
