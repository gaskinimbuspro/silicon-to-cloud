// Chapter 6 — Reaching the internet: DNS, TCP, TLS, HTTP
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1640,
    title: L('Typing https://example.com: DNS → TCP → TLS → HTTP', 'https://example.com yazınca: DNS → TCP → TLS → HTTP'),
    subtitle: L('Chapter 6 · Find the IP (DNS) → open a connection (TCP) → secure it (TLS 1.3) → ask for the page (HTTP)',
      'Bölüm 6 · IP\'yi bul (DNS) → bağlantı aç (TCP) → güvenli hale getir (TLS 1.3) → sayfayı iste (HTTP)'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'laptop', title: L('Your machine', 'Senin makinen'), items: [
          { id: 'browser', icon: 'globe', title: L('Browser', 'Tarayıcı'), sub: 'example.com', tag: L('cache?', 'önbellek?') },
          { id: 'stub', icon: 'search', title: L('OS resolver', 'OS çözücü'), sub: '/etc/hosts · cache', tag: 'UDP :53' },
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'search', title: L('Recursive resolver', 'Özyinelemeli çözücü'), items: [
          { id: 'rec', icon: 'server', title: 'Resolver', sub: '1.1.1.1 · ISP', tag: L('does the walking', 'yolu o yürür') },
        ] },
        { id: 'g3', n: 3, color: 'purple', icon: 'network', title: L('DNS hierarchy', 'DNS hiyerarşisi'), sub: L('referrals', 'yönlendirmeler'), items: [
          { id: 'root', icon: 'tree-pine', title: L('Root servers', 'Kök sunucular'), sub: '.', tag: L('→ ask .com', '→ .com\'a sor') },
          { id: 'tld', icon: 'folder', title: 'TLD', sub: '.com', tag: L('→ ask ns1', '→ ns1\'e sor') },
          { id: 'auth', icon: 'badge-check', title: L('Authoritative', 'Yetkili'), sub: 'ns1.example.com', tag: 'A 93.184.215.14' },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g4', n: 4, color: 'red', icon: 'lock', title: L('Connection', 'Bağlantı'), sub: ':443', reverse: true, items: [
          { id: 'tcp', icon: 'handshake', title: L('TCP handshake', 'TCP el sıkışma'), sub: 'SYN·SYN-ACK·ACK', tag: '1 RTT' },
          { id: 'tls', icon: 'lock', title: L('TLS 1.3', 'TLS 1.3'), sub: L('keys + cert', 'anahtar + sertifika'), tag: '1 RTT' },
        ] },
        { id: 'g5', n: 5, color: 'green', icon: 'file-text', title: 'HTTP', sub: L('encrypted', 'şifreli'), reverse: true, items: [
          { id: 'req', icon: 'send', title: L('Request', 'İstek'), sub: 'GET / HTTP/2', tag: 'Host · headers' },
          { id: 'resp', icon: 'file-check', title: L('Response', 'Cevap'), sub: '200 OK', tag: 'HTML →' },
        ] },
      ] },
    ],
    edges: [
      ['browser', 'stub', 'r', 'l', 1, 'example.com?'],
      ['stub', 'rec', 'r', 'l', 2, L('query', 'sorgu')],
      ['rec', 'root', 'r', 'l', 3, L('ask', 'sor')],
      ['root', 'tld', 'r', 'l', 4, ''],
      ['tld', 'auth', 'r', 'l', 5, ''],
      ['auth', 'tcp', 'b', 't', 6, L('IP back to browser (cached for TTL)', 'IP tarayıcıya döner (TTL kadar önbellekte)'), { via: ['g3', 'g4'] }],
      ['tcp', 'tls', 'l', 'r', 7, ''],
      ['tls', 'req', 'l', 'r', 8, ''],
      ['req', 'resp', 'l', 'r', 9, ''],
    ],
    legend: [
      ['blue', L('Client', 'İstemci')], ['amber', 'DNS resolver'], ['purple', 'DNS'],
      ['red', 'TCP + TLS'], ['green', 'HTTP'],
    ],
    footer: L('⏱ New HTTPS connection ≈ DNS + 1 RTT (TCP) + 1 RTT (TLS 1.3) + 1 RTT (HTTP)', '⏱ Yeni HTTPS bağlantısı ≈ DNS + 1 RTT (TCP) + 1 RTT (TLS 1.3) + 1 RTT (HTTP)'),
  };
};
