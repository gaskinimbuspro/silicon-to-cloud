// 10.6 — AI platform on Kubernetes
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1440,
    title: L('An AI platform on Kubernetes', 'Kubernetes üzerinde bir AI platformu'),
    subtitle: L('10.6 · Teams submit work → queues admit it fairly → batch jobs and model servers get GPUs via DRA → shared services feed and watch them',
      '10.6 · Ekipler iş gönderir → kuyruklar adil kabul eder → batch işler ve model sunucuları GPU\'ları DRA ile alır → ortak servisler besler ve izler'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'users', title: L('Teams', 'Ekipler'), items: [
          [
            { id: 'ta', icon: 'flask-conical', title: L('ML team', 'ML ekibi'), sub: L('fine-tune, eval', 'fine-tune, değerlendirme'), tag: 'JobSet' },
            { id: 'tb', icon: 'app-window', title: L('App team', 'Uygulama ekibi'), sub: L('serve a model', 'model servis et'), tag: 'InferencePool' },
          ],
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'list-ordered', title: L('Admission', 'Kabul'), sub: L('fair sharing', 'adil paylaşım'), items: [
          { id: 'queue', icon: 'list-ordered', title: 'Kueue / KAI', sub: L('quotas · priorities', 'kotalar · öncelikler'), tag: L('gang admission', 'gang kabulü') },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g3', n: 3, color: 'purple', icon: 'boxes', title: 'Batch', reverse: true, items: [
          { id: 'jobset', icon: 'boxes', title: 'JobSet / PyTorchJob', sub: L('N pods × 8 GPUs', 'N pod × 8 GPU'), tag: L('all at once', 'hepsi birden') },
        ] },
        { id: 'g4', n: 4, color: 'green', icon: 'server', title: L('Serving', 'Servis'), reverse: true, items: [
          { id: 'gw', icon: 'route', title: 'Inference Gateway', sub: 'InferencePool + EPP', tag: 'llm-d · KServe' },
          { id: 'pods', icon: 'server', title: L('Model servers', 'Model sunucuları'), sub: 'vLLM · SGLang', tag: L('LWS for multi-node', 'çok node için LWS') },
          { id: 'keda', icon: 'chart-line', title: 'Autoscaler', sub: 'KEDA · HPA', tag: L('queue · KV · TTFT', 'kuyruk · KV · TTFT') },
        ] },
      ] },
      { groups: [
        { id: 'g5', n: 5, color: 'red', icon: 'gpu', title: L('GPU node pools', 'GPU node havuzları'), sub: L('tainted', 'taint\'li'), items: [
          { id: 'op', icon: 'bot', title: 'GPU Operator', sub: L('driver · toolkit', 'sürücü · toolkit'), tag: 'NFD / GFD labels' },
          { id: 'dra', icon: 'plug', title: L('DRA driver', 'DRA sürücüsü'), sub: 'ResourceClaim', tag: L('or device plugin', 'ya da device plugin') },
          { id: 'dcgm', icon: 'activity', title: 'DCGM exporter', sub: L('GPU metrics', 'GPU metrikleri'), tag: 'XID · SM util' },
        ] },
        { id: 'g6', n: 6, color: 'teal', icon: 'database', title: L('Shared services', 'Ortak servisler'), items: [
          { id: 'reg', icon: 'archive', title: L('Model registry', 'Model kaydı'), sub: 'S3 · OCI artifacts', tag: L('versioned weights', 'versiyonlu ağırlıklar') },
          { id: 'cache', icon: 'hard-drive', title: L('Model cache', 'Model önbelleği'), sub: L('node NVMe · PVC', 'node NVMe · PVC'), tag: L('fast cold start', 'hızlı soğuk başlangıç') },
          { id: 'obs', icon: 'eye', title: L('Observability & cost', 'Gözlem & maliyet'), sub: 'Prometheus · OpenCost', tag: L('$ per team', 'ekip başına $') },
        ] },
      ] },
    ],
    edges: [
      ['ta', 'queue', 'r', 'l', 1, L('submit', 'gönder')],
      ['queue', 'jobset', 'b', 't', 2, L('admit when quota allows', 'kota izin verince kabul et'), { via: ['g2', 'g3'] }],
      ['tb', 'gw', 'b', 't', 3, L('deploy + route', 'deploy + yönlendir'), { via: ['g1', 'g4'] }],
      ['gw', 'pods', 'l', 'r', 4, L('pick pod', 'pod seç')],
      ['keda', 'pods', 'r', 'l', '', L('scale', 'ölçekle'), { dash: true }],
      ['pods', 'dra', 'b', 't', 5, L('claim GPUs', 'GPU talep et'), { via: ['g4', 'g5'] }],
      ['reg', 'cache', 'r', 'l', 6, L('pull once', 'bir kez çek')],
    ],
    legend: [['blue', L('Users', 'Kullanıcılar')], ['amber', L('Queueing', 'Kuyruk')], ['purple', 'Batch'], ['green', L('Serving', 'Servis')], ['red', 'GPU'], ['teal', L('Services', 'Servisler')]],
    footer: L('🎯 Goal: high GPU utilization with fair sharing — GPUs are the most expensive thing in the cluster', '🎯 Hedef: adil paylaşımla yüksek GPU kullanımı; GPU cluster\'daki en pahalı şey'),
  };
};
