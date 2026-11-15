// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Config and persistent storage in Kubernetes",
  "tr": "Kubernetes'te config ve kalıcı depolama"
 },
 "subtitle": {
  "en": "Configuration is injected, never baked into images · storage is claimed by pods and provisioned dynamically by CSI drivers",
  "tr": "Yapılandırma enjekte edilir, asla imaja gömülmez · depolama pod'lar tarafından talep edilir ve CSI sürücüleriyle dinamik oluşturulur"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "amber",
     "icon": "settings",
     "title": {
      "en": "Configuration",
      "tr": "Yapılandırma"
     },
     "items": [
      {
       "id": "cm",
       "icon": "file-cog",
       "title": "ConfigMap",
       "sub": {
        "en": "non-secret settings",
        "tr": "secret olmayan ayarlar"
       },
       "tag": ""
      },
      {
       "id": "sec",
       "icon": "lock",
       "title": "Secret",
       "sub": {
        "en": "base64, encrypt etcd!",
        "tr": "base64, etcd'yi şifrele!"
       },
       "tag": {
        "en": "or External Secrets",
        "tr": "ya da External Secrets"
       }
      },
      {
       "id": "inj",
       "icon": "syringe",
       "title": {
        "en": "Env vars or files",
        "tr": "Ortam değişkeni ya da dosya"
       },
       "sub": {
        "en": "files update live, env does not",
        "tr": "dosyalar canlı güncellenir, env güncellenmez"
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
     "id": "g2",
     "n": 2,
     "color": "blue",
     "icon": "hard-drive",
     "title": {
      "en": "Persistent storage",
      "tr": "Kalıcı depolama"
     },
     "items": [
      {
       "id": "pvc",
       "icon": "file-plus",
       "title": "PersistentVolumeClaim",
       "sub": {
        "en": "\"I need 50Gi, RWO\"",
        "tr": "\"50Gi lazım, RWO\""
       },
       "tag": ""
      },
      {
       "id": "sc",
       "icon": "layers",
       "title": "StorageClass",
       "sub": {
        "en": "gp3, retain/delete, WaitForFirstConsumer",
        "tr": "gp3, retain/delete, WaitForFirstConsumer"
       },
       "tag": ""
      },
      {
       "id": "csi",
       "icon": "plug",
       "title": {
        "en": "CSI driver",
        "tr": "CSI sürücüsü"
       },
       "sub": {
        "en": "creates a cloud disk",
        "tr": "bulut diski oluşturur"
       },
       "tag": "ebs.csi.aws.com"
      },
      {
       "id": "pv",
       "icon": "hard-drive",
       "title": "PersistentVolume",
       "sub": {
        "en": "bound, attached to the node, mounted",
        "tr": "bağlanır, node'a takılır, mount edilir"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "purple",
     "icon": "database",
     "title": {
      "en": "Stateful apps",
      "tr": "Durum tutan uygulamalar"
     },
     "items": [
      {
       "id": "sts",
       "icon": "database",
       "title": "StatefulSet",
       "sub": {
        "en": "stable names + one PVC per replica",
        "tr": "sabit isimler + replika başına bir PVC"
       },
       "tag": {
        "en": "or an operator",
        "tr": "ya da bir operator"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "cm",
   "sec",
   "r",
   "l",
   1,
   ""
  ],
  [
   "sec",
   "inj",
   "r",
   "l",
   2,
   ""
  ],
  [
   "inj",
   "pvc",
   "b",
   "t",
   3,
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
   "pvc",
   "sc",
   "r",
   "l",
   4,
   ""
  ],
  [
   "sc",
   "csi",
   "r",
   "l",
   5,
   ""
  ],
  [
   "csi",
   "pv",
   "r",
   "l",
   6,
   ""
  ],
  [
   "pv",
   "sts",
   "r",
   "l",
   7,
   ""
  ]
 ],
 "legend": [
  [
   "amber",
   "Config"
  ],
  [
   "blue",
   {
    "en": "Storage",
    "tr": "Depolama"
   }
  ],
  [
   "purple",
   "Stateful"
  ]
 ],
 "footer": {
  "en": "💾 A PVC lives in one zone: a pod using it can only be scheduled there",
  "tr": "💾 Bir PVC tek bir zone'da yaşar: onu kullanan pod sadece orada zamanlanabilir"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
