// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "From one line of C to bytes the CPU executes",
  "tr": "Tek satır C'den CPU'nun çalıştırdığı byte'lara"
 },
 "subtitle": {
  "en": "Compiler picks instructions · assembler encodes them · CPU decodes them back into micro-ops",
  "tr": "Derleyici komutları seçer · assembler kodlar · CPU onları mikro işlemlere geri çözer"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "code",
     "title": {
      "en": "Source",
      "tr": "Kaynak"
     },
     "items": [
      {
       "id": "c",
       "icon": "file-code",
       "title": "return a + b;",
       "sub": {
        "en": "int a, b",
        "tr": "int a, b"
       },
       "tag": "C"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "cpu",
     "title": {
      "en": "Assembly (x86-64)",
      "tr": "Assembly (x86-64)"
     },
     "items": [
      {
       "id": "asm",
       "icon": "terminal",
       "title": "lea eax,[rdi+rsi]",
       "sub": {
        "en": "a in RDI, b in RSI",
        "tr": "a RDI'da, b RSI'da"
       },
       "tag": "System V ABI"
      },
      {
       "id": "ret",
       "icon": "undo-2",
       "title": "ret",
       "sub": {
        "en": "result in EAX",
        "tr": "sonuç EAX'te"
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
     "color": "amber",
     "icon": "binary",
     "title": {
      "en": "Machine code",
      "tr": "Makine kodu"
     },
     "items": [
      {
       "id": "op",
       "icon": "binary",
       "title": "8d",
       "sub": {
        "en": "opcode: LEA",
        "tr": "opcode: LEA"
       },
       "tag": ""
      },
      {
       "id": "modrm",
       "icon": "binary",
       "title": "04",
       "sub": {
        "en": "ModRM: dest EAX, use SIB",
        "tr": "ModRM: hedef EAX, SIB kullan"
       },
       "tag": ""
      },
      {
       "id": "sib",
       "icon": "binary",
       "title": "37",
       "sub": {
        "en": "SIB: base RDI + index RSI",
        "tr": "SIB: taban RDI + indeks RSI"
       },
       "tag": ""
      },
      {
       "id": "c3",
       "icon": "binary",
       "title": "c3",
       "sub": "ret",
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "cpu",
     "title": {
      "en": "CPU front end",
      "tr": "CPU ön ucu"
     },
     "items": [
      {
       "id": "dec",
       "icon": "scan-line",
       "title": {
        "en": "Decode",
        "tr": "Çöz"
       },
       "sub": {
        "en": "variable length 1–15 B",
        "tr": "değişken uzunluk 1–15 B"
       },
       "tag": {
        "en": "→ µops",
        "tr": "→ µop'lar"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "c",
   "asm",
   "r",
   "l",
   1,
   {
    "en": "compile",
    "tr": "derle"
   }
  ],
  [
   "asm",
   "ret",
   "r",
   "l",
   2,
   ""
  ],
  [
   "ret",
   "op",
   "b",
   "t",
   3,
   {
    "en": "assemble",
    "tr": "assemble"
   },
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "op",
   "modrm",
   "r",
   "l",
   4,
   ""
  ],
  [
   "modrm",
   "sib",
   "r",
   "l",
   5,
   ""
  ],
  [
   "sib",
   "c3",
   "r",
   "l",
   6,
   ""
  ],
  [
   "c3",
   "dec",
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
    "en": "Source",
    "tr": "Kaynak"
   }
  ],
  [
   "purple",
   "Assembly"
  ],
  [
   "amber",
   {
    "en": "Bytes",
    "tr": "Byte'lar"
   }
  ],
  [
   "green",
   "CPU"
  ]
 ],
 "footer": {
  "en": "📐 ARM64 is different: every instruction is exactly 4 bytes, easier to decode",
  "tr": "📐 ARM64 farklı: her komut tam 4 byte, çözmesi daha kolay"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
