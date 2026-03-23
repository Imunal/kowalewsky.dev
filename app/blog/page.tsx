import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "lib/blog";

export const metadata: Metadata = {
	title: "Blog | Juliusz Kowalewski",
	description:
		"Thoughts on software architecture, TypeScript, backend engineering, and the lessons learned building production systems.",
	alternates: { canonical: "/blog" },
	openGraph: {
		type: "website",
		title: "Blog | Juliusz Kowalewski",
		description:
			"Thoughts on software architecture, TypeScript, backend engineering, and the lessons learned building production systems.",
		url: "https://kowalewsky.dev/blog",
		images: [{ url: "/og-image.png", width: 1200, height: 630 }],
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog | Juliusz Kowalewski",
		description:
			"Thoughts on software architecture, TypeScript, backend engineering, and the lessons learned building production systems.",
		images: ["/og-image.png"],
	},
};

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

const BlogPage = () => {
	const posts = getAllPosts();

	return (
		<section className="py-12">
			<h1 className="mb-2 text-3xl font-bold text-black dark:text-white md:text-5xl">
				Blog
			</h1>
			<p className="mb-12 font-mono text-sm text-gray-500 dark:text-gray-400">
				Thoughts on software architecture, TypeScript, and building production
				systems.
			</p>

			<div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
				{posts.map((post) => (
					<Link
						key={post.slug}
						href={`/blog/${post.slug}`}
						className="group flex flex-col gap-1 py-6 hover:opacity-80 transition-opacity"
					>
						<div className="flex items-start justify-between gap-4">
							<h2 className="font-bold text-black dark:text-white group-hover:underline underline-offset-4">
								{post.title}
							</h2>
							<time
								dateTime={post.date}
								className="shrink-0 font-mono text-xs text-gray-400 dark:text-gray-500 mt-1"
							>
								{formatDate(post.date)}
							</time>
						</div>
						<p className="font-mono text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
							{post.description}
						</p>
						<div className="mt-2 flex flex-wrap gap-2">
							{post.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-md bg-gray-200 dark:bg-gray-800 px-2 py-0.5 font-mono text-xs text-gray-500 dark:text-white"
								>
									{tag}
								</span>
							))}
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default BlogPage;
