import { createFileRoute } from "@tanstack/react-router";
import coder from "@/assets/coder-kimono.png";
import delhi from "@/assets/delhi-gate.png";
import tokyo from "@/assets/tokyo-poster.png";
import torii from "@/assets/torii-three.png";
import unstop from "@/assets/unstop-logo.svg";
import { SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/rounds")({
  head: () => ({
    meta: [
      { title: "Rounds — FAR AWAY 2026 | Online → Delhi → Japan" },
      {
        name: "description",
        content:
          "Three rounds, one journey. FAR AWAY 2026: Online round in June, Delhi in-person round, then a fully-sponsored grand finale in Tokyo, Japan for the top 5 teams.",
      },
      { property: "og:title", content: "Three Rounds. One Wild Ride. — FAR AWAY 2026" },
      {
        property: "og:description",
        content:
          "Online → Delhi → Japan. See the full round structure for FAR AWAY 2026, India's biggest international youth hackathon.",
      },
      { property: "og:image", content: "/og-rounds.jpg" },
    ],
  }),
  component: RoundsPage,
});

const rounds = [
  {
    img: coder,
    num: "01",
    title: "International Online Round",
    where: "From Your Home",
    date: "First Week of June 2026",
    note: "Registration LIVE",
    body: "Build and submit your project online. The hackathon begins in the first week of June and is open to participants across India. No commute needed. All you need is a laptop and an idea.",
  },
  {
    img: delhi,
    num: "02",
    title: "Round 2 — Delhi",
    where: "New Delhi, India",
    date: "Mid June 2026",
    note: "Travel details TBA",
    body: "Top teams come to New Delhi for an in-person hackathon. Real energy, real competition, real food, real friends. Travel stipend details will be announced soon.",
  },
  {
    img: tokyo,
    num: "03",
    title: "Grand Finale — Japan",
    where: "Tokyo, Japan",
    date: "Late June / July 2026",
    note: "Top 5 — Fully Sponsored",
    body: "The top 5 teams fly to Japan for the grand finale. Fully sponsored — flights, hotel, meals. Visa support details to be confirmed. Compete on an international stage and experience Japan.",
  },
];

function RoundsPage() {
  return (
    <div>
      <section className="relative mx-auto max-w-5xl px-5 md:px-8 pt-20 md:pt-28 pb-12 text-center">
        <span className="ink-stamp">三 · Three Rounds</span>
        <h1 className="display-mega text-5xl md:text-7xl mt-5">
          Three Rounds. <br /><em className="display-script not-italic text-sakura-deep">One Wild Ride.</em>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Online, Delhi, Japan. The path is clear. Are you on it?
        </p>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-12">
        <div className="space-y-12">
          {rounds.map((r, i) => (
            <article key={r.num} className={`paper-card overflow-hidden grid md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative h-72 md:h-auto bg-gradient-to-br from-sakura-light to-sakura/20 overflow-hidden">
                <img src={r.img} alt={r.title} loading="lazy" width={1024} height={1024} className="absolute inset-0 m-auto h-full w-full object-contain p-6" />
                <div className="absolute top-5 left-5 font-display text-7xl font-extrabold text-vermilion/90 leading-none">{r.num}</div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.22em] text-vermilion font-semibold">{r.where}</div>
                <h2 className="display-mega text-3xl md:text-4xl mt-2">{r.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{r.body}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1.5 rounded-full bg-sakura-light text-sakura-deep text-xs font-semibold">📅 {r.date}</span>
                  <span className="ink-stamp">{r.note}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-5 md:px-8 py-20">
        <div className="paper-card p-8 md:p-12 text-center bg-gradient-to-br from-sakura-light via-paper to-sakura/15">
          <img src={torii} alt="" aria-hidden width={1024} height={1024} className="h-32 mx-auto opacity-90" />
          <h2 className="display-mega text-3xl md:text-5xl mt-4">Top 5 teams fly to Japan.</h2>
          <p className="mt-3 text-muted-foreground">All expenses covered — flights, hotel, meals.</p>
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-primary-foreground font-semibold shadow-[var(--shadow-bloom)] hover:scale-105 transition"
          >
            Register Free on
            <img src={unstop} alt="Unstop" width={70} height={20} className="h-5 w-auto bg-white/95 px-1.5 py-0.5 rounded" />
            →
          </a>
        </div>
      </section>
    </div>
  );
}
