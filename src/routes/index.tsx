import { createFileRoute, Link } from "@tanstack/react-router";
import heroFuji from "@/assets/hero-fuji.jpg";
import torii from "@/assets/torii-three.png";
import planes from "@/assets/paper-planes-fuji.png";
import figures from "@/assets/sakura-figures.png";
import lanterns from "@/assets/lanterns.png";
import koi from "@/assets/koi-dragon.png";
import sensei from "@/assets/sensei-student.png";
import rocket from "@/assets/paper-rocket.png";
import coder from "@/assets/coder-kimono.png";
import bonfire from "@/assets/bonfire-friends.png";
import pagoda from "@/assets/pagoda-waves.png";
import tokyo from "@/assets/tokyo-poster.png";
import unstop from "@/assets/unstop-logo.svg";
import zuupLogo from "@/assets/zuup-logo.png";
import cloud from "@/assets/cloud.png";
import branch from "@/assets/branch.png";
import { SectionHeader } from "@/components/Section";
import { GraphicCard } from "@/components/GraphicCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FAR AWAY 2026 — India's International Youth Hackathon · Win a Trip to Japan" },
      {
        name: "description",
        content:
          "Build, compete, fly. FAR AWAY 2026 is India's biggest international hackathon for ages 15–25. Top 5 teams fly to Japan — flights, hotel & meals fully sponsored. Free registration via Unstop until 30 April 2026.",
      },
      { property: "og:title", content: "FAR AWAY 2026 — Win a Fully Sponsored Trip to Japan" },
      {
        property: "og:description",
        content:
          "From your screen → Delhi → Japan. India's biggest youth hackathon for ages 15–25. Free registration via Unstop until 30 April 2026.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:title", content: "FAR AWAY 2026 — Win a Trip to Japan" },
      {
        name: "twitter:description",
        content:
          "India's biggest youth hackathon for ages 15–25. Top 5 teams fly to Japan, fully sponsored.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(${heroFuji})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/30 via-paper/0 to-paper" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-24 pb-32 md:pb-48">
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

              <div className="mt-8 flex flex-wrap items-center gap-4 animate-ink">
                <a
                  href="https://unstop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-primary-foreground font-semibold text-base shadow-[var(--shadow-bloom)] hover:scale-105 transition"
                >
                  Register Free on
                  <img src={unstop} alt="Unstop" width={70} height={20} className="h-5 w-auto bg-white/95 px-1.5 py-0.5 rounded" />
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
              <div className="paper-card px-4 py-3 bg-paper/85 backdrop-blur">
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Free until</div>
                <div className="font-display text-2xl font-bold text-sakura-deep">30 Apr 2026</div>
              </div>
              <img src={planes} alt="" aria-hidden width={400} height={400} className="w-72 animate-float" />
            </div>
          </div>
        </div>

        {/* Stat ribbon */}
        <div className="relative -mt-16 md:-mt-24 mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { img: torii, num: "3", label: "Rounds of competition", alt: "Three torii gates representing three rounds" },
              { img: planes, num: "Top 5", label: "Teams fly to Japan, fully sponsored", alt: "Five paper planes over Mount Fuji" },
              { img: figures, num: "15–25", label: "Ages welcome", alt: "Two figures under cherry blossoms" },
              { img: lanterns, num: "FREE", label: "Early bird till 30 Apr", alt: "Japanese paper lanterns" },
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
          <strong className="not-italic text-sakura-deep">Zuup</strong> (a Zylon Labs initiative).
          Open to students and young creators aged 15–25. The top 5 teams win a fully sponsored trip to Japan.
          Registration is <strong className="not-italic text-vermilion">free</strong> until 30 April 2026.
        </p>
      </section>

      {/* ABOUT preview */}
      <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={cloud} alt="" aria-hidden width={500} height={300} className="absolute -top-8 -left-6 w-72 opacity-70" />
            <div className="relative">
              <span className="ink-stamp">About the Hackathon</span>
              <h2 className="display-mega text-5xl md:text-6xl mt-4">
                What is <br /><span className="text-sakura-deep">FAR AWAY?</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed">
                FAR AWAY is an international hackathon for youth aged 15–25, organized by{" "}
                <strong>Zuup</strong>, a teen-led NPO by Zylon Labs.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                It is not just a hackathon. It is a journey from your home screen, all the way to a
                fully-sponsored grand finale in Japan for the top 5 teams. Flights, hotel, meals — covered.
                You just have to build something worth flying for.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Whether you are 15 and just wrote your first function, or 25 and shipping side projects —
                there is a seat here for you.
              </p>
              <Link to="/about" className="mt-6 inline-block text-sakura-deep font-semibold hover:underline">
                Read the full story →
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sakura-light to-sakura/30 rounded-3xl rotate-2" aria-hidden />
            <img src={coder} alt="Young coder in a kimono with laptop, surrounded by cherry blossoms" loading="lazy" width={1024} height={1024} className="relative w-full max-w-md mx-auto" />
            <p className="text-center text-xs italic text-muted-foreground mt-3">
              Real builders. Real chaos. Real results.
            </p>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-24">
        <SectionHeader
          eyebrow="Why Join"
          title={<>Why Participate in <span className="text-sakura-deep">FAR AWAY?</span></>}
          subtitle="Not just a competition. The kind of thing you'll still be talking about years later."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GraphicCard image={coder} imageAlt="Coder in kimono with laptop" number="01" title="Build Real Projects">
            Go beyond tutorials. Work on real-world problems, build functioning prototypes, and add meaningful
            work to your portfolio that actually means something.
          </GraphicCard>
          <GraphicCard image={bonfire} imageAlt="Young people around a bonfire under cherry blossoms" number="02" title="Network with Peers" accent="vermilion">
            Meet hundreds of like-minded young creators, developers, and designers from across India.
            Some of your best collaborators are out there.
          </GraphicCard>
          <GraphicCard image={pagoda} imageAlt="Japanese pagoda with Hokusai waves" number="03" title="Compete in Japan" accent="indigo">
            Top 5 teams fly to Japan with all expenses sponsored — flights, accommodation, meals.
            Compete on a global stage and experience a new culture.
          </GraphicCard>
          <GraphicCard image={koi} imageAlt="Koi fish transforming into a dragon" number="04" title="Internship Opportunities" accent="gold">
            Top performers get fast-tracked for internship roles with partner companies, from startups
            to established tech firms. The koi becomes a dragon.
          </GraphicCard>
          <GraphicCard image={sensei} imageAlt="Sensei teaching student under pine tree" number="05" title="Learn from Mentors">
            Actual industry mentors — developers, founders, product folks — available throughout
            the hackathon to guide your project.
          </GraphicCard>
          <GraphicCard image={rocket} imageAlt="Paper rocket launching over Mount Fuji" number="06" title="Launch Your Career Early" accent="vermilion">
            Whether you are 15 or 25, FAR AWAY gives you the platform to prove yourself and get
            ahead of the curve.
          </GraphicCard>
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          All of this starts with one registration.{" "}
          <a href="https://unstop.com" target="_blank" rel="noopener noreferrer" className="text-sakura-deep font-semibold hover:underline">
            Sign up free on Unstop →
          </a>
        </p>
      </section>

      <div className="torii-divider max-w-3xl mx-auto" />

      {/* JOURNEY PEEK */}
      <section className="relative mx-auto max-w-7xl px-5 md:px-8 py-24">
        <SectionHeader
          eyebrow="The Journey"
          title={<>Three Rounds. <br /><em className="display-script not-italic text-sakura-deep">One Wild Ride.</em></>}
          subtitle="Online → Delhi → Japan. The path is clear. Are you on it?"
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { img: coder, num: "01", title: "Online Round", where: "From Your Home", date: "First Week of June 2026", body: "Build and submit your project online. Open to participants across India. No commute needed." },
            { img: figures, num: "02", title: "Delhi Round", where: "New Delhi, India", date: "Mid June 2026", body: "Top teams come to New Delhi for an in-person hackathon. Real energy, real competition." },
            { img: tokyo, num: "03", title: "Grand Finale", where: "Tokyo, Japan", date: "Late June / July 2026", body: "Top 5 teams fly to Japan. Fully sponsored — flights, hotel, meals. Visa details TBC." },
          ].map((r) => (
            <article key={r.num} className="paper-card overflow-hidden group">
              <div className="relative h-52 bg-gradient-to-br from-sakura-light to-sakura/20 overflow-hidden">
                <img src={r.img} alt={r.title} loading="lazy" width={1024} height={1024} className="absolute inset-0 m-auto h-full w-full object-contain p-4 group-hover:scale-105 transition duration-700" />
                <div className="absolute top-3 left-3 ink-stamp">{r.num}</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{r.title}</h3>
                <div className="text-xs uppercase tracking-[0.18em] text-vermilion mt-1">{r.where}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{r.body}</p>
                <div className="mt-4 text-xs font-semibold text-foreground/80">📅 {r.date}</div>
              </div>
            </article>
          ))}
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
            <div className="text-sm text-muted-foreground">A Zylon Labs Initiative</div>
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

        <div className="mt-10 paper-card p-8 max-w-3xl mx-auto text-center bg-gradient-to-br from-sakura-light to-paper">
          <h3 className="font-display text-2xl font-bold">Want to Sponsor FAR AWAY?</h3>
          <p className="mt-2 text-muted-foreground">
            Reach thousands of young tech builders across India. Get your brand in front of the next generation.
          </p>
          <a href="mailto:sponsors@zuup.dev" className="mt-5 inline-block text-sakura-deep font-semibold text-lg hover:underline">
            sponsors@zuup.dev
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden mt-12">
        <img src={branch} alt="" aria-hidden width={1024} height={512} className="absolute -top-10 -left-20 w-[700px] opacity-60" />
        <img src={branch} alt="" aria-hidden width={1024} height={512} className="absolute -bottom-10 -right-20 w-[700px] opacity-60 rotate-180" />
        <div className="relative mx-auto max-w-4xl px-5 md:px-8 py-24 text-center">
          <span className="ink-stamp">Ready to go</span>
          <h2 className="display-mega text-5xl md:text-7xl mt-4">
            FAR <span className="text-shimmer">AWAY?</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            Free registration is open until 30 April 2026 on our platform partner Unstop.
            Sponsors and Delhi travel support announced soon.
          </p>
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-primary-foreground font-bold text-lg shadow-[var(--shadow-bloom)] hover:scale-105 transition"
          >
            Register on Unstop
            <img src={unstop} alt="" width={70} height={20} className="h-5 w-auto bg-white/95 px-1.5 py-0.5 rounded" />
            →
          </a>
        </div>
      </section>
    </div>
  );
}
