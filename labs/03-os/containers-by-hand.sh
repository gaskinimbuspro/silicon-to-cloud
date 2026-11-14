#!/usr/bin/env bash
# ci: yes
# Chapter 3 · A container is a process with namespaces + cgroups.
source "$(dirname "$0")/../lib.sh"; need docker; set -e
step "Namespaces of this shell"; ls -l /proc/$$/ns | awk '{print "  "$9, $11}'
step "New PID + UTS namespace without Docker (needs sudo)"
sudo unshare --pid --fork --mount-proc --uts bash -c 'hostname lab-container; echo "  hostname: $(hostname)"; echo "  processes I can see:"; ps -e | sed "s/^/   /"'
step "cgroup limits Docker writes for --memory and --cpus"
docker run --rm --memory 64m --cpus 0.5 --pids-limit 50 alpine cat /sys/fs/cgroup/memory.max /sys/fs/cgroup/cpu.max /sys/fs/cgroup/pids.max
step "OOMKilled: allocate 200 MB in a 64 MB container"
docker run --rm -m 64m python:3.12-alpine python -c "x = bytearray(200*1024*1024)" && echo "  (not killed?)" || echo "  exit code $? → 137 = SIGKILL from the OOM killer"
step "PID 1 and SIGTERM: without --init, docker stop waits for the timeout"
docker run -d --rm --name noinit alpine sleep 300 >/dev/null; s=$(date +%s); docker stop -t 3 noinit >/dev/null; echo "  without --init: $(( $(date +%s)-s ))s"
docker run -d --rm --init --name withinit alpine sleep 300 >/dev/null; s=$(date +%s); docker stop -t 3 withinit >/dev/null; echo "  with --init:    $(( $(date +%s)-s ))s"
