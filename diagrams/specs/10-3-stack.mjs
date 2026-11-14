// 10.3 — The GPU software stack
export default (lang) => {
  const L = (en, tr) => (lang === 'tr' ? tr : en);
  const row = (id, n, color, icon, title, sub, items) => ({ groups: [{ id, n, color, icon, title, sub, items }] });
  return {
    width: 940,
    title: L('The GPU software stack: from model.forward() to the silicon', 'GPU yazılım yığını: model.forward()\'dan silikona'),
    subtitle: L('10.3 · Same layering as Chapters 3–4: app → libraries → user-space driver → kernel driver → hardware',
      '10.3 · Bölüm 3–4\'teki katmanlamanın aynısı: uygulama → kütüphaneler → user space sürücü → kernel sürücüsü → donanım'),
    rows: [
      row('g1', 1, 'green', 'app-window', L('Your code', 'Senin kodun'), 'Python', [
        { id: 'eng', icon: 'rocket', title: L('Engine / script', 'Motor / script'), sub: 'vLLM · train.py', tag: 'model(x)' },
        { id: 'torch', icon: 'flame', title: 'PyTorch', sub: 'JAX · TensorFlow', tag: L('tensor ops', 'tensör işlemleri') },
        { id: 'comp', icon: 'wand-sparkles', title: L('Compilers', 'Derleyiciler'), sub: 'torch.compile · Triton', tag: L('fused kernels', 'birleşik kernel') },
      ]),
      row('g2', 2, 'amber', 'library', L('CUDA libraries', 'CUDA kütüphaneleri'), L('the fast kernels', 'hızlı kernel\'ler'), [
        { id: 'blas', icon: 'grid-3x3', title: 'cuBLAS', sub: 'CUTLASS', tag: 'matmul' },
        { id: 'dnn', icon: 'brain', title: 'cuDNN', sub: 'FlashAttention', tag: 'attention · conv' },
        { id: 'nccl', icon: 'share-2', title: 'NCCL', sub: L('multi-GPU', 'çoklu GPU'), tag: 'all-reduce' },
      ]),
      row('g3', 3, 'blue', 'user', L('User-space driver', 'User space sürücü'), 'ring 3', [
        { id: 'rt', icon: 'package', title: 'CUDA runtime', sub: 'libcudart.so', tag: L('ships in your image', 'imajında gelir') },
        { id: 'drv', icon: 'plug', title: 'Driver API', sub: 'libcuda.so', tag: L('comes from the host', 'host\'tan gelir') },
        { id: 'nvml', icon: 'activity', title: 'NVML', sub: 'nvidia-smi · DCGM', tag: L('monitoring', 'izleme') },
      ]),
      row('g4', 4, 'purple', 'shield', L('Kernel driver', 'Kernel sürücüsü'), 'ring 0', [
        { id: 'ko', icon: 'shield', title: 'nvidia.ko', sub: L('kernel module', 'kernel modülü'), tag: L('version = driver', 'versiyon = sürücü') },
        { id: 'dev', icon: 'file-terminal', title: '/dev/nvidia*', sub: L('device files', 'cihaz dosyaları'), tag: 'ioctl()' },
        { id: 'uvm', icon: 'memory-stick', title: 'nvidia-uvm.ko', sub: L('unified memory', 'birleşik bellek'), tag: L('page faults', 'page fault') },
      ]),
      row('g5', 5, 'red', 'gpu', 'GPU', L('hardware', 'donanım'), [
        { id: 'sm', icon: 'cpu', title: 'SMs', sub: 'Tensor Cores', tag: L('run kernels', 'kernel çalıştırır') },
        { id: 'hbm', icon: 'memory-stick', title: 'HBM', sub: L('device memory', 'cihaz belleği'), tag: 'DMA' },
        { id: 'nvl', icon: 'cable', title: 'NVLink', sub: L('to other GPUs', 'diğer GPU\'lara'), tag: 'NCCL ↔' },
      ]),
    ],
    edges: [
      ['torch', 'dnn', 'b', 't', 1, L('calls', 'çağırır')],
      ['dnn', 'drv', 'b', 't', 2, L('launch kernels', 'kernel başlat')],
      ['drv', 'dev', 'b', 't', 3, L('syscall: ioctl', 'syscall: ioctl')],
      ['dev', 'hbm', 'b', 't', 4, L('PCIe · DMA', 'PCIe · DMA')],
    ],
    legend: [['green', 'App'], ['amber', L('Libraries', 'Kütüphaneler')], ['blue', 'User space'], ['purple', 'Kernel'], ['red', L('Hardware', 'Donanım')]],
    footer: L('🔗 Image ships runtime + libs; the host ships nvidia.ko + libcuda.so — versions must agree', '🔗 İmaj runtime + kütüphaneleri, host nvidia.ko + libcuda.so\'yu getirir; versiyonlar uyumlu olmalı'),
  };
};
