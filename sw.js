self.addEventListener('install', e => {
  e.waitUntil(caches.open('ccna-v1').then(c => c.addAll(['./index.html','./questions.js','./manifest.json'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
