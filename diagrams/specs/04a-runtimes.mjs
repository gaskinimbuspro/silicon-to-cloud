// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "Compiled, interpreted, JIT: how code reaches the CPU",
  "tr": "Derlenmiş, yorumlanmış, JIT: kod CPU'ya nasıl ulaşır"
 },
 "subtitle": {
  "en": "AOT = Ahead-Of-Time · JIT = Just-In-Time",
  "tr": "AOT = Ahead-Of-Time · JIT = Just-In-Time"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "green",
     "icon": "hammer",
     "title": {
      "en": "AOT compiled (C, Go, Rust)",
      "tr": "AOT derlenmiş (C, Go, Rust)"
     },
     "items": [
      {
       "id": "c1",
       "icon": "file-code",
       "title": {
        "en": "Source",
        "tr": "Kaynak"
       },
       "sub": "main.go",
       "tag": ""
      },
      {
       "id": "c2",
       "icon": "cog",
       "title": {
        "en": "Compiler",
        "tr": "Derleyici"
       },
       "sub": {
        "en": "before running",
        "tr": "çalışmadan önce"
       },
       "tag": ""
      },
      {
       "id": "c3",
       "icon": "cpu",
       "title": {
        "en": "Machine code",
        "tr": "Makine kodu"
       },
       "sub": {
        "en": "runs directly",
        "tr": "doğrudan çalışır"
       },
       "tag": {
        "en": "fast start",
        "tr": "hızlı başlar"
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
     "color": "amber",
     "icon": "file-terminal",
     "title": {
      "en": "Interpreted (CPython)",
      "tr": "Yorumlanmış (CPython)"
     },
     "items": [
      {
       "id": "p1",
       "icon": "file-code",
       "title": {
        "en": "Source",
        "tr": "Kaynak"
       },
       "sub": "app.py",
       "tag": ""
      },
      {
       "id": "p2",
       "icon": "binary",
       "title": "Bytecode",
       "sub": ".pyc",
       "tag": ""
      },
      {
       "id": "p3",
       "icon": "refresh-cw",
       "title": {
        "en": "Interpreter loop",
        "tr": "Yorumlayıcı döngüsü"
       },
       "sub": {
        "en": "one op at a time",
        "tr": "her seferinde bir op"
       },
       "tag": {
        "en": "slower",
        "tr": "daha yavaş"
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
     "color": "purple",
     "icon": "zap",
     "title": {
      "en": "JIT (JVM, V8)",
      "tr": "JIT (JVM, V8)"
     },
     "items": [
      {
       "id": "j1",
       "icon": "binary",
       "title": "Bytecode",
       "sub": ".class · JS",
       "tag": ""
      },
      {
       "id": "j2",
       "icon": "eye",
       "title": {
        "en": "Profile",
        "tr": "Profil çıkar"
       },
       "sub": {
        "en": "find hot code",
        "tr": "sıcak kodu bul"
       },
       "tag": ""
      },
      {
       "id": "j3",
       "icon": "zap",
       "title": {
        "en": "Compile hot paths",
        "tr": "Sıcak yolları derle"
       },
       "sub": {
        "en": "at runtime",
        "tr": "çalışma anında"
       },
       "tag": {
        "en": "warm-up, then fast",
        "tr": "ısınma, sonra hızlı"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "c1",
   "c2",
   "r",
   "l",
   1,
   ""
  ],
  [
   "c2",
   "c3",
   "r",
   "l",
   2,
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
   "p2",
   "p3",
   "r",
   "l",
   2,
   ""
  ],
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
  ]
 ],
 "legend": [
  [
   "green",
   "AOT"
  ],
  [
   "amber",
   {
    "en": "Interpreter",
    "tr": "Yorumlayıcı"
   }
  ],
  [
   "purple",
   "JIT"
  ]
 ],
 "footer": {
  "en": "☕ That's why Java services are slow for the first minute after start (JIT warm-up)",
  "tr": "☕ Java servislerinin başlangıçtan sonraki ilk dakikada yavaş olmasının sebebi bu (JIT ısınması)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
