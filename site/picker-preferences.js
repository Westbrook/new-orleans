export const PICKER_PREFERENCES_KEY = 'nola-picker-preferences-v1';
export const pickerDefaults = {
  selectedDay:0, search:'', category:'all', area:'all', placeDay:'all',
  placeSort:'guide', savedBy:'all', mapScope:'all', mapRegion:'quarter',
};
const fixedChoices = {
  selectedDay:[0,1,2,3,4,5], category:['all','food','music','bars','sights','stay'],
  placeDay:['all','0','1','2','3','4','5'], placeSort:['guide','name','area','distance'],
  mapRegion:['quarter','bywater','uptown','all'],
};

export function validatePickerPreferences(value, choices = {}) {
  const result = {...pickerDefaults};
  if (!value || typeof value !== 'object' || Array.isArray(value)) return result;
  for (const [key, fallback] of Object.entries(pickerDefaults)) {
    if (key === 'search') {
      if (typeof value.search === 'string') result.search = value.search;
    } else if ((fixedChoices[key] || choices[key] || [fallback]).includes(value[key])) {
      result[key] = value[key];
    }
  }
  return result;
}

export function readPickerPreferences(storage, choices) {
  let value = {};
  try { value = JSON.parse(storage?.getItem(PICKER_PREFERENCES_KEY) || '{}'); } catch {}
  // Preserve the sort preference saved by earlier guide versions.
  if (value && typeof value === 'object' && !Array.isArray(value) && value.placeSort === undefined) {
    try { value.placeSort = storage?.getItem('nola-place-sort'); } catch {}
  }
  return validatePickerPreferences(value, choices);
}

export function writePickerPreferences(storage, value) {
  try {
    const json = JSON.stringify(Object.fromEntries(Object.keys(pickerDefaults).map(key => [key,value[key]])));
    if (storage?.getItem(PICKER_PREFERENCES_KEY) !== json) storage?.setItem(PICKER_PREFERENCES_KEY,json);
  } catch { /* Unavailable or full storage must not prevent picker use. */ }
}

// Explicit links override only the picker they address; other cached choices survive.
export function pickerPreferencesForRoute(preferences, hash) {
  const result = {...preferences};
  const [view, encoded] = hash.replace(/^#/, '').split('/');
  let selection;
  try { selection = decodeURIComponent(encoded || ''); } catch { selection = ''; }
  if (view === 'map' && encoded !== undefined) result.mapScope = selection;
  if (view === 'places' && selection === 'saved') result.savedBy = 'me';
  if (/^[0-5]$/.test(selection)) {
    if (view === 'places') result.placeDay = selection;
    if (view === 'plan') result.selectedDay = Number(selection);
  }
  return result;
}
