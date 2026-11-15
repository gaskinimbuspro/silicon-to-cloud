// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Troubleshooting a broken pod: follow the status",
  "tr": "Bozuk bir pod'da sorun giderme: durumu takip et"
 },
 "subtitle": {
  "en": "kubectl get → describe (events) → logs (--previous) → exec / debug · the status tells you which layer failed",
  "tr": "kubectl get → describe (olaylar) → logs (--previous) → exec / debug · durum hangi katmanın bozulduğunu söyler"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "amber",
     "icon": "hourglass",
     "title": "Pending",
     "items": [
      {
       "id": "p1",
       "icon": "gauge",
       "title": {
        "en": "Insufficient cpu/memory",
        "tr": "Yetersiz cpu/bellek"
       },
       "sub": {
        "en": "requests too big, no nodes",
        "tr": "request'ler büyük, node yok"
       },
       "tag": ""
      },
      {
       "id": "p2",
       "icon": "ban",
       "title": {
        "en": "Taints / affinity / PVC zone",
        "tr": "Taint / affinity / PVC zone'u"
       },
       "sub": "describe pod → Events",
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "blue",
     "icon": "download",
     "title": "ImagePullBackOff",
     "items": [
      {
       "id": "i1",
       "icon": "tag",
       "title": {
        "en": "Wrong tag / registry auth",
        "tr": "Yanlış etiket / registry yetkisi"
       },
       "sub": "imagePullSecrets · IRSA",
       "tag": ""
      },
      {
       "id": "i2",
       "icon": "gauge",
       "title": {
        "en": "Rate limits",
        "tr": "Hız limitleri"
       },
       "sub": {
        "en": "use a mirror / cache",
        "tr": "ayna / önbellek kullan"
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
     "color": "red",
     "icon": "rotate-ccw",
     "title": "CrashLoopBackOff",
     "items": [
      {
       "id": "c1",
       "icon": "scroll-text",
       "title": "logs --previous",
       "sub": {
        "en": "app error, bad config",
        "tr": "uygulama hatası, kötü config"
       },
       "tag": ""
      },
      {
       "id": "c2",
       "icon": "skull",
       "title": {
        "en": "Exit 137 = OOMKilled",
        "tr": "Çıkış 137 = OOMKilled"
       },
       "sub": {
        "en": "raise limit or fix leak",
        "tr": "limiti artır ya da sızıntıyı düzelt"
       },
       "tag": ""
      },
      {
       "id": "c3",
       "icon": "heart-pulse",
       "title": {
        "en": "Liveness too strict",
        "tr": "Liveness çok katı"
       },
       "sub": {
        "en": "killed while starting",
        "tr": "başlarken öldürülüyor"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "purple",
     "icon": "unplug",
     "title": {
      "en": "Running, not working",
      "tr": "Çalışıyor, ama çalışmıyor"
     },
     "items": [
      {
       "id": "r1",
       "icon": "check-circle",
       "title": {
        "en": "Not Ready",
        "tr": "Ready değil"
       },
       "sub": {
        "en": "readiness fails → no endpoints",
        "tr": "readiness başarısız → endpoint yok"
       },
       "tag": ""
      },
      {
       "id": "r2",
       "icon": "network",
       "title": {
        "en": "Service selector / port",
        "tr": "Service seçicisi / port"
       },
       "sub": "kubectl get endpointslices",
       "tag": ""
      },
      {
       "id": "r3",
       "icon": "terminal",
       "title": "kubectl debug",
       "sub": {
        "en": "ephemeral container with tools",
        "tr": "araçlı geçici container"
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
   "p1",
   "p2",
   "r",
   "l",
   1,
   ""
  ],
  [
   "p2",
   "i1",
   "r",
   "l",
   2,
   ""
  ],
  [
   "i1",
   "i2",
   "r",
   "l",
   3,
   ""
  ],
  [
   "i2",
   "c1",
   "b",
   "t",
   4,
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
   "c1",
   "c2",
   "r",
   "l",
   5,
   ""
  ],
  [
   "c2",
   "c3",
   "r",
   "l",
   6,
   ""
  ],
  [
   "c3",
   "r1",
   "r",
   "l",
   7,
   ""
  ],
  [
   "r1",
   "r2",
   "r",
   "l",
   8,
   ""
  ],
  [
   "r2",
   "r3",
   "r",
   "l",
   9,
   ""
  ]
 ],
 "legend": [
  [
   "amber",
   "Pending"
  ],
  [
   "blue",
   {
    "en": "Image",
    "tr": "İmaj"
   }
  ],
  [
   "red",
   "Crash"
  ],
  [
   "purple",
   {
    "en": "Network",
    "tr": "Ağ"
   }
  ]
 ],
 "footer": {
  "en": "🔎 Events are kept only ~1 hour: ship them to your logging system",
  "tr": "🔎 Olaylar sadece ~1 saat tutulur: onları log sistemine gönder"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
