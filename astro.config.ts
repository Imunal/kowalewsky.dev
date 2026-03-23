import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import rehypeHighlight from "rehype-highlight";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
	site: "https://kowalewsky.dev",
	output: "static",
	prefetch: true,
	fonts: [
		{
			name: "Inter",
			cssVariable: "--font-inter",
			provider: fontProviders.google(),
			weights: [400, 500, 600, 700, 800],
			styles: ["normal"],
			subsets: ["latin"],
		},
	],
	integrations: [
		mdx(),
		sitemap(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		rehypePlugins: [rehypeHighlight],
		syntaxHighlight: false,
	},
});
