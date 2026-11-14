// 10.7 concept — The agent loop with tools and MCP
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1180,
    title: L('How an agent works: think → call a tool → observe → repeat', 'Bir ajan nasıl çalışır: düşün → araç çağır → gözlemle → tekrar'),
    subtitle: L('MCP = Model Context Protocol · a standard way for AI apps to discover and call tools and data sources',
      'MCP = Model Context Protocol · AI uygulamalarının araçları ve veri kaynaklarını keşfedip çağırması için standart bir yol'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'bot', title: L('Agent (host app)', 'Ajan (host uygulama)'), items: [
          { id: 'goal', icon: 'target', title: L('Goal', 'Hedef'), sub: L('"Fix the failing CI job"', '"Bozuk CI işini düzelt"'), tag: L('+ tool list', '+ araç listesi') },
          { id: 'llm', icon: 'brain', title: 'LLM', sub: L('decides next step', 'sıradaki adıma karar verir'), tag: L('reason · plan', 'akıl yürüt · planla') },
          { id: 'call', icon: 'braces', title: L('Tool call', 'Araç çağrısı'), sub: 'JSON', tag: 'get_ci_logs(run=812)' },
        ] },
        { id: 'g2', n: 2, color: 'purple', icon: 'plug', title: 'MCP', sub: 'JSON-RPC', items: [
          { id: 'client', icon: 'plug', title: L('MCP client', 'MCP istemcisi'), sub: L('inside the host', 'host içinde'), tag: L('permissions!', 'izinler!') },
          { id: 'server', icon: 'server', title: L('MCP servers', 'MCP sunucuları'), sub: 'GitHub · DB · files', tag: 'tools · resources' },
          { id: 'sys', icon: 'globe', title: L('Real systems', 'Gerçek sistemler'), sub: L('APIs, repos, clusters', 'API, repo, cluster'), tag: L('side effects', 'yan etkiler') },
        ] },
      ] },
    ],
    edges: [
      ['goal', 'llm', 'r', 'l', 1, ''],
      ['llm', 'call', 'r', 'l', 2, ''],
      ['call', 'client', 'r', 'l', 3, ''],
      ['client', 'server', 'r', 'l', 4, ''],
      ['server', 'sys', 'r', 'l', 5, ''],
      ['sys', 'llm', 'b', 'b', 6, L('result goes back into the context → next step, until done', 'sonuç bağlama geri döner → sıradaki adım, iş bitene kadar'), { dash: true }],
    ],
    legend: [['blue', L('Agent', 'Ajan')], ['purple', L('Tools', 'Araçlar')]],
    footer: L('🔐 Treat tool results as untrusted input; scope credentials per tool; require approval for side effects', '🔐 Araç sonuçlarını güvenilmeyen girdi say; kimlik bilgilerini araç başına sınırla; yan etkiler için onay iste'),
  };
};
