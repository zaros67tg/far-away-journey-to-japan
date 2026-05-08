import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import branch from "@/assets/branch.webp";
import lanterns from "@/assets/lanterns.webp";
import crane from "@/assets/crane.webp";
import sun from "@/assets/sun.webp";
import wave from "@/assets/wave.webp";

const faqs = [
  {
    kanji: "誰",
    q: "Who can participate in FAR AWAY 2026?",
    a: "FAR AWAY 2026 is open to anyone aged 15–25 currently residing in India. Whether you're a high schooler, a college student, or already shipping side projects — you're welcome. No coding background is required to register.",
  },
  {
    kanji: "組",
    q: "Can I participate solo or do I need a team?",
    a: "You register individually now. Once our dashboard goes live (via Unstop), you'll be able to form or join teams and collaborate with other participants. The maximum team size is 5 members.",
  },
  {
    kanji: "校",
    q: "Is inter-college participation allowed?",
    a: "Yes, inter-college teams are allowed. You can form teams with students from different schools or colleges. There can also be multiple teams from the same college.",
  },
  {
    kanji: "¥",
    q: "How much does registration cost for FAR AWAY?",
    a: "Registration is completely free — forever. No hidden fees, no premium tier, no late charges. We register you via our platform partner, Unstop.",
  },
  {
    kanji: "題",
    q: "What are the problem statements or themes?",
    a: "There will be 5 broad themes announced 7 days before the online round (scheduled for the first or second week of June). You will choose one theme and do open innovation based on it.",
  },
  {
    kanji: "<>",
    q: "Does the product have to be software, or can we use hardware?",
    a: "Hardware and IoT projects are highly encouraged! They usually have a great impact. Just keep in mind that for Round 3, using a basic ESP32 or RP2040 with jumper wires won’t be enough. We recommend learning PCB design and making a proper custom board for later rounds.",
  },
  {
    kanji: "車",
    q: "Is there any compensation or accommodation for Round 2 in Delhi?",
    a: "As of now, we don’t have travel compensation for Round 2. However, this may change depending on our sponsors. For accommodation, we're exploring partnerships with colleges, or we'll secure a venue large enough to host a 24-hour hackathon with overnight access and designated rest zones.",
  },
  {
    kanji: "翔",
    q: "Are all expenses covered for the Japan grand finale?",
    a: "Yes. The top 5 teams have flights, hotel, and meals fully sponsored by FAR AWAY. Final dates will be shared at least 2–3 weeks before Round 3 to allow time for passport and visa processing. (Don't panic and rush to passport offices just yet!)",
  },
  {
    kanji: "師",
    q: "Can we have a mentor over 25 years old?",
    a: "Yes, but the mentor cannot physically assist you with the project; they may only provide verbal guidance. They cannot be officially added to the team roster. If your team qualifies for Delhi or Japan, we will not cover the mentor's travel or food, though a parent or guardian may accompany the team at their own expense.",
  },
  {
    kanji: "賞",
    q: "What do participants get if they don't win?",
    a: "All participants will receive certificates of participation. Our sponsors might also provide software credits and merchandise, depending on our final sponsor budget.",
  },
  {
    kanji: "話",
    q: "Is there a community group for updates?",
    a: "Yes! Our WhatsApp group reached full capacity instantly, so we moved to Slack. Join the active community here: https://join.slack.com/t/zuupgroup/shared_invite/zt-3x4ni7dch-pZrIMWrngGrv_3I6nlkGdQ",
  },
  {
    kanji: "Z",
    q: "What is Zuup?",
    a: "Zuup is a youth-led non-profit initiative by Zylon Labs, empowering the next generation of builders. Note: FAR AWAY is an independent initiative and is not affiliated with Parul University.",
  },
  {
    kanji: "判",
    q: "How does signup verification and team formation work?",
    a: "Registration is handled on Unstop. If you have trouble checking the profile of your teammates on the platform, please contact Unstop support directly.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — FAR AWAY 2026 Hackathon Questions Answered" },
      {
        name: "description",
        content:
          "Got questions about FAR AWAY 2026? Eligibility, registration, travel, prizes, mentors, judging — answered. Email jagrit@zuup.dev if yours isn't here.",
      },
      { property: "og:title", content: "FAQ — FAR AWAY 2026" },
      { property: "og:description", content: "Common questions about FAR AWAY 2026 answered." },
      { property: "og:image", content: "https://faraway.zuup.dev/og-image.webp" },
      { property: "og:url", content: "https://faraway.zuup.dev/faq" },
      { name: "twitter:title", content: "FAQ — FAR AWAY 2026" },
      { name: "twitter:description", content: "Common questions about FAR AWAY 2026 answered." },
      { name: "twitter:image", content: "https://faraway.zuup.dev/og-image.webp" },
    ],
    links: [{ rel: "canonical", href: "https://faraway.zuup.dev/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://faraway.zuup.dev/" },
                { "@type": "ListItem", position: 2, name: "FAQ", item: "https://faraway.zuup.dev/faq" },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={sun} alt="" aria-hidden width={512} height={512} className="absolute -top-10 -right-12 w-72 opacity-30" />
        <img src={branch} alt="" aria-hidden width={1024} height={512} className="absolute top-8 -left-20 w-[600px] opacity-50" />
        <img src={crane} alt="" aria-hidden width={512} height={512} className="absolute top-32 right-10 w-28 opacity-80 animate-float hidden md:block" />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8 pt-20 md:pt-28 pb-12 text-center">
          <span className="ink-stamp">問 · Frequently Asked</span>
          <h1 className="display-mega text-5xl md:text-7xl mt-5 leading-[0.95]">
            Everything you wanted <br />
            to know about <span className="text-sakura-deep">FAR AWAY</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Honest answers from the team. If yours isn't here, drop us an email or join our Slack.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="relative mx-auto max-w-5xl px-5 md:px-8 py-12">
        <div className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10">
          <aside aria-hidden className="hidden md:flex flex-col items-center gap-3 sticky top-20 h-fit">
            <div className="vertical-jp font-display font-bold text-vermilion text-sm tracking-[0.4em]">
              質 問 集
            </div>
            <div className="h-40 w-px bg-gradient-to-b from-vermilion/60 to-transparent" />
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground vertical-jp">
              FAQ · 2026
            </div>
          </aside>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`relative paper-card overflow-hidden transition ${isOpen ? "shadow-[var(--shadow-bloom)] border-sakura-deep/40" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left p-5 md:p-6 flex items-center gap-4 md:gap-5 hover:bg-sakura-light/40 transition"
                    aria-expanded={isOpen}
                  >
                    <span className={`flex-none grid place-items-center h-11 w-11 md:h-12 md:w-12 rounded-full font-display font-bold text-base md:text-lg transition ${isOpen ? "bg-vermilion text-primary-foreground" : "bg-sakura-light text-sakura-deep"}`}>
                      {f.kanji}
                    </span>
                    <span className="flex-1 font-display font-bold text-base md:text-lg leading-snug">
                      {f.q}
                    </span>
                    <span className="flex-none text-2xl text-sakura-deep font-light leading-none">
                      <span className={`inline-block transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[72px] md:pl-[88px] text-muted-foreground leading-relaxed text-sm md:text-base animate-ink">
                      {f.a.includes("http") ? (
                         <span dangerouslySetInnerHTML={{ __html: f.a.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" class="text-sakura-deep hover:underline">$1</a>') }} />
                      ) : (
                         f.a
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="relative overflow-hidden mt-12">
        <img src={branch} alt="" aria-hidden width={1024} height={512} className="absolute -top-6 -left-20 w-[600px] opacity-50" />
        <img src={lanterns} alt="" aria-hidden width={500} height={500} className="absolute -bottom-8 -right-12 w-72 opacity-70" />
        <img src={wave} alt="" aria-hidden width={1024} height={512} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] opacity-15" />

        <div className="relative mx-auto max-w-2xl px-5 md:px-8 py-24 text-center">
          <span className="ink-stamp">Still curious</span>
          <h2 className="display-mega text-4xl md:text-5xl mt-4">
            Talk to a <span className="text-sakura-deep">real human</span>.
          </h2>
          <p className="mt-3 text-muted-foreground">
            We read every message. Usually reply within a day.
          </p>
          <a href="mailto:jagrit@zuup.dev" className="mt-6 inline-block font-display font-bold text-2xl md:text-3xl text-sakura-deep hover:underline underline-offset-4 decoration-vermilion/50">
            jagrit@zuup.dev
          </a>
        </div>
      </section>
    </div>
  );
}
