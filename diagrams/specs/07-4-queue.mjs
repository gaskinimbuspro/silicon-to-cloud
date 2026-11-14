// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "How a message queue / log decouples services",
  "tr": "Bir mesaj kuyruğu / log servisleri nasıl ayırır"
 },
 "subtitle": {
  "en": "Producers write · the broker stores durably · consumers read at their own pace and acknowledge",
  "tr": "Üreticiler yazar · broker kalıcı saklar · tüketiciler kendi hızlarında okur ve onaylar"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "send",
     "title": {
      "en": "Producers",
      "tr": "Üreticiler"
     },
     "items": [
      {
       "id": "p",
       "icon": "send",
       "title": {
        "en": "Publish event",
        "tr": "Olay yayınla"
       },
       "sub": "order.created",
       "tag": {
        "en": "key = order_id",
        "tr": "anahtar = order_id"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "server",
     "title": {
      "en": "Broker",
      "tr": "Broker"
     },
     "items": [
      {
       "id": "topic",
       "icon": "layers",
       "title": {
        "en": "Topic / queue",
        "tr": "Topic / kuyruk"
       },
       "sub": {
        "en": "partitions 0..N",
        "tr": "partition'lar 0..N"
       },
       "tag": {
        "en": "ordered per key",
        "tr": "anahtar başına sıralı"
       }
      },
      {
       "id": "dur",
       "icon": "hard-drive",
       "title": {
        "en": "Durable storage",
        "tr": "Kalıcı depolama"
       },
       "sub": {
        "en": "replicated, retained",
        "tr": "replike, saklanır"
       },
       "tag": "Kafka · RabbitMQ · SQS"
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
     "icon": "users",
     "title": {
      "en": "Consumer group",
      "tr": "Tüketici grubu"
     },
     "items": [
      {
       "id": "c",
       "icon": "cpu",
       "title": {
        "en": "Workers",
        "tr": "Worker'lar"
       },
       "sub": {
        "en": "1 partition → 1 worker",
        "tr": "1 partition → 1 worker"
       },
       "tag": {
        "en": "scale = partitions",
        "tr": "ölçek = partition"
       }
      },
      {
       "id": "ack",
       "icon": "check",
       "title": {
        "en": "Process + ack / commit offset",
        "tr": "İşle + ack / offset commit"
       },
       "sub": {
        "en": "at-least-once",
        "tr": "en az bir kez"
       },
       "tag": {
        "en": "be idempotent!",
        "tr": "idempotent ol!"
       }
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "red",
     "icon": "alert-triangle",
     "title": {
      "en": "Failures",
      "tr": "Hatalar"
     },
     "items": [
      {
       "id": "retry",
       "icon": "rotate-ccw",
       "title": {
        "en": "Retry with backoff",
        "tr": "Backoff ile yeniden dene"
       },
       "sub": "",
       "tag": ""
      },
      {
       "id": "dlq",
       "icon": "archive",
       "title": "DLQ",
       "sub": {
        "en": "dead-letter queue",
        "tr": "ölü mektup kuyruğu"
       },
       "tag": {
        "en": "inspect, replay",
        "tr": "incele, yeniden oynat"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "p",
   "topic",
   "r",
   "l",
   1,
   ""
  ],
  [
   "topic",
   "dur",
   "r",
   "l",
   2,
   ""
  ],
  [
   "dur",
   "c",
   "b",
   "t",
   3,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "c",
   "ack",
   "r",
   "l",
   4,
   ""
  ],
  [
   "ack",
   "retry",
   "r",
   "l",
   5,
   {
    "en": "error",
    "tr": "hata"
   }
  ],
  [
   "retry",
   "dlq",
   "r",
   "l",
   6,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Produce",
    "tr": "Üret"
   }
  ],
  [
   "purple",
   "Broker"
  ],
  [
   "green",
   {
    "en": "Consume",
    "tr": "Tüket"
   }
  ],
  [
   "red",
   {
    "en": "Failure",
    "tr": "Hata"
   }
  ]
 ],
 "footer": {
  "en": "📏 Consumer lag (messages waiting) is the metric to alert and autoscale on (KEDA)",
  "tr": "📏 Tüketici gecikmesi (bekleyen mesajlar) alarm ve otomatik ölçekleme metriğidir (KEDA)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
