# Contributing

Thanks for helping make Silicon to Cloud better! 🙌

## Quick ways to help

- **Found a mistake or an outdated fact?** Open a [correction issue](https://github.com/gaskinimbuspro/silicon-to-cloud/issues/new?template=correction.yml).
- **A command in "Try it yourself" or a lab doesn't work?** Open a [broken lab issue](https://github.com/gaskinimbuspro/silicon-to-cloud/issues/new?template=lab.yml).
- **Want a topic explained?** [Suggest a topic](https://github.com/gaskinimbuspro/silicon-to-cloud/issues/new?template=topic.yml).
- **Typos or small fixes**: use the ✏️ edit button on any page, it opens a pull request.

## Writing content

- Every page follows [CONTENT_STANDARD.md](CONTENT_STANDARD.md): key terms → big picture → how it works → DevOps connection → try it → cheat sheet → questions → sources.
- English (`page.md`) and Turkish (`page.tr.md`) must have the same sections and diagrams. The quality workflow checks this.
- Diagrams are code in `diagrams/specs/`; render with `cd diagrams && npm run build:all`.
- Prefer primary sources (RFCs, kernel docs, official docs) and give a source for every number that can change.

## Local checks

```bash
pip install -r requirements.txt
python3 tools/build_data.py && python3 tools/build_home.py
python3 tools/check_parity.py
mkdocs build --strict
```
