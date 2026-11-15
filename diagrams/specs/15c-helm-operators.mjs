// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Packaging and extending Kubernetes: Helm, Kustomize and operators",
  "tr": "Kubernetes'i paketlemek ve genişletmek: Helm, Kustomize ve operator'ler"
 },
 "subtitle": {
  "en": "Helm and Kustomize produce YAML before deploy · operators keep running inside the cluster and manage apps with custom resources",
  "tr": "Helm ve Kustomize deploy'dan önce YAML üretir · operator'ler cluster içinde çalışmaya devam eder ve uygulamaları özel kaynaklarla yönetir"
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
      "en": "Render manifests",
      "tr": "Manifest üret"
     },
     "items": [
      {
       "id": "chart",
       "icon": "package",
       "title": {
        "en": "Helm chart",
        "tr": "Helm chart'ı"
       },
       "sub": {
        "en": "templates + values.yaml",
        "tr": "şablonlar + values.yaml"
       },
       "tag": {
        "en": "versioned, OCI registry",
        "tr": "sürümlü, OCI registry"
       }
      },
      {
       "id": "kust",
       "icon": "layers",
       "title": "Kustomize",
       "sub": {
        "en": "base + overlays (patches)",
        "tr": "base + overlay'ler (yamalar)"
       },
       "tag": {
        "en": "built into kubectl",
        "tr": "kubectl'e gömülü"
       }
      },
      {
       "id": "yaml",
       "icon": "file-text",
       "title": {
        "en": "Plain YAML",
        "tr": "Düz YAML"
       },
       "sub": {
        "en": "what the API server sees",
        "tr": "API server'ın gördüğü"
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
     "color": "purple",
     "icon": "cog",
     "title": {
      "en": "Operator pattern",
      "tr": "Operator deseni"
     },
     "items": [
      {
       "id": "crd",
       "icon": "file-plus",
       "title": "CRD + CR",
       "sub": {
        "en": "kind: PostgresCluster",
        "tr": "kind: PostgresCluster"
       },
       "tag": {
        "en": "new API type",
        "tr": "yeni API tipi"
       }
      },
      {
       "id": "ctrl",
       "icon": "cog",
       "title": {
        "en": "Controller",
        "tr": "Controller"
       },
       "sub": {
        "en": "watches CRs",
        "tr": "CR'ları izler"
       },
       "tag": ""
      },
      {
       "id": "rec",
       "icon": "refresh-cw",
       "title": {
        "en": "Reconcile",
        "tr": "Uzlaştır"
       },
       "sub": {
        "en": "create StatefulSets, backups, failover",
        "tr": "StatefulSet, yedek, failover oluştur"
       },
       "tag": ""
      },
      {
       "id": "status",
       "icon": "info",
       "title": {
        "en": "Status",
        "tr": "Durum"
       },
       "sub": {
        "en": "writes .status back",
        "tr": ".status'u geri yazar"
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
   "chart",
   "kust",
   "r",
   "l",
   1,
   ""
  ],
  [
   "kust",
   "yaml",
   "r",
   "l",
   2,
   ""
  ],
  [
   "yaml",
   "crd",
   "b",
   "t",
   3,
   "",
   {
    "via": [
     "g1",
     "g2"
    ],
    "dash": true
   }
  ],
  [
   "crd",
   "ctrl",
   "r",
   "l",
   4,
   ""
  ],
  [
   "ctrl",
   "rec",
   "r",
   "l",
   5,
   ""
  ],
  [
   "rec",
   "status",
   "r",
   "l",
   6,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Templating",
    "tr": "Şablonlama"
   }
  ],
  [
   "purple",
   "Operators"
  ]
 ],
 "footer": {
  "en": "🧰 Use operators for complex stateful software (databases, Kafka, cert-manager), not for your own simple apps",
  "tr": "🧰 Operator'leri karmaşık durum tutan yazılımlar (veritabanları, Kafka, cert-manager) için kullan, kendi basit uygulamaların için değil"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
