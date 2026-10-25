import { glob, readFile, writeFile } from "node:fs/promises";
import type { AstroIntegration } from "astro";
import { pageToMarkdown } from "../lib/markdown";

export default function markdown(): AstroIntegration {
	return {
		name: "markdown-negotiation",
		hooks: {
			"astro:build:done": async ({ dir, logger }) => {
				let count = 0;
				for await (const path of glob("**/*.html", { cwd: dir })) {
					const html = await readFile(new URL(path, dir), "utf8");
					await writeFile(
						new URL(path.replace(/\.html$/, ".md"), dir),
						pageToMarkdown(html),
					);
					count++;
				}
				logger.info(`Generated ${count} Markdown pages`);
			},
		},
	};
}
