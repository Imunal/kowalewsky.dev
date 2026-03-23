import { getCollection } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";
import { buildPostSquare } from "../../lib/og";

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getCollection("blog");
	return posts.map((post) => ({
		params: { slug: post.id },
		props: { post },
	}));
};

export const GET: APIRoute = async ({ props }) => {
	const { post } = props as Awaited<
		ReturnType<typeof getStaticPaths>
	>[number]["props"];
	const png = await buildPostSquare(
		post.data.title,
		post.data.description,
		post.data.tags,
	);
	return new Response(png, {
		headers: { "Content-Type": "image/png" },
	});
};
