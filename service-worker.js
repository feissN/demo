self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static")
            .then(cache => {
                return cache.addAll([
                    "./",
                    "./src/style.css",
                    "./assets/img/logo192.png",
                    "./assets/img/notification.png"
                ])
            })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                return res || fetch(e.request);
            })
    );
});