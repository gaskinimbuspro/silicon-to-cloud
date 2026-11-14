// 10.2 concept — Inside one GPU
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('Inside one GPU: memory feeds thousands of math lanes', 'Tek bir GPU\'nun içi: bellek binlerce hesap şeridini besler'),
    subtitle: L('GPU = Graphics Processing Unit · SM = Streaming Multiprocessor · HBM = High Bandwidth Memory',
      'GPU = Graphics Processing Unit · SM = Streaming Multiprocessor · HBM = High Bandwidth Memory'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'amber', icon: 'memory-stick', title: L('Memory path', 'Bellek yolu'), sub: L('slow → fast', 'yavaş → hızlı'), items: [
          { id: 'hbm', icon: 'memory-stick', title: 'HBM', sub: L('weights, KV cache', 'ağırlık, KV cache'), tag: L('80–288 GB · TB/s', '80–288 GB · TB/s') },
          { id: 'l2', icon: 'layers', title: 'L2 cache', sub: L('shared by all SMs', 'tüm SM\'ler ortak'), tag: L('tens of MB', 'onlarca MB') },
          { id: 'smem', icon: 'zap', title: L('Shared mem / L1', 'Shared mem / L1'), sub: L('per SM', 'SM başına'), tag: L('fastest, tiny', 'en hızlı, minik') },
        ] },
        { id: 'g2', n: 2, color: 'red', icon: 'cpu', title: L('Compute', 'Hesaplama'), sub: L('100+ SMs', '100+ SM'), items: [
          [
            { id: 'tc', icon: 'grid-3x3', title: 'Tensor Cores', sub: L('matrix multiply', 'matris çarpımı'), tag: 'FP16 · FP8 · FP4' },
            { id: 'cc', icon: 'calculator', title: 'CUDA cores', sub: L('scalar math', 'skaler işlem'), tag: 'FP32 · INT' },
          ],
        ] },
      ] },
      { groups: [
        { id: 'g3', n: 3, color: 'blue', icon: 'users', title: L('How work is scheduled', 'İş nasıl dağıtılır'), sub: 'SIMT', items: [
          { id: 'kernel', icon: 'file-code', title: 'Kernel', sub: L('one GPU function', 'tek GPU fonksiyonu'), tag: L('launched by CPU', 'CPU başlatır') },
          { id: 'blocks', icon: 'boxes', title: L('Thread blocks', 'Thread blokları'), sub: L('spread over SMs', 'SM\'lere dağılır'), tag: L('thousands', 'binlerce') },
          { id: 'warp', icon: 'rows-3', title: 'Warps', sub: L('32 threads in lockstep', 'aynı adımda 32 thread'), tag: L('same instruction', 'aynı komut') },
        ] },
      ] },
    ],
    edges: [
      ['hbm', 'l2', 'r', 'l', 1, L('load', 'yükle')],
      ['l2', 'smem', 'r', 'l', 2, ''],
      ['smem', 'tc', 'r', 'l', 3, ''],
      ['kernel', 'blocks', 'r', 'l', 4, ''],
      ['blocks', 'warp', 'r', 'l', 5, ''],
      ['warp', 'cc', 't', 'b', '', L('run on SMs', 'SM\'lerde çalışır'), { dash: true, via: ['g2', 'g3'] }],
    ],
    legend: [['amber', L('Memory', 'Bellek')], ['red', L('Compute', 'Hesaplama')], ['blue', L('Scheduling', 'Zamanlama')]],
    footer: L('⚖️ Most LLM work waits on memory, not on math (see the roofline)', '⚖️ LLM işinin çoğu hesabı değil belleği bekler (roofline\'a bak)'),
  };
};
