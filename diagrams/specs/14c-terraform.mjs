// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Infrastructure as Code: the Terraform workflow",
  "tr": "Kod olarak altyapı: Terraform iş akışı"
 },
 "subtitle": {
  "en": "Desired state in code → plan the diff against real state → review → apply · the state file maps code to real resource IDs",
  "tr": "Kodda istenen durum → gerçek duruma karşı farkı planla → incele → uygula · state dosyası kodu gerçek kaynak ID'lerine eşler"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "file-code",
     "title": {
      "en": "Write",
      "tr": "Yaz"
     },
     "items": [
      {
       "id": "tf",
       "icon": "file-code",
       "title": "*.tf",
       "sub": {
        "en": "resources, variables, outputs",
        "tr": "kaynaklar, değişkenler, çıktılar"
       },
       "tag": "HCL"
      },
      {
       "id": "mod",
       "icon": "package",
       "title": {
        "en": "Modules",
        "tr": "Modüller"
       },
       "sub": {
        "en": "reusable building blocks",
        "tr": "yeniden kullanılabilir bloklar"
       },
       "tag": {
        "en": "pinned versions",
        "tr": "sabit sürümler"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "git-pull-request",
     "title": {
      "en": "Plan & review",
      "tr": "Planla ve incele"
     },
     "items": [
      {
       "id": "init",
       "icon": "download",
       "title": "terraform init",
       "sub": {
        "en": "providers + backend",
        "tr": "provider'lar + backend"
       },
       "tag": ""
      },
      {
       "id": "plan",
       "icon": "list-checks",
       "title": "terraform plan",
       "sub": {
        "en": "+ create  ~ update  − destroy",
        "tr": "+ oluştur  ~ güncelle  − yok et"
       },
       "tag": {
        "en": "posted on the PR",
        "tr": "PR'a yazılır"
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
     "icon": "play",
     "title": {
      "en": "Apply",
      "tr": "Uygula"
     },
     "items": [
      {
       "id": "apply",
       "icon": "play",
       "title": "terraform apply",
       "sub": {
        "en": "calls cloud APIs in dependency order",
        "tr": "bulut API'lerini bağımlılık sırasıyla çağırır"
       },
       "tag": ""
      },
      {
       "id": "cloud",
       "icon": "cloud",
       "title": {
        "en": "Real resources",
        "tr": "Gerçek kaynaklar"
       },
       "sub": "VPC · RDS · IAM",
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "amber",
     "icon": "database",
     "title": {
      "en": "State",
      "tr": "State"
     },
     "items": [
      {
       "id": "state",
       "icon": "database",
       "title": {
        "en": "Remote state + lock",
        "tr": "Uzak state + kilit"
       },
       "sub": {
        "en": "S3 / GCS / TF Cloud",
        "tr": "S3 / GCS / TF Cloud"
       },
       "tag": {
        "en": "encrypted, never in git",
        "tr": "şifreli, asla git'te değil"
       }
      },
      {
       "id": "drift",
       "icon": "git-compare",
       "title": {
        "en": "Drift detection",
        "tr": "Kayma tespiti"
       },
       "sub": {
        "en": "scheduled plan finds console changes",
        "tr": "zamanlanmış plan konsol değişikliklerini bulur"
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
   "tf",
   "mod",
   "r",
   "l",
   1,
   ""
  ],
  [
   "mod",
   "init",
   "r",
   "l",
   2,
   ""
  ],
  [
   "init",
   "plan",
   "r",
   "l",
   3,
   ""
  ],
  [
   "plan",
   "apply",
   "b",
   "t",
   4,
   {
    "en": "approve",
    "tr": "onay"
   },
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "apply",
   "cloud",
   "r",
   "l",
   5,
   ""
  ],
  [
   "cloud",
   "state",
   "r",
   "l",
   6,
   ""
  ],
  [
   "state",
   "drift",
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
    "en": "Code",
    "tr": "Kod"
   }
  ],
  [
   "purple",
   "Plan"
  ],
  [
   "green",
   "Apply"
  ],
  [
   "amber",
   "State"
  ]
 ],
 "footer": {
  "en": "📋 Read every plan: one \"-/+ destroy and then create replacement\" on a database is an outage",
  "tr": "📋 Her planı oku: bir veritabanında tek bir \"-/+ destroy and then create replacement\" bir kesintidir"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
