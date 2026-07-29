// ── PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE ──────────
// const SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbype2iW_-X7in3X4SDX_GXJtBi2HipLc2qAzmJVqL2vsSSoWQa_nmhsOOKRxZtq-hFo/exec";
const SHEET_WEBHOOK = import.meta.env.VITE_SHEET_WEBHOOK;
const KEY = "sv_user";
const ALL_KEY = "sv_all_users";

// ── Helpers ─────────────────────────────────────────────────

export function getUser() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearUser() {
  localStorage.removeItem(KEY);
}

export function getAllUsers() {
  try {
    const raw = localStorage.getItem(ALL_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// ── Send to Google Sheet ─────────────────────────────────────

async function syncToSheet(userData) {
  try {
    console.log("Syncing to sheet:", userData);
    const params = new URLSearchParams({
      name: userData.name,
      joinedAt: userData.joinedAt,
    });
    const url = `${SHEET_WEBHOOK}?${params}`;
    console.log("Fetch URL:", url);
    await fetch(url, { method: "GET", mode: "no-cors" });
    console.log("Fetch done");
  } catch (err) {
    console.warn("Sheet sync failed:", err);
  }
}

// ── Register ─────────────────────────────────────────────────

export async function registerUser(userData) {
  const user = { ...userData, joinedAt: Date.now() };

  // Save session
  localStorage.setItem(KEY, JSON.stringify(user));

  // Update local list
  const all = getAllUsers();
  const idx = all.findIndex((u) => u.rollNo === userData.rollNo);
  if (idx >= 0) {
    all[idx] = { ...all[idx], ...user };
  } else {
    all.push(user);
  }
  localStorage.setItem(ALL_KEY, JSON.stringify(all));

  // 🔥 Sync to Google Sheet (non-blocking)
  syncToSheet(user);

  return user;
}

// ── Login ────────────────────────────────────────────────────

export function loginUser(rollNo, pin) {
  const all = getAllUsers();
  const found = all.find(
    (u) => u.rollNo.toLowerCase() === rollNo.toLowerCase() && u.pin === pin,
  );
  if (found) {
    localStorage.setItem(KEY, JSON.stringify(found));
    return found;
  }
  return null;
}
