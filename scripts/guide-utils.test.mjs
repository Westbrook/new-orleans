import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {filterPlaces, dayVenueIds, markerScale} from '../site/guide-utils.js';
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
