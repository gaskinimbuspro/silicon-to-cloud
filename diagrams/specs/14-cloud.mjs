// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "What \"the cloud\" actually is",
  "tr": "Bulut aslında nedir"
 },
 "subtitle": {
  "en": "Someone else's data centers, rented by the second through an API · you choose how much of the stack you still own",
  "tr": "Başkasının veri merkezleri, API ile saniye bazında kiralanır · yığının ne kadarına hâlâ sahip olacağını sen seçersin"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "blue",
     "icon": "globe",
     "title": {
      "en": "Where it runs",
      "tr": "Nerede çalışır"
     },
     "items": [
      {
       "id": "reg",
       "icon": "map-pin",
       "title": {
        "en": "Region",
        "tr": "Bölge"
       },
       "sub": "eu-central-1 · europe-west4",
       "tag": {
        "en": "independent, ~3+ zones",
        "tr": "bağımsız, ~3+ zone"
       }
      },
      {
       "id": "az",
       "icon": "building-2",
       "title": {
        "en": "Availability zone",
        "tr": "Erişilebilirlik zone'u"
       },
       "sub": {
        "en": "separate power, cooling, network",
        "tr": "ayrı enerji, soğutma, ağ"
       },
       "tag": {
        "en": "<2 ms apart",
        "tr": "aralarında <2 ms"
       }
      },
      {
       "id": "edge",
       "icon": "radio-tower",
       "title": {
        "en": "Edge / PoP",
        "tr": "Edge / PoP"
       },
       "sub": {
        "en": "CDN, DNS, WAF near users",
        "tr": "kullanıcılara yakın CDN, DNS, WAF"
       },
       "tag": ""
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "handshake",
     "title": {
      "en": "Who is responsible",
      "tr": "Kim sorumlu"
     },
     "items": [
      {
       "id": "prov",
       "icon": "server",
       "title": {
        "en": "Provider",
        "tr": "Sağlayıcı"
       },
       "sub": {
        "en": "buildings, hardware, hypervisor",
        "tr": "binalar, donanım, hypervisor"
       },
       "tag": {
        "en": "\"security OF the cloud\"",
        "tr": "\"bulutun güvenliği\""
       }
      },
      {
       "id": "you",
       "icon": "user",
       "title": {
        "en": "You",
        "tr": "Sen"
       },
       "sub": {
        "en": "data, identities, config, code",
        "tr": "veri, kimlikler, yapılandırma, kod"
       },
       "tag": {
        "en": "\"security IN the cloud\"",
        "tr": "\"buluttaki güvenlik\""
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
     "icon": "blocks",
     "title": {
      "en": "Building blocks",
      "tr": "Yapı taşları"
     },
     "items": [
      {
       "id": "cmp",
       "icon": "cpu",
       "title": "Compute",
       "sub": {
        "en": "VMs, containers, functions",
        "tr": "VM, container, fonksiyon"
       },
       "tag": "14.1"
      },
      {
       "id": "sto",
       "icon": "hard-drive",
       "title": {
        "en": "Storage & data",
        "tr": "Depolama ve veri"
       },
       "sub": {
        "en": "block, object, managed DBs",
        "tr": "blok, nesne, yönetilen DB"
       },
       "tag": "14.2"
      },
      {
       "id": "net",
       "icon": "network",
       "title": {
        "en": "Network",
        "tr": "Ağ"
       },
       "sub": {
        "en": "VPC, subnets, LBs",
        "tr": "VPC, subnet, LB"
       },
       "tag": "5.4"
      },
      {
       "id": "iam",
       "icon": "key-round",
       "title": "IAM",
       "sub": {
        "en": "who may call which API",
        "tr": "kim hangi API'yi çağırabilir"
       },
       "tag": "11"
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "amber",
     "icon": "file-code",
     "title": {
      "en": "How you manage it",
      "tr": "Nasıl yönetirsin"
     },
     "items": [
      {
       "id": "iac",
       "icon": "file-code",
       "title": {
        "en": "Infrastructure as Code",
        "tr": "Kod olarak altyapı"
       },
       "sub": "Terraform · OpenTofu",
       "tag": "14.3"
      },
      {
       "id": "lz",
       "icon": "layout-grid",
       "title": {
        "en": "Accounts & guardrails",
        "tr": "Hesaplar ve korkuluklar"
       },
       "sub": {
        "en": "landing zone, DR",
        "tr": "landing zone, DR"
       },
       "tag": "14.4"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "reg",
   "az",
   "r",
   "l",
   1,
   ""
  ],
  [
   "az",
   "edge",
   "r",
   "l",
   2,
   ""
  ],
  [
   "edge",
   "prov",
   "r",
   "l",
   3,
   ""
  ],
  [
   "prov",
   "you",
   "r",
   "l",
   4,
   ""
  ],
  [
   "you",
   "cmp",
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
   "cmp",
   "sto",
   "r",
   "l",
   6,
   ""
  ],
  [
   "sto",
   "net",
   "r",
   "l",
   7,
   ""
  ],
  [
   "net",
   "iam",
   "r",
   "l",
   8,
   ""
  ],
  [
   "iam",
   "iac",
   "r",
   "l",
   9,
   ""
  ],
  [
   "iac",
   "lz",
   "r",
   "l",
   10,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Geography",
    "tr": "Coğrafya"
   }
  ],
  [
   "purple",
   {
    "en": "Responsibility",
    "tr": "Sorumluluk"
   }
  ],
  [
   "green",
   {
    "en": "Services",
    "tr": "Servisler"
   }
  ],
  [
   "amber",
   {
    "en": "Management",
    "tr": "Yönetim"
   }
  ]
 ],
 "footer": {
  "en": "☁️ Everything is an API call: if you can click it in the console, you can (and should) write it as code",
  "tr": "☁️ Her şey bir API çağrısıdır: konsolda tıklayabildiğin her şeyi kod olarak yazabilirsin (ve yazmalısın)"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
