// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "Cache coherence and false sharing",
  "tr": "Önbellek tutarlılığı ve false sharing"
 },
 "subtitle": {
  "en": "Cores keep copies of 64-byte lines in sync (MESI) · two counters in one line ping-pong between cores",
  "tr": "Çekirdekler 64 byte'lık satırların kopyalarını senkron tutar (MESI) · aynı satırdaki iki sayaç çekirdekler arasında gidip gelir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "cpu",
     "title": {
      "en": "Core 0",
      "tr": "Çekirdek 0"
     },
     "items": [
      {
       "id": "w0",
       "icon": "pencil",
       "title": {
        "en": "Writes counter A",
        "tr": "A sayacına yazar"
       },
       "sub": {
        "en": "line → Modified",
        "tr": "satır → Modified"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "red",
     "icon": "triangle-alert",
     "title": {
      "en": "Same 64-byte line",
      "tr": "Aynı 64 byte'lık satır"
     },
     "items": [
      {
       "id": "line",
       "icon": "rows-3",
       "title": "[ A | B | … ]",
       "sub": {
        "en": "one cache line",
        "tr": "tek önbellek satırı"
       },
       "tag": {
        "en": "invalidated every write",
        "tr": "her yazmada geçersiz"
       }
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "purple",
     "icon": "cpu",
     "title": {
      "en": "Core 1",
      "tr": "Çekirdek 1"
     },
     "items": [
      {
       "id": "w1",
       "icon": "pencil",
       "title": {
        "en": "Writes counter B",
        "tr": "B sayacına yazar"
       },
       "sub": {
        "en": "must fetch line again",
        "tr": "satırı tekrar çekmeli"
       },
       "tag": {
        "en": "~50–100 ns each time",
        "tr": "her seferinde ~50–100 ns"
       }
      }
     ]
    }
   ]
  },
  {
   "groups": [
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "check",
     "title": {
      "en": "Fix",
      "tr": "Çözüm"
     },
     "items": [
      {
       "id": "pad",
       "icon": "ruler",
       "title": {
        "en": "Pad / align to 64 B",
        "tr": "64 B'a hizala / doldur"
       },
       "sub": "alignas(64) · @Contended",
       "tag": ""
      },
      {
       "id": "local",
       "icon": "box",
       "title": {
        "en": "Per-core counters",
        "tr": "Çekirdek başı sayaçlar"
       },
       "sub": {
        "en": "sum at the end",
        "tr": "sonda topla"
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
   "w0",
   "line",
   "r",
   "l",
   1,
   ""
  ],
  [
   "w1",
   "line",
   "l",
   "r",
   2,
   ""
  ],
  [
   "line",
   "pad",
   "b",
   "t",
   3,
   "",
   {
    "via": [
     "g2",
     "g4"
    ]
   }
  ],
  [
   "pad",
   "local",
   "r",
   "l",
   4,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   "Core 0"
  ],
  [
   "purple",
   "Core 1"
  ],
  [
   "red",
   {
    "en": "Problem",
    "tr": "Sorun"
   }
  ],
  [
   "green",
   {
    "en": "Fix",
    "tr": "Çözüm"
   }
  ]
 ],
 "footer": {
  "en": "🔥 Symptom: adding threads makes it slower, perf shows high cache-misses on a hot struct",
  "tr": "🔥 Belirti: thread eklemek yavaşlatıyor, perf sıcak bir struct'ta yüksek cache-miss gösteriyor"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
