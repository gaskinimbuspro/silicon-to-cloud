#!/usr/bin/env bash
# ci: yes
# Chapter 4 · Symbols, static vs dynamic linking, ELF segments, the loader.
source "$(dirname "$0")/../lib.sh"; need gcc nm readelf ldd; set -e
cd "$(mktemp -d)"
printf '#include <stdio.h>\nint main(void){puts("hello");return 0;}\n' > hello.c
step "Object file symbols: U = needed from elsewhere, T = defined here"; gcc -c hello.c && nm hello.o
step "Dynamic vs static"
gcc hello.o -o dyn; gcc -static hello.o -o static 2>/dev/null || note "static libc not installed"
ls -lh dyn static 2>/dev/null | awk '{print "  "$5, $9}'
ldd dyn | sed 's/^/  /'
step "ELF segments the kernel maps (and the interpreter it starts)"
readelf -lW dyn | grep -E 'INTERP|LOAD|GNU_STACK|interpreter' | sed 's/^/  /'
step "The dynamic loader searching for libraries"
LD_DEBUG=libs ./dyn 2>&1 | grep -E 'find library|trying file' | head -4 | sed 's/^/  /'
