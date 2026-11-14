// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Why Kubernetes clusters waste money",
  "tr": "Kubernetes cluster'ları neden para israf eder"
 },
 "subtitle": {
  "en": "You pay for nodes · the scheduler packs by requests · usage is usually far below requests",
  "tr": "Node'lara ödersin · zamanlayıcı request'lere göre yerleştirir · kullanım genelde request'lerin çok altındadır"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "red",
     "icon": "server",
     "title": {
      "en": "A typical node",
      "tr": "Tipik bir node"
     },
     "items": [
      {
       "id": "cap",
       "icon": "server",
       "title": {
        "en": "Node capacity",
        "tr": "Node kapasitesi"
       },
       "sub": "16 vCPU · 64 GB",
       "tag": {
        "en": "100% of the price",
        "tr": "fiyatın %100'ü"
       }
      },
      {
       "id": "req",
       "icon": "list-checks",
       "title": {
        "en": "Requested by pods",
        "tr": "Pod'ların istediği"
       },
       "sub": "11 vCPU · 40 GB",
       "tag": {
        "en": "what blocks scheduling",
        "tr": "zamanlamayı bloklayan"
       }
      },
      {
       "id": "use",
       "icon": "activity",
       "title": {
        "en": "Actually used",
        "tr": "Gerçekten kullanılan"
       },
       "sub": "3 vCPU · 18 GB",
       "tag": {
        "en": "~20–30% is common",
        "tr": "~%20–30 yaygın"
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
     "icon": "wrench",
     "title": {
      "en": "Fixes",
      "tr": "Çözümler"
     },
     "items": [
      {
       "id": "f1",
       "icon": "ruler",
       "title": {
        "en": "Right-size requests",
        "tr": "Request'leri doğru boyutla"
       },
       "sub": {
        "en": "from p95 usage",
        "tr": "p95 kullanımdan"
       },
       "tag": ""
      },
      {
       "id": "f2",
       "icon": "boxes",
       "title": {
        "en": "Bin-pack & consolidate",
        "tr": "Sıkıştır ve birleştir"
       },
       "sub": {
        "en": "fewer, fuller nodes",
        "tr": "daha az, daha dolu node"
       },
       "tag": "Karpenter"
      },
      {
       "id": "f3",
       "icon": "tag",
       "title": {
        "en": "Spot for stateless",
        "tr": "Durumsuzlar için spot"
       },
       "sub": {
        "en": "with PDBs + spread",
        "tr": "PDB + yayma ile"
       },
       "tag": ""
      },
      {
       "id": "f4",
       "icon": "moon",
       "title": {
        "en": "Scale dev to zero at night",
        "tr": "Dev'i gece sıfıra ölçekle"
       },
       "sub": "",
       "tag": ""
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "cap",
   "req",
   "r",
   "l",
   1,
   ""
  ],
  [
   "req",
   "use",
   "r",
   "l",
   2,
   ""
  ],
  [
   "use",
   "f1",
   "b",
   "t",
   3,
   "",
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "f1",
   "f2",
   "r",
   "l",
   4,
   ""
  ],
  [
   "f2",
   "f3",
   "r",
   "l",
   5,
   ""
  ],
  [
   "f3",
   "f4",
   "r",
   "l",
   6,
   ""
  ]
 ],
 "legend": [
  [
   "red",
   {
    "en": "Waste",
    "tr": "İsraf"
   }
  ],
  [
   "green",
   {
    "en": "Fix",
    "tr": "Çözüm"
   }
  ]
 ],
 "footer": {
  "en": "📏 Efficiency = used / requested and requested / allocatable — track both per namespace",
  "tr": "📏 Verimlilik = kullanılan / istenen ve istenen / tahsis edilebilir; ikisini de namespace başına izle"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
