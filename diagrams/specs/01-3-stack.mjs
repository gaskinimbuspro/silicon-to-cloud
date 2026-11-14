// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "The Linux input stack, from kernel to app",
  "tr": "Linux girdi yığını, kernel'den uygulamaya"
 },
 "subtitle": {
  "en": "evdev events → libinput (in the compositor) → Wayland protocol → xkbcommon in the app → toolkit → your code",
  "tr": "evdev olayları → libinput (compositor içinde) → Wayland protokolü → uygulamadaki xkbcommon → toolkit → kodun"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "purple",
     "icon": "shield",
     "title": "Kernel",
     "items": [
      {
       "id": "ev",
       "icon": "file",
       "title": "evdev",
       "sub": {
        "en": "EV_KEY KEY_A value=1",
        "tr": "EV_KEY KEY_A value=1"
       },
       "tag": "/dev/input/eventN"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "blue",
     "icon": "monitor",
     "title": {
      "en": "Compositor (Wayland)",
      "tr": "Compositor (Wayland)"
     },
     "items": [
      {
       "id": "li",
       "icon": "sliders-horizontal",
       "title": "libinput",
       "sub": {
        "en": "devices, repeat, gestures",
        "tr": "cihazlar, tekrar, jestler"
       },
       "tag": ""
      },
      {
       "id": "focus",
       "icon": "focus",
       "title": {
        "en": "Keyboard focus",
        "tr": "Klavye odağı"
       },
       "sub": {
        "en": "which surface gets it",
        "tr": "hangi yüzey alır"
       },
       "tag": ""
      },
      {
       "id": "wl",
       "icon": "send",
       "title": "wl_keyboard.key",
       "sub": {
        "en": "keycode + state",
        "tr": "keycode + durum"
       },
       "tag": {
        "en": "+ keymap fd once",
        "tr": "+ bir kez keymap fd"
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
     "icon": "app-window",
     "title": {
      "en": "Application",
      "tr": "Uygulama"
     },
     "items": [
      {
       "id": "xkb",
       "icon": "languages",
       "title": "xkbcommon",
       "sub": {
        "en": "keycode → keysym → UTF-8",
        "tr": "keycode → keysym → UTF-8"
       },
       "tag": {
        "en": "\"a\" or \"A\"",
        "tr": "\"a\" ya da \"A\""
       }
      },
      {
       "id": "tk",
       "icon": "layout-template",
       "title": {
        "en": "Toolkit",
        "tr": "Toolkit"
       },
       "sub": "GTK · Qt · Chromium",
       "tag": {
        "en": "key event / text input",
        "tr": "tuş olayı / metin girişi"
       }
      },
      {
       "id": "cb",
       "icon": "code",
       "title": {
        "en": "Your handler",
        "tr": "Senin handler'ın"
       },
       "sub": "onKeyDown / 'input'",
       "tag": ""
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "ev",
   "li",
   "r",
   "l",
   1,
   ""
  ],
  [
   "li",
   "focus",
   "r",
   "l",
   2,
   ""
  ],
  [
   "focus",
   "wl",
   "r",
   "l",
   3,
   ""
  ],
  [
   "wl",
   "xkb",
   "b",
   "t",
   4,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "xkb",
   "tk",
   "r",
   "l",
   5,
   ""
  ],
  [
   "tk",
   "cb",
   "r",
   "l",
   6,
   ""
  ]
 ],
 "legend": [
  [
   "purple",
   "Kernel"
  ],
  [
   "blue",
   "Compositor"
  ],
  [
   "green",
   {
    "en": "App",
    "tr": "Uygulama"
   }
  ]
 ],
 "footer": {
  "en": "🔒 Only the compositor reads raw input — apps can't sniff other windows' keys (unlike X11)",
  "tr": "🔒 Ham girdiyi sadece compositor okur; uygulamalar diğer pencerelerin tuşlarını dinleyemez (X11'in aksine)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
