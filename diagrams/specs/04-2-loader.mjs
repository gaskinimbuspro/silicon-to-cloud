// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "From execve() to main()",
  "tr": "execve()'den main()'e"
 },
 "subtitle": {
  "en": "The kernel maps the ELF · the dynamic loader brings in shared libraries and fixes addresses · then your code starts",
  "tr": "Kernel ELF'i eşler · dinamik yükleyici paylaşımlı kütüphaneleri getirir ve adresleri düzeltir · sonra kodun başlar"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "purple",
     "icon": "shield",
     "title": {
      "en": "Kernel",
      "tr": "Kernel"
     },
     "items": [
      {
       "id": "ex",
       "icon": "terminal",
       "title": "execve(\"./app\")",
       "sub": {
        "en": "check ELF header",
        "tr": "ELF başlığını kontrol et"
       },
       "tag": ""
      },
      {
       "id": "map",
       "icon": "layers",
       "title": {
        "en": "Map segments",
        "tr": "Segmentleri eşle"
       },
       "sub": "PT_LOAD r-x / rw-",
       "tag": {
        "en": "ASLR random base",
        "tr": "ASLR rastgele taban"
       }
      },
      {
       "id": "interp",
       "icon": "file-search",
       "title": "PT_INTERP",
       "sub": {
        "en": "start ld.so instead",
        "tr": "yerine ld.so'yu başlat"
       },
       "tag": "/lib64/ld-linux-x86-64.so.2"
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
     "color": "blue",
     "icon": "link",
     "title": "ld.so",
     "items": [
      {
       "id": "libs",
       "icon": "library",
       "title": {
        "en": "Load libraries",
        "tr": "Kütüphaneleri yükle"
       },
       "sub": {
        "en": "DT_NEEDED, RPATH, LD_LIBRARY_PATH",
        "tr": "DT_NEEDED, RPATH, LD_LIBRARY_PATH"
       },
       "tag": "libc.so.6"
      },
      {
       "id": "rel",
       "icon": "wrench",
       "title": {
        "en": "Relocate",
        "tr": "Relocation"
       },
       "sub": {
        "en": "fill GOT / PLT entries",
        "tr": "GOT / PLT girdilerini doldur"
       },
       "tag": {
        "en": "lazy or now",
        "tr": "tembel ya da hemen"
       }
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "green",
     "icon": "play",
     "title": {
      "en": "Start",
      "tr": "Başlat"
     },
     "items": [
      {
       "id": "init",
       "icon": "list-checks",
       "title": {
        "en": "Constructors",
        "tr": "Constructor'lar"
       },
       "sub": "_start → __libc_start_main",
       "tag": {
        "en": ".init_array",
        "tr": ".init_array"
       }
      },
      {
       "id": "main",
       "icon": "play",
       "title": "main(argc, argv)",
       "sub": {
        "en": "your code",
        "tr": "senin kodun"
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
   "ex",
   "map",
   "r",
   "l",
   1,
   ""
  ],
  [
   "map",
   "interp",
   "r",
   "l",
   2,
   ""
  ],
  [
   "interp",
   "libs",
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
   "libs",
   "rel",
   "r",
   "l",
   5,
   ""
  ],
  [
   "rel",
   "init",
   "r",
   "l",
   6,
   ""
  ],
  [
   "init",
   "main",
   "r",
   "l",
   7,
   ""
  ]
 ],
 "legend": [
  [
   "purple",
   "Kernel"
  ],
  [
   "blue",
   {
    "en": "Dynamic loader",
    "tr": "Dinamik yükleyici"
   }
  ],
  [
   "green",
   {
    "en": "Program",
    "tr": "Program"
   }
  ]
 ],
 "footer": {
  "en": "🧩 \"not found\" for a binary that exists = missing interpreter or library (musl vs glibc)",
  "tr": "🧩 Var olan bir binary için \"not found\" = eksik interpreter ya da kütüphane (musl vs glibc)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
