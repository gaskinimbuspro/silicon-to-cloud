#!/usr/bin/env bash
# ci: yes
# Chapter 2 · From C to machine code bytes.
source "$(dirname "$0")/../lib.sh"; need gcc objdump; set -e
cd "$(mktemp -d)"
cat > add.c <<'C'
int add(int a, int b) { return a + b; }
C
step "Compile with -O2 and disassemble"
gcc -O2 -c add.c && objdump -d -M intel add.o | sed -n '/<add>:/,$p'
note "On x86-64 you should see:  lea eax,[rdi+rsi]  ;  ret   — args arrive in RDI and RSI (System V ABI)."
step "SIMD extensions this CPU supports"
grep -o -w -E 'sse4_2|avx2|avx512f' /proc/cpuinfo | sort -u | tr '\n' ' '; echo
