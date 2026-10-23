import { getCollection } from "astro:content";
import type { APIRoute, GetStaticPaths, InferGetStaticPropsType } from "astro";
import { buildPostLandscape } from "../../lib/og";

export const getStaticPaths = (async () => {
	const posts = await getCollection("blog");
	return posts.map((post) => ({
		params: { slug: post.id },
		props: { post },
	}));
}) satisfies GetStaticPaths;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute<Props> = async ({ props }) => {
	const { post } = props;
	const png = await buildPostLandscape(
		post.data.title,
		post.data.description,
		post.data.tags,
	);
	return new Response(Uint8Array.from(png), {
		headers: { "Content-Type": "image/png" },
	});
};
