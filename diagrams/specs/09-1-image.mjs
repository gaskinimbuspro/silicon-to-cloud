// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "From Dockerfile to a running container",
  "tr": "Dockerfile'dan çalışan bir container'a"
 },
 "subtitle": {
  "en": "Each instruction makes a layer · layers are content-addressed by digest · the runtime stacks them with overlayfs",
  "tr": "Her talimat bir katman yapar · katmanlar digest ile içerik adreslenir · runtime onları overlayfs ile üst üste koyar"
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
      "en": "Build",
      "tr": "Build"
     },
     "items": [
      {
       "id": "df",
       "icon": "file-code",
       "title": "Dockerfile",
       "sub": "FROM · COPY · RUN",
       "tag": {
        "en": "multi-stage",
        "tr": "çok aşamalı"
       }
      },
      {
       "id": "layers",
       "icon": "layers",
       "title": {
        "en": "Layers",
        "tr": "Katmanlar"
       },
       "sub": {
        "en": "tar diffs, cached",
        "tr": "tar farkları, önbellekli"
       },
       "tag": "sha256:…"
      },
      {
       "id": "man",
       "icon": "file-json",
       "title": {
        "en": "Manifest + config",
        "tr": "Manifest + config"
       },
       "sub": {
        "en": "per platform (amd64/arm64)",
        "tr": "platform başına (amd64/arm64)"
       },
       "tag": {
        "en": "image digest",
        "tr": "imaj digest'i"
       }
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "package",
     "title": {
      "en": "Registry",
      "tr": "Registry"
     },
     "items": [
      {
       "id": "reg",
       "icon": "package",
       "title": {
        "en": "Push",
        "tr": "Push"
       },
       "sub": "ghcr.io/acme/api:1.4.2",
       "tag": {
        "en": "+ signature, SBOM",
        "tr": "+ imza, SBOM"
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
     "icon": "download",
     "title": {
      "en": "Node",
      "tr": "Node"
     },
     "items": [
      {
       "id": "pull",
       "icon": "download",
       "title": {
        "en": "Pull by digest",
        "tr": "Digest ile çek"
       },
       "sub": {
        "en": "only missing layers",
        "tr": "sadece eksik katmanlar"
       },
       "tag": ""
      },
      {
       "id": "ovl",
       "icon": "layers",
       "title": "overlayfs",
       "sub": {
        "en": "read-only layers + writable top",
        "tr": "salt okunur katmanlar + yazılabilir üst"
       },
       "tag": ""
      },
      {
       "id": "run",
       "icon": "play",
       "title": {
        "en": "Run",
        "tr": "Çalıştır"
       },
       "sub": {
        "en": "runc: namespaces + cgroups",
        "tr": "runc: namespace'ler + cgroup'lar"
       },
       "tag": "3.5"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "df",
   "layers",
   "r",
   "l",
   1,
   ""
  ],
  [
   "layers",
   "man",
   "r",
   "l",
   2,
   ""
  ],
  [
   "man",
   "reg",
   "r",
   "l",
   3,
   ""
  ],
  [
   "reg",
   "pull",
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
   "pull",
   "ovl",
   "r",
   "l",
   5,
   ""
  ],
  [
   "ovl",
   "run",
   "r",
   "l",
   6,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   "Build"
  ],
  [
   "purple",
   "Registry"
  ],
  [
   "green",
   "Node"
  ]
 ],
 "footer": {
  "en": "🔖 Deploy by digest (@sha256:…), not by a mutable tag like :latest",
  "tr": "🔖 :latest gibi değişebilir bir etiketle değil, digest ile deploy et (@sha256:…)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
