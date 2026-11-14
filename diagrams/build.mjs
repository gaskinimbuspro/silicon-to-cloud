// Diagrams as code: spec (JS) -> HTML (Lucide icons) -> PNG (headless Chrome)
// Usage: node build.mjs specs/01-keypress.mjs out/01-keypress
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const [, , specPath, outBase] = process.argv;
const spec = (await import(path.resolve(specPath))).default;
const icon = (name) =>
  fs.readFileSync(`node_modules/lucide-static/icons/${name}.svg`, 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/width="24"/, 'width="30"').replace(/height="24"/, 'height="30"')
    .replace(/stroke-width="2"/, 'stroke-width="1.6"');

const C = {
  orange: ['#F97316', '#FFF4EC'], amber: ['#D97706', '#FFF8E6'], red: ['#E11D48', '#FFF0F3'],
  purple: ['#7C3AED', '#F5F0FF'], blue: ['#2563EB', '#EEF4FF'], green: ['#059669', '#ECFBF4'],
  teal: ['#0891B2', '#E9F9FC'], slate: ['#475569', '#F1F5F9'],
};

const nodeHtml = (n, color) => `
  <div class="node" id="${n.id}" style="--c:${C[color][0]};--bg:${C[color][1]}">
    <div class="ico">${icon(n.icon)}</div>
    <div class="t">${n.title}</div>
    <div class="s">${n.sub}</div>
    ${n.tag ? `<div class="tag">${n.tag}</div>` : ''}
  </div>`;

const itemHtml = (it, color) => Array.isArray(it)
  ? `<div class="col">${it.map((n) => nodeHtml(n, color)).join('')}</div>`
  : nodeHtml(it, color);

const groupHtml = (g) => `
  <div class="group" id="${g.id}" style="--c:${C[g.color][0]};--bg:${C[g.color][1]}">
    <div class="gh"><span class="gn">${g.n}</span><span class="gi">${icon(g.icon)}</span>${g.title}<span class="gs">${g.sub || ''}</span></div>
    <div class="gb ${g.reverse ? 'rev' : ''}">${g.items.map((it) => itemHtml(it, g.color)).join('')}</div>
  </div>`;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0}
