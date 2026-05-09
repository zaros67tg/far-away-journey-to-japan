import { createFileRoute } from "@tanstack/react-router";
import coder from "@/assets/coder-kimono.webp";
import delhi from "@/assets/delhi-gate.webp";
import tokyo from "@/assets/tokyo-poster.webp";
import torii from "@/assets/torii-three.webp";
import unstopWhite from "@/assets/unstop-logo-white.webp";
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
      { property: "og:image", content: "https://faraway.zuup.dev/og-image.webp" },
      { property: "og:url", content: "https://faraway.zuup.dev/rounds" },
      { name: "twitter:title", content: "Three Rounds. One Wild Ride. — FAR AWAY 2026" },
      { name: "twitter:description", content: "Online → Delhi → Japan. The full hackathon journey." },
      { name: "twitter:image", content: "https://faraway.zuup.dev/og-image.webp" },
    ],
    links: [{ rel: "canonical", href: "https://faraway.zuup.dev/rounds" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://faraway.zuup.dev/" },
                { "@type": "ListItem", position: 2, name: "Rounds", item: "https://faraway.zuup.dev/rounds" },
              ],
            },
            {
              "@type": "ItemList",
              name: "FAR AWAY 2026 Rounds",
              itemListOrder: "https://schema.org/ItemListOrderAscending",
              numberOfItems: 3,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "International Online Round (First Week of June 2026)" },
                { "@type": "ListItem", position: 2, name: "Round 2 — New Delhi, India (Mid June 2026)" },
                { "@type": "ListItem", position: 3, name: "Grand Finale — Tokyo, Japan (Late June / July 2026)" },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: RoundsPage,
});

const rounds = [
  {
    img: coder,
    num: "01",
    title: "International Online Round",
    where: "From Anywhere",
    emoji: "🌐",
    date: "First Week of June 2026",
    note: "Registration LIVE",
    body: "Build and submit. All registered participants. 7 days.",
    bg: null,
  },
  {
    img: delhi,
    num: "02",
    title: "Round 2 — Delhi",
    where: "New Delhi, India",
    emoji: "🇮🇳",
    date: "Mid June 2026",
    note: "Travel details TBA",
    body: "Top 100 teams. In-person 24-hour hackathon. Selected travel assistance may be provided based on sponsorship availability.",
    bg: null,
  },
  {
    img: tokyo,
    num: "03",
    title: "Grand Finale — Japan",
    where: "Grand Finale",
    emoji: "🇯🇵",
    date: "Late June / July 2026",
    note: "Top 5 — Fully Sponsored",
    body: "Top 5 teams. 5 days in Japan. Factory visits, cultural exploration, final build day. *University and venue partnerships currently in discussion.*",
    bg: tokyo,
    supreme: true,
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
            <article key={r.num} className={`paper-card overflow-hidden grid md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""} ${r.supreme ? 'border-sakura-deep/40' : ''}`}>
              <div className={`relative h-72 md:h-auto overflow-hidden ${r.bg ? '' : 'bg-gradient-to-br from-sakura-light to-sakura/20'}`}>
                {r.bg && (
                  <img src={r.bg} alt="" aria-hidden loading="lazy" width={1024} height={768} className="absolute inset-0 w-full h-full object-cover" />
                )}
                {r.bg && <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/30 to-sakura-deep/40" />}
                <img src={r.img} alt={r.title} loading="lazy" width={1024} height={1024} className={`absolute inset-0 m-auto h-full w-full object-contain p-6 ${r.bg ? 'opacity-90 mix-blend-luminosity' : ''}`} />
                <div className={`absolute top-5 left-5 font-display text-7xl font-extrabold leading-none ${r.supreme ? 'text-sakura-deep drop-shadow-lg' : 'text-vermilion/90'}`}>{r.num}</div>
                {r.supreme && (
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sakura-deep/90 text-paper text-xs font-bold backdrop-blur-sm">
                      {r.emoji} {r.where}
                    </span>
                  </div>
                )}
              </div>
              <div className={`p-8 md:p-12 flex flex-col justify-center ${r.supreme ? 'bg-gradient-to-br from-sakura-light/20 to-paper' : ''}`}>
                <div className="text-xs uppercase tracking-[0.22em] text-vermilion font-semibold">{r.emoji} {r.where}</div>
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

      {/* WORKSHOPS + COMMUNITY */}
      <section className="relative mx-auto max-w-5xl px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Workshops card */}
          <div className="paper-card p-8 bg-gradient-to-br from-sakura-light/30 to-paper border-sakura-deep/20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sakura-deep/10 text-sakura-deep text-[10px] font-bold uppercase tracking-widest mb-4">
              ⚡ Prep Workshops
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">FAR AWAY Prep: PCB Panic to Prototype</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We host intensive hardware and software workshops before the hackathon. Join our first session covering PCB design, AI prototyping, and more. Free for all registered participants.
            </p>
            <a
              href="https://lu.ma/faraway"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sakura-deep text-paper text-sm font-semibold hover:scale-105 transition shadow-[var(--shadow-bloom)]"
            >
              Register for Workshop →
            </a>
            <p className="mt-3 text-[10px] text-muted-foreground">More workshops coming soon</p>
          </div>

          {/* Slack card */}
          <div className="paper-card p-8 bg-gradient-to-br from-foreground/5 to-paper border-foreground/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/10 text-foreground text-[10px] font-bold uppercase tracking-widest mb-4">
              💬 Real-Time Updates
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Join the FAR AWAY Community on Slack</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Get real-time updates, announcements, connect with other builders, and get support directly from the organising team. This is where things happen.
            </p>
            <a
              href="https://join.slack.com/t/farawayofficial/shared_invite/zt-38zrml7b0-9cZqxwIoI9JpAi1O3FDPZQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-paper text-sm font-semibold hover:bg-sakura-deep hover:scale-105 transition shadow-[var(--shadow-bloom)]"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
              </svg>
              Join Slack Community →
            </a>
            <p className="mt-3 text-[10px] text-muted-foreground">400+ members · Real-time round updates</p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-5 md:px-8 py-10">
        <div className="paper-card p-8 md:p-12 text-center bg-gradient-to-br from-sakura-light via-paper to-sakura/15">
          <img src={torii} alt="" aria-hidden width={1024} height={1024} className="h-32 mx-auto opacity-90" />
          <h2 className="display-mega text-3xl md:text-5xl mt-4">Top 5 teams fly to Japan.</h2>
          <p className="mt-3 text-muted-foreground">All expenses covered — flights, hotel, meals.</p>
          <a
            href="https://unstop.com/p/far-away-zuup-1677472"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-primary-foreground font-semibold shadow-[var(--shadow-bloom)] hover:scale-105 transition"
          >
            Register Free on
            <img src={unstopWhite} alt="Unstop" width={80} height={22} className="h-5 w-auto" />
            →
          </a>
        </div>
      </section>
    </div>
  );
}
