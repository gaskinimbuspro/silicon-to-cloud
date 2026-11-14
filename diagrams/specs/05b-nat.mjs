// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How NAT lets private IPs reach the internet",
  "tr": "NAT özel IP'lerin internete çıkmasını nasıl sağlar"
 },
 "subtitle": {
  "en": "NAT = Network Address Translation · conntrack remembers each connection so replies find their way back",
  "tr": "NAT = Network Address Translation · conntrack her bağlantıyı hatırlar, cevaplar geri yolu bulur"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "laptop",
     "title": {
      "en": "Outgoing",
      "tr": "Giden"
     },
     "items": [
      {
       "id": "out",
       "icon": "send",
       "title": {
        "en": "Laptop sends",
        "tr": "Laptop gönderir"
       },
       "sub": "192.168.1.23:51544",
       "tag": {
        "en": "→ 93.184.215.14:443",
        "tr": "→ 93.184.215.14:443"
       }
      },
      {
       "id": "rw",
       "icon": "repeat",
       "title": {
        "en": "Router rewrites",
        "tr": "Router değiştirir"
       },
       "sub": {
        "en": "source → public IP:port",
        "tr": "kaynak → genel IP:port"
       },
       "tag": "85.105.1.7:40001"
      },
      {
       "id": "ct",
       "icon": "table-2",
       "title": "conntrack",
       "sub": {
        "en": "remember mapping",
        "tr": "eşleşmeyi hatırla"
       },
       "tag": "40001 ↔ .23:51544"
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
     "icon": "globe",
     "title": {
      "en": "Reply",
      "tr": "Cevap"
     },
     "items": [
      {
       "id": "srv",
       "icon": "server",
       "title": {
        "en": "Server replies",
        "tr": "Sunucu cevaplar"
       },
       "sub": {
        "en": "to 85.105.1.7:40001",
        "tr": "85.105.1.7:40001'e"
       },
       "tag": ""
      },
      {
       "id": "look",
       "icon": "search",
       "title": {
        "en": "Router looks up",
        "tr": "Router bakar"
       },
       "sub": "conntrack",
       "tag": {
        "en": "found ✓",
        "tr": "bulundu ✓"
       }
      },
      {
       "id": "back",
       "icon": "laptop",
       "title": {
        "en": "Rewrite back",
        "tr": "Geri çevir"
       },
       "sub": {
        "en": "→ 192.168.1.23:51544",
        "tr": "→ 192.168.1.23:51544"
       },
       "tag": {
        "en": "laptop gets it",
        "tr": "laptop alır"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "out",
   "rw",
   "r",
   "l",
   1,
   ""
  ],
  [
   "rw",
   "ct",
   "r",
   "l",
   2,
   ""
  ],
  [
   "ct",
   "srv",
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
   "srv",
   "look",
   "r",
   "l",
   4,
   ""
  ],
  [
   "look",
   "back",
   "r",
   "l",
   5,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Outbound",
    "tr": "Giden"
   }
  ],
  [
   "green",
   {
    "en": "Inbound",
    "tr": "Gelen"
   }
  ]
 ],
 "footer": {
  "en": "☁️ Same idea as a cloud NAT gateway — and why inbound needs port forwarding",
  "tr": "☁️ Bulut NAT gateway'iyle aynı fikir; gelen bağlantı için port yönlendirme gerekmesinin sebebi"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
