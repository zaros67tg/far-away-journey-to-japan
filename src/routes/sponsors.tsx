import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/Section";
import zuupLogo from "@/assets/zuup-logo.webp";
import torii from "@/assets/torii-three.webp";
import branch from "@/assets/branch.webp";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "FAR AWAY 2026 — Sponsorship Prospectus" },
      {
        name: "description",
        content: "Partner with India's biggest international youth hackathon. Top 5 teams fly to Japan.",
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

        <h1 className="display-mega text-[15vw] md:text-[8rem] lg:text-[10rem] text-foreground leading-[0.85] animate-ink">
          RUN <span className="text-sakura-deep">FAR.</span><br />
          WIN JAPAN.
        </h1>
        
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
          The only youth hackathon in India where the top 5 teams fly internationally — fully sponsored. 
          7,100+ registered. Zero paid marketing. This is already happening.
        </p>

        {/* HERO STATS */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl">
          {[
            { num: "7,100+", label: "Registered" },
            { num: "3,600+", label: "Teams" },
            { num: "10+", label: "Countries" },
            { num: "₹0", label: "Paid Marketing" },
          ].map((s) => (
            <div key={s.label} className="paper-card p-5 bg-card/95 backdrop-blur relative overflow-hidden group hover:border-sakura-deep transition">
              <div className="font-display text-4xl font-extrabold text-foreground relative group-hover:text-sakura-deep transition-colors">{s.num}</div>
              <div className="text-xs text-muted-foreground mt-2 relative uppercase tracking-[0.08em] font-bold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="torii-divider max-w-3xl mx-auto opacity-50" />

      {/* THE STORY */}
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 py-20">
        <SectionHeader
          eyebrow="The Story"
          title={<>Why FAR AWAY <em className="display-script not-italic text-sakura-deep">Exists</em></>}
          subtitle="Every major international hackathon has rules that quietly exclude Indian students — no AI, narrow themes, geography restrictions. FAR AWAY was built to burn those rules down."
        />

        <div className="mt-12 paper-card border-l-4 border-l-sakura-deep p-8 md:p-10 bg-gradient-to-r from-sakura-light/50 to-transparent">
          <p className="font-display text-xl md:text-3xl text-foreground/90 italic leading-snug">
            "Why is an American student allowed to go on a free international trip but an Indian kid isn't? We built FAR AWAY to fix that."
          </p>
          <p className="mt-4 text-sm font-bold text-muted-foreground uppercase tracking-[0.1em]">— Jagrit Sachdev, Founder, Zuup · Age 17</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            { icon: "🚫", title: "No AI bans", body: "Every other hackathon says 'no AI.' FAR AWAY says use everything — AI, vibe coding, LLMs, anything. Build like it's 2026 because it is." },
            { icon: "🌍", title: "Actually international", body: "Not 'international' because we say so. International because 10+ countries registered in 3 weeks without us paying a rupee for marketing." },
            { icon: "🎓", title: "Industrial standard", body: "We run PCB design and vibe coding workshops before the competition. Participants arrive actually knowing what they're doing — not just vibing." },
            { icon: "✈️", title: "The prize is a trip", body: "Not ₹10,000 in Amazon vouchers. Not a trophy. The top 5 teams fly to Japan. Flights, hotel, meals — fully sponsored." },
          ].map((item) => (
            <div key={item.title} className="paper-card p-8 hover:-translate-y-1 transition duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENT STRUCTURE */}
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
             <SectionHeader
                eyebrow="Event Structure"
                title={<>Three Rounds.<br/><span className="text-sakura-deep">Two Countries.</span></>}
                subtitle="FAR AWAY is a physically multi-location hackathon — the first of its kind for Indian youth. Online to Delhi to Japan."
              />
              <img src={torii} alt="" className="hidden md:block w-48 mt-12 opacity-80" />
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-6">
              {[
                { n: "01", name: "ONLINE", loc: "🌐 From Anywhere", date: "June Week 1–2, 2026", detail: "Build and submit your project. All registered participants. No restrictions — AI, any tool, any framework. 7 days to build." },
                { n: "02", name: "DELHI", loc: "🇮🇳 New Delhi, India", date: "June 15–20, 2026 (approx)", detail: "Top 100 teams. In-person. 24-hour hackathon. Present final prototypes to judges. Travel support provided.", highlight: true },
                { n: "03", name: "JAPAN", loc: "🇯🇵 Grand Finale", date: "July Week 2, 2026 (approx)", detail: "Top 5 teams. 5 days in Japan. Factory visits, tech spaces, cultural exploration — then one final build day. One winner.", supreme: true },
              ].map((r) => (
                <div key={r.n} className={`paper-card p-6 md:p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden ${r.supreme ? 'border-2 border-sakura-deep bg-sakura-light/20' : ''}`}>
                   {r.supreme && <div className="absolute top-0 right-0 bg-sakura-deep text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg z-10">Grand Finale</div>}
                   <div className="flex-none w-32">
                     <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Round {r.n}</div>
                     <h4 className={`font-display text-3xl font-extrabold ${r.supreme ? 'text-sakura-deep' : 'text-foreground'}`}>{r.name}</h4>
                     <div className="text-sm font-semibold mt-2">{r.loc}</div>
                   </div>
                   <div className="flex-1">
                     <p className="text-muted-foreground mb-4 leading-relaxed">{r.detail}</p>
                     <div className="text-xs uppercase tracking-widest text-foreground/50 border-t border-border pt-4">{r.date}</div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REACH */}
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 py-20 bg-paper/50">
        <SectionHeader
          eyebrow="Audience & Reach"
          title={<>The <em className="display-script not-italic text-vermilion">Numbers</em></>}
          subtitle="We launched on April 25. By May 8 — 7,100+ registrations, 10+ countries, and organic content reaching hundreds of thousands — without spending a single rupee."
        />

        <div className="mt-12 flex flex-wrap gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground self-center mr-2">Global Reach:</span>
          {["🇮🇳 India", "🇲🇦 Morocco", "🇵🇰 Pakistan", "🇪🇬 Egypt", "🇦🇪 UAE", "🇺🇸 United States", "🇧🇷 Brazil"].map(c => (
            <span key={c} className="bg-paper border border-border px-3 py-1.5 rounded text-sm font-medium">{c}</span>
          ))}
          <span className="bg-sakura-light text-sakura-deep px-3 py-1.5 rounded text-sm font-bold">+ more joining daily</span>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="paper-card p-6 border-t-4 border-t-vermilion">
            <div className="font-display text-4xl font-extrabold mb-2">60K+</div>
            <p className="text-sm text-muted-foreground">Views on a single organic reel made by a creator without us asking or paying.</p>
          </div>
          <div className="paper-card p-6 border-t-4 border-t-vermilion">
            <div className="font-display text-4xl font-extrabold mb-2">1,024</div>
            <p className="text-sm text-muted-foreground">WhatsApp community hit capacity instantly. Moved to Slack with 400+ highly active members.</p>
          </div>
          <div className="paper-card p-6 border-t-4 border-t-vermilion">
            <div className="font-display text-4xl font-extrabold mb-2">₹0</div>
            <p className="text-sm text-muted-foreground">Total paid marketing spend. Every single registration is purely organic.</p>
          </div>
        </div>
      </section>

      <div className="torii-divider max-w-3xl mx-auto opacity-50" />

      {/* TIERS */}
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 py-20">
        <SectionHeader
          eyebrow="Partnership Tiers"
          title={<>Sponsor <span className="text-sakura-deep">Options</span></>}
          subtitle="Three core tiers. Custom packages available. Higher tiers unlock exclusivity, naming rights, and on-ground presence at Delhi and Japan."
        />

        <div className="mt-16 grid gap-12">
          {/* TITLE SPONSOR */}
          <div className="paper-card relative overflow-hidden border-2 border-sakura-deep shadow-lg">
             <div className="absolute top-6 -right-12 bg-sakura-deep text-white text-xs font-bold uppercase tracking-widest px-14 py-2 rotate-45 z-10">
                Exclusive
             </div>
             <div className="bg-gradient-to-r from-sakura-light/50 to-transparent p-8 md:p-10 border-b border-border">
               <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
                 <div>
                   <div className="text-xs font-bold uppercase tracking-[0.2em] text-sakura-deep mb-2">★ Flagship · 1 Slot Only</div>
                   <h3 className="font-display text-5xl md:text-6xl font-extrabold leading-none text-foreground">TITLE SPONSOR</h3>
                 </div>
                 <div className="text-left md:text-right">
                   <div className="font-display text-4xl md:text-5xl font-bold">₹15–30L</div>
                   <div className="text-sm text-muted-foreground font-medium mt-1">Cash or in-kind equivalent</div>
                 </div>
               </div>
             </div>
             <div className="grid md:grid-cols-2 p-8 md:p-10 gap-10">
               <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground mb-6">What You Get</h4>
                  <ul className="space-y-4">
                    {[
                      <><strong className="text-foreground">"Powered by [Brand]"</strong> on all communications</>,
                      <><strong className="text-foreground">Logo on every email</strong> to 7,100+ participants</>,
                      <><strong className="text-foreground">Stage branding at Delhi</strong> — massive banners</>,
                      <><strong className="text-foreground">Stage branding at Japan finale</strong> — full presence</>,
                      <><strong className="text-foreground">Dedicated sponsor email blast</strong> to all</>,
                      <><strong className="text-foreground">Custom challenge track</strong> for your product</>,
                      <><strong className="text-foreground">3 judge/mentor slots</strong> at Delhi and Japan</>,
                      <><strong className="text-foreground">Recruitment access</strong> to all finalists</>,
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="text-sakura-deep font-bold flex-none">✓</span> {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground mb-6">What We Need</h4>
                  <ul className="space-y-4">
                    {[
                      "Financial contribution toward flights, premium Japan venue, and operations",
                      "Or equivalent high-value in-kind: travel credits, product, infrastructure",
                      "Co-marketing: joint announcement post on launch",
                      "Brand assets within 5 business days",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="text-foreground/30 font-bold flex-none">→</span> {item}
                      </li>
                    ))}
                  </ul>
               </div>
             </div>
          </div>

          {/* GOLD & COMMUNITY */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* GOLD */}
            <div className="paper-card flex flex-col hover:border-foreground/30 transition">
               <div className="p-8 border-b border-border">
                 <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Core Sponsor · 3 Slots</div>
                 <h3 className="font-display text-4xl font-extrabold mb-4">GOLD PARTNER</h3>
                 <div className="font-display text-3xl font-bold">₹5–15L</div>
                 <div className="text-xs text-muted-foreground mt-1">Cash or in-kind</div>
               </div>
               <div className="p-8 flex-1">
                 <ul className="space-y-3 mb-8">
                    {[
                      "Logo on website and emails",
                      "Stage branding at Delhi round",
                      "Dedicated sponsor social post",
                      "1 judge/mentor slot at Delhi",
                      "Recruitment access to finalists",
                      "Product/credits distribution"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="text-foreground font-bold flex-none">✓</span> {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            {/* COMMUNITY */}
            <div className="paper-card flex flex-col hover:border-foreground/30 transition">
               <div className="p-8 border-b border-border">
                 <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Community Sponsor · Open</div>
                 <h3 className="font-display text-4xl font-extrabold mb-4">COMMUNITY</h3>
                 <div className="font-display text-3xl font-bold">₹50K–5L</div>
                 <div className="text-xs text-muted-foreground mt-1">Cash, credits, or in-kind</div>
               </div>
               <div className="p-8 flex-1">
                 <ul className="space-y-3 mb-8">
                    {[
                      "Logo on FAR AWAY website",
                      "Mention in global email campaigns",
                      "1 social media mention",
                      "Certificate branding",
                      "Slack community access"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="text-foreground font-bold flex-none">✓</span> {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>

        {/* ADD-ONS */}
        <div className="mt-16">
          <h4 className="font-display text-2xl font-bold mb-6 text-center">Specialized Add-on Packages</h4>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { tag: "AI / Tech", name: "Official AI Partner", desc: "API credits. 'Best AI Use' prize category. Dedicated email feature." },
              { tag: "Travel", name: "Official Travel Partner", desc: "Flight/hotel support for Japan trip. Massive travel aspiration demographic." },
              { tag: "Hardware", name: "Official Hardware Partner", desc: "Products as premium prizes. Stage setup. Event photography." },
              { tag: "Education", name: "Academic Partner", desc: "Pre-hackathon workshop. Course access. Direct student access." },
            ].map((addon) => (
              <div key={addon.name} className="paper-card p-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-sakura-deep mb-2">{addon.tag}</div>
                <h5 className="font-display text-xl font-bold mb-3">{addon.name}</h5>
                <p className="text-xs text-muted-foreground">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 py-20 bg-paper/50">
        <SectionHeader
          eyebrow="Why Partner"
          title={<>Why FAR <em className="display-script not-italic text-vermilion">AWAY?</em></>}
          subtitle=""
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: "🎯", title: "The right age, right moment", body: "7,100 participants aged 15–25 forming brand loyalties now. The tools they learn today are what they'll build startups with tomorrow." },
            { icon: "⚡", title: "Deep product adoption", body: "Participants don't just see your logo; they build real projects using your tools. This drives deep, organic adoption." },
            { icon: "🇯🇵", title: "Massive Japan finale exposure", body: "5 days in Japan generates an explosion of vlogs and photos, carrying your branding to audiences vastly beyond the registered 7,100." },
          ].map((why) => (
            <div key={why.title} className="paper-card p-8">
              <div className="text-3xl mb-4">{why.icon}</div>
              <h4 className="font-display text-xl font-bold mb-3">{why.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{why.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING / CONTACT */}
      <section className="relative mx-auto max-w-4xl px-5 md:px-8 py-24 mb-10">
        <div className="paper-card bg-foreground text-paper p-10 md:p-16 rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sakura-deep rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3" />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="display-mega text-5xl md:text-7xl leading-none text-paper mb-6">
                LET'S<br/><span className="text-sakura-deep">BUILD</span><br/>THIS.
              </h2>
              <p className="text-paper/80 font-medium leading-relaxed mb-4">
                FAR AWAY is already happening. 7,100 students registered. 10+ countries. Zero paid marketing.
              </p>
              <p className="text-paper/60 text-sm">
                Custom packages are available at any budget level. If the standard tiers don't perfectly fit your goals, talk to us.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-6 md:pl-8 border-l border-paper/10">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-paper/40 mb-1">Sponsorship Enquiries</div>
                <div className="font-display text-2xl font-bold">Zuup Partnerships</div>
                <a href="mailto:sponsors@zuup.dev" className="text-sakura-deep hover:underline mt-1 inline-block">sponsors@zuup.dev</a>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-paper/40 mb-1">Founder Direct</div>
                <div className="font-display text-xl font-bold">Jagrit Sachdev, 17</div>
                <a href="mailto:jagrit@zuup.dev" className="text-sakura-deep hover:underline mt-1 inline-block">jagrit@zuup.dev</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
