import {savedOverlapOptions} from './saved-locations.js';

// Travel filters share the same venue membership as the itinerary.
export function dayVenueIds(day) {
  return new Set([...day.route, ...day.stops.flatMap(stop => [stop.venue, ...(stop.extra || [])].filter(Boolean))]);
}

export function normalizeSearch(text) {
  return String(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}

export function filterPlaces(venues, {search = '', category = 'all', area = 'all', dayIds = null, onlySaved = false, saved = new Set()} = {}) {
  const terms = normalizeSearch(search).split(' ').filter(Boolean);
  return venues.filter(venue => {
    const text = normalizeSearch([venue.name, venue.area, venue.order, venue.tip, venue.originalNote].join(' '));
    return (category === 'all' || venue.category === category)
      && (area === 'all' || venue.area === area)
      && (!dayIds || dayIds.has(venue.id))
      && (!onlySaved || saved.has(venue.id))
      && terms.every(term => text.includes(term));
  });
}

export function resolveMapScope(scope = 'all', sharedLists = [], overlaps = []) {
  if (scope === 'saved' || scope === '4') return scope;
  if (overlaps.some(option => option.value === scope)) return scope;
  return sharedLists.some(list => 'person:' + list.name === scope) ? scope : 'all';
}

export function filterMapVenues(venues, {scope = 'all', saved = new Set(), sharedLists = [], tourIds = []} = {}) {
  const overlaps = savedOverlapOptions(venues, saved, sharedLists);
  scope = resolveMapScope(scope, sharedLists, overlaps);
  if (scope === '4') return tourIds.map(id => venues.find(v => v.id === id)).filter(Boolean);
  if (scope === 'all') return venues.filter(v => v.status !== 'closed' && !['horns', 'mimis'].includes(v.id));
  const overlap = overlaps.find(option => option.value === scope);
  const ids = scope === 'saved' ? saved : new Set(overlap?.venueIds || sharedLists.find(list => 'person:' + list.name === scope).venueIds);
  return venues.filter(v => ids.has(v.id));
}

export const placeSortOptions = {guide:'Guide order', name:'Name A–Z', area:'Neighborhood A–Z', distance:'Nearest hotel'};
const alphabetical = new Intl.Collator('en', {sensitivity:'base', ignorePunctuation:true});

// Great-circle distance uses the saved pins, not walking routes or live location.
function distanceFrom(venue, origin) {
  if (![venue.lat, venue.lng, origin?.lat, origin?.lng].every(Number.isFinite)) return Infinity;
  const radians = degrees => degrees * Math.PI / 180;
  const latitude = Math.sin(radians(venue.lat - origin.lat) / 2);
  const longitude = Math.sin(radians(venue.lng - origin.lng) / 2);
  return latitude ** 2 + Math.cos(radians(origin.lat)) * Math.cos(radians(venue.lat)) * longitude ** 2;
}

export function sortPlaces(venues, order = 'guide', origin) {
  const byName = (a, b) => alphabetical.compare(a.name, b.name);
  const compare = {
    name: byName,
    area: (a, b) => alphabetical.compare(a.area, b.area) || byName(a, b),
    distance: (a, b) => (distanceFrom(a, origin) - distanceFrom(b, origin)) || byName(a, b),
  }[order];
  return compare ? [...venues].sort(compare) : [...venues];
}

// SVG meet scaling must account for letterboxing in both dimensions.
export function markerScale(viewWidth, viewHeight, cssWidth, cssHeight) {
  return Math.max(viewWidth / Math.max(cssWidth, 1), viewHeight / Math.max(cssHeight, 1));
}
