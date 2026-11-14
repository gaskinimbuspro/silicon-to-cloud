// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How the browser event loop works",
  "tr": "Tarayıcı event loop'u nasıl çalışır"
 },
 "subtitle": {
  "en": "One main thread: run a task, then microtasks, then (about every 16.7 ms) render",
  "tr": "Tek ana thread: bir görev çalıştır, sonra mikro görevler, sonra (~16,7 ms'de bir) render"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "amber",
     "icon": "list-ordered",
     "title": {
      "en": "Queues",
      "tr": "Kuyruklar"
     },
     "items": [
      {
       "id": "tq",
       "icon": "list-ordered",
       "title": {
        "en": "Task queue",
        "tr": "Görev kuyruğu"
       },
       "sub": {
        "en": "clicks · timers · network",
        "tr": "tıklama · zamanlayıcı · ağ"
       },
       "tag": ""
      },
      {
       "id": "mq",
       "icon": "list",
       "title": "Microtasks",
       "sub": {
        "en": "resolved promises",
        "tr": "çözülmüş promise'ler"
       },
       "tag": {
        "en": "run all, every time",
        "tr": "her seferinde hepsi"
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
     "color": "blue",
     "icon": "refresh-cw",
     "title": {
      "en": "Main thread loop",
      "tr": "Ana thread döngüsü"
     },
     "items": [
      {
       "id": "task",
       "icon": "play",
       "title": {
        "en": "1 · Run one task",
        "tr": "1 · Bir görev çalıştır"
       },
       "sub": {
        "en": "to completion",
        "tr": "sonuna kadar"
       },
       "tag": {
        "en": "long task = jank",
        "tr": "uzun görev = takılma"
       }
      },
      {
       "id": "micro",
       "icon": "list-checks",
       "title": {
        "en": "2 · Drain microtasks",
        "tr": "2 · Mikro görevleri boşalt"
       },
       "sub": "Promise.then",
       "tag": ""
      },
      {
       "id": "render",
       "icon": "paintbrush",
       "title": {
        "en": "3 · Render (if due)",
        "tr": "3 · Render (zamanı geldiyse)"
       },
       "sub": "rAF → style → layout → paint",
       "tag": {
        "en": "~60×/s",
        "tr": "~saniyede 60"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "tq",
   "task",
   "b",
   "t",
   1,
   "",
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "mq",
   "micro",
   "b",
   "t",
   2,
   "",
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "task",
   "micro",
   "r",
   "l",
   3,
   ""
  ],
  [
   "micro",
   "render",
   "r",
   "l",
   4,
   ""
  ],
  [
   "render",
   "task",
   "b",
   "b",
   "",
   {
    "en": "loop forever",
    "tr": "sonsuza dek döngü"
   },
   {
    "dash": true
   }
  ]
 ],
 "legend": [
  [
   "amber",
   {
    "en": "Queues",
    "tr": "Kuyruklar"
   }
  ],
  [
   "blue",
   {
    "en": "Main thread",
    "tr": "Ana thread"
   }
  ]
 ],
 "footer": {
  "en": "🧵 Heavy work? Move it to a Web Worker or split it into small tasks",
  "tr": "🧵 Ağır iş mi? Bir Web Worker'a taşı ya da küçük görevlere böl"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
