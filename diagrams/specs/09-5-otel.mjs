// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1200,
 "title": {
  "en": "An observability pipeline with OpenTelemetry",
  "tr": "OpenTelemetry ile bir gözlemlenebilirlik pipeline'ı"
 },
 "subtitle": {
  "en": "Instrument once with OTel · a collector routes metrics, logs and traces to backends · dashboards and SLO alerts on top",
  "tr": "OTel ile bir kez enstrümante et · collector metrik, log ve trace'leri backend'lere yönlendirir · üstünde panolar ve SLO alarmları"
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
      "en": "Sources",
      "tr": "Kaynaklar"
     },
     "items": [
      {
       "id": "infra",
       "icon": "server",
       "title": {
        "en": "Nodes, K8s, DBs",
        "tr": "Node'lar, K8s, DB'ler"
       },
       "sub": "exporters · kube-state-metrics",
       "tag": ""
      },
      {
       "id": "app",
       "icon": "code",
       "title": {
        "en": "Apps + OTel SDK",
        "tr": "Uygulamalar + OTel SDK"
       },
       "sub": {
        "en": "auto/manual instrumentation",
        "tr": "otomatik/elle enstrümantasyon"
       },
       "tag": "traceparent"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "purple",
     "icon": "filter",
     "title": "OTel Collector",
     "items": [
      {
       "id": "col",
       "icon": "filter",
       "title": {
        "en": "Receive → process → export",
        "tr": "Al → işle → aktar"
       },
       "sub": {
        "en": "batch, sample, redact, enrich",
        "tr": "grupla, örnekle, maskele, zenginleştir"
       },
       "tag": {
        "en": "agent + gateway",
        "tr": "ajan + gateway"
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
     "color": "amber",
     "icon": "database",
     "title": {
      "en": "Backends",
      "tr": "Backend'ler"
     },
     "items": [
      {
       "id": "m",
       "icon": "activity",
       "title": {
        "en": "Metrics",
        "tr": "Metrikler"
       },
       "sub": "Prometheus / Mimir",
       "tag": ""
      },
      {
       "id": "l",
       "icon": "scroll-text",
       "title": {
        "en": "Logs",
        "tr": "Loglar"
       },
       "sub": "Loki / OpenSearch",
       "tag": ""
      },
      {
       "id": "t",
       "icon": "git-branch",
       "title": {
        "en": "Traces",
        "tr": "Trace'ler"
       },
       "sub": "Tempo / Jaeger",
       "tag": ""
      }
     ]
    },
    {
     "id": "g4",
     "n": 4,
     "color": "green",
     "icon": "layout-dashboard",
     "title": {
      "en": "Use",
      "tr": "Kullan"
     },
     "items": [
      {
       "id": "dash",
       "icon": "layout-dashboard",
       "title": {
        "en": "Dashboards",
        "tr": "Panolar"
       },
       "sub": "Grafana",
       "tag": {
        "en": "jump metric → trace → log",
        "tr": "metrik → trace → log geçişi"
       }
      },
      {
       "id": "slo",
       "icon": "bell",
       "title": {
        "en": "SLO alerts",
        "tr": "SLO alarmları"
       },
       "sub": {
        "en": "burn-rate based",
        "tr": "burn-rate tabanlı"
       },
       "tag": "Alertmanager → on-call"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "app",
   "col",
   "r",
   "l",
   1,
   "OTLP"
  ],
  [
   "col",
   "m",
   "b",
   "t",
   2,
   "",
   {
    "via": [
     "g2",
     "g3"
    ]
   }
  ],
  [
   "t",
   "dash",
   "r",
   "l",
   3,
   ""
  ],
  [
   "dash",
   "slo",
   "r",
   "l",
   4,
   ""
  ]
 ],
 "legend": [
  [
   "blue",
   {
    "en": "Sources",
    "tr": "Kaynaklar"
   }
  ],
  [
   "purple",
   "Collector"
  ],
  [
   "amber",
   {
    "en": "Storage",
    "tr": "Depolama"
   }
  ],
  [
   "green",
   {
    "en": "Use",
    "tr": "Kullanım"
   }
  ]
 ],
 "footer": {
  "en": "🎯 Alert on symptoms users feel (SLO burn), investigate with causes (metrics, traces, logs)",
  "tr": "🎯 Kullanıcının hissettiği belirtilere (SLO yanması) alarm kur, sebepleri (metrik, trace, log) ile araştır"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
