import {cp,mkdir,readdir,readFile,writeFile,rm} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {join} from 'node:path';
async function filesAt(dir,prefix=''){let out=[];for(const item of await readdir(dir,{withFileTypes:true})){const rel=join(prefix,item.name);if(item.isDirectory())out.push(...await filesAt(join(dir,item.name),rel));else out.push(rel)}return out.sort()}
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});await cp('site','dist',{recursive:true});
const files=(await filesAt('dist')).filter(x=>!['sw.js','offline-manifest.json'].includes(x));
const hash=createHash('sha256');for(const f of files)hash.update(await readFile(join('dist',f)));const version=hash.digest('hex').slice(0,12);
const manifest={version,cacheName:'nola-'+version,files:['./',...files.map(f=>'./'+f),'./offline-manifest.json']};
await writeFile('dist/offline-manifest.json',JSON.stringify(manifest,null,2));
await writeFile('dist/sw.js',`/* Generated from every local asset. No third-party requests are cached. */
const SCOPE = new URL(self.registration.scope).pathname;
const PREFIX = 'nola-guide:' + SCOPE + ':';
const CACHE = PREFIX + ${JSON.stringify(manifest.cacheName)};
const FILES = ${JSON.stringify(manifest.files)};
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES.map(file => new URL(file,self.registration.scope).href)))));
self.addEventListener('activate', event => event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==CACHE)await caches.delete(key);await self.clients.claim();})()));
self.addEventListener('fetch', event => {const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.pathname.startsWith(SCOPE))return;event.respondWith((async()=>{const cache=await caches.open(CACHE);if(event.request.mode==='navigate'){return await cache.match(new URL('./index.html',self.registration.scope)) || fetch(event.request);}const cached=await cache.match(event.request,{ignoreSearch:true});return cached||fetch(event.request);})());});
`);
await writeFile('dist/.nojekyll','');console.log('Built dist/ · '+version+' · '+files.length+' local files + offline manifest');
