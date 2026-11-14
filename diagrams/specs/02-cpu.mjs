// Chapter 2 — CPU & Assembly
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 2020,
    title: L('Inside the CPU: from C code to executed instructions', 'CPU\'nun içi: C kodundan çalışan komutlara'),
    subtitle: L('Chapter 2 · Compile → load → memory hierarchy → registers → fetch / decode / execute / write back',
      'Bölüm 2 · Derle → yükle → bellek hiyerarşisi → register → fetch / decode / execute / write back'),
    rows: [
      { dir: 'fill', groups: [
        { id: 'g1', n: 1, color: 'slate', icon: 'hard-drive', title: L('Storage & RAM', 'Depolama & RAM'), sub: L('slow, large', 'yavaş, büyük'), items: [
          { id: 'ssd', icon: 'hard-drive', title: 'SSD', sub: L('program file', 'program dosyası'), tag: '~20–100 µs' },
          { id: 'ram', icon: 'memory-stick', title: 'RAM', sub: L('code·data·stack', 'kod·veri·stack'), tag: '~80–100 ns' },
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'layers', title: L('CPU Caches', 'CPU Önbellekleri'), sub: L('on the chip', 'çipin içinde'), items: [
          { id: 'l3', icon: 'layers', title: 'L3 Cache', sub: L('shared by cores', 'çekirdekler ortak'), tag: '~10–20 ns' },
          { id: 'l2', icon: 'layers-2', title: 'L2 Cache', sub: L('per core', 'çekirdek başına'), tag: '~4 ns' },
          { id: 'l1', icon: 'zap', title: 'L1 Cache', sub: 'L1i · L1d', tag: '~1 ns' },
        ] },
        { id: 'g3', n: 3, color: 'red', icon: 'cpu', title: L('Registers', 'Register\'lar'), sub: L('fastest', 'en hızlı'), items: [
          [
            { id: 'gpr', icon: 'binary', title: L('General purpose', 'Genel amaçlı'), sub: 'RAX RBX … R15', tag: '~0.3 ns' },
            { id: 'spr', icon: 'map-pin', title: L('Special', 'Özel'), sub: 'RIP · RSP · RFLAGS', tag: L('where am I?', 'neredeyim?') },
          ],
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g4', n: 4, color: 'purple', icon: 'refresh-cw', title: L('Instruction cycle', 'Komut döngüsü'), sub: L('billions / second', 'saniyede milyarlarca'), reverse: true, items: [
          { id: 'fetch', icon: 'download', title: 'Fetch', sub: L('read at RIP', 'RIP adresini oku'), tag: '8d 04 37' },
          { id: 'decode', icon: 'scan-search', title: 'Decode', sub: L('what does it mean?', 'bu ne demek?'), tag: 'lea eax,[rdi+rsi]' },
          { id: 'exec', icon: 'calculator', title: 'Execute', sub: 'ALU / AGU', tag: '2 + 3' },
          { id: 'wb', icon: 'save', title: 'Write back', sub: L('result → register', 'sonuç → register'), tag: 'EAX = 5' },
        ] },
        { id: 'g5', n: 5, color: 'green', icon: 'code', title: L('From C to bytes', 'C\'den byte\'lara'), sub: L('build time', 'derleme anı'), items: [
          { id: 'c', icon: 'file-code', title: L('C source', 'C kaynak'), sub: 'add(a, b)', tag: 'return a + b;' },
          { id: 'asm', icon: 'terminal', title: 'Assembly', sub: 'x86-64', tag: 'lea · ret' },
          { id: 'bytes', icon: 'binary', title: L('Machine code', 'Makine kodu'), sub: L('what the CPU reads', 'CPU\'nun okuduğu'), tag: '8d 04 37 c3' },
        ] },
      ] },
    ],
    edges: [
      ['c', 'asm', 'r', 'l', 1, L('compile', 'derle')],
      ['asm', 'bytes', 'r', 'l', 2, L('assemble', 'çevir')],
      ['bytes', 'ssd', 't', 'b', 3, L('saved as ELF file', 'ELF dosyası olarak kaydet'), { via: ['g1', 'g5'] }],
      ['ssd', 'ram', 'r', 'l', 4, L('load', 'yükle')],
      ['ram', 'l3', 'r', 'l', 5, L('64-byte line', '64 byte satır')],
      ['l3', 'l2', 'r', 'l', 6, ''],
      ['l2', 'l1', 'r', 'l', 7, ''],
      ['l1', 'gpr', 'r', 'l', 8, 'mov'],
      ['spr', 'fetch', 'b', 't', 9, L('RIP points here', 'RIP burayı gösterir'), { via: ['g3', 'g4'], lx: 1700, ly: 557 }],
      ['fetch', 'decode', 'l', 'r', 10, ''],
      ['decode', 'exec', 'l', 'r', 11, ''],
      ['exec', 'wb', 'l', 'r', 12, ''],
      ['wb', 'fetch', 'b', 'b', '', L('next instruction: RIP += length', 'sonraki komut: RIP += uzunluk'), { dash: true }],
    ],
    legend: [
      ['slate', L('Storage', 'Depolama')], ['amber', L('Cache', 'Önbellek')], ['red', L('Registers', 'Register')],
      ['purple', L('Execution', 'Çalıştırma')], ['green', L('Build', 'Derleme')],
    ],
    footer: L('⚡ 1 ns at 3 GHz = 3 clock cycles', '⚡ 3 GHz\'de 1 ns = 3 saat döngüsü'),
  };
};
