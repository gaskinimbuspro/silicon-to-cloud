// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "How a device driver connects hardware to programs",
  "tr": "Bir sürücü donanımı programlara nasıl bağlar"
 },
 "subtitle": {
  "en": "Bus discovers the device → kernel matches a driver → driver registers with a subsystem → user space sees a file",
  "tr": "Bus cihazı keşfeder → kernel bir sürücü eşler → sürücü bir alt sisteme kaydolur → user space bir dosya görür"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "slate",
     "icon": "circuit-board",
     "title": {
      "en": "Hardware",
      "tr": "Donanım"
     },
     "items": [
      {
       "id": "dev",
       "icon": "keyboard",
       "title": {
        "en": "Device",
        "tr": "Cihaz"
       },
       "sub": {
        "en": "vendor:product id",
        "tr": "vendor:product kimliği"
       },
       "tag": "046d:c31c"
      },
      {
       "id": "bus",
       "icon": "cable",
       "title": "Bus",
       "sub": {
        "en": "USB · PCIe · I²C",
        "tr": "USB · PCIe · I²C"
       },
       "tag": {
        "en": "enumerates devices",
        "tr": "cihazları sıralar"
       }
      }
     ]
    },
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
       "id": "match",
       "icon": "search",
       "title": {
        "en": "Match driver",
        "tr": "Sürücü eşle"
       },
       "sub": {
        "en": "id tables · modalias",
        "tr": "id tabloları · modalias"
       },
       "tag": "udev → modprobe"
      },
      {
       "id": "drv",
       "icon": "wrench",
       "title": {
        "en": "Driver probe()",
        "tr": "Sürücü probe()"
       },
       "sub": {
        "en": "map registers · request IRQ",
        "tr": "register'ları eşle · IRQ iste"
       },
       "tag": "usbhid"
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
     "color": "blue",
     "icon": "layers",
     "title": {
      "en": "Subsystem",
      "tr": "Alt sistem"
     },
     "items": [
      {
       "id": "sub",
       "icon": "layers",
       "title": {
        "en": "Register with subsystem",
        "tr": "Alt sisteme kaydol"
       },
       "sub": {
        "en": "input · net · block · drm",
        "tr": "input · net · block · drm"
       },
       "tag": {
        "en": "common API",
        "tr": "ortak API"
       }
      },
      {
       "id": "node",
       "icon": "file",
       "title": "/dev/input/event3",
       "sub": {
        "en": "device node",
        "tr": "cihaz dosyası"
       },
       "tag": {
        "en": "created by udev",
        "tr": "udev oluşturur"
       }
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "app-window",
     "title": {
      "en": "User space",
      "tr": "User space"
     },
     "items": [
      {
       "id": "app",
       "icon": "app-window",
       "title": {
        "en": "Program",
        "tr": "Program"
       },
       "sub": "open() · read() · ioctl()",
       "tag": {
        "en": "syscalls",
        "tr": "syscall'lar"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "dev",
   "bus",
   "r",
   "l",
   1,
   ""
  ],
  [
   "bus",
   "match",
   "r",
   "l",
   2,
   ""
  ],
  [
   "match",
   "drv",
   "r",
   "l",
   3,
   ""
  ],
  [
   "drv",
   "sub",
   "b",
   "t",
   4,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "sub",
   "node",
   "r",
   "l",
   5,
   ""
  ],
  [
   "node",
   "app",
   "r",
   "l",
   6,
   ""
  ]
 ],
 "legend": [
  [
   "slate",
   {
    "en": "Hardware",
    "tr": "Donanım"
   }
  ],
  [
   "purple",
   "Kernel"
  ],
  [
   "blue",
   {
    "en": "Subsystem",
    "tr": "Alt sistem"
   }
  ],
  [
   "green",
   "User space"
  ]
 ],
 "footer": {
  "en": "🔌 Same model for NICs, disks and GPUs: only the subsystem changes",
  "tr": "🔌 NIC, disk ve GPU için de aynı model: sadece alt sistem değişir"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
