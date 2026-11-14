// 10.6 concept — Device plugin vs Dynamic Resource Allocation
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('Asking for a GPU: device plugin vs DRA', 'GPU istemek: device plugin ve DRA'),
    subtitle: L('DRA = Dynamic Resource Allocation (GA since Kubernetes v1.34) · request devices by attributes, not just by count',
      'DRA = Dynamic Resource Allocation (Kubernetes v1.34\'ten beri GA) · cihazları sadece sayıyla değil, özelliklerle iste'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'slate', icon: 'hash', title: L('Device plugin (classic)', 'Device plugin (klasik)'), sub: L('a counter', 'bir sayaç'), items: [
          { id: 'dp', icon: 'plug', title: 'Device plugin', sub: L('DaemonSet per node', 'node başına DaemonSet'), tag: L('reports a count', 'sayı bildirir') },
          { id: 'node', icon: 'server', title: L('Node capacity', 'Node kapasitesi'), sub: 'nvidia.com/gpu: 8', tag: L('opaque integer', 'opak tam sayı') },
          { id: 'pod1', icon: 'box', title: 'Pod', sub: 'limits: nvidia.com/gpu: 1', tag: L('"any one GPU"', '"herhangi bir GPU"') },
        ] },
      ] },
      { groups: [
        { id: 'g2', n: 2, color: 'blue', icon: 'list-checks', title: 'DRA', sub: 'resource.k8s.io/v1', items: [
          { id: 'slice', icon: 'layers', title: 'ResourceSlice', sub: L('driver publishes devices', 'sürücü cihazları yayınlar'), tag: L('model · memory · MIG', 'model · bellek · MIG') },
          { id: 'class', icon: 'tag', title: 'DeviceClass', sub: L('admin defines a kind', 'yönetici bir tür tanımlar'), tag: 'gpu.nvidia.com' },
          { id: 'claim', icon: 'file-check', title: 'ResourceClaim', sub: L('pod asks precisely', 'pod tam olarak ister'), tag: L('≥80 GB, same NVLink', '≥80 GB, aynı NVLink') },
          { id: 'sched', icon: 'calendar-clock', title: L('Scheduler', 'Scheduler'), sub: L('matches & allocates', 'eşler ve ayırır'), tag: L('then kubelet prepares', 'sonra kubelet hazırlar') },
        ] },
      ] },
    ],
    edges: [
      ['dp', 'node', 'r', 'l', '', ''],
      ['node', 'pod1', 'r', 'l', '', ''],
      ['slice', 'class', 'r', 'l', 1, ''],
      ['class', 'claim', 'r', 'l', 2, ''],
      ['claim', 'sched', 'r', 'l', 3, ''],
    ],
    legend: [['slate', L('Count-based', 'Sayı tabanlı')], ['blue', L('Attribute-based', 'Özellik tabanlı')]],
    footer: L('🧩 Like PersistentVolumeClaims, but for devices: claim → match → bind', '🧩 PersistentVolumeClaim gibi, ama cihazlar için: talep → eşle → bağla'),
  };
};
