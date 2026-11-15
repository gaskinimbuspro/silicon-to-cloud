// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Incident response: from alert to lesson learned",
  "tr": "Olay müdahalesi: alarmdan alınan derse"
 },
 "subtitle": {
  "en": "Clear roles and a calm process restore service faster · the postmortem turns a bad day into a better system",
  "tr": "Net roller ve sakin bir süreç hizmeti daha hızlı geri getirir · postmortem kötü bir günü daha iyi bir sisteme dönüştürür"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "red",
     "icon": "siren",
     "title": {
      "en": "Detect & triage",
      "tr": "Tespit et ve önceliklendir"
     },
     "items": [
      {
       "id": "alert",
       "icon": "bell",
       "title": {
        "en": "Alert / report",
        "tr": "Alarm / bildirim"
       },
       "sub": {
        "en": "SLO burn rate, customer",
        "tr": "SLO burn rate, müşteri"
       },
       "tag": ""
      },
      {
       "id": "ack",
       "icon": "phone",
       "title": {
        "en": "On-call acknowledges",
        "tr": "Nöbetçi onaylar"
       },
       "sub": {
        "en": "within minutes",
        "tr": "dakikalar içinde"
       },
       "tag": ""
      },
      {
       "id": "sev",
       "icon": "flag",
       "title": {
        "en": "Declare severity",
        "tr": "Önem seviyesi ilan et"
       },
       "sub": "SEV1 · SEV2 · SEV3",
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "amber",
     "icon": "users",
     "title": {
      "en": "Mobilize",
      "tr": "Seferber et"
     },
     "items": [
      {
       "id": "ic",
       "icon": "user-cog",
       "title": {
        "en": "Incident commander",
        "tr": "Olay komutanı"
       },
       "sub": {
        "en": "coordinates, decides",
        "tr": "koordine eder, karar verir"
       },
       "tag": ""
      },
      {
       "id": "comm",
       "icon": "megaphone",
       "title": {
        "en": "Comms lead",
        "tr": "İletişim sorumlusu"
       },
       "sub": {
        "en": "status page, stakeholders",
        "tr": "durum sayfası, paydaşlar"
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
     "icon": "life-buoy",
     "title": {
      "en": "Stabilize",
      "tr": "Stabilize et"
     },
     "items": [
      {
       "id": "mit",
       "icon": "undo-2",
       "title": {
        "en": "Mitigate first",
        "tr": "Önce hafiflet"
       },
       "sub": {
        "en": "rollback, flag off, failover, scale",
        "tr": "geri al, flag kapat, failover, büyüt"
       },
       "tag": {
        "en": "fix later",
        "tr": "düzeltme sonra"
       }
      },
      {
       "id": "res",
       "icon": "check-circle",
       "title": {
        "en": "Resolve & monitor",
        "tr": "Çöz ve izle"
       },
       "sub": {
        "en": "SLIs back to normal",
        "tr": "SLI'lar normale döndü"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "purple",
     "icon": "book-open",
     "title": {
      "en": "Learn",
      "tr": "Öğren"
     },
     "items": [
      {
       "id": "pm",
       "icon": "file-text",
       "title": {
        "en": "Blameless postmortem",
        "tr": "Suçlamasız postmortem"
       },
       "sub": {
        "en": "timeline, contributing factors",
        "tr": "zaman çizelgesi, katkıda bulunan etkenler"
       },
       "tag": ""
      },
      {
       "id": "act",
       "icon": "list-checks",
       "title": {
        "en": "Action items",
        "tr": "Aksiyon maddeleri"
       },
       "sub": {
        "en": "owned, tracked, done",
        "tr": "sahipli, izlenen, biten"
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
   "alert",
   "ack",
   "r",
   "l",
   1,
   ""
  ],
  [
   "ack",
   "sev",
   "r",
   "l",
   2,
   ""
  ],
  [
   "sev",
   "ic",
   "r",
   "l",
   3,
   ""
  ],
  [
   "ic",
   "comm",
   "r",
   "l",
   4,
   ""
  ],
  [
   "comm",
   "mit",
   "b",
   "t",
   5,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "mit",
   "res",
   "r",
   "l",
   6,
   ""
  ],
  [
   "res",
   "pm",
   "r",
   "l",
   7,
   ""
  ],
  [
   "pm",
   "act",
   "r",
   "l",
   8,
   ""
  ]
 ],
 "legend": [
  [
   "red",
   {
    "en": "Detect",
    "tr": "Tespit"
   }
  ],
  [
   "amber",
   {
    "en": "Mobilize",
    "tr": "Seferberlik"
   }
  ],
  [
   "green",
   {
    "en": "Stabilize",
    "tr": "Stabilize"
   }
  ],
  [
   "purple",
   {
    "en": "Learn",
    "tr": "Öğren"
   }
  ]
 ],
 "footer": {
  "en": "🧯 Stop the bleeding before finding the cause: rollback first, debug later",
  "tr": "🧯 Sebebi bulmadan önce kanamayı durdur: önce geri al, sonra ayıkla"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
