// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "A pod's life in production: scheduled, started, serving, stopped",
  "tr": "Production'da bir pod'un hayatı: zamanlanır, başlar, hizmet verir, durur"
 },
 "subtitle": {
  "en": "Each phase has its own settings · getting them right is the difference between zero-downtime deploys and dropped requests",
  "tr": "Her aşamanın kendi ayarları var · onları doğru yapmak, kesintisiz deploy ile düşen istekler arasındaki farktır"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "calendar-check",
     "title": {
      "en": "Schedule",
      "tr": "Zamanla"
     },
     "items": [
      {
       "id": "req",
       "icon": "gauge",
       "title": {
        "en": "Requests fit?",
        "tr": "Request'ler sığıyor mu?"
       },
       "sub": "cpu · memory · gpu",
       "tag": ""
      },
      {
       "id": "aff",
       "icon": "magnet",
       "title": {
        "en": "Placement rules",
        "tr": "Yerleşim kuralları"
       },
       "sub": "affinity · taints · topologySpread",
       "tag": {
        "en": "spread over zones",
        "tr": "zone'lara yay"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "power",
     "title": {
      "en": "Start",
      "tr": "Başlat"
     },
     "items": [
      {
       "id": "init",
       "icon": "list-ordered",
       "title": {
        "en": "Init containers",
        "tr": "Init container'lar"
       },
       "sub": {
        "en": "migrations, wait-for",
        "tr": "migration, bekleme"
       },
       "tag": ""
      },
      {
       "id": "start",
       "icon": "hourglass",
       "title": {
        "en": "Startup probe",
        "tr": "Startup probe"
       },
       "sub": {
        "en": "slow boot allowed",
        "tr": "yavaş boot'a izin"
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
     "id": "g3",
     "n": 3,
     "color": "green",
     "icon": "heart-pulse",
     "title": {
      "en": "Serve",
      "tr": "Hizmet ver"
     },
     "items": [
      {
       "id": "ready",
       "icon": "check-circle",
       "title": {
        "en": "Readiness probe",
        "tr": "Readiness probe"
       },
       "sub": {
        "en": "in / out of Service endpoints",
        "tr": "Service endpoint'lerine gir / çık"
       },
       "tag": ""
      },
      {
       "id": "live",
       "icon": "heart-pulse",
       "title": {
        "en": "Liveness probe",
        "tr": "Liveness probe"
       },
       "sub": {
        "en": "restart if stuck (use sparingly)",
        "tr": "takılırsa yeniden başlat (az kullan)"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "red",
     "icon": "power-off",
     "title": {
      "en": "Stop",
      "tr": "Durdur"
     },
     "items": [
      {
       "id": "pre",
       "icon": "hand",
       "title": "preStop",
       "sub": {
        "en": "sleep a few s, endpoints update",
        "tr": "birkaç sn bekle, endpoint'ler güncellensin"
       },
       "tag": ""
      },
      {
       "id": "term",
       "icon": "octagon-x",
       "title": "SIGTERM → grace → SIGKILL",
       "sub": {
        "en": "grace period, 30 s default",
        "tr": "bekleme süresi, varsayılan 30 sn"
       },
       "tag": {
        "en": "drain in-flight",
        "tr": "süren istekleri bitir"
       }
      },
      {
       "id": "pdb",
       "icon": "shield",
       "title": "PodDisruptionBudget",
       "sub": {
        "en": "limits voluntary evictions",
        "tr": "gönüllü tahliyeleri sınırlar"
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
   "req",
   "aff",
   "r",
   "l",
   1,
   ""
  ],
  [
   "aff",
   "init",
   "r",
   "l",
   2,
   ""
  ],
  [
   "init",
   "start",
   "r",
   "l",
   3,
   ""
  ],
  [
   "start",
   "ready",
   "b",
   "t",
   4,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "ready",
   "live",
   "r",
   "l",
   5,
   ""
  ],
  [
   "live",
   "pre",
   "r",
   "l",
   6,
   ""
  ],
  [
   "pre",
   "term",
   "r",
   "l",
   7,
   ""
  ],
  [
   "term",
   "pdb",
   "r",
   "l",
   8,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Schedule",
    "tr": "Zamanla"
   }
  ],
  [
   "purple",
   {
    "en": "Start",
    "tr": "Başlat"
   }
  ],
  [
   "green",
   {
    "en": "Serve",
    "tr": "Hizmet"
   }
  ],
  [
   "red",
   {
    "en": "Stop",
    "tr": "Durdur"
   }
  ]
 ],
 "footer": {
  "en": "🛬 Graceful shutdown: stop receiving, finish in-flight, then exit — before the grace period ends",
  "tr": "🛬 Düzgün kapanış: yeni istek almayı bırak, sürenleri bitir, sonra çık; süre dolmadan önce"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
