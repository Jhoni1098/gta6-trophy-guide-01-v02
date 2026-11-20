// Static pages: the roadmap, the missables, the early earn-rate table, and About & Sources.
import { esc } from './views.js';

export function renderRoadmap() {
  return '<h2>Roadmap to the platinum — about 200 hours, difficulty 4/10</h2>' +
    '<p class="lede">One playthrough, no online trophies, no mission replay, no New Game+. The story takes 60–80 hours; the 100% checklist takes about 100 more; cleanup takes about 10. ' +
    'Estimates from the PowerPyx roadmap, updated on launch day. Keep a manual save at the start and end of every chapter — there are 15 manual slots and 1 autosave.</p>' +
    '<ol class="steps">' +
    '<li><h3>Stage 1 — Play the story, 60–80 hours</h3><p>Finish all five chapters and the side missions as they appear. Scan vehicles with WAiNK and study animals with the binoculars as you go — both count toward the 100% checklist later. ' +
    'Do the Chapter 1 balcony meditation for Positive Mental Attitude (see Missables). Avoid the Irredeemable criminal profile: it is permanent and makes police far more aggressive. Cheats disable trophies and saving, and only open up after the story anyway.</p></li>' +
    '<li><h3>Stage 2 — The 100% checklist, about 100 hours</h3><p>After the credits, open Progress &gt; Stats &gt; 100% Completion. It is kinder than it sounds — about 60% true completion over 35 requirements. ' +
    'Only five lines demand everything: all robberies, all underwater discoveries, all shooting ranges, all drone races and all of Bret’s quests. Everything else is a partial target (see the table below).</p></li>' +
    '<li><h3>Stage 3 — Strangers &amp; Freaks and cleanup, about 10 hours</h3><p>Finish the 8 stranger strands, the five character questlines (Andy, Kenton, Billy, Randy, Tyrone) and any trophies left over. Every trophy-related quest giver is still around after the story.</p></li>' +
    '<li><h3>Stage 4 — The platinum</h3><p>Vice Got a Price! pops the moment the other 54 are yours. No DLC, no multiplayer, nothing left to buy.</p></li>' +
    '</ol>' +
    '<div class="card"><h3>The 100% checklist — what A Long Road actually needs</h3>' +
    '<table><tr><th>Line</th><th class="num">Target</th><th>Notes</th></tr>' +
    '<tr><td>Challenges</td><td class="num">70 of 80</td><td>Skip the 10 hardest; 50 already earns One Last Thing.</td></tr>' +
    '<tr><td>Stunts</td><td class="num">300 of 397</td><td>250 already earns Cunning Stunts. Bridge flyunders are quickest.</td></tr>' +
    '<tr><td>Vehicles scanned</td><td class="num">200 of 277</td><td>Base models only; boats and aircraft count.</td></tr>' +
    '<tr><td>Animals studied</td><td class="num">100 of 255</td><td>Binoculars; every dog and cat breed counts separately.</td></tr>' +
    '<tr><td>Weapons discovered</td><td class="num">50 of 66</td><td>—</td></tr>' +
    '<tr><td>Optional missions</td><td class="num">100</td><td>There are far more than 100; missed ones do not matter.</td></tr>' +
    '<tr><td>Meditations</td><td class="num">15 of 18</td><td>The Chapter 1 balcony meditation is the only risky one.</td></tr>' +
    '<tr><td>Card sets</td><td class="num">15 of 18</td><td>3 sets already earn Don’t Touch My Deck.</td></tr>' +
    '<tr><td>WAiNK locations</td><td class="num">100</td><td>Landmarks, curiosities, sculptures, tags.</td></tr>' +
    '<tr><td>Underwater discoveries</td><td class="num">33 of 33</td><td>All of them — no partial credit here.</td></tr>' +
    '<tr><td>Robberies</td><td class="num">All</td><td>39 gang operations, 22 bank jobs, 7 Payday Loan jobs, 8 bank vaults.</td></tr>' +
    '<tr><td>Shooting ranges</td><td class="num">42 of 42</td><td>Gold medals at all 12 ranges.</td></tr>' +
    '<tr><td>Drone races</td><td class="num">42 of 42</td><td>Top Fun races at all 14 locations.</td></tr>' +
    '<tr><td>Bret’s target decks</td><td class="num">15 of 15</td><td>All of them.</td></tr>' +
    '<tr><td>Basketball hoops</td><td class="num">90</td><td>—</td></tr>' +
    '<tr><td>Cocaine flamingos</td><td class="num">100</td><td>—</td></tr>' +
    '</table><p class="meta" style="color:var(--muted);font-size:13px">Figures: PowerPyx 100% Completion Checklist, checked 20 Nov 2026.</p></div>' +
    '<div class="card"><h3>Run rules</h3><p>Manual saves at every chapter boundary (no mission replay). Do the Chapter 1 meditation. Keep cheats off. Do optional missions as they appear — many disappear, but there are far more than the 100 the checklist needs, so a missed one never blocks the platinum.</p></div>';
}

