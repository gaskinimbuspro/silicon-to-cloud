// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How virtual memory translates an address",
  "tr": "Sanal bellek bir adresi nasıl çevirir"
 },
 "subtitle": {
  "en": "MMU = Memory Management Unit · TLB = Translation Lookaside Buffer",
  "tr": "MMU = Memory Management Unit · TLB = Translation Lookaside Buffer"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "box",
     "title": {
      "en": "Process",
      "tr": "Process"
     },
     "items": [
      {
       "id": "va",
       "icon": "map-pin",
       "title": {
        "en": "Virtual address",
        "tr": "Sanal adres"
       },
       "sub": "0x7ffd…1a40",
       "tag": {
        "en": "what the program uses",
        "tr": "programın kullandığı"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "amber",
     "icon": "cpu",
     "title": "MMU",
     "items": [
      {
       "id": "tlb",
       "icon": "zap",
       "title": "TLB",
       "sub": {
        "en": "recent translations",
        "tr": "son çeviriler"
       },
       "tag": {
        "en": "hit → done",
        "tr": "isabet → bitti"
       }
      },
      {
       "id": "pt",
       "icon": "table-2",
       "title": {
        "en": "Page table walk",
        "tr": "Page table yürüyüşü"
       },
       "sub": {
        "en": "4 levels",
        "tr": "4 seviye"
       },
       "tag": {
        "en": "on TLB miss",
        "tr": "TLB ıskasında"
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
     "color": "green",
     "icon": "memory-stick",
     "title": "RAM",
     "items": [
      {
       "id": "pa",
       "icon": "memory-stick",
       "title": {
        "en": "Physical frame",
        "tr": "Fiziksel çerçeve"
       },
       "sub": "0x3a2f000 + offset",
       "tag": {
        "en": "real location",
        "tr": "gerçek konum"
       }
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "red",
     "icon": "shield",
     "title": {
      "en": "Kernel",
      "tr": "Kernel"
     },
     "items": [
      {
       "id": "pf",
       "icon": "triangle-alert",
       "title": {
        "en": "Page fault",
        "tr": "Page fault"
       },
       "sub": {
        "en": "not mapped yet",
        "tr": "henüz eşlenmemiş"
       },
       "tag": {
        "en": "load / allocate, retry",
        "tr": "yükle / ayır, tekrar dene"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "va",
   "tlb",
   "r",
   "l",
   1,
   ""
  ],
  [
   "tlb",
   "pt",
   "r",
   "l",
   2,
   ""
  ],
  [
   "pt",
   "pa",
   "b",
   "t",
   3,
   {
    "en": "frame number",
    "tr": "çerçeve numarası"
   },
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "pt",
   "pf",
   "b",
   "t",
   "",
   {
    "en": "no entry",
    "tr": "girdi yok"
   },
   {
    "dash": true,
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
   "Process"
  ],
  [
   "amber",
   "MMU"
  ],
  [
   "green",
   "RAM"
  ],
  [
   "red",
   "Kernel"
  ]
 ],
 "footer": {
  "en": "🔒 Each process has its own page table → it cannot see other processes' memory",
  "tr": "🔒 Her process'in kendi page table'ı var → diğerlerinin belleğini göremez"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
