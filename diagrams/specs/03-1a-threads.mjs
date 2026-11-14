// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "Processes vs threads: what is shared",
  "tr": "Process ve thread: ne paylaşılır"
 },
 "subtitle": {
  "en": "Threads of one process share memory and files · each thread has its own stack and registers",
  "tr": "Bir process'in thread'leri belleği ve dosyaları paylaşır · her thread'in kendi stack'i ve register'ları var"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "purple",
     "icon": "box",
     "title": {
      "en": "Shared by all threads",
      "tr": "Tüm thread'lerin paylaştığı"
     },
     "items": [
      {
       "id": "code",
       "icon": "file-code",
       "title": {
        "en": "Code + globals",
        "tr": "Kod + global'ler"
       },
       "sub": ".text .data .bss",
       "tag": ""
      },
      {
       "id": "heap",
       "icon": "database",
       "title": "Heap",
       "sub": "malloc / new",
       "tag": {
        "en": "needs locks",
        "tr": "kilit ister"
       }
      },
      {
       "id": "fds",
       "icon": "files",
       "title": {
        "en": "File descriptors",
        "tr": "Dosya tanımlayıcıları"
       },
       "sub": {
        "en": "sockets, files",
        "tr": "soketler, dosyalar"
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
     "id": "g2",
     "n": 2,
     "color": "blue",
     "icon": "user",
     "title": {
      "en": "Thread 1",
      "tr": "Thread 1"
     },
     "items": [
      {
       "id": "s1",
       "icon": "layers",
       "title": {
        "en": "Own stack",
        "tr": "Kendi stack'i"
       },
       "sub": "8 MB default",
       "tag": ""
      },
      {
       "id": "r1",
       "icon": "cpu",
       "title": {
        "en": "Own registers",
        "tr": "Kendi register'ları"
       },
       "sub": "RIP RSP …",
       "tag": {
        "en": "own TID",
        "tr": "kendi TID'i"
       }
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "green",
     "icon": "user",
     "title": {
      "en": "Thread 2",
      "tr": "Thread 2"
     },
     "items": [
      {
       "id": "s2",
       "icon": "layers",
       "title": {
        "en": "Own stack",
        "tr": "Kendi stack'i"
       },
       "sub": "",
       "tag": ""
      },
      {
       "id": "r2",
       "icon": "cpu",
       "title": {
        "en": "Own registers",
        "tr": "Kendi register'ları"
       },
       "sub": "",
       "tag": ""
      }
     ]
    }
   ]
  }
 ],
 "edges": [],
 "legend": [
  [
   "purple",
   {
    "en": "Shared",
    "tr": "Paylaşılan"
   }
  ],
  [
   "blue",
   "Thread 1"
  ],
  [
   "green",
   "Thread 2"
  ]
 ],
 "footer": {
  "en": "⚖️ Threads: cheap to switch, share data, one crash kills all · processes: isolated, more memory",
  "tr": "⚖️ Thread: değişimi ucuz, veri paylaşır, biri çökerse hepsi ölür · process: izole, daha çok bellek"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
