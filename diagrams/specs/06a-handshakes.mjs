// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "What goes over the wire before the first byte of HTML",
  "tr": "HTML'in ilk byte'ından önce kabloda neler gider"
 },
 "subtitle": {
  "en": "RTT = Round-Trip Time · each row costs about one round trip",
  "tr": "RTT = Round-Trip Time · her satır yaklaşık bir gidiş-dönüş"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "red",
     "icon": "handshake",
     "title": {
      "en": "TCP handshake · 1 RTT",
      "tr": "TCP el sıkışma · 1 RTT"
     },
     "items": [
      {
       "id": "syn",
       "icon": "arrow-right",
       "title": "SYN",
       "sub": {
        "en": "client → server",
        "tr": "istemci → sunucu"
       },
       "tag": "seq = x"
      },
      {
       "id": "synack",
       "icon": "arrow-left",
       "title": "SYN-ACK",
       "sub": {
        "en": "server → client",
        "tr": "sunucu → istemci"
       },
       "tag": "seq = y, ack = x+1"
      },
      {
       "id": "ack",
       "icon": "arrow-right",
       "title": "ACK",
       "sub": {
        "en": "client → server",
        "tr": "istemci → sunucu"
       },
       "tag": {
        "en": "connected",
        "tr": "bağlandı"
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
     "color": "purple",
     "icon": "lock",
     "title": {
      "en": "TLS 1.3 handshake · 1 RTT",
      "tr": "TLS 1.3 el sıkışma · 1 RTT"
     },
     "items": [
      {
       "id": "ch",
       "icon": "arrow-right",
       "title": "ClientHello",
       "sub": {
        "en": "ciphers · key share · SNI",
        "tr": "şifreler · anahtar payı · SNI"
       },
       "tag": ""
      },
      {
       "id": "sh",
       "icon": "arrow-left",
       "title": "ServerHello + Cert",
       "sub": {
        "en": "key share · certificate · Finished",
        "tr": "anahtar payı · sertifika · Finished"
       },
       "tag": {
        "en": "encrypted from here",
        "tr": "buradan itibaren şifreli"
       }
      },
      {
       "id": "fin",
       "icon": "arrow-right",
       "title": "Finished",
       "sub": {
        "en": "client verifies cert",
        "tr": "istemci sertifikayı doğrular"
       },
       "tag": {
        "en": "keys ready",
        "tr": "anahtarlar hazır"
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
     "color": "green",
     "icon": "file-text",
     "title": {
      "en": "HTTP · 1 RTT",
      "tr": "HTTP · 1 RTT"
     },
     "items": [
      {
       "id": "get",
       "icon": "arrow-right",
       "title": "GET /",
       "sub": {
        "en": "Host · headers",
        "tr": "Host · başlıklar"
       },
       "tag": ""
      },
      {
       "id": "ok",
       "icon": "arrow-left",
       "title": "200 OK",
       "sub": {
        "en": "headers + HTML",
        "tr": "başlıklar + HTML"
       },
       "tag": {
        "en": "first byte (TTFB)",
        "tr": "ilk byte (TTFB)"
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
   "synack",
   "r",
   "l",
   1,
   ""
  ],
  [
   "synack",
   "ack",
   "r",
   "l",
   2,
   ""
  ],
  [
   "ch",
   "sh",
   "r",
   "l",
   1,
   ""
  ],
  [
   "sh",
   "fin",
   "r",
   "l",
   2,
   ""
  ],
  [
   "get",
   "ok",
   "r",
   "l",
   1,
   ""
  ]
 ],
 "legend": [
  [
   "red",
   "TCP"
  ],
  [
   "purple",
   "TLS"
  ],
  [
   "green",
   "HTTP"
  ]
 ],
 "footer": {
  "en": "🚀 HTTP/3 (QUIC) merges the TCP and TLS rows; resumed sessions can skip more",
  "tr": "🚀 HTTP/3 (QUIC) TCP ve TLS satırlarını birleştirir; devam eden oturumlar daha fazlasını atlayabilir"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
