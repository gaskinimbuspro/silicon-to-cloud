// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Securing the software supply chain",
  "tr": "Yazılım tedarik zincirini güvenceye almak"
 },
 "subtitle": {
  "en": "Every step leaves verifiable evidence; the cluster refuses anything without it",
  "tr": "Her adım doğrulanabilir kanıt bırakır; cluster kanıtı olmayan her şeyi reddeder"
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
      "en": "Source",
      "tr": "Kaynak"
     },
     "items": [
      {
       "id": "src",
       "icon": "git-commit-horizontal",
       "title": {
        "en": "Reviewed code",
        "tr": "İncelenmiş kod"
       },
       "sub": {
        "en": "protected branches, signed commits",
        "tr": "korumalı branch'ler, imzalı commit'ler"
       },
       "tag": ""
      },
      {
       "id": "deps",
       "icon": "package",
       "title": {
        "en": "Dependencies",
        "tr": "Bağımlılıklar"
       },
       "sub": {
        "en": "lockfiles, pinned, scanned",
        "tr": "lockfile, sabitlenmiş, taranmış"
       },
       "tag": "Renovate · SCA"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "hammer",
     "title": {
      "en": "Build",
      "tr": "Build"
     },
     "items": [
      {
       "id": "bld",
       "icon": "hammer",
       "title": {
        "en": "Isolated CI build",
        "tr": "İzole CI build'i"
       },
       "sub": {
        "en": "no secrets in logs, OIDC",
        "tr": "loglarda secret yok, OIDC"
       },
       "tag": "SLSA L3"
      },
      {
       "id": "att",
       "icon": "file-badge",
       "title": {
        "en": "SBOM + provenance",
        "tr": "SBOM + provenance"
       },
       "sub": {
        "en": "what's inside, how it was built",
        "tr": "içinde ne var, nasıl üretildi"
       },
       "tag": "in-toto"
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
     "icon": "badge-check",
     "title": {
      "en": "Publish",
      "tr": "Yayınla"
     },
     "items": [
      {
       "id": "sign",
       "icon": "pen-line",
       "title": {
        "en": "Sign",
        "tr": "İmzala"
       },
       "sub": "cosign (keyless)",
       "tag": {
        "en": "transparency log (Rekor)",
        "tr": "şeffaflık logu (Rekor)"
       }
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "shield-check",
     "title": {
      "en": "Admit & run",
      "tr": "Kabul et ve çalıştır"
     },
     "items": [
      {
       "id": "adm",
       "icon": "shield-check",
       "title": {
        "en": "Verify at admission",
        "tr": "Admission'da doğrula"
       },
       "sub": {
        "en": "signature, provenance, CVE policy",
        "tr": "imza, provenance, CVE politikası"
       },
       "tag": "Kyverno · policy-controller"
      },
      {
       "id": "run",
       "icon": "play",
       "title": {
        "en": "Run least-privilege",
        "tr": "En az yetkiyle çalıştır"
       },
       "sub": {
        "en": "non-root, read-only, seccomp",
        "tr": "root olmayan, salt okunur, seccomp"
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
   "src",
   "deps",
   "r",
   "l",
   1,
   ""
  ],
  [
   "deps",
   "bld",
   "r",
   "l",
   2,
   ""
  ],
  [
   "bld",
   "att",
   "r",
   "l",
   3,
   ""
  ],
  [
   "att",
   "sign",
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
   "sign",
   "adm",
   "r",
   "l",
   5,
   ""
  ],
  [
   "adm",
   "run",
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
    "en": "Source",
    "tr": "Kaynak"
   }
  ],
  [
   "purple",
   "Build"
  ],
  [
   "amber",
   {
    "en": "Publish",
    "tr": "Yayın"
   }
  ],
  [
   "green",
   {
    "en": "Runtime",
    "tr": "Çalışma"
   }
  ]
 ],
 "footer": {
  "en": "🧾 Attackers target the weakest link: build systems and dependencies, not just your code",
  "tr": "🧾 Saldırganlar en zayıf halkayı hedefler: sadece kodunu değil, build sistemlerini ve bağımlılıkları"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
