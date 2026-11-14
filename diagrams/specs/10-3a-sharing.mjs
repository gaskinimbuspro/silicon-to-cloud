// 10.3 concept — Ways to share one GPU
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('Four ways to give a GPU to workloads', 'GPU\'yu iş yüklerine vermenin dört yolu'),
    subtitle: L('Whole GPU · MIG (hardware slices) · MPS (shared process) · time-slicing (take turns)',
      'Tüm GPU · MIG (donanım dilimleri) · MPS (ortak process) · zaman dilimleme (sırayla)'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'green', icon: 'gpu', title: L('Whole GPU', 'Tüm GPU'), sub: L('simplest', 'en basit'), items: [
          { id: 'a1', icon: 'box', title: L('1 pod', '1 pod'), sub: L('big model', 'büyük model'), tag: 'gpu: 1' },
          { id: 'a2', icon: 'gpu', title: 'GPU', sub: L('100% isolated', '%100 izole'), tag: L('may sit idle', 'boşta kalabilir') },
        ] },
        { id: 'g2', n: 2, color: 'blue', icon: 'layout-grid', title: 'MIG', sub: L('hardware partitions', 'donanım bölümleri'), items: [
          { id: 'b1', icon: 'boxes', title: L('Up to 7 pods', '7 pod\'a kadar'), sub: L('small models', 'küçük modeller'), tag: '1g.10gb …' },
          { id: 'b2', icon: 'layout-grid', title: L('GPU slices', 'GPU dilimleri'), sub: L('own SMs + memory', 'kendi SM + belleği'), tag: L('strong isolation', 'güçlü izolasyon') },
        ] },
      ] },
      { dir: 'fill', groups: [
        { id: 'g3', n: 3, color: 'amber', icon: 'merge', title: 'MPS', sub: L('one shared context', 'tek ortak bağlam'), items: [
          { id: 'c1', icon: 'boxes', title: L('Many processes', 'Çok process'), sub: L('cooperative', 'iş birlikçi'), tag: L('% of SMs each', 'her biri % SM') },
          { id: 'c2', icon: 'merge', title: L('MPS server', 'MPS sunucusu'), sub: L('runs them together', 'birlikte çalıştırır'), tag: L('weak isolation', 'zayıf izolasyon') },
        ] },
        { id: 'g4', n: 4, color: 'red', icon: 'clock', title: L('Time-slicing', 'Zaman dilimleme'), sub: L('take turns', 'sırayla'), items: [
          { id: 'd1', icon: 'boxes', title: L('N pods', 'N pod'), sub: L('dev / bursty', 'geliştirme / ani yük'), tag: 'replicas: 4' },
          { id: 'd2', icon: 'clock', title: L('Context switch', 'Bağlam değişimi'), sub: L('shared memory!', 'ortak bellek!'), tag: L('no isolation', 'izolasyon yok') },
        ] },
      ] },
    ],
    edges: [
      ['a1', 'a2', 'r', 'l', '', ''],
      ['b1', 'b2', 'r', 'l', '', ''],
      ['c1', 'c2', 'r', 'l', '', ''],
      ['d1', 'd2', 'r', 'l', '', ''],
    ],
    legend: [['green', L('Exclusive', 'Özel')], ['blue', L('Hardware split', 'Donanım bölme')], ['amber', L('Software share', 'Yazılım paylaşımı')], ['red', L('Oversubscribe', 'Aşırı abonelik')]],
    footer: L('🔒 Isolation: whole GPU > MIG > MPS > time-slicing · utilization: the reverse', '🔒 İzolasyon: tüm GPU > MIG > MPS > zaman dilimleme · doluluk: tam tersi'),
  };
};
