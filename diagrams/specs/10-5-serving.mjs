// 10.5 — Distributed LLM serving
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1180,
    title: L('Serving LLMs at scale: smart routing, split prefill and decode', 'LLM\'leri ölçekte servis etmek: akıllı yönlendirme, ayrı prefill ve decode'),
    subtitle: L('10.5 · Gateway → KV-aware router → prefill workers → KV transfer → decode workers → tokens stream back',
      '10.5 · Gateway → KV\'ye duyarlı router → prefill worker\'ları → KV aktarımı → decode worker\'ları → token\'lar geri akar'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'users', title: L('Clients', 'İstemciler'), items: [
          { id: 'app', icon: 'message-square', title: L('Apps / agents', 'Uygulamalar / ajanlar'), sub: 'POST /v1/chat/completions', tag: 'stream: true' },
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'route', title: L('Gateway & router', 'Gateway & router'), sub: L('inference-aware', 'inference\'a duyarlı'), items: [
          { id: 'gw', icon: 'shield-check', title: L('Inference gateway', 'Inference gateway'), sub: 'Envoy · Gateway API', tag: 'auth · quota · model' },
          { id: 'epp', icon: 'route', title: L('Endpoint picker', 'Endpoint seçici'), sub: L('KV-cache & load aware', 'KV cache & yük duyarlı'), tag: L('which pod has my prefix?', 'prefix\'im hangi pod\'da?') },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g3', n: 3, color: 'purple', icon: 'zap', title: L('Prefill pool', 'Prefill havuzu'), sub: L('compute-bound', 'hesaplama sınırlı'), reverse: true, items: [
          { id: 'p1', icon: 'zap', title: L('Prefill worker', 'Prefill worker'), sub: L('whole prompt at once', 'tüm prompt birden'), tag: '→ TTFT' },
          { id: 'p2', icon: 'zap', title: L('Prefill worker', 'Prefill worker'), sub: L('builds KV cache', 'KV cache\'i kurar'), tag: L('scale on input load', 'girdi yüküne göre ölçek') },
        ] },
        { id: 'g4', n: 4, color: 'red', icon: 'repeat', title: L('Decode pool', 'Decode havuzu'), sub: L('bandwidth-bound', 'bant genişliği sınırlı'), reverse: true, items: [
          { id: 'd1', icon: 'repeat', title: L('Decode worker', 'Decode worker'), sub: L('1 token / step / user', 'adımda kullanıcı başına 1 token'), tag: '→ TPOT' },
          { id: 'd2', icon: 'repeat', title: L('Decode worker', 'Decode worker'), sub: L('big batches', 'büyük batch\'ler'), tag: L('scale on output load', 'çıktı yüküne göre ölçek') },
        ] },
      ] },
      { groups: [
        { id: 'g5', n: 5, color: 'teal', icon: 'layers', title: L('KV cache tiers', 'KV cache katmanları'), sub: L('hot → cold', 'sıcak → soğuk'), items: [
          { id: 'hbm', icon: 'memory-stick', title: 'GPU HBM', sub: L('active requests', 'aktif istekler'), tag: L('fastest', 'en hızlı') },
          { id: 'ram', icon: 'hard-drive', title: 'CPU RAM', sub: L('recent prefixes', 'son prefix\'ler'), tag: L('offload', 'boşalt') },
          { id: 'ssd', icon: 'database', title: L('SSD / remote', 'SSD / uzak'), sub: L('shared prefixes', 'ortak prefix\'ler'), tag: L('reuse later', 'sonra kullan') },
        ] },
      ] },
    ],
    edges: [
      ['app', 'gw', 'r', 'l', 1, ''],
      ['gw', 'epp', 'r', 'l', 2, ''],
      ['epp', 'p1', 'b', 't', 3, L('route the prompt', 'prompt\'u yönlendir'), { via: ['g2', 'g3'] }],
      ['p1', 'p2', 'l', 'r', '', ''],
      ['p2', 'd1', 'l', 'r', 4, 'KV'],
      ['d1', 'd2', 'l', 'r', '', ''],
      ['d2', 'hbm', 'b', 't', 5, L('keep / offload KV', 'KV\'yi tut / boşalt'), { via: ['g4', 'g5'] }],
      ['hbm', 'ram', 'r', 'l', '', ''],
      ['ram', 'ssd', 'r', 'l', '', ''],
    ],
    legend: [['blue', L('Client', 'İstemci')], ['amber', L('Routing', 'Yönlendirme')], ['purple', 'Prefill'], ['red', 'Decode'], ['teal', 'KV cache']],
    footer: L('🔁 Tokens stream back to the client as they are decoded (SSE)', '🔁 Token\'lar decode edildikçe istemciye akar (SSE)'),
  };
};
