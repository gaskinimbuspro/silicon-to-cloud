#!/usr/bin/env bash
# ci: yes
# Chapter 3 · Zombies, demand paging and the page cache.
source "$(dirname "$0")/../lib.sh"; need python3; set -e
step "A zombie: child exited, parent hasn't called wait()"
python3 -c 'import os,time; os.fork() or os._exit(0); time.sleep(3)' & P=$!; sleep 1
ps -o pid,ppid,stat,cmd --ppid $P || true; wait $P
step "Demand paging: reserve 512 MB, RSS grows only when pages are touched"
python3 - <<'PY'
import mmap
rss=lambda: open('/proc/self/status').read().split('VmRSS:')[1].split()[0]
m=mmap.mmap(-1,512<<20); print('  after reserve :', rss(),'kB')
for i in range(0,512<<20,4096): m[i]=1
print('  after touching:', rss(),'kB')
PY
step "Page cache: read a file twice"
f=$(mktemp); dd if=/dev/urandom of="$f" bs=1M count=256 status=none
python3 - "$f" <<'PY'
import sys,time,os
for i in (1,2):
    t=time.time(); open(sys.argv[1],'rb').read(); print(f'  read {i}: {time.time()-t:.3f}s')
PY
rm -f "$f"; note "The second read comes from RAM (page cache). (3.3, 3.4)"
step "Syscalls of 'ls' (if strace is installed)"
command -v strace >/dev/null && strace -c -f ls >/dev/null 2>/tmp/st && head -12 /tmp/st || note "strace not installed"
