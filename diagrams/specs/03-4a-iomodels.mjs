// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "Three ways to wait for I/O",
  "tr": "I/O beklemenin üç yolu"
 },
 "subtitle": {
  "en": "How servers handle thousands of connections",
  "tr": "Sunucular binlerce bağlantıyı nasıl yönetir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "red",
     "icon": "pause",
     "title": {
      "en": "Blocking",
      "tr": "Bloklayan"
     },
     "items": [
      {
       "id": "b1",
       "icon": "pause",
       "title": {
        "en": "Thread per connection",
        "tr": "Bağlantı başına thread"
       },
       "sub": {
        "en": "read() sleeps until data",
        "tr": "veri gelene kadar read() uyur"
       },
       "tag": {
        "en": "simple, many threads",
        "tr": "basit, çok thread"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "green",
     "icon": "radar",
     "title": "epoll",
     "items": [
      {
       "id": "e1",
       "icon": "radar",
       "title": {
        "en": "Event loop",
        "tr": "Olay döngüsü"
       },
       "sub": {
        "en": "epoll_wait: which fds are ready?",
        "tr": "epoll_wait: hangi fd'ler hazır?"
       },
       "tag": "nginx · Node · Go netpoller"
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "purple",
     "icon": "zap",
     "title": "io_uring",
     "items": [
      {
       "id": "u1",
       "icon": "zap",
       "title": {
        "en": "Submission/completion rings",
        "tr": "Gönderim/tamamlanma ring'leri"
       },
       "sub": {
        "en": "batch I/O, few syscalls",
        "tr": "toplu I/O, az syscall"
       },
       "tag": {
        "en": "fast storage, databases",
        "tr": "hızlı depolama, veritabanları"
       }
      }
     ]
    }
   ]
  }
 ],
 "edges": [],
 "legend": [
  [
   "red",
   {
    "en": "Simple",
    "tr": "Basit"
   }
  ],
  [
   "green",
   {
    "en": "Scalable",
    "tr": "Ölçeklenebilir"
   }
  ],
  [
   "purple",
   {
    "en": "Fastest",
    "tr": "En hızlı"
   }
  ]
 ],
 "footer": {
  "en": "🔀 Go and Java virtual threads look blocking to you but use epoll underneath",
  "tr": "🔀 Go ve Java sanal thread'leri sana bloklayan gibi görünür ama altta epoll kullanır"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
