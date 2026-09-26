
import { useEffect } from "react";
import { useOnscreen } from "@/src/lib/useOnscreen";

interface ParticleFieldProps {
  particles?: number;
  color?: string;
  riseSpeed?: number;
  opacity?: number;
  scale?: number;
  horizonColor?: string;
  horizonOpacity?: number;
  className?: string;
}

/**
 * Rising particle canvas with a faint horizon glow.
 * Defaults mirror the observed CTA backdrop (180 particles,
 * #e4e4e7 at 42%, scale 8, #a1a1aa horizon at 22%).
 * Static single frame when prefers-reduced-motion is set.
 */
export function ParticleField({
  particles = 180,
  color = "#e4e4e7",
  riseSpeed = 12,
  opacity = 42,
  scale = 8,
  horizonColor = "#a1a1aa",
  horizonOpacity = 22,
  className = "",
}: ParticleFieldProps) {
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

    const baseAlpha = opacity / 100;
    const horizonAlpha = horizonOpacity / 100;
    const speedBase = riseSpeed / 60;
    let dots: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      phase: number;
      alpha: number;
    }[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;

    const seed = () => {
      dots = Array.from({ length: particles }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.4 + Math.random() * ((scale / 8) * 1.4),
        speed: speedBase * (0.4 + Math.random() * 0.9),
        phase: Math.random() * Math.PI * 2,
        alpha: baseAlpha * (0.25 + Math.random() * 0.75),
      }));
    };

    const paintHorizon = () => {
      const y = height * 0.62;
      const gradient = context.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, withAlpha(horizonColor, 0));
      gradient.addColorStop(0.5, withAlpha(horizonColor, horizonAlpha));
      gradient.addColorStop(1, withAlpha(horizonColor, 0));
      context.fillStyle = gradient;
      context.fillRect(0, y, width, 1.5);
    };

    const paintDots = (twinkle: boolean) => {
      for (const dot of dots) {
        const alpha = twinkle
          ? dot.alpha * (0.65 + 0.35 * Math.sin(frame / 36 + dot.phase))
          : dot.alpha;
        context.beginPath();
        context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        context.fillStyle = withAlpha(color, alpha);
        context.fill();
      }
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

    const tick = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);
      for (const dot of dots) {
        dot.y -= dot.speed;
        if (dot.y < -4) {
          dot.y = height + 4;
          dot.x = Math.random() * width;
        }
      }
      paintDots(true);
      paintHorizon();
      frame = requestAnimationFrame(tick);
    };

    resize();
    if (reducedMotion || !onscreen) {
      context.clearRect(0, 0, width, height);
      paintDots(false);
      paintHorizon();
    } else {
      frame = requestAnimationFrame(tick);
    }

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, [particles, color, riseSpeed, opacity, scale, horizonColor, horizonOpacity, onscreen]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`block size-full ${className}`}
    />
  );
}

function withAlpha(hex: string, alpha: number): string {
  const value = hex.replace("#", "");
  const full = value.length === 3 ? value.split("").map((c) => c + c).join("") : value;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, alpha)).toFixed(3)})`;
}
