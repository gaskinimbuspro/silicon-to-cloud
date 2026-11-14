#!/usr/bin/env bash
# ci: yes
# Chapter 9 · A real Kubernetes cluster in Docker: reconciliation, Services, DNS.
source "$(dirname "$0")/../lib.sh"; need kind kubectl docker; set -e
kind create cluster --name lab --wait 120s >/dev/null
trap 'kind delete cluster --name lab >/dev/null 2>&1' EXIT
step "Nodes and control-plane pods"; kubectl get nodes; kubectl get pods -n kube-system --no-headers | awk '{print "  "$1}' | head -8
step "Deployment → ReplicaSet → Pods"
kubectl create deployment web --image=nginx:alpine --replicas=3 >/dev/null
kubectl rollout status deploy/web --timeout=120s
kubectl get events --sort-by=.lastTimestamp | tail -8 | sed 's/^/  /'
step "Reconciliation: delete a pod and watch it come back"
kubectl delete pod -l app=web --wait=false | head -1; sleep 5; kubectl get pods -l app=web
step "Service + cluster DNS"
kubectl expose deployment web --port 80 >/dev/null
kubectl run curl --image=curlimages/curl --restart=Never --rm -i --quiet -- \
  sh -c 'cat /etc/resolv.conf | grep -E "search|ndots"; curl -s -o /dev/null -w "  web.default.svc → HTTP %{http_code}\n" web'
