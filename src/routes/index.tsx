import { createFileRoute, Link } from "@tanstack/react-router";
import heroFuji from "@/assets/hero-fuji.webp";
import torii from "@/assets/torii-three.webp";
import planes from "@/assets/paper-planes-fuji.webp";
import figures from "@/assets/sakura-figures.webp";
import lanterns from "@/assets/lanterns.webp";
import koi from "@/assets/koi-dragon.webp";
import sensei from "@/assets/sensei-student.webp";
import rocket from "@/assets/paper-rocket.webp";
import coder from "@/assets/coder-kimono.webp";
import bonfire from "@/assets/bonfire-friends.webp";
import pagoda from "@/assets/pagoda-waves.webp";
import unstop from "@/assets/unstop-logo.svg";
import unstopWhite from "@/assets/unstop-logo-white.webp";
import zuupLogo from "@/assets/zuup-logo.webp";
import cloud from "@/assets/cloud.webp";
import branch from "@/assets/branch.webp";
import wave from "@/assets/wave.webp";
import sun from "@/assets/sun.webp";
import crane from "@/assets/crane.webp";
import { SectionHeader } from "@/components/Section";
import { JourneyMap } from "@/components/JourneyMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FAR AWAY 2026 — India's International Youth Hackathon · Win a Trip to Japan" },
      {
        name: "description",
        content:
          "Build, compete, fly. FAR AWAY 2026 is India's biggest international hackathon for ages 15–25. Top 5 teams fly to Japan — flights, hotel & meals fully sponsored. Registration is always free via Unstop.",
      },
      { property: "og:title", content: "FAR AWAY 2026 — Win a Fully Sponsored Trip to Japan" },
      {
        property: "og:description",
        content:
          "From your screen → Delhi → Japan. India's biggest youth hackathon for ages 15–25. Always free registration via Unstop.",
      },
      { property: "og:image", content: "https://faraway.zuup.dev/og-image.webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "FAR AWAY 2026 — Mount Fuji, cherry blossoms and the journey from India to Japan" },
      { property: "og:url", content: "https://faraway.zuup.dev/" },
      { name: "twitter:title", content: "FAR AWAY 2026 — Win a Trip to Japan" },
      {
        name: "twitter:description",
        content:
          "India's biggest youth hackathon for ages 15–25. Top 5 teams fly to Japan, fully sponsored.",
      },
      { name: "twitter:image", content: "https://faraway.zuup.dev/og-image.webp" },
      { name: "twitter:image:alt", content: "FAR AWAY 2026 hackathon hero — Mount Fuji and cherry blossoms" },
    ],
    links: [{ rel: "canonical", href: "https://faraway.zuup.dev/" }],
  }),
  component: HomePage,
});

/* ---------- Editorial "Why Participate" — asymmetric, no boxy tiles ---------- */

const reasons = [
  {
    n: "01",
    kanji: "創",
    title: "Build real projects",
    body: "Beyond tutorials. Real-world problems, working prototypes, and meaningful work that belongs in your portfolio.",
    img: coder,
    tilt: "-rotate-2",
  },
  {
    n: "02",
    kanji: "縁",
    title: "Network with peers",
    body: "Hundreds of like-minded young creators, developers, and designers from across India. Some of your best collaborators are out there.",
    img: bonfire,
    tilt: "rotate-3",
  },
  {
    n: "03",
    kanji: "翔",
    title: "Compete in Japan",
    body: "Top 5 teams fly to Japan with everything sponsored — flights, accommodation, meals. A global stage and a new culture, on us.",
    img: pagoda,
    tilt: "-rotate-1",
  },
  {
    n: "04",
    kanji: "龍",
    title: "Internship offers",
    body: "Top performers get fast-tracked into internships at partner companies — startups to established firms. The koi becomes a dragon.",
    img: koi,
    tilt: "rotate-2",
  },
  {
    n: "05",
    kanji: "師",
    title: "Learn from mentors",
    body: "Real industry mentors — developers, founders, product folks — guiding your project across all three rounds.",
    img: sensei,
    tilt: "-rotate-2",
  },
  {
    n: "06",
    kanji: "発",
    title: "Launch early",
    body: "Whether you're 15 or 25, FAR AWAY is a platform to prove yourself and get ahead of the curve.",
    img: rocket,
    tilt: "rotate-1",
  },
];

