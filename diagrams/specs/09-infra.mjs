// Chapter 9 — Modern infrastructure
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1400,
    title: L('From git push to a running pod: containers, Kubernetes, CI/CD', 'git push\'tan çalışan pod\'a: container, Kubernetes, CI/CD'),
    subtitle: L('Chapter 9 · CI builds an image → GitOps syncs manifests → the control plane schedules → the node runs a container (a process with namespaces + cgroups)',
      'Bölüm 9 · CI imaj üretir → GitOps manifest\'leri senkronlar → control plane yerleştirir → node container\'ı çalıştırır (namespace + cgroup\'lu bir process)'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'green', icon: 'git-branch', title: 'CI', sub: L('build & test', 'derle & test et'), items: [
          { id: 'push', icon: 'git-commit-horizontal', title: 'git push', sub: L('app repo', 'uygulama reposu'), tag: 'main' },
          { id: 'ci', icon: 'workflow', title: L('Pipeline', 'Pipeline'), sub: 'GitHub Actions', tag: 'test·build·scan' },
          { id: 'reg', icon: 'package', title: 'Registry', sub: 'GHCR · ECR', tag: 'app:1.4.2' },
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'refresh-cw', title: 'CD · GitOps', sub: L('desired state in git', 'istenen durum git\'te'), items: [
          { id: 'gitops', icon: 'file-code', title: L('Manifests repo', 'Manifest reposu'), sub: 'Helm · Kustomize', tag: 'image: 1.4.2' },
          { id: 'argo', icon: 'refresh-cw', title: 'Argo CD', sub: L('reconciler', 'uzlaştırıcı'), tag: 'sync' },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g3', n: 3, color: 'purple', icon: 'brain', title: 'Control plane', sub: L('the brain', 'beyin'), reverse: true, items: [
          { id: 'api', icon: 'server', title: 'API server', sub: L('front door', 'ön kapı'), tag: 'kubectl · REST' },
          [
            { id: 'etcd', icon: 'database', title: 'etcd', sub: L('cluster state', 'cluster durumu'), tag: 'key-value' },
            { id: 'sched', icon: 'calendar-clock', title: L('Scheduler', 'Scheduler'), sub: '+ controllers', tag: L('pick a node', 'node seç') },
          ],
        ] },
        { id: 'g4', n: 4, color: 'blue', icon: 'server', title: L('Worker node', 'Worker node'), sub: L('the muscle', 'kas gücü'), reverse: true, items: [
          { id: 'kubelet', icon: 'bot', title: 'kubelet', sub: L('node agent', 'node ajanı'), tag: L('watches API', 'API\'yi izler') },
          { id: 'cri', icon: 'container', title: 'Runtime', sub: 'containerd · runc', tag: 'CRI' },
          { id: 'pod', icon: 'box', title: 'Pod', sub: L('1+ containers', '1+ container'), tag: '10.244.1.7' },
        ] },
      ] },
      { groups: [
        { id: 'g5', n: 5, color: 'red', icon: 'shield', title: L('A container is…', 'Container aslında…'), sub: L('Chapter 3!', 'Bölüm 3!'), items: [
          { id: 'ns', icon: 'eye-off', title: 'Namespaces', sub: L('what it can see', 'ne görebilir'), tag: 'pid · net · mnt' },
          { id: 'cg', icon: 'gauge', title: 'cgroups', sub: L('what it can use', 'ne kullanabilir'), tag: 'cpu · memory' },
          { id: 'fs', icon: 'layers', title: L('Image layers', 'İmaj katmanları'), sub: 'overlayfs', tag: L('read-only + rw', 'salt-okunur + rw') },
        ] },
        { id: 'g6', n: 6, color: 'teal', icon: 'activity', title: L('Observability', 'Gözlemlenebilirlik'), sub: L('see it run', 'çalışırken gör'), items: [
          { id: 'metrics', icon: 'chart-line', title: L('Metrics', 'Metrikler'), sub: 'Prometheus', tag: L('how much?', 'ne kadar?') },
          { id: 'logs', icon: 'scroll-text', title: 'Logs', sub: 'Loki · ELK', tag: L('what happened?', 'ne oldu?') },
          { id: 'traces', icon: 'waypoints', title: 'Traces', sub: 'OpenTelemetry', tag: L('where is it slow?', 'nerede yavaş?') },
        ] },
      ] },
    ],
    edges: [
      ['push', 'ci', 'r', 'l', 1, ''],
      ['ci', 'reg', 'r', 'l', 2, 'push image'],
      ['reg', 'gitops', 'r', 'l', 3, L('bump tag', 'tag güncelle')],
      ['gitops', 'argo', 'r', 'l', 4, L('watch', 'izle')],
      ['argo', 'api', 'b', 't', 5, L('apply', 'uygula'), { via: ['g2', 'g3'] }],
      ['api', 'etcd', 'l', 'r', 6, L('store', 'kaydet')],
      ['api', 'sched', 'l', 'r', 7, ''],
      ['sched', 'kubelet', 'l', 'r', 8, L('pod → node', 'pod → node')],
      ['kubelet', 'cri', 'l', 'r', 9, ''],
      ['cri', 'pod', 'l', 'r', 10, L('pull + start', 'çek + başlat')],
      ['pod', 'ns', 'b', 't', 11, L('= Linux process + …', '= Linux process\'i + …'), { via: ['g4', 'g5'] }],
    ],
    legend: [
      ['green', 'CI'], ['amber', 'CD'], ['purple', 'Control plane'], ['blue', 'Node'],
      ['red', 'Kernel'], ['teal', L('Observability', 'Gözlem')],
    ],
    footer: L('🔁 Kubernetes = control loops: desired state (YAML) vs. actual state, forever', '🔁 Kubernetes = kontrol döngüleri: istenen durum (YAML) ile gerçek durum, sonsuza kadar'),
  };
};
