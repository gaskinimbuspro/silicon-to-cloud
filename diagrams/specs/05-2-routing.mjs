// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "How a host or router decides where a packet goes",
  "tr": "Bir makine ya da router paketin nereye gideceğine nasıl karar verir"
 },
 "subtitle": {
  "en": "Longest-prefix match in the routing table → next hop → ARP for its MAC → send · repeat at every router",
  "tr": "Routing tablosunda en uzun önek eşleşmesi → sonraki durak → MAC'i için ARP → gönder · her router'da tekrarla"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "package",
     "title": {
      "en": "Packet",
      "tr": "Paket"
     },
     "items": [
      {
       "id": "pkt",
       "icon": "package",
       "title": "dst 10.20.5.9",
       "sub": "TTL 64",
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "table-2",
     "title": {
      "en": "Routing table",
      "tr": "Routing tablosu"
     },
     "items": [
      {
       "id": "r1",
       "icon": "list",
       "title": "10.20.5.0/24 → dev eth1",
       "sub": {
        "en": "direct, /24",
        "tr": "doğrudan, /24"
       },
       "tag": {
        "en": "longest match ✓",
        "tr": "en uzun eşleşme ✓"
       }
      },
      {
       "id": "r2",
       "icon": "list",
       "title": "10.0.0.0/8 → via 10.0.0.1",
       "sub": "/8",
       "tag": ""
      },
      {
       "id": "r3",
       "icon": "list",
       "title": "default → via 192.168.1.1",
       "sub": "/0",
       "tag": {
        "en": "everything else",
        "tr": "geri kalan her şey"
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
     "color": "amber",
     "icon": "search",
     "title": {
      "en": "Next hop",
      "tr": "Sonraki durak"
     },
     "items": [
      {
       "id": "arp",
       "icon": "search",
       "title": {
        "en": "ARP for next hop",
        "tr": "Sonraki durak için ARP"
       },
       "sub": {
        "en": "or the host itself if direct",
        "tr": "doğrudansa makinenin kendisi"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "send",
     "title": {
      "en": "Send",
      "tr": "Gönder"
     },
     "items": [
      {
       "id": "tx",
       "icon": "send",
       "title": {
        "en": "Frame out eth1",
        "tr": "eth1'den çerçeve"
       },
       "sub": {
        "en": "dst MAC = next hop",
        "tr": "hedef MAC = sonraki durak"
       },
       "tag": {
        "en": "routers: TTL − 1",
        "tr": "router'lar: TTL − 1"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "pkt",
   "r1",
   "r",
   "l",
   1,
   ""
  ],
  [
   "r1",
   "arp",
   "b",
   "t",
   2,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "arp",
   "tx",
   "r",
   "l",
   3,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Packet",
    "tr": "Paket"
   }
  ],
  [
   "purple",
   {
    "en": "Table",
    "tr": "Tablo"
   }
  ],
  [
   "amber",
   "ARP"
  ],
  [
   "green",
   {
    "en": "Out",
    "tr": "Çıkış"
   }
  ]
 ],
 "footer": {
  "en": "🗺️ IP header never changes on the way (except TTL); the Ethernet header is rewritten at every hop",
  "tr": "🗺️ IP başlığı yolda değişmez (TTL hariç); Ethernet başlığı her durakta yeniden yazılır"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
