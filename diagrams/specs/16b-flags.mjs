// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Separating deploy from release: feature flags and expand/contract",
  "tr": "Deploy'u release'ten ayırmak: feature flag'ler ve genişlet/daralt"
 },
 "subtitle": {
  "en": "Code reaches production switched off · you turn it on gradually for real users and turn it off in seconds if needed",
  "tr": "Kod production'a kapalı olarak ulaşır · gerçek kullanıcılar için yavaş yavaş açarsın, gerekirse saniyeler içinde kapatırsın"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "toggle-right",
     "title": {
      "en": "Feature flag rollout",
      "tr": "Feature flag yayılımı"
     },
     "items": [
      {
       "id": "dark",
       "icon": "moon",
       "title": {
        "en": "Deploy dark",
        "tr": "Karanlık deploy"
       },
       "sub": {
        "en": "flag off for everyone",
        "tr": "herkes için flag kapalı"
       },
       "tag": ""
      },
      {
       "id": "int",
       "icon": "users",
       "title": {
        "en": "Internal users",
        "tr": "İç kullanıcılar"
       },
       "sub": {
        "en": "staff, beta testers",
        "tr": "çalışanlar, beta testçiler"
       },
       "tag": ""
      },
      {
       "id": "pct",
       "icon": "percent",
       "title": {
        "en": "1% → 10% → 50%",
        "tr": "%1 → %10 → %50"
       },
       "sub": {
        "en": "watch SLOs & business metrics",
        "tr": "SLO ve iş metriklerini izle"
       },
       "tag": {
        "en": "kill switch ready",
        "tr": "kapatma anahtarı hazır"
       }
      },
      {
       "id": "all",
       "icon": "check-circle",
       "title": {
        "en": "100% → remove flag",
        "tr": "%100 → flag'i kaldır"
       },
       "sub": {
        "en": "flags are debt",
        "tr": "flag'ler borçtur"
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
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "database",
     "title": {
      "en": "Database changes: expand / contract",
      "tr": "Veritabanı değişiklikleri: genişlet / daralt"
     },
     "items": [
      {
       "id": "exp",
       "icon": "plus-square",
       "title": {
        "en": "Expand",
        "tr": "Genişlet"
       },
       "sub": {
        "en": "add new column, nullable",
        "tr": "yeni kolon ekle, nullable"
       },
       "tag": {
        "en": "old code still works",
        "tr": "eski kod hâlâ çalışır"
       }
      },
      {
       "id": "dual",
       "icon": "copy",
       "title": {
        "en": "Dual write + backfill",
        "tr": "Çift yazma + geriye doldurma"
       },
       "sub": {
        "en": "new code writes both",
        "tr": "yeni kod ikisine yazar"
       },
       "tag": ""
      },
      {
       "id": "swi",
       "icon": "repeat",
       "title": {
        "en": "Switch reads",
        "tr": "Okumaları değiştir"
       },
       "sub": {
        "en": "behind a flag",
        "tr": "bir flag arkasında"
       },
       "tag": ""
      },
      {
       "id": "con",
       "icon": "minus-square",
       "title": {
        "en": "Contract",
        "tr": "Daralt"
       },
       "sub": {
        "en": "drop old column later",
        "tr": "eski kolonu sonra sil"
       },
       "tag": {
        "en": "separate release",
        "tr": "ayrı sürüm"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "dark",
   "int",
   "r",
   "l",
   1,
   ""
  ],
  [
   "int",
   "pct",
   "r",
   "l",
   2,
   ""
  ],
  [
   "pct",
   "all",
   "r",
   "l",
   3,
   ""
  ],
  [
   "dark",
   "exp",
   "b",
   "t",
   4,
   "",
   {
    "via": [
     "g1",
     "g2"
    ],
    "dash": true
   }
  ],
  [
   "exp",
   "dual",
   "r",
   "l",
   5,
   ""
  ],
  [
   "dual",
   "swi",
   "r",
   "l",
   6,
   ""
  ],
  [
   "swi",
   "con",
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
    "en": "Flags",
    "tr": "Flag'ler"
   }
  ],
  [
   "purple",
   {
    "en": "Schema",
    "tr": "Şema"
   }
  ]
 ],
 "footer": {
  "en": "🎚️ Every step is reversible: that's what makes deploying on a Friday boring",
  "tr": "🎚️ Her adım geri alınabilir: cuma günü deploy etmeyi sıkıcı yapan budur"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
