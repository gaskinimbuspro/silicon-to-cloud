// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How cache-aside works",
  "tr": "Cache-aside nasıl çalışır"
 },
 "subtitle": {
  "en": "The app checks the cache first; only on a miss does it query the database and fill the cache",
  "tr": "Uygulama önce cache'e bakar; sadece ıska olursa veritabanını sorgular ve cache'i doldurur"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "green",
     "icon": "server",
     "title": {
      "en": "App",
      "tr": "Uygulama"
     },
     "items": [
      {
       "id": "req",
       "icon": "send",
       "title": {
        "en": "Request",
        "tr": "İstek"
       },
       "sub": "GET /user/42",
       "tag": ""
      },
      {
       "id": "get",
       "icon": "search",
       "title": "cache.get(key)",
       "sub": "user:42",
       "tag": "~0.5 ms"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "zap",
     "title": {
      "en": "Hit",
      "tr": "İsabet"
     },
     "items": [
      {
       "id": "hit",
       "icon": "check",
       "title": {
        "en": "Found",
        "tr": "Bulundu"
       },
       "sub": {
        "en": "return it",
        "tr": "döndür"
       },
       "tag": {
        "en": "fast path",
        "tr": "hızlı yol"
       }
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
     "icon": "database",
     "title": {
      "en": "Miss",
      "tr": "Iska"
     },
     "items": [
      {
       "id": "db",
       "icon": "database",
       "title": {
        "en": "Query DB",
        "tr": "DB'yi sorgula"
       },
       "sub": "SELECT … WHERE id=42",
       "tag": "~5 ms"
      },
      {
       "id": "set",
       "icon": "save",
       "title": "cache.set(key, ttl)",
       "sub": "ttl = 300 s",
       "tag": {
        "en": "next time: hit",
        "tr": "sonraki sefer: isabet"
       }
      },
      {
       "id": "resp",
       "icon": "check",
       "title": {
        "en": "Return",
        "tr": "Döndür"
       },
       "sub": {
        "en": "slower once",
        "tr": "bir kez yavaş"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "red",
     "icon": "pencil",
     "title": {
      "en": "On write",
      "tr": "Yazmada"
     },
     "items": [
      {
       "id": "inv",
       "icon": "trash-2",
       "title": {
        "en": "Invalidate",
        "tr": "Geçersiz kıl"
       },
       "sub": "cache.delete(key)",
       "tag": {
        "en": "or update",
        "tr": "ya da güncelle"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "req",
   "get",
   "r",
   "l",
   1,
   ""
  ],
  [
   "get",
   "hit",
   "r",
   "l",
   2,
   ""
  ],
  [
   "get",
   "db",
   "b",
   "t",
   3,
   {
    "en": "miss",
    "tr": "ıska"
   },
   {
    "via": [
     "g1",
     "g3"
    ]
   }
  ],
  [
   "db",
   "set",
   "r",
   "l",
   4,
   ""
  ],
  [
   "set",
   "resp",
   "r",
   "l",
   5,
   ""
  ]
 ],
 "legend": [
  [
   "green",
   {
    "en": "App",
    "tr": "Uygulama"
   }
  ],
  [
   "purple",
   {
    "en": "Hit",
    "tr": "İsabet"
   }
  ],
  [
   "amber",
   {
    "en": "Miss",
    "tr": "Iska"
   }
  ],
  [
   "red",
   {
    "en": "Write",
    "tr": "Yazma"
   }
  ]
 ],
 "footer": {
  "en": "🧠 \"There are two hard things: cache invalidation and naming things\"",
  "tr": "🧠 \"İki zor şey var: cache geçersiz kılma ve isim koymak\""
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
