// Choose a cache name
const cacheName = 'cache-v1.3';
// List the files to precache
const precacheResources = ['/','index.css',
                              'index.php',
                              'index.php?p=0',
                              'index.php?p=1',
                              'index.php?p=2',
                              'index.php?p=3',
                              'index.php?p=4',
                              'media/clock.png',
                              'media/point.png',
                              'target_old.png',
                              'media/wifi-signal.png',
                              'manifest.json'];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});