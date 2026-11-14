#!/usr/bin/env python3
"""Insert one '🚨 Incident story' section into each chapter overview (EN + TR). Idempotent."""
import re
from pathlib import Path

DOCS = Path(__file__).resolve().parent.parent / "docs"

# chapter: (EN title, EN alarm, [EN clue1, clue2], EN cause, EN fix,  TR title, TR alarm, [TR clues], TR cause, TR fix)
S = {
"01-keypress": (
 "one core drowning in interrupts",
 "After a traffic increase, p99 latency of a busy API node doubles. Average CPU is only 35%, but `top` shows one core at **100% `si`**, and `ksoftirqd/0` sits at the top of the process list.",
 ["`/proc/interrupts`: the NIC's queue interrupts all increase only in the **CPU0** column; the other 15 columns barely move.",
  "`ethtool -l eth0` shows `Combined: 1`: the NIC runs with **one queue**. `systemctl status irqbalance` → not installed in the minimal image."],
 "All packet processing (hard IRQ + NET_RX softirq) lands on a single core. That core saturates while the others idle, so packets wait in the queue and latency climbs, even though *average* CPU looks fine.",
 "Enable multiple queues (`ethtool -L eth0 combined 8`), spread their IRQs (irqbalance or `smp_affinity`), and consider RPS/RFS. **Lesson:** average CPU hides per-core saturation; check `mpstat -P ALL` and the `si` column.",
 "bir çekirdek kesmelerde boğuluyor",
 "Trafik artışından sonra yoğun bir API node'unun p99 gecikmesi ikiye katlanıyor. Ortalama CPU sadece %35 ama `top` bir çekirdeği **%100 `si`**'de gösteriyor, `ksoftirqd/0` process listesinin tepesinde.",
 ["`/proc/interrupts`: NIC kuyruk kesmelerinin hepsi sadece **CPU0** sütununda artıyor; diğer 15 sütun neredeyse kıpırdamıyor.",
  "`ethtool -l eth0` `Combined: 1` gösteriyor: NIC **tek kuyrukla** çalışıyor. `systemctl status irqbalance` → minimal imajda kurulu değil."],
 "Tüm paket işleme (hard IRQ + NET_RX softirq) tek bir çekirdeğe düşüyor. O çekirdek doyarken diğerleri boşta; paketler kuyrukta bekliyor ve *ortalama* CPU iyi görünse de gecikme artıyor.",
 "Çoklu kuyruk aç (`ethtool -L eth0 combined 8`), IRQ'larını dağıt (irqbalance ya da `smp_affinity`), RPS/RFS'i düşün. **Ders:** ortalama CPU çekirdek başı doygunluğu gizler; `mpstat -P ALL`'a ve `si` sütununa bak."),
"02-cpu": (
 "the service that only crashes on new nodes",
 "The platform team adds a new node pool with a cheaper instance type. Pods scheduled there die instantly with **exit code 132**; the same image runs fine on the old nodes.",
 ["132 = 128 + 4 → **SIGILL**, *illegal instruction*. `dmesg` on the node: `traps: app[...] trap invalid opcode`.",
  "The Dockerfile builds with `-march=native` on a CI runner with AVX-512. `grep -o avx512f /proc/cpuinfo` on the new nodes → nothing."],
 "The compiler emitted AVX-512 instructions because the *build* machine had them. The new CPUs don't implement those instructions, so the first one executed traps.",
 "Build for a baseline (`-march=x86-64-v3`, or v2), or ship variants and select at runtime; use node affinity if you truly need AVX-512. **Lesson:** the ISA is a contract: binaries must target the oldest CPU they may run on.",
 "sadece yeni node'larda çöken servis",
 "Platform ekibi daha ucuz bir instance tipiyle yeni bir node havuzu ekliyor. Oraya zamanlanan pod'lar anında **çıkış kodu 132** ile ölüyor; aynı imaj eski node'larda sorunsuz çalışıyor.",
 ["132 = 128 + 4 → **SIGILL**, *illegal instruction*. Node'da `dmesg`: `traps: app[...] trap invalid opcode`.",
  "Dockerfile, AVX-512'li bir CI runner'ında `-march=native` ile derliyor. Yeni node'larda `grep -o avx512f /proc/cpuinfo` → hiçbir şey."],
 "*Build* makinesinde AVX-512 olduğu için derleyici AVX-512 komutları üretti. Yeni CPU'lar bu komutları uygulamıyor; çalıştırılan ilki trap ediyor.",
 "Bir taban seviye için derle (`-march=x86-64-v3` ya da v2) veya varyantlar gönderip çalışma anında seç; gerçekten AVX-512 gerekiyorsa node affinity kullan. **Ders:** ISA bir sözleşmedir; binary'ler çalışabilecekleri en eski CPU'yu hedeflemeli."),
"03-os": (
 "p99 spikes with 30% CPU",
 "A Go API has p99 latency spikes of 80–100 ms every few seconds. Dashboards show **30% average CPU** of its 2-CPU limit. Adding replicas doesn't help.",
 ["`container_cpu_cfs_throttled_periods_total` rises constantly: the container is **throttled** in most 100 ms periods.",
  "The node has 64 cores; the Go version is older than 1.25, so `GOMAXPROCS=64`: 64 threads burn the 200 ms quota in ~3 ms."],
 "The CPU limit is a quota per 100 ms period across all threads. With 64 runnable threads the quota is exhausted almost immediately, then the whole container is frozen until the next period: average usage stays low, tail latency explodes.",
 "Set `GOMAXPROCS` to the limit (automaxprocs, or upgrade to Go 1.25+), or remove the CPU limit and rely on requests. **Lesson:** watch throttling, not average CPU, for latency-sensitive services.",
 "%30 CPU ile p99 sıçramaları",
 "Bir Go API'sinin p99 gecikmesi birkaç saniyede bir 80–100 ms sıçrıyor. Panolar 2 CPU'luk limitinin **ortalama %30'unu** gösteriyor. Replika eklemek işe yaramıyor.",
 ["`container_cpu_cfs_throttled_periods_total` sürekli artıyor: container 100 ms'lik periyotların çoğunda **throttle** ediliyor.",
  "Node 64 çekirdekli; Go sürümü 1.25'ten eski, yani `GOMAXPROCS=64`: 64 thread 200 ms'lik kotayı ~3 ms'de yakıyor."],
 "CPU limiti, tüm thread'lerin toplamı için 100 ms'lik periyot başına bir kotadır. 64 çalışabilir thread ile kota neredeyse hemen tükenir, sonra tüm container bir sonraki periyoda kadar donar: ortalama kullanım düşük kalır, kuyruk gecikmesi patlar.",
 "`GOMAXPROCS`'u limite eşitle (automaxprocs ya da Go 1.25+'e yükselt) veya CPU limitini kaldırıp request'lere güven. **Ders:** gecikmeye hassas servislerde ortalama CPU'yu değil throttling'i izle."),
"04-program": (
 "“no such file or directory” for a file that exists",
 "To shrink images, a team switches the runtime stage from `debian:bookworm-slim` to `alpine`. The new pods crash-loop with `exec /app/server: no such file or directory`, yet `ls -l /app/server` inside the image shows the file.",
 ["`file /app/server` → *dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2*.",
  "`ls /lib64/ld-linux-x86-64.so.2` in the Alpine image → missing. Alpine uses musl and its loader is `/lib/ld-musl-x86_64.so.1`."],
 "`execve` succeeds in finding the file, but the kernel must start the ELF's **interpreter** (PT_INTERP) first, and that path doesn't exist. The error refers to the missing loader, not to your binary.",
 "Build statically (`CGO_ENABLED=0` for Go, musl targets for Rust), or use a glibc-based slim/distroless base. **Lesson:** a dynamic binary drags its loader and libc ABI with it; check with `readelf -l` and `ldd`.",
 "var olan bir dosya için “no such file or directory”",
 "İmajları küçültmek için bir ekip çalışma aşamasını `debian:bookworm-slim`'den `alpine`'e geçiriyor. Yeni pod'lar `exec /app/server: no such file or directory` ile crash-loop'a giriyor; oysa imajın içinde `ls -l /app/server` dosyayı gösteriyor.",
 ["`file /app/server` → *dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2*.",
  "Alpine imajında `ls /lib64/ld-linux-x86-64.so.2` → yok. Alpine musl kullanır ve yükleyicisi `/lib/ld-musl-x86_64.so.1`'dir."],
 "`execve` dosyayı buluyor ama kernel önce ELF'in **yorumlayıcısını** (PT_INTERP) başlatmak zorunda ve o yol yok. Hata senin binary'ni değil eksik yükleyiciyi kastediyor.",
 "Statik derle (Go için `CGO_ENABLED=0`, Rust için musl hedefleri) ya da glibc tabanlı slim/distroless bir taban kullan. **Ders:** dinamik bir binary yükleyicisini ve libc ABI'sini de yanında taşır; `readelf -l` ve `ldd` ile kontrol et."),
"05-network": (
 "peering that broke half the cluster",
 "A new VPC peering to the data team's VPC goes live. Minutes later, some pods can no longer reach each other, and the data team can reach *some* of your services but not others.",
 ["Your cluster's pod CIDR is `10.244.0.0/16`. The data VPC is `10.244.0.0/16` too (both teams used a common default).",
  "`ip route get 10.244.3.8` on a node now picks the peering route for part of the range: longest-prefix match prefers the more specific routes that were just added."],
 "Overlapping address ranges make routing ambiguous: packets for pod IPs are sent to the other VPC (and vice versa), depending on which route is more specific.",
 "Remove the peering, renumber one side (new pod CIDR or secondary VPC CIDR), and keep a central IPAM plan. **Lesson:** VPC, pod, service, on-prem and peered CIDRs must never overlap; plan them before the first cluster.",
 "cluster'ın yarısını bozan peering",
 "Veri ekibinin VPC'sine yeni bir VPC peering devreye giriyor. Dakikalar sonra bazı pod'lar birbirine ulaşamıyor; veri ekibi servislerinin *bazılarına* ulaşabiliyor, diğerlerine ulaşamıyor.",
 ["Cluster'ının pod CIDR'ı `10.244.0.0/16`. Veri VPC'si de `10.244.0.0/16` (iki ekip de yaygın bir varsayılanı kullanmış).",
  "Bir node'da `ip route get 10.244.3.8` artık aralığın bir kısmı için peering rotasını seçiyor: en uzun önek eşleşmesi az önce eklenen daha özel rotaları tercih ediyor."],
 "Çakışan adres aralıkları routing'i belirsizleştirir: pod IP'lerine giden paketler, hangi rota daha özelse ona göre diğer VPC'ye gönderilir (ve tersi).",
 "Peering'i kaldır, bir tarafı yeniden numaralandır (yeni pod CIDR'ı ya da ikincil VPC CIDR'ı) ve merkezi bir IPAM planı tut. **Ders:** VPC, pod, service, şirket içi ve peer CIDR'ları asla çakışmamalı; ilk cluster'dan önce planla."),
"06-internet": (
 "the mysterious +5 seconds",
 "Calls from pods to an external payment API sometimes take **exactly 5 seconds longer** than usual. It's random, about 1 in 50 requests, and never happens from developers' laptops.",
 ["The extra time is spent before the TCP connect: it's DNS. `/etc/resolv.conf` in the pod: `options ndots:5`, `timeout:5` is the resolver default.",
  "`conntrack -S` on the nodes shows `insert_failed` increasing. The resolver sends the A and AAAA queries in parallel over the same UDP socket."],
 "Two parallel UDP DNS packets with the same 5-tuple race in conntrack; one gets dropped, and the client waits the full 5 s timeout before retrying. `ndots:5` multiplies the number of lookups, so the race happens often.",
 "Run **NodeLocal DNSCache**, use FQDNs with a trailing dot or lower `ndots`, and/or `single-request-reopen`. **Lesson:** exact multiples of a timeout (5 s, 1 s, 3 s) are a fingerprint: find the timeout, then find what's being dropped.",
 "gizemli +5 saniye",
 "Pod'lardan harici bir ödeme API'sine yapılan çağrılar bazen normalden **tam 5 saniye daha uzun** sürüyor. Rastgele, yaklaşık 50 istekte bir, ve geliştiricilerin laptoplarından hiç olmuyor.",
 ["Ek süre TCP bağlantısından önce harcanıyor: DNS. Pod'daki `/etc/resolv.conf`: `options ndots:5`, `timeout:5` çözücü varsayılanı.",
  "Node'larda `conntrack -S`, `insert_failed`'ın arttığını gösteriyor. Çözücü A ve AAAA sorgularını aynı UDP soketinden paralel gönderiyor."],
 "Aynı 5'liye sahip iki paralel UDP DNS paketi conntrack'te yarışır; biri düşer ve istemci yeniden denemeden önce 5 sn'lik zaman aşımının tamamını bekler. `ndots:5` sorgu sayısını katladığı için yarış sık olur.",
 "**NodeLocal DNSCache** çalıştır, sonunda nokta olan tam isimler kullan ya da `ndots`'u düşür ve/veya `single-request-reopen`. **Ders:** bir zaman aşımının tam katları (5 sn, 1 sn, 3 sn) bir parmak izidir: zaman aşımını bul, sonra neyin düştüğünü bul."),
"07-server": (
 "502s on every deploy",
 "Every rollout of the checkout service produces a burst of **502 Bad Gateway** errors for 5–10 seconds. The app logs show nothing unusual; the errors come from the ingress.",
 ["Ingress logs: `upstream prematurely closed connection` / `connect() failed (111: Connection refused)` to IPs of pods that are **Terminating**.",
  "The pod has no `preStop` hook, and the app exits immediately on SIGTERM. Endpoint removal and SIGTERM happen **in parallel**, not one after the other."],
 "When a pod is deleted, Kubernetes sends SIGTERM and removes the pod from EndpointSlices at the same time. The ingress/kube-proxy learn about the removal a moment later, so for a few seconds they keep sending requests to a process that has already exited.",
 "Add a `preStop` sleep (5–10 s), handle SIGTERM gracefully (stop accepting, finish in-flight, then exit), make readiness fail on shutdown, and set `terminationGracePeriodSeconds` accordingly. **Lesson:** zero-downtime deploys are a contract between app, Kubernetes and load balancer.",
 "her deploy'da 502'ler",
 "Ödeme servisinin her rollout'u 5–10 saniye boyunca bir **502 Bad Gateway** patlaması üretiyor. Uygulama logları olağandışı bir şey göstermiyor; hatalar ingress'ten geliyor.",
 ["Ingress logları: **Terminating** durumdaki pod'ların IP'lerine `upstream prematurely closed connection` / `connect() failed (111: Connection refused)`.",
  "Pod'da `preStop` hook'u yok ve uygulama SIGTERM'de hemen çıkıyor. Endpoint'ten çıkarma ve SIGTERM art arda değil **paralel** oluyor."],
 "Bir pod silinince Kubernetes aynı anda SIGTERM gönderir ve pod'u EndpointSlice'lardan çıkarır. Ingress/kube-proxy çıkarmayı bir an sonra öğrenir; birkaç saniye boyunca zaten çıkmış bir process'e istek göndermeye devam ederler.",
 "Bir `preStop` sleep'i (5–10 sn) ekle, SIGTERM'i düzgün işle (kabul etmeyi bırak, işlemdekileri bitir, sonra çık), kapanışta readiness'ı başarısız yap ve `terminationGracePeriodSeconds`'ı buna göre ayarla. **Ders:** kesintisiz deploy uygulama, Kubernetes ve load balancer arasında bir sözleşmedir."),
"08-browser": (
 "the release that tripled LCP",
 "Field data shows LCP p75 jumping from **1.2 s to 3.8 s** right after a frontend release. Lighthouse in CI still looks green; nothing changed on the servers.",
 ["The release added a lazy-loading library and applied `loading=\"lazy\"` to **all** images, including the hero image at the top of the page.",
  "DevTools waterfall: the hero image request now starts only after the JS bundle has run, ~2.4 s after navigation."],
 "The LCP element (the hero image) is no longer discovered by the preload scanner and is deliberately deferred, so the browser downloads it late and the largest paint happens late.",
 "Load the hero eagerly with `fetchpriority=\"high\"` (and `<link rel=preload>` if it's in CSS), lazy-load only offscreen images, and add a RUM alert on LCP p75. **Lesson:** lab tools can miss what real users see; watch field data per release.",
 "LCP'yi üçe katlayan sürüm",
 "Saha verisi, bir ön uç sürümünden hemen sonra LCP p75'in **1,2 sn'den 3,8 sn'ye** fırladığını gösteriyor. CI'daki Lighthouse hâlâ yeşil; sunucularda bir şey değişmedi.",
 ["Sürüm bir tembel yükleme kütüphanesi ekledi ve sayfanın tepesindeki ana görsel dahil **tüm** görsellere `loading=\"lazy\"` uyguladı.",
  "DevTools şelalesi: ana görsel isteği artık sadece JS bundle'ı çalıştıktan sonra, gezinmeden ~2,4 sn sonra başlıyor."],
 "LCP elemanı (ana görsel) artık preload tarayıcısı tarafından keşfedilmiyor ve bilerek erteleniyor; tarayıcı onu geç indiriyor ve en büyük boyama geç oluyor.",
 "Ana görseli `fetchpriority=\"high\"` ile hemen yükle (CSS'teyse `<link rel=preload>` ekle), sadece ekran dışı görselleri tembel yükle ve LCP p75 için bir RUM alarmı ekle. **Ders:** laboratuvar araçları gerçek kullanıcıların gördüğünü kaçırabilir; sürüm başına saha verisini izle."),
"09-infra": (
 "the hotfix that kept disappearing",
 "During an incident, an engineer raises a Deployment's memory limit with `kubectl edit`. The pods restart with the new limit… and two minutes later they're back on the old one and OOMKill again.",
 ["`kubectl get deploy -o yaml` shows the annotation of the GitOps tool; the Argo CD UI shows the app as *OutOfSync → Synced* right after the edit.",
  "The Application has `syncPolicy.automated.selfHeal: true`."],
 "Argo CD continuously reconciles the cluster to git. The manual edit is drift, and self-heal reverts it to the declared state, exactly as designed.",
 "Make the change in git (a fast-tracked PR), or temporarily pause auto-sync for that app during the incident and commit afterwards. **Lesson:** with GitOps, git is the only place where changes stick; have a documented break-glass procedure.",
 "sürekli kaybolan hotfix",
 "Bir olay sırasında bir mühendis bir Deployment'ın bellek limitini `kubectl edit` ile artırıyor. Pod'lar yeni limitle yeniden başlıyor… ve iki dakika sonra eski limite dönüp yine OOMKill oluyorlar.",
 ["`kubectl get deploy -o yaml` GitOps aracının anotasyonunu gösteriyor; Argo CD arayüzü düzenlemeden hemen sonra uygulamayı *OutOfSync → Synced* olarak gösteriyor.",
  "Application'da `syncPolicy.automated.selfHeal: true` var."],
 "Argo CD cluster'ı sürekli git'e uzlaştırır. Elle yapılan düzenleme bir sapmadır ve self-heal onu tasarlandığı gibi bildirilen duruma geri döndürür.",
 "Değişikliği git'te yap (hızlandırılmış bir PR) ya da olay sırasında o uygulama için otomatik senkronu geçici olarak durdur ve sonra commit et. **Ders:** GitOps'ta değişikliklerin kalıcı olduğu tek yer git'tir; belgelenmiş bir acil durum prosedürün olsun."),
"10-ai": (
 "longer context, collapsing throughput",
 "To support long documents, the team raises `--max-model-len` of a vLLM deployment from 8k to 128k tokens. Throughput drops by 70%, latency explodes and logs fill with *preempted* sequences, although GPU memory isn't fuller than before.",
 ["vLLM's startup log: the number of KV-cache blocks is unchanged, but *maximum concurrency for 131072 tokens per request* dropped to ~1.5×.",
  "Most requests are still short, but a few long ones grab huge parts of the KV cache, and the scheduler preempts and recomputes others to make room."],
 "GPU memory after the weights is the KV cache. It's per token (~128 KB/token for an 8B model in FP16), so a few very long sequences consume what dozens of normal ones would use, and batching collapses.",
 "Route long-context requests to a separate pool, set `--max-num-seqs`/`--max-num-batched-tokens` deliberately, use FP8 KV cache and prefix caching, or use a larger/more GPUs (tensor parallel). **Lesson:** in LLM serving, capacity planning means KV-cache planning.",
 "daha uzun bağlam, çöken throughput",
 "Uzun dokümanları desteklemek için ekip bir vLLM deployment'ının `--max-model-len` değerini 8k'dan 128k token'a çıkarıyor. GPU belleği öncekinden dolu olmasa da throughput %70 düşüyor, gecikme patlıyor ve loglar *preempted* dizilerle doluyor.",
 ["vLLM'in başlangıç logu: KV-cache blok sayısı değişmemiş ama *istek başına 131072 token için azami eşzamanlılık* ~1,5×'e düşmüş.",
  "İsteklerin çoğu hâlâ kısa ama birkaç uzun istek KV cache'in büyük kısmını kapıyor ve zamanlayıcı yer açmak için diğerlerini preempt edip yeniden hesaplıyor."],
 "Ağırlıklardan sonra kalan GPU belleği KV cache'tir. Token başınadır (FP16'da 8B'lik bir model için ~128 KB/token); birkaç çok uzun dizi onlarca normal dizinin kullanacağı kadarını tüketir ve batch'leme çöker.",
 "Uzun bağlamlı istekleri ayrı bir havuza yönlendir, `--max-num-seqs`/`--max-num-batched-tokens`'ı bilinçli ayarla, FP8 KV cache ve prefix caching kullan ya da daha büyük/daha çok GPU kullan (tensor parallel). **Ders:** LLM servis etmede kapasite planlaması KV-cache planlamasıdır."),
}

