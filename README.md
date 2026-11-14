# Silicon to Cloud

From pressing a key to an internet application's UI on screen, and all the way to AI infrastructure.
I'm learning how it all works, layer by layer, in diagrams and in my own words.

📖 **Site:** https://gaskinimbuspro.github.io/silicon-to-cloud/ · 🇹🇷 [Türkçe](https://gaskinimbuspro.github.io/silicon-to-cloud/tr/)

![Chapter 1](docs/assets/diagrams/01-keypress.png)

## Chapters

| # | Chapter |
|---|---|
| 1 | [What happens when you press “A”?](docs/01-keypress/index.md) · [TR](docs/01-keypress/index.tr.md) |
| 2 | [CPU & Assembly](docs/02-cpu/index.md) · [TR](docs/02-cpu/index.tr.md) |
| 3 | [The operating system](docs/03-os/index.md) · [TR](docs/03-os/index.tr.md) |
| 4 | [How a program runs](docs/04-program/index.md) · [TR](docs/04-program/index.tr.md) |
| 5 | [Networking fundamentals](docs/05-network/index.md) · [TR](docs/05-network/index.tr.md) |
| 6 | [DNS, TCP, TLS, HTTP](docs/06-internet/index.md) · [TR](docs/06-internet/index.tr.md) |
| 7 | [Server side](docs/07-server/index.md) · [TR](docs/07-server/index.tr.md) |
| 8 | [The browser](docs/08-browser/index.md) · [TR](docs/08-browser/index.tr.md) |
| 9 | [Modern infrastructure](docs/09-infra/index.md) · [TR](docs/09-infra/index.tr.md) |
| 10 | [AI infrastructure](docs/10-ai/index.md) · [TR](docs/10-ai/index.tr.md) |

## Repo layout

```text
docs/                  # Site content (MkDocs Material)
  01-keypress/         # One folder per chapter (index.md = EN, index.tr.md = TR)
  assets/diagrams/     # Rendered diagrams (*.png = EN, *.tr.png = TR)
diagrams/              # Diagrams as code
  build.mjs            # spec → HTML (Lucide icons) → PNG
  specs/*.mjs          # One definition per diagram
```

## Run locally

```bash
# Site
pip install -r requirements.txt
mkdocs serve                       # http://127.0.0.1:8000

# Render a diagram
cd diagrams && npm install && npx playwright install chromium
npm run build -- specs/01-keypress.mjs ../docs/assets/diagrams/01-keypress
```

Every push to `main` publishes the site to GitHub Pages via GitHub Actions.
