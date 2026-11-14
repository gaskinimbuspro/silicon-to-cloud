// Chapter 8 — The browser
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1180,
    title: L('From HTML bytes to pixels: the browser rendering pipeline', 'HTML byte\'larından piksellere: tarayıcının render hattı'),
    subtitle: L('Chapter 8 · Parse HTML → DOM, CSS → CSSOM, run JS → style → layout → paint → composite on the GPU',
      'Bölüm 8 · HTML → DOM, CSS → CSSOM, JS çalıştır → style → layout → paint → GPU\'da composite'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'slate', icon: 'download', title: L('Network', 'Ağ'), sub: L('Chapter 6', 'Bölüm 6'), items: [
          { id: 'bytes', icon: 'file-code', title: L('HTML bytes', 'HTML byte\'ları'), sub: '200 OK', tag: L('streamed', 'akış halinde') },
        ] },
        { id: 'g2', n: 2, color: 'blue', icon: 'git-branch', title: L('Parse', 'Ayrıştır'), sub: L('trees', 'ağaçlar'), items: [
          [
            { id: 'dom', icon: 'network', title: 'DOM', sub: L('element tree', 'eleman ağacı'), tag: '<html><body>…' },
            { id: 'cssom', icon: 'palette', title: 'CSSOM', sub: L('style rules', 'stil kuralları'), tag: 'h1 { color }' },
          ],
        ] },
        { id: 'g3', n: 3, color: 'amber', icon: 'braces', title: 'JavaScript', sub: 'V8', items: [
          { id: 'js', icon: 'braces', title: L('JS engine', 'JS motoru'), sub: L('main thread', 'ana thread'), tag: L('can change DOM', 'DOM\'u değiştirir') },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g4', n: 4, color: 'purple', icon: 'layout', title: 'Render', sub: L('main thread', 'ana thread'), reverse: true, items: [
          { id: 'style', icon: 'paintbrush', title: 'Style', sub: L('render tree', 'render ağacı'), tag: L('computed styles', 'hesaplanan stil') },
          { id: 'layout', icon: 'ruler', title: 'Layout', sub: L('geometry', 'geometri'), tag: 'x, y, w, h' },
          { id: 'paint', icon: 'pencil', title: 'Paint', sub: L('draw commands', 'çizim komutları'), tag: L('per layer', 'katman başına') },
        ] },
        { id: 'g5', n: 5, color: 'teal', icon: 'monitor', title: L('Display', 'Ekran'), sub: 'GPU', reverse: true, items: [
          { id: 'comp', icon: 'layers', title: 'Composite', sub: L('compositor thread', 'compositor thread'), tag: L('layers → GPU', 'katmanlar → GPU') },
          { id: 'screen', icon: 'monitor-check', title: L('Screen', 'Ekran'), sub: L('Chapter 1', 'Bölüm 1'), tag: '60 fps = 16.7 ms' },
        ] },
      ] },
    ],
    edges: [
      ['bytes', 'dom', 'r', 'l', 1, L('parse', 'ayrıştır')],
      ['bytes', 'cssom', 'r', 'l', 2, '<link> CSS'],
      ['dom', 'js', 'r', 'l', 3, '<script>'],
      ['cssom', 'style', 'b', 't', 4, 'DOM + CSSOM', { via: ['g2', 'g4'] }],
      ['style', 'layout', 'l', 'r', 5, ''],
      ['layout', 'paint', 'l', 'r', 6, ''],
      ['paint', 'comp', 'l', 'r', 7, ''],
      ['comp', 'screen', 'l', 'r', 8, L('frame', 'kare')],
    ],
    legend: [
      ['slate', L('Network', 'Ağ')], ['blue', L('Parsing', 'Ayrıştırma')], ['amber', 'JavaScript'],
      ['purple', L('Main-thread rendering', 'Render')], ['teal', 'GPU'],
    ],
    footer: L('⚡ Change transform/opacity → composite only · change width → layout + paint again', '⚡ transform/opacity → sadece composite · width → layout + paint baştan'),
  };
};
