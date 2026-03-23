import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostMeta } from "lib/blog";

const siteUrl = "https://kowalewsky.dev";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
	return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const post = getPostMeta(slug);
	return {
		title: `${post.title} | Juliusz Kowalewski`,
		description: post.description,
		alternates: { canonical: `/blog/${slug}` },
		openGraph: {
			type: "article",
			title: post.title,
			description: post.description,
			url: `${siteUrl}/blog/${slug}`,
			publishedTime: post.date,
			authors: [siteUrl],
			tags: post.tags,
			images: [{ url: "/og-image.png", width: 1200, height: 630 }],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			images: ["/og-image.png"],
		},
	};
}

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

const PostPage = async ({ params }: Props) => {
	const { slug } = await params;
	const post = getPostMeta(slug);
	const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.description,
		datePublished: post.date,
		dateModified: post.date,
		keywords: post.tags,
		url: `${siteUrl}/blog/${slug}`,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${siteUrl}/blog/${slug}`,
		},
		author: {
			"@type": "Person",
			name: "Juliusz Kowalewski",
			url: siteUrl,
		},
		publisher: {
			"@type": "Person",
			name: "Juliusz Kowalewski",
			url: siteUrl,
		},
	};

	return (
		<article className="py-12">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<Link
				href="/blog"
				className="mb-8 inline-flex items-center gap-1 font-mono text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
			>
				← Back to blog
			</Link>

			<header className="mt-6 mb-10 border-b border-gray-200 dark:border-gray-800 pb-8">
				<h1 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl leading-tight">
					{post.title}
				</h1>
				<div className="flex flex-wrap items-center gap-3">
					<time
						dateTime={post.date}
						className="font-mono text-sm text-gray-500 dark:text-gray-400"
					>
						{formatDate(post.date)}
					</time>
					{post.tags.length > 0 && (
						<>
							<span className="text-gray-300 dark:text-gray-600">·</span>
							<div className="flex flex-wrap gap-2">
								{post.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-md bg-gray-200 dark:bg-gray-800 px-2 py-0.5 font-mono text-xs text-gray-500 dark:text-white"
									>
										{tag}
									</span>
								))}
							</div>
						</>
					)}
				</div>
			</header>

			<Post />
		</article>
	);
};

export default PostPage;
