// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How ARP finds a MAC address",
  "tr": "ARP bir MAC adresini nasıl bulur"
 },
 "subtitle": {
  "en": "ARP = Address Resolution Protocol · turns \"IP on my subnet\" into \"MAC to put on the frame\"",
  "tr": "ARP = Address Resolution Protocol · \"subnet'imdeki IP\"yi \"çerçeveye konacak MAC\"e çevirir"
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
      "en": "Your laptop",
      "tr": "Laptopun"
     },
     "items": [
      {
       "id": "need",
       "icon": "circle-help",
       "title": {
        "en": "Need MAC of",
        "tr": "Şunun MAC'i lazım"
       },
       "sub": "192.168.1.1",
       "tag": {
        "en": "cache miss",
        "tr": "önbellekte yok"
       }
      },
      {
       "id": "bc",
       "icon": "megaphone",
       "title": {
        "en": "Broadcast",
        "tr": "Yayın"
       },
       "sub": "ff:ff:ff:ff:ff:ff",
       "tag": {
        "en": "\"Who has .1?\"",
        "tr": "\".1 kimde?\""
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "amber",
     "icon": "network",
     "title": {
      "en": "LAN",
      "tr": "LAN"
     },
     "items": [
      {
       "id": "all",
       "icon": "users",
       "title": {
        "en": "Everyone hears it",
        "tr": "Herkes duyar"
       },
       "sub": {
        "en": "switch floods",
        "tr": "switch herkese yollar"
       },
       "tag": ""
      },
      {
       "id": "reply",
       "icon": "reply",
       "title": {
        "en": "Router replies",
        "tr": "Router cevaplar"
       },
       "sub": {
        "en": "unicast",
        "tr": "tek alıcılı"
       },
       "tag": "a4:2b:b0:…"
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
     "color": "green",
     "icon": "table-2",
     "title": {
      "en": "Result",
      "tr": "Sonuç"
     },
     "items": [
      {
       "id": "cache",
       "icon": "table-2",
       "title": {
        "en": "ARP cache",
        "tr": "ARP önbelleği"
       },
       "sub": "ip neigh",
       "tag": {
        "en": "kept ~minutes",
        "tr": "~dakikalarca tutulur"
       }
      },
      {
       "id": "send",
       "icon": "send",
       "title": {
        "en": "Send frames",
        "tr": "Çerçeveleri gönder"
       },
       "sub": {
        "en": "dst MAC = router",
        "tr": "hedef MAC = router"
       },
       "tag": "✓"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "need",
   "bc",
   "r",
   "l",
   1,
   ""
  ],
  [
   "bc",
   "all",
   "r",
   "l",
   2,
   ""
  ],
  [
   "all",
   "reply",
   "r",
   "l",
   3,
   ""
  ],
  [
   "reply",
   "cache",
   "b",
   "t",
   4,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "cache",
   "send",
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
    "en": "Sender",
    "tr": "Gönderen"
   }
  ],
  [
   "amber",
   "LAN"
  ],
  [
   "green",
   {
    "en": "Result",
    "tr": "Sonuç"
   }
  ]
 ],
 "footer": {
  "en": "🧩 ARP only works inside one subnet — beyond it, you ARP for the gateway",
  "tr": "🧩 ARP sadece tek bir subnet içinde çalışır; ötesi için gateway'in MAC'i sorulur"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
