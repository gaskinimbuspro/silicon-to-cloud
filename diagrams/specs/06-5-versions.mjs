// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "HTTP/1.1 vs HTTP/2 vs HTTP/3 on the wire",
  "tr": "Kabloda HTTP/1.1, HTTP/2 ve HTTP/3"
 },
 "subtitle": {
  "en": "Same requests, different transport · HOL = head-of-line blocking",
  "tr": "Aynı istekler, farklı taşıma · HOL = head-of-line blocking (sıra başı tıkanması)"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "red",
     "icon": "file-text",
     "title": "HTTP/1.1",
     "items": [
      {
       "id": "h1a",
       "icon": "cable",
       "title": {
        "en": "~6 TCP connections",
        "tr": "~6 TCP bağlantısı"
       },
       "sub": {
        "en": "per origin",
        "tr": "origin başına"
       },
       "tag": ""
      },
      {
       "id": "h1b",
       "icon": "list-ordered",
       "title": {
        "en": "One request at a time",
        "tr": "Aynı anda tek istek"
       },
       "sub": {
        "en": "per connection",
        "tr": "bağlantı başına"
       },
       "tag": {
        "en": "HOL at HTTP level",
        "tr": "HTTP düzeyinde HOL"
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
     "color": "amber",
     "icon": "layers",
     "title": "HTTP/2",
     "items": [
      {
       "id": "h2a",
       "icon": "cable",
       "title": {
        "en": "1 TCP connection",
        "tr": "1 TCP bağlantısı"
       },
       "sub": "TLS + ALPN h2",
       "tag": ""
      },
      {
       "id": "h2b",
       "icon": "git-branch",
       "title": {
        "en": "Many streams",
        "tr": "Çok akış"
       },
       "sub": {
        "en": "binary frames, interleaved",
        "tr": "ikili çerçeveler, iç içe"
       },
       "tag": "HPACK"
      },
      {
       "id": "h2c",
       "icon": "triangle-alert",
       "title": {
        "en": "1 lost packet",
        "tr": "1 kayıp paket"
       },
       "sub": {
        "en": "stalls ALL streams",
        "tr": "TÜM akışları durdurur"
       },
       "tag": {
        "en": "HOL at TCP level",
        "tr": "TCP düzeyinde HOL"
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
     "icon": "zap",
     "title": "HTTP/3",
     "items": [
      {
       "id": "h3a",
       "icon": "radio",
       "title": "QUIC over UDP",
       "sub": {
        "en": "TLS 1.3 built in",
        "tr": "TLS 1.3 içinde"
       },
       "tag": {
        "en": "1 RTT, 0-RTT resume",
        "tr": "1 RTT, 0-RTT devam"
       }
      },
      {
       "id": "h3b",
       "icon": "git-branch",
       "title": {
        "en": "Independent streams",
        "tr": "Bağımsız akışlar"
       },
       "sub": {
        "en": "loss affects 1 stream",
        "tr": "kayıp tek akışı etkiler"
       },
       "tag": "QPACK"
      },
      {
       "id": "h3c",
       "icon": "smartphone",
       "title": {
        "en": "Connection IDs",
        "tr": "Bağlantı kimlikleri"
       },
       "sub": {
        "en": "survive Wi-Fi → 5G",
        "tr": "Wi-Fi → 5G geçişinde yaşar"
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
   "h1a",
   "h1b",
   "r",
   "l",
   1,
   ""
  ],
  [
   "h2a",
   "h2b",
   "r",
   "l",
   1,
   ""
  ],
  [
   "h2b",
   "h2c",
   "r",
   "l",
   2,
   ""
  ],
  [
   "h3a",
   "h3b",
   "r",
   "l",
   1,
   ""
  ],
  [
   "h3b",
   "h3c",
   "r",
   "l",
   2,
   ""
  ]
 ],
 "legend": [
  [
   "red",
   "HTTP/1.1"
  ],
  [
   "amber",
   "HTTP/2"
  ],
  [
   "green",
   "HTTP/3"
  ]
 ],
 "footer": {
  "en": "📣 Servers advertise h3 with the Alt-Svc header or an HTTPS DNS record",
  "tr": "📣 Sunucular h3'ü Alt-Svc header'ı ya da HTTPS DNS kaydıyla duyurur"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
