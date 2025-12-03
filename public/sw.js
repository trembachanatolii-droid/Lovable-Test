// Service Worker for PWA offline support and caching
const CACHE_VERSION = 'v1.0.0';
const STATIC_CACHE_NAME = `static-cache-${CACHE_VERSION}`;
const DYNAMIC_CACHE_NAME = `dynamic-cache-${CACHE_VERSION}`;
const IMAGE_CACHE_NAME = `image-cache-${CACHE_VERSION}`;

// Maximum cache sizes
const MAX_IMAGE_CACHE_SIZE = 50; // Maximum number of images to cache
const MAX_DYNAMIC_CACHE_SIZE = 30; // Maximum number of dynamic pages to cache

// Assets to cache on install (App Shell)
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/favicon.svg',
  '/logo.png',
  '/manifest.json',
  '/offline.html'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');

  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching app shell');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Service worker installed successfully');
        return self.skipWaiting(); // Activate immediately
      })
      .catch((error) => {
        console.error('[SW] Error during installation:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Remove old versions of caches
              return cacheName.startsWith('static-cache-') ||
                     cacheName.startsWith('dynamic-cache-') ||
                     cacheName.startsWith('image-cache-') &&
                     cacheName !== STATIC_CACHE_NAME &&
                     cacheName !== DYNAMIC_CACHE_NAME &&
                     cacheName !== IMAGE_CACHE_NAME;
            })
            .map((cacheName) => {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[SW] Service worker activated');
        return self.clients.claim(); // Take control immediately
      })
  );
});

// Helper function to limit cache size
async function limitCacheSize(cacheName, maxSize) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();

  if (keys.length > maxSize) {
    // Delete oldest entries
    const deleteCount = keys.length - maxSize;
    for (let i = 0; i < deleteCount; i++) {
      await cache.delete(keys[i]);
      console.log('[SW] Removed old cache entry:', keys[i].url);
    }
  }
}

// Helper function to determine cache strategy based on request
function getCacheStrategy(request) {
  const url = new URL(request.url);
  const isNavigate = request.mode === 'navigate';
  const isHTML = request.headers.get('accept')?.includes('text/html');
  const isImage = request.destination === 'image' || /\.(png|jpg|jpeg|svg|gif|webp|ico)$/i.test(url.pathname);
  const isStatic = /\.(css|js|woff|woff2|ttf|eot)$/i.test(url.pathname);

  if (isNavigate || isHTML) {
    return 'network-first';
  } else if (isImage) {
    return 'cache-first-image';
  } else if (isStatic) {
    return 'cache-first';
  } else {
    return 'network-first';
  }
}

// Cache-first strategy for static assets
async function cacheFirstStrategy(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log('[SW] Serving from cache:', request.url);
      return cachedResponse;
    }

    console.log('[SW] Fetching from network:', request.url);
    const networkResponse = await fetch(request);

    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('[SW] Cache-first strategy failed:', error);
    throw error;
  }
}

// Cache-first strategy for images with size limit
async function cacheFirstImageStrategy(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log('[SW] Serving image from cache:', request.url);
      return cachedResponse;
    }

    console.log('[SW] Fetching image from network:', request.url);
    const networkResponse = await fetch(request);

    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(IMAGE_CACHE_NAME);
      cache.put(request, networkResponse.clone());
      // Limit cache size after adding new image
      limitCacheSize(IMAGE_CACHE_NAME, MAX_IMAGE_CACHE_SIZE);
    }

    return networkResponse;
  } catch (error) {
    console.error('[SW] Cache-first image strategy failed:', error);
    throw error;
  }
}

// Network-first strategy for HTML pages
async function networkFirstStrategy(request) {
  try {
    console.log('[SW] Fetching from network (network-first):', request.url);
    const networkResponse = await fetch(request);

    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
      // Limit cache size after adding new page
      limitCacheSize(DYNAMIC_CACHE_NAME, MAX_DYNAMIC_CACHE_SIZE);
    }

    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      console.log('[SW] Serving from cache (fallback):', request.url);
      return cachedResponse;
    }

    // If both network and cache fail, return offline page for navigation requests
    if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
      console.log('[SW] Serving offline page');
      return caches.match('/offline.html');
    }

    throw error;
  }
}

// Fetch event - handle requests with appropriate strategy
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests and chrome extensions
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const strategy = getCacheStrategy(event.request);

  switch (strategy) {
    case 'cache-first':
      event.respondWith(cacheFirstStrategy(event.request));
      break;
    case 'cache-first-image':
      event.respondWith(cacheFirstImageStrategy(event.request));
      break;
    case 'network-first':
      event.respondWith(networkFirstStrategy(event.request));
      break;
    default:
      event.respondWith(fetch(event.request));
  }
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Received SKIP_WAITING message');
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    console.log('[SW] Received CLEAR_CACHE message');
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }
});

// Log service worker version
console.log(`[SW] Service Worker version ${CACHE_VERSION} loaded`);
