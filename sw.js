const CACHE_NAME = 'drug-flashcards-v1';
const urlsToCache = [
  './',                    // Current folder (DrugFlashcardsApp/)
  './index.html',
  './manifest.json',
  './android-chrome-192x192.png',
  './android-chrome-512x512.png',
  './apple-touch-icon.png',
  './favicon.ico',
  './favicon-16x16.png',
  './favicon-32x32.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );

});

