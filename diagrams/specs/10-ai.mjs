// Chapter 10 — AI infrastructure
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1400,
    title: L('Serving an LLM: from a prompt to streamed tokens', 'Bir LLM\'i servis etmek: prompt\'tan akan token\'lara'),
    subtitle: L('Chapter 10 · Gateway → retrieval (RAG) → inference server (batching, KV cache) → GPU (tensor cores + HBM) → the software & Kubernetes stack underneath',
      'Bölüm 10 · Gateway → retrieval (RAG) → inference sunucusu (batching, KV cache) → GPU (tensor core + HBM) → alttaki yazılım & Kubernetes yığını'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'message-square', title: L('Request', 'İstek'), sub: 'HTTPS · SSE', items: [
          { id: 'user', icon: 'user', title: L('App / user', 'Uygulama'), sub: L('chat, agent', 'sohbet, ajan'), tag: 'prompt' },
          { id: 'gw', icon: 'shield-check', title: 'AI gateway', sub: 'OpenAI-style API', tag: 'auth · quota' },
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'search', title: 'RAG', sub: L('optional', 'opsiyonel'), items: [
          { id: 'emb', icon: 'binary', title: 'Embeddings', sub: L('text → vector', 'metin → vektör'), tag: '[0.12, -0.8, …]' },
          { id: 'vdb', icon: 'database', title: 'Vector DB', sub: 'pgvector · Qdrant', tag: L('top-k chunks', 'en yakın k parça') },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g3', n: 3, color: 'purple', icon: 'cpu', title: L('Inference server', 'Inference sunucusu'), sub: 'vLLM · SGLang', reverse: true, items: [
          { id: 'sched', icon: 'list-ordered', title: 'Scheduler', sub: L('cont. batching', 'sürekli batching'), tag: L('many users / step', 'çok kullanıcı') },
          { id: 'engine', icon: 'zap', title: L('Engine', 'Motor'), sub: 'prefill → decode', tag: L('1 token / step', 'adımda 1 token') },
        ] },
        { id: 'g4', n: 4, color: 'red', icon: 'gpu', title: 'GPU', sub: L('the expensive part', 'pahalı kısım'), reverse: true, items: [
          { id: 'tc', icon: 'gpu', title: 'Tensor Cores', sub: L('SMs · matrix math', 'SM · matris'), tag: 'FP16 · FP8' },
          { id: 'hbm', icon: 'memory-stick', title: 'HBM', sub: L('weights + KV cache', 'ağırlık + KV'), tag: L('bandwidth-bound', 'bant sınırlı') },
          { id: 'nvl', icon: 'cable', title: 'NVLink / IB', sub: L('GPU ↔ GPU', 'GPU ↔ GPU'), tag: 'tensor parallel' },
        ] },
      ] },
      { groups: [
        { id: 'g5', n: 5, color: 'green', icon: 'layers', title: L('Software stack', 'Yazılım yığını'), sub: L('Chapters 3–4 again', 'yine Bölüm 3–4'), items: [
          { id: 'torch', icon: 'flame', title: 'PyTorch', sub: L('model code', 'model kodu'), tag: 'tensors' },
          { id: 'cuda', icon: 'library', title: 'CUDA libs', sub: 'cuBLAS·cuDNN·NCCL', tag: L('GPU kernels', 'GPU kernel\'leri') },
          { id: 'drv', icon: 'shield', title: L('Driver', 'Sürücü'), sub: 'nvidia.ko', tag: 'ring 0' },
        ] },
        { id: 'g6', n: 6, color: 'teal', icon: 'container', title: L('On Kubernetes', 'Kubernetes üzerinde'), sub: L('Chapter 9', 'Bölüm 9'), items: [
          { id: 'op', icon: 'bot', title: 'GPU Operator', sub: L('driver + plugin', 'sürücü + plugin'), tag: 'nvidia.com/gpu: 1' },
          { id: 'pool', icon: 'server', title: L('GPU node pool', 'GPU havuzu'), sub: L('taints · labels', 'taint · label'), tag: L('scale on queue', 'kuyruk bazlı') },
          { id: 'obs', icon: 'activity', title: L('Metrics', 'Metrikler'), sub: 'DCGM · TTFT · TPOT', tag: 'tokens/s' },
        ] },
      ] },
    ],
    edges: [
      ['user', 'gw', 'r', 'l', 1, ''],
      ['gw', 'emb', 'r', 'l', 2, L('question', 'soru')],
      ['emb', 'vdb', 'r', 'l', 3, L('similar?', 'benzer?')],
      ['vdb', 'sched', 'b', 't', 4, L('prompt + context', 'prompt + bağlam'), { via: ['g2', 'g3'], lx: 1263, ly: 408 }],
      ['sched', 'engine', 'l', 'r', 5, 'batch'],
      ['engine', 'tc', 'l', 'r', 6, 'CUDA'],
      ['tc', 'hbm', 'l', 'r', 7, L('weights', 'ağırlık')],
      ['hbm', 'nvl', 'l', 'r', '', L('too big? shard', 'büyük mü? böl'), { dash: true }],
      ['engine', 'torch', 'b', 't', '', L('runs on', 'üzerinde çalışır'), { dash: true, via: ['g4', 'g5'] }],
    ],
    legend: [
      ['blue', L('Client', 'İstemci')], ['amber', 'RAG'], ['purple', L('Serving', 'Servis')],
      ['red', L('Hardware', 'Donanım')], ['green', L('Software', 'Yazılım')], ['teal', 'Platform'],
    ],
    footer: L('📏 7B params × 2 bytes (FP16) ≈ 14 GB of weights, read for every generated token', '📏 7B parametre × 2 byte (FP16) ≈ 14 GB ağırlık, üretilen her token için okunur'),
  };
};
