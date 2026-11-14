// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "How a DNS lookup is resolved",
  "tr": "Bir DNS sorgusu nasıl çözülür"
 },
 "subtitle": {
  "en": "Stub resolver → recursive resolver → root → TLD → authoritative · every answer is cached for its TTL",
  "tr": "Stub çözücü → özyinelemeli çözücü → kök → TLD → yetkili · her cevap TTL süresince önbellekte"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "laptop",
     "title": {
      "en": "Your machine",
      "tr": "Makinen"
     },
     "items": [
      {
       "id": "app",
       "icon": "app-window",
       "title": {
        "en": "App",
        "tr": "Uygulama"
       },
       "sub": "getaddrinfo(\"shop.example.com\")",
       "tag": ""
      },
      {
       "id": "stub",
       "icon": "search",
       "title": {
        "en": "Stub resolver",
        "tr": "Stub çözücü"
       },
       "sub": "/etc/hosts → cache",
       "tag": {
        "en": "systemd-resolved",
        "tr": "systemd-resolved"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "server",
     "title": {
      "en": "Recursive resolver",
      "tr": "Özyinelemeli çözücü"
     },
     "items": [
      {
       "id": "rec",
       "icon": "server",
       "title": "1.1.1.1 / 8.8.8.8 / ISP",
       "sub": {
        "en": "does the walking",
        "tr": "yolu yürür"
       },
       "tag": {
        "en": "caches answers",
        "tr": "cevapları önbelleğe alır"
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
     "icon": "globe",
     "title": {
      "en": "The DNS hierarchy",
      "tr": "DNS hiyerarşisi"
     },
     "items": [
      {
       "id": "root",
       "icon": "circle-dot",
       "title": {
        "en": "Root servers",
        "tr": "Kök sunucular"
       },
       "sub": ".",
       "tag": {
        "en": "→ ask .com",
        "tr": "→ .com'a sor"
       }
      },
      {
       "id": "tld",
       "icon": "folder",
       "title": "TLD .com",
       "sub": "a.gtld-servers.net",
       "tag": {
        "en": "→ ask example.com NS",
        "tr": "→ example.com NS'ine sor"
       }
      },
      {
       "id": "auth",
       "icon": "badge-check",
       "title": {
        "en": "Authoritative",
        "tr": "Yetkili"
       },
       "sub": "ns1.example.com",
       "tag": "A 93.184.215.14 · TTL 300"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "app",
   "stub",
   "r",
   "l",
   1,
   ""
  ],
  [
   "stub",
   "rec",
   "r",
   "l",
   2,
   ""
  ],
  [
   "rec",
   "root",
   "b",
   "t",
   3,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "root",
   "tld",
   "r",
   "l",
   4,
   ""
  ],
  [
   "tld",
   "auth",
   "r",
   "l",
   5,
   ""
  ],
  [
   "auth",
   "rec",
   "t",
   "b",
   "",
   {
    "en": "answer cached for TTL",
    "tr": "cevap TTL kadar önbellekte"
   },
   {
    "dash": true,
    "via": [
     "g3",
     "g2"
    ]
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
    "en": "Resolver",
    "tr": "Çözücü"
   }
  ],
  [
   "amber",
   {
    "en": "Hierarchy",
    "tr": "Hiyerarşi"
   }
  ]
 ],
 "footer": {
  "en": "⏱️ Lower the TTL a day before a migration, raise it again afterwards",
  "tr": "⏱️ Taşımadan bir gün önce TTL'i düşür, sonra tekrar yükselt"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
