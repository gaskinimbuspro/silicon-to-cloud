// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Kubernetes architecture",
  "tr": "Kubernetes mimarisi"
 },
 "subtitle": {
  "en": "Everything talks to the API server · etcd stores desired state · controllers and kubelets reconcile",
  "tr": "Herkes API server ile konuşur · etcd istenen durumu saklar · controller'lar ve kubelet'ler uzlaştırır"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "purple",
     "icon": "crown",
     "title": {
      "en": "Control plane",
      "tr": "Control plane"
     },
     "items": [
      {
       "id": "etcd0",
       "icon": "database",
       "title": "etcd",
       "sub": {
        "en": "Raft key-value store",
        "tr": "Raft anahtar-değer deposu"
       },
       "tag": {
        "en": "back it up!",
        "tr": "yedekle!"
       }
      },
      {
       "id": "api",
       "icon": "server",
       "title": "kube-apiserver",
       "sub": {
        "en": "REST, authn/z, admission",
        "tr": "REST, authn/z, admission"
       },
       "tag": {
        "en": "only one that talks to etcd",
        "tr": "etcd ile konuşan tek bileşen"
       }
      },
      {
       "id": "sch",
       "icon": "calendar-check",
       "title": "kube-scheduler",
       "sub": {
        "en": "assigns pods to nodes",
        "tr": "pod'ları node'lara atar"
       },
       "tag": ""
      },
      {
       "id": "cm",
       "icon": "refresh-cw",
       "title": "controller-manager",
       "sub": {
        "en": "Deployments, ReplicaSets, nodes…",
        "tr": "Deployment, ReplicaSet, node…"
       },
       "tag": "+ cloud-controller"
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
     "icon": "server",
     "title": {
      "en": "Worker node (×N)",
      "tr": "Worker node (×N)"
     },
     "items": [
      {
       "id": "kubelet",
       "icon": "server",
       "title": "kubelet",
       "sub": {
        "en": "runs pods, probes, reports",
        "tr": "pod çalıştırır, probe, raporlar"
       },
       "tag": ""
      },
      {
       "id": "rt",
       "icon": "box",
       "title": "containerd",
       "sub": {
        "en": "CRI runtime",
        "tr": "CRI runtime'ı"
       },
       "tag": ""
      },
      {
       "id": "kp",
       "icon": "network",
       "title": "kube-proxy / eBPF CNI",
       "sub": {
        "en": "Services, pod network",
        "tr": "Service'ler, pod ağı"
       },
       "tag": ""
      },
      {
       "id": "pods",
       "icon": "boxes",
       "title": {
        "en": "Pods",
        "tr": "Pod'lar"
       },
       "sub": {
        "en": "your containers",
        "tr": "container'ların"
       },
       "tag": ""
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "etcd0",
   "api",
   "r",
   "l",
   "",
   ""
  ],
  [
   "sch",
   "api",
   "l",
   "r",
   "",
   ""
  ],
  [
   "api",
   "kubelet",
   "b",
   "t",
   2,
   {
    "en": "watch",
    "tr": "izle"
   },
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "kubelet",
   "rt",
   "r",
   "l",
   3,
   ""
  ],
  [
   "rt",
   "kp",
   "r",
   "l",
   4,
   ""
  ],
  [
   "kp",
   "pods",
   "r",
   "l",
   5,
   ""
  ]
 ],
 "legend": [
  [
   "purple",
   "Control plane"
  ],
  [
   "green",
   "Node"
  ]
 ],
 "footer": {
  "en": "📡 Components never call each other directly — they watch the API server and act",
  "tr": "📡 Bileşenler birbirini doğrudan çağırmaz; API server'ı izler ve harekete geçer"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
