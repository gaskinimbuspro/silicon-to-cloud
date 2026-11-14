// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "The life of a TCP connection",
  "tr": "Bir TCP bağlantısının hayatı"
 },
 "subtitle": {
  "en": "Open (3-way handshake) → transfer (sequence numbers + ACKs) → close (FIN, TIME_WAIT)",
  "tr": "Aç (3 adımlı el sıkışma) → aktar (sıra numaraları + ACK) → kapat (FIN, TIME_WAIT)"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "handshake",
     "title": {
      "en": "Open · 1 RTT",
      "tr": "Açılış · 1 RTT"
     },
     "items": [
      {
       "id": "syn",
       "icon": "arrow-right",
       "title": "SYN",
       "sub": "seq=x",
       "tag": "SYN_SENT"
      },
      {
       "id": "sa",
       "icon": "arrow-left",
       "title": "SYN-ACK",
       "sub": "seq=y ack=x+1",
       "tag": "SYN_RECV"
      },
      {
       "id": "ack",
       "icon": "arrow-right",
       "title": "ACK",
       "sub": "ack=y+1",
       "tag": "ESTABLISHED"
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
     "icon": "arrow-left-right",
     "title": {
      "en": "Transfer",
      "tr": "Aktarım"
     },
     "items": [
      {
       "id": "seg",
       "icon": "package",
       "title": {
        "en": "Segments",
        "tr": "Segmentler"
       },
       "sub": {
        "en": "seq = byte offset",
        "tr": "seq = byte konumu"
       },
       "tag": "≤ MSS 1460 B"
      },
      {
       "id": "acks",
       "icon": "check-check",
       "title": {
        "en": "ACKs",
        "tr": "ACK'ler"
       },
       "sub": {
        "en": "\"got up to byte N\"",
        "tr": "\"N. byte'a kadar aldım\""
       },
       "tag": {
        "en": "window = free buffer",
        "tr": "pencere = boş tampon"
       }
      },
      {
       "id": "rtx",
       "icon": "rotate-ccw",
       "title": {
        "en": "Retransmit",
        "tr": "Yeniden gönder"
       },
       "sub": {
        "en": "no ACK in time / 3 dup ACKs",
        "tr": "zamanında ACK yok / 3 tekrar ACK"
       },
       "tag": {
        "en": "loss → slow down",
        "tr": "kayıp → yavaşla"
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
     "color": "red",
     "icon": "x-circle",
     "title": {
      "en": "Close",
      "tr": "Kapanış"
     },
     "items": [
      {
       "id": "fin",
       "icon": "arrow-right",
       "title": "FIN",
       "sub": {
        "en": "\"I'm done sending\"",
        "tr": "\"göndermem bitti\""
       },
       "tag": "FIN_WAIT"
      },
      {
       "id": "fin2",
       "icon": "arrow-left",
       "title": "FIN + ACK",
       "sub": {
        "en": "other side done too",
        "tr": "karşı taraf da bitti"
       },
       "tag": "CLOSE_WAIT → LAST_ACK"
      },
      {
       "id": "tw",
       "icon": "timer",
       "title": "TIME_WAIT",
       "sub": {
        "en": "closer waits 2×MSL",
        "tr": "kapatan 2×MSL bekler"
       },
       "tag": {
        "en": "~60 s on Linux",
        "tr": "Linux'ta ~60 sn"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "syn",
   "sa",
   "r",
   "l",
   1,
   ""
  ],
  [
   "sa",
   "ack",
   "r",
   "l",
   2,
   ""
  ],
  [
   "ack",
   "seg",
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
   "seg",
   "acks",
   "r",
   "l",
   4,
   ""
  ],
  [
   "acks",
   "rtx",
   "r",
   "l",
   5,
   ""
  ],
  [
   "rtx",
   "fin",
   "b",
   "t",
   6,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "fin",
   "fin2",
   "r",
   "l",
   7,
   ""
  ],
  [
   "fin2",
   "tw",
   "r",
   "l",
   8,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Open",
    "tr": "Açılış"
   }
  ],
  [
   "green",
   {
    "en": "Transfer",
    "tr": "Aktarım"
   }
  ],
  [
   "red",
   {
    "en": "Close",
    "tr": "Kapanış"
   }
  ]
 ],
 "footer": {
  "en": "🧯 Many CLOSE_WAIT = your app forgets to close sockets · many TIME_WAIT = no connection reuse",
  "tr": "🧯 Çok CLOSE_WAIT = uygulama soketleri kapatmayı unutuyor · çok TIME_WAIT = bağlantılar yeniden kullanılmıyor"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
