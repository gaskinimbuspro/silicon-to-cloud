---
title: "AI sözlüğü"
description: AI altyapısı terim ve kısaltmalarının A–Z listesi; her biri onu açıklayan sayfaya bağlı.
---

# 📖 AI altyapısı sözlüğü

Bölüm 10'da kullanılan her kısaltma, açılımı ve tek satırlık açıklamasıyla. Daha derine inmek için sayfaya tıkla.

| Terim | Açılımı | Anlamı | Sayfa |
|---|---|---|---|
| **A2A** | Agent2Agent protocol | Ajanların diğer ajanlarla konuşması için açık protokol. | [07](07-applications.md) |
| **Activation checkpointing** | — | Aktivasyonları saklamak yerine backward'da yeniden hesaplamak. | [04](04-training.md) |
| **AdamW** | Adam with decoupled Weight decay | LLM eğitimi için standart optimizer. | [04](04-training.md) |
| **AI gateway** | — | Tüm modellerin önündeki proxy: anahtar, kota, yönlendirme, yedek, önbellek. | [07](07-applications.md) |
| **All-reduce** | — | Her GPU'nun tüm girdilerin toplamıyla bittiği toplu işlem. | [04](04-training.md) |
| **ANN** | Approximate Nearest Neighbour | Hızlı, yaklaşık vektör benzerlik araması. | [07](07-applications.md) |
| **Attention** | — | Her token'ın diğer token'ları tartmasını sağlayan mekanizma (Q·K → V). | [01](01-fundamentals.md) |
| **BF16** | Brain Floating Point 16 | FP32 aralığına sahip 2 byte'lık format; eğitimde varsayılan. | [02](02-gpu.md) |
| **BM25** | Best Matching 25 | Klasik anahtar kelime arama sıralama fonksiyonu. | [07](07-applications.md) |
| **BPE** | Byte-Pair Encoding | Sık karakter çiftlerini birleştiren tokenizer algoritması. | [01](01-fundamentals.md) |
| **CDI** | Container Device Interface | Container runtime'ları için cihazları tanımlayan standart spec. | [03](03-software.md) |
| **Checkpoint** | — | Eğitime devam etmek için kaydedilmiş ağırlık + optimizer durumu. | [04](04-training.md) |
| **Chunked prefill** | — | Uzun prompt'ları bölüp prefill'i decode adımlarıyla karıştırmak. | [05](05-inference.md) |
| **Continuous batching** | — | Batch'i her decode adımında yeniden kurmak. | [05](05-inference.md) |
| **cuBLAS / cuDNN** | CUDA BLAS / CUDA Deep Neural Network library | NVIDIA'nın ayarlı matmul / sinir ağı kernel kütüphaneleri. | [03](03-software.md) |
| **CUDA** | Compute Unified Device Architecture | NVIDIA'nın GPU programlama platformu. | [03](03-software.md) |
| **DCGM** | Data Center GPU Manager | GPU filosu izleme ve teşhis aracı. | [03](03-software.md) |
| **Decode** | — | Çıktı token'larını adım adım üretmek. | [05](05-inference.md) |
| **DP / FSDP / ZeRO** | Data Parallel / Fully Sharded DP / Zero Redundancy Optimizer | Modeli GPU başına kopyala / durumunu GPU'lara parçala. | [04](04-training.md) |
| **DPO** | Direct Preference Optimization | 'A, B'den iyi' çiftlerinden tercih ince ayarı. | [01](01-fundamentals.md) |
| **DRA** | Dynamic Resource Allocation | Cihazları özelliklere göre talep etmek için Kubernetes API'si (v1.34'te GA). | [06](06-kubernetes.md) |
| **Embedding** | — | Bir token'ın ya da metnin anlamını temsil eden vektör. | [01](01-fundamentals.md) |
| **EP** | Expert Parallel | MoE uzmanlarını farklı GPU'lara yerleştirmek. | [04](04-training.md) |
| **EPP** | Endpoint Picker | Gateway API Inference Extension'da pod'ları istek başına puanlayan router. | [06](06-kubernetes.md) |
| **Evals** | Evaluations | LLM davranışının değerlendiricilerle sistematik testi. | [07](07-applications.md) |
| **FLOPS** | Floating-Point Operations per Second | Hesaplama hızının birimi. | [02](02-gpu.md) |
| **FP8 / FP4** | 8-bit / 4-bit floating point | Daha hızlı eğitim/inference için düşük hassasiyetli formatlar. | [02](02-gpu.md) |
| **Gang scheduling** | — | Bir işin tüm pod'larını ya birlikte başlat ya hiç. | [06](06-kubernetes.md) |
| **GEMM** | General Matrix Multiply | Temel matris çarpımı işlemi. | [03](03-software.md) |
| **GPU** | Graphics Processing Unit | AI için kullanılan devasa paralel işlemci. | [02](02-gpu.md) |
| **GPU Operator** | — | GPU node'larında sürücü, toolkit, eklenti ve metrikleri yöneten Kubernetes operator'ü. | [06](06-kubernetes.md) |
| **GQA / MQA** | Grouped-Query / Multi-Query Attention | KV cache'i küçültmek için daha az K/V head'i. | [05](05-inference.md) |
| **Guardrails** | — | Girdi/çıktı güvenlik kontrolleri (PII, injection, politika). | [07](07-applications.md) |
| **HBM** | High Bandwidth Memory | TB/sn bant genişlikli, istiflenmiş GPU belleği. | [02](02-gpu.md) |
| **HNSW** | Hierarchical Navigable Small World | Grafik tabanlı ANN vektör indeksi. | [07](07-applications.md) |
| **IB / RoCE** | InfiniBand / RDMA over Converged Ethernet | GPU sunucuları arasındaki scale-out RDMA ağları. | [02](02-gpu.md) |
| **Inference** | — | Çıktı üretmek için eğitilmiş bir modeli çalıştırmak. | [05](05-inference.md) |
| **Kueue** | — | Kotalar ve gang kabulüyle Kubernetes iş kuyruklama. | [06](06-kubernetes.md) |
| **KV cache** | Key-Value cache | Geçmiş token'ların saklanan attention key/value'ları. | [05](05-inference.md) |
| **LLM** | Large Language Model | Metni token token sürdüren devasa sinir ağı. | [01](01-fundamentals.md) |
| **llm-d** | — | Kubernetes üzerinde dağıtık LLM inference için CNCF projesi. | [05](05-inference.md) |
| **LoRA / QLoRA** | Low-Rank Adaptation / Quantized LoRA | Küçük adaptör matrisleriyle ucuz fine-tuning. | [01](01-fundamentals.md) |
| **LWS** | LeaderWorkerSet | Çok node'lu inference replikaları için Kubernetes API'si. | [06](06-kubernetes.md) |
| **MCP** | Model Context Protocol | AI uygulamalarını araçlara ve veriye bağlayan açık standart. | [07](07-applications.md) |
| **MFU** | Model FLOPs Utilization | Elde edilen faydalı FLOP ÷ tepe FLOPS. | [04](04-training.md) |
| **MIG** | Multi-Instance GPU | Bir GPU'nun izole örneklere donanım düzeyinde bölünmesi. | [03](03-software.md) |
| **MoE** | Mixture of Experts | Çok sayıda uzman MLP'si olan, token başına azı aktif model. | [01](01-fundamentals.md) |
| **MPS** | Multi-Process Service | Tek bir GPU bağlamını process'ler arasında paylaşmak. | [03](03-software.md) |
| **MTP** | Multi-Token Prediction | Birkaç token tahmin eden ek head'ler; taslak olarak kullanılır. | [05](05-inference.md) |
| **NCCL** | NVIDIA Collective Communications Library | All-reduce ve diğer toplu işlemler için kütüphane. | [03](03-software.md) |
| **NVLink / NVSwitch** | — | Hızlı GPU'dan GPU'ya bağlantılar ve onları bağlayan switch. | [02](02-gpu.md) |
| **P/D disaggregation** | Prefill/Decode disaggregation | Prefill ve decode'u ayrı worker havuzlarında çalıştırmak. | [05](05-inference.md) |
| **PagedAttention** | — | Bir blok tablosuyla eşlenen sabit boyutlu bloklarda KV cache. | [05](05-inference.md) |
| **Prefill** | — | Tüm prompt'u tek paralel geçişte işlemek. | [05](05-inference.md) |
| **Prefix caching** | — | Ortak prompt öneklerinin KV cache'ini yeniden kullanmak. | [05](05-inference.md) |
| **Prompt injection** | — | Girdilere ya da getirilen içeriğe gizlenmiş kötü niyetli talimatlar. | [07](07-applications.md) |
| **Quantization** | — | Ağırlıkları/KV'yi daha az bitle saklamak (FP8, INT4, FP4). | [05](05-inference.md) |
| **RAG** | Retrieval-Augmented Generation | Prompt'a getirilen dokümanlarla cevap vermek. | [07](07-applications.md) |
| **RDMA / GPUDirect** | Remote Direct Memory Access | NIC, veriyi CPU olmadan (GPU) bellekleri arasında taşır. | [02](02-gpu.md) |
| **Reranker** | — | Getirilen parçaları isabet için yeniden puanlayan model. | [07](07-applications.md) |
| **RLHF** | Reinforcement Learning from Human Feedback | Modeli insanların tercih ettiği cevaplara doğru ayarlamak. | [01](01-fundamentals.md) |
| **SFT** | Supervised Fine-Tuning | Örnek prompt → cevap çiftleri üzerinde eğitim. | [01](01-fundamentals.md) |
| **SM** | Streaming Multiprocessor | Bir GPU'nun 100+ hesaplama bloğundan biri. | [02](02-gpu.md) |
| **Speculative decoding** | — | Birkaç token'ı ucuza taslakla, tek büyük geçişte doğrula. | [05](05-inference.md) |
| **Tensor Core** | — | Matris çarpımına ayrılmış GPU birimi. | [02](02-gpu.md) |
| **Token** | — | Bir metin parçası; modellerin okuyup yazdığı birim. | [01](01-fundamentals.md) |
| **TP / PP** | Tensor Parallel / Pipeline Parallel | Matrisleri / katmanları GPU'lara bölmek. | [04](04-training.md) |
| **Transformer** | — | Modern LLM'lerin mimarisi: üst üste attention + MLP katmanları. | [01](01-fundamentals.md) |
| **TTFT / TPOT** | Time To First Token / Time Per Output Token | İlk token'a kadar / token'lar arası gecikme. | [05](05-inference.md) |
| **Vector DB** | — | Embedding'leri saklamak ve aramak için veritabanı. | [07](07-applications.md) |
| **vLLM / SGLang** | — | Popüler açık kaynak LLM servis motorları. | [05](05-inference.md) |
