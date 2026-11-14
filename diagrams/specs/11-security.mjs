// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Security in layers: who are you, what may you do, what are you running?",
  "tr": "Katmanlı güvenlik: kimsin, ne yapabilirsin, ne çalıştırıyorsun?"
 },
 "subtitle": {
  "en": "Identity → authorization → secrets → network → supply chain → detection · every layer assumes the one before can fail",
  "tr": "Kimlik → yetkilendirme → secret'lar → ağ → tedarik zinciri → tespit · her katman bir öncekinin başarısız olabileceğini varsayar"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "fingerprint",
     "title": {
      "en": "Identity",
      "tr": "Kimlik"
     },
     "items": [
      {
       "id": "hum",
       "icon": "user",
       "title": {
        "en": "Humans",
        "tr": "İnsanlar"
       },
       "sub": "SSO · MFA · passkeys",
       "tag": "OIDC / SAML"
      },
      {
       "id": "wl",
       "icon": "bot",
       "title": {
        "en": "Workloads",
        "tr": "İş yükleri"
       },
       "sub": "ServiceAccount · SPIFFE",
       "tag": {
        "en": "no static keys",
        "tr": "statik anahtar yok"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "key-round",
     "title": {
      "en": "Authorization",
      "tr": "Yetkilendirme"
     },
     "items": [
      {
       "id": "rbac",
       "icon": "list-checks",
       "title": "RBAC · IAM policies",
       "sub": {
        "en": "least privilege",
        "tr": "en az yetki"
       },
       "tag": ""
      },
      {
       "id": "pol",
       "icon": "scale",
       "title": {
        "en": "Policy as code",
        "tr": "Kod olarak politika"
       },
       "sub": "OPA · Kyverno · Cedar",
       "tag": ""
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "amber",
     "icon": "lock",
     "title": {
      "en": "Secrets & data",
      "tr": "Secret'lar ve veri"
     },
     "items": [
      {
       "id": "sec",
       "icon": "vault",
       "title": "Vault · cloud KMS",
       "sub": {
        "en": "short-lived, rotated",
        "tr": "kısa ömürlü, döndürülen"
       },
       "tag": ""
      },
      {
       "id": "enc",
       "icon": "lock",
       "title": {
        "en": "Encryption",
        "tr": "Şifreleme"
       },
       "sub": {
        "en": "in transit (TLS/mTLS) + at rest",
        "tr": "aktarımda (TLS/mTLS) + durağanda"
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
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "network",
     "title": {
      "en": "Network",
      "tr": "Ağ"
     },
     "items": [
      {
       "id": "zt",
       "icon": "shield-check",
       "title": {
        "en": "Zero trust",
        "tr": "Zero trust"
       },
       "sub": {
        "en": "authenticate every call",
        "tr": "her çağrıyı doğrula"
       },
       "tag": "mTLS · NetworkPolicy"
      }
     ]
    },
    {
     "id": "g5",
     "n": 5,
     "color": "red",
     "icon": "package-check",
     "title": {
      "en": "Supply chain",
      "tr": "Tedarik zinciri"
     },
     "items": [
      {
       "id": "sc",
       "icon": "package-check",
       "title": {
        "en": "Build → sign → verify",
        "tr": "Üret → imzala → doğrula"
       },
       "sub": "SBOM · cosign · SLSA",
       "tag": {
        "en": "admission checks",
        "tr": "admission kontrolleri"
       }
      }
     ]
    },
    {
     "id": "g6",
     "n": 6,
     "color": "slate",
     "icon": "radar",
     "title": {
      "en": "Detect & respond",
      "tr": "Tespit et ve müdahale et"
     },
     "items": [
      {
       "id": "det",
       "icon": "radar",
       "title": {
        "en": "Audit logs, runtime detection",
        "tr": "Denetim logları, çalışma anı tespiti"
       },
       "sub": "Falco · CloudTrail · SIEM",
       "tag": ""
      },
      {
       "id": "ir",
       "icon": "siren",
       "title": {
        "en": "Incident response",
        "tr": "Olay müdahalesi"
       },
       "sub": {
        "en": "runbooks, rotation, forensics",
        "tr": "runbook, döndürme, adli inceleme"
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
   "hum",
   "wl",
   "r",
   "l",
   1,
   ""
  ],
  [
   "wl",
   "rbac",
   "r",
   "l",
   2,
   ""
  ],
  [
   "rbac",
   "pol",
   "r",
   "l",
   3,
   ""
  ],
  [
   "pol",
   "sec",
   "r",
   "l",
   4,
   ""
  ],
  [
   "sec",
   "enc",
   "r",
   "l",
   5,
   ""
  ],
  [
   "enc",
   "zt",
   "b",
   "t",
   6,
   "",
   {
    "via": [
     "g3",
     "g4"
    ]
   }
  ],
  [
   "zt",
   "sc",
   "r",
   "l",
   7,
   ""
  ],
  [
   "sc",
   "det",
   "r",
   "l",
   8,
   ""
  ],
  [
   "det",
   "ir",
   "r",
   "l",
   9,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Identity",
    "tr": "Kimlik"
   }
  ],
  [
   "purple",
   "AuthZ"
  ],
  [
   "amber",
   {
    "en": "Secrets",
    "tr": "Secret"
   }
  ],
  [
   "green",
   {
    "en": "Network",
    "tr": "Ağ"
   }
  ],
  [
   "red",
   {
    "en": "Supply chain",
    "tr": "Tedarik zinciri"
   }
  ],
  [
   "slate",
   {
    "en": "Detect",
    "tr": "Tespit"
   }
  ]
 ],
 "footer": {
  "en": "🧅 Defence in depth: assume breach, limit blast radius, make every action auditable",
  "tr": "🧅 Derinlemesine savunma: ihlali varsay, etki alanını sınırla, her eylemi denetlenebilir yap"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
