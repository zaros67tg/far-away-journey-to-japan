import { useMemo } from "react";
import petal from "@/assets/petal.webp";

interface SakuraPetalsProps {
  count?: number;
  zIndex?: number;
}

export function SakuraPetals({ count = 12, zIndex = 1 }: SakuraPetalsProps) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 14 + Math.random() * 18,
        size: 16 + Math.random() * 24,
        drift: -80 + Math.random() * 160,
        opacity: 0.5 + Math.random() * 0.4,
      })),
    [count],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex, contain: "strict" }}
    >
      {petals.map((p) => (
        <img
          key={p.id}
          src={petal}
          alt=""
          width={p.size}
          height={p.size}
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            willChange: "transform, opacity",
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
