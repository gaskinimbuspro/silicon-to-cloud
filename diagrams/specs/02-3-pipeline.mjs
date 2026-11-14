// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "How a CPU pipeline overlaps instructions",
  "tr": "CPU boru hattı komutları nasıl üst üste bindirir"
 },
 "subtitle": {
  "en": "Each stage works on a different instruction every cycle · modern cores are out-of-order and ~6–8 wide",
  "tr": "Her aşama her döngüde farklı bir komut üzerinde çalışır · modern çekirdekler sıra dışı ve ~6–8 geniş"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "arrow-down-to-line",
     "title": {
      "en": "Front end (in order)",
      "tr": "Ön uç (sıralı)"
     },
     "items": [
      {
       "id": "f",
       "icon": "download",
       "title": {
        "en": "Fetch",
        "tr": "Getir"
       },
       "sub": {
        "en": "from L1i, predicted path",
        "tr": "L1i'den, tahmin edilen yol"
       },
       "tag": ""
      },
      {
       "id": "d",
       "icon": "scan-line",
       "title": {
        "en": "Decode",
        "tr": "Çöz"
       },
       "sub": {
        "en": "→ µops",
        "tr": "→ µop'lar"
       },
       "tag": {
        "en": "µop cache",
        "tr": "µop önbelleği"
       }
      },
      {
       "id": "rn",
       "icon": "tags",
       "title": {
        "en": "Rename",
        "tr": "Yeniden adlandır"
       },
       "sub": {
        "en": "remove false dependencies",
        "tr": "sahte bağımlılıkları kaldır"
       },
       "tag": "ROB"
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
     "icon": "shuffle",
     "title": {
      "en": "Back end (out of order)",
      "tr": "Arka uç (sıra dışı)"
     },
     "items": [
      {
       "id": "s",
       "icon": "list-ordered",
       "title": {
        "en": "Schedule",
        "tr": "Zamanla"
       },
       "sub": {
        "en": "run when inputs ready",
        "tr": "girdiler hazır olunca çalıştır"
       },
       "tag": ""
      },
      {
       "id": "x",
       "icon": "cpu",
       "title": {
        "en": "Execute",
        "tr": "Çalıştır"
       },
       "sub": {
        "en": "ALUs · load/store · vector",
        "tr": "ALU · load/store · vektör"
       },
       "tag": {
        "en": "many in parallel",
        "tr": "çoğu paralel"
       }
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "green",
     "icon": "check-check",
     "title": {
      "en": "Retire (in order)",
      "tr": "Emekliye ayır (sıralı)"
     },
     "items": [
      {
       "id": "r",
       "icon": "check-check",
       "title": {
        "en": "Commit results",
        "tr": "Sonuçları işle"
       },
       "sub": {
        "en": "in program order",
        "tr": "program sırasıyla"
       },
       "tag": {
        "en": "or flush if mispredicted",
        "tr": "yanlış tahminse boşalt"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "f",
   "d",
   "r",
   "l",
   1,
   ""
  ],
  [
   "d",
   "rn",
   "r",
   "l",
   2,
   ""
  ],
  [
   "rn",
   "s",
   "b",
   "t",
   4,
   "",
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "s",
   "x",
   "r",
   "l",
   5,
   ""
  ],
  [
   "x",
   "r",
   "r",
   "l",
   6,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "In order",
    "tr": "Sıralı"
   }
  ],
  [
   "purple",
   {
    "en": "Out of order",
    "tr": "Sıra dışı"
   }
  ],
  [
   "green",
   {
    "en": "Retire",
    "tr": "Emeklilik"
   }
  ]
 ],
 "footer": {
  "en": "📈 IPC = instructions per cycle: 1 is mediocre, 3–4 is great; perf stat shows it",
  "tr": "📈 IPC = döngü başına komut: 1 vasat, 3–4 harika; perf stat gösterir"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