function HomePage() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroFuji}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/30 via-paper/0 to-paper" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-14 md:pt-20 pb-32 md:pb-48">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-7 animate-ink">
                <span className="ink-stamp">遠 · Far Away · 2026</span>
                <span className="text-xs uppercase tracking-[0.18em] text-foreground/70 bg-paper/80 backdrop-blur px-3 py-1.5 rounded-full">
                  Ages 15–25 · All India
                </span>
              </div>

              <h1 className="display-mega text-[18vw] md:text-[11rem] lg:text-[13rem] text-foreground animate-ink">
                FAR<br />
                <span className="text-shimmer">AWAY</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg md:text-xl text-foreground/80 leading-relaxed animate-ink">
                The international hackathon journey for ages 15–25.
                <br />
                <em className="display-script text-sakura-deep">Your screen, Delhi, then Japan.</em>
              </p>

              {/* Japan prize badge */}
              <div className="mt-5 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-vermilion/10 ring-1 ring-vermilion/40 animate-ink">
                <span className="text-lg" aria-hidden>✈️</span>
                <span className="font-display font-bold text-vermilion text-sm tracking-wide">Top 5 teams fly to Japan — FREE</span>
                <span className="text-lg" aria-hidden>🇯🇵</span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 animate-ink">
                <a
                  href="https://unstop.com/p/far-away-zuup-1677472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-primary-foreground font-semibold text-base shadow-[var(--shadow-bloom)] hover:scale-105 transition"
                >
                  Register Free on
                  <img src={unstopWhite} alt="Unstop" width={80} height={22} className="h-5 w-auto" />
                  <span aria-hidden className="text-lg group-hover:translate-x-1 transition">→</span>
                </a>
                <Link
                  to="/rounds"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-paper/80 backdrop-blur ring-1 ring-border text-foreground font-medium hover:bg-paper transition"
                >
                  See the Journey
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 hidden md:flex flex-col items-end gap-3 text-right">
              <div className="paper-card px-5 py-4 bg-paper/85 backdrop-blur relative overflow-hidden">
                <span aria-hidden className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-vermilion/15 animate-ping" />
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Registration</div>
                <div className="font-display text-2xl font-bold text-shimmer">Always Free</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-vermilion mt-0.5">完全無料 · No catch</div>
              </div>
              <img src={planes} alt="" aria-hidden width={400} height={400} className="w-72 animate-float" />
            </div>
          </div>
        </div>

        {/* Stat ribbon */}
        <div className="relative -mt-16 md:-mt-24 mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { img: torii, num: "3", label: "Rounds of competition", alt: "Three torii gates" },
              { img: planes, num: "Top 5", label: "Teams fly to Japan, fully sponsored", alt: "Paper planes over Mount Fuji" },
              { img: figures, num: "15–25", label: "Ages welcome", alt: "Two figures under cherry blossoms" },
              { img: lanterns, num: "FREE", label: "Forever. No fees, ever.", alt: "Japanese paper lanterns" },
            ].map((s) => (
              <div key={s.label} className="paper-card p-5 bg-card/95 backdrop-blur relative overflow-hidden">
                <img src={s.img} alt={s.alt} loading="lazy" width={400} height={400} className="absolute -right-4 -top-4 w-28 h-28 object-contain opacity-90" />
                <div className="font-display text-3xl font-extrabold text-foreground relative">{s.num}</div>
                <div className="text-xs text-muted-foreground mt-1 relative max-w-[60%]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-5 md:px-8 py-24 md:py-32 text-center">
        <p className="display-script text-2xl md:text-3xl text-foreground/80 leading-relaxed">
          FAR AWAY is India's biggest international youth hackathon for 2026, organized by{" "}
          <strong className="not-italic text-sakura-deep">Zuup</strong>.
          Open to students and young creators aged 15–25. The top 5 teams win a fully sponsored trip to Japan.
          Registration is <strong className="not-italic text-vermilion">always free</strong> — no hidden fees, ever.
        </p>
      </section>

      {/* ABOUT preview */}
      <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={cloud} alt="" aria-hidden width={500} height={300} className="absolute -top-8 -left-6 w-72 opacity-70" />
            <div className="relative">
              <span className="ink-stamp">About</span>
              <h2 className="display-mega text-5xl md:text-6xl mt-4">
                What is <br /><span className="text-sakura-deep">FAR AWAY?</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed">
                FAR AWAY is an international hackathon for youth aged 15–25, organized by{" "}
                <strong>Zuup</strong>.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                It is not just a hackathon. It's a journey from your home screen to a fully-sponsored
                grand finale in Japan for the top 5 teams. Flights, hotel, meals — covered. You just
                have to build something worth flying for.
              </p>
              <Link to="/about" className="mt-6 inline-block text-sakura-deep font-semibold hover:underline">
                Read the full story →
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sakura-light to-sakura/30 rounded-3xl rotate-2" aria-hidden />
            <img src={coder} alt="Young coder in a kimono with laptop" loading="lazy" width={1024} height={1024} className="relative w-full max-w-md mx-auto" />
            <p className="text-center text-xs italic text-muted-foreground mt-3">
              Real builders. Real chaos. Real results.
            </p>
          </div>
        </div>
      </section>

      {/* WHY PARTICIPATE — editorial asymmetric layout */}
      <section className="relative py-24 overflow-hidden">
        <img src={branch} alt="" aria-hidden width={1024} height={512} className="pointer-events-none absolute -top-10 right-0 w-[500px] opacity-50 -rotate-12" />
        <img src={crane} alt="" aria-hidden width={512} height={512} className="pointer-events-none absolute top-32 left-6 w-24 opacity-80 animate-float" />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeader
            eyebrow="Why Participate"
            title={<>Six reasons. One <em className="display-script not-italic text-sakura-deep">far away</em> goal.</>}
            subtitle="Not just a competition. The kind of thing you'll still be talking about years later."
          />

          <ol className="mt-20 relative">
            {/* Center vertical ink line for desktop */}
            <span aria-hidden className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-vermilion/40 to-transparent" />

            {reasons.map((r, i) => {
              const left = i % 2 === 0;
              return (
                <li key={r.n} className="relative md:grid md:grid-cols-2 md:gap-16 mb-20 last:mb-0 group">
                  {/* Marker dot on the line */}
                  <span aria-hidden className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 h-3 w-3 rounded-full bg-vermilion ring-4 ring-paper z-10" />

                  {/* Image side */}
                  <div className={`relative ${left ? "md:order-1" : "md:order-2"} mb-6 md:mb-0`}>
                    <div className={`relative inline-block ${r.tilt} transition-transform duration-700 group-hover:rotate-0`}>
                      {/* Hand-stamped frame with kanji */}
                      <span className="absolute -top-4 -left-4 z-20 grid place-items-center h-14 w-14 rounded-full bg-vermilion text-primary-foreground font-display text-2xl font-bold shadow-[var(--shadow-bloom)]">
                        {r.kanji}
                      </span>
                      <div className="relative h-64 md:h-72 w-full md:w-[420px] bg-gradient-to-br from-sakura-light to-sakura/20 rounded-2xl overflow-hidden ring-1 ring-border">
                        <img src={r.img} alt={r.title} loading="lazy" width={1024} height={1024} className="absolute inset-0 m-auto h-full w-full object-contain p-6" />
                      </div>
                      <div className="absolute -bottom-3 -right-3 ink-stamp bg-paper">{r.n}</div>
                    </div>
                  </div>

                  {/* Text side */}
                  <div className={`flex flex-col justify-center ${left ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8 md:text-right md:items-end"}`}>
                    <div className="text-xs uppercase tracking-[0.22em] text-vermilion font-semibold">Reason {r.n}</div>
                    <h3 className="display-mega text-3xl md:text-5xl mt-2 leading-[1.05]">{r.title}</h3>
                    <p className={`mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md ${left ? "" : "md:ml-auto"}`}>
                      {r.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="mt-8 text-center text-muted-foreground">
            All of this starts with one registration.{" "}
            <a href="https://unstop.com/p/far-away-zuup-1677472" target="_blank" rel="noopener noreferrer" className="text-sakura-deep font-semibold hover:underline">
              Sign up free on Unstop →
            </a>
          </p>
        </div>
      </section>

      <div className="torii-divider max-w-3xl mx-auto" />

      {/* JOURNEY — dynamic map */}
      <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-24">
        <SectionHeader
          eyebrow="The Journey"
          title={<>Three Rounds. <em className="display-script not-italic text-sakura-deep">One Wild Ride.</em></>}
          subtitle="From your screen, across Delhi, all the way to Tokyo. Watch the plane fly the path."
        />

        <div className="mt-12">
          <JourneyMap />
        </div>

        <div className="mt-10 text-center">
          <Link to="/rounds" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-paper ring-1 ring-border text-foreground font-medium hover:bg-sakura-light transition">
            See full round details →
          </Link>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-24">
        <SectionHeader
          eyebrow="Sponsors & Partners"
          title={<>Powered by <span className="text-sakura-deep">good people</span></>}
          subtitle="We are onboarding sponsors for FAR AWAY 2026. Announcements coming soon."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="paper-card p-8 text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Organized by</div>
            <img src={zuupLogo} alt="Zuup logo" width={96} height={96} className="h-24 w-24 mx-auto rounded-2xl ring-1 ring-border" />
            <div className="font-display text-3xl font-extrabold mt-4">Zuup</div>
            <div className="text-sm text-muted-foreground">Building the future of youth tech events</div>
          </div>
          <div className="paper-card p-8 text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Platform Partner</div>
            <a href="https://unstop.com" target="_blank" rel="noopener noreferrer" className="block">
              <img src={unstop} alt="Unstop — official platform partner" width={220} height={64} className="h-16 w-auto mx-auto" />
            </a>
            <div className="font-display text-lg font-bold mt-4">Unstop</div>
            <div className="text-sm text-muted-foreground">Registration & dashboard partner</div>
          </div>
        </div>

        <div className="mt-10 paper-card p-8 max-w-3xl mx-auto bg-gradient-to-br from-foreground to-foreground/90 text-paper">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <div className="text-xs uppercase tracking-widest text-paper/50 mb-1">💬 Community</div>
              <h3 className="font-display text-2xl font-bold">Join us on Slack</h3>
              <p className="mt-2 text-paper/70 text-sm">
                Real-time updates, team-finding, and direct access to organisers. 400+ builders already inside.
              </p>
            </div>
            <a
              href="https://join.slack.com/t/zuupgroup/shared_invite/zt-3x4ni7dch-pZrIMWrngGrv_3I6nlkGdQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none inline-flex items-center gap-2 px-6 py-3 rounded-full bg-paper text-foreground font-bold text-sm hover:bg-sakura-light hover:scale-105 transition shadow-lg"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
              </svg>
              Join Slack →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-24">
        <SectionHeader
          eyebrow="Got Questions?"
          title={<>FAR AWAY <em className="display-script not-italic text-sakura-deep">FAQ</em></>}
          subtitle="Eligibility, travel, costs, mentors — eleven honest answers covering everything you need to know."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            { kanji: "誰", q: "Who can participate?", a: "Anyone aged 15–25 currently residing in India. No coding experience required to register." },
            { kanji: "¥",  q: "How much does it cost?", a: "Completely free — forever. No fees, no premium tier. Register on our platform partner, Unstop." },
            { kanji: "翔", q: "Are Japan expenses covered?", a: "Yes — flights, hotel, and meals for the top 5 teams are fully sponsored by FAR AWAY." },
            { kanji: "組", q: "Solo or team?", a: "Register individually now, then form or join teams via the Unstop dashboard once it goes live." },
          ].map((item) => (
            <div key={item.q} className="paper-card p-5 flex items-start gap-4 hover:shadow-[var(--shadow-bloom)] transition">
              <span className="flex-none grid place-items-center h-11 w-11 rounded-full bg-sakura-light text-sakura-deep font-display font-bold text-base">
                {item.kanji}
              </span>
              <div>
                <div className="font-display font-bold text-sm md:text-base leading-snug">{item.q}</div>
                <div className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.a}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-primary-foreground font-semibold hover:scale-105 transition shadow-[var(--shadow-bloom)]"
          >
            View all FAQs →
          </Link>
        </div>
      </section>

      <div className="torii-divider max-w-3xl mx-auto" />

      {/* CTA */}
      <section className="relative overflow-hidden mt-12">
        <img src={branch} alt="" aria-hidden width={1024} height={512} className="absolute -top-10 -left-20 w-[700px] opacity-60" />
        <img src={branch} alt="" aria-hidden width={1024} height={512} className="absolute -bottom-10 -right-20 w-[700px] opacity-60 rotate-180" />
        <img src={wave} alt="" aria-hidden width={1024} height={512} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] opacity-20" />
        <img src={sun} alt="" aria-hidden width={512} height={512} className="absolute top-8 right-8 w-32 opacity-40" />
        <div className="relative mx-auto max-w-4xl px-5 md:px-8 py-24 text-center">
          <span className="ink-stamp">Ready to go</span>
          <h2 className="display-mega text-5xl md:text-7xl mt-4">
            FAR <span className="text-shimmer">AWAY?</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            Registration is <strong className="text-vermilion">always free</strong> on our platform partner Unstop.
            Sponsors and Delhi travel support announced soon.
          </p>
          <a
            href="https://unstop.com/p/far-away-zuup-1677472"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-primary-foreground font-bold text-lg shadow-[var(--shadow-bloom)] hover:scale-105 transition"
          >
            Register on Unstop
            <img src={unstopWhite} alt="" width={80} height={22} className="h-5 w-auto" />
            →
          </a>
        </div>
      </section>
    </div>
  );
}
