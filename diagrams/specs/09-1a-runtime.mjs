// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "Who actually starts a container in Kubernetes",
  "tr": "Kubernetes'te bir container'ı aslında kim başlatır"
 },
 "subtitle": {
  "en": "CRI = Container Runtime Interface · OCI = Open Container Initiative",
  "tr": "CRI = Container Runtime Interface · OCI = Open Container Initiative"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "server",
     "title": "kubelet",
     "items": [
      {
       "id": "kl",
       "icon": "server",
       "title": "kubelet",
       "sub": {
        "en": "wants pod X running",
        "tr": "X pod'unun çalışmasını ister"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "plug",
     "title": "CRI",
     "items": [
      {
       "id": "cd",
       "icon": "box",
       "title": "containerd / CRI-O",
       "sub": {
        "en": "pull image, create sandbox",
        "tr": "imaj çek, sandbox oluştur"
       },
       "tag": {
        "en": "CNI sets up network",
        "tr": "ağı CNI kurar"
       }
      },
      {
       "id": "shim",
       "icon": "link",
       "title": "containerd-shim",
       "sub": {
        "en": "one per pod, keeps it alive",
        "tr": "pod başına bir, onu ayakta tutar"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "green",
     "icon": "cpu",
     "title": "OCI runtime",
     "items": [
      {
       "id": "runc",
       "icon": "cpu",
       "title": "runc / crun",
       "sub": {
        "en": "creates namespaces, cgroups, execs",
        "tr": "namespace, cgroup oluşturur, exec eder"
       },
       "tag": {
        "en": "then exits",
        "tr": "sonra çıkar"
       }
      },
      {
       "id": "proc",
       "icon": "play",
       "title": {
        "en": "Your process",
        "tr": "Senin process'in"
       },
       "sub": "PID 1",
       "tag": ""
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "kl",
   "cd",
   "r",
   "l",
   1,
   "gRPC"
  ],
  [
   "cd",
   "shim",
   "r",
   "l",
   2,
   ""
  ],
  [
   "shim",
   "runc",
   "r",
   "l",
   3,
   ""
  ],
  [
   "runc",
   "proc",
   "r",
   "l",
   4,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   "kubelet"
  ],
  [
   "purple",
   "CRI"
  ],
  [
   "green",
   "OCI"
  ]
 ],
 "footer": {
  "en": "🐳 Docker is not needed on nodes since dockershim removal (1.24); images built by Docker run anywhere",
  "tr": "🐳 dockershim'in kaldırılmasından (1.24) beri node'larda Docker gerekmez; Docker ile üretilen imajlar her yerde çalışır"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
