// Chapter 1 — What happens when you press "A"?
// Render: npm run build -- specs/01-keypress.mjs ../docs/assets/diagrams/01-keypress
export default {
  width: 2020,
  title: 'From the “A” key to a letter on screen: the end-to-end journey',
  subtitle: 'Chapter 1 · Hardware → interrupt → kernel → user space → application → display (Linux + Wayland example)',
  rows: [
    { dir: 'fill', groups: [
      { id: 'g1', n: 1, color: 'orange', icon: 'keyboard', title: 'Keyboard', sub: 'hardware', items: [
        { id: 'sw', icon: 'keyboard', title: 'Key Switch', sub: 'mechanical contact', tag: 'circuit closes' },
        { id: 'mx', icon: 'grid-3x3', title: 'Key Matrix', sub: 'rows × columns', tag: 'scanning' },
        { id: 'mcu', icon: 'microchip', title: 'Keyboard MCU', sub: 'microcontroller', tag: 'debounce' },
      ] },
      { id: 'g2', n: 2, color: 'amber', icon: 'usb', title: 'USB Transport', sub: 'HID protocol', items: [
        { id: 'cable', icon: 'usb', title: 'USB Cable', sub: 'HID report', tag: '8 bytes · 0x04' },
        { id: 'xhci', icon: 'server-cog', title: 'USB Host Ctrl.', sub: 'xHCI', tag: 'polling 1–8 ms' },
      ] },
      { id: 'g3', n: 3, color: 'red', icon: 'cpu', title: 'Motherboard & CPU', sub: 'assembly level', items: [
        { id: 'apic', icon: 'zap', title: 'Interrupt Ctrl.', sub: 'APIC', tag: 'MSI' },
        { id: 'cpu', icon: 'cpu', title: 'Processor', sub: 'CPU · ring 0', tag: 'pauses work' },
        [
          { id: 'idt', icon: 'table-2', title: 'Interrupt Table', sub: 'IDT → ISR', tag: 'vector' },
          { id: 'ram', icon: 'memory-stick', title: 'Memory', sub: 'RAM · stack', tag: 'context save' },
        ],
      ] },
    ] },
    { dir: 'rev', groups: [
      { id: 'g4', n: 4, color: 'purple', icon: 'shield', title: 'Kernel Space', sub: 'ring 0', reverse: true, items: [
        { id: 'hid', icon: 'puzzle', title: 'HID Driver', sub: 'usbhid', tag: 'parses report' },
        { id: 'evdev', icon: 'inbox', title: 'Input Subsystem', sub: '/dev/input/eventX', tag: 'KEY_A = 30' },
      ] },
      { id: 'g5', n: 5, color: 'blue', icon: 'user', title: 'User Space', sub: 'ring 3', reverse: true, items: [
        { id: 'libinput', icon: 'arrow-right-left', title: 'libinput', sub: 'input library', tag: 'collects events' },
        { id: 'comp', icon: 'layers', title: 'Compositor', sub: 'Wayland / X11', tag: 'focused window' },
      ] },
      { id: 'g6', n: 6, color: 'green', icon: 'app-window', title: 'Application', sub: 'e.g. text editor', reverse: true, items: [
        { id: 'loop', icon: 'refresh-cw', title: 'Event Loop', sub: 'GTK / Qt', tag: 'keycode 30' },
        { id: 'xkb', icon: 'languages', title: 'Keyboard Layout', sub: 'xkbcommon', tag: "30 → 'a'" },
        { id: 'buf', icon: 'file-text', title: 'Text Buffer', sub: 'document model', tag: "+ 'a'" },
        { id: 'font', icon: 'type', title: 'Font Renderer', sub: 'glyph raster', tag: 'glyph pixels' },
      ] },
    ] },
    { groups: [
      { id: 'g7', n: 7, color: 'teal', icon: 'monitor', title: 'Display', sub: 'to the screen', items: [
        { id: 'gpu', icon: 'gpu', title: 'Graphics Card', sub: 'GPU', tag: 'compose' },
        { id: 'fb', icon: 'image', title: 'Framebuffer', sub: 'final frame', tag: 'frame ready' },
        { id: 'mon', icon: 'monitor-check', title: 'Monitor', sub: 'HDMI / DP', tag: "'a' visible ✓" },
      ] },
    ] },
  ],
  // [from, to, fromSide, toSide, no, label, opts]
  edges: [
    ['sw', 'mx', 'r', 'l', 1, 'press'],
    ['mx', 'mcu', 'r', 'l', 2, 'scan'],
    ['mcu', 'cable', 'r', 'l', 3, 'scan code'],
    ['cable', 'xhci', 'r', 'l', 4, 'report'],
    ['xhci', 'apic', 'r', 'l', 5, 'interrupt'],
    ['apic', 'cpu', 'r', 'l', 6, 'IRQ'],
    ['cpu', 'idt', 'r', 'l', 7, 'ISR address'],
    ['cpu', 'ram', 'r', 'l', '', 'save', { dash: true }],
    ['cpu', 'hid', 'b', 't', 8, 'handler runs', { via: ['g3', 'g4'] }],
    ['hid', 'evdev', 'l', 'r', 9, 'input event'],
    ['evdev', 'libinput', 'l', 'r', 10, 'read()'],
    ['libinput', 'comp', 'l', 'r', 11, 'event'],
    ['comp', 'loop', 'l', 'r', 12, 'wl_keyboard.key'],
    ['loop', 'xkb', 'l', 'r', 13, 'translate'],
    ['xkb', 'buf', 'l', 'r', 14, 'U+0061'],
    ['buf', 'font', 'l', 'r', 15, 'draw'],
    ['font', 'gpu', 'l', 'l', 16, 'redraw', { lx: 118, ly: 719 }],
    ['gpu', 'fb', 'r', 'l', 17, 'compose'],
    ['fb', 'mon', 'r', 'l', 18, 'vsync'],
  ],
  boundaries: [{ left: 'g4', right: 'g5', text: 'Ring 0 ⇄ Ring 3 · syscall boundary' }],
  legend: [
    ['orange', 'Hardware'], ['red', 'CPU / Assembly'], ['purple', 'Kernel'],
    ['blue', 'OS (user space)'], ['green', 'Application'], ['teal', 'Display'],
  ],
  footer: '⏱ Total: ~10–50 ms (input latency)',
};
