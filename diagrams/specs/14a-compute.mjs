// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "The compute spectrum: from renting a machine to renting a function call",
  "tr": "Compute yelpazesi: makine kiralamaktan fonksiyon çağrısı kiralamaya"
 },
 "subtitle": {
  "en": "Moving right: less to manage, faster scaling, less control · moving left: more control, more work",
  "tr": "Sağa gittikçe: daha az yönetim, daha hızlı ölçekleme, daha az kontrol · sola gittikçe: daha çok kontrol, daha çok iş"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "layers",
     "title": {
      "en": "Service models",
      "tr": "Servis modelleri"
     },
     "items": [
      {
       "id": "vm",
       "icon": "server",
       "title": "VM (IaaS)",
       "sub": "EC2 · Compute Engine · Azure VM",
       "tag": {
        "en": "you patch the OS",
        "tr": "OS'u sen yamalarsın"
       }
      },
      {
       "id": "k8s",
       "icon": "boxes",
       "title": {
        "en": "Managed Kubernetes",
        "tr": "Yönetilen Kubernetes"
       },
       "sub": "EKS · GKE · AKS",
       "tag": {
        "en": "you run nodes & workloads",
        "tr": "node ve iş yükleri sende"
       }
      },
      {
       "id": "ctr",
       "icon": "container",
       "title": {
        "en": "Serverless containers",
        "tr": "Sunucusuz container"
       },
       "sub": "Fargate · Cloud Run · ACA",
       "tag": {
        "en": "no nodes",
        "tr": "node yok"
       }
      },
      {
       "id": "fn",
       "icon": "zap",
       "title": "Functions (FaaS)",
       "sub": "Lambda · Cloud Functions",
       "tag": {
        "en": "per request, ms billing",
        "tr": "istek başına, ms faturalama"
       }
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
     "color": "green",
     "icon": "refresh-cw",
     "title": {
      "en": "How a VM fleet autoscales",
      "tr": "Bir VM filosu nasıl otomatik ölçeklenir"
     },
     "items": [
      {
       "id": "img",
       "icon": "disc",
       "title": {
        "en": "Golden image",
        "tr": "Altın imaj"
       },
       "sub": "AMI · Packer",
       "tag": {
        "en": "baked, immutable",
        "tr": "pişirilmiş, değişmez"
       }
      },
      {
       "id": "lt",
       "icon": "file-cog",
       "title": {
        "en": "Launch template",
        "tr": "Launch template"
       },
       "sub": {
        "en": "type, image, user-data",
        "tr": "tip, imaj, user-data"
       },
       "tag": ""
      },
      {
       "id": "asg",
       "icon": "copy",
       "title": {
        "en": "Auto Scaling group",
        "tr": "Auto Scaling grubu"
       },
       "sub": {
        "en": "min / desired / max, multi-AZ",
        "tr": "min / istenen / max, çok AZ"
       },
       "tag": ""
      },
      {
       "id": "pol",
       "icon": "activity",
       "title": {
        "en": "Scaling policy",
        "tr": "Ölçekleme politikası"
       },
       "sub": {
        "en": "target CPU 50%, schedules",
        "tr": "hedef CPU %50, takvimler"
       },
       "tag": ""
      },
      {
       "id": "lb",
       "icon": "split",
       "title": {
        "en": "Load balancer",
        "tr": "Load balancer"
       },
       "sub": {
        "en": "health checks replace bad VMs",
        "tr": "sağlık kontrolü bozuk VM'leri değiştirir"
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
   "vm",
   "k8s",
   "r",
   "l",
   1,
   ""
  ],
  [
   "k8s",
   "ctr",
   "r",
   "l",
   2,
   ""
  ],
  [
   "ctr",
   "fn",
   "r",
   "l",
   3,
   ""
  ],
  [
   "vm",
   "img",
   "b",
   "t",
   4,
   "",
   {
    "via": [
     "g1",
     "g2"
    ],
    "dash": true
   }
  ],
  [
   "img",
   "lt",
   "r",
   "l",
   5,
   ""
  ],
  [
   "lt",
   "asg",
   "r",
   "l",
   6,
   ""
  ],
  [
   "asg",
   "pol",
   "r",
   "l",
   7,
   ""
  ],
  [
   "pol",
   "lb",
   "r",
   "l",
   8,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Models",
    "tr": "Modeller"
   }
  ],
  [
   "green",
   "Autoscaling"
  ]
 ],
 "footer": {
  "en": "🐄 Cattle, not pets: replace broken servers from an image, never repair them by hand",
  "tr": "🐄 Evcil hayvan değil sürü: bozuk sunucuyu elle tamir etme, imajdan yenisini koy"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
