#!/usr/bin/env python3
"""Generate docs/index.md and docs/index.tr.md (home pages) from chapter metadata.
Run from the repo root: python3 tools/build_home.py"""
from pathlib import Path

DOCS = Path(__file__).resolve().parent.parent / "docs"

STAGES = [
    ("hw", "Hardware", "Donanım"),
    ("os", "OS & programs", "OS ve programlar"),
    ("net", "Network", "Ağ"),
    ("app", "Applications", "Uygulamalar"),
    ("cloud", "Cloud", "Bulut"),
    ("ai", "AI", "AI"),
]
# dir, stage, icon, EN title, EN blurb, TR title, TR blurb
CHAPTERS = [
    ("01-keypress", "hw", "⌨️", "Press “A”", "Interrupts, USB HID, kernel input, compositor, pixels", "“A”ya bas", "Kesmeler, USB HID, kernel girdisi, compositor, pikseller"),
    ("02-cpu", "hw", "🧠", "CPU & Assembly", "Registers, instructions, caches, pipelines, speculation", "CPU ve Assembly", "Register'lar, komutlar, önbellekler, boru hatları, spekülasyon"),
    ("03-os", "os", "🐧", "Operating system", "Processes, scheduler, virtual memory, syscalls, cgroups", "İşletim sistemi", "Process'ler, zamanlayıcı, sanal bellek, syscall'lar, cgroup'lar"),
    ("04-program", "os", "⚙️", "How a program runs", "Compiler, linker, ELF, loader, JVM/V8/Python/Go", "Program nasıl çalışır", "Derleyici, linker, ELF, yükleyici, JVM/V8/Python/Go"),
    ("05-network", "net", "🔌", "Networking", "Ethernet, ARP, IP routing, NAT, firewalls, VPCs", "Ağ", "Ethernet, ARP, IP routing, NAT, firewall'lar, VPC'ler"),
    ("06-internet", "net", "🌍", "DNS, TCP, TLS, HTTP", "From a URL to the first byte, headers, HTTP/3, APIs", "DNS, TCP, TLS, HTTP", "URL'den ilk byte'a, header'lar, HTTP/3, API'ler"),
    ("07-server", "app", "🖥️", "Server side", "Load balancers, caches, databases, queues", "Sunucu tarafı", "Load balancer'lar, önbellekler, veritabanları, kuyruklar"),
    ("08-browser", "app", "🎨", "The browser", "Rendering, event loop, Web Vitals, browser security", "Tarayıcı", "Render, event loop, Web Vitals, tarayıcı güvenliği"),
    ("09-infra", "cloud", "☸️", "Modern infrastructure", "Containers, Kubernetes, GitOps, observability", "Modern altyapı", "Container'lar, Kubernetes, GitOps, gözlemlenebilirlik"),
    ("11-security", "cloud", "🔐", "Security", "Identity, secrets, zero trust, supply chain", "Güvenlik", "Kimlik, secret'lar, zero trust, tedarik zinciri"),
    ("12-distributed", "cloud", "🕸️", "Distributed systems", "Consensus, CAP, consistency, resilience", "Dağıtık sistemler", "Consensus, CAP, tutarlılık, dayanıklılık"),
    ("13-finops", "cloud", "💰", "Cloud cost (FinOps)", "Where the money goes and how to save it", "Bulut maliyeti (FinOps)", "Para nereye gidiyor, nasıl tasarruf edilir"),
    ("14-cloud", "cloud", "☁️", "Cloud platforms", "Regions, compute, storage, Terraform, landing zones, DR", "Bulut platformları", "Bölgeler, compute, depolama, Terraform, landing zone, DR"),
    ("15-kubernetes", "cloud", "☸️", "Kubernetes in depth", "Workloads, storage, Helm, autoscaling, troubleshooting", "Derinlemesine Kubernetes", "Workload'lar, depolama, Helm, ölçekleme, sorun giderme"),
    ("16-devops", "cloud", "🔁", "DevOps practices", "Git flow, safe releases, incidents, platform engineering", "DevOps pratikleri", "Git akışı, güvenli sürümler, olaylar, platform mühendisliği"),
    ("10-ai", "ai", "🤖", "AI infrastructure", "LLMs, GPUs, training, inference, K8s, RAG & agents", "AI altyapısı", "LLM'ler, GPU'lar, eğitim, çıkarım, K8s, RAG ve ajanlar"),
]

