// 10.7 — RAG pipeline
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1180,
    title: L('RAG: giving an LLM your own documents', 'RAG: bir LLM\'e kendi dokümanlarını vermek'),
    subtitle: L('RAG = Retrieval-Augmented Generation · index once (offline), then retrieve the right chunks for every question (online)',
      'RAG = Retrieval-Augmented Generation · bir kez indeksle (offline), sonra her soru için doğru parçaları getir (online)'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'amber', icon: 'folder-open', title: L('Indexing', 'İndeksleme'), sub: L('offline · on every doc change', 'offline · her doküman değişiminde'), items: [
          { id: 'docs', icon: 'files', title: L('Documents', 'Dokümanlar'), sub: 'PDF · wiki · tickets', tag: L('+ permissions', '+ izinler') },
          { id: 'chunk', icon: 'scissors', title: 'Chunker', sub: L('split ~300–800 tokens', '~300–800 token\'a böl'), tag: L('with overlap', 'örtüşmeli') },
          { id: 'emb', icon: 'binary', title: L('Embedding model', 'Embedding modeli'), sub: L('chunk → vector', 'parça → vektör'), tag: '[0.12, -0.8, …]' },
          { id: 'vdb', icon: 'database', title: 'Vector DB', sub: 'pgvector · Qdrant', tag: L('ANN index (HNSW)', 'ANN indeksi (HNSW)') },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g2', n: 2, color: 'blue', icon: 'search', title: L('Retrieve', 'Getir'), sub: L('per question', 'soru başına'), reverse: true, items: [
          { id: 'q', icon: 'message-square', title: L('Question', 'Soru'), sub: L('"How do I rotate keys?"', '"Anahtarlar nasıl döndürülür?"'), tag: L('user + ACL', 'kullanıcı + ACL') },
          { id: 'qemb', icon: 'binary', title: L('Embed question', 'Soruyu embed et'), sub: L('same model', 'aynı model'), tag: L('query vector', 'sorgu vektörü') },
          { id: 'search', icon: 'search', title: L('Hybrid search', 'Hibrit arama'), sub: 'vector + BM25', tag: 'top-50' },
        ] },
        { id: 'g3', n: 3, color: 'green', icon: 'sparkles', title: L('Generate', 'Üret'), reverse: true, items: [
          { id: 'rerank', icon: 'list-ordered', title: 'Reranker', sub: L('best 5 of 50', '50\'nin en iyi 5\'i'), tag: L('more precise', 'daha isabetli') },
          { id: 'llm', icon: 'brain', title: 'LLM', sub: L('question + chunks', 'soru + parçalar'), tag: L('"answer only from context"', '"sadece bağlamdan cevapla"') },
          { id: 'ans', icon: 'quote', title: L('Answer', 'Cevap'), sub: L('with citations', 'kaynaklarıyla'), tag: '[doc-12 §3]' },
        ] },
      ] },
    ],
    edges: [
      ['docs', 'chunk', 'r', 'l', 1, ''],
      ['chunk', 'emb', 'r', 'l', 2, ''],
      ['emb', 'vdb', 'r', 'l', 3, ''],
      ['q', 'qemb', 'l', 'r', 4, ''],
      ['qemb', 'search', 'l', 'r', 5, ''],
      ['vdb', 'search', 'b', 't', '', L('nearest vectors', 'en yakın vektörler'), { dash: true, via: ['g1', 'g2'] }],
      ['search', 'rerank', 'l', 'r', 6, ''],
      ['rerank', 'llm', 'l', 'r', 7, ''],
      ['llm', 'ans', 'l', 'r', 8, ''],
    ],
    legend: [['amber', L('Offline', 'Offline')], ['blue', L('Retrieval', 'Getirme')], ['green', L('Generation', 'Üretim')]],
    footer: L('🎯 Most RAG quality problems are retrieval problems: chunking, search and permissions', '🎯 RAG kalite sorunlarının çoğu getirme sorunudur: parçalama, arama ve izinler'),
  };
};
