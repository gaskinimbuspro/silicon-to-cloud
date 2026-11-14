// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "The critical rendering path: what blocks the first paint",
  "tr": "Kritik render yolu: ilk boyamayı ne engeller"
 },
 "subtitle": {
  "en": "CSS blocks rendering · sync scripts block parsing · fonts and images can delay LCP",
  "tr": "CSS render'ı bloklar · senkron script'ler ayrıştırmayı bloklar · fontlar ve görseller LCP'yi geciktirebilir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "file-text",
     "title": "HTML",
     "items": [
      {
       "id": "h",
       "icon": "file-text",
       "title": {
        "en": "Parse HTML",
        "tr": "HTML'i ayrıştır"
       },
       "sub": {
        "en": "streams as bytes arrive",
        "tr": "byte geldikçe akar"
       },
       "tag": ""
      },
      {
       "id": "pre",
       "icon": "eye",
       "title": {
        "en": "Preload scanner",
        "tr": "Preload tarayıcı"
       },
       "sub": {
        "en": "finds CSS/JS/img early",
        "tr": "CSS/JS/img'yi erken bulur"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "red",
     "icon": "octagon-x",
     "title": {
      "en": "Blockers",
      "tr": "Engelleyiciler"
     },
     "items": [
      {
       "id": "css",
       "icon": "paintbrush",
       "title": "<link rel=stylesheet>",
       "sub": {
        "en": "render-blocking",
        "tr": "render engelleyici"
       },
       "tag": {
        "en": "inline critical CSS",
        "tr": "kritik CSS'i inline yap"
       }
      },
      {
       "id": "js",
       "icon": "code",
       "title": "<script src>",
       "sub": {
        "en": "parser-blocking",
        "tr": "ayrıştırma engelleyici"
       },
       "tag": {
        "en": "use defer / async",
        "tr": "defer / async kullan"
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
     "color": "purple",
     "icon": "layers",
     "title": {
      "en": "Build",
      "tr": "Kur"
     },
     "items": [
      {
       "id": "dom",
       "icon": "network",
       "title": "DOM + CSSOM",
       "sub": {
        "en": "both needed",
        "tr": "ikisi de gerekli"
       },
       "tag": ""
      },
      {
       "id": "lay",
       "icon": "ruler",
       "title": {
        "en": "Style + layout",
        "tr": "Stil + layout"
       },
       "sub": "",
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "image",
     "title": {
      "en": "Paint",
      "tr": "Boya"
     },
     "items": [
      {
       "id": "fcp",
       "icon": "image",
       "title": "FCP",
       "sub": {
        "en": "first content",
        "tr": "ilk içerik"
       },
       "tag": ""
      },
      {
       "id": "lcp",
       "icon": "maximize",
       "title": "LCP",
       "sub": {
        "en": "largest element (hero image, headline)",
        "tr": "en büyük eleman (ana görsel, başlık)"
       },
       "tag": {
        "en": "< 2.5 s",
        "tr": "< 2,5 sn"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "h",
   "pre",
   "r",
   "l",
   1,
   ""
  ],
  [
   "pre",
   "css",
   "r",
   "l",
   2,
   ""
  ],
  [
   "css",
   "js",
   "r",
   "l",
   3,
   ""
  ],
  [
   "js",
   "dom",
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
   "dom",
   "lay",
   "r",
   "l",
   5,
   ""
  ],
  [
   "lay",
   "fcp",
   "r",
   "l",
   6,
   ""
  ],
  [
   "fcp",
   "lcp",
   "r",
   "l",
   7,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   "HTML"
  ],
  [
   "red",
   {
    "en": "Blocking",
    "tr": "Engelleyici"
   }
  ],
  [
   "purple",
   {
    "en": "Build",
    "tr": "Kur"
   }
  ],
  [
   "green",
   {
    "en": "Paint",
    "tr": "Boya"
   }
  ]
 ],
 "footer": {
  "en": "⚡ Fewer render-blocking bytes before the first paint = faster everything",
  "tr": "⚡ İlk boyamadan önce daha az engelleyici byte = her şey daha hızlı"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