def pages_in(d):
    p = DOCS / d
    return len([f for f in p.glob("*.md") if not f.name.endswith(".tr.md")]) if p.exists() else 0

def build(tr):
    L = (lambda en, t: t if tr else en)
    chs = [c for c in CHAPTERS if (DOCS / c[0]).exists()]
    n_pages = sum(pages_in(c[0]) for c in chs)
    n_diag = len([f for f in (DOCS / "assets/diagrams").glob("*.png") if not f.name.endswith(".tr.png")])
    n_q = sum((DOCS / c[0] / f).read_text().count('??? question') for c in chs for f in [x.name for x in (DOCS / c[0]).glob("*.md") if not x.name.endswith(".tr.md")])
    out = [f"---\ntitle: {L('Home', 'Ana sayfa')}\nhide:\n  - navigation\n  - toc\n---\n"]
    out.append(f"""<div class="s2c-hero" markdown>

# {L('From a single keypress to AI in the cloud', 'Tek bir tuştan buluttaki yapay zekâya')}

{L('How computers, the internet and modern infrastructure <b>really</b> work — explained layer by layer, with architecture diagrams, hands-on labs and quick quizzes. Written by a DevOps engineer, for engineers who want to understand the whole stack.',
   'Bilgisayarlar, internet ve modern altyapı <b>gerçekte</b> nasıl çalışır: katman katman, mimari diagramlar, uygulamalı lab\'ler ve kısa quiz\'lerle. Bir DevOps mühendisinden, tüm yığını anlamak isteyen mühendislere.')}

<div class="s2c-ctas">
<a class="s2c-btn" href="01-keypress/">🚀 {L('Start the journey', 'Yolculuğa başla')}</a>
<a class="s2c-btn ghost" href="paths/">🧭 {L('Pick a learning path', 'Bir öğrenme yolu seç')}</a>
<a class="s2c-btn ghost" href="practice/">🎯 {L('Practice', 'Pratik yap')}</a>
</div>
<div class="s2c-chips"><span>📚 {len(chs)} {L('chapters', 'bölüm')}</span><span>📄 {n_pages} {L('pages', 'sayfa')}</span><span>🗺️ {n_diag} {L('diagrams', 'diagram')}</span><span>❓ {n_q} {L('questions', 'soru')}</span><span>🇬🇧 / 🇹🇷</span></div>
</div>

<div class="s2c-you">
<div class="s2c-ring"><b>0%</b></div>
<div><h3>{L('Your journey', 'Senin yolculuğun')}</h3><p>…</p></div>
<a class="s2c-btn" href="01-keypress/">{L('Start with chapter 1 →', '1. bölümle başla →')}</a>
</div>
""")
    out.append(f"## {L('🗺️ The journey', '🗺️ Yolculuk')}\n")
    out.append(L("Each card is a chapter. Your progress fills the bar as you mark pages as read.",
                 "Her kart bir bölüm. Sayfaları okundu olarak işaretledikçe çubuk dolar.") + "\n")
    stage = {sid: L(sen, stre) for sid, sen, stre in STAGES}
    order = [sid for sid, _, _ in STAGES]
    out.append('<div class="s2c-grid">')
    for c in sorted(chs, key=lambda c: order.index(c[1])):
        d, sid, ico, ten, ben, ttr, btr = c
        num = d.split("-")[0].lstrip("0")
        out.append(f'<a class="s2c-card s2c-{sid}" href="{d}/" data-chapter="{d}/" data-pages="{pages_in(d)}"><span class="s2c-num">{num}</span>'
                   f'<span class="s2c-pill">{stage[sid]}</span><span class="s2c-ico">{ico}</span><strong>{L(ten, ttr)}</strong><small>{L(ben, btr)}</small>'
                   f'<span class="s2c-count"></span><span class="s2c-bar"><i></i></span></a>')
    out.append("</div>\n")
    out.append(f"""
## {L('✨ How every page works', '✨ Her sayfa nasıl çalışır')}

<div class="s2c-features">
<div><b>📖 {L('Key terms first', 'Önce terimler')}</b>{L('Every abbreviation expanded. Hover any acronym for its meaning.', 'Her kısaltmanın açılımı var. Anlamı için herhangi bir kısaltmanın üstüne gel.')}</div>
<div><b>🗺️ {L('Big-picture diagram', 'Büyük resim diagramı')}</b>{L('The whole flow at a glance — click to zoom.', 'Tüm akış bir bakışta; büyütmek için tıkla.')}</div>
<div><b>⚙️ {L('How it works', 'Nasıl çalışır')}</b>{L('Step-by-step explanations with concept diagrams.', 'Kavram diagramlarıyla adım adım açıklamalar.')}</div>
<div><b>🔧 {L('DevOps connection', 'DevOps bağlantısı')}</b>{L('Why it matters in production, with real failure modes.', 'Production\'da neden önemli, gerçek hata modlarıyla.')}</div>
<div><b>🧪 {L('Try it yourself', 'Kendin dene')}</b>{L('Commands and labs — or open everything in Codespaces.', 'Komutlar ve lab\'ler; ya da hepsini Codespaces\'te aç.')}</div>
<div><b>❓ {L('Test yourself', 'Kendini test et')}</b>{L('Five questions per page, plus a practice mode with spaced repetition.', 'Sayfa başına beş soru, artı aralıklı tekrar ile pratik modu.')}</div>
</div>

## {L('🧭 Not sure where to start?', '🧭 Nereden başlayacağını bilmiyor musun?')}

- **{L('New to the low level?', 'Alt seviyeye yeni misin?')}** → {L('read in order from', 'sırayla oku:')} [{L('chapter 1', '1. bölüm')}](01-keypress/index.md).
- **{L('Preparing for DevOps / SRE interviews?', 'DevOps / SRE mülakatına mı hazırlanıyorsun?')}** → {L('follow the', 'şu yolu izle:')} [{L('interview path', 'mülakat yolu')}](paths.md).
- **{L('Want to run AI on Kubernetes?', 'Kubernetes\'te AI mı çalıştırmak istiyorsun?')}** → {L('jump to', 'doğrudan geç:')} [{L('AI infrastructure', 'AI altyapısı')}](10-ai/index.md).
- **{L('Have 5 minutes?', '5 dakikan mı var?')}** → [{L('practice a few random questions', 'rastgele birkaç soru çöz')}](practice.md) {L('or download the', 'ya da')} [{L('Anki flashcards', 'Anki kartlarını')}](assets/data/flashcards.{'tr' if tr else 'en'}.csv){'' if not tr else ' indir'}.

!!! tip "{L('Your progress stays with you', 'İlerlemen seninle kalır')}"
    {L('Read pages are ticked ✓ in the menu and counted on this page. Everything is stored only in your browser — no account, no tracking.',
       'Okuduğun sayfalar menüde ✓ ile işaretlenir ve bu sayfada sayılır. Her şey sadece tarayıcında saklanır; hesap yok, takip yok.')}

[{L('What\'s new →', 'Yenilikler →')}](changelog.md)
""")
    return "\n".join(out)

(DOCS / "index.md").write_text(build(False))
(DOCS / "index.tr.md").write_text(build(True))
print("home pages written")
