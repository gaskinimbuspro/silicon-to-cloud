// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Running Kubernetes in production: the day-2 loop",
  "tr": "Kubernetes'i production'da çalıştırmak: 2. gün döngüsü"
 },
 "subtitle": {
  "en": "Chapter 9 explained how Kubernetes works · this chapter is about operating it: packaging, running, scaling, fixing and upgrading",
  "tr": "Bölüm 9 Kubernetes'in nasıl çalıştığını anlattı · bu bölüm onu işletmekle ilgili: paketleme, çalıştırma, ölçekleme, düzeltme ve yükseltme"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "package",
     "title": {
      "en": "Package & deliver",
      "tr": "Paketle ve teslim et"
     },
     "items": [
      {
       "id": "helm",
       "icon": "package",
       "title": {
        "en": "Helm / Kustomize",
        "tr": "Helm / Kustomize"
       },
       "sub": {
        "en": "templated manifests",
        "tr": "şablonlu manifest'ler"
       },
       "tag": "15.3"
      },
      {
       "id": "git",
       "icon": "git-branch",
       "title": "GitOps",
       "sub": "Argo CD · Flux",
       "tag": "9.4"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "boxes",
     "title": {
      "en": "Run workloads",
      "tr": "İş yüklerini çalıştır"
     },
     "items": [
      {
       "id": "wl",
       "icon": "boxes",
       "title": {
        "en": "Workload controllers",
        "tr": "Workload controller'ları"
       },
       "sub": "Deployment · StatefulSet · Job",
       "tag": "15.1"
      },
      {
       "id": "cfg",
       "icon": "settings",
       "title": {
        "en": "Config & storage",
        "tr": "Config ve depolama"
       },
       "sub": "ConfigMap · Secret · PVC",
       "tag": "15.2"
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
     "color": "green",
     "icon": "scaling",
     "title": {
      "en": "Scale",
      "tr": "Ölçekle"
     },
     "items": [
      {
       "id": "hpa",
       "icon": "activity",
       "title": {
        "en": "Pods",
        "tr": "Pod'lar"
       },
       "sub": "HPA · VPA · KEDA",
       "tag": "15.4"
      },
      {
       "id": "nodes",
       "icon": "server",
       "title": {
        "en": "Nodes",
        "tr": "Node'lar"
       },
       "sub": "Karpenter · Cluster Autoscaler",
       "tag": "15.4"
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "red",
     "icon": "stethoscope",
     "title": {
      "en": "Keep it healthy",
      "tr": "Sağlıklı tut"
     },
     "items": [
      {
       "id": "dbg",
       "icon": "bug",
       "title": {
        "en": "Troubleshoot",
        "tr": "Sorun gider"
       },
       "sub": {
        "en": "Pending, CrashLoop, OOMKilled",
        "tr": "Pending, CrashLoop, OOMKilled"
       },
       "tag": "15.5"
      },
      {
       "id": "upg",
       "icon": "arrow-up-circle",
       "title": {
        "en": "Upgrade & back up",
        "tr": "Yükselt ve yedekle"
       },
       "sub": {
        "en": "every ~4 months, Velero",
        "tr": "~4 ayda bir, Velero"
       },
       "tag": "15.5"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "helm",
   "git",
   "r",
   "l",
   1,
   ""
  ],
  [
   "git",
   "wl",
   "r",
   "l",
   2,
   ""
  ],
  [
   "wl",
   "cfg",
   "r",
   "l",
   3,
   ""
  ],
  [
   "cfg",
   "hpa",
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
   "hpa",
   "nodes",
   "r",
   "l",
   5,
   ""
  ],
  [
   "nodes",
   "dbg",
   "r",
   "l",
   6,
   ""
  ],
  [
   "dbg",
   "upg",
   "r",
   "l",
   7,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Deliver",
    "tr": "Teslim"
   }
  ],
  [
   "purple",
   {
    "en": "Run",
    "tr": "Çalıştır"
   }
  ],
  [
   "green",
   {
    "en": "Scale",
    "tr": "Ölçekle"
   }
  ],
  [
   "red",
   {
    "en": "Operate",
    "tr": "İşlet"
   }
  ]
 ],
 "footer": {
  "en": "🔁 Everything is a control loop: declare the desired state, let controllers converge, watch the gap",
  "tr": "🔁 Her şey bir kontrol döngüsüdür: istenen durumu bildir, controller'lar yakınsasın, aradaki farkı izle"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
