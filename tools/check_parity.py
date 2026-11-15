#!/usr/bin/env python3
"""Check that every English page has a Turkish twin with the same structure:
same number of H2 sections, the same diagrams and the same number of quiz questions."""
import re, sys
from pathlib import Path

DOCS = Path(__file__).resolve().parent.parent / "docs"
problems = []
for en in sorted(DOCS.rglob("*.md")):
    if en.name.endswith(".tr.md"):
        continue
    tr = en.with_name(en.name[:-3] + ".tr.md")
    rel = en.relative_to(DOCS)
    if not tr.exists():
        problems.append(f"{rel}: missing Turkish version"); continue
    a, b = en.read_text(), tr.read_text()
    checks = {
        "H2 sections": lambda t: len(re.findall(r"^## ", t, re.M)),
        "questions": lambda t: t.count("??? question"),
        "diagrams": lambda t: sorted(x.replace(".tr.png", ".png") for x in re.findall(r"assets/diagrams/([\w.-]+\.png)", t)),
    }
    for name, f in checks.items():
        if f(a) != f(b):
            problems.append(f"{rel}: {name} differ (EN {f(a)} vs TR {f(b)})")
print("\n".join(problems) or "EN/TR parity OK")
if problems:
    sys.exit(1)


# --- front matter must be valid YAML (otherwise it is rendered as text on the page)
import yaml as _yaml, re as _re, glob as _glob, sys as _sys
_bad = []
for _f in _glob.glob("docs/**/*.md", recursive=True):
    _m = _re.match(r"---\n(.*?)\n---\n", open(_f, encoding="utf-8").read(), _re.S)
    if _m:
        try:
            assert isinstance(_yaml.safe_load(_m.group(1)), dict)
        except Exception as _e:
            _bad.append(f"{_f}: {_e}")
if _bad:
    print("Invalid front matter:\n  " + "\n  ".join(_bad)); _sys.exit(1)
print("front matter OK")
