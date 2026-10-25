import { fromHtml } from "hast-util-from-html";
import { toMdast } from "hast-util-to-mdast";
import { toMarkdown } from "mdast-util-to-markdown";

type HtmlTree = ReturnType<typeof fromHtml>;
type HtmlNode = HtmlTree | HtmlTree["children"][number];

function stripLayout(node: HtmlNode): void {
	if (!("children" in node)) return;
	if (node.type === "element" && ["pre", "code"].includes(node.tagName)) return;
	if (
		node.type === "element" &&
		node.tagName === "a" &&
		node.properties.ariaLabel &&
		node.children.every((child) =>
			child.type === "text"
				? !child.value.trim()
				: child.type === "element" && child.tagName === "svg",
		)
	) {
		node.children = [
			{ type: "text", value: String(node.properties.ariaLabel) },
		];
	}
	node.children = node.children.filter(
		(child) =>
			child.type !== "comment" &&
			(child.type !== "element" ||
				!["script", "style", "nav", "footer", "svg", "canvas"].includes(
					child.tagName,
				)),
	);
	for (const child of node.children) stripLayout(child);
	// CSS gaps disappear in plain text; keep adjacent badges and icon links apart.
	node.children = node.children.flatMap((child, index, children) => {
		const next = children[index + 1];
		return child.type === "element" &&
			next?.type === "element" &&
			["span", "a", "time"].includes(child.tagName) &&
			["span", "a", "time"].includes(next.tagName)
			? [child, { type: "text" as const, value: " " }]
			: [child];
	});
}

export function pageToMarkdown(html: string): string {
	const tree = fromHtml(html);
	const body = tree.children.find(
		(node) => node.type === "element" && node.tagName === "html",
	);
	const content =
		body?.type === "element"
			? body.children.find(
					(node) => node.type === "element" && node.tagName === "body",
				)
			: undefined;
	const main =
		content?.type === "element"
			? content.children.find(
					(node) => node.type === "element" && node.tagName === "main",
				)
			: undefined;

	const page = main ?? tree;
	stripLayout(page);
	return toMarkdown(toMdast(page), { bullet: "-" });
}
