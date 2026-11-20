// Views: every screen of the guide, rendered from the trophy data and the saved state.
import { KIND_LABELS, GRADE_ORDER, sourceUrl, isNewlyConfirmed } from './data.js';
import { isEarned } from './store.js';

export function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function gradeChip(t) {
  return '<span class="grade ' + t.grade + '">' + t.grade + '</span>';
}

function earnBadge(t) {
  const v = t.earn == null ? '—' : t.earn.toFixed(2) + '%';
  return '<span class="earn" title="Share of tracked players who had earned this by 20 Nov 2026 (The Gamers Hub)"><b>' + v + '</b><br>earned</span>';
}

// A hidden trophy stays hidden while spoilers are on and it is not yet earned.
export function isConcealed(state, t) {
  return state.spoiler && t.hidden && !isEarned(state, t.id);
}

function displayName(state, t) {
  return isConcealed(state, t) ? 'Hidden trophy' : t.name;
}

function displayDesc(state, t) {
  return isConcealed(state, t) ? 'Hidden until earned — tick it to reveal.' : t.description;
}

function kindTags(t) {
  let out = t.kind.map((k) => '<span class="tag">' + esc(KIND_LABELS[k] || k) + '</span>').join('');
  if (t.missable) out += '<span class="tag miss">Missable</span>';
  if (isNewlyConfirmed(t)) out += '<span class="tag new">Method confirmed 20 Nov</span>';
  if (t.count != null) {
    const label = t.count >= 1000 ? '$' + t.count.toLocaleString('en-US') : String(t.count);
    out += '<span class="tag">' + esc(label) + ' target</span>';
  }
  return out;
}

export function trophyRow(state, t, selected) {
  const earned = isEarned(state, t.id);
  const cls = 'row' + (earned ? ' earned' : '') + (selected === t.id ? ' sel' : '');
  return '<button type="button" class="' + cls + '" data-id="' + t.id + '">' +
    '<input type="checkbox" tabindex="-1" ' + (earned ? 'checked' : '') + ' aria-label="Earned">' +
    '<span class="tmain"><span class="tname">' + esc(displayName(state, t)) + '</span>' +
    '<span class="tdesc">' + esc(displayDesc(state, t)) + '</span>' +
    '<span class="ttags">' + kindTags(t) + '</span></span>' +
    gradeChip(t) + earnBadge(t) +
    '</button>';
}