body{font-family:Inter,sans-serif;background:#fff;color:#0f172a;width:${spec.width}px}
#canvas{position:relative;padding:44px 48px 36px;background:
  radial-gradient(circle at 1px 1px,#e2e8f0 1px,transparent 0) 0 0/22px 22px,#fbfcfe}
h1{font-size:30px;font-weight:800;letter-spacing:-.02em}
.sub{color:#64748b;font-size:15px;margin:6px 0 30px}
.row{display:flex;gap:84px;align-items:flex-start;margin-bottom:84px}
.row.rev{flex-direction:row-reverse;justify-content:flex-start}
.row.fill{justify-content:space-between}
.group{background:color-mix(in srgb,var(--bg) 70%,#fff);border:1.5px solid color-mix(in srgb,var(--c) 35%,#fff);
  border-radius:18px;padding:0 18px 18px;box-shadow:0 1px 2px #0f172a0d,0 8px 24px -12px #0f172a22;position:relative}
.gh{display:flex;align-items:center;gap:8px;font-weight:700;font-size:14px;color:var(--c);
  padding:12px 2px;letter-spacing:.02em;text-transform:uppercase}
.gh .gn{background:var(--c);color:#fff;border-radius:7px;width:22px;height:22px;display:grid;place-items:center;font-size:12px}
.gh .gi svg{width:18px;height:18px;display:block}
.gh .gs{margin-left:auto;font-weight:600;font-size:11px;color:#fff;background:var(--c);padding:3px 8px;border-radius:99px;text-transform:none;letter-spacing:0}
.gb{display:flex;gap:78px;align-items:flex-start}
.gb.rev{flex-direction:row-reverse}
.col{display:flex;flex-direction:column;gap:22px}
.node{width:138px;background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:14px 10px 12px;text-align:center;
  box-shadow:0 1px 2px #0f172a0f,0 4px 12px -6px #0f172a1f;position:relative;z-index:2}
.ico{width:58px;height:58px;margin:0 auto 9px;border-radius:14px;display:grid;place-items:center;
  background:var(--bg);color:var(--c);border:1px solid color-mix(in srgb,var(--c) 22%,#fff)}
.t{font-weight:700;font-size:13.5px;line-height:1.2}
.s{font-family:'DejaVu Sans Mono',monospace;font-size:10.5px;color:#64748b;margin-top:4px}
.tag{display:inline-block;margin-top:7px;font-family:'DejaVu Sans Mono',monospace;font-size:10px;font-weight:600;
  color:var(--c);background:var(--bg);border-radius:6px;padding:2px 6px}
svg#wires{position:absolute;inset:0;z-index:1;overflow:visible;pointer-events:none}
#labels{position:absolute;inset:0;z-index:3;pointer-events:none}
.lbl{position:absolute;transform:translate(-50%,-50%);display:flex;align-items:center;gap:5px;white-space:nowrap;
  background:#fff;border:1px solid #e2e8f0;border-radius:99px;padding:2px 8px 2px 2px;font-size:11px;font-weight:600;color:#334155;
  box-shadow:0 1px 3px #0f172a14}
.lbl b{background:#0f172a;color:#fff;border-radius:99px;min-width:19px;height:19px;display:grid;place-items:center;font-size:10.5px}
.boundary{position:absolute;z-index:3;border-left:2.5px dashed #94a3b8}
.boundary span{position:absolute;top:-14px;left:50%;transform:translate(-50%,-100%);white-space:nowrap;font-size:11px;font-weight:700;
  color:#475569;background:#fff;border:1.5px dashed #94a3b8;border-radius:8px;padding:3px 8px}
.foot{display:flex;gap:18px;align-items:center;border-top:1px solid #e2e8f0;padding-top:18px;color:#475569;font-size:13px}
.foot .lat{margin-left:auto;font-weight:700;color:#0f172a;background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:8px 14px}
.foot .k{display:inline-flex;align-items:center;gap:6px}
.foot .k i{width:12px;height:12px;border-radius:4px;display:inline-block}
</style></head><body><div id="canvas">
<h1>${spec.title}</h1><div class="sub">${spec.subtitle}</div>
${spec.rows.map((r) => `<div class="row ${r.dir || ''}">${r.groups.map(groupHtml).join('')}</div>`).join('')}
<div class="foot">${spec.legend.map(([c, t]) => `<span class="k"><i style="background:${C[c][0]}"></i>${t}</span>`).join('')}
<span class="lat">${spec.footer}</span></div>
<svg id="wires"><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs></svg><div id="labels"></div>
</div>
<script>
const edges=${JSON.stringify(spec.edges)}, boundaries=${JSON.stringify(spec.boundaries || [])};
const cv=document.getElementById('canvas').getBoundingClientRect();
const R=id=>{const r=document.getElementById(id).getBoundingClientRect();return{l:r.left-cv.left,r:r.right-cv.left,t:r.top-cv.top,b:r.bottom-cv.top,cx:(r.left+r.right)/2-cv.left,cy:(r.top+r.bottom)/2-cv.top}};
const P=(r,s)=>({l:[r.l,r.cy],r:[r.r,r.cy],t:[r.cx,r.t],b:[r.cx,r.b]})[s];
let svg='',lab='';
for(const e of edges){const [f,t,fs,ts,n,txt,opt={}]=e;const a=P(R(f),fs),b=P(R(t),ts);let pts;
 const H=s=>s==='l'||s==='r';
 if(H(fs)&&H(ts)){const mx=opt.mx??(fs===ts?(fs==='l'?Math.min(a[0],b[0])-30:Math.max(a[0],b[0])+30):(a[0]+b[0])/2);pts=[a,[mx,a[1]],[mx,b[1]],b]}
 else if(!H(fs)&&!H(ts)){const my=opt.via?(R(opt.via[0]).b+R(opt.via[1]).t)/2:opt.my??(fs===ts?(fs==='b'?Math.max(a[1],b[1])+26:Math.min(a[1],b[1])-26):(a[1]+b[1])/2);pts=[a,[a[0],my],[b[0],my],b]}
 else if(H(fs)){pts=[a,[b[0],a[1]],b]} else {pts=[a,[a[0],b[1]],b]}
 const d=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+','+p[1].toFixed(1)).join(' ');
 svg+='<path d="'+d+'" fill="none" stroke="#334155" stroke-width="1.6" stroke-linejoin="round" '+(opt.dash?'stroke-dasharray="5 4" ':'')+'marker-end="url(#ah)"/>';
 // place the label at the middle of the longest segment
 let best=0,bi=0;for(let i=0;i<pts.length-1;i++){const L=Math.hypot(pts[i+1][0]-pts[i][0],pts[i+1][1]-pts[i][1]);if(L>best){best=L;bi=i}}
 const lx=opt.lx??(pts[bi][0]+pts[bi+1][0])/2, ly=opt.ly??(pts[bi][1]+pts[bi+1][1])/2;
 lab+='<div class="lbl" style="left:'+lx+'px;top:'+ly+'px">'+(n?'<b>'+n+'</b>':'')+txt+'</div>';}
document.getElementById('wires').insertAdjacentHTML('beforeend',svg);
document.getElementById('labels').innerHTML=lab;
for(const bd of boundaries){const A=R(bd.left),B=R(bd.right);const x=(A.l>B.r)?(A.l+B.r)/2:(A.r+B.l)/2;
 const top=Math.min(A.t,B.t)-6,bot=Math.max(A.b,B.b)+6;
 document.getElementById('labels').insertAdjacentHTML('beforeend','<div class="boundary" style="left:'+x+'px;top:'+top+'px;height:'+(bot-top)+'px"><span>'+bd.text+'</span></div>');}
</script></body></html>`;

fs.mkdirSync(path.dirname(outBase), { recursive: true });
fs.writeFileSync(outBase + '.html', html);
const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const page = await browser.newPage({ viewport: { width: spec.width, height: 800 }, deviceScaleFactor: 2 });
await page.goto('file://' + path.resolve(outBase + '.html'));
await page.waitForTimeout(300);
await (await page.$('#canvas')).screenshot({ path: outBase + '.png' });
await browser.close();
console.log('ok', outBase + '.png');
