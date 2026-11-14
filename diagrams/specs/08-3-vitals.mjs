// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Core Web Vitals on a page load timeline",
  "tr": "Sayfa yükleme zaman çizelgesinde Core Web Vitals"
 },
 "subtitle": {
  "en": "LCP = loading · INP = responsiveness · CLS = visual stability · measured at the 75th percentile of real users",
  "tr": "LCP = yükleme · INP = tepki · CLS = görsel kararlılık · gerçek kullanıcıların 75. yüzdeliğinde ölçülür"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "timer",
     "title": {
      "en": "Load",
      "tr": "Yükleme"
     },
     "items": [
      {
       "id": "ttfb",
       "icon": "server",
       "title": "TTFB",
       "sub": {
        "en": "server + network",
        "tr": "sunucu + ağ"
       },
       "tag": "< 0.8 s"
      },
      {
       "id": "fcp",
       "icon": "image",
       "title": "FCP",
       "sub": {
        "en": "first content",
        "tr": "ilk içerik"
       },
       "tag": "< 1.8 s"
      },
      {
       "id": "lcp",
       "icon": "maximize",
       "title": "LCP",
       "sub": {
        "en": "largest content",
        "tr": "en büyük içerik"
       },
       "tag": "< 2.5 s"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "mouse-pointer-click",
     "title": {
      "en": "Interact",
      "tr": "Etkileşim"
     },
     "items": [
      {
       "id": "inp",
       "icon": "mouse-pointer-click",
       "title": "INP",
       "sub": {
        "en": "input → next paint",
        "tr": "girdi → sonraki boyama"
       },
       "tag": "< 200 ms"
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
     "icon": "move",
     "title": {
      "en": "Stability",
      "tr": "Kararlılık"
     },
     "items": [
      {
       "id": "cls",
       "icon": "move",
       "title": "CLS",
       "sub": {
        "en": "unexpected layout shifts",
        "tr": "beklenmedik layout kaymaları"
       },
       "tag": "< 0.1"
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "wrench",
     "title": {
      "en": "Typical fixes",
      "tr": "Tipik çözümler"
     },
     "items": [
      {
       "id": "f1",
       "icon": "zap",
       "title": {
        "en": "LCP",
        "tr": "LCP"
       },
       "sub": {
        "en": "CDN, preload hero, smaller images",
        "tr": "CDN, ana görseli preload, küçük görseller"
       },
       "tag": ""
      },
      {
       "id": "f2",
       "icon": "scissors",
       "title": {
        "en": "INP",
        "tr": "INP"
       },
       "sub": {
        "en": "break long tasks, less JS",
        "tr": "uzun görevleri böl, daha az JS"
       },
       "tag": ""
      },
      {
       "id": "f3",
       "icon": "ruler",
       "title": {
        "en": "CLS",
        "tr": "CLS"
       },
       "sub": {
        "en": "width/height on media, reserve space",
        "tr": "medyada width/height, yer ayır"
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
   "ttfb",
   "fcp",
   "r",
   "l",
   1,
   ""
  ],
  [
   "fcp",
   "lcp",
   "r",
   "l",
   2,
   ""
  ],
  [
   "lcp",
   "inp",
   "r",
   "l",
   4,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Load",
    "tr": "Yükleme"
   }
  ],
  [
   "purple",
   {
    "en": "Interaction",
    "tr": "Etkileşim"
   }
  ],
  [
   "amber",
   {
    "en": "Stability",
    "tr": "Kararlılık"
   }
  ],
  [
   "green",
   {
    "en": "Fixes",
    "tr": "Çözümler"
   }
  ]
 ],
 "footer": {
  "en": "📊 Lab tools (Lighthouse) guide you; field data (CrUX, RUM) is what counts",
  "tr": "📊 Laboratuvar araçları (Lighthouse) yol gösterir; asıl önemli olan saha verisi (CrUX, RUM)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
