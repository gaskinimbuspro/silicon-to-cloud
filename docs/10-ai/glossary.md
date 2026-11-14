---
title: "AI glossary"
description: A–Z of AI infrastructure terms and abbreviations, each linked to the page that explains it.
---

# 📖 AI infrastructure glossary

Every abbreviation used in Chapter 10, expanded and explained in one line. Click a page to go deeper.

| Term | Stands for | Meaning | Page |
|---|---|---|---|
| **A2A** | Agent2Agent protocol | Open protocol for agents to talk to other agents. | [07](07-applications.md) |
| **Activation checkpointing** | — | Recompute activations in backward instead of storing them. | [04](04-training.md) |
| **AdamW** | Adam with decoupled Weight decay | The standard optimizer for LLM training. | [04](04-training.md) |
| **AI gateway** | — | Proxy in front of all models: keys, quotas, routing, fallback, caching. | [07](07-applications.md) |
| **All-reduce** | — | Collective where every GPU ends up with the sum of all inputs. | [04](04-training.md) |
| **ANN** | Approximate Nearest Neighbour | Fast approximate vector similarity search. | [07](07-applications.md) |
| **Attention** | — | Mechanism letting each token weigh other tokens (Q·K → V). | [01](01-fundamentals.md) |
| **BF16** | Brain Floating Point 16 | 2-byte format with FP32's range; default for training. | [02](02-gpu.md) |
| **BM25** | Best Matching 25 | Classic keyword search ranking function. | [07](07-applications.md) |
| **BPE** | Byte-Pair Encoding | Tokenizer algorithm merging frequent character pairs. | [01](01-fundamentals.md) |
| **CDI** | Container Device Interface | Standard spec describing devices for container runtimes. | [03](03-software.md) |
| **Checkpoint** | — | Saved weights + optimizer state to resume training. | [04](04-training.md) |
| **Chunked prefill** | — | Splitting long prompts so prefill mixes with decode steps. | [05](05-inference.md) |
| **Continuous batching** | — | Rebuilding the batch at every decode step. | [05](05-inference.md) |
| **cuBLAS / cuDNN** | CUDA BLAS / CUDA Deep Neural Network library | NVIDIA libraries of tuned matmul / neural-net kernels. | [03](03-software.md) |
| **CUDA** | Compute Unified Device Architecture | NVIDIA's GPU programming platform. | [03](03-software.md) |
| **DCGM** | Data Center GPU Manager | GPU fleet monitoring and diagnostics. | [03](03-software.md) |
| **Decode** | — | Generating output tokens one step at a time. | [05](05-inference.md) |
| **DP / FSDP / ZeRO** | Data Parallel / Fully Sharded DP / Zero Redundancy Optimizer | Copy the model per GPU / shard its state across GPUs. | [04](04-training.md) |
| **DPO** | Direct Preference Optimization | Preference fine-tuning from 'A better than B' pairs. | [01](01-fundamentals.md) |
| **DRA** | Dynamic Resource Allocation | Kubernetes API to claim devices by attributes (GA in v1.34). | [06](06-kubernetes.md) |
| **Embedding** | — | Vector representing the meaning of a token or text. | [01](01-fundamentals.md) |
| **EP** | Expert Parallel | Placing MoE experts on different GPUs. | [04](04-training.md) |
| **EPP** | Endpoint Picker | Router in the Gateway API Inference Extension scoring pods per request. | [06](06-kubernetes.md) |
| **Evals** | Evaluations | Systematic tests of LLM behaviour with graders. | [07](07-applications.md) |
| **FLOPS** | Floating-Point Operations per Second | Unit of compute speed. | [02](02-gpu.md) |
| **FP8 / FP4** | 8-bit / 4-bit floating point | Low-precision formats for faster training/inference. | [02](02-gpu.md) |
| **Gang scheduling** | — | Start all pods of a job together or none. | [06](06-kubernetes.md) |
| **GEMM** | General Matrix Multiply | The core matrix multiplication operation. | [03](03-software.md) |
| **GPU** | Graphics Processing Unit | Massively parallel processor used for AI. | [02](02-gpu.md) |
| **GPU Operator** | — | Kubernetes operator managing driver, toolkit, plugins, metrics on GPU nodes. | [06](06-kubernetes.md) |
| **GQA / MQA** | Grouped-Query / Multi-Query Attention | Fewer K/V heads to shrink the KV cache. | [05](05-inference.md) |
| **Guardrails** | — | Input/output safety checks (PII, injection, policy). | [07](07-applications.md) |
| **HBM** | High Bandwidth Memory | Stacked GPU memory with TB/s bandwidth. | [02](02-gpu.md) |
| **HNSW** | Hierarchical Navigable Small World | Graph-based ANN vector index. | [07](07-applications.md) |
| **IB / RoCE** | InfiniBand / RDMA over Converged Ethernet | Scale-out RDMA networks between GPU servers. | [02](02-gpu.md) |
| **Inference** | — | Running a trained model to produce outputs. | [05](05-inference.md) |
| **Kueue** | — | Kubernetes job queueing with quotas and gang admission. | [06](06-kubernetes.md) |
| **KV cache** | Key-Value cache | Stored attention keys/values of past tokens. | [05](05-inference.md) |
| **LLM** | Large Language Model | Huge neural network that continues text token by token. | [01](01-fundamentals.md) |
| **llm-d** | — | CNCF project for distributed LLM inference on Kubernetes. | [05](05-inference.md) |
| **LoRA / QLoRA** | Low-Rank Adaptation / Quantized LoRA | Cheap fine-tuning with small adapter matrices. | [01](01-fundamentals.md) |
| **LWS** | LeaderWorkerSet | Kubernetes API for multi-node inference replicas. | [06](06-kubernetes.md) |
| **MCP** | Model Context Protocol | Open standard connecting AI apps to tools and data. | [07](07-applications.md) |
| **MFU** | Model FLOPs Utilization | Useful FLOPs achieved ÷ peak FLOPS. | [04](04-training.md) |
| **MIG** | Multi-Instance GPU | Hardware partitioning of one GPU into isolated instances. | [03](03-software.md) |
| **MoE** | Mixture of Experts | Model with many expert MLPs, few active per token. | [01](01-fundamentals.md) |
| **MPS** | Multi-Process Service | Sharing one GPU context between processes. | [03](03-software.md) |
| **MTP** | Multi-Token Prediction | Extra heads predicting several tokens; used as a draft. | [05](05-inference.md) |
| **NCCL** | NVIDIA Collective Communications Library | Library for all-reduce and other collectives. | [03](03-software.md) |
| **NVLink / NVSwitch** | — | Fast GPU-to-GPU links and the switch connecting them. | [02](02-gpu.md) |
| **P/D disaggregation** | Prefill/Decode disaggregation | Running prefill and decode on separate worker pools. | [05](05-inference.md) |
| **PagedAttention** | — | KV cache in fixed-size blocks mapped by a block table. | [05](05-inference.md) |
| **Prefill** | — | Processing the whole prompt in one parallel pass. | [05](05-inference.md) |
| **Prefix caching** | — | Reusing KV cache of shared prompt prefixes. | [05](05-inference.md) |
| **Prompt injection** | — | Malicious instructions hidden in inputs or retrieved content. | [07](07-applications.md) |
| **Quantization** | — | Storing weights/KV in fewer bits (FP8, INT4, FP4). | [05](05-inference.md) |
| **RAG** | Retrieval-Augmented Generation | Answering with retrieved documents in the prompt. | [07](07-applications.md) |
| **RDMA / GPUDirect** | Remote Direct Memory Access | NIC moves data between (GPU) memories without the CPU. | [02](02-gpu.md) |
| **Reranker** | — | Model re-scoring retrieved chunks for precision. | [07](07-applications.md) |
| **RLHF** | Reinforcement Learning from Human Feedback | Tuning a model toward human-preferred answers. | [01](01-fundamentals.md) |
| **SFT** | Supervised Fine-Tuning | Training on example prompt → answer pairs. | [01](01-fundamentals.md) |
| **SM** | Streaming Multiprocessor | One of a GPU's 100+ compute blocks. | [02](02-gpu.md) |
| **Speculative decoding** | — | Draft several tokens cheaply, verify in one big pass. | [05](05-inference.md) |
| **Tensor Core** | — | GPU unit dedicated to matrix multiplication. | [02](02-gpu.md) |
| **Token** | — | A piece of text; the unit models read and write. | [01](01-fundamentals.md) |
| **TP / PP** | Tensor Parallel / Pipeline Parallel | Split matrices / split layers across GPUs. | [04](04-training.md) |
| **Transformer** | — | Architecture of modern LLMs: stacked attention + MLP layers. | [01](01-fundamentals.md) |
| **TTFT / TPOT** | Time To First Token / Time Per Output Token | Latency to first token / between tokens. | [05](05-inference.md) |
| **Vector DB** | — | Database for storing and searching embeddings. | [07](07-applications.md) |
| **vLLM / SGLang** | — | Popular open-source LLM serving engines. | [05](05-inference.md) |
