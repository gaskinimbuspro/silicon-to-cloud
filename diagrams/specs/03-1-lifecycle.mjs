// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "The life of a process",
  "tr": "Bir process'in hayatı"
 },
 "subtitle": {
  "en": "fork/clone creates it · execve loads a program · the scheduler runs it · exit + wait() reaps it",
  "tr": "fork/clone oluşturur · execve programı yükler · zamanlayıcı çalıştırır · exit + wait() toplar"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "git-fork",
     "title": {
      "en": "Birth",
      "tr": "Doğum"
     },
     "items": [
      {
       "id": "fork",
       "icon": "git-fork",
       "title": "fork() / clone()",
       "sub": {
        "en": "copy of parent (copy-on-write)",
        "tr": "ebeveynin kopyası (copy-on-write)"
       },
       "tag": {
        "en": "new PID",
        "tr": "yeni PID"
       }
      },
      {
       "id": "exec",
       "icon": "file-code",
       "title": "execve()",
       "sub": {
        "en": "replace with new program",
        "tr": "yeni programla değiştir"
       },
       "tag": {
        "en": "same PID",
        "tr": "aynı PID"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "green",
     "icon": "play",
     "title": {
      "en": "Life",
      "tr": "Yaşam"
     },
     "items": [
      {
       "id": "run",
       "icon": "play",
       "title": {
        "en": "Running / Runnable",
        "tr": "Çalışıyor / Çalışabilir"
       },
       "sub": "R",
       "tag": {
        "en": "on a CPU or in the run queue",
        "tr": "bir CPU'da ya da kuyrukta"
       }
      },
      {
       "id": "sleep",
       "icon": "moon",
       "title": {
        "en": "Sleeping",
        "tr": "Uyuyor"
       },
       "sub": "S / D",
       "tag": {
        "en": "waiting for I/O, lock, timer",
        "tr": "I/O, kilit, zamanlayıcı bekliyor"
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
     "color": "red",
     "icon": "skull",
     "title": {
      "en": "Death",
      "tr": "Ölüm"
     },
     "items": [
      {
       "id": "exit",
       "icon": "log-out",
       "title": "exit(code)",
       "sub": {
        "en": "memory and fds released",
        "tr": "bellek ve fd'ler bırakılır"
       },
       "tag": ""
      },
      {
       "id": "zombie",
       "icon": "ghost",
       "title": {
        "en": "Zombie",
        "tr": "Zombi"
       },
       "sub": "Z",
       "tag": {
        "en": "only exit code left",
        "tr": "sadece çıkış kodu kalır"
       }
      },
      {
       "id": "reap",
       "icon": "hand",
       "title": "wait()",
       "sub": {
        "en": "parent collects the code",
        "tr": "ebeveyn kodu toplar"
       },
       "tag": {
        "en": "or PID 1 adopts orphans",
        "tr": "ya da PID 1 yetimleri sahiplenir"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "fork",
   "exec",
   "r",
   "l",
   1,
   ""
  ],
  [
   "exec",
   "run",
   "r",
   "l",
   2,
   ""
  ],
  [
   "run",
   "sleep",
   "r",
   "l",
   4,
   ""
  ],
  [
   "sleep",
   "exit",
   "b",
   "t",
   5,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "exit",
   "zombie",
   "r",
   "l",
   6,
   ""
  ],
  [
   "zombie",
   "reap",
   "r",
   "l",
   7,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Create",
    "tr": "Oluştur"
   }
  ],
  [
   "green",
   {
    "en": "Run",
    "tr": "Çalış"
   }
  ],
  [
   "red",
   {
    "en": "End",
    "tr": "Bitir"
   }
  ]
 ],
 "footer": {
  "en": "🐳 In a container your app is PID 1: it must reap children and handle SIGTERM (or use tini / --init)",
  "tr": "🐳 Container'da uygulaman PID 1: çocukları toplamalı ve SIGTERM'i işlemeli (ya da tini / --init kullan)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
