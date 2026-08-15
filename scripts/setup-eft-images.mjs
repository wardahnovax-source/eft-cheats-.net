import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const heroSource = path.join(imagesDir, 'eft-cheats-hero-source.png');

/** Full-HD ladder — allow upscale to 1920 for crisp desktop LCP */
const HERO_WIDTHS = [
	{ width: 640, quality: 82 },
	{ width: 1024, quality: 88 },
	{ width: 1536, quality: 92 },
	{ width: 1920, quality: 92 },
];

async function processHero() {
	const meta = await sharp(heroSource).metadata();
	console.log(`Hero source: ${meta.width}x${meta.height}`);

	// Native PNG master for OG / legacy
	await sharp(heroSource).png({ compressionLevel: 6 }).toFile(path.join(imagesDir, 'eft-cheats-hero-full.png'));

	for (const { width, quality } of HERO_WIDTHS) {
		const buffer = await sharp(heroSource)
			.resize({ width, withoutEnlargement: false })
			.webp({ quality, effort: 6, smartSubsample: false })
			.toBuffer();
		const file = `eft-cheats-hero-${width}w.webp`;
		await writeFile(path.join(imagesDir, file), buffer);
		const out = await sharp(buffer).metadata();
		console.log(`Wrote ${file} (${buffer.length} bytes, ${out.width}x${out.height})`);
	}
}

async function processLogo() {
	const logoBuffer = await sharp(heroSource)
		.resize(512, 512, { fit: 'cover', position: 'right' })
		.png()
		.toBuffer();
	await writeFile(path.join(imagesDir, 'eft-cheats-logo.png'), logoBuffer);
	await writeFile(
		path.join(imagesDir, 'eft-cheats-logo.webp'),
		await sharp(logoBuffer).webp({ quality: 90 }).toBuffer(),
	);
	console.log('Wrote eft-cheats-logo.png/webp');

	const publicDir = path.resolve('public');
	const sizes = [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	];
	for (const { name, size } of sizes) {
		await writeFile(
			path.join(publicDir, name),
			await sharp(logoBuffer).resize(size, size).png().toBuffer(),
		);
	}
	console.log('Wrote favicons');
}

await processHero();
await processLogo();
console.log('EFT hero setup complete.');
