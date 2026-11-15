// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Cloud storage and databases: pick by access pattern",
  "tr": "Bulut depolama ve veritabanları: erişim desenine göre seç"
 },
 "subtitle": {
  "en": "How is the data read and written? By one machine, by many, over HTTP, with SQL, by key?",
  "tr": "Veri nasıl okunup yazılıyor? Tek makine mi, çok makine mi, HTTP mi, SQL mi, anahtar mı?"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "hard-drive",
     "title": {
      "en": "Storage types",
      "tr": "Depolama tipleri"
     },
     "items": [
      {
       "id": "blk",
       "icon": "hard-drive",
       "title": {
        "en": "Block",
        "tr": "Blok"
       },
       "sub": "EBS · Persistent Disk",
       "tag": {
        "en": "one VM, a raw disk, lowest latency",
        "tr": "tek VM, ham disk, en düşük gecikme"
       }
      },
      {
       "id": "fil",
       "icon": "folder-tree",
       "title": {
        "en": "File",
        "tr": "Dosya"
       },
       "sub": "EFS · Filestore · Azure Files",
       "tag": {
        "en": "many VMs, POSIX (NFS/SMB)",
        "tr": "çok VM, POSIX (NFS/SMB)"
       }
      },
      {
       "id": "obj",
       "icon": "package",
       "title": {
        "en": "Object",
        "tr": "Nesne"
       },
       "sub": "S3 · GCS · Blob",
       "tag": {
        "en": "HTTP API, unlimited, 11 nines",
        "tr": "HTTP API, sınırsız, 11 dokuz"
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
     "color": "purple",
     "icon": "database",
     "title": {
      "en": "Managed databases",
      "tr": "Yönetilen veritabanları"
     },
     "items": [
      {
       "id": "rel",
       "icon": "table",
       "title": {
        "en": "Relational",
        "tr": "İlişkisel"
       },
       "sub": "RDS · Aurora · Cloud SQL",
       "tag": {
        "en": "SQL, transactions, joins",
        "tr": "SQL, transaction, join"
       }
      },
      {
       "id": "kv",
       "icon": "key-round",
       "title": {
        "en": "Key-value / document",
        "tr": "Anahtar-değer / doküman"
       },
       "sub": "DynamoDB · Firestore · Cosmos",
       "tag": {
        "en": "massive scale, simple access",
        "tr": "devasa ölçek, basit erişim"
       }
      },
      {
       "id": "cache",
       "icon": "zap",
       "title": {
        "en": "Cache",
        "tr": "Önbellek"
       },
       "sub": "ElastiCache · Memorystore",
       "tag": "Redis · Valkey"
      },
      {
       "id": "wh",
       "icon": "bar-chart-3",
       "title": {
        "en": "Analytics",
        "tr": "Analitik"
       },
       "sub": "BigQuery · Redshift · Snowflake",
       "tag": {
        "en": "columnar, scan TBs",
        "tr": "kolon bazlı, TB tarar"
       }
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "amber",
     "icon": "life-buoy",
     "title": {
      "en": "Protect it",
      "tr": "Koru"
     },
     "items": [
      {
       "id": "bk",
       "icon": "archive",
       "title": {
        "en": "Backups & snapshots",
        "tr": "Yedekler ve snapshot'lar"
       },
       "sub": {
        "en": "PITR, cross-region copies",
        "tr": "PITR, bölgeler arası kopya"
       },
       "tag": {
        "en": "test restores!",
        "tr": "geri yüklemeyi test et!"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "blk",
   "fil",
   "r",
   "l",
   1,
   ""
  ],
  [
   "fil",
   "obj",
   "r",
   "l",
   2,
   ""
  ],
  [
   "obj",
   "rel",
   "b",
   "t",
   3,
   "",
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "rel",
   "kv",
   "r",
   "l",
   4,
   ""
  ],
  [
   "kv",
   "cache",
   "r",
   "l",
   5,
   ""
  ],
  [
   "cache",
   "wh",
   "r",
   "l",
   6,
   ""
  ],
  [
   "wh",
   "bk",
   "r",
   "l",
   7,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Storage",
    "tr": "Depolama"
   }
  ],
  [
   "purple",
   {
    "en": "Databases",
    "tr": "Veritabanları"
   }
  ],
  [
   "amber",
   {
    "en": "Protection",
    "tr": "Koruma"
   }
  ]
 ],
 "footer": {
  "en": "🧊 Lifecycle rules move old objects to cheaper tiers automatically (Standard → Infrequent → Archive)",
  "tr": "🧊 Yaşam döngüsü kuralları eski nesneleri otomatik olarak ucuz katmanlara taşır (Standard → Seyrek → Arşiv)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
