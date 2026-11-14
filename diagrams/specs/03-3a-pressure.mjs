// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "What happens when memory runs out",
  "tr": "Bellek bitince ne olur"
 },
 "subtitle": {
  "en": "The kernel reclaims cheap memory first; only when nothing is left does the OOM killer pick a victim",
  "tr": "Kernel önce ucuz belleği geri alır; geriye bir şey kalmayınca OOM killer bir kurban seçer"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "green",
     "icon": "check",
     "title": {
      "en": "Plenty",
      "tr": "Bol"
     },
     "items": [
      {
       "id": "alloc",
       "icon": "plus",
       "title": "malloc / page fault",
       "sub": {
        "en": "free page given",
        "tr": "boş sayfa verilir"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "amber",
     "icon": "recycle",
     "title": {
      "en": "Reclaim",
      "tr": "Geri alma"
     },
     "items": [
      {
       "id": "cache",
       "icon": "hard-drive",
       "title": {
        "en": "Drop page cache",
        "tr": "Page cache'i bırak"
       },
       "sub": {
        "en": "clean file pages",
        "tr": "temiz dosya sayfaları"
       },
       "tag": {
        "en": "cheap",
        "tr": "ucuz"
       }
      },
      {
       "id": "dirty",
       "icon": "save",
       "title": {
        "en": "Write back dirty pages",
        "tr": "Kirli sayfaları yaz"
       },
       "sub": "",
       "tag": ""
      },
      {
       "id": "swap",
       "icon": "arrow-right-left",
       "title": "Swap / zswap",
       "sub": {
        "en": "anonymous pages out",
        "tr": "anonim sayfalar dışarı"
       },
       "tag": {
        "en": "slow if used heavily",
        "tr": "yoğun kullanılırsa yavaş"
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
      "en": "Out of memory",
      "tr": "Bellek bitti"
     },
     "items": [
      {
       "id": "oom",
       "icon": "skull",
       "title": {
        "en": "OOM killer",
        "tr": "OOM killer"
       },
       "sub": {
        "en": "highest oom_score",
        "tr": "en yüksek oom_score"
       },
       "tag": {
        "en": "SIGKILL",
        "tr": "SIGKILL"
       }
      },
      {
       "id": "cg",
       "icon": "box",
       "title": {
        "en": "cgroup limit hit",
        "tr": "cgroup limiti aşıldı"
       },
       "sub": {
        "en": "only that container's processes",
        "tr": "sadece o container'ın process'leri"
       },
       "tag": "OOMKilled (exit 137)"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "alloc",
   "cache",
   "r",
   "l",
   1,
   ""
  ],
  [
   "cache",
   "dirty",
   "r",
   "l",
   2,
   ""
  ],
  [
   "dirty",
   "swap",
   "r",
   "l",
   3,
   ""
  ],
  [
   "swap",
   "oom",
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
   "oom",
   "cg",
   "r",
   "l",
   "",
   ""
  ]
 ],
 "legend": [
  [
   "green",
   {
    "en": "OK",
    "tr": "Tamam"
   }
  ],
  [
   "amber",
   {
    "en": "Pressure",
    "tr": "Baskı"
   }
  ],
  [
   "red",
   "OOM"
  ]
 ],
 "footer": {
  "en": "📉 Watch PSI (/proc/pressure/memory) to see stalls before the killer arrives",
  "tr": "📉 Killer gelmeden önceki beklemeleri görmek için PSI'ı (/proc/pressure/memory) izle"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
