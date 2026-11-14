// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "Who reads and writes which headers",
  "tr": "Hangi header'ı kim okur, kim yazar"
 },
 "subtitle": {
  "en": "A request passes several hops; each one reads some headers and adds others",
  "tr": "Bir istek birkaç duraktan geçer; her biri bazı header'ları okur, bazılarını ekler"
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
      "en": "Browser",
      "tr": "Tarayıcı"
     },
     "items": [
      {
       "id": "req",
       "icon": "send",
       "title": {
        "en": "Sends",
        "tr": "Gönderir"
       },
       "sub": "Host · Accept · Cookie · Authorization",
       "tag": {
        "en": "User-Agent",
        "tr": "User-Agent"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "cloud",
     "title": "CDN",
     "items": [
      {
       "id": "cdn",
       "icon": "hard-drive",
       "title": {
        "en": "Cache lookup",
        "tr": "Önbellek kontrolü"
       },
       "sub": "Cache-Control · Vary",
       "tag": {
        "en": "adds Age · X-Cache",
        "tr": "Age · X-Cache ekler"
       }
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "amber",
     "icon": "network",
     "title": {
      "en": "Load balancer / ingress",
      "tr": "Load balancer / ingress"
     },
     "items": [
      {
       "id": "lb",
       "icon": "plus",
       "title": {
        "en": "Adds",
        "tr": "Ekler"
       },
       "sub": "X-Forwarded-For · X-Forwarded-Proto",
       "tag": "X-Request-ID · traceparent"
      }
     ]
    }
   ]
  },
  {
   "groups": [
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "server",
     "title": {
      "en": "App",
      "tr": "Uygulama"
     },
     "items": [
      {
       "id": "app",
       "icon": "eye",
       "title": {
        "en": "Reads",
        "tr": "Okur"
       },
       "sub": "Authorization · Content-Type",
       "tag": "traceparent"
      },
      {
       "id": "resp",
       "icon": "reply",
       "title": {
        "en": "Answers",
        "tr": "Cevaplar"
       },
       "sub": "Content-Type · Cache-Control · ETag",
       "tag": "Set-Cookie"
      }
     ]
    },
    {
     "id": "g5",
     "n": 5,
     "color": "red",
     "icon": "shield",
     "title": {
      "en": "Back in the browser",
      "tr": "Tarayıcıya dönüş"
     },
     "items": [
      {
       "id": "sec",
       "icon": "shield-check",
       "title": {
        "en": "Enforces",
        "tr": "Uygular"
       },
       "sub": "HSTS · CSP · CORS",
       "tag": {
        "en": "stores cookies · caches",
        "tr": "cookie saklar · önbelleğe alır"
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
   "cdn",
   "r",
   "l",
   1,
   ""
  ],
  [
   "cdn",
   "lb",
   "r",
   "l",
   2,
   {
    "en": "miss",
    "tr": "ıska"
   }
  ],
  [
   "lb",
   "app",
   "b",
   "t",
   3,
   "",
   {
    "via": [
     "g3",
     "g4"
    ]
   }
  ],
  [
   "app",
   "resp",
   "r",
   "l",
   4,
   ""
  ],
  [
   "resp",
   "sec",
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
    "en": "Client",
    "tr": "İstemci"
   }
  ],
  [
   "purple",
   "CDN"
  ],
  [
   "amber",
   {
    "en": "Proxy",
    "tr": "Proxy"
   }
  ],
  [
   "green",
   {
    "en": "App",
    "tr": "Uygulama"
   }
  ],
  [
   "red",
   {
    "en": "Security",
    "tr": "Güvenlik"
   }
  ]
 ],
 "footer": {
  "en": "🔐 Only trust X-Forwarded-* that your own proxy set — clients can send anything",
  "tr": "🔐 Sadece kendi proxy'nin koyduğu X-Forwarded-* header'larına güven; istemci her şeyi yollayabilir"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
