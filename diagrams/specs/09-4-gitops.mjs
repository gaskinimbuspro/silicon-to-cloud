// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "A CI/CD pipeline with GitOps",
  "tr": "GitOps ile bir CI/CD pipeline'ı"
 },
 "subtitle": {
  "en": "CI builds and verifies artifacts · git holds the desired state · an in-cluster agent pulls and reconciles",
  "tr": "CI artefaktları üretir ve doğrular · git istenen durumu tutar · cluster içindeki bir ajan çeker ve uzlaştırır"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "git-branch",
     "title": "CI",
     "items": [
      {
       "id": "push",
       "icon": "git-commit-horizontal",
       "title": {
        "en": "Push / PR",
        "tr": "Push / PR"
       },
       "sub": "app repo",
       "tag": ""
      },
      {
       "id": "test",
       "icon": "flask-conical",
       "title": {
        "en": "Test + lint",
        "tr": "Test + lint"
       },
       "sub": {
        "en": "unit, integration",
        "tr": "birim, entegrasyon"
       },
       "tag": ""
      },
      {
       "id": "build",
       "icon": "package",
       "title": {
        "en": "Build image",
        "tr": "İmaj üret"
       },
       "sub": "buildx, multi-arch",
       "tag": ""
      },
      {
       "id": "sec",
       "icon": "shield-check",
       "title": {
        "en": "Scan + sign",
        "tr": "Tara + imzala"
       },
       "sub": "Trivy · SBOM · cosign",
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
     "icon": "git-merge",
     "title": {
      "en": "Config repo",
      "tr": "Config repo"
     },
     "items": [
      {
       "id": "bump",
       "icon": "git-pull-request",
       "title": {
        "en": "Bump image digest",
        "tr": "İmaj digest'ini güncelle"
       },
       "sub": {
        "en": "PR to env overlay",
        "tr": "ortam overlay'ine PR"
       },
       "tag": "Kustomize / Helm"
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "green",
     "icon": "refresh-cw",
     "title": "CD (GitOps)",
     "items": [
      {
       "id": "argo",
       "icon": "refresh-cw",
       "title": "Argo CD / Flux",
       "sub": {
        "en": "pull & sync",
        "tr": "çek ve senkronla"
       },
       "tag": {
        "en": "drift → self-heal",
        "tr": "sapma → kendini düzelt"
       }
      },
      {
       "id": "roll",
       "icon": "trending-up",
       "title": {
        "en": "Progressive rollout",
        "tr": "Kademeli rollout"
       },
       "sub": {
        "en": "canary, analysis, rollback",
        "tr": "canary, analiz, geri alma"
       },
       "tag": "Argo Rollouts"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "push",
   "test",
   "r",
   "l",
   1,
   ""
  ],
  [
   "test",
   "build",
   "r",
   "l",
   2,
   ""
  ],
  [
   "build",
   "sec",
   "r",
   "l",
   3,
   ""
  ],
  [
   "sec",
   "bump",
   "b",
   "t",
   5,
   "",
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "bump",
   "argo",
   "r",
   "l",
   6,
   ""
  ],
  [
   "argo",
   "roll",
   "r",
   "l",
   7,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   "CI"
  ],
  [
   "purple",
   "Git"
  ],
  [
   "green",
   "CD"
  ]
 ],
 "footer": {
  "en": "🔐 The cluster pulls — CI never needs cluster-admin credentials",
  "tr": "🔐 Cluster çeker; CI'ın asla cluster-admin kimlik bilgisine ihtiyacı olmaz"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
