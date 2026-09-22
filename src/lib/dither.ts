// Ordered dithering keeps the texture stable as the underlying folds move.
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
const smoothstep = (low: number, high: number, value: number) => {
	const t = Math.max(0, Math.min(1, (value - low) / (high - low)));
	return t * t * (3 - 2 * t);
};

// A seeded noise field avoids repeating wave bands and stays stable on reload.
const noiseField = new Float32Array(128 * 128);
let seed = 42;
for (let i = 0; i < noiseField.length; i++) {
	seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
	noiseField[i] = seed / 4294967296;
}
const noise = (x: number, y: number) => {
	const ix = Math.floor(x);
	const iy = Math.floor(y);
	const fx = x - ix;
	const fy = y - iy;
	const sx = fx * fx * (3 - 2 * fx);
	const sy = fy * fy * (3 - 2 * fy);
	const a = noiseField[(iy & 127) * 128 + (ix & 127)];
	const b = noiseField[(iy & 127) * 128 + ((ix + 1) & 127)];
	const c = noiseField[((iy + 1) & 127) * 128 + (ix & 127)];
	const d = noiseField[((iy + 1) & 127) * 128 + ((ix + 1) & 127)];
	return (a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy;
};

/** Shared pixel renderer for the animated hero and static OG backgrounds. */
export const fillDitherPixels = (
	data: Uint8ClampedArray,
	width: number,
	height: number,
	elapsed = 0,
	pointer = { x: 0, y: 0, strength: 0 },
): void => {
	const aspect = width / height;
	const time = elapsed * 0.16;
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const u = x / width;
			const v = y / height;
			const dx = (u - pointer.x) * aspect;
			const dy = v - pointer.y;
			const influence =
				Math.exp(-(dx * dx + dy * dy) * 14) * pointer.strength * 0.3;
			// Curl around the pointer rather than simply pushing the texture away.
			const px = u * aspect + influence * (dx - dy) * 1.8;
			const py = v + influence * (dy + dx) * 1.8;
			const warpX = noise(px * 1.7 + time, py * 1.7 - time * 0.6);
			const warpY = noise(px * 1.7 - time * 0.7 + 31, py * 1.7 + time);
			const nx = px * 2.8 + warpX * 1.8;
			const ny = py * 2.8 + warpY * 1.8;
			// Layers drift independently, so the contours evolve as they travel.
			const cloud =
				noise(nx + time * 0.5, ny - time * 0.8) * 0.65 +
				noise(nx * 2.1 - time + 17, ny * 2.1 + time * 0.4) * 0.25 +
				noise(nx * 4.3 + time * 0.7, ny * 4.3 - time + 53) * 0.1;
			const density = Math.min(
				0.95,
				smoothstep(0.28, 0.72, cloud) * 0.85 + influence * 0.28,
			);
			const threshold = (BAYER[(y % 4) * 4 + (x % 4)] + 0.5) / 16;
			const edge = smoothstep(0, 0.18, v) * (1 - smoothstep(0.72, 1, v));
			const index = (y * width + x) * 4;
			data[index] = 102;
			data[index + 1] = 102;
			data[index + 2] = 102;
			data[index + 3] =
				density > threshold ? Math.round(edge * (65 + influence * 65)) : 0;
		}
	}
};
