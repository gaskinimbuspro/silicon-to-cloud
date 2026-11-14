# 🧪 Labs

Runnable experiments for every chapter. Each script explains what it does while it runs.
🇹🇷 *Her bölüm için çalıştırılabilir deneyler. Her script çalışırken ne yaptığını anlatır.*

## Start in one click

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/gaskinimbuspro/silicon-to-cloud)

The Codespace comes with Docker, kind, kubectl, Python, Node, gcc, strace, dig and friends
(see [`.devcontainer/`](../.devcontainer/)). Locally you need Linux (or WSL2) with Docker.

```bash
./labs/run.sh 03-os          # one chapter
./labs/run.sh all            # everything
./labs/run.sh all --ci       # only labs that need no special hardware (what CI runs)
```

| Chapter | Lab | You'll see |
|---|---|---|
| 1 | [`interrupts.sh`](01-keypress/interrupts.sh) · [`input-events.sh`](01-keypress/input-events.sh) | Interrupt and softirq counters per CPU, raw keyboard events |
| 2 | [`assembly.sh`](02-cpu/assembly.sh) · [`branch-prediction.sh`](02-cpu/branch-prediction.sh) | `lea eax,[rdi+rsi]` from C, sorted data running ~3× faster |
| 3 | [`processes-memory.sh`](03-os/processes-memory.sh) · [`containers-by-hand.sh`](03-os/containers-by-hand.sh) | Zombies, demand paging, page cache, namespaces, cgroups, OOMKilled, PID 1 |
| 4 | [`elf-and-linking.sh`](04-program/elf-and-linking.sh) | Symbols, static vs dynamic, ELF segments, the loader at work |
| 5 | [`routing-and-nat.sh`](05-network/routing-and-nat.sh) | Routes, ARP cache, CIDR math, NAT rules, network namespaces |
| 6 | [`dns-tcp-tls-http.sh`](06-internet/dns-tcp-tls-http.sh) | DNS → TCP → TLS → TTFB timing, headers, ETag/304, certificates |
| 7 | [`cache-and-db.sh`](07-server/cache-and-db.sh) | Redis TTLs, a Postgres index turning a 1M-row scan into a lookup |
| 8 | [`event-loop.sh`](08-browser/event-loop.sh) | Task vs microtask order, event-loop delay from a blocking task |
| 9 | [`kubernetes.sh`](09-infra/kubernetes.sh) | A kind cluster: reconciliation, Services, cluster DNS |
| 10 | [`kv-cache-math.sh`](10-ai/kv-cache-math.sh) | How KV cache, not weights, limits LLM serving capacity |

Every lab marked `# ci: yes` runs on each push in the [Labs workflow](../.github/workflows/labs.yml),
so the commands on the site are tested continuously. Broken? [Tell me](https://github.com/gaskinimbuspro/silicon-to-cloud/issues/new?template=lab.yml).
