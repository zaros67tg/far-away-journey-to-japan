import { Link } from "@tanstack/react-router";
import zuupLogo from "@/assets/zuup-logo.png";
import unstopLogo from "@/assets/unstop-logo.svg";
import branch from "@/assets/branch.png";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-gradient-to-b from-paper to-sakura-light/40 overflow-hidden">
      <img
        src={branch}
        alt=""
        aria-hidden
        width={1024}
        height={512}
        className="pointer-events-none absolute -top-10 -right-20 w-[600px] opacity-50 rotate-12"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={zuupLogo} alt="Zuup logo" width={48} height={48} className="h-12 w-12 rounded-lg ring-1 ring-border" />
            <div>
              <div className="font-display text-2xl font-extrabold tracking-tight">FAR AWAY</div>
              <div className="text-xs uppercase tracking-[0.2em] text-sakura-deep">Hackathon · 2026</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
            India's biggest international youth hackathon for ages 15–25. From your screen, to Delhi, to Japan.
            Organized by <strong>Zuup</strong>, a teen-led NPO by Zylon Labs.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="ink-stamp">Free till 30 Apr 2026</span>
            <a
              href="https://instagram.com/zuup.empower"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-sakura-deep hover:underline"
            >
              @zuup.empower
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-foreground/70 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-sakura-deep">Home</Link></li>
            <li><Link to="/about" className="hover:text-sakura-deep">About</Link></li>
            <li><Link to="/rounds" className="hover:text-sakura-deep">Rounds</Link></li>
            <li><Link to="/prizes" className="hover:text-sakura-deep">Prizes</Link></li>
            <li><Link to="/faq" className="hover:text-sakura-deep">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-foreground/70 mb-4">Reach Out</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:jagrit@zuup.dev" className="hover:text-sakura-deep">jagrit@zuup.dev</a></li>
            <li><a href="mailto:sponsors@zuup.dev" className="hover:text-sakura-deep">sponsors@zuup.dev</a></li>
            <li><a href="https://zuup.dev" target="_blank" rel="noopener noreferrer" className="hover:text-sakura-deep">zuup.dev</a></li>
          </ul>
          <div className="mt-6 flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Platform</span>
            <a href="https://unstop.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white rounded-md px-3 py-1.5 ring-1 ring-border">
              <img src={unstopLogo} alt="Unstop — registration platform partner" width={70} height={20} className="h-5 w-auto" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© 2026 Zuup by Zylon Labs · All rights reserved</p>
          <p className="italic">Made by teens, for teens. Not robots. 🌸</p>
        </div>
      </div>
    </footer>
  );
}
