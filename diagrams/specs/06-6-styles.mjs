// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "API styles on top of HTTP",
  "tr": "HTTP üzerinde API stilleri"
 },
 "subtitle": {
  "en": "Same transport, different contracts",
  "tr": "Aynı taşıma, farklı sözleşmeler"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "braces",
     "title": "REST / JSON",
     "items": [
      {
       "id": "r1",
       "icon": "file-json",
       "title": {
        "en": "Resources + verbs",
        "tr": "Kaynaklar + fiiller"
       },
       "sub": "GET /orders/42",
       "tag": "OpenAPI"
      },
      {
       "id": "r2",
       "icon": "globe",
       "title": {
        "en": "Best for",
        "tr": "En iyi olduğu yer"
       },
       "sub": {
        "en": "public APIs, browsers",
        "tr": "açık API'ler, tarayıcılar"
       },
       "tag": {
        "en": "cacheable",
        "tr": "önbelleğe alınabilir"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "cpu",
     "title": "gRPC",
     "items": [
      {
       "id": "g1n",
       "icon": "file-code",
       "title": {
        "en": "Protobuf contract",
        "tr": "Protobuf sözleşmesi"
       },
       "sub": "rpc GetOrder(Id)",
       "tag": {
        "en": "code generated",
        "tr": "kod üretilir"
       }
      },
      {
       "id": "g2n",
       "icon": "server",
       "title": {
        "en": "Best for",
        "tr": "En iyi olduğu yer"
       },
       "sub": {
        "en": "service ↔ service",
        "tr": "servis ↔ servis"
       },
       "tag": {
        "en": "HTTP/2, streaming",
        "tr": "HTTP/2, streaming"
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
     "icon": "share-2",
     "title": "GraphQL",
     "items": [
      {
       "id": "q1",
       "icon": "search",
       "title": "POST /graphql",
       "sub": {
        "en": "client picks fields",
        "tr": "alanları istemci seçer"
       },
       "tag": {
        "en": "one schema",
        "tr": "tek şema"
       }
      },
      {
       "id": "q2",
       "icon": "smartphone",
       "title": {
        "en": "Best for",
        "tr": "En iyi olduğu yer"
       },
       "sub": {
        "en": "many UIs, nested data",
        "tr": "çok arayüz, iç içe veri"
       },
       "tag": {
        "en": "harder to cache",
        "tr": "önbelleklemesi zor"
       }
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "radio",
     "title": "WebSocket / SSE",
     "items": [
      {
       "id": "w1",
       "icon": "arrow-left-right",
       "title": {
        "en": "Long-lived connection",
        "tr": "Uzun ömürlü bağlantı"
       },
       "sub": "Upgrade: websocket / text/event-stream",
       "tag": ""
      },
      {
       "id": "w2",
       "icon": "message-square",
       "title": {
        "en": "Best for",
        "tr": "En iyi olduğu yer"
       },
       "sub": {
        "en": "live updates, chat, LLM streaming",
        "tr": "canlı güncelleme, sohbet, LLM akışı"
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
   "r1",
   "r2",
   "r",
   "l",
   1,
   ""
  ],
  [
   "g1n",
   "g2n",
   "r",
   "l",
   1,
   ""
  ],
  [
   "q1",
   "q2",
   "r",
   "l",
   1,
   ""
  ],
  [
   "w1",
   "w2",
   "r",
   "l",
   1,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   "REST"
  ],
  [
   "purple",
   "gRPC"
  ],
  [
   "amber",
   "GraphQL"
  ],
  [
   "green",
   {
    "en": "Streaming",
    "tr": "Akış"
   }
  ]
 ],
 "footer": {
  "en": "🤝 Whatever the style: idempotency, versioning, pagination and good status codes",
  "tr": "🤝 Stil ne olursa olsun: idempotency, sürümleme, sayfalama ve doğru durum kodları"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
