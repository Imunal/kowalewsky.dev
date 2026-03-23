/**
 * Generates homepage OG images in all standard sizes.
 * Run: pnpm generate:og
 *
 * Note: Run `pnpm build` first so .astro/fonts/ is populated with Inter.
 *
 * Output:
 *   public/og-image.png        — 1200×630  (Facebook, Twitter/X, LinkedIn, Discord, Slack, Google)
 *   public/og-image-square.png — 1200×1200 (Instagram, WhatsApp link preview)
 */

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { buildHomepageLandscape, buildHomepageSquare } from "../src/lib/og";

const root = resolve(__dirname, "..");

const out = (name: string, buf: Buffer) => {
	const path = resolve(root, "public", name);
	writeFileSync(path, buf);
	console.log(`✓  ${name.padEnd(24)}  ${(buf.length / 1024).toFixed(1)} KB`);
};

Promise.all([
	buildHomepageLandscape().then((buf) => out("og-image.png", buf)),
	buildHomepageSquare().then((buf) => out("og-image-square.png", buf)),
]).then(() => console.log("\nDone."));
