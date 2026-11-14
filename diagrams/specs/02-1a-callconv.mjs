// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "The System V calling convention (Linux x86-64)",
  "tr": "System V çağrı kuralı (Linux x86-64)"
 },
 "subtitle": {
  "en": "ABI = Application Binary Interface · how compiled functions pass arguments and results",
  "tr": "ABI = Application Binary Interface · derlenmiş fonksiyonların argüman ve sonuç aktarma şekli"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "arrow-right",
     "title": {
      "en": "Arguments",
      "tr": "Argümanlar"
     },
     "items": [
      {
       "id": "a1",
       "icon": "hash",
       "title": {
        "en": "Ints & pointers",
        "tr": "Tamsayı ve pointer"
       },
       "sub": "RDI RSI RDX RCX R8 R9",
       "tag": {
        "en": "then the stack",
        "tr": "sonra stack"
       }
      },
      {
       "id": "a2",
       "icon": "percent",
       "title": {
        "en": "Floats",
        "tr": "Ondalıklar"
       },
       "sub": "XMM0–XMM7",
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "green",
     "icon": "arrow-left",
     "title": {
      "en": "Result",
      "tr": "Sonuç"
     },
     "items": [
      {
       "id": "r",
       "icon": "undo-2",
       "title": {
        "en": "Return value",
        "tr": "Dönüş değeri"
       },
       "sub": "RAX (+RDX)",
       "tag": {
        "en": "floats in XMM0",
        "tr": "ondalıklar XMM0'da"
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
     "icon": "save",
     "title": {
      "en": "Who saves what",
      "tr": "Kim neyi saklar"
     },
     "items": [
      {
       "id": "callee",
       "icon": "lock",
       "title": {
        "en": "Callee-saved",
        "tr": "Çağrılan saklar"
       },
       "sub": "RBX RBP R12–R15",
       "tag": {
        "en": "must restore",
        "tr": "geri yüklemeli"
       }
      },
      {
       "id": "caller",
       "icon": "unlock",
       "title": {
        "en": "Caller-saved",
        "tr": "Çağıran saklar"
       },
       "sub": "RAX RCX RDX RSI RDI R8–R11",
       "tag": {
        "en": "may be clobbered",
        "tr": "bozulabilir"
       }
      },
      {
       "id": "align",
       "icon": "ruler",
       "title": {
        "en": "Stack alignment",
        "tr": "Stack hizalaması"
       },
       "sub": {
        "en": "16 bytes at call",
        "tr": "call anında 16 byte"
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
   "a1",
   "a2",
   "r",
   "l",
   1,
   ""
  ],
  [
   "a2",
   "r",
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
    "en": "In",
    "tr": "Giriş"
   }
  ],
  [
   "green",
   {
    "en": "Out",
    "tr": "Çıkış"
   }
  ],
  [
   "amber",
   {
    "en": "Rules",
    "tr": "Kurallar"
   }
  ]
 ],
 "footer": {
  "en": "🐞 In a debugger or crash dump: first args are in RDI, RSI, RDX — that's how you read them",
  "tr": "🐞 Debugger'da ya da crash dump'ta: ilk argümanlar RDI, RSI, RDX'te; onları böyle okursun"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
