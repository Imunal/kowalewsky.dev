import type { MetadataRoute } from "next";
import { getAllPosts } from "lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const posts = getAllPosts();

	return [
		{
			url: "https://kowalewsky.dev",
			lastModified: new Date("2026-02-19"),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://kowalewsky.dev/blog",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		...posts.map((post) => ({
			url: `https://kowalewsky.dev/blog/${post.slug}`,
			lastModified: new Date(post.date),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		})),
	];
}
