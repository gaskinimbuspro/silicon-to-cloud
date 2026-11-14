# shared helpers for labs
step() { printf '\n\033[1;35m▶ %s\033[0m\n' "$*"; }
note() { printf '\033[2m  %s\033[0m\n' "$*"; }
need() { for c in "$@"; do command -v "$c" >/dev/null || { echo "missing tool: $c (run .devcontainer/setup.sh or install it)"; exit 1; }; done; }
