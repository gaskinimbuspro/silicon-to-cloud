// 10.2 concept — Scale-up vs scale-out
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1480,
    title: L('Scale-up vs scale-out: two networks in every AI cluster', 'Scale-up ve scale-out: her AI cluster\'ında iki ağ'),
    subtitle: L('Scale-up = GPUs talking over NVLink like one big GPU · Scale-out = servers talking over the network',
      'Scale-up = GPU\'lar NVLink üzerinden tek büyük GPU gibi konuşur · Scale-out = sunucular ağ üzerinden konuşur'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'red', icon: 'network', title: L('Scale-up domain', 'Scale-up alanı'), sub: L('8 GPUs or a 72-GPU rack', '8 GPU ya da 72 GPU\'luk raf'), items: [
          { id: 'a1', icon: 'gpu', title: 'GPU', sub: 'HBM', tag: '' },
          { id: 'sw1', icon: 'network', title: 'NVSwitch', sub: 'NVLink', tag: L('TB/s per GPU', 'GPU başına TB/s') },
          { id: 'a2', icon: 'gpu', title: 'GPU', sub: 'HBM', tag: '' },
        ] },
        { id: 'g2', n: 2, color: 'red', icon: 'network', title: L('Another domain', 'Başka bir alan'), items: [
          { id: 'b1', icon: 'gpu', title: 'GPU', sub: 'HBM', tag: '' },
          { id: 'sw2', icon: 'network', title: 'NVSwitch', sub: 'NVLink', tag: '' },
        ] },
      ] },
      { groups: [
        { id: 'g3', n: 3, color: 'purple', icon: 'globe', title: L('Scale-out fabric', 'Scale-out ağı'), sub: L('between servers', 'sunucular arası'), items: [
          { id: 'nic1', icon: 'ethernet-port', title: 'NIC', sub: '400–800 Gb/s', tag: L('per GPU', 'GPU başına') },
          { id: 'leaf', icon: 'router', title: L('Leaf switches', 'Leaf switch\'ler'), sub: L('one per rail', 'rail başına bir'), tag: 'IB / RoCE' },
          { id: 'spine', icon: 'globe', title: L('Spine', 'Spine'), sub: 'fat-tree', tag: L('non-blocking', 'tıkanmasız') },
          { id: 'nic2', icon: 'ethernet-port', title: 'NIC', sub: '400–800 Gb/s', tag: 'RDMA' },
        ] },
      ] },
    ],
    edges: [
      ['a1', 'sw1', 'r', 'l', '', ''],
      ['sw1', 'a2', 'r', 'l', '', ''],
      ['b1', 'sw2', 'r', 'l', '', ''],
      ['a1', 'nic1', 'b', 't', 1, L('leave the box', 'kutudan çık'), { via: ['g1', 'g3'] }],
      ['nic1', 'leaf', 'r', 'l', 2, ''],
      ['leaf', 'spine', 'r', 'l', 3, ''],
      ['spine', 'nic2', 'r', 'l', 4, ''],
      ['nic2', 'b1', 't', 'b', 5, L('into the other box', 'öbür kutuya'), { via: ['g2', 'g3'] }],
    ],
    legend: [['red', 'Scale-up (NVLink)'], ['purple', L('Scale-out (network)', 'Scale-out (ağ)')]],
    footer: L('🧭 Put the chattiest traffic (tensor parallel) inside the scale-up domain', '🧭 En geveze trafiği (tensor parallel) scale-up alanının içinde tut'),
  };
};
