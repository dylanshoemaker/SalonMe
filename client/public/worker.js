const CACHE_NAME = 'salonme'
const DATA_CACHE_NAME = "salonme-v2"

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icons/icon-512x512.png',
    '/icons/icon-384x384.png',
    '/icons/icon-192x192.png',
    '/icons/icon-152x152.png',
    '/icons/icon-144x144.png',
    '/icons/icon-128x128.png',
    '/icons/icon-96x96.png',
    '/icons/icon-72x72.png'
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
