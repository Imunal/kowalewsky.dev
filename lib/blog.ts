import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
	slug: string;
	title: string;
	date: string;
	description: string;
	tags: string[];
};

export const getAllPosts = (): PostMeta[] => {
	const fileNames = fs.readdirSync(postsDirectory);
	return fileNames
		.filter((name) => name.endsWith(".mdx"))
		.map((fileName) => {
			const slug = fileName.replace(/\.mdx$/, "");
			const fullPath = path.join(postsDirectory, fileName);
			const { data } = matter(fs.readFileSync(fullPath, "utf8"));
			return {
				slug,
				title: data.title as string,
				date: data.date as string,
				description: data.description as string,
				tags: (data.tags as string[]) ?? [],
			};
		})
		.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPostMeta = (slug: string): PostMeta => {
	const fullPath = path.join(postsDirectory, `${slug}.mdx`);
	const { data } = matter(fs.readFileSync(fullPath, "utf8"));
	return {
		slug,
		title: data.title as string,
		date: data.date as string,
		description: data.description as string,
		tags: (data.tags as string[]) ?? [],
	};
};
