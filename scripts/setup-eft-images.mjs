import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const heroSource = path.join(imagesDir, 'eft-cheats-hero-source.png');

const HERO_WIDTHS = [640, 1024, 1536];

async function processHero() {
	const meta = await sharp(heroSource).metadata();
	console.log(`Hero source: ${meta.width}x${meta.height}`);

	// Full PNG for legacy references
	await sharp(heroSource)
		.resize({ width: 1536, withoutEnlargement: true })
		.png()
		.toFile(path.join(imagesDir, 'eft-cheats-hero-full.png'));

	for (const width of HERO_WIDTHS) {
		if (meta.width && width > meta.width) continue;
		const quality = width <= 640 ? 70 : 78;
		const buffer = await sharp(heroSource)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality, effort: 6 })
			.toBuffer();
		const file = `eft-cheats-hero-${width}w.webp`;
		await writeFile(path.join(imagesDir, file), buffer);
		console.log(`Wrote ${file} (${buffer.length} bytes)`);
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

async function processScreenshots() {
	for (const base of ['eft-cheats-screenshot-1', 'eft-cheats-screenshot-2']) {
		const source = path.join(imagesDir, `${base}.webp`);
		for (const width of [480, 960]) {
			const buffer = await sharp(source)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 78, effort: 6 })
				.toBuffer();
			await writeFile(path.join(imagesDir, `${base}-${width}w.webp`), buffer);
			console.log(`Wrote ${base}-${width}w.webp`);
		}
	}
}

await processHero();
await processLogo();
await processScreenshots();
console.log('EFT image setup complete.');
