#!/usr/bin/env bash
# ci: yes
# Chapter 1 · Interrupts are counted per CPU — watch them grow.
source "$(dirname "$0")/../lib.sh"; set -e
step "Interrupt counters per CPU (first lines of /proc/interrupts)"
head -6 /proc/interrupts
step "Which interrupt lines fire most during 2 seconds?"
a=$(mktemp); b=$(mktemp); awk 'NR>1{s=0;for(i=2;i<=NF;i++) if($i~/^[0-9]+$/) s+=$i; print $1, s}' /proc/interrupts > "$a"
sleep 2
awk 'NR>1{s=0;for(i=2;i<=NF;i++) if($i~/^[0-9]+$/) s+=$i; print $1, s}' /proc/interrupts > "$b"
join "$a" "$b" | awk '{d=$3-$2; if(d>0) print d, $1}' | sort -rn | head -5 | sed 's/^/  /'
note "LOC = local timer, NMI/RES/CAL = inter-processor; device lines (nvme, eth, xhci) are hardware."
step "Deferred work (softirqs) per CPU"
head -5 /proc/softirqs
note "Read more: 1.1 Interrupts & device drivers"
