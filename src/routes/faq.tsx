import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import branch from "@/assets/branch.png";
import lanterns from "@/assets/lanterns.png";
import crane from "@/assets/crane.png";
import sun from "@/assets/sun.png";
import wave from "@/assets/wave.png";

const faqs = [
  {
    kanji: "誰",
    q: "Who can participate in FAR AWAY 2026?",
    a: "FAR AWAY 2026 is open to anyone aged 15–25 currently residing in India. Whether you're a high schooler, a college student, or already shipping side projects — you're welcome. No coding background is required to register.",
  },
  {
    kanji: "¥",
    q: "How much does registration cost for FAR AWAY?",
    a: "Registration is completely free until 30 April 2026 via our platform partner, Unstop. After that date, pricing details (if any) will be announced.",
  },
  {
    kanji: "車",
    q: "What about travel for Round 2 in Delhi?",
    a: "Travel stipend details for the Delhi round will be announced as sponsors are confirmed. We'll share clear information well before the round so participants can plan.",
  },
  {
    kanji: "翔",
    q: "Are all expenses covered for the Japan grand finale?",
    a: "Yes. The top 5 teams have flights, hotel, and meals fully sponsored by FAR AWAY. Visa support details will be confirmed soon.",
  },
  {
    kanji: "組",
    q: "Can I participate solo or do I need a team?",
    a: "You register individually now. Once our dashboard goes live (via Unstop), you'll be able to form or join teams and collaborate with other participants. Team size details will be shared then.",
  },
  {
    kanji: "Z",
    q: "What is Zuup?",
    a: "Zuup is a teen-led non-profit organization by Zylon Labs, dedicated to empowering youth through digital skills and international opportunities. Learn more at zuup.dev.",
  },
  {
    kanji: "<>",
    q: "What programming languages or tools can I use?",
    a: "Anything you want. Python, JavaScript, Rust, C++, no-code tools, AI APIs — bring whatever helps you build. Judging is on the project, not the stack.",
  },
  {
    kanji: "師",
    q: "Will there be mentors available during FAR AWAY?",
    a: "Yes. We're bringing in industry mentors — developers, founders, designers, product folks — to guide your team throughout the hackathon, especially during the Delhi and Japan rounds.",
  },
  {
    kanji: "都",
    q: "What happens if I cannot attend the Delhi round?",
    a: "Round 2 in Delhi requires in-person attendance. If you're selected for Delhi but can't attend, your spot may be passed to the next team. We'll publish exact selection rules closer to the date.",
  },
  {
    kanji: "判",
    q: "How are projects judged at FAR AWAY?",
    a: "Projects are judged on creativity, technical execution, real-world impact, and presentation. Detailed judging criteria will be shared with participants before each round.",
  },
  {
    kanji: "✓",
    q: "How does signup verification work?",
    a: "Registration is on Unstop. They handle email verification and dashboard access. Once the dashboard goes live, you'll receive instructions to confirm your participation.",
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
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
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
            Eleven honest answers. If yours isn't here, just write to us — a real person reads every email.
          </p>
        </div>
      </section>

      {/* FAQ list — split layout: vertical kanji rail on left, accordion on right */}
      <section className="relative mx-auto max-w-5xl px-5 md:px-8 py-12">
        <div className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10">
          {/* Vertical rail */}
          <aside aria-hidden className="hidden md:flex flex-col items-center gap-3 sticky top-20 h-fit">
            <div className="vertical-jp font-display font-bold text-vermilion text-sm tracking-[0.4em]">
              質 問 集
            </div>
            <div className="h-40 w-px bg-gradient-to-b from-vermilion/60 to-transparent" />
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground vertical-jp">
              FAQ · 2026
            </div>
          </aside>

          {/* Accordion */}
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
                    {/* Kanji marker */}
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
                      {f.a}
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
