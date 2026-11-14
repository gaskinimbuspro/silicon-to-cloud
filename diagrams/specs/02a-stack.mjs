// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How the stack works during a function call",
  "tr": "Fonksiyon çağrısında stack nasıl çalışır"
 },
 "subtitle": {
  "en": "The stack grows downward: push lowers RSP, pop raises it",
  "tr": "Stack aşağı doğru büyür: push RSP'yi düşürür, pop yükseltir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "arrow-down",
     "title": {
      "en": "Call",
      "tr": "Çağrı"
     },
     "items": [
      {
       "id": "call",
       "icon": "phone-outgoing",
       "title": "call add",
       "sub": {
        "en": "push return address",
        "tr": "dönüş adresini push et"
       },
       "tag": {
        "en": "RSP −= 8",
        "tr": "RSP −= 8"
       }
      },
      {
       "id": "prol",
       "icon": "layers",
       "title": {
        "en": "Prologue",
        "tr": "Giriş"
       },
       "sub": "push rbp · mov rbp, rsp",
       "tag": {
        "en": "new frame",
        "tr": "yeni çerçeve"
       }
      },
      {
       "id": "body",
       "icon": "calculator",
       "title": {
        "en": "Body",
        "tr": "Gövde"
       },
       "sub": {
        "en": "locals at [rbp−4]…",
        "tr": "yereller [rbp−4]…"
       },
       "tag": "EAX = 5"
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
     "color": "green",
     "icon": "arrow-up",
     "title": {
      "en": "Return",
      "tr": "Dönüş"
     },
     "items": [
      {
       "id": "epi",
       "icon": "layers-2",
       "title": {
        "en": "Epilogue",
        "tr": "Çıkış"
       },
       "sub": "pop rbp",
       "tag": {
        "en": "frame gone",
        "tr": "çerçeve gitti"
       }
      },
      {
       "id": "ret",
       "icon": "undo-2",
       "title": "ret",
       "sub": {
        "en": "pop return address → RIP",
        "tr": "dönüş adresini → RIP'e pop et"
       },
       "tag": {
        "en": "RSP += 8",
        "tr": "RSP += 8"
       }
      },
      {
       "id": "back",
       "icon": "check",
       "title": {
        "en": "Back in caller",
        "tr": "Çağırana dönüldü"
       },
       "sub": {
        "en": "result in RAX",
        "tr": "sonuç RAX'te"
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
   "call",
   "prol",
   "r",
   "l",
   1,
   ""
  ],
  [
   "prol",
   "body",
   "r",
   "l",
   2,
   ""
  ],
  [
   "body",
   "epi",
   "b",
   "t",
   3,
   "",
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "epi",
   "ret",
   "r",
   "l",
   4,
   ""
  ],
  [
   "ret",
   "back",
   "r",
   "l",
   5,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Going in",
    "tr": "Giriş"
   }
  ],
  [
   "green",
   {
    "en": "Coming out",
    "tr": "Çıkış"
   }
  ]
 ],
 "footer": {
  "en": "💥 Infinite recursion = frames until the stack runs out = stack overflow",
  "tr": "💥 Sonsuz özyineleme = stack bitene kadar çerçeve = stack overflow"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
