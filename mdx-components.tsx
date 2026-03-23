import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h2: ({ children }) => (
			<h2 className="mt-10 mb-3 text-xl font-bold text-black dark:text-white">
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className="mt-8 mb-2 text-[1.0625rem] font-bold text-black dark:text-white">
				{children}
			</h3>
		),
		p: ({ children }) => (
			<p className="my-5 text-[0.9375rem] leading-[1.75] text-gray-600 dark:text-gray-400">
				{children}
			</p>
		),
		ul: ({ children }) => (
			<ul className="my-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
				{children}
			</ul>
		),
		ol: ({ children }) => (
			<ol className="my-4 list-decimal pl-6 text-gray-600 dark:text-gray-400">
				{children}
			</ol>
		),
		li: ({ children }) => <li className="my-1.5">{children}</li>,
		code: ({ children, className }) =>
			className ? (
				<code className={`text-[0.8125rem] ${className}`}>{children}</code>
			) : (
				<code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-[0.875em] dark:bg-gray-800 dark:text-gray-200">
					{children}
				</code>
			),
		pre: ({ children }) => (
			<pre className="my-6 overflow-x-auto rounded-lg bg-gray-900 dark:bg-gray-800">
				{children}
			</pre>
		),
		blockquote: ({ children }) => (
			<blockquote className="my-6 border-l-[3px] border-gray-300 pl-5 italic text-gray-500 dark:border-gray-600 dark:text-gray-500">
				{children}
			</blockquote>
		),
		a: ({ children, href }) => (
			<a
				href={href}
				className="text-black underline underline-offset-[3px] dark:text-white"
			>
				{children}
			</a>
		),
		hr: () => (
			<hr className="my-8 border-gray-200 dark:border-gray-800" />
		),
		strong: ({ children }) => (
			<strong className="font-semibold text-gray-700 dark:text-gray-300">
				{children}
			</strong>
		),
		...components,
	};
}
