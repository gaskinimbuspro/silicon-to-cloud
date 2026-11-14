// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "The JavaScript runtime in a browser",
  "tr": "Tarayıcıda JavaScript runtime'ı"
 },
 "subtitle": {
  "en": "JS runs on one call stack · slow work is handed to browser APIs · results come back through queues",
  "tr": "JS tek bir çağrı stack'inde çalışır · yavaş iş tarayıcı API'lerine verilir · sonuçlar kuyruklardan geri gelir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "braces",
     "title": {
      "en": "JS engine (V8)",
      "tr": "JS motoru (V8)"
     },
     "items": [
      {
       "id": "stack",
       "icon": "layers",
       "title": {
        "en": "Call stack",
        "tr": "Çağrı stack'i"
       },
       "sub": {
        "en": "one function at a time",
        "tr": "aynı anda tek fonksiyon"
       },
       "tag": ""
      },
      {
       "id": "heap",
       "icon": "database",
       "title": "Heap",
       "sub": {
        "en": "objects, GC",
        "tr": "nesneler, GC"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "globe",
     "title": {
      "en": "Web APIs (browser)",
      "tr": "Web API'leri (tarayıcı)"
     },
     "items": [
      {
       "id": "api",
       "icon": "globe",
       "title": "fetch · setTimeout · DOM events",
       "sub": {
        "en": "run outside JS",
        "tr": "JS dışında çalışır"
       },
       "tag": {
        "en": "network, timers, input",
        "tr": "ağ, zamanlayıcılar, girdi"
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
     "color": "amber",
     "icon": "list-ordered",
     "title": {
      "en": "Queues",
      "tr": "Kuyruklar"
     },
     "items": [
      {
       "id": "micro",
       "icon": "list-checks",
       "title": {
        "en": "Microtask queue",
        "tr": "Mikro görev kuyruğu"
       },
       "sub": "Promise.then · await",
       "tag": {
        "en": "drained first",
        "tr": "önce boşaltılır"
       }
      },
      {
       "id": "task",
       "icon": "list-ordered",
       "title": {
        "en": "Task queue",
        "tr": "Görev kuyruğu"
       },
       "sub": "setTimeout · events · fetch callbacks",
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "refresh-cw",
     "title": {
      "en": "Event loop",
      "tr": "Event loop"
     },
     "items": [
      {
       "id": "loop",
       "icon": "refresh-cw",
       "title": {
        "en": "Stack empty?",
        "tr": "Stack boş mu?"
       },
       "sub": {
        "en": "→ microtasks → render → next task",
        "tr": "→ mikro görevler → render → sıradaki görev"
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
   "stack",
   "api",
   "r",
   "l",
   1,
   {
    "en": "call",
    "tr": "çağır"
   }
  ],
  [
   "api",
   "task",
   "b",
   "t",
   2,
   {
    "en": "done",
    "tr": "bitti"
   },
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "micro",
   "task",
   "r",
   "l",
   "",
   ""
  ],
  [
   "task",
   "loop",
   "r",
   "l",
   3,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Engine",
    "tr": "Motor"
   }
  ],
  [
   "purple",
   {
    "en": "Browser",
    "tr": "Tarayıcı"
   }
  ],
  [
   "amber",
   {
    "en": "Queues",
    "tr": "Kuyruklar"
   }
  ],
  [
   "green",
   {
    "en": "Loop",
    "tr": "Döngü"
   }
  ]
 ],
 "footer": {
  "en": "🧵 Node.js has the same model (libuv instead of Web APIs)",
  "tr": "🧵 Node.js aynı modele sahip (Web API'leri yerine libuv)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
