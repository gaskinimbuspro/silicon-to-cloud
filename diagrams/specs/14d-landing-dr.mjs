// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Landing zone and disaster recovery",
  "tr": "Landing zone ve felaket kurtarma"
 },
 "subtitle": {
  "en": "Many accounts with guardrails limit blast radius · DR strategies trade cost against how much data and time you can lose",
  "tr": "Korkuluklu çok sayıda hesap etki alanını sınırlar · DR stratejileri maliyeti, kaybedebileceğin veri ve süreye karşı tartar"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "building",
     "title": {
      "en": "Organization",
      "tr": "Organizasyon"
     },
     "items": [
      {
       "id": "org",
       "icon": "building",
       "title": {
        "en": "Management account",
        "tr": "Yönetim hesabı"
       },
       "sub": {
        "en": "billing, SSO, org policies",
        "tr": "faturalama, SSO, org politikaları"
       },
       "tag": {
        "en": "no workloads",
        "tr": "iş yükü yok"
       }
      },
      {
       "id": "scp",
       "icon": "shield",
       "title": {
        "en": "Guardrails",
        "tr": "Korkuluklar"
       },
       "sub": "SCP · Org Policy · Azure Policy",
       "tag": {
        "en": "deny regions, deny disabling logs",
        "tr": "bölgeleri reddet, log kapatmayı reddet"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "layout-grid",
     "title": {
      "en": "Accounts / projects",
      "tr": "Hesaplar / projeler"
     },
     "items": [
      {
       "id": "sec",
       "icon": "shield-check",
       "title": {
        "en": "Security & log archive",
        "tr": "Güvenlik ve log arşivi"
       },
       "sub": {
        "en": "CloudTrail, findings",
        "tr": "CloudTrail, bulgular"
       },
       "tag": ""
      },
      {
       "id": "netw",
       "icon": "network",
       "title": {
        "en": "Shared network",
        "tr": "Paylaşılan ağ"
       },
       "sub": {
        "en": "hub: transit, egress, DNS",
        "tr": "hub: transit, çıkış, DNS"
       },
       "tag": ""
      },
      {
       "id": "wl",
       "icon": "boxes",
       "title": {
        "en": "Workloads",
        "tr": "İş yükleri"
       },
       "sub": {
        "en": "one per team × env",
        "tr": "ekip × ortam başına bir"
       },
       "tag": "prod · staging · dev"
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
     "icon": "life-buoy",
     "title": {
      "en": "DR strategies (cheaper → faster)",
      "tr": "DR stratejileri (ucuz → hızlı)"
     },
     "items": [
      {
       "id": "br",
       "icon": "archive",
       "title": {
        "en": "Backup & restore",
        "tr": "Yedekle ve geri yükle"
       },
       "sub": {
        "en": "RPO hours · RTO hours–days",
        "tr": "RPO saatler · RTO saatler–günler"
       },
       "tag": "$"
      },
      {
       "id": "pl",
       "icon": "flame",
       "title": {
        "en": "Pilot light",
        "tr": "Pilot ışığı"
       },
       "sub": {
        "en": "data replicated, compute off",
        "tr": "veri replike, compute kapalı"
       },
       "tag": "$$"
      },
      {
       "id": "ws",
       "icon": "thermometer",
       "title": {
        "en": "Warm standby",
        "tr": "Ilık yedek"
       },
       "sub": {
        "en": "scaled-down copy running",
        "tr": "küçültülmüş kopya çalışıyor"
       },
       "tag": "$$$"
      },
      {
       "id": "aa",
       "icon": "globe",
       "title": {
        "en": "Active-active",
        "tr": "Aktif-aktif"
       },
       "sub": {
        "en": "RPO ≈ 0 · RTO ≈ minutes",
        "tr": "RPO ≈ 0 · RTO ≈ dakikalar"
       },
       "tag": "$$$$"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "org",
   "scp",
   "r",
   "l",
   1,
   ""
  ],
  [
   "scp",
   "sec",
   "r",
   "l",
   2,
   ""
  ],
  [
   "sec",
   "netw",
   "r",
   "l",
   3,
   ""
  ],
  [
   "netw",
   "wl",
   "r",
   "l",
   4,
   ""
  ],
  [
   "wl",
   "br",
   "b",
   "t",
   5,
   "",
   {
    "via": [
     "g2",
     "g3"
    ],
    "dash": true
   }
  ],
  [
   "br",
   "pl",
   "r",
   "l",
   6,
   ""
  ],
  [
   "pl",
   "ws",
   "r",
   "l",
   7,
   ""
  ],
  [
   "ws",
   "aa",
   "r",
   "l",
   8,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   "Org"
  ],
  [
   "purple",
   {
    "en": "Accounts",
    "tr": "Hesaplar"
   }
  ],
  [
   "amber",
   "DR"
  ]
 ],
 "footer": {
  "en": "⏱️ RPO = how much data you may lose · RTO = how long you may be down · both are business decisions",
  "tr": "⏱️ RPO = ne kadar veri kaybedebilirsin · RTO = ne kadar kapalı kalabilirsin · ikisi de iş kararıdır"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
