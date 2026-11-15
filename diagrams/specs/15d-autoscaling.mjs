// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Autoscaling in Kubernetes: pods first, then nodes",
  "tr": "Kubernetes'te otomatik ölçekleme: önce pod'lar, sonra node'lar"
 },
 "subtitle": {
  "en": "Pod autoscalers change replicas or sizes · when pods can't be scheduled, node autoscalers add machines · and remove them when idle",
  "tr": "Pod ölçekleyicileri replikaları ya da boyutları değiştirir · pod'lar zamanlanamayınca node ölçekleyicileri makine ekler · boşta kalınca kaldırır"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "bar-chart-3",
     "title": {
      "en": "Signals",
      "tr": "Sinyaller"
     },
     "items": [
      {
       "id": "ms",
       "icon": "cpu",
       "title": "metrics-server",
       "sub": {
        "en": "CPU / memory",
        "tr": "CPU / bellek"
       },
       "tag": ""
      },
      {
       "id": "ext",
       "icon": "bar-chart-3",
       "title": {
        "en": "Custom / external",
        "tr": "Özel / harici"
       },
       "sub": {
        "en": "RPS, queue length, lag",
        "tr": "RPS, kuyruk uzunluğu, gecikme"
       },
       "tag": "Prometheus · KEDA"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "green",
     "icon": "activity",
     "title": {
      "en": "Pod autoscalers",
      "tr": "Pod ölçekleyicileri"
     },
     "items": [
      {
       "id": "hpa",
       "icon": "copy",
       "title": "HPA",
       "sub": {
        "en": "more / fewer replicas",
        "tr": "daha çok / az replika"
       },
       "tag": {
        "en": "target 70% of request",
        "tr": "request'in %70'i hedef"
       }
      },
      {
       "id": "keda",
       "icon": "zap",
       "title": "KEDA",
       "sub": {
        "en": "event-driven, scale to zero",
        "tr": "olay güdümlü, sıfıra ölçekle"
       },
       "tag": ""
      },
      {
       "id": "vpa",
       "icon": "maximize-2",
       "title": "VPA",
       "sub": {
        "en": "right-size requests",
        "tr": "request'leri doğru boyutla"
       },
       "tag": {
        "en": "recommend mode first",
        "tr": "önce öneri modu"
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
     "icon": "hourglass",
     "title": {
      "en": "Pending pods",
      "tr": "Bekleyen pod'lar"
     },
     "items": [
      {
       "id": "pend",
       "icon": "hourglass",
       "title": {
        "en": "Unschedulable",
        "tr": "Zamanlanamaz"
       },
       "sub": {
        "en": "no node has room",
        "tr": "hiçbir node'da yer yok"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "purple",
     "icon": "server",
     "title": {
      "en": "Node autoscalers",
      "tr": "Node ölçekleyicileri"
     },
     "items": [
      {
       "id": "karp",
       "icon": "server",
       "title": "Karpenter",
       "sub": {
        "en": "picks the right instance type",
        "tr": "doğru instance tipini seçer"
       },
       "tag": {
        "en": "spot + on-demand",
        "tr": "spot + on-demand"
       }
      },
      {
       "id": "ca",
       "icon": "copy",
       "title": "Cluster Autoscaler",
       "sub": {
        "en": "grows node groups",
        "tr": "node gruplarını büyütür"
       },
       "tag": ""
      },
      {
       "id": "cons",
       "icon": "shrink",
       "title": {
        "en": "Consolidate",
        "tr": "Konsolide et"
       },
       "sub": {
        "en": "drain & remove idle nodes",
        "tr": "boş node'ları boşalt ve kaldır"
       },
       "tag": {
        "en": "respects PDBs",
        "tr": "PDB'lere uyar"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "ms",
   "ext",
   "r",
   "l",
   1,
   ""
  ],
  [
   "ext",
   "hpa",
   "r",
   "l",
   2,
   ""
  ],
  [
   "hpa",
   "keda",
   "r",
   "l",
   3,
   ""
  ],
  [
   "keda",
   "vpa",
   "r",
   "l",
   4,
   ""
  ],
  [
   "hpa",
   "pend",
   "b",
   "t",
   5,
   {
    "en": "new replicas",
    "tr": "yeni replikalar"
   },
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "pend",
   "karp",
   "r",
   "l",
   6,
   ""
  ],
  [
   "karp",
   "ca",
   "r",
   "l",
   7,
   ""
  ],
  [
   "ca",
   "cons",
   "r",
   "l",
   8,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Signals",
    "tr": "Sinyaller"
   }
  ],
  [
   "green",
   "Pods"
  ],
  [
   "amber",
   "Pending"
  ],
  [
   "purple",
   "Nodes"
  ]
 ],
 "footer": {
  "en": "⏱️ Pod scale-out takes seconds, node scale-out 1–3 minutes: keep some headroom for spikes",
  "tr": "⏱️ Pod ölçekleme saniyeler, node ölçekleme 1–3 dakika sürer: ani artışlar için biraz pay bırak"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
