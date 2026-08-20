/* Palmer Property Maintenance Operations — v8.2.0 */
const CACHE_NAME = 'palmer-ppm-ops-v8.2.0';
const ASSETS = ['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./favicon-32.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => {
    const network = fetch(event.request).then(response => {
      if (response && response.ok && new URL(event.request.url).origin === self.location.origin) {
        const clone = response.clone();
        event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone)));
      }
      return response;
    }).catch(() => cached);
    return cached || network;
  }));
});
