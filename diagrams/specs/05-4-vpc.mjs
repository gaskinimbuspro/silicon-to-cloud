// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "A typical cloud VPC",
  "tr": "Tipik bir bulut VPC'si"
 },
 "subtitle": {
  "en": "VPC = Virtual Private Cloud · public subnets reach the internet via an internet gateway, private ones via NAT",
  "tr": "VPC = Virtual Private Cloud · public subnet'ler internete internet gateway ile, private olanlar NAT ile çıkar"
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
      "en": "Edge",
      "tr": "Uç"
     },
     "items": [
      {
       "id": "igw",
       "icon": "globe",
       "title": {
        "en": "Internet gateway",
        "tr": "Internet gateway"
       },
       "sub": {
        "en": "public IPs ↔ internet",
        "tr": "genel IP'ler ↔ internet"
       },
       "tag": ""
      },
      {
       "id": "alb",
       "icon": "split",
       "title": {
        "en": "Load balancer",
        "tr": "Load balancer"
       },
       "sub": {
        "en": "in public subnets",
        "tr": "public subnet'lerde"
       },
       "tag": "10.0.0.0/24"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "amber",
     "icon": "arrow-right-left",
     "title": {
      "en": "Public subnet",
      "tr": "Public subnet"
     },
     "items": [
      {
       "id": "nat",
       "icon": "arrow-right-left",
       "title": "NAT gateway",
       "sub": {
        "en": "outbound only for private",
        "tr": "private için sadece dışa"
       },
       "tag": {
        "en": "has an Elastic/public IP",
        "tr": "Elastic/genel IP'si var"
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
     "icon": "lock",
     "title": {
      "en": "Private subnets",
      "tr": "Private subnet'ler"
     },
     "items": [
      {
       "id": "k8s",
       "icon": "boxes",
       "title": {
        "en": "Kubernetes nodes / pods",
        "tr": "Kubernetes node'ları / pod'lar"
       },
       "sub": "10.0.16.0/20",
       "tag": {
        "en": "route 0.0.0.0/0 → NAT",
        "tr": "rota 0.0.0.0/0 → NAT"
       }
      },
      {
       "id": "db",
       "icon": "database",
       "title": {
        "en": "Databases",
        "tr": "Veritabanları"
       },
       "sub": "10.0.32.0/24",
       "tag": {
        "en": "no internet route",
        "tr": "internet rotası yok"
       }
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "purple",
     "icon": "shield",
     "title": "Security",
     "items": [
      {
       "id": "sg",
       "icon": "shield",
       "title": {
        "en": "Security groups",
        "tr": "Security group'lar"
       },
       "sub": {
        "en": "stateful, per ENI",
        "tr": "durumlu, ENI başına"
       },
       "tag": ""
      },
      {
       "id": "nacl",
       "icon": "list-x",
       "title": "NACLs",
       "sub": {
        "en": "stateless, per subnet",
        "tr": "durumsuz, subnet başına"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g5",
     "n": 5,
     "color": "slate",
     "icon": "network",
     "title": {
      "en": "Connectivity",
      "tr": "Bağlantı"
     },
     "items": [
      {
       "id": "peer",
       "icon": "link",
       "title": {
        "en": "Peering / Transit GW",
        "tr": "Peering / Transit GW"
       },
       "sub": {
        "en": "other VPCs, on-prem (VPN/DX)",
        "tr": "diğer VPC'ler, şirket içi (VPN/DX)"
       },
       "tag": ""
      },
      {
       "id": "ep",
       "icon": "plug",
       "title": {
        "en": "Private endpoints",
        "tr": "Private endpoint'ler"
       },
       "sub": {
        "en": "S3, ECR … without NAT",
        "tr": "NAT'sız S3, ECR …"
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
   "igw",
   "alb",
   "r",
   "l",
   1,
   ""
  ],
  [
   "alb",
   "k8s",
   "b",
   "t",
   2,
   "",
   {
    "via": [
     "g1",
     "g3"
    ]
   }
  ],
  [
   "k8s",
   "nat",
   "t",
   "b",
   3,
   {
    "en": "egress",
    "tr": "çıkış"
   },
   {
    "via": [
     "g3",
     "g2"
    ]
   }
  ],
  [
   "k8s",
   "db",
   "r",
   "l",
   4,
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
   "amber",
   {
    "en": "Public",
    "tr": "Public"
   }
  ],
  [
   "green",
   {
    "en": "Private",
    "tr": "Private"
   }
  ],
  [
   "purple",
   {
    "en": "Security",
    "tr": "Güvenlik"
   }
  ],
  [
   "slate",
   {
    "en": "Connect",
    "tr": "Bağlantı"
   }
  ]
 ],
 "footer": {
  "en": "💸 NAT gateway data charges add up — use VPC endpoints for S3/ECR traffic",
  "tr": "💸 NAT gateway veri ücretleri birikir; S3/ECR trafiği için VPC endpoint kullan"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
