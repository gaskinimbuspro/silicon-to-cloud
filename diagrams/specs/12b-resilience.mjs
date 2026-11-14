// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Resilience patterns on a single call",
  "tr": "Tek bir çağrıda dayanıklılık desenleri"
 },
 "subtitle": {
  "en": "Each pattern protects against a different failure; together they stop one slow dependency from taking everything down",
  "tr": "Her desen farklı bir hataya karşı korur; birlikte tek bir yavaş bağımlılığın her şeyi çökertmesini durdururlar"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "app-window",
     "title": {
      "en": "Caller",
      "tr": "Çağıran"
     },
     "items": [
      {
       "id": "to",
       "icon": "timer",
       "title": "Timeout",
       "sub": {
        "en": "every call has a deadline",
        "tr": "her çağrının bir süresi var"
       },
       "tag": {
        "en": "propagate it",
        "tr": "ilet"
       }
      },
      {
       "id": "rt",
       "icon": "rotate-ccw",
       "title": {
        "en": "Retry + backoff + jitter",
        "tr": "Yeniden deneme + backoff + jitter"
       },
       "sub": {
        "en": "idempotent calls only, retry budget",
        "tr": "sadece idempotent çağrılar, deneme bütçesi"
       },
       "tag": ""
      },
      {
       "id": "cb",
       "icon": "zap-off",
       "title": {
        "en": "Circuit breaker",
        "tr": "Circuit breaker"
       },
       "sub": {
        "en": "fail fast when dependency is sick",
        "tr": "bağımlılık hastaysa hızlı başarısız ol"
       },
       "tag": ""
      },
      {
       "id": "bh",
       "icon": "layout-grid",
       "title": {
        "en": "Bulkhead",
        "tr": "Bulkhead"
       },
       "sub": {
        "en": "separate pools per dependency",
        "tr": "bağımlılık başına ayrı havuzlar"
       },
       "tag": ""
      }
     ]
    }
   ]
  },
  {
   "groups": [
    {
     "id": "g2",
     "n": 2,
     "color": "green",
     "icon": "server",
     "title": {
      "en": "Callee",
      "tr": "Çağrılan"
     },
     "items": [
      {
       "id": "ls",
       "icon": "gauge",
       "title": {
        "en": "Load shedding / rate limit",
        "tr": "Yük atma / hız sınırı"
       },
       "sub": {
        "en": "reject early with 429/503",
        "tr": "429/503 ile erkenden reddet"
       },
       "tag": ""
      },
      {
       "id": "fb",
       "icon": "life-buoy",
       "title": {
        "en": "Fallback / degrade",
        "tr": "Yedek / düşürülmüş hizmet"
       },
       "sub": {
        "en": "cached or partial answer",
        "tr": "önbellekteki ya da kısmi cevap"
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
   "to",
   "rt",
   "r",
   "l",
   1,
   ""
  ],
  [
   "rt",
   "cb",
   "r",
   "l",
   2,
   ""
  ],
  [
   "cb",
   "bh",
   "r",
   "l",
   3,
   ""
  ],
  [
   "bh",
   "ls",
   "b",
   "t",
   4,
   "",
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "ls",
   "fb",
   "r",
   "l",
   5,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Caller",
    "tr": "Çağıran"
   }
  ],
  [
   "green",
   {
    "en": "Callee",
    "tr": "Çağrılan"
   }
  ]
 ],
 "footer": {
  "en": "🌊 Retries without budgets turn a small outage into a retry storm",
  "tr": "🌊 Bütçesiz yeniden denemeler küçük bir kesintiyi yeniden deneme fırtınasına çevirir"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
