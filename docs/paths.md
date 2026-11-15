---
title: Learning paths
hide:
  - toc
---

# 🧭 Learning paths

Not everyone needs to read 60 pages in order. Pick the path that matches your goal; finished pages get a ✓.

<div class="s2c-path" markdown>

### 🏁 The full journey · ~25 hours

From a keypress to AI in the cloud, in order. Best if you want the complete mental model.

1. [Press “A”](01-keypress/index.md) → [CPU](02-cpu/index.md) → [OS](03-os/index.md) → [Programs](04-program/index.md)
1. [Networking](05-network/index.md) → [DNS, TCP, TLS, HTTP](06-internet/index.md)
1. [Server side](07-server/index.md) → [Browser](08-browser/index.md)
1. [Modern infrastructure](09-infra/index.md) → [AI infrastructure](10-ai/index.md)
1. [Security](11-security/index.md) → [Distributed systems](12-distributed/index.md) → [Cloud cost](13-finops/index.md)
1. [Cloud platforms](14-cloud/index.md) → [Kubernetes in depth](15-kubernetes/index.md) → [DevOps practices](16-devops/index.md)

</div>

<div class="s2c-path" markdown>

### 💼 DevOps / SRE interview prep · ~10 hours

The topics interviewers love, with the failure modes they ask about.

1. [Processes, signals & PID 1](03-os/01-processes-threads.md)
1. [CPU limits & throttling](03-os/02-scheduler.md)
1. [Memory, OOMKilled & page cache](03-os/03-virtual-memory.md)
1. [Namespaces & cgroups](03-os/05-namespaces-cgroups.md)
1. [IP, subnets & routing](05-network/02-ip-routing.md)
1. [NAT, conntrack & Services](05-network/03-nat-firewall.md)
1. [DNS (incl. Kubernetes ndots)](06-internet/02-dns.md)
1. [TCP states & timeouts](06-internet/03-tcp.md)
1. [TLS & certificates](06-internet/04-tls.md)
1. [Load balancing & zero-downtime deploys](07-server/01-load-balancing.md)
1. [Kubernetes architecture](09-infra/02-kubernetes-architecture.md)
1. [Kubernetes networking](09-infra/03-kubernetes-networking.md)
1. [CI/CD & GitOps](09-infra/04-cicd-gitops.md)
1. [Observability & SLOs](09-infra/05-observability.md)
1. [Probes & graceful shutdown](15-kubernetes/01-workloads.md) → [Pod troubleshooting](15-kubernetes/05-troubleshooting.md)
1. [Terraform](14-cloud/03-terraform.md) → [Incidents & postmortems](16-devops/03-incidents.md)
1. [Security & zero trust](11-security/index.md) → [Retries, timeouts & quorums](12-distributed/index.md)
1. Finish with [🎯 Practice](practice.md) until the "to review" counter is zero.

</div>

<div class="s2c-path" markdown>

### 🤖 AI infrastructure engineer · ~12 hours

Enough fundamentals to reason about GPUs and serving, then the full AI section.

1. [Caches & the memory hierarchy](02-cpu/02-caches-memory.md) — why bandwidth rules
1. [Virtual memory](03-os/03-virtual-memory.md) and [namespaces & cgroups](03-os/05-namespaces-cgroups.md)
1. [Kubernetes architecture](09-infra/02-kubernetes-architecture.md)
1. [AI overview](10-ai/index.md) → [LLM fundamentals](10-ai/01-fundamentals.md) → [GPU hardware](10-ai/02-gpu.md)
1. [CUDA & software stack](10-ai/03-software.md) → [Distributed training](10-ai/04-training.md)
1. [Inference & serving](10-ai/05-inference.md) → [AI on Kubernetes](10-ai/06-kubernetes.md)
1. [RAG, agents & AI gateways](10-ai/07-applications.md) — keep the [AI glossary](10-ai/glossary.md) open

</div>

<div class="s2c-path" markdown>

### 🌐 Web performance & security · ~6 hours

For anyone who owns a public website or API.

1. [HTTP headers](06-internet/01-headers.md) → [HTTP/2 & HTTP/3](06-internet/05-http2-http3.md)
1. [Caching patterns](07-server/02-caching.md)
1. [Rendering pipeline](08-browser/01-rendering.md) → [JavaScript & event loop](08-browser/02-javascript-event-loop.md)
1. [Web performance & Core Web Vitals](08-browser/03-web-performance.md)
1. [Browser security](08-browser/04-browser-security.md)

</div>

<div class="s2c-path" markdown>

### 🐧 Linux internals · ~8 hours

What the kernel does for every program you run.

1. [Interrupts & drivers](01-keypress/01-interrupts-drivers.md) → [Linux input stack](01-keypress/03-input-stack.md)
1. [Instruction sets & assembly](02-cpu/01-isa-assembly.md) → [Pipelines & speculation](02-cpu/03-pipeline-speculation.md)
1. [Processes](03-os/01-processes-threads.md) → [Scheduler](03-os/02-scheduler.md) → [Virtual memory](03-os/03-virtual-memory.md) → [I/O & filesystems](03-os/04-io-filesystems.md)
1. [Compiling & linking](04-program/01-compile-link.md) → [ELF & the loader](04-program/02-elf-loader.md) → [Runtimes](04-program/03-runtimes.md)

</div>

<div class="s2c-path" markdown>

### 🏗️ Production-ready platform engineer · ~14 hours

The "senior" topics: what keeps a platform secure, available and affordable.

1. [Security: identity, secrets, zero trust & supply chain](11-security/index.md)
1. [Distributed systems: consensus, consistency & resilience](12-distributed/index.md)
1. [Cloud cost (FinOps)](13-finops/index.md)
1. [Cloud platforms](14-cloud/index.md) → [Terraform](14-cloud/03-terraform.md) → [Landing zones & DR](14-cloud/04-landing-zones-dr.md)
1. [Kubernetes in depth](15-kubernetes/index.md) → [Autoscaling](15-kubernetes/04-autoscaling.md) → [Troubleshooting](15-kubernetes/05-troubleshooting.md)
1. [DevOps practices](16-devops/index.md) → [Safe releases](16-devops/02-safe-releases.md) → [Platform engineering](16-devops/04-platform.md)
1. Then test yourself in [🎯 Practice](practice.md) with the chapter filter.

</div>
