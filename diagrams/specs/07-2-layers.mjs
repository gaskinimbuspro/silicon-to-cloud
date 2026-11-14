// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Caches at every layer of a request",
  "tr": "Bir isteğin her katmanındaki önbellekler"
 },
 "subtitle": {
  "en": "Each layer that answers stops the request from going further — and each can serve stale data",
  "tr": "Cevap veren her katman isteğin daha ileri gitmesini durdurur ve her biri eski veri sunabilir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "globe",
     "title": {
      "en": "Client side",
      "tr": "İstemci tarafı"
     },
     "items": [
      {
       "id": "br",
       "icon": "app-window",
       "title": {
        "en": "Browser cache",
        "tr": "Tarayıcı önbelleği"
       },
       "sub": "Cache-Control · ETag",
       "tag": "0 ms"
      },
      {
       "id": "cdn",
       "icon": "cloud",
       "title": "CDN",
       "sub": {
        "en": "edge PoP near user",
        "tr": "kullanıcıya yakın uç PoP"
       },
       "tag": "~10–30 ms"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "server",
     "title": {
      "en": "Server side",
      "tr": "Sunucu tarafı"
     },
     "items": [
      {
       "id": "rp",
       "icon": "split",
       "title": {
        "en": "Reverse proxy cache",
        "tr": "Reverse proxy önbelleği"
       },
       "sub": "nginx / Varnish",
       "tag": ""
      },
      {
       "id": "local",
       "icon": "memory-stick",
       "title": {
        "en": "In-process cache",
        "tr": "Process içi önbellek"
       },
       "sub": {
        "en": "LRU map, per pod",
        "tr": "LRU map, pod başına"
       },
       "tag": "~µs"
      }
     ]
    }
   ]
  },
  {
   "groups": [
    {
     "id": "g3",
     "n": 3,
     "color": "amber",
     "icon": "zap",
     "title": {
      "en": "Shared cache",
      "tr": "Paylaşımlı önbellek"
     },
     "items": [
      {
       "id": "redis",
       "icon": "zap",
       "title": "Redis / Memcached",
       "sub": {
        "en": "shared by all pods",
        "tr": "tüm pod'larca paylaşılır"
       },
       "tag": "~0.5 ms"
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "database",
     "title": {
      "en": "Source of truth",
      "tr": "Doğruluk kaynağı"
     },
     "items": [
      {
       "id": "db",
       "icon": "database",
       "title": {
        "en": "Database",
        "tr": "Veritabanı"
       },
       "sub": {
        "en": "+ its own buffer pool",
        "tr": "+ kendi buffer pool'u"
       },
       "tag": "~1–10 ms"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "br",
   "cdn",
   "r",
   "l",
   1,
   ""
  ],
  [
   "cdn",
   "rp",
   "r",
   "l",
   2,
   {
    "en": "miss",
    "tr": "ıska"
   }
  ],
  [
   "rp",
   "local",
   "r",
   "l",
   3,
   ""
  ],
  [
   "local",
   "redis",
   "b",
   "t",
   4,
   {
    "en": "miss",
    "tr": "ıska"
   },
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "redis",
   "db",
   "r",
   "l",
   5,
   {
    "en": "miss",
    "tr": "ıska"
   }
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Client",
    "tr": "İstemci"
   }
  ],
  [
   "purple",
   {
    "en": "Server",
    "tr": "Sunucu"
   }
  ],
  [
   "amber",
   {
    "en": "Shared",
    "tr": "Paylaşımlı"
   }
  ],
  [
   "green",
   "DB"
  ]
 ],
 "footer": {
  "en": "⏳ Every layer needs an answer to: how long may it be stale, and how is it invalidated?",
  "tr": "⏳ Her katman şunu cevaplamalı: ne kadar eski olabilir ve nasıl geçersiz kılınır?"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
