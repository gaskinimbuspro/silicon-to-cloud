// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How TCP congestion control works",
  "tr": "TCP tıkanıklık kontrolü nasıl çalışır"
 },
 "subtitle": {
  "en": "cwnd = congestion window: how many bytes may be in flight before an ACK",
  "tr": "cwnd = tıkanıklık penceresi: ACK gelmeden yolda olabilecek byte miktarı"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "green",
     "icon": "trending-up",
     "title": {
      "en": "Grow",
      "tr": "Büyü"
     },
     "items": [
      {
       "id": "ss",
       "icon": "rocket",
       "title": {
        "en": "Slow start",
        "tr": "Yavaş başlangıç"
       },
       "sub": {
        "en": "cwnd doubles every RTT",
        "tr": "cwnd her RTT'de ikiye katlanır"
       },
       "tag": {
        "en": "starts at 10 segments",
        "tr": "10 segmentle başlar"
       }
      },
      {
       "id": "ca",
       "icon": "trending-up",
       "title": {
        "en": "Congestion avoidance",
        "tr": "Tıkanıklıktan kaçınma"
       },
       "sub": {
        "en": "+1 segment per RTT",
        "tr": "RTT başına +1 segment"
       },
       "tag": {
        "en": "past ssthresh",
        "tr": "ssthresh'ten sonra"
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
     "color": "red",
     "icon": "trending-down",
     "title": {
      "en": "Back off",
      "tr": "Geri çekil"
     },
     "items": [
      {
       "id": "loss",
       "icon": "triangle-alert",
       "title": {
        "en": "Loss detected",
        "tr": "Kayıp algılandı"
       },
       "sub": {
        "en": "3 dup ACKs or timeout",
        "tr": "3 tekrar ACK ya da zaman aşımı"
       },
       "tag": ""
      },
      {
       "id": "cut",
       "icon": "scissors",
       "title": {
        "en": "Cut cwnd",
        "tr": "cwnd'yi düşür"
       },
       "sub": {
        "en": "CUBIC: ×0.7",
        "tr": "CUBIC: ×0,7"
       },
       "tag": {
        "en": "then grow again",
        "tr": "sonra tekrar büyü"
       }
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "purple",
     "icon": "gauge",
     "title": "BBR",
     "items": [
      {
       "id": "bbr",
       "icon": "gauge",
       "title": {
        "en": "Model the path",
        "tr": "Yolu modelle"
       },
       "sub": {
        "en": "bottleneck bandwidth × min RTT",
        "tr": "darboğaz bant genişliği × min RTT"
       },
       "tag": {
        "en": "not loss-driven",
        "tr": "kayıba göre değil"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "ss",
   "ca",
   "r",
   "l",
   1,
   ""
  ],
  [
   "ca",
   "loss",
   "b",
   "t",
   2,
   "",
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "loss",
   "cut",
   "r",
   "l",
   3,
   ""
  ],
  [
   "cut",
   "ss",
   "t",
   "b",
   "",
   {
    "en": "repeat",
    "tr": "tekrar"
   },
   {
    "dash": true,
    "via": [
     "g2",
     "g1"
    ]
   }
  ]
 ],
 "legend": [
  [
   "green",
   {
    "en": "Grow",
    "tr": "Büyü"
   }
  ],
  [
   "red",
   {
    "en": "Back off",
    "tr": "Geri çekil"
   }
  ],
  [
   "purple",
   {
    "en": "Alternative",
    "tr": "Alternatif"
   }
  ]
 ],
 "footer": {
  "en": "📶 Throughput ≈ window / RTT: far-away servers need bigger windows",
  "tr": "📶 Throughput ≈ pencere / RTT: uzak sunucular daha büyük pencere ister"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
