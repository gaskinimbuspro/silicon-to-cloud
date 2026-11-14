# Content standard

Every chapter and sub-chapter follows the same structure, in **both languages** (`index.md` = EN, `index.tr.md` = TR).

## Page structure (in this order)

1. **Title** — `# N — Topic`
2. **In one sentence** — `!!! abstract` box: the whole idea in 3–5 lines.
3. **📖 Key terms & abbreviations** — a table, **before** any diagram:

   | Term | Stands for | What it is | How it works (one line) |
   |---|---|---|---|
   | LLM | Large Language Model | A neural network that generates text | Predicts the next token, appends it, repeats |

   Every abbreviation used anywhere on the page must appear here, expanded.
4. **🗺️ Big-picture diagram** — the whole flow of the page.
5. **Concept sections** — for each major concept:
   - `### What is X?` — definition in plain words.
   - `### How does X work?` — numbered steps.
   - **A concept diagram** whenever the concept has 3+ steps, moving parts, or a spatial layout.
6. **DevOps / platform connection** — how it shows up in real infrastructure.
7. **🧪 Try it yourself** — runnable commands, with an exercise.
8. **🃏 Cheat sheet** — a 2-minute refresher.
9. **❓ Test yourself** — 5 questions with hidden answers.
10. **📚 Sources** — primary sources first.
11. **✍️ My notes** — left empty for the reader.

## Diagrams

- Diagrams are code: `diagrams/specs/<page>[-<concept>].mjs`, exporting `(lang) => spec` with every label in EN and TR.
- Render: `cd diagrams && npm run build:all` → `docs/assets/diagrams/<name>.png` and `<name>.tr.png`.
- One big-picture diagram per page, plus one diagram per concept that needs it.
- Numbered arrows for flows, a legend for colors, a one-line footer with the key number or rule.
