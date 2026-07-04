import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  drift: number;
};

type TrailParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
};

type Pointer = {
  x: number;
  y: number;
  active: boolean;
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let trailParticles: TrailParticle[] = [];
    const pointer: Pointer = { x: 0, y: 0, active: false };
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const createParticles = () => {
      const isMobile = window.innerWidth < 768;
      const reduced = reduceMotionQuery.matches;
      const count = reduced ? 18 : isMobile ? 58 : 118;

      particles = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;

        return {
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          size: Math.random() * 1.9 + 0.9,
          alpha: Math.random() * 0.34 + 0.18,
          drift: Math.random() * 0.006 + 0.002,
        };
      });
    };

    const resize = () => {
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * devicePixelRatio);
      canvas.height = Math.floor(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      createParticles();
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;

      if (!reduceMotionQuery.matches && trailParticles.length < 90) {
        const trailCount = window.innerWidth < 768 ? 1 : 3;

        for (let index = 0; index < trailCount; index += 1) {
          const maxLife = Math.random() * 26 + 34;

          trailParticles.push({
            x: pointer.x + (Math.random() - 0.5) * 20,
            y: pointer.y + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 0.7,
            vy: (Math.random() - 0.5) * 0.7,
            size: Math.random() * 2.2 + 1,
            life: maxLife,
            maxLife,
          });
        }
      }
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      const reduced = prefersReducedMotion();

      if (pointer.active && !reduced) {
        const glowRadius = window.innerWidth < 768 ? 86 : 132;
        const gradient = context.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          glowRadius,
        );
        gradient.addColorStop(0, "rgba(73, 107, 93, 0.11)");
        gradient.addColorStop(1, "rgba(73, 107, 93, 0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(pointer.x, pointer.y, glowRadius, 0, Math.PI * 2);
        context.fill();
      }

      for (const particle of particles) {
        if (!reduced) {
          const driftX = Math.sin(Date.now() * particle.drift + particle.originY) * 0.16;
          const driftY = Math.cos(Date.now() * particle.drift + particle.originX) * 0.16;

          particle.x += particle.vx + driftX;
          particle.y += particle.vy + driftY;

          if (pointer.active) {
            const dx = pointer.x - particle.x;
            const dy = pointer.y - particle.y;
            const distance = Math.hypot(dx, dy);
            const radius = window.innerWidth < 768 ? 118 : 186;

            if (distance < radius) {
              const pull = (radius - distance) / radius;
              particle.x += dx * pull * 0.038;
              particle.y += dy * pull * 0.038;
              particle.vx += (Math.random() - 0.5) * pull * 0.045;
              particle.vy += (Math.random() - 0.5) * pull * 0.045;

              if (distance < radius * 0.72) {
                context.beginPath();
                context.strokeStyle = `rgba(73, 107, 93, ${0.09 * pull})`;
                context.lineWidth = 1;
                context.moveTo(pointer.x, pointer.y);
                context.lineTo(particle.x, particle.y);
                context.stroke();
              }
            }
          }

          particle.vx *= 0.985;
          particle.vy *= 0.985;
          particle.x += (particle.originX - particle.x) * 0.002;
          particle.y += (particle.originY - particle.y) * 0.002;

          if (particle.x < -20 || particle.x > width + 20) particle.vx *= -1;
          if (particle.y < -20 || particle.y > height + 20) particle.vy *= -1;
        }

        context.beginPath();
        context.fillStyle = `rgba(73, 107, 93, ${particle.alpha})`;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      trailParticles = trailParticles.filter((trail) => trail.life > 0);

      for (const trail of trailParticles) {
        const fade = trail.life / trail.maxLife;
        trail.x += trail.vx;
        trail.y += trail.vy;
        trail.vx *= 0.96;
        trail.vy *= 0.96;
        trail.life -= 1;

        context.beginPath();
        context.fillStyle = `rgba(49, 80, 70, ${0.22 * fade})`;
        context.arc(trail.x, trail.y, trail.size * fade, 0, Math.PI * 2);
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    render();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    reduceMotionQuery.addEventListener("change", createParticles);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      reduceMotionQuery.removeEventListener("change", createParticles);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}
