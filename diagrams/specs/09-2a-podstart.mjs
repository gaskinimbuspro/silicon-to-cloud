// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "What happens after kubectl apply",
  "tr": "kubectl apply'dan sonra ne olur"
 },
 "subtitle": {
  "en": "A chain of independent controllers, each reacting to a change in the API server",
  "tr": "Her biri API server'daki bir değişikliğe tepki veren bağımsız controller zinciri"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "terminal",
     "title": {
      "en": "API",
      "tr": "API"
     },
     "items": [
      {
       "id": "ap",
       "icon": "terminal",
       "title": "kubectl apply",
       "sub": {
        "en": "Deployment YAML",
        "tr": "Deployment YAML'ı"
       },
       "tag": ""
      },
      {
       "id": "adm",
       "icon": "shield-check",
       "title": {
        "en": "Authn · authz · admission",
        "tr": "Authn · authz · admission"
       },
       "sub": {
        "en": "RBAC, policies, defaults",
        "tr": "RBAC, politikalar, varsayılanlar"
       },
       "tag": ""
      },
      {
       "id": "store",
       "icon": "database",
       "title": {
        "en": "Stored in etcd",
        "tr": "etcd'ye yazılır"
       },
       "sub": "",
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "refresh-cw",
     "title": {
      "en": "Controllers",
      "tr": "Controller'lar"
     },
     "items": [
      {
       "id": "dep",
       "icon": "refresh-cw",
       "title": {
        "en": "Deployment ctrl",
        "tr": "Deployment ctrl"
       },
       "sub": {
        "en": "creates ReplicaSet",
        "tr": "ReplicaSet oluşturur"
       },
       "tag": ""
      },
      {
       "id": "rs",
       "icon": "refresh-cw",
       "title": {
        "en": "ReplicaSet ctrl",
        "tr": "ReplicaSet ctrl"
       },
       "sub": {
        "en": "creates 3 Pods",
        "tr": "3 Pod oluşturur"
       },
       "tag": "Pending"
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
     "icon": "calendar-check",
     "title": "Scheduler",
     "items": [
      {
       "id": "sch",
       "icon": "calendar-check",
       "title": {
        "en": "Bind to node",
        "tr": "Node'a bağla"
       },
       "sub": {
        "en": "filter + score",
        "tr": "filtrele + puanla"
       },
       "tag": "nodeName"
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "server",
     "title": {
      "en": "Node",
      "tr": "Node"
     },
     "items": [
      {
       "id": "kl",
       "icon": "server",
       "title": "kubelet",
       "sub": {
        "en": "pull image, CRI, CNI, volumes",
        "tr": "imaj çek, CRI, CNI, volume'lar"
       },
       "tag": "ContainerCreating"
      },
      {
       "id": "probe",
       "icon": "heart-pulse",
       "title": {
        "en": "Probes pass",
        "tr": "Probe'lar geçer"
       },
       "sub": {
        "en": "Ready → added to EndpointSlice",
        "tr": "Ready → EndpointSlice'a eklenir"
       },
       "tag": "Running"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "ap",
   "adm",
   "r",
   "l",
   1,
   ""
  ],
  [
   "adm",
   "store",
   "r",
   "l",
   2,
   ""
  ],
  [
   "store",
   "dep",
   "r",
   "l",
   3,
   ""
  ],
  [
   "dep",
   "rs",
   "r",
   "l",
   4,
   ""
  ],
  [
   "rs",
   "sch",
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
   "sch",
   "kl",
   "r",
   "l",
   6,
   ""
  ],
  [
   "kl",
   "probe",
   "r",
   "l",
   7,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   "API"
  ],
  [
   "purple",
   {
    "en": "Controllers",
    "tr": "Controller'lar"
   }
  ],
  [
   "amber",
   "Scheduler"
  ],
  [
   "green",
   "Node"
  ]
 ],
 "footer": {
  "en": "🔎 Stuck in Pending = scheduling (resources, taints, affinity) · ContainerCreating = image/volume/CNI",
  "tr": "🔎 Pending'de takılı = zamanlama (kaynak, taint, affinity) · ContainerCreating = imaj/volume/CNI"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
