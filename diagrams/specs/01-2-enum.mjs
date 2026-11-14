// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "What happens when you plug in a USB keyboard",
  "tr": "Bir USB klavye taktığında ne olur"
 },
 "subtitle": {
  "en": "Enumeration: the host discovers what the device is and gives it an address",
  "tr": "Enumeration: host cihazın ne olduğunu keşfeder ve ona bir adres verir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "amber",
     "icon": "plug",
     "title": {
      "en": "Attach",
      "tr": "Takma"
     },
     "items": [
      {
       "id": "plug",
       "icon": "plug",
       "title": {
        "en": "Plug in",
        "tr": "Tak"
       },
       "sub": {
        "en": "hub sees voltage change",
        "tr": "hub voltaj değişimini görür"
       },
       "tag": ""
      },
      {
       "id": "reset",
       "icon": "rotate-ccw",
       "title": {
        "en": "Port reset",
        "tr": "Port reset"
       },
       "sub": {
        "en": "speed detected",
        "tr": "hız belirlenir"
       },
       "tag": {
        "en": "address 0",
        "tr": "adres 0"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "blue",
     "icon": "file-search",
     "title": {
      "en": "Descriptors",
      "tr": "Tanımlayıcılar"
     },
     "items": [
      {
       "id": "dd",
       "icon": "file-text",
       "title": {
        "en": "Device descriptor",
        "tr": "Cihaz tanımlayıcısı"
       },
       "sub": "VID:PID · class",
       "tag": ""
      },
      {
       "id": "addr",
       "icon": "hash",
       "title": "SET_ADDRESS",
       "sub": {
        "en": "gets address 1–127",
        "tr": "1–127 adresini alır"
       },
       "tag": ""
      },
      {
       "id": "cfg",
       "icon": "file-cog",
       "title": {
        "en": "Config + interface",
        "tr": "Config + arayüz"
       },
       "sub": {
        "en": "class 3 = HID",
        "tr": "sınıf 3 = HID"
       },
       "tag": {
        "en": "+ report descriptor",
        "tr": "+ rapor tanımlayıcısı"
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
     "icon": "shield",
     "title": {
      "en": "Driver",
      "tr": "Sürücü"
     },
     "items": [
      {
       "id": "bind",
       "icon": "link",
       "title": {
        "en": "Bind usbhid",
        "tr": "usbhid bağla"
       },
       "sub": {
        "en": "by class match",
        "tr": "sınıf eşleşmesiyle"
       },
       "tag": ""
      },
      {
       "id": "ep",
       "icon": "repeat",
       "title": {
        "en": "Interrupt endpoint",
        "tr": "Interrupt endpoint"
       },
       "sub": {
        "en": "host polls every 1–8 ms",
        "tr": "host her 1–8 ms'de yoklar"
       },
       "tag": {
        "en": "or faster (gaming)",
        "tr": "ya da daha hızlı (oyun)"
       }
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "keyboard",
     "title": {
      "en": "Running",
      "tr": "Çalışıyor"
     },
     "items": [
      {
       "id": "rep",
       "icon": "binary",
       "title": {
        "en": "8-byte reports",
        "tr": "8 byte'lık raporlar"
       },
       "sub": {
        "en": "only on change",
        "tr": "sadece değişince"
       },
       "tag": "NAK otherwise"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "plug",
   "reset",
   "r",
   "l",
   1,
   ""
  ],
  [
   "reset",
   "dd",
   "r",
   "l",
   2,
   ""
  ],
  [
   "dd",
   "addr",
   "r",
   "l",
   3,
   ""
  ],
  [
   "addr",
   "cfg",
   "r",
   "l",
   4,
   ""
  ],
  [
   "cfg",
   "bind",
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
   "bind",
   "ep",
   "r",
   "l",
   6,
   ""
  ],
  [
   "ep",
   "rep",
   "r",
   "l",
   7,
   ""
  ]
 ],
 "legend": [
  [
   "amber",
   {
    "en": "Attach",
    "tr": "Takma"
   }
  ],
  [
   "blue",
   {
    "en": "Enumerate",
    "tr": "Sırala"
   }
  ],
  [
   "purple",
   {
    "en": "Driver",
    "tr": "Sürücü"
   }
  ],
  [
   "green",
   {
    "en": "Run",
    "tr": "Çalış"
   }
  ]
 ],
 "footer": {
  "en": "🧭 \"USB polls\": the device never speaks first, the host asks",
  "tr": "🧭 \"USB yoklar\": cihaz asla önce konuşmaz, host sorar"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
