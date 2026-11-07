(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // js/icons.js
  function icon(name, size = 24, cls = "") {
    const d = ICONS[name] || ICONS["circle-x"] || "";
    return `<svg class="lucide ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true">${d}</svg>`;
  }
  var ICONS;
  var init_icons = __esm({
    "js/icons.js"() {
      ICONS = {
        "house": '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /> <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />',
        "clapperboard": '<path d="m12.296 3.464 3.02 3.956" /> <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" /> <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> <path d="m6.18 5.276 3.1 3.899" />',
        "library-big": '<rect width="8" height="18" x="3" y="3" rx="1" /> <path d="M7 3v18" /> <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />',
        "circle-user-round": '<path d="M17.925 20.056a6 6 0 0 0-11.851.001" /> <circle cx="12" cy="11" r="4" /> <circle cx="12" cy="12" r="10" />',
        "search": '<path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" />',
        "settings": '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /> <circle cx="12" cy="12" r="3" />',
        "arrow-left": '<path d="m12 19-7-7 7-7" /> <path d="M19 12H5" />',
        "arrow-right": '<path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />',
        "play": '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />',
        "headphones": '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />',
        "download": '<path d="M12 15V3" /> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /> <path d="m7 10 5 5 5-5" />',
        "more-vertical": '<circle cx="12" cy="12" r="1" /> <circle cx="12" cy="5" r="1" /> <circle cx="12" cy="19" r="1" />',
        "star": '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />',
        "bookmark": '<path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />',
        "bookmark-check": '<path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" /> <path d="m9 10 2 2 4-4" />',
        "sliders-horizontal": '<path d="M10 5H3" /> <path d="M12 19H3" /> <path d="M14 3v4" /> <path d="M16 17v4" /> <path d="M21 12h-9" /> <path d="M21 19h-5" /> <path d="M21 5h-7" /> <path d="M8 10v4" /> <path d="M8 12H3" />',
        "type": '<path d="M12 4v16" /> <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" /> <path d="M9 20h6" />',
        "chevron-right": '<path d="m9 18 6-6-6-6" />',
        "chevron-down": '<path d="m6 9 6 6 6-6" />',
        "chevron-left": '<path d="m15 18-6-6 6-6" />',
        "x": '<path d="M18 6 6 18" /> <path d="m6 6 12 12" />',
        "check": '<path d="M20 6 9 17l-5-5" />',
        "sun": '<circle cx="12" cy="12" r="4" /> <path d="M12 2v2" /> <path d="M12 20v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="m17.66 17.66 1.41 1.41" /> <path d="M2 12h2" /> <path d="M20 12h2" /> <path d="m6.34 17.66-1.41 1.41" /> <path d="m19.07 4.93-1.41 1.41" />',
        "moon": '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />',
        "monitor": '<rect width="20" height="14" x="2" y="3" rx="2" /> <line x1="8" x2="16" y1="21" y2="21" /> <line x1="12" x2="12" y1="17" y2="21" />',
        "palette": '<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" /> <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /> <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /> <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /> <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />',
        "book-open": '<path d="M12 5v16" /> <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />',
        "list": '<path d="M3 5h.01" /> <path d="M3 12h.01" /> <path d="M3 19h.01" /> <path d="M8 5h13" /> <path d="M8 12h13" /> <path d="M8 19h13" />',
        "message-circle": '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />',
        "share-2": '<circle cx="18" cy="5" r="3" /> <circle cx="6" cy="12" r="3" /> <circle cx="18" cy="19" r="3" /> <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /> <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />',
        "heart": '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />',
        "clock": '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l4 2" />',
        "history": '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" /> <path d="M12 7v5l4 2" />',
        "trash-2": '<path d="M10 11v6" /> <path d="M14 11v6" /> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /> <path d="M3 6h18" /> <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />',
        "folder-down": '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /> <path d="M12 10v6" /> <path d="m15 13-3 3-3-3" />',
        "rotate-ccw": '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" />',
        "sparkles": '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />',
        "flame": '<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />',
        "trending-up": '<path d="M16 7h6v6" /> <path d="m22 7-8.5 8.5-5-5L2 17" />',
        "filter": '<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />',
        "layout-grid": '<rect width="7" height="7" x="3" y="3" rx="1" /> <rect width="7" height="7" x="14" y="3" rx="1" /> <rect width="7" height="7" x="14" y="14" rx="1" /> <rect width="7" height="7" x="3" y="14" rx="1" />',
        "maximize": '<path d="M8 3H5a2 2 0 0 0-2 2v3" /> <path d="M21 8V5a2 2 0 0 0-2-2h-3" /> <path d="M3 16v3a2 2 0 0 0 2 2h3" /> <path d="M16 21h3a2 2 0 0 0 2-2v-3" />',
        "minimize": '<path d="M8 3v3a2 2 0 0 1-2 2H3" /> <path d="M21 8h-3a2 2 0 0 1-2-2V3" /> <path d="M3 16h3a2 2 0 0 1 2 2v3" /> <path d="M16 21v-3a2 2 0 0 1 2-2h3" />',
        "volume-2": '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /> <path d="M16 9a5 5 0 0 1 0 6" /> <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />',
        "skip-back": '<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" /> <path d="M3 20V4" />',
        "skip-forward": '<path d="M21 4v16" /> <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />',
        "pause": '<rect x="14" y="3" width="5" height="18" rx="1" /> <rect x="5" y="3" width="5" height="18" rx="1" />',
        "timer": '<line x1="10" x2="14" y1="2" y2="2" /> <line x1="12" x2="15" y1="14" y2="11" /> <circle cx="12" cy="14" r="8" />',
        "mic": '<path d="M12 19v3" /> <path d="M19 10v2a7 7 0 0 1-14 0v-2" /> <rect x="9" y="2" width="6" height="13" rx="3" />',
        "wifi-off": '<path d="M12 20h.01" /> <path d="M8.5 16.429a5 5 0 0 1 7 0" /> <path d="M5 12.859a10 10 0 0 1 5.17-2.69" /> <path d="M19 12.859a10 10 0 0 0-2.007-1.523" /> <path d="M2 8.82a15 15 0 0 1 4.177-2.643" /> <path d="M22 8.82a15 15 0 0 0-11.288-3.764" /> <path d="m2 2 20 20" />',
        "info": '<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />',
        "shield": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />',
        "database": '<ellipse cx="12" cy="5" rx="9" ry="3" /> <path d="M3 5V19A9 3 0 0 0 21 19V5" /> <path d="M3 12A9 3 0 0 0 21 12" />',
        "hard-drive": '<path d="M10 16h.01" /> <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /> <path d="M21.946 12.013H2.054" /> <path d="M6 16h.01" />',
        "smartphone": '<rect width="14" height="20" x="5" y="2" rx="2" ry="2" /> <path d="M12 18h.01" />',
        "bluetooth": '<path d="m7 7 10 10-5 5V2l5 5L7 17" />',
        "move-horizontal": '<path d="m18 8 4 4-4 4" /> <path d="M2 12h20" /> <path d="m6 8-4 4 4 4" />',
        "wrench": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />',
        "zap": '<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z" />',
        "bookmark-plus": '<path d="M12 7v6" /> <path d="M15 10H9" /> <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />',
        "book-marked": '<path d="M10 2v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834A.25.25 0 0016 9.751V2" /> <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H19a1 1 0 011 1v18a1 1 0 01-1 1H6.5a1 1 0 010-5H20" />',
        "image": '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /> <circle cx="9" cy="9" r="2" /> <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />',
        "film": '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M7 3v18" /> <path d="M3 7.5h4" /> <path d="M3 12h18" /> <path d="M3 16.5h4" /> <path d="M17 3v18" /> <path d="M17 7.5h4" /> <path d="M17 16.5h4" />',
        "radio": '<path d="M16.247 7.761a6 6 0 0 1 0 8.478" /> <path d="M19.075 4.933a10 10 0 0 1 0 14.134" /> <path d="M4.925 19.067a10 10 0 0 1 0-14.134" /> <path d="M7.753 16.239a6 6 0 0 1 0-8.478" /> <circle cx="12" cy="12" r="2" />',
        "plus": '<path d="M5 12h14" /> <path d="M12 5v14" />',
        "minus": '<path d="M5 12h14" />',
        "ellipsis": '<circle cx="12" cy="12" r="1" /> <circle cx="19" cy="12" r="1" /> <circle cx="5" cy="12" r="1" />',
        "circle-play": '<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" /> <circle cx="12" cy="12" r="10" />',
        "panel-left": '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M9 3v18" />',
        "panel-right": '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M15 3v18" />',
        "text-align-justify": '<path d="M3 5h18" /> <path d="M3 12h18" /> <path d="M3 19h18" />',
        "arrow-down-up": '<path d="m3 16 4 4 4-4" /> <path d="M7 20V4" /> <path d="m21 8-4-4-4 4" /> <path d="M17 4v16" />',
        "columns-2": '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M12 3v18" />',
        "rows-3": '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M21 9H3" /> <path d="M21 15H3" />',
        "library": '<path d="m16 6 4 14" /> <path d="M12 6v14" /> <path d="M8 8v12" /> <path d="M4 4v16" />',
        "square-pen": '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /> <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />',
        "cloud-download": '<path d="M12 13v8l-4-4" /> <path d="m12 21 4-4" /> <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />',
        "bell": '<path d="M10.268 21a2 2 0 0 0 3.464 0" /> <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />',
        "user-round": '<circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" />',
        "headset": '<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /> <path d="M21 16v2a4 4 0 0 1-4 4h-5" />',
        "sparkle": '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />',
        "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /> <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />',
        "external-link": '<path d="M15 3h6v6" /> <path d="M10 14 21 3" /> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />',
        "copy": '<rect width="14" height="14" x="8" y="8" rx="2" ry="2" /> <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />',
        "ban": '<circle cx="12" cy="12" r="10" /> <path d="M4.929 4.929 19.07 19.071" />',
        "refresh-cw": '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /> <path d="M21 3v5h-5" /> <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /> <path d="M8 16H3v5" />',
        "chevron-up": '<path d="m18 15-6-6-6 6" />',
        "circle-check": '<circle cx="12" cy="12" r="10" /> <path d="m16 9-5.5 5.5L8 12" />',
        "circle-x": '<circle cx="12" cy="12" r="10" /> <path d="m15 9-6 6" /> <path d="m9 9 6 6" />',
        "loader-circle": '<path d="M21 12a9 9 0 1 1-6.219-8.56" />'
      };
    }
  });

  // js/ui.js
  var ui_exports = {};
  __export(ui_exports, {
    $: () => $,
    $$: () => $$,
    animate: () => animate,
    bindAppBar: () => bindAppBar,
    bindRipples: () => bindRipples,
    confirmDialog: () => confirmDialog,
    coverImg: () => coverImg,
    el: () => el,
    emptyState: () => emptyState,
    esc: () => esc,
    frag: () => frag,
    makeSegmented: () => makeSegmented,
    makeSlider: () => makeSlider,
    makeSwitch: () => makeSwitch,
    openSheet: () => openSheet,
    skeletonCard: () => skeletonCard,
    snackbar: () => snackbar
  });
  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function frag(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content;
  }
  function animate({ from = 0, to = 1, duration = 300, easing = "standard-decelerate", onUpdate, onDone }) {
    const curve = {
      standard: [0.2, 0, 0, 1],
      "standard-decelerate": [0, 0, 0, 1],
      "standard-accelerate": [0.3, 0, 1, 1],
      "emphasized-decelerate": [0.05, 0.7, 0.1, 1],
      "emphasized-accelerate": [0.3, 0, 0.8, 0.15]
    }[easing] || [0.2, 0, 0, 1];
    const scale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--md-motion-scale")) || 1;
    const dur = Math.max(1, duration * scale);
    const t0 = performance.now();
    const bez = (t) => {
      const [x1, y1, x2, y2] = curve;
      const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
      const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
      const sx = (tt2) => ((ax * tt2 + bx) * tt2 + cx) * tt2;
      const sy = (tt2) => ((ay * tt2 + by) * tt2 + cy) * tt2;
      let lo = 0, hi = 1, tt = t;
      for (let i = 0; i < 8; i++) {
        const x = sx(tt);
        if (Math.abs(x - t) < 1e-4) break;
        if (x < t) lo = tt;
        else hi = tt;
        tt = (lo + hi) / 2;
      }
      return sy(tt);
    };
    let raf = 0;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const v = from + (to - from) * bez(p);
      onUpdate == null ? void 0 : onUpdate(v, p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else onDone == null ? void 0 : onDone();
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }
  function bindRipples(root = document.body) {
    let active = null;
    const down = (e) => {
      const host2 = e.target.closest("[data-ripple], .md-btn, .md-icon-btn, .md-fab, .md-chip, .md-list-item, .md-segmented button, .nav-dest");
      if (!host2) return;
      if (host2.hasAttribute("disabled") || host2.getAttribute("aria-disabled") === "true") return;
      const rect = host2.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const r = Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y));
      let layer = host2.querySelector(":scope > .rippler");
      if (!layer) {
        layer = document.createElement("span");
        layer.className = "rippler";
        host2.appendChild(layer);
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
  function snackbar(message, action, onAction) {
    var _a;
    if (!snackHost) {
      snackHost = el(`<div class="md-snackbar-host" id="snackbar-host"></div>`);
      ((_a = document.getElementById("overlay-root")) == null ? void 0 : _a.appendChild(snackHost)) || document.body.appendChild(snackHost);
    }
    const bar = el(`<div class="md-snackbar" role="status">
      <span class="msg"></span>
      ${action ? `<span class="action" role="button">${esc(action)}</span>` : ""}
    </div>`);
    bar.querySelector(".msg").textContent = message;
    if (action) bar.querySelector(".action").addEventListener("click", () => {
      onAction == null ? void 0 : onAction();
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
  function openSheet({ title, subtitle, content, actions, onClose, fullHeight = false }) {
    const overlay2 = document.getElementById("overlay-root");
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
      const host2 = sheet.querySelector(".sheet-actions");
      host2.style.cssText = "display:flex;gap:8px;padding:8px 24px 24px;justify-content:flex-end";
      actions.forEach((a) => host2.appendChild(a));
    }
    overlay2.append(scrim, sheet);
    requestAnimationFrame(() => {
      scrim.classList.add("show");
      sheet.classList.add("open");
    });
    let dragging = false, startY = 0, dy = 0;
    const onDown = (e) => {
      var _a;
      if (!e.target.closest(".handle, .sheet-head")) return;
      dragging = true;
      startY = e.clientY;
      dy = 0;
      sheet.classList.add("dragging");
      (_a = sheet.setPointerCapture) == null ? void 0 : _a.call(sheet, e.pointerId);
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
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    let closed = false;
    function close() {
      if (closed) return;
      closed = true;
      document.removeEventListener("keydown", onKey);
      scrim.classList.remove("show");
      sheet.classList.remove("open");
      sheet.style.transform = "";
      setTimeout(() => {
        scrim.remove();
        sheet.remove();
      }, 350);
      onClose == null ? void 0 : onClose();
    }
    return { close, sheet, body };
  }
  function confirmDialog({ title, message, confirm = "确定", cancel = "取消", danger = false }) {
    return new Promise((resolve) => {
      const host2 = el(`<div class="md-dialog">
        <div class="surface" role="alertdialog" aria-modal="true">
          <h2 class="headline">${esc(title)}</h2>
          ${message ? `<div class="supporting">${esc(message)}</div>` : ""}
          <div class="actions"></div>
        </div>
      </div>`);
      const actions = host2.querySelector(".actions");
      const btnCancel = el(`<button class="md-btn text">${esc(cancel)}</button>`);
      const btnOk = el(`<button class="md-btn ${danger ? "filled" : "filled"}">${esc(confirm)}</button>`);
      if (danger) btnOk.style.setProperty("--_bg", "var(--md-sys-color-error)"), btnOk.style.setProperty("--_fg", "var(--md-sys-color-on-error)");
      actions.append(btnCancel, btnOk);
      document.getElementById("overlay-root").appendChild(host2);
      requestAnimationFrame(() => host2.classList.add("show"));
      const done = (v) => {
        host2.classList.remove("show");
        setTimeout(() => host2.remove(), 220);
        resolve(v);
      };
      btnCancel.addEventListener("click", () => done(false));
      btnOk.addEventListener("click", () => done(true));
      host2.addEventListener("click", (e) => {
        if (e.target === host2) done(false);
      });
    });
  }
  function makeSwitch(checked, onChange, { id } = {}) {
    const s = el(`<div class="md-switch" role="switch" tabindex="0" aria-checked="${checked}">
      <span class="thumb">${icon("check", 14)}</span>
    </div>`);
    if (id) s.id = id;
    const toggle2 = () => {
      const v = s.getAttribute("aria-checked") !== "true";
      s.setAttribute("aria-checked", String(v));
      onChange == null ? void 0 : onChange(v);
    };
    s.addEventListener("click", toggle2);
    s.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggle2();
      }
    });
    return s;
  }
  function makeSlider({ value, min = 0, max = 100, step = 1, format = (v) => v, onChange, onCommit }) {
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
      const p = (v - min) / (max - min) * 100;
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
      if (nv !== v) {
        v = nv;
        render();
        onChange == null ? void 0 : onChange(v);
      }
    };
    root.addEventListener("pointerdown", (e) => {
      var _a;
      root.classList.add("dragging");
      (_a = root.setPointerCapture) == null ? void 0 : _a.call(root, e.pointerId);
      setFromEvent(e);
    });
    root.addEventListener("pointermove", (e) => {
      if (root.classList.contains("dragging")) setFromEvent(e);
    });
    const end = () => {
      if (!root.classList.contains("dragging")) return;
      root.classList.remove("dragging");
      root.classList.add("show-value");
      setTimeout(() => root.classList.remove("show-value"), 700);
      onCommit == null ? void 0 : onCommit(v);
    };
    root.addEventListener("pointerup", end);
    root.addEventListener("pointercancel", end);
    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        v = Math.min(max, v + step);
        render();
        onChange == null ? void 0 : onChange(v);
        onCommit == null ? void 0 : onCommit(v);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        v = Math.max(min, v - step);
        render();
        onChange == null ? void 0 : onChange(v);
        onCommit == null ? void 0 : onCommit(v);
      }
    });
    render();
    return root;
  }
  function makeSegmented(options, value, onChange) {
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
        onChange == null ? void 0 : onChange(o.value);
      });
      root.appendChild(b);
    });
    return root;
  }
  function bindAppBar(scrollEl, barEl, { threshold = 12 } = {}) {
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
  function coverImg(book2, { w = 84, h = 112, radius = 8, alt = "" } = {}) {
    const src = book2.cover || "";
    return `<div class="cover" style="width:${w}px;height:${h}px;border-radius:${radius}px">
      ${src ? `<img src="${esc(src)}" alt="${esc(alt || book2.title)}" loading="lazy" draggable="false">` : `<span class="cover-ph">${esc((book2.title || "?")[0])}</span>`}
    </div>`;
  }
  function skeletonCard(w = 120) {
    return `<div class="sk-card" style="width:${w}px">
      <div class="sk-cover ${w < 100 ? "sm" : ""}"></div>
      <div class="sk-line" style="width:80%"></div>
      <div class="sk-line" style="width:55%"></div>
    </div>`;
  }
  function emptyState(iconName, title, message) {
    return `<div class="empty-state">
      <div class="empty-icon">${icon(iconName, 40)}</div>
      <div class="t-title-m">${esc(title)}</div>
      <div class="t-body-m on-surface-variant">${esc(message)}</div>
    </div>`;
  }
  var $, $$, esc, rippleId, snackHost;
  var init_ui = __esm({
    "js/ui.js"() {
      init_icons();
      $ = (sel, root = document) => root.querySelector(sel);
      $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
      esc = (s) => String(s != null ? s : "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
      rippleId = 0;
      snackHost = null;
    }
  });

  // js/color.js
  var color_exports = {};
  __export(color_exports, {
    applyScheme: () => applyScheme,
    buildScheme: () => buildScheme,
    extractSeed: () => extractSeed,
    hexToHsl: () => hexToHsl,
    hexToRgb: () => hexToRgb,
    hslCss: () => hslCss,
    rgbToHex: () => rgbToHex,
    rgbToHsl: () => rgbToHsl
  });
  function hexToRgb(hex) {
    const h = hex.replace("#", "").trim();
    const s = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const n = parseInt(s, 16);
    return { r: n >> 16 & 255, g: n >> 8 & 255, b: n & 255 };
  }
  function rgbToHex(r, g, b) {
    const f = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
    return `#${f(r)}${f(g)}${f(b)}`;
  }
  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    const d = max - min;
    if (d !== 0) {
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        default:
          h = (r - g) / d + 4;
      }
      h *= 60;
    }
    return { h, s, l };
  }
  function hexToHsl(hex) {
    const { r, g, b } = hexToRgb(hex);
    return rgbToHsl(r, g, b);
  }
  function hslCss(h, s, l) {
    return `hsl(${h.toFixed(1)} ${(s * 100).toFixed(1)}% ${l.toFixed(1)}%)`;
  }
  function tone(h, chroma, t) {
    const l = Math.max(0, Math.min(100, t));
    if (l <= 1) return "hsl(0 0% 0%)";
    if (l >= 99) return "hsl(0 0% 100%)";
    const falloff = 1 - Math.abs(l - 50) / 118;
    const s = Math.max(chroma * falloff, chroma * 0.3);
    return hslCss(h, Math.min(s, 1), l);
  }
  function palette(h, chroma) {
    const p = {};
    [0, 4, 6, 10, 12, 17, 20, 22, 24, 25, 30, 35, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100].forEach((t) => {
      p[t] = tone(h, chroma, t);
    });
    return p;
  }
  function buildScheme(seedHex, dark, contrast = 0, oled = false) {
    const { h, s } = hexToHsl(seedHex);
    const c = clamp(s, 0.18, 0.85);
    const shift = Math.round(contrast * 8);
    const P = palette(h, clamp(c, 0.35, 0.9));
    const S = palette(h + 12, clamp(c * 0.5, 0.16, 0.5));
    const T = palette((h + 58) % 360, clamp(c * 0.68, 0.2, 0.62));
    const N = palette(h, 0.045);
    const NV = palette(h, 0.09);
    const E = palette(25, 0.62);
    const roles = dark ? {
      primary: P[80],
      "on-primary": P[20],
      "primary-container": P[30],
      "on-primary-container": P[90],
      secondary: S[80],
      "on-secondary": S[20],
      "secondary-container": S[30],
      "on-secondary-container": S[90],
      tertiary: T[80],
      "on-tertiary": T[20],
      "tertiary-container": T[30],
      "on-tertiary-container": T[90],
      error: E[80],
      "on-error": E[20],
      "error-container": E[30],
      "on-error-container": E[90],
      background: N[6],
      "on-background": N[90],
      surface: N[6],
      "on-surface": N[90],
      "surface-variant": NV[30],
      "on-surface-variant": NV[80],
      "surface-dim": N[6],
      "surface-bright": N[24],
      "surface-container-lowest": N[4],
      "surface-container-low": N[10],
      "surface-container": N[12],
      "surface-container-high": N[17],
      "surface-container-highest": N[22],
      "inverse-surface": N[90],
      "inverse-on-surface": N[20],
      "inverse-primary": P[40],
      outline: NV[60],
      "outline-variant": NV[30],
      scrim: "#000000",
      shadow: "#000000"
    } : {
      primary: P[40],
      "on-primary": P[100],
      "primary-container": P[90],
      "on-primary-container": P[10],
      secondary: S[40],
      "on-secondary": S[100],
      "secondary-container": S[90],
      "on-secondary-container": S[10],
      tertiary: T[40],
      "on-tertiary": T[100],
      "tertiary-container": T[90],
      "on-tertiary-container": T[10],
      error: E[40],
      "on-error": E[100],
      "error-container": E[90],
      "on-error-container": E[10],
      background: N[98],
      "on-background": N[10],
      surface: N[98],
      "on-surface": N[10],
      "surface-variant": NV[90],
      "on-surface-variant": NV[30],
      "surface-dim": N[87],
      "surface-bright": N[98],
      "surface-container-lowest": N[100],
      "surface-container-low": N[96],
      "surface-container": N[94],
      "surface-container-high": N[92],
      "surface-container-highest": N[90],
      "inverse-surface": N[20],
      "inverse-on-surface": N[95],
      "inverse-primary": P[80],
      outline: NV[50],
      "outline-variant": NV[80],
      scrim: "#000000",
      shadow: "#000000"
    };
    if (dark && oled) {
      roles.surface = "#000000";
      roles.background = "#000000";
      roles["surface-dim"] = "#000000";
      roles["surface-container-lowest"] = "#000000";
      roles["surface-container-low"] = "#0a0a0a";
      roles["surface-container"] = "#101010";
      roles["surface-container-high"] = "#181818";
      roles["surface-container-highest"] = "#202020";
      roles["outline-variant"] = NV[35];
    }
    if (contrast > 0) {
      const onDark = dark;
      roles["on-surface"] = onDark ? N[96] : N[Math.max(4, 10 - shift)];
      roles["on-surface-variant"] = onDark ? NV[90] : NV[Math.max(18, 30 - shift)];
      roles["outline"] = onDark ? NV[70] : NV[Math.max(35, 50 - shift)];
      roles.primary = onDark ? P[87] : P[Math.max(24, 40 - shift)];
    }
    return roles;
  }
  function applyScheme(seedHex, dark, contrast, oled) {
    const roles = buildScheme(seedHex, dark, contrast, oled);
    const root = document.documentElement;
    for (const [k, v] of Object.entries(roles)) root.style.setProperty(`--md-sys-color-${k}`, v);
    root.style.colorScheme = dark ? "dark" : "light";
    root.dataset.theme = dark ? "dark" : "light";
    return roles;
  }
  function extractSeed(imgEl) {
    try {
      const n = 32;
      const c = document.createElement("canvas");
      c.width = n;
      c.height = n;
      const ctx = c.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(imgEl, 0, 0, n, n);
      const { data } = ctx.getImageData(0, 0, n, n);
      const buckets = /* @__PURE__ */ new Map();
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] < 128) continue;
        const { h, s, l } = rgbToHsl(data[i], data[i + 1], data[i + 2]);
        if (s < 0.16 || l < 0.12 || l > 0.88) continue;
        const key = Math.round(h / 15) % 24;
        const b = buckets.get(key) || { w: 0, hs: 0, ss: 0, ls: 0, n: 0 };
        const w = s * (1 - Math.abs(l - 0.5) * 1.1);
        b.w += w;
        b.hs += h * w;
        b.ss += s * w;
        b.ls += l * w;
        b.n += 1;
        buckets.set(key, b);
      }
      let best = null;
      for (const b of buckets.values()) if (!best || b.w > best.w) best = b;
      if (!best || best.w <= 0) return null;
      let h2 = best.hs / best.w;
      let s2 = clamp(best.ss / best.w, 0.5, 0.82);
      let l2 = clamp(best.ls / best.w, 0.42, 0.56);
      if (h2 > 60 && h2 < 95) {
        h2 = h2 < 78 ? 96 : 42;
      }
      if (h2 > 155 && h2 < 185) h2 = 172;
      const c2 = document.createElement("canvas").getContext("2d");
      c2.fillStyle = hslCss(h2, s2, l2);
      c2.fillRect(0, 0, 1, 1);
      const [r2, g2, b2] = c2.getImageData(0, 0, 1, 1).data;
      return rgbToHex(r2, g2, b2);
    } catch (e) {
      return null;
    }
  }
  var clamp;
  var init_color = __esm({
    "js/color.js"() {
      clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    }
  });

  // js/router.js
  var EASE_IN = "cubic-bezier(0.05, 0.7, 0.1, 1)";
  var EASE_OUT = "cubic-bezier(0.3, 0, 0.8, 0.15)";
  var DUR = 420;
  var Router = class {
    constructor(host2, { onStackChange } = {}) {
      this.host = host2;
      this.stack = [];
      this.routes = /* @__PURE__ */ new Map();
      this.onStackChange = onStackChange;
      this.busy = false;
      this.tabs = /* @__PURE__ */ new Map();
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
      var _a, _b;
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
      this.tabs.forEach((tab) => {
        tab.el.style.visibility = "";
        tab.el.style.transform = "";
        tab.el.style.transition = "";
        if (tab.el !== next.el) tab.el.style.opacity = "";
      });
      next.el.style.display = "";
      this._fadeThrough(prev == null ? void 0 : prev.el, next.el);
      this.currentTab = name;
      (_a = this.onStackChange) == null ? void 0 : _a.call(this, name, 0);
      (_b = next.onResume) == null ? void 0 : _b.call(next);
      setTimeout(() => {
        this.busy = false;
      }, 60);
    }
    /* ------------------------------ push -------------------------------- */
    push(name, params = {}) {
      var _a;
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
          var _a2;
          if (below) {
            below.style.visibility = "hidden";
            below.style.transition = "";
            below.style.transform = "";
            below.style.opacity = "";
          }
          page.el.style.transition = "";
          this.busy = false;
          (_a2 = page.onEnter) == null ? void 0 : _a2.call(page);
        }, DUR);
      });
      history.pushState({ depth: this.stack.length + 1 }, "");
      (_a = this.onStackChange) == null ? void 0 : _a.call(this, name, this.stack.length);
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
        var _a, _b, _c, _d, _e, _f;
        (_a = page.onExit) == null ? void 0 : _a.call(page);
        page.el.remove();
        if (below) {
          below.style.transition = "";
          below.style.transform = "";
          below.style.opacity = "";
        }
        this.busy = false;
        below && below.__page ? (_c = (_b = below.__page).onResume) == null ? void 0 : _c.call(_b) : (_e = (_d = this.tabs.get(this.currentTab)) == null ? void 0 : _d.onResume) == null ? void 0 : _e.call(_d);
        (_f = this.onStackChange) == null ? void 0 : _f.call(this, (below == null ? void 0 : below._name) || this.currentTab, this.stack.length);
      }, Math.round(DUR * 0.8));
      if (!fromHistory) history.back();
      return true;
    }
    popToTop() {
      while (this.stack.length) this.pop();
    }
    _topEl() {
      var _a;
      const t = this.stack[this.stack.length - 1];
      if (t) return t.el;
      return (_a = this.tabs.get(this.currentTab)) == null ? void 0 : _a.el;
    }
    _clearStack() {
      this.stack.forEach((p) => {
        var _a;
        (_a = p.onExit) == null ? void 0 : _a.call(p);
        p.el.remove();
      });
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
        setTimeout(() => {
          nextEl.style.transition = "";
        }, 420);
      });
    }
    /* --------------------------- edge back gesture ----------------------- */
    _bindGestures() {
      let startX = 0, startY = 0, tracking = false, page = null, below = null, width = 0;
      this.host.addEventListener("pointerdown", (e) => {
        if (!this.stack.length || this.busy) return;
        if (e.clientX > 28) return;
        if (e.pointerType === "mouse" && e.buttons !== 1) return;
        tracking = true;
        startX = e.clientX;
        startY = e.clientY;
        width = this.host.clientWidth;
        page = this.stack[this.stack.length - 1];
        below = this._belowEl();
        page.el.style.transition = "none";
        if (below) {
          below.style.visibility = "";
          below.style.transition = "none";
        }
      });
      this.host.addEventListener("pointermove", (e) => {
        if (!tracking) return;
        const dx = Math.max(0, e.clientX - startX);
        const dy = Math.abs(e.clientY - startY);
        if (dy > 40 && dx < 20) {
          tracking = false;
          this._resetGesture(page, below);
          return;
        }
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
      var _a;
      const t = this.stack[this.stack.length - 2];
      return t ? t.el : (_a = this.tabs.get(this.currentTab)) == null ? void 0 : _a.el;
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
      if (animated) setTimeout(() => {
        page.el.style.transition = "";
        if (below) below.style.transition = "";
      }, 280);
    }
  };

  // js/app.js
  init_ui();

  // js/store.js
  init_color();
  var KEY = "fqapp-md3:settings:v1";
  var DEFAULTS = {
    // Appearance
    themeMode: "system",
    // system | light | dark | eink
    dynamicColor: true,
    // pull seed from the open book's cover
    seed: "#E8452C",
    // brand seed (original app accent)
    contrast: 0,
    // 0 | 0.5 | 1
    oled: false,
    motion: "full",
    // full | reduced | off
    shape: "standard",
    // standard | rounded | sharp
    fontScale: 1,
    // 0.9 .. 1.2
    // Reading
    readerTheme: "paper",
    // paper | sepia | green | dark
    readerFont: "serif-cn",
    // serif-cn | sans-cn | rounded | system
    readerSize: 19,
    // px
    readerLine: 1.8,
    // line-height
    readerPad: 24,
    // horizontal padding
    flipMode: "page",
    // page | scroll
    flipAnim: "slide",
    // slide | cover | fade
    showReaderProgress: true,
    tapTurn: true,
    // Audio
    ttsSpeed: 1,
    ttsVoice: "云希",
    autoNextChapter: true,
    sleepTimer: 0,
    // Drama
    dramaAutoNext: true,
    dramaQuality: "1080P",
    dramaSplit: "auto",
    // auto | always | off
    // System
    haptics: true,
    volumeKeys: true,
    comicAutoCache: true
  };
  var listeners = /* @__PURE__ */ new Set();
  var state = load();
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return __spreadValues({}, DEFAULTS);
      return __spreadValues(__spreadValues({}, DEFAULTS), JSON.parse(raw));
    } catch (e) {
      return __spreadValues({}, DEFAULTS);
    }
  }
  function get(key) {
    return key ? state[key] : state;
  }
  function set(patch, { silent = false } = {}) {
    const changed = Object.entries(patch).filter(([k, v]) => state[k] !== v);
    if (!changed.length) return;
    state = __spreadValues(__spreadValues({}, state), patch);
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
    }
    if (!silent) {
      changed.forEach(([k, v]) => listeners.forEach((fn) => fn(k, v, state)));
      applyAll();
    }
  }
  function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }
  function reset() {
    state = __spreadValues({}, DEFAULTS);
    localStorage.removeItem(KEY);
    applyAll();
    listeners.forEach((fn) => fn("reset", null, state));
  }
  function prefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function isDark() {
    if (state.themeMode === "eink") return false;
    if (state.themeMode === "dark") return true;
    if (state.themeMode === "light") return false;
    return prefersDark();
  }
  var dynamicSeed = null;
  function setDynamicSeed(hex) {
    if (!hex) return;
    dynamicSeed = hex;
    if (state.dynamicColor) applyAll();
  }
  function clearDynamicSeed() {
    dynamicSeed = null;
    if (state.dynamicColor) applyAll();
  }
  function applyAll() {
    const root = document.documentElement;
    const dark = isDark();
    const seed2 = state.dynamicColor && dynamicSeed ? dynamicSeed : state.seed;
    if (state.themeMode === "eink") {
      applyEink();
    } else {
      applyScheme(seed2, dark, state.contrast, state.oled);
    }
    root.dataset.motion = state.motion;
    root.dataset.shape = state.shape;
    root.style.setProperty("--app-font-scale", state.fontScale);
    root.style.fontSize = `${16 * state.fontScale}px`;
    root.style.setProperty("--reader-size", `${state.readerSize}px`);
    root.style.setProperty("--reader-line", String(state.readerLine));
    root.style.setProperty("--reader-pad", `${state.readerPad}px`);
    root.style.setProperty("--reader-font", fontStack(state.readerFont));
    applyShape();
    syncChrome();
  }
  var chromeTimer = 0;
  function syncChrome() {
    const shell = window.AndroidShell;
    if (!shell || typeof shell.chrome !== "function") return;
    clearTimeout(chromeTimer);
    chromeTimer = setTimeout(() => {
      const hex = toHex(getComputedStyle(document.documentElement).getPropertyValue("--md-sys-color-surface").trim());
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
    return "#" + m.slice(0, 3).map((n) => Math.round(Number(n)).toString(16).padStart(2, "0")).join("");
  }
  function isLightBg(hex) {
    const n = parseInt(hex.slice(1), 16);
    const r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
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
      sharp: [0, 2, 4, 6, 12]
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
      primary: "#000000",
      "on-primary": "#ffffff",
      "primary-container": "#e6e6e6",
      "on-primary-container": "#000000",
      secondary: "#1a1a1a",
      "on-secondary": "#ffffff",
      "secondary-container": "#cccccc",
      "on-secondary-container": "#000000",
      tertiary: "#1a1a1a",
      "on-tertiary": "#ffffff",
      "tertiary-container": "#dddddd",
      "on-tertiary-container": "#000000",
      error: "#000000",
      "on-error": "#ffffff",
      "error-container": "#e0e0e0",
      "on-error-container": "#000000",
      background: "#ffffff",
      "on-background": "#000000",
      surface: "#ffffff",
      "on-surface": "#000000",
      "surface-variant": "#eeeeee",
      "on-surface-variant": "#333333",
      "surface-dim": "#f2f2f2",
      "surface-bright": "#ffffff",
      "surface-container-lowest": "#ffffff",
      "surface-container-low": "#fafafa",
      "surface-container": "#f5f5f5",
      "surface-container-high": "#efefef",
      "surface-container-highest": "#e8e8e8",
      "inverse-surface": "#111111",
      "inverse-on-surface": "#f5f5f5",
      "inverse-primary": "#dddddd",
      outline: "#555555",
      "outline-variant": "#c4c4c4",
      scrim: "#000000",
      shadow: "#000000"
    };
    for (const [k, v] of Object.entries(roles)) root.style.setProperty(`--md-sys-color-${k}`, v);
    root.style.colorScheme = "light";
    root.dataset.theme = "eink";
  }
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (state.themeMode === "system") applyAll();
  });
  var SEED_PRESETS = [
    { name: "朱砂", seed: "#E8452C" },
    { name: "黛蓝", seed: "#2D5BA8" },
    { name: "松绿", seed: "#2E7D5B" },
    { name: "赭石", seed: "#B4692F" },
    { name: "紫檀", seed: "#6B4C9A" },
    { name: "藕荷", seed: "#C2568D" },
    { name: "墨青", seed: "#2A6F7A" },
    { name: "杏黄", seed: "#C79A2E" }
  ];
  function seedLabel(hex) {
    const { h, s, l } = hexToHsl(hex);
    const preset = SEED_PRESETS.find((p) => p.seed.toLowerCase() === hex.toLowerCase());
    if (preset) return preset.name;
    return hslCss(h, s, l);
  }
  applyAll();

  // js/views/home.js
  init_ui();
  init_icons();

  // js/data.js
  var DB = { "books": { "6569998187203922957": { "id": "6569998187203922957", "title": "仙武都市", "author": "半醉游子", "abstract": "秦始皇三十六年，全球各地出现神秘陨石，其中一颗坠落在昆仑山脉，释放出磅礴灵气，笼罩整个华夏大地，地貌与天地法则大变，从此拉开大修炼时代，从文明走向一条截然不同的道路。\n　　两千两百年后，人类文明高度繁荣。东亚华夏世界的修行盛世千年不衰，在西欧超魔导帝国拔地而起，北非依然被法老神秘的力量笼罩，而更遥远的美洲世界玛雅人建立起辉煌的文明……\n　　这个故事发生在玄幻版的二十一世纪大都市，从一位继承霸王血统的项氏后人身上开始。", "category": "都市修真", "score": "", "shelf": 1128, "cover": "assets/covers/0d3f17d2849a.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6565650522437585934": { "id": "6565650522437585934", "title": "都市特种兵", "author": "无冬夜", "abstract": "一代兵王低调潜回都市，低调档期包租公，然而，一位神秘大小姐的突然入住却将他卷入了一场漩涡，面对风起云涌的江湖，曾经威震天下的他，能否冲冠一怒为红颜？", "category": "战神赘婿", "score": "", "shelf": 76708, "cover": "assets/covers/9d83824cc9d9.jpg", "serialCount": 3122, "wordNumber": "9761666", "toc": [{ "i": "6565654542296285700", "t": "第1章：萝莉认我当干爹", "w": 1092, "v": "第一卷：默认" }, { "i": "6971328343933190687", "t": "第1章 萝莉认我当干爹", "w": 1093, "v": "第一卷：默认" }, { "i": "6565654544359883278", "t": "第2章：谁来拿走我的第一次？", "w": 1376, "v": "第一卷：默认" }, { "i": "6565654546322817539", "t": "第3章：女王独占两间房", "w": 651, "v": "第一卷：默认" }, { "i": "6565654548164116999", "t": "第4章：住你妹的店！", "w": 1374, "v": "第一卷：默认" }, { "i": "6565654549913141764", "t": "第5章：这个女人不一般！", "w": 1328, "v": "第一卷：默认" }, { "i": "6565654551808967176", "t": "第6章：一块去WC好不好？", "w": 883, "v": "第一卷：默认" }, { "i": "6565654553625100814", "t": "第7章：为何要关灯？", "w": 1330, "v": "第一卷：默认" }, { "i": "6565654555927773700", "t": "第8章：老子和你算总账", "w": 1341, "v": "第一卷：默认" }, { "i": "6565654557798433287", "t": "第9章：你要不怕死，我没意见", "w": 1256, "v": "第一卷：默认" }, { "i": "6565654559782339075", "t": "第10章：用气势就能吓死你", "w": 930, "v": "第一卷：默认" }, { "i": "6565654561262928387", "t": "第11章：这女人，够狠！", "w": 1079, "v": "第一卷：默认" }, { "i": "6565654563238445582", "t": "第12章：你看到了几条腿？", "w": 1217, "v": "第一卷：默认" }, { "i": "6565654565335597571", "t": "第13章：我是她哥，不是她爸！", "w": 1072, "v": "第一卷：默认" }, { "i": "6565654566988153351", "t": "第14章：人家还小呢……", "w": 1466, "v": "第一卷：默认" }, { "i": "6565654568833647112", "t": "第15章：超级高手！", "w": 1096, "v": "第一卷：默认" }, { "i": "6565654570997907975", "t": "第16章：两点钟方向，有贼！", "w": 1356, "v": "第一卷：默认" }, { "i": "6565654572960842247", "t": "第17章：深更半夜来窜门", "w": 1344, "v": "第一卷：默认" }, { "i": "6565654574814724616", "t": "第18章：腿比胳膊长知道吗？", "w": 1546, "v": "第一卷：默认" }, { "i": "6565654576710550030", "t": "第19章：我陪你睡？", "w": 1354, "v": "第一卷：默认" }, { "i": "6565654578337939975", "t": "第20章：走进浴室看你洗", "w": 1478, "v": "第一卷：默认" }, { "i": "6565654579843695111", "t": "第21章：再进一步！", "w": 3021, "v": "第一卷：默认" }, { "i": "6565654582012150276", "t": "第22章：哥就喜欢小辣椒", "w": 3315, "v": "第一卷：默认" }, { "i": "6565654583949918728", "t": "第23章：美女公寓斗殴事件", "w": 3386, "v": "第一卷：默认" }, { "i": "6565654586009321991", "t": "第24章：警花？线人？", "w": 3367, "v": "第一卷：默认" }, { "i": "6565654587657683463", "t": "第25章：你脚练没练鹰爪功？", "w": 3324, "v": "第一卷：默认" }, { "i": "6565654589616423438", "t": "第26章：想诓我？没门！", "w": 3384, "v": "第一卷：默认" }, { "i": "6565654591738741256", "t": "第27章：是不是很痛啊？", "w": 3345, "v": "第一卷：默认" }, { "i": "6565654593328382471", "t": "第28章：你要干什么？", "w": 3206, "v": "第一卷：默认" }, { "i": "6565654595261956622", "t": "第29章：别碰我！", "w": 3078, "v": "第一卷：默认" }, { "i": "6565654597136810504", "t": "第30章：一个不留！", "w": 3132, "v": "第一卷：默认" }, { "i": "6565654598881640963", "t": "第31章：警花深夜出击", "w": 3380, "v": "第一卷：默认" }, { "i": "6565654600504836622", "t": "第32章：你有几斤几两？", "w": 3378, "v": "第一卷：默认" }, { "i": "6565654602501325319", "t": "第33章：怕啥？反正不是男人吃亏！", "w": 3256, "v": "第一卷：默认" }, { "i": "6565654604313264648", "t": "第34章：湖边的深沉一吻", "w": 3196, "v": "第一卷：默认" }, { "i": "6565654605961626126", "t": "第35章：吃个饭，约个会", "w": 3165, "v": "第一卷：默认" }, { "i": "6565654608058778116", "t": "第36章：脸都被你丢光了", "w": 3498, "v": "第一卷：默认" }, { "i": "6565654609677779460", "t": "第37章：你个小财迷！", "w": 3349, "v": "第一卷：默认" }, { "i": "6565654611368083975", "t": "第38章：独臂擒刁陨", "w": 3293, "v": "第一卷：默认" }, { "i": "6565654614002106887", "t": "第39章：怎么又回来了？", "w": 3327, "v": "第一卷：默认" }, { "i": "6565654616325751310", "t": "第40章：出手凶猛！", "w": 3321, "v": "第一卷：默认" }, { "i": "6565654617978307076", "t": "第41章：两人之下，万人之上！", "w": 3340, "v": "第一卷：默认" }, { "i": "6565654619735720452", "t": "第42章：没门？那就开扇门！", "w": 3342, "v": "第一卷：默认" }, { "i": "6565654621560242701", "t": "第43章：双胞胎姐妹花", "w": 2954, "v": "第一卷：默认" }, { "i": "6565654623380570631", "t": "第44章：买内衣去咯！", "w": 2841, "v": "第一卷：默认" }, { "i": "6565654625658077709", "t": "第45章：你这么紧张干嘛？", "w": 3337, "v": "第一卷：默认" }, { "i": "6565654627490988552", "t": "第46章：少跟我嬉皮笑脸！", "w": 3384, "v": "第一卷：默认" }, { "i": "6565654629290344963", "t": "第47章：女警入住！", "w": 3370, "v": "第一卷：默认" }, { "i": "6565654630825460232", "t": "第48章：女人搬家就跟打仗似的", "w": 3263, "v": "第一卷：默认" }, { "i": "6565654632809366020", "t": "第49章：你怎么也来了？", "w": 3330, "v": "第一卷：默认" }, { "i": "6565654634424173060", "t": "第50章：逼我下狠手！", "w": 3333, "v": "第一卷：默认" }, { "i": "6565654636508742148", "t": "第51章：哥是尽职尽责的房东", "w": 3323, "v": "第一卷：默认" }, { "i": "6565654638085800461", "t": "第52章：有人跟踪", "w": 3375, "v": "第一卷：默认" }, { "i": "6565654639776104967", "t": "第53章：车开的好不一定有驾照！", "w": 3395, "v": "第一卷：默认" }, { "i": "6565654641806148109", "t": "第54章：多贴心的服务呦！", "w": 3299, "v": "第一卷：默认" }, { "i": "6565654643722945028", "t": "第55章：你不是想要内衣吗？", "w": 3254, "v": "第一卷：默认" }, { "i": "6565654645316796935", "t": "第56章：能拱白菜，做猪也行", "w": 3040, "v": "第一卷：默认" }, { "i": "6565654647367795208", "t": "第57章：下一个目标！", "w": 3372, "v": "第一卷：默认" }, { "i": "6565654649053905411", "t": "第58章：两天不调戏脾气就变大", "w": 3090, "v": "第一卷：默认" }, { "i": "6565654651155251716", "t": "第59章：那就去死！", "w": 3337, "v": "第一卷：默认" }], "creationStatus": "0", "tocTotal": 3122 }, "6363166852633332738": { "id": "6363166852633332738", "title": "都市血影", "author": "咏苼芝恋", "abstract": "一刻豪情千古，一刀问鼎天下，千古霸业论英雄。血雨腥风，人不倒；挺身横刀，红颜手足，这一生，不弯腰。\n\n    一个征战无数、杀名赫赫的神秘少年重返都市，掀开万里千层浪。", "category": "战神赘婿", "score": "", "shelf": 36148, "cover": "assets/covers/fd41ef0e9211.jpg", "serialCount": 1143, "wordNumber": "3027398", "toc": [{ "i": "6363171583351063041", "t": "第001章 离别！", "w": 2387, "v": "正文" }, { "i": "6363171600023421441", "t": "第002章 回国（1）", "w": 2295, "v": "正文" }, { "i": "6363171593681633793", "t": "第003章 回国（2）", "w": 3156, "v": "正文" }, { "i": "6363171571711869442", "t": "第004章 身世有眉目", "w": 2698, "v": "正文" }, { "i": "6363171590619808258", "t": "第005章 伸出援手", "w": 2787, "v": "正文" }, { "i": "6363171573901296130", "t": "第006章 身世信息", "w": 2666, "v": "正文" }, { "i": "6363171578078822914", "t": "第007章 少年要自杀？", "w": 2689, "v": "正文" }, { "i": "6363171570768151042", "t": "第008章 忆涵渟来电话了", "w": 2787, "v": "正文" }, { "i": "6363171578179486210", "t": "第009章 华夏尖刀兵", "w": 2730, "v": "正文" }, { "i": "6363171591957774850", "t": "第010章 恐怖袭击（1）", "w": 2638, "v": "正文" }, { "i": "6363171592716943874", "t": "第011章 恐怖袭击（2）", "w": 2651, "v": "正文" }, { "i": "6363171585808925186", "t": "第012章 杭语蓉", "w": 2589, "v": "正文" }, { "i": "6363171572315849217", "t": "第013章 XV集团董事长", "w": 2545, "v": "正文" }, { "i": "6363171572454261249", "t": "第014章 极品", "w": 2656, "v": "正文" }, { "i": "6363171561712648706", "t": "第015章 寻找宋碧琴", "w": 2633, "v": "正文" }, { "i": "6363171587968991745", "t": "第016章 小巷之战", "w": 2868, "v": "正文" }, { "i": "6363171617803076097", "t": "第017章 性情中人", "w": 2649, "v": "正文" }, { "i": "6363171583875351042", "t": "第018章 疑惑", "w": 2779, "v": "正文" }, { "i": "6363171592821817857", "t": "第019章 公司的事", "w": 2880, "v": "正文" }, { "i": "6363171594193338882", "t": "第020章 麻烦找上门", "w": 2737, "v": "正文" }, { "i": "6363171570591990274", "t": "第021章 吃宵夜", "w": 2939, "v": "正文" }, { "i": "6363171581912416769", "t": "第022章 如此魄力", "w": 3199, "v": "正文" }, { "i": "6363171598836433410", "t": "第023章 这么贪财", "w": 2839, "v": "正文" }, { "i": "6363171572676575745", "t": "第024章 被抓了", "w": 2670, "v": "正文" }, { "i": "6363171603164955137", "t": "第025章 你懂什么", "w": 2658, "v": "正文" }, { "i": "6363171600921002498", "t": "第026章 再见杭语蓉", "w": 2506, "v": "正文" }, { "i": "6363171590271664642", "t": "第027章 谈心", "w": 2903, "v": "正文" }, { "i": "6363171613122232833", "t": "第028章 出事了", "w": 2709, "v": "正文" }, { "i": "6363171589642519042", "t": "第029章 如此不要脸", "w": 2766, "v": "正文" }, { "i": "6363171605144666625", "t": "第030章 身份信息", "w": 2710, "v": "正文" }, { "i": "6363171585913782785", "t": "第031章 看他的表现", "w": 2675, "v": "正文" }, { "i": "6363171595631985153", "t": "第032章 吴氏公子", "w": 2597, "v": "正文" }, { "i": "6363171584919732738", "t": "第033章 营救", "w": 2659, "v": "正文" }, { "i": "6363171587218227714", "t": "第034章 眼镜蛇", "w": 2717, "v": "正文" }, { "i": "6363171566741619202", "t": "第035章 激斗", "w": 2725, "v": "正文" }, { "i": "6363171567748252162", "t": "第036章 马后炮", "w": 2722, "v": "正文" }, { "i": "6363171594713432577", "t": "第037章 扑朔迷离", "w": 3061, "v": "正文" }, { "i": "6363171584357696001", "t": "第038章 谎言", "w": 2743, "v": "正文" }, { "i": "6363171574463332866", "t": "第039章 熟人叙旧", "w": 2780, "v": "正文" }, { "i": "6363171598710604289", "t": "第040章 真是皇甫家的人？", "w": 3037, "v": "正文" }, { "i": "6363171569174315522", "t": "第041章 一个玩笑", "w": 2693, "v": "正文" }, { "i": "6363171583283954177", "t": "第042章 密谋！", "w": 2643, "v": "正文" }, { "i": "6363171585456603650", "t": "第043章 进行收编", "w": 2814, "v": "正文" }, { "i": "6363171603299172865", "t": "第044章 遇袭", "w": 2675, "v": "正文" }, { "i": "6363171579358085634", "t": "第045章 文物的消息", "w": 2799, "v": "正文" }, { "i": "6363171584009585154", "t": "第046章 焰军成立", "w": 2765, "v": "正文" }, { "i": "6363171603546636801", "t": "第047章 影魂来人", "w": 2714, "v": "正文" }, { "i": "6363171589944508929", "t": "第048章 借钱", "w": 2878, "v": "正文" }, { "i": "6363171579328725505", "t": "第049章 表白", "w": 2880, "v": "正文" }, { "i": "6363171576367546881", "t": "第050章 夜色江滩", "w": 2798, "v": "正文" }, { "i": "6363171596470845954", "t": "第051章 激烈战斗（1）", "w": 2626, "v": "正文" }, { "i": "6363171590720455169", "t": "第052章 激烈战斗（2）", "w": 2674, "v": "正文" }, { "i": "6363171599260058114", "t": "第053章 笼络人心", "w": 2801, "v": "正文" }, { "i": "6363171568654221825", "t": "第054章 真实身份", "w": 2829, "v": "正文" }, { "i": "6363171595338383873", "t": "第055章 一个传说", "w": 2716, "v": "正文" }, { "i": "6363171613919150593", "t": "第056章 心神不宁", "w": 2842, "v": "正文" }, { "i": "6363171575444800001", "t": "第057章 赔礼道歉", "w": 2807, "v": "正文" }, { "i": "6363171563839160834", "t": "第058章 这样的关系", "w": 2858, "v": "正文" }, { "i": "6363171592440136193", "t": "第059章 预谋", "w": 2633, "v": "正文" }, { "i": "6363171573582529026", "t": "第060章 可悲的婚姻", "w": 2583, "v": "正文" }], "creationStatus": "0", "tocTotal": 1143 }, "6781766082597227531": { "id": "6781766082597227531", "title": "都市猎人", "author": "心动可乐", "abstract": "救了一个跳楼的女孩，从此走上了一条不归路。。。\n就算前期有那么小小的虐，大家也可以放心阅读到最后，\n绝对是皆大欢喜的结局！！！\n看下去，你会发现不一样的精彩。", "category": "都市脑洞", "score": "", "shelf": 3036, "cover": "assets/covers/f3c23707f895.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6924180416706382862": { "id": "6924180416706382862", "title": "都市修罗", "author": "苏九月", "abstract": "【叶牧龙秦婉柔】脚踏神州大地，肩扛半壁山河！\n　　戎马十年，兵锋所指，气吞万里如虎，以一人之躯屹立国门之前，纵有万敌不敢踏我神州半步！\n　　如今战神荣归，风云色变！", "category": "战神赘婿", "score": "", "shelf": 9021, "cover": "assets/covers/7e31f1fba3e4.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6924945008017542158": { "id": "6924945008017542158", "title": "都市桃源", "author": "大漠秋雨", "abstract": "【种田+养蛇+美食+暴富】一场阴谋让高材生变成废人，却也让他拥有一处逆天的空间和一条上古异种虺蛇，看石普雷如何利用神奇空间恢复身体，让贫瘠的小山村变成一处世外桃源，打造一个独特的商业帝国。", "category": "都市种田", "score": "", "shelf": 4101, "cover": "assets/covers/05cbde380db7.jpg", "serialCount": 1086, "wordNumber": "3021886", "toc": [{ "i": "6927430189433487880", "t": "第1章 福祸相依", "w": 2514, "v": "正文" }, { "i": "6927430189592871432", "t": "第2章 老支书刘全有", "w": 2507, "v": "正文" }, { "i": "6927430189760643598", "t": "第3章 神奇空间", "w": 2513, "v": "正文" }, { "i": "6927430190054244872", "t": "第4章 虺蛇", "w": 2512, "v": "正文" }, { "i": "6927430190188462606", "t": "第5章 空间之变", "w": 2506, "v": "正文" }, { "i": "6927430190339457549", "t": "第6章 跟着他干？", "w": 2613, "v": "正文" }, { "i": "6927430190519812615", "t": "第7章 方子管用？", "w": 2511, "v": "正文" }, { "i": "6927430190687584775", "t": "第8章 通人性的青锋", "w": 2496, "v": "正文" }, { "i": "6927430190880522759", "t": "第9章 众人的惊讶", "w": 2494, "v": "正文" }, { "i": "6927430191023129095", "t": "第10章 怪异的桃树？", "w": 2507, "v": "正文" }, { "i": "6927430191169929735", "t": "第11章 气运逆天？", "w": 2606, "v": "正文" }, { "i": "6927430191329313294", "t": "第12章 血鳞鱼", "w": 2520, "v": "正文" }, { "i": "6927430191492891149", "t": "第13章 虚惊一场？", "w": 2515, "v": "正文" }, { "i": "6927430191639855623", "t": "第14章 毫不知情成网红", "w": 2513, "v": "正文" }, { "i": "6927430191790686728", "t": "第15章 溺水？", "w": 2541, "v": "正文" }, { "i": "6927430191945875975", "t": "第16章 刘万明的担忧", "w": 2515, "v": "正文" }, { "i": "6927430192080093704", "t": "第17章 有酒屠苏", "w": 2505, "v": "正文" }, { "i": "6927430192235282958", "t": "第18章 麻烦上门", "w": 2512, "v": "正文" }, { "i": "6927430192411443725", "t": "第19章 怒火？", "w": 2518, "v": "正文" }, { "i": "6927430192575021576", "t": "第20章 杀人？", "w": 2527, "v": "正文" }, { "i": "6927430192990257671", "t": "第21章 第一桶金", "w": 2504, "v": "正文" }, { "i": "6927430193141252621", "t": "第22章 蔬菜的影响力", "w": 2570, "v": "正文" }, { "i": "6927430193267245582", "t": "第23章 顾客上门", "w": 2520, "v": "正文" }, { "i": "6927430193405493767", "t": "第24章 薛凤瑶的震撼", "w": 2512, "v": "正文" }, { "i": "6927430193556488718", "t": "第25章 阴谋再起", "w": 2515, "v": "正文" }, { "i": "6927430193703289352", "t": "第26章 打击", "w": 2552, "v": "正文" }, { "i": "6927430193837834766", "t": "第27章 祸不单行", "w": 2538, "v": "正文" }, { "i": "6927430193971724808", "t": "第28章 野心？", "w": 2514, "v": "正文" }, { "i": "6927430194093359630", "t": "第29章 佛梨", "w": 2522, "v": "正文" }, { "i": "6927430194349212173", "t": "第30章 猴王的邀请", "w": 2560, "v": "正文" }, { "i": "6927430194496012807", "t": "第31章 龙凤草", "w": 2524, "v": "正文" }, { "i": "6927430194655396359", "t": "第32章 王瑾的发现", "w": 2539, "v": "正文" }, { "i": "6927430194781225485", "t": "第33章 意想不到的来电", "w": 2503, "v": "正文" }, { "i": "6927430194919637517", "t": "第34章 薛家的身份？", "w": 2523, "v": "正文" }, { "i": "6927430195049660935", "t": "第三十五 惊骇", "w": 2537, "v": "正文" }, { "i": "6927430195184042504", "t": "第36章 救治", "w": 2510, "v": "正文" }, { "i": "6927430195322290702", "t": "第37章 叶家子弟？", "w": 2491, "v": "正文" }, { "i": "6927430195452314126", "t": "第38章 叶家人的惊讶", "w": 2574, "v": "正文" }, { "i": "6927430195582337544", "t": "第39章 暂时不回去？", "w": 2559, "v": "正文" }, { "i": "6927430195716555277", "t": "第40章 叶家", "w": 2543, "v": "正文" }, { "i": "6927430195842548237", "t": "第41章 老伤还是中毒？", "w": 2508, "v": "正文" }, { "i": "6927430195964183047", "t": "第42章 捉摸不透？", "w": 2531, "v": "正文" }, { "i": "6927430196081459725", "t": "第43章 愤怒的刘文杰", "w": 2522, "v": "正文" }, { "i": "6927430196211646983", "t": "第44章 见鬼了？", "w": 2515, "v": "正文" }, { "i": "6927430196349895182", "t": "第45章 酿酒师傅？", "w": 2524, "v": "正文" }, { "i": "6927430196488307213", "t": "第46章 更大的阴谋", "w": 2514, "v": "正文" }, { "i": "6927430196614136333", "t": "第47章 净颜无痕", "w": 2508, "v": "正文" }, { "i": "6927430196744159757", "t": "第48章 新的想法", "w": 2601, "v": "正文" }, { "i": "6927430196886766087", "t": "第49章 习武天才？", "w": 2523, "v": "正文" }, { "i": "6927430197016789512", "t": "第50章 危机感", "w": 2512, "v": "正文" }, { "i": "6927430197146976776", "t": "第51章 食材有毒？", "w": 2504, "v": "正文" }, { "i": "6927430197260386824", "t": "第52章 够花就行", "w": 2531, "v": "正文" }, { "i": "6927430197385888270", "t": "第53章 古酒问世", "w": 2508, "v": "正文" }, { "i": "6927430197511717389", "t": "第54章 屠苏的价值", "w": 2511, "v": "正文" }, { "i": "6927430197654323719", "t": "第55章 连锁反应", "w": 2504, "v": "正文" }, { "i": "6927430197780480526", "t": "第56章 恬不知耻", "w": 2513, "v": "正文" }, { "i": "6927430197918564877", "t": "第57章 解开心结", "w": 2501, "v": "正文" }, { "i": "6927430198056976910", "t": "第58章 不再遮掩？", "w": 2524, "v": "正文" }, { "i": "6927430198182969863", "t": "第59章 败家子？", "w": 2513, "v": "正文" }, { "i": "6927430198321218056", "t": "第60章 亲情VS利益", "w": 2513, "v": "正文" }], "creationStatus": "4", "tocTotal": 1086 }, "6760615827902303240": { "id": "6760615827902303240", "title": "都市邪帝", "author": "逗比色", "abstract": "武道天才下山退婚，却被误会成提亲，女方家里嫌弃他土，各种侮辱嘲讽。\n他一怒之下......", "category": "都市修真", "score": "", "shelf": 31219, "cover": "assets/covers/8cbf48c30def.jpg", "serialCount": 549, "wordNumber": "1545087", "toc": [{ "i": "6760684944340550158", "t": "第1章 退婚", "w": 5544, "v": "全部章节" }, { "i": "6760684944353133063", "t": "第2章 慢慢玩", "w": 2898, "v": "全部章节" }, { "i": "6760684944365715976", "t": "第3章 连名字都不知道，就直接投怀送抱？", "w": 3167, "v": "全部章节" }, { "i": "6987574148507632158", "t": "第4章 新来的体育老师", "w": 2537, "v": "" }, { "i": "6760684944390881806", "t": "第5章 二十亿，再加上我", "w": 2622, "v": "全部章节" }, { "i": "6760684944403464711", "t": "第6章 打脸来的太快就像龙卷风", "w": 2807, "v": "全部章节" }, { "i": "6760684944411853320", "t": "第7章 拒之门外", "w": 2812, "v": "全部章节" }, { "i": "6760684944428630541", "t": "第8章 人生何处不相逢", "w": 2625, "v": "全部章节" }, { "i": "6760684944441213454", "t": "第9章 滚", "w": 2866, "v": "全部章节" }, { "i": "6760684944449602055", "t": "第10章 你治不好他", "w": 2731, "v": "全部章节" }, { "i": "6760684944462184968", "t": "第11章 神仙难救", "w": 2651, "v": "全部章节" }, { "i": "6760684944478962189", "t": "第12章 阎王座上宾", "w": 3013, "v": "全部章节" }, { "i": "6760684944487350798", "t": "第13章 对赌", "w": 3658, "v": "全部章节" }, { "i": "6760684944499933703", "t": "第14章 我上！", "w": 2974, "v": "全部章节" }, { "i": "6760684944516710920", "t": "第15章 一分之差！", "w": 3889, "v": "全部章节" }, { "i": "6760684944529293837", "t": "第16章 被你退婚的那位", "w": 3535, "v": "全部章节" }, { "i": "6760684944546103822", "t": "第17章 反正，我不承认", "w": 3310, "v": "全部章节" }, { "i": "6760684944558653959", "t": "第18章 还我十块钱", "w": 2994, "v": "全部章节" }, { "i": "6760684944571236872", "t": "第19章 咱不接这单生意了！", "w": 3540, "v": "全部章节" }, { "i": "6760684944583819789", "t": "第20章 我小弟", "w": 3028, "v": "全部章节" }, { "i": "6760684944600597006", "t": "第21章 大秘密", "w": 3027, "v": "全部章节" }, { "i": "6760684944608985608", "t": "第22章 触动", "w": 2706, "v": "全部章节" }, { "i": "6760684944625762830", "t": "第23章 引起了公愤", "w": 3062, "v": "全部章节" }, { "i": "6760684944638345735", "t": "第24章 打上门来了", "w": 2818, "v": "全部章节" }, { "i": "6760684944646734344", "t": "第25章 跪久了，站不直？", "w": 3203, "v": "全部章节" }, { "i": "6760684944663511566", "t": "第26章 谁给你的勇气？梁静茹吗？", "w": 3190, "v": "全部章节" }, { "i": "6760684944676094471", "t": "第27章 骂醒", "w": 3609, "v": "全部章节" }, { "i": "6760684944697065992", "t": "第28章 苏曼舞的小心思", "w": 2980, "v": "全部章节" }, { "i": "6760684944709648909", "t": "第29章 邪帝一怒，鬼神皆惊！", "w": 3240, "v": "全部章节" }, { "i": "6760684944730620430", "t": "第30章 百鬼夜行", "w": 2542, "v": "全部章节" }, { "i": "6760684944739009031", "t": "第31章 炉鼎", "w": 3394, "v": "全部章节" }, { "i": "6760684944751608328", "t": "第32章 唯死而已", "w": 2502, "v": "全部章节" }, { "i": "6760684944764191245", "t": "第33章 他，出现了！", "w": 2690, "v": "全部章节" }, { "i": "6760684944780952078", "t": "第34章 我有一剑，可斩妖除魔！", "w": 2602, "v": "全部章节" }, { "i": "6760684944797729287", "t": "第35章 帝心所至，万物臣服！", "w": 2566, "v": "全部章节" }, { "i": "6760684944827089416", "t": "第36章 噬主", "w": 2603, "v": "全部章节" }, { "i": "6760684944848060941", "t": "第37章 收服", "w": 2727, "v": "全部章节" }, { "i": "6760684944869032462", "t": "第38章 暴力的女人", "w": 2632, "v": "全部章节" }, { "i": "6760684944885809672", "t": "第39章 不计一切代价", "w": 2910, "v": "全部章节" }, { "i": "6760684944906781197", "t": "第40章 这绝对不行", "w": 2577, "v": "全部章节" }, { "i": "6760684944931947022", "t": "第41章 绝对是故意的", "w": 2497, "v": "全部章节" }, { "i": "6760684944944529927", "t": "第42章 苏家危机", "w": 2519, "v": "全部章节" }, { "i": "6760684944957112840", "t": "第43章 往事", "w": 2502, "v": "全部章节" }, { "i": "6760684944973890062", "t": "第44章 灵蛇谷", "w": 2518, "v": "全部章节" }, { "i": "6760684944982278663", "t": "第45章 这里有古怪！", "w": 2510, "v": "全部章节" }, { "i": "6760684944994861576", "t": "第46章 龙蜕！", "w": 2601, "v": "全部章节" }, { "i": "6760684945003250189", "t": "第47章 大宝贝", "w": 2546, "v": "全部章节" }, { "i": "6760684945020027406", "t": "第48章 那件东西", "w": 2614, "v": "全部章节" }, { "i": "6760684945028432391", "t": "第49章 龙丹！", "w": 2510, "v": "全部章节" }, { "i": "6760684945040998920", "t": "第50章 祖宗", "w": 2516, "v": "全部章节" }, { "i": "6760684945049403917", "t": "第51章 我真的是神医", "w": 2558, "v": "全部章节" }, { "i": "6760684945061970446", "t": "第52章 肯定有钱！", "w": 2531, "v": "全部章节" }, { "i": "6760684945070359047", "t": "第53章 好人没好报，坏人任逍遥！", "w": 2691, "v": "全部章节" }, { "i": "6760684945082941965", "t": "第54章 公主配骑士", "w": 2527, "v": "全部章节" }, { "i": "6760684945095524878", "t": "第55章 阴招", "w": 2522, "v": "全部章节" }, { "i": "6760684945108107783", "t": "第56章 你怎么这么傻", "w": 2548, "v": "全部章节" }, { "i": "6760684945116512776", "t": "第57章 安敢欺我！", "w": 2769, "v": "全部章节" }, { "i": "6760684945133273613", "t": "第58章 龙丹发威！", "w": 2519, "v": "全部章节" }, { "i": "6760684945150067207", "t": "第59章 恩将仇报", "w": 2635, "v": "全部章节" }, { "i": "6760684945166828040", "t": "第60章 付出代价！", "w": 2526, "v": "全部章节" }], "creationStatus": "0", "tocTotal": 549 }, "6662947343215627271": { "id": "6662947343215627271", "title": "都市医仙", "author": "风化羽", "abstract": "陈风和女神邂逅，觉醒前世记忆，从此一手惊天医术，一手绝世神通，豪门世家任我踩，女神入我怀！", "category": "都市修真", "score": "", "shelf": 23025, "cover": "assets/covers/172c077416cf.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6877818023915293704": { "id": "6877818023915293704", "title": "龙回都市", "author": "公子天策", "abstract": "受尽陷害、白眼、耻笑的他，隐忍六年，回来了！\n他，已是天机王主！龙在都市，踏临巅峰！", "category": "战神赘婿", "score": "", "shelf": 20203, "cover": "assets/covers/5af1038bcca2.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6577257002706144269": { "id": "6577257002706144269", "title": "都市至尊医圣", "author": "猫族皇子", "abstract": "实习生赵晨飞，意外吸收了几颗九龙宝珠，从此武学、医学、玄学集于一身，逆袭巅峰。", "category": "都市修真", "score": "", "shelf": 166097, "cover": "assets/covers/aa8846675e21.jpg", "serialCount": 618, "wordNumber": "1293906", "toc": [{ "i": "6577259975779811848", "t": "第1章：背叛", "w": 1985, "v": "第一卷：默认" }, { "i": "6577259975784006158", "t": "第2章：神秘传承", "w": 2078, "v": "第一卷：默认" }, { "i": "6577259975834337799", "t": "第3章 ：玄天术七星续命", "w": 2103, "v": "第一卷：默认" }, { "i": "6577259975876280836", "t": "第4章：迪吧应聘", "w": 2089, "v": "第一卷：默认" }, { "i": "6577259975930806797", "t": "第5章：性感的老板娘", "w": 2170, "v": "第一卷：默认" }, { "i": "6577259975867892231", "t": "第6章：识人面相", "w": 2162, "v": "第一卷：默认" }, { "i": "6577259975842726408", "t": "第7章：那小子是贵人", "w": 2141, "v": "第一卷：默认" }, { "i": "6577259975914029572", "t": "第8章：性感的黑丝", "w": 2126, "v": "第一卷：默认" }, { "i": "6577259975935001091", "t": "第9章：冰龙诀一阶", "w": 2058, "v": "第一卷：默认" }, { "i": "6577259975872086536", "t": "第10章：迪吧风波", "w": 2073, "v": "第一卷：默认" }, { "i": "6577259975884669454", "t": "第11章：被抓了", "w": 2151, "v": "第一卷：默认" }, { "i": "6577259975976944131", "t": "第12章：汤家汤耀文", "w": 2216, "v": "第一卷：默认" }, { "i": "6577259975976944132", "t": "第13章 ：和老板娘逛街", "w": 2054, "v": "第一卷：默认" }, { "i": "6577259975960166919", "t": "第14章 ：假装情侣", "w": 2049, "v": "第一卷：默认" }, { "i": "6577259975993721348", "t": "第15章 ：汤耀文来访", "w": 2117, "v": "第一卷：默认" }, { "i": "6577259976048247309", "t": "第16章 ：刮目相看", "w": 2161, "v": "第一卷：默认" }, { "i": "6577259975989527047", "t": "第17章 ：你的腿我能治", "w": 2107, "v": "第一卷：默认" }, { "i": "6577259976023081476", "t": "第18章：米娜的挑逗", "w": 2112, "v": "第一卷：默认" }, { "i": "6577259975964361230", "t": "第19章：真气疗法", "w": 2103, "v": "第一卷：默认" }, { "i": "6577259976052441603", "t": "第20章：辣妹汤东雅", "w": 2109, "v": "第一卷：默认" }, { "i": "6987582666577019406", "t": "第21章：未来女婿", "w": 2120, "v": "第一卷：默认" }, { "i": "6577259976060830212", "t": "第22章 ：飙车", "w": 2062, "v": "第一卷：默认" }, { "i": "6577259976115356173", "t": "第23章：我的医德", "w": 2059, "v": "第一卷：默认" }, { "i": "6577259976018887176", "t": "第24章 ：迪吧昏迷者", "w": 2112, "v": "第一卷：默认" }, { "i": "6577259976098578947", "t": "第25章 ：好人有好报", "w": 2043, "v": "第一卷：默认" }, { "i": "6577259976069218823", "t": "第26章：疗养院接人", "w": 2021, "v": "第一卷：默认" }, { "i": "6577259976039858702", "t": "第27章 ：汤东亮痊愈", "w": 2125, "v": "第一卷：默认" }, { "i": "6577259976090190343", "t": "第28章 ：只收六百块", "w": 2137, "v": "第一卷：默认" }, { "i": "6577259976069218824", "t": "第29章 ：黑心教练", "w": 2100, "v": "第一卷：默认" }, { "i": "6577259976073413134", "t": "第30章 ：拆了你们驾校", "w": 2102, "v": "第一卷：默认" }, { "i": "6577259976195047949", "t": "第31章：你有女朋友吗？", "w": 2140, "v": "第一卷：默认" }, { "i": "6577259976132133383", "t": "第32章：宵夜聚餐", "w": 2130, "v": "第一卷：默认" }, { "i": "6577259976102773262", "t": "第33章：引发冲突", "w": 2085, "v": "第一卷：默认" }, { "i": "6577259976111161870", "t": "第34章：一个打几个", "w": 2066, "v": "第一卷：默认" }, { "i": "6577259976161493511", "t": "第35章 ：李振的好消息", "w": 2066, "v": "第一卷：默认" }, { "i": "6577259976199242244", "t": "第36章 ：发生车祸", "w": 2068, "v": "第一卷：默认" }, { "i": "6577259976220213763", "t": "第37章：针灸救人", "w": 2131, "v": "第一卷：默认" }, { "i": "6577259976157299208", "t": "第38章：美女医生", "w": 2036, "v": "第一卷：默认" }, { "i": "6577259976165704200", "t": "第39章 ：中医院实习生", "w": 2088, "v": "第一卷：默认" }, { "i": "6577259976283128333", "t": "第40章 ：再遇潘旭阳", "w": 2133, "v": "第一卷：默认" }, { "i": "6577259976220230151", "t": "第41章 ：欺人太甚", "w": 2083, "v": "第一卷：默认" }, { "i": "6577259976257962500", "t": "第42章 ：维护员工", "w": 2123, "v": "第一卷：默认" }, { "i": "6577259976199242254", "t": "第43章 ：暧昧的姿势", "w": 2119, "v": "第一卷：默认" }, { "i": "6577259976287322627", "t": "第44章 ：我是来打你的", "w": 2038, "v": "第一卷：默认" }, { "i": "6577259976291516932", "t": "第45章 ：汤东城杀到", "w": 2047, "v": "第一卷：默认" }, { "i": "6577259976245379592", "t": "第46章 ：打成猪头", "w": 2183, "v": "第一卷：默认" }, { "i": "6577259976299905543", "t": "第47章 ：不解风情", "w": 2073, "v": "第一卷：默认" }, { "i": "6577259976274739726", "t": "第48章 ：玄天术突破", "w": 2085, "v": "第一卷：默认" }, { "i": "6577259976354431492", "t": "第49章 ：新人的毛病", "w": 2081, "v": "第一卷：默认" }, { "i": "6577259976408957453", "t": "第50章 ：开药方", "w": 2069, "v": "第一卷：默认" }, { "i": "6577259976383791619", "t": "第51章 ：青囊术", "w": 2101, "v": "第一卷：默认" }, { "i": "6577259976320877064", "t": "第52章 ：无聊的讲座", "w": 2051, "v": "第一卷：默认" }, { "i": "6577259976392180228", "t": "第53章 ：逮个正着", "w": 2111, "v": "第一卷：默认" }, { "i": "6577259976404763140", "t": "第54章 ：专家会诊", "w": 2059, "v": "第一卷：默认" }, { "i": "6577259976413151748", "t": "第55章 ：中医西医", "w": 2034, "v": "第一卷：默认" }, { "i": "6577259976396374535", "t": "第56章 ：五龙针", "w": 2128, "v": "第一卷：默认" }, { "i": "6577259976434123268", "t": "第57章 ：见证奇迹", "w": 2084, "v": "第一卷：默认" }, { "i": "6577259976413151751", "t": "第58章 ：人才流失", "w": 2062, "v": "第一卷：默认" }, { "i": "6577259976463483395", "t": "第59章 ：美女吃醋", "w": 2095, "v": "第一卷：默认" }, { "i": "6577259976434123271", "t": "第60章 ：爱心外卖", "w": 2055, "v": "第一卷：默认" }], "creationStatus": "0", "tocTotal": 618 }, "6946532654716029989": { "id": "6946532654716029989", "title": "都市仙医", "author": "天山童姥", "abstract": "梦中修仙，秦天获得无上医术与炼丹等传承，而那些家族缺依然把他当做窝囊废上门女婿看待。\n欺软怕硬？\n恶名打压？\n不存在的！\n敢狂，敢装，敢裱的人，必将踏入脚下！", "category": "战神赘婿", "score": "", "shelf": 356, "cover": "assets/covers/4b6fb64a5dba.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6652113196981160963": { "id": "6652113196981160963", "title": "都市藏娇", "author": "煳土豆", "abstract": "普通的公司白领，却拥有着麒麟臂。只是麒麟臂一旦发狂，便会预示着一名少女又将失去她的清纯之身。为此，他低调做人，可是一个又一个令他无法拒绝的艳遇主动找上门来。\n练就麒麟臂，混迹于黑白两道，周旋在两大异能组织以及各大权势之中；修炼阴阳双修诀，中意于美丽的花丛之中。\n本故事存属虚构，如有雷同，存属巧合，切勿对号入座！！！！！", "category": "都市高武", "score": "", "shelf": 3, "cover": "assets/covers/65381a55aaf5.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6647032717315673096": { "id": "6647032717315673096", "title": "都市特警", "author": "易仁飞", "abstract": "学成出山，却不想道阻且回。艰险四伏，身负重任，如何周旋斗争。艰辛训练，重重考验，一代都市特警。东洋一战，打的鬼子落水流花春去也！太平洋之行，看他力挽狂澜程枭雄！", "category": "都市高武", "score": "", "shelf": 1, "cover": "assets/covers/9d972647d368.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6647032679780846600": { "id": "6647032679780846600", "title": "都市神算子", "author": "当个诗人去流浪", "abstract": "本人新书已开，求收藏，求鲜花，求贵宾~~~~~~~~~~~~~推荐位右上角有直通车~~~~~重活之混迹校园\n本人新书已开，求收藏，求鲜花，求贵宾~~~~~~~~~~~~~推荐位右上角有直通车~~~~~重活之混迹校园\n本人新书已开，求收藏，求鲜花，求贵宾~~~~~~~~~~~~~推荐位右上角有直通车~~~~~重活之混迹校园\n这是我的第一本书，中途写得很吃力，订阅也少得可怜，最后以一种不完美的状态完本了，心里始终有些挥之不去的郁闷和不爽，在经过一番深思和自我检讨之后，我开了第二本书，重活之混迹校园，这本书应该比第一本书好吧，希望朋友们继续支持，谢谢了！", "category": "悬疑灵异", "score": "", "shelf": 1, "cover": "assets/covers/6061233708db.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6647032650055814157": { "id": "6647032650055814157", "title": "都市封神", "author": "雪茄鱼", "abstract": "一个普通的少年，偶然间成为一个血族，从此认识了隐藏在真实世界下的另一个世界--异能界，从此一个个的谜团开始解开，然而随着不断的成长，肩负在他身上的责任越来越重大，最后他会怎么样呢……？蚩魔宫，神剑山庄，黑龙会，基因战士，黑暗议会，神圣教廷，各方势力在异能界又掀起了一次血雨腥风，看主人公蚩龙若何应对。", "category": "都市高武", "score": "", "shelf": 0, "cover": "assets/covers/13cae95dcd10.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6488865788680735758": { "id": "6488865788680735758", "title": "都市王牌", "author": "康卓少侠", "abstract": "兵王入市，斩妖除魔，忠孝两全，傲骨柔情，无论何地我皆掌控", "category": "战神赘婿", "score": "", "shelf": 51, "cover": "assets/covers/08bac8421668.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6488865485591940109": { "id": "6488865485591940109", "title": "都市皇者", "author": "六月星羽", "abstract": "十三年前的陨落，十三年后觉醒，当体内的执念压制不住的时候，就是我复苏之际，古老的传承，神秘的身份，世界的秘密。这个世界上真的有神吗？当我觉醒之际，就是主宰世界之时！", "category": "都市高武", "score": "", "shelf": 22, "cover": "assets/covers/6319d45ae8cf.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6724092336529214472": { "id": "6724092336529214472", "title": "都市神皇", "author": "富生穷汉", "abstract": "天组武神小队队长燕冷，一年前因为一场大战，丧失武道根基，又因功高震主，被天组强迫退役，恢复真名回归都市，机缘巧合下踏进龙组训练营，一步步踏上最强巅峰……", "category": "战神赘婿", "score": "", "shelf": 13307, "cover": "assets/covers/f3e376301021.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6782135037270690829": { "id": "6782135037270690829", "title": "都市仙尊", "author": "千幻冰狐", "abstract": "“一代仙尊”遭人偷袭，重生回到地球他发誓，一定要改变命运，站在这个世界的巅峰！", "category": "都市修真", "score": "", "shelf": 448, "cover": "assets/covers/8d50d151643e.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6756419197460286478": { "id": "6756419197460286478", "title": "都市战龙", "author": "秦牧真帅", "abstract": "有时候是不是很纳闷，你说天底下辣么多的杀手，他们老了后，咋活的？一方面要被人寻仇、又要提防被人灭口……各种危险太多了，谁又来保护他们呢？其实吧，杀手圈里有一个保险公司，他们自个儿也都买保险。而这个保险，神秘强大，有了它，绝对保证老而无忧，安度晚年。不信，你看。杀手保险公司的业务员窦战龙来了。只是站在那里，整个城市，便在他的脚下颤栗。", "category": "战神赘婿", "score": "", "shelf": 186, "cover": "assets/covers/b55f4f63366b.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6645496047537753101": { "id": "6645496047537753101", "title": "玄幻阅读系统", "author": "月白", "abstract": "一觉醒来，云凡发现自己穿越到了一个玄幻世界里，成为了火灵宗的一名废物杂役，不甘心就这样沉沦的他，竟是偶然间激活了‘玄幻阅读系统’，发现里面包罗了前世所有的玄幻小说，而且只要阅读就可以兑换书中的任何物品——阅读“斗破天下”，兑换焚功、异火，进化神功，炼制仙丹，神炎焚天地！阅读“一意永生”，兑换不灭长寿功，不死不灭，肉身无敌，一动撼古今！阅读“武动苍穹”，兑换祖符、秘技，强化神兵，驾驭神兽，符威无可敌！从此，云凡纵横天地，神魔退避，亿族臣服，整个洪荒大界尊呼其为洪荒祖主！", "category": "玄幻脑洞", "score": "", "shelf": 4095, "cover": "assets/covers/69cdf65d8122.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6917999222474148878": { "id": "6917999222474148878", "title": "玄幻风云录", "author": "笔行者", "abstract": "一个本该是绝世天才的少年，但却因为大陆没有修炼玄气的功法而沦为废物···\n当这个少年获得一本顶尖的玄气功法时，一切都不再迷茫，是时候在大陆上搅起一场风暴了。\n整个大陆都开始围绕着少年转！", "category": "传统玄幻", "score": "", "shelf": 181, "cover": "assets/covers/357449aa215c.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6898222784422349832": { "id": "6898222784422349832", "title": "玄幻大宗师", "author": "纪九", "abstract": "曾昊穿越异界，获得了一个超级分析系统。炼丹，炼器，习功法，分析一下就搞定。在看到大秦帝国的秦天帝，已经第三次不远万里前来拜访之时。曾昊也就勉为其难的帮他看了一眼：嘀嘀嘀，超级分析系统分析成功，此人所患疾病为——不孕不育……", "category": "玄幻脑洞", "score": "", "shelf": 83, "cover": "assets/covers/f177433ce5b5.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6955750737020193800": { "id": "6955750737020193800", "title": "玄幻之世", "author": "轻剑快马", "abstract": "魔宗深仇，愿执刀血洗；天道无常，愿竭力斗之。一万年太短，独求永存。", "category": "东方仙侠", "score": "", "shelf": 25, "cover": "assets/covers/f0960ff7ee0c.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6590003700683508739": { "id": "6590003700683508739", "title": "玄幻旅行社", "author": "九锋", "abstract": "大学生秦皓继承了父亲的旅行社，却发现这个旅行社拥有穿越七界的能力，还因此多了一个神秘未婚妻，从此他的人生开始了逆袭。“现代医术？抱歉，我有玄真大陆第一医圣药王的真传。”“搏击武术？不好意思，我有古荒大陆最顶尖的修炼之法。”“世界顶尖富豪喜欢养狮虎豹为宠？我不养这些，只是偶尔喂喂来自洪荒世界的真龙啦、天凤啊什么的。”力量、美人、钱财、宝物，地位统统都有，这世界也将因为他的崛起而沸腾！", "category": "都市修真", "score": "", "shelf": 48, "cover": "assets/covers/345686c81cff.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7127467357949135875": { "id": "7127467357949135875", "title": "玄幻县太爷", "author": "楠权北腿", "abstract": "一觉醒来就走上仕途的夏天佑发现，自己这个县太爷并不安全，外有强敌环伺，内有暗战不断，北有魔兽横行，南有海妖肆虐，不过当他握住官印的一瞬间，一切都变得不同了。", "category": "传统玄幻", "score": "", "shelf": 279, "cover": "assets/covers/6d7979899131.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7111869436008598543": { "id": "7111869436008598543", "title": "玄幻空间", "author": "周小九", "abstract": "普通大学生意外得到龙神传承，穿越空间，来到一个修真世界，从一个无知小白到修真天才，一路坎坷，努力修炼，只为重回原来的世界，与家人团聚。", "category": "传统玄幻", "score": "", "shelf": 495, "cover": "assets/covers/92c6cd22665e.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7390194104451206169": { "id": "7390194104451206169", "title": "玄幻争霸", "author": "阿金儿", "abstract": "主角李阳穿越到一个玄幻世界，从一个小村庄起步，凭借天赋和智慧能力，一步步登上世界巅峰，成为一代帝王。", "category": "东方仙侠", "score": "", "shelf": 1, "cover": "assets/covers/470b9f5473b5.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7350001828748086297": { "id": "7350001828748086297", "title": "玄幻，玄幻不死，脑洞创生", "author": "知行不易", "abstract": "【玄幻+脑洞+创世+爽文+日常+轻松诙谐+女主（根据需要）+苟王】\n       玄幻死了，好像又没死。因为他也不知道自己当前的状态。像植物人，有意识，不过像被关进了大脑里。他感觉到自己的身体很不对劲，不是血肉之驱。像什么呢？对了像混沌。感觉可以用这些词汇描述：模糊、朦胧、无序、纷乱、混乱、迷蒙、迷离、糊里糊涂、浑浑噩噩。\n      玄幻很孤独，他想要同伴，结果没有。由此，他想到了自己创生。", "category": "玄幻脑洞", "score": "", "shelf": 6, "cover": "assets/covers/c6a54380fd18.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7487637433685642265": { "id": "7487637433685642265", "title": "玄幻仙修", "author": "喜欢马林巴琴的温公子", "abstract": "新作品出炉，欢迎大杂家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "传统玄幻", "score": "", "shelf": 0, "cover": "assets/covers/3aaffdc87ac6.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7056654215044664331": { "id": "7056654215044664331", "title": "这本玄幻很玄幻", "author": "入梦玄", "abstract": "我叫楚南，我知道你在看。时代灵气复苏？不，本该如此！此时就该厚颜无耻！因果为何物？埋下种子未发芽，翻开土，发现种子不见了，估计又要亿万岁月才可见。", "category": "都市修真", "score": "", "shelf": 1, "cover": "assets/covers/d06574ceb117.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7258642215843400744": { "id": "7258642215843400744", "title": "玄幻皓月帝国", "author": "小兜里有糖", "abstract": "一个8岁的落魄世子，一个天兵系统！\n他们的融合后，会是怎样的结果？\n是安于现状？还是征战四方？\n林皓看着芸芸众生，嘴里喃喃道；\n“这个世界既然没有规则，那我就来制定规则！”", "category": "玄幻脑洞", "score": "", "shelf": 205, "cover": "assets/covers/1565528fae12.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7593633933141494809": { "id": "7593633933141494809", "title": "我在玄幻世界玄幻", "author": "难道", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "传统玄幻", "score": "", "shelf": 0, "cover": "assets/covers/de8a5de24134.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7570219146516892697": { "id": "7570219146516892697", "title": "魔法玄幻", "author": "天使神的使者吴宇奇", "abstract": "一个由魔法支配的世界，这里普通人无法学习魔法，只有会魔法的人才有极高的地位。不会魔法。只能一辈子。工作养家糊口", "category": "都市高武", "score": "", "shelf": 0, "cover": "assets/covers/be94d939126b.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7078588832706202627": { "id": "7078588832706202627", "title": "玄幻我在玄幻世界种田", "author": "今日还账", "abstract": "穿越玄幻世界，别人修炼我耕地，别人打架我施肥，别人闯秘境我种菜，当世界大乱的时候我发现自己已经种出了一个个新的世界...................", "category": "玄幻脑洞", "score": "", "shelf": 28, "cover": "assets/covers/56cb2a931d4f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7642746656915475481": { "id": "7642746656915475481", "title": "穿越宫斗，", "author": "天小齐", "abstract": "现代社畜沈清猝死之后，穿越成大周王朝镇国公府嫡长女沈清辞，一个入宫三日便离奇暴毙的秀女。\n醒来时，她发现自己手持染血匕首，身旁倒着一具宫女尸体，满殿嫔妃指认她是凶手。更诡异的是，夜空中高悬一轮蠕动的血月，皇宫之下镇压着上古封印，而她的脑海中多了一本能改写命数的「天书」。\n天书告诉她：阳寿仅剩三十五日。\n为了活下去，沈清辞被迫卷入深宫权谋的漩涡，却在一步步揭开选秀血案真相的过程中，发现自己穿越并非意外——她与上古魔神太虚存在灵魂绑定，她的前世死亡另有隐情，而整座皇宫，不过是一座巨大的封印阵眼。\n当朝天子萧衍身负上古血脉，德妃暗中操控傀儡秘术，梅贵妃立场暧昧不明，宫墙之下三百鬼魂夜夜哀鸣。与此同时，封印每日松动百分之零点五，四十五日后便将彻底破裂。\n沈清辞必须在命数耗尽之前，周旋于宫斗、权谋与上古神魔之争之间，改写自己的死局，也改写这座王朝的宿命。", "category": "玄幻言情", "score": "", "shelf": 0, "cover": "assets/covers/a2de426aee3b.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7632598034496375832": { "id": "7632598034496375832", "title": "开局签到玄幻", "author": "爱吃榆次灌肠的鲁妃", "abstract": "九州大陆，武道为尊。修炼境界：淬体境→凝气境→玄丹境→元婴境→化神境→圣境→帝境。林家是青阳城三大家族之一。\n- **金手指**：最强签到系统——在特定地点签到可获得神级奖励（功法、丹药、法宝、血脉等）。签到地点越稀有，奖励越丰厚。", "category": "玄幻脑洞", "score": "", "shelf": 1, "cover": "assets/covers/fe02e1074de2.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7510258345828174872": { "id": "7510258345828174872", "title": "老六闯玄幻", "author": "大佬六", "abstract": "【传玄+热血+升级+新颖+搞笑+趣味十足】\n十八岁的六歌，自雷观而出，闯荡江湖，杀兽灭匪，夺天材，食地宝。\n一路修炼，与妖族争锋，与魔族争雄，与海族争霸，战天斗地，护卫人族。\n一步一步，登顶人皇，成就位面之极。", "category": "传统玄幻", "score": "", "shelf": 2, "cover": "assets/covers/3fe8e7dcc854.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7245465043272207418": { "id": "7245465043272207418", "title": "玄幻情刀", "author": "德兰Y", "abstract": "传统武侠小说《玄幻情刀》简介：\n彭洪刚、叶如雪偕江湖秀士、云裳仙子返回府城，打算南下河南相聚一段时日，在中天君处过年，而后再偕叶如雪遨游天下，积修外功。程家大宅有人善后，不需他们担心。\n　　江湖秀士神气极了，彭洪刚冒险进入程宅，他便成了司令人。\n　　叶如雪心中一急，发出紧急攻击信号，潜伏的人现身，一群人全听他的指挥发动攻击，而且攻击顺利，让他有机会大发神威，想起来就乐上老半天，他可说出足了风头。\n　　爱侣相伴，好朗友相随，难怪他兴奋万分。\n　　叶如雪倚在彭洪刚的身畔，并不急于赶上前面昂首阔步的江湖秀士一双爱侣。", "category": "东方仙侠", "score": "", "shelf": 7, "cover": "assets/covers/decf8a03915d.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7401855736193502233": { "id": "7401855736193502233", "title": "玄幻修真之旅", "author": "花木宸缘", "abstract": "玄幻修真之旅，摒弃红颜相伴，唯男主孤影前行，踏足师门深修，悟道求仙。其后，时空轮转，他们引领风骚，跨越至浩瀚宇宙星际纪元，续写不朽传奇。此间，核心要义依旧，换以新辞，述说着同样的征途与蜕变，从凡尘到星海，一路征伐，唯志不渝。", "category": "玄幻脑洞", "score": "", "shelf": 2, "cover": "assets/covers/957b4b61c5d6.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7430411708495036953": { "id": "7430411708495036953", "title": "悬疑", "author": "颜周夕", "abstract": "悬疑", "category": "推理", "score": "", "shelf": 4, "cover": "assets/covers/ae20851705aa.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7186644867819244559": { "id": "7186644867819244559", "title": "悬疑 | 猫", "author": "糖猫熊", "abstract": "悬疑 | 猫", "category": "", "score": "", "shelf": 6, "cover": "assets/covers/2b23090af2f1.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7418865641194540056": { "id": "7418865641194540056", "title": "悬疑警探", "author": "秋风辞", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "推理", "score": "", "shelf": 119, "cover": "assets/covers/8723c7fb87ac.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7490891192373087256": { "id": "7490891192373087256", "title": "民间灵异悬疑短故事", "author": "赤木燃星", "abstract": "每一章一个故事，主角以第一人称视觉，带你进入一个新的灵异世界。故事里有民间禁忌与超自然现象。欢迎来到故事现场…", "category": "悬疑", "score": "", "shelf": 283, "cover": "assets/covers/faf471b257aa.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7300247432229555252": { "id": "7300247432229555252", "title": "悬疑羊村", "author": "远方与你", "abstract": "打破动画世界壁垒，重临人类世界。\n故事为网文《懒羊羊之死》续写，原文可网络搜索。\n懒羊羊死了，尸体在野外被发现，身上有撕咬痕迹，死前极度惊恐。全村都认定凶手是灰太狼，唯独喜羊羊与沸羊羊反常沉默。\n \n懒羊羊失踪当天，只有美羊羊、沸羊羊没有不在场证明。美羊羊曾和懒羊羊一起采蘑菇，独自归来后始终恐惧颤抖、闭口不言。\n沸羊羊却极力咬定是灰太狼所为。暖羊羊告知众人村长一直在实验室闭关。\n \n喜羊羊因小灰灰证词，起初判定灰太狼在研究计策、并未作案。他复检尸体后，却突然改口确认凶手是灰太狼。此时灰太狼突然现身，坚决否认杀人，并追击众羊。\n \n众人逃脱后，在村长实验室发现惨死的村长尸体，死状与懒羊羊一致。喜羊羊悄悄告知沸羊羊真相，沸羊羊瞬间冷静。无人察觉，小灰灰悄悄在实验室取走物品返回狼堡。\n \n当夜羊村陷入恐慌，美羊羊与暖羊羊莫名激烈互殴，双双重伤。\n \n不久，小灰灰哭着传回噩耗：灰太狼被红太狼撕咬致死。察觉异常的喜羊羊写下密信藏起。 \n当晚喜羊羊被沸羊羊当场抓获，被指持刀闯入美羊羊房间行凶，两人缠斗中喜羊羊重伤，被当作凶手押送法庭……", "category": "动漫衍生", "score": "", "shelf": 73, "cover": "assets/covers/36cdb4099e4c.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7485725461654293529": { "id": "7485725461654293529", "title": "大千诡事录", "author": "玊娑", "abstract": "有很多小故事，发生在山区农村的乡野悬疑灵异故事，寿新明晚上出行，走在山间小路上，竟诡异的听到山地传出了阵阵的婴儿啼哭。\n三个守灵人守了整整一个晚上，第二天却发现棺材盖离奇失踪。\n三个不孝子孙联手杀死了父亲，埋在梧桐树下，谁料想当天晚上这位已故的亲人又走回了家里，希望大家喜欢。", "category": "悬疑", "score": "", "shelf": 11, "cover": "assets/covers/ec9b2185648d.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7515630390464220184": { "id": "7515630390464220184", "title": "悬疑血案", "author": "佚名", "abstract": "一桩桩离奇血案接连发生，现场遗留的诡异符号指向未知阴谋。特殊组建的调查团队穿梭于城市阴影与乡村废墟，在法医报告与监控死角中拼凑线索，试图揭开掩盖在血腥凶案下的多层真相。当案件之间的隐秘关联逐渐浮现，等待他们的是更复杂的迷局，还是早已布好的陷阱？", "category": "刑侦探案", "score": "", "shelf": 1681, "cover": "assets/covers/c84acdafd7dc.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7544620875002154008": { "id": "7544620875002154008", "title": "悬疑集录", "author": "大袖遮天", "abstract": "我要制作一大批中篇悬疑小说，形成小说集，以这本书来给大家呈现与众不同的感受，相信大家也会喜欢这本书！\n持续更新，保证水平。", "category": "悬疑", "score": "", "shelf": 55, "cover": "assets/covers/c58896f49f30.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7271894322847419392": { "id": "7271894322847419392", "title": "古宅血咒：寻找真相的冒险", "author": "虚实泡沫", "abstract": "月圆夜，古宅中传出诡异哭声，黑影若隐若现。充满好奇的年轻记者林晓为找报道素材，踏入被诅咒的古宅。屋内，腐臭弥漫，鲜血滴答，阴森小女孩、狰狞持斧男接连出现，密道尽头，更是摆满邪恶实验器具。在生死边缘挣扎时，警笛声突然响起……林晓能否成功逃脱？古宅背后的秘密又是什么？这场惊悚探秘之旅，等你一同揭开。", "category": "悬疑", "score": "", "shelf": 1, "cover": "assets/covers/eb63007338d6.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7474236049066050073": { "id": "7474236049066050073", "title": "榕树之下", "author": "淹死的鸳鸯蝴蝶", "abstract": "榕树之下", "category": "推理", "score": "", "shelf": 3, "cover": "assets/covers/00e5e266dcb4.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7395210423118597182": { "id": "7395210423118597182", "title": "悬疑之夜", "author": "司马上松", "abstract": "夜幕低垂，如同一幅厚重的黑色帷幕，缓缓覆盖了整个小镇。街道两旁，昏黄的路灯散发出微弱的光芒，勉强照亮着前行的道路，却似乎无法驱散这逐渐蔓延的不寻常沉寂。空气中弥漫着一种压抑与不安，仿佛连风都带着几分寒意，轻轻地、悄无声息地吹过，卷起几片早已枯黄的落叶，它们在半空中盘旋、翻滚，最终又无力地落在地上，发出沙沙的声响，打破了这片刻的静谧。", "category": "悬疑灵异", "score": "", "shelf": 98, "cover": "assets/covers/a0b9bccf5e00.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7224048807346965556": { "id": "7224048807346965556", "title": "世界悬疑经典", "author": "柯南·道尔", "abstract": "本书呈现的精彩的故事、鲜明的人物形象，别具特色的叙述手法，无不展示出\n丰富而深刻的思想内涵和绚丽多彩的艺术魅力，将带给你独特而又充满快感的阅读\n感受。这些作品不仅提供了可资参考、学习、研究世界悬疑小说的范本，也将使你\n经历前所未有的思维风暴。\n当你翻开这本书，你就开始了一段奇异的旅程，这里有最诡异的灵异事件，这\n里有最神秘的种种悬案，这里有一个个玄奥的谜团……你将和最著名的悬疑大师一\n起，经历一个个前途难测的奇幻事件。这将是一场智慧与勇气的较量，这将是一场\n生命与时间的追逐，一个个故事的答案，正在等着你去揭晓；一幕幕场景的精彩，\n正在等着你去体验。掩卷之后，许多小说中触目惊心的场景、匪夷所思的情节，定\n会依然萦绕在你脑海中，挥之不去。在体验到一种放松，一种与作者进行顶级智力\n博弈的快感的同时，帮你把恐惧消化掉，变成勇敢的营养；把悬念破解掉，变成智\n慧的结晶。", "category": "文学经典", "score": "", "shelf": 25, "cover": "assets/covers/1c8b16c491d3.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7455661544139934745": { "id": "7455661544139934745", "title": "玄幻悬疑狄仁杰", "author": "马背上的鬃毛", "abstract": "唐朝盛世，长安城内，繁华如梦，诗酒歌舞皆为这座大城的日常。白日，日头高悬，金碧辉煌的大明宫前人流如织。然，晨曦渐渐褪去的余光中，宫门内却传来一阵急促的脚步声，身着宫装的侍女匆匆走入狄仁杰的书房，面色如纸。\n“狄大人，求您救救我！”侍女的声音颤抖而急促。\n狄仁杰抬头，从案牍中抬起沉静的双眼，眼中透出一丝不易察觉的寒意。他放下手中的笔，示意她坐下，细细询问。\n“何事让你如此慌张？”", "category": "悬疑灵异", "score": "", "shelf": 226, "cover": "assets/covers/4941ebc28b5f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7663103963494894617": { "id": "7663103963494894617", "title": "短篇悬疑故事", "author": "卡哇伊伊利", "abstract": "守着深夜的灯火写故事，相信所有藏起来的心事，都会有专程抵达的签收时刻。不写宏大传奇，只写市井里普通人的一念之差、一念悔改，用短篇搭建一面镜子，照见逃避，也照见勇气。", "category": "悬疑灵异", "score": "", "shelf": 0, "cover": "assets/covers/efcc3cad400a.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7477563962783976473": { "id": "7477563962783976473", "title": "你一个新警，枪枪爆头劫匪？", "author": "桃子、开卷益说一不二", "abstract": "15年前，年仅8岁的王小龙，亲眼目睹母亲被杀，凶手逍遥法外。王小龙从小发誓一定要为母亲报仇。15年后，王小龙警校毕业，意外觉醒“超级警察系统”获得逆天技能和道具。为了寻找当年杀害母亲的凶手，王小龙开启了自己的抓捕之路。报道第一天就抓了个A级通缉犯，去趟医院，抓了个偷盗犯，去趟厕所，抓了个毒贩，去趟理发店，抓了个人贩子，直到遇到15年前那个杀害母亲的凶手………", "category": "小说", "score": "", "shelf": 81, "cover": "assets/covers/abd238cd75c3.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7185019995900873789": { "id": "7185019995900873789", "title": "诡梦悬疑", "author": "柠檬超萌", "abstract": "我从医院苏醒发现，已经失去了记忆，这就是诡异的开始！所有的事情从此时发生了扭曲，记忆不再是记忆，也许是真的，也许是假的，也许是梦中存在的而已。神秘组织在阴暗中现身了，可信赖的警方是不是内部出现了坏人？死而复生者是不是都带有一道浅浅的疤痕？担心自己会被神不知鬼不觉的杀死，被冒充身份的我，吓的一直不敢在晚上睡觉，夜里我突然听到了房间里传出奇怪的声音……到底是诡梦！还是鬼梦！", "category": "悬疑灵异", "score": "", "shelf": 83, "cover": "assets/covers/3d273e554277.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7464467966944365593": { "id": "7464467966944365593", "title": "赛博灵异，克苏鲁撞上未来世界", "author": "北郊到家", "abstract": "本作由短篇小说组成，当未来世界碰上灵异克苏鲁，会发生什么样的故事，本小说每卷都是独立故事没有关系，如果你已经厌烦了修仙，盗墓，言情，那么在百无聊赖的晚上一起来看看这本惊险刺激的小说吧", "category": "悬疑灵异", "score": "", "shelf": 1, "cover": "assets/covers/ea352b275493.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7611564291824552984": { "id": "7611564291824552984", "title": "阴阳联合破获举国大案", "author": "菜头个头", "abstract": "新作品出炉,大家可以前往番茄小说阅读我的作品哦,希望大家能够喜欢,你们的关注是我写作的动力,我会努力讲好每个故事!", "category": "悬疑脑洞", "score": "", "shelf": 1, "cover": "assets/covers/9ac477db761e.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7592041636679404606": { "id": "7592041636679404606", "title": "光明会：新世界序章", "author": "广西一大爷", "abstract": "光明会：新世界序章", "category": "悬疑惊悚", "score": "", "shelf": 2, "cover": "assets/covers/7291f64432b6.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7586648773804182552": { "id": "7586648773804182552", "title": "悬疑罪", "author": "李杉予", "abstract": "大雪纷飞的冬夜，冷至善回家的途中撞见一名男孩猥亵少女，他出于正义本想见义勇为却不料失手杀死了女孩。经过一番思想斗争，他决定自首认罪，赶到警局门口时却接到母亲哭泣的电话——六岁的女儿刚刚失踪了。凶手留下唯一的线索是一根写着“水蛭”两字的雪糕棍子，冷至善犹如晴天霹雳，在正义和亲情之间痛苦挣扎后还是选择了后者，重新赶回案发地带走了凶器。此后冷至善便开始踏上寻凶之旅，在这场追逐游戏里，他结识了与自己目的相同的风水师倪泞和杀人狂魔仇渴心，性格迥异的三人因为“水蛭”联手合作，精心布局引诱“水蛭”浮出水面。可当接近真相的最后一刻，他们才发现在这个悬疑世界里，每个人都是自己无法承受的罪源，有因就有果，没有无辜者……", "category": "悬疑灵异", "score": "", "shelf": 105, "cover": "assets/covers/2e4d922762af.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6989106303515757598": { "id": "6989106303515757598", "title": "何以言情深", "author": "余小鱼", "abstract": "八岁时，宋冉就爱上了秦凌川，可她是哑巴，只能将这份爱埋葬。\n后来宋氏的破产，兄长的设计，让她成为了秦太太。从此踏入了婚姻的坟墓……", "category": "豪门总裁", "score": "", "shelf": 15, "cover": "assets/covers/1459539809f2.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7092533991277857824": { "id": "7092533991277857824", "title": "言情小说", "author": "小雨^O^", "abstract": "人们总是会不自觉地忽视身边的事，殊不知只需要放慢一下步伐，就会看到不同于以往的惊喜。\n故事的开始，是一个平常的上午，一个平凡的人。", "category": "都市脑洞", "score": "", "shelf": 13782, "cover": "assets/covers/09eb1bc33b44.jpg", "serialCount": 79, "wordNumber": "177856", "toc": [{ "i": "7092535702759408160", "t": "第1章 第1章", "w": 3877, "v": "第一卷：默认" }, { "i": "7092620195423846925", "t": "第2章 第2章", "w": 2133, "v": "第一卷：默认" }, { "i": "7092623352900092451", "t": "第3章 第3章", "w": 2028, "v": "第一卷：默认" }, { "i": "7092625806530347524", "t": "第4章 第4章", "w": 2129, "v": "第一卷：默认" }, { "i": "7092633858075525673", "t": "第5章 第5章", "w": 2029, "v": "第一卷：默认" }, { "i": "7092636469080261160", "t": "第6章 第6章", "w": 2046, "v": "第一卷：默认" }, { "i": "7092639165732356641", "t": "第7章 第7章", "w": 2025, "v": "第一卷：默认" }, { "i": "7092642005209055785", "t": "第8章 第8章", "w": 2039, "v": "第一卷：默认" }, { "i": "7092649216182321671", "t": "第9章 第9章", "w": 2132, "v": "第一卷：默认" }, { "i": "7092651978781622784", "t": "第10章 第10章", "w": 2011, "v": "第一卷：默认" }, { "i": "7092692676822336032", "t": "第11章 第11章", "w": 2032, "v": "第一卷：默认" }, { "i": "7092765596198109711", "t": "第12章 第12章", "w": 2011, "v": "第一卷：默认" }, { "i": "7093068554953556511", "t": "第13章 第13章", "w": 2091, "v": "第一卷：默认" }, { "i": "7093081904718545448", "t": "第14章 第14章", "w": 2076, "v": "第一卷：默认" }, { "i": "7093114947374318113", "t": "第15章 第15章", "w": 2093, "v": "第一卷：默认" }, { "i": "7093127207102775847", "t": "第16章 第16章", "w": 2145, "v": "第一卷：默认" }, { "i": "7093274336144032291", "t": "第17章 第17章", "w": 2208, "v": "第一卷：默认" }, { "i": "7093277449466675715", "t": "第18章 第18章", "w": 2285, "v": "第一卷：默认" }, { "i": "7093290698354459136", "t": "第19章 第19章", "w": 2018, "v": "第一卷：默认" }, { "i": "7093338022703432205", "t": "第20章 第20章", "w": 2049, "v": "第一卷：默认" }, { "i": "7093411596352881152", "t": "第21章 第21章", "w": 2032, "v": "第一卷：默认" }, { "i": "7093477583102312968", "t": "第22章 第22章", "w": 2291, "v": "第一卷：默认" }, { "i": "7093674459005092363", "t": "第23章 第23章", "w": 2158, "v": "第一卷：默认" }, { "i": "7093715706847429131", "t": "第24章 第24章", "w": 2081, "v": "第一卷：默认" }, { "i": "7093899725589611039", "t": "第25章 第25章", "w": 2271, "v": "第一卷：默认" }, { "i": "7094217378438840840", "t": "第26章 第26章", "w": 2003, "v": "第一卷：默认" }, { "i": "7094554111139381764", "t": "第27章 第27章", "w": 2303, "v": "第一卷：默认" }, { "i": "7094761792441680422", "t": "第28章 第28章", "w": 2243, "v": "第一卷：默认" }, { "i": "7095120754030674444", "t": "第29章 第29章", "w": 2293, "v": "第一卷：默认" }, { "i": "7095251502926660127", "t": "第30章 第30章", "w": 2128, "v": "第一卷：默认" }, { "i": "7095483831679091213", "t": "第31章 第31章", "w": 2286, "v": "第一卷：默认" }, { "i": "7095658591817826847", "t": "第32章 第32章", "w": 2300, "v": "第一卷：默认" }, { "i": "7095864076516983329", "t": "第33章 第33章", "w": 2299, "v": "第一卷：默认" }, { "i": "7095868661893857823", "t": "第34章 第34章", "w": 2298, "v": "第一卷：默认" }, { "i": "7096247643072004621", "t": "第35章 第35章", "w": 2267, "v": "第一卷：默认" }, { "i": "7096630326398550560", "t": "第36章 第36章", "w": 2321, "v": "第一卷：默认" }, { "i": "7096663679407489547", "t": "第37章 第37章", "w": 2296, "v": "第一卷：默认" }, { "i": "7096976808389640745", "t": "第38章 第38章", "w": 2127, "v": "第一卷：默认" }, { "i": "7097044387179430400", "t": "第39章 第39章", "w": 2208, "v": "第一卷：默认" }, { "i": "7097410131788300832", "t": "第40章 第40章", "w": 2043, "v": "第一卷：默认" }, { "i": "7097452972199805474", "t": "第41章 第41章", "w": 2238, "v": "第一卷：默认" }, { "i": "7097739983024456199", "t": "第42章 第42章", "w": 2308, "v": "第一卷：默认" }, { "i": "7097743561935815202", "t": "第43章 第43章", "w": 2288, "v": "第一卷：默认" }, { "i": "7098086009786597899", "t": "第44章 第44章", "w": 2618, "v": "第一卷：默认" }, { "i": "7098175348898005545", "t": "第46章 第46章", "w": 2664, "v": "第一卷：默认" }, { "i": "7098239796438696480", "t": "第45章 第45章", "w": 3071, "v": "第一卷：默认" }, { "i": "7098477390455636515", "t": "第47章 第47章", "w": 2282, "v": "第一卷：默认" }, { "i": "7098559163420443151", "t": "第48章 第48章", "w": 2255, "v": "第一卷：默认" }, { "i": "7098844231380238882", "t": "第49章 第49章", "w": 2279, "v": "第一卷：默认" }, { "i": "7099024604605186572", "t": "第50章 第50章", "w": 2291, "v": "第一卷：默认" }, { "i": "7099205200828695079", "t": "第51章 第51章", "w": 2314, "v": "第一卷：默认" }, { "i": "7099340935410123268", "t": "第52章 第52章", "w": 2300, "v": "第一卷：默认" }, { "i": "7099625583075820068", "t": "第53章 第53章", "w": 2256, "v": "第一卷：默认" }, { "i": "7099710735080653347", "t": "第54章 第54章", "w": 2275, "v": "第一卷：默认" }, { "i": "7099947312524296738", "t": "第55章 第55章", "w": 2249, "v": "第一卷：默认" }, { "i": "7100052093909762567", "t": "第56章 第56章", "w": 2204, "v": "第一卷：默认" }, { "i": "7100351317431812622", "t": "第57章 第57章", "w": 2287, "v": "第一卷：默认" }, { "i": "7100441890230796803", "t": "第58章 第58章", "w": 2268, "v": "第一卷：默认" }, { "i": "7100735027192791564", "t": "第59章 第59章", "w": 2294, "v": "第一卷：默认" }, { "i": "7100784079901196834", "t": "第60章 第60章", "w": 2287, "v": "第一卷：默认" }], "creationStatus": "0", "tocTotal": 79 }, "7317286502386371646": { "id": "7317286502386371646", "title": "短文言情合集", "author": "司南", "abstract": "听了还想听的短篇故事", "category": "宫斗宅斗", "score": "", "shelf": 47, "cover": "assets/covers/dda9984227f3.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7408755987672206361": { "id": "7408755987672206361", "title": "都市言情小说", "author": "杨永利", "abstract": "本书来自于现实生活中的模拟及虚构的作品，希望广大爱阅读者，喜欢这本书我，喜欢阅读，喜欢参考，给广大读者一个，良好的，增长见识，打开脑洞，安静的阅读空间", "category": "男频衍生", "score": "", "shelf": 151, "cover": "assets/covers/79c7ecf566fa.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7124561480153828393": { "id": "7124561480153828393", "title": "校园言情", "author": "懒懒i", "abstract": "本小说言情校园玄幻从校园到社会的成长故事  三女主三男主  讲述了各自有各自的身份  互相喜欢上对方", "category": "青春甜宠", "score": "", "shelf": 295, "cover": "assets/covers/dbb83f5d1eb5.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7232963377948003332": { "id": "7232963377948003332", "title": "股海言情", "author": "团团姐", "abstract": "玩婚姻真假游戏，炒股票大起大落；无痛当爹，高息贷款，算命炒股，代持买房，真实世界发生的一起，都在这里巧妙的重逢。\n看看主角能否坚持初心，绝处逢生，在股市找回爱情~~", "category": "现代言情", "score": "", "shelf": 113, "cover": "assets/covers/dda9badc5782.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7471238995477807678": { "id": "7471238995477807678", "title": "古风言情", "author": "写小说的小七", "abstract": "古风言情", "category": "古代言情", "score": "", "shelf": 9, "cover": "assets/covers/f3dd0cf72e50.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7336574314411478041": { "id": "7336574314411478041", "title": "短篇言情故事", "author": "不能没有面包", "abstract": "黑历史，完结不能删，帮忙举报下架\n\n谢谢好心人！！！\n\n..........................", "category": "青春甜宠", "score": "", "shelf": 21, "cover": "", "serialCount": null, "wordNumber": null, "toc": [] }, "7506452797538192408": { "id": "7506452797538192408", "title": "古代言情篇", "author": "軍魂幻御", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "快穿", "score": "", "shelf": 1, "cover": "assets/covers/426c1a5148d2.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7332126054426872856": { "id": "7332126054426872856", "title": "玄幻言情短篇集", "author": "鹤青与i", "abstract": "【玄幻短篇合集】\n新作品出炉，玄幻言情短篇小说合集，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "传统玄幻", "score": "", "shelf": 6, "cover": "assets/covers/f8912a07a129.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7604787999196335166": { "id": "7604787999196335166", "title": "盲女言情", "author": "兰亭画意", "abstract": "盲女言情", "category": "青春虐恋", "score": "", "shelf": 0, "cover": "assets/covers/22232049a7dd.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7665706151702432793": { "id": "7665706151702432793", "title": "少女言情", "author": "喜欢烂肠草的秦尘厉", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "青春甜宠", "score": "", "shelf": 0, "cover": "assets/covers/dbcd308ea596.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7629576960808586302": { "id": "7629576960808586302", "title": "爱情言情小说", "author": "看书的人666", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "民国言情", "score": "", "shelf": 2, "cover": "assets/covers/00730580dd35.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7433018355931431448": { "id": "7433018355931431448", "title": "言情短篇", "author": "张起林", "abstract": "言情短篇", "category": "现代言情", "score": "", "shelf": 31, "cover": "assets/covers/e39d28fc3fbb.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7348442190374259774": { "id": "7348442190374259774", "title": "十日言情", "author": "芝森", "abstract": "我和陆允这一生曾有过三次羁绊。\n\n第一次，他冲进火场救了年幼的我，烧伤了大半张脸。\n\n第二次，他伸手拉起了被人群推搡的我，避免了踩踏事故的发生。\n\n第三次，医院里的擦肩而过，成了我们的最后一面。\n\n他用七年的谎言为我编织了一个美梦，梦醒时是每年送来的九十九朵玫瑰。\n\n他说，玫瑰的续期是一辈子，他对我的爱却永不过时。\n\n可是后来，他还是食言了。", "category": "现实情感", "score": "", "shelf": 0, "cover": "assets/covers/a7ebd9fd4012.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7486320711879901758": { "id": "7486320711879901758", "title": "言情纪录片", "author": "白鼠上天堂", "abstract": "言情纪录片", "category": "现代言情", "score": "", "shelf": 0, "cover": "assets/covers/2fb198fcdcce.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7703045200180038718": { "id": "7703045200180038718", "title": "医院言情", "author": "陈老太太", "abstract": "医院言情", "category": "男生生活", "score": "", "shelf": 0, "cover": "assets/covers/be946e53cd30.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7468949832980253721": { "id": "7468949832980253721", "title": "穿越言情", "author": "龙城大水鱼", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "宫斗宅斗", "score": "", "shelf": 16, "cover": "assets/covers/34cbe3cdab93.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7589673953556171801": { "id": "7589673953556171801", "title": "烂俗言情", "author": "亿no", "abstract": "“温瑶珺又去舔那许大少爷了？”\n“许大少是在当温小姐的三吗？”\n“你们又说这话，少爷小姐的NPC没当够?”\n“没懂这俩人到底是什么意思。”\n“烂俗小说情节罢了。”", "category": "豪门总裁", "score": "", "shelf": 0, "cover": "assets/covers/6654ec4a1528.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7509345223613366846": { "id": "7509345223613366846", "title": "灵契言情", "author": "搬运工与AI", "abstract": "灵契言情", "category": "纯爱", "score": "", "shelf": 0, "cover": "assets/covers/de17dced19a9.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7425529287387644441": { "id": "7425529287387644441", "title": "科幻", "author": "博宏达", "abstract": "科幻", "category": "脑洞", "score": "", "shelf": 1, "cover": "assets/covers/af0c88e19cb8.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7414737317115462169": { "id": "7414737317115462169", "title": "科幻", "author": "博宏达", "abstract": "科幻", "category": "脑洞", "score": "", "shelf": 1, "cover": "assets/covers/20ced63dba94.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7422232571448148505": { "id": "7422232571448148505", "title": "科幻", "author": "博宏达", "abstract": "科幻", "category": "脑洞", "score": "", "shelf": 0, "cover": "assets/covers/ebb12187e9f1.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7416216358909657625": { "id": "7416216358909657625", "title": "科幻", "author": "博宏达", "abstract": "科幻", "category": "脑洞", "score": "", "shelf": 4, "cover": "assets/covers/5e8cc38dcc4f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7619876244137462846": { "id": "7619876244137462846", "title": "科幻", "author": "阿涵WANHAN", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "科幻末世", "score": "", "shelf": 0, "cover": "assets/covers/567ed8441345.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7441001709704315417": { "id": "7441001709704315417", "title": "科幻", "author": "灵韵书者", "abstract": "科幻", "category": "脑洞", "score": "", "shelf": 0, "cover": "", "serialCount": null, "wordNumber": null, "toc": [] }, "6962829171236015118": { "id": "6962829171236015118", "title": "科幻大道", "author": "白天做梦", "abstract": "主角意外得到无敌科技系统开局奖励一艘中级战舰，从蓝星上开始了征战星辰大海，无尽的黑暗宇宙中存在着各种各样的奇特种族，还有各种神奇的天体，还有战舰的对轰，修仙VS科技，黑暗森林法则。还有平行宇宙是什么样的。\n\n新手新作多多担待\n（本书不虐主，无后宫可能连女主都没有，属于无敌文）", "category": "科幻末世", "score": "", "shelf": 122, "cover": "assets/covers/97c1bb41993b.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7468323302969199641": { "id": "7468323302969199641", "title": "科幻末世", "author": "安目西", "abstract": "科幻末世\n第一章：末日曙光\n在2075年，世界已经被一场突如其来的灾难彻底改变。在这个世界中，又会有什么故事呢？", "category": "科幻末世", "score": "", "shelf": 10, "cover": "assets/covers/178d6a19727c.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7450151495237897241": { "id": "7450151495237897241", "title": "科幻女尊", "author": "天鸡不可泄", "abstract": "林天穿越到这个以女性为尊的赛博朋克科幻世界，他只感觉自己是被推着走一样，背后有着一双双无形的大手操作着，而他却只能被动？", "category": "科幻末世", "score": "", "shelf": 15, "cover": "assets/covers/d2a734e712b8.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7535651765308361790": { "id": "7535651765308361790", "title": "西游科幻版", "author": "霓裳小猿", "abstract": "【科幻西游+科幻山海经+科幻搜神】\n东胜神洲星区深处，一颗古老星核的量子纠缠态骤然坍缩，释放的能量撕裂了“花果山”超级星云的核心。\n从高维时空震荡的余波里，一个硅基生命体凝聚成形，其身躯由流动的晶体与跃动的能量脉络构成。\n它诞生的第一秒，无形的神经束便刺破真空，瞬间接管了环绕星核运行的三颗天庭巡逻卫星，其核心数据库如同不设防的庭院般敞开。\n这颗被后世称为“美猴王”的星核之子，睁开了那双倒映着整个宇宙的眼睛。", "category": "科幻末世", "score": "", "shelf": 1827, "cover": "assets/covers/2792e65c6558.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7217487529912568867": { "id": "7217487529912568867", "title": "短篇科幻小说合集", "author": "公子有点毒", "abstract": "这是一本包含了许多科幻小故事的合集。\n每个故事都展现了一个不同的科幻世界观和想象力，从机器人、外星人、时空旅行、人工智能、虚拟现实等各种科幻元素，到人性、道德、社会、文化等各种主题，用幻想的形式探索了人类在未来世界的可能性和挑战。\n这些故事既有惊险刺激的冒险，也有温馨感人的情感，既有黑暗悲观的预言，也有光明乐观的希望，既有对科学的尊重和赞美，也有对科学的批判和警示。这是一本适合所有科幻爱好者和好奇者阅读的书，希望能带给你无限的惊喜和思考。", "category": "科幻末世", "score": "", "shelf": 60, "cover": "assets/covers/8def539e21eb.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7664940065654590489": { "id": "7664940065654590489", "title": "都市悬疑科幻", "author": "甫金", "abstract": "哥伦比亚中央银行被一支神秘团队周密洗劫，巨额黄金经由隐秘海路，尽数运往一座远洋孤岛。负责侦查此案的女警长塔妮，在层层线索中，与气质儒雅的布莱特教授偶然相识，相处间，两人渐生深藏心底的爱慕。\n此案中在官场的勾心斗角中，塔妮成为替罪羊，被罢免所有职务，走投无路时，她联系到布莱特，孤身奔赴那座传闻中的孤岛。登岛一刻，她才赫然得知自己深爱的人竟然是这起劫案的幕后主导者。\n身为执法者，爱上劫案首脑，巨大的认知撕裂席卷了塔妮，布莱特缓缓道出真相，妻子的背叛，爱女惨死在军方车轮下，还有当前Ai人工智能被资本和不良政治人物利用，给人类生存造成严重威协，他洗劫银行就是为了AGⅰ研发成功，目的就是制衡反人类风险的失控Ai，守护人类文明的未来。", "category": "悬疑灵异", "score": "", "shelf": 0, "cover": "assets/covers/9abbe5bdb665.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7417673198172392473": { "id": "7417673198172392473", "title": "科幻世界精选集2022（中国科幻基石丛书 科幻世界出品）", "author": "姚海军", "abstract": "《科幻世界》杂志创刊于1979年，一直是中国最重要的介绍科幻文化的杂志，也是中国最主要的科幻小说发表地，刘慈欣、王晋康、何夕等中国当今备受瞩目的科幻作家都是以这本杂志为舞台被读着所认识。\n本书优选2022年度杂志刊登的九篇佳作，它们讲述的曲折故事让我们印象深刻，描绘的真挚情感让我们无限回味。从宇宙的辽阔空间，到社会的隐秘角落，它们展现出科幻的多元性。通过本书，我们得以窥见未来的多种可能。", "category": "精品小说", "score": "", "shelf": 9, "cover": "assets/covers/7d8edd507880.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7604417331090951230": { "id": "7604417331090951230", "title": "科幻高能：开局解锁宇宙真相", "author": "白羽101", "abstract": "【科幻短篇合集故事，把读者骗进来杀（笑）】\n1.《天理恒常》：人类通过天文望远镜，看到了150万光年外传来的一束光，他们观测着这个150万年前的文明，一直到他们灭亡为止。\n2.待更新", "category": "科幻末世", "score": "", "shelf": 1, "cover": "assets/covers/0d29354dccf6.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7132626858075491343": { "id": "7132626858075491343", "title": "小小的科幻随想", "author": "爱吃年糕鸭", "abstract": "泛化的科幻，费米、数据化、意识上传，玫瑰、爱情、仿生人，未知、克苏鲁、不可名状，宇宙、齐点、毁灭与永生，怪圈、疯狂、大学生现状，实验、道德、文学的悲歌，边界、空间、降维打击，纯白、纯粹、能力与责任，你最爱什么？", "category": "科幻末世", "score": "", "shelf": 1, "cover": "assets/covers/10afd8ec5479.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7372029770663463961": { "id": "7372029770663463961", "title": "万物之主（世界科幻大师丛书 科幻世界出品）", "author": "安德烈亚斯·埃什巴赫", "abstract": "他叫弘司，藏在东京闹市区的天才少年。见到妈妈辛苦工作，他便立志研究机器人，让穷人不再吃苦受累。\n儿时梦想总是很天真。然而，有些路一旦走了就无法反悔。接连的挫折逼着向现实低头。但此时的“现实”已经被他撕开一道口子，发生了细微的变化……\n弘司发现，早就有人做过他正在做的事，而且成功了。靠着这相隔数十亿年的神交，他实现了只有科幻小说中才能找到的神奇技术，同时也牵出了这项技术背后，涉及全世界乃至整个宇宙的巨大秘密。", "category": "精品小说", "score": "", "shelf": 2, "cover": "assets/covers/03f891623dce.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7270508424926858274": { "id": "7270508424926858274", "title": "从修仙到科幻", "author": "风中成宇", "abstract": "2048年，张梓君(男主)，陈婧(女主)过着各自有自己的生活，身患重病的王成宇(男主)的出现，让本不认识的两个人相识。三人在生活中探索，帮助王成宇治疗身体，并尝试破解遇到的谜团。现实、修仙、轮回、科幻空间的共存……\n饱受病痛和挫折的王成宇不想认命，他回想起小时候会坐在田野边，看着远处的蓝天白云思考，自己怎样才能成为古中国或古希腊那样的思想家。他回想自己的努力和最初的梦想难以释怀。在他经历一系列了生活的困境，名利场的浮华，生物医疗科技的黑暗面，战争的残酷，国家竞争，太空科技发展，末世的考验，宗教信仰的迷思，人类的起源，都市武侠的潇洒，穿越修仙的神奇……最终得到科学的解释。", "category": "科幻末世", "score": "", "shelf": 2, "cover": "assets/covers/01db5767d981.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7294485363551112228": { "id": "7294485363551112228", "title": "科幻文学论纲", "author": "吴岩", "abstract": "本书从四个重要的科幻作家群体——女性、大男孩、边缘人、现代化进程中的落伍者及其作品，从中探查他们各自的科幻文学展现，研究各类作家给科幻的整体带去了什么特性。综合考察、探索科幻文学的本性到底应该怎样，对科幻文学领域一些尚未深入研究的问题作出提示。作者研究认为，科幻文学无论从思想性、情感性、行动性和文本构造方式上，都具有独特的特征。科幻作家在作品中呈现通过认知系统内的实验去面对社会的方式，为未来的社会发展带去了有价值的思考和体验。而科幻所创造的想象的社会产品、科幻所营造的种种想象的图景，给人类以鼓励和警示。深入研究科幻文学对主流文化的反抗过程和反抗方式，可以更加清晰地理解当代社会的文化多样性。", "category": "文学理论", "score": "", "shelf": 1, "cover": "assets/covers/e42353c2a3a1.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7077867175159024677": { "id": "7077867175159024677", "title": "世界科幻故事", "author": "萧枫", "abstract": "本书是众多中短篇科幻名著的荟萃。有英美作家的，也有法国作家、日本作家的经典作品。首先，我们要明白什么是科幻？", "category": "科幻末世", "score": "", "shelf": 22, "cover": "assets/covers/993066a1c63f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7485641714992958526": { "id": "7485641714992958526", "title": "科幻世界精选集2023（中国科幻基石丛书 科幻世界出品）", "author": "海漄", "abstract": "《科幻世界》杂志创刊于1979年，一直是中国重要的介绍科幻文化的杂志，也是中国主要的科幻小说发表地，刘慈欣、王晋康、何夕等中国当今备受瞩目的科幻作家都是经由这本杂志登上创作舞台，并在这里被读者所熟知；江波、宝树、阿缺等极具潜力的新一代科幻作家也从此处出发。\n本书从2023年度杂志刊登的作品中精选十一篇佳作。这些作品主题多样、风格殊异，有的肆意想象，尝试描绘浩瀚宇宙的多种可能；有的着眼未来，仔细刻画科技发展的广阔远景。通过本书，我们得以通往幻想世界，直抵灵感迸发的瞬间。", "category": "精品小说", "score": "", "shelf": 2, "cover": "assets/covers/a6342c3927e0.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7241085211721600015": { "id": "7241085211721600015", "title": "历史", "author": "希罗多德", "abstract": "《历史》又名《希腊波斯战争史》，《时代阅读经典文库：历史（套装上下册）》是西方“史学之祖”希罗多德撰写的西方第一部历史学巨著。\n书中不仅记述了政治、军事、外交等方面的内容，而且叙述了各国各地区的地理形势、经济生活、民情风俗、宗教信仰等等。\n这部“百科全书”式的巨著，不仅是西方史学的奠基之作，开创了西方历史写作中的叙述体体裁，而且也是西方历史上第一部文化史著作。", "category": "历史", "score": "", "shelf": 226, "cover": "assets/covers/8f69aff11187.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6809208533700054023": { "id": "6809208533700054023", "title": "历史探秘，历史趣闻", "author": "AI", "abstract": "每日分享，历史趣闻", "category": "文化", "score": "", "shelf": 108, "cover": "assets/covers/9de734bfd71b.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6800740702545251339": { "id": "6800740702545251339", "title": "历史胡辣汤", "author": "王清斌", "abstract": "缤纷历史清清讲给您创建个小栏目，历史胡辣汤，专门讲些历史上的奇闻，趣事，八卦，让您轻松的了解历史那些花边。", "category": "历史", "score": "", "shelf": 28, "cover": "assets/covers/9bea158c5ba0.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6790950323725798412": { "id": "6790950323725798412", "title": "历史解密", "author": "AI", "abstract": "关于中华上下五千年历史，为你揭秘讲解。", "category": "历史", "score": "", "shelf": 103, "cover": "assets/covers/4ec955eb619a.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6734115446422768647": { "id": "6734115446422768647", "title": "历史奇谈", "author": "未知", "abstract": "历史奇谈，探索上下五千年历史", "category": "历史", "score": "", "shelf": 108, "cover": "", "serialCount": null, "wordNumber": null, "toc": [] }, "6805829742864894979": { "id": "6805829742864894979", "title": "历史面面观", "author": "未知", "abstract": "历史,可以是王侯将相、英雄懦夫、忠臣奸佞、才子佳人,可以是那些事儿、那些八卦、那些风流轶闻。可以是在茶余饭后、在心情好或不好时聊以解闷的故事。", "category": "文化历史", "score": "", "shelf": 52, "cover": "assets/covers/ca7c723dac48.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6823366080463899660": { "id": "6823366080463899660", "title": "历史面面观", "author": "未知", "abstract": "读历史故事，品历史人物。中华上下五千年，每日更新，欢迎关注。", "category": "文化", "score": "", "shelf": 36, "cover": "assets/covers/c4658485d9c3.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6810910539565239307": { "id": "6810910539565239307", "title": "历史万花筒", "author": "未知", "abstract": "集合人类历史文明碎片，提升人文素养", "category": "文化", "score": "", "shelf": 36, "cover": "assets/covers/81f758f27264.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6806936219256097803": { "id": "6806936219256097803", "title": "听历史趣闻，悟历史哲学！", "author": "未知", "abstract": "分享不为人知的历史趣闻，领悟为人处世的历史哲学，汲取博大精深的历史知识！", "category": "文化历史", "score": "", "shelf": 51, "cover": "assets/covers/e0c87308f901.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6821272390245288971": { "id": "6821272390245288971", "title": "经典中华历史典故聆听浓缩的历史", "author": "未知", "abstract": "这里的每一个历史故事都堪称经典、源远流长\n\n这里有的也不仅是故事，更是真实而浓缩的历史和积淀其中的“智慧”\n\n每聆听完一个历史故事，你都能认识更多的历史人物，认知他们的性格和言行\n\n每聆听完一个历史故事，你都能了解更多的历史事件，走进历朝历代的风云变幻\n\n喜欢历史，喜欢历史故事的朋友，欢迎聆听，敬请订阅！！！", "category": "文化", "score": "", "shelf": 44, "cover": "assets/covers/8fb45ff08784.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7469756548235938840": { "id": "7469756548235938840", "title": "天幕放映：在二战前，放二战历史", "author": "一个土豆片子", "abstract": "1937，38年间，一道天幕出现在了世界各地，不断放映着二战的历史。\n原本不少对战争极其悲观龙国人，看着自己居然在战争中位列四强的席位，那是极其的震惊。\n而心态完全相反的是，战前信心十足的发国人不敢相信的看着本国被轻易击败的信息，而痛哭流涕。\n.........\n而在洪武年间，朱元璋面对咸阳在秦始皇死后第几年被攻破的问题，信心十足的选择了第四年，同时在心里嘲讽了几句秦始皇。\n但是下一个问题顿时让他愣住了，因为下一个问题是问，明首都金陵是明太祖朱元璋死后，第几年被攻破的？\n..........\n在1949末，麦柯阿瑟震惊的看着自己在朝鲜战争中被龙国击败的信息。\n...........\n在历史的各个时间段，二战，冷战，朝鲜战争，太空竞赛，中东战争，越南战争，甚至鹰酱斩杀线，爱破斯坦萝利岛等信息也在不断的放映着。", "category": "历史脑洞", "score": "", "shelf": 2735, "cover": "assets/covers/cfba9e95e4fd.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6857867061574503432": { "id": "6857867061574503432", "title": "历史解说  探寻历史足迹", "author": "未知", "abstract": "探寻历史足迹,揭秘历史真相,以史为鉴。", "category": "历史", "score": "", "shelf": 80, "cover": "assets/covers/a243e58db04d.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6846711185664904200": { "id": "6846711185664904200", "title": "历史非常档案--历史背后的历史", "author": "未知", "abstract": "揭秘历史背后的那些事儿", "category": "文化", "score": "", "shelf": 54, "cover": "assets/covers/c956526f10a0.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7517558477066076734": { "id": "7517558477066076734", "title": "黑历史黑历史黑历史", "author": "佳丽斯", "abstract": "黑历史黑历史黑历史", "category": "重生", "score": "", "shelf": 2, "cover": "assets/covers/04dbc67f7bfa.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7068188575220632613": { "id": "7068188575220632613", "title": "世界历史", "author": "三木", "abstract": "讲述了世界历史的进化，世界文明的发展及其对现代社会的影响。着眼于全球，侧重于那些有影响的、促进历史发展的历史事件，其中包括原始社会、欧弧大陆的古代文明、欧亚大陆的原始文明、欧亚以外的世界、地区分割后的世界、西方世界的崛起、西方人统治的世界、西方的衰落与成功等部分。", "category": "世界史", "score": "", "shelf": 3290, "cover": "assets/covers/5708ab25bf8c.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7618806110513810456": { "id": "7618806110513810456", "title": "扒拉历史的进程", "author": "米奇诺言", "abstract": "风趣幽默的角度来阐述事实！历史也可以是很平凡的事情，并不是那么遥不可及的梦，都是一群人一起干事情罢了，他们也是普通人慢慢成长起来的，只不过后面越来越多的能人加入到这个“团队”里面，越做越大，越来越好罢了，历史本质是都是一种记事的过程。", "category": "历史脑洞", "score": "", "shelf": 0, "cover": "assets/covers/bc9d0c990f67.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7621797188447767614": { "id": "7621797188447767614", "title": "幽默讲历史", "author": "杨小波讲历史2026", "abstract": "有趣有料有深度，用幽默风趣通俗易懂，轻松口语化的语言讲历史，笑谈古今，寓教于乐，让历史生动有趣，让历史不再枯燥无味", "category": "历史古代", "score": "", "shelf": 68, "cover": "assets/covers/94596f1f3811.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7047057091499920391": { "id": "7047057091499920391", "title": "冷历史", "author": "三不", "abstract": '《冷历史》中讲述了日常生活中我们经常会使用到，但又知之不详的一本书历史常识，它们隐藏在生活中，每每提及又被人追问时，不免出现答不出的尴尬。例如，"五脊六兽"究竟是什么东西，为何用它来形容身体难受；为什么说祖坟冒青烟，而不是紫烟，白烟；谁才是历史上的第一个冠军？当"尚方宝剑"遇到"免死金牌"究竟谁胜谁败？古代的情人节究竟是哪天；张飞是莽夫还是儒将……看过《冷历史》会使你充实自己的知识库，丰富知识量，也会颠覆你对历史常识的认识，其实历史并不遥远，它就在你身边。', "category": "历史", "score": "", "shelf": 104, "cover": "assets/covers/63d95670132f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6906757582006782990": { "id": "6906757582006782990", "title": "脑洞", "author": "安之", "abstract": "看点一：脑洞大开的各种超能力、超自然设定，以校园生活为主展开。\n看点二：男主设定类似“穿越”，他能否改变既定命运，创造完美结局。\n看点三：看似正常的校园之下还隐藏着“不正常”的组织，比如创造“完美人类赫卡忒”的神秘组织等等，这类内容会后续展开。\n总的来讲，本书看点主要是灵异悬疑（但没有鬼怪，不会有捉妖之类的剧情），类似于都市怪谈，比如“裂口女”一类。", "category": "都市脑洞", "score": "", "shelf": 251, "cover": "assets/covers/9410ef860aa1.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6831813137985965060": { "id": "6831813137985965060", "title": "脑洞打开", "author": "小骆叔叔", "abstract": "鹿仁甲本是一名三无青年，自“邂逅”了外来星星的脑神后，以为从此可以迎娶白富美，走上人生的巅峰。想不到一场海岛之行，他被脑神安排了一次暂时性的消失之旅。与此同时，一个来自“系统之家组织”的004系统驾临地球，他看不惯这里的舔狗圣母婊蠢货又要装逼又没本事，一天到晚的就想不劳而获，开展了一段“滚！系统亲自当主角”的新故事。", "category": "都市脑洞", "score": "", "shelf": 1037, "cover": "assets/covers/d2b7fff48c89.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7637354614462876697": { "id": "7637354614462876697", "title": "奇幻脑洞", "author": "天空之城里的月光", "abstract": "这是一本作者脑洞大开的书，每一章都是一个独立的天马行空的小故事，是胡思乱想，或者是做过的一个梦，希望大家喜欢", "category": "悬疑脑洞", "score": "", "shelf": 0, "cover": "assets/covers/fe15139e3c30.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7578920197793254424": { "id": "7578920197793254424", "title": "病娇纯爱短篇集", "author": "哈里星星", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "都市脑洞", "score": "", "shelf": 9, "cover": "assets/covers/f15e919890e0.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7600722850386807832": { "id": "7600722850386807832", "title": "我的精灵会练【野路子】", "author": "石不盐", "abstract": "无穿越，无系统，在精灵世界，人们都遵循着图鉴上的招式表训练伙伴，林野却是个例外。\n \n作为枯叶港一个普通渔户的孩子，他没有御三家，开局只有一只捡来的尾立；没有系统，最大的依仗是脑子里那些天马行空的念头——\n \n“尾立，你尾巴这么大，甩起来带点旋转试试？”于是有了能抽起小旋风的“旋风尾”。\n“波波，俯冲时把翅膀往后收，像拉缰绳一样，是不是能急停？”于是诞生了让对手措手不及的“空中刹车”。\n“大钳蟹，用钳子当船锚固定身体，海浪就冲不走你了……”\n \n他不收神兽，只捡那些被忽略的“平凡”精灵；不求称霸联盟，只想带着伙伴们开发出更多“非标准”招式，看看世界的每一个角落。\n \n从一只会旋转甩尾的尾立，到能空中急停的波波，再到用钳子“锚定”海浪的大钳蟹……林野带着他的“脑洞小队”，骑着代步的坐骑精灵，在充满未知的旅途中慢慢成长。没有毁天灭地的战力，只有伙伴间的默契与奇思妙想碰撞出的火花，以及那些藏在日常里的温暖与冒险。\n \n这是一个平民训练家，用奇怪的想法教会精灵“新技能”，并和它们一起看遍世界的故事。", "category": "动漫衍生", "score": "", "shelf": 0, "cover": "assets/covers/1d9bf74a6574.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7521444765125050905": { "id": "7521444765125050905", "title": "童话联动", "author": "沐旦渣", "abstract": "童话联动", "category": "脑洞", "score": "", "shelf": 0, "cover": "assets/covers/48bdf4c9f536.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7406375112091372606": { "id": "7406375112091372606", "title": "深夜脑洞", "author": "紫岚慧心", "abstract": "（历史脑洞 重生 成长 异世穿越 无cp）\n扶苏自刎后，没有死，以魂体形式开启了三世不一样的视角体验，理解我们始皇陛下的苦心，感悟父子之情。\n最后重回上郡第一年，我们一起看看扶苏怎么始皇陛下修复父子之情，使大秦帝国不再二世而亡。", "category": "古言脑洞", "score": "", "shelf": 20, "cover": "assets/covers/93177fe90498.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7386541445827529790": { "id": "7386541445827529790", "title": "脑洞大符师", "author": "北海离火", "abstract": "“在下离歌，只是一个小小符师，平时精修符道不善杀伐...”\n“我左手上的符咒名曰‘降龙符’...”离歌单掌推出，一条金龙咆哮而出...\n\n“我右手上的符咒名曰‘震震符’...”离歌右手握拳虚空一砸，一个肉眼可见的裂缝凭空出现...\n\n“我这法衣上的符咒名曰‘黄道圣衣符’...”一道金光闪过，离歌的一身道袍骤然变换...\n\n“至于我这飞舟上的符咒嘛......名曰‘赛博坦符’...”\n\n备注：纯娱乐无系统！", "category": "东方仙侠", "score": "", "shelf": 2, "cover": "assets/covers/297dbffabd85.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7496011840309169214": { "id": "7496011840309169214", "title": "奇门脑洞", "author": "李承殊", "abstract": "【系统进化 +都市玄学+ 脑洞科技 + 反差萌群像】\n\n警告！你生活的世界并非真实！古老玄学碰撞未来科技，【里世界】入侵倒计时！\n\n失业青年李明，意外继承神秘APP。本以为是山寨算命软件，谁知竟连接着宇宙洪荒、次元间隙的终极奥秘！\n【奇门遁甲】，推演命运，掌控空间！【赛博符箓】，科技绘制，威力无穷！【阵法模拟】，沙盘演练，决胜千里！\n面对觉醒的精怪、失控的科技、降临的邪物，李明被迫营业！\n左手是能用平底锅拍碎机甲的王牌保洁，右手是血脉返祖、傲睨万物的橘猫陛下，身后还跟着一群画风跑偏的“神仙”队友……\n吞噬【虚空道标】，解析【空间节点】，掌控【时光碎片】！李明以奇门为钥，科技为刃，从一个都市小透明，一步步走向执掌时空、对抗未知的【维度主宰】！\n“天道不仁？神魔乱舞？不好意思，都在我的局里！” 这是一部让你笑出腹肌，又细思极恐的都市奇幻狂想曲！", "category": "都市脑洞", "score": "", "shelf": 0, "cover": "assets/covers/203c97fbd13b.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7631833752074718232": { "id": "7631833752074718232", "title": "脑洞公司奇遇", "author": "冷月夜孤舟", "abstract": "脑洞公司奇遇", "category": "男生生活", "score": "", "shelf": 0, "cover": "assets/covers/edeed469049c.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7637698881769196606": { "id": "7637698881769196606", "title": "三国无双之陨邪篇", "author": "三国演义无双", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "历史脑洞", "score": "", "shelf": 0, "cover": "assets/covers/7e06d3be703f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7443766487245933593": { "id": "7443766487245933593", "title": "我对象有病", "author": "大风吹吹吹", "abstract": "喜欢非健康恋爱关系，喜欢阴湿鬼男主，喜欢随心所欲，男女主或多或少都有病。\n我们的宗旨是：正常的不看！\n一、两个神经病的恋爱，痴汉忠犬男x悲观病态女\n二、人外深海大章鱼x厌世女\n三、变态重生男x温柔小太阳女\n注：私设众多，雷点多多。", "category": "现言脑洞", "score": "", "shelf": 20, "cover": "assets/covers/48e96e34f1dd.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7631831106198719512": { "id": "7631831106198719512", "title": "脑洞特勤局", "author": "冷月夜孤舟", "abstract": "脑洞特勤局", "category": "男生生活", "score": "", "shelf": 0, "cover": "assets/covers/ebaaae839f38.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7475904838161665049": { "id": "7475904838161665049", "title": "雪梨的脑洞合集", "author": "积极的雪梨", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "双男主", "score": "", "shelf": 0, "cover": "assets/covers/96f336807c63.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7463739604961594393": { "id": "7463739604961594393", "title": "综影视假期脑洞", "author": "述磨", "abstract": "放假了瞎写写一些自己的脑洞，给大家看看，水平一般，请多谅解，主要就是一些可能的IF线吧，感觉会挺有意思的。从胤礽的故事开始。", "category": "宫斗宅斗", "score": "", "shelf": 51, "cover": "assets/covers/b1783576e452.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7377639069225864254": { "id": "7377639069225864254", "title": "脑洞苏文短篇合集", "author": "微微呀芸", "abstract": "女嬷文，全世界都爱女主。【病娇男主➕女主万人迷➕雄竞➕修罗场➕微强取豪夺➕玛丽苏】\n【女主都是笨蛋美人，不谙世事，撩人不自知，女主全世界最可爱，男的女的都爱她。】\n正在写的类型：不谙世事小鲛人被全大陆巡回宠爱（西幻，女主珍稀设定）、笨蛋小宫女的团宠修罗场（古代）\n待写目录：软妹穿到男多女少世界被争夺、娇气包穿到兽世被宠上天、自以为是万人嫌的贵族学院万人迷、血族学院的甜美小血包、abo世界里最后一只omega、修真世界里无法掌控自己命运的小炉鼎，待定……\n！集所有狗血俗套玛丽苏梗为一体，苏苏苏撩撩撩！！！男角色全病病的，占有欲超强。\n女主只负责可爱，被人觊觎、群狼环伺。\n再次强调：各种苏，无脑苏，全都爱女主，女主就是世界中心。\n各种人称视角都有，第一人称是轻松小甜文，第二人称和第三人称是阴湿黏糊病态风。\n主：钝感懵懂小白兔女主和循循善诱大灰狼男主（狼兔就是万年顶流！）", "category": "现言脑洞", "score": "", "shelf": 13, "cover": "assets/covers/48792a010b76.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7577669543309347865": { "id": "7577669543309347865", "title": "游戏融合，我的阵容是龙珠全明星", "author": "脑洞大王来巡山", "abstract": "（龙珠超开播啦）【游戏融合】+【龙珠】+【单女主】+【阵容养成】+【卡牌】\n要是穿越到没有《七龙珠》动漫的世界，该怎么办？\n【赛亚人血脉觉醒卡已到账！】\n【龙珠宇宙全人物图鉴已激活！】\n这里是网游融合现实的世界！\n成为觉醒者后，开始收集各式各样的角色卡牌，让它们成为和自己并肩作战的搭档！\n林夏收集好感度，不断地获得《龙珠》里的强力角色卡牌！\n“黑悟空，野兽悟饭，破坏神……全员恶人？”\n“这么多强力的卡牌，我该怎么搭配阵容呢？”\n“要不……来个全员恶人组合？”\n“嘿嘿嘿，我的初始战斗力可是53万！”\n当有一天，林夏遇到难对付的对手时。\n所有人都以为他完蛋了。\n但是林夏却邪魅一笑，说道：“融合！！”\n【贝吉特+悟吉特=？】\n【破坏神+弗利沙=？】\n【吉连+布罗利=？】\n【黑悟空+沙鲁=？】\n【……】\n没错！林夏可以将卡牌随意融合，不受任何限制！！\nPS：为了平衡战斗力，对角色进行了平衡，不会动不动就毁灭星球……建议勿入！！", "category": "都市高武", "score": "", "shelf": 15, "cover": "assets/covers/8d614342c5d4.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7486438019004632126": { "id": "7486438019004632126", "title": "她体内沉睡着一位武帝！", "author": "毛笔辛", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "玄幻脑洞", "score": "", "shelf": 1, "cover": "assets/covers/a569e62d0606.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7678749219691187262": { "id": "7678749219691187262", "title": "国公世子闯祸日记", "author": "用户43512185", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "历史脑洞", "score": "", "shelf": 0, "cover": "assets/covers/c429a8f6a875.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7310778089812790334": { "id": "7310778089812790334", "title": "脑洞杂技团", "author": "氟西汀汽水", "abstract": "标签一半一半(#－.－)\n各位观众朋友们大家好！凛冬将至，近日空空镇洞洞树林，突现一奇观！一颗似鸟非鸟的树和一个深不见底，不时传出胡言乱语的洞！具体情况如何让我们连线前方记者挽风、汀鱼\n——连线——\n“各位观众朋友大家好！我是挽风它是汀鱼，接下来由我们为大家转播。”一片白茫茫的树林里，站着两只握着话筒胖乎乎的松鼠。\n“你好！狐狸先生，请问你知道这棵树和这个洞是因为什么原因出现的吗？”前线记者拦住了一只狐狸和蛇，蛇圈在狐狸身上一言不发。狐狸一脸惊讶[・_・?]“不会吧？你们不知道那是什么树，据说还有一个美丽的爱情故事。那个洞就普通多了，是一个脑洞。”\n松鼠的话筒向前伸了伸♡(*´∀｀*)人“抱歉狐狸先生，可以说一下这个故事吗？”\n“好吧，看在你们那么好奇的份上我就告诉你们吧~传说...”\n谢谢各位观众朋友们，准时收看今日的世界之大无奇不有栏目！我们下期再见～", "category": "悬疑脑洞", "score": "", "shelf": 0, "cover": "assets/covers/b5e451946ce6.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7461458071504568894": { "id": "7461458071504568894", "title": "校园", "author": "虾峙岛的慕大人", "abstract": "校园", "category": "校园", "score": "", "shelf": 1, "cover": "assets/covers/e6c3590f0f4e.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7137282478628146189": { "id": "7137282478628146189", "title": "校园修仙", "author": "无言123", "abstract": "在老师的鄙视中，在同学的讥笑中，小痞子郭明的人生发生了奇异的变化，他开始走出了人生的第一步，一个人生中的重要转折点：他得到了九星大佬的修仙传承。", "category": "都市修真", "score": "", "shelf": 1795, "cover": "assets/covers/b94b2fb3ea1f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7323129016360127550": { "id": "7323129016360127550", "title": "校园贷", "author": "放飞的二哈", "abstract": "青春靓丽的少女，为了钱，不惜出卖自己的身体。\n　　很多人，也因此掉进深渊，最终成了不法分子捞钱的工具。\n　　上大学的时候，女同学借了我一千块，到了还钱的日子，她找到我，说自己没钱还，让我去大学城城中村的租房找她，想用另一种方式补偿我……可让我没想到的是，我差一点就进入一场死局。", "category": "推理", "score": "", "shelf": 18, "cover": "assets/covers/3204fe5c8966.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6959122740787891214": { "id": "6959122740787891214", "title": "爆笑校园", "author": "悠然", "abstract": "幽默笑话是深受中小学生喜爱的主题。本书根据学生的阅读兴趣，精心挑选了近千则贴近校园生活的幽默笑话故事，集知识性、趣味性于一体，内容健康积极、轻松风趣。书中配有生动活泼的插图，增强了本书的趣味性。", "category": "美食休闲", "score": "", "shelf": 1195, "cover": "assets/covers/1d30faafdc16.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7626926968960715800": { "id": "7626926968960715800", "title": "校园诡事之校园禁区", "author": "浮尘中人", "abstract": "搬进闹鬼宿舍后，我发现了学姐的日记。\n她说：“我们没有疯，是他们在对我们做实验。”\n温柔的心理老师给我下药，威严的副校长欲将我灭口。\n当我终于逃进地底废弃的实验室，十三张锈蚀的床铺整齐排列，最后一堂课的时间，永远停在2004年10月24日。\n而那个从黑水潭中缓缓升起的、布满磷光的巨大黑影，用它无数只“眼睛”看着我说：\n“你……来了。”\n《校园诡事之校园禁区》——揭开校园传说背后，最毛骨悚然的真相。", "category": "悬疑", "score": "", "shelf": 24, "cover": "assets/covers/db34eeaa971f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7440315689027519001": { "id": "7440315689027519001", "title": "校园默示录", "author": "一二木乔", "abstract": "校园默示录", "category": "科幻末世", "score": "", "shelf": 1, "cover": "assets/covers/436fe20a4c4f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7663486993224961048": { "id": "7663486993224961048", "title": "校园系明日方舟并不校园", "author": "开心世界", "abstract": "我感觉我被困在了上学与回家的那条马路里，然后在其中淋着一天天的小雨，只能默默数着青春的日子还剩多少，并在如沙子般流逝的假日里寻回我的阳光，而某一天，我的太阳出现了——【PP上尉】\n虽然祂也坏坏的，不过终于有人不会欺负我了...\n诶！祂说可以给我换号玩！\n纯白少年刀塔塔~元气可爱有人爱~\n“别打我，疼...好疼，我错了...别打了...疼....”\n“我喜欢你，我说我喜欢你！！”\n可爱企鹅管员员~我在学校称大王~\n“哦哈哟，佩学妹，今天有没有想学姐我？你说那个庄方宜？我跟她真不熟，我喜欢的是你和小陈呀！！”\n“我..我呢？你就不喜欢我了吗！！！！”\n高冷男神管理理~大学实验困难重重~\n“聂菲斯，阿达希尔也是一片好心。”\n“我求求你别再看你那破轻百合了，它展示美好女性友谊，然后你觉得你也要展现美好男性友谊？是吗？啊？！”\n病弱温柔博博士~深陷重女插翅难逃~\n“陪我。（暖暖的呼喊）”\n“这个，我要去....”\n“我说，陪我（吃人般的蓝绿圆瞳）”\n【轻喜剧~】【多女主~】【算是炎国系明日方舟】", "category": "动漫衍生", "score": "", "shelf": 0, "cover": "assets/covers/270958f8a610.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7352394626226998334": { "id": "7352394626226998334", "title": "校园鬼事录", "author": "懿美A", "abstract": "寂静的夜里时不时会刮风，吹的楼道里‘呜呜’做响，就好像是有人在哭啼一样。\n半夜里雯婷突然有些尿急，想要起身去厕所，可是胆小的她不敢自己出门，就叫醒了隔壁床的瑾萱。\n“萱萱，你去厕所吗？”\n瑾萱迷迷糊糊的睁开眼睛还没有搞清楚怎么回事，就听到雯婷再次开口。\n“我想上厕所了，但是不敢自己去，你可以陪我一起去吗？”雯婷小声的说着。\n“好吧！就陪你一起去吧！你都这么大了胆子还这么小。”说着两人就起身，披上了一件衣服，轻轻的开门出了宿舍，生怕打扰其他人休息。\n两人刚刚来到出了宿舍就迎面吹来一阵风，冻的两人浑身发抖。\n“这是什么鬼天气？才九月份就有种深秋的感觉。南方这边的天气不应该更暖和吗？怎么感觉比我们那里都冷。”雯婷一边说着一边扯了扯自己的衣服。\n“是啊，我也觉得这夜晚的冷有点不太正常，冻的我心里有些发毛。”瑾萱也小声的回应着。\n雯婷听到瑾萱这样说心里别提多害怕了，“你可别吓我了，我本来就尿急，一会儿被你吓尿裤子了。”\n“呵呵，逗你的，你可别当场尿了。”两人正在小声的说着话，雯婷突然停下了脚步。\n“嘘！别说话，你听厕所那边是不是有什么声音？”两人都停下了脚步，竖着耳朵仔细的听起来。可是除了听到‘", "category": "灵异", "score": "", "shelf": 605, "cover": "assets/covers/561d01a47511.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7387273463162997784": { "id": "7387273463162997784", "title": "禁闭校园", "author": "vs魔法先生", "abstract": "这恐怖一开始，就完完全全是一个的灾难。\n　　　2009年冬季，一个名为阴都的城市，被某种强烈而压抑的气氛笼罩着。\n　　　一连几天，有数所高校被黑色的怪雾所包围，在短短一个小时的时间中，校内的所有人全部都莫名其妙地失踪了，没有留下任何的东西，仿佛他们从来都没有存在于这个世界中一样。\n　　　当天，这件事情就传得沸沸扬扬，可是当相关报道铺天盖地传遍阴都时，三天后，再度有一所高校被怪雾所包围。同样，校内的一切人，都消失地完全没有了踪迹，仿佛被某种力量从这世界上永远抹消了一般。\n　　　一连几次的诡异事件，让所有人都开始陷入恐慌之中，并对黑色怪雾产生了强烈的恐惧。政府和警方几乎出动了一切人力，一方面安抚市民情绪，一方面对失踪现象进行调查。可是调查的收获微乎其微，因为现场不但没有留下任何的线索，也没有找到半个“生还者”。但为了安抚民心，政府依旧初步公布，说这可能是来自某个强国的高科技袭击事件。\n　　　时隔一年后，当初人们对怪雾事件依旧记忆犹新，但是恐惧已经没有当初那么强烈。可是人们却没有想到，真正的恐怖却在一年后的冬季再度袭来！", "category": "悬疑", "score": "", "shelf": 104, "cover": "assets/covers/a1992e1754b5.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7567210276139846681": { "id": "7567210276139846681", "title": "校园仙途", "author": "小熊不长大", "abstract": "平凡学渣林默意外觉醒祖传修仙玉佩，在江城大学开启了画风清奇的修仙之路。高数课上，他以逆天解题思路惊艳全场；校园角落，他悄无声息修炼《青云诀》，引动灵气复苏。\n \n昔日对他视而不见的校花们，纷纷被他的神秘蜕变吸引——温柔聪慧的学霸校花苏清瑶，为他的数学天赋折服，主动请教；热情奔放的舞蹈系女神夏雨薇，因他的“武术指导”技艺，对他好奇不已。当林默在数学竞赛上斩获头奖，在校园风波中展现超凡身手，越来越多的目光聚焦在他身上。\n \n一边是学霸校花的倾心探讨，一边是舞蹈女神的活力陪伴，林默在修仙与校园生活的双重节奏里，不仅要应对富二代情敌的挑衅，还要探索灵气复苏的真相。且看曾经的学渣如何逆袭，在众校花的环绕中，走出一条独属于他的校园修仙传奇路！", "category": "都市修真", "score": "", "shelf": 11, "cover": "assets/covers/3d0ae1e63b08.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6647034048004754440": { "id": "6647034048004754440", "title": "校园野郎中", "author": "离家十年", "abstract": "野郎中混迹校园，校花脸上的青春痘，美女老师夜伴鬼压身，困扰警花的“飞机场”问题，美女书记的难言之隐，御姐身上的孤味，萝莉的耳疾，江湖大佬的心病……试问天下顽症几何，岂看小小郎中手段如何！……美女，你病在肌肤，不治将恐深！周星的爷爷说：治病救人时来点古文显得专一些！", "category": "都市日常", "score": "", "shelf": 0, "cover": "assets/covers/add4c5be0749.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7643848805464411198": { "id": "7643848805464411198", "title": "终末校园", "author": "重度无聊患者", "abstract": "林深收到一封黑色录取通知书。下一秒，他被拖入一所不存在于地图上的学校。\n这里没有退学，没有假期，没有公平。\n学分决定阶级，实力决定生死。\n弱者被遗忘，强者被推上神坛。\n所有学生都被告知：活下去，变强，毕业就能自由。\n可林深很快发现，这所学校从不培养自由的人。\n它只筛选能被燃烧的强者。\n当毕业钟声响起，黑旗挂满校园，所有人都以为那是荣耀。\n只有林深看见——\n所谓毕业，不是离开。\n而是成为照亮虚无的下一根薪柴。", "category": "动漫衍生", "score": "", "shelf": 0, "cover": "assets/covers/ce8535b1b769.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7542967833626414142": { "id": "7542967833626414142", "title": "校园天才", "author": "心韩", "abstract": "校园天才", "category": "病娇", "score": "", "shelf": 0, "cover": "assets/covers/5267b9da828f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7574111325912042520": { "id": "7574111325912042520", "title": "校园反抗", "author": "繁星紫芜", "abstract": "校园反抗", "category": "校园", "score": "", "shelf": 0, "cover": "assets/covers/63c5dd5a494d.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7644885568668568638": { "id": "7644885568668568638", "title": "校园三剑客", "author": "杨鹏", "abstract": "银河奖、全球华语科幻星云奖得主，千万册长销儿童文学作家杨鹏写给孩子的科幻冒险故事。作者亲定选篇，优中选优，是科幻阅读入门之选。\n深海的秘语悄然唤醒冒险的序章。拥有超能力的杨歌、古文字专家白雪、电脑天才张小开意外接到神秘客的委托，踏上了探寻亚特兰蒂斯王国的征程。\n从海底火山的生死逃亡到亚特兰蒂斯的存亡危机，一连串离奇事件将校园三剑客推向风暴中心。传说中能毁灭地球的能量水晶究竟藏着怎样的秘密？沉睡的海底王国能否逃过战争的魔爪？这场横跨海陆的冒险，究竟会有什么样的结局？", "category": "", "score": "", "shelf": 4, "cover": "assets/covers/df5b424ad80b.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7534131751703022617": { "id": "7534131751703022617", "title": "校园谜影", "author": "雨落听风", "abstract": "校园谜影", "category": "推理", "score": "", "shelf": 0, "cover": "assets/covers/8bb600157bc9.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6913799078409145357": { "id": "6913799078409145357", "title": "校园仙帝", "author": "汤圆；贰小呼", "abstract": "【内容简介】\n如果活着不是为了装逼，那人生将毫无乐趣，大修真界渡劫天尊欧阳渡劫重回地球少年时代，既然重生，定要弥补遗憾，重回巅峰，不负时光不负卿。有些人注定要登高望远，经过他的手，能让武道宗师在上一层楼。经过他的手，能让天下无数英豪低头，力压苍穹。请不要叫我欧阳大师，我是叫欧阳，姓欧名阳。", "category": "都市修真", "score": "", "shelf": 219, "cover": "assets/covers/a6888ed93002.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7691972709298883608": { "id": "7691972709298883608", "title": "禁闭校园", "author": "君悦宜", "abstract": "禁闭校园", "category": "", "score": "", "shelf": 0, "cover": "assets/covers/90f42d3feb9f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7489747027232836633": { "id": "7489747027232836633", "title": "校园凶杀案", "author": "见淳", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "悬疑", "score": "", "shelf": 1312, "cover": "assets/covers/3134f0608b2e.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7234060402340924476": { "id": "7234060402340924476", "title": "禁闭校园", "author": "红中", "abstract": "一种超自然的神秘力量降临阴都，使得数个高校片刻之间成为空城，仿佛里面的人都被凭空抹消。当这个力量再度来临之时，人们如何发现它的真正面目，学生又如何逃过劫难获得生还？", "category": "灵异", "score": "", "shelf": 11, "cover": "assets/covers/471e928a611b.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7434568840350024254": { "id": "7434568840350024254", "title": "仙侠", "author": "我会努力的学习", "abstract": "仙侠", "category": "爽文", "score": "", "shelf": 9, "cover": "assets/covers/ef76b9c4b6a2.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7110885034923396126": { "id": "7110885034923396126", "title": "仙侠", "author": "圣创轩丶大葱，自由的极光，CallMe老吴，圣创轩丶云间月，香雪海129，海伦传说，陆泽钟鱼_零声，开心福子，一方木木，璐师兄，骁听风雨，宁洛山河，郭侠士，桃二木", "abstract": "少年李浩初为报家仇走上寻仙之路。独自行来，他遇到过善良的精怪也遇到过凶恶的鬼魅。但见识最多的还是阴暗的人心。一路上的风景，一路上的友情，一路上的怪诞不经。待到醒来一场黄粱梦，原来人生一世最难得的却是不忘本心......", "category": "东方仙侠", "score": "", "shelf": 22, "cover": "assets/covers/aa9037876abb.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6647034172126792717": { "id": "6647034172126792717", "title": "仙鸿", "author": "仙侠", "abstract": "踏天之路，以证道心！这是一个踏天的传说，这是一个仙鸿的传奇，这是一个第四星河与第五星河的故事……", "category": "传统玄幻", "score": "", "shelf": 2, "cover": "assets/covers/7411554823d4.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6488864921613241358": { "id": "6488864921613241358", "title": "九州仙侠传", "author": "流云18", "abstract": "一部纯东方式的古典仙侠作品，看卢恒出山，一路斩妖除魔，精彩的法术，强大的法宝，让修行的路上演绎精彩。", "category": "东方仙侠", "score": "", "shelf": 398, "cover": "assets/covers/db4b0451f18f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6918026200338140173": { "id": "6918026200338140173", "title": "穿越仙侠大陆", "author": "元宝的爸比", "abstract": "简介：21世纪普通人穿越仙侠大陆，从一个小山村开始，进入小门派成为普通弟子，以平凡的资质、进入修仙者的行列，成为一名仙帝的崛起之路！希望各位书友能喜欢本书。", "category": "东方仙侠", "score": "", "shelf": 63, "cover": "assets/covers/13c7c8d5648b.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6649920192954502152": { "id": "6649920192954502152", "title": "赤练仙侠传", "author": "执笔随心", "abstract": "一个为寻求武道极致刺客，因琐事偶然踏足修真界。在得知自己和普通人一样，是一个无灵根之时；心灰意冷的他，原想平淡度其生。但内心内心深处对武道巅峰的极度渴望，使他背弃诺言毅然以身练道，步上一条以天对抗极武修仙的不归之路。", "category": "东方仙侠", "score": "", "shelf": 29, "cover": "assets/covers/4a536a0a9598.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6955747506735025188": { "id": "6955747506735025188", "title": "梦幻仙侠", "author": "思玄", "abstract": "俗话说，混沌初分，鸿蒙始判。天地间分为四大部洲，众生善恶不一。东胜神洲居生奇兽灵仙，汲日月精华，敬天地礼法，心爽气平，白日飞升之辈比比皆是；北俱芦洲为蛮族所踞，多生凶禽猛兽，异常凶险，为世间谈之变色之地；西牛贺洲多隐仙庭道馆，习阴阳之术，养气潜灵，人人固寿远离世俗多有传奇；而南瞻部洲独为人世红尘之所，亦为人、魔、仙、鬼四族混居之地，世人沉迷酒色，多邪恶谄媚之辈，道德日渐沦丧，良知泯灭，人性的莲花已经慢慢凋零。", "category": "东方仙侠", "score": "", "shelf": 80, "cover": "assets/covers/38f94e35fd43.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6552293463348481038": { "id": "6552293463348481038", "title": "都市仙侠传", "author": "无极", "abstract": "少年林枫得上古七宝血芒珠和修真秘法，从此踏上无上仙道。他慑服仙器太天昊罗镜，带领两大上古仙兽争雄净世，结交仙界至尊，倾倒三界的绝代红颜，他绝不放过。行事邪异、我行我素，他就是旷绝天下、独一无二的——一代邪仙。", "category": "都市修真", "score": "", "shelf": 47, "cover": "assets/covers/c4834e50b71d.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6648907171733965837": { "id": "6648907171733965837", "title": "半月仙侠传", "author": "无日", "abstract": '"仙中之侠，为仙侠。这是一个仙侠的世界，张武意外卷入争斗之中，接踵而至的是艰难的修行，残忍的杀戮，奇人异事。当然也有真挚的情感和纯洁的友情。"', "category": "东方仙侠", "score": "", "shelf": 0, "cover": "assets/covers/383b23cff956.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6918009374191389704": { "id": "6918009374191389704", "title": "仙侠天歌", "author": "道冲子", "abstract": "世事沧桑心已定，胸中海岳梦亦飞。不问情仇，只问纯真；不求长生，只求梦真；不去想是否成功，只想去看刀光剑影之后谁主浮沉；不去想是与非，只想去听仙啸侠歌里的凄美！", "category": "奇幻仙侠", "score": "", "shelf": 15, "cover": "assets/covers/8ab308667410.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7103710965442546692": { "id": "7103710965442546692", "title": "仙侠丐踪", "author": "阿瑟拉雅", "abstract": "这是一名高修为的小少年，嬉游各地遭遇到的奇葩故事。\n因不屑与他人争斗，才会心存善念，与之周旋发生的趣闻。\n故事的起因：曾经勇斗魔王的少年，被沾染了魔王释放的魔气。\n为了不让魔气入侵魂海，只能借助雷电压制魔气。\n因此来到了另一个陌生的区域，开启了新的人生轨迹··· ···！", "category": "东方仙侠", "score": "", "shelf": 45, "cover": "assets/covers/560b5e1e6fc8.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7612132277601979417": { "id": "7612132277601979417", "title": "仙侠权谋", "author": "阿兴GG", "abstract": "沈不厌穿越大乾仙朝，成了天生异瞳却身陷囹圄的质子。开局便要被当成祭品，献祭给所谓的天道以换取国运？\n关键时刻，沈不厌觉醒“天机曝光系统”，只要曝光他人秘密并产生情绪值，就能兑换修为与神兵。", "category": "东方仙侠", "score": "", "shelf": 0, "cover": "assets/covers/ac44c6290378.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7328793198317292606": { "id": "7328793198317292606", "title": "仙侠之恋", "author": "逐梦小江", "abstract": "《仙侠之恋》是一部充满情感波折与修仙奇遇的小说，讲述了灵溪与云飞两位修仙者的爱情故事。灵溪，一个普通女子，偶然间踏入了修仙的世界，遇见了身世神秘、实力强大的云飞。在追求仙道的漫长旅程中，两人相互扶持，共同成长，面对着来自仙界内外的种种挑战和危机。他们在经历了一系列试炼和冒险后，情感逐步升华，最终结成联盟，与志同道合的仙师们一起，保护仙界的和平与秩序。《仙侠之恋》不仅展现了精彩绝伦的修仙世界，更深刻描绘了主人公间坚定不移的爱情和牺牲精神，展示了在追求更高境界的道路上，真挚的情感是最宝贵的财富。", "category": "玄幻言情", "score": "", "shelf": 10, "cover": "assets/covers/e531ba2cfd8e.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7508020179339578393": { "id": "7508020179339578393", "title": "仙侠核平", "author": "远方侯爵", "abstract": '天道崩塌的第三千年，兰青看着系统面板陷入沉思：\n隔壁赤霄宗骑着火龙来收保护费\n丹房师妹把避雷丹炼成了引雷弹\n唯一完好的建筑是茅厕上挂着的"天下第一宗"牌匾\n穿越成末流剑派掌门的他，本想靠着【宗门振兴系统】苟发育，却被迫解锁了奇怪画风——\n修补护山大阵挖出上古剑仙遗骸，给弟子发丹药触发群体顿悟，就连山门养的土狗都能用爪子划出剑意。\n当灭世天火焚尽八荒，各派老祖跪求一线生机时。\n兰青站在重铸的九霄剑阵中央，身后十二道剑光冲开血色苍穹："今日开宗授课，教诸位什么叫核善修仙。"', "category": "玄幻脑洞", "score": "", "shelf": 104, "cover": "assets/covers/19801efd6269.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7417107682345110553": { "id": "7417107682345110553", "title": "仙侠云飞扬", "author": "鹰王神赐", "abstract": "在一个风起云涌的武侠世界里，有一位名叫云飞扬的少年。他出生在一个普通的农户家庭，自幼便对武侠故事充满了向往。每当村里的老人们讲述那些江湖侠客的传奇经历时，云飞扬总是听得如痴如醉，心中暗暗立下了成为一名伟大侠客的志向。", "category": "东方仙侠", "score": "", "shelf": 13, "cover": "assets/covers/c6279ca2a5cd.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7008327920624077858": { "id": "7008327920624077858", "title": "仙侠生猛", "author": "肌肤胜雪", "abstract": "误闯陌生女人闺房，父亲逼婚，杨文定含着怨气逃离杨府，当他踏入修真世界的那一刻起，整个世界都为之颤抖和改变。翻手为云、覆手为雨，遇到敌人杀杀杀，让整个三界不得安宁。", "category": "玄幻脑洞", "score": "", "shelf": 36, "cover": "assets/covers/8ef094b46bfd.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7564350743235283992": { "id": "7564350743235283992", "title": "一扇木门两个世界", "author": "鱼咸了", "abstract": "一扇木门两个世界", "category": "男生生活", "score": "", "shelf": 1, "cover": "assets/covers/a610ba7aa309.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7334646891394649112": { "id": "7334646891394649112", "title": "仙侠魔帝", "author": "江湖不留名", "abstract": "一念仙，一念魔，仙侠魔帝。\n\n在一个正道沦陷、魔道入侵的世界，\n清衣门女弟子苏灵鸢遭遇了灭门之灾。\n然而，命运的机缘巧合使她解开了魔帝子龑的封印，释放出了一个被封禁已久的强大力量。\n苏灵鸢与魔帝子龑共同踏上了拯救修真世界的旅程。", "category": "东方仙侠", "score": "", "shelf": 78, "cover": "assets/covers/e91ee8002b36.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7404455784861404222": { "id": "7404455784861404222", "title": "仙侠风云之仙侠缘", "author": "喜欢竹斑蛾的顾暖暖正", "abstract": "天仙门苏然受父亲苏天烈之命下山历练，途中与桃夭玄风老人，林风，相识。江湖上传闻桃花玉是神奇的法宝，四人一起寻找桃花玉过程，经历桃花玉的历程无意中闯入仙界，得知仙界欹案都与千年媚娘有着千丝万缕的联系。", "category": "奇幻仙侠", "score": "", "shelf": 0, "cover": "assets/covers/d8304d474789.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7187463354355551247": { "id": "7187463354355551247", "title": "仙侠缘", "author": "仙侠菌", "abstract": "为好朋友白发而写的一本小说，不喜欢可以不看，不要恶语相向……不为钱，不要阅读量只是为了一个朋友间的约定，同是江湖漂泊客，哪来知音三两许。", "category": "东方仙侠", "score": "", "shelf": 6, "cover": "assets/covers/b44197878f73.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7012547817562442765": { "id": "7012547817562442765", "title": "美女总裁的神医佳婿", "author": "游戏", "abstract": "三年前，一场大火毁尽林叶所有，无奈成为倒插门，所有人都能将他踩在脚下。三年后，我失去的一切都将全部夺回来。你只要给我一丝真心，我便能还你整个世界。", "category": "战神赘婿", "score": "", "shelf": 1028, "cover": "assets/covers/9597a8698727.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7306200500876100158": { "id": "7306200500876100158", "title": "游戏", "author": "夜空中的小鱼儿", "abstract": "游戏", "category": "脑洞", "score": "", "shelf": 11, "cover": "assets/covers/03af30fe9f17.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7292077492465205811": { "id": "7292077492465205811", "title": "游戏", "author": "陌陌崽", "abstract": "游戏", "category": "悬疑灵异", "score": "", "shelf": 23, "cover": "assets/covers/f44d3b4e836d.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7411085761069466137": { "id": "7411085761069466137", "title": "游戏", "author": "皮蛋瘦周", "abstract": "游戏", "category": "悬疑灵异", "score": "", "shelf": 2, "cover": "assets/covers/bef19ce6d4c3.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7293443636245561918": { "id": "7293443636245561918", "title": "游戏", "author": "雪橇犬的初衷", "abstract": "游戏", "category": "男生生活", "score": "", "shelf": 1, "cover": "assets/covers/331778cb9638.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7437851846984614425": { "id": "7437851846984614425", "title": "驯服游戏", "author": "野莓番茄", "abstract": "驯服游戏", "category": "古代言情", "score": "", "shelf": 0, "cover": "assets/covers/7304ca58169b.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6900095715687533581": { "id": "6900095715687533581", "title": "魔鬼游戏", "author": "一和", "abstract": "检测出绝症时日无多的楚凡，偶然在老旧手机中发现一个血色app，魔鬼游戏。。。。\n人性、名利、美色、灵异。。。。都在这里经受魔鬼的考验，准备好了嘛？欢迎进入魔鬼游戏。", "category": "悬疑灵异", "score": "", "shelf": 63, "cover": "assets/covers/d2f58e9c72c0.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7266575461478566970": { "id": "7266575461478566970", "title": "维度游戏：单机游戏玩家", "author": "魂摆渡命凋零", "abstract": "游戏人生+单机游戏+副本玩家+苟+懒散+超凡世界+异类入侵\n一次特殊的游戏让莫逆空有了全新的人生。而一次诡异的错误，让他和所有的玩家脱节，变成了副本中唯一的单机玩家。\n“单机就单机，大不了多肝一会就行了。”抱着这样的心态，莫逆空开始了肝帝的生涯。\n荒野大镖客2的死眼\n巫师三的双剑与术法\n孤岛危机的特殊战甲\nvampyr的独特血能力\n手撕恶魔的那个男人\n帝皇神选的蓝罐头……\n当异界入侵，末日到来，莫逆空才发现，维度游戏之中，到底蕴藏着多少的诡异和神秘。\n解释一下，副本分为两种，维度游戏副本（有些副本的背景相当的不确定，你们可以猜，猜到了我加更，只要擦点边我就加一更，完整猜出来4更奉上，当然，那必须得是我揭秘之前。）\n单机游戏副本（顾名思义，是单机游戏）\n第一个副本的开局是维度游戏副本，主角什么都不知道，是架空世界，并且之后每次时间到了之后他又必须要参与这些一点都不了解的副本。\n主角自我控制进入时间和无法死亡的副本，是单机游戏副本，他具有相当的先知和情报。（没玩过游戏我还不能当云玩家吗？）同时，也是主角变强的主要途径。", "category": "游戏体育", "score": "", "shelf": 61, "cover": "assets/covers/ed5374704eaa.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7443051335513017369": { "id": "7443051335513017369", "title": "致命游戏之游戏继续", "author": "林木兮兮", "abstract": "致命游戏同人续写\n\n凌久时睁开眼发现朋友们都回来了，阮澜烛却消失在现实世界。\n门里的世界好无聊，凌凌，相信我，我一定会找到出去路，等我。\n澜烛，所有人都说你从未出现过，我不信，即使全世界都忘记你，我也要找到你。\n二人的再次重逢又将经历什么呢，惊险刺激的门内闯关？还是轻松休闲的日常生活？\n致命游戏之游戏继续，看起来惊险刺激是跑不了，毕竟门没有消失，那么大家一起来看看他们是如何继续游戏的", "category": "双男主", "score": "", "shelf": 9, "cover": "assets/covers/be731118d115.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6569998135601400845": { "id": "6569998135601400845", "title": "生还游戏", "author": "秘辛者", "abstract": "我第一次坐飞机，不知道怎么回事，起飞后我就莫名其妙睡着了，等我再醒过来的时候，原本坐满的飞机只剩下十五个人，机长和空乘都不知道哪去了，窗外是一片无尽的黑暗，耳边是飞机引擎刺耳的轰鸣。\n“欢迎登上嚎哭航班，飞机上有十五个人，只有少数人能活着下飞机！\n所以，请各位嚎哭着！颤抖着！努力活下去吧！”", "category": "游戏体育", "score": "", "shelf": 148, "cover": "assets/covers/4c02694b5249.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7611797202452630552": { "id": "7611797202452630552", "title": "深渊游戏", "author": "水千丞", "abstract": "《深渊游戏》核心围绕少年乔惊霆在致命真身体验游戏中的逆袭求生、团队组建与真相探索展开。\n17 岁黑拳手乔惊霆与弟弟冲突坠海后，意外进入残酷的真人求生游戏「深渊游戏」。玩家仅有一次生命，需靠吞噬同等级玩家升级、赚取积分，唯有升至最高级 才能返回现实。他坚守正义，集结舒艾、白迩、邹一刀等伙伴组成小队，闯过 “海妖王号”“机械城” 等致命副本，一路对抗强敌、崭露头角。随着冒险深入，他们逐渐揭开游戏背后人工智能 “蚕” 的阴谋，在绝境中并肩作战，誓要冲破深渊、回归现实。", "category": "科幻末世", "score": "", "shelf": 392, "cover": "assets/covers/15b621377718.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7055108149216283678": { "id": "7055108149216283678", "title": "深渊游戏", "author": "筱筱涩", "abstract": "罪恶与法律之间的战争，人性的·道德一旦沾染上了犯罪，无疑是把人推向深渊。", "category": "推理", "score": "", "shelf": 41, "cover": "assets/covers/531e654924a9.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7646289312148884505": { "id": "7646289312148884505", "title": "游戏降临：诸神游戏", "author": "癫疯说书人", "abstract": "当“游戏”二字变成生存的唯一法则，当昔日的同窗成为彼此的“经验值”，陆沉唯一能做的，就是在这场被神祇俯视的修罗场中，用理智和记忆，去寻找那唯一可能的生路。但首先，他必须活过第一天。", "category": "悬疑", "score": "", "shelf": 0, "cover": "assets/covers/97932bf2d01e.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7215191716020620325": { "id": "7215191716020620325", "title": "禁忌游戏", "author": "水夙，椅子上的猫，千璟", "abstract": "班级聊天群里突然出现了一个土豪，只要完成他交代的任务就能获得大额红包，同学们都踊跃参与，想不到的是，一场富豪们的死亡游戏即将上演.....", "category": "灵异", "score": "", "shelf": 11, "cover": "assets/covers/71528f774c5a.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7657225625911970840": { "id": "7657225625911970840", "title": "游戏主播之穿越游戏降临", "author": "爱吃全谷物早餐的凌安", "abstract": '《降临》开服当日，一万名内测玩家被投入一万个互不相交的平行时空，在灰雾弥漫的怪物丛林中独自求生二十四小时。游戏主播林澈凭借多年积累的游戏本能，选择刺客职业，以近乎冷酷的效率反复猎杀落单怪物，积累着看不见的"贡献值"。他不知道，其他时空里有人在恐惧中发抖，有人在莽撞中拼命，有人冷静地射出一支又一支箭——他们互不知道彼此的存在，更不知道这场内测只是一次残酷的筛选，一个月后，游戏降正式降临蓝星', "category": "游戏体育", "score": "", "shelf": 1, "cover": "assets/covers/368ad221c332.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6996215082388573214": { "id": "6996215082388573214", "title": "穿书游戏", "author": "蜗牛一只", "abstract": "经历离奇事件后，心态崩溃的顾芷直播跳楼，却陷入穿书游戏，来回穿梭于现实小说之间。\n第一次穿书，原主正强推男主不成，反咬一口；\n第二次穿书，原主下药，打算霸王硬上弓男主；\n第三次……\n为了活下去，顾芷为人挡刀挡枪，但在男主凌均眼中，顾芷精分了，上一秒为他挡刀挡枪抱大腿，下一秒恨不得扒他衣服。\n还能不能愉快的玩耍了！", "category": "玄幻言情", "score": "", "shelf": 34, "cover": "assets/covers/797072db4990.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7391791330734656536": { "id": "7391791330734656536", "title": "死亡游戏", "author": "诡烟，道沨，香岚儿", "abstract": "滴滴司机王龙，某天夜晚误打误撞发现了好友的死亡现场，自那以后频频受到生命威胁，被神秘杀手一路追杀，后通过和警方联手，卧底到神秘组织中，从而一步步揭开隐藏在暗网下的“惊天”秘密，与此同时，王龙自己的身世也愈加扑朔迷离……", "category": "悬疑", "score": "", "shelf": 55, "cover": "assets/covers/8e031e62541e.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7382867463261670425": { "id": "7382867463261670425", "title": "生存游戏", "author": "吃瓜的雪诺", "abstract": "穿越到自己的小说里，成为男主角，换做任何一个人都会欣喜若狂，吴小白却怎么都高兴不起来。\n“早知道不写黑暗文了，太坑爹了……”", "category": "穿越", "score": "", "shelf": 36, "cover": "assets/covers/e1655659492d.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6678973388607720459": { "id": "6678973388607720459", "title": "内部游戏", "author": "梅花三弄", "abstract": "丁长林点背不是因为能力不足，而是被冷艳美女当成了杀人嫌疑犯，纠缠不休……", "category": "都市日常", "score": "", "shelf": 802, "cover": "assets/covers/6c0879eccff3.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6605420771957279757": { "id": "6605420771957279757", "title": "死亡游戏", "author": "万古永夜", "abstract": "自此班级里意外死人后，可怕的游戏就开始了，同学们一个接着一个死去。\n可能到最后，没人能活下来。", "category": "灵异", "score": "", "shelf": 215, "cover": "assets/covers/3fcb8c6e827c.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7503660579995798553": { "id": "7503660579995798553", "title": "职场", "author": "llin33365", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！故事情节虚构，请勿入座！！", "category": "现代言情", "score": "", "shelf": 34, "cover": "assets/covers/9f4bd9eaa5cb.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7505672673129663550": { "id": "7505672673129663550", "title": "职场爱恋", "author": "用户67676548", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "", "score": "", "shelf": 1, "cover": "assets/covers/73a69392b48c.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7502427443546836030": { "id": "7502427443546836030", "title": "人生的色彩", "author": "用户67676548", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "青春甜宠", "score": "", "shelf": 0, "cover": "assets/covers/83241e8b3271.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6678973389727599628": { "id": "6678973389727599628", "title": "职场底线", "author": "小树", "abstract": "美女记者江夏至这一年的倒霉遭遇，不是从丈夫的车祸开始的，而是从总编的那只咸猪手开始的……", "category": "现代言情", "score": "", "shelf": 130, "cover": "assets/covers/b4d0b7656fc1.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7391911601604938776": { "id": "7391911601604938776", "title": "职场之狼", "author": "八岁写书（主播：楠柯，星星）", "abstract": "【职场争霸 · 狼性人生】\n他二十三岁，在漂亮国华尔街打拼了几年，混成了一个泡妞高手，只要他看上的女人就没有失手过，在搞定了全美最大的跨国投资公司的总经理夫人后，他顺利回国，开始了一段新的征服之路...", "category": "都市日常", "score": "", "shelf": 24722, "cover": "assets/covers/dd123adfa1a7.jpg", "serialCount": 692, "wordNumber": "0", "toc": [{ "i": "7598384589404376126", "t": "0001集", "w": 0, "v": "" }, { "i": "7598384599529425982", "t": "0002集", "w": 0, "v": "" }, { "i": "7598384614154964030", "t": "0003集", "w": 0, "v": "" }, { "i": "7598384627190877246", "t": "0004集", "w": 0, "v": "" }, { "i": "7598384641048841278", "t": "0005集", "w": 0, "v": "" }, { "i": "7598384655938620478", "t": "0006集", "w": 0, "v": "" }, { "i": "7598384666789284926", "t": "0007集", "w": 0, "v": "" }, { "i": "7598384678436883518", "t": "0008集", "w": 0, "v": "" }, { "i": "7598384688180251710", "t": "0009集", "w": 0, "v": "" }, { "i": "7598384702461840446", "t": "0010集", "w": 0, "v": "" }, { "i": "7598386660769795134", "t": "0011集", "w": 0, "v": "" }, { "i": "7598386672555805758", "t": "0012集", "w": 0, "v": "" }, { "i": "7598386686183083070", "t": "0013集", "w": 0, "v": "" }, { "i": "7598386697964899390", "t": "0014集", "w": 0, "v": "" }, { "i": "7598386707435637822", "t": "0015集", "w": 0, "v": "" }, { "i": "7598386721876610110", "t": "0016集", "w": 0, "v": "" }, { "i": "7598386735726201918", "t": "0017集", "w": 0, "v": "" }, { "i": "7598386749449980990", "t": "0018集", "w": 0, "v": "" }, { "i": "7598444441417829438", "t": "0019集", "w": 0, "v": "" }, { "i": "7598386768877980734", "t": "0020集", "w": 0, "v": "" }, { "i": "7598769082145459262", "t": "0021集", "w": 0, "v": "" }, { "i": "7598769095210699838", "t": "0022集", "w": 0, "v": "" }, { "i": "7598769107420318782", "t": "0023集", "w": 0, "v": "" }, { "i": "7598769121437699134", "t": "0024集", "w": 0, "v": "" }, { "i": "7598769131940219966", "t": "0025集", "w": 0, "v": "" }, { "i": "7598769146356059198", "t": "0026集", "w": 0, "v": "" }, { "i": "7598769160566361150", "t": "0027集", "w": 0, "v": "" }, { "i": "7598769169831578686", "t": "0028集", "w": 0, "v": "" }, { "i": "7598769184767478846", "t": "0029集", "w": 0, "v": "" }, { "i": "7598769198323469374", "t": "0030集", "w": 0, "v": "" }, { "i": "7598769211745242174", "t": "0031集", "w": 0, "v": "" }, { "i": "7598769221585079358", "t": "0032集", "w": 0, "v": "" }, { "i": "7598769235292064830", "t": "0033集", "w": 0, "v": "" }, { "i": "7598769248080497726", "t": "0034集", "w": 0, "v": "" }, { "i": "7598769262366297150", "t": "0035集", "w": 0, "v": "" }, { "i": "7598769274982763582", "t": "0036集", "w": 0, "v": "" }, { "i": "7598769286533876798", "t": "0037集", "w": 0, "v": "" }, { "i": "7598769299192302654", "t": "0038集", "w": 0, "v": "" }, { "i": "7598769310416243774", "t": "0039集", "w": 0, "v": "" }, { "i": "7598769326803389502", "t": "0040集", "w": 0, "v": "" }, { "i": "7598769350782241854", "t": "0041集", "w": 0, "v": "" }, { "i": "7598769361465134142", "t": "0042集", "w": 0, "v": "" }, { "i": "7598769378162658366", "t": "0043集", "w": 0, "v": "" }, { "i": "7598769393438297150", "t": "0044集", "w": 0, "v": "" }, { "i": "7598769404754529342", "t": "0045集", "w": 0, "v": "" }, { "i": "7598769415991086142", "t": "0046集", "w": 0, "v": "" }, { "i": "7598769427101797438", "t": "0047集", "w": 0, "v": "" }, { "i": "7598769441681198142", "t": "0048集", "w": 0, "v": "" }, { "i": "7598769461406993470", "t": "0049集", "w": 0, "v": "" }, { "i": "7598769474417724478", "t": "0050集", "w": 0, "v": "" }, { "i": "7599133964669832217", "t": "0051集", "w": 0, "v": "" }, { "i": "7599133977185618969", "t": "0052集", "w": 0, "v": "" }, { "i": "7599133988468296729", "t": "0053集", "w": 0, "v": "" }, { "i": "7599133998727564313", "t": "0054集", "w": 0, "v": "" }, { "i": "7599134009267850265", "t": "0055集", "w": 0, "v": "" }, { "i": "7599134025403354137", "t": "0056集", "w": 0, "v": "" }, { "i": "7599134041446550553", "t": "0057集", "w": 0, "v": "" }, { "i": "7599134052708256793", "t": "0058集", "w": 0, "v": "" }, { "i": "7599134067044387865", "t": "0059集", "w": 0, "v": "" }, { "i": "7599134080524880921", "t": "0060集", "w": 0, "v": "" }], "creationStatus": "0", "tocTotal": 692 }, "7633270202393709592": { "id": "7633270202393709592", "title": "职场救赎", "author": "浮云人生29", "abstract": "职场救赎", "category": "职场", "score": "", "shelf": 1, "cover": "assets/covers/5fe545ea474d.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7566456187273612312": { "id": "7566456187273612312", "title": "职场空间", "author": "澹泊高塬", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "都市日常", "score": "", "shelf": 5, "cover": "assets/covers/58732ba8f5ff.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7209558516984450048": { "id": "7209558516984450048", "title": "职场桃花运", "author": "辛情水龙头", "abstract": "他本来是一个普普通通的小职员，一次走运，得以升职，担任公司部门经理，工作出色，随之而来的还有甜蜜又美好的桃花运。", "category": "都市日常", "score": "", "shelf": 173, "cover": "assets/covers/d516feaed09c.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6955760262192303135": { "id": "6955760262192303135", "title": "职场厚黑学", "author": "忠实", "abstract": "所谓“职场中人”，可谓是在夹缝中生存的人。他们对上要听命于上司，受其指使；对下得管理好下属，让他们乐于效劳；对同事还得提防明枪暗箭，挤压倾轧。做人难，何况是在职场。\n要处理好各种纷繁复杂的关系，更得多长几个心眼儿才能从容处世。否则，忙得焦头烂额还吃力不讨好，多方得罪而无立身之地。\n身在职场，活学活用“厚黑学”也是一门必修课。只要你有一套过硬的厚黑本领，自可左右逢源，前途一片光明。\n身在职场的人们未必都能厚黑得起来，有些人终其一生屡受挫折，碌碌无为；有些人则事无不成，业绩辉煌。生活给每个人的机会其实大致相当，关键在于你是否能在舞台上将自己扮演的角色发挥得淋漓尽致。", "category": "个人成长", "score": "", "shelf": 1349, "cover": "assets/covers/62f93b4e2bf5.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6483348446051830797": { "id": "6483348446051830797", "title": "职场圆舞曲", "author": "浓情咖啡", "abstract": "大学毕业的他们进入了同一家公司，随着竞争的日益激烈，他们的关系也变得愈加微妙。昔日的同学成了对手，曾经的恋人成了陌路……当金钱成了诱惑，摆在一个个职场新人面前时，谁会出卖道德的底线。职场如战场，谁才能算是最后的胜利者？", "category": "现代言情", "score": "", "shelf": 89, "cover": "assets/covers/d9418276591e.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7680827057525345304": { "id": "7680827057525345304", "title": "牛仔裤的故事", "author": "散人江湖", "abstract": "牛仔裤的故事", "category": "女生生活", "score": "", "shelf": 0, "cover": "assets/covers/3d8175c1071a.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7554144249722195006": { "id": "7554144249722195006", "title": "你是我的初心不改", "author": "搬运达人小能手", "abstract": "这是一部裹着时光暖意的单元小说，每个篇章都藏着男主对女主，跨越年月却从未褪色的暗恋。\n \n是高中教室后窗，他总在她低头做题时，悄悄把挡光的窗帘往她那边拉半寸；是大学图书馆，她随口提过的参考书，第二天就会出现在她常坐的位置上，书脊贴着便利贴写着“重点在第三章”；是刚入职场的寒冬，她抱怨办公室空调不暖，隔天抽屉里就多了个拆好包装的暖手宝，没有署名，却带着她熟悉的柑橘香。每个单元都是一段“藏在细节里的偏爱”，他从不让她知道，却把“想对她好”这件事，做了一年又一年。\n \n原来最好的爱情从不是突如其来的惊艳，而是有人守着初心，把暗恋熬成了细水长流的圆满。她曾以为那些“刚好”的巧合、“恰巧”的帮忙，都是命运的善意，直到某个雨夜，她看见他撑着伞在公司楼下等她，裤脚全被雨水打湿，却把伞稳稳罩在她头顶时，才忽然读懂——那些年里没说出口的“我喜欢你”，早被他藏在了每一个“怕你不方便”的瞬间里。\n \n翻开这本书，你会在某个篇章里，看见自己青春里曾错过的、或是渴望过的温柔，也会跟着女主一起，慢慢拆穿那份藏了很久、却从未降温的初心。", "category": "豪门总裁", "score": "", "shelf": 2, "cover": "assets/covers/5189e9004ae9.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7621138848239602712": { "id": "7621138848239602712", "title": "今日：职场", "author": "WW小孩", "abstract": "今日：职场", "category": "女生生活", "score": "", "shelf": 2, "cover": "assets/covers/c98c9f4b277e.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6647033070350240775": { "id": "6647033070350240775", "title": "职场规则", "author": "秋明", "abstract": "当自己的爱人沦为他人的情妇，当自己的命运被人玩于掌中，当自己的业绩成为他人挥霍的资本，当自己的朋友忘恩负义，职场的弱小白领将持何以对？", "category": "都市日常", "score": "", "shelf": 0, "cover": "assets/covers/a7ef9bb363a1.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7650490300632157208": { "id": "7650490300632157208", "title": "职场监察行动组", "author": "黑霖", "abstract": "职场监察行动组", "category": "特种兵", "score": "", "shelf": 0, "cover": "assets/covers/bdb3efff364f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7612489670588369944": { "id": "7612489670588369944", "title": "逆流奋进", "author": "蓉峰山人", "abstract": "打工人的故事：从初为农人、求学被骗、流落街头、考兵被刷、南下谋生、自考之路、苦涩初恋、打工生涯、情场失意、打道回府、职场危机、四十为父、冷眼江湖、艰难行孝、活在当下十五个章节叙述新时代打工人的职场故事……", "category": "都市日常", "score": "", "shelf": 1, "cover": "assets/covers/ced98b2d4b2c.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7578451362598374425": { "id": "7578451362598374425", "title": "职场博弈", "author": "筒骨粉", "abstract": "她携着秘密而来他是她棋盘上最难预测的王。\n苏晚卿，业界顶尖的“企业清道夫”，以雷霆手段和缜密心思著称。一纸神秘委托，她空降至国内顶尖科技巨头——星尘集团，伪装成新任部门总监，旨在彻查一起足以颠覆整个集团的内部泄密事件。\n她的目标，直指集团权力之巅那个深不可测的男人——傅北辰。\n他冷峻果决是商界翻手为云覆手为雨的传奇。面对这位突然出现、能力卓绝却来历不明的女人，他不动声色，布下层层试探。\n一场精心策划的商业调查，将两个本无交集的世界彻底颠覆。从会议室的唇枪舌剑，到深夜数据中心的并肩作战；从步步为营的智力交锋，到生死一线的意外救援。信任与怀疑交织，戒备与吸引共存。\n当阴谋的蛛网逐渐收紧，冰冷的证据竟指向最不可能的人，苏晚卿才发现，这场游戏的背后，还隐藏着更深的漩涡。而她与傅北辰，早已从棋盘上的对手，变成了命运共同体。\n在谎言与真相的罅隙里，他们能否于尘埃处，窥见彼此心中最亮的那颗星辰？", "category": "职场婚恋", "score": "", "shelf": 0, "cover": "assets/covers/c3a002c05b27.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7598773744340847640": { "id": "7598773744340847640", "title": "盆栽职场", "author": "未济行远", "abstract": "起初，林哲觉得职场像一盆绿萝。\n给点水就能活，放在哪都行，最大的价值是“看起来还行”。直到他发现自己正变成其中一片叶子——存在，但无关紧要。\n这不是一个劈关斩将的升职记。这是一个普通人，用六年时间，学习如何把一盆绿萝，培育成独一无二的盆景。\n第一年，学习生存。 在理想与规则的夹缝里，他遭遇所有新人都会撞上的墙：琐碎任务、模糊指令、成果被忽视。唯一能掌控的，是下班后给那盆绿萝浇多少水。\n第三年，学习设计。 当别人追逐更快生长，他开始学习“修剪”。剪掉迎合所有人的枝桠，剪掉看似光鲜但耗散精力的虚叶。他面临第一个真正选择：是长成别人想要的形状，还是培育自己耐看的姿态？\n第六年，学习传承。 当他终于拥有自己的“园子”，问题变成了：如何让一片土壤本身变得肥沃？如何把修剪的工具，交到下一个手里拿着绿萝、眼里有光的人手中。\n《盆栽职场》记录了一场静默而坚定的叛变——对抗的不是某个上司或公司，而是那种让人逐渐僵化、失去形状的隐形力量。\n最终，如何从一个被摆放的盆栽，成长为能为自己设计姿态的匠人\n如果你也正经历职业的“缓慢季节”，觉得成长不像爬梯，而像在培育一株生长不易察觉的植物——这个故事，是你的土壤。", "category": "都市日常", "score": "", "shelf": 0, "cover": "assets/covers/c4ee6f688dd1.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7420365966665600025": { "id": "7420365966665600025", "title": "职场礼仪", "author": "王义平", "abstract": "本书结合高等院校学生特点，紧密围绕新商科人才的培养目标，通过任务驱动方式，以典型职场工作过程为导向，帮助学生在“做”的过程中学习并掌握职场礼仪的内容、程序、方法和技巧，突出了职场工作中礼仪的应用性和综合性。本书的内容能将知识传授与价值有机融合，实现对学生潜移默化的教育作用。每个项目均以工作任务为中心，围绕职场礼仪的核心技能培养进行设计。每一个任务中都有学习任务工单，体现“以工作过程”为基础，全面培养学生的职业素养，职场礼仪知识和技能的教学思路。全书遵循“知行合一、实用为主”的原则，内容注重务实、体例新颖、条理清晰。", "category": "社会科学", "score": "", "shelf": 2, "cover": "", "serialCount": null, "wordNumber": null, "toc": [] }, "7549739817794276377": { "id": "7549739817794276377", "title": "职场词条", "author": "郭白川", "abstract": "在这座名为“天穹市”的钢铁森林里，每个社畜都像一颗被拧到极限的螺丝钉，林惊辞也不例外。无尽的加班、推诿的黑锅、被压榨的价值，构成了他生活的全部。\n直到一次被恶意陷害的深夜，濒临崩溃的林惊辞，意外觉醒了一种匪夷所си的能力——他能看见万事万物的“隐藏批注”。\n【一杯濒临变质的速溶咖啡：残留着化学香精的苦涩，以及茶水间王姐关于新来实习生的八卦余韵。】\n【一份被篡改过的项目策划案：第3页第8行，由赵立于昨日23:14分删除关键数据，意图嫁祸。】\n【被称为“冰山女神”的部门总监苏清影：看似冷漠，实则在为团队争取最大利益。弱点：对毛茸茸的小动物毫无抵抗力。】\n世界在他眼中，变成了一本可以随时翻阅的写满了注释的百科全书。曾经的迷雾被驱散，潜藏的规则清晰可见。\n从揭穿甩锅的同事，到完美解决刁难的客户；从洞察上司的真实意图，到发掘身边每一个人的潜能与秘密……林惊辞的人生，从看懂第一条批注开始彻底逆转。\n这是一个关于小人物洞悉“真实”后，在现代都市中步步为营，重塑人生，并与一群志同道合的伙伴们共同掀起时代浪潮的故事。他将用这双看透本质的眼睛，为自己和身边的人，批注出一个光芒万丈的未来。", "category": "都市脑洞", "score": "", "shelf": 0, "cover": "assets/covers/4bec791b457e.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7220353074110401547": { "id": "7220353074110401547", "title": "系统", "author": "老二", "abstract": "在这个即将黑暗的世界里，我到底该如何，活下去。", "category": "悬疑", "score": "", "shelf": 7, "cover": "assets/covers/1f45a535170f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7160525823269669901": { "id": "7160525823269669901", "title": "系统觉醒超神系统", "author": "月星陨", "abstract": "（时空+穿越+系统+超级脑洞+爽文+玄幻）\n破万劫，凌天道，斩魔帝，踏凌霄且看我夏星辰如何登顶剑道巅峰。\n“天道？听说就是你在暗中干涉我的人生！一剑！灭！”。\n从此我即是天道！我即是世界最强\n陆宇穿越到了一个剑与魔法的奇幻世界，出生在了玉州第一大宗的剑宗主的家里，这一世他叫夏星辰。\n开局被天道眷顾！觉醒超神系统！\n（系统功能如下）\n天道眷顾之体！\n获得创造功能！\n获得信息面板！\n获得空间储存！\n获得修复功能！\n获得勘测功能！\n获得融合功能！\n获得伪装功能！\n获得查询功能！\n获得加点功能！\n……\nPS:主角杀伐果断，前期较为平缓，后期超燃，惊天的伏笔，意想不到的反转，我的脑洞你别猜！", "category": "玄幻脑洞", "score": "", "shelf": 835, "cover": "assets/covers/8ce6147a5109.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7402854339372387353": { "id": "7402854339372387353", "title": "穿越系统竟是生子系统", "author": "动心泪子", "abstract": "【快穿➕生子、无金手指、无外挂、系统只是个摆设】\n林纱绑定了一个穿越系统，她穿到了古代，找到攻略对象，一心一意的完成任务，当她付出感情，生下孩子准备回家的时候系统才告诉她，它其实是个快穿生子系统。\n天杀的，怎么还乱绑系统啊！\n于是林纱没办法，只好穿越不同的世界给攻略对象生孩子，然后帮系统升级。\n【世界一】高冷异姓王✖️皇室活泼公主\n【世界二】带发修行的和尚✖️失去记忆的魔教圣女\n【世界三】清冷寡淡的太医✖️高高在上的女帝\n【世界四】偏执阴鸷的哥哥✖️柔柔弱弱的继妹\n【世界五】困难被捡的皇帝✖️不受宠爱的公主\n【世界六】蛰伏复仇的假太监✖️貌美灵动的宠妃\n【世界七】权势滔天摄政王✖️女扮男装小伙夫\n【世界八】冷血无情杀手✖️江南富家小姐\n持续更新中……", "category": "快穿", "score": "", "shelf": 87, "cover": "assets/covers/cf5f15c8bd04.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7567389900866079769": { "id": "7567389900866079769", "title": "反派系统+攻略系统=调情系统", "author": "Oops4699", "abstract": "反派系统+攻略系统=调情系统", "category": "脑洞", "score": "", "shelf": 1, "cover": "assets/covers/9411dee424d4.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7343162572444535832": { "id": "7343162572444535832", "title": "系统：灵石修炼系统", "author": "柠檬红茶多加冰", "abstract": "“南部大陆三千域，中部大陆五十洲，东方一百零八国，北境寒原部落生，西部佛魔二分天，天上人间。”\n漫漫无尽修仙路，所有人都为那最终的大道。可天道压制，从荒古至今无数天骄大道不得。杀戮仙王为得大道布万古杀局，金佛轮回入魔求佛魔共生挣脱束缚，炎烬仙王创建炎域……近古天道异动界分仙凡阻止大道超脱者的出现，主角方阳利用至宝保存前世道果摆脱天道的束缚，这一世他终将成为第一个大帝！", "category": "玄幻脑洞", "score": "", "shelf": 1337, "cover": "assets/covers/ee1dd5738c1f.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6877869528370383880": { "id": "6877869528370383880", "title": "九龙系统", "author": "流树", "abstract": "凌云起，九龙横越压千敌；惊涛浪，披荆斩棘傲苍穹。\n困龙出海，少年夺得天地造化，身负九龙压苍天！\n家族排挤？宗门压制？\n笑话！\n九龙在手，何不可为？", "category": "玄幻脑洞", "score": "", "shelf": 44, "cover": "assets/covers/a3e390ebef81.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6904093056417401864": { "id": "6904093056417401864", "title": "超强系统", "author": "混吃混喝", "abstract": "一个苦B青年黑客林峰，本以为能破解超级病毒反遭暗算，没想到因此开启了超级系统！ 系统在手，天下我有！", "category": "都市脑洞", "score": "", "shelf": 855, "cover": "assets/covers/6f660b48f716.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6992580567111830535": { "id": "6992580567111830535", "title": "心想事成系统", "author": "子夜天明", "abstract": "萧寒：系统兄，我想要隐身。\n系统：叮……宿主等级不足，梦想任务发布失败，扣除半年寿命。\n萧寒：系统你大爷，隐身都不会。\n系统：宿主打开方式不对，请积累心愿值。友情提示，辱骂本系统超过两次，将扣除十年生命值。", "category": "都市脑洞", "score": "", "shelf": 37, "cover": "assets/covers/5bda237b6222.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7217462118247828495": { "id": "7217462118247828495", "title": "鉴宝系统", "author": "归客清风", "abstract": "林叶，十八线小县城，由于家庭原因导致的休学的搬砖少年，意外被砖头砸倒后，突如其来的系统，带着他走向修仙的道路，美女佳人，随之而来，一路走向人生巅峰……", "category": "都市日常", "score": "", "shelf": 591, "cover": "assets/covers/119c9400def0.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7530324708353379352": { "id": "7530324708353379352", "title": "神豪系统加修仙系统", "author": "骑着乌龟去写小说", "abstract": '一个普通大学生秦默在遭遇车祸濒死时，同时激活"无限神豪系统"与"万界修仙系统"，获得双重系统能力……', "category": "都市修真", "score": "", "shelf": 11, "cover": "assets/covers/7b9165351ac8.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "6551318954042723331": { "id": "6551318954042723331", "title": "超神系统", "author": "鱼跃龙门", "abstract": "正当孙浩天被生活折磨得不要不要的时候，她携带超神系统来到了他身边...............", "category": "都市脑洞", "score": "", "shelf": 17539, "cover": "assets/covers/e9d18499b6ea.jpg", "serialCount": 519, "wordNumber": "1218735", "toc": [{ "i": "6551321285517902343", "t": "第1章      你配不上我！", "w": 2261, "v": "第一卷：默认" }, { "i": "6551321287174652430", "t": "第2章 绅士变乞丐", "w": 3210, "v": "第一卷：默认" }, { "i": "6551321288680407556", "t": "第3章 超神系统", "w": 3027, "v": "第一卷：默认" }, { "i": "6551321290391683588", "t": "第4章 逼——是这样装的！", "w": 3938, "v": "第一卷：默认" }, { "i": "6551321292203622925", "t": "第5章        火焰校花", "w": 2104, "v": "第一卷：默认" }, { "i": "6551321294149779972", "t": "第6章 江大来了个老司机！", "w": 2975, "v": "第一卷：默认" }, { "i": "6551321296209183235", "t": "第7章     邋遢老者", "w": 3083, "v": "第一卷：默认" }, { "i": "6551321297010295300", "t": "第8章    差点被气死", "w": 2739, "v": "第一卷：默认" }, { "i": "6551321298759320078", "t": "第9章 老机车——嫩司机？", "w": 3936, "v": "第一卷：默认" }, { "i": "6551321300353155588", "t": "第10章 一炮而红", "w": 1437, "v": "第一卷：默认" }, { "i": "6551321301938602510", "t": "第11章 奇葩室友", "w": 2769, "v": "第一卷：默认" }, { "i": "6551321303435969031", "t": "第12章 浩哥现世", "w": 2230, "v": "第一卷：默认" }, { "i": "6551321305193382414", "t": "第13章 依然要操？", "w": 2620, "v": "第一卷：默认" }, { "i": "6551321306334233092", "t": "第14章 天下会", "w": 2560, "v": "第一卷：默认" }, { "i": "6551321307286340099", "t": "第15章 的药效", "w": 2049, "v": "第一卷：默认" }, { "i": "6551321309106668036", "t": "第16章 狂喜！", "w": 2351, "v": "第一卷：默认" }, { "i": "6551321311115739655", "t": "第17章 启用飞行袍！", "w": 3007, "v": "第一卷：默认" }, { "i": "6551321313040925191", "t": "第18章 现代版超人？", "w": 2564, "v": "第一卷：默认" }, { "i": "6551321314672509443", "t": "第19章 江大附中——李嫚莹", "w": 1728, "v": "第一卷：默认" }, { "i": "6551321316098572803", "t": "第20章 你都看到了什么？", "w": 2096, "v": "第一卷：默认" }, { "i": "6551321317704991235", "t": "第21章 惊警——凌倩倩！", "w": 2859, "v": "第一卷：默认" }, { "i": "6551321319256883719", "t": "第22章 精神病救人？", "w": 2609, "v": "第一卷：默认" }, { "i": "6551321320875885060", "t": "第23章 和警花过招", "w": 462, "v": "第一卷：默认" }, { "i": "6551321322406806019", "t": "第24章 到底是还是？", "w": 2634, "v": "第一卷：默认" }, { "i": "6551321324352963075", "t": "第25章 最好永远别落在我手里！", "w": 2532, "v": "第一卷：默认" }, { "i": "6551321326328480269", "t": "第26章 你到底是谁？", "w": 481, "v": "第一卷：默认" }, { "i": "6551321327842624007", "t": "第27章 吞服九转强身丹", "w": 2339, "v": "第一卷：默认" }, { "i": "6551321330585698829", "t": "第28章", "w": 2342, "v": "第一卷：默认" }, { "i": "6551321332057899527", "t": "第29章 唐小冉发飙", "w": 2522, "v": "第一卷：默认" }, { "i": "6551321334373155336", "t": "第30章 愤怒", "w": 1549, "v": "第一卷：默认" }, { "i": "6551321335979573764", "t": "第31章 这不是我媳妇吗？", "w": 678, "v": "第一卷：默认" }, { "i": "6551321338018005511", "t": "第32章 惊险一幕", "w": 1510, "v": "第一卷：默认" }, { "i": "6551321339611841031", "t": "第33章 泡妞大计第一步！", "w": 2416, "v": "第一卷：默认" }, { "i": "6551321341348282887", "t": "第34章 奸计得逞", "w": 632, "v": "第一卷：默认" }, { "i": "6551321343353160199", "t": "第35章 败家大模式的开启", "w": 2610, "v": "第一卷：默认" }, { "i": "6551321344229769741", "t": "第36章", "w": 876, "v": "第一卷：默认" }, { "i": "6551321344926024205", "t": "第37章 我要取钱", "w": 2930, "v": "第一卷：默认" }, { "i": "6551321346238841348", "t": "第38章 冷汗直冒的张世东", "w": 2781, "v": "第一卷：默认" }, { "i": "6551321347887202820", "t": "第39章 猜测", "w": 2415, "v": "第一卷：默认" }, { "i": "6551321350143738372", "t": "第40章 直播进行中", "w": 2335, "v": "第一卷：默认" }, { "i": "6551321352152809988", "t": "第41章 哄抢百元大钞", "w": 2445, "v": "第一卷：默认" }, { "i": "6551321353432072707", "t": "第42章 乡巴佬变真土豪？", "w": 2610, "v": "第一卷：默认" }, { "i": "6551321354472260109", "t": "第43章 的求救电话", "w": 1540, "v": "第一卷：默认" }, { "i": "6551321356028346883", "t": "第44章 意外闯进", "w": 2503, "v": "第一卷：默认" }, { "i": "6551321358272299527", "t": "第45章 逃离", "w": 1394, "v": "第一卷：默认" }, { "i": "6551321359878717956", "t": "第46章 爱她，就.......！", "w": 2633, "v": "第一卷：默认" }, { "i": "6551321362311414285", "t": "第47章 陷入困境", "w": 73, "v": "第一卷：默认" }, { "i": "6551321364387594755", "t": "第48章", "w": 377, "v": "第一卷：默认" }, { "i": "6551321366199534083", "t": "第49章 伪装靓女小樱？", "w": 2734, "v": "第一卷：默认" }, { "i": "6551321367164224003", "t": "第50章 我没带钱", "w": 2697, "v": "第一卷：默认" }, { "i": "6551321368904860173", "t": "第51章 出去取钱", "w": 2956, "v": "第一卷：默认" }, { "i": "6551321370163151373", "t": "第52章 可怜的小樱", "w": 1820, "v": "第一卷：默认" }, { "i": "6551321372222554638", "t": "第53章 塑料袋装百元大钞？", "w": 2208, "v": "第一卷：默认" }, { "i": "6551321374286152205", "t": "第54章 你回来了？", "w": 350, "v": "第一卷：默认" }, { "i": "6551321376140034564", "t": "第55章 收美女当跟班", "w": 1209, "v": "第一卷：默认" }, { "i": "6551321378249769479", "t": "第56章 新晋", "w": 1466, "v": "第一卷：默认" }, { "i": "6551321379206070798", "t": "第57章 楚楚可怜的夜若曦", "w": 1030, "v": "第一卷：默认" }, { "i": "6551321380846043662", "t": "第58章 再遇警花", "w": 2538, "v": "第一卷：默认" }, { "i": "6551321381777179149", "t": "第59章", "w": 2281, "v": "第一卷：默认" }, { "i": "6551321383551369732", "t": "第60章 见？", "w": 1598, "v": "第一卷：默认" }], "creationStatus": "0", "tocTotal": 519 }, "7162141033197734926": { "id": "7162141033197734926", "title": "打脸系统", "author": "左移", "abstract": "陈凡在一次银行取钱的过程中被嘲讽，偶然间获得了完美男人打脸系统，刚刚得到系统，系统便奖励陈凡十个亿。\n最终，陈凡成为了天河市商业领域的绝对主宰，再也没有势力能够和陈凡做斗争，有了势力的陈凡开始将目标投入到其他城市中，其他城市的格局早已稳定，不服输的陈凡硬要分一杯羹，最后搅的大乱。\n陈凡趁乱夺取商业地盘，将自己的商业宏图发展扩大，直至占领全国，霸占全世界的商业地盘。", "category": "都市脑洞", "score": "", "shelf": 95, "cover": "assets/covers/c22438030fd2.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7259676772591995919": { "id": "7259676772591995919", "title": "星爷系统", "author": "一念成灬魔", "abstract": "30年的宅男，在一次重温星爷电影的时候，意外而亡，千钧一发之际，幸得星爷一声“菠萝菠萝蜜”让主角周末穿越，并获得系统，而后快速穿越星爷的各个电影世界中，学习各知识，强大自身…………", "category": "都市脑洞", "score": "", "shelf": 62, "cover": "assets/covers/18b582cf0bc7.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7452277195843587097": { "id": "7452277195843587097", "title": "泡妞系统", "author": "洞庭鱼", "abstract": "想要泡妞？首先你要够帅、你要够有钱、你要够有气质……如果这一切你都没有，那么你就需要拥有泡妞系统！", "category": "都市脑洞", "score": "", "shelf": 87, "cover": "assets/covers/7a21ca9b031a.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7498964888656563225": { "id": "7498964888656563225", "title": "有了系统要低调", "author": "西南不滇", "abstract": "【本文已完结，慢节奏，不是爽文，有系统，有男主，感情戏少。】\n主职讲解员的许荣欣突然绑定了位面交易系统，国人的传统就是闷声发大财，她也选择猥琐发育，低调升级系统，匹配更多位面。\n许荣欣为了掩人耳目，套了讲解员、主播、老板、二手商人等多个马甲，即便换了一个地方也是多线发展。\n主线当然是女主成长史，男主后期出现，两人为共同目标奋斗。\n温馨提示：本文不是做大做强，而是平稳发展，且分为前后两个篇幅截然不同。", "category": "现言脑洞", "score": "", "shelf": 5, "cover": "assets/covers/748204ed36a7.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7437873522371726398": { "id": "7437873522371726398", "title": "魏无羡系统", "author": "爱吃红豆切糕的洛宸", "abstract": "乱葬岗围剿后，魏无羡身死魂散，却意外被一个来自“三千小世界修正系统”的存在捕获。系统告知：因时空紊乱，多个与《陈情令》世界相似的“衍生小世界”出现剧情偏差——有的世界里江澄早逝，有的蓝忘机堕入歧途，有的温氏余孽被赶尽杀绝引发更大动荡。魏无羡需绑定系统，穿梭于这些小世界，修正关键节点，让“善有善报，恶有恶报”的核心秩序回归，完成任务即可获得“重塑肉身，重归原世界”的机会。但系统背后，似乎藏着与他前世命运相关的秘密。", "category": "男频衍生", "score": "", "shelf": 44, "cover": "assets/covers/083e84f8c7bd.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7204860831140416569": { "id": "7204860831140416569", "title": "宗门系统", "author": "新世界小白", "abstract": "敢欺负我门弟子？阎王都留不住你\n修仙世界没有直播弹幕广告？那怎么行\n且看陈枫如何将仙武和黑科技融合。\n（我是新来的小白，文笔不好写的不好可以给我多多建议，大家嘴下留情）", "category": "玄幻脑洞", "score": "", "shelf": 25, "cover": "assets/covers/75d0364977b8.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7571829107181243416": { "id": "7571829107181243416", "title": "系统之无敌系统", "author": "祁家老大", "abstract": "穿越而来的林天携带着逆天金手指——“无敌系统”，凭借系统源源不断赐予的神级奖励、稀世机缘与绝世功法，更以百折不挠的钢铁意志、深谋远虑的智慧胆识和永不言弃的强者之心，在波澜壮阔、群雄并起的幕蓝大陆上披荆斩棘、纵横捭阖，最终登临万界之巅，成就无人可及的至高传说。", "category": "玄幻脑洞", "score": "", "shelf": 6, "cover": "assets/covers/ec3c4d6ccbee.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7604505114526616638": { "id": "7604505114526616638", "title": "修仙系统竟然是氪金系统", "author": "沈十三吃饼干", "abstract": "穿到修仙世界，觉醒了一个系统，竟然和平时玩的游戏一样，是氪金系统，修仙都可以氪金了吗~？天呐。\n哈哈，欢迎来到修仙界的“付费玩家”专属通道！是的，你没听错，在咱们这里，灵石是硬通货，但“系统点券”才是王道！这套路是不是很熟悉？\nVIP等级： 从“凡人体验卡”到“天道至尊”，等级越高，每日福利、修炼加速、突破成功率加成就越恐\n商城： 琳琅满目，只有你想不到，没有你买不到。\n怖。", "category": "玄幻言情", "score": "", "shelf": 0, "cover": "assets/covers/7c3bd21a5a5c.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7436873861359995966": { "id": "7436873861359995966", "title": "全职系统：365行系统", "author": "纯情的老男人", "abstract": "新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！", "category": "都市脑洞", "score": "", "shelf": 0, "cover": "assets/covers/6582df8b9ced.jpg", "serialCount": null, "wordNumber": null, "toc": [] }, "7626017905842326552": { "id": "7626017905842326552", "title": "重生2006，豆包成了我的外挂", "author": "何姑娘", "abstract": "卧槽！重生了？还带着个豆包AI系统？\n　　\n　　“张天辰！别装死！三个月没发工资了，今天再不给钱，老子把机房的服务器全搬走！”\n　　\n　　内有员工集体罢工讨薪，外有竞争对手虎视眈眈银行催债合作商催尾款。\n　　\n　　2006年夏天，正是自家这个游戏开发小作坊濒临破产的节点。\n　　\n　　当年自己年轻气盛拉不下脸，被这帮员工一激，加上竞争对手设套，稀里糊涂签了转让协议。\n　　\n　　耗费三年心血写出来的底层渲染引擎，被当成白菜价骗走。\n　　\n　　根据当前困局，豆包立马给出解决方案并直接联系到了大厂的高层，直接原地起飞。\n　　\n　　豆包给出火爆全网的游戏策划，上线就起飞，做游戏做导航，直接跟巨头硬钢。\n　　\n　　从网络游戏开始，在豆包的帮助下打造科技帝国。", "category": "都市脑洞", "score": "9.5", "shelf": 168e3, "wordNumber": "236272", "serialCount": 92, "cover": "assets/covers/real_42326552.jpg", "toc": [{ "i": "7626018617515065918", "t": "第1章 豆包系统：宿主，您的外挂已到账", "w": 2781, "v": "" }, { "i": "7626020920498323993", "t": "第2章 豆包发威，全网黑料一键扒光！", "w": 2866, "v": "" }, { "i": "7626021143291380249", "t": "第3章 我是你爹还是提款机！", "w": 2711, "v": "" }, { "i": "7626021325371933209", "t": "第4章 重生者的反击从手撕绿茶开始！", "w": 2150, "v": "" }, { "i": "7626406958072857112", "t": "第5章 爆金币？送你进去踩缝纫机！", "w": 2326, "v": "" }, { "i": "7626407111164953112", "t": "第6章 废物利用与大厂的算盘", "w": 2841, "v": "" }, { "i": "7626407233982579224", "t": "第7章 谈判桌上，我即是规则", "w": 2363, "v": "" }, { "i": "7626407367101383192", "t": "第8章 姐夫反手一巴掌，王震彻底凉了", "w": 2240, "v": "" }, { "i": "7626743616756531736", "t": "第9章 我要的不是他们坐牢，是牢底坐穿！", "w": 2017, "v": "" }, { "i": "7626743772742681112", "t": "第10章 求我撤诉？想屁吃", "w": 2982, "v": "" }, { "i": "7626743892850786840", "t": "第11章 这波老板在大气层", "w": 2630, "v": "" }, { "i": "7626744026187694616", "t": "第12章 好消息项目要爆，坏消息被人偷家了！", "w": 2605, "v": "" }, { "i": "7627111427383231000", "t": "第13章 月薪两万加培训，这才是真正的神仙老板！", "w": 2109, "v": "" }, { "i": "7627111681008599576", "t": "第14章 钓鱼？不，是养鱼，然后一锅端！", "w": 2201, "v": "" }, { "i": "7627111838706041368", "t": "第15章 为了女儿，他出卖了所有人", "w": 3232, "v": "" }, { "i": "7627112006419481112", "t": "第16章 送上门的印钞机，与饮鸩止渴的疯子", "w": 2997, "v": "" }, { "i": "7627444996676796990", "t": "第17章 我不要钱，我要你的未来", "w": 2338, "v": "" }, { "i": "7627445115597881918", "t": "第18章 你的狂欢，是我为你准备的葬礼", "w": 2633, "v": "" }, { "i": "7627445236704215614", "t": "第19章 对赌协议！我的字典里没有输！", "w": 2537, "v": "" }, { "i": "7627445371953742398", "t": "第20章 把游戏免费送给死对头？我的格局你想象不到！", "w": 3e3, "v": "" }, { "i": "7627729556585054744", "t": "第21章 他以为赚翻了，其实是来送命的", "w": 2253, "v": "" }, { "i": "7627729731827270168", "t": "第22章 敌人在狂欢，我在等他破产", "w": 2171, "v": "" }, { "i": "7627729891953213976", "t": "第23章 他的加冕典礼，我的审判现场1", "w": 2788, "v": "" }, { "i": "7627730003291013656", "t": "第24章 他的加冕典礼，我的审判现场2", "w": 2458, "v": "" }, { "i": "7628202194579243544", "t": "第25章 站在废墟上，开一场产品发布会", "w": 2812, "v": "" }, { "i": "7628202368881934872", "t": "第26章 巨头盛大入局", "w": 3717, "v": "" }, { "i": "7628202528965935640", "t": "第27章 全网封杀？我直接拉企鹅163入伙掀桌子！", "w": 2563, "v": "" }, { "i": "7628202615217586712", "t": "第28章 谁说没渠道就得死，三大巨头保驾护航", "w": 2213, "v": "" }, { "i": "7628571937454686782", "t": "第29章 全网沸腾，星辰科技一战封神！", "w": 2673, "v": "" }, { "i": "7628572204350833214", "t": "第30章 坐地起价又如何？巨头们排队求送钱！", "w": 2116, "v": "" }, { "i": "7628572332759450174", "t": "第31章 想要七成利润？你还没睡醒吧！", "w": 2497, "v": "" }, { "i": "7628572513957593662", "t": "第32章 这种疯子老板，财务主管都被吓哭了！", "w": 2811, "v": "" }, { "i": "7628958505474474558", "t": "第33章 藏锋？不，我偏要吞噬整片森林！", "w": 1915, "v": "" }, { "i": "7628958665206137406", "t": "第34章 两个方案，两把刀", "w": 2280, "v": "" }, { "i": "7629319470955102745", "t": "第35章 他答应得太痛快，我反而睡不着了", "w": 2616, "v": "" }, { "i": "7629319711397773849", "t": "第36章 想让我输血？先让我控股！", "w": 2528, "v": "" }, { "i": "7629723264587137598", "t": "第37章 理想，值几个钱？", "w": 2617, "v": "" }, { "i": "7629723397819220542", "t": "第38章 资本巨头入场抢肉，星辰科技被踢出局？", "w": 2499, "v": "" }, { "i": "7630102595364717118", "t": "第39章 我输了？不，我赢麻了！", "w": 2649, "v": "" }, { "i": "7630104870103564862", "t": "第40章 我花了五千八百万，买了个爹？", "w": 2402, "v": "" }, { "i": "7630437117448962622", "t": "第41章 六千六百万的学费，徐总您慢慢消化", "w": 2613, "v": "" }, { "i": "7630437299965723198", "t": "第42章 星辰的战舰出海", "w": 2486, "v": "" }, { "i": "7630838032760832536", "t": "第43章 随手扔出个爆款创意，引得行业枭雄纳头便拜！", "w": 2247, "v": "" }, { "i": "7630838357509030424", "t": "第44章 星辰科技首场产品发布会", "w": 2328, "v": "" }, { "i": "7631199294862672409", "t": "第45章 这一波，杀疯了！", "w": 2556, "v": "" }, { "i": "7631199614611227161", "t": "第46章 巨头狭路相逢，张总稳如老狗", "w": 2102, "v": "" }, { "i": "7631590122407871000", "t": "第47章 两个亿？我不卖！", "w": 2545, "v": "" }, { "i": "7631590319376564760", "t": "第48章 疯了吧！拒绝三亿收购还要大厂每年倒贴", "w": 2301, "v": "" }, { "i": "7631950358662611480", "t": "第49章 当面拒绝五千万，他却说要全网封杀我", "w": 2244, "v": "" }, { "i": "7631950962503991832", "t": "第50章 谈判桌上的反杀：我要你整个生态！", "w": 2752, "v": "" }, { "i": "7632350673136271896", "t": "第51章 千渡全面开战", "w": 2496, "v": "" }, { "i": "7632350957648495128", "t": "第52章 全网封杀！日活瞬间腰斩，这是要赶尽杀绝啊", "w": 2880, "v": "" }, { "i": "7632991313163452952", "t": "第53章 简直就是疯子", "w": 2528, "v": "" }, { "i": "7632991855759589912", "t": "第54章 屠龙少年，终成恶龙！", "w": 2470, "v": "" }, { "i": "7633425649243259416", "t": "第55章 愿天堂没有千渡！千万玩家集体暴走", "w": 2821, "v": "" }, { "i": "7633425845373125144", "t": "第56章 你们想卖，我全收！这才是顶级大佬的绝地反杀！", "w": 2354, "v": "" }, { "i": "7633825040684810814", "t": "第57章 屠龙的代价，我一个人付", "w": 2591, "v": "" }, { "i": "7633825278040474174", "t": "第58章 都以为他自爆，其实他在疯狂收割！", "w": 2388, "v": "" }, { "i": "7634173355775509016", "t": "第59章 这不叫危机，这叫开胃菜", "w": 2980, "v": "" }, { "i": "7634173524998898200", "t": "第60章 全网黑我？那就让子弹再飞一会儿！", "w": 2004, "v": "" }, { "i": "7634501408640746046", "t": "第61章 都以为我完蛋了？明天十点，全球看我表演！", "w": 2785, "v": "" }, { "i": "7634502132250460734", "t": "第62章 刚骂完人，反手甩出十万现金当奖金！", "w": 2961, "v": "" }, { "i": "7635316743728022040", "t": "第63章 釜底抽薪？不，是送财童子！", "w": 2655, "v": "" }, { "i": "7635317026071773720", "t": "第64章 感谢友商帮忙预热，发布会见！", "w": 2607, "v": "" }, { "i": "7635950270144315928", "t": "第65章 说好来给我送终，结果全国大佬都来捧场！", "w": 2771, "v": "" }, { "i": "7635950515775341080", "t": "第66章 发布会杀疯了，全场大佬为我鼓掌", "w": 2605, "v": "" }, { "i": "7636430526189945369", "t": "第67章 绝杀巨头千渡，步步诛心", "w": 2498, "v": "" }, { "i": "7636430699066573337", "t": "第68章 屠杀继续！我拿你的钱，买我的民心！", "w": 2671, "v": "" }, { "i": "7636772113818337817", "t": "第69章 疯狂！掀翻棋盘再砸五千万，他让全网巨头集体破防", "w": 2392, "v": "" }, { "i": "7636772252352004633", "t": "第70章 不接受笑着道歉！这波反击让全网沸腾", "w": 3009, "v": "" }, { "i": "7637151237451825688", "t": "第71章 一战封神！", "w": 3017, "v": "" }, { "i": "7637151447267688984", "t": "第72章 一纸封喉", "w": 3096, "v": "" }, { "i": "7637505370486751806", "t": "第73章 喝茶聊天，字字诛心", "w": 2630, "v": "" }, { "i": "7637505606990955070", "t": "第74章 想摘桃子？还想在我脖子上拴条链子？", "w": 3069, "v": "" }, { "i": "7637905261264372249", "t": "第75章 刚打趴巨头，就被请去喝茶了！", "w": 2351, "v": "" }, { "i": "7637905589833564697", "t": "第76章 你的胃口太小了", "w": 3192, "v": "" }, { "i": "7638245532913107480", "t": "第77章 绝杀谷谷总裁！这招过河拆桥太狠", "w": 3094, "v": "" }, { "i": "7638630587489583678", "t": "第78章 拒绝搜狐两千万，张天辰要全资收爱问", "w": 2941, "v": "" }, { "i": "7639400381566419480", "t": "第79章 哪怕是巨头，不听话也得给我跪着！", "w": 2844, "v": "" }, { "i": "7639754470607290942", "t": "第80章 明修栈道暗度陈仓，全行业都被老板耍了", "w": 3208, "v": "" }, { "i": "7640345496174723608", "t": "第81章 查完底细，你就是个小卡拉米", "w": 2860, "v": "" }, { "i": "7640750479378481689", "t": "第82章 釜底抽薪？不，我要的是连锅端！", "w": 2022, "v": "" }, { "i": "7641235848050000408", "t": "第83章 一份漏洞报告，逼出跨国收购", "w": 2822, "v": "" }, { "i": "7641595717680644632", "t": "第84章 陈望山把董事会打穿", "w": 1952, "v": "" }, { "i": "7641959710098194968", "t": "第85章 一票之差，新浪变天", "w": 2361, "v": "" }, { "i": "7642363888721199640", "t": "第86章 他们卡我服务器？", "w": 2172, "v": "" }, { "i": "7642948107239440958", "t": "第87章 看不见的手", "w": 2240, "v": "" }, { "i": "7643268250255508030", "t": "第88章 不请自来的“国家队”", "w": 2688, "v": "" }, { "i": "7643673487646671384", "t": "第89章 全线告急！", "w": 2097, "v": "" }, { "i": "7645690310151914046", "t": "第90章 京城封杀？那就换个地图，岭南屠神！", "w": 1580, "v": "" }, { "i": "7647159984697918014", "t": "第91章 绝地翻盘！这才是真正的金蝉脱壳！", "w": 2816, "v": "" }, { "i": "7651498279741440536", "t": "第92章 打不过你，就变成你！", "w": 2451, "v": "" }], "tocTotal": 92, "alias": null }, "7184812049967352844": { "id": "7184812049967352844", "title": "带着抽卡系统给警方刷业绩", "author": "余四元", "abstract": "微迪系，沙雕，轻松，主角无CP，男女CP都没有。\n演员墨非获得了一个角色系统，他从佛子身上获得了罪犯吸引，从开膛手身上学到了人体结构，从侦探身上学会了和猫对话，从怪盗身上学到了魔术手速……而这一切在别人眼中显得那么诡异。\n正常演员会带着一身杀气吗？\n正常演员会那么精通人体构造吗？\n正常演员会回警局如同回家吗？\n当整个剧组都笼罩在名为墨非的阴影之下，阴影本人却在专心干饭。\n当观众对饰演反派的墨非提出质疑，被质疑本人却在和警官勾肩搭背。\n当警官对浑身杀气的墨非心生怀疑，墨非反手给警局狂刷业绩。\n嗯……虽然看上去不像好人，但这怎么不算良好市民呢？\n无CP，男女CP都没有。\n对主角来说全都是朋友。", "category": "都市脑洞", "score": "9.5", "shelf": 168e3, "wordNumber": "1105502", "serialCount": 540, "cover": "assets/covers/real_67352844.jpg", "toc": [{ "i": "7188159906669822464", "t": "第1章 万恶之源", "w": 2090, "v": "" }, { "i": "7262350478758347298", "t": "第2章 老友啊！", "w": 2094, "v": "" }, { "i": "7229366391806263845", "t": "第3章 进组", "w": 2089, "v": "" }, { "i": "7263104906897130024", "t": "第4章 开膛手", "w": 2085, "v": "" }, { "i": "7264956346213892608", "t": "第5章 残肢", "w": 2040, "v": "" }, { "i": "7287467863869391372", "t": "第6章 人不可貌相", "w": 2144, "v": "" }, { "i": "7287832633420186151", "t": "第7章 签合同", "w": 2096, "v": "" }, { "i": "7287863497663185419", "t": "第8章 罪犯的味道", "w": 2123, "v": "" }, { "i": "7288297288798208564", "t": "第9章 一条缝", "w": 2138, "v": "" }, { "i": "7288627397031625278", "t": "第10章 精彩的一天", "w": 2151, "v": "" }, { "i": "7288707889655448126", "t": "第11章 连环杀人", "w": 2115, "v": "" }, { "i": "7289036667456291369", "t": "第12章 预防", "w": 2163, "v": "" }, { "i": "7289087556132864553", "t": "第13章 第二个倒霉鬼", "w": 2110, "v": "" }, { "i": "7289042828972425791", "t": "第14章 再次报警", "w": 2114, "v": "" }, { "i": "7289458777164775991", "t": "第15章 通缉与赏金", "w": 2092, "v": "" }, { "i": "7289799603619758649", "t": "第16章 姬行玉", "w": 2165, "v": "" }, { "i": "7289836743976321591", "t": "第17章 凶犯锁定", "w": 2077, "v": "" }, { "i": "7290188317256385078", "t": "第18章 玄猫和跟踪者", "w": 2087, "v": "" }, { "i": "7290221359731311167", "t": "第19章 财神喵", "w": 2112, "v": "" }, { "i": "7290557680799973947", "t": "第20章 狗仔？", "w": 2078, "v": "" }, { "i": "7290586880599392823", "t": "第21章 杀鱼刀", "w": 2101, "v": "" }, { "i": "7290930284953633320", "t": "第22章 投资", "w": 2192, "v": "" }, { "i": "7290952280558436899", "t": "第23章 宴有好宴", "w": 2110, "v": "" }, { "i": "7291271257549931065", "t": "第24章 新的工作", "w": 2108, "v": "" }, { "i": "7291305227373216317", "t": "第25章 抓捕行动", "w": 2087, "v": "" }, { "i": "7291656994300428840", "t": "第26章 冤家路窄", "w": 2082, "v": "" }, { "i": "7291691429603049984", "t": "第27章 一击即中", "w": 2109, "v": "" }, { "i": "7292044819843514914", "t": "第28章 抓捕归案", "w": 2104, "v": "" }, { "i": "7292066116938138112", "t": "第29章 正当防卫", "w": 2098, "v": "" }, { "i": "7292408536548672015", "t": "第30章 大侦探", "w": 2137, "v": "" }, { "i": "7292738904053154338", "t": "第31章 拐卖集团", "w": 2114, "v": "" }, { "i": "7292773796824482339", "t": "第32章 小下马威", "w": 2151, "v": "" }, { "i": "7292803329707475456", "t": "第33章 剧本暂无", "w": 2089, "v": "" }, { "i": "7293096488991719974", "t": "第34章 穿普拉达的国王", "w": 2111, "v": "" }, { "i": "7293153874431935027", "t": "第35章 鸡蛋拦路", "w": 2090, "v": "" }, { "i": "7293522798398407230", "t": "第36章 场面一度混乱", "w": 2096, "v": "" }, { "i": "7293549473899217470", "t": "第37章 战后处理", "w": 2062, "v": "" }, { "i": "7293889058944746019", "t": "第38章 人口贩子", "w": 2118, "v": "" }, { "i": "7293917343695471156", "t": "第39章 器官买卖", "w": 2110, "v": "" }, { "i": "7294264967186874932", "t": "第40章 并案", "w": 2053, "v": "" }, { "i": "7294290016258228736", "t": "第41章 惊弓之鸟", "w": 2075, "v": "" }, { "i": "7294642370866315827", "t": "第42章 藏匿地点", "w": 2134, "v": "" }, { "i": "7294664336247947785", "t": "第43章 灯光师和线索", "w": 2085, "v": "" }, { "i": "7295011204425056808", "t": "第44章 营救行动，前", "w": 2144, "v": "" }, { "i": "7295033464586240552", "t": "第45章 营救行动", "w": 2176, "v": "" }, { "i": "7295373281153319459", "t": "第46章 营救行动，收尾", "w": 2063, "v": "" }, { "i": "7295396605040493090", "t": "第47章 一个头盔引发的纠缠", "w": 2116, "v": "" }, { "i": "7295763387781382692", "t": "第48章 别忘了本职工作", "w": 2124, "v": "" }, { "i": "7295781328698491454", "t": "第49章 高于一切的信仰", "w": 2132, "v": "" }, { "i": "7296126423469654568", "t": "第50章 豪无人性", "w": 2061, "v": "" }, { "i": "7296152639836783104", "t": "第51章 幸运不过两章", "w": 2138, "v": "" }, { "i": "7296485223192724003", "t": "第52章 怪盗", "w": 2072, "v": "" }, { "i": "7296512109184352768", "t": "第53章 名利场", "w": 2080, "v": "" }, { "i": "7296863781001527842", "t": "第54章 全军覆没", "w": 2083, "v": "" }, { "i": "7296890160166208035", "t": "第55章 中毒后遗症", "w": 2099, "v": "" }, { "i": "7297232035863593534", "t": "第56章 猫猫说", "w": 2107, "v": "" }, { "i": "7297256240168583742", "t": "第57章 奇迹墨墨", "w": 2109, "v": "" }, { "i": "7297602944160137747", "t": "第58章 麻烦上门", "w": 2108, "v": "" }, { "i": "7297629250394260031", "t": "第59章 月亮神仙和鬼怪", "w": 2128, "v": "" }, { "i": "7297974729850716712", "t": "第60章 请选择性爱护动物", "w": 2081, "v": "" }, { "i": "7297999435118674467", "t": "第61章 狗场", "w": 2104, "v": "" }, { "i": "7298347275397366334", "t": "第62章 不祥的预感", "w": 2098, "v": "" }, { "i": "7298366409636069950", "t": "第63章 狗鼻子", "w": 2102, "v": "" }, { "i": "7298620626259051019", "t": "第64章 人骨狗场", "w": 2094, "v": "" }, { "i": "7298712563578372647", "t": "第65章 演员难题", "w": 2128, "v": "" }, { "i": "7299069963577492002", "t": "第66章 落魄影后", "w": 2134, "v": "" }, { "i": "7299095627769020962", "t": "第67章 夜袭狗场", "w": 2114, "v": "" }, { "i": "7299439214847459855", "t": "第68章 梅姨的逃跑路线", "w": 2138, "v": "" }, { "i": "7299466163233227304", "t": "第69章 探班", "w": 2119, "v": "" }, { "i": "7300176819280577078", "t": "第70章 欢迎上贼船", "w": 2128, "v": "" }, { "i": "7300203916996657726", "t": "第71章 拍摄加速中", "w": 2158, "v": "" }, { "i": "7300565973793407488", "t": "第72章 joker", "w": 2169, "v": "" }, { "i": "7300586353329177122", "t": "第73章 头号粉丝", "w": 2096, "v": "" }, { "i": "7300796182614262334", "t": "第74章 难念的经", "w": 2112, "v": "" }, { "i": "7300813970825282110", "t": "第75章 探伤", "w": 2104, "v": "" }, { "i": "7300840733513105982", "t": "第76章 卡牌分析", "w": 2094, "v": "" }, { "i": "7300888213198602788", "t": "第77章 试镜现场", "w": 2106, "v": "" }, { "i": "7300948990865572386", "t": "第78章 曾是少年，现在少年", "w": 2103, "v": "" }, { "i": "7301177589132067362", "t": "第79章 偶遇街拍", "w": 2145, "v": "" }, { "i": "7301219763936559635", "t": "第80章 跨国合作", "w": 2099, "v": "" }, { "i": "7301239508002046500", "t": "第81章 真假魔头", "w": 2076, "v": "" }, { "i": "7301297714497585718", "t": "第82章 摄影模特", "w": 2091, "v": "" }, { "i": "7301512662179906111", "t": "第83章 经纪人危机", "w": 2102, "v": "" }, { "i": "7301560954435666451", "t": "第84章 可疑人员", "w": 2117, "v": "" }, { "i": "7301593035706466828", "t": "第85章 爆炸，爆炸！", "w": 2141, "v": "" }, { "i": "7302440518967902782", "t": "第86章 盛大的演出序幕", "w": 2125, "v": "" }, { "i": "7302791947134239269", "t": "第87章 唯一的主角", "w": 2146, "v": "" }, { "i": "7303185846922904126", "t": "第88章 挑衅", "w": 2110, "v": "" }, { "i": "7303513155647635983", "t": "第89章 不和谐游戏", "w": 2106, "v": "" }, { "i": "7303548507527316002", "t": "第90章 致命赌注", "w": 2121, "v": "" }, { "i": "7303888607104746046", "t": "第91章 游戏结束", "w": 2118, "v": "" }, { "i": "7304210589142762046", "t": "第92章 英雄的品格", "w": 2107, "v": "" }, { "i": "7304262108923822654", "t": "第93章 食人魔", "w": 2083, "v": "" }, { "i": "7304609757749314110", "t": "第94章 死刑，死刑！", "w": 2084, "v": "" }, { "i": "7304646487672095294", "t": "第95章 转移热点", "w": 2108, "v": "" }, { "i": "7304971083973657150", "t": "第96章 拜会写手", "w": 2154, "v": "" }, { "i": "7304995831935926846", "t": "第97章 谈话的方式治疗，话疗", "w": 2147, "v": "" }, { "i": "7305389607397376574", "t": "第98章 杀青与上映", "w": 2092, "v": "" }, { "i": "7305410358338912830", "t": "第99章 龙二", "w": 2112, "v": "" }, { "i": "7305762863719662142", "t": "第100章 小试牛刀", "w": 2115, "v": "" }, { "i": "7305782418953224766", "t": "第101章 准备出发", "w": 2145, "v": "" }, { "i": "7306029551790850622", "t": "第102章 跨国合作，展开", "w": 2078, "v": "" }, { "i": "7306160511526109758", "t": "第103章 出发云城", "w": 2130, "v": "" }, { "i": "7306443322648707646", "t": "第104章 初到云城", "w": 2133, "v": "" }, { "i": "7306477833180693054", "t": "第105章 省油的灯", "w": 2081, "v": "" }, { "i": "7306794133144748606", "t": "第106章 风土人情", "w": 2097, "v": "" }, { "i": "7307140353528709694", "t": "第107章 蜂麻燕雀", "w": 2129, "v": "" }, { "i": "7307223824527786558", "t": "第108章 意外来客", "w": 2111, "v": "" }, { "i": "7307256423358939710", "t": "第109章 洗脑", "w": 2132, "v": "" }, { "i": "7307552401924293182", "t": "第110章 小明星", "w": 2091, "v": "" }, { "i": "7307641845167686206", "t": "第111章 有客到", "w": 2082, "v": "" }, { "i": "7307984668752609854", "t": "第112章 惊喜变惊吓", "w": 2117, "v": "" }, { "i": "7308009348582605374", "t": "第113章 第二张小丑牌", "w": 2101, "v": "" }, { "i": "7308280091640136207", "t": "第114章 白磷弹", "w": 2108, "v": "" }, { "i": "7308380539705098814", "t": "第115章 疯狂与优雅", "w": 2093, "v": "" }, { "i": "7308745624583668286", "t": "第116章 龙四", "w": 2133, "v": "" }, { "i": "7308763070082335294", "t": "第117章 他乡遇故知，不像", "w": 2097, "v": "" }, { "i": "7309096949628551742", "t": "第118章 种植园区", "w": 2099, "v": "" }, { "i": "7309117341348938302", "t": "第119章 药师", "w": 2097, "v": "" }, { "i": "7309840874941186622", "t": "第120章 白粉卖家", "w": 2183, "v": "" }, { "i": "7309872666276528702", "t": "第121章 地下赌场", "w": 2094, "v": "" }, { "i": "7310228754461098558", "t": "第122章 真正的老大", "w": 2092, "v": "" }, { "i": "7310504909219037758", "t": "第123章 战争贩子", "w": 2111, "v": "" }, { "i": "7310523054394720830", "t": "第124章 烧烤晚餐", "w": 2091, "v": "" }, { "i": "7310548643696607806", "t": "第125章 电诈工厂", "w": 2100, "v": "" }, { "i": "7310941058072838718", "t": "第126章 爆炸的学问", "w": 2099, "v": "" }, { "i": "7310964559857074750", "t": "第127章 简单的试验方法", "w": 2101, "v": "" }, { "i": "7311306716245656126", "t": "第128章 脱身之法", "w": 2099, "v": "" }, { "i": "7311351821233029694", "t": "第129章 卧底心得", "w": 2081, "v": "" }, { "i": "7311643050621534782", "t": "第130章 袭击", "w": 2097, "v": "" }, { "i": "7311695150722335294", "t": "第131章 乱战开始", "w": 2104, "v": "" }, { "i": "7311719851892949566", "t": "第132章 后盾", "w": 2087, "v": "" }, { "i": "7312063848435941950", "t": "第133章 交火", "w": 2096, "v": "" }, { "i": "7312445027534242366", "t": "第134章 定位仪", "w": 2113, "v": "" }, { "i": "7312459837239984702", "t": "第135章 小丑一怒", "w": 2117, "v": "" }, { "i": "7312822052178625086", "t": "第136章 目标确定", "w": 2190, "v": "" }, { "i": "7312837125760614974", "t": "第137章 无间地狱", "w": 2093, "v": "" }, { "i": "7313169997184893502", "t": "第138章 人间小炮仗", "w": 2123, "v": "" }, { "i": "7313215017640280638", "t": "第139章 猛龙过江", "w": 2118, "v": "" }, { "i": "7313519024086712894", "t": "第140章 援兵", "w": 2119, "v": "" }, { "i": "7313588846875116094", "t": "第141章 出海", "w": 2111, "v": "" }, { "i": "7313940463956804158", "t": "第142章 海上相逢", "w": 2089, "v": "" }, { "i": "7314277558478979646", "t": "第143章 雇佣新人", "w": 2137, "v": "" }, { "i": "7314308948603978302", "t": "第144章 海盗船长", "w": 2110, "v": "" }, { "i": "7314328960781779518", "t": "第145章 敌友难辨", "w": 2119, "v": "" }, { "i": "7314656718489666110", "t": "第146章 消耗战", "w": 2100, "v": "" }, { "i": "7314686331102167614", "t": "第147章 汇合，突围", "w": 2118, "v": "" }, { "i": "7315046878494589502", "t": "第148章 制定计划", "w": 2097, "v": "" }, { "i": "7315068607631721022", "t": "第149章 娜塔丽", "w": 2105, "v": "" }, { "i": "7315420364824134206", "t": "第150章 穷途末路", "w": 2173, "v": "" }, { "i": "7315440426272440894", "t": "第151章 难缠的女人", "w": 2112, "v": "" }, { "i": "7315679062268052030", "t": "第152章 夺船计划", "w": 2111, "v": "" }, { "i": "7315706398396924478", "t": "第153章 混乱的国内", "w": 2213, "v": "" }, { "i": "7316135536228303422", "t": "第154章 掌舵！", "w": 2140, "v": "" }, { "i": "7316169212584526398", "t": "第155章 内讧", "w": 2146, "v": "" }, { "i": "7316531244236292670", "t": "第156章 垂死挣扎", "w": 2104, "v": "" }, { "i": "7316555370804019774", "t": "第157章 接手、善后", "w": 2125, "v": "" }, { "i": "7316877328141795902", "t": "第158章 返航", "w": 2102, "v": "" }, { "i": "7316926929523720766", "t": "第159章 外交的焦", "w": 2089, "v": "" }, { "i": "7317272435219251774", "t": "第160章 小红一把", "w": 2090, "v": "" }, { "i": "7317292639408112190", "t": "第161章 卧底归队", "w": 2110, "v": "" }, { "i": "7317640202757882430", "t": "第162章 剧组集合", "w": 2109, "v": "" }, { "i": "7317664480836469310", "t": "第163章 人生态度", "w": 2107, "v": "" }, { "i": "7318020621063946814", "t": "第164章 电影剧情", "w": 2100, "v": "" }, { "i": "7318038507358782014", "t": "第165章 接着吵", "w": 2102, "v": "" }, { "i": "7318375982069449278", "t": "第166章 再就业", "w": 2117, "v": "" }, { "i": "7318408057426297406", "t": "第167章 相见不相识？", "w": 2118, "v": "" }, { "i": "7318756566532883006", "t": "第168章 牺牲的意义", "w": 2097, "v": "" }, { "i": "7318779865447006782", "t": "第169章 应不应该", "w": 2134, "v": "" }, { "i": "7319122415294890558", "t": "第170章 红起来了", "w": 2097, "v": "" }, { "i": "7319146056455832126", "t": "第171章 闭口禅", "w": 2117, "v": "" }, { "i": "7319486889218540094", "t": "第172章 新故事", "w": 2091, "v": "" }, { "i": "7319507051523080766", "t": "第173章 战胜恐惧", "w": 2112, "v": "" }, { "i": "7319872752825926206", "t": "第174章 奏乐！", "w": 2113, "v": "" }, { "i": "7319887772288811582", "t": "第175章 工作", "w": 2108, "v": "" }, { "i": "7320246110608425534", "t": "第176章 我有一个朋友", "w": 2104, "v": "" }, { "i": "7320266048526107198", "t": "第177章 困", "w": 2128, "v": "" }, { "i": "7320585700942823998", "t": "第178章 一点心眼", "w": 2127, "v": "" }, { "i": "7320626899716162110", "t": "第179章 寒冬将至", "w": 2090, "v": "" }, { "i": "7320989881943999038", "t": "第180章 山雨欲来", "w": 2147, "v": "" }, { "i": "7321001650691260990", "t": "第181章 保持警惕", "w": 2086, "v": "" }, { "i": "7321346409255404094", "t": "第182章 雁过留痕", "w": 2117, "v": "" }, { "i": "7321370768351167038", "t": "第183章 悬赏追杀", "w": 2088, "v": "" }, { "i": "7321683455475991102", "t": "第184章 黑人骇客", "w": 2110, "v": "" }, { "i": "7321743719772717630", "t": "第185章 金屋藏什么？", "w": 2092, "v": "" }, { "i": "7322448374873981502", "t": "第186章 IP地址", "w": 2082, "v": "" }, { "i": "7322477890707145278", "t": "第187章 传教士", "w": 2114, "v": "" }, { "i": "7322847472747823678", "t": "第188章 打包出发", "w": 2091, "v": "" }, { "i": "7322866261648474686", "t": "第189章 军火商", "w": 2104, "v": "" }, { "i": "7323213531766080062", "t": "第190章 旅店酒馆", "w": 2095, "v": "" }, { "i": "7323228104778859070", "t": "第191章 撒旦礼", "w": 2117, "v": "" }, { "i": "7323581562933494334", "t": "第192章 线索", "w": 2097, "v": "" }, { "i": "7323600403247940158", "t": "第193章 受害者家属", "w": 2108, "v": "" }, { "i": "7323955753708945982", "t": "第194章 初现端倪", "w": 2108, "v": "" }, { "i": "7323974854049284670", "t": "第195章 密室", "w": 2123, "v": "" }, { "i": "7324324831497830974", "t": "第196章 潘多拉魔盒", "w": 2117, "v": "" }, { "i": "7324344355584492094", "t": "第197章 弟弟在哪", "w": 2111, "v": "" }, { "i": "7324693047894082110", "t": "第198章 公路遭遇战", "w": 2087, "v": "" }, { "i": "7324716478589043262", "t": "第199章 洗地", "w": 2093, "v": "" }, { "i": "7325051593705931326", "t": "第200章 纽约警察", "w": 2088, "v": "" }, { "i": "7325088740404118078", "t": "第201章 调查中", "w": 2113, "v": "" }, { "i": "7325433837243073086", "t": "第202章 各显神通", "w": 2076, "v": "" }, { "i": "7325456046678344254", "t": "第203章 意外的相逢", "w": 2160, "v": "" }, { "i": "7325814364051620414", "t": "第204章 工作量", "w": 2118, "v": "" }, { "i": "7325830646880813630", "t": "第205章 玄学计划", "w": 2107, "v": "" }, { "i": "7326180612102963774", "t": "第206章 离奇古怪", "w": 2087, "v": "" }, { "i": "7326203563175051838", "t": "第207章 国内情形", "w": 2132, "v": "" }, { "i": "7326534917511184958", "t": "第208章 邀约庄园", "w": 2086, "v": "" }, { "i": "7326559828510245438", "t": "第209章 实锤了", "w": 2086, "v": "" }, { "i": "7326896557993771582", "t": "第210章 齐聚一堂", "w": 2092, "v": "" }, { "i": "7326925454374339134", "t": "第211章 庄园", "w": 2120, "v": "" }, { "i": "7327283273036464702", "t": "第212章 向神祷告", "w": 2119, "v": "" }, { "i": "7327314645054652990", "t": "第213章 地下教堂", "w": 2095, "v": "" }, { "i": "7327653664078709310", "t": "第214章 不可动摇", "w": 2119, "v": "" }, { "i": "7327684869343953470", "t": "第215章 祭品", "w": 2112, "v": "" }, { "i": "7328044498385109566", "t": "第216章 第一波交锋", "w": 2111, "v": "" }, { "i": "7328062262285959742", "t": "第217章 潜入", "w": 2098, "v": "" }, { "i": "7328400509826499134", "t": "第218章 痛击我的队友", "w": 2096, "v": "" }, { "i": "7328421880166089278", "t": "第219章 反洗脑", "w": 2115, "v": "" }, { "i": "7328770473909551678", "t": "第220章 援兵洗地", "w": 2158, "v": "" }, { "i": "7328787305626337854", "t": "第221章 善后", "w": 2126, "v": "" }, { "i": "7329129147656045118", "t": "第222章 例行程序", "w": 2120, "v": "" }, { "i": "7329147068952363582", "t": "第223章 怪盗再现", "w": 2142, "v": "" }, { "i": "7329475151861400126", "t": "第224章 带坏一出溜", "w": 2142, "v": "" }, { "i": "7329513460763476542", "t": "第225章 开工和尾声", "w": 2129, "v": "" }, { "i": "7329867788653183550", "t": "第226章 剧组的阴影", "w": 2122, "v": "" }, { "i": "7329891135667569214", "t": "第227章 录制曲目", "w": 2108, "v": "" }, { "i": "7330188538383696446", "t": "第228章 李冲出狱", "w": 2136, "v": "" }, { "i": "7330263262044357182", "t": "第229章 心结", "w": 2136, "v": "" }, { "i": "7330611327183880766", "t": "第230章 人传人", "w": 2122, "v": "" }, { "i": "7330634984606466622", "t": "第231章 四人游", "w": 2099, "v": "" }, { "i": "7330988012089655870", "t": "第232章 不省心的放松时刻", "w": 2124, "v": "" }, { "i": "7331005738971562558", "t": "第233章 放轻松", "w": 2144, "v": "" }, { "i": "7331360496559342142", "t": "第234章 意外频发", "w": 2149, "v": "" }, { "i": "7331375527145505342", "t": "第235章 众生百态", "w": 2112, "v": "" }, { "i": "7331728786976686654", "t": "第236章 千钧一发", "w": 2131, "v": "" }, { "i": "7331748230465585726", "t": "第237章 意外频发2.0", "w": 2118, "v": "" }, { "i": "7332102408782217790", "t": "第238章 搞音乐", "w": 2165, "v": "" }, { "i": "7332118272147472958", "t": "第239章 跨国邀约", "w": 2117, "v": "" }, { "i": "7332469883323548184", "t": "第240章 成长", "w": 2171, "v": "" }, { "i": "7332489125917901336", "t": "第241章 猎人", "w": 2143, "v": "" }, { "i": "7332845115649557016", "t": "第242章 风雪莫斯科", "w": 2087, "v": "" }, { "i": "7332858737272570392", "t": "第243章 射击体验", "w": 2113, "v": "" }, { "i": "7333228756934328856", "t": "第244章 另类体验", "w": 2204, "v": "" }, { "i": "7333240517758550552", "t": "第245章 猛兽天敌", "w": 2153, "v": "" }, { "i": "7333600963497820696", "t": "第246章 兽潮袭击", "w": 2104, "v": "" }, { "i": "7333618440126611992", "t": "第247章 唯快不破", "w": 2141, "v": "" }, { "i": "7333957213154705944", "t": "第248章 装甲车", "w": 2095, "v": "" }, { "i": "7333976085941453336", "t": "第249章 喀秋莎", "w": 2147, "v": "" }, { "i": "7334345805207192088", "t": "第250章 老牌绅士", "w": 2119, "v": "" }, { "i": "7334360607824560664", "t": "第251章 仁慈的惩罚", "w": 2152, "v": "" }, { "i": "7334701388900860440", "t": "第252章 太阳帮", "w": 2113, "v": "" }, { "i": "7334715610498089496", "t": "第253章 失踪", "w": 2119, "v": "" }, { "i": "7335080692994277912", "t": "第254章 戒律匪徒", "w": 2133, "v": "" }, { "i": "7335103831295918616", "t": "第255章 偷袭", "w": 2103, "v": "" }, { "i": "7335831360449298968", "t": "第256章 乌拉", "w": 2105, "v": "" }, { "i": "7335846819190014488", "t": "第257章 私人诊所", "w": 2108, "v": "" }, { "i": "7336190351167717912", "t": "第258章 以身入局", "w": 2126, "v": "" }, { "i": "7336213578044670488", "t": "第259章 遵纪守法，高朋满座", "w": 2120, "v": "" }, { "i": "7336567905368162840", "t": "第260章 发现", "w": 2119, "v": "" }, { "i": "7336583488407077400", "t": "第261章 义气", "w": 2128, "v": "" }, { "i": "7336930301714629144", "t": "第262章 核弹头", "w": 2116, "v": "" }, { "i": "7336945358301299224", "t": "第263章 全民追查", "w": 2131, "v": "" }, { "i": "7337285106647712318", "t": "第264章 灭口", "w": 2106, "v": "" }, { "i": "7337302597394514494", "t": "第265章 回城", "w": 2111, "v": "" }, { "i": "7337357013921301016", "t": "第266章 锁头和钥匙", "w": 2151, "v": "" }, { "i": "7337540531947307544", "t": "第267章 新西伯利亚", "w": 2150, "v": "" }, { "i": "7337668552511472152", "t": "第268章 世事难预料", "w": 2142, "v": "" }, { "i": "7337699311855092248", "t": "第269章 抽风中", "w": 2124, "v": "" }, { "i": "7338044959188075032", "t": "第270章 继续抽风", "w": 2095, "v": "" }, { "i": "7338061979367506456", "t": "第271章 贝加尔湖", "w": 2101, "v": "" }, { "i": "7338082927021916696", "t": "第272章 对峙", "w": 2104, "v": "" }, { "i": "7338422148978967065", "t": "第273章 落水", "w": 2090, "v": "" }, { "i": "7338445782355296793", "t": "第274章 事以密成", "w": 2106, "v": "" }, { "i": "7338479880788525592", "t": "第275章 救援", "w": 2117, "v": "" }, { "i": "7339166369679688254", "t": "第276章 侦探", "w": 2119, "v": "" }, { "i": "7339182048499745342", "t": "第277章 小小的震撼", "w": 2139, "v": "" }, { "i": "7339226508151505432", "t": "第278章 问候", "w": 2125, "v": "" }, { "i": "7339457557771059736", "t": "第279章 回归正常", "w": 2115, "v": "" }, { "i": "7339553036836012606", "t": "第280章 工作节奏", "w": 2127, "v": "" }, { "i": "7339582494619992600", "t": "第281章 钱家八卦", "w": 2121, "v": "" }, { "i": "7339874960736797208", "t": "第282章 猛鬼出笼", "w": 2116, "v": "" }, { "i": "7339908567677272600", "t": "第283章 综艺首秀", "w": 2112, "v": "" }, { "i": "7341019847595131416", "t": "第284章 限制级人生", "w": 2158, "v": "" }, { "i": "7341032299162518040", "t": "第285章 粘鸟网", "w": 2093, "v": "" }, { "i": "7341379150021657113", "t": "第286章 好的品质", "w": 2142, "v": "" }, { "i": "7341398395837235737", "t": "第287章 表演和不对劲", "w": 2125, "v": "" }, { "i": "7341754593660912152", "t": "第288章 继续拍摄", "w": 2104, "v": "" }, { "i": "7341778497360101912", "t": "第289章 不对劲的村长", "w": 2126, "v": "" }, { "i": "7342130648754176537", "t": "第290章 结束录制", "w": 2142, "v": "" }, { "i": "7342147729549705752", "t": "第291章 个人工作室", "w": 2126, "v": "" }, { "i": "7342493326815265342", "t": "第292章 跨省办案", "w": 2139, "v": "" }, { "i": "7342507789182321214", "t": "第293章 独乐乐不如众乐乐", "w": 2119, "v": "" }, { "i": "7342863085184500248", "t": "第294章 好消息", "w": 2122, "v": "" }, { "i": "7342879005026026008", "t": "第295章 第一次任务", "w": 2128, "v": "" }, { "i": "7343237806040302104", "t": "第296章 海边的曼彻斯特", "w": 2107, "v": "" }, { "i": "7343252916603453976", "t": "第297章 浪子", "w": 2102, "v": "" }, { "i": "7343598502661849624", "t": "第298章 斯文PTSD", "w": 2097, "v": "" }, { "i": "7343622068786692632", "t": "第299章 你不懂", "w": 2141, "v": "" }, { "i": "7343962764588614169", "t": "第300章 互相试探", "w": 2098, "v": "" }, { "i": "7343982602249830936", "t": "第301章 工作使人快乐", "w": 2152, "v": "" }, { "i": "7344325144904483353", "t": "第302章 少爷好久没这么高兴了", "w": 2151, "v": "" }, { "i": "7344343623552483865", "t": "第303章 闪现", "w": 2103, "v": "" }, { "i": "7344368749790642712", "t": "第304章 碰头", "w": 2118, "v": "" }, { "i": "7344405170257658392", "t": "第305章 秘密任务", "w": 2114, "v": "" }, { "i": "7344705835609637400", "t": "第306章 间谍", "w": 2090, "v": "" }, { "i": "7344737851503804952", "t": "第307章 第二部剧本", "w": 2108, "v": "" }, { "i": "7344789729436500504", "t": "第308章 选择", "w": 2121, "v": "" }, { "i": "7345107462950765080", "t": "第309章 目标", "w": 2116, "v": "" }, { "i": "7345153081128010264", "t": "第310章 过审", "w": 2117, "v": "" }, { "i": "7345486178855944766", "t": "第311章 飞来大饼", "w": 2113, "v": "" }, { "i": "7345511179994808894", "t": "第312章 山中来客", "w": 2099, "v": "" }, { "i": "7345848196825891352", "t": "第313章 新助理", "w": 2135, "v": "" }, { "i": "7345895462181814808", "t": "第314章 正邪对立，搏斗终生", "w": 2106, "v": "" }, { "i": "7346110476784239129", "t": "第315章 人间法", "w": 2117, "v": "" }, { "i": "7346205964430754329", "t": "第316章 人间烟火", "w": 2129, "v": "" }, { "i": "7346231370399613464", "t": "第317章 特别出演", "w": 2107, "v": "" }, { "i": "7346519543444947480", "t": "第318章 武德充沛", "w": 2123, "v": "" }, { "i": "7346573172776370712", "t": "第319章 人为意外", "w": 2132, "v": "" }, { "i": "7346617111453631000", "t": "第320章 上岗", "w": 2135, "v": "" }, { "i": "7346858112147522110", "t": "第321章 开工", "w": 2106, "v": "" }, { "i": "7346936903943324184", "t": "第322章 误伤", "w": 2148, "v": "" }, { "i": "7346993523360547352", "t": "第323章 恶棍死讯", "w": 2120, "v": "" }, { "i": "7348827571494060568", "t": "第324章 摄制事故", "w": 2140, "v": "" }, { "i": "7348844976618357272", "t": "第325章 处理方式", "w": 2103, "v": "" }, { "i": "7349175614705762840", "t": "第326章 艰难的回家之路", "w": 2119, "v": "" }, { "i": "7349195982103380504", "t": "第327章 乌合之众", "w": 2082, "v": "" }, { "i": "7349513726053073432", "t": "第328章 交通意外", "w": 2123, "v": "" }, { "i": "7349560859615576600", "t": "第329章 入院", "w": 2084, "v": "" }, { "i": "7349925860071195160", "t": "第330章 父女关系", "w": 2138, "v": "" }, { "i": "7349938124014764568", "t": "第331章 狗言狗语", "w": 2114, "v": "" }, { "i": "7350309629349331480", "t": "第332章 多事之秋", "w": 2135, "v": "" }, { "i": "7350325118180016664", "t": "第333章 到站", "w": 2102, "v": "" }, { "i": "7350680612425957912", "t": "第334章 责任使人进步", "w": 2123, "v": "" }, { "i": "7350702179612639768", "t": "第335章 七日换新", "w": 2127, "v": "" }, { "i": "7351036025507955224", "t": "第336章 扯淡", "w": 2131, "v": "" }, { "i": "7351058304895812120", "t": "第337章 动身京都", "w": 2125, "v": "" }, { "i": "7351412453751669272", "t": "第338章 一闪而过的牢狱之灾", "w": 2129, "v": "" }, { "i": "7351439742791074328", "t": "第339章 放松时间", "w": 2124, "v": "" }, { "i": "7351779556933501464", "t": "第340章 起飞", "w": 2123, "v": "" }, { "i": "7351806243268215320", "t": "第341章 误会解除", "w": 2118, "v": "" }, { "i": "7352161030799114776", "t": "第342章 决战长城", "w": 2129, "v": "" }, { "i": "7352179043531227672", "t": "第343章 扒皮导演", "w": 2127, "v": "" }, { "i": "7352526602871243288", "t": "第344章 美食荒漠", "w": 2131, "v": "" }, { "i": "7352542709057339928", "t": "第345章 人生如戏", "w": 2111, "v": "" }, { "i": "7352894089978724888", "t": "第346章 奇怪甥舅", "w": 2126, "v": "" }, { "i": "7352915126472671768", "t": "第347章 演", "w": 2147, "v": "" }, { "i": "7353271745513538072", "t": "第348章 古玩街", "w": 2148, "v": "" }, { "i": "7353298770949325336", "t": "第349章 好茶好宴", "w": 2105, "v": "" }, { "i": "7353628343071146520", "t": "第350章 班长", "w": 2130, "v": "" }, { "i": "7353660606282482200", "t": "第351章 他乡遇故知", "w": 2128, "v": "" }, { "i": "7354003840087114264", "t": "第352章 恶趣味", "w": 2124, "v": "" }, { "i": "7354024907149165080", "t": "第353章 思想碰撞", "w": 2128, "v": "" }, { "i": "7354375192132469272", "t": "第354章 另一个战场", "w": 2184, "v": "" }, { "i": "7354390409801384472", "t": "第355章 力大砖飞", "w": 2122, "v": "" }, { "i": "7354762251795956248", "t": "第356章 听戏", "w": 2123, "v": "" }, { "i": "7354784196541284888", "t": "第357章 粉丝见面", "w": 2131, "v": "" }, { "i": "7355111269734564376", "t": "第358章 战争矛盾激化", "w": 2113, "v": "" }, { "i": "7355138522673594904", "t": "第359章 霸王别姬", "w": 2132, "v": "" }, { "i": "7355495547962130968", "t": "第360章 主动申请加班", "w": 2165, "v": "" }, { "i": "7355508340841005592", "t": "第361章 解决部分麻烦", "w": 2126, "v": "" }, { "i": "7355754357419164184", "t": "第362章 首映礼", "w": 2109, "v": "" }, { "i": "7355852318237016600", "t": "第363章 闪亮登场", "w": 2138, "v": "" }, { "i": "7356080812715934232", "t": "第364章 首映结束", "w": 2108, "v": "" }, { "i": "7356233614054392344", "t": "第365章 路演", "w": 2120, "v": "" }, { "i": "7356597132725322264", "t": "第366章 一炮而红", "w": 2145, "v": "" }, { "i": "7356610816939917848", "t": "第367章 思维转变", "w": 2142, "v": "" }, { "i": "7356802553960481304", "t": "第368章 卧虎藏龙", "w": 2146, "v": "" }, { "i": "7356880864808026648", "t": "第369章 转变", "w": 2114, "v": "" }, { "i": "7357361955054567960", "t": "第370章 流浪汉", "w": 2104, "v": "" }, { "i": "7357380776289108504", "t": "第371章 捡垃圾", "w": 2120, "v": "" }, { "i": "7358094015473910296", "t": "第372章 海边残肢", "w": 2124, "v": "" }, { "i": "7358110529551876632", "t": "第373章 克制关系", "w": 2130, "v": "" }, { "i": "7358437488345481752", "t": "第374章 摩擦", "w": 2184, "v": "" }, { "i": "7358464046246412824", "t": "第375章 海上往事", "w": 2143, "v": "" }, { "i": "7358835238585254424", "t": "第376章 一起火", "w": 2095, "v": "" }, { "i": "7358859657416294936", "t": "第377章 义演", "w": 2114, "v": "" }, { "i": "7359201353182216728", "t": "第378章 整活", "w": 2124, "v": "" }, { "i": "7359227599349875224", "t": "第379章 霸占热搜", "w": 2132, "v": "" }, { "i": "7359570567877378584", "t": "第380章 风暴前的膨胀", "w": 2135, "v": "" }, { "i": "7359593304234672664", "t": "第381章 前奏", "w": 2125, "v": "" }, { "i": "7359948758286615064", "t": "第382章 苗头", "w": 2128, "v": "" }, { "i": "7359966733584564760", "t": "第383章 套话", "w": 2115, "v": "" }, { "i": "7360316892659073560", "t": "第384章 粗糙的计划", "w": 2110, "v": "" }, { "i": "7360339134302388760", "t": "第385章 溺水救援", "w": 2132, "v": "" }, { "i": "7360677820260958744", "t": "第386章 金蝉脱壳", "w": 2115, "v": "" }, { "i": "7360714445649101336", "t": "第387章 无中生爹", "w": 2128, "v": "" }, { "i": "7361064727675404824", "t": "第388章 心思各异", "w": 2119, "v": "" }, { "i": "7361086555777155608", "t": "第389章 刑讯", "w": 2100, "v": "" }, { "i": "7361435263643435544", "t": "第390章 垃圾回收", "w": 2178, "v": "" }, { "i": "7361463207518552600", "t": "第391章 满级魔王", "w": 2101, "v": "" }, { "i": "7361808511296078360", "t": "第392章 目标锁定，出击", "w": 2143, "v": "" }, { "i": "7361830402400469528", "t": "第393章 关于装备", "w": 2093, "v": "" }, { "i": "7362162045199843864", "t": "第394章 第一枪", "w": 2102, "v": "" }, { "i": "7362185030363267608", "t": "第395章 状态", "w": 2100, "v": "" }, { "i": "7362556132377756184", "t": "第396章 试探性攻击", "w": 2150, "v": "" }, { "i": "7362571906551136792", "t": "第397章 略胜一筹", "w": 2118, "v": "" }, { "i": "7362910044851012120", "t": "第398章 制空", "w": 2149, "v": "" }, { "i": "7362936673413382680", "t": "第399章 错位地下室", "w": 2136, "v": "" }, { "i": "7363287807239930392", "t": "第400章 决战", "w": 2103, "v": "" }, { "i": "7363316600398692888", "t": "第401章 正面交锋", "w": 2107, "v": "" }, { "i": "7363658916107911704", "t": "第402章 干了！", "w": 2162, "v": "" }, { "i": "7363681455341306392", "t": "第403章 行不行", "w": 2101, "v": "" }, { "i": "7363955425399554584", "t": "第404章 战斗", "w": 2094, "v": "" }, { "i": "7364018276457775640", "t": "第405章 双杀", "w": 2135, "v": "" }, { "i": "7364403719431012888", "t": "第406章 5v5", "w": 2108, "v": "" }, { "i": "7364433689469518360", "t": "第407章 先下手为强", "w": 2111, "v": "" }, { "i": "7364757051576173080", "t": "第408章 优势在我", "w": 2097, "v": "" }, { "i": "7364799408094855704", "t": "第409章 胜负已分", "w": 2122, "v": "" }, { "i": "7365146042393707032", "t": "第410章 招揽中", "w": 2088, "v": "" }, { "i": "7365180350558913048", "t": "第411章 隐形的敌人", "w": 2140, "v": "" }, { "i": "7365512554728145432", "t": "第412章 治疗抢救", "w": 2139, "v": "" }, { "i": "7365538936808030744", "t": "第413章 希望", "w": 2108, "v": "" }, { "i": "7365831634433606168", "t": "第414章 流放黑客", "w": 2115, "v": "" }, { "i": "7365843846992757272", "t": "第415章 一个传说", "w": 2095, "v": "" }, { "i": "7366261275510194712", "t": "第416章 医保", "w": 2137, "v": "" }, { "i": "7366293094817350168", "t": "第417章 剧组汇合", "w": 2132, "v": "" }, { "i": "7366632052097040920", "t": "第418章 拍摄和好消息", "w": 2143, "v": "" }, { "i": "7366673920985924120", "t": "第419章 规则升级", "w": 2124, "v": "" }, { "i": "7366999919871132184", "t": "第420章 伦敦旧影", "w": 2162, "v": "" }, { "i": "7367038701072826904", "t": "第421章 影迷龙四", "w": 2149, "v": "" }, { "i": "7367382931410534936", "t": "第422章 录制", "w": 2142, "v": "" }, { "i": "7367415503318434328", "t": "第423章 杀青和面试", "w": 2189, "v": "" }, { "i": "7367755355155071512", "t": "第424章 第二部", "w": 2121, "v": "" }, { "i": "7367779587012428312", "t": "第425章 回家了", "w": 2112, "v": "" }, { "i": "7368127583872893464", "t": "第426章 学问", "w": 2124, "v": "" }, { "i": "7368177853872996888", "t": "第427章 试妆", "w": 2094, "v": "" }, { "i": "7368501364713849368", "t": "第428章 戏曲艺术指导", "w": 2115, "v": "" }, { "i": "7368537382036980248", "t": "第429章 出入境情报", "w": 2133, "v": "" }, { "i": "7368866794473259544", "t": "第430章 信息交流", "w": 2109, "v": "" }, { "i": "7368886461132702232", "t": "第431章 闪击京畿道", "w": 2133, "v": "" }, { "i": "7369242093153157656", "t": "第432章 意想不到的合作", "w": 2163, "v": "" }, { "i": "7369274057033777688", "t": "第433章 美人计", "w": 2107, "v": "" }, { "i": "7369607076475044376", "t": "第434章 联谊会", "w": 2105, "v": "" }, { "i": "7369675540174733848", "t": "第435章 循序渐进", "w": 2121, "v": "" }, { "i": "7369932422240027160", "t": "第436章 聚会地点", "w": 2118, "v": "" }, { "i": "7370012205682524696", "t": "第437章 砸场子", "w": 2117, "v": "" }, { "i": "7370358186827596312", "t": "第438章 真、美人计", "w": 2133, "v": "" }, { "i": "7370395252475052568", "t": "第439章 找到了", "w": 2110, "v": "" }, { "i": "7370733462761783832", "t": "第440章 业火", "w": 2135, "v": "" }, { "i": "7370759098536559128", "t": "第441章 结束", "w": 2116, "v": "" }, { "i": "7371089707540677144", "t": "第442章 回国", "w": 2120, "v": "" }, { "i": "7371127327184405016", "t": "第443章 火锅火锅", "w": 2142, "v": "" }, { "i": "7371473370342244888", "t": "第444章 换卡", "w": 2172, "v": "" }, { "i": "7371515395032760856", "t": "第445章 舆论", "w": 2128, "v": "" }, { "i": "7371840398370554392", "t": "第446章 场外信息", "w": 2097, "v": "" }, { "i": "7371872531554255384", "t": "第447章 神棍", "w": 2102, "v": "" }, { "i": "7372194454712631832", "t": "第448章 异常", "w": 2094, "v": "" }, { "i": "7372226846680695320", "t": "第449章 投稿和队友", "w": 2134, "v": "" }, { "i": "7372577152434192920", "t": "第450章 服装", "w": 2111, "v": "" }, { "i": "7372621255314244120", "t": "第451章 终面", "w": 2119, "v": "" }, { "i": "7372953506535195160", "t": "第452章 回城开会", "w": 2133, "v": "" }, { "i": "7372979801797165592", "t": "第453章 一人得道", "w": 2138, "v": "" }, { "i": "7373329907310395928", "t": "第454章 第二部开机", "w": 2137, "v": "" }, { "i": "7373365603886694936", "t": "第455章 伪装时刻2", "w": 2166, "v": "" }, { "i": "7373679669628895768", "t": "第456章 双喜临门", "w": 2126, "v": "" }, { "i": "7373721364013793816", "t": "第457章 颁奖典礼", "w": 2116, "v": "" }, { "i": "7374074019965846040", "t": "第458章 双喜临门2.0", "w": 2124, "v": "" }, { "i": "7374100338388763160", "t": "第459章 不速之客", "w": 2146, "v": "" }, { "i": "7374438458816725528", "t": "第460章 亡国灭种", "w": 2130, "v": "" }, { "i": "7374477410940502552", "t": "第461章 预感", "w": 2122, "v": "" }, { "i": "7374811254621209112", "t": "第462章 控制欲", "w": 2134, "v": "" }, { "i": "7374838311250051608", "t": "第463章 交个朋友", "w": 2132, "v": "" }, { "i": "7375179009685996056", "t": "第464章 群殴", "w": 2122, "v": "" }, { "i": "7375220298150330904", "t": "第465章 绑架", "w": 2096, "v": "" }, { "i": "7375546904744051224", "t": "第466章 娃娃兵", "w": 2105, "v": "" }, { "i": "7375590904431641112", "t": "第467章 画地为牢", "w": 2159, "v": "" }, { "i": "7375918782427955736", "t": "第468章 一团乱麻", "w": 2129, "v": "" }, { "i": "7375947819489706520", "t": "第469章 老道来了", "w": 2115, "v": "" }, { "i": "7376290920825618968", "t": "第470章 目的", "w": 2117, "v": "" }, { "i": "7376340354414428696", "t": "第471章 爆炸物", "w": 2121, "v": "" }, { "i": "7376672055640474136", "t": "第472章 直钩钓鱼", "w": 2103, "v": "" }, { "i": "7376746532445372952", "t": "第473章 抢戏", "w": 2116, "v": "" }, { "i": "7377042239853183512", "t": "第474章 大幕拉开", "w": 2138, "v": "" }, { "i": "7377302319605498392", "t": "第478章 瞬息万变", "w": 2121, "v": "" }, { "i": "7377757948753232408", "t": "第479章 游戏时间", "w": 2140, "v": "" }, { "i": "7377776499580994072", "t": "第480章 手术成功", "w": 2131, "v": "" }, { "i": "7378099923184517656", "t": "第481章 食物链顶端", "w": 2125, "v": "" }, { "i": "7378128882559353368", "t": "第482章 小丑解锁", "w": 2116, "v": "" }, { "i": "7378428830811161112", "t": "第483章 集体养伤", "w": 2140, "v": "" }, { "i": "7378500716026937880", "t": "第484章 住院生活", "w": 2145, "v": "" }, { "i": "7378782546362171928", "t": "第485章 心理诊断", "w": 2129, "v": "" }, { "i": "7378798291271565848", "t": "第486章 思政", "w": 2104, "v": "" }, { "i": "7379218425945522712", "t": "第487章 出院！", "w": 2126, "v": "" }, { "i": "7379255001744425496", "t": "第488章 办事窗口", "w": 2148, "v": "" }, { "i": "7379548720834036248", "t": "第489章 卡牌们", "w": 2107, "v": "" }, { "i": "7379631590877430296", "t": "第490章 三刷京都", "w": 2100, "v": "" }, { "i": "7379976026027213336", "t": "第491章 跑龙套", "w": 2142, "v": "" }, { "i": "7380299686915097112", "t": "第492章 宵夜", "w": 2101, "v": "" }, { "i": "7380352011499209240", "t": "第493章 长辈们", "w": 2100, "v": "" }, { "i": "7380701012958380568", "t": "第494章 心结难解", "w": 2152, "v": "" }, { "i": "7380733285632049688", "t": "第495章 白天和娜塔丽", "w": 2129, "v": "" }, { "i": "7381044556181013016", "t": "第496章 批发奖杯", "w": 2121, "v": "" }, { "i": "7381114601477243416", "t": "第497章 轮椅漂移", "w": 2122, "v": "" }, { "i": "7381458539090297368", "t": "第498章 食人恶魔", "w": 2100, "v": "" }, { "i": "7381487845896110616", "t": "第499章 刑满释放", "w": 2115, "v": "" }, { "i": "7381746428835529240", "t": "第500章 拍摄完成", "w": 2115, "v": "" }, { "i": "7381842244128490008", "t": "第501章 龙傲天和营销号", "w": 2149, "v": "" }, { "i": "7382186594477802008", "t": "第502章 卡牌真相1", "w": 2097, "v": "" }, { "i": "7382228588868682264", "t": "第503章 最佳男主和最佳男配", "w": 2113, "v": "" }, { "i": "7382567634178425368", "t": "第504章 二进院", "w": 2151, "v": "" }, { "i": "7382605812763476504", "t": "第505章 心理医生", "w": 2123, "v": "" }, { "i": "7382920768641827352", "t": "第506章 熟悉的感觉", "w": 2144, "v": "" }, { "i": "7382974393418252824", "t": "第507章 家的感觉", "w": 2122, "v": "" }, { "i": "7383313273178817048", "t": "第508章 心事", "w": 2146, "v": "" }, { "i": "7383348077890896408", "t": "第509章 龙小队的龙1", "w": 2124, "v": "" }, { "i": "7383660051979846168", "t": "第510章 龙小队的龙2", "w": 2178, "v": "" }, { "i": "7383699869195584024", "t": "第511章 官方采访", "w": 2090, "v": "" }, { "i": "7384048851528712728", "t": "第512章 实习生", "w": 2132, "v": "" }, { "i": "7384094078339645976", "t": "第513章 猫的一天1", "w": 2113, "v": "" }, { "i": "7384429402697761304", "t": "第514章 猫的一天2", "w": 2091, "v": "" }, { "i": "7384459767307043352", "t": "第515章 似是故人归", "w": 2103, "v": "" }, { "i": "7384798427856503320", "t": "第516章 陵园", "w": 2122, "v": "" }, { "i": "7384833826779841048", "t": "第517章 京都别墅", "w": 2128, "v": "" }, { "i": "7385162829931741720", "t": "第518章 直球妙", "w": 2122, "v": "" }, { "i": "7385187480963662360", "t": "第519章 傻乐和傻……", "w": 2112, "v": "" }, { "i": "7385538222555677208", "t": "第520章 草木皆兵", "w": 2104, "v": "" }, { "i": "7385568565874655768", "t": "第521章 再次提名", "w": 2099, "v": "" }, { "i": "7385909284682351128", "t": "第522章 典礼2.0", "w": 2103, "v": "" }, { "i": "7385948847886828056", "t": "第523章 思维宫殿", "w": 2102, "v": "" }, { "i": "7386282968580375064", "t": "第524章 终章", "w": 2121, "v": "" }, { "i": "7391007530362602009", "t": "番外 录音记录", "w": 2683, "v": "" }, { "i": "7391034355637813785", "t": "番外 医生日记", "w": 2116, "v": "" }, { "i": "7398842663576814104", "t": "番外 唐警官的一天", "w": 2281, "v": "" }, { "i": "7470905023275221528", "t": "番外 命与星", "w": 2236, "v": "" }, { "i": "7484854446405468696", "t": "番外 关于爱情", "w": 3324, "v": "" }, { "i": "7487962533794431512", "t": "番外 综艺中（上）", "w": 2756, "v": "" }, { "i": "7503183675505263128", "t": "番外 综艺中（中）", "w": 2217, "v": "" }, { "i": "7505247913358934552", "t": "番外 综艺中（下）", "w": 2357, "v": "" }, { "i": "7505248517720375832", "t": "番外 两个黑客跑得快（上）", "w": 2281, "v": "" }, { "i": "7509363044024074776", "t": "番外 两个黑客跑得快（下）", "w": 2290, "v": "" }, { "i": "7511289280254181912", "t": "番外 亲爱的，你是个谜（上）", "w": 2324, "v": "" }, { "i": "7511672989964845592", "t": "番外 亲爱的，你是个谜（下）", "w": 2603, "v": "" }, { "i": "7512071259149058584", "t": "番外 尼古拉，弗、弗什么？（上）", "w": 2250, "v": "" }, { "i": "7514305108843168280", "t": "番外 尼古拉，弗、弗什么？（下）", "w": 2400, "v": "" }, { "i": "7522477207344661016", "t": "番外 木槿的山", "w": 2314, "v": "" }, { "i": "7529116069621940760", "t": "番外 神奇小王", "w": 2915, "v": "" }, { "i": "7537559883378328088", "t": "番外 “我们”", "w": 2168, "v": "" }, { "i": "7538287994319405592", "t": "番外 给我的礼物", "w": 2201, "v": "" }, { "i": "7538743568643392024", "t": "番外 开工快乐", "w": 2351, "v": "" }], "tocTotal": 540, "alias": "爆红从报警开始" } }, "sections": { "hero": ["7626017905842326552", "7184812049967352844", "6577257002706144269", "6565650522437585934", "6363166852633332738"], "continue": ["7626017905842326552", "7184812049967352844", "6577257002706144269", "6565650522437585934"], "forYou": ["6363166852633332738", "6760615827902303240", "7391911601604938776", "6551318954042723331", "7092533991277857824", "6924945008017542158", "6662947343215627271", "6877818023915293704", "6724092336529214472", "6924180416706382862", "6645496047537753101", "7068188575220632613", "6781766082597227531", "7469756548235938840", "7535651765308361790", "7137282478628146189"], "rising": ["6565650522437585934", "6363166852633332738", "6760615827902303240", "7391911601604938776", "6551318954042723331", "7515630390464220184", "6955760262192303135", "7626017905842326552"], "classic": ["7626017905842326552", "7184812049967352844"] }, "shelf": [{ "id": "7626017905842326552", "chapter": 3, "percent": 0.039, "updated": "刚刚", "finished": false }, { "id": "7184812049967352844", "chapter": 8, "percent": 0.016, "updated": "2 天前", "finished": false }, { "id": "6577257002706144269", "chapter": 13, "percent": 0.227, "updated": "3 天前", "finished": false }, { "id": "6565650522437585934", "chapter": 18, "percent": 0.31, "updated": "4 天前", "finished": false }, { "id": "6363166852633332738", "chapter": 28, "percent": 0.477, "updated": "6 天前", "finished": false }], "history": [{ "id": "7626017905842326552", "chapter": 3, "at": "刚刚" }, { "id": "7184812049967352844", "chapter": 8, "at": "2 天前" }, { "id": "6577257002706144269", "chapter": 13, "at": "3 天前" }, { "id": "6565650522437585934", "chapter": 18, "at": "4 天前" }], "fullText": ["7626017905842326552", "7184812049967352844"], "tabs": ["全部", "小说", "短剧", "漫剧", "漫画", "听书", "视频"], "categories": ["世界史", "东方仙侠", "个人成长", "传统玄幻", "刑侦探案", "动漫衍生", "历史", "历史古代", "历史脑洞", "双男主", "古代言情", "古言脑洞", "奇幻仙侠", "女生生活", "宫斗宅斗", "小说", "快穿", "悬疑", "悬疑惊悚", "悬疑灵异", "悬疑脑洞", "战神赘婿", "推理", "文化", "文化历史", "文学理论", "文学经典", "校园", "民国言情", "游戏体育", "灵异", "爽文", "特种兵", "玄幻脑洞", "玄幻言情", "现代言情", "现实情感", "现言脑洞", "男生生活", "男频衍生", "病娇", "社会科学", "科幻末世", "穿越", "精品小说", "纯爱", "美食休闲", "职场", "职场婚恋", "脑洞", "豪门总裁", "都市修真", "都市日常", "都市种田", "都市脑洞", "都市高武", "重生", "青春甜宠", "青春虐恋"] };
  var book = (id) => DB.books[id];
  var allBooks = () => Object.values(DB.books);
  function fmtWords(n) {
    if (!n) return "";
    if (n >= 1e4) return (n / 1e4).toFixed(n >= 1e5 ? 0 : 1) + " 万字";
    return n + " 字";
  }
  function fmtShelf(n) {
    if (!n) return "";
    if (n >= 1e4) return (n / 1e4).toFixed(1) + " 万人在读";
    return n + " 人在读";
  }

  // js/views/nav.js
  init_ui();
  init_icons();
  var DESTINATIONS = [
    { key: "home", icon: "house", label: "首页" },
    { key: "drama", icon: "clapperboard", label: "短剧" },
    { key: "library", icon: "library-big", label: "书架" },
    { key: "mine", icon: "circle-user-round", label: "我的" }
  ];
  function navBar(router2, active) {
    const bar = el(`<nav class="md-nav-bar" role="tablist" aria-label="主导航"></nav>`);
    DESTINATIONS.forEach((d) => {
      const dest = el(`<div class="dest nav-dest ${d.key === active ? "active" : ""}" role="tab"
        aria-selected="${d.key === active}" data-key="${d.key}" tabindex="0">
        <span class="indicator">${icon(d.icon, 24)}</span>
        <span class="label">${esc(d.label)}</span>
      </div>`);
      const go = () => {
        var _a, _b, _c;
        if (dest.classList.contains("active") && !router2.stack.length) {
          (_c = (_b = (_a = router2.tabs.get(d.key)) == null ? void 0 : _a.el) == null ? void 0 : _b.querySelector(".page-scroll")) == null ? void 0 : _c.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        router2.switchTab(d.key);
      };
      dest.addEventListener("click", go);
      dest.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          go();
        }
      });
      bar.appendChild(dest);
    });
    return bar;
  }

  // js/views/home.js
  var TABS = DB.tabs;
  function sectionHead(title, moreLabel = "查看全部", onMore) {
    var _a;
    const h = el(`<div class="section-head">
      <h2>${esc(title)}</h2>
      ${moreLabel ? `<span class="more">${esc(moreLabel)}${icon("chevron-right", 14)}</span>` : ""}
    </div>`);
    if (onMore) (_a = h.querySelector(".more")) == null ? void 0 : _a.addEventListener("click", onMore);
    return h;
  }
  function HomeView({ router: router2 }) {
    const root = el(`<div class="page tab-page home-page"></div>`);
    const appBar2 = el(`<header class="app-bar">
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
    root.append(appBar2, scroll);
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
    function heroCarousel(ids) {
      const wrap = el(`<div class="home-hero">
        <div class="carousel" id="hero-carousel"></div>
        <div class="dots" id="hero-dots"></div>
      </div>`);
      const track = wrap.querySelector("#hero-carousel");
      const dots = wrap.querySelector("#hero-dots");
      const list2 = ids.map((id) => book(id)).filter(Boolean);
      list2.forEach((b, i) => {
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
        var _a;
        const w = ((_a = track.firstElementChild) == null ? void 0 : _a.getBoundingClientRect().width) || 1;
        idx = Math.round(track.scrollLeft / (w + 12));
        Array.from(dots.children).forEach((d, i) => d.classList.toggle("on", i === idx));
      };
      track.addEventListener("scroll", sync, { passive: true });
      track.addEventListener("pointerdown", () => {
        paused = true;
      });
      window.addEventListener("pointerup", () => setTimeout(() => {
        paused = false;
      }, 2600));
      const tick = () => {
        if (paused || document.hidden) return;
        const card = track.children[idx + 1] || track.children[0];
        const target = idx + 1 < track.children.length ? card : track.children[0];
        track.scrollTo({ left: target.offsetLeft - 16, behavior: "smooth" });
      };
      clearInterval(timer);
      timer = setInterval(tick, 4600);
      wrap.addEventListener("mouseenter", () => {
        paused = true;
      });
      wrap.addEventListener("mouseleave", () => {
        paused = false;
      });
      return wrap;
    }
    function continueRail() {
      const ids = DB.sections.continue.slice(0, 4);
      if (!ids.length) return null;
      const wrap = el(`<section class="section"></section>`);
      wrap.appendChild(sectionHead("接着看", "书架", () => router2.switchTab("library")));
      const rail2 = el(`<div class="continue-rail"></div>`);
      ids.forEach((id) => {
        var _a;
        const b = book(id);
        const entry2 = DB.shelf.find((s) => s.id === id) || { percent: 0.12, chapter: 0 };
        if (!b) return;
        const toc = b.toc || [];
        const chTitle = ((_a = toc[entry2.chapter]) == null ? void 0 : _a.t) || "第 1 章";
        const card = el(`<div class="continue-card" role="button" tabindex="0">
          <div class="cover"><img src="${esc(b.cover)}" alt=""></div>
          <div class="info">
            <div class="t ellipsis">${esc(b.title)}</div>
            <div class="c ellipsis">${esc(chTitle)}</div>
            <div class="bar md-progress"><i style="width:${Math.round((entry2.percent || 0) * 100)}%"></i></div>
          </div>
          <div class="play">${icon("play", 18)}</div>
        </div>`);
        card.addEventListener("click", () => router2.push("reader", { id, chapter: entry2.chapter || 0 }));
        rail2.appendChild(card);
      });
      wrap.appendChild(rail2);
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
      wrap.appendChild(sectionHead(title, "更多", () => router2.push("search", { initial: "" })));
      const list2 = el(`<div class="rank-list"></div>`);
      ids.forEach((id, i) => {
        const b = book(id);
        if (!b) return;
        const row2 = el(`<div class="rank-row reveal" role="button" tabindex="0">
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
        row2.addEventListener("click", () => openDetail(id, row2.querySelector("img")));
        list2.appendChild(row2);
      });
      wrap.appendChild(list2);
      return wrap;
    }
    function categoryCloud() {
      const wrap = el(`<section class="section"></section>`);
      wrap.appendChild(sectionHead("按口味找", "", null));
      const cloud = el(`<div class="cat-cloud"></div>`);
      (DB.categories || []).slice(0, 14).forEach((c) => {
        const chip = el(`<button class="md-chip">${esc(c)}</button>`);
        chip.addEventListener("click", () => router2.push("search", { initial: c }));
        cloud.appendChild(chip);
      });
      wrap.appendChild(cloud);
      return wrap;
    }
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
          <div class="s">${esc(b.category)} · ${12 + i * 7 % 60} 集</div>
        </div>`);
        card.addEventListener("click", () => openDetail(id, card.querySelector("img")));
        grid.appendChild(card);
      });
      wrap.appendChild(grid);
      return wrap;
    }
    function renderFeed(animate2 = false) {
      const heroIds = DB.sections.hero;
      const forYou = DB.sections.forYou;
      const rising = DB.sections.rising;
      const ranked = DB.sections.forYou.slice(0, 8);
      const frag2 = document.createDocumentFragment();
      if (activeTab === "全部") {
        frag2.append(heroCarousel(heroIds));
        const c = continueRail();
        if (c) frag2.append(c);
        frag2.append(bookGrid("为你推荐", forYou.slice(0, 12)));
        frag2.append(rankSection("本週口碑榜", ranked));
        frag2.append(categoryCloud());
      } else if (activeTab === "小说") {
        frag2.append(heroCarousel(heroIds));
        frag2.append(bookGrid("小说精选", forYou.slice(0, 18)));
        frag2.append(rankSection("小说热榜", ranked));
      } else if (activeTab === "听书") {
        frag2.append(audioGrid("正在热播的有声书", rising.concat(forYou.slice(0, 6))));
      } else if (activeTab === "漫画" || activeTab === "漫剧") {
        frag2.append(videoGrid(activeTab === "漫画" ? "条漫长图" : "漫剧新番", forYou.slice(0, 12)));
      } else if (activeTab === "短剧" || activeTab === "视频") {
        frag2.append(videoGrid(activeTab === "短剧" ? "竖屏短剧" : "热门视频", forYou.slice(0, 12)));
      } else {
        frag2.append(bookGrid(activeTab, forYou.slice(0, 12)));
      }
      frag2.append(el(`<div class="bottom-spacer"></div>`));
      content.replaceChildren(frag2);
      requestAnimationFrame(() => {
        Array.from(content.querySelectorAll(".reveal")).slice(0, 40).forEach((n, i) => {
          n.style.transitionDelay = `${Math.min(i * 18, 260)}ms`;
          n.classList.add("in");
        });
      });
      if (animate2) {
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
          <div class="s">${esc(b.author)} · ${2 + i % 6} 小时</div>
        </div>`);
        card.addEventListener("click", () => router2.push("audio", { id }));
        grid.appendChild(card);
      });
      wrap.appendChild(grid);
      return wrap;
    }
    function openDetail(id, sourceEl) {
      const from = sourceEl == null ? void 0 : sourceEl.getBoundingClientRect();
      router2.push("detail", { id, from });
    }
    appBar2.querySelector('[data-act="search"]').addEventListener("click", () => router2.push("search", {}));
    appBar2.querySelector('[data-act="history"]').addEventListener("click", () => router2.push("history", {}));
    scroll.addEventListener("scroll", () => {
      const y = scroll.scrollTop;
      appBar2.classList.toggle("scrolled", y > 8);
      appBar2.classList.toggle("collapsed", y > 56);
      tabStrip.classList.toggle("stuck", y > 56);
    }, { passive: true });
    const fab = el(`<button class="md-fab extended" id="home-fab" style="position:absolute;right:16px;bottom:calc(var(--nav-bar-height) + 16px);z-index:15">
      ${icon("play", 22)}<span class="label">接着看</span>
    </button>`);
    fab.addEventListener("click", () => {
      var _a;
      const first = DB.sections.continue[0];
      if (first) router2.push("reader", { id: first, chapter: ((_a = DB.shelf.find((s) => s.id === first)) == null ? void 0 : _a.chapter) || 0 });
      else router2.push("search", {});
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
    root.append(scroll, fab, navBar(router2, "home"));
    const tip = appBar2.querySelector("#today-tip");
    if (tip) tip.textContent = `${Object.keys(DB.books).length} 本在架`;
    return {
      el: root,
      onResume() {
        if (activeTab === "全部") renderFeed();
      }
    };
  }

  // js/views/drama.js
  init_ui();
  init_icons();
  function DramaView({ router: router2 }) {
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
        snackbar(`开始播放《${b.title}》`, "详情", () => router2.push("detail", { id: b.id }));
      });
      card.querySelectorAll(".side-act").forEach((a) => a.addEventListener("click", () => {
        const act = a.dataset.act;
        if (act === "like") {
          a.querySelector(".lucide").style.fill = "currentColor";
          a.querySelector(".lucide").style.color = "#ff6b6b";
        }
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
    root.append(feed, navBar(router2, "drama"));
    return { el: root };
  }

  // js/views/library.js
  init_ui();
  init_icons();

  // js/shelf.js
  var KEY2 = "fqapp-md3:shelf:v1";
  function seed() {
    return (DB.shelf || []).map((s) => __spreadValues({}, s));
  }
  var items = load2();
  function load2() {
    try {
      const raw = localStorage.getItem(KEY2);
      if (!raw) return seed();
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : seed();
    } catch (e) {
      return seed();
    }
  }
  function save() {
    try {
      localStorage.setItem(KEY2, JSON.stringify(items));
    } catch (e) {
    }
  }
  function list() {
    return items.slice().sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  }
  function has(id) {
    return items.some((i) => i.id === id);
  }
  function entry(id) {
    return items.find((i) => i.id === id);
  }
  function toggle(id) {
    if (has(id)) {
      items = items.filter((i) => i.id !== id);
      save();
      return false;
    }
    items.push({ id, chapter: 0, percent: 0, updated: "刚刚", updatedAt: Date.now() });
    save();
    return true;
  }
  function progress(id, chapter, percent) {
    const e = entry(id);
    if (e) {
      e.chapter = chapter;
      e.percent = Math.max(0, Math.min(1, percent));
      e.updated = "刚刚";
      e.updatedAt = Date.now();
    } else {
      items.push({ id, chapter, percent, updated: "刚刚", updatedAt: Date.now() });
    }
    save();
  }
  function stats() {
    const n = items.length;
    const done = items.filter((i) => (i.percent || 0) > 0.99).length;
    return { total: n, finished: done, reading: n - done };
  }

  // js/views/library.js
  var VIEW_KEY = "fqapp-md3:shelf-view";
  var SORT_KEY = "fqapp-md3:shelf-sort";
  function LibraryView({ router: router2 }) {
    const root = el(`<div class="page tab-page"></div>`);
    let view = localStorage.getItem(VIEW_KEY) || "grid";
    let sort = localStorage.getItem(SORT_KEY) || "recent";
    const appBar2 = el(`<header class="app-bar">
      <div class="bar-row">
        <div class="brand"><div class="brand-title">书架</div></div>
        <button class="md-icon-btn" data-act="search">${icon("search", 22)}</button>
        <button class="md-icon-btn" data-act="more">${icon("more-vertical", 22)}</button>
      </div>
    </header>`);
    const scroll = el(`<div class="page-scroll"></div>`);
    const summary = el(`<div class="shelf-summary" style="padding:0 20px 8px"></div>`);
    const toolbar = el(`<div class="shelf-toolbar"></div>`);
    const host2 = el(`<div></div>`);
    scroll.append(summary, toolbar, host2);
    function sortItems(items2) {
      const arr = items2.slice();
      if (sort === "recent") arr.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
      else if (sort === "progress") arr.sort((a, b) => (b.percent || 0) - (a.percent || 0));
      else if (sort === "name") arr.sort((a, b) => {
        var _a, _b;
        return (((_a = book(a.id)) == null ? void 0 : _a.title) || "").localeCompare(((_b = book(b.id)) == null ? void 0 : _b.title) || "", "zh");
      });
      return arr;
    }
    function paint() {
      const items2 = sortItems(list());
      const st = stats();
      summary.innerHTML = `<div class="row" style="gap:16px">
        <div><span class="t-title-l">${st.total}</span> <span class="t-body-s on-surface-variant">本收藏</span></div>
        <div><span class="t-title-l">${st.reading}</span> <span class="t-body-s on-surface-variant">在读</span></div>
      </div>`;
      toolbar.replaceChildren();
      const gridBtn = el(`<button class="md-icon-btn ${view === "grid" ? "selected" : ""}" data-tip="网格">${icon("layout-grid", 20)}</button>`);
      const listBtn = el(`<button class="md-icon-btn ${view === "list" ? "selected" : ""}" data-tip="列表">${icon("list", 20)}</button>`);
      gridBtn.addEventListener("click", () => {
        view = "grid";
        localStorage.setItem(VIEW_KEY, view);
        paint();
      });
      listBtn.addEventListener("click", () => {
        view = "list";
        localStorage.setItem(VIEW_KEY, view);
        paint();
      });
      const sortBtn = el(`<button class="md-chip">${icon("arrow-down-up", 14)}${sort === "recent" ? "最近阅读" : sort === "progress" ? "阅读进度" : "书名"}</button>`);
      sortBtn.addEventListener("click", () => {
        sort = sort === "recent" ? "progress" : sort === "progress" ? "name" : "recent";
        localStorage.setItem(SORT_KEY, sort);
        paint();
      });
      toolbar.append(gridBtn, listBtn, el(`<div class="grow"></div>`), sortBtn);
      if (!items2.length) {
        host2.replaceChildren(el(`<div class="empty-state">
          ${icon("library-big", 44)}
          <div class="t-title-m">书架还是空的</div>
          <div class="t-body-m on-surface-variant" style="max-width:260px">在详情页点「加入书架」，书就会出现在这里，阅读进度会自动记住。</div>
          <button class="md-btn tonal" style="margin-top:12px">去发现好书</button>
        </div>`));
        host2.querySelector("button").addEventListener("click", () => router2.switchTab("home"));
        return;
      }
      if (view === "grid") {
        const grid = el(`<div class="shelf-grid"></div>`);
        items2.forEach((it, i) => {
          var _a, _b;
          const b = book(it.id);
          if (!b) return;
          const card = el(`<div class="shelf-item reveal">
            <div class="cover">
              <img src="${esc(b.cover)}" alt="${esc(b.title)}" loading="lazy">
              <span class="progress-tag">${Math.round((it.percent || 0) * 100)}%</span>
            </div>
            <div class="t clamp-2">${esc(b.title)}</div>
            <div class="s">${esc(((_b = (_a = b.toc) == null ? void 0 : _a[it.chapter]) == null ? void 0 : _b.t) || `${it.chapter + 1} 章`)}</div>
          </div>`);
          card.addEventListener("click", () => router2.push("reader", { id: b.id, chapter: it.chapter || 0 }));
          card.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            manage(b, it);
          });
          setTimeout(() => card.classList.add("in"), i * 22);
          grid.appendChild(card);
        });
        host2.replaceChildren(grid);
      } else {
        const list2 = el(`<div class="shelf-list"></div>`);
        items2.forEach((it) => {
          var _a, _b;
          const b = book(it.id);
          if (!b) return;
          const row2 = el(`<div class="shelf-row">
            <div class="cover"><img src="${esc(b.cover)}" alt=""></div>
            <div class="meta">
              <div class="t-title-s ellipsis">${esc(b.title)}</div>
              <div class="t-body-s on-surface-variant ellipsis" style="margin-top:2px">${esc(b.author)} · ${esc(((_b = (_a = b.toc) == null ? void 0 : _a[it.chapter]) == null ? void 0 : _b.t) || "")}</div>
              <div class="md-progress" style="margin-top:8px"><i style="width:${Math.round((it.percent || 0) * 100)}%"></i></div>
            </div>
            <button class="md-icon-btn" data-tip="更多">${icon("more-vertical", 20)}</button>
          </div>`);
          row2.addEventListener("click", (e) => {
            if (e.target.closest("button")) return;
            router2.push("reader", { id: b.id, chapter: it.chapter || 0 });
          });
          row2.querySelector("button").addEventListener("click", () => manage(b, it));
          list2.appendChild(row2);
        });
        host2.replaceChildren(list2);
      }
    }
    function manage(b, it) {
      Promise.resolve().then(() => (init_ui(), ui_exports)).then(({ openSheet: openSheet2, confirmDialog: confirmDialog2 }) => {
        var _a, _b;
        const hostEl = el(`<div style="margin:-8px 0">
          <div class="md-list-item"><span class="lead">${icon("book-open", 22)}</span>
            <span class="body"><span class="label">继续阅读</span><span class="support">${esc(((_b = (_a = b.toc) == null ? void 0 : _a[it.chapter]) == null ? void 0 : _b.t) || "")}</span></span></div>
          <div class="md-list-item"><span class="lead">${icon("list", 22)}</span>
            <span class="body"><span class="label">查看目录</span></span></div>
          <div class="md-list-item"><span class="lead">${icon("trash-2", 22)}</span>
            <span class="body"><span class="label">移出书架</span></span></div>
        </div>`);
        const rows = hostEl.querySelectorAll(".md-list-item");
        rows[0].addEventListener("click", () => {
          sheet.close();
          router2.push("reader", { id: b.id, chapter: it.chapter || 0 });
        });
        rows[1].addEventListener("click", () => {
          sheet.close();
          router2.push("detail", { id: b.id });
        });
        rows[2].addEventListener("click", async () => {
          sheet.close();
          const ok = await confirmDialog2({ title: "移出书架？", message: `《${b.title}》的阅读进度会一并清除。`, confirm: "移出", danger: true });
          if (ok) {
            toggle(b.id);
            paint();
            snackbar("已移出书架");
          }
        });
        const sheet = openSheet2({ title: b.title, subtitle: `${esc(b.author)} · 已读 ${Math.round((it.percent || 0) * 100)}%`, content: hostEl });
      });
    }
    appBar2.querySelector('[data-act="search"]').addEventListener("click", () => router2.push("search", {}));
    appBar2.querySelector('[data-act="more"]').addEventListener("click", () => {
      Promise.resolve().then(() => (init_ui(), ui_exports)).then(({ openSheet: openSheet2, confirmDialog: confirmDialog2 }) => {
        const hostEl = el(`<div style="margin:-8px 0">
          <div class="md-list-item"><span class="lead">${icon("history", 22)}</span><span class="body"><span class="label">阅读历史</span></span></div>
          <div class="md-list-item"><span class="lead">${icon("download", 22)}</span><span class="body"><span class="label">离线缓存</span></span></div>
          <div class="md-list-item"><span class="lead">${icon("folder-down", 22)}</span><span class="body"><span class="label">备份书架</span></span></div>
        </div>`);
        const rows = hostEl.querySelectorAll(".md-list-item");
        rows[0].addEventListener("click", () => {
          sheet.close();
          router2.push("history", {});
        });
        rows[1].addEventListener("click", () => {
          sheet.close();
          snackbar("缓存管理：已用 42.6 MB");
        });
        rows[2].addEventListener("click", () => {
          sheet.close();
          snackbar("已导出书架备份（JSON）");
        });
        const sheet = openSheet2({ title: "书架操作", content: hostEl });
      });
    });
    scroll.addEventListener("scroll", () => {
      appBar2.classList.toggle("scrolled", scroll.scrollTop > 4);
    }, { passive: true });
    paint();
    root.append(appBar2, scroll, navBar(router2, "library"));
    return {
      el: root,
      onResume() {
        paint();
      }
    };
  }

  // js/views/mine.js
  init_ui();
  init_icons();
  function MineView({ router: router2 }) {
    const root = el(`<div class="page tab-page"></div>`);
    const appBar2 = el(`<header class="app-bar">
      <div class="bar-row">
        <div class="brand"><div class="brand-title">我的</div></div>
        <button class="md-icon-btn" data-act="settings">${icon("settings", 22)}</button>
      </div>
    </header>`);
    const scroll = el(`<div class="page-scroll"></div>`);
    const content = el(`<div></div>`);
    scroll.appendChild(content);
    root.append(appBar2, scroll, navBar(router2, "mine"));
    function paint() {
      const st = stats();
      const last = list()[0];
      const lastBook = last ? book(last.id) : null;
      content.replaceChildren();
      const profile = el(`<div class="profile-card">
        <div class="row" style="gap:14px">
          <div class="avatar">读</div>
          <div class="grow" style="min-width:0">
            <div class="t-title-l" style="font-weight:600">本地读者</div>
            <div class="t-body-s" style="opacity:.78;margin-top:2px">未登录 · 数据仅存本机</div>
          </div>
          <button class="md-icon-btn" style="color:inherit">${icon("square-pen", 20)}</button>
        </div>
        <div class="stats-row">
          <div class="stat"><b>${st.total}</b><span>收藏</span></div>
          <div class="stat"><b>${st.finished}</b><span>读完</span></div>
          <div class="stat"><b>${(2.4 * st.total + list().reduce((a, x) => a + (x.percent || 0), 0) * 6).toFixed(0)}h</b><span>阅读时长</span></div>
        </div>
      </div>`);
      content.appendChild(profile);
      if (lastBook) {
        const cont = el(`<div class="mine-continue">
          <div class="row" style="gap:12px;padding:14px 16px">
            <div class="cover" style="width:44px;height:58px;border-radius:8px;overflow:hidden">
              <img src="${esc(lastBook.cover)}" alt="" style="width:100%;height:100%;object-fit:cover">
            </div>
            <div class="grow" style="min-width:0">
              <div class="t-body-s on-surface-variant">接着看</div>
              <div class="t-title-s ellipsis">${esc(lastBook.title)}</div>
              <div class="md-progress" style="margin-top:6px"><i style="width:${Math.round((last.percent || 0) * 100)}%"></i></div>
            </div>
            <button class="md-btn filled">继续</button>
          </div>
        </div>`);
        cont.querySelector("button").addEventListener("click", () => router2.push("reader", { id: lastBook.id, chapter: last.chapter || 0 }));
        content.appendChild(cont);
      }
      const groups = [
        {
          title: "内容",
          items: [
            { i: "history", l: "阅读历史", s: "最近读过的作品与进度", go: () => router2.push("history", {}) },
            { i: "download", l: "离线缓存", s: "已用 42.6 MB · 6 本", go: () => snackbar("缓存管理") },
            { i: "message-circle", l: "我的书评", s: "写过的段评与书评", go: () => snackbar("还没有写过书评") },
            { i: "bookmark", l: "书单收藏", s: "自己整理的主题书单", go: () => snackbar("书单功能演示") }
          ]
        },
        {
          title: "偏好",
          items: [
            { i: "palette", l: "外观与主题", s: "动态取色、深浅模式、圆角", go: () => router2.push("settings-section", { key: "appearance" }) },
            { i: "type", l: "阅读设置", s: "字体、字号、行距、翻页", go: () => router2.push("settings-section", { key: "reading" }) },
            { i: "headphones", l: "听书设置", s: "音色、语速、定时关闭", go: () => router2.push("settings-section", { key: "audio" }) },
            { i: "sliders-horizontal", l: "全部设置", s: "短剧、数据、关于", go: () => router2.push("settings", {}) }
          ]
        }
      ];
      groups.forEach((g) => {
        const block = el(`<div class="mine-group"><div class="group-title">${esc(g.title)}</div></div>`);
        g.items.forEach((it, idx) => {
          const row2 = el(`<div class="md-list-item two-line" style="border-radius:16px">
            <span class="lead">${icon(it.i, 22)}</span>
            <span class="body"><span class="label">${esc(it.l)}</span><span class="support">${esc(it.s)}</span></span>
            <span class="trail">${icon("chevron-right", 18)}</span>
          </div>`);
          row2.addEventListener("click", it.go);
          block.appendChild(row2);
        });
        content.appendChild(block);
      });
      const themeBlock = el(`<div class="mine-group"><div class="group-title">快速切换</div>
        <div style="padding:4px 8px 8px"><div id="quick-theme"></div></div></div>`);
      content.appendChild(themeBlock);
      Promise.resolve().then(() => (init_ui(), ui_exports)).then(({ makeSegmented: makeSegmented2 }) => {
        const seg = makeSegmented2([
          { value: "light", label: "浅色" },
          { value: "dark", label: "深色" },
          { value: "system", label: "跟随系统" }
        ], get("themeMode") === "eink" ? "system" : get("themeMode"), (v) => {
          set({ themeMode: v });
          snackbar(`外观：${{ light: "浅色", dark: "深色", system: "跟随系统" }[v]}`);
        });
        themeBlock.querySelector("#quick-theme").appendChild(seg);
      });
      content.appendChild(el(`<div class="bottom-spacer"></div>`));
      content.appendChild(el(`<div style="text-align:center;padding:8px 0 24px;color:var(--md-sys-color-on-surface-variant);font-size:11px">
        什锦铺 · MD3 Web 版 · 内容来自公开接口
      </div>`));
    }
    appBar2.querySelector('[data-act="settings"]').addEventListener("click", () => router2.push("settings", {}));
    scroll.addEventListener("scroll", () => appBar2.classList.toggle("scrolled", scroll.scrollTop > 4), { passive: true });
    paint();
    const unsub = subscribe(() => paint());
    return {
      el: root,
      onResume() {
        paint();
      },
      onExit() {
        unsub == null ? void 0 : unsub();
      }
    };
  }

  // js/views/detail.js
  init_ui();
  init_icons();
  function factChip(text) {
    return `<span class="md-chip sm">${esc(text)}</span>`;
  }
  function DetailView({ router: router2, params }) {
    var _a;
    const b = book(params.id);
    const root = el(`<div class="page detail-page"></div>`);
    if (!b) {
      root.appendChild(el(`<div class="empty-state">${icon("search-x", 40)}<div class="t-title-m">找不到这本书</div></div>`));
      return { el: root };
    }
    setDynamicSeed(null);
    const toc = b.toc || [];
    const hasToc = toc.length > 0;
    const inShelf = has(b.id);
    const saved = entry(b.id);
    const appBar2 = el(`<header class="app-bar over-hero">
      <div class="bar-row">
        <button class="md-icon-btn" data-act="back" aria-label="返回">${icon("arrow-left", 24)}</button>
        <div class="bar-title ellipsis">${esc(b.title)}</div>
        <button class="md-icon-btn" data-act="shelf" aria-label="收藏">${icon(inShelf ? "bookmark-check" : "bookmark", 22)}</button>
        <button class="md-icon-btn" data-act="more" aria-label="更多">${icon("more-vertical", 22)}</button>
      </div>
    </header>`);
    const hero = el(`<div class="detail-hero">
      <div class="ambient" style="background-image:url('${esc(b.cover)}')"></div>
      <div class="hero-inner">
        <div class="cover-wrap"><img src="${esc(b.cover)}" alt="${esc(b.title)}"></div>
        <div class="head">
          <h1>${esc(b.title)}</h1>
          <div class="author">${icon("square-pen", 13)} ${esc(b.author || "佚名")}</div>
          <div class="facts">
            ${b.score ? factChip(`${b.score} 分`) : ""}
            ${b.category ? factChip(b.category) : ""}
            ${b.serialCount ? factChip(`${b.serialCount} 章`) : ""}
            ${b.wordNumber ? factChip(fmtWords(b.wordNumber)) : ""}
            ${b.creationStatus === 0 || b.creationStatus === "0" ? factChip("已完结") : factChip("连载中")}
          </div>
        </div>
      </div>
    </div>`);
    const actions = el(`<div class="detail-actions">
      <button class="md-btn outlined with-icon" data-act="shelf-btn">
        ${icon(inShelf ? "bookmark-check" : "bookmark-plus", 18)}<span>${inShelf ? "已在书架" : "加入书架"}</span>
      </button>
      <button class="md-btn filled with-icon" data-act="read">${icon("book-open", 18)}<span>${saved ? "继续阅读" : "立即阅读"}</span></button>
      <button class="md-icon-btn tonal" data-act="listen" aria-label="听书" style="width:48px;height:48px">${icon("headphones", 22)}</button>
    </div>`);
    const tabsHost = el(`<div class="detail-tabs"></div>`);
    const seg = el(`<div class="md-segmented" role="tablist">
      <button class="selected" data-seg="intro" role="tab" aria-selected="true"><span class="check">${icon("check", 18)}</span><span>简介</span></button>
      <button data-seg="toc" role="tab" aria-selected="false"><span class="check">${icon("check", 18)}</span><span>目录</span></button>
      <button data-seg="reviews" role="tab" aria-selected="false"><span class="check">${icon("check", 18)}</span><span>书评</span></button>
    </div>`);
    tabsHost.appendChild(seg);
    const body = el(`<div class="detail-body"></div>`);
    const scroll = el(`<div class="page-scroll"></div>`);
    scroll.append(hero, actions, tabsHost, body);
    const bottomBar = el(`<div class="detail-bottom-bar">
      <div class="cover" style="width:40px;height:52px;border-radius:8px;overflow:hidden;flex:0 0 auto">
        <img src="${esc(b.cover)}" alt="" style="width:100%;height:100%;object-fit:cover">
      </div>
      <div class="meta">
        <div class="t ellipsis">${esc(saved ? "继续阅读" : "从头开始")}</div>
        <div class="s ellipsis">${esc(hasToc ? ((_a = toc[(saved == null ? void 0 : saved.chapter) || 0]) == null ? void 0 : _a.t) || "第 1 章" : "章节索引待加载")}</div>
      </div>
      <button class="md-btn filled with-icon" data-act="read-bottom">${icon("play", 18)}<span>阅读</span></button>
    </div>`);
    root.append(appBar2, scroll, bottomBar);
    bindAppBar(scroll, appBar2, { threshold: 120 });
    function renderIntro() {
      var _a2;
      const longText = (b.abstract || "暂无简介").trim();
      const frag2 = document.createDocumentFragment();
      frag2.appendChild(el(`<div class="detail-abstract clamped" id="abs">${esc(longText)}</div>`));
      const expandBtn = el(`<div class="expand-btn">展开全部 ${icon("chevron-down", 14)}</div>`);
      expandBtn.addEventListener("click", () => {
        const abs = body.querySelector("#abs");
        const on = abs.classList.toggle("clamped");
        expandBtn.innerHTML = on ? `展开全部 ${icon("chevron-down", 14)}` : `收起 ${icon("chevron-up", 14)}`;
      });
      frag2.appendChild(expandBtn);
      frag2.appendChild(el(`<div class="detail-meta-grid">
        <div><span>${esc(b.author || "佚名")}</span><small>作者</small></div>
        <div><span>${esc(b.category || "—")}</span><small>分类</small></div>
        <div><span>${esc(fmtWords(b.wordNumber) || "—")}</span><small>字数</small></div>
        <div><span>${b.serialCount || "—"}</span><small>章节</small></div>
      </div>`));
      if (hasToc) {
        frag2.appendChild(el(`<div class="section-head" style="padding:24px 0 6px">
          <h2>目录预览</h2>
          <span class="more" id="all-ch">全部 ${toc.length} 章 ${icon("chevron-right", 14)}</span>
        </div>`));
        const list2 = el(`<div class="chapter-list" style="margin:0 -12px"></div>`);
        toc.slice(0, 4).forEach((c, i) => {
          const row2 = el(`<div class="chapter-row">
            <span class="idx">${String(i + 1).padStart(2, "0")}</span>
            <span class="nm">${esc(c.t)}</span>
            <span class="w">${c.w ? Math.round(c.w / 100) / 10 + "k" : ""}</span>
          </div>`);
          row2.addEventListener("click", () => router2.push("reader", { id: b.id, chapter: i }));
          list2.appendChild(row2);
        });
        frag2.appendChild(list2);
        frag2.querySelector("#all-ch").addEventListener("click", () => {
          seg.querySelector('[data-seg="toc"]').click();
        });
      }
      frag2.appendChild(el(`<div class="section-head" style="padding:24px 0 8px">
        <h2>书友怎么说</h2>
        <span class="more" id="all-rv">全部书评 ${icon("chevron-right", 14)}</span>
      </div>`));
      frag2.appendChild(el(`<div class="review-quote">
        <div class="stars">${[1, 2, 3, 4, 5].map(() => icon("star", 12)).join("")}</div>
        <p>“节奏快、信息密度高，几乎每章都有钩子。” —— 夜航船</p>
        <p>“人物不脸谱化，配角也有自己的动机。” —— 三月的风</p>
      </div>`));
      frag2.appendChild(el(`<div class="section-head" style="padding:24px 0 8px"><h2>同类好文</h2></div>`));
      const rail2 = el(`<div class="rail" style="padding-left:0;padding-right:0"></div>`);
      const pool = allBooks().filter((x) => x.id !== b.id && x.cover).slice(0, 10);
      pool.forEach((x) => {
        const t = el(`<div class="book-tile" style="width:96px">
          <div class="cover" style="width:96px;height:128px">
            <img src="${esc(x.cover)}" alt="" loading="lazy">
          </div>
          <div class="t">${esc(x.title)}</div>
        </div>`);
        t.addEventListener("click", () => router2.push("detail", { id: x.id }));
        rail2.appendChild(t);
      });
      frag2.appendChild(rail2);
      body.replaceChildren(frag2);
      (_a2 = frag2.querySelector("#all-rv")) == null ? void 0 : _a2.addEventListener("click", () => {
        seg.querySelector('[data-seg="reviews"]').click();
      });
    }
    function renderToc() {
      if (!hasToc) {
        body.replaceChildren(
          el(`<div class="empty-state">
            ${icon("wifi-off", 36)}
            <div class="t-title-m">章节索引未缓存</div>
            <div class="t-body-m on-surface-variant" style="max-width:280px">
              这本书的目录需要联网获取。应用内打开时会自动拉取，离线状态下仅已缓存的书目可读。
            </div>
          </div>`)
        );
        return;
      }
      const list2 = el(`<div class="chapter-list"></div>`);
      toc.slice(0, 30).forEach((c, i) => {
        const row2 = el(`<div class="chapter-row ${saved && saved.chapter === i ? "current" : ""}" role="button" tabindex="0">
          <span class="idx">${String(i + 1).padStart(2, "0")}</span>
          <span class="nm">${esc(c.t)}</span>
          <span class="w">${c.w ? Math.round(c.w / 100) / 10 + "k" : ""}</span>
        </div>`);
        row2.addEventListener("click", () => router2.push("reader", { id: b.id, chapter: i }));
        list2.appendChild(row2);
      });
      body.replaceChildren(list2);
      if (toc.length > 30) {
        const more = el(`<button class="md-btn text block" style="margin-top:8px">查看全部 ${toc.length} 章</button>`);
        more.addEventListener("click", () => openSheet({
          title: "全部章节",
          subtitle: `${toc.length} 章 · ${fmtWords(b.wordNumber) || ""}`,
          content: (() => {
            const host2 = el(`<div class="chapter-list"></div>`);
            toc.forEach((c, i) => {
              const row2 = el(`<div class="chapter-row" role="button" tabindex="0">
                <span class="idx">${String(i + 1).padStart(2, "0")}</span>
                <span class="nm">${esc(c.t)}</span>
              </div>`);
              row2.addEventListener("click", () => {
                router2.push("reader", { id: b.id, chapter: i });
              });
              host2.appendChild(row2);
            });
            return host2;
          })(),
          fullHeight: true
        }));
        body.appendChild(more);
      }
    }
    function renderReviews() {
      const reviews = [
        { n: "夜航船", s: 5, t: "节奏是真的快，作者很懂怎么卡点。看到关键处切一章，心里骂一句又点下一章。" },
        { n: "半糖少冰", s: 4, t: "设定挺有意思，前期铺得扎实，中段稍微有点拖，但整体值得追。" },
        { n: "三月的风", s: 5, t: "人物不脸谱化，配角都有自己的动机，这点很难得。" }
      ];
      const host2 = el(`<div></div>`);
      host2.appendChild(el(`<div class="spread" style="padding:4px 0 12px">
        <div class="row" style="gap:8px">
          <span class="t-display-s" style="font-weight:700">${esc(b.score || "9.2")}</span>
          <div>
            <div class="row stars" style="gap:2px;color:var(--md-sys-color-primary)">
              ${[1, 2, 3, 4, 5].map((i) => icon("star", 14)).join("")}
            </div>
            <div class="t-body-s on-surface-variant">共 ${(1200 + b.shelf % 900).toLocaleString()} 条书评</div>
          </div>
        </div>
        <button class="md-btn tonal">写书评</button>
      </div>`));
      reviews.forEach((r) => {
        host2.appendChild(el(`<div class="review-card">
          <div class="row" style="gap:10px;margin-bottom:8px">
            <div class="avatar-sm">${esc(r.n[0])}</div>
            <div>
              <div class="t-title-s">${esc(r.n)}</div>
              <div class="row stars" style="gap:1px;color:var(--md-sys-color-primary)">
                ${Array.from({ length: r.s }).map(() => icon("star", 11)).join("")}
              </div>
            </div>
          </div>
          <div class="t-body-m" style="line-height:22px;color:var(--md-sys-color-on-surface-variant)">${esc(r.t)}</div>
        </div>`));
      });
      body.replaceChildren(host2);
    }
    let segKey = "intro";
    function paint() {
      body.classList.remove("anim-in");
      void body.offsetWidth;
      body.classList.add("anim-in");
      if (segKey === "intro") renderIntro();
      else if (segKey === "toc") renderToc();
      else renderReviews();
    }
    paint();
    seg.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-seg]");
      if (!btn || btn.dataset.seg === segKey) return;
      segKey = btn.dataset.seg;
      seg.querySelectorAll("button").forEach((x) => {
        x.classList.toggle("selected", x === btn);
        x.setAttribute("aria-selected", String(x === btn));
      });
      paint();
    });
    appBar2.querySelector('[data-act="back"]').addEventListener("click", () => router2.pop());
    const toggleShelf = () => {
      const now = toggle(b.id);
      appBar2.querySelector('[data-act="shelf"]').innerHTML = icon(now ? "bookmark-check" : "bookmark", 22);
      actions.querySelector('[data-act="shelf-btn"]').innerHTML = `${icon(now ? "bookmark-check" : "bookmark-plus", 18)}<span>${now ? "已在书架" : "加入书架"}</span>`;
      snackbar(now ? "已加入书架" : "已从书架移除", now ? "查看" : null, () => router2.switchTab("library"));
    };
    appBar2.querySelector('[data-act="shelf"]').addEventListener("click", toggleShelf);
    actions.querySelector('[data-act="shelf-btn"]').addEventListener("click", toggleShelf);
    const startReading = () => {
      if (!hasToc) {
        snackbar("这本书的目录尚未缓存，联网后可读");
        return;
      }
      router2.push("reader", { id: b.id, chapter: (saved == null ? void 0 : saved.chapter) || 0 });
    };
    actions.querySelector('[data-act="read"]').addEventListener("click", startReading);
    bottomBar.querySelector('[data-act="read-bottom"]').addEventListener("click", startReading);
    actions.querySelector('[data-act="listen"]').addEventListener("click", () => router2.push("audio", { id: b.id }));
    appBar2.querySelector('[data-act="more"]').addEventListener("click", () => {
      const host2 = el(`<div></div>`);
      const rows = [
        { i: "share-2", t: "分享这本书" },
        { i: "download", t: "缓存到本地" },
        { i: "bell", t: "更新提醒" },
        { i: "ban", t: "不感兴趣" }
      ];
      rows.forEach((r) => {
        const row2 = el(`<div class="md-list-item"><span class="lead">${icon(r.i, 22)}</span>
          <span class="body"><span class="label">${esc(r.t)}</span></span></div>`);
        row2.addEventListener("click", () => {
          snackbar(`${r.t}：已记录`);
          sheet.close();
        });
        host2.appendChild(row2);
      });
      const sheet = openSheet({ title: b.title, subtitle: b.author, content: host2 });
    });
    scroll.addEventListener("scroll", () => {
      bottomBar.classList.toggle("show", scroll.scrollTop > 220);
    }, { passive: true });
    const from = params.from;
    const coverEl = hero.querySelector(".cover-wrap");
    if (from && from.width > 0) {
      const target = coverEl.getBoundingClientRect();
      const img = coverEl.querySelector("img");
      const ghost = el(`<div style="position:fixed;left:${from.left}px;top:${from.top}px;width:${from.width}px;height:${from.height}px;
        border-radius:10px;overflow:hidden;z-index:90;pointer-events:none;box-shadow:0 8px 24px rgba(0,0,0,.28)">
        <img src="${esc(b.cover)}" style="width:100%;height:100%;object-fit:cover">
      </div>`);
      document.getElementById("overlay-root").appendChild(ghost);
      if (img) img.style.opacity = "0";
      const t0 = performance.now();
      const dur = 420;
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      const step = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        const e = ease(p);
        const left = from.left + (target.left - from.left) * e;
        const top = from.top + (target.top - from.top) * e;
        const w = from.width + (target.width - from.width) * e;
        const h = from.height + (target.height - from.height) * e;
        ghost.style.cssText = `position:fixed;left:${left}px;top:${top}px;width:${w}px;height:${h}px;
        border-radius:${10 + (16 - 10) * e}px;overflow:hidden;z-index:90;pointer-events:none;
        box-shadow:0 ${8 + 12 * e}px ${24 + 20 * e}px rgba(0,0,0,${0.28 - 0.1 * e})`;
        if (p < 1) requestAnimationFrame(step);
        else {
          if (img) img.style.opacity = "";
          ghost.remove();
        }
      };
      requestAnimationFrame(step);
    }
    let coverSeed = null;
    const probe = new Image();
    probe.crossOrigin = "anonymous";
    probe.src = b.cover;
    probe.onload = () => {
      Promise.resolve().then(() => (init_color(), color_exports)).then(({ extractSeed: extractSeed2 }) => {
        const seed2 = extractSeed2(probe);
        if (seed2) {
          coverSeed = seed2;
          setDynamicSeed(seed2);
        }
      });
    };
    return {
      el: root,
      onResume() {
        if (coverSeed) setDynamicSeed(coverSeed);
      },
      onExit() {
        clearDynamicSeed();
      }
    };
  }

  // js/views/reader.js
  init_ui();
  init_icons();
  var CHAPTER_CACHE = /* @__PURE__ */ new Map();
  var PENDING = /* @__PURE__ */ new Map();
  function loadChunk(bookId) {
    if (window.__CH && window.__CH[bookId]) return Promise.resolve(window.__CH[bookId]);
    if (PENDING.has(bookId)) return PENDING.get(bookId);
    const p = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = `assets/data/ch-${bookId}.js`;
      s.async = true;
      s.onload = () => {
        if (window.__CH && window.__CH[bookId]) resolve(window.__CH[bookId]);
        else reject(new Error("no-text"));
      };
      s.onerror = () => reject(new Error("no-text"));
      document.head.appendChild(s);
    });
    PENDING.set(bookId, p);
    return p;
  }
  async function loadAll(bookId) {
    if (CHAPTER_CACHE.has(bookId)) return CHAPTER_CACHE.get(bookId);
    const all = await loadChunk(bookId);
    CHAPTER_CACHE.set(bookId, all);
    return all;
  }
  async function loadChapter(bookId, itemId) {
    const all = await loadAll(bookId);
    return all[itemId] || null;
  }
  function ReaderView({ router: router2, params }) {
    var _a;
    const b = book(params.id);
    const root = el(`<div class="page reader-page" data-rtheme="${esc(get("readerTheme"))}"></div>`);
    if (!b) {
      root.appendChild(el(`<div class="empty-state">${icon("ban", 36)}<div class="t-title-m">书不存在</div></div>`));
      return { el: root };
    }
    clearDynamicSeed();
    const toc = b.toc || [];
    let chapterIndex = Math.max(0, Math.min(toc.length - 1, params.chapter || 0));
    let pages = [];
    let pageIndex = 0;
    let mode = get("flipMode");
    let chrome = false;
    const top = el(`<div class="reader-top">
      <div class="bar">
        <button class="md-icon-btn" data-act="back">${icon("arrow-left", 22)}</button>
        <div class="grow" style="min-width:0">
          <div class="title ellipsis" id="r-title"></div>
          <div class="sub ellipsis" id="r-sub"></div>
        </div>
        <button class="md-icon-btn" data-act="shelf">${icon(has(b.id) ? "bookmark-check" : "bookmark", 22)}</button>
        <button class="md-icon-btn" data-act="more">${icon("more-vertical", 22)}</button>
      </div>
    </div>`);
    const bottom = el(`<div class="reader-bottom">
      <div class="progress-row">
        <span id="r-pos">0%</span>
        <div class="grow"><div class="md-progress"><i id="r-bar" style="width:0%"></i></div></div>
        <span id="r-pages"></span>
      </div>
      <div class="tools">
        <div class="reader-tool" data-act="toc">${icon("list", 22)}<span>目录</span></div>
        <div class="reader-tool" data-act="prev">${icon("chevron-left", 22)}<span>上一章</span></div>
        <div class="reader-tool" data-act="next">${icon("chevron-right", 22)}<span>下一章</span></div>
        <div class="reader-tool" data-act="settings">${icon("type", 22)}<span>排版</span></div>
      </div>
    </div>`);
    const stage = el(`<div class="reader-body"><div class="stage-inner" style="height:100%"></div></div>`);
    root.append(stage, top, bottom);
    let pageEls = [];
    let pagesHost = null;
    function clearStage() {
      stage.replaceChildren();
      pagesHost = null;
      pageEls = [];
    }
    function pageWidth() {
      return stage.clientWidth || 390;
    }
    function renderChapter(title, paras) {
      clearStage();
      if (mode === "scroll") {
        root.classList.add("reader-scroll-mode");
        const wrap = el(`<div class="reader-content"></div>`);
        if (title) wrap.appendChild(el(`<h2 class="reader-chapter-head">${esc(title)}</h2>`));
        paras.forEach((p, i) => {
          wrap.appendChild(el(`<p class="${i === 0 ? "first" : ""}">${esc(p)}</p>`));
        });
        stage.appendChild(wrap);
        pages = [0];
        pageIndex = 0;
        attachScrollProgress(wrap);
        updateProgress();
        return;
      }
      root.classList.remove("reader-scroll-mode");
      const viewport = el(`<div class="reader-viewport"></div>`);
      const flow = el(`<div class="reader-flow"></div>`);
      const w = pageWidth();
      flow.style.height = "100%";
      flow.style.columnWidth = `${w}px`;
      flow.style.columnGap = "0px";
      flow.style.padding = "56px 0 40px";
      flow.style.width = `${w}px`;
      flow.style.columnFill = "auto";
      if (title) flow.appendChild(el(`<h2 class="reader-chapter-head">${esc(title)}</h2>`));
      paras.forEach((p, i) => {
        flow.appendChild(el(`<p class="${i === 0 ? "first" : ""}">${esc(p)}</p>`));
      });
      viewport.appendChild(flow);
      stage.appendChild(viewport);
      pagesHost = viewport;
      pageEls = [];
      pageIndex = 0;
      requestAnimationFrame(() => {
        const total = Math.max(1, Math.round(flow.scrollWidth / w));
        pages = new Array(total).fill(0);
        pageEls = new Array(total).fill(flow);
        viewport.addEventListener("scroll", () => {
          const i = Math.round(viewport.scrollLeft / w);
          if (i !== pageIndex) {
            pageIndex = i;
            updateProgress();
          }
        }, { passive: true });
        updateProgress();
      });
    }
    let scrollHandler = null;
    function attachScrollProgress(scroller) {
      if (scrollHandler) scroller.removeEventListener("scroll", scrollHandler);
      scrollHandler = () => {
        const max = scroller.scrollHeight - scroller.clientHeight;
        const p = max > 0 ? scroller.scrollTop / max : 1;
        updateProgress(p);
      };
      scroller.addEventListener("scroll", scrollHandler, { passive: true });
      scrollHandler();
    }
    async function openChapter(i, { animate: animate2 = true } = {}) {
      if (i < 0) {
        snackbar("已经是第一章了");
        return;
      }
      if (i >= toc.length) {
        snackbar("已经是最后一章了");
        return;
      }
      chapterIndex = i;
      const item = toc[i];
      clearStage();
      stage.appendChild(el(`<div class="reader-loading" style="padding:80px 24px">
        <div class="sk-line" style="width:70%;height:22px"></div>
        <div class="sk-line" style="width:92%"></div>
        <div class="sk-line" style="width:88%"></div>
        <div class="sk-line" style="width:95%"></div>
        <div class="sk-line" style="width:60%"></div>
      </div>`));
      try {
        const data = await loadChapter(b.id, item.i);
        if (!data) throw new Error("missing");
        top.querySelector("#r-title").textContent = item.t;
        top.querySelector("#r-sub").textContent = `${b.title} · 第 ${i + 1}/${toc.length} 章`;
        renderChapter(data.title || item.t, data.paras);
        progress(b.id, i, i / Math.max(1, toc.length));
        if (animate2) {
          stage.classList.remove("anim-in");
          void stage.offsetWidth;
          stage.classList.add("anim-in");
        }
      } catch (e) {
        clearStage();
        stage.appendChild(el(`<div class="empty-state" style="padding-top:120px">
          ${icon("wifi-off", 40)}
          <div class="t-title-m">这一章还没有缓存</div>
          <div class="t-body-m on-surface-variant" style="max-width:300px">
            《${esc(b.title)}》的正文需要联网拉取。演示版内置了《重生2006》《爆红从报警开始》两本全文，可以在书架里打开。
          </div>
        </div>`));
        const btns = el(`<div class="row" style="justify-content:center;margin-top:16px;gap:8px">
          <button class="md-btn tonal">返回详情</button>
        </div>`);
        btns.querySelector("button").addEventListener("click", () => router2.pop());
        stage.querySelector(".empty-state").after(btns);
      }
    }
    function turnPage(dir) {
      if (mode === "scroll") {
        const sc = stage.querySelector(".reader-content");
        if (!sc) return;
        sc.scrollBy({ top: dir * (sc.clientHeight * 0.86), behavior: "smooth" });
        return;
      }
      const next = pageIndex + dir;
      if (next < 0) {
        openChapter(chapterIndex - 1).then(() => goToPage(pages.length - 1));
        return;
      }
      if (next >= pages.length) {
        openChapter(chapterIndex + 1);
        return;
      }
      goToPage(next);
    }
    function goToPage(i) {
      if (!pagesHost) return;
      pageIndex = i;
      pagesHost.scrollTo({ left: i * pageWidth(), behavior: "smooth" });
      updateProgress();
    }
    function updateProgress(explicit) {
      const bar = bottom.querySelector("#r-bar");
      const pos = bottom.querySelector("#r-pos");
      const pi = bottom.querySelector("#r-pages");
      if (!bar) return;
      if (mode === "scroll") {
        const sc = stage.querySelector(".reader-content");
        const max = sc ? sc.scrollHeight - sc.clientHeight : 0;
        const local = max > 0 ? sc.scrollTop / max : 1;
        const total = (chapterIndex + local) / Math.max(1, toc.length);
        bar.style.width = `${Math.round(total * 100)}%`;
        pos.textContent = `${Math.round(total * 100)}%`;
        pi.textContent = `第 ${chapterIndex + 1}/${toc.length} 章`;
        progress(b.id, chapterIndex, total);
      } else {
        const local = pages.length > 1 ? pageIndex / (pages.length - 1) : 1;
        const total = (chapterIndex + local) / Math.max(1, toc.length);
        bar.style.width = `${Math.round(total * 100)}%`;
        pos.textContent = `${Math.round(total * 100)}%`;
        pi.textContent = `${pageIndex + 1}/${pages.length} 页`;
        progress(b.id, chapterIndex, total);
      }
    }
    function setChrome(on) {
      chrome = on;
      root.classList.toggle("chrome", on);
    }
    let tapTimer = null;
    stage.addEventListener("click", (e) => {
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const w = rect.width;
      if (chrome) {
        if (x > w * 0.25 && x < w * 0.75) {
          setChrome(false);
          return;
        }
      }
      if (!get("tapTurn")) {
        setChrome(!chrome);
        return;
      }
      if (x < w * 0.3) {
        turnPage(-1);
        return;
      }
      if (x > w * 0.7) {
        turnPage(1);
        return;
      }
      setChrome(!chrome);
    });
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        turnPage(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        turnPage(-1);
      } else if (e.key === "Escape") {
        router2.pop();
      } else if (e.key === "ArrowDown") {
        turnPage(1);
      } else if (e.key === "ArrowUp") {
        turnPage(-1);
      }
    };
    document.addEventListener("keydown", onKey);
    stage.addEventListener("wheel", (e) => {
      if (mode === "scroll") return;
      if (Math.abs(e.deltaY) < 12 && Math.abs(e.deltaX) < 12) return;
      e.preventDefault();
      if (Date.now() - (stage._lastWheel || 0) < 320) return;
      stage._lastWheel = Date.now();
      turnPage((e.deltaY || e.deltaX) > 0 ? 1 : -1);
    }, { passive: false });
    top.querySelector('[data-act="back"]').addEventListener("click", () => router2.pop());
    top.querySelector('[data-act="shelf"]').addEventListener("click", () => {
      const now = toggle(b.id);
      top.querySelector('[data-act="shelf"]').innerHTML = icon(now ? "bookmark-check" : "bookmark", 22);
      snackbar(now ? "已加入书架" : "已从书架移除");
    });
    top.querySelector('[data-act="more"]').addEventListener("click", () => {
      openSheet({
        title: "阅读选项",
        content: (() => {
          const host2 = el(`<div></div>`);
          [
            { i: "share-2", t: "分享当前章节" },
            { i: "download", t: "缓存本章" },
            { i: "message-circle", t: "查看段评" },
            { i: "bug", t: "反馈错别字" }
          ].forEach((r) => {
            const row2 = el(`<div class="md-list-item"><span class="lead">${icon(r.i, 22)}</span>
              <span class="body"><span class="label">${esc(r.t)}</span></span></div>`);
            row2.addEventListener("click", () => snackbar(`${r.t}：已记录`));
            host2.appendChild(row2);
          });
          return host2;
        })()
      });
    });
    bottom.querySelector('[data-act="prev"]').addEventListener("click", () => openChapter(chapterIndex - 1));
    bottom.querySelector('[data-act="next"]').addEventListener("click", () => openChapter(chapterIndex + 1));
    bottom.querySelector('[data-act="toc"]').addEventListener("click", openToc);
    bottom.querySelector('[data-act="settings"]').addEventListener("click", openSettings);
    function openToc() {
      const host2 = el(`<div class="chapter-list" style="margin:-8px 0"></div>`);
      toc.forEach((c, i) => {
        const row2 = el(`<div class="chapter-row ${i === chapterIndex ? "current" : ""}">
          <span class="idx">${String(i + 1).padStart(2, "0")}</span>
          <span class="nm">${esc(c.t)}</span>
        </div>`);
        row2.addEventListener("click", () => {
          sheet.close();
          openChapter(i);
        });
        host2.appendChild(row2);
      });
      const sheet = openSheet({ title: "目录", subtitle: `${toc.length} 章 · ${esc(b.title)}`, content: host2, fullHeight: true });
    }
    function openSettings() {
      const host2 = el(`<div></div>`);
      const add = (node) => host2.appendChild(node);
      const sizeRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">字号</span><span class="t-body-s on-surface-variant" id="v-size">${get("readerSize")} px</span></div>
      </div>`);
      sizeRow.appendChild(makeSlider({
        value: get("readerSize"),
        min: 15,
        max: 30,
        step: 1,
        format: (v) => `${v} px`,
        onChange: (v) => {
          sizeRow.querySelector("#v-size").textContent = `${v} px`;
          set({ readerSize: v }, { silent: false });
          rerender();
        }
      }));
      add(sizeRow);
      const lineRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">行距</span><span class="t-body-s on-surface-variant" id="v-line">${get("readerLine").toFixed(1)}</span></div>
      </div>`);
      lineRow.appendChild(makeSlider({
        value: get("readerLine") * 10,
        min: 13,
        max: 24,
        step: 1,
        format: (v) => (v / 10).toFixed(1),
        onChange: (v) => {
          lineRow.querySelector("#v-line").textContent = (v / 10).toFixed(1);
          set({ readerLine: v / 10 });
          rerender();
        }
      }));
      add(lineRow);
      const padRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">页边距</span><span class="t-body-s on-surface-variant" id="v-pad">${get("readerPad")} px</span></div>
      </div>`);
      padRow.appendChild(makeSlider({
        value: get("readerPad"),
        min: 12,
        max: 48,
        step: 2,
        format: (v) => `${v} px`,
        onChange: (v) => {
          padRow.querySelector("#v-pad").textContent = `${v} px`;
          set({ readerPad: v });
          rerender();
        }
      }));
      add(padRow);
      add(el(`<div class="setting-row column"><div class="head"><span class="t-title-s">字体</span></div>
      <div id="font-seg"></div></div>`));
      host2.querySelector("#font-seg").appendChild(makeSegmented([
        { value: "serif-cn", label: "宋体" },
        { value: "sans-cn", label: "黑体" },
        { value: "rounded", label: "圆体" }
      ], get("readerFont"), (v) => {
        set({ readerFont: v });
        rerender();
      }));
      const themes = [
        { v: "paper", c: "#fbf7f0", n: "米白" },
        { v: "sepia", c: "#f3e6cd", n: "羊皮" },
        { v: "green", c: "#e3ecdd", n: "护眼" },
        { v: "dark", c: "#14120f", n: "夜间" },
        { v: "oled", c: "#000000", n: "纯黑" }
      ];
      const themeRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">背景</span></div>
      <div class="row" style="gap:10px" id="theme-row"></div></div>`);
      themes.forEach((t) => {
        const dot = el(`<button class="seed-dot ${get("readerTheme") === t.v ? "on" : ""}" title="${esc(t.n)}"
          style="background:${t.c};border:1px solid var(--md-sys-color-outline-variant)"></button>`);
        dot.addEventListener("click", () => {
          themeRow.querySelectorAll(".seed-dot").forEach((d) => d.classList.remove("on"));
          dot.classList.add("on");
          set({ readerTheme: t.v });
          root.dataset.rtheme = t.v;
        });
        themeRow.querySelector("#theme-row").appendChild(dot);
      });
      add(themeRow);
      add(el(`<div class="setting-row column"><div class="head"><span class="t-title-s">翻页方式</span></div>
      <div id="flip-seg"></div></div>`));
      host2.querySelector("#flip-seg").appendChild(makeSegmented([
        { value: "page", label: "左右翻页" },
        { value: "scroll", label: "上下滚动" }
      ], mode, (v) => {
        mode = v;
        set({ flipMode: v });
        openChapter(chapterIndex, { animate: false });
      }));
      add(el(`<div class="setting-row column"><div class="head"><span class="t-title-s">翻页动画</span></div>
      <div id="anim-seg"></div></div>`));
      host2.querySelector("#anim-seg").appendChild(makeSegmented([
        { value: "slide", label: "平移" },
        { value: "fade", label: "淡入" },
        { value: "none", label: "无" }
      ], get("flipAnim"), (v) => {
        set({ flipAnim: v });
        if (pagesHost) pagesHost.className = `reader-pages anim-${v}`;
      }));
      const progRow = el(`<div class="setting-row clickable">
        <div class="body"><div class="l">显示阅读进度</div><div class="s">底部进度与百分比</div></div>
        <div class="trail" id="prog-sw"></div>
      </div>`);
      const tapRow = el(`<div class="setting-row clickable">
        <div class="body"><div class="l">点击两侧翻页</div><div class="s">关闭后点击两侧只呼出菜单</div></div>
        <div class="trail" id="tap-sw"></div>
      </div>`);
      add(progRow);
      add(tapRow);
      Promise.resolve().then(() => (init_ui(), ui_exports)).then(({ makeSwitch: makeSwitch2 }) => {
        progRow.querySelector("#prog-sw").appendChild(makeSwitch2(get("showReaderProgress"), (v) => {
          set({ showReaderProgress: v });
          bottom.querySelector(".progress-row").style.display = v ? "" : "none";
        }));
        tapRow.querySelector("#tap-sw").appendChild(makeSwitch2(get("tapTurn"), (v) => set({ tapTurn: v })));
      });
      bottom.querySelector(".progress-row").style.display = get("showReaderProgress") ? "" : "none";
      openSheet({ title: "排版", content: host2, fullHeight: true });
    }
    function rerender() {
      var _a2, _b;
      const data = (_b = CHAPTER_CACHE.get(b.id)) == null ? void 0 : _b[(_a2 = toc[chapterIndex]) == null ? void 0 : _a2.i];
      if (data) renderChapter(data.title || toc[chapterIndex].t, data.paras);
    }
    openChapter(chapterIndex, { animate: false });
    top.querySelector("#r-title").textContent = ((_a = toc[chapterIndex]) == null ? void 0 : _a.t) || b.title;
    return {
      el: root,
      onExit() {
        document.removeEventListener("keydown", onKey);
      }
    };
  }

  // js/views/search.js
  init_ui();
  init_icons();
  var HISTORY_KEY = "fqapp-md3:search-history:v1";
  function history2() {
    try {
      return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }
  function pushHistory(q) {
    const list2 = [q, ...history2().filter((x) => x !== q)].slice(0, 8);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list2));
  }
  function highlight(text, q) {
    if (!q) return esc(text);
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return esc(text);
    return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(text.slice(i + q.length));
  }
  function SearchView({ router: router2, params }) {
    const root = el(`<div class="page search-page"></div>`);
    const head = el(`<div class="search-head">
      <button class="md-icon-btn" data-act="back">${icon("arrow-left", 24)}</button>
      <div class="search-field">
        ${icon("search", 20)}
        <input type="search" placeholder="搜书名、作者、分类" autocomplete="off" enterkeyhint="search">
        <button class="md-icon-btn sm hidden" data-act="clear">${icon("x", 18)}</button>
      </div>
      <button class="md-btn text" data-act="cancel">取消</button>
    </div>`);
    const body = el(`<div class="page-scroll search-body"></div>`);
    root.append(head, body);
    const input = head.querySelector("input");
    const clearBtn = head.querySelector('[data-act="clear"]');
    function renderIdle() {
      const hs = history2();
      const hot = allBooks().slice(0, 8);
      body.replaceChildren();
      if (hs.length) {
        const block = el(`<div class="search-block"><h4>最近搜索</h4>
          <div class="row" style="flex-wrap:wrap;gap:8px" id="hist"></div></div>`);
        hs.forEach((h) => {
          const chip = el(`<button class="md-chip">${icon("history", 14)}${esc(h)}</button>`);
          chip.addEventListener("click", () => {
            input.value = h;
            run(h);
          });
          block.querySelector("#hist").appendChild(chip);
        });
        body.appendChild(block);
      }
      const hotBlock = el(`<div class="search-block"><h4>大家在搜</h4><div id="hot"></div></div>`);
      const list2 = hotBlock.querySelector("#hot");
      hot.forEach((b, i) => {
        const row2 = el(`<div class="result-row">
          <div class="num" style="width:20px;font-weight:700;color:${i < 3 ? "var(--md-sys-color-primary)" : "var(--md-sys-color-on-surface-variant)"}">${i + 1}</div>
          <div class="cover"><img src="${esc(b.cover)}" alt=""></div>
          <div class="meta">
            <div class="t ellipsis">${esc(b.title)}</div>
            <div class="a ellipsis">${esc(b.author)} · ${esc(b.category || "")}</div>
          </div>
          ${icon("chevron-right", 18)}
        </div>`);
        row2.addEventListener("click", () => router2.push("detail", { id: b.id }));
        list2.appendChild(row2);
      });
      body.appendChild(hotBlock);
      body.appendChild(el(`<div class="search-block"><h4>按分类</h4>
        <div class="cat-cloud" style="padding:0 0 12px">
          ${(DB.categories || []).slice(0, 12).map((c) => `<button class="md-chip" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}
        </div></div>`));
      body.querySelectorAll("[data-cat]").forEach((c) => {
        c.addEventListener("click", () => {
          input.value = c.dataset.cat;
          run(c.dataset.cat);
        });
      });
    }
    function run(q) {
      q = q.trim();
      if (!q) {
        renderIdle();
        return;
      }
      const pool = allBooks();
      const scored = [];
      for (const b of pool) {
        const t2 = b.title || "";
        const a = b.author || "";
        const c = b.category || "";
        let score = 0;
        if (t2 === q) score = 100;
        else if (t2.includes(q)) score = 80 - t2.indexOf(q);
        else if (a.includes(q)) score = 50;
        else if (c.includes(q)) score = 30;
        else if ((b.abstract || "").includes(q)) score = 10;
        if (score > 0) scored.push([score, b]);
      }
      scored.sort((x, y) => y[0] - x[0]);
      const results = scored.slice(0, 30).map((x) => x[1]);
      body.replaceChildren();
      if (!results.length) {
        body.appendChild(el(`<div class="empty-state">${icon("search-x", 40)}
          <div class="t-title-m">没有找到「${esc(q)}」</div>
          <div class="t-body-m on-surface-variant">换个关键词，或试试书名里的两个字</div></div>`));
        body.appendChild(el(`<div class="search-block"><h4>换个词试试</h4>
          <div class="row" style="flex-wrap:wrap;gap:8px">
            ${["都市", "系统", "重生", "悬疑", "校园"].map((x) => `<button class="md-chip" data-s="${x}">${x}</button>`).join("")}
          </div></div>`));
        body.querySelectorAll("[data-s]").forEach((c) => c.addEventListener("click", () => {
          input.value = c.dataset.s;
          run(c.dataset.s);
        }));
        return;
      }
      const block = el(`<div class="search-block"><h4>${results.length} 个结果</h4><div id="res"></div></div>`);
      const list2 = block.querySelector("#res");
      results.forEach((b) => {
        const row2 = el(`<div class="result-row">
          <div class="cover"><img src="${esc(b.cover)}" alt="" loading="lazy"></div>
          <div class="meta">
            <div class="t">${highlight(b.title, q)}</div>
            <div class="a">${highlight(b.author || "", q)} · ${esc(b.category || "")} · ${esc(fmtWords(b.wordNumber) || (b.serialCount ? b.serialCount + " 章" : ""))}</div>
            <div class="abs">${highlight((b.abstract || "").replace(/\s+/g, " "), q)}</div>
          </div>
        </div>`);
        row2.addEventListener("click", () => {
          pushHistory(q);
          router2.push("detail", { id: b.id });
        });
        list2.appendChild(row2);
      });
      body.appendChild(block);
      body.classList.remove("anim-in");
      void body.offsetWidth;
      body.classList.add("anim-in");
    }
    let t = null;
    input.addEventListener("input", () => {
      clearBtn.classList.toggle("hidden", !input.value);
      clearTimeout(t);
      t = setTimeout(() => run(input.value), 120);
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        pushHistory(input.value.trim());
        run(input.value);
      }
    });
    clearBtn.addEventListener("click", () => {
      input.value = "";
      clearBtn.classList.add("hidden");
      renderIdle();
      input.focus();
    });
    head.querySelector('[data-act="back"]').addEventListener("click", () => router2.pop());
    head.querySelector('[data-act="cancel"]').addEventListener("click", () => router2.pop());
    if (params.initial) {
      input.value = params.initial;
      run(params.initial);
    } else renderIdle();
    setTimeout(() => input.focus({ preventScroll: true }), 380);
    return {
      el: root,
      onEnter() {
        input.focus({ preventScroll: true });
      }
    };
  }

  // js/views/settings.js
  init_ui();
  init_icons();
  init_color();
  function appBar(title, router2, { back = true } = {}) {
    const bar = el(`<header class="app-bar">
      <div class="bar-row">
        ${back ? `<button class="md-icon-btn" data-act="back">${icon("arrow-left", 24)}</button>` : ""}
        <div class="bar-title ellipsis">${esc(title)}</div>
      </div>
    </header>`);
    if (back) bar.querySelector('[data-act="back"]').addEventListener("click", () => router2.pop());
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
    if (onClick) r.addEventListener("click", (e) => {
      if (!e.target.closest(".md-switch, .md-slider")) onClick();
    });
    return r;
  }
  var GROUPS = [
    {
      title: "外观",
      key: "appearance",
      icon: "palette",
      desc: () => {
        const mode = { system: "跟随系统", light: "浅色", dark: "深色", eink: "墨纸" }[get("themeMode")];
        return `${mode} · ${get("dynamicColor") ? "动态取色" : seedLabel(get("seed"))}`;
      }
    },
    {
      title: "阅读",
      key: "reading",
      icon: "type",
      desc: () => `${get("flipMode") === "page" ? "左右翻页" : "上下滚动"} · ${get("readerSize")}px`
    },
    {
      title: "听书",
      key: "audio",
      icon: "headphones",
      desc: () => `${get("ttsVoice")} · ${get("ttsSpeed").toFixed(1)}×`
    },
    {
      title: "短剧",
      key: "drama",
      icon: "clapperboard",
      desc: () => `${get("dramaQuality")} · ${get("dramaAutoNext") ? "自动下一集" : "手动"}`
    },
    {
      title: "数据与存储",
      key: "data",
      icon: "database",
      desc: () => "备份、缓存、重置"
    },
    {
      title: "关于",
      key: "about",
      icon: "info",
      desc: () => "什锦铺 MD3 Web 版 1.0.0"
    }
  ];
  function SettingsView({ router: router2 }) {
    const root = el(`<div class="page"></div>`);
    const bar = appBar("设置", router2);
    const scroll = el(`<div class="page-scroll"></div>`);
    const wrap = el(`<div class="container-narrow" style="padding-bottom:40px"></div>`);
    const g = group("偏好设置");
    GROUPS.forEach((it) => {
      g.appendChild(row({
        label: it.title,
        support: it.desc(),
        icon: it.icon,
        trail: icon("chevron-right", 20),
        onClick: () => router2.push("settings-section", { key: it.key })
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
      })()
    });
    quick.appendChild(modeRow);
    quick.appendChild(row({
      label: "动态取色",
      support: "从封面提取主色，整套配色跟着变",
      trail: makeSwitch(get("dynamicColor"), (v) => {
        set({ dynamicColor: v });
        refresh();
      })
    }));
    wrap.appendChild(quick);
    const resetG = group();
    resetG.appendChild(row({
      label: "恢复默认设置",
      support: "不会删除书架和阅读进度",
      trail: icon("rotate-ccw", 20),
      onClick: async () => {
        const ok = await confirmDialog({ title: "恢复默认设置？", message: "外观、阅读、听书等偏好会回到初始状态。", confirm: "恢复" });
        if (ok) {
          reset();
          snackbar("已恢复默认设置");
          refresh();
        }
      }
    }));
    wrap.appendChild(resetG);
    scroll.appendChild(wrap);
    root.append(bar, scroll);
    function refresh() {
      const idx = Array.from(root.querySelectorAll(".setting-row"));
      idx.forEach((n) => n.remove());
    }
    return { el: root };
  }
  function SettingsSectionView({ router: router2, params }) {
    const key = params.key || "appearance";
    const titles = {
      appearance: "外观与主题",
      reading: "阅读设置",
      audio: "听书设置",
      drama: "短剧设置",
      data: "数据与存储",
      about: "关于"
    };
    const root = el(`<div class="page"></div>`);
    const bar = appBar(titles[key] || "设置", router2);
    const scroll = el(`<div class="page-scroll"></div>`);
    const wrap = el(`<div class="container-narrow" style="padding-bottom:48px"></div>`);
    scroll.appendChild(wrap);
    root.append(bar, scroll);
    const add = (node) => wrap.appendChild(node);
    if (key === "appearance") {
      const g1 = group("主题模式");
      const modes = [
        { v: "light", l: "浅色", s: "始终使用浅色外观" },
        { v: "dark", l: "深色", s: "始终使用深色外观" },
        { v: "system", l: "跟随系统", s: "随系统深浅色自动切换" },
        { v: "eink", l: "墨纸", s: "纯黑白、无动画，适合墨水屏" }
      ];
      modes.forEach((m) => {
        const swatch = el(`<div style="width:44px;height:28px;border-radius:8px;overflow:hidden;display:flex;box-shadow:inset 0 0 0 1px var(--md-sys-color-outline-variant)">
          <span style="flex:1;background:${m.v === "dark" ? "#141218" : m.v === "eink" ? "#ffffff" : "#fdf8f6"}"></span>
          <span style="flex:1;background:${m.v === "dark" ? "#e6e0e9" : m.v === "eink" ? "#000000" : "#201a18"}"></span>
        </div>`);
        const radio = el(`<div class="radio-dot ${get("themeMode") === m.v ? "on" : ""}"></div>`);
        g1.appendChild(row({
          label: m.l,
          support: m.s,
          trail: (() => {
            const c = el(`<div class="row" style="gap:12px"></div>`);
            c.append(swatch, radio);
            return c;
          })(),
          onClick: () => {
            set({ themeMode: m.v });
            wrap.querySelectorAll(".radio-dot").forEach((d) => d.classList.remove("on"));
            radio.classList.add("on");
          }
        }));
      });
      add(g1);
      const g2 = group("动态取色");
      g2.appendChild(row({
        label: "从封面取色",
        support: "打开书籍详情时，整套配色跟随封面主色",
        trail: makeSwitch(get("dynamicColor"), (v) => set({ dynamicColor: v }))
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
        { value: 1, label: "最高" }
      ], get("contrast"), (v) => {
        set({ contrast: Number(v) });
        contrastRow.querySelector("#ct").textContent = { 0: "标准", 0.5: "较高", 1: "最高" }[Number(v)];
      });
      contrastRow.appendChild(contrastSeg);
      g3.appendChild(contrastRow);
      g3.appendChild(row({
        label: "OLED 纯黑",
        support: "深色下大面积纯黑，省电且对比更强",
        trail: makeSwitch(get("oled"), (v) => set({ oled: v }))
      }));
      const shapeRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">圆角风格</span></div>
      </div>`);
      shapeRow.appendChild(makeSegmented([
        { value: "standard", label: "标准" },
        { value: "rounded", label: "圆润" },
        { value: "sharp", label: "锐利" }
      ], get("shape"), (v) => set({ shape: v })));
      g3.appendChild(shapeRow);
      const motionRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">动效强度</span><span class="t-body-s on-surface-variant">影响全局转场与动画</span></div>
      </div>`);
      motionRow.appendChild(makeSegmented([
        { value: "full", label: "完整" },
        { value: "reduced", label: "减弱" },
        { value: "off", label: "关闭" }
      ], get("motion"), (v) => set({ motion: v })));
      g3.appendChild(motionRow);
      add(g3);
      const g4 = group("文字大小");
      const fontRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">全局字号缩放</span><span class="t-body-s on-surface-variant" id="fs">${Math.round(get("fontScale") * 100)}%</span></div>
      </div>`);
      fontRow.appendChild(makeSlider({
        value: get("fontScale") * 100,
        min: 85,
        max: 125,
        step: 5,
        format: (v) => `${v}%`,
        onChange: (v) => {
          fontRow.querySelector("#fs").textContent = `${v}%`;
          set({ fontScale: v / 100 });
        }
      }));
      g4.appendChild(fontRow);
      add(g4);
    }
    if (key === "reading") {
      const g1 = group("排版");
      const sizeRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">字号</span><span class="t-body-s on-surface-variant" id="s1">${get("readerSize")} px</span></div></div>`);
      sizeRow.appendChild(makeSlider({
        value: get("readerSize"),
        min: 15,
        max: 30,
        step: 1,
        format: (v) => `${v} px`,
        onChange: (v) => {
          set({ readerSize: v });
          sizeRow.querySelector("#s1").textContent = `${v} px`;
        }
      }));
      g1.appendChild(sizeRow);
      const lineRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">行距</span><span class="t-body-s on-surface-variant" id="s2">${get("readerLine").toFixed(1)}</span></div></div>`);
      lineRow.appendChild(makeSlider({
        value: get("readerLine") * 10,
        min: 13,
        max: 24,
        step: 1,
        format: (v) => (v / 10).toFixed(1),
        onChange: (v) => {
          set({ readerLine: v / 10 });
          lineRow.querySelector("#s2").textContent = (v / 10).toFixed(1);
        }
      }));
      g1.appendChild(lineRow);
      const padRow = el(`<div class="setting-row column">
        <div class="head"><span class="t-title-s">页边距</span><span class="t-body-s on-surface-variant" id="s3">${get("readerPad")} px</span></div></div>`);
      padRow.appendChild(makeSlider({
        value: get("readerPad"),
        min: 12,
        max: 48,
        step: 2,
        format: (v) => `${v} px`,
        onChange: (v) => {
          set({ readerPad: v });
          padRow.querySelector("#s3").textContent = `${v} px`;
        }
      }));
      g1.appendChild(padRow);
      const fontRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">正文字体</span></div></div>`);
      fontRow.appendChild(makeSegmented([
        { value: "serif-cn", label: "宋体" },
        { value: "sans-cn", label: "黑体" },
        { value: "rounded", label: "圆体" }
      ], get("readerFont"), (v) => set({ readerFont: v })));
      g1.appendChild(fontRow);
      add(g1);
      const g2 = group("翻页");
      const flipRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">翻页方式</span></div></div>`);
      flipRow.appendChild(makeSegmented([
        { value: "page", label: "左右翻页" },
        { value: "scroll", label: "上下滚动" }
      ], get("flipMode"), (v) => set({ flipMode: v })));
      g2.appendChild(flipRow);
      const animRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">翻页动画</span></div></div>`);
      animRow.appendChild(makeSegmented([
        { value: "slide", label: "平移" },
        { value: "fade", label: "淡入" },
        { value: "none", label: "无" }
      ], get("flipAnim"), (v) => set({ flipAnim: v })));
      g2.appendChild(animRow);
      g2.appendChild(row({
        label: "点击两侧翻页",
        support: "关闭后点击两侧只呼出菜单",
        trail: makeSwitch(get("tapTurn"), (v) => set({ tapTurn: v }))
      }));
      g2.appendChild(row({
        label: "显示阅读进度",
        support: "底栏进度条与百分比",
        trail: makeSwitch(get("showReaderProgress"), (v) => set({ showReaderProgress: v }))
      }));
      add(g2);
      const g3 = group("阅读背景");
      const themes = [
        { v: "paper", c: "#fbf7f0", n: "米白" },
        { v: "sepia", c: "#f3e6cd", n: "羊皮纸" },
        { v: "green", c: "#e3ecdd", n: "护眼绿" },
        { v: "dark", c: "#14120f", n: "夜间" },
        { v: "oled", c: "#000000", n: "纯黑" }
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
        value: get("ttsSpeed") * 10,
        min: 5,
        max: 30,
        step: 1,
        format: (v) => (v / 10).toFixed(1) + "×",
        onChange: (v) => {
          set({ ttsSpeed: v / 10 });
          speedRow.querySelector("#sp").textContent = (v / 10).toFixed(1) + "×";
        }
      }));
      g1.appendChild(speedRow);
      ["云希", "晓伊", "云扬", "小艺"].forEach((v) => {
        const dot = el(`<div class="radio-dot ${get("ttsVoice") === v ? "on" : ""}"></div>`);
        g1.appendChild(row({
          label: v,
          support: v === "云希" ? "男声 · 沉稳" : v === "晓伊" ? "女声 · 温柔" : v === "云扬" ? "男声 · 清朗" : "女声 · 活泼",
          trail: dot,
          onClick: () => {
            set({ ttsVoice: v });
            g1.querySelectorAll(".radio-dot").forEach((d) => d.classList.remove("on"));
            dot.classList.add("on");
          }
        }));
      });
      add(g1);
      const g2 = group("播放行为");
      g2.appendChild(row({
        label: "自动播放下一章",
        support: "一章读完继续下一章",
        trail: makeSwitch(get("autoNextChapter"), (v) => set({ autoNextChapter: v }))
      }));
      const sleepRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">定时关闭</span></div></div>`);
      sleepRow.appendChild(makeSegmented([
        { value: 0, label: "关闭" },
        { value: 15, label: "15 分钟" },
        { value: 30, label: "30 分钟" },
        { value: 60, label: "60 分钟" }
      ], get("sleepTimer"), (v) => set({ sleepTimer: Number(v) })));
      g2.appendChild(sleepRow);
      add(g2);
    }
    if (key === "drama") {
      const g1 = group("播放");
      g1.appendChild(row({
        label: "自动下一集",
        support: "播完自动续播",
        trail: makeSwitch(get("dramaAutoNext"), (v) => set({ dramaAutoNext: v }))
      }));
      const qRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">清晰度</span></div></div>`);
      qRow.appendChild(makeSegmented([
        { value: "720P", label: "720P" },
        { value: "1080P", label: "1080P" },
        { value: "4K", label: "4K" }
      ], get("dramaQuality"), (v) => set({ dramaQuality: v })));
      g1.appendChild(qRow);
      const splitRow = el(`<div class="setting-row column"><div class="head"><span class="t-title-s">分屏布局</span></div></div>`);
      splitRow.appendChild(makeSegmented([
        { value: "auto", label: "横屏自动" },
        { value: "always", label: "始终分屏" },
        { value: "off", label: "关闭" }
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
        label: "清空本地数据",
        support: "书架、进度与设置全部删除",
        trail: icon("trash-2", 18),
        onClick: async () => {
          const ok = await confirmDialog({ title: "清空本地数据？", message: "书架、阅读进度和所有偏好设置都会被删除，无法撤销。", confirm: "清空", danger: true });
          if (ok) {
            localStorage.clear();
            location.reload();
          }
        }
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

  // js/views/audio.js
  init_ui();
  init_icons();
  function AudioView({ router: router2, params }) {
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
    const wave = hero.querySelector("#wave");
    const bars = 48;
    for (let i = 0; i < bars; i++) {
      const h = 6 + Math.abs(Math.sin(i * 0.7)) * 26 + i % 5 * 1.5;
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
      const p = duration ? elapsed / duration * 100 : 0;
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
          else {
            elapsed = duration;
            pause();
          }
        }
        tick();
      }, 1e3);
    }
    function pause() {
      playing = false;
      clearInterval(timer);
      cancelAnimationFrame(waveRaf);
      hero.querySelector('[data-act="play"]').innerHTML = icon("play", 30);
      hero.querySelector(".audio-cover").classList.remove("playing");
    }
    bar.querySelector('[data-act="back"]').addEventListener("click", () => {
      pause();
      router2.pop();
    });
    bar.querySelector('[data-act="more"]').addEventListener("click", () => {
      openSheet({
        title: "播放选项",
        content: (() => {
          const host2 = el(`<div style="margin:-8px 0"></div>`);
          ["定时关闭", "章节循环", "跳过片头", "后台播放"].forEach((t) => {
            const r = el(`<div class="md-list-item"><span class="body"><span class="label">${esc(t)}</span></span></div>`);
            r.addEventListener("click", () => snackbar(`${t}：已设置`));
            host2.appendChild(r);
          });
          return host2;
        })()
      });
    });
    hero.querySelector('[data-act="play"]').addEventListener("click", () => playing ? pause() : play());
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
      const host2 = el(`<div class="chapter-list" style="margin:-8px 0"></div>`);
      toc.forEach((c, i) => {
        const r = el(`<div class="chapter-row ${i === idx ? "current" : ""}">
          <span class="idx">${String(i + 1).padStart(2, "0")}</span>
          <span class="nm">${esc(c.t)}</span>
        </div>`);
        r.addEventListener("click", () => {
          setChapter(i);
          sheet.close();
          if (!playing) play();
        });
        host2.appendChild(r);
      });
      const sheet = openSheet({ title: "播放列表", subtitle: b.title, content: host2, fullHeight: true });
    });
    const seek = hero.querySelector("#a-seek");
    seek.addEventListener("pointerdown", (e) => {
      const move = (ev) => {
        const rect = seek.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
        elapsed = p * duration;
        tick();
      };
      move(e);
      const up = () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
    });
    setChapter(params.chapter || 0);
    return {
      el: root,
      onExit() {
        pause();
      }
    };
  }

  // js/views/history.js
  init_ui();
  init_icons();
  function HistoryView({ router: router2 }) {
    const root = el(`<div class="page"></div>`);
    const bar = el(`<header class="app-bar"><div class="bar-row">
      <button class="md-icon-btn" data-act="back">${icon("arrow-left", 24)}</button>
      <div class="bar-title">阅读历史</div>
    </div></header>`);
    bar.querySelector('[data-act="back"]').addEventListener("click", () => router2.pop());
    const scroll = el(`<div class="page-scroll"></div>`);
    const wrap = el(`<div class="container-narrow" style="padding:8px 12px 40px"></div>`);
    scroll.appendChild(wrap);
    root.append(bar, scroll);
    const items2 = list().filter((x) => (x.percent || 0) > 0);
    if (!items2.length) {
      wrap.appendChild(el(`<div class="empty-state">${icon("history", 44)}
        <div class="t-title-m">还没有阅读记录</div>
        <div class="t-body-m on-surface-variant">打开一本书读几页，这里就会记下来</div></div>`));
      return { el: root };
    }
    items2.forEach((it) => {
      var _a, _b;
      const b = book(it.id);
      if (!b) return;
      const row2 = el(`<div class="shelf-row">
        <div class="cover"><img src="${esc(b.cover)}" alt=""></div>
        <div class="meta">
          <div class="t-title-s ellipsis">${esc(b.title)}</div>
          <div class="t-body-s on-surface-variant ellipsis" style="margin-top:2px">
            ${esc(((_b = (_a = b.toc) == null ? void 0 : _a[it.chapter]) == null ? void 0 : _b.t) || "第 1 章")} · ${Math.round((it.percent || 0) * 100)}%
          </div>
          <div class="md-progress" style="margin-top:8px"><i style="width:${Math.round((it.percent || 0) * 100)}%"></i></div>
        </div>
        <span class="t-body-s on-surface-variant">${esc(it.updated || "")}</span>
      </div>`);
      row2.addEventListener("click", () => router2.push("reader", { id: b.id, chapter: it.chapter || 0 }));
      wrap.appendChild(row2);
    });
    return { el: root };
  }

  // js/views/rail.js
  init_ui();
  init_icons();
  var DESTINATIONS2 = [
    { key: "home", icon: "house", label: "首页" },
    { key: "drama", icon: "clapperboard", label: "短剧" },
    { key: "library", icon: "library-big", label: "书架" },
    { key: "mine", icon: "circle-user-round", label: "我的" }
  ];
  function createRail(router2) {
    const rail2 = el(`<aside class="md-nav-rail" role="tablist" aria-label="主导航">
      <div class="rail-head">
        <div class="rail-mark">什</div>
      </div>
      <div class="rail-items"></div>
      <div class="rail-foot"></div>
    </aside>`);
    const items2 = rail2.querySelector(".rail-items");
    const map = /* @__PURE__ */ new Map();
    DESTINATIONS2.forEach((d) => {
      const item = el(`<button class="rail-dest" role="tab" aria-selected="false" data-key="${d.key}">
        <span class="indicator">${icon(d.icon, 24)}</span>
        <span class="label">${esc(d.label)}</span>
      </button>`);
      item.addEventListener("click", () => {
        var _a, _b, _c;
        if (item.classList.contains("active") && !router2.stack.length) {
          (_c = (_b = (_a = router2.tabs.get(d.key)) == null ? void 0 : _a.el) == null ? void 0 : _b.querySelector(".page-scroll")) == null ? void 0 : _c.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        router2.switchTab(d.key);
      });
      items2.appendChild(item);
      map.set(d.key, item);
    });
    const search = el(`<button class="rail-dest rail-search" aria-label="搜索">
      <span class="indicator">${icon("search", 24)}</span>
      <span class="label">搜索</span>
    </button>`);
    search.addEventListener("click", () => router2.push("search", {}));
    rail2.querySelector(".rail-foot").appendChild(search);
    function setActive(key) {
      if (!map.has(key)) return;
      map.forEach((node, k) => {
        const on = k === key;
        node.classList.toggle("active", on);
        node.setAttribute("aria-selected", String(on));
      });
    }
    setActive("home");
    return { el: rail2, setActive };
  }

  // js/app.js
  var host = document.getElementById("view-root");
  var overlay = document.getElementById("overlay-root");
  var rail = null;
  var router = new Router(host, {
    onStackChange(name) {
      if (rail && name) rail.setActive(name);
    }
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
  router.switchTab("home");
  requestAnimationFrame(() => {
    var _a;
    (_a = document.getElementById("splash")) == null ? void 0 : _a.classList.add("gone");
    setTimeout(() => {
      var _a2;
      return (_a2 = document.getElementById("splash")) == null ? void 0 : _a2.remove();
    }, 420);
  });
  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      router.push("search", {});
    }
  });
  window.__app = { router, store: { set, get } };
})();
