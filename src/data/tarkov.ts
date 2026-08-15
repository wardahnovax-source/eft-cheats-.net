import { siteConfig } from './site';

/** Screenshots used across product pages — simple eft cheats keyword alts. */
export const tarkovImages = {
	hero: '/images/eft-cheats-hero-full.png',
	espWallhack: '/images/eft-cheats-screenshot-1.webp',
	aimbotCombat: '/images/eft-cheats-screenshot-2.webp',
	aimbotSkeleton: '/images/eft-cheats-screenshot-1.webp',
	playerEsp: '/images/eft-cheats-screenshot-1.webp',
	cheatsCombat: '/images/eft-cheats-screenshot-2.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the assets above */
	cover: '/images/eft-cheats-screenshot-2.webp',
	loadoutBuilder: '/images/eft-cheats-screenshot-1.webp',
	squadFight: '/images/eft-cheats-screenshot-2.webp',
	cheatsPackage: '/images/eft-cheats-screenshot-1.webp',
	headerArt: '/images/eft-cheats-screenshot-2.webp',
	battleRoyaleCombat: '/images/eft-cheats-screenshot-2.webp',
	extractFight: '/images/eft-cheats-screenshot-1.webp',
	rebootFight: '/images/eft-cheats-screenshot-1.webp',
	scavRunCombat: '/images/eft-cheats-screenshot-1.webp',
	scavRunMode: '/images/eft-cheats-screenshot-1.webp',
	battleRoyaleIsland: '/images/eft-cheats-screenshot-1.webp',
	raidMap: '/images/eft-cheats-screenshot-1.webp',
	product: [
		{ src: '/images/eft-cheats-screenshot-1.webp', alt: 'Player ESP with skeleton overlay in Escape from Tarkov' },
		{ src: '/images/eft-cheats-screenshot-2.webp', alt: 'Loot ESP and multihack menu for EFT raids' },
		{ src: '/images/eft-cheats-screenshot-1.webp', alt: 'PMC and Scav identification with EFT ESP' },
		{ src: '/images/eft-cheats-screenshot-2.webp', alt: 'Container ESP for med cases and weapon boxes' },
		{ src: '/images/eft-cheats-screenshot-1.webp', alt: 'Extraction point ESP markers in Tarkov' },
		{ src: '/images/eft-cheats-screenshot-2.webp', alt: 'Aimbot with distance limits and no recoil' },
	],
	gallery: [
		{ src: '/images/eft-cheats-screenshot-1.webp', alt: 'Player ESP with skeleton overlay', featured: true },
		{ src: '/images/eft-cheats-screenshot-2.webp', alt: 'Loot ESP and multihack menu' },
		{ src: '/images/eft-cheats-screenshot-1.webp', alt: 'PMC and Scav ESP identification' },
		{ src: '/images/eft-cheats-screenshot-2.webp', alt: 'Container and quest item ESP' },
		{ src: '/images/eft-cheats-screenshot-1.webp', alt: 'Extraction point ESP in raid' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/eft-cheats-screenshot-1.webp', title: '', caption: '' },
		{ src: '/images/eft-cheats-screenshot-2.webp', title: '', caption: '' },
		{ src: '/images/eft-cheats-hero-1024w.webp', title: '', caption: '' },
	],
} as const;
