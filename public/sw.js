const CACHE_NAME = "thomasgranbohm-v1";
const toCache = [
	"/",
	"/fonts/Heebo.ttf",
	"/images/profile-picture@384px.webp",
]

self.addEventListener("install", (e) => {
	e.waitUntil(
		caches.open(CACHE_NAME)
			.then((cache) => {
				console.log("Opened cache.")
				return cache.addAll(toCache);
			})
	)
});

self.addEventListener("fetch", (e) => {
	e.respondWith(
		caches.match(e.request)
			.then((resp) => {
				if (resp) return resp;

				return fetch(e.request)
					.then((resp) => {
						if (!resp || resp.status !== 200 || resp.type !== "basic")
							return resp;

						const respToCache = resp.clone();

						caches.open(CACHE_NAME)
							.then((cache) => cache.put(e.request, respToCache))

						return resp;
					})
			})
	)
})

self.addEventListener("activate", (e) => {
	e.waitUntil(
		caches.keys()
			.then((cacheNames) => Promise.all(
				cacheNames.map(
					(cacheName) => cacheName !== CACHE_NAME
						? caches.delete(cacheName)
						: undefined
				)
			))
	)
})