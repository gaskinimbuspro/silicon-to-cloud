// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "Inside a process address space (x86-64 Linux)",
  "tr": "Bir process adres alanının içi (x86-64 Linux)"
 },
 "subtitle": {
  "en": "Each process sees its own 128 TB of virtual addresses · only touched pages use real RAM",
  "tr": "Her process kendi 128 TB'lık sanal adresini görür · sadece dokunulan sayfalar gerçek RAM kullanır"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "arrow-up",
     "title": {
      "en": "Low addresses",
      "tr": "Düşük adresler"
     },
     "items": [
      {
       "id": "text",
       "icon": "file-code",
       "title": ".text",
       "sub": {
        "en": "code, read-only + exec",
        "tr": "kod, salt okunur + çalıştırılabilir"
       },
       "tag": ""
      },
      {
       "id": "data",
       "icon": "database",
       "title": ".data / .bss",
       "sub": {
        "en": "globals",
        "tr": "global'ler"
       },
       "tag": ""
      },
      {
       "id": "heap",
       "icon": "trending-up",
       "title": "Heap",
       "sub": {
        "en": "grows up (brk / mmap)",
        "tr": "yukarı büyür (brk / mmap)"
       },
       "tag": "malloc"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "layers",
     "title": {
      "en": "Middle",
      "tr": "Orta"
     },
     "items": [
      {
       "id": "mmap",
       "icon": "layers",
       "title": {
        "en": "mmap area",
        "tr": "mmap alanı"
       },
       "sub": {
        "en": "shared libs, mapped files, big allocs",
        "tr": "paylaşımlı kütüphaneler, eşlenmiş dosyalar, büyük ayırmalar"
       },
       "tag": "libc.so"
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
     "icon": "arrow-down",
     "title": {
      "en": "High addresses",
      "tr": "Yüksek adresler"
     },
     "items": [
      {
       "id": "stack",
       "icon": "layers",
       "title": "Stack",
       "sub": {
        "en": "grows down",
        "tr": "aşağı büyür"
       },
       "tag": {
        "en": "one per thread",
        "tr": "thread başına bir"
       }
      },
      {
       "id": "vdso",
       "icon": "zap",
       "title": "vDSO",
       "sub": {
        "en": "fast gettimeofday",
        "tr": "hızlı gettimeofday"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "red",
     "icon": "shield",
     "title": {
      "en": "Kernel half",
      "tr": "Kernel yarısı"
     },
     "items": [
      {
       "id": "kern",
       "icon": "shield",
       "title": {
        "en": "Kernel space",
        "tr": "Kernel alanı"
       },
       "sub": {
        "en": "not accessible from user mode",
        "tr": "user moddan erişilemez"
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
   "text",
   "data",
   "r",
   "l",
   1,
   ""
  ],
  [
   "data",
   "heap",
   "r",
   "l",
   2,
   ""
  ],
  [
   "heap",
   "mmap",
   "r",
   "l",
   "",
   ""
  ],
  [
   "mmap",
   "stack",
   "b",
   "t",
   "",
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "stack",
   "vdso",
   "r",
   "l",
   1,
   ""
  ],
  [
   "vdso",
   "kern",
   "r",
   "l",
   "",
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Program",
    "tr": "Program"
   }
  ],
  [
   "purple",
   "mmap"
  ],
  [
   "green",
   "Stack"
  ],
  [
   "red",
   "Kernel"
  ]
 ],
 "footer": {
  "en": "📏 VSZ = reserved virtual size (often huge) · RSS = pages actually in RAM",
  "tr": "📏 VSZ = ayrılmış sanal boyut (çoğu zaman dev) · RSS = gerçekten RAM'de olan sayfalar"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
