/* ==========================================================================
   Shelf store — user's library + reading progress (localStorage backed)
   ========================================================================== */

import { DB } from "./data.js";

const KEY = "fqapp-md3:shelf:v1";

function seed() {
  return (DB.shelf || []).map((s) => ({ ...s }));
}

let items = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return seed();
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : seed();
  } catch {
    return seed();
  }
}

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {}
}

export function list() {
  return items.slice().sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
}

export function has(id) {
  return items.some((i) => i.id === id);
}

export function entry(id) {
  return items.find((i) => i.id === id);
}

export function toggle(id) {
  if (has(id)) {
    items = items.filter((i) => i.id !== id);
    save();
    return false;
  }
  items.push({ id, chapter: 0, percent: 0, updated: "刚刚", updatedAt: Date.now() });
  save();
  return true;
}

export function progress(id, chapter, percent) {
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

export function history() {
  return list().filter((i) => (i.percent || 0) > 0).slice(0, 12);
}

export function clear() {
  items = [];
  save();
}

export function stats() {
  const n = items.length;
  const done = items.filter((i) => (i.percent || 0) > 0.99).length;
  return { total: n, finished: done, reading: n - done };
}
