#!/usr/bin/env bash
# Run the labs of one chapter (or all):   ./labs/run.sh 03-os    ./labs/run.sh all    ./labs/run.sh all --ci
# Every lab prints what it does and why; read the output, then open the matching page on the site.
set -uo pipefail
cd "$(dirname "$0")"
CI_ONLY=false; [[ " $* " == *" --ci "* ]] && CI_ONLY=true
target="${1:-all}"
dirs=(); if [[ "$target" == all ]]; then dirs=([0-9][0-9]-*/); else dirs=("${target%/}/"); fi
fail=0
for d in "${dirs[@]}"; do
  for lab in "$d"*.sh; do
    [[ -f "$lab" ]] || continue
    if $CI_ONLY && ! grep -q '^# ci: yes' "$lab"; then echo "⏭  $lab (needs hardware/root/GUI, skipped in CI)"; continue; fi
    echo; echo "═════════ 🧪 $lab ═════════"
    if bash "$lab"; then echo "✅ $lab"; else echo "❌ $lab"; fail=1; fi
  done
done
exit $fail
