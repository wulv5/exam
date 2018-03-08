/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
/*importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    './index.html',
    './manifest.json',
    './assets/',
    './build/sw-toolbox.js'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/!*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;*/


const cacheName = 'wulv-tsst-v0.0.6';
const filesToCache = [
  './',
  './index.html',
  './build/main.js',
  './build/vendor.js',
  './build/main.css',
  './build/polyfills.js',
  './build/sw-toolbox.js',
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
  './assets/icon/back.svg',
  './assets/icon/login.svg',
  './assets/icon/password.svg',
];
// 用户首次访问页面时将会触发安装事件
// 缓存资源
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] 安装');
  e.waitUntil(
    // 打开缓存并提供一个缓存名称
    // 提供缓存名称可让我们对文件进行版本控制，
    // 或将数据与 App Shell 分开，以便我们能轻松地更新某个数据，而不会影响其他数据。
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      // 从服务器获取文件并添加到缓存内
      return cache.addAll(filesToCache);
    })
  );
});
// 事件会在服务工作线程启动时触发。
// 检查更新
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});
// 拦截网络请求 , 从缓存内读取资源
self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
