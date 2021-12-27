const CACHE_NAME = 'salonme'
const DATA_CACHE_NAME = "salonme-v2"

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    'icons/android-chrome-192x192.png',
    'icons/android-chrome-512x512.png',
    'icons/apple-touch-icon.png',
    'icons/favicon-16x16.png',
    'icons/favicon-32x32.png'
];

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('files successfully pre-cached')
            return cache.addAll(FILES_TO_CACHE)
        })
    )
});

self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(evt.request);
            })
    )

});

self.addEventListener('activate', function (evt) {
    var cacheList = ['salonme'];
    evt.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheNames => {
                    if (cacheList.indexOf(cacheNames) === -1) {
                        return caches.delete(cacheNames);
                    }
                })
            )
        })
    );
});
