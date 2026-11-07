/* ==========================================================================
   Settings — top-level groups + detail sections with live preview
   ========================================================================== */

import { el, esc, snackbar, openSheet, confirmDialog, makeSwitch, makeSlider, makeSegmented } from "../ui.js";
import { icon } from "../icons.js";
import { get, set, reset, SEED_PRESETS, seedLabel, applyAll } from "../store.js";
import { buildScheme } from "../color.js";

function appBar(title, router, { back = true } = {}) {
  const bar = el(`<header class="app-bar">
      <div class="bar-row">
        ${back ? `<button class="md-icon-btn" data-act="back">${icon("arrow-left", 24)}</button>` : ""}
        <div class="bar-title ellipsis">${esc(title)}</div>
      </div>
    </header>`);
  if (back) bar.querySelector('[data-act="back"]').addEventListener("click", () => router.pop());
  return bar;
}

function group(title) {
  const g = el(`<div class="settings-group">${title ? `<div class="group-head">${esc(title)}</div>` : ""}</div>`);
  return g;
}

function row({ label, support, trail, onClick, icon: iconName }) {
  const r = el(`<div class="setting-row ${onClick ? "clickable" : ""}">
      ${iconName ? `<span class="lead" style="color:var(--md-sys-color-on-surface-variant)">${icon(iconName, 22)}</span>` : ""}
      <div class="body"><div class="l">${esc(label)}</div>${support ? `<div class="s">${esc(support)}</div>` : ""}</div>
      <div class="trail"></div>
    </div>`);
  const t = r.querySelector(".trail");
  if (trail instanceof Node) t.appendChild(trail);
  else if (typeof trail === "string") t.innerHTML = trail;
  if (onClick) r.addEventListener("click", (e) => { if (!e.target.closest(".md-switch, .md-slider")) onClick(); });
  return r;
}

/* ------------------------------ top level ------------------------------- */

const GROUPS = [
  {
    title: "外观",
    key: "appearance",
    icon: "palette",
    desc: () => {
      const mode = { system: "跟随系统", light: "浅色", dark: "深色", eink: "墨纸" }[get("themeMode")];
      return `${mode} · ${get("dynamicColor") ? "动态取色" : seedLabel(get("seed"))}`;
    },
  },
  {
    title: "阅读",
    key: "reading",
    icon: "type",
    desc: () => `${get("flipMode") === "page" ? "左右翻页" : "上下滚动"} · ${get("readerSize")}px`,
  },
  {
    title: "听书",
    key: "audio",
    icon: "headphones",
    desc: () => `${get("ttsVoice")} · ${get("ttsSpeed").toFixed(1)}×`,
  },
  {
    title: "短剧",
    key: "drama",
    icon: "clapperboard",
    desc: () => `${get("dramaQuality")} · ${get("dramaAutoNext") ? "自动下一集" : "手动"}`,
  },
  {
    title: "数据与存储",
    key: "data",
    icon: "database",
    desc: () => "备份、缓存、重置",
  },
  {
    title: "关于",
    key: "about",
    icon: "info",
    desc: () => "什锦铺 MD3 Web 版 1.0.0",
  },
];

export function SettingsView({ router }) {
  const root = el(`<div class="page"></div>`);
  const bar = appBar("设置", router);
  const scroll = el(`<div class="page-scroll"></div>`);
  const wrap = el(`<div class="container-narrow" style="padding-bottom:40px"></div>`);

  const g = group("偏好设置");
  GROUPS.forEach((it) => {
    g.appendChild(row({
      label: it.title,
      support: it.desc(),
      icon: it.icon,
      trail: icon("chevron-right", 20),
      onClick: () => router.push("settings-section", { key: it.key }),
    }));
  });
  wrap.appendChild(g);

  const quick = group("快捷");
  const modeRow = row({
    label: "深色模式",
    support: "与系统外观保持一致",
    trail: (() => {
      const w = makeSwitch(get("themeMode") === "dark", (v) => {
        set({ themeMode: v ? "dark" : "light" });
        snackbar(v ? "已切换到深色" : "已切换到浅色");
        refresh();
      });
      return w;
    })(),
  });
  quick.appendChild(modeRow);
  quick.appendChild(row({
    label: "动态取色",
    support: "从封面提取主色，整套配色跟着变",
    trail: makeSwitch(get("dynamicColor"), (v) => { set({ dynamicColor: v }); refresh(); }),
  }));
  wrap.appendChild(quick);

  const resetG = group();
  resetG.appendChild(row({
    label: "恢复默认设置",
    support: "不会删除书架和阅读进度",
    trail: icon("rotate-ccw", 20),
    onClick: async () => {
      const ok = await confirmDialog({ title: "恢复默认设置？", message: "外观、阅读、听书等偏好会回到初始状态。", confirm: "恢复" });
      if (ok) { reset(); snackbar("已恢复默认设置"); refresh(); }
    },
  }));
  wrap.appendChild(resetG);

  scroll.appendChild(wrap);
  root.append(bar, scroll);

  function refresh() {
    // Rebuild rows so the switch states stay in sync.
    const idx = Array.from(root.querySelectorAll(".setting-row"));
    idx.forEach((n) => n.remove());
  }

  return { el: root };
}

