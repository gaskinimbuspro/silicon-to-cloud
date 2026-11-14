// 10.4 concept — The main kinds of parallelism
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('How to split a model across GPUs: four kinds of parallelism', 'Bir modeli GPU\'lara bölmek: dört paralellik türü'),
    subtitle: L('DP = Data Parallel · FSDP = Fully Sharded Data Parallel · TP = Tensor Parallel · PP = Pipeline Parallel',
      'DP = Data Parallel · FSDP = Fully Sharded Data Parallel · TP = Tensor Parallel · PP = Pipeline Parallel'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'green', icon: 'copy', title: 'DP', sub: L('split the data', 'veriyi böl'), items: [
          { id: 'a1', icon: 'brain', title: 'GPU 0', sub: L('full model copy', 'tam model kopyası'), tag: 'batch A' },
          { id: 'a2', icon: 'brain', title: 'GPU 1', sub: L('full model copy', 'tam model kopyası'), tag: 'batch B' },
        ] },
        { id: 'g2', n: 2, color: 'teal', icon: 'puzzle', title: 'FSDP / ZeRO', sub: L('shard the state', 'durumu parçala'), items: [
          { id: 'b1', icon: 'puzzle', title: 'GPU 0', sub: L('½ of weights + optimizer', 'ağırlık + optimizer ½'), tag: 'batch A' },
          { id: 'b2', icon: 'puzzle', title: 'GPU 1', sub: L('other ½', 'diğer ½'), tag: 'batch B' },
        ] },
      ] },
      { dir: 'fill', groups: [
        { id: 'g3', n: 3, color: 'red', icon: 'columns-2', title: 'TP', sub: L('split each layer', 'her katmanı böl'), items: [
          { id: 'c1', icon: 'columns-2', title: 'GPU 0', sub: L('left half of every matrix', 'her matrisin sol yarısı'), tag: L('inside NVLink', 'NVLink içinde') },
          { id: 'c2', icon: 'columns-2', title: 'GPU 1', sub: L('right half', 'sağ yarısı'), tag: L('very chatty', 'çok konuşkan') },
        ] },
        { id: 'g4', n: 4, color: 'purple', icon: 'rows-3', title: 'PP', sub: L('split the layers', 'katmanları böl'), items: [
          { id: 'd1', icon: 'rows-3', title: 'GPU 0', sub: L('layers 1–40', 'katman 1–40'), tag: L('stage 1', 'aşama 1') },
          { id: 'd2', icon: 'rows-3', title: 'GPU 1', sub: L('layers 41–80', 'katman 41–80'), tag: L('stage 2', 'aşama 2') },
        ] },
      ] },
    ],
    edges: [
      ['a1', 'a2', 'r', 'l', '', L('all-reduce grads', 'gradyan all-reduce')],
      ['b1', 'b2', 'r', 'l', '', L('gather / scatter', 'gather / scatter')],
      ['c1', 'c2', 'r', 'l', '', L('every layer', 'her katmanda')],
      ['d1', 'd2', 'r', 'l', '', L('activations', 'aktivasyonlar')],
    ],
    legend: [['green', L('Copy model', 'Modeli kopyala')], ['teal', L('Shard state', 'Durumu parçala')], ['red', L('Split matrices', 'Matrisleri böl')], ['purple', L('Split layers', 'Katmanları böl')]],
    footer: L('🧩 Big runs combine them: TP inside a node × PP across nodes × DP/FSDP across groups', '🧩 Büyük koşular hepsini birleştirir: node içinde TP × node\'lar arası PP × gruplar arası DP/FSDP'),
  };
};
