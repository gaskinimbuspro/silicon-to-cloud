// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "How database replication and failover work",
  "tr": "Veritabanı replikasyonu ve failover nasıl çalışır"
 },
 "subtitle": {
  "en": "The primary writes changes to a log (WAL/binlog) · replicas replay it · failover promotes a replica",
  "tr": "Primary değişiklikleri bir log'a (WAL/binlog) yazar · replikalar onu yeniden oynatır · failover bir replikayı terfi ettirir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "app-window",
     "title": {
      "en": "Application",
      "tr": "Uygulama"
     },
     "items": [
      {
       "id": "w",
       "icon": "pencil",
       "title": {
        "en": "Writes",
        "tr": "Yazmalar"
       },
       "sub": "INSERT / UPDATE",
       "tag": {
        "en": "→ primary only",
        "tr": "→ sadece primary"
       }
      },
      {
       "id": "r",
       "icon": "eye",
       "title": {
        "en": "Reads",
        "tr": "Okumalar"
       },
       "sub": {
        "en": "may go to replicas",
        "tr": "replikalara gidebilir"
       },
       "tag": {
        "en": "stale by lag",
        "tr": "lag kadar eski"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "green",
     "icon": "database",
     "title": {
      "en": "Primary",
      "tr": "Primary"
     },
     "items": [
      {
       "id": "wal",
       "icon": "scroll-text",
       "title": "WAL / binlog",
       "sub": {
        "en": "every change, in order",
        "tr": "her değişiklik, sırayla"
       },
       "tag": ""
      },
      {
       "id": "commit",
       "icon": "check",
       "title": {
        "en": "Commit",
        "tr": "Commit"
       },
       "sub": {
        "en": "fsync (+ wait for sync replica?)",
        "tr": "fsync (+ senkron replikayı bekle?)"
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
     "color": "purple",
     "icon": "copy",
     "title": {
      "en": "Replicas",
      "tr": "Replikalar"
     },
     "items": [
      {
       "id": "rep1",
       "icon": "copy",
       "title": {
        "en": "Sync replica",
        "tr": "Senkron replika"
       },
       "sub": {
        "en": "no data loss on failover",
        "tr": "failover'da veri kaybı yok"
       },
       "tag": {
        "en": "slower commits",
        "tr": "daha yavaş commit"
       }
      },
      {
       "id": "rep2",
       "icon": "copy",
       "title": {
        "en": "Async replica",
        "tr": "Asenkron replika"
       },
       "sub": {
        "en": "lag: ms … minutes",
        "tr": "lag: ms … dakikalar"
       },
       "tag": {
        "en": "read scaling",
        "tr": "okuma ölçekleme"
       }
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "red",
     "icon": "shuffle",
     "title": "Failover",
     "items": [
      {
       "id": "fo",
       "icon": "arrow-up",
       "title": {
        "en": "Promote replica",
        "tr": "Replikayı terfi ettir"
       },
       "sub": "Patroni · RDS · Orchestrator",
       "tag": {
        "en": "clients reconnect",
        "tr": "istemciler yeniden bağlanır"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "w",
   "wal",
   "r",
   "l",
   1,
   ""
  ],
  [
   "wal",
   "commit",
   "r",
   "l",
   2,
   ""
  ],
  [
   "wal",
   "rep1",
   "b",
   "t",
   3,
   {
    "en": "stream",
    "tr": "akış"
   },
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "rep1",
   "rep2",
   "r",
   "l",
   "",
   ""
  ],
  [
   "rep2",
   "fo",
   "r",
   "l",
   4,
   {
    "en": "primary dies",
    "tr": "primary ölür"
   },
   {
    "dash": true
   }
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "App",
    "tr": "Uygulama"
   }
  ],
  [
   "green",
   "Primary"
  ],
  [
   "purple",
   {
    "en": "Replicas",
    "tr": "Replikalar"
   }
  ],
  [
   "red",
   "Failover"
  ]
 ],
 "footer": {
  "en": "🧮 Replication protects against machine loss — not against DROP TABLE. You still need backups + PITR",
  "tr": "🧮 Replikasyon makine kaybına karşı korur; DROP TABLE'a karşı değil. Yine yedek + PITR gerekir"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