/* ---------------------------- section pages ----------------------------- */

export function SettingsSectionView({ router, params }) {
  const key = params.key || "appearance";
  const titles = {
    appearance: "外观与主题",
    reading: "阅读设置",
    audio: "听书设置",
    drama: "短剧设置",
    data: "数据与存储",
    about: "关于",
  };
  const root = el(`<div class="page"></div>`);
  const bar = appBar(titles[key] || "设置", router);
  const scroll = el(`<div class="page-scroll"></div>`);
  const wrap = el(`<div class="container-narrow" style="padding-bottom:48px"></div>`);
  scroll.appendChild(wrap);
  root.append(bar, scroll);

  const add = (node) => wrap.appendChild(node);

  if (key === "appearance") {
    // Theme mode with live swatches
    const g1 = group("主题模式");
    const modes = [
      { v: "light", l: "浅色", s: "始终使用浅色外观" },
      { v: "dark", l: "深色", s: "始终使用深色外观" },
      { v: "system", l: "跟随系统", s: "随系统深浅色自动切换" },
      { v: "eink", l: "墨纸", s: "纯黑白、无动画，适合墨水屏" },
    ];
    modes.forEach((m) => {
      const swatch = el(`<div style="width:44px;height:28px;border-radius:8px;overflow:hidden;display:flex;box-shadow:inset 0 0 0 1px var(--md-sys-color-outline-variant)">
          <span style="flex:1;background:${m.v === "dark" ? "#141218" : m.v === "eink" ? "#ffffff" : "#fdf8f6"}"></span>
          <span style="flex:1;background:${m.v === "dark" ? "#e6e0e9" : m.v === "eink" ? "#000000" : "#201a18"}"></span>
        </div>`);
      const radio = el(`<div class="radio-dot ${get("themeMode") === m.v ? "on" : ""}"></div>`);
      g1.appendChild(row({
        label: m.l, support: m.s,
        trail: (() => {
          const c = el(`<div class="row" style="gap:12px"></div>`);
          c.append(swatch, radio);
          return c;
        })(),
        onClick: () => {
          set({ themeMode: m.v });
          wrap.querySelectorAll(".radio-dot").forEach((d) => d.classList.remove("on"));
          radio.classList.add("on");
        },
      }));
    });
    add(g1);

    const g2 = group("动态取色");
    g2.appendChild(row({
      label: "从封面取色",
      support: "打开书籍详情时，整套配色跟随封面主色",
      trail: makeSwitch(get("dynamicColor"), (v) => set({ dynamicColor: v })),
    }));
    const seedRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">主题色</span>
          <span class="t-body-s on-surface-variant" id="seed-name">${esc(seedLabel(get("seed")))}</span></div>
        <div class="seed-grid" id="seeds"></div>
        <div class="row" style="gap:10px;margin-top:4px">
          <input type="color" id="seed-pick" value="${esc(get("seed"))}" style="width:44px;height:36px;border:0;background:none">
          <span class="t-body-s on-surface-variant">自定义颜色</span>
        </div>
      </div>`);
    const seedHost = seedRow.querySelector("#seeds");
    SEED_PRESETS.forEach((p) => {
      const dot = el(`<button class="seed-dot ${p.seed.toLowerCase() === get("seed").toLowerCase() ? "on" : ""}"
          title="${esc(p.name)}" style="background:${p.seed}"></button>`);
      dot.addEventListener("click", () => {
        seedHost.querySelectorAll(".seed-dot").forEach((d) => d.classList.remove("on"));
        dot.classList.add("on");
        set({ seed: p.seed, dynamicColor: false });
        seedRow.querySelector("#seed-name").textContent = p.name;
        seedRow.querySelector("#seed-pick").value = p.seed;
      });
      seedHost.appendChild(dot);
    });
    seedRow.querySelector("#seed-pick").addEventListener("input", (e) => {
      set({ seed: e.target.value, dynamicColor: false });
      seedRow.querySelector("#seed-name").textContent = e.target.value.toUpperCase();
      seedHost.querySelectorAll(".seed-dot").forEach((d) => d.classList.remove("on"));
    });
    g2.appendChild(seedRow);
    add(g2);

    const g3 = group("对比度与形状");
    const contrastRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">对比度</span><span class="t-body-s on-surface-variant" id="ct">标准</span></div>
      </div>`);
    const contrastSeg = makeSegmented([
      { value: 0, label: "标准" },
      { value: 0.5, label: "较高" },
      { value: 1, label: "最高" },
    ], get("contrast"), (v) => {
      set({ contrast: Number(v) });
      contrastRow.querySelector("#ct").textContent = { 0: "标准", 0.5: "较高", 1: "最高" }[Number(v)];
    });
    contrastRow.appendChild(contrastSeg);
    g3.appendChild(contrastRow);

    g3.appendChild(row({
      label: "OLED 纯黑",
      support: "深色下大面积纯黑，省电且对比更强",
      trail: makeSwitch(get("oled"), (v) => set({ oled: v })),
    }));

    const shapeRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">圆角风格</span></div>
      </div>`);
    shapeRow.appendChild(makeSegmented([
      { value: "standard", label: "标准" },
      { value: "rounded", label: "圆润" },
      { value: "sharp", label: "锐利" },
    ], get("shape"), (v) => set({ shape: v })));
    g3.appendChild(shapeRow);

    const motionRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">动效强度</span><span class="t-body-s on-surface-variant">影响全局转场与动画</span></div>
      </div>`);
    motionRow.appendChild(makeSegmented([
      { value: "full", label: "完整" },
      { value: "reduced", label: "减弱" },
      { value: "off", label: "关闭" },
    ], get("motion"), (v) => set({ motion: v })));
    g3.appendChild(motionRow);
    add(g3);

    const g4 = group("文字大小");
    const fontRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">全局字号缩放</span><span class="t-body-s on-surface-variant" id="fs">${Math.round(get("fontScale") * 100)}%</span></div>
      </div>`);
    fontRow.appendChild(makeSlider({
      value: get("fontScale") * 100, min: 85, max: 125, step: 5,
      format: (v) => `${v}%`,
      onChange: (v) => {
        fontRow.querySelector("#fs").textContent = `${v}%`;
        set({ fontScale: v / 100 });
      },
    }));
    g4.appendChild(fontRow);
    add(g4);
  }

  if (key === "reading") {
    const g1 = group("排版");
    const sizeRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">字号</span><span class="t-body-s on-surface-variant" id="s1">${get("readerSize")} px</span></div></div>`);
    sizeRow.appendChild(makeSlider({
      value: get("readerSize"), min: 15, max: 30, step: 1, format: (v) => `${v} px`,
      onChange: (v) => { set({ readerSize: v }); sizeRow.querySelector("#s1").textContent = `${v} px`; },
    }));
    g1.appendChild(sizeRow);

    const lineRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">行距</span><span class="t-body-s on-surface-variant" id="s2">${get("readerLine").toFixed(1)}</span></div></div>`);
    lineRow.appendChild(makeSlider({
      value: get("readerLine") * 10, min: 13, max: 24, step: 1, format: (v) => (v / 10).toFixed(1),
      onChange: (v) => { set({ readerLine: v / 10 }); lineRow.querySelector("#s2").textContent = (v / 10).toFixed(1); },
    }));
    g1.appendChild(lineRow);

    const padRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">页边距</span><span class="t-body-s on-surface-variant" id="s3">${get("readerPad")} px</span></div></div>`);
    padRow.appendChild(makeSlider({
      value: get("readerPad"), min: 12, max: 48, step: 2, format: (v) => `${v} px`,
      onChange: (v) => { set({ readerPad: v }); padRow.querySelector("#s3").textContent = `${v} px`; },
    }));
    g1.appendChild(padRow);

    const fontRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">正文字体</span></div></div>`);
    fontRow.appendChild(makeSegmented([
      { value: "serif-cn", label: "宋体" },
      { value: "sans-cn", label: "黑体" },
      { value: "rounded", label: "圆体" },
    ], get("readerFont"), (v) => set({ readerFont: v })));
    g1.appendChild(fontRow);
    add(g1);

    const g2 = group("翻页");
    const flipRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">翻页方式</span></div></div>`);
    flipRow.appendChild(makeSegmented([
      { value: "page", label: "左右翻页" },
      { value: "scroll", label: "上下滚动" },
    ], get("flipMode"), (v) => set({ flipMode: v })));
    g2.appendChild(flipRow);

    const animRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">翻页动画</span></div></div>`);
    animRow.appendChild(makeSegmented([
      { value: "slide", label: "平移" },
      { value: "fade", label: "淡入" },
      { value: "none", label: "无" },
    ], get("flipAnim"), (v) => set({ flipAnim: v })));
    g2.appendChild(animRow);

    g2.appendChild(row({
      label: "点击两侧翻页", support: "关闭后点击两侧只呼出菜单",
      trail: makeSwitch(get("tapTurn"), (v) => set({ tapTurn: v })),
    }));
    g2.appendChild(row({
      label: "显示阅读进度", support: "底栏进度条与百分比",
      trail: makeSwitch(get("showReaderProgress"), (v) => set({ showReaderProgress: v })),
    }));
    add(g2);

    const g3 = group("阅读背景");
    const themes = [
      { v: "paper", c: "#fbf7f0", n: "米白" },
      { v: "sepia", c: "#f3e6cd", n: "羊皮纸" },
      { v: "green", c: "#e3ecdd", n: "护眼绿" },
      { v: "dark", c: "#14120f", n: "夜间" },
      { v: "oled", c: "#000000", n: "纯黑" },
    ];
    const themeRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">默认背景</span></div>
      <div class="row" style="gap:10px" id="rt"></div></div>`);
    themes.forEach((t) => {
      const dot = el(`<button class="seed-dot ${get("readerTheme") === t.v ? "on" : ""}" title="${esc(t.n)}"
          style="background:${t.c};border:1px solid var(--md-sys-color-outline-variant);width:40px;height:40px"></button>`);
      dot.addEventListener("click", () => {
        themeRow.querySelectorAll(".seed-dot").forEach((d) => d.classList.remove("on"));
        dot.classList.add("on");
        set({ readerTheme: t.v });
      });
      themeRow.querySelector("#rt").appendChild(dot);
    });
    g3.appendChild(themeRow);
    add(g3);
  }

  if (key === "audio") {
    const g1 = group("播放");
    const speedRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">朗读速度</span><span class="t-body-s on-surface-variant" id="sp">${get("ttsSpeed").toFixed(1)}×</span></div></div>`);
    speedRow.appendChild(makeSlider({
      value: get("ttsSpeed") * 10, min: 5, max: 30, step: 1, format: (v) => (v / 10).toFixed(1) + "×",
      onChange: (v) => { set({ ttsSpeed: v / 10 }); speedRow.querySelector("#sp").textContent = (v / 10).toFixed(1) + "×"; },
    }));
    g1.appendChild(speedRow);

    ["云希", "晓伊", "云扬", "小艺"].forEach((v) => {
      const dot = el(`<div class="radio-dot ${get("ttsVoice") === v ? "on" : ""}"></div>`);
      g1.appendChild(row({
        label: v, support: v === "云希" ? "男声 · 沉稳" : v === "晓伊" ? "女声 · 温柔" : v === "云扬" ? "男声 · 清朗" : "女声 · 活泼",
        trail: dot,
        onClick: () => {
          set({ ttsVoice: v });
          g1.querySelectorAll(".radio-dot").forEach((d) => d.classList.remove("on"));
          dot.classList.add("on");
        },
      }));
    });
    add(g1);

    const g2 = group("播放行为");
    g2.appendChild(row({
      label: "自动播放下一章", support: "一章读完继续下一章",
      trail: makeSwitch(get("autoNextChapter"), (v) => set({ autoNextChapter: v })),
    }));
    const sleepRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">定时关闭</span></div></div>`);
    sleepRow.appendChild(makeSegmented([
      { value: 0, label: "关闭" },
      { value: 15, label: "15 分钟" },
      { value: 30, label: "30 分钟" },
      { value: 60, label: "60 分钟" },
    ], get("sleepTimer"), (v) => set({ sleepTimer: Number(v) })));
    g2.appendChild(sleepRow);
    add(g2);
  }

  if (key === "drama") {
    const g1 = group("播放");
    g1.appendChild(row({
      label: "自动下一集", support: "播完自动续播",
      trail: makeSwitch(get("dramaAutoNext"), (v) => set({ dramaAutoNext: v })),
    }));
    const qRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">清晰度</span></div></div>`);
    qRow.appendChild(makeSegmented([
      { value: "720P", label: "720P" },
      { value: "1080P", label: "1080P" },
      { value: "4K", label: "4K" },
    ], get("dramaQuality"), (v) => set({ dramaQuality: v })));
    g1.appendChild(qRow);
    const splitRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">分屏布局</span></div></div>`);
    splitRow.appendChild(makeSegmented([
      { value: "auto", label: "横屏自动" },
      { value: "always", label: "始终分屏" },
      { value: "off", label: "关闭" },
    ], get("dramaSplit"), (v) => set({ dramaSplit: v })));
    g1.appendChild(splitRow);
    add(g1);
  }

  if (key === "data") {
    const g1 = group("存储");
    g1.appendChild(row({ label: "离线正文", support: "42.6 MB · 6 本", trail: `${icon("chevron-right", 18)}`, onClick: () => snackbar("清理完成") }));
    g1.appendChild(row({ label: "封面与图片缓存", support: "18.2 MB", trail: icon("chevron-right", 18), onClick: () => snackbar("清理完成") }));
    g1.appendChild(row({ label: "搜索历史", support: "最近 8 条", trail: icon("chevron-right", 18), onClick: () => snackbar("已清空") }));
    add(g1);

    const g2 = group("备份");
    g2.appendChild(row({ label: "导出书架与进度", support: "生成 JSON 备份文件", trail: icon("download", 18), onClick: () => snackbar("已导出备份") }));
    g2.appendChild(row({ label: "从文件恢复", support: "合并到当前书架", trail: icon("folder-down", 18), onClick: () => snackbar("请选择备份文件") }));
    add(g2);

    const g3 = group();
    g3.appendChild(row({
      label: "清空本地数据", support: "书架、进度与设置全部删除", trail: icon("trash-2", 18),
      onClick: async () => {
        const ok = await confirmDialog({ title: "清空本地数据？", message: "书架、阅读进度和所有偏好设置都会被删除，无法撤销。", confirm: "清空", danger: true });
        if (ok) { localStorage.clear(); location.reload(); }
      },
    }));
    add(g3);
  }

  if (key === "about") {
    const g1 = group();
    g1.appendChild(el(`<div style="padding:24px 16px 8px;text-align:center">
        <div style="width:72px;height:72px;border-radius:22px;margin:0 auto 14px;display:grid;place-items:center;
          background:linear-gradient(135deg,var(--md-sys-color-primary),var(--md-sys-color-tertiary));
          color:var(--md-sys-color-on-primary);font-size:28px;font-weight:700;box-shadow:var(--md-sys-elevation-2)">什</div>
        <div class="t-title-l">什锦铺</div>
        <div class="t-body-s on-surface-variant" style="margin-top:4px">MD3 Web 版 1.0.0 · build 20261104</div>
      </div>`));
    g1.appendChild(row({ label: "设计规范", support: "Material Design 3 · 动态取色 · 共享轴转场", trail: "" }));
    g1.appendChild(row({ label: "内容来源", support: "公开接口实时获取，应用不存储内容", trail: "" }));
    g1.appendChild(row({ label: "开源许可", support: "GPL-3.0 · 原作 ch6vip/fqapp", trail: icon("external-link", 18), onClick: () => window.open("https://github.com/ch6vip/fqapp", "_blank") }));
    add(g1);
  }

  scroll.addEventListener("scroll", () => bar.classList.toggle("scrolled", scroll.scrollTop > 4), { passive: true });
  return { el: root };
}
