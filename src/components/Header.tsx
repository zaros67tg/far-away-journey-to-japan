import { Link } from "@tanstack/react-router";
import { useState } from "react";

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
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-12 md:h-14 flex items-center justify-between">
        <Link to="/" className="font-display font-extrabold text-[15px] tracking-[0.02em] text-foreground hover:text-sakura-deep transition" aria-label="FAR AWAY home">
          FAR <span className="text-sakura-deep">AWAY</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-1.5 text-[13px] font-medium text-foreground/65 hover:text-sakura-deep transition"
              activeProps={{
                className:
                  "px-3 py-1.5 text-[13px] font-semibold text-sakura-deep relative after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:bg-sakura-deep",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://unstop.com/p/far-away-zuup-1677472"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-primary-foreground font-semibold text-[12px] tracking-wide hover:scale-105 transition"
          >
            Register
            <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-8 w-8 grid place-items-center rounded-md hover:bg-sakura-light/60"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-paper px-5 py-2 flex flex-col">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-2 py-2 text-sm font-medium text-foreground/80 hover:text-sakura-deep"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
