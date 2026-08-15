/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Escape from Tarkov',
	/** Short product label if needed */
	shortName: 'Tarkov',
	/** Canonical origin — no trailing slash */
	url: 'https://eftcheats.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@eftcheats.net',
	checkoutUrl: 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fescape-from-tarkov',

	/** Game this template instance targets */
	game: 'Escape from Tarkov',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'BattlEye',

	logo: '/images/eft-cheats-logo.webp',
	logoRaster: '/images/eft-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Escape from Tarkov logo',
	defaultOgImage: '/images/eft-cheats-hero-1920w.webp',
	heroImage: '/images/eft-cheats-hero-1920w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#5311ee',
		bg: '#0a0811',
		soft: '#c3aef4',
		deep: '#4907df',
		hover: '#a07bf4',
		panel: '#0a080c',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'eft cheats',
		list: [
			'eft cheats',
			'escape from tarkov cheats',
			'escape from tarkov hack',
			'escape from tarkov esp',
			'escape from tarkov aimbot',
			'eft esp',
			'eft aimbot',
			'best eft cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Escape from Tarkov | Undetected ESP & Aimbot',
		homeDescription: 'Official Escape from Tarkov cheats site for Windows PC. Player ESP, loot ESP, aimbot, Cloud DMA, and BattlEye bypass — compare plans and buy with 24/7 support.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} license — player ESP with skeleton, loot ESP, extraction ESP, aimbot, no recoil, Cloud DMA, and {antiCheat} bypass on Windows PC.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and Cloud DMA features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue a raid on Windows PC today.',
		previewTitle: 'Escape from Tarkov Cheats | Undetected ESP',
		previewDescription: 'Buy undetected Escape from Tarkov cheats on Windows PC. Player ESP, loot ESP, aimbot, Cloud DMA, and BattlEye bypass with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can raid faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get 24/7 help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} for Escape from Tarkov — delivery, setup, {antiCheat} updates, Cloud DMA, refunds, and Windows PC notes.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Buyer reviews for {brand} — ESP, aimbot, loot ESP, Cloud DMA, and patch updates for Escape from Tarkov on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — raid tips, ESP, aimbot, loot routes, and {antiCheat} update coverage for Windows PC players who raid.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, loot ESP & Cloud DMA for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes player ESP with skeleton, loot ESP, aimbot, no recoil, and Cloud DMA with {antiCheat} bypass.',
		heroLede: 'Undetected player ESP, loot ESP, aimbot, and Cloud DMA for Escape from Tarkov on Windows PC.',
		blogLabel: 'Tarkov Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you raid.',
		previewIntro: 'Undetected cheats for {game} — player ESP with skeleton, loot ESP, aimbot, no recoil, Cloud DMA, and BattlEye bypass.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID — 24/7 support available.',
		faqIntro: 'Short answers about delivery, setup, updates, Cloud DMA, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, aimbot, loot ESP, Cloud DMA, and support.',
		chipEsp: 'Player ESP / skeleton',
		chipAim: 'Aimbot & no recoil',
		chipRadar: 'Loot & extract ESP',
		chipUpdates: 'Cloud DMA & support',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-15',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/eft-cheats-screenshot-1.webp',
				title: 'Player ESP with skeleton overlay in Escape from Tarkov',
				caption: 'EFT cheats player ESP showing PMCs and Scavs with skeleton overlay',
			},
			{
				src: '/images/eft-cheats-screenshot-2.webp',
				title: 'Loot ESP and multihack menu for Tarkov raids',
				caption: 'Loot ESP, aimbot, and container ESP in one EFT cheats license',
			},
			{
				src: '/images/eft-cheats-hero-1920w.webp',
				title: 'Escape from Tarkov — ESP and aimbot',
				caption: 'Undetected cheats with player ESP, loot ESP, and Cloud DMA',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
