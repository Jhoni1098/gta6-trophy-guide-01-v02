// Progress store: earned ticks and settings live in localStorage only.
// Export writes a JSON file; import reads one back. Nothing leaves the browser.
const KEY = 'leonida-ledger-v02';

export function blankState() {
  return {
    earned: [],
    spoiler: true,
    kind: 'all',
    grade: 'all',
    query: '',
    earnedOnly: false,
    selected: null,
  };
}

export function loadState() {
  const s = blankState();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return s;
    const saved = JSON.parse(raw);
    if (Array.isArray(saved.earned)) s.earned = saved.earned.filter((n) => Number.isInteger(n));
    if (typeof saved.spoiler === 'boolean') s.spoiler = saved.spoiler;
  } catch (e) {
    // A corrupt save is ignored; the tracker starts fresh rather than breaking.
  }
  return s;
}

export function saveState(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ earned: state.earned, spoiler: state.spoiler }));
  } catch (e) {
    // Storage full or blocked: the page still works, it just cannot persist.
  }
}

export function isEarned(state, id) {
  return state.earned.indexOf(id) !== -1;
}

export function toggleEarned(state, id) {
  const i = state.earned.indexOf(id);
  if (i === -1) state.earned.push(id);
  else state.earned.splice(i, 1);
  saveState(state);
}

export function exportState(state) {
  return JSON.stringify(
    { app: 'Leonida Ledger — GTA 6 trophy tracker', exported: new Date().toISOString(), earned: state.earned.slice().sort((a, b) => a - b) },
    null,
    2,
  );
}

export function parseImport(text) {
  const doc = JSON.parse(text);
  const ids = Array.isArray(doc) ? doc : doc.earned;
  if (!Array.isArray(ids)) throw new Error('That file has no earned list in it.');
  const clean = ids.filter((n) => Number.isInteger(n) && n >= 1 && n <= 55);
  return clean;
}
