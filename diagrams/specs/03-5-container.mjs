// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1100,
 "title": {
  "en": "A container = a process + namespaces + cgroups + a root filesystem",
  "tr": "Container = process + namespace'ler + cgroup'lar + bir kök dosya sistemi"
 },
 "subtitle": {
  "en": "Namespaces control what it sees · cgroups control what it can use · the image provides its files",
  "tr": "Namespace'ler neyi gördüğünü · cgroup'lar neyi kullanabileceğini kontrol eder · imaj dosyalarını sağlar"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "eye",
     "title": {
      "en": "Namespaces: what it sees",
      "tr": "Namespace'ler: ne görür"
     },
     "items": [
      {
       "id": "pid",
       "icon": "hash",
       "title": "pid",
       "sub": {
        "en": "own PID 1",
        "tr": "kendi PID 1'i"
       },
       "tag": ""
      },
      {
       "id": "net",
       "icon": "network",
       "title": "net",
       "sub": {
        "en": "own interfaces, IPs, ports",
        "tr": "kendi arayüzleri, IP'leri, portları"
       },
       "tag": ""
      },
      {
       "id": "mnt",
       "icon": "folder",
       "title": "mnt",
       "sub": {
        "en": "own mount table",
        "tr": "kendi mount tablosu"
       },
       "tag": ""
      },
      {
       "id": "uts",
       "icon": "tag",
       "title": "uts · ipc · user · cgroup",
       "sub": {
        "en": "hostname, IPC, UID mapping",
        "tr": "hostname, IPC, UID eşleme"
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
     "color": "amber",
     "icon": "gauge",
     "title": {
      "en": "cgroups v2: what it can use",
      "tr": "cgroup v2: ne kullanabilir"
     },
     "items": [
      {
       "id": "cpu",
       "icon": "cpu",
       "title": "cpu.max / cpu.weight",
       "sub": {
        "en": "quota, share",
        "tr": "kota, pay"
       },
       "tag": ""
      },
      {
       "id": "mem",
       "icon": "memory-stick",
       "title": "memory.max",
       "sub": {
        "en": "hard limit → OOM",
        "tr": "sert limit → OOM"
       },
       "tag": ""
      },
      {
       "id": "io",
       "icon": "hard-drive",
       "title": "io.max · pids.max",
       "sub": {
        "en": "disk, fork bombs",
        "tr": "disk, fork bombaları"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g3",
     "n": 3,
     "color": "green",
     "icon": "layers",
     "title": {
      "en": "Root filesystem",
      "tr": "Kök dosya sistemi"
     },
     "items": [
      {
       "id": "ovl",
       "icon": "layers",
       "title": "overlayfs",
       "sub": {
        "en": "image layers + writable layer",
        "tr": "imaj katmanları + yazılabilir katman"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "red",
     "icon": "shield",
     "title": {
      "en": "Security",
      "tr": "Güvenlik"
     },
     "items": [
      {
       "id": "sec",
       "icon": "shield",
       "title": "capabilities · seccomp · LSM",
       "sub": {
        "en": "drop root powers, filter syscalls",
        "tr": "root güçlerini bırak, syscall filtrele"
       },
       "tag": "AppArmor / SELinux"
      }
     ]
    }
   ]
  }
 ],
 "edges": [],
 "legend": [
  [
   "blue",
   "Namespaces"
  ],
  [
   "amber",
   "cgroups"
  ],
  [
   "green",
   {
    "en": "Files",
    "tr": "Dosyalar"
   }
  ],
  [
   "red",
   {
    "en": "Security",
    "tr": "Güvenlik"
   }
  ]
 ],
 "footer": {
  "en": "🧱 No VM, no second kernel: a container is a normal Linux process with walls",
  "tr": "🧱 VM yok, ikinci kernel yok: container duvarları olan normal bir Linux process'i"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
