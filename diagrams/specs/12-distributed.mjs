// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Why distributed systems are hard",
  "tr": "Dağıtık sistemler neden zor"
 },
 "subtitle": {
  "en": "Many machines, one illusion of a single system — over a network that delays, drops and partitions",
  "tr": "Çok sayıda makine, tek bir sistem yanılsaması: geciktiren, düşüren ve bölünen bir ağ üzerinden"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "red",
     "icon": "alert-triangle",
     "title": {
      "en": "What goes wrong",
      "tr": "Neler ters gider"
     },
     "items": [
      {
       "id": "lat",
       "icon": "timer",
       "title": {
        "en": "Latency & timeouts",
        "tr": "Gecikme ve zaman aşımları"
       },
       "sub": {
        "en": "slow ≠ dead, but looks the same",
        "tr": "yavaş ≠ ölü, ama aynı görünür"
       },
       "tag": ""
      },
      {
       "id": "part",
       "icon": "unplug",
       "title": {
        "en": "Partitions",
        "tr": "Bölünmeler"
       },
       "sub": {
        "en": "nodes can't talk, both alive",
        "tr": "node'lar konuşamaz, ikisi de canlı"
       },
       "tag": ""
      },
      {
       "id": "clock",
       "icon": "clock",
       "title": {
        "en": "Clocks drift",
        "tr": "Saatler kayar"
       },
       "sub": {
        "en": "no global \"now\"",
        "tr": "global bir \"şimdi\" yok"
       },
       "tag": ""
      },
      {
       "id": "crash",
       "icon": "skull",
       "title": {
        "en": "Partial failure",
        "tr": "Kısmi hata"
       },
       "sub": {
        "en": "some nodes die mid-operation",
        "tr": "bazı node'lar işlem ortasında ölür"
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
     "icon": "copy",
     "title": {
      "en": "Replication",
      "tr": "Replikasyon"
     },
     "items": [
      {
       "id": "rep",
       "icon": "copy",
       "title": {
        "en": "Copies on many nodes",
        "tr": "Çok node'da kopyalar"
       },
       "sub": {
        "en": "availability + read scaling",
        "tr": "erişilebilirlik + okuma ölçekleme"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "purple",
     "icon": "vote",
     "title": {
      "en": "Consensus",
      "tr": "Uzlaşı"
     },
     "items": [
      {
       "id": "raft",
       "icon": "vote",
       "title": "Raft / Paxos",
       "sub": {
        "en": "majority agrees on one order",
        "tr": "çoğunluk tek bir sırada anlaşır"
       },
       "tag": "etcd · Consul · Kafka KRaft"
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "shield",
     "title": {
      "en": "Resilience",
      "tr": "Dayanıklılık"
     },
     "items": [
      {
       "id": "res",
       "icon": "shield",
       "title": {
        "en": "Timeouts, retries, idempotency",
        "tr": "Zaman aşımı, yeniden deneme, idempotency"
       },
       "sub": {
        "en": "circuit breakers, backpressure",
        "tr": "circuit breaker, geri basınç"
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
   "lat",
   "part",
   "r",
   "l",
   1,
   ""
  ],
  [
   "part",
   "clock",
   "r",
   "l",
   2,
   ""
  ],
  [
   "clock",
   "crash",
   "r",
   "l",
   3,
   ""
  ],
  [
   "crash",
   "rep",
   "b",
   "t",
   4,
   "",
   {
    "via": [
     "g1",
     "g2"
    ]
   }
  ],
  [
   "rep",
   "raft",
   "r",
   "l",
   5,
   ""
  ],
  [
   "raft",
   "res",
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
    "en": "Failures",
    "tr": "Hatalar"
   }
  ],
  [
   "blue",
   {
    "en": "Replication",
    "tr": "Replikasyon"
   }
  ],
  [
   "purple",
   {
    "en": "Consensus",
    "tr": "Uzlaşı"
   }
  ],
  [
   "green",
   {
    "en": "Resilience",
    "tr": "Dayanıklılık"
   }
  ]
 ],
 "footer": {
  "en": "📜 The network is not reliable, latency is not zero, clocks are not in sync — design for it",
  "tr": "📜 Ağ güvenilir değil, gecikme sıfır değil, saatler senkron değil; buna göre tasarla"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
