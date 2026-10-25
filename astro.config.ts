import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import rehypeHighlight from "rehype-highlight";
import { defineConfig, fontProviders } from "astro/config";
import markdown from "./src/integrations/markdown";

export default defineConfig({
	site: "https://kowalewsky.dev",
	output: "static",
	trailingSlash: "always",
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
		markdown(),
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
		processor: unified({
			rehypePlugins: [rehypeHighlight],
		}),
		syntaxHighlight: false,
	},
});
