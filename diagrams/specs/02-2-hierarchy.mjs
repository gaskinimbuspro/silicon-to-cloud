// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "The memory hierarchy: size vs speed",
  "tr": "Bellek hiyerarşisi: boyut ve hız"
 },
 "subtitle": {
  "en": "Approximate latencies on a modern server CPU · each level is ~3–10× slower and much larger",
  "tr": "Modern bir sunucu CPU'sunda yaklaşık gecikmeler · her seviye ~3–10× yavaş ve çok daha büyük"
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
      "en": "Inside the core",
      "tr": "Çekirdeğin içi"
     },
     "items": [
      {
       "id": "reg",
       "icon": "box",
       "title": {
        "en": "Registers",
        "tr": "Register'lar"
       },
       "sub": "~0.3 ns",
       "tag": {
        "en": "~200 B",
        "tr": "~200 B"
       }
      },
      {
       "id": "l1",
       "icon": "zap",
       "title": "L1d / L1i",
       "sub": "~1 ns · 4–5 cycles",
       "tag": "32–64 KB"
      },
      {
       "id": "l2",
       "icon": "zap",
       "title": "L2",
       "sub": "~4 ns · ~14 cycles",
       "tag": "1–2 MB"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "amber",
     "icon": "layers",
     "title": {
      "en": "Shared on chip",
      "tr": "Çip üzerinde paylaşımlı"
     },
     "items": [
      {
       "id": "l3",
       "icon": "layers",
       "title": "L3 / LLC",
       "sub": "~10–20 ns",
       "tag": "32–512 MB"
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
     "icon": "memory-stick",
     "title": {
      "en": "Off chip",
      "tr": "Çip dışı"
     },
     "items": [
      {
       "id": "dram",
       "icon": "memory-stick",
       "title": "DRAM",
       "sub": "~80–100 ns",
       "tag": {
        "en": "GBs–TBs",
        "tr": "GB–TB"
       }
      },
      {
       "id": "numa",
       "icon": "network",
       "title": {
        "en": "Remote NUMA node",
        "tr": "Uzak NUMA node"
       },
       "sub": "~130–150 ns",
       "tag": {
        "en": "other socket",
        "tr": "diğer soket"
       }
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "slate",
     "icon": "hard-drive",
     "title": {
      "en": "Storage",
      "tr": "Depolama"
     },
     "items": [
      {
       "id": "nvme",
       "icon": "hard-drive",
       "title": "NVMe SSD",
       "sub": "~10–100 µs",
       "tag": "TBs"
      },
      {
       "id": "net",
       "icon": "globe",
       "title": {
        "en": "Network (same DC)",
        "tr": "Ağ (aynı DC)"
       },
       "sub": "~0.1–0.5 ms",
       "tag": ""
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "reg",
   "l1",
   "r",
   "l",
   1,
   ""
  ],
  [
   "l1",
   "l2",
   "r",
   "l",
   2,
   ""
  ],
  [
   "l2",
   "l3",
   "r",
   "l",
   3,
   ""
  ],
  [
   "l3",
   "dram",
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
   "dram",
   "numa",
   "r",
   "l",
   5,
   ""
  ],
  [
   "numa",
   "nvme",
   "r",
   "l",
   6,
   ""
  ],
  [
   "nvme",
   "net",
   "r",
   "l",
   7,
   ""
  ]
 ],
 "legend": [
  [
   "red",
   {
    "en": "Core",
    "tr": "Çekirdek"
   }
  ],
  [
   "amber",
   {
    "en": "Chip",
    "tr": "Çip"
   }
  ],
  [
   "blue",
   "RAM"
  ],
  [
   "slate",
   {
    "en": "Storage",
    "tr": "Depolama"
   }
  ]
 ],
 "footer": {
  "en": "🧮 A DRAM miss costs ~300 instructions of work: data layout matters more than clever code",
  "tr": "🧮 Bir DRAM ıskası ~300 komutluk işe mal olur: veri düzeni zekice koddan daha önemli"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
