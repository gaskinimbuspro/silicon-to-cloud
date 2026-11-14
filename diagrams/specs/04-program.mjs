// Chapter 4 — How a program runs
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1420,
    title: L('How a program runs: from source file to main()', 'Bir program nasıl çalışır: kaynak dosyadan main()\'e'),
    subtitle: L('Chapter 4 · Build (compile + link) → ELF file → fork / execve → dynamic linker → main() — and how other languages differ',
      'Bölüm 4 · Derleme (compile + link) → ELF dosyası → fork / execve → dinamik bağlayıcı → main(); diğer diller nasıl farklı'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'green', icon: 'hammer', title: L('Build', 'Derleme'), sub: 'gcc main.c -o app', items: [
          { id: 'src', icon: 'file-code', title: L('Source', 'Kaynak'), sub: 'main.c', tag: '#include' },
          { id: 'pre', icon: 'file-plus', title: L('Preprocessor', 'Önişlemci'), sub: 'cpp', tag: 'main.i' },
          { id: 'cc', icon: 'cog', title: L('Compiler', 'Derleyici'), sub: 'cc1', tag: 'main.s' },
          { id: 'as', icon: 'binary', title: 'Assembler', sub: 'as', tag: 'main.o' },
          { id: 'ld', icon: 'link', title: 'Linker', sub: 'ld', tag: '+ libc refs' },
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'file-box', title: L('Output', 'Çıktı'), items: [
          { id: 'elf', icon: 'file-box', title: L('ELF executable', 'ELF çalıştırılabilir'), sub: L('on disk', 'diskte'), tag: './app' },
        ] },
      ] },
      { dir: 'rev', groups: [
        { id: 'g3', n: 3, color: 'purple', icon: 'shield', title: L('Start', 'Başlatma'), sub: 'fork + exec', reverse: true, items: [
          { id: 'shell', icon: 'terminal', title: 'Shell', sub: 'bash', tag: 'fork()' },
          { id: 'exec', icon: 'rocket', title: 'execve()', sub: L('kernel loader', 'kernel yükleyici'), tag: L('map segments', 'segmentleri eşle') },
        ] },
        { id: 'g4', n: 4, color: 'blue', icon: 'box', title: L('New process', 'Yeni process'), sub: 'user space', reverse: true, items: [
          { id: 'ldso', icon: 'link-2', title: L('Dynamic linker', 'Dinamik bağlayıcı'), sub: 'ld-linux.so', tag: L('resolve symbols', 'sembolleri çöz') },
          { id: 'libc', icon: 'library', title: L('Shared libs', 'Paylaşımlı kütüphaneler'), sub: 'libc.so.6', tag: 'mmap' },
          { id: 'main', icon: 'play', title: 'main()', sub: L('your code runs', 'kodun çalışır'), tag: '_start → main' },
        ] },
      ] },
      { groups: [
        { id: 'g5', n: 5, color: 'teal', icon: 'languages', title: L('Other languages', 'Diğer diller'), sub: L('same OS, different runtimes', 'aynı OS, farklı runtime'), items: [
          { id: 'go', icon: 'package', title: 'Go / Rust', sub: L('native binary', 'native binary'), tag: L('often static', 'çoğu statik') },
          { id: 'jvm', icon: 'coffee', title: 'Java', sub: L('bytecode + JVM', 'bytecode + JVM'), tag: 'JIT' },
          { id: 'v8', icon: 'braces', title: 'Node.js', sub: L('JS + V8 engine', 'JS + V8 motoru'), tag: 'JIT' },
          { id: 'py', icon: 'file-terminal', title: 'Python', sub: 'bytecode + VM', tag: L('interpreter', 'yorumlayıcı') },
        ] },
      ] },
    ],
    edges: [
      ['src', 'pre', 'r', 'l', 1, ''],
      ['pre', 'cc', 'r', 'l', 2, ''],
      ['cc', 'as', 'r', 'l', 3, ''],
      ['as', 'ld', 'r', 'l', 4, ''],
      ['ld', 'elf', 'r', 'l', 5, ''],
      ['elf', 'shell', 'b', 't', 6, L('you type ./app', './app yazarsın'), { via: ['g2', 'g3'], lx: 1284, ly: 428 }],
      ['shell', 'exec', 'l', 'r', 7, L('child calls', 'çocuk çağırır')],
      ['exec', 'ldso', 'l', 'r', 8, L('jump to interpreter', 'yorumlayıcıya atla')],
      ['ldso', 'libc', 'l', 'r', 9, ''],
      ['libc', 'main', 'l', 'r', 10, ''],
    ],
    legend: [
      ['green', L('Build time', 'Derleme anı')], ['amber', L('File', 'Dosya')], ['purple', 'Kernel'],
      ['blue', 'User space'], ['teal', L('Runtimes', 'Runtime\'lar')],
    ],
    footer: L('📦 A container image is mostly this: an ELF + its libraries + files', '📦 Bir container imajı aslında budur: ELF + kütüphaneleri + dosyalar'),
  };
};
