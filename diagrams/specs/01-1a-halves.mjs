// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "Top half and bottom half: keeping interrupts short",
  "tr": "Üst yarı ve alt yarı: kesmeleri kısa tutmak"
 },
 "subtitle": {
  "en": "The ISR does the minimum with interrupts off; the real work runs later in a softirq or thread",
  "tr": "ISR kesmeler kapalıyken en azını yapar; asıl iş sonra bir softirq ya da thread'de çalışır"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "red",
     "icon": "zap",
     "title": {
      "en": "Top half (hard IRQ)",
      "tr": "Üst yarı (hard IRQ)"
     },
     "items": [
      {
       "id": "ack",
       "icon": "check",
       "title": {
        "en": "Acknowledge device",
        "tr": "Cihazı onayla"
       },
       "sub": {
        "en": "microseconds",
        "tr": "mikrosaniyeler"
       },
       "tag": ""
      },
      {
       "id": "copy",
       "icon": "copy",
       "title": {
        "en": "Grab the data",
        "tr": "Veriyi al"
       },
       "sub": {
        "en": "or note \"work pending\"",
        "tr": "ya da \"iş var\" diye işaretle"
       },
       "tag": ""
      },
      {
       "id": "sched",
       "icon": "calendar-clock",
       "title": {
        "en": "Schedule rest",
        "tr": "Kalanı planla"
       },
       "sub": "raise softirq / wake thread",
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
     "color": "blue",
     "icon": "clock",
     "title": {
      "en": "Bottom half",
      "tr": "Alt yarı"
     },
     "items": [
      {
       "id": "soft",
       "icon": "cpu",
       "title": "softirq / tasklet",
       "sub": {
        "en": "interrupts on",
        "tr": "kesmeler açık"
       },
       "tag": "NET_RX · BLOCK"
      },
      {
       "id": "work",
       "icon": "list-checks",
       "title": {
        "en": "workqueue / threaded IRQ",
        "tr": "workqueue / threaded IRQ"
       },
       "sub": {
        "en": "may sleep",
        "tr": "uyuyabilir"
       },
       "tag": "kworker/*"
      },
      {
       "id": "deliver",
       "icon": "send",
       "title": {
        "en": "Deliver to subsystem",
        "tr": "Alt sisteme teslim et"
       },
       "sub": {
        "en": "input event · packet · I/O done",
        "tr": "girdi olayı · paket · I/O bitti"
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
   "ack",
   "copy",
   "r",
   "l",
   1,
   ""
  ],
  [
   "copy",
   "sched",
   "r",
   "l",
   2,
   ""
  ],
  [
   "sched",
   "soft",
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
   "soft",
   "work",
   "r",
   "l",
   4,
   ""
  ],
  [
   "work",
   "deliver",
   "r",
   "l",
   5,
   ""
  ]
 ],
 "legend": [
  [
   "red",
   {
    "en": "Interrupts off",
    "tr": "Kesmeler kapalı"
   }
  ],
  [
   "blue",
   {
    "en": "Interrupts on",
    "tr": "Kesmeler açık"
   }
  ]
 ],
 "footer": {
  "en": "📊 High softirq CPU (si in top) = heavy network or disk interrupt load",
  "tr": "📊 Yüksek softirq CPU (top'ta si) = yoğun ağ ya da disk kesme yükü"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
