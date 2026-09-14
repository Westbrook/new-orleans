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

// SVG meet scaling must account for letterboxing in both dimensions.
export function markerScale(viewWidth, viewHeight, cssWidth, cssHeight) {
  return Math.max(viewWidth / Math.max(cssWidth, 1), viewHeight / Math.max(cssHeight, 1));
}
