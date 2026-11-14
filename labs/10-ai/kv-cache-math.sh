#!/usr/bin/env bash
# ci: yes
# Chapter 10 · Back-of-the-envelope GPU memory for serving an LLM (no GPU needed).
source "$(dirname "$0")/../lib.sh"; need python3; set -e
python3 - <<'PY'
def gb(x): return x/1e9
# Llama-3-8B-like: 32 layers, 8 KV heads, head_dim 128, FP16
L, kv_heads, d, b = 32, 8, 128, 2
per_token = 2 * L * kv_heads * d * b            # K and V
print(f"  KV cache per token          : {per_token/1024:.0f} KB")
for users, ctx in [(1, 4096), (32, 4096), (100, 4096), (32, 32768)]:
    print(f"  {users:>3} users × {ctx:>5} tokens : {gb(per_token*users*ctx):6.1f} GB")
params = 8e9
for name, bytes_ in [("FP16", 2), ("FP8", 1), ("INT4", .5)]:
    print(f"  weights {name:<4}               : {gb(params*bytes_):6.1f} GB")
print("  → on an 80 GB GPU, the KV cache — not the weights — limits how many users you can serve. (10.5)")
PY
