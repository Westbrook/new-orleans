import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {filterPlaces, sortPlaces, dayVenueIds, markerScale} from '../site/guide-utils.js';
import {days} from '../site/itinerary.js';
const venues = JSON.parse(await readFile(new URL('../site/data/venues.json', import.meta.url)));

test('search accepts accents, apostrophes and word order', () => {
  assert.ok(filterPlaces(venues, {search:'cafe monde'}).some(v=>v.id==='cafe-du-monde'));
  assert.ok(filterPlaces(venues, {search:'Dooky Chases'}).some(v=>v.id==='dooky-chase'));
  assert.ok(filterPlaces(venues, {search:'Monde Café'}).some(v=>v.id==='cafe-du-monde'));
});
test('day, neighborhood, category and saved filters compose', () => {
  const dayIds=dayVenueIds(days[4]);
  assert.ok(dayIds.has('gray-line'));
  assert.ok(!dayIds.has('honey-island-swamp'));
  const result=filterPlaces(venues,{dayIds,onlySaved:true,saved:new Set(['gray-line','honey-island-swamp']),category:'sights',area:'French Quarter'});
  assert.deepEqual(result.map(v=>v.id),['gray-line']);
  assert.equal(filterPlaces(venues,{onlySaved:true,saved:new Set()}).length,0);
});
test('map targets stay 48 CSS pixels through letterboxing and zoom', () => {
  for(const [w,h,cw,ch] of [[322,286,1106,530],[322,286,342,430],[110,98,342,430]]) {
    const renderedScale=Math.min(cw/w,ch/h);
    assert.ok(Math.abs(48*markerScale(w,h,cw,ch)*renderedScale-48)<0.001);
  }
});

test('sorting preserves guide order and filters while using names, areas and hotel distance', () => {
  const sample=[
    {id:'far',name:'Zulu',area:'Bywater',lat:30.2,lng:-90},
    {id:'unknown',name:'Unknown',area:'Uptown',lat:null,lng:null},
    {id:'near',name:'Éclair',area:'CBD',lat:30.01,lng:-90},
    {id:'same-area',name:'Alpha',area:'Bywater',lat:30.1,lng:-90},
  ];
  const ids=list=>list.map(v=>v.id);
  const original=ids(sample);
  assert.deepEqual(ids(sortPlaces(sample,'name')),['same-area','near','unknown','far']);
  assert.deepEqual(ids(sortPlaces(sample,'area')),['same-area','far','near','unknown']);
  assert.deepEqual(ids(sortPlaces(sample,'distance',{lat:30,lng:-90})),['near','same-area','far','unknown']);
  assert.deepEqual(ids(sortPlaces(sample)),original);
  assert.deepEqual(ids(sample),original);
  const filtered=filterPlaces(venues,{dayIds:dayVenueIds(days[4])});
  const sorted=sortPlaces(filtered,'distance',venues.find(v=>v.id==='fontenot'));
  assert.equal(sorted[0].id,'fontenot');
  assert.deepEqual(new Set(ids(sorted)),new Set(ids(filtered)));
});
