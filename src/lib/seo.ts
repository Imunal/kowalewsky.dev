export const SITE_URL = "https://kowalewsky.dev";

export const buildCanonicalUrl = (pathOrUrl: string) => {
	const url = new URL(pathOrUrl, SITE_URL);

	if (url.origin !== SITE_URL) {
		throw new Error(`URL must use the site origin: ${SITE_URL}`);
	}

	url.search = "";
	url.hash = "";
	url.pathname = url.pathname === "/" ? "/" : `${url.pathname.replace(/\/+$/, "")}/`;

	return url.toString();
};
