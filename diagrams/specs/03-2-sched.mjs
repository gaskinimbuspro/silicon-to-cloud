// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "How the Linux scheduler shares CPUs",
  "tr": "Linux zamanlayıcısı CPU'ları nasıl paylaştırır"
 },
 "subtitle": {
  "en": "Per-CPU run queues · EEVDF picks the most deserving task · timer ticks and wake-ups trigger decisions",
  "tr": "CPU başına çalışma kuyrukları · EEVDF en hak eden task'ı seçer · timer tick'leri ve uyanmalar kararları tetikler"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "list-ordered",
     "title": {
      "en": "Run queue (per CPU)",
      "tr": "Çalışma kuyruğu (CPU başına)"
     },
     "items": [
      {
       "id": "rq",
       "icon": "list-ordered",
       "title": {
        "en": "Runnable tasks",
        "tr": "Çalışabilir task'lar"
       },
       "sub": {
        "en": "weighted by nice",
        "tr": "nice'a göre ağırlıklı"
       },
       "tag": ""
      },
      {
       "id": "pick",
       "icon": "target",
       "title": {
        "en": "Pick next",
        "tr": "Sıradakini seç"
       },
       "sub": {
        "en": "earliest eligible deadline",
        "tr": "en erken uygun deadline"
       },
       "tag": "EEVDF"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "green",
     "icon": "cpu",
     "title": "CPU",
     "items": [
      {
       "id": "runs",
       "icon": "play",
       "title": {
        "en": "Task runs",
        "tr": "Task çalışır"
       },
       "sub": {
        "en": "until slice ends, blocks or is preempted",
        "tr": "dilimi bitene, bloklanana ya da kesilene kadar"
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
     "icon": "timer",
     "title": {
      "en": "Triggers",
      "tr": "Tetikleyiciler"
     },
     "items": [
      {
       "id": "tick",
       "icon": "timer",
       "title": {
        "en": "Timer tick",
        "tr": "Timer tick"
       },
       "sub": "CONFIG_HZ=250 / 1000",
       "tag": ""
      },
      {
       "id": "wake",
       "icon": "bell",
       "title": {
        "en": "Wake-up",
        "tr": "Uyanma"
       },
       "sub": {
        "en": "I/O done, lock freed",
        "tr": "I/O bitti, kilit bırakıldı"
       },
       "tag": {
        "en": "may preempt",
        "tr": "kesebilir"
       }
      },
      {
       "id": "cs",
       "icon": "repeat",
       "title": {
        "en": "Context switch",
        "tr": "Bağlam değişimi"
       },
       "sub": {
        "en": "save/restore registers",
        "tr": "register'ları kaydet/yükle"
       },
       "tag": "~1–5 µs"
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "purple",
     "icon": "scale",
     "title": {
      "en": "Balance",
      "tr": "Dengele"
     },
     "items": [
      {
       "id": "lb",
       "icon": "scale",
       "title": {
        "en": "Load balancing",
        "tr": "Yük dengeleme"
       },
       "sub": {
        "en": "move tasks between CPUs",
        "tr": "task'ları CPU'lar arasında taşı"
       },
       "tag": {
        "en": "cache/NUMA aware",
        "tr": "önbellek/NUMA farkında"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "rq",
   "pick",
   "r",
   "l",
   1,
   ""
  ],
  [
   "pick",
   "runs",
   "r",
   "l",
   2,
   ""
  ],
  [
   "runs",
   "tick",
   "b",
   "t",
   3,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "tick",
   "wake",
   "r",
   "l",
   4,
   ""
  ],
  [
   "wake",
   "cs",
   "r",
   "l",
   5,
   ""
  ],
  [
   "cs",
   "lb",
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
    "en": "Queue",
    "tr": "Kuyruk"
   }
  ],
  [
   "green",
   "CPU"
  ],
  [
   "amber",
   {
    "en": "Triggers",
    "tr": "Tetikleyiciler"
   }
  ],
  [
   "purple",
   {
    "en": "Balance",
    "tr": "Denge"
   }
  ]
 ],
 "footer": {
  "en": "📈 Load average = runnable + uninterruptible (D) tasks — not CPU %",
  "tr": "📈 Load average = çalışabilir + kesilemez (D) task'lar; CPU % değil"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
