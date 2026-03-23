import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const FONT_DIR = join(process.cwd(), ".astro/fonts");

const loadFont = (weight: number): string => {
	const file = readdirSync(FONT_DIR).find((f) =>
		f.startsWith(`font-inter-${weight}-normal-latin`),
	);
	if (!file) throw new Error(`Inter ${weight} not found in .astro/fonts`);
	return readFileSync(join(FONT_DIR, file)).toString("base64");
};

let inter700: string;
let inter800: string;

const getFonts = () => {
	if (!inter700) inter700 = loadFont(700);
	if (!inter800) inter800 = loadFont(800);
	return { inter700, inter800 };
};

const fontFaces = () => {
	const { inter700, inter800 } = getFonts();
	return `
    @font-face {
      font-family: 'Inter';
      font-weight: 700;
      src: url('data:font/woff2;base64,${inter700}') format('woff2');
    }
    @font-face {
      font-family: 'Inter';
      font-weight: 800;
      src: url('data:font/woff2;base64,${inter800}') format('woff2');
    }
  `;
};

const escapeXml = (s: string) =>
	s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const wrapText = (text: string, maxChars: number): string[] => {
	const words = text.split(" ");
	const lines: string[] = [];
	let current = "";
	for (const word of words) {
		if (`${current} ${word}`.trim().length > maxChars) {
			if (current) lines.push(current.trim());
			current = word;
		} else {
			current = `${current} ${word}`.trim();
		}
	}
	if (current) lines.push(current.trim());
	return lines;
};

/** Renders SVG at 2× density then downscales — crisp text, full 24-bit colour. */
const renderSvg = async (
	svg: string,
	width: number,
	height: number,
): Promise<Buffer> =>
	sharp(Buffer.from(svg), { density: 144 })
		.resize(width, height, { kernel: "lanczos3" })
		.png({ compressionLevel: 9 })
		.toBuffer();

// ─── Homepage OG ─────────────────────────────────────────────────────────────

/** Landscape 1200×630 — Facebook, Twitter/X, LinkedIn, Discord, Slack, Google */
export const buildHomepageLandscape = (w = 1200, h = 630): Promise<Buffer> => {
	const W = w * 2;
	const H = h * 2;
	const pad = 120;

	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><style>${fontFaces()}</style></defs>
  <rect width="${W}" height="${H}" fill="#111111" />

  <text x="${pad}" y="480"
    font-family="Inter" font-weight="800" font-size="320"
    fill="#e8e8e8" letter-spacing="-8">JK.</text>

  <text x="${pad}" y="680"
    font-family="Inter" font-weight="800" font-size="88"
    fill="#e8e8e8">Juliusz Kowalewski</text>

  <text x="${pad}" y="780"
    font-family="Inter" font-weight="700" font-size="60"
    fill="#555555">Full-Stack Developer</text>

  <text x="${pad}" y="${H - 60}"
    font-family="Inter" font-weight="700" font-size="44"
    fill="#444444">kowalewsky.dev</text>
</svg>`;
	return renderSvg(svg, w, h);
};

/** Square 1200×1200 — Instagram, WhatsApp link preview */
export const buildHomepageSquare = (size = 1200): Promise<Buffer> => {
	const S = size * 2;
	const pad = 120;

	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}">
  <defs><style>${fontFaces()}</style></defs>
  <rect width="${S}" height="${S}" fill="#111111" />

  <text x="${pad}" y="680"
    font-family="Inter" font-weight="800" font-size="400"
    fill="#e8e8e8" letter-spacing="-10">JK.</text>

  <text x="${pad}" y="900"
    font-family="Inter" font-weight="800" font-size="96"
    fill="#e8e8e8">Juliusz Kowalewski</text>

  <text x="${pad}" y="1020"
    font-family="Inter" font-weight="700" font-size="68"
    fill="#555555">Full-Stack Developer</text>

  <text x="${pad}" y="${S - 80}"
    font-family="Inter" font-weight="700" font-size="52"
    fill="#444444">kowalewsky.dev</text>
</svg>`;
	return renderSvg(svg, size, size);
};

// ─── Blog post OG ────────────────────────────────────────────────────────────

const tagPill = (
	tag: string,
	x: number,
	y: number,
	fontSize: number,
	padX: number,
	height: number,
	rx: number,
) => {
	const approxWidth = tag.length * fontSize * 0.58 + padX * 2;
	return {
		svg: `
      <rect x="${x}" y="${y}" width="${approxWidth}" height="${height}" rx="${rx}" fill="#222222" />
      <text x="${x + approxWidth / 2}" y="${y + height * 0.68}"
        font-family="Inter" font-weight="700" font-size="${fontSize}"
        fill="#888888" text-anchor="middle">${escapeXml(tag)}</text>`,
		width: approxWidth + 16,
	};
};