export function renderMissables() {
  return '<h2>Missables — exactly one trophy can be missed</h2>' +
    '<p class="lede">PowerPyx flags one potentially missable trophy in the whole list. Everything else can be finished after the story in free-roam, and every trophy-related quest giver comes back.</p>' +
    '<div class="card"><h3>Positive Mental Attitude — meditate at every spot across Leonida</h3>' +
    '<div class="callout danger"><b>The risk:</b> the first meditation only exists in Chapter 1, at Jason’s house, and it is gone for good once Chapter 1 ends. ' +
    'It is still unconfirmed whether it is actually required for the trophy — PowerPyx earned the trophy with it done — so do it and keep a separate Chapter 1 save.</div>' +
    '<p><b>How to do it.</b> After the Chapter 1 mission Down to Earth, go to Jason’s kitchen in the morning. Lucia will say she is going to meditate and walk out to the balcony. Follow her, talk to her there and choose <span class="kbd">Accept</span>. She shows you how to meditate, and the counter goes up by 1.</p>' +
    '<p>There are 18 meditation spots at 10 locations; meditating with both Jason and Lucia at one spot counts twice. The last spot, Ascent on Mount Kalaga, needs both characters together, which opens after Coffee Break in Chapter 2. The 100% checklist only asks for 15 of the 18, so the trophy is the stricter target. Track your spots under Progress &gt; Collections &gt; Exploration &gt; Meditations.</p>' +
    '<p class="meta" style="color:var(--muted);font-size:13px">Source: PowerPyx Trophy Guide &amp; Roadmap and Meditation Locations, checked 20 Nov 2026.</p></div>' +
    '<div class="card"><h3>What is NOT missable</h3><p>Optional missions that disappear (black icons with pink letters) do not matter for trophies — there are far more than the 100 the checklist needs. Quest givers who go quiet mid-story (Kenton, for example) all come back. ' +
    'Fences that vanish are replaced by new ones. A few magazine collectibles sit in story buildings that later close, but they also spawn elsewhere and no trophy needs all of them. Hourglass-marked quests expire, but none of them count for a trophy. Your criminal profile and the Jason/Lucia relationship do not affect any trophy — except that the Irredeemable profile is permanent and best avoided.</p></div>' +
    '<div class="card"><h3>Still being confirmed</h3><p>Fair Game (hunt a unique animal for Bret): PowerPyx has the questline mapped but has not yet pinned down which exact animal triggers the trophy. The 15 target decks are all needed for 100% anyway, so it should pop along the way — this guide will say so plainly until it is confirmed.</p></div>';
}

export function renderRarity(trophies) {
  const sorted = trophies.slice().sort((a, b) => (a.earn || 0) - (b.earn || 0) || a.id - b.id);
  const rows = sorted.map((t) =>
    '<tr><td>' + esc(t.name) + '</td><td>' + esc(t.grade) + '</td><td class="num"><b>' + (t.earn == null ? '—' : t.earn.toFixed(2) + '%') + '</b></td><td>' + esc(t.description) + '</td></tr>'
  ).join('');
  const most = trophies.slice().sort((a, b) => (b.earn || 0) - (a.earn || 0)).slice(0, 5);
  const mostList = most.map((t) => '<li><b>' + esc(t.name) + '</b> — ' + t.earn.toFixed(2) + '% of tracked players</li>').join('');
  return '<h2>Early earn rates — launch day, 20 Nov 2026</h2>' +
    '<p class="lede">Launch day was 19 Nov 2026. These are the shares of tracked players who had each trophy by the morning of 20 Nov 2026, as published by The Gamers Hub. ' +
    'Day-one rates are noisy — only the earliest players had finished Chapter 1, so most story trophies sit under 0.5% and will climb fast. Treat them as a snapshot of who was furthest along on day one, not as difficulty.</p>' +
    '<div class="callout good"><b>What day one already shows:</b> Just Like Paradise (finish the first mission) was at 93.27% — nearly everyone who started the game finished Gone Fishing. ' +
    'Baited My Tackle (beat Cal at fishing, 1.21%) and Stick Fiddler (finish an arcade game, 0.93%) were the most-earned non-story trophies. Nobody had the platinum or A Long Road yet — both sat at 0.00%.</div>' +
    '<div class="card"><h3>Most-earned on day one</h3><ol>' + mostList + '</ol></div>' +
    '<div class="card"><h3>All 55, rarest first</h3><table><tr><th>Trophy</th><th>Grade</th><th class="num">Earned</th><th>Official description</th></tr>' + rows + '</table>' +
    '<p class="meta" style="color:var(--muted);font-size:13px">Source: The Gamers Hub trophy list, share of tracked players, checked 20 Nov 2026. ' +
    'A second list (Leonidaverse) showed different day-one figures for the same trophies (Just Like Paradise 95.9%, Paradise Lost 5.6%), so these numbers depend on whose players are tracked — the ordering, not the exact decimals, is the point.</p></div>';
}

