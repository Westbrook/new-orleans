// Optional refresh from the user's Design System checkout. Not needed for normal builds.
// node scripts/vendor.mjs /absolute/path/to/design-system
import {resolve} from 'node:path';
import {writeFile,cp,mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {pathToFileURL} from 'node:url';
const source=process.argv[2];if(!source)throw Error('Supply the Design System repository path.');
const dir=resolve(source),temp=await mkdtemp(resolve(tmpdir(),'nola-vendor-'));
try{const entry=resolve(temp,'entry.mjs');await writeFile(entry,['button','icon','badge','dialog','segmented-control','search-input','link','navigation','card','select','checkbox','accordion-item','alert','progress-bar','toolbar'].map(x=>`import ${JSON.stringify(resolve(dir,'packages/elements/dist/define/'+x+'.js'))};`).join('\n'));
const {build}=await import(pathToFileURL(resolve(dir,'node_modules/vite/dist/node/index.js')).href);await build({configFile:false,build:{outDir:resolve('site/vendor'),emptyOutDir:false,lib:{entry,formats:['es'],fileName:()=> 'en-reve.js'},sourcemap:false,minify:true}});await cp(resolve(dir,'packages/tokens/dist/default.css'),'site/vendor/tokens.css');await cp(resolve(dir,'LICENSE'),'site/vendor/EN-REVE-LICENSE');}finally{await rm(temp,{recursive:true,force:true})}
