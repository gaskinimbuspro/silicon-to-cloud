// 10.5 concept — Speculative decoding
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('Speculative decoding: guess cheaply, verify in one pass', 'Speculative decoding: ucuza tahmin et, tek seferde doğrula'),
    subtitle: L('A small draft (model or extra heads) proposes several tokens; the big model checks them all at once',
      'Küçük bir taslak (model ya da ek head\'ler) birkaç token önerir; büyük model hepsini birden kontrol eder'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'amber', icon: 'feather', title: L('Draft', 'Taslak'), sub: L('fast, cheap', 'hızlı, ucuz'), items: [
          { id: 'draft', icon: 'feather', title: L('Draft model / MTP', 'Taslak model / MTP'), sub: L('proposes 4 tokens', '4 token önerir'), tag: '"is · very · blue · because"' },
        ] },
        { id: 'g2', n: 2, color: 'purple', icon: 'brain', title: L('Target', 'Hedef'), sub: L('the real model', 'asıl model'), items: [
          { id: 'verify', icon: 'scan-search', title: L('One forward pass', 'Tek forward pass'), sub: L('checks all 4 in parallel', '4\'ünü paralel kontrol eder'), tag: L('like a mini prefill', 'mini prefill gibi') },
        ] },
        { id: 'g3', n: 3, color: 'green', icon: 'check', title: L('Result', 'Sonuç'), items: [
          { id: 'acc', icon: 'check', title: L('Accept 3 + fix 1', '3\'ünü kabul + 1 düzelt'), sub: L('same output as normal', 'normalle aynı çıktı'), tag: L('4 tokens, 1 big step', '4 token, 1 büyük adım') },
        ] },
      ] },
    ],
    edges: [
      ['draft', 'verify', 'r', 'l', 1, L('guesses', 'tahminler')],
      ['verify', 'acc', 'r', 'l', 2, ''],
      ['acc', 'draft', 'b', 'b', 3, L('repeat from the new position', 'yeni konumdan tekrar'), { dash: true }],
    ],
    legend: [['amber', L('Draft', 'Taslak')], ['purple', L('Target', 'Hedef')], ['green', L('Accepted', 'Kabul')]],
    footer: L('⚡ Uses spare compute in a bandwidth-bound decode → lower latency, identical quality', '⚡ Bant sınırlı decode\'daki boş hesap gücünü kullanır → daha düşük gecikme, aynı kalite'),
  };
};
