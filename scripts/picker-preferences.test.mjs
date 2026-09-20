import test from 'node:test';
import assert from 'node:assert/strict';
import {PICKER_PREFERENCES_KEY,pickerDefaults,readPickerPreferences,writePickerPreferences,validatePickerPreferences,pickerPreferencesForRoute} from '../site/picker-preferences.js';
const choices={area:['all','Marigny'],savedBy:['all','me','person:Alex / Zoë','overlap:2'],mapScope:['all','saved','4','person:Alex / Zoë','overlap:2']};
const storage=()=>{const data=new Map();return {getItem:key=>data.get(key)||null,setItem:(key,value)=>data.set(key,value)}};

test('all pickers and search round trip through local storage',()=>{
 const store=storage(),preferences={selectedDay:3,search:'jazz',category:'music',area:'Marigny',placeDay:'2',placeSort:'name',savedBy:'overlap:2',mapScope:'person:Alex / Zoë',mapRegion:'uptown'};
 writePickerPreferences(store,preferences);
 assert.deepEqual(readPickerPreferences(store,choices),preferences);
 assert.deepEqual(readPickerPreferences(store,choices),preferences);
});
test('bad data, removed lists, and vanished overlaps fall back independently',()=>{
 const store=storage();
 for(const value of ['{','null','[]','42']){
  store.setItem(PICKER_PREFERENCES_KEY,value);
  assert.deepEqual(readPickerPreferences(store,choices),pickerDefaults);
 }
 const value={...pickerDefaults,selectedDay:99,category:'bogus',area:'Removed',savedBy:'person:Removed',mapScope:'overlap:9',mapRegion:'uptown',placeSort:'distance'};
 assert.deepEqual(validatePickerPreferences(value,choices),{...pickerDefaults,mapRegion:'uptown',placeSort:'distance'});
});
test('storage failures are harmless and legacy sort is retained',()=>{
 const blocked={getItem(){throw Error('blocked')},setItem(){throw Error('full')}};
 assert.deepEqual(readPickerPreferences(blocked,choices),pickerDefaults);
 assert.doesNotThrow(()=>writePickerPreferences(blocked,pickerDefaults));
 assert.doesNotThrow(()=>writePickerPreferences(undefined,pickerDefaults));
 const store=storage();store.setItem('nola-place-sort','distance');
 assert.equal(readPickerPreferences(store,choices).placeSort,'distance');
 writePickerPreferences(store,{...pickerDefaults,placeSort:'name'});
 assert.equal(readPickerPreferences(store,choices).placeSort,'name');
});
test('explicit routes override only their addressed picker and bare pages retain preferences',()=>{
 const state={...pickerDefaults,selectedDay:2,category:'music',area:'Marigny',placeDay:'4',savedBy:'overlap:2',mapScope:'saved',mapRegion:'bywater'};
 for(const hash of ['#map','#places','#plan'])assert.deepEqual(pickerPreferencesForRoute(state,hash),state);
 assert.deepEqual(pickerPreferencesForRoute(state,'#map/person%3AAlex%20%2F%20Zo%C3%AB'),{...state,mapScope:'person:Alex / Zoë'});
 assert.deepEqual(pickerPreferencesForRoute(state,'#places/3'),{...state,placeDay:'3'});
 assert.deepEqual(pickerPreferencesForRoute(state,'#places/saved'),{...state,savedBy:'me'});
 assert.deepEqual(pickerPreferencesForRoute(state,'#plan/5'),{...state,selectedDay:5});
 assert.deepEqual(pickerPreferencesForRoute(state,'#map/4'),{...state,mapScope:'4'});
 assert.equal(validatePickerPreferences(pickerPreferencesForRoute(state,'#map/%'),choices).mapScope,'all');
});
test('reset choices replace cached filters while independent Map and sort preferences remain',()=>{
 const store=storage();const state={...pickerDefaults,category:'music',area:'Marigny',placeDay:'4',savedBy:'overlap:2',mapRegion:'uptown',placeSort:'name'};
 writePickerPreferences(store,state);
 writePickerPreferences(store,{...state,search:'',category:'all',area:'all',placeDay:'all',savedBy:'all'});
 assert.deepEqual(readPickerPreferences(store,choices),{...pickerDefaults,mapRegion:'uptown',placeSort:'name'});
});