export function renderAbout() {
  return '<h2>About &amp; Sources</h2>' +
    '<p class="lede">Leonida Ledger is an unofficial, offline-first fan guide. It runs entirely from its own files: no account, no network, no ads, no Rockstar artwork. Your ticks live in this browser’s localStorage and can be exported as JSON.</p>' +
    '<div class="card"><h3>What changed in this version</h3><p>Eight trophies were unsolved when the first guides went out — PowerPyx listed their methods as “not yet known”. ' +
    'On launch day PowerPyx confirmed all eight, and this guide now carries them: Catch Me If You Can (steal a docked plane at VCIA terminal E3/E4), Challenging Tank (steal a Rhino at Mile Zero Air Station), ' +
    'In The Beginning… (Apple Martini at the Ocean View Rooftop Bar), Capital Offense (the blue Banshee through the showroom window), Personal Best (max Strength on both characters at once), ' +
    'Bad Luck, I Guess (re-rob the Little Cuba Payday Loans as Lucia, on foot), The Truth Is Out There (the UFO easter egg north-west of Starlet Motel, after 2AM) and Ten Pin (kick 10 pedestrians from a bike in 60 seconds). ' +
    'Every one of them is marked “Method confirmed 20 Nov” in the checklist. This version also adds the early earn-rate column and page.</p></div>' +
    '<div class="card"><h3>Sources</h3><ul>' +
    '<li><a href="https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/" target="_blank" rel="noopener">PowerPyx — GTA 6 Trophy Guide &amp; Roadmap</a> (updated ~12 hours before our check; crawled 20 Nov 2026, 12:35 UTC). The method behind nearly every guide here, and the roadmap figures.</li>' +
    '<li><a href="https://www.thegamershub.co/gta-6/trophies/" target="_blank" rel="noopener">The Gamers Hub — GTA 6 Trophy List</a> (published 19 Nov 2026; checked 20 Nov 2026). Per-trophy earn rates, as a share of tracked players.</li>' +
    '<li><a href="https://www.exophase.com/game/grand-theft-auto-vi-psn/trophies/" target="_blank" rel="noopener">Exophase — Grand Theft Auto VI trophies</a>. The official list’s names, descriptions and grades.</li>' +
    '<li><a href="https://psnprofiles.com/trophies/43531-grand-theft-auto-vi" target="_blank" rel="noopener">PSNProfiles — Grand Theft Auto VI trophies</a>. PSN’s counts and the hidden flags (28 hidden).</li>' +
    '<li><a href="https://www.trueachievements.com/game/Grand-Theft-Auto-VI/achievements" target="_blank" rel="noopener">TrueAchievements — Grand Theft Auto VI achievements</a>. The Xbox side: 55 achievements, 1,000 Gamerscore, 28 secret.</li>' +
    '</ul><p>Every guide in this app is written in our own words from those sources — a source is cited, never copied. Where a method is still unconfirmed (Fair Game’s exact animal; whether the Chapter 1 meditation is required), the guide says so instead of guessing.</p></div>' +
    '<div class="card"><h3>The official list</h3><p>55 trophies on PlayStation 5: 1 platinum, 2 gold, 6 silver, 46 bronze; 28 hidden; 0 online. Names and descriptions are shown exactly as PlayStation publishes them, including “T**s Ass Drug Money”. Counts are PSN’s own targets (250 stunts, 42 shooting-range challenges, 100 WAiNK locations, and so on).</p></div>' +
    '<div class="card"><h3>License</h3><p>This guide is released under the MIT License (see LICENSE in the repository). It is not affiliated with, endorsed by, or connected to Rockstar Games, Take-Two Interactive, Sony or PlayStation.</p></div>';
}
