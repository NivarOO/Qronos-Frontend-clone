
import { useEffect, useRef } from "react";
import { colors } from "@/src/lib/tokens";
import { useOnscreen } from "@/src/lib/useOnscreen";

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  phase: number;
  alpha: number;
}

/**
 * Hero particle field: slow upward drift with a faint twinkle,
 * painted in the audit's --particle-color (#e4e4e7).
 * Static single frame when prefers-reduced-motion is set.
 */
export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ref: wrapRef, onscreen } = useOnscreen<HTMLDivElement>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let particles: Particle[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;

    const seed = () => {
      const count = Math.min(
        160,
        Math.max(50, Math.floor((width * height) / 12000)),
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.4 + Math.random() * 1.2,
        speed: 0.06 + Math.random() * 0.22,
        drift: Math.random() * Math.PI * 2,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.12 + Math.random() * 0.45,
      }));
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const paint = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);
      for (const particle of particles) {
        particle.y -= particle.speed;
        if (particle.y < -4) {
          particle.y = height + 4;
          particle.x = Math.random() * width;
        }
        const x =
          particle.x + Math.sin(frame / 90 + particle.drift) * 8;
        const twinkle =
          particle.alpha * (0.7 + 0.3 * Math.sin(frame / 40 + particle.phase));
        context.beginPath();
        context.arc(x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = hexToRgba(colors.particle, twinkle);
        context.fill();
      }
      frame = requestAnimationFrame(paint);
    };

    const paintOnce = () => {
      context.clearRect(0, 0, width, height);
      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = hexToRgba(colors.particle, particle.alpha);
        context.fill();
      }
    };

    resize();
    if (reducedMotion || !onscreen) {
      paintOnce();
    } else {
      frame = requestAnimationFrame(paint);
    }

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, [onscreen]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="absolute inset-y-0 left-1/2 z-0 w-full max-w-[1344px] -translate-x-1/2 overflow-hidden sm:w-[calc(100%-2rem)] lg:w-[calc(100%-3.5rem)]"
    >
      <div className="relative h-full w-full overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className="block h-full w-full"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero-right)" }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero-bottom)" }}
      />
    </div>
  );
}

function hexToRgba(hex: string, alpha: number): string {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
}
