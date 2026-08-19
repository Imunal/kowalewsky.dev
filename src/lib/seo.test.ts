import assert from "node:assert/strict";
import { test } from "node:test";
import { buildCanonicalUrl } from "./seo";

test("buildCanonicalUrl follows the hosting trailing slash policy", () => {
	assert.equal(
		buildCanonicalUrl("/blog/browser-to-desktop-printing-with-react-qztray?utm_source=search#setup"),
		"https://kowalewsky.dev/blog/browser-to-desktop-printing-with-react-qztray/",
	);
});

test("buildCanonicalUrl rejects a URL outside the site origin", () => {
	assert.throws(
		() => buildCanonicalUrl("https://example.com/blog/post"),
		/site origin/,
	);
});
