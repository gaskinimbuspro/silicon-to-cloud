// 10.7 concept — AI gateway, guardrails, observability and evals
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1180,
    title: L('Running LLM apps in production: gateway, guardrails, evals', 'LLM uygulamalarını üretimde çalıştırmak: gateway, guardrail, değerlendirme'),
    subtitle: L('One controlled entry point to all models, with safety checks, routing, tracing and continuous evaluation',
      'Tüm modellere tek kontrollü giriş noktası: güvenlik kontrolleri, yönlendirme, izleme ve sürekli değerlendirme'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'app-window', title: L('Apps', 'Uygulamalar'), items: [
          { id: 'apps', icon: 'app-window', title: L('Apps & agents', 'Uygulamalar & ajanlar'), sub: L('one SDK, one URL', 'tek SDK, tek URL'), tag: 'OpenAI API' },
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'shield-check', title: 'AI gateway', sub: L('policy point', 'politika noktası'), items: [
          { id: 'auth', icon: 'key-round', title: L('Auth & quotas', 'Kimlik & kota'), sub: L('virtual keys per team', 'ekip başına sanal anahtar'), tag: L('tokens/min', 'token/dk') },
          { id: 'guard', icon: 'shield-alert', title: 'Guardrails', sub: L('PII · injection · topics', 'PII · injection · konular'), tag: L('in and out', 'girişte ve çıkışta') },
          { id: 'route', icon: 'route', title: L('Routing', 'Yönlendirme'), sub: L('fallback · cache', 'yedek · önbellek'), tag: L('cheapest that works', 'işe yarayan en ucuz') },
        ] },
        { id: 'g3', n: 3, color: 'green', icon: 'brain', title: L('Models', 'Modeller'), items: [
          [
            { id: 'self', icon: 'server', title: L('Self-hosted', 'Kendi barındırdığın'), sub: 'vLLM on K8s', tag: L('private data', 'özel veri') },
            { id: 'api', icon: 'cloud', title: L('API providers', 'API sağlayıcıları'), sub: L('frontier models', 'öncü modeller'), tag: L('pay per token', 'token başına öde') },
          ],
        ] },
      ] },
      { groups: [
        { id: 'g4', n: 4, color: 'purple', icon: 'activity', title: L('Observe & evaluate', 'Gözle & değerlendir'), sub: L('continuously', 'sürekli'), items: [
          { id: 'trace', icon: 'waypoints', title: L('LLM traces', 'LLM izleri'), sub: 'OpenTelemetry GenAI', tag: L('prompt · tools · latency', 'prompt · araç · gecikme') },
          { id: 'eval', icon: 'clipboard-check', title: 'Evals', sub: L('test sets · LLM-as-judge', 'test setleri · LLM-hakem'), tag: L('before every change', 'her değişiklikten önce') },
          { id: 'cost', icon: 'coins', title: L('Tokens & cost', 'Token & maliyet'), sub: L('per team, per feature', 'ekip, özellik başına'), tag: '$ / 1M tokens' },
        ] },
      ] },
    ],
    edges: [
      ['apps', 'auth', 'r', 'l', 1, ''],
      ['auth', 'guard', 'r', 'l', 2, ''],
      ['guard', 'route', 'r', 'l', 3, ''],
      ['route', 'self', 'r', 'l', 4, ''],
      ['route', 'api', 'r', 'l', '', ''],
      ['guard', 'trace', 'b', 't', '', L('every call is traced', 'her çağrı izlenir'), { dash: true, via: ['g2', 'g4'] }],
      ['trace', 'eval', 'r', 'l', 5, ''],
      ['eval', 'cost', 'r', 'l', '', ''],
    ],
    legend: [['blue', L('Apps', 'Uygulamalar')], ['amber', 'Gateway'], ['green', L('Models', 'Modeller')], ['purple', L('Ops', 'Operasyon')]],
    footer: L('🧪 Treat prompts and model versions like code: version, test (evals), roll out gradually', '🧪 Prompt\'ları ve model versiyonlarını kod gibi yönet: versiyonla, test et (eval), kademeli dağıt'),
  };
};
