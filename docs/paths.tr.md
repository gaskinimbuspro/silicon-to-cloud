---
title: Öğrenme yolları
hide:
  - toc
---

# 🧭 Öğrenme yolları

Herkesin 60 sayfayı sırayla okuması gerekmiyor. Hedefine uyan yolu seç; bitirdiğin sayfalar ✓ alır.

<div class="s2c-path" markdown>

### 🏁 Tam yolculuk · ~25 saat

Tuş basımından buluttaki yapay zekâya, sırayla. Eksiksiz bir zihinsel model istiyorsan en iyisi.

1. [“A”ya bas](01-keypress/index.md) → [CPU](02-cpu/index.md) → [İşletim sistemi](03-os/index.md) → [Programlar](04-program/index.md)
1. [Ağ](05-network/index.md) → [DNS, TCP, TLS, HTTP](06-internet/index.md)
1. [Sunucu tarafı](07-server/index.md) → [Tarayıcı](08-browser/index.md)
1. [Modern altyapı](09-infra/index.md) → [AI altyapısı](10-ai/index.md)
1. [Güvenlik](11-security/index.md) → [Dağıtık sistemler](12-distributed/index.md) → [Bulut maliyeti](13-finops/index.md)
1. [Bulut platformları](14-cloud/index.md) → [Derinlemesine Kubernetes](15-kubernetes/index.md) → [DevOps pratikleri](16-devops/index.md)

</div>

<div class="s2c-path" markdown>

### 💼 DevOps / SRE mülakat hazırlığı · ~10 saat

Mülakatçıların sevdiği konular, sordukları hata modlarıyla birlikte.

1. [Process'ler, sinyaller ve PID 1](03-os/01-processes-threads.md)
1. [CPU limitleri ve throttling](03-os/02-scheduler.md)
1. [Bellek, OOMKilled ve page cache](03-os/03-virtual-memory.md)
1. [Namespace'ler ve cgroup'lar](03-os/05-namespaces-cgroups.md)
1. [IP, subnet'ler ve routing](05-network/02-ip-routing.md)
1. [NAT, conntrack ve Service'ler](05-network/03-nat-firewall.md)
1. [DNS (Kubernetes ndots dahil)](06-internet/02-dns.md)
1. [TCP durumları ve zaman aşımları](06-internet/03-tcp.md)
1. [TLS ve sertifikalar](06-internet/04-tls.md)
1. [Yük dengeleme ve kesintisiz deploy](07-server/01-load-balancing.md)
1. [Kubernetes mimarisi](09-infra/02-kubernetes-architecture.md)
1. [Kubernetes ağı](09-infra/03-kubernetes-networking.md)
1. [CI/CD ve GitOps](09-infra/04-cicd-gitops.md)
1. [Gözlemlenebilirlik ve SLO'lar](09-infra/05-observability.md)
1. [Probe'lar ve düzgün kapanış](15-kubernetes/01-workloads.md) → [Pod sorun giderme](15-kubernetes/05-troubleshooting.md)
1. [Terraform](14-cloud/03-terraform.md) → [Olaylar ve postmortem'ler](16-devops/03-incidents.md)
1. [Güvenlik ve zero trust](11-security/index.md) → [Yeniden denemeler, zaman aşımları ve çoğunluk](12-distributed/index.md)
1. "Tekrar edilecek" sayacı sıfırlanana kadar [🎯 Pratik](practice.md) ile bitir.

</div>

<div class="s2c-path" markdown>

### 🤖 AI altyapı mühendisi · ~12 saat

GPU'lar ve servis etme hakkında düşünebilecek kadar temel, sonra AI bölümünün tamamı.

1. [Önbellekler ve bellek hiyerarşisi](02-cpu/02-caches-memory.md): bant genişliği neden belirleyici
1. [Sanal bellek](03-os/03-virtual-memory.md) ve [namespace'ler ve cgroup'lar](03-os/05-namespaces-cgroups.md)
1. [Kubernetes mimarisi](09-infra/02-kubernetes-architecture.md)
1. [AI genel bakış](10-ai/index.md) → [LLM temelleri](10-ai/01-fundamentals.md) → [GPU donanımı](10-ai/02-gpu.md)
1. [CUDA ve yazılım yığını](10-ai/03-software.md) → [Dağıtık eğitim](10-ai/04-training.md)
1. [Çıkarım ve servis etme](10-ai/05-inference.md) → [Kubernetes'te AI](10-ai/06-kubernetes.md)
1. [RAG, ajanlar ve AI gateway'leri](10-ai/07-applications.md): [AI sözlüğünü](10-ai/glossary.md) açık tut

</div>

<div class="s2c-path" markdown>

### 🌐 Web performansı ve güvenliği · ~6 saat

Herkese açık bir web sitesi ya da API'si olan herkes için.

1. [HTTP header'ları](06-internet/01-headers.md) → [HTTP/2 ve HTTP/3](06-internet/05-http2-http3.md)
1. [Önbellek desenleri](07-server/02-caching.md)
1. [Render pipeline'ı](08-browser/01-rendering.md) → [JavaScript ve event loop](08-browser/02-javascript-event-loop.md)
1. [Web performansı ve Core Web Vitals](08-browser/03-web-performance.md)
1. [Tarayıcı güvenliği](08-browser/04-browser-security.md)

</div>

<div class="s2c-path" markdown>

### 🐧 Linux'un içi · ~8 saat

Çalıştırdığın her program için kernel'in yaptıkları.

1. [Kesmeler ve sürücüler](01-keypress/01-interrupts-drivers.md) → [Linux girdi yığını](01-keypress/03-input-stack.md)
1. [Komut setleri ve assembly](02-cpu/01-isa-assembly.md) → [Boru hatları ve spekülasyon](02-cpu/03-pipeline-speculation.md)
1. [Process'ler](03-os/01-processes-threads.md) → [Zamanlayıcı](03-os/02-scheduler.md) → [Sanal bellek](03-os/03-virtual-memory.md) → [I/O ve dosya sistemleri](03-os/04-io-filesystems.md)
1. [Derleme ve linkleme](04-program/01-compile-link.md) → [ELF ve yükleyici](04-program/02-elf-loader.md) → [Runtime'lar](04-program/03-runtimes.md)

</div>

<div class="s2c-path" markdown>

### 🏗️ Production'a hazır platform mühendisi · ~14 saat

"Kıdemli" konular: bir platformu güvenli, erişilebilir ve uygun maliyetli tutan şeyler.

1. [Güvenlik: kimlik, secret'lar, zero trust ve tedarik zinciri](11-security/index.md)
1. [Dağıtık sistemler: uzlaşı, tutarlılık ve dayanıklılık](12-distributed/index.md)
1. [Bulut maliyeti (FinOps)](13-finops/index.md)
1. [Bulut platformları](14-cloud/index.md) → [Terraform](14-cloud/03-terraform.md) → [Landing zone ve DR](14-cloud/04-landing-zones-dr.md)
1. [Derinlemesine Kubernetes](15-kubernetes/index.md) → [Ölçekleme](15-kubernetes/04-autoscaling.md) → [Sorun giderme](15-kubernetes/05-troubleshooting.md)
1. [DevOps pratikleri](16-devops/index.md) → [Güvenli sürümler](16-devops/02-safe-releases.md) → [Platform mühendisliği](16-devops/04-platform.md)
1. Sonra [🎯 Pratik](practice.md) sayfasında bölüm filtresiyle kendini test et.

</div>
