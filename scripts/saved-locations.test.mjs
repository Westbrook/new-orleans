import test from 'node:test';
import assert from 'node:assert/strict';
import {savedPayload,parseSavedLocations,upsertSavedList,readSavedLists,shareEmail,MAX_JSON_BYTES,savedVenueCounts,savedOverlapOptions} from '../site/saved-locations.js';
const venues=[{id:'dba'},{id:'spotted-cat'},{id:'fontenot'}];
test('overlap options count each person once, include own saves, and require known matches',()=>{
 const saved=new Set(['dba']);
 const lists=[{name:'Alex',venueIds:['dba','dba','unknown','spotted-cat']}];
 assert.deepEqual([...savedVenueCounts(venues,saved,lists)],[['dba',2],['spotted-cat',1],['fontenot',0]]);
 assert.deepEqual(savedOverlapOptions(venues,saved,lists),[{value:'overlap:2',label:'Saved by 2 people',venueIds:['dba']}]);
 assert.deepEqual(savedOverlapOptions(venues,new Set(),lists),[]);
 assert.deepEqual(savedOverlapOptions(venues,new Set(['fontenot']),lists),[]);
 assert.deepEqual(savedOverlapOptions(venues,new Set(),[{venueIds:['unknown']},{venueIds:['unknown']}]),[]);
});
test('four lists expose nonempty minimum-count options and recompute after replacement/removal',()=>{
 const lists=[
  {name:'A',venueIds:['dba','spotted-cat','fontenot']},
  {name:'B',venueIds:['dba','spotted-cat','fontenot']},
  {name:'C',venueIds:['dba','spotted-cat']},
  {name:'D',venueIds:['dba']},
 ];
 const options=savedOverlapOptions(venues,new Set(),lists);
 assert.deepEqual(options.map(o=>o.value),['overlap:2','overlap:3','overlap:4']);
 assert.deepEqual(options.map(o=>o.venueIds),[['dba','spotted-cat','fontenot'],['dba','spotted-cat'],['dba']]);
 assert.deepEqual(savedOverlapOptions(venues,new Set(),lists.slice(0,2)).map(o=>o.value),['overlap:2']);
 assert.deepEqual(savedOverlapOptions(venues,new Set(),upsertSavedList(lists,{name:'D',venueIds:[]})).map(o=>o.value),['overlap:2','overlap:3']);
 // Active location filters narrow the candidate venues, so unavailable count options disappear.
 assert.deepEqual(savedOverlapOptions([venues[2]],new Set(),lists).map(o=>o.value),['overlap:2']);
 assert.deepEqual(savedOverlapOptions([],new Set(),lists),[]);
 assert.equal(lists[3].venueIds[0],'dba');
});
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
