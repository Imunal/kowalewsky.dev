import assert from "node:assert/strict";
import { test } from "node:test";
import { pageToMarkdown } from "./markdown";

test("Markdown preserves page content while stripping layout and scripts", () => {
	const markdown = pageToMarkdown(`<!doctype html><html>
		<head><title>Page</title><style>body { color: red }</style></head>
		<body><nav>Site navigation</nav><main>
			<header><h1>Printing guide</h1></header>
			<p>Use <a href="/blog/">the blog</a> and <strong>TypeScript</strong>.</p>
			<ul><li>Install the package</li><li>Connect the printer</li></ul>
			<pre><code class="language-ts">const value = &lt;T&gt;(x: T) =&gt; x;\n</code></pre>
			<a href="https://github.com/Imunal" aria-label="Visit my GitHub profile"><svg><path d="M0" /></svg></a>
			<p><span>react</span><span>typescript</span></p><!--email_off-->
			<canvas>Animation fallback</canvas><script>trackVisitor()</script>
		</main><footer>Site footer</footer></body></html>`);
	assert.match(markdown, /^# Printing guide/m);
	assert.match(markdown, /\[the blog\]\(\/blog\/\)/);
	assert.match(markdown, /\*\*TypeScript\*\*/);
	assert.match(markdown, /- Install the package\n- Connect the printer/);
	assert.match(markdown, /```ts\nconst value = <T>\(x: T\) => x;\n```/);
	assert.match(
		markdown,
		/\[Visit my GitHub profile\]\(https:\/\/github.com\/Imunal\)/,
	);
	assert.match(markdown, /react typescript/);
	assert.doesNotMatch(
		markdown,
		/Site navigation|Site footer|trackVisitor|Animation fallback|<svg|color: red|<!--/,
	);
});
