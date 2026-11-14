// concept diagram (generated from gen/mkspecs.py)
const S = {
 "width": 1000,
 "title": {
  "en": "How an index finds a row (B-tree)",
  "tr": "Bir indeks bir satırı nasıl bulur (B-tree)"
 },
 "subtitle": {
  "en": "Without an index: read every row · with a B-tree: ~3–4 page reads for millions of rows",
  "tr": "İndekssiz: her satırı oku · B-tree ile: milyonlarca satır için ~3–4 sayfa okuma"
 },
 "rows": [
  {
   "groups": [
    {
     "id": "g1",
     "n": 1,
     "color": "red",
     "icon": "list",
     "title": {
      "en": "No index",
      "tr": "İndeks yok"
     },
     "items": [
      {
       "id": "scan",
       "icon": "list",
       "title": {
        "en": "Sequential scan",
        "tr": "Sıralı tarama"
       },
       "sub": {
        "en": "check all 10 M rows",
        "tr": "10 M satırın hepsini kontrol et"
       },
       "tag": "O(n)"
      }
     ]
    },
    {
     "id": "g2",
     "n": 2,
     "color": "green",
     "icon": "git-branch",
     "title": {
      "en": "B-tree index",
      "tr": "B-tree indeksi"
     },
     "items": [
      {
       "id": "root",
       "icon": "git-branch",
       "title": {
        "en": "Root page",
        "tr": "Kök sayfa"
       },
       "sub": "email < \"m…\" ?",
       "tag": ""
      },
      {
       "id": "inner",
       "icon": "git-branch",
       "title": {
        "en": "Inner page",
        "tr": "İç sayfa"
       },
       "sub": "\"g…\" – \"k…\"",
       "tag": ""
      },
      {
       "id": "leaf",
       "icon": "file",
       "title": {
        "en": "Leaf page",
        "tr": "Yaprak sayfa"
       },
       "sub": "jane@x.com → row ptr",
       "tag": ""
      },
      {
       "id": "row",
       "icon": "table-2",
       "title": {
        "en": "Fetch row",
        "tr": "Satırı getir"
       },
       "sub": {
        "en": "heap / clustered",
        "tr": "heap / clustered"
       },
       "tag": "O(log n)"
      }
     ]
    }
   ]
  }
 ],
 "edges": [
  [
   "root",
   "inner",
   "r",
   "l",
   1,
   ""
  ],
  [
   "inner",
   "leaf",
   "r",
   "l",
   2,
   ""
  ],
  [
   "leaf",
   "row",
   "r",
   "l",
   3,
   ""
  ]
 ],
 "legend": [
  [
   "red",
   {
    "en": "Slow",
    "tr": "Yavaş"
   }
  ],
  [
   "green",
   {
    "en": "Fast",
    "tr": "Hızlı"
   }
  ]
 ],
 "footer": {
  "en": "🔍 EXPLAIN ANALYZE shows which path the database chose — the first tool for a slow query",
  "tr": "🔍 EXPLAIN ANALYZE veritabanının hangi yolu seçtiğini gösterir; yavaş bir sorgu için ilk araç"
 }
};
const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) && 'en' in v) ? v[lang] : v;
const deep = (v, lang) => Array.isArray(v) ? v.map((x) => deep(x, lang)) : (v && typeof v === 'object' && !('en' in v)) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x, lang)])) : pick(v, lang);
export default (lang) => deep(S, lang);
