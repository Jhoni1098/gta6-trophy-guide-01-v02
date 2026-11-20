// Boot: loads the data, wires the tabs, the filters, the tracker and export/import.
import { loadTrophies } from './data.js';
import { loadState, saveState, isEarned, toggleEarned, exportState, parseImport } from './store.js';
import { renderChecklist, renderDetail } from './views.js';
import { renderRoadmap, renderMissables, renderRarity, renderAbout } from './views-pages.js';

const view = document.getElementById('view');
const tabs = document.getElementById('tabs');
const earnedCount = document.getElementById('earnedCount');
const barFill = document.getElementById('barFill');
const progressNote = document.getElementById('progressNote');

const state = loadState();
let trophies = [];
let meta = null;

function route() {
  const hash = location.hash || '#/checklist';
  const tab = hash.replace('#/', '').split('/')[0] || 'checklist';
  return ['checklist', 'roadmap', 'missables', 'rarity', 'about'].indexOf(tab) === -1 ? 'checklist' : tab;
}

function paintProgress() {
  const n = state.earned.length;
  earnedCount.textContent = String(n);
  barFill.style.width = (n / 55 * 100).toFixed(1) + '%';
  progressNote.textContent = Math.round(n / 55 * 100) + '% to the platinum' + (n === 55 ? ' — Vice Got a Price!' : '');
}

function render() {
  const tab = route();
  tabs.querySelectorAll('a').forEach((a) => a.classList.toggle('on', a.dataset.tab === tab));
  if (tab === 'checklist') view.innerHTML = renderChecklist(state, trophies);
  else if (tab === 'roadmap') view.innerHTML = renderRoadmap();
  else if (tab === 'missables') view.innerHTML = renderMissables();
  else if (tab === 'rarity') view.innerHTML = renderRarity(trophies);
  else view.innerHTML = renderAbout();
  paintProgress();
  if (tab === 'checklist') wireChecklist();
}

function download(filename, text) {
  const blob = new Blob([text], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function wireChecklist() {
  const q = document.getElementById('q');
  const gradeSel = document.getElementById('gradeSel');
  const earnedOnly = document.getElementById('earnedOnly');
  const spoiler = document.getElementById('spoiler');
  const kindChips = document.getElementById('kindChips');
  const list = document.getElementById('trophyList');
  const exportBtn = document.getElementById('exportBtn');
  const importBtn = document.getElementById('importBtn');
  const importFile = document.getElementById('importFile');

  let deb = null;
  q.addEventListener('input', () => {
    clearTimeout(deb);
    deb = setTimeout(() => { state.query = q.value; render(); document.getElementById('q').focus(); }, 180);
  });
  gradeSel.addEventListener('change', () => { state.grade = gradeSel.value; render(); });
  earnedOnly.addEventListener('change', () => { state.earnedOnly = earnedOnly.checked; render(); });
  spoiler.addEventListener('change', () => { state.spoiler = spoiler.checked; saveState(state); render(); });
  kindChips.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-kind]');
    if (!chip) return;
    state.kind = chip.dataset.kind;
    render();
  });
  list.addEventListener('click', (e) => {
    const row = e.target.closest('.row');
    if (!row) return;
    const id = Number(row.dataset.id);
    if (e.target.matches('input[type=checkbox]')) {
      e.preventDefault();
      toggleEarned(state, id);
      render();
      return;
    }
    state.selected = state.selected === id ? null : id;
    render();
  });
  exportBtn.addEventListener('click', () => download('leonida-ledger-progress.json', exportState(state)));
  importBtn.addEventListener('click', () => importFile.click());
  importFile.addEventListener('change', async () => {
    const file = importFile.files[0];
    if (!file) return;
    try {
      const ids = parseImport(await file.text());
      state.earned = ids;
      saveState(state);
      render();
    } catch (err) {
      alert('Could not import that file: ' + err.message);
    }
    importFile.value = '';
  });
}

async function boot() {
  try {
    const loaded = await loadTrophies();
    meta = loaded.meta;
    trophies = loaded.trophies;
  } catch (err) {
    view.innerHTML = '<h2>Could not load the trophy list</h2><p>' + err.message + '</p><p>The guide needs app/data/trophies.json beside this page.</p>';
    return;
  }
  window.addEventListener('hashchange', render);
  render();
}

boot();
