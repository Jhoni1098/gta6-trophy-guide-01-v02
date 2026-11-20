// Data layer: loads the frozen official list plus our own guides from app/data/trophies.json.
// The app fetches only this one file, from its own folder, so it works with the network off.
export async function loadTrophies() {
  const res = await fetch('data/trophies.json');
  if (!res.ok) throw new Error('Could not load data/trophies.json (' + res.status + ')');
  const doc = await res.json();
  return { meta: doc, trophies: doc.trophies };
}

export const KIND_LABELS = {
  story: 'Story',
  missable: 'Missable',
  collectibles: 'Collectibles',
  activities: 'Activities',
  robberies: 'Robberies',
  money: 'Money',
  side: 'Side quests',
  completion: '100% completion',
  platinum: 'Platinum',
};

export const GRADE_ORDER = { platinum: 0, gold: 1, silver: 2, bronze: 3 };

// Where each cited source lives, so a reader can check the method themselves.
export const SOURCE_LINKS = {
  'PowerPyx GTA 6 Trophy Guide & Roadmap': 'https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/',
  'PowerPyx GTA 6 Trophy Guide & Roadmap (confirmed 20 Nov 2026)': 'https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/',
  'PowerPyx 100% Completion Checklist': 'https://www.powerpyx.com/gta-6-100-completion-checklist-guide/',
  'PowerPyx Meditation Locations': 'https://www.powerpyx.com/gta-6-meditation-locations/',
  'PowerPyx Shooting Range locations': 'https://www.powerpyx.com/gta-6-all-shooting-range-locations-gold-medals/',
  'PowerPyx Top Fun Drone Race locations': 'https://www.powerpyx.com/gta-6-all-top-fun-drone-race-locations/',
  'PowerPyx race locations': 'https://www.powerpyx.com/gta-6-all-race-locations/',
  'PowerPyx Collectible Card Sets': 'https://www.powerpyx.com/gta-6-all-collectible-card-set-locations/',
  'PowerPyx All 80 Challenges': 'https://www.powerpyx.com/gta-6-all-challenges/',
  'PowerPyx Bank Vault locations': 'https://www.powerpyx.com/gta-6-all-bank-vault-locations/',
  'PowerPyx Illegal Gang Operation locations': 'https://www.powerpyx.com/gta-6-all-illegal-gang-operation-locations/',
  'PowerPyx How to Unfog the Map Fast': 'https://www.powerpyx.com/gta-6-how-to-unfog-the-map-fast-best-plane/',
  'PowerPyx Garage locations': 'https://www.powerpyx.com/gta-6-all-garage-locations/',
  'Exophase official list': 'https://www.exophase.com/game/grand-theft-auto-vi-psn/trophies/',
  'The Gamers Hub earn rates': 'https://www.thegamershub.co/gta-6/trophies/',
};

export function sourceUrl(label) {
  return SOURCE_LINKS[label] || null;
}

// Trophies whose method was only confirmed after launch (20 Nov 2026).
export function isNewlyConfirmed(t) {
  return t.guide.indexOf('NEWLY CONFIRMED') === 0;
}
