// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How Kubernetes controllers reconcile",
  "tr": "Kubernetes controller'ları nasıl uzlaştırır"
 },
 "subtitle": {
  "en": "Every controller runs the same loop: observe → compare → act → repeat",
  "tr": "Her controller aynı döngüyü çalıştırır: gözlemle → karşılaştır → harekete geç → tekrarla"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "amber",
     "icon": "file-code",
     "title": {
      "en": "Desired",
      "tr": "İstenen"
     },
     "items": [
      {
       "id": "yaml",
       "icon": "file-code",
       "title": {
        "en": "Desired state",
        "tr": "İstenen durum"
       },
       "sub": "replicas: 3",
       "tag": {
        "en": "from YAML / git",
        "tr": "YAML / git'ten"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "refresh-cw",
     "title": {
      "en": "Controller loop",
      "tr": "Controller döngüsü"
     },
     "items": [
      {
       "id": "obs",
       "icon": "eye",
       "title": {
        "en": "Observe",
        "tr": "Gözlemle"
       },
       "sub": {
        "en": "watch API server",
        "tr": "API server'ı izle"
       },
       "tag": {
        "en": "actual: 2 pods",
        "tr": "gerçek: 2 pod"
       }
      },
      {
       "id": "diff",
       "icon": "git-compare",
       "title": {
        "en": "Compare",
        "tr": "Karşılaştır"
       },
       "sub": "3 − 2 = 1",
       "tag": {
        "en": "drift!",
        "tr": "sapma!"
       }
      },
      {
       "id": "act",
       "icon": "play",
       "title": {
        "en": "Act",
        "tr": "Harekete geç"
       },
       "sub": {
        "en": "create 1 pod",
        "tr": "1 pod oluştur"
       },
       "tag": {
        "en": "one step closer",
        "tr": "bir adım yaklaş"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "yaml",
   "obs",
   "r",
   "l",
   1,
   ""
  ],
  [
   "obs",
   "diff",
   "r",
   "l",
   2,
   ""
  ],
  [
   "diff",
   "act",
   "r",
   "l",
   3,
   ""
  ],
  [
   "act",
   "obs",
   "b",
   "b",
   "",
   {
    "en": "repeat forever (also on any change)",
    "tr": "sonsuza dek tekrarla (her değişiklikte de)"
   },
   {
    "dash": true
   }
  ]
 ],
 "legend": [
  [
   "amber",
   {
    "en": "Desired",
    "tr": "İstenen"
   }
  ],
  [
   "purple",
   {
    "en": "Loop",
    "tr": "Döngü"
   }
  ]
 ],
 "footer": {
  "en": "🔁 Deployments, ReplicaSets, Argo CD, operators — all the same pattern",
  "tr": "🔁 Deployment'lar, ReplicaSet'ler, Argo CD, operator'ler: hepsi aynı desen"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
