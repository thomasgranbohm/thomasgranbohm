const CACHE_NAME = "thomasgranbohm-v1";
const toCache = [
	"/fonts/Heebo.ttf",
	"/images/icon-x48.png",
	"/images/icon-x96.png",
	"/images/icon-x192.png",
	"/images/icon-x384.png",
	"/images/icon-x512.png",
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

				return fetch(e.request);
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