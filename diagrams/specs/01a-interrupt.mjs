// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How an interrupt works",
  "tr": "Kesme nasıl çalışır"
 },
 "subtitle": {
  "en": "IRQ = Interrupt Request · IDT = Interrupt Descriptor Table · ISR = Interrupt Service Routine",
  "tr": "IRQ = Interrupt Request · IDT = Interrupt Descriptor Table · ISR = Interrupt Service Routine"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "red",
     "icon": "cpu",
     "title": {
      "en": "CPU",
      "tr": "CPU"
     },
     "items": [
      {
       "id": "run",
       "icon": "play",
       "title": {
        "en": "Running a program",
        "tr": "Program çalışıyor"
       },
       "sub": {
        "en": "ring 3",
        "tr": "ring 3"
       },
       "tag": "Spotify"
      },
      {
       "id": "irq",
       "icon": "zap",
       "title": {
        "en": "IRQ arrives",
        "tr": "IRQ gelir"
       },
       "sub": {
        "en": "from APIC",
        "tr": "APIC'ten"
       },
       "tag": {
        "en": "vector 0x31",
        "tr": "vektör 0x31"
       }
      },
      {
       "id": "save",
       "icon": "save",
       "title": {
        "en": "Save state",
        "tr": "Durumu kaydet"
       },
       "sub": "RIP · RFLAGS · RSP",
       "tag": {
        "en": "on kernel stack",
        "tr": "kernel stack'ine"
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
     "color": "purple",
     "icon": "shield",
     "title": {
      "en": "Kernel",
      "tr": "Kernel"
     },
     "items": [
      {
       "id": "idt",
       "icon": "table-2",
       "title": {
        "en": "Look up IDT",
        "tr": "IDT'ye bak"
       },
       "sub": {
        "en": "vector → handler",
        "tr": "vektör → handler"
       },
       "tag": "IDTR"
      },
      {
       "id": "isr",
       "icon": "wrench",
       "title": {
        "en": "Run ISR",
        "tr": "ISR'yi çalıştır"
       },
       "sub": {
        "en": "ring 0",
        "tr": "ring 0"
       },
       "tag": {
        "en": "handle device",
        "tr": "cihazı işle"
       }
      },
      {
       "id": "iret",
       "icon": "undo-2",
       "title": "iretq",
       "sub": {
        "en": "restore state",
        "tr": "durumu geri yükle"
       },
       "tag": {
        "en": "back to ring 3",
        "tr": "ring 3'e dön"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "run",
   "irq",
   "r",
   "l",
   1,
   ""
  ],
  [
   "irq",
   "save",
   "r",
   "l",
   2,
   ""
  ],
  [
   "save",
   "idt",
   "b",
   "t",
   3,
   {
    "en": "jump",
    "tr": "atla"
   },
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "idt",
   "isr",
   "r",
   "l",
   4,
   ""
  ],
  [
   "isr",
   "iret",
   "r",
   "l",
   5,
   ""
  ],
  [
   "iret",
   "run",
   "b",
   "b",
   "",
   {
    "en": "program continues where it stopped",
    "tr": "program kaldığı yerden devam eder"
   },
   {
    "dash": true
   }
  ]
 ],
 "legend": [
  [
   "red",
   "CPU"
  ],
  [
   "purple",
   "Kernel"
  ]
 ],
 "footer": {
  "en": "⚡ Every I/O device (keyboard, NIC, disk, timer) uses this path",
  "tr": "⚡ Her G/Ç cihazı (klavye, NIC, disk, zamanlayıcı) bu yolu kullanır"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
