import { Link } from "@tanstack/react-router";
import { useState } from "react";
import zuupLogo from "@/assets/zuup-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rounds", label: "Rounds" },
  { to: "/prizes", label: "Prizes" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="FAR AWAY home">
          <img
            src={zuupLogo}
            alt="Zuup logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-md ring-1 ring-border group-hover:ring-sakura transition"
          />
          <div className="leading-tight">
            <div className="font-display font-extrabold text-base md:text-lg tracking-tight text-foreground">
              FAR AWAY
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-sakura-deep/80">
              Hackathon · 2026
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-sakura-deep rounded-md transition"
              activeProps={{
                className:
                  "px-3 py-2 text-sm font-semibold text-sakura-deep rounded-md bg-sakura-light/60",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-primary-foreground font-semibold text-sm shadow-[var(--shadow-bloom)] hover:scale-105 transition"
          >
            Register Free
            <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-md border border-border"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-paper px-5 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm font-medium text-foreground/80 rounded-md hover:bg-sakura-light/60"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
