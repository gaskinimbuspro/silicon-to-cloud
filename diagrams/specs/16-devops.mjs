// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "DevOps: one loop from idea to production and back",
  "tr": "DevOps: fikirden production'a ve geri tek bir döngü"
 },
 "subtitle": {
  "en": "Small changes flow quickly and safely to users · what happens in production feeds the next change · culture and measurement keep the loop honest",
  "tr": "Küçük değişiklikler kullanıcılara hızlı ve güvenle akar · production'da olan bir sonraki değişikliği besler · kültür ve ölçüm döngüyü dürüst tutar"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "code",
     "title": {
      "en": "Build it",
      "tr": "İnşa et"
     },
     "items": [
      {
       "id": "plan",
       "icon": "lightbulb",
       "title": {
        "en": "Plan",
        "tr": "Planla"
       },
       "sub": {
        "en": "small, valuable slices",
        "tr": "küçük, değerli dilimler"
       },
       "tag": ""
      },
      {
       "id": "code",
       "icon": "git-branch",
       "title": {
        "en": "Code & review",
        "tr": "Kodla ve incele"
       },
       "sub": {
        "en": "trunk-based, short PRs",
        "tr": "trunk-based, kısa PR'lar"
       },
       "tag": "16.1"
      },
      {
       "id": "ci",
       "icon": "check-check",
       "title": {
        "en": "Build & test",
        "tr": "Build ve test"
       },
       "sub": {
        "en": "CI on every commit",
        "tr": "her commit'te CI"
       },
       "tag": "9.4"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "green",
     "icon": "rocket",
     "title": {
      "en": "Ship it",
      "tr": "Gönder"
     },
     "items": [
      {
       "id": "rel",
       "icon": "rocket",
       "title": {
        "en": "Deploy ≠ release",
        "tr": "Deploy ≠ release"
       },
       "sub": {
        "en": "flags, canary, progressive",
        "tr": "flag, canary, kademeli"
       },
       "tag": "16.2"
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
     "icon": "activity",
     "title": {
      "en": "Run it",
      "tr": "Çalıştır"
     },
     "items": [
      {
       "id": "obs",
       "icon": "activity",
       "title": {
        "en": "Observe",
        "tr": "Gözlemle"
       },
       "sub": {
        "en": "SLOs, alerts",
        "tr": "SLO, alarmlar"
       },
       "tag": "9.5"
      },
      {
       "id": "inc",
       "icon": "siren",
       "title": {
        "en": "Respond",
        "tr": "Müdahale et"
       },
       "sub": {
        "en": "on-call, incidents",
        "tr": "nöbet, olaylar"
       },
       "tag": "16.3"
      },
      {
       "id": "learn",
       "icon": "book-open",
       "title": {
        "en": "Learn",
        "tr": "Öğren"
       },
       "sub": {
        "en": "blameless postmortems",
        "tr": "suçlamasız postmortem"
       },
       "tag": "16.3"
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "purple",
     "icon": "users",
     "title": {
      "en": "Enable it",
      "tr": "Mümkün kıl"
     },
     "items": [
      {
       "id": "plat",
       "icon": "layout-grid",
       "title": {
        "en": "Platform & golden paths",
        "tr": "Platform ve altın yollar"
       },
       "sub": {
        "en": "self-service",
        "tr": "self-servis"
       },
       "tag": "16.4"
      },
      {
       "id": "dora",
       "icon": "gauge",
       "title": {
        "en": "Measure",
        "tr": "Ölç"
       },
       "sub": {
        "en": "DORA metrics",
        "tr": "DORA metrikleri"
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
   "plan",
   "code",
   "r",
   "l",
   1,
   ""
  ],
  [
   "code",
   "ci",
   "r",
   "l",
   2,
   ""
  ],
  [
   "ci",
   "rel",
   "r",
   "l",
   3,
   ""
  ],
  [
   "rel",
   "obs",
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
   "obs",
   "inc",
   "r",
   "l",
   5,
   ""
  ],
  [
   "inc",
   "learn",
   "r",
   "l",
   6,
   ""
  ],
  [
   "learn",
   "plat",
   "r",
   "l",
   7,
   ""
  ],
  [
   "plat",
   "dora",
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
    "en": "Build",
    "tr": "İnşa"
   }
  ],
  [
   "green",
   {
    "en": "Ship",
    "tr": "Gönder"
   }
  ],
  [
   "amber",
   {
    "en": "Run",
    "tr": "Çalıştır"
   }
  ],
  [
   "purple",
   {
    "en": "Enable",
    "tr": "Mümkün kıl"
   }
  ]
 ],
 "footer": {
  "en": "🔁 Speed and stability are not a trade-off: the best teams have both (DORA research)",
  "tr": "🔁 Hız ve kararlılık bir ödünleşim değildir: en iyi ekiplerde ikisi de vardır (DORA araştırması)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
