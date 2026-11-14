// 10.5 concept — Static vs continuous batching
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('Static vs continuous batching', 'Statik ve sürekli batching'),
    subtitle: L('Continuous batching = the batch is rebuilt at every decode step', 'Sürekli batching = batch her decode adımında yeniden kurulur'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'slate', icon: 'pause', title: L('Static batching', 'Statik batching'), sub: L('old way', 'eski yol'), items: [
          { id: 's1', icon: 'boxes', title: L('Batch of 4 starts', '4\'lük batch başlar'), sub: L('all together', 'hepsi birlikte'), tag: '4 / 4' },
          { id: 's2', icon: 'hourglass', title: L('Short ones finish', 'Kısalar biter'), sub: L('slots sit empty', 'yerler boş kalır'), tag: '1 / 4 busy' },
          { id: 's3', icon: 'timer', title: L('Wait for longest', 'En uzununu bekle'), sub: L('new requests queue', 'yeni istekler kuyrukta'), tag: L('GPU wasted', 'GPU israf') },
        ] },
      ] },
      { groups: [
        { id: 'g2', n: 2, color: 'green', icon: 'refresh-cw', title: L('Continuous batching', 'Sürekli batching'), sub: L('every step', 'her adımda'), items: [
          { id: 'c1', icon: 'boxes', title: L('Decode step', 'Decode adımı'), sub: L('all active requests', 'tüm aktif istekler'), tag: '+1 token each' },
          { id: 'c2', icon: 'log-out', title: L('Evict finished', 'Bitenleri çıkar'), sub: L('free their KV blocks', 'KV bloklarını boşalt'), tag: L('return to user', 'kullanıcıya dön') },
          { id: 'c3', icon: 'log-in', title: L('Admit new', 'Yenileri al'), sub: L('chunked prefill', 'parçalı prefill'), tag: L('GPU stays full', 'GPU dolu kalır') },
        ] },
      ] },
    ],
    edges: [
      ['s1', 's2', 'r', 'l', '', ''],
      ['s2', 's3', 'r', 'l', '', ''],
      ['c1', 'c2', 'r', 'l', 1, ''],
      ['c2', 'c3', 'r', 'l', 2, ''],
      ['c3', 'c1', 'b', 'b', 3, L('next step', 'sonraki adım'), { dash: true }],
    ],
    legend: [['slate', L('Static', 'Statik')], ['green', L('Continuous', 'Sürekli')]],
    footer: L('🚀 Same GPU, several times more tokens/s — the default in every modern engine', '🚀 Aynı GPU, birkaç kat fazla token/sn: her modern motorda varsayılan'),
  };
};
