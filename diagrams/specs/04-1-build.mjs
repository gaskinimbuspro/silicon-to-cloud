// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "Inside a compiler and linker",
  "tr": "Bir derleyici ve linker'ın içi"
 },
 "subtitle": {
  "en": "Front end understands the language · optimizer works on IR · back end emits machine code · linker joins everything",
  "tr": "Ön uç dili anlar · optimizer IR üzerinde çalışır · arka uç makine kodu üretir · linker hepsini birleştirir"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "file-code",
     "title": {
      "en": "Front end",
      "tr": "Ön uç"
     },
     "items": [
      {
       "id": "lex",
       "icon": "scan-text",
       "title": {
        "en": "Lex + parse",
        "tr": "Lex + parse"
       },
       "sub": {
        "en": "tokens → AST",
        "tr": "token'lar → AST"
       },
       "tag": ""
      },
      {
       "id": "sem",
       "icon": "check-check",
       "title": {
        "en": "Type check",
        "tr": "Tip kontrolü"
       },
       "sub": {
        "en": "errors & warnings",
        "tr": "hatalar ve uyarılar"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "settings-2",
     "title": {
      "en": "Middle end",
      "tr": "Orta uç"
     },
     "items": [
      {
       "id": "ir",
       "icon": "git-merge",
       "title": "IR",
       "sub": {
        "en": "LLVM IR / GIMPLE / SSA",
        "tr": "LLVM IR / GIMPLE / SSA"
       },
       "tag": ""
      },
      {
       "id": "opt",
       "icon": "sparkles",
       "title": {
        "en": "Optimize",
        "tr": "Optimize et"
       },
       "sub": {
        "en": "inline, unroll, vectorize",
        "tr": "inline, unroll, vectorize"
       },
       "tag": "-O2 / -O3"
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
     "icon": "cpu",
     "title": {
      "en": "Back end",
      "tr": "Arka uç"
     },
     "items": [
      {
       "id": "isel",
       "icon": "cpu",
       "title": {
        "en": "Instruction selection",
        "tr": "Komut seçimi"
       },
       "sub": {
        "en": "+ register allocation",
        "tr": "+ register ayırma"
       },
       "tag": "x86-64 / ARM64"
      },
      {
       "id": "obj",
       "icon": "file",
       "title": "main.o",
       "sub": {
        "en": "machine code + symbols + relocations",
        "tr": "makine kodu + semboller + relocation'lar"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "link",
     "title": "Linker",
     "items": [
      {
       "id": "ld",
       "icon": "link",
       "title": "ld / lld / mold",
       "sub": {
        "en": "resolve symbols, lay out sections",
        "tr": "sembolleri çöz, bölümleri yerleştir"
       },
       "tag": ""
      },
      {
       "id": "exe",
       "icon": "package",
       "title": {
        "en": "Executable",
        "tr": "Çalıştırılabilir"
       },
       "sub": {
        "en": "static or dynamic",
        "tr": "statik ya da dinamik"
       },
       "tag": "ELF"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "lex",
   "sem",
   "r",
   "l",
   1,
   ""
  ],
  [
   "sem",
   "ir",
   "r",
   "l",
   2,
   ""
  ],
  [
   "ir",
   "opt",
   "r",
   "l",
   3,
   ""
  ],
  [
   "opt",
   "isel",
   "b",
   "t",
   5,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "isel",
   "obj",
   "r",
   "l",
   6,
   ""
  ],
  [
   "obj",
   "ld",
   "r",
   "l",
   7,
   ""
  ],
  [
   "ld",
   "exe",
   "r",
   "l",
   8,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Front",
    "tr": "Ön"
   }
  ],
  [
   "purple",
   {
    "en": "Middle",
    "tr": "Orta"
   }
  ],
  [
   "amber",
   {
    "en": "Back",
    "tr": "Arka"
   }
  ],
  [
   "green",
   "Linker"
  ]
 ],
 "footer": {
  "en": "⚡ Build speed: ccache/sccache, remote caching (Bazel), faster linkers (mold, lld)",
  "tr": "⚡ Build hızı: ccache/sccache, uzak önbellek (Bazel), hızlı linker'lar (mold, lld)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
