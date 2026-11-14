// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Kubernetes networking end to end",
  "tr": "Uçtan uca Kubernetes ağı"
 },
 "subtitle": {
  "en": "Every pod gets an IP · Services give stable virtual IPs + DNS · Gateway/Ingress brings outside traffic in",
  "tr": "Her pod bir IP alır · Service'ler sabit sanal IP + DNS verir · Gateway/Ingress dış trafiği içeri alır"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "globe",
     "title": {
      "en": "Outside",
      "tr": "Dışarısı"
     },
     "items": [
      {
       "id": "user",
       "icon": "users",
       "title": {
        "en": "Users",
        "tr": "Kullanıcılar"
       },
       "sub": "api.example.com",
       "tag": ""
      },
      {
       "id": "lb",
       "icon": "split",
       "title": {
        "en": "Cloud LB",
        "tr": "Bulut LB'si"
       },
       "sub": "Service type=LoadBalancer",
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "door-open",
     "title": "Gateway API",
     "items": [
      {
       "id": "gw",
       "icon": "door-open",
       "title": "Gateway + HTTPRoute",
       "sub": {
        "en": "host/path → Service",
        "tr": "host/yol → Service"
       },
       "tag": "Envoy · Istio · Cilium"
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
     "icon": "waypoints",
     "title": "Service",
     "items": [
      {
       "id": "svc",
       "icon": "waypoints",
       "title": "orders (ClusterIP)",
       "sub": "10.96.12.7:80",
       "tag": {
        "en": "DNS: orders.shop.svc",
        "tr": "DNS: orders.shop.svc"
       }
      },
      {
       "id": "eps",
       "icon": "list",
       "title": "EndpointSlice",
       "sub": {
        "en": "ready pod IPs",
        "tr": "hazır pod IP'leri"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "boxes",
     "title": {
      "en": "Pods (any node)",
      "tr": "Pod'lar (herhangi bir node)"
     },
     "items": [
      {
       "id": "p1",
       "icon": "box",
       "title": "10.244.1.15",
       "sub": {
        "en": "node A",
        "tr": "node A"
       },
       "tag": ""
      },
      {
       "id": "p2",
       "icon": "box",
       "title": "10.244.3.8",
       "sub": {
        "en": "node B",
        "tr": "node B"
       },
       "tag": {
        "en": "via CNI routes / overlay",
        "tr": "CNI rotaları / overlay ile"
       }
      }
     ]
    },
    {
     "id": "g5",
     "n": 5,
     "color": "red",
     "icon": "shield",
     "title": {
      "en": "Policy",
      "tr": "Politika"
     },
     "items": [
      {
       "id": "np",
       "icon": "shield",
       "title": "NetworkPolicy",
       "sub": {
        "en": "who may talk to whom",
        "tr": "kim kiminle konuşabilir"
       },
       "tag": {
        "en": "enforced by CNI",
        "tr": "CNI uygular"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "user",
   "lb",
   "r",
   "l",
   1,
   ""
  ],
  [
   "lb",
   "gw",
   "r",
   "l",
   2,
   ""
  ],
  [
   "gw",
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
  ],
  [
   "svc",
   "eps",
   "r",
   "l",
   4,
   ""
  ],
  [
   "eps",
   "p1",
   "r",
   "l",
   5,
   ""
  ],
  [
   "p1",
   "p2",
   "r",
   "l",
   1,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Edge",
    "tr": "Uç"
   }
  ],
  [
   "purple",
   "Gateway"
  ],
  [
   "amber",
   "Service"
  ],
  [
   "green",
   "Pods"
  ],
  [
   "red",
   "Policy"
  ]
 ],
 "footer": {
  "en": "📜 Rules: pod↔pod without NAT · Services are virtual (kube-proxy/eBPF) · CNI owns the pod network",
  "tr": "📜 Kurallar: NAT'sız pod↔pod · Service'ler sanal (kube-proxy/eBPF) · pod ağı CNI'ın"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
