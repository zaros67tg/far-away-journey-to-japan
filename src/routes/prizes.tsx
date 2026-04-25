import { createFileRoute } from "@tanstack/react-router";
import pagoda from "@/assets/pagoda-waves.webp";
import koi from "@/assets/koi-dragon.webp";
import bonfire from "@/assets/bonfire-friends.webp";
import sensei from "@/assets/sensei-student.webp";
import coder from "@/assets/coder-kimono.webp";
import rocket from "@/assets/paper-rocket.webp";
import unstopWhite from "@/assets/unstop-logo-white.webp";
import { SectionHeader } from "@/components/Section";
import { GraphicCard } from "@/components/GraphicCard";

export const Route = createFileRoute("/prizes")({
  head: () => ({
    meta: [
      { title: "Prizes — FAR AWAY 2026 | Top 5 Teams Fly to Japan" },
      {
        name: "description",
        content:
          "Top 5 teams fly to Japan, fully sponsored — flights, hotel, meals. Plus internships, certificates, and Zuup alumni network access. Win something worth building for.",
      },
      { property: "og:title", content: "Prizes — Top 5 Fly to Japan, Fully Sponsored" },
      {
        property: "og:description",
        content:
          "FAR AWAY 2026 prizes: a fully sponsored trip to Japan, internships, recognition, and a launchpad for your career.",
      },
      { property: "og:image", content: "https://faraway.zuup.dev/og-image.webp" },
      { property: "og:url", content: "https://faraway.zuup.dev/prizes" },
      { name: "twitter:title", content: "Prizes — Top 5 Fly to Japan, Fully Sponsored" },
      { name: "twitter:description", content: "Trip to Japan, internships, recognition. Build something worth winning for." },
      { name: "twitter:image", content: "https://faraway.zuup.dev/og-image.webp" },
    ],
    links: [{ rel: "canonical", href: "https://faraway.zuup.dev/prizes" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://faraway.zuup.dev/" },
            { "@type": "ListItem", position: 2, name: "Prizes", item: "https://faraway.zuup.dev/prizes" },
          ],
        }),
      },
    ],
  }),
  component: PrizesPage,
});

function PrizesPage() {
  return (
    <div>
      <section className="relative mx-auto max-w-5xl px-5 md:px-8 pt-20 md:pt-28 pb-10 text-center">
        <span className="ink-stamp">賞 · Prizes</span>
        <h1 className="display-mega text-5xl md:text-7xl mt-5">
          One team wins it <span className="text-sakura-deep">all.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          FAR AWAY 2026. Something worth building for.
        </p>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GraphicCard image={pagoda} imageAlt="Pagoda with waves" number="🏯" title="Top 5 to Japan" accent="indigo">
          Five best teams fly to Japan. Flights, hotel, meals — all covered. Fully sponsored by FAR AWAY.
        </GraphicCard>
        <GraphicCard image={koi} imageAlt="Koi to dragon transformation" number="🐉" title="Winner Takes All" accent="vermilion">
          One team gets crowned on an international stage. Grand prize details announced soon.
          Build something worth winning for.
        </GraphicCard>
        <GraphicCard image={bonfire} imageAlt="Friends around a campfire" number="🌸" title="Officially Recognized">
          Every team that reaches Japan gets official certificates, Zuup alumni network access,
          and recognition that sticks.
        </GraphicCard>
        <GraphicCard image={sensei} imageAlt="Sensei teaching student" number="💼" title="Internships" accent="gold">
          Top performers get fast-tracked for internship roles at partner companies — startups
          to established firms.
        </GraphicCard>
        <GraphicCard image={coder} imageAlt="Coder building real projects" number="📂" title="Portfolio">
          The projects you build here are real. Meaningful work that actually belongs in your portfolio.
        </GraphicCard>
        <GraphicCard image={rocket} imageAlt="Paper rocket launching" number="🚀" title="Career Launch" accent="vermilion">
          Whether you are 15 or 25, FAR AWAY gives you the platform to prove yourself and get ahead.
        </GraphicCard>
      </section>

      <section className="relative mx-auto max-w-4xl px-5 md:px-8 py-16">
        <div className="paper-card p-8 md:p-12 text-center bg-gradient-to-br from-sakura-light via-paper to-sakura/15">
          <h2 className="display-mega text-3xl md:text-4xl">Ready to compete?</h2>
          <p className="mt-3 text-muted-foreground">Registration is <strong className="text-vermilion">always free</strong>, via our platform partner Unstop.</p>
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-primary-foreground font-semibold shadow-[var(--shadow-bloom)] hover:scale-105 transition"
          >
            Register on
            <img src={unstopWhite} alt="Unstop" width={80} height={22} className="h-5 w-auto" />
            →
          </a>
        </div>
      </section>
    </div>
  );
}
