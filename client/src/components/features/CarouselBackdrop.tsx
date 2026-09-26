
import { useEffect } from "react";
import { useOnscreen } from "@/src/lib/useOnscreen";

interface GlowOrb {
  x: number;
  y: number;
  radius: number;
  driftX: number;
  driftY: number;
  phase: number;
  color: string;
  alpha: number;
}

const ORB_COLORS = ["#8ab4ff", "#fb7185", "#4ade80", "#a685ff", "#e4e4e7"];

/**
 * Original ambient backdrop for the feature carousel: slow-drifting
 * soft glow orbs over black. Stands in for the reference photographic /
 * canvas treatment without copying any asset. Static frame under
 * prefers-reduced-motion.
 */
export function CarouselBackdrop() {
  const { ref: canvasRef, onscreen } = useOnscreen<HTMLCanvasElement>();

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

    let orbs: GlowOrb[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;

    const seed = () => {
      const count = Math.max(8, Math.min(16, Math.floor(width / 90)));
      orbs = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 70 + Math.random() * 150,
        driftX: 0.08 + Math.random() * 0.2,
        driftY: 0.05 + Math.random() * 0.12,
        phase: Math.random() * Math.PI * 2,
        color: ORB_COLORS[index % ORB_COLORS.length],
        alpha: 0.04 + Math.random() * 0.06,
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
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";
      for (const orb of orbs) {
        const x = orb.x + Math.sin(frame / 160 + orb.phase) * 40;
        const y = orb.y + Math.cos(frame / 200 + orb.phase) * 28;
        const gradient = context.createRadialGradient(x, y, 0, x, y, orb.radius);
        gradient.addColorStop(0, withAlpha(orb.color, orb.alpha));
        gradient.addColorStop(1, withAlpha(orb.color, 0));
        context.fillStyle = gradient;
        context.fillRect(x - orb.radius, y - orb.radius, orb.radius * 2, orb.radius * 2);
        orb.x += orb.driftX * 0.1;
        orb.y -= orb.driftY * 0.1;
        if (orb.y < -orb.radius) {
          orb.y = height + orb.radius;
          orb.x = Math.random() * width;
        }
        if (orb.x > width + orb.radius) orb.x = -orb.radius;
      }
      context.globalCompositeOperation = "source-over";
    };

    resize();
    paint();
    if (reducedMotion || !onscreen) {
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }

    let raf = 0;
    const tick = () => {
      frame += 1;
      paint();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [onscreen]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 block h-full w-full"
    />
  );
}

function withAlpha(hex: string, alpha: number): string {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
}