/** Landscape 1200×630 — per-post, title + description + tags */
export const buildPostLandscape = (
	title: string,
	description: string,
	tags: string[],
	w = 1200,
	h = 630,
): Promise<Buffer> => {
	const W = w * 2;
	const H = h * 2;
	const pad = 120;

	const titleLines = wrapText(title, 28);
	const titleFontSize = 88;
	const titleLineHeight = 108;
	const titleY = 220;

	const titleSvg = titleLines
		.map(
			(line, i) =>
				`<text x="${pad}" y="${titleY + i * titleLineHeight}"
        font-family="Inter" font-weight="800" font-size="${titleFontSize}"
        fill="#e8e8e8">${escapeXml(line)}</text>`,
		)
		.join("\n");

	const descY = titleY + titleLines.length * titleLineHeight + 64;
	const descLines = wrapText(description, 54);
	const descSvg = descLines
		.slice(0, 2)
		.map(
			(line, i) =>
				`<text x="${pad}" y="${descY + i * 58}"
        font-family="Inter" font-weight="700" font-size="40"
        fill="#555555">${escapeXml(line)}</text>`,
		)
		.join("\n");

	const tagY = H - 160;
	let tagX = pad;
	const tagsSvg = tags
		.slice(0, 6)
		.map((tag) => {
			const { svg, width } = tagPill(tag, tagX, tagY, 26, 24, 52, 8);
			tagX += width;
			return svg;
		})
		.join("\n");

	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><style>${fontFaces()}</style></defs>
  <rect width="${W}" height="${H}" fill="#111111" />
  <rect x="${pad}" y="80" width="160" height="8" rx="4" fill="#333333" />

  ${titleSvg}
  ${descSvg}
  ${tagsSvg}

  <text x="${W - 100}" y="${H - 60}"
    font-family="Inter" font-weight="800" font-size="52"
    fill="#2a2a2a" text-anchor="end">JK.</text>

  <text x="${pad}" y="${H - 60}"
    font-family="Inter" font-weight="700" font-size="40"
    fill="#333333">kowalewsky.dev</text>
</svg>`;

	return renderSvg(svg, w, h);
};

/** Square 1200×1200 — per-post, Instagram / WhatsApp */
export const buildPostSquare = (
	title: string,
	description: string,
	tags: string[],
	size = 1200,
): Promise<Buffer> => {
	const S = size * 2;
	const pad = 120;

	const titleLines = wrapText(title, 22);
	const titleFontSize = 108;
	const titleLineHeight = 130;
	const titleY = 280;

	const titleSvg = titleLines
		.map(
			(line, i) =>
				`<text x="${pad}" y="${titleY + i * titleLineHeight}"
        font-family="Inter" font-weight="800" font-size="${titleFontSize}"
        fill="#e8e8e8">${escapeXml(line)}</text>`,
		)
		.join("\n");

	const descY = titleY + titleLines.length * titleLineHeight + 80;
	const descLines = wrapText(description, 40);
	const descSvg = descLines
		.slice(0, 3)
		.map(
			(line, i) =>
				`<text x="${pad}" y="${descY + i * 68}"
        font-family="Inter" font-weight="700" font-size="48"
        fill="#555555">${escapeXml(line)}</text>`,
		)
		.join("\n");

	const tagY = S - 220;
	let tagX = pad;
	const tagsSvg = tags
		.slice(0, 4)
		.map((tag) => {
			const { svg, width } = tagPill(tag, tagX, tagY, 30, 28, 62, 10);
			tagX += width;
			return svg;
		})
		.join("\n");

	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}">
  <defs><style>${fontFaces()}</style></defs>
  <rect width="${S}" height="${S}" fill="#111111" />
  <rect x="${pad}" y="100" width="180" height="10" rx="5" fill="#333333" />

  ${titleSvg}
  ${descSvg}
  ${tagsSvg}

  <text x="${S - 100}" y="${S - 80}"
    font-family="Inter" font-weight="800" font-size="64"
    fill="#2a2a2a" text-anchor="end">JK.</text>

  <text x="${pad}" y="${S - 80}"
    font-family="Inter" font-weight="700" font-size="48"
    fill="#333333">kowalewsky.dev</text>
</svg>`;

	return renderSvg(svg, size, size);
};

// ─── Convenience re-exports ───────────────────────────────────────────────────

/** @deprecated use buildHomepageLandscape */
export const buildHomepageOg = buildHomepageLandscape;

/** @deprecated use buildPostLandscape */
export const buildPostOg = buildPostLandscape;
