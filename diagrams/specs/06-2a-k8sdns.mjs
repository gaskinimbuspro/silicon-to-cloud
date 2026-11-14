// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "How DNS works inside Kubernetes",
  "tr": "Kubernetes içinde DNS nasıl çalışır"
 },
 "subtitle": {
  "en": "Pods ask CoreDNS · search domains + ndots:5 turn one lookup into several",
  "tr": "Pod'lar CoreDNS'e sorar · search domain'leri + ndots:5 tek sorguyu birkaç sorguya çevirir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "box",
     "title": "Pod",
     "items": [
      {
       "id": "code",
       "icon": "code",
       "title": "http://orders",
       "sub": {
        "en": "short name",
        "tr": "kısa ad"
       },
       "tag": ""
      },
      {
       "id": "conf",
       "icon": "file-text",
       "title": "/etc/resolv.conf",
       "sub": "nameserver 10.96.0.10",
       "tag": "ndots:5"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "server",
     "title": "CoreDNS",
     "items": [
      {
       "id": "try",
       "icon": "list",
       "title": "orders.shop.svc.cluster.local",
       "sub": {
        "en": "search list, in order",
        "tr": "search listesi, sırayla"
       },
       "tag": {
        "en": "1st try hits",
        "tr": "ilk deneme tutar"
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
     "icon": "network",
     "title": {
      "en": "Answer",
      "tr": "Cevap"
     },
     "items": [
      {
       "id": "svc",
       "icon": "waypoints",
       "title": "Service ClusterIP",
       "sub": "10.96.12.7",
       "tag": {
        "en": "→ kube-proxy / eBPF → pod",
        "tr": "→ kube-proxy / eBPF → pod"
       }
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "amber",
     "icon": "globe",
     "title": {
      "en": "External names",
      "tr": "Dış adlar"
     },
     "items": [
      {
       "id": "ext",
       "icon": "globe",
       "title": "api.stripe.com",
       "sub": {
        "en": "tried with every search suffix first",
        "tr": "önce her search ekiyle denenir"
       },
       "tag": {
        "en": "fix: trailing dot / lower ndots",
        "tr": "çözüm: sondaki nokta / düşük ndots"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "code",
   "conf",
   "r",
   "l",
   1,
   ""
  ],
  [
   "conf",
   "try",
   "r",
   "l",
   2,
   ""
  ],
  [
   "try",
   "svc",
   "b",
   "t",
   3,
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
   "Pod"
  ],
  [
   "purple",
   "CoreDNS"
  ],
  [
   "green",
   {
    "en": "Service",
    "tr": "Service"
   }
  ],
  [
   "amber",
   {
    "en": "Gotcha",
    "tr": "Tuzak"
   }
  ]
 ],
 "footer": {
  "en": "🐢 Slow external calls from pods? Check ndots and NodeLocal DNSCache",
  "tr": "🐢 Pod'lardan dış çağrılar yavaş mı? ndots'u ve NodeLocal DNSCache'i kontrol et"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
