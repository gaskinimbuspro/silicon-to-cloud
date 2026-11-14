// 10.6 concept — Queueing GPU jobs with Kueue
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('How Kueue shares GPUs between teams', 'Kueue GPU\'ları ekipler arasında nasıl paylaştırır'),
    subtitle: L('Jobs wait as "suspended" until the whole job fits the quota — then all pods are created at once',
      'İşler, tamamı kotaya sığana kadar "askıda" bekler; sonra tüm pod\'lar aynı anda oluşturulur'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'users', title: L('Namespaces', 'Namespace\'ler'), items: [
          { id: 'job', icon: 'file-code', title: 'Job / JobSet', sub: 'queue-name: training', tag: L('created suspended', 'askıda oluşur') },
          { id: 'lq', icon: 'inbox', title: 'LocalQueue', sub: L('per team namespace', 'ekip namespace\'i başına'), tag: 'team-a/training' },
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'scale', title: L('Cluster', 'Cluster'), sub: L('admin-defined', 'yönetici tanımlı'), items: [
          { id: 'cq', icon: 'scale', title: 'ClusterQueue', sub: L('quota: 64 GPUs', 'kota: 64 GPU'), tag: L('borrow · preempt', 'ödünç · öncelikle kes') },
          { id: 'adm', icon: 'circle-check', title: L('Admitted', 'Kabul edildi'), sub: L('unsuspend → pods', 'askıdan çıkar → pod\'lar'), tag: L('gang: all or none', 'gang: ya hep ya hiç') },
        ] },
      ] },
    ],
    edges: [
      ['job', 'lq', 'r', 'l', 1, ''],
      ['lq', 'cq', 'r', 'l', 2, ''],
      ['cq', 'adm', 'r', 'l', 3, L('fits?', 'sığıyor mu?')],
    ],
    legend: [['blue', L('Team side', 'Ekip tarafı')], ['amber', L('Platform side', 'Platform tarafı')]],
    footer: L('🔁 Unused quota can be borrowed by other teams and reclaimed by preemption', '🔁 Kullanılmayan kotayı diğer ekipler ödünç alabilir, öncelikle kesme (preemption) ile geri alınır'),
  };
};
