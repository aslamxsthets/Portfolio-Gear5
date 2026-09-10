import React, { useEffect, useRef } from 'react';

interface CloudCanvasProps {
  reducedMotion?: boolean;
}

export const CloudCanvas: React.FC<CloudCanvasProps> = ({ reducedMotion = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse parallax tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    if (!reducedMotion) {
      window.addEventListener('mousemove', onMouseMove);
    }

    // Cloud puffy particle definitions
    const cloudCount = 14;
    const clouds = Array.from({ length: cloudCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 90 + 50,
      vx: (Math.random() * 0.25 + 0.08) * (Math.random() > 0.5 ? 1 : -1),
      vy: (Math.random() * 0.15 + 0.04) * (Math.random() > 0.5 ? 1 : -1),
      opacity: Math.random() * 0.08 + 0.03,
      depth: Math.random() * 0.5 + 0.5
    }));

    // Cybersecurity floating bits (subtle hex/binary dots)
    const bits = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      char: Math.random() > 0.5 ? '01' : 'DFIR',
      vx: Math.random() * 0.2 - 0.1,
      vy: Math.random() * 0.2 - 0.1,
      opacity: Math.random() * 0.12 + 0.04,
      size: Math.random() * 5 + 9
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      const offsetX = (mouseX - width / 2) * 0.02;
      const offsetY = (mouseY - height / 2) * 0.02;

      // Draw stylized clouds
      clouds.forEach(cloud => {
        if (!reducedMotion) {
          cloud.x += cloud.vx;
          cloud.y += cloud.vy;

          if (cloud.x - cloud.radius > width) cloud.x = -cloud.radius;
          if (cloud.x + cloud.radius < 0) cloud.x = width + cloud.radius;
          if (cloud.y - cloud.radius > height) cloud.y = -cloud.radius;
          if (cloud.y + cloud.radius < 0) cloud.y = height + cloud.radius;
        }

        const px = cloud.x + offsetX * cloud.depth;
        const py = cloud.y + offsetY * cloud.depth;

        const grad = ctx.createRadialGradient(
          px,
          py,
          cloud.radius * 0.2,
          px,
          py,
          cloud.radius
        );

        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
          grad.addColorStop(0, `rgba(255, 255, 255, ${cloud.opacity * 0.9})`);
          grad.addColorStop(0.6, `rgba(220, 38, 38, ${cloud.opacity * 0.3})`);
          grad.addColorStop(1, 'rgba(18, 18, 18, 0)');
        } else {
          grad.addColorStop(0, `rgba(255, 255, 255, ${cloud.opacity * 1.5})`);
          grad.addColorStop(0.5, `rgba(245, 245, 244, ${cloud.opacity})`);
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, cloud.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw subtle cybersecurity data fragments
      ctx.font = '10px "JetBrains Mono", monospace';
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';

      bits.forEach(bit => {
        if (!reducedMotion) {
          bit.x += bit.vx;
          bit.y += bit.vy;
          if (bit.x > width) bit.x = 0;
          if (bit.x < 0) bit.x = width;
          if (bit.y > height) bit.y = 0;
          if (bit.y < 0) bit.y = height;
        }
        ctx.fillText(bit.char, bit.x + offsetX * 0.5, bit.y + offsetY * 0.5);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
