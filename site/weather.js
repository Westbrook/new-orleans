export const WEATHER_KEY = 'nola-weather-v1';
export const REFRESH_MS = 15 * 60 * 1000;
export const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
export const TRIP_DATES = Array.from({length:6}, (_, i) => `2026-10-${14+i}`);
export const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast?' + new URLSearchParams({
  latitude:'29.95', longitude:'-90.07', timezone:'America/Chicago', forecast_days:'16',
  temperature_unit:'fahrenheit', wind_speed_unit:'mph',
  daily:'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max',
});
const finite = value => typeof value === 'number' && Number.isFinite(value);
const recent = (time, now) => finite(time) && time <= now + 60000 && now - time <= MAX_AGE_MS;

export function weatherDescription(code) {
  if (code === 0) return 'Clear skies';
  if (code === 1) return 'Mostly clear';
  if (code === 2) return 'Partly cloudy';
  if (code === 3) return 'Overcast';
  if ([45,48].includes(code)) return 'Fog';
  if ([51,53,55].includes(code)) return 'Drizzle';
  if ([56,57,66,67].includes(code)) return 'Freezing rain';
  if ([61,63,65].includes(code)) return 'Rain';
  if ([80,81,82].includes(code)) return 'Rain showers';
  if ([71,73,75,77,85,86].includes(code)) return 'Snow';
  if ([95,96,99].includes(code)) return 'Thunderstorms';
  return 'Daily forecast';
}

export function localWeatherDate(now = Date.now()) {
  return new Intl.DateTimeFormat('en-CA', {timeZone:'America/Chicago',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
}
export function forecastWindow(date, now = Date.now()) {
  const ahead = (Date.parse(date+'T00:00:00Z') - Date.parse(localWeatherDate(now)+'T00:00:00Z')) / 86400000;
  return ahead < 0 ? 'past' : ahead > 15 ? 'future' : 'available';
}

export function readWeatherCache(storage, now = Date.now()) {
  const empty = {fetchedAt:0, days:{}};
  try {
    const data = JSON.parse(storage?.getItem(WEATHER_KEY) || 'null');
    if (data?.version !== 1) return empty;
    for (const date of TRIP_DATES) {
      const day=data.days?.[date];
      if (day && recent(day.fetchedAt,now) && finite(day.high) && finite(day.low)) {
        empty.days[date]={high:day.high,low:day.low,code:finite(day.code)?day.code:null,rain:finite(day.rain)&&day.rain>=0&&day.rain<=100?day.rain:null,wind:finite(day.wind)&&day.wind>=0?day.wind:null,fetchedAt:day.fetchedAt};
      }
    }
    empty.fetchedAt=recent(data.fetchedAt,now)?data.fetchedAt:0;
  } catch {}
  return empty;
}

export function parseForecast(data, fetchedAt = Date.now()) {
  const daily=data?.daily;
  if (data?.error || !Array.isArray(daily?.time) || !daily.time.length || !Array.isArray(daily.temperature_2m_max) || !Array.isArray(daily.temperature_2m_min)) throw Error('Forecast unavailable');
  const days={};
  daily.time.forEach((date,i)=>{
    const high=daily.temperature_2m_max[i],low=daily.temperature_2m_min[i];
    if (!TRIP_DATES.includes(date) || !finite(high) || !finite(low)) return;
    const rain=daily.precipitation_probability_max?.[i],wind=daily.wind_speed_10m_max?.[i],code=daily.weather_code?.[i];
    days[date]={high,low,code:finite(code)?code:null,rain:finite(rain)&&rain>=0&&rain<=100?rain:null,wind:finite(wind)&&wind>=0?wind:null,fetchedAt};
  });
  return days;
}

// The six trip days live separately from the immutable offline application cache.
export function createWeatherClient({storage,fetcher=fetch,now=Date.now,online=()=>navigator.onLine,onChange=()=>{},timeoutMs=8000}={}) {
  let cache=readWeatherCache(storage,now()),busy=false,error='',lastAttempt=-Infinity,flight;
  const state=()=>({days:Object.fromEntries(Object.entries(cache.days).filter(([,day])=>recent(day.fetchedAt,now()))),fetchedAt:cache.fetchedAt,busy,error,offline:!online()});
  function refresh({eager=false,manual=false}={}) {
    if (flight) return flight;
    if (!online()) return Promise.resolve();
    if (!manual && (now()-lastAttempt<60000 || (!eager && now()-cache.fetchedAt<REFRESH_MS))) return Promise.resolve();
    lastAttempt=now();busy=true;error='';onChange(state());
    flight=(async()=>{
      const controller=new AbortController();
      const timer=setTimeout(()=>controller.abort(),timeoutMs);
      try {
        const response=await fetcher(WEATHER_URL,{cache:'no-store',signal:controller.signal,credentials:'omit',referrerPolicy:'no-referrer'});
        if (!response.ok) throw Error('Forecast unavailable');
        const fetchedAt=now(),days=parseForecast(await response.json(),fetchedAt);
        cache={fetchedAt,days:{...state().days,...days}};
        try {storage?.setItem(WEATHER_KEY,JSON.stringify({version:1,...cache}));} catch {}
      } catch {error='Couldn’t refresh weather.';}
      finally {clearTimeout(timer);busy=false;flight=null;onChange(state());}
    })();
    return flight;
  }
  return {state,refresh};
}
