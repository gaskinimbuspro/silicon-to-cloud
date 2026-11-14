// Chapter 7 — Server side
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1000,
    title: L('Behind the URL: a typical web backend', 'URL\'nin arkası: tipik bir web backend\'i'),
    subtitle: L('Chapter 7 · CDN → load balancer → reverse proxy → stateless app servers → cache & database → queue & workers',
      'Bölüm 7 · CDN → load balancer → reverse proxy → stateless uygulama sunucuları → cache & veritabanı → kuyruk & worker'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'globe', title: 'Edge', sub: L('close to user', 'kullanıcıya yakın'), items: [
          { id: 'user', icon: 'user', title: L('User', 'Kullanıcı'), sub: L('browser / app', 'tarayıcı / app'), tag: 'HTTPS' },
          { id: 'cdn', icon: 'cloud', title: 'CDN', sub: L('edge cache', 'uç önbellek'), tag: L('static files', 'statik dosyalar') },
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'split', title: L('Entry', 'Giriş'), sub: L('one public address', 'tek genel adres'), items: [
          { id: 'lb', icon: 'split', title: 'Load balancer', sub: 'L4 / L7', tag: 'TLS termination' },
          { id: 'proxy', icon: 'route', title: 'Reverse proxy', sub: 'nginx · ingress', tag: L('routing by path', 'path routing') },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g3', n: 3, color: 'green', icon: 'server', title: 'App', sub: 'stateless', items: [
          [
            { id: 'app1', icon: 'server', title: 'App #1', sub: 'API · Go/Java/Node', tag: L('no local state', 'yerel durum yok') },
            { id: 'app2', icon: 'server', title: 'App #N', sub: L('identical copies', 'birebir kopyalar'), tag: L('scale out', 'yatay ölçek') },
          ],
        ] },
        { id: 'g4', n: 4, color: 'purple', icon: 'database', title: L('Data tier', 'Veri katmanı'), sub: 'stateful', reverse: true, items: [
          { id: 'cache', icon: 'zap', title: 'Cache', sub: 'Redis', tag: '~0.5 ms' },
          { id: 'db', icon: 'database', title: L('DB primary', 'DB primary'), sub: 'PostgreSQL', tag: L('writes', 'yazmalar') },
          { id: 'replica', icon: 'copy', title: L('Read replica', 'Okuma replikası'), sub: L('async copy', 'asenkron kopya'), tag: L('reads', 'okumalar') },
        ] },
      ] },
      { groups: [
        { id: 'g5', n: 5, color: 'teal', icon: 'list-ordered', title: L('Async work', 'Asenkron işler'), sub: L('later, not now', 'şimdi değil, sonra'), items: [
          { id: 'queue', icon: 'list-ordered', title: L('Queue', 'Kuyruk'), sub: 'Kafka · SQS', tag: L('job: send email', 'iş: e-posta at') },
          { id: 'worker', icon: 'cog', title: 'Workers', sub: L('background', 'arka plan'), tag: L('retry on fail', 'hatada tekrar') },
          { id: 's3', icon: 'archive', title: L('Object storage', 'Nesne depolama'), sub: 'S3 · GCS', tag: L('images, files', 'resim, dosya') },
        ] },
      ] },
    ],
    edges: [
      ['user', 'cdn', 'r', 'l', 1, ''],
      ['cdn', 'lb', 'r', 'l', 2, L('cache miss', 'önbellekte yok')],
      ['lb', 'proxy', 'r', 'l', 3, ''],
      ['proxy', 'app1', 'b', 't', 4, '/api', { via: ['g2', 'g3'], lx: 845, ly: 393 }],
      ['app1', 'cache', 'l', 'r', 5, L('hit?', 'var mı?')],
      ['cache', 'db', 'l', 'r', 6, L('miss → query', 'yoksa → sorgu')],
      ['db', 'replica', 'l', 'r', '', L('replication', 'replikasyon'), { dash: true }],
      ['app2', 'queue', 'b', 't', 7, L('enqueue job, reply 202', 'işi kuyruğa at, 202 dön'), { via: ['g3', 'g5'] }],
      ['queue', 'worker', 'r', 'l', 8, ''],
      ['worker', 's3', 'r', 'l', 9, ''],
    ],
    legend: [
      ['blue', 'Edge'], ['amber', L('Entry', 'Giriş')], ['green', 'Stateless'],
      ['purple', 'Stateful'], ['teal', L('Async', 'Asenkron')],
    ],
    footer: L('📈 Scale the stateless part horizontally; protect the stateful part', '📈 Stateless kısmı yatay ölçekle, stateful kısmı koru'),
  };
};
