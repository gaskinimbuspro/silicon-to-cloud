// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "Inside a boot-protocol keyboard report",
  "tr": "Boot protokolü klavye raporunun içi"
 },
 "subtitle": {
  "en": "8 bytes: who is held down right now · pressing \"A\" with Shift",
  "tr": "8 byte: şu an basılı olanlar · Shift ile \"A\"ya basmak"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "binary",
     "title": {
      "en": "Byte 0",
      "tr": "Byte 0"
     },
     "items": [
      {
       "id": "mod",
       "icon": "command",
       "title": {
        "en": "Modifiers",
        "tr": "Değiştiriciler"
       },
       "sub": {
        "en": "bit per Ctrl/Shift/Alt/GUI",
        "tr": "Ctrl/Shift/Alt/GUI başına bit"
       },
       "tag": "0x02 = L-Shift"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "slate",
     "icon": "minus",
     "title": {
      "en": "Byte 1",
      "tr": "Byte 1"
     },
     "items": [
      {
       "id": "res",
       "icon": "minus",
       "title": {
        "en": "Reserved",
        "tr": "Ayrılmış"
       },
       "sub": "0x00",
       "tag": ""
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "green",
     "icon": "keyboard",
     "title": {
      "en": "Bytes 2–7",
      "tr": "Byte 2–7"
     },
     "items": [
      {
       "id": "k1",
       "icon": "key-round",
       "title": {
        "en": "Key 1",
        "tr": "Tuş 1"
       },
       "sub": "0x04",
       "tag": {
        "en": "usage \"A\"",
        "tr": "usage \"A\""
       }
      },
      {
       "id": "k2",
       "icon": "key-round",
       "title": {
        "en": "Keys 2–6",
        "tr": "Tuş 2–6"
       },
       "sub": "0x00 …",
       "tag": {
        "en": "6-key rollover",
        "tr": "6 tuş rollover"
       }
      }
     ]
    }
   ]
  },
  {
   "groups": [
    {
     "id": "g4",
     "n": 4,
     "color": "amber",
     "icon": "arrow-right-left",
     "title": {
      "en": "Meaning",
      "tr": "Anlamı"
     },
     "items": [
      {
       "id": "use",
       "icon": "book-open",
       "title": {
        "en": "HID usage 0x04",
        "tr": "HID usage 0x04"
       },
       "sub": {
        "en": "a position, not a letter",
        "tr": "bir konum, harf değil"
       },
       "tag": ""
      },
      {
       "id": "kc",
       "icon": "hash",
       "title": "KEY_A = 30",
       "sub": {
        "en": "Linux keycode",
        "tr": "Linux keycode"
       },
       "tag": {
        "en": "via hid-input map",
        "tr": "hid-input eşlemesiyle"
       }
      },
      {
       "id": "lay",
       "icon": "languages",
       "title": {
        "en": "Layout decides",
        "tr": "Düzen karar verir"
       },
       "sub": {
        "en": "US \"A\" · AZERTY \"Q\"",
        "tr": "US \"A\" · AZERTY \"Q\""
       },
       "tag": "xkb"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "k1",
   "use",
   "b",
   "t",
   1,
   "",
   {
    "via": [
     "g3",
     "g4"
    ]
   }
  ],
  [
   "use",
   "kc",
   "r",
   "l",
   2,
   ""
  ],
  [
   "kc",
   "lay",
   "r",
   "l",
   3,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Modifiers",
    "tr": "Değiştiriciler"
   }
  ],
  [
   "green",
   {
    "en": "Keys",
    "tr": "Tuşlar"
   }
  ],
  [
   "amber",
   {
    "en": "Meaning",
    "tr": "Anlam"
   }
  ]
 ],
 "footer": {
  "en": "🔁 Release = a new report with that key gone; the keyboard never sends \"key up\" explicitly",
  "tr": "🔁 Bırakma = o tuşun olmadığı yeni bir rapor; klavye ayrıca \"tuş kalktı\" göndermez"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
