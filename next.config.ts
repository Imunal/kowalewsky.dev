import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
	options: {
		remarkPlugins: ["remark-frontmatter"],
		rehypePlugins: ["rehype-highlight"],
	},
});

export default withMDX(nextConfig);
