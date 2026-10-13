// Efecto festivo de estrellas y confeti celestial para celebraciones
export function lanzarConfetiCelestial() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    alpha: number;
    spin: number;
    spinSpeed: number;
    isStar: boolean;
  }> = [];

  const colors = ['#D4AF37', '#FFF4D0', '#E6CA65', '#2DD4BF', '#FDF0CD'];
  const count = 75;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 8;
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.55,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      size: 2.5 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      spin: Math.random() * Math.PI,
      spinSpeed: (Math.random() - 0.5) * 0.25,
      isStar: Math.random() > 0.35
    });
  }

  function render() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = 0;

    particles.forEach(p => {
      if (p.alpha > 0) {
        alive++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.2;
        p.spin += p.spinSpeed;
        p.alpha -= 0.016;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.spin);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;

        if (p.isStar) {
          ctx.beginPath();
          for (let j = 0; j < 5; j++) {
            ctx.lineTo(
              Math.cos((18 + j * 72) * Math.PI / 180) * p.size,
              -Math.sin((18 + j * 72) * Math.PI / 180) * p.size
            );
            ctx.lineTo(
              Math.cos((54 + j * 72) * Math.PI / 180) * (p.size * 0.5),
              -Math.sin((54 + j * 72) * Math.PI / 180) * (p.size * 0.5)
            );
          }
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.fillRect(-p.size, -p.size, p.size * 2, p.size * 2);
        }

        ctx.restore();
      }
    });

    if (alive > 0) {
      requestAnimationFrame(render);
    } else {
      canvas.remove();
    }
  }

  render();
}
