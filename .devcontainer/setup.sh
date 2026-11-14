#!/usr/bin/env bash
# Tools used by the labs. Runs once when the Codespace / dev container is created.
set -euo pipefail
sudo apt-get update -qq
sudo apt-get install -y -qq --no-install-recommends \
  build-essential gdb strace ltrace binutils file dnsutils iproute2 iputils-ping traceroute tcpdump \
  netcat-openbsd curl jq sysstat htop numactl conntrack iptables nftables usbutils pciutils evtest \
  redis-tools postgresql-client >/dev/null
ARCH=$(dpkg --print-architecture)
curl -fsSLo /tmp/kind "https://kind.sigs.k8s.io/dl/latest/kind-linux-${ARCH}" && sudo install /tmp/kind /usr/local/bin/kind
pip install -q -r requirements.txt
echo "✅ Ready. Try:  ./labs/run.sh 03-os   or   mkdocs serve"
