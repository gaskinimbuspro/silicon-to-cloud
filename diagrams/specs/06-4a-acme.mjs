// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "How cert-manager gets a certificate (ACME)",
  "tr": "cert-manager nasıl sertifika alır (ACME)"
 },
 "subtitle": {
  "en": "ACME = Automatic Certificate Management Environment · prove you control the domain, get a cert, renew automatically",
  "tr": "ACME = Automatic Certificate Management Environment · alan adını kontrol ettiğini kanıtla, sertifikayı al, otomatik yenile"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "boxes",
     "title": "Kubernetes",
     "items": [
      {
       "id": "ing",
       "icon": "file-code",
       "title": {
        "en": "Ingress / Certificate",
        "tr": "Ingress / Certificate"
       },
       "sub": "tls: shop.example.com",
       "tag": ""
      },
      {
       "id": "cm",
       "icon": "bot",
       "title": "cert-manager",
       "sub": {
        "en": "creates key + order",
        "tr": "anahtar + sipariş oluşturur"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "landmark",
     "title": {
      "en": "ACME CA",
      "tr": "ACME CA"
     },
     "items": [
      {
       "id": "ca",
       "icon": "landmark",
       "title": "Let's Encrypt",
       "sub": {
        "en": "issues a challenge",
        "tr": "bir challenge verir"
       },
       "tag": "HTTP-01 / DNS-01"
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
     "icon": "badge-check",
     "title": {
      "en": "Prove control",
      "tr": "Kontrolü kanıtla"
     },
     "items": [
      {
       "id": "ch",
       "icon": "key-round",
       "title": {
        "en": "Solve challenge",
        "tr": "Challenge'ı çöz"
       },
       "sub": "/.well-known/acme-challenge/…",
       "tag": {
        "en": "or TXT _acme-challenge",
        "tr": "ya da TXT _acme-challenge"
       }
      },
      {
       "id": "val",
       "icon": "check",
       "title": {
        "en": "CA validates",
        "tr": "CA doğrular"
       },
       "sub": {
        "en": "fetches it from the internet",
        "tr": "internetten çeker"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "lock",
     "title": {
      "en": "Use it",
      "tr": "Kullan"
     },
     "items": [
      {
       "id": "sec",
       "icon": "key",
       "title": "Secret (tls.crt/tls.key)",
       "sub": {
        "en": "ingress serves it",
        "tr": "ingress sunar"
       },
       "tag": ""
      },
      {
       "id": "ren",
       "icon": "refresh-cw",
       "title": {
        "en": "Auto-renew",
        "tr": "Otomatik yenile"
       },
       "sub": {
        "en": "at 2/3 of lifetime",
        "tr": "ömrün 2/3'ünde"
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
   "ing",
   "cm",
   "r",
   "l",
   1,
   ""
  ],
  [
   "cm",
   "ca",
   "r",
   "l",
   2,
   ""
  ],
  [
   "ca",
   "ch",
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
   "ch",
   "val",
   "r",
   "l",
   4,
   ""
  ],
  [
   "val",
   "sec",
   "r",
   "l",
   5,
   ""
  ],
  [
   "sec",
   "ren",
   "r",
   "l",
   6,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   "Kubernetes"
  ],
  [
   "purple",
   "CA"
  ],
  [
   "amber",
   {
    "en": "Challenge",
    "tr": "Challenge"
   }
  ],
  [
   "green",
   {
    "en": "Result",
    "tr": "Sonuç"
   }
  ]
 ],
 "footer": {
  "en": "🗓️ 200 → 100 → 47-day certificates (2026 → 2027 → 2029): manual renewal is over",
  "tr": "🗓️ 200 → 100 → 47 günlük sertifikalar (2026 → 2027 → 2029): elle yenileme dönemi bitti"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
