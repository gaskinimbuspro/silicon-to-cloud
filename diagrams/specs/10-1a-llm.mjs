// 10.1 concept — What is an LLM?
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('What is an LLM? Learn once, use many times', 'LLM nedir? Bir kez öğren, defalarca kullan'),
    subtitle: L('LLM = Large Language Model · training turns text into weights, inference turns a prompt into an answer',
      'LLM = Large Language Model (Büyük Dil Modeli) · eğitim metni ağırlıklara, inference prompt\'u cevaba çevirir'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'amber', icon: 'graduation-cap', title: L('Training', 'Eğitim'), sub: L('once · months · thousands of GPUs', 'bir kez · aylar · binlerce GPU'), items: [
          { id: 'data', icon: 'library', title: L('Huge text corpus', 'Devasa metin'), sub: L('web, books, code', 'web, kitap, kod'), tag: L('trillions of tokens', 'trilyonlarca token') },
          { id: 'learn', icon: 'repeat', title: L('Guess next token', 'Sıradakini tahmin et'), sub: L('compare · adjust', 'karşılaştır · düzelt'), tag: L('billions of times', 'milyarlarca kez') },
          { id: 'w', icon: 'file-box', title: L('Weights file', 'Ağırlık dosyası'), sub: L('the learned numbers', 'öğrenilen sayılar'), tag: '8B → ~16 GB' },
        ] },
      ] },
      { groups: [
        { id: 'g2', n: 2, color: 'blue', icon: 'message-square', title: L('Inference', 'Inference (kullanım)'), sub: L('every request · milliseconds', 'her istekte · milisaniyeler'), items: [
          { id: 'prompt', icon: 'message-square', title: 'Prompt', sub: L('your question', 'sorun'), tag: '"Why is the sky blue?"' },
          { id: 'llm', icon: 'brain', title: 'LLM', sub: L('weights on a GPU', 'GPU\'daki ağırlıklar'), tag: L('next-token machine', 'sıradaki-token makinesi') },
          { id: 'ans', icon: 'text', title: L('Answer', 'Cevap'), sub: L('token by token', 'token token'), tag: '"Because… "' },
        ] },
      ] },
    ],
    edges: [
      ['data', 'learn', 'r', 'l', 1, ''],
      ['learn', 'w', 'r', 'l', 2, L('save', 'kaydet')],
      ['w', 'llm', 'b', 't', 3, L('load into GPU memory', 'GPU belleğine yükle'), { via: ['g1', 'g2'] }],
      ['prompt', 'llm', 'r', 'l', 4, ''],
      ['llm', 'ans', 'r', 'l', 5, L('1 token', '1 token')],
      ['ans', 'llm', 'b', 'b', '', L('each new token is fed back in', 'her yeni token geri beslenir'), { dash: true }],
    ],
    legend: [['amber', L('Training', 'Eğitim')], ['blue', 'Inference']],
    footer: L('💡 An LLM doesn\'t look things up — it predicts the most likely continuation', '💡 LLM bir şey aramaz, en olası devamı tahmin eder'),
  };
};
