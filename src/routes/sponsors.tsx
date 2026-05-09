import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/Section";
import zuupLogo from "@/assets/zuup-logo.webp";
import unstopLogo from "@/assets/unstop-logo-white.webp";
import branch from "@/assets/branch.webp";
import {
  Globe,
  Cpu,
  Terminal,
  Award,
  Target,
  Zap,
  Camera,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Users,
  Minus,
  Download,
} from "lucide-react";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "FAR AWAY 2026 — Sponsorship Prospectus" },
      {
        name: "description",
        content:
          "Partner with India's biggest international youth hackathon. The next generation of builders is here.",
      },
    ],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {

  return (
    <div className="relative print:bg-white print:text-black">
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            background: white !important;
          }
          header, footer, nav {
            display: none !important;
          }
          #pdf-download-btn {
            display: none !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          section {
            padding-left: 1.8cm !important;
            padding-right: 1.8cm !important;
            padding-top: 1.2cm !important;
            padding-bottom: 1.2cm !important;
            max-width: 100% !important;
          }
          .paper-card {
            border: 1px solid #e2e8f0 !important;
            box-shadow: none !important;
            page-break-inside: avoid;
            break-inside: avoid;
          }
          tr {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          .torii-divider {
            display: none !important;
          }
          table {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          .grid {
            page-break-inside: avoid;
          }
        }
      `}</style>

      {/* BACKGROUND DECORATIONS */}
      <img
        src={branch}
        alt=""
        aria-hidden
        width={1024}
        height={512}
        className="print:hidden pointer-events-none absolute top-0 right-0 w-[500px] opacity-40 -rotate-12"
      />
      <img
        src={branch}
        alt=""
        aria-hidden
        width={1024}
        height={512}
        className="print:hidden pointer-events-none absolute top-1/3 left-0 w-[400px] opacity-30 rotate-180 -scale-x-100"
      />

      {/* HERO SECTION */}
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 pt-20 md:pt-32 pb-20">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <img src={zuupLogo} alt="Zuup" className="w-10 h-10 rounded-lg shadow-sm" />
            <div>
              <div className="font-display font-bold text-foreground leading-none">Zuup / FAR AWAY</div>
              <div className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground mt-1">A Zylon Labs Initiative</div>
            </div>
          </div>
          <span className="text-xs uppercase tracking-[0.18em] text-sakura-deep bg-sakura-light px-3 py-1 rounded-full font-bold">
            Sponsorship Prospectus · 2026
          </span>

          {/* PDF DOWNLOAD BUTTON */}
          <a
            id="pdf-download-btn"
            href="/Sponsorship%20Pitch%20Deck.pdf"
            download="FAR AWAY 2026 — Sponsorship Pitch Deck.pdf"
            className="ml-auto flex items-center gap-2 px-5 py-2 rounded-full bg-foreground text-paper text-sm font-bold hover:bg-sakura-deep transition shadow-md hover:shadow-[var(--shadow-bloom)] hover:scale-105"
          >
            <Download size={15} />
            Download Pitch Deck
          </a>
        </div>

        <h1 className="display-mega text-[14vw] md:text-[8rem] lg:text-[10rem] text-foreground leading-[0.85] animate-ink">
          BUILD HERE.<br />
          <span className="text-sakura-deep">FLY FAR AWAY.</span>
        </h1>

        <div className="mt-12 paper-card border-l-4 border-l-sakura-deep p-8 md:p-10 bg-gradient-to-r from-sakura-light/50 to-transparent max-w-4xl">
          <p className="font-display text-xl md:text-3xl text-foreground/90 italic leading-snug">
            "The next generation of builders is already here. FAR AWAY just gives them somewhere bigger to go."
          </p>
          <p className="mt-4 text-sm font-bold text-muted-foreground uppercase tracking-[0.1em]">— Jagrit Sachdev, Founder, Zuup</p>
        </div>
      </section>

      {/* CREDIBILITY & REACH */}
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 py-10 bg-paper/50">
        <SectionHeader
          eyebrow="The Numbers"
          title={<>Traction & <span className="text-sakura-deep">Scale</span></>}
          subtitle="Launched organically on April 25. Reached 10+ countries in weeks without paid marketing."
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Registrations", val: "7,100+" },
            { label: "Countries", val: "10+" },
            { label: "Teams", val: "3,600+" },
            { label: "Ad Spend", val: "₹0" },
            { label: "Slack Members", val: "400+" },
            { label: "Daily Visits", val: "100K+" },
          ].map((m) => (
            <div key={m.label} className="paper-card p-5 text-center">
              <div className="font-display text-3xl font-extrabold text-foreground">{m.val}</div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 paper-card p-8 grid md:grid-cols-3 gap-6 items-center">
          <div>
            <h4 className="font-display text-xl font-bold mb-2">Existing Partners</h4>
            <div className="flex gap-4 opacity-70 grayscale">
              <img src={unstopLogo} alt="Unstop" className="h-6 object-contain invert dark:invert-0" />
            </div>
          </div>
          <div className="md:col-span-2 flex items-center gap-4 border-l border-border pl-6">
            <CheckCircle2 className="text-sakura-deep flex-none" size={32} />
            <div>
              <h5 className="font-bold">Verified Execution</h5>
              <p className="text-sm text-muted-foreground mt-1">
                SME Business of the Year 2025. Shark Tank India Season 5 Phase 1. Scaled global Cloudflare infrastructure. Verifiable credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 py-20">
        <SectionHeader
          eyebrow="Why We Are Different"
          title={<>Rethinking Traditional <em className="display-script not-italic text-sakura-deep">Limitations</em></>}
          subtitle="Most student events reward experience. FAR AWAY rewards ambition."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            { icon: <Cpu size={32} />, title: "Modern AI Workflows", body: "FAR AWAY embraces modern AI-assisted building workflows. Use LLMs, tools, and agents. Build like it's 2026." },
            { icon: <Globe size={32} />, title: "Global Competition", body: "10+ countries registered in the first 3 weeks. You are competing against the best young builders worldwide." },
            { icon: <Terminal size={32} />, title: "Industry-Relevant Skills", body: "We run PCB Design & AI Prototyping Workshops pre-hackathon. Participants arrive knowing what to do." },
            { icon: <Award size={32} />, title: "The prize is a trip", body: "Not a voucher. Not a trophy. The top 5 teams fly to Japan. Flights, hotel, meals — fully sponsored." },
          ].map((item) => (
            <div key={item.title} className="paper-card p-8 hover:-translate-y-1 transition duration-300">
              <div className="text-sakura-deep mb-5 bg-sakura-light/50 w-16 h-16 rounded-full flex items-center justify-center">{item.icon}</div>
              <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEDIA STRATEGY */}
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 py-10">
        <div className="paper-card p-10 bg-gradient-to-br from-paper to-sakura-light/30">
          <h3 className="font-display text-3xl font-bold mb-6">Media & Content Strategy</h3>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            We don't just host an event; we document a movement. Partnering with FAR AWAY guarantees high-visibility
            placement across platforms reaching an aspirational youth audience.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Camera />, title: "Vlog Coverage", desc: "Japan finale mini-documentary" },
              { icon: <TrendingUp />, title: "Creator Collabs", desc: "60K+ views on single organic reel" },
              { icon: <Zap />, title: "Livestreams", desc: "Delhi 24-hour hackathon live" },
              { icon: <Users />, title: "Founder Content", desc: "Building in public updates" },
            ].map((m) => (
              <div key={m.title}>
                <div className="text-vermilion mb-2">{m.icon}</div>
                <h5 className="font-bold text-sm">{m.title}</h5>
                <p className="text-xs text-muted-foreground mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="torii-divider max-w-3xl mx-auto opacity-50 my-10" />

      {/* EVENT STRUCTURE */}
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 py-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <SectionHeader
              eyebrow="Timeline"
              title={<>Three Rounds.<br /><span className="text-sakura-deep">Two Countries.</span></>}
              subtitle="A physically multi-location hackathon."
            />
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-4">
              {/* ROUND 01 — ONLINE */}
              <div className="paper-card p-6 flex flex-col md:flex-row gap-6 relative items-center">
                <div className="flex-none w-24 text-center md:text-left">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Round 01</div>
                  <h4 className="font-display text-2xl font-extrabold text-foreground">ONLINE</h4>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1 flex items-center gap-2">
                    <MapPin size={14} className="text-muted-foreground" /> 🌐 From Anywhere
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Build and submit. All registered participants. 7 days.
                  </p>
                </div>
              </div>

              {/* ROUND 02 — DELHI */}
              <div className="paper-card p-6 flex flex-col md:flex-row gap-6 relative items-center">
                <div className="flex-none w-24 text-center md:text-left">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Round 02</div>
                  <h4 className="font-display text-2xl font-extrabold text-foreground">DELHI</h4>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1 flex items-center gap-2">
                    <MapPin size={14} className="text-muted-foreground" /> 🇮🇳 New Delhi, India
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Top 100 teams. In-person 24-hour hackathon. Selected travel assistance may be provided based on
                    sponsorship availability.
                  </p>
                </div>
              </div>

              {/* ROUND 03 — JAPAN — premium hero card */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-sakura-deep/50 shadow-[var(--shadow-bloom)]">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-sakura-deep/20 via-sakura-light/40 to-vermilion/10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,74,106,0.18)_0%,transparent_60%)]" />
                {/* Subtle pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c84a6a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                />

                <div className="relative z-10 p-6 flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-none w-24 text-center md:text-left">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-sakura-deep/70 mb-1">Round 03</div>
                    <h4 className="font-display text-2xl font-extrabold text-sakura-deep">JAPAN</h4>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1 flex items-center gap-2">
                      <MapPin size={14} className="text-sakura-deep/70" /> 🇯🇵 Grand Finale
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Top 5 teams. 5 days in Japan. Factory visits, cultural exploration, final build day.{" "}
                      <em className="not-italic text-sakura-deep/70 text-xs">
                        *University and venue partnerships currently in discussion.*
                      </em>
                    </p>
                  </div>
                  <div className="flex-none">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-sakura-deep text-white text-xs font-bold tracking-wide shadow-md">
                      ✈ Fully Sponsored
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS COMPARISON */}
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 py-20" style={{ pageBreakBefore: "always" }}>
        <SectionHeader
          eyebrow="Partnership Tiers"
          title={<>Sponsor <span className="text-sakura-deep">Options</span></>}
          subtitle="Cash and strategic in-kind partnerships accepted. Compare our tier features below."
        />

        <div className="mt-12 overflow-x-auto pb-6 print:overflow-visible">
          <div className="min-w-[800px] print:min-w-full">
            <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-sm border border-border">
              <thead>
                <tr>
                  <th className="w-[34%] p-6 border-b border-border align-bottom bg-paper">
                    <div className="text-xl font-display font-bold text-foreground">Partnership Features</div>
                  </th>
                  <th className="w-[22%] p-6 border-b border-border bg-gradient-to-b from-sakura-light/50 to-paper relative border-x border-border/50">
                    <div className="absolute top-0 inset-x-0 h-1 bg-sakura-deep" />
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-sakura-deep mb-2">★ Flagship</div>
                    <h3 className="font-display text-2xl font-extrabold text-foreground mb-1">Title</h3>
                    <div className="text-sm font-bold text-muted-foreground">₹15–30L</div>
                  </th>
                  <th className="w-[22%] p-6 border-b border-border bg-paper border-r border-border/30">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Core</div>
                    <h3 className="font-display text-2xl font-extrabold text-foreground mb-1">Gold</h3>
                    <div className="text-sm font-bold text-muted-foreground">₹5–15L</div>
                  </th>
                  <th className="w-[22%] p-6 border-b border-border bg-paper">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Community</div>
                    <h3 className="font-display text-2xl font-extrabold text-foreground mb-1">Community</h3>
                    <div className="text-sm font-bold text-muted-foreground">₹50K–5L</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-paper">
                {[
                  {
                    feature: `"Powered by" Branding`,
                    desc: "Exclusive flagship placement across all media & events",
                    title: true,
                    gold: false,
                    comm: false,
                  },
                  {
                    feature: "Stage Branding (Japan Finale)",
                    desc: "Logo visibility at the grand finale in Tokyo",
                    title: true,
                    gold: false,
                    comm: false,
                  },
                  {
                    feature: "Custom Challenge Track",
                    desc: "Dedicated prize track using your API / product",
                    title: true,
                    gold: "Optional",
                    comm: false,
                  },
                  {
                    feature: "Stage Branding (Delhi)",
                    desc: "Logo visibility at the 24-hour in-person hackathon",
                    title: true,
                    gold: true,
                    comm: false,
                  },
                  {
                    feature: "Judge / Mentor Slot",
                    desc: "Direct interaction with participants on demo day",
                    title: "2 Slots",
                    gold: "1 Slot",
                    comm: false,
                  },
                  {
                    feature: "Recruitment Access",
                    desc: "Access to top participant resumes & contact info",
                    title: "All Finalists",
                    gold: "Top 100",
                    comm: false,
                  },
                  {
                    feature: "Dedicated Social Post",
                    desc: "Standalone announcement post highlighting the partnership",
                    title: true,
                    gold: true,
                    comm: false,
                  },
                  {
                    feature: "Website & Email Logo",
                    desc: "Placement on sponsors section and 7,100+ participant mailers",
                    title: "Premium",
                    gold: "Standard",
                    comm: "Small",
                  },
                  {
                    feature: "Slack Community Access",
                    desc: "Interact directly with 400+ active builders",
                    title: true,
                    gold: true,
                    comm: true,
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors group">
                    <td className="p-5 md:p-6">
                      <div className="font-bold text-foreground text-sm">{row.feature}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{row.desc}</div>
                    </td>
                    <td className="p-5 md:p-6 text-center border-x border-border/50 bg-sakura-light/5 group-hover:bg-sakura-light/15 transition-colors">
                      {typeof row.title === "boolean" ? (
                        row.title ? (
                          <CheckCircle2 className="mx-auto text-sakura-deep" size={20} />
                        ) : (
                          <Minus className="mx-auto text-muted-foreground/30" size={20} />
                        )
                      ) : (
                        <span className="font-bold text-sakura-deep text-sm">{row.title}</span>
                      )}
                    </td>
                    <td className="p-5 md:p-6 text-center border-r border-border/30">
                      {typeof row.gold === "boolean" ? (
                        row.gold ? (
                          <CheckCircle2 className="mx-auto text-foreground" size={20} />
                        ) : (
                          <Minus className="mx-auto text-muted-foreground/30" size={20} />
                        )
                      ) : (
                        <span className="font-bold text-foreground text-sm">{row.gold}</span>
                      )}
                    </td>
                    <td className="p-5 md:p-6 text-center">
                      {typeof row.comm === "boolean" ? (
                        row.comm ? (
                          <CheckCircle2 className="mx-auto text-foreground" size={20} />
                        ) : (
                          <Minus className="mx-auto text-muted-foreground/30" size={20} />
                        )
                      ) : (
                        <span className="font-bold text-foreground text-sm">{row.comm}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 paper-card p-6 border-l-4 border-l-sakura-deep bg-sakura-light/10 text-sm text-muted-foreground">
          <strong className="text-foreground">Requirements & Details:</strong> Title Sponsors are expected to provide
          financial contribution toward flights, the premium Japan venue, and operations — or strategic in-kind
          partnerships (travel, tech infrastructure, credits).{" "}
          <a href="mailto:sponsors@zuup.dev" className="text-sakura-deep hover:underline font-semibold">
            Let's build a custom package →
          </a>
        </div>
      </section>

      {/* CLOSING / CONTACT */}
      <section className="relative mx-auto max-w-4xl px-5 md:px-8 py-10 mb-20">
        <div className="paper-card bg-foreground text-paper p-10 md:p-16 rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sakura-deep rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-vermilion rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/3" />

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="display-mega text-5xl md:text-6xl leading-none text-paper mb-6">
                LET'S<br />
                <span className="text-sakura-deep">BUILD</span>
                <br />THIS.
              </h2>
              <p className="text-paper/80 font-medium leading-relaxed mb-4 text-sm">
                Built by Zuup — empowering the next generation of builders. Reach an aspirational youth audience before
                they launch their first startups.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-6 md:pl-8 border-l border-paper/10">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-paper/40 mb-1">Partnerships</div>
                <div className="font-display text-xl font-bold">Zuup Team</div>
                <a href="mailto:sponsors@zuup.dev" className="text-sakura-deep hover:underline mt-1 inline-block">
                  sponsors@zuup.dev
                </a>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-paper/40 mb-1">Community Updates</div>
                <div className="font-display text-base font-bold">Slack · 400+ Members</div>
                <a
                  href="https://join.slack.com/t/zuupgroup/shared_invite/zt-3x4ni7dch-pZrIMWrngGrv_3I6nlkGdQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sakura-deep hover:underline mt-1 inline-block text-sm"
                >
                  join.slack.com/t/zuupgroup →
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6 uppercase tracking-wider font-bold">
          Note: FAR AWAY is an independent initiative and is not affiliated with Parul University.
        </p>
      </section>
    </div>
  );
}
