// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "The path of a packet through netfilter (iptables / nftables)",
  "tr": "Bir paketin netfilter'dan geçişi (iptables / nftables)"
 },
 "subtitle": {
  "en": "Hooks where rules can filter, NAT or mark packets · conntrack tracks every flow",
  "tr": "Kuralların paketleri filtreleyebildiği, NAT yapabildiği ya da işaretleyebildiği kancalar · conntrack her akışı izler"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "arrow-down-to-line",
     "title": {
      "en": "Incoming",
      "tr": "Gelen"
     },
     "items": [
      {
       "id": "pre",
       "icon": "filter",
       "title": "PREROUTING",
       "sub": {
        "en": "conntrack · DNAT",
        "tr": "conntrack · DNAT"
       },
       "tag": {
        "en": "Service VIP → pod IP",
        "tr": "Service VIP → pod IP"
       }
      },
      {
       "id": "route",
       "icon": "signpost",
       "title": {
        "en": "Routing decision",
        "tr": "Routing kararı"
       },
       "sub": {
        "en": "for me or forward?",
        "tr": "bana mı, iletilecek mi?"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "green",
     "icon": "server",
     "title": {
      "en": "Local process",
      "tr": "Yerel process"
     },
     "items": [
      {
       "id": "in",
       "icon": "shield-check",
       "title": "INPUT",
       "sub": {
        "en": "filter: allow / drop",
        "tr": "filtre: izin ver / at"
       },
       "tag": ""
      },
      {
       "id": "app",
       "icon": "app-window",
       "title": {
        "en": "Socket / app",
        "tr": "Soket / uygulama"
       },
       "sub": "",
       "tag": ""
      },
      {
       "id": "out",
       "icon": "arrow-up-from-line",
       "title": "OUTPUT",
       "sub": {
        "en": "locally generated",
        "tr": "yerelde üretilen"
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
     "id": "g3",
     "n": 3,
     "color": "amber",
     "icon": "arrow-right-left",
     "title": {
      "en": "Forwarded",
      "tr": "İletilen"
     },
     "items": [
      {
       "id": "fwd",
       "icon": "shield",
       "title": "FORWARD",
       "sub": {
        "en": "routers, pods, Docker",
        "tr": "router'lar, pod'lar, Docker"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "purple",
     "icon": "arrow-up-from-line",
     "title": {
      "en": "Outgoing",
      "tr": "Giden"
     },
     "items": [
      {
       "id": "post",
       "icon": "filter",
       "title": "POSTROUTING",
       "sub": {
        "en": "SNAT / MASQUERADE",
        "tr": "SNAT / MASQUERADE"
       },
       "tag": {
        "en": "pod → node IP",
        "tr": "pod → node IP"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "pre",
   "route",
   "r",
   "l",
   1,
   ""
  ],
  [
   "route",
   "in",
   "r",
   "l",
   2,
   {
    "en": "local",
    "tr": "yerel"
   }
  ],
  [
   "in",
   "app",
   "r",
   "l",
   3,
   ""
  ],
  [
   "app",
   "out",
   "r",
   "l",
   4,
   ""
  ],
  [
   "route",
   "fwd",
   "b",
   "t",
   5,
   {
    "en": "forward",
    "tr": "ilet"
   },
   {
    "via": [
     "g1",
     "g3"
    ]
   }
  ],
  [
   "fwd",
   "post",
   "r",
   "l",
   6,
   ""
  ],
  [
   "out",
   "post",
   "b",
   "t",
   7,
   "",
   {
    "via": [
     "g2",
     "g4"
    ]
   }
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "In",
    "tr": "Giriş"
   }
  ],
  [
   "green",
   {
    "en": "Local",
    "tr": "Yerel"
   }
  ],
  [
   "amber",
   {
    "en": "Forward",
    "tr": "İletim"
   }
  ],
  [
   "purple",
   {
    "en": "Out",
    "tr": "Çıkış"
   }
  ]
 ],
 "footer": {
  "en": "☸️ kube-proxy (iptables/nftables mode) and Docker write their Service and NAT rules into exactly these hooks",
  "tr": "☸️ kube-proxy (iptables/nftables modu) ve Docker Service ve NAT kurallarını tam bu kancalara yazar"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
