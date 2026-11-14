// 10.1 concept — How does self-attention work?
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('How self-attention works: what does "it" refer to?', 'Self-attention nasıl çalışır: "o" neyi kastediyor?'),
    subtitle: L('Every token asks a question (Query), every earlier token offers a label (Key) and content (Value)',
      'Her token bir soru sorar (Query), önceki her token bir etiket (Key) ve içerik (Value) sunar'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'slate', icon: 'text', title: L('Earlier tokens', 'Önceki token\'lar'), sub: L('each has K and V', 'her birinin K ve V\'si var'), items: [
          { id: 't1', icon: 'cat', title: L('"The cat"', '"Kedi"'), sub: 'K₁ · V₁', tag: L('an animal', 'bir hayvan') },
          { id: 't2', icon: 'route', title: L('"crossed the road"', '"yolu geçti"'), sub: 'K₂ · V₂', tag: L('an action', 'bir eylem') },
          { id: 't3', icon: 'moon', title: L('"because"', '"çünkü"'), sub: 'K₃ · V₃', tag: L('a reason follows', 'sebep geliyor') },
        ] },
        { id: 'g2', n: 2, color: 'blue', icon: 'search', title: L('Now', 'Şimdi'), items: [
          { id: 'it', icon: 'search', title: L('"it was tired"', '"o yorgundu"'), sub: L('Query Q', 'Query Q'), tag: L('who is "it"?', '"o" kim?') },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g3', n: 3, color: 'purple', icon: 'calculator', title: L('Attention math', 'Attention hesabı'), sub: L('per head, per layer', 'head ve katman başına'), reverse: true, items: [
          { id: 'score', icon: 'calculator', title: L('Scores', 'Skorlar'), sub: 'Q · Kᵢ', tag: L('how well they match', 'ne kadar eşleşiyor') },
          { id: 'soft', icon: 'percent', title: 'Softmax', sub: L('scores → weights', 'skor → ağırlık'), tag: 'cat 0.8 · road 0.1' },
          { id: 'mix', icon: 'blend', title: L('Weighted mix', 'Ağırlıklı karışım'), sub: 'Σ wᵢ · Vᵢ', tag: L('"it" ≈ the cat ✓', '"o" ≈ kedi ✓') },
        ] },
      ] },
    ],
    edges: [
      ['it', 'score', 'b', 't', 1, L('Q', 'Q'), { via: ['g2', 'g3'] }],
      ['t1', 'score', 'b', 'b', '', L('all K values', 'tüm K değerleri'), { dash: true, my: null }],
      ['score', 'soft', 'l', 'r', 2, ''],
      ['soft', 'mix', 'l', 'r', 3, L('× V', '× V')],
    ],
    legend: [['slate', 'Keys / Values'], ['blue', 'Query'], ['purple', L('Math', 'Hesap')]],
    footer: L('🔁 Done for every token, in every head, in every layer — that\'s why it needs GPUs', '🔁 Her token, her head, her katman için yapılır; GPU gerekmesinin sebebi bu'),
  };
};
