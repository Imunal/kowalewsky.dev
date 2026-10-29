import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { buildLlmsTxt } from "../lib/llms";

export const GET: APIRoute = async () => {
	const posts = await getCollection("blog");
	posts.sort(
		(a, b) =>
			b.data.date.localeCompare(a.data.date) || a.id.localeCompare(b.id),
	);

	return new Response(buildLlmsTxt(posts), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
};
