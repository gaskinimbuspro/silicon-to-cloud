// Chapter 5 — Networking fundamentals
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1440,
    title: L('How a packet leaves your laptop and reaches a server', 'Bir paket laptopundan çıkıp sunucuya nasıl ulaşır'),
    subtitle: L('Chapter 5 · Layers & encapsulation → NIC → switch (MAC) → router & NAT (IP) → ISP → internet → server',
      'Bölüm 5 · Katmanlar & kapsülleme → NIC → switch (MAC) → router & NAT (IP) → ISP → internet → sunucu'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'laptop', title: L('Your laptop', 'Laptopun'), sub: '192.168.1.23', items: [
          { id: 'app', icon: 'app-window', title: L('Application', 'Uygulama'), sub: 'curl · L7', tag: 'HTTP data' },
          { id: 'stack', icon: 'layers', title: 'TCP/IP stack', sub: 'kernel · L4 + L3', tag: '+ TCP + IP' },
          { id: 'nic', icon: 'ethernet-port', title: 'NIC', sub: 'L2 + L1', tag: '+ Ethernet' },
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'network', title: 'LAN', items: [
          { id: 'sw', icon: 'network', title: 'Switch / Wi-Fi', sub: L('forwards by MAC', 'MAC\'e göre iletir'), tag: 'MAC table' },
        ] },
        { id: 'g3', n: 3, color: 'red', icon: 'router', title: L('Home router', 'Ev router\'ı'), sub: L('default gateway', 'varsayılan ağ geçidi'), items: [
          { id: 'rt', icon: 'router', title: 'Router', sub: L('forwards by IP', 'IP\'ye göre iletir'), tag: '192.168.1.1' },
          { id: 'nat', icon: 'repeat', title: 'NAT', sub: L('private → public', 'özel → genel'), tag: '→ 85.105.x.x' },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g4', n: 4, color: 'purple', icon: 'globe', title: L('ISP & Internet', 'ISP & İnternet'), sub: 'BGP', reverse: true, items: [
          { id: 'isp', icon: 'building-2', title: 'ISP', sub: L('your provider', 'servis sağlayıcın'), tag: L('first public hop', 'ilk genel hop') },
          { id: 'core', icon: 'globe', title: L('Internet routers', 'İnternet router\'ları'), sub: L('hop by hop', 'hop hop'), tag: 'TTL − 1' },
        ] },
        { id: 'g5', n: 5, color: 'green', icon: 'server', title: L('Destination', 'Hedef'), sub: '93.184.215.14', reverse: true, items: [
          { id: 'snic', icon: 'ethernet-port', title: L('Server NIC', 'Sunucu NIC'), sub: 'L2', tag: '− Ethernet' },
          { id: 'sstack', icon: 'layers', title: 'TCP/IP stack', sub: 'L3 + L4', tag: '− IP − TCP' },
          { id: 'sapp', icon: 'server', title: L('Web server', 'Web sunucusu'), sub: L('port 443', 'port 443'), tag: 'HTTP data ✓' },
        ] },
      ] },
    ],
    edges: [
      ['app', 'stack', 'r', 'l', 1, 'send()'],
      ['stack', 'nic', 'r', 'l', 2, L('IP packet', 'IP paketi')],
      ['nic', 'sw', 'r', 'l', 3, L('frame', 'çerçeve')],
      ['sw', 'rt', 'r', 'l', 4, L('→ gateway', '→ gateway')],
      ['rt', 'nat', 'r', 'l', 5, ''],
      ['nat', 'isp', 'b', 't', 6, L('public IP', 'genel IP'), { via: ['g3', 'g4'], lx: 1303, ly: 393 }],
      ['isp', 'core', 'l', 'r', 7, L('routing table', 'yönlendirme tablosu')],
      ['core', 'snic', 'l', 'r', 8, L('last hop', 'son hop')],
      ['snic', 'sstack', 'l', 'r', 9, ''],
      ['sstack', 'sapp', 'l', 'r', 10, ''],
    ],
    legend: [
      ['blue', L('Your machine', 'Senin makinen')], ['amber', 'L2 (MAC)'], ['red', 'L3 (IP)'],
      ['purple', L('Internet', 'İnternet')], ['green', L('Server', 'Sunucu')],
    ],
    footer: '📦 [ Ethernet [ IP [ TCP [ HTTP data ] ] ] ]',
  };
};
