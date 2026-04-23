import { useMemo } from "react";
import petal from "@/assets/petal.webp";

interface SakuraPetalsProps {
  count?: number;
  zIndex?: number;
}

export function SakuraPetals({ count = 18, zIndex = 1 }: SakuraPetalsProps) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 18,
        size: 14 + Math.random() * 28,
        drift: -80 + Math.random() * 160,
        opacity: 0.5 + Math.random() * 0.4,
      })),
    [count],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex }}
    >
      {petals.map((p) => (
        <img
          key={p.id}
          src={petal}
          alt=""
          width={p.size}
          height={p.size}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
