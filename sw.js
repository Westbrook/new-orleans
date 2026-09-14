/* Generated from every local asset. No third-party requests are cached. */
const SCOPE = new URL(self.registration.scope).pathname;
const PREFIX = 'nola-guide:' + SCOPE + ':';
const CACHE = PREFIX + "nola-94831445e43b";
const FILES = ["./","./app.js","./assets/icon.svg","./assets/jackson-square.jpg","./components.css","./data/map.json","./data/original-list.txt","./data/venues.json","./index.html","./itinerary.js","./manifest.webmanifest","./styles.css","./vendor/EN-REVE-LICENSE","./vendor/LIT-LICENSE","./vendor/NOTICE.txt","./vendor/SIGNAL-POLYFILL-LICENSE","./vendor/SIGNAL-UTILS-LICENSE","./vendor/en-reve.js","./vendor/tokens.css","./offline-manifest.json"];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES.map(file => new URL(file,self.registration.scope).href)))));
self.addEventListener('activate', event => event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==CACHE)await caches.delete(key);await self.clients.claim();})()));
self.addEventListener('fetch', event => {const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.pathname.startsWith(SCOPE))return;event.respondWith((async()=>{const cache=await caches.open(CACHE);if(event.request.mode==='navigate'){return await cache.match(new URL('./index.html',self.registration.scope)) || fetch(event.request);}const cached=await cache.match(event.request,{ignoreSearch:true});return cached||fetch(event.request);})());});
