// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Platform engineering: an internal product for developers",
  "tr": "Platform mühendisliği: geliştiriciler için bir iç ürün"
 },
 "subtitle": {
  "en": "A platform team turns infrastructure into self-service golden paths · stream-aligned teams ship without filing tickets",
  "tr": "Bir platform ekibi altyapıyı self-servis altın yollara dönüştürür · ürün ekipleri ticket açmadan gönderir"
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
      "en": "Developers",
      "tr": "Geliştiriciler"
     },
     "items": [
      {
       "id": "dev",
       "icon": "users",
       "title": {
        "en": "Stream-aligned teams",
        "tr": "Akışa hizalı ekipler"
       },
       "sub": {
        "en": "own their services end-to-end",
        "tr": "servislerine uçtan uca sahipler"
       },
       "tag": ""
      },
      {
       "id": "need",
       "icon": "message-square",
       "title": {
        "en": "\"I need a new service\"",
        "tr": "\"Yeni bir servis lazım\""
       },
       "sub": {
        "en": "repo, CI, env, DB, alerts",
        "tr": "repo, CI, ortam, DB, alarmlar"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "layout-dashboard",
     "title": {
      "en": "Developer portal",
      "tr": "Geliştirici portalı"
     },
     "items": [
      {
       "id": "cat",
       "icon": "library",
       "title": {
        "en": "Software catalog",
        "tr": "Yazılım kataloğu"
       },
       "sub": {
        "en": "owners, docs, APIs, health",
        "tr": "sahipler, dokümanlar, API, sağlık"
       },
       "tag": "Backstage"
      },
      {
       "id": "tmpl",
       "icon": "wand-2",
       "title": {
        "en": "Golden path templates",
        "tr": "Altın yol şablonları"
       },
       "sub": {
        "en": "new service in minutes",
        "tr": "dakikalar içinde yeni servis"
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
     "icon": "blocks",
     "title": {
      "en": "Platform capabilities",
      "tr": "Platform yetenekleri"
     },
     "items": [
      {
       "id": "cicd",
       "icon": "git-branch",
       "title": "CI/CD · GitOps",
       "sub": {
        "en": "pipelines as a product",
        "tr": "ürün olarak pipeline"
       },
       "tag": ""
      },
      {
       "id": "rt",
       "icon": "boxes",
       "title": {
        "en": "Runtime",
        "tr": "Çalışma ortamı"
       },
       "sub": {
        "en": "K8s, chart with good defaults",
        "tr": "K8s, iyi varsayılanlı chart"
       },
       "tag": ""
      },
      {
       "id": "infra",
       "icon": "database",
       "title": {
        "en": "Infra on demand",
        "tr": "Talep üzerine altyapı"
       },
       "sub": {
        "en": "DBs, queues via modules/CRDs",
        "tr": "modül/CRD ile DB, kuyruk"
       },
       "tag": ""
      },
      {
       "id": "obs",
       "icon": "activity",
       "title": {
        "en": "Observability & security",
        "tr": "Gözlemlenebilirlik ve güvenlik"
       },
       "sub": {
        "en": "built in, not bolted on",
        "tr": "sonradan değil, içine gömülü"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "amber",
     "icon": "cloud",
     "title": {
      "en": "Cloud & clusters",
      "tr": "Bulut ve cluster'lar"
     },
     "items": [
      {
       "id": "cloud",
       "icon": "cloud",
       "title": {
        "en": "Accounts, networks, clusters",
        "tr": "Hesaplar, ağlar, cluster'lar"
       },
       "sub": {
        "en": "landing zone",
        "tr": "landing zone"
       },
       "tag": "14.4"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "dev",
   "need",
   "r",
   "l",
   1,
   ""
  ],
  [
   "need",
   "cat",
   "r",
   "l",
   2,
   ""
  ],
  [
   "cat",
   "tmpl",
   "r",
   "l",
   3,
   ""
  ],
  [
   "tmpl",
   "cicd",
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
   "cicd",
   "rt",
   "r",
   "l",
   5,
   ""
  ],
  [
   "rt",
   "infra",
   "r",
   "l",
   6,
   ""
  ],
  [
   "infra",
   "obs",
   "r",
   "l",
   7,
   ""
  ],
  [
   "obs",
   "cloud",
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
    "en": "Users",
    "tr": "Kullanıcılar"
   }
  ],
  [
   "purple",
   {
    "en": "Portal",
    "tr": "Portal"
   }
  ],
  [
   "green",
   {
    "en": "Capabilities",
    "tr": "Yetenekler"
   }
  ],
  [
   "amber",
   {
    "en": "Foundation",
    "tr": "Temel"
   }
  ]
 ],
 "footer": {
  "en": "🛤️ Golden paths are paved, not walled: the easy way is the right way, but teams can still leave it",
  "tr": "🛤️ Altın yollar asfalttır, duvar değil: kolay yol doğru yoldur ama ekipler yine de ondan çıkabilir"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
