// Portable preferences contain known venue IDs only; imported HTML/URLs are never rendered.
export const SAVED_LISTS_KEY = 'nola-shared-saves-v1';
export const MAX_JSON_BYTES = 100_000;
export const SHARE_RECIPIENT = 'westbrook.johnson@gmail.com';
export function savedPayload(ids, venues, name = '') {
  const known = new Set(venues.map(v => v.id));
  return {version: 1, trip: 'new-orleans-2026', name: name.trim().slice(0,80), venueIds: [...new Set(ids)].filter(id => known.has(id))};
}
export function parseSavedLocations(text, name, venues) {
  if (typeof text !== 'string' || new TextEncoder().encode(text).length > MAX_JSON_BYTES) throw Error('Choose JSON smaller than 100 KB.');
  let data; try { data = JSON.parse(text); } catch { throw Error('That is not valid JSON. Paste the complete saved-location JSON.'); }
  if (!data || Array.isArray(data) || data.version !== 1 || data.trip !== 'new-orleans-2026' || !Array.isArray(data.venueIds) || !data.venueIds.every(id=>typeof id==='string')) throw Error('Use a saved-location export from this New Orleans guide (version 1).');
  const label = String(name || data.name || '').trim();
  if (!label || label.length > 80) throw Error('Enter the name of the person or people who saved this list (up to 80 characters).');
  const result = savedPayload(data.venueIds, venues, label);
  const ignored = new Set(data.venueIds.filter(id => !result.venueIds.includes(id))).size;
  if (data.venueIds.length && !result.venueIds.length) throw Error('None of these locations are in the current guide.');
  return {name: label, venueIds: result.venueIds, ignored};
}
export function upsertSavedList(lists, incoming) {
  const key=incoming.name.toLocaleLowerCase('en-US');
  const previous=lists.find(list=>list.name.toLocaleLowerCase('en-US')===key);
  if(!previous && lists.length>=20)throw Error('This device holds 20 imported lists. Remove one before adding another.');
  return [...lists.filter(list=>list!==previous), {name:incoming.name,venueIds:[...incoming.venueIds]}];
}
export function readSavedLists(storage, venues) {
  try {
    const data=JSON.parse(storage?.getItem(SAVED_LISTS_KEY)||'[]');
    if(!Array.isArray(data)||data.length>20)return [];
    return data.reduce((lists,item)=>{
      try {return upsertSavedList(lists,parseSavedLocations(JSON.stringify({...item,version:1,trip:'new-orleans-2026'}),item.name,venues));}catch{return lists;}
    },[]);
  }catch{return [];}
}
export function shareEmail(payload) {
  return `mailto:${SHARE_RECIPIENT}?subject=${encodeURIComponent('New Orleans saved locations'+(payload.name?' · '+payload.name:''))}&body=${encodeURIComponent(JSON.stringify(payload))}`;
}
