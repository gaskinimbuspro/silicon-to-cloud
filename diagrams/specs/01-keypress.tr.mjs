// Bölüm 1 — "A" tuşuna bastığımızda ne olur?
// Render: npm run build -- specs/01-keypress.tr.mjs ../docs/assets/diagrams/01-keypress.tr
export default {
  width: 2020,
  title: '“A” tuşundan ekrandaki harfe: uçtan uca yolculuk',
  subtitle: 'Bölüm 1 · Donanım → kesme → kernel → user space → uygulama → ekran (Linux + Wayland örneği)',
  rows: [
    { dir: 'fill', groups: [
      { id: 'g1', n: 1, color: 'orange', icon: 'keyboard', title: 'Klavye', sub: 'donanım', items: [
        { id: 'sw', icon: 'keyboard', title: 'Tuş Anahtarı', sub: 'key switch', tag: 'devre kapanır' },
        { id: 'mx', icon: 'grid-3x3', title: 'Tuş Matrisi', sub: 'key matrix', tag: 'satır × sütun' },
        { id: 'mcu', icon: 'microchip', title: 'Mikrodenetleyici', sub: 'keyboard MCU', tag: 'debounce' },
      ] },
      { id: 'g2', n: 2, color: 'amber', icon: 'usb', title: 'USB Taşıma', sub: 'HID protokolü', items: [
        { id: 'cable', icon: 'usb', title: 'USB Kablo', sub: 'HID report', tag: '8 byte · 0x04' },
        { id: 'xhci', icon: 'server-cog', title: 'USB Host Ctrl.', sub: 'xHCI', tag: 'polling 1–8 ms' },
      ] },
      { id: 'g3', n: 3, color: 'red', icon: 'cpu', title: 'Anakart & CPU', sub: 'assembly seviyesi', items: [
        { id: 'apic', icon: 'zap', title: 'Kesme Denetleyici', sub: 'APIC', tag: 'MSI' },
        { id: 'cpu', icon: 'cpu', title: 'İşlemci', sub: 'CPU · ring 0', tag: 'iş durdurulur' },
        [
          { id: 'idt', icon: 'table-2', title: 'Kesme Tablosu', sub: 'IDT → ISR', tag: 'vektör' },
          { id: 'ram', icon: 'memory-stick', title: 'Bellek', sub: 'RAM · stack', tag: 'context save' },
        ],
      ] },
    ] },
    { dir: 'rev', groups: [
      { id: 'g4', n: 4, color: 'purple', icon: 'shield', title: 'Kernel Space', sub: 'ring 0', reverse: true, items: [
        { id: 'hid', icon: 'puzzle', title: 'HID Sürücüsü', sub: 'usbhid driver', tag: 'rapor çözülür' },
        { id: 'evdev', icon: 'inbox', title: 'Girdi Alt Sistemi', sub: '/dev/input/eventX', tag: 'KEY_A = 30' },
      ] },
      { id: 'g5', n: 5, color: 'blue', icon: 'user', title: 'User Space', sub: 'ring 3', reverse: true, items: [
        { id: 'libinput', icon: 'arrow-right-left', title: 'libinput', sub: 'girdi kütüphanesi', tag: 'olay toplar' },
        { id: 'comp', icon: 'layers', title: 'Compositor', sub: 'Wayland / X11', tag: 'odaktaki pencere' },
      ] },
      { id: 'g6', n: 6, color: 'green', icon: 'app-window', title: 'Uygulama', sub: 'ör. metin editörü', reverse: true, items: [
        { id: 'loop', icon: 'refresh-cw', title: 'Olay Döngüsü', sub: 'event loop', tag: 'keycode 30' },
        { id: 'xkb', icon: 'languages', title: 'Klavye Düzeni', sub: 'xkbcommon · TR-Q', tag: "30 → 'a'" },
        { id: 'buf', icon: 'file-text', title: 'Metin Tamponu', sub: 'text buffer', tag: "+ 'a'" },
        { id: 'font', icon: 'type', title: 'Font Çizici', sub: 'glyph raster', tag: 'piksel şekli' },
      ] },
    ] },
    { groups: [
      { id: 'g7', n: 7, color: 'teal', icon: 'monitor', title: 'Görüntü', sub: 'ekrana çıkış', items: [
        { id: 'gpu', icon: 'gpu', title: 'Ekran Kartı', sub: 'GPU', tag: 'compose' },
        { id: 'fb', icon: 'image', title: 'Çerçeve Belleği', sub: 'framebuffer', tag: 'kare hazır' },
        { id: 'mon', icon: 'monitor-check', title: 'Monitör', sub: 'HDMI / DP', tag: "'a' görünür ✓" },
      ] },
    ] },
  ],
  // [from, to, fromSide, toSide, no, label, opts]
  edges: [
    ['sw', 'mx', 'r', 'l', 1, 'basış'],
    ['mx', 'mcu', 'r', 'l', 2, 'tarama'],
    ['mcu', 'cable', 'r', 'l', 3, 'scan code'],
    ['cable', 'xhci', 'r', 'l', 4, 'rapor'],
    ['xhci', 'apic', 'r', 'l', 5, 'kesme'],
    ['apic', 'cpu', 'r', 'l', 6, 'IRQ'],
    ['cpu', 'idt', 'r', 'l', 7, 'ISR adresi'],
    ['cpu', 'ram', 'r', 'l', '', 'kaydet', { dash: true }],
    ['cpu', 'hid', 'b', 't', 8, 'handler çağrılır', { via: ['g3', 'g4'] }],
    ['hid', 'evdev', 'l', 'r', 9, 'input event'],
    ['evdev', 'libinput', 'l', 'r', 10, 'read()'],
    ['libinput', 'comp', 'l', 'r', 11, 'olay'],
    ['comp', 'loop', 'l', 'r', 12, 'wl_keyboard.key'],
    ['loop', 'xkb', 'l', 'r', 13, 'çevir'],
    ['xkb', 'buf', 'l', 'r', 14, 'U+0061'],
    ['buf', 'font', 'l', 'r', 15, 'çiz'],
    ['font', 'gpu', 'l', 'l', 16, 'redraw', { lx: 118, ly: 719 }],
    ['gpu', 'fb', 'r', 'l', 17, 'birleştir'],
    ['fb', 'mon', 'r', 'l', 18, 'vsync'],
  ],
  boundaries: [{ left: 'g4', right: 'g5', text: 'Ring 0 ⇄ Ring 3 · syscall sınırı' }],
  legend: [
    ['orange', 'Donanım'], ['red', 'CPU / Assembly'], ['purple', 'Kernel'],
    ['blue', 'İşletim sistemi (user)'], ['green', 'Uygulama'], ['teal', 'Ekran'],
  ],
  footer: '⏱ Toplam: ~10–50 ms (input latency)',
};
