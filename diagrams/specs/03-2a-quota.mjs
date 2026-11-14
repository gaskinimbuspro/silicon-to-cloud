// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How a CPU limit throttles a container",
  "tr": "CPU limiti bir container'ı nasıl throttle eder"
 },
 "subtitle": {
  "en": "limit: 1 CPU = 100 ms of CPU time per 100 ms period · 4 busy threads use it up in 25 ms",
  "tr": "limit: 1 CPU = 100 ms'lik periyotta 100 ms CPU zamanı · 4 meşgul thread bunu 25 ms'de bitirir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "green",
     "icon": "play",
     "title": {
      "en": "0–25 ms",
      "tr": "0–25 ms"
     },
     "items": [
      {
       "id": "burst",
       "icon": "zap",
       "title": {
        "en": "4 threads run",
        "tr": "4 thread çalışır"
       },
       "sub": {
        "en": "4 × 25 ms = 100 ms used",
        "tr": "4 × 25 ms = 100 ms kullanıldı"
       },
       "tag": {
        "en": "quota gone",
        "tr": "kota bitti"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "red",
     "icon": "pause",
     "title": {
      "en": "25–100 ms",
      "tr": "25–100 ms"
     },
     "items": [
      {
       "id": "thr",
       "icon": "pause",
       "title": {
        "en": "Throttled",
        "tr": "Throttle edildi"
       },
       "sub": {
        "en": "no CPU at all",
        "tr": "hiç CPU yok"
       },
       "tag": {
        "en": "requests wait 75 ms",
        "tr": "istekler 75 ms bekler"
       }
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "blue",
     "icon": "refresh-cw",
     "title": {
      "en": "100 ms",
      "tr": "100 ms"
     },
     "items": [
      {
       "id": "refill",
       "icon": "refresh-cw",
       "title": {
        "en": "Quota refilled",
        "tr": "Kota yenilenir"
       },
       "sub": {
        "en": "next period",
        "tr": "sonraki periyot"
       },
       "tag": ""
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "burst",
   "thr",
   "r",
   "l",
   1,
   ""
  ],
  [
   "thr",
   "refill",
   "r",
   "l",
   2,
   ""
  ]
 ],
 "legend": [
  [
   "green",
   {
    "en": "Running",
    "tr": "Çalışıyor"
   }
  ],
  [
   "red",
   {
    "en": "Throttled",
    "tr": "Throttle"
   }
  ],
  [
   "blue",
   {
    "en": "Refill",
    "tr": "Yenileme"
   }
  ]
 ],
 "footer": {
  "en": "🔍 Average CPU looks fine (25%) while p99 latency jumps — check cpu.stat nr_throttled",
  "tr": "🔍 Ortalama CPU iyi görünür (%25) ama p99 gecikme fırlar; cpu.stat nr_throttled'a bak"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