function filteredTrophies(state, trophies) {
  const q = state.query.trim().toLowerCase();
  return trophies.filter((t) => {
    if (state.kind !== 'all' && t.kind.indexOf(state.kind) === -1) return false;
    if (state.grade !== 'all' && t.grade !== state.grade) return false;
    if (state.earnedOnly && !isEarned(state, t.id)) return false;
    if (q) {
      const hay = (t.name + ' ' + t.description + ' ' + t.guide).toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  }).sort((a, b) => GRADE_ORDER[a.grade] - GRADE_ORDER[b.grade] || a.id - b.id);
}

export function renderChecklist(state, trophies) {
  const list = filteredTrophies(state, trophies);
  const kinds = Object.keys(KIND_LABELS);
  const chips = ['<button type="button" class="chip' + (state.kind === 'all' ? ' on' : '') + '" data-kind="all">All kinds</button>']
    .concat(kinds.map((k) => '<button type="button" class="chip' + (state.kind === k ? ' on' : '') + '" data-kind="' + k + '">' + esc(KIND_LABELS[k]) + '</button>'))
    .join('');
  const selected = state.selected != null ? trophies.find((t) => t.id === state.selected) : null;
  const rows = list.length
    ? list.map((t) => trophyRow(state, t, state.selected)).join('')
    : '<p class="empty">No trophies match those filters. Clear the search or pick another kind.</p>';
  return '<h2>Checklist — all 55 trophies</h2>' +
    '<p class="lede">Tick a trophy when it pops. Your ticks are saved in this browser and can be exported below. ' +
    'Earn rates are launch-day figures — the share of tracked players who had each trophy by 20 Nov 2026.</p>' +
    '<div class="controls">' +
    '<input type="search" id="q" placeholder="Search a trophy, a place or a method…" value="' + esc(state.query) + '" aria-label="Search trophies">' +
    '<select id="gradeSel" aria-label="Filter by grade"><option value="all">All grades</option>' +
    ['platinum', 'gold', 'silver', 'bronze'].map((g) => '<option value="' + g + '"' + (state.grade === g ? ' selected' : '') + '>' + g[0].toUpperCase() + g.slice(1) + '</option>').join('') +
    '</select>' +
    '<label class="switch"><input type="checkbox" id="earnedOnly"' + (state.earnedOnly ? ' checked' : '') + '> Earned only</label>' +
    '<label class="switch"><input type="checkbox" id="spoiler"' + (state.spoiler ? ' checked' : '') + '> Hide spoilers (story trophies)</label>' +
    '<button type="button" class="btn" id="exportBtn">Export progress</button>' +
    '<button type="button" class="btn" id="importBtn">Import progress</button>' +
    '<input type="file" id="importFile" accept=".json,application/json" hidden>' +
    '</div>' +
    '<div class="chips" id="kindChips">' + chips + '</div>' +
    '<p class="meta" style="color:var(--muted);font-size:13px;margin:12px 0">' + list.length + ' of 55 shown · ' +
    state.earned.length + ' earned · grades: 1 platinum, 2 gold, 6 silver, 46 bronze · 28 hidden · 0 online</p>' +
    '<div class="layout"><div class="list" id="trophyList">' + rows + '</div>' +
    '<aside class="detail" id="detailPane">' + renderDetail(state, selected) + '</aside></div>';
}

export function renderDetail(state, t) {
  if (!t) {
    return '<h2>Pick a trophy</h2><p class="meta">Tap any row on the left to read its guide, its sources and its early earn rate. ' +
      'Guides marked “Method confirmed 20 Nov” were unsolved when the first guides went out — PowerPyx cracked them on launch day.</p>' +
      '<div class="callout good"><b>Start here:</b> do the Chapter 1 balcony meditation for Positive Mental Attitude before you leave Chapter 1. It is the one thing in the whole list that can be missed.</div>';
  }
  if (isConcealed(state, t)) {
    return '<h2>Hidden trophy</h2><p class="hidden-note">This is a hidden story trophy. Its name, description and guide stay covered while spoilers are on — tick it in the list once you have earned it, or switch spoilers off.</p>' +
      '<p class="meta">Grade: ' + esc(t.grade) + ' · Early earn rate: ' + (t.earn == null ? '—' : t.earn.toFixed(2) + '% of tracked players') + ' (20 Nov 2026).</p>';
  }
  const srcs = t.sources.map((s) => {
    const url = sourceUrl(s);
    return url ? '<a href="' + url + '" target="_blank" rel="noopener">' + esc(s) + '</a>' : esc(s);
  }).join(' · ');
  return '<h2>' + esc(t.name) + '</h2>' +
    '<p>' + gradeChip(t) + ' ' + (t.missable ? '<span class="tag miss">Missable</span>' : '') + (isNewlyConfirmed(t) ? ' <span class="tag new">Method confirmed 20 Nov 2026</span>' : '') + '</p>' +
    '<p class="official">“' + esc(t.description) + '” — official description</p>' +
    '<p class="guide">' + esc(t.guide) + '</p>' +
    '<p class="meta">Early earn rate: <b>' + (t.earn == null ? '—' : t.earn.toFixed(2) + '%') + '</b> of tracked players had this by 20 Nov 2026 (The Gamers Hub). ' +
    (t.count != null ? 'PSN tracks a count: ' + esc(String(t.count)) + '. ' : '') +
    'Kind: ' + t.kind.map((k) => esc(KIND_LABELS[k] || k)).join(', ') + '. Roadmap stage: ' + t.stage + ' of 4.</p>' +
    '<p class="src">Sources: ' + srcs + '</p>';
}
