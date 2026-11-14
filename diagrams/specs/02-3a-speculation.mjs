// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "Branch prediction and speculative execution",
  "tr": "Dal tahmini ve spekülatif çalıştırma"
 },
 "subtitle": {
  "en": "The CPU guesses which way an if goes and runs ahead · right guess = free speed · wrong guess = flush",
  "tr": "CPU bir if'in hangi yöne gideceğini tahmin eder ve ileri koşar · doğru tahmin = bedava hız · yanlış tahmin = boşalt"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "git-branch",
     "title": {
      "en": "Predict",
      "tr": "Tahmin et"
     },
     "items": [
      {
       "id": "br",
       "icon": "git-branch",
       "title": "if (x < n)",
       "sub": {
        "en": "outcome unknown yet",
        "tr": "sonuç henüz belli değil"
       },
       "tag": ""
      },
      {
       "id": "bp",
       "icon": "brain",
       "title": {
        "en": "Branch predictor",
        "tr": "Dal tahmincisi"
       },
       "sub": {
        "en": "learns from history",
        "tr": "geçmişten öğrenir"
       },
       "tag": {
        "en": ">95% right",
        "tr": "%95+ doğru"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "amber",
     "icon": "fast-forward",
     "title": {
      "en": "Speculate",
      "tr": "Spekülasyon"
     },
     "items": [
      {
       "id": "run",
       "icon": "play",
       "title": {
        "en": "Run predicted path",
        "tr": "Tahmin edilen yolu çalıştır"
       },
       "sub": {
        "en": "results not committed",
        "tr": "sonuçlar işlenmez"
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
     "icon": "check",
     "title": {
      "en": "Right",
      "tr": "Doğru"
     },
     "items": [
      {
       "id": "ok",
       "icon": "check",
       "title": {
        "en": "Commit",
        "tr": "İşle"
       },
       "sub": {
        "en": "no time lost",
        "tr": "zaman kaybı yok"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "red",
     "icon": "x",
     "title": {
      "en": "Wrong",
      "tr": "Yanlış"
     },
     "items": [
      {
       "id": "fl",
       "icon": "trash-2",
       "title": {
        "en": "Flush pipeline",
        "tr": "Boru hattını boşalt"
       },
       "sub": {
        "en": "~15–20 cycles lost",
        "tr": "~15–20 döngü kayıp"
       },
       "tag": ""
      },
      {
       "id": "sp",
       "icon": "eye-off",
       "title": "Spectre",
       "sub": {
        "en": "cache traces of the wrong path remain",
        "tr": "yanlış yolun önbellek izleri kalır"
       },
       "tag": {
        "en": "→ mitigations",
        "tr": "→ önlemler"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "br",
   "bp",
   "r",
   "l",
   1,
   ""
  ],
  [
   "bp",
   "run",
   "r",
   "l",
   2,
   ""
  ],
  [
   "run",
   "ok",
   "b",
   "t",
   3,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "run",
   "fl",
   "b",
   "t",
   4,
   "",
   {
    "via": [
     "g2",
     "g4"
    ]
   }
  ],
  [
   "fl",
   "sp",
   "r",
   "l",
   5,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Predict",
    "tr": "Tahmin"
   }
  ],
  [
   "amber",
   {
    "en": "Speculate",
    "tr": "Spekülasyon"
   }
  ],
  [
   "green",
   {
    "en": "Right",
    "tr": "Doğru"
   }
  ],
  [
   "red",
   {
    "en": "Wrong",
    "tr": "Yanlış"
   }
  ]
 ],
 "footer": {
  "en": "🎲 Sorting data before a branchy loop can make it several times faster: predictable branches",
  "tr": "🎲 Dallı bir döngüden önce veriyi sıralamak onu birkaç kat hızlandırabilir: tahmin edilebilir dallar"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
