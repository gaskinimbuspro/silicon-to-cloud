// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "How Raft keeps replicas in agreement",
  "tr": "Raft replikaları nasıl uzlaşı içinde tutar"
 },
 "subtitle": {
  "en": "One leader orders all writes · a write is committed when a majority has it · lose the leader → elect a new one",
  "tr": "Tek lider tüm yazmaları sıralar · yazma çoğunlukta olunca commit edilir · lider kaybolursa → yenisi seçilir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "purple",
     "icon": "crown",
     "title": {
      "en": "Normal operation",
      "tr": "Normal işleyiş"
     },
     "items": [
      {
       "id": "cl",
       "icon": "send",
       "title": {
        "en": "Client write",
        "tr": "İstemci yazması"
       },
       "sub": "PUT /key",
       "tag": {
        "en": "only to the leader",
        "tr": "sadece lidere"
       }
      },
      {
       "id": "lead",
       "icon": "crown",
       "title": {
        "en": "Leader appends",
        "tr": "Lider ekler"
       },
       "sub": {
        "en": "log entry #42, term 7",
        "tr": "log girdisi #42, dönem 7"
       },
       "tag": ""
      },
      {
       "id": "repl",
       "icon": "copy",
       "title": {
        "en": "Replicate",
        "tr": "Replike et"
       },
       "sub": {
        "en": "AppendEntries to followers",
        "tr": "takipçilere AppendEntries"
       },
       "tag": ""
      },
      {
       "id": "maj",
       "icon": "check-check",
       "title": {
        "en": "Majority acks → commit",
        "tr": "Çoğunluk onaylar → commit"
       },
       "sub": {
        "en": "2 of 3, 3 of 5",
        "tr": "3'te 2, 5'te 3"
       },
       "tag": {
        "en": "then reply OK",
        "tr": "sonra OK dön"
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
     "icon": "refresh-cw",
     "title": {
      "en": "Leader failure",
      "tr": "Lider hatası"
     },
     "items": [
      {
       "id": "hb",
       "icon": "heart-pulse",
       "title": {
        "en": "Heartbeats stop",
        "tr": "Heartbeat'ler durur"
       },
       "sub": {
        "en": "election timeout 150–300 ms",
        "tr": "seçim zaman aşımı 150–300 ms"
       },
       "tag": ""
      },
      {
       "id": "cand",
       "icon": "vote",
       "title": {
        "en": "Follower becomes candidate",
        "tr": "Takipçi aday olur"
       },
       "sub": {
        "en": "term 8, asks for votes",
        "tr": "dönem 8, oy ister"
       },
       "tag": ""
      },
      {
       "id": "new",
       "icon": "crown",
       "title": {
        "en": "Majority votes → new leader",
        "tr": "Çoğunluk oy verir → yeni lider"
       },
       "sub": {
        "en": "only nodes with the latest log can win",
        "tr": "sadece en güncel log'a sahip olan kazanabilir"
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
   "cl",
   "lead",
   "r",
   "l",
   1,
   ""
  ],
  [
   "lead",
   "repl",
   "r",
   "l",
   2,
   ""
  ],
  [
   "repl",
   "maj",
   "r",
   "l",
   3,
   ""
  ],
  [
   "maj",
   "hb",
   "b",
   "t",
   "",
   {
    "en": "later…",
    "tr": "sonra…"
   },
   {
    "via": [
     "g1",
     "g2"
    ],
    "dash": true
   }
  ],
  [
   "hb",
   "cand",
   "r",
   "l",
   5,
   ""
  ],
  [
   "cand",
   "new",
   "r",
   "l",
   6,
   ""
  ]
 ],
 "legend": [
  [
   "purple",
   {
    "en": "Normal",
    "tr": "Normal"
   }
  ],
  [
   "red",
   {
    "en": "Failover",
    "tr": "Failover"
   }
  ]
 ],
 "footer": {
  "en": "🧮 3 nodes tolerate 1 failure, 5 tolerate 2 — that's why etcd clusters have odd sizes",
  "tr": "🧮 3 node 1 hatayı, 5 node 2 hatayı tolere eder; etcd cluster'larının tek sayılı olmasının sebebi bu"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
