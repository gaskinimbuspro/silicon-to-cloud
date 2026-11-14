// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Keyless access: how a CI job gets cloud credentials with OIDC",
  "tr": "Anahtarsız erişim: bir CI işi OIDC ile nasıl bulut kimlik bilgisi alır"
 },
 "subtitle": {
  "en": "No long-lived secrets stored anywhere: a signed identity token is exchanged for 1-hour credentials",
  "tr": "Hiçbir yerde uzun ömürlü secret saklanmaz: imzalı bir kimlik token'ı 1 saatlik kimlik bilgileriyle değiştirilir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "git-branch",
     "title": {
      "en": "CI job",
      "tr": "CI işi"
     },
     "items": [
      {
       "id": "job",
       "icon": "play",
       "title": {
        "en": "Workflow runs",
        "tr": "Workflow çalışır"
       },
       "sub": "repo: acme/api · branch: main",
       "tag": ""
      },
      {
       "id": "tok",
       "icon": "file-badge",
       "title": {
        "en": "OIDC token (JWT)",
        "tr": "OIDC token'ı (JWT)"
       },
       "sub": {
        "en": "signed by the CI provider",
        "tr": "CI sağlayıcısı imzalar"
       },
       "tag": "sub=repo:acme/api:ref:refs/heads/main"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "landmark",
     "title": {
      "en": "Cloud IAM",
      "tr": "Bulut IAM"
     },
     "items": [
      {
       "id": "sts",
       "icon": "check",
       "title": {
        "en": "Verify + match trust policy",
        "tr": "Doğrula + güven politikasıyla eşle"
       },
       "sub": {
        "en": "issuer, audience, subject",
        "tr": "issuer, audience, subject"
       },
       "tag": ""
      },
      {
       "id": "cred",
       "icon": "key-round",
       "title": {
        "en": "Temporary credentials",
        "tr": "Geçici kimlik bilgileri"
       },
       "sub": {
        "en": "expire in ~1 h",
        "tr": "~1 saatte dolar"
       },
       "tag": {
        "en": "scoped role",
        "tr": "kapsamlı rol"
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
     "color": "green",
     "icon": "cloud",
     "title": {
      "en": "Use",
      "tr": "Kullan"
     },
     "items": [
      {
       "id": "use",
       "icon": "upload",
       "title": {
        "en": "Push image, deploy",
        "tr": "İmaj push et, deploy et"
       },
       "sub": {
        "en": "only what the role allows",
        "tr": "sadece rolün izin verdiği"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "amber",
     "icon": "boxes",
     "title": {
      "en": "Same idea in Kubernetes",
      "tr": "Kubernetes'te aynı fikir"
     },
     "items": [
      {
       "id": "k8s",
       "icon": "boxes",
       "title": {
        "en": "Pod ServiceAccount token",
        "tr": "Pod ServiceAccount token'ı"
       },
       "sub": {
        "en": "IRSA / EKS Pod Identity / GKE Workload Identity",
        "tr": "IRSA / EKS Pod Identity / GKE Workload Identity"
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
   "job",
   "tok",
   "r",
   "l",
   1,
   ""
  ],
  [
   "tok",
   "sts",
   "r",
   "l",
   2,
   {
    "en": "exchange",
    "tr": "değiştir"
   }
  ],
  [
   "sts",
   "cred",
   "r",
   "l",
   3,
   ""
  ],
  [
   "cred",
   "use",
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
  ]
 ],
 "legend": [
  [
   "blue",
   "CI"
  ],
  [
   "purple",
   "IAM"
  ],
  [
   "green",
   {
    "en": "Use",
    "tr": "Kullanım"
   }
  ],
  [
   "amber",
   "K8s"
  ]
 ],
 "footer": {
  "en": "🔑 Nothing to leak, nothing to rotate: the best secret is the one that doesn't exist",
  "tr": "🔑 Sızacak bir şey yok, döndürülecek bir şey yok: en iyi secret var olmayan secret'tır"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