def block(tr, t):
    title, alarm, clues, cause, fix = t
    if tr:
        h, a, c, r, f, intro = "## 🚨 Olay hikâyesi: ", "Alarm", "🔍 İpucu", "🎯 Kök neden", "🛠️ Çözüm ve ders", "Önce kendin teşhis etmeye çalış, sonra ipuçlarını tek tek aç."
    else:
        h, a, c, r, f, intro = "## 🚨 Incident story: ", "The alarm", "🔍 Clue", "🎯 Root cause", "🛠️ Fix and lesson", "Try to diagnose it yourself first, then open the clues one by one."
    out = [f"{h}{title}\n", f'!!! failure "{a}"\n    {alarm}\n', f"{intro}\n"]
    for i, cl in enumerate(clues, 1):
        out.append(f'??? info "{c} {i}"\n    {cl}\n')
    out.append(f'??? success "{r}"\n    {cause}\n')
    out.append(f'??? tip "{f}"\n    {fix}\n')
    return "\n".join(out) + "\n"

for ch, v in S.items():
    for tr in (False, True):
        p = DOCS / ch / ("index.tr.md" if tr else "index.md")
        s = p.read_text()
        s = re.sub(r"## 🚨 .*?(?=\n## )\n", "", s, flags=re.S)  # idempotent
        t = v[5:] if tr else v[:5]
        m = re.search(r"^## 🧭", s, re.M) or re.search(r"^## 🧪", s, re.M)
        s = s[: m.start()] + block(tr, t) + s[m.start():]
        p.write_text(s)
print("incident stories inserted")
