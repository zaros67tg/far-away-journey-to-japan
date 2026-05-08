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
  Users
} from "lucide-react";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "FAR AWAY 2026 — Sponsorship Prospectus" },
      {
        name: "description",
        content: "Partner with India's biggest international youth hackathon. The next generation of builders is here.",
      },
    ],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  return (
    <div className="relative">
      {/* BACKGROUND DECORATIONS */}
      <img src={branch} alt="" aria-hidden width={1024} height={512} className="pointer-events-none absolute top-0 right-0 w-[500px] opacity-40 -rotate-12" />
      <img src={branch} alt="" aria-hidden width={1024} height={512} className="pointer-events-none absolute top-1/3 left-0 w-[400px] opacity-30 rotate-180 -scale-x-100" />

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
                <p className="text-sm text-muted-foreground mt-1">SME Business of the Year 2025. Shark Tank India Season 5 Phase 1. Scaled global Cloudflare infrastructure. Verifiable credibility.</p>
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
            { icon: <Cpu size={32}/>, title: "Modern AI Workflows", body: "FAR AWAY embraces modern AI-assisted building workflows. Use LLMs, tools, and agents. Build like it's 2026." },
            { icon: <Globe size={32}/>, title: "Global Competition", body: "10+ countries registered in the first 3 weeks. You are competing against the best young builders worldwide." },
            { icon: <Terminal size={32}/>, title: "Industry-Relevant Skills", body: "We run PCB Design & AI Prototyping Workshops pre-hackathon. Participants arrive knowing what to do." },
            { icon: <Award size={32}/>, title: "The prize is a trip", body: "Not a voucher. Not a trophy. The top 5 teams fly to Japan. Flights, hotel, meals — fully sponsored." },
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
            <p className="text-muted-foreground mb-8 max-w-3xl">We don't just host an event; we document a movement. Partnering with FAR AWAY guarantees high-visibility placement across platforms reaching an aspirational youth audience.</p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <Camera />, title: "Vlog Coverage", desc: "Japan finale mini-documentary" },
                { icon: <TrendingUp />, title: "Creator Collabs", desc: "60K+ views on single organic reel" },
                { icon: <Zap />, title: "Livestreams", desc: "Delhi 24-hour hackathon live" },
                { icon: <Users />, title: "Founder Content", desc: "Building in public updates" },
              ].map(m => (
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
                title={<>Three Rounds.<br/><span className="text-sakura-deep">Two Countries.</span></>}
                subtitle="A physically multi-location hackathon."
              />
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-4">
              {[
                { n: "01", name: "ONLINE", loc: "🌐 From Anywhere", date: "June 2026", detail: "Build and submit. All registered participants. 7 days." },
                { n: "02", name: "DELHI", loc: "🇮🇳 New Delhi, India", date: "June 2026", detail: "Top 100 teams. In-person 24-hour hackathon. Selected travel assistance may be provided based on sponsorship availability." },
                { n: "03", name: "JAPAN", loc: "🇯🇵 Grand Finale", date: "July 2026", detail: "Top 5 teams. 5 days in Japan. Factory visits, cultural exploration, final build day. *University and venue partnerships currently in discussion.*", supreme: true },
              ].map((r) => (
                <div key={r.n} className={`paper-card p-6 flex flex-col md:flex-row gap-6 relative items-center ${r.supreme ? 'border-sakura-deep/30 bg-sakura-light/10' : ''}`}>
                   <div className="flex-none w-24 text-center md:text-left">
                     <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Round {r.n}</div>
                     <h4 className={`font-display text-2xl font-extrabold ${r.supreme ? 'text-sakura-deep' : 'text-foreground'}`}>{r.name}</h4>
                   </div>
                   <div className="flex-1">
                     <div className="text-sm font-semibold mb-1 flex items-center gap-2">
                        <MapPin size={14} className="text-muted-foreground" /> {r.loc}
                     </div>
                     <p className="text-muted-foreground text-sm leading-relaxed">{r.detail}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 py-20">
        <SectionHeader
          eyebrow="Partnership Tiers"
          title={<>Sponsor <span className="text-sakura-deep">Options</span></>}
          subtitle="Cash and strategic in-kind partnerships accepted. Custom packages available."
        />

        <div className="mt-12 grid gap-8">
          {/* TITLE SPONSOR */}
          <div className="paper-card relative overflow-hidden border-2 border-sakura-deep shadow-lg">
             <div className="bg-gradient-to-r from-sakura-light/50 to-transparent p-8 md:p-10 border-b border-border">
               <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
                 <div>
                   <div className="text-xs font-bold uppercase tracking-[0.2em] text-sakura-deep mb-2">★ Flagship · Exclusive</div>
                   <h3 className="font-display text-4xl md:text-5xl font-extrabold leading-none text-foreground">TITLE SPONSOR</h3>
                 </div>
                 <div className="text-left md:text-right">
                   <div className="font-display text-3xl md:text-4xl font-bold">₹15–30L</div>
                 </div>
               </div>
             </div>
             <div className="grid md:grid-cols-2 p-8 md:p-10 gap-10">
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground mb-4">Prominent Branding</h4>
                  <ul className="space-y-3">
                    {[
                      <><strong className="text-foreground">"Powered by [Brand]"</strong> on all communications</>,
                      <><strong className="text-foreground">Logo on every email</strong> to 7,100+ participants</>,
                      <><strong className="text-foreground">Stage branding at Delhi</strong> — high-visibility placement</>,
                      <><strong className="text-foreground">Stage branding at Japan finale</strong></>,
                      <><strong className="text-foreground">Custom challenge track</strong> for your product</>,
                      <><strong className="text-foreground">Recruitment access</strong> to all finalists</>,
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <Target className="text-sakura-deep flex-none mt-0.5" size={16} /> {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground mb-4">Requirements</h4>
                  <ul className="space-y-3">
                    {[
                      "Financial contribution toward flights, premium Japan venue, and operations",
                      "Or strategic in-kind partnerships (travel, tech infrastructure)",
                      "Co-marketing: joint announcement post on launch",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="text-foreground/30 font-bold flex-none mt-0.5">→</span> {item}
                      </li>
                    ))}
                  </ul>
               </div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="paper-card flex flex-col">
               <div className="p-8 border-b border-border">
                 <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Core Sponsor</div>
                 <h3 className="font-display text-3xl font-extrabold mb-2">GOLD PARTNER</h3>
                 <div className="font-display text-2xl font-bold">₹5–15L</div>
               </div>
               <div className="p-8 flex-1">
                 <ul className="space-y-3">
                    {["Logo on website and emails", "Stage branding at Delhi round", "Dedicated sponsor social post", "1 judge/mentor slot at Delhi", "Recruitment access to finalists"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="text-foreground flex-none mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            <div className="paper-card flex flex-col">
               <div className="p-8 border-b border-border">
                 <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Community Sponsor</div>
                 <h3 className="font-display text-3xl font-extrabold mb-2">COMMUNITY</h3>
                 <div className="font-display text-2xl font-bold">₹50K–5L</div>
               </div>
               <div className="p-8 flex-1">
                 <ul className="space-y-3">
                    {["Logo on FAR AWAY website", "Mention in global email campaigns", "1 social media mention", "Certificate branding", "Slack community access"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="text-foreground flex-none mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING / CONTACT */}
      <section className="relative mx-auto max-w-4xl px-5 md:px-8 py-10 mb-20">
        <div className="paper-card bg-foreground text-paper p-10 md:p-16 rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sakura-deep rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3" />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="display-mega text-5xl md:text-6xl leading-none text-paper mb-6">
                LET'S<br/><span className="text-sakura-deep">BUILD</span><br/>THIS.
              </h2>
              <p className="text-paper/80 font-medium leading-relaxed mb-4 text-sm">
                Built by Zuup — empowering the next generation of builders. Reach an aspirational youth audience before they launch their first startups.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-6 md:pl-8 border-l border-paper/10">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-paper/40 mb-1">Partnerships</div>
                <div className="font-display text-xl font-bold">Zuup Team</div>
                <a href="mailto:sponsors@zuup.dev" className="text-sakura-deep hover:underline mt-1 inline-block">sponsors@zuup.dev</a>
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
