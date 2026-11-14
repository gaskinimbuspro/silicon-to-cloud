---
title: Ana sayfa
hide:
  - navigation
---

# Silicon to Cloud

Klavyede bir tuşa basmaktan, internetteki bir uygulamanın arayüzünün ekranımıza gelmesine kadar her adımı
**diagramlarla**, **kendi anladığım haliyle** öğrendiğim bir seri. Hedefim, aylar sonra bir temel konuyu unuttuğumda
2 dakikada hatırlayabileceğim bir kaynak oluşturmak. Seri **AI altyapısıyla** bitiyor.

## Her bölümde

| | |
|---|---|
| 📖 **Terimler ve kısaltmalar** | Her terim: açılımı, ne olduğu, nasıl çalıştığı |
| 🗺️ **Büyük resim diagramı** | Bütün akış tek bir mimari diagramda |
| 🔍 **Katman katman anlatım** | Her adımda ne oluyor ve neden önemli |
| 🧪 **Kendin dene** | Terminalde gerçekten görebileceğin komutlar |
| 🃏 **Hatırlatma kartı** | 2 dakikalık özet |
| ❓ **Kendini test et** | Cevapları gizli sorular |
| 📚 **Kaynaklar** | Derine inmek için birincil kaynaklar |

## Yol haritası

| # | Bölüm | Konular | Derin dalışlar |
|---|---|---|---|
| 1 | [“A” tuşuna bastığımızda ne olur?](01-keypress/index.md) | donanım, kesme, kernel, ekran | [1.1](01-keypress/01-interrupts-drivers.md) · [1.2](01-keypress/02-usb-hid.md) · [1.3](01-keypress/03-input-stack.md) |
| 2 | [CPU & Assembly](02-cpu/index.md) | register, bellek hiyerarşisi, komut döngüsü, stack | [2.1](02-cpu/01-isa-assembly.md) · [2.2](02-cpu/02-caches-memory.md) · [2.3](02-cpu/03-pipeline-speculation.md) |
| 3 | [İşletim sistemi](03-os/index.md) | process, thread, zamanlayıcı, sanal bellek, syscall | [3.1](03-os/01-processes-threads.md) · [3.2](03-os/02-scheduler.md) · [3.3](03-os/03-virtual-memory.md) · [3.4](03-os/04-io-filesystems.md) · [3.5](03-os/05-namespaces-cgroups.md) |
| 4 | [Bir program nasıl çalışır](04-program/index.md) | derleme, link, ELF, execve, dinamik bağlayıcı, runtime | [4.1](04-program/01-compile-link.md) · [4.2](04-program/02-elf-loader.md) · [4.3](04-program/03-runtimes.md) |
| 5 | [Ağın temelleri](05-network/index.md) | katmanlar, MAC/IP, ARP, switch, router, NAT | [5.1](05-network/01-ethernet-arp-vlan.md) · [5.2](05-network/02-ip-routing.md) · [5.3](05-network/03-nat-firewall.md) · [5.4](05-network/04-cloud-networking.md) |
| 6 | [DNS, TCP, TLS, HTTP](06-internet/index.md) | URL'den ilk byte'a | [6.1](06-internet/01-headers.md) · [6.2](06-internet/02-dns.md) · [6.3](06-internet/03-tcp.md) · [6.4](06-internet/04-tls.md) · [6.5](06-internet/05-http2-http3.md) · [6.6](06-internet/06-apis.md) |
| 7 | [Sunucu tarafı](07-server/index.md) | CDN, load balancer, uygulama sunucuları, cache, veritabanı, kuyruk | [7.1](07-server/01-load-balancing.md) · [7.2](07-server/02-caching.md) · [7.3](07-server/03-databases.md) · [7.4](07-server/04-queues-events.md) |
| 8 | [Tarayıcı](08-browser/index.md) | DOM, CSSOM, JS, layout, paint, composite | [8.1](08-browser/01-rendering.md) · [8.2](08-browser/02-javascript-event-loop.md) · [8.3](08-browser/03-web-performance.md) · [8.4](08-browser/04-browser-security.md) |
| 9 | [Modern altyapı](09-infra/index.md) | container, Kubernetes, CI/CD, GitOps, gözlemlenebilirlik | [9.1](09-infra/01-containers-images.md) · [9.2](09-infra/02-kubernetes-architecture.md) · [9.3](09-infra/03-kubernetes-networking.md) · [9.4](09-infra/04-cicd-gitops.md) · [9.5](09-infra/05-observability.md) |
| 10 | [AI altyapısı](10-ai/index.md) | GPU, KV cache, batching, CUDA, RAG, Kubernetes'te GPU | [10.1](10-ai/01-fundamentals.md) · [10.2](10-ai/02-gpu.md) · [10.3](10-ai/03-software.md) · [10.4](10-ai/04-training.md) · [10.5](10-ai/05-inference.md) · [10.6](10-ai/06-kubernetes.md) · [10.7](10-ai/07-applications.md) |
