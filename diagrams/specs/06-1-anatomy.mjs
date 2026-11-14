// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "Anatomy of an HTTP message",
  "tr": "Bir HTTP mesajının anatomisi"
 },
 "subtitle": {
  "en": "Start line · headers (Name: value) · empty line · optional body",
  "tr": "Başlangıç satırı · header'lar (Ad: değer) · boş satır · isteğe bağlı gövde"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "arrow-up-right",
     "title": {
      "en": "Request",
      "tr": "İstek"
     },
     "items": [
      {
       "id": "sl",
       "icon": "flag",
       "title": {
        "en": "Request line",
        "tr": "İstek satırı"
       },
       "sub": "POST /api/cart HTTP/1.1",
       "tag": {
        "en": "method · path · version",
        "tr": "metot · yol · sürüm"
       }
      },
      {
       "id": "rh",
       "icon": "list",
       "title": {
        "en": "Headers",
        "tr": "Header'lar"
       },
       "sub": "Host · Content-Type · Authorization",
       "tag": "Name: value"
      },
      {
       "id": "e1",
       "icon": "minus",
       "title": {
        "en": "Empty line",
        "tr": "Boş satır"
       },
       "sub": "\\r\\n",
       "tag": {
        "en": "end of headers",
        "tr": "header'ların sonu"
       }
      },
      {
       "id": "b1",
       "icon": "braces",
       "title": {
        "en": "Body",
        "tr": "Gövde"
       },
       "sub": "{\"sku\": 42}",
       "tag": {
        "en": "Content-Length: 11",
        "tr": "Content-Length: 11"
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
     "color": "green",
     "icon": "arrow-down-left",
     "title": {
      "en": "Response",
      "tr": "Cevap"
     },
     "items": [
      {
       "id": "st",
       "icon": "flag",
       "title": {
        "en": "Status line",
        "tr": "Durum satırı"
       },
       "sub": "HTTP/1.1 201 Created",
       "tag": {
        "en": "version · code · reason",
        "tr": "sürüm · kod · açıklama"
       }
      },
      {
       "id": "sh",
       "icon": "list",
       "title": {
        "en": "Headers",
        "tr": "Header'lar"
       },
       "sub": "Content-Type · Location · Set-Cookie",
       "tag": "Name: value"
      },
      {
       "id": "e2",
       "icon": "minus",
       "title": {
        "en": "Empty line",
        "tr": "Boş satır"
       },
       "sub": "\\r\\n",
       "tag": {
        "en": "end of headers",
        "tr": "header'ların sonu"
       }
      },
      {
       "id": "b2",
       "icon": "braces",
       "title": {
        "en": "Body",
        "tr": "Gövde"
       },
       "sub": "{\"id\": 7}",
       "tag": {
        "en": "optional",
        "tr": "isteğe bağlı"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "sl",
   "rh",
   "r",
   "l",
   1,
   ""
  ],
  [
   "rh",
   "e1",
   "r",
   "l",
   2,
   ""
  ],
  [
   "e1",
   "b1",
   "r",
   "l",
   3,
   ""
  ],
  [
   "b1",
   "st",
   "b",
   "t",
   4,
   {
    "en": "server processes",
    "tr": "sunucu işler"
   },
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "st",
   "sh",
   "r",
   "l",
   5,
   ""
  ],
  [
   "sh",
   "e2",
   "r",
   "l",
   6,
   ""
  ],
  [
   "e2",
   "b2",
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
    "en": "Request",
    "tr": "İstek"
   }
  ],
  [
   "green",
   {
    "en": "Response",
    "tr": "Cevap"
   }
  ]
 ],
 "footer": {
  "en": "📦 HTTP/2 and HTTP/3 send the same fields as binary frames, compressed (HPACK / QPACK)",
  "tr": "📦 HTTP/2 ve HTTP/3 aynı alanları sıkıştırılmış ikili çerçeveler olarak yollar (HPACK / QPACK)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
