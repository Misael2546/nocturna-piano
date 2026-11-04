const CACHE_NAME = 'pianoflow-v1';
const ASSETS = [
    'index.html',
    'estudio-midi.html',
    'academia.html',
    'tutoriales.html',
    'styles.css',
    'app.js',
    'manifest.webmanifest'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
