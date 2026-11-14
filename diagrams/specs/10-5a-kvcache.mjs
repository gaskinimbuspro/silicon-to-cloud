// 10.5 concept — KV cache and PagedAttention
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1080,
    title: L('KV cache with paging: like virtual memory for attention', 'Sayfalamalı KV cache: attention için sanal bellek gibi'),
    subtitle: L('KV = Key/Value · each request\'s cache lives in fixed-size blocks, found through a block table (PagedAttention)',
      'KV = Key/Value · her isteğin cache\'i sabit boyutlu bloklarda durur, bir blok tablosuyla bulunur (PagedAttention)'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'users', title: L('Requests', 'İstekler'), items: [
          [
            { id: 'ra', icon: 'message-square', title: L('Request A', 'İstek A'), sub: L('2,000 tokens so far', 'şu ana kadar 2.000 token'), tag: L('growing', 'büyüyor') },
            { id: 'rb', icon: 'message-square', title: L('Request B', 'İstek B'), sub: L('300 tokens', '300 token'), tag: L('same system prompt', 'aynı sistem prompt\'u') },
          ],
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'table-2', title: L('Table', 'Tablo'), items: [
          { id: 'tbl', icon: 'table-2', title: L('Logical → physical', 'Mantıksal → fiziksel'), sub: L('A: 7, 2, 9 … · B: 7, 4', 'A: 7, 2, 9 … · B: 7, 4'), tag: L('like a page table', 'page table gibi') },
        ] },
        { id: 'g3', n: 3, color: 'red', icon: 'memory-stick', title: 'HBM', sub: L('blocks', 'bloklar'), items: [
          [
            { id: 'b7', icon: 'copy', title: L('Block 7', 'Blok 7'), sub: L('shared prefix', 'ortak prefix'), tag: 'A + B' },
            { id: 'b2', icon: 'square', title: L('Block 2, 9 …', 'Blok 2, 9 …'), sub: L('A only', 'sadece A'), tag: '16 tokens each' },
            { id: 'bf', icon: 'circle-dashed', title: L('Free blocks', 'Boş bloklar'), sub: L('for new tokens', 'yeni token\'lar için'), tag: L('no fragmentation', 'parçalanma yok') },
          ],
        ] },
      ] },
    ],
    edges: [
      ['ra', 'tbl', 'r', 'l', 1, ''],
      ['rb', 'tbl', 'r', 'l', 2, ''],
      ['tbl', 'b7', 'r', 'l', '', ''],
      ['tbl', 'b2', 'r', 'l', '', ''],
      ['tbl', 'bf', 'r', 'l', '', L('allocate', 'ayır'), { dash: true }],
    ],
    legend: [['blue', L('Requests', 'İstekler')], ['amber', L('Mapping', 'Eşleme')], ['red', 'HBM']],
    footer: L('📏 KV per token = 2 × layers × KV heads × head dim × bytes (8B model ≈ 128 KB/token)', '📏 Token başına KV = 2 × katman × KV head × head boyutu × byte (8B model ≈ 128 KB/token)'),
  };
};
