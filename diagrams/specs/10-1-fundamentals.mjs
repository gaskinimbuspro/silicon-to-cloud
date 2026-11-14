// 10.1 — AI fundamentals for infra people
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('Inside an LLM: from text to the next token', 'Bir LLM\'in içi: metinden sıradaki token\'a'),
    subtitle: L('10.1 · Tokenize → embed → N transformer layers (attention + MLP) → logits → sample → repeat',
      '10.1 · Token\'lara böl → embed → N transformer katmanı (attention + MLP) → logit → örnekle → tekrar'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'type', title: L('Text → numbers', 'Metin → sayılar'), sub: L('input', 'girdi'), items: [
          { id: 'text', icon: 'message-square', title: L('Prompt', 'Prompt'), sub: L('your text', 'senin metnin'), tag: '"Why is the sky…"' },
          { id: 'tok', icon: 'scissors', title: 'Tokenizer', sub: 'BPE', tag: L('text → pieces', 'metin → parçalar') },
          { id: 'ids', icon: 'hash', title: 'Token IDs', sub: L('integers', 'tam sayılar'), tag: '[10445, 374, …]' },
          { id: 'emb', icon: 'binary', title: 'Embeddings', sub: L('lookup table', 'arama tablosu'), tag: L('vector per token', 'token → vektör') },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g2', n: 2, color: 'purple', icon: 'layers', title: L('Transformer block', 'Transformer bloğu'), sub: L('× N layers', '× N katman'), reverse: true, items: [
          { id: 'attn', icon: 'eye', title: 'Self-attention', sub: L('which tokens matter?', 'hangi token?'), tag: 'Q · K → V' },
          { id: 'mlp', icon: 'network', title: 'MLP / FFN', sub: L('stored knowledge', 'saklı bilgi'), tag: L('or MoE experts', 'ya da MoE') },
        ] },
        { id: 'g3', n: 3, color: 'green', icon: 'dice-5', title: L('Output', 'Çıktı'), sub: L('one token', 'tek token'), reverse: true, items: [
          { id: 'logits', icon: 'chart-bar', title: 'Logits', sub: L('score per vocab item', 'sözlük skorları'), tag: '~150k' },
          { id: 'sample', icon: 'dice-5', title: 'Sampling', sub: 'temp · top-p', tag: '"The"' },
        ] },
      ] },
    ],
    edges: [
      ['text', 'tok', 'r', 'l', 1, ''],
      ['tok', 'ids', 'r', 'l', 2, ''],
      ['ids', 'emb', 'r', 'l', 3, ''],
      ['emb', 'attn', 'b', 't', 4, L('+ position (RoPE)', '+ konum (RoPE)'), { via: ['g1', 'g2'], lx: 824, ly: 402 }],
      ['attn', 'mlp', 'l', 'r', 5, ''],
      ['mlp', 'logits', 'l', 'r', 6, L('last layer', 'son katman')],
      ['logits', 'sample', 'l', 'r', 7, 'softmax'],
      ['sample', 'attn', 'b', 'b', '', L('append the token and run again (decode loop)', 'token\'ı ekle ve tekrar çalıştır (decode döngüsü)'), { dash: true }],
    ],
    legend: [
      ['blue', L('Input', 'Girdi')], ['purple', 'Transformer'], ['green', L('Output', 'Çıktı')],
    ],
    footer: L('🧮 "Parameters" = all the numbers inside these boxes', '🧮 "Parametre" = bu kutuların içindeki tüm sayılar'),
  };
};
