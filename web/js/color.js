/* ==========================================================================
   Dynamic color (Material You) + theme application
   Builds MD3 tonal palettes from a seed hue and maps them to color roles.
   ========================================================================== */

export function hexToRgb(hex) {
  const h = hex.replace("#", "").trim();
  const s = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(s, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function rgbToHex(r, g, b) {
  const f = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
  return `#${f(r)}${f(g)}${f(b)}`;
}

export function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  const d = max - min;
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4;
    }
    h *= 60;
  }
  return { h, s, l };
}

export function hexToHsl(hex) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHsl(r, g, b);
}

export function hslCss(h, s, l) {
  return `hsl(${h.toFixed(1)} ${(s * 100).toFixed(1)}% ${l.toFixed(1)}%)`;
}

/* MD3 tone → HSL. Chroma peaks in the middle of the tone scale and falls off
   at both ends, which is what makes the palette read as Material rather than
   as a flat tint ramp. */
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
  [0, 4, 6, 10, 12, 17, 20, 22, 24, 25, 30, 35, 40, 50, 60, 70, 80, 87, 90, 92, 94, 95, 96, 98, 99, 100]
    .forEach((t) => { p[t] = tone(h, chroma, t); });
  return p;
}

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/**
 * Build a full MD3 color-role map.
 * @param {string} seedHex  seed color
 * @param {boolean} dark
 * @param {number} contrast 0 (default) .. 1 (high)
 * @param {boolean} oled    pure black surfaces
 */
export function buildScheme(seedHex, dark, contrast = 0, oled = false) {
  const { h, s } = hexToHsl(seedHex);
  const c = clamp(s, 0.18, 0.85);
  const shift = Math.round(contrast * 8);

  const P = palette(h, clamp(c, 0.35, 0.9));
  const S = palette(h + 12, clamp(c * 0.5, 0.16, 0.5));
  const T = palette((h + 58) % 360, clamp(c * 0.68, 0.2, 0.62));
  const N = palette(h, 0.045);
  const NV = palette(h, 0.09);
  const E = palette(25, 0.62);

  const roles = dark
    ? {
        primary: P[80], "on-primary": P[20], "primary-container": P[30], "on-primary-container": P[90],
        secondary: S[80], "on-secondary": S[20], "secondary-container": S[30], "on-secondary-container": S[90],
        tertiary: T[80], "on-tertiary": T[20], "tertiary-container": T[30], "on-tertiary-container": T[90],
        error: E[80], "on-error": E[20], "error-container": E[30], "on-error-container": E[90],
        background: N[6], "on-background": N[90],
        surface: N[6], "on-surface": N[90],
        "surface-variant": NV[30], "on-surface-variant": NV[80],
        "surface-dim": N[6], "surface-bright": N[24],
        "surface-container-lowest": N[4], "surface-container-low": N[10],
        "surface-container": N[12], "surface-container-high": N[17], "surface-container-highest": N[22],
        "inverse-surface": N[90], "inverse-on-surface": N[20], "inverse-primary": P[40],
        outline: NV[60], "outline-variant": NV[30],
        scrim: "#000000", shadow: "#000000",
      }
    : {
        primary: P[40], "on-primary": P[100], "primary-container": P[90], "on-primary-container": P[10],
        secondary: S[40], "on-secondary": S[100], "secondary-container": S[90], "on-secondary-container": S[10],
        tertiary: T[40], "on-tertiary": T[100], "tertiary-container": T[90], "on-tertiary-container": T[10],
        error: E[40], "on-error": E[100], "error-container": E[90], "on-error-container": E[10],
        background: N[98], "on-background": N[10],
        surface: N[98], "on-surface": N[10],
        "surface-variant": NV[90], "on-surface-variant": NV[30],
        "surface-dim": N[87], "surface-bright": N[98],
        "surface-container-lowest": N[100], "surface-container-low": N[96],
        "surface-container": N[94], "surface-container-high": N[92], "surface-container-highest": N[90],
        "inverse-surface": N[20], "inverse-on-surface": N[95], "inverse-primary": P[80],
        outline: NV[50], "outline-variant": NV[80],
        scrim: "#000000", shadow: "#000000",
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
    // Higher contrast: pull text further from its surface, deepen containers.
    const onDark = dark;
    roles["on-surface"] = onDark ? N[96] : N[Math.max(4, 10 - shift)];
    roles["on-surface-variant"] = onDark ? NV[90] : NV[Math.max(18, 30 - shift)];
    roles["outline"] = onDark ? NV[70] : NV[Math.max(35, 50 - shift)];
    roles.primary = onDark ? P[87] : P[Math.max(24, 40 - shift)];
  }
  return roles;
}

export function applyScheme(seedHex, dark, contrast, oled) {
  const roles = buildScheme(seedHex, dark, contrast, oled);
  const root = document.documentElement;
  for (const [k, v] of Object.entries(roles)) root.style.setProperty(`--md-sys-color-${k}`, v);
  root.style.colorScheme = dark ? "dark" : "light";
  root.dataset.theme = dark ? "dark" : "light";
  return roles;
}

/* --- Seed extraction from a cover image (dominant, vivid enough) --------- */

export function extractSeed(imgEl) {
  try {
    const n = 32;
    const c = document.createElement("canvas");
    c.width = n; c.height = n;
    const ctx = c.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(imgEl, 0, 0, n, n);
    const { data } = ctx.getImageData(0, 0, n, n);

    // Histogram over 24 hue buckets: weight by chroma and mid-lightness so the
    // dominant *coloured* region wins instead of a single vivid pixel.
    const buckets = new Map();
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 128) continue;
      const { h, s, l } = rgbToHsl(data[i], data[i + 1], data[i + 2]);
      if (s < 0.16 || l < 0.12 || l > 0.88) continue;
      const key = Math.round(h / 15) % 24;
      const b = buckets.get(key) || { w: 0, hs: 0, ss: 0, ls: 0, n: 0 };
      const w = s * (1 - Math.abs(l - 0.5) * 1.1);
      b.w += w; b.hs += h * w; b.ss += s * w; b.ls += l * w; b.n += 1;
      buckets.set(key, b);
    }
    let best = null;
    for (const b of buckets.values()) if (!best || b.w > best.w) best = b;
    if (!best || best.w <= 0) return null;

    let h2 = best.hs / best.w;
    let s2 = clamp(best.ss / best.w, 0.5, 0.82);
    let l2 = clamp(best.ls / best.w, 0.42, 0.56);

    // Nudge muddy hues (yellow-greens) toward a cleaner tint.
    if (h2 > 60 && h2 < 95) { h2 = h2 < 78 ? 96 : 42; }
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
