import type { CollectionEntry } from "astro:content";
import { openSourceProjects } from "./projects";
import { buildCanonicalUrl, SITE_PERSON } from "./seo";

type PostSummary = {
	id: string;
	data: Pick<CollectionEntry<"blog">["data"], "title" | "description">;
};

export const buildLlmsTxt = (posts: readonly PostSummary[]): string => {
	// The professional summary follows index.astro and CommercialProjects.astro.
	return `# ${SITE_PERSON.name}

> Full-Stack Developer building web platforms and APIs. Currently working at Diameter Pay.

Technical expertise: ${SITE_PERSON.knowsAbout.join(", ")}.

Professional experience includes Fototransfer.pl's B2B Print-On-Demand platform (2024–2025) and production support system (2018–2025), Euroland CRM (2022–present), ProFoto WMS (2020), and Camptravels.com (2019). Work includes partner APIs, ERP integration, microservices, warehouse management, and browser-based label printing.

## Website

- [Portfolio](${buildCanonicalUrl("/")}): Professional experience and open-source projects.
- [Blog](${buildCanonicalUrl("/blog")}): Articles on software architecture, TypeScript, and building production systems.

## Profiles

${SITE_PERSON.sameAs.map((url) => `- [${url.includes("github.com") ? "GitHub" : "LinkedIn"}](${url})`).join("\n")}

## Open-source projects

${openSourceProjects.map((project) => `- [${project.title}](${project.repoLink}): ${project.description}`).join("\n")}

## Blog articles

${posts.map((post) => `- [${post.data.title}](${buildCanonicalUrl(`/blog/${post.id}`)}): ${post.data.description}`).join("\n")}
`;
};
