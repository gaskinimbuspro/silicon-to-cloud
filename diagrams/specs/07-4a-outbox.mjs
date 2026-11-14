// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "The transactional outbox pattern",
  "tr": "Transactional outbox deseni"
 },
 "subtitle": {
  "en": "Never \"write DB, then publish\" separately — one can fail · write both in one transaction, relay later",
  "tr": "Asla ayrı ayrı \"DB'ye yaz, sonra yayınla\" yapma; biri başarısız olabilir · ikisini tek transaction'da yaz, sonra aktar"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "database",
     "title": {
      "en": "One DB transaction",
      "tr": "Tek DB transaction'ı"
     },
     "items": [
      {
       "id": "biz",
       "icon": "table-2",
       "title": "INSERT INTO orders …",
       "sub": {
        "en": "business data",
        "tr": "iş verisi"
       },
       "tag": ""
      },
      {
       "id": "out",
       "icon": "inbox",
       "title": "INSERT INTO outbox …",
       "sub": {
        "en": "event row",
        "tr": "olay satırı"
       },
       "tag": ""
      },
      {
       "id": "cm",
       "icon": "check",
       "title": "COMMIT",
       "sub": {
        "en": "both or neither",
        "tr": "ikisi ya da hiçbiri"
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
     "color": "purple",
     "icon": "repeat",
     "title": {
      "en": "Relay",
      "tr": "Aktarıcı"
     },
     "items": [
      {
       "id": "relay",
       "icon": "repeat",
       "title": {
        "en": "Poll or CDC",
        "tr": "Poll ya da CDC"
       },
       "sub": "Debezium",
       "tag": {
        "en": "reads outbox / WAL",
        "tr": "outbox / WAL okur"
       }
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "green",
     "icon": "send",
     "title": {
      "en": "Broker",
      "tr": "Broker"
     },
     "items": [
      {
       "id": "pub",
       "icon": "send",
       "title": {
        "en": "Publish",
        "tr": "Yayınla"
       },
       "sub": {
        "en": "at-least-once",
        "tr": "en az bir kez"
       },
       "tag": {
        "en": "consumers dedupe by id",
        "tr": "tüketiciler kimliğe göre ayıklar"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "biz",
   "out",
   "r",
   "l",
   1,
   ""
  ],
  [
   "out",
   "cm",
   "r",
   "l",
   2,
   ""
  ],
  [
   "cm",
   "relay",
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
   "relay",
   "pub",
   "r",
   "l",
   5,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   "DB"
  ],
  [
   "purple",
   {
    "en": "Relay",
    "tr": "Aktarıcı"
   }
  ],
  [
   "green",
   "Broker"
  ]
 ],
 "footer": {
  "en": "🧩 Solves the dual-write problem without distributed transactions",
  "tr": "🧩 Çift yazma sorununu dağıtık transaction olmadan çözer"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
