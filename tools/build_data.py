#!/usr/bin/env python3
"""Generate site data from the docs:
- docs/assets/data/questions.{en,tr}.json  (practice page)
- docs/assets/data/flashcards.{en,tr}.csv  (Anki import: front;back)
- includes/abbreviations.md                (hover tooltips for acronyms, appended to every page)
Run from the repo root:  python3 tools/build_data.py
"""
import csv, hashlib, json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
OUT = DOCS / "assets" / "data"
OUT.mkdir(parents=True, exist_ok=True)

def clean(s):
    s = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)
    return re.sub(r"[*`]", "", s).strip()

def title_of(text):
    m = re.search(r'^title:\s*"?(.*?)"?\s*$', text, re.M) or re.search(r"^# (.+)$", text, re.M)
    return clean(m.group(1)) if m else ""

def pages(lang):
    suf = ".tr.md" if lang == "tr" else ".md"
    for p in sorted(DOCS.glob("[01]*/*.md")):
        if lang == "en" and p.name.endswith(".tr.md"):
            continue
        if lang == "tr" and not p.name.endswith(".tr.md"):
            continue
        stem = p.name[: -len(suf)]
        if stem == "glossary":
            continue
        url = f"{p.parent.name}/" + ("" if stem == "index" else f"{stem}/")
        yield p, url

def questions(lang):
    out = []
    for p, url in pages(lang):
        text = p.read_text()
        ov = p.parent / ("index.tr.md" if lang == "tr" else "index.md")
        ch_title = title_of(ov.read_text())
        lines = text.split("\n")
        for i, line in enumerate(lines):
            m = re.match(r'\?\?\? question "(.+)"\s*$', line)
            if not m:
                continue
            ans = []
            for nxt in lines[i + 1:]:
                if nxt.startswith("    ") or nxt.strip() == "":
                    if nxt.strip():
                        ans.append(nxt.strip())
                    elif ans:
                        break
                else:
                    break
            q = re.sub(r"^\d+\.\s*", "", clean(m.group(1)))
            out.append({
                "id": hashlib.sha1((url + q).encode()).hexdigest()[:10],
                "ch": p.parent.name, "chTitle": ch_title, "page": title_of(text), "url": url,
                "q": q, "a": clean(" ".join(ans)),
            })
    return out

def terms(lang):
    rows = []
    for p, _ in pages(lang):
        for line in p.read_text().split("\n"):
            m = re.match(r"^\| \*\*(.+?)\*\* \| (.*?) \| (.*?) \| (.*?) \|$", line)
            if m:
                rows.append(tuple(clean(x) for x in m.groups()))
    return rows

for lang in ("en", "tr"):
    qs = questions(lang)
    (OUT / f"questions.{lang}.json").write_text(json.dumps(qs, ensure_ascii=False, indent=0))
    seen, cards = set(), []
    for term, stands, what, how in terms(lang):
        if term in seen:
            continue
        seen.add(term)
        back = (f"{stands} — " if stands and stands != "—" else "") + what + (f" · {how}" if how else "")
        cards.append((term, back))
    cards += [(q["q"], q["a"]) for q in qs]
    with open(OUT / f"flashcards.{lang}.csv", "w", newline="") as f:
        w = csv.writer(f, delimiter=";")
        w.writerow(["#separator:semicolon", ""])
        w.writerows(cards)
    print(lang, len(qs), "questions,", len(cards), "flashcards")

# Abbreviation tooltips (English expansions, used on both languages)
abbr = {}
for term, stands, what, _ in terms("en"):
    if not stands or stands == "—":
        continue
    parts, exps = [t.strip() for t in term.split(" / ")], [e.strip() for e in stands.split(" / ")]
    if len(parts) != len(exps):
        parts, exps = [term], [stands]
    for t, e in zip(parts, exps):
        t = re.sub(r"\s*\(.*\)$", "", t)
        if re.fullmatch(r"[A-Z][A-Za-z0-9\-]{1,7}", t) and sum(c.isupper() for c in t) >= 2 and t not in abbr:
            abbr[t] = e
inc = ROOT / "includes"
inc.mkdir(exist_ok=True)
(inc / "abbreviations.md").write_text("\n".join(f"*[{k}]: {v}" for k, v in sorted(abbr.items())) + "\n")
print(len(abbr), "abbreviations")
