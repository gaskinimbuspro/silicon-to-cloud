// 10.1 concept — How does Mixture of Experts (MoE) work?
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1060,
    title: L('How MoE works: only a few experts wake up per token', 'MoE nasıl çalışır: her token için sadece birkaç uzman uyanır'),
    subtitle: L('MoE = Mixture of Experts · replaces one big MLP with many smaller ones and a router',
      'MoE = Mixture of Experts (Uzmanlar Karışımı) · tek büyük MLP yerine çok sayıda küçük MLP ve bir router'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'binary', title: L('Input', 'Girdi'), items: [
          { id: 'tok', icon: 'binary', title: L('Token vector', 'Token vektörü'), sub: L('after attention', 'attention sonrası'), tag: '"Python"' },
          { id: 'router', icon: 'split', title: L('Router (gate)', 'Router (kapı)'), sub: L('scores all experts', 'tüm uzmanları puanlar'), tag: L('pick top-2', 'en iyi 2\'yi seç') },
        ] },
        { id: 'g2', n: 2, color: 'purple', icon: 'users', title: L('Experts', 'Uzmanlar'), items: [
          [
            { id: 'e1', icon: 'code', title: L('Expert 1', 'Uzman 1'), sub: L('active', 'aktif'), tag: 'weight 0.7' },
            { id: 'e2', icon: 'circle-dashed', title: L('Expert 2', 'Uzman 2'), sub: L('idle', 'boşta'), tag: '—' },
            { id: 'e3', icon: 'calculator', title: L('Expert 3', 'Uzman 3'), sub: L('active', 'aktif'), tag: 'weight 0.3' },
            { id: 'e4', icon: 'circle-dashed', title: L('Expert … N', 'Uzman … N'), sub: L('idle', 'boşta'), tag: '—' },
          ],
        ] },
        { id: 'g3', n: 3, color: 'green', icon: 'blend', title: L('Output', 'Çıktı'), items: [
          { id: 'sum', icon: 'blend', title: L('Weighted sum', 'Ağırlıklı toplam'), sub: '0.7·E1 + 0.3·E3', tag: L('to next layer', 'sonraki katmana') },
        ] },
      ] },
    ],
    edges: [
      ['tok', 'router', 'r', 'l', 1, ''],
      ['router', 'e1', 'r', 'l', 2, '0.7'],
      ['router', 'e3', 'r', 'l', 3, '0.3'],
      ['e1', 'sum', 'r', 'l', '', ''],
      ['e3', 'sum', 'r', 'l', '', ''],
    ],
    legend: [['blue', L('Input', 'Girdi')], ['purple', L('Experts', 'Uzmanlar')], ['green', L('Output', 'Çıktı')]],
    footer: L('💾 Memory = ALL experts · ⚡ compute = only the active ones', '💾 Bellek = TÜM uzmanlar · ⚡ hesaplama = sadece aktif olanlar'),
  };
};
