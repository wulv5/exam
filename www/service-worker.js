/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */

'use strict';
/*importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'auto-import'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    './index.html',
    './manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/!*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;*/
const cacheName = 'tz-web-exam-v0.0.2';
const filesToCache = [
  './',
  './index.html',
  './build/main.js',
  './build/vendor.js',
  './build/main.css',
  './build/polyfills.js',
  // './build/sw-toolbox.js',
  './manifest.json',
  './assets/imgs/icon.png',
  './assets/imgs/home/html.png',
  './assets/imgs/home/css.png',
  './assets/imgs/home/js.png',
  './assets/imgs/home/jq.png',
  './assets/imgs/home/demo.png',
  './assets/imgs/home/kj.png',
  './assets/imgs/login/loginbg.png',
  './assets/fonts/ionicons.woff2?v=3.0.0-alpha.3',
  './assets/fonts/roboto-regular.woff2',
  './assets/fonts/roboto-medium.woff2',
  './assets/fonts/roboto-bold.woff2',
  './assets/icon/back.svg',
  './assets/icon/login.svg',
  './assets/icon/password.svg',
];
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
  );
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => key !== cacheName && caches.delete(key)))
    )
  );
  return self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
