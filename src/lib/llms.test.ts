import assert from "node:assert/strict";
import { test } from "node:test";
import { buildLlmsTxt } from "./llms";

test("llms.txt includes supplied collection entries as canonical links and summaries", () => {
	const result = buildLlmsTxt([
		{
			id: "new-post",
			data: { title: "New post", description: "A short summary." },
		},
		{
			id: "another-post",
			data: { title: "Another post", description: "Another summary." },
		},
	]);
	assert.match(result, /^# Juliusz Kowalewski\n/);
	assert.match(
		result,
		/\[New post\]\(https:\/\/kowalewsky.dev\/blog\/new-post\/\): A short summary\./,
	);
	assert.match(
		result,
		/\[Another post\]\(https:\/\/kowalewsky.dev\/blog\/another-post\/\)/,
	);
	assert.match(result, /https:\/\/github.com\/Imunal\/react-qztray/);
	assert.match(
		result,
		/https:\/\/www.linkedin.com\/in\/juliusz-kowalewski-657856179\//,
	);
	for (const match of result.matchAll(/\]\(([^)]+)\)/g)) {
		assert.equal(new URL(match[1]).protocol, "https:");
	}
});
