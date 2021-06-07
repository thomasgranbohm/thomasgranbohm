export function getStrapiURL(path) {
	return `${
		(typeof window === "undefined"
			? process.env.PRIVATE_STRAPI_API_URL
			: process.env.NEXT_PUBLIC_STRAPI_API_URL) || "http://localhost:1337"
	}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path, options = {}) {
	const defaultOptions = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const mergedOptions = {
		...defaultOptions,
		...options,
	};
	const requestUrl = getStrapiURL(path);
	const response = await fetch(requestUrl, mergedOptions);

	if (!response.ok) {
		console.error(response.statusText);
		throw new Error(`An error occured please try again`);
	}
	const data = await response.json();
	return data;
}

export async function getHomePage() {
	const homepage = await fetchAPI(`/home-page`);

	return homepage;
}

// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData() {
	const global = await fetchAPI(`/global`);
	return global;
}
