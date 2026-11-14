// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How a generational garbage collector works",
  "tr": "Nesilsel çöp toplayıcı nasıl çalışır"
 },
 "subtitle": {
  "en": "Most objects die young · collect the young space often and cheaply, the old space rarely",
  "tr": "Çoğu nesne genç ölür · genç alanı sık ve ucuz, yaşlı alanı nadiren topla"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "green",
     "icon": "sprout",
     "title": {
      "en": "Young generation",
      "tr": "Genç nesil"
     },
     "items": [
      {
       "id": "alloc",
       "icon": "plus",
       "title": {
        "en": "Allocate",
        "tr": "Ayır"
       },
       "sub": {
        "en": "bump pointer, very fast",
        "tr": "pointer kaydır, çok hızlı"
       },
       "tag": ""
      },
      {
       "id": "minor",
       "icon": "recycle",
       "title": {
        "en": "Minor GC",
        "tr": "Minor GC"
       },
       "sub": {
        "en": "copy survivors, drop the rest",
        "tr": "hayatta kalanları kopyala, gerisini at"
       },
       "tag": {
        "en": "short pause",
        "tr": "kısa duraklama"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "amber",
     "icon": "archive",
     "title": {
      "en": "Old generation",
      "tr": "Yaşlı nesil"
     },
     "items": [
      {
       "id": "promote",
       "icon": "arrow-up",
       "title": {
        "en": "Promote",
        "tr": "Terfi"
       },
       "sub": {
        "en": "survived N collections",
        "tr": "N toplamayı atlattı"
       },
       "tag": ""
      },
      {
       "id": "major",
       "icon": "recycle",
       "title": {
        "en": "Major / concurrent GC",
        "tr": "Major / eşzamanlı GC"
       },
       "sub": {
        "en": "mark live objects from roots",
        "tr": "köklerden canlı nesneleri işaretle"
       },
       "tag": {
        "en": "rare, can be long",
        "tr": "nadir, uzun olabilir"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "alloc",
   "minor",
   "r",
   "l",
   1,
   ""
  ],
  [
   "minor",
   "promote",
   "r",
   "l",
   2,
   ""
  ],
  [
   "promote",
   "major",
   "r",
   "l",
   3,
   ""
  ]
 ],
 "legend": [
  [
   "green",
   {
    "en": "Young",
    "tr": "Genç"
   }
  ],
  [
   "amber",
   {
    "en": "Old",
    "tr": "Yaşlı"
   }
  ]
 ],
 "footer": {
  "en": "⏱️ Heap too small → GC runs constantly · too big for the container limit → OOMKilled",
  "tr": "⏱️ Heap çok küçük → GC sürekli çalışır · container limitine göre çok büyük → OOMKilled"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
