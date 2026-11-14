#!/usr/bin/env bash
# ci: yes
# Chapter 8 · Task vs microtask order, and what a blocking task does to the event loop (Node.js = same model).
source "$(dirname "$0")/../lib.sh"; need node; set -e
step "Execution order"
node -e "setTimeout(()=>console.log('  4 task (timer)'),0);Promise.resolve().then(()=>console.log('  3 microtask'));console.log('  1 sync');console.log('  2 sync')"
step "Event loop delay while one task blocks for 500 ms"
node -e "const {monitorEventLoopDelay}=require('perf_hooks');const h=monitorEventLoopDelay({resolution:10});h.enable();
setTimeout(()=>{const e=Date.now()+500;while(Date.now()<e){}},100);
setTimeout(()=>console.log('  p99 event-loop delay:', Math.round(h.percentile(99)/1e6),'ms'),1000)"
note "In a browser that's 500 ms with no clicks, scrolling or animation → bad INP. (8.2)"
