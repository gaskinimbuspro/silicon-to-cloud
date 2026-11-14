// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How HTTP caching works: freshness and revalidation",
  "tr": "HTTP önbelleği nasıl çalışır: tazelik ve yeniden doğrulama"
 },
 "subtitle": {
  "en": "Cache-Control says how long a copy is fresh · ETag lets the client ask \"has it changed?\"",
  "tr": "Cache-Control bir kopyanın ne kadar taze olduğunu söyler · ETag \"değişti mi?\" diye sormayı sağlar"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "download",
     "title": {
      "en": "First visit",
      "tr": "İlk ziyaret"
     },
     "items": [
      {
       "id": "get",
       "icon": "send",
       "title": "GET /logo.png",
       "sub": {
        "en": "nothing cached",
        "tr": "önbellekte yok"
       },
       "tag": ""
      },
      {
       "id": "ok",
       "icon": "check",
       "title": "200 OK",
       "sub": "Cache-Control: max-age=3600",
       "tag": "ETag: \"v7\""
      },
      {
       "id": "store",
       "icon": "hard-drive",
       "title": {
        "en": "Store copy",
        "tr": "Kopyayı sakla"
       },
       "sub": {
        "en": "browser / CDN cache",
        "tr": "tarayıcı / CDN önbelleği"
       },
       "tag": {
        "en": "fresh for 1 h",
        "tr": "1 saat taze"
       }
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
     "icon": "zap",
     "title": {
      "en": "Within max-age",
      "tr": "max-age içinde"
     },
     "items": [
      {
       "id": "fresh",
       "icon": "zap",
       "title": {
        "en": "Use the copy",
        "tr": "Kopyayı kullan"
       },
       "sub": {
        "en": "no request at all",
        "tr": "hiç istek yok"
       },
       "tag": "0 RTT"
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "amber",
     "icon": "refresh-cw",
     "title": {
      "en": "After it expires",
      "tr": "Süresi dolunca"
     },
     "items": [
      {
       "id": "cond",
       "icon": "circle-help",
       "title": {
        "en": "Conditional GET",
        "tr": "Koşullu GET"
       },
       "sub": "If-None-Match: \"v7\"",
       "tag": {
        "en": "\"changed?\"",
        "tr": "\"değişti mi?\""
       }
      },
      {
       "id": "nm",
       "icon": "check-check",
       "title": "304 Not Modified",
       "sub": {
        "en": "no body",
        "tr": "gövde yok"
       },
       "tag": {
        "en": "tiny response",
        "tr": "minik cevap"
       }
      },
      {
       "id": "reuse",
       "icon": "recycle",
       "title": {
        "en": "Reuse copy",
        "tr": "Kopyayı yeniden kullan"
       },
       "sub": {
        "en": "fresh again for 1 h",
        "tr": "yine 1 saat taze"
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
   "get",
   "ok",
   "r",
   "l",
   1,
   ""
  ],
  [
   "ok",
   "store",
   "r",
   "l",
   2,
   ""
  ],
  [
   "store",
   "fresh",
   "b",
   "t",
   3,
   "",
   {
    "via": [
     "g1",
     "g2"
    ],
    "mx": 0
   }
  ],
  [
   "store",
   "cond",
   "b",
   "t",
   4,
   "",
   {
    "via": [
     "g1",
     "g3"
    ]
   }
  ],
  [
   "cond",
   "nm",
   "r",
   "l",
   5,
   ""
  ],
  [
   "nm",
   "reuse",
   "r",
   "l",
   6,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Fetch",
    "tr": "Getir"
   }
  ],
  [
   "green",
   {
    "en": "Fresh",
    "tr": "Taze"
   }
  ],
  [
   "amber",
   {
    "en": "Revalidate",
    "tr": "Yeniden doğrula"
   }
  ]
 ],
 "footer": {
  "en": "🏷️ Hashed file names (app.3f9a.js) + max-age=31536000, immutable = never revalidate",
  "tr": "🏷️ Hash'li dosya adları (app.3f9a.js) + max-age=31536000, immutable = hiç yeniden doğrulama"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
