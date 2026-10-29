import type { CollectionEntry } from "astro:content";

export const SITE_URL = "https://kowalewsky.dev";

export const buildCanonicalUrl = (pathOrUrl: string) => {
	const url = new URL(pathOrUrl, SITE_URL);

	if (url.origin !== SITE_URL) {
		throw new Error(`URL must use the site origin: ${SITE_URL}`);
	}

	url.search = "";
	url.hash = "";
	url.pathname =
		url.pathname === "/" ? "/" : `${url.pathname.replace(/\/+$/, "")}/`;

	return url.toString();
};

export const SITE_PERSON = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Juliusz Kowalewski",
	jobTitle: "Full-Stack Developer",
	url: SITE_URL,
	image: `${SITE_URL}/og-image.png`,
	description:
		"Experienced Full-Stack Developer specializing in designing and implementing web solutions using modern technologies.",
	knowsAbout: [
		"TypeScript",
		"Next.js",
		"NestJS",
		"React",
		"Node.js",
		"PostgreSQL",
		"AWS",
		"Docker",
		"Apache Kafka",
		"Microservices",
	],
	sameAs: [
		"https://www.linkedin.com/in/juliusz-kowalewski-657856179/",
		"https://github.com/Imunal",
	],
	email: "juliusz@kowalewsky.dev",
};

export const buildBlogPosting = (
	post: Pick<CollectionEntry<"blog">, "id" | "data">,
	image?: string,
) => {
	const url = buildCanonicalUrl(`/blog/${post.id}`);
	const author = {
		"@type": "Person",
		name: SITE_PERSON.name,
		url: buildCanonicalUrl("/"),
	};

	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.data.title,
		description: post.data.description,
		datePublished: new Date(post.data.date).toISOString(),
		...(post.data.updated
			? { dateModified: new Date(post.data.updated).toISOString() }
			: {}),
		author,
		publisher: author,
		mainEntityOfPage: { "@type": "WebPage", "@id": url },
		url,
		...(image ? { image: new URL(image, SITE_URL).href } : {}),
		...(post.data.tags.length ? { keywords: post.data.tags } : {}),
		inLanguage: "en",
	};
};

// Escape HTML-sensitive characters before embedding JSON in a script element.
export const serializeJsonLd = (value: unknown): string =>
	JSON.stringify(value).replace(
		/[<>&\u2028\u2029]/g,
		(character) =>
			`\\u${character.charCodeAt(0).toString(16).padStart(4, "0")}`,
	);
