// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "How CORS works (with a preflight)",
  "tr": "CORS nasıl çalışır (preflight ile)"
 },
 "subtitle": {
  "en": "CORS = Cross-Origin Resource Sharing · the browser asks the API for permission before letting JS read a cross-origin response",
  "tr": "CORS = Cross-Origin Resource Sharing · tarayıcı, JS'in başka bir origin'in cevabını okumasına izin vermeden önce API'ye sorar"
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
      "en": "Browser · app.example.com",
      "tr": "Tarayıcı · app.example.com"
     },
     "items": [
      {
       "id": "js",
       "icon": "code",
       "title": "fetch(api, PUT, JSON)",
       "sub": {
        "en": "different origin",
        "tr": "farklı origin"
       },
       "tag": {
        "en": "not a \"simple\" request",
        "tr": "\"basit\" istek değil"
       }
      },
      {
       "id": "pre",
       "icon": "circle-help",
       "title": "OPTIONS /items",
       "sub": "Origin · Access-Control-Request-Method: PUT",
       "tag": {
        "en": "preflight",
        "tr": "preflight"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "server",
     "title": "api.example.com",
     "items": [
      {
       "id": "ans",
       "icon": "check",
       "title": "204 No Content",
       "sub": "Access-Control-Allow-Origin · -Methods · -Headers",
       "tag": "Access-Control-Max-Age: 600"
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
     "color": "blue",
     "icon": "globe",
     "title": {
      "en": "Browser",
      "tr": "Tarayıcı"
     },
     "items": [
      {
       "id": "real",
       "icon": "send",
       "title": "PUT /items",
       "sub": "Origin: https://app.example.com",
       "tag": {
        "en": "the real request",
        "tr": "asıl istek"
       }
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "server",
     "title": "api.example.com",
     "items": [
      {
       "id": "resp",
       "icon": "reply",
       "title": "200 OK",
       "sub": "Access-Control-Allow-Origin: https://app.example.com",
       "tag": ""
      }
     ]
    },
    {
     "id": "g5",
     "n": 5,
     "color": "red",
     "icon": "shield-check",
     "title": {
      "en": "Browser check",
      "tr": "Tarayıcı kontrolü"
     },
     "items": [
      {
       "id": "okk",
       "icon": "check",
       "title": {
        "en": "JS can read it",
        "tr": "JS okuyabilir"
       },
       "sub": {
        "en": "header matches the origin",
        "tr": "header origin ile eşleşiyor"
       },
       "tag": {
        "en": "else: CORS error",
        "tr": "yoksa: CORS hatası"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "js",
   "pre",
   "r",
   "l",
   1,
   ""
  ],
  [
   "pre",
   "ans",
   "r",
   "l",
   2,
   ""
  ],
  [
   "ans",
   "real",
   "b",
   "t",
   3,
   {
    "en": "allowed",
    "tr": "izin verildi"
   },
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "real",
   "resp",
   "r",
   "l",
   4,
   ""
  ],
  [
   "resp",
   "okk",
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
    "en": "Browser",
    "tr": "Tarayıcı"
   }
  ],
  [
   "purple",
   {
    "en": "Preflight",
    "tr": "Preflight"
   }
  ],
  [
   "green",
   "API"
  ],
  [
   "red",
   {
    "en": "Enforcement",
    "tr": "Uygulama"
   }
  ]
 ],
 "footer": {
  "en": "🧱 CORS is enforced by the browser — curl and servers ignore it. It protects users, not your API",
  "tr": "🧱 CORS'u tarayıcı uygular; curl ve sunucular umursamaz. API'ni değil kullanıcıyı korur"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
