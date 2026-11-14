// 10.4 — Distributed training cluster
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1180,
    title: L('A training run: thousands of GPUs acting as one', 'Bir eğitim koşusu: tek gibi davranan binlerce GPU'),
    subtitle: L('10.4 · Schedule all GPUs at once → stream data → forward / backward → sync gradients → checkpoint',
      '10.4 · Tüm GPU\'ları aynı anda ayır → veriyi akıt → forward / backward → gradyanları senkronla → checkpoint'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'teal', icon: 'database', title: L('Data', 'Veri'), sub: L('tokens', 'token\'lar'), items: [
          { id: 'data', icon: 'database', title: L('Dataset', 'Veri seti'), sub: L('object store · parallel FS', 'nesne depo · paralel FS'), tag: L('trillions of tokens', 'trilyonlarca token') },
          { id: 'loader', icon: 'list-ordered', title: L('Data loader', 'Veri yükleyici'), sub: L('CPU workers', 'CPU worker\'ları'), tag: L('shuffle · batch', 'karıştır · batch') },
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'calendar-clock', title: L('Job', 'İş'), sub: L('all or nothing', 'ya hep ya hiç'), items: [
          { id: 'sched', icon: 'calendar-clock', title: L('Scheduler', 'Zamanlayıcı'), sub: 'Slurm · Kueue', tag: 'gang scheduling' },
          { id: 'job', icon: 'rocket', title: L('Training job', 'Eğitim işi'), sub: 'torchrun · N × 8 GPUs', tag: L('one process per GPU', 'GPU başına bir process') },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g3', n: 3, color: 'red', icon: 'server', title: L('GPU nodes', 'GPU node\'ları'), sub: L('each step', 'her adımda'), reverse: true, items: [
          { id: 'n1', icon: 'server', title: L('Node 1', 'Node 1'), sub: L('forward → loss', 'forward → loss'), tag: '8 × GPU' },
          { id: 'n2', icon: 'server', title: L('Node 2', 'Node 2'), sub: L('backward → grads', 'backward → gradyan'), tag: '8 × GPU' },
          { id: 'nN', icon: 'server', title: L('Node N', 'Node N'), sub: L('optimizer step', 'optimizer adımı'), tag: '8 × GPU' },
        ] },
        { id: 'g4', n: 4, color: 'purple', icon: 'network', title: L('Fabric', 'Ağ'), sub: 'NCCL', reverse: true, items: [
          { id: 'fabric', icon: 'network', title: 'InfiniBand / RoCE', sub: L('rail-optimized', 'rail-optimized'), tag: 'all-reduce' },
        ] },
      ] },
      { groups: [
        { id: 'g5', n: 5, color: 'green', icon: 'save', title: L('Outputs', 'Çıktılar'), sub: L('survive failures', 'arızalara dayan'), items: [
          { id: 'ckpt', icon: 'save', title: 'Checkpoints', sub: L('every N steps', 'her N adımda'), tag: L('TBs, async', 'TB\'lar, asenkron') },
          { id: 'track', icon: 'chart-line', title: L('Experiment tracking', 'Deney takibi'), sub: 'MLflow · W&B', tag: 'loss · MFU' },
          { id: 'reg', icon: 'archive', title: L('Model registry', 'Model kaydı'), sub: L('final weights', 'son ağırlıklar'), tag: 'v1.0' },
        ] },
      ] },
    ],
    edges: [
      ['data', 'loader', 'r', 'l', 1, ''],
      ['sched', 'job', 'r', 'l', 2, ''],
      ['job', 'n1', 'b', 't', 3, L('launch on every node', 'her node\'da başlat'), { via: ['g2', 'g3'] }],
      ['n1', 'n2', 'l', 'r', '', ''],
      ['n2', 'nN', 'l', 'r', '', ''],
      ['nN', 'fabric', 'l', 'r', 4, L('sync grads', 'gradyan senkronu')],
      ['loader', 'nN', 'b', 't', '', L('batches', 'batch\'ler'), { dash: true, via: ['g1', 'g3'] }],
      ['nN', 'ckpt', 'b', 't', 5, L('save state', 'durumu kaydet'), { via: ['g3', 'g5'] }],
      ['ckpt', 'track', 'r', 'l', '', ''],
      ['track', 'reg', 'r', 'l', 6, L('best run', 'en iyi koşu')],
    ],
    legend: [['teal', L('Data', 'Veri')], ['amber', L('Scheduling', 'Zamanlama')], ['red', 'GPU'], ['purple', L('Network', 'Ağ')], ['green', L('Outputs', 'Çıktılar')]],
    footer: L('🧮 Training compute ≈ 6 × parameters × tokens (FLOPs)', '🧮 Eğitim hesabı ≈ 6 × parametre × token (FLOP)'),
  };
};
