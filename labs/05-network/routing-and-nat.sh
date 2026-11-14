#!/usr/bin/env bash
# ci: yes
# Chapter 5 · Addresses, routes, neighbours and NAT rules on this machine.
source "$(dirname "$0")/../lib.sh"; need ip python3; set -e
step "Interfaces and addresses"; ip -br addr | sed 's/^/  /'
step "Routing table and the route for 8.8.8.8 (longest-prefix match)"; ip route | sed 's/^/  /'; ip route get 8.8.8.8 | sed 's/^/  /'
step "Neighbour (ARP) cache"; ip neigh | head -5 | sed 's/^/  /'
step "CIDR math"
python3 -c "import ipaddress as i; n=i.ip_network('10.0.16.0/20'); print(f'  {n}: {n.num_addresses} addresses, {n[0]} – {n[-1]}')"
step "NAT rules (Docker publishes ports with DNAT)"
sudo iptables -t nat -S 2>/dev/null | head -12 | sed 's/^/  /' || sudo nft list ruleset | head -20
step "Network namespaces: a private network stack in one command"
sudo ip netns add lab && sudo ip netns exec lab ip -br link && sudo ip netns del lab
