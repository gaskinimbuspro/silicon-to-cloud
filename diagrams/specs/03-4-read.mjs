// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "The path of a read() call",
  "tr": "Bir read() çağrısının yolu"
 },
 "subtitle": {
  "en": "VFS finds the file · page cache answers hits from RAM · misses go through the filesystem and block layer to the device",
  "tr": "VFS dosyayı bulur · page cache isabetleri RAM'den cevaplar · ıskalar dosya sistemi ve blok katmanından cihaza gider"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "app-window",
     "title": {
      "en": "User space",
      "tr": "User space"
     },
     "items": [
      {
       "id": "app",
       "icon": "code",
       "title": "read(fd, buf, 4096)",
       "sub": {
        "en": "or Python open().read()",
        "tr": "ya da Python open().read()"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "shield",
     "title": {
      "en": "Kernel",
      "tr": "Kernel"
     },
     "items": [
      {
       "id": "vfs",
       "icon": "folder-tree",
       "title": "VFS",
       "sub": {
        "en": "fd → file → inode",
        "tr": "fd → file → inode"
       },
       "tag": {
        "en": "one API for all FS",
        "tr": "tüm FS için tek API"
       }
      },
      {
       "id": "pc",
       "icon": "memory-stick",
       "title": {
        "en": "Page cache",
        "tr": "Page cache"
       },
       "sub": {
        "en": "hit → copy to buf",
        "tr": "isabet → buf'a kopyala"
       },
       "tag": "~µs"
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
     "icon": "hard-drive",
     "title": {
      "en": "On a miss",
      "tr": "Iskada"
     },
     "items": [
      {
       "id": "fs",
       "icon": "folder",
       "title": "ext4 / xfs",
       "sub": {
        "en": "file offset → disk block",
        "tr": "dosya konumu → disk bloğu"
       },
       "tag": ""
      },
      {
       "id": "blk",
       "icon": "list-ordered",
       "title": {
        "en": "Block layer",
        "tr": "Blok katmanı"
       },
       "sub": {
        "en": "queue, merge, schedule",
        "tr": "kuyruk, birleştir, zamanla"
       },
       "tag": "blk-mq"
      },
      {
       "id": "nvme",
       "icon": "hard-drive",
       "title": {
        "en": "NVMe driver + device",
        "tr": "NVMe sürücüsü + cihaz"
       },
       "sub": "DMA + interrupt",
       "tag": "~50–100 µs"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "app",
   "vfs",
   "r",
   "l",
   1,
   "syscall"
  ],
  [
   "vfs",
   "pc",
   "r",
   "l",
   2,
   ""
  ],
  [
   "pc",
   "fs",
   "b",
   "t",
   3,
   {
    "en": "miss",
    "tr": "ıska"
   },
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "fs",
   "blk",
   "r",
   "l",
   4,
   ""
  ],
  [
   "blk",
   "nvme",
   "r",
   "l",
   5,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   "User"
  ],
  [
   "purple",
   "Kernel"
  ],
  [
   "amber",
   {
    "en": "Storage",
    "tr": "Depolama"
   }
  ]
 ],
 "footer": {
  "en": "🧠 \"free\" shows little free memory? Most of it is page cache — reclaimable, not used up",
  "tr": "🧠 \"free\" az boş bellek mi gösteriyor? Çoğu page cache: geri alınabilir, tükenmiş değil"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
