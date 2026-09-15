import test from 'node:test';
import assert from 'node:assert/strict';
import {createWeatherClient,parseForecast,readWeatherCache,forecastWindow,WEATHER_KEY,REFRESH_MS,MAX_AGE_MS} from '../site/weather.js';
const time=Date.parse('2026-10-10T12:00:00Z');
const payload={daily:{time:['2026-10-13','2026-10-14','2026-10-15'],temperature_2m_max:[90,82,null],temperature_2m_min:[70,66,65],weather_code:[0,61,2],precipitation_probability_max:[0,null,25],wind_speed_10m_max:[5,12,10]}};
const storage=()=>{const map=new Map();return {getItem:key=>map.get(key),setItem:(key,value)=>map.set(key,value)}};

test('only matching trip dates are stored; missing metrics never become zero',()=>{
  const days=parseForecast(payload,time);
  assert.deepEqual(Object.keys(days),['2026-10-14']);
  assert.equal(days['2026-10-14'].high,82);
  assert.equal(days['2026-10-14'].rain,null);
  assert.throws(()=>parseForecast({error:true}));
  assert.throws(()=>parseForecast({daily:{time:[]}}));
});

test('forecast windows follow New Orleans date at midnight boundaries',()=>{
  assert.equal(forecastWindow('2026-10-14',Date.parse('2026-09-29T04:59:00Z')),'future');
  assert.equal(forecastWindow('2026-10-14',Date.parse('2026-09-29T05:00:00Z')),'available');
  assert.equal(forecastWindow('2026-10-14',Date.parse('2026-10-15T05:00:00Z')),'past');
});

test('cached data is bounded, expires and tolerates unavailable storage',()=>{
  const store=storage();
  store.setItem(WEATHER_KEY,JSON.stringify({version:1,fetchedAt:time,days:{...parseForecast(payload,time),'2027-01-01':{high:1,low:0,fetchedAt:time}}}));
  assert.deepEqual(Object.keys(readWeatherCache(store,time).days),['2026-10-14']);
  assert.deepEqual(readWeatherCache(store,time+MAX_AGE_MS+1).days,{});
  store.setItem(WEATHER_KEY,'invalid JSON');
  assert.deepEqual(readWeatherCache(store,time).days,{});
  assert.deepEqual(readWeatherCache({getItem(){throw Error('blocked')}},time).days,{});
});

test('refresh deduplicates, respects light cache, retries on reconnect and preserves stale data on failure',async()=>{
  let clock=time,connected=true,calls=0,fail=false,release,updates=0;
  const store=storage();
  const client=createWeatherClient({storage:store,now:()=>clock,online:()=>connected,onChange:()=>updates++,fetcher:async(url,options)=>{
    calls++;assert.equal(options.cache,'no-store');assert.equal(new URL(url).searchParams.get('timezone'),'America/Chicago');
    if(fail)throw Error('Network unavailable');
    await new Promise(resolve=>{release=resolve});return {ok:true,json:async()=>payload};
  }});
  const first=client.refresh();const duplicate=client.refresh();assert.equal(first,duplicate);assert.equal(calls,1);release();await first;
  assert.equal(client.state().days['2026-10-14'].high,82);
  await client.refresh();assert.equal(calls,1);
  connected=false;clock+=REFRESH_MS;const priorUpdates=updates;await client.refresh({eager:true});assert.equal(updates,priorUpdates);assert.equal(calls,1);assert.equal(client.state().offline,true);
  connected=true;fail=true;await client.refresh({eager:true});assert.equal(calls,2);assert.ok(client.state().error);assert.equal(client.state().days['2026-10-14'].high,82);
  const reopened=createWeatherClient({storage:store,now:()=>clock,online:()=>false});assert.equal(reopened.state().days['2026-10-14'].high,82);
  clock+=MAX_AGE_MS;assert.deepEqual(client.state().days,{});
});

test('a stalled request times out and permits a later retry',async()=>{
  let clock=time;
  const client=createWeatherClient({now:()=>clock,online:()=>true,timeoutMs:5,fetcher:async(url,{signal})=>new Promise((resolve,reject)=>signal.addEventListener('abort',()=>reject(Error('aborted'))))});
  await client.refresh();assert.equal(client.state().busy,false);assert.ok(client.state().error);
  clock+=60001;await client.refresh();assert.equal(client.state().busy,false);
});
