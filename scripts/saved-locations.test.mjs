import test from 'node:test';
import assert from 'node:assert/strict';
import {savedPayload,parseSavedLocations,upsertSavedList,readSavedLists,shareEmail,MAX_JSON_BYTES} from '../site/saved-locations.js';
const venues=[{id:'dba'},{id:'spotted-cat'},{id:'fontenot'}];
test('JSON round trip and email contain only known saved IDs',()=>{
 const payload=savedPayload(['dba','dba','cake-cafe','fontenot'],venues,'Alex & Sam');
 assert.deepEqual(payload.venueIds,['dba','fontenot']);
 assert.deepEqual(parseSavedLocations(JSON.stringify(payload),'',venues),{name:'Alex & Sam',venueIds:['dba','fontenot'],ignored:0});
 const url=new URL(shareEmail(payload));assert.equal(url.pathname,'westbrook.johnson@gmail.com');assert.deepEqual(JSON.parse(url.searchParams.get('body')),payload);
});
test('imports reject malformed, wrong-trip, oversized and unknown-only data',()=>{
 const valid=savedPayload(['dba'],venues,'Alex');
 for(const text of ['{','[]',JSON.stringify({...valid,version:2}),JSON.stringify({...valid,trip:'other'}),JSON.stringify({...valid,venueIds:[{}]}),JSON.stringify({...valid,venueIds:['unknown']}),' '.repeat(MAX_JSON_BYTES+1)])assert.throws(()=>parseSavedLocations(text,'Alex',venues));
 assert.throws(()=>parseSavedLocations(JSON.stringify({...valid,name:''}),'',venues));
 assert.throws(()=>parseSavedLocations(JSON.stringify(valid),'x'.repeat(81),venues));
 const mixed=parseSavedLocations(JSON.stringify({...valid,venueIds:['dba','unknown','cake-cafe']}),'Sam',venues);assert.equal(mixed.ignored,2);assert.deepEqual(mixed.venueIds,['dba']);
});
test('named imports replace same-name lists without mutating other lists or own saves',()=>{
 const own=new Set(['fontenot']);const original=[{name:'Alex',venueIds:['dba']}];
 const next=upsertSavedList(original,{name:'ALEX',venueIds:['spotted-cat']});
 assert.deepEqual(original,[{name:'Alex',venueIds:['dba']}]);assert.deepEqual(next,[{name:'ALEX',venueIds:['spotted-cat']}]);assert.deepEqual([...own],['fontenot']);
 assert.throws(()=>upsertSavedList(Array.from({length:20},(_,i)=>({name:String(i),venueIds:[]})),{name:'new',venueIds:[]}));
});
test('cached imported lists survive reload and discard corrupt/removed IDs',()=>{
 const raw=JSON.stringify([{name:'me',venueIds:['dba','cake-cafe']},null,{name:'Empty',venueIds:[]}]);
 assert.deepEqual(readSavedLists({getItem:()=>raw},venues),[{name:'me',venueIds:['dba']},{name:'Empty',venueIds:[]}]);
 assert.deepEqual(readSavedLists({getItem:()=>'{broken'},venues),[]);
});
