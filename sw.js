const CACHE_NAME = 'emergency-checkin-v5';

// Only pre-cache local core files. 
// Do NOT put CDN URLs here to prevent install failures from network hiccups.
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 1. Install Event: Cache local app shell and skip waiting
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

// 2. Activate Event: Clean up outdated caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // Deletes old cache versions
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// 3. Fetch Event: Cache-first strategy with dynamic network fallback & caching
self.addEventListener('fetch', (event) => {
  // Only process GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached file (local assets or previously fetched Bootstrap CDN files)
      if (cachedResponse) {
        return cachedResponse;
      }

      // If not in cache, fetch from network and store copy in cache dynamically
      return fetch(event.request).then((networkResponse) => {
        // Validate response (allows status 200 and cross-origin 'opaque' responses)
        if (!networkResponse || (networkResponse.status !== 200 && networkResponse.type !== 'opaque')) {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // Offline fallback for HTML page navigations
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// Add this at the bottom of sw.js
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
