// 10.4 concept — Ring all-reduce
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('How all-reduce works: everyone ends up with the sum', 'All-reduce nasıl çalışır: herkes toplamla biter'),
    subtitle: L('Ring all-reduce = reduce-scatter (pass and add chunks) + all-gather (pass the finished chunks)',
      'Ring all-reduce = reduce-scatter (parçaları ilet ve topla) + all-gather (biten parçaları ilet)'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'red', icon: 'refresh-cw', title: L('Ring of 4 GPUs', '4 GPU\'luk halka'), sub: L('each sends to its right neighbour', 'her biri sağdaki komşusuna gönderir'), items: [
          { id: 'r0', icon: 'gpu', title: 'GPU 0', sub: L('grads g₀', 'gradyan g₀'), tag: L('chunk 0…3', 'parça 0…3') },
          { id: 'r1', icon: 'gpu', title: 'GPU 1', sub: L('grads g₁', 'gradyan g₁'), tag: L('chunk 0…3', 'parça 0…3') },
          { id: 'r2', icon: 'gpu', title: 'GPU 2', sub: L('grads g₂', 'gradyan g₂'), tag: L('chunk 0…3', 'parça 0…3') },
          { id: 'r3', icon: 'gpu', title: 'GPU 3', sub: L('grads g₃', 'gradyan g₃'), tag: L('chunk 0…3', 'parça 0…3') },
        ] },
      ] },
      { groups: [
        { id: 'g2', n: 2, color: 'purple', icon: 'list-ordered', title: L('Two phases', 'İki aşama'), sub: L('N−1 steps each', 'her biri N−1 adım'), items: [
          { id: 'p1', icon: 'plus', title: 'Reduce-scatter', sub: L('send a chunk, add what arrives', 'parça gönder, geleni topla'), tag: L('each GPU owns 1 summed chunk', 'her GPU 1 toplanmış parça') },
          { id: 'p2', icon: 'share-2', title: 'All-gather', sub: L('pass finished chunks around', 'biten parçaları dolaştır'), tag: L('everyone has all 4', 'herkeste 4\'ü de var') },
          { id: 'p3', icon: 'check', title: L('Result', 'Sonuç'), sub: 'g₀+g₁+g₂+g₃', tag: L('same on every GPU', 'her GPU\'da aynı') },
        ] },
      ] },
    ],
    edges: [
      ['r0', 'r1', 'r', 'l', '', ''],
      ['r1', 'r2', 'r', 'l', '', ''],
      ['r2', 'r3', 'r', 'l', '', ''],
      ['r3', 'r0', 'b', 'b', '', L('back to GPU 0 (ring)', 'GPU 0\'a dön (halka)'), { dash: true }],
      ['p1', 'p2', 'r', 'l', 1, ''],
      ['p2', 'p3', 'r', 'l', 2, ''],
    ],
    legend: [['red', 'GPU'], ['purple', L('Algorithm', 'Algoritma')]],
    footer: L('📡 Each GPU sends ~2× the gradient size, no matter how many GPUs — bandwidth-optimal', '📡 Her GPU, GPU sayısından bağımsız olarak gradyan boyutunun ~2 katını gönderir: bant genişliği açısından optimal'),
  };
};
