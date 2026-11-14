// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "How a load balancer spreads traffic",
  "tr": "Bir load balancer trafiği nasıl dağıtır"
 },
 "subtitle": {
  "en": "Health checks decide who is eligible · the algorithm decides who gets the next request or connection",
  "tr": "Health check'ler kimin uygun olduğuna · algoritma bir sonraki isteği ya da bağlantıyı kimin alacağına karar verir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "users",
     "title": {
      "en": "Clients",
      "tr": "İstemciler"
     },
     "items": [
      {
       "id": "cl",
       "icon": "users",
       "title": {
        "en": "Requests",
        "tr": "İstekler"
       },
       "sub": {
        "en": "or TCP connections (L4)",
        "tr": "ya da TCP bağlantıları (L4)"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "split",
     "title": {
      "en": "Load balancer",
      "tr": "Load balancer"
     },
     "items": [
      {
       "id": "alg",
       "icon": "shuffle",
       "title": {
        "en": "Pick a backend",
        "tr": "Bir backend seç"
       },
       "sub": {
        "en": "round robin · least conn · hash · EWMA",
        "tr": "round robin · least conn · hash · EWMA"
       },
       "tag": ""
      },
      {
       "id": "hc",
       "icon": "heart-pulse",
       "title": {
        "en": "Health checks",
        "tr": "Health check'ler"
       },
       "sub": "GET /healthz every 5 s",
       "tag": {
        "en": "2 fails → out",
        "tr": "2 hata → dışarı"
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
     "color": "green",
     "icon": "server",
     "title": {
      "en": "Healthy pool",
      "tr": "Sağlıklı havuz"
     },
     "items": [
      {
       "id": "b1",
       "icon": "server",
       "title": "app-1",
       "sub": {
        "en": "in rotation",
        "tr": "dönüşte"
       },
       "tag": "✓"
      },
      {
       "id": "b2",
       "icon": "server",
       "title": "app-2",
       "sub": {
        "en": "in rotation",
        "tr": "dönüşte"
       },
       "tag": "✓"
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "red",
     "icon": "server-off",
     "title": {
      "en": "Out of rotation",
      "tr": "Dönüş dışı"
     },
     "items": [
      {
       "id": "b3",
       "icon": "server-off",
       "title": "app-3",
       "sub": {
        "en": "failing / draining",
        "tr": "hatalı / boşaltılıyor"
       },
       "tag": {
        "en": "existing conns finish",
        "tr": "mevcut bağlantılar biter"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "cl",
   "alg",
   "r",
   "l",
   1,
   ""
  ],
  [
   "alg",
   "b1",
   "b",
   "t",
   2,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "hc",
   "b3",
   "b",
   "t",
   3,
   {
    "en": "fail",
    "tr": "hata"
   },
   {
    "via": [
     "g2",
     "g4"
    ],
    "dash": true
   }
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Clients",
    "tr": "İstemciler"
   }
  ],
  [
   "purple",
   "LB"
  ],
  [
   "green",
   {
    "en": "Healthy",
    "tr": "Sağlıklı"
   }
  ],
  [
   "red",
   {
    "en": "Out",
    "tr": "Dışarıda"
   }
  ]
 ],
 "footer": {
  "en": "🚦 Readiness probe = \"may I get traffic?\" · liveness probe = \"should I be restarted?\" — never mix them",
  "tr": "🚦 Readiness probe = \"trafik alabilir miyim?\" · liveness probe = \"yeniden başlatılmalı mıyım?\" — asla karıştırma"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
