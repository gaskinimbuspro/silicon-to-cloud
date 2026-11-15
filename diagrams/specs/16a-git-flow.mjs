// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Trunk-based development: small branches, fast reviews, always releasable main",
  "tr": "Trunk-based geliştirme: küçük branch'ler, hızlı incelemeler, her zaman yayınlanabilir main"
 },
 "subtitle": {
  "en": "Every change goes through a pull request with automated checks and a human review · main is always green and deployable",
  "tr": "Her değişiklik otomatik kontrollü ve insan incelemeli bir pull request'ten geçer · main her zaman yeşil ve deploy edilebilir"
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
      "en": "Branch",
      "tr": "Branch"
     },
     "items": [
      {
       "id": "br",
       "icon": "git-branch",
       "title": {
        "en": "Short-lived branch",
        "tr": "Kısa ömürlü branch"
       },
       "sub": {
        "en": "hours to 1–2 days",
        "tr": "saatler ile 1–2 gün"
       },
       "tag": "feat/checkout-retry"
      },
      {
       "id": "cm",
       "icon": "git-commit-horizontal",
       "title": {
        "en": "Small commits",
        "tr": "Küçük commit'ler"
       },
       "sub": "Conventional Commits",
       "tag": "feat: fix: chore:"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "git-pull-request",
     "title": {
      "en": "Pull request",
      "tr": "Pull request"
     },
     "items": [
      {
       "id": "ci",
       "icon": "check-check",
       "title": {
        "en": "Automated checks",
        "tr": "Otomatik kontroller"
       },
       "sub": {
        "en": "build, tests, lint, security",
        "tr": "build, test, lint, güvenlik"
       },
       "tag": {
        "en": "required to merge",
        "tr": "merge için zorunlu"
       }
      },
      {
       "id": "rv",
       "icon": "users",
       "title": {
        "en": "Review",
        "tr": "İnceleme"
       },
       "sub": {
        "en": "CODEOWNERS, < 400 lines",
        "tr": "CODEOWNERS, < 400 satır"
       },
       "tag": {
        "en": "within hours",
        "tr": "saatler içinde"
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
     "icon": "git-merge",
     "title": "main",
     "items": [
      {
       "id": "mg",
       "icon": "git-merge",
       "title": {
        "en": "Merge (squash)",
        "tr": "Merge (squash)"
       },
       "sub": {
        "en": "protected branch, merge queue",
        "tr": "korumalı branch, merge kuyruğu"
       },
       "tag": ""
      },
      {
       "id": "art",
       "icon": "package",
       "title": {
        "en": "Build once",
        "tr": "Bir kez build et"
       },
       "sub": {
        "en": "image digest + SBOM",
        "tr": "imaj digest'i + SBOM"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "amber",
     "icon": "tag",
     "title": {
      "en": "Release",
      "tr": "Sürüm"
     },
     "items": [
      {
       "id": "tag",
       "icon": "tag",
       "title": {
        "en": "Version tag",
        "tr": "Sürüm etiketi"
       },
       "sub": "SemVer v2.4.0",
       "tag": {
        "en": "generated changelog",
        "tr": "üretilmiş changelog"
       }
      },
      {
       "id": "dep",
       "icon": "rocket",
       "title": {
        "en": "Deploy",
        "tr": "Deploy"
       },
       "sub": {
        "en": "promote through environments",
        "tr": "ortamlar boyunca terfi"
       },
       "tag": "9.4 · 16.2"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "br",
   "cm",
   "r",
   "l",
   1,
   ""
  ],
  [
   "cm",
   "ci",
   "r",
   "l",
   2,
   ""
  ],
  [
   "ci",
   "rv",
   "r",
   "l",
   3,
   ""
  ],
  [
   "rv",
   "mg",
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
   "mg",
   "art",
   "r",
   "l",
   5,
   ""
  ],
  [
   "art",
   "tag",
   "r",
   "l",
   6,
   ""
  ],
  [
   "tag",
   "dep",
   "r",
   "l",
   7,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   "Branch"
  ],
  [
   "purple",
   "PR"
  ],
  [
   "green",
   "main"
  ],
  [
   "amber",
   {
    "en": "Release",
    "tr": "Sürüm"
   }
  ]
 ],
 "footer": {
  "en": "🌿 Long-lived branches hide integration problems until the worst moment: merge small, merge often",
  "tr": "🌿 Uzun ömürlü branch'ler entegrasyon sorunlarını en kötü ana kadar saklar: küçük ve sık merge et"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
