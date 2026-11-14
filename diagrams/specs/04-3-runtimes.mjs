// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "What a language runtime adds on top of the OS",
  "tr": "Bir dil runtime'ı işletim sisteminin üstüne ne ekler"
 },
 "subtitle": {
  "en": "Same kernel, very different engines: memory management, scheduling and compilation inside your process",
  "tr": "Aynı kernel, çok farklı motorlar: process'in içinde bellek yönetimi, zamanlama ve derleme"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "red",
     "icon": "coffee",
     "title": "JVM",
     "items": [
      {
       "id": "j1",
       "icon": "file-code",
       "title": {
        "en": "Bytecode + class loading",
        "tr": "Bytecode + sınıf yükleme"
       },
       "sub": ".class / .jar",
       "tag": ""
      },
      {
       "id": "j2",
       "icon": "flame",
       "title": "JIT (C1 → C2)",
       "sub": {
        "en": "hot methods compiled",
        "tr": "sıcak metotlar derlenir"
       },
       "tag": {
        "en": "warm-up",
        "tr": "ısınma"
       }
      },
      {
       "id": "j3",
       "icon": "recycle",
       "title": "GC",
       "sub": {
        "en": "G1 / ZGC",
        "tr": "G1 / ZGC"
       },
       "tag": {
        "en": "heap = -Xmx",
        "tr": "heap = -Xmx"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "amber",
     "icon": "braces",
     "title": "V8 / Node.js",
     "items": [
      {
       "id": "v1",
       "icon": "repeat",
       "title": {
        "en": "Event loop",
        "tr": "Olay döngüsü"
       },
       "sub": {
        "en": "single JS thread",
        "tr": "tek JS thread'i"
       },
       "tag": "libuv"
      },
      {
       "id": "v2",
       "icon": "flame",
       "title": {
        "en": "Ignition → TurboFan",
        "tr": "Ignition → TurboFan"
       },
       "sub": {
        "en": "interpreter → JIT",
        "tr": "yorumlayıcı → JIT"
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
     "color": "blue",
     "icon": "code",
     "title": "CPython",
     "items": [
      {
       "id": "p1",
       "icon": "code",
       "title": {
        "en": "Bytecode interpreter",
        "tr": "Bytecode yorumlayıcı"
       },
       "sub": ".pyc",
       "tag": {
        "en": "3.13+: experimental JIT",
        "tr": "3.13+: deneysel JIT"
       }
      },
      {
       "id": "p2",
       "icon": "lock",
       "title": "GIL",
       "sub": {
        "en": "one thread runs Python at a time",
        "tr": "aynı anda tek thread Python çalıştırır"
       },
       "tag": {
        "en": "free-threaded build 3.13+",
        "tr": "free-threaded build 3.13+"
       }
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "zap",
     "title": "Go",
     "items": [
      {
       "id": "g1n",
       "icon": "package",
       "title": {
        "en": "Native binary (AOT)",
        "tr": "Native binary (AOT)"
       },
       "sub": {
        "en": "runtime linked in",
        "tr": "runtime içine bağlı"
       },
       "tag": ""
      },
      {
       "id": "g2n",
       "icon": "shuffle",
       "title": {
        "en": "Goroutine scheduler",
        "tr": "Goroutine zamanlayıcısı"
       },
       "sub": {
        "en": "M:N on GOMAXPROCS threads",
        "tr": "GOMAXPROCS thread üzerinde M:N"
       },
       "tag": ""
      },
      {
       "id": "g3n",
       "icon": "recycle",
       "title": "GC",
       "sub": {
        "en": "concurrent, low pause",
        "tr": "eşzamanlı, kısa duraklama"
       },
       "tag": "GOMEMLIMIT"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "j1",
   "j2",
   "r",
   "l",
   1,
   ""
  ],
  [
   "j2",
   "j3",
   "r",
   "l",
   2,
   ""
  ],
  [
   "v1",
   "v2",
   "r",
   "l",
   1,
   ""
  ],
  [
   "p1",
   "p2",
   "r",
   "l",
   1,
   ""
  ],
  [
   "g1n",
   "g2n",
   "r",
   "l",
   1,
   ""
  ],
  [
   "g2n",
   "g3n",
   "r",
   "l",
   2,
   ""
  ]
 ],
 "legend": [
  [
   "red",
   "JVM"
  ],
  [
   "amber",
   "V8"
  ],
  [
   "blue",
   "CPython"
  ],
  [
   "green",
   "Go"
  ]
 ],
 "footer": {
  "en": "📦 In containers: the runtime must see the cgroup limits (heap size, GOMAXPROCS, worker count)",
  "tr": "📦 Container'da: runtime cgroup limitlerini görmeli (heap boyutu, GOMAXPROCS, worker sayısı)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
