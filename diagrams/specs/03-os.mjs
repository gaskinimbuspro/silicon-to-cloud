// Chapter 3 — Operating system
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  return {
    width: 1180,
    title: L('The operating system: the referee between programs and hardware', 'İşletim sistemi: programlar ile donanım arasındaki hakem'),
    subtitle: L('Chapter 3 · Processes & threads → syscalls → kernel subsystems → hardware (Linux)',
      'Bölüm 3 · Process & thread → syscall → kernel alt sistemleri → donanım (Linux)'),
    rows: [
      { groups: [
        { id: 'g1', n: 1, color: 'blue', icon: 'user', title: 'User space', sub: 'ring 3', items: [
          { id: 'proc', icon: 'box', title: 'Process', sub: L('PID · own memory', 'PID · kendi belleği'), tag: 'nginx' },
          { id: 'thr', icon: 'git-fork', title: 'Threads', sub: L('share the memory', 'belleği paylaşır'), tag: 'worker × 4' },
        ] },
        { id: 'g2', n: 2, color: 'amber', icon: 'door-open', title: L('The door', 'Kapı'), sub: 'syscall', items: [
          { id: 'libc', icon: 'library', title: 'libc', sub: L('wrapper functions', 'sarmalayıcılar'), tag: 'printf → write' },
          { id: 'sys', icon: 'log-in', title: 'syscall', sub: L('CPU instruction', 'CPU komutu'), tag: 'RAX = 1 (write)' },
        ] },
      ] },
      { groups: [
        { id: 'g3', n: 3, color: 'purple', icon: 'shield', title: 'Kernel', sub: 'ring 0', items: [
          { id: 'sched', icon: 'timer', title: L('Scheduler', 'Zamanlayıcı'), sub: L('who runs next?', 'sırada kim var?'), tag: 'EEVDF' },
          { id: 'mm', icon: 'map', title: L('Memory mgr', 'Bellek yöneticisi'), sub: L('virtual memory', 'sanal bellek'), tag: 'page tables' },
          { id: 'vfs', icon: 'folder-tree', title: 'VFS + FS', sub: L('files · ext4', 'dosyalar · ext4'), tag: 'fd 1 → file' },
          { id: 'net', icon: 'network', title: L('Network stack', 'Ağ yığını'), sub: 'TCP/IP', tag: 'sockets' },
        ] },
      ] },
      { groups: [
        { id: 'g4', n: 4, color: 'slate', icon: 'cpu', title: L('Hardware', 'Donanım'), items: [
          { id: 'cpu', icon: 'cpu', title: L('CPU cores', 'CPU çekirdekleri'), sub: L('shared by all', 'herkes paylaşır'), tag: L('time slices', 'zaman dilimi') },
          { id: 'ram', icon: 'memory-stick', title: 'RAM', sub: L('physical memory', 'fiziksel bellek'), tag: L('4 KB pages', '4 KB sayfa') },
          { id: 'disk', icon: 'hard-drive', title: 'Disk', sub: 'NVMe / SSD', tag: 'block I/O' },
          { id: 'nic', icon: 'ethernet-port', title: L('Network card', 'Ağ kartı'), sub: 'NIC', tag: L('packets', 'paketler') },
        ] },
      ] },
    ],
    edges: [
      ['proc', 'thr', 'r', 'l', '', L('spawns', 'oluşturur'), { dash: true }],
      ['thr', 'libc', 'r', 'l', 1, 'printf()'],
      ['libc', 'sys', 'r', 'l', 2, 'write(1, …)'],
      ['sys', 'vfs', 'b', 't', 3, L('trap into kernel', 'kernel\'e geç'), { via: ['g2', 'g3'] }],
      ['sched', 'cpu', 'b', 't', '', L('context switch', 'bağlam değişimi')],
      ['mm', 'ram', 'b', 't', '', L('maps pages', 'sayfa eşler')],
      ['vfs', 'disk', 'b', 't', 4, L('block driver', 'blok sürücüsü')],
      ['net', 'nic', 'b', 't', '', L('NIC driver', 'NIC sürücüsü')],
    ],
    legend: [
      ['blue', L('User space', 'User space')], ['amber', L('Syscall boundary', 'Syscall sınırı')],
      ['purple', 'Kernel'], ['slate', L('Hardware', 'Donanım')],
    ],
    footer: L('🔁 A syscall costs ~100 ns; a context switch ~1–5 µs', '🔁 Bir syscall ~100 ns, bir bağlam değişimi ~1–5 µs'),
  };
};
