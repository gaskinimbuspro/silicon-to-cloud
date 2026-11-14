// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "How a switch learns and forwards",
  "tr": "Bir switch nasıl öğrenir ve iletir"
 },
 "subtitle": {
  "en": "Switches build a MAC table from source addresses and forward by destination MAC",
  "tr": "Switch'ler kaynak adreslerden bir MAC tablosu kurar ve hedef MAC'e göre iletir"
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
      "en": "Frame arrives on port 3",
      "tr": "Çerçeve 3. porttan gelir"
     },
     "items": [
      {
       "id": "fr",
       "icon": "package",
       "title": "Ethernet frame",
       "sub": "src aa:… dst bb:…",
       "tag": {
        "en": "+ EtherType, payload, FCS",
        "tr": "+ EtherType, yük, FCS"
       }
      },
      {
       "id": "learn",
       "icon": "book-open",
       "title": {
        "en": "Learn",
        "tr": "Öğren"
       },
       "sub": {
        "en": "aa:… is behind port 3",
        "tr": "aa:… 3. portun arkasında"
       },
       "tag": {
        "en": "MAC table entry",
        "tr": "MAC tablosu girdisi"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "search",
     "title": {
      "en": "Lookup",
      "tr": "Ara"
     },
     "items": [
      {
       "id": "look",
       "icon": "table-2",
       "title": {
        "en": "Find dst MAC",
        "tr": "Hedef MAC'i bul"
       },
       "sub": "bb:… → ?",
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
      "en": "Known",
      "tr": "Biliniyor"
     },
     "items": [
      {
       "id": "fwd",
       "icon": "arrow-right",
       "title": {
        "en": "Forward to one port",
        "tr": "Tek porta ilet"
       },
       "sub": "bb:… → port 7",
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "amber",
     "icon": "megaphone",
     "title": {
      "en": "Unknown / broadcast",
      "tr": "Bilinmiyor / yayın"
     },
     "items": [
      {
       "id": "flood",
       "icon": "megaphone",
       "title": {
        "en": "Flood",
        "tr": "Taşır"
       },
       "sub": {
        "en": "all ports in the VLAN except 3",
        "tr": "3 hariç VLAN'daki tüm portlar"
       },
       "tag": "ff:ff:ff:ff:ff:ff"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "fr",
   "learn",
   "r",
   "l",
   1,
   ""
  ],
  [
   "learn",
   "look",
   "r",
   "l",
   2,
   ""
  ],
  [
   "look",
   "fwd",
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
   "look",
   "flood",
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
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Ingress",
    "tr": "Giriş"
   }
  ],
  [
   "purple",
   {
    "en": "Lookup",
    "tr": "Arama"
   }
  ],
  [
   "green",
   {
    "en": "Unicast",
    "tr": "Unicast"
   }
  ],
  [
   "amber",
   {
    "en": "Flood",
    "tr": "Taşma"
   }
  ]
 ],
 "footer": {
  "en": "🔁 Loops would flood forever — STP or routed designs prevent them",
  "tr": "🔁 Döngüler sonsuza dek taşardı; STP ya da routed tasarımlar bunu önler"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
