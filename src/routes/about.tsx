import { createFileRoute, Link } from "@tanstack/react-router";
import coder from "@/assets/coder-kimono.webp";
import zuupLogo from "@/assets/zuup-logo.webp";
import branch from "@/assets/branch.webp";
import lanterns from "@/assets/lanterns.webp";
import { SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FAR AWAY 2026 — A Hackathon Journey by Zuup" },
      {
        name: "description",
        content:
          "FAR AWAY is a teen-led international hackathon by Zuup (a Zylon Labs initiative) — connecting 15–25 year-old builders across India and sending the top 5 teams to Japan, fully sponsored.",
      },
      { property: "og:title", content: "About FAR AWAY 2026 — Built by Teens, for Teens" },
      {
        property: "og:description",
        content:
          "From a teen-led NPO to an international hackathon. Meet Zuup, the team behind FAR AWAY 2026.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative mx-auto max-w-5xl px-5 md:px-8 pt-20 md:pt-28 pb-16 text-center">
        <span className="ink-stamp">遠 · About</span>
        <h1 className="display-mega text-5xl md:text-7xl mt-5">
          A journey, not just a <span className="text-sakura-deep">hackathon</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          FAR AWAY is the kind of project we wished existed when we were 15. So we built it.
        </p>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sakura-light to-sakura/30 rounded-3xl -rotate-2" aria-hidden />
            <img src={coder} alt="Young coder in kimono with laptop" loading="lazy" width={1024} height={1024} className="relative w-full max-w-md mx-auto" />
          </div>
          <div>
            <h2 className="display-mega text-4xl md:text-5xl">What is <span className="text-sakura-deep">FAR AWAY?</span></h2>
            <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed">
              FAR AWAY is an international hackathon for youth aged 15–25, organized by{" "}
              <strong>Zuup</strong>, a teen-led NPO by Zylon Labs.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              It's a journey: from your home screen, to a Delhi in-person round, to a fully-sponsored
              grand finale in Japan for the top 5 teams. Flights, hotel, meals — covered. You just have
              to build something worth flying for.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're 15 and just wrote your first function, or 25 and shipping side projects —
              there's a seat here for you.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-5 md:px-8 py-20">
        <SectionHeader
          eyebrow="Who runs this"
          title={<>Meet <span className="text-sakura-deep">Zuup</span></>}
          subtitle="A teen-led non-profit by Zylon Labs, building real opportunities for young creators across India."
        />
        <div className="mt-12 paper-card p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <img src={zuupLogo} alt="Zuup logo" width={140} height={140} className="h-32 w-32 md:h-36 md:w-36 rounded-2xl ring-1 ring-border mx-auto" />
          <div>
            <h3 className="font-display text-3xl font-extrabold">Zuup</h3>
            <p className="text-sakura-deep font-semibold text-sm uppercase tracking-[0.18em] mt-1">A Zylon Labs Initiative</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Zuup is run by teens, for teens — focused on giving young people across India real
              chances to build, ship, learn, and meet other people who care about the same things.
              FAR AWAY is our biggest project yet.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://zuup.dev" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-sakura-deep hover:underline">zuup.dev →</a>
              <a href="https://instagram.com/zuup.empower" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-sakura-deep hover:underline">@zuup.empower →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={branch} alt="" aria-hidden width={1024} height={512} className="absolute -top-6 -right-20 w-[600px] opacity-50" />
        <img src={lanterns} alt="" aria-hidden width={500} height={500} className="absolute -bottom-10 -left-12 w-72 opacity-70" />
        <div className="relative mx-auto max-w-3xl px-5 md:px-8 py-24 text-center">
          <h2 className="display-mega text-4xl md:text-5xl">Sound like your kind of thing?</h2>
          <p className="mt-4 text-muted-foreground">Registration is free until 30 April 2026.</p>
          <Link to="/rounds" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-paper ring-1 ring-border font-medium hover:bg-sakura-light transition">
            See the rounds →
          </Link>
        </div>
      </section>
    </div>
  );
}
