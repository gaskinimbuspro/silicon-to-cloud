// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Where the cloud bill comes from — and the levers to pull",
  "tr": "Bulut faturası nereden gelir ve hangi kollar çekilir"
 },
 "subtitle": {
  "en": "FinOps = financial operations: visibility → optimization → continuous operation, shared by engineering and finance",
  "tr": "FinOps = finansal operasyonlar: görünürlük → optimizasyon → sürekli işletim; mühendislik ve finans birlikte"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "receipt",
     "title": {
      "en": "Cost drivers",
      "tr": "Maliyet kaynakları"
     },
     "items": [
      {
       "id": "cmp",
       "icon": "cpu",
       "title": {
        "en": "Compute",
        "tr": "Compute"
       },
       "sub": {
        "en": "VMs, nodes, GPUs",
        "tr": "VM'ler, node'lar, GPU'lar"
       },
       "tag": {
        "en": "usually the largest",
        "tr": "genelde en büyük"
       }
      },
      {
       "id": "sto",
       "icon": "hard-drive",
       "title": {
        "en": "Storage",
        "tr": "Depolama"
       },
       "sub": {
        "en": "volumes, snapshots, objects",
        "tr": "volume, snapshot, nesneler"
       },
       "tag": ""
      },
      {
       "id": "net",
       "icon": "network",
       "title": {
        "en": "Network",
        "tr": "Ağ"
       },
       "sub": {
        "en": "egress, cross-AZ, NAT",
        "tr": "çıkış, AZ'ler arası, NAT"
       },
       "tag": {
        "en": "the hidden one",
        "tr": "gizli olan"
       }
      },
      {
       "id": "mgd",
       "icon": "database",
       "title": {
        "en": "Managed services",
        "tr": "Yönetilen servisler"
       },
       "sub": {
        "en": "DBs, logs, observability",
        "tr": "DB, log, gözlemlenebilirlik"
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
     "id": "g2",
     "n": 2,
     "color": "green",
     "icon": "trending-down",
     "title": {
      "en": "Levers",
      "tr": "Kollar"
     },
     "items": [
      {
       "id": "rs",
       "icon": "ruler",
       "title": {
        "en": "Right-size",
        "tr": "Doğru boyutla"
       },
       "sub": {
        "en": "requests ≈ real usage",
        "tr": "request ≈ gerçek kullanım"
       },
       "tag": "VPA · Goldilocks"
      },
      {
       "id": "as",
       "icon": "refresh-cw",
       "title": {
        "en": "Autoscale & turn off",
        "tr": "Otomatik ölçekle ve kapat"
       },
       "sub": {
        "en": "scale to zero, schedules",
        "tr": "sıfıra ölçekle, takvimler"
       },
       "tag": "HPA · KEDA · Karpenter"
      },
      {
       "id": "pr",
       "icon": "tag",
       "title": {
        "en": "Pricing models",
        "tr": "Fiyat modelleri"
       },
       "sub": {
        "en": "spot, savings plans, reservations",
        "tr": "spot, savings plan, rezervasyon"
       },
       "tag": ""
      },
      {
       "id": "arc",
       "icon": "git-branch",
       "title": {
        "en": "Architecture",
        "tr": "Mimari"
       },
       "sub": {
        "en": "ARM, caching, data locality",
        "tr": "ARM, önbellek, veri yakınlığı"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "purple",
     "icon": "eye",
     "title": {
      "en": "Visibility",
      "tr": "Görünürlük"
     },
     "items": [
      {
       "id": "tag",
       "icon": "tags",
       "title": {
        "en": "Tags + allocation",
        "tr": "Etiketler + dağıtım"
       },
       "sub": {
        "en": "cost per team / service",
        "tr": "ekip / servis başına maliyet"
       },
       "tag": "OpenCost · Kubecost · FOCUS"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "cmp",
   "sto",
   "r",
   "l",
   1,
   ""
  ],
  [
   "sto",
   "net",
   "r",
   "l",
   2,
   ""
  ],
  [
   "net",
   "mgd",
   "r",
   "l",
   3,
   ""
  ],
  [
   "mgd",
   "rs",
   "b",
   "t",
   4,
   "",
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "rs",
   "as",
   "r",
   "l",
   5,
   ""
  ],
  [
   "as",
   "pr",
   "r",
   "l",
   6,
   ""
  ],
  [
   "pr",
   "arc",
   "r",
   "l",
   7,
   ""
  ],
  [
   "arc",
   "tag",
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
    "en": "Spend",
    "tr": "Harcama"
   }
  ],
  [
   "green",
   {
    "en": "Save",
    "tr": "Tasarruf"
   }
  ],
  [
   "purple",
   {
    "en": "See",
    "tr": "Gör"
   }
  ]
 ],
 "footer": {
  "en": "💡 You can't optimize what you can't attribute: tag and allocate first",
  "tr": "💡 Atfedemediğin şeyi optimize edemezsin: önce etiketle ve dağıt"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
