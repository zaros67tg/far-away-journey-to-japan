import type { ReactNode } from "react";

interface GraphicCardProps {
  image: string;
  imageAlt: string;
  number?: string;
  title: ReactNode;
  children: ReactNode;
  accent?: "sakura" | "vermilion" | "indigo" | "gold";
}

const accentMap = {
  sakura: "from-sakura-light to-sakura/20",
  vermilion: "from-vermilion/10 to-sakura-light",
  indigo: "from-indigo-dusk/10 to-sakura-light",
  gold: "from-gold/15 to-sakura-light",
};

export function GraphicCard({ image, imageAlt, number, title, children, accent = "sakura" }: GraphicCardProps) {
  return (
    <article className="group relative paper-card overflow-hidden transition hover:-translate-y-1 hover:shadow-[var(--shadow-bloom)] duration-500">
      <div className={`relative h-56 bg-gradient-to-br ${accentMap[accent]} overflow-hidden`}>
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute inset-0 m-auto h-full w-full object-contain p-6 group-hover:scale-105 transition duration-700"
        />
        {number && (
          <div className="absolute top-4 right-4 font-display text-5xl font-extrabold text-vermilion/90 leading-none">
            {number}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
      </div>
    </article>
  );
}
