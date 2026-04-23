import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`mb-4 ${align === "center" ? "flex justify-center" : ""}`}>
          <span className="ink-stamp">{eyebrow}</span>
        </div>
      )}
      <h2 className="display-mega text-4xl md:text-6xl text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
