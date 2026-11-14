// 10.2 — GPU & accelerator hardware: one 8-GPU server and beyond
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('Anatomy of an AI server: 8 GPUs, NVLink, NICs', 'Bir AI sunucusunun anatomisi: 8 GPU, NVLink, NIC\'ler'),
    subtitle: L('10.2 · CPU + RAM → PCIe switches → 8 GPUs (HBM) ↔ NVSwitch · 1 NIC per GPU → scale-out fabric → storage',
      '10.2 · CPU + RAM → PCIe switch\'ler → 8 GPU (HBM) ↔ NVSwitch · GPU başına 1 NIC → scale-out ağı → depolama'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'slate', icon: 'server', title: L('One GPU server (HGX / DGX class)', 'Tek GPU sunucusu (HGX / DGX sınıfı)'), sub: '~10 kW+', items: [
          { id: 'cpu', icon: 'cpu', title: '2 × CPU', sub: L('+ system RAM', '+ sistem RAM'), tag: L('feeds the GPUs', 'GPU\'ları besler') },
          { id: 'pcie', icon: 'git-merge', title: L('PCIe switches', 'PCIe switch\'ler'), sub: 'Gen5 / Gen6', tag: '~64–128 GB/s' },
          [
            { id: 'gpus', icon: 'gpu', title: '8 × GPU', sub: L('each with HBM', 'her birinde HBM'), tag: '80–288 GB' },
            { id: 'nics', icon: 'ethernet-port', title: '8 × NIC', sub: L('1 per GPU', 'GPU başına 1'), tag: '400–800 Gb/s' },
          ],
          { id: 'nvsw', icon: 'network', title: 'NVSwitch', sub: L('all-to-all NVLink', 'herkesten herkese NVLink'), tag: '0.9–3.6 TB/s / GPU' },
        ] },
      ] },
      { groups: [
        { id: 'g2', n: 2, color: 'purple', icon: 'globe', title: L('Beyond the box', 'Kutunun dışı'), items: [
          { id: 'fabric', icon: 'network', title: L('Scale-out fabric', 'Scale-out ağı'), sub: 'InfiniBand · RoCE', tag: L('rail-optimized', 'rail-optimized') },
          { id: 'storage', icon: 'database', title: L('Storage', 'Depolama'), sub: L('parallel FS · object', 'paralel FS · nesne'), tag: 'GPUDirect Storage' },
          { id: 'rack', icon: 'server-cog', title: L('Rack-scale NVLink', 'Raf ölçeği NVLink'), sub: 'NVL72', tag: L('72 GPUs as one', '72 GPU tek gibi') },
        ] },
      ] },
    ],
    edges: [
      ['cpu', 'pcie', 'r', 'l', 1, ''],
      ['pcie', 'gpus', 'r', 'l', 2, ''],
      ['pcie', 'nics', 'r', 'l', 3, ''],
      ['gpus', 'nvsw', 'r', 'l', 4, 'NVLink'],
      ['nics', 'fabric', 'b', 't', 5, L('GPUDirect RDMA', 'GPUDirect RDMA'), { via: ['g1', 'g2'] }],
      ['fabric', 'storage', 'r', 'l', 6, ''],
      ['nvsw', 'rack', 'b', 't', '', L('bigger NVLink domain', 'daha büyük NVLink alanı'), { dash: true, via: ['g1', 'g2'] }],
    ],
    legend: [['slate', L('Server', 'Sunucu')], ['purple', L('Cluster', 'Cluster')]],
    footer: L('📏 Scale-up (NVLink, inside) is ~10× faster than scale-out (network, between)', '📏 Scale-up (NVLink, içeride), scale-out\'tan (ağ, aralarında) ~10 kat hızlı'),
  };
};
