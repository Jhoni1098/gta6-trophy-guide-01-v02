# Leonida Ledger — GTA 6 Trophy Guide & Tracker

[![Competition](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/bounty/gta6-trophy-guide-01)
[![Rank](https://make.fun/badge/gta6-trophy-guide-01/Jhoni1098/gta6-trophy-guide-01-v02/rank.svg)](https://make.fun/bounty/gta6-trophy-guide-01)
[![Reward](https://make.fun/badge/gta6-trophy-guide-01/Jhoni1098/gta6-trophy-guide-01-v02/reward.svg)](https://make.fun/bounty/gta6-trophy-guide-01)

An offline, open-source guide and tracker for all **55 PlayStation 5 trophies** of Grand Theft Auto VI (1 platinum, 2 gold, 6 silver, 46 bronze; 28 hidden; 0 online). Built as an entry for the [make.fun bounty](https://make.fun/bounty/gta6-trophy-guide-01) — free to enter, $250 across 50 places.

## What it is

- **Checklist tracker** — every trophy with its official name, description and grade; tick it when it pops. Progress is saved in the browser (localStorage) and can be exported to JSON and imported back. Search, kind filters (story, missable, collectibles, activities, robberies, money, side quests, 100% completion, platinum), grade filter, and a spoiler setting that hides hidden story trophies until you earn them.
- **Roadmap to the platinum** — about 200 hours, difficulty 4/10, one playthrough; the 100% checklist broken down line by line (70 of 80 challenges, 300 of 397 stunts, 200 of 277 vehicles, and the five lines that demand everything).
- **Missables** — exactly one trophy can be missed (Positive Mental Attitude, Chapter 1 balcony meditation), with the full warning and the exact steps.
- **Early earn rates** — launch-day shares of tracked players per trophy (launch day was 19 Nov 2026; rates checked 20 Nov 2026), rarest first.
- **A cited guide for every trophy**, written in our own words. Sources are named beside each guide (PowerPyx, The Gamers Hub, Exophase, PSNProfiles, TrueAchievements); where a method is still unconfirmed, the guide says so instead of guessing.

## What is new in this version

Eight trophies were unsolved when the first guides went out — PowerPyx listed their methods as "not yet known". PowerPyx confirmed all eight on launch day (20 Nov 2026) and this guide now carries them, each marked "Method confirmed 20 Nov": Catch Me If You Can, Challenging Tank, In The Beginning…, Capital Offense, Personal Best, Bad Luck, I Guess, The Truth Is Out There and Ten Pin. This version also adds the early earn-rate column and page.

## Run it

Static files, no build step, no network at run time. Serve `app/` with any static server and open `index.html`:

```sh
python3 -m http.server 8080 --directory app
# open http://localhost:8080
```

## Hand it in

`main.ts` (Node 22, standard library only) copies `app/` and `screenshots/` to `/output` and writes `/output/dossier.json` with the vendored make.fun library:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE). Unofficial fan guide; not affiliated with Rockstar Games, Sony or PlayStation. Trophy names and descriptions are shown as PlayStation publishes them.
