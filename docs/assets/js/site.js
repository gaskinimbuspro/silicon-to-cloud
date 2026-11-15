/* Silicon to Cloud — progress tracking, reading meta, practice quiz. No server, data stays in localStorage. */
(function () {
  "use strict";
  const TR = (document.documentElement.lang || "").toLowerCase().startsWith("tr");
  const T = (en, tr) => (TR ? tr : en);

  // ---- site root & page key (EN and TR share progress) ----
  const me = document.currentScript || [...document.scripts].find(s => /assets\/js\/site\.js/.test(s.src));
  let ROOT = new URL(".", me ? me.src.replace(/assets\/js\/site\.js.*$/, "") : location.href).pathname; // e.g. /silicon-to-cloud/ or /silicon-to-cloud/tr/
  ROOT = ROOT.replace(/tr\/$/, "");
  const keyOf = (pathname) => {
    let p = decodeURI(pathname);
    if (p.startsWith(ROOT)) p = p.slice(ROOT.length);
    p = p.replace(/^tr\//, "").replace(/index\.html$/, "");
    if (p && !p.endsWith("/")) p += "/";
    return p; // "" = home, "01-keypress/", "01-keypress/01-interrupts-drivers/"
  };
  const PAGE = keyOf(location.pathname);

  // ---- storage ----
  const LS = {
    get(k, d) { try { const v = localStorage.getItem("s2c:" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("s2c:" + k, JSON.stringify(v)); } catch (e) {} },
  };
  const readSet = () => new Set(LS.get("read", []));
  const saveRead = (s) => LS.set("read", [...s]);

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "s2c-toast"; t.textContent = msg; document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add("show"));
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, 2600);
  }

  function bumpStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const s = LS.get("streak", { last: null, days: 0 });
    if (s.last === today) return s;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    s.days = s.last === y ? s.days + 1 : 1; s.last = today; LS.set("streak", s); return s;
  }

  // ---- nav checkmarks ----
  function markNav() {
    const read = readSet();

  // Sidebar: turn "3 · Title" / "3.1 · Title" into a number badge + title
  document.querySelectorAll(".md-nav--primary .md-ellipsis").forEach(el => {
    const m = el.textContent.trim().match(/^(\d+(?:\.\d+)?) · (.+)$/);
    if (!m) return;
    const sub = m[1].includes(".");
    el.textContent = "";
    const n = document.createElement("span");
    n.className = "s2c-n" + (sub ? " s2c-n--sub" : "");
    n.textContent = m[1];
    const t = document.createElement("span");
    t.textContent = m[2];
    el.append(n, t); el.classList.add("s2c-has-n");
  });

    document.querySelectorAll(".md-nav__link[href]").forEach(a => {
      const k = keyOf(new URL(a.getAttribute("href"), location.href).pathname);
      a.classList.toggle("s2c-read", k !== "" && read.has(k));
    });
    document.querySelectorAll(".s2c-path li").forEach(li => {
      const ks = [...li.querySelectorAll("a[href]")].map(a => keyOf(new URL(a.getAttribute("href"), location.href).pathname));
      li.classList.toggle("s2c-li-read", ks.length > 0 && ks.every(k => read.has(k)));
    });
  }

  // ---- content pages: reading meta, scroll bar, mark-as-read ----
  function contentPage() {
    const article = document.querySelector(".md-content article");
    if (!article || PAGE === "" || document.querySelector(".s2c-hero") || document.querySelector(".s2c-quiz")) return;
    LS.set("last", { key: PAGE, href: location.pathname, title: document.title.split(" - ")[0] });

    const words = (article.innerText || "").split(/\s+/).length;
    const mins = Math.max(1, Math.round(words / 200));
    const diagrams = article.querySelectorAll('img[src*="diagrams/"]').length;
    const qs = article.querySelectorAll("details.question").length;
    const h1 = article.querySelector("h1");
    if (h1) {
      const meta = document.createElement("div");
      meta.className = "s2c-meta";
      meta.innerHTML = `<span>⏱ ${mins} ${T("min read", "dk okuma")}</span>` +
        (diagrams ? `<span>🗺️ ${diagrams} ${T("diagrams", "diagram")}</span>` : "") +
        (qs ? `<span>❓ ${qs} ${T("questions", "soru")}</span>` : "");
      h1.after(meta);
    }

    const bar = document.createElement("div"); bar.className = "s2c-progress-top"; document.body.appendChild(bar);
    const onScroll = () => {
      const h = document.documentElement; const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();

    const box = document.createElement("div"); box.className = "s2c-done-box";
    const render = () => {
      const done = readSet().has(PAGE);
      box.innerHTML = `<p>${done ? T("✅ You've finished this page. Nice!", "✅ Bu sayfayı bitirdin. Harika!")
        : T("Finished reading? Mark it and watch your progress grow.", "Okumayı bitirdin mi? İşaretle, ilerlemen büyüsün.")}</p>` +
        `<span style="display:flex;gap:.5rem;flex-wrap:wrap">` +
        `<a class="s2c-btn ghost" href="${ROOT}${TR ? "tr/" : ""}practice/">🎯 ${T("Practice", "Pratik yap")}</a>` +
        `<button class="s2c-btn ${done ? "done" : ""}">${done ? T("✓ Read", "✓ Okundu") : T("Mark as read", "Okundu işaretle")}</button></span>`;
      box.querySelector("button").onclick = () => {
        const s = readSet();
        if (s.has(PAGE)) s.delete(PAGE); else { s.add(PAGE); const st = bumpStreak();
          toast(T(`🎉 Page done! ${s.size} pages read · 🔥 ${st.days}-day streak`, `🎉 Sayfa bitti! ${s.size} sayfa okundu · 🔥 ${st.days} günlük seri`)); }
        saveRead(s); render(); markNav();
      };
    };
    render();
    const anchor = [...article.querySelectorAll("h2")].find(h => /Sources|Kaynaklar/.test(h.textContent));
    (anchor ? anchor : article.lastElementChild).before(box);
  }

  // ---- home: chapter progress ----
  function home() {
    const cards = document.querySelectorAll(".s2c-card[data-chapter]");
    if (!cards.length) return;
    const read = readSet(); let total = 0, done = 0;
    cards.forEach(c => {
      const ch = c.dataset.chapter; const n = +c.dataset.pages;
      const d = [...read].filter(k => k.startsWith(ch)).length;
      total += n; done += Math.min(d, n);
      c.querySelector(".s2c-bar i").style.width = (n ? (Math.min(d, n) / n) * 100 : 0) + "%";
      c.querySelector(".s2c-count").textContent = `${Math.min(d, n)} / ${n} ${T("pages", "sayfa")}`;
      c.classList.toggle("complete", d >= n);
    });
    const pct = total ? Math.round((done / total) * 100) : 0;
    const ring = document.querySelector(".s2c-ring"); if (ring) { ring.style.setProperty("--p", pct); ring.querySelector("b").textContent = pct + "%"; }
    const st = LS.get("streak", { days: 0, last: null });
    const today = new Date().toISOString().slice(0, 10), y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    const streak = st.last === today || st.last === y ? st.days : 0;
    const info = document.querySelector(".s2c-you p");
    if (info) info.textContent = done
      ? T(`${done} of ${total} pages read · 🔥 ${streak}-day streak`, `${total} sayfanın ${done} tanesi okundu · 🔥 ${streak} günlük seri`)
      : T("Nothing read yet — your progress is saved in this browser.", "Henüz okunan yok; ilerlemen bu tarayıcıda saklanır.");
    const last = LS.get("last", null); const btn = document.querySelector(".s2c-you .s2c-btn");
    if (last && btn) { btn.href = (TR ? ROOT + "tr/" + last.key : ROOT + last.key); btn.textContent = T("Continue: ", "Devam et: ") + last.title + " →"; }
  }

  // ---- practice quiz ----
  async function practice() {
    const box = document.querySelector(".s2c-quiz"); if (!box) return;
    let data = [];
    try { data = await (await fetch(box.dataset.src)).json(); } catch (e) { box.textContent = "Could not load questions."; return; }
    const sel = box.querySelector("select");
    const chapters = [...new Map(data.map(q => [q.ch, q.chTitle])).entries()];
    sel.innerHTML = `<option value="">${T("All chapters", "Tüm bölümler")} (${data.length})</option>` +
      chapters.map(([c, t]) => `<option value="${c}">${t} (${data.filter(q => q.ch === c).length})</option>`).join("");
    const weak = LS.get("weak", {}); let score = LS.get("score", { ok: 0, no: 0 }); let cur = null;
    const pick = () => {
      const pool = data.filter(q => !sel.value || q.ch === sel.value);
      const weighted = pool.flatMap(q => Array(1 + 3 * (weak[q.id] || 0)).fill(q));   // missed questions come back more often
      cur = weighted[Math.floor(Math.random() * weighted.length)];
      box.classList.remove("revealed");
      box.querySelector(".q-src").innerHTML = `<a href="${ROOT}${TR ? "tr/" : ""}${cur.url}">${cur.page}</a>`;
      box.querySelector(".q-text").textContent = cur.q;
      box.querySelector(".q-answer").textContent = cur.a;
      box.querySelector(".s2c-score").innerHTML = `<span class="ok">✓ ${score.ok}</span><span class="no">✗ ${score.no}</span><span>🧠 ${T("to review", "tekrar edilecek")}: ${Object.keys(weak).filter(k => weak[k] > 0).length}</span>`;
    };
    box.querySelector(".q-show").onclick = () => box.classList.add("revealed");
    box.querySelector(".q-ok").onclick = () => { score.ok++; weak[cur.id] = Math.max(0, (weak[cur.id] || 0) - 1); LS.set("weak", weak); LS.set("score", score); pick(); };
    box.querySelector(".q-no").onclick = () => { score.no++; weak[cur.id] = Math.min(3, (weak[cur.id] || 0) + 1); LS.set("weak", weak); LS.set("score", score); pick(); };
    box.querySelector(".q-skip").onclick = pick;
    sel.onchange = pick;
    addEventListener("keydown", e => {
      if (e.target.tagName === "SELECT") return;
      if (e.key === " ") { e.preventDefault(); box.classList.add("revealed"); }
      if (e.key === "ArrowRight" || e.key === "1") box.querySelector(".q-ok").click();
      if (e.key === "ArrowLeft" || e.key === "2") box.querySelector(".q-no").click();
    });
    pick();
  }

  const init = () => { contentPage(); home(); markNav(); practice(); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
