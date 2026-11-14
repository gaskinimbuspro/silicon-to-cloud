// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "Browser security: threats and the defences that stop them",
  "tr": "Tarayıcı güvenliği: tehditler ve onları durduran savunmalar"
 },
 "subtitle": {
  "en": "The same-origin policy is the foundation; headers and cookie flags add the rest",
  "tr": "Same-origin policy temeldir; header'lar ve cookie bayrakları gerisini ekler"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "red",
     "icon": "skull",
     "title": {
      "en": "Threats",
      "tr": "Tehditler"
     },
     "items": [
      {
       "id": "xss",
       "icon": "code",
       "title": "XSS",
       "sub": {
        "en": "attacker script runs in your page",
        "tr": "saldırgan script'i sayfanda çalışır"
       },
       "tag": ""
      },
      {
       "id": "csrf",
       "icon": "link",
       "title": "CSRF",
       "sub": {
        "en": "another site triggers your logged-in request",
        "tr": "başka bir site oturum açık isteğini tetikler"
       },
       "tag": ""
      },
      {
       "id": "click",
       "icon": "mouse-pointer-click",
       "title": "Clickjacking",
       "sub": {
        "en": "your page in a hidden iframe",
        "tr": "sayfan gizli bir iframe'de"
       },
       "tag": ""
      },
      {
       "id": "sc",
       "icon": "package",
       "title": "Supply chain",
       "sub": {
        "en": "compromised npm / CDN script",
        "tr": "ele geçirilmiş npm / CDN script'i"
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
     "color": "green",
     "icon": "shield-check",
     "title": {
      "en": "Defences",
      "tr": "Savunmalar"
     },
     "items": [
      {
       "id": "d1",
       "icon": "shield-check",
       "title": {
        "en": "Escape output + CSP",
        "tr": "Çıktıyı escape et + CSP"
       },
       "sub": "script-src 'self'",
       "tag": ""
      },
      {
       "id": "d2",
       "icon": "cookie",
       "title": "SameSite cookies + CSRF token",
       "sub": "SameSite=Lax",
       "tag": ""
      },
      {
       "id": "d3",
       "icon": "frame",
       "title": "frame-ancestors / X-Frame-Options",
       "sub": "'none'",
       "tag": ""
      },
      {
       "id": "d4",
       "icon": "badge-check",
       "title": "SRI + lockfiles",
       "sub": "integrity=\"sha384-…\"",
       "tag": ""
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "xss",
   "d1",
   "b",
   "t",
   "",
   ""
  ],
  [
   "csrf",
   "d2",
   "b",
   "t",
   "",
   ""
  ],
  [
   "click",
   "d3",
   "b",
   "t",
   "",
   ""
  ],
  [
   "sc",
   "d4",
   "b",
   "t",
   "",
   ""
  ]
 ],
 "legend": [
  [
   "red",
   {
    "en": "Threat",
    "tr": "Tehdit"
   }
  ],
  [
   "green",
   {
    "en": "Defence",
    "tr": "Savunma"
   }
  ]
 ],
 "footer": {
  "en": "🍪 Session cookies: HttpOnly + Secure + SameSite — three flags, most of the protection",
  "tr": "🍪 Oturum cookie'leri: HttpOnly + Secure + SameSite; üç bayrak, korumanın çoğu"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
