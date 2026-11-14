// Renders every bilingual spec (specs/NN-*.mjs exporting a function) into
// ../docs/assets/diagrams/NN-*.png (EN) and NN-*.tr.png (TR).
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const only = process.argv[2];
for (const f of fs.readdirSync('specs').sort()) {
  if (!f.endsWith('.mjs') || f.endsWith('.tr.mjs')) continue;
  const name = f.replace(/\.mjs$/, '');
  if (only && !name.startsWith(only)) continue;
  const mod = (await import(path.resolve('specs', f))).default;
  const langs = typeof mod === 'function' ? ['en', 'tr'] : ['en'];
  for (const lang of langs) {
    const out = `../docs/assets/diagrams/${name}${lang === 'tr' ? '.tr' : ''}`;
    execFileSync('node', ['build.mjs', `specs/${f}`, out, lang], { stdio: 'inherit' });
    fs.rmSync(out + '.html', { force: true });
  }
}
