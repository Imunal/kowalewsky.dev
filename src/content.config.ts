import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		updated: z.string().optional(),
		description: z.string(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog };
