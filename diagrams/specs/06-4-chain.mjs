// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "How the browser trusts a certificate",
  "tr": "Tarayıcı bir sertifikaya nasıl güvenir"
 },
 "subtitle": {
  "en": "Each certificate is signed by the one above it, up to a root already in the trust store",
  "tr": "Her sertifika bir üstündeki tarafından imzalanır; en üstte trust store'da zaten bulunan bir kök vardır"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "server",
     "title": {
      "en": "Sent by the server",
      "tr": "Sunucunun gönderdiği"
     },
     "items": [
      {
       "id": "leaf",
       "icon": "file-badge",
       "title": {
        "en": "Leaf certificate",
        "tr": "Yaprak sertifika"
       },
       "sub": "CN/SAN = shop.example.com",
       "tag": {
        "en": "≤ 200 days (2026)",
        "tr": "≤ 200 gün (2026)"
       }
      },
      {
       "id": "int",
       "icon": "file-key",
       "title": {
        "en": "Intermediate",
        "tr": "Ara sertifika"
       },
       "sub": "Let's Encrypt R11",
       "tag": {
        "en": "signs leaves",
        "tr": "yaprakları imzalar"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "green",
     "icon": "shield-check",
     "title": {
      "en": "In your OS / browser",
      "tr": "İşletim sisteminde / tarayıcıda"
     },
     "items": [
      {
       "id": "root",
       "icon": "shield-check",
       "title": {
        "en": "Root CA",
        "tr": "Kök CA"
       },
       "sub": "ISRG Root X1",
       "tag": {
        "en": "self-signed · trust store",
        "tr": "kendinden imzalı · trust store"
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
     "icon": "list-checks",
     "title": {
      "en": "Browser checks",
      "tr": "Tarayıcı kontrolleri"
     },
     "items": [
      {
       "id": "sig",
       "icon": "pen-line",
       "title": {
        "en": "Signatures",
        "tr": "İmzalar"
       },
       "sub": {
        "en": "each link verifies",
        "tr": "her halka doğrulanır"
       },
       "tag": ""
      },
      {
       "id": "name",
       "icon": "at-sign",
       "title": {
        "en": "Hostname",
        "tr": "Host adı"
       },
       "sub": {
        "en": "in SAN list?",
        "tr": "SAN listesinde mi?"
       },
       "tag": ""
      },
      {
       "id": "date",
       "icon": "calendar",
       "title": {
        "en": "Validity",
        "tr": "Geçerlilik"
       },
       "sub": "notBefore / notAfter",
       "tag": ""
      },
      {
       "id": "ok",
       "icon": "lock",
       "title": {
        "en": "Padlock",
        "tr": "Kilit"
       },
       "sub": {
        "en": "session keys trusted",
        "tr": "oturum anahtarları güvenilir"
       },
       "tag": "✓"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "leaf",
   "int",
   "r",
   "l",
   1,
   {
    "en": "signed by",
    "tr": "imzalayan"
   }
  ],
  [
   "int",
   "root",
   "r",
   "l",
   2,
   {
    "en": "signed by",
    "tr": "imzalayan"
   }
  ],
  [
   "root",
   "sig",
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
   "sig",
   "name",
   "r",
   "l",
   4,
   ""
  ],
  [
   "name",
   "date",
   "r",
   "l",
   5,
   ""
  ],
  [
   "date",
   "ok",
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
    "en": "Chain",
    "tr": "Zincir"
   }
  ],
  [
   "green",
   {
    "en": "Trust anchor",
    "tr": "Güven çapası"
   }
  ],
  [
   "purple",
   {
    "en": "Checks",
    "tr": "Kontroller"
   }
  ]
 ],
 "footer": {
  "en": "⚠️ Forgetting the intermediate works in Chrome (cached) but fails in curl, Java and phones",
  "tr": "⚠️ Ara sertifikayı unutmak Chrome'da çalışır (önbellek) ama curl, Java ve telefonlarda patlar"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
