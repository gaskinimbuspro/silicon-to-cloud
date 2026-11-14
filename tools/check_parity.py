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
sys.exit(1 if problems else 0)
