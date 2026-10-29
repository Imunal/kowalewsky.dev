import assert from "node:assert/strict";
import { test } from "node:test";
import { buildBlogPosting, buildCanonicalUrl, serializeJsonLd } from "./seo";

test("buildCanonicalUrl follows the hosting trailing slash policy", () => {
	assert.equal(
		buildCanonicalUrl(
			"/blog/browser-to-desktop-printing-with-react-qztray?utm_source=search#setup",
		),
		"https://kowalewsky.dev/blog/browser-to-desktop-printing-with-react-qztray/",
	);
});

test("buildCanonicalUrl rejects a URL outside the site origin", () => {
	assert.throws(
		() => buildCanonicalUrl("https://example.com/blog/post"),
		/site origin/,
	);
});

test("BlogPosting uses canonical URLs, ISO dates and optional article metadata", () => {
	const schema = buildBlogPosting(
		{
			id: "example",
			data: {
				title: "Example",
				description: "A description",
				date: "2026-03-23",
				updated: "2026-04-01T12:30:00+02:00",
				tags: ["typescript"],
			},
		},
		"/og/example.png",
	);
	assert.equal(schema["@type"], "BlogPosting");
	assert.equal(schema.headline, "Example");
	assert.equal(schema.description, "A description");
	assert.equal(schema.url, "https://kowalewsky.dev/blog/example/");
	assert.equal(schema.mainEntityOfPage["@id"], schema.url);
	assert.equal(schema.datePublished, "2026-03-23T00:00:00.000Z");
	assert.equal(schema.dateModified, "2026-04-01T10:30:00.000Z");
	assert.equal(schema.image, "https://kowalewsky.dev/og/example.png");
	assert.deepEqual(schema.keywords, ["typescript"]);
	assert.equal(schema.inLanguage, "en");
	assert.equal(schema.author["@type"], "Person");
	assert.equal(schema.author.name, "Juliusz Kowalewski");
	assert.deepEqual(schema.publisher, schema.author);
});

test("BlogPosting omits unavailable optional fields", () => {
	const schema = JSON.parse(
		serializeJsonLd(
			buildBlogPosting({
				id: "minimal",
				data: {
					title: "Minimal",
					description: "Summary",
					date: "2026-03-23",
					tags: [],
				},
			}),
		),
	);
	for (const field of ["dateModified", "keywords", "image"]) {
		assert.equal(Object.hasOwn(schema, field), false);
	}
});

test("JSON-LD serialization cannot terminate its HTML script element", () => {
	const value = {
		headline: '</script><script>alert("test")</script> & \u2028\u2029',
	};
	const serialized = serializeJsonLd(value);
	assert.doesNotMatch(serialized, /[<>&\u2028\u2029]/);
	assert.deepEqual(JSON.parse(serialized), value);
});
