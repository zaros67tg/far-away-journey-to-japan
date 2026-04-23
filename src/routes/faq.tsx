import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import branch from "@/assets/branch.png";
import lanterns from "@/assets/lanterns.png";
import { SectionHeader } from "@/components/Section";

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

const faqs = [
  {
    q: "Who can participate in FAR AWAY 2026?",
    a: "FAR AWAY 2026 is open to anyone aged 15–25 currently residing in India. Whether you're a high schooler, a college student, or already shipping side projects — you're welcome. No coding background is required to register.",
  },
  {
    q: "How much does registration cost for FAR AWAY?",
    a: "Registration is completely free until 30 April 2026 via our platform partner, Unstop. After that date, pricing details (if any) will be announced.",
  },
  {
    q: "What about travel for Round 2 in Delhi?",
    a: "Travel stipend details for the Delhi round will be announced as sponsors are confirmed. We will share clear information well before the round so participants can plan.",
  },
  {
    q: "Are all expenses covered for the Japan grand finale?",
    a: "Yes. The top 5 teams that make it to the grand finale in Japan have their flights, hotel, and meals fully sponsored by FAR AWAY. Visa support details will be confirmed soon.",
  },
  {
    q: "Can I participate solo or do I need a team?",
    a: "You register individually now. Once our dashboard goes live (via Unstop), you'll be able to form or join teams and collaborate with other participants. Team size details will be shared then.",
  },
  {
    q: "What is Zuup?",
    a: "Zuup is a teen-led non-profit organization, an initiative by Zylon Labs. We build real opportunities for young creators across India. FAR AWAY is our biggest project yet.",
  },
  {
    q: "What programming languages or tools can I use?",
    a: "Anything you want. Python, JavaScript, Rust, C++, no-code tools, AI APIs — bring whatever helps you build. Judging is on the project, not the stack.",
  },
  {
    q: "Will there be mentors available during FAR AWAY?",
    a: "Yes. We're bringing in industry mentors — developers, founders, designers, product folks — to guide your team throughout the hackathon, especially during the Delhi and Japan rounds.",
  },
  {
    q: "What happens if I cannot attend the Delhi round?",
    a: "Round 2 in Delhi requires in-person attendance. If you're selected for Delhi but can't attend, your spot may be passed to the next team. We'll publish exact selection rules closer to the date.",
  },
  {
    q: "How are projects judged at FAR AWAY?",
    a: "Projects are judged on creativity, technical execution, real-world impact, and presentation. Detailed judging criteria will be shared with participants before each round.",
  },
  {
    q: "How does signup verification work?",
    a: "Registration is on Unstop. They handle email verification and dashboard access. Once the dashboard goes live, you'll receive instructions to confirm your participation.",
  },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <section className="relative mx-auto max-w-4xl px-5 md:px-8 pt-20 md:pt-28 pb-10 text-center">
        <span className="ink-stamp">問 · FAQ</span>
        <h1 className="display-mega text-5xl md:text-7xl mt-5">
          FAQs — FAR <span className="text-sakura-deep">AWAY</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Got questions? We have answers. If yours isn't here, just email us.
        </p>
      </section>

      <section className="relative mx-auto max-w-3xl px-5 md:px-8 py-10">
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="paper-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 hover:bg-sakura-light/40 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base md:text-lg pr-4">{f.q}</span>
                  <span className={`flex-none h-8 w-8 rounded-full bg-sakura-light text-sakura-deep grid place-items-center transition ${isOpen ? "rotate-45" : ""}`}>
                    <span className="text-xl leading-none">+</span>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground leading-relaxed text-sm md:text-base animate-ink">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden mt-12">
        <img src={branch} alt="" aria-hidden width={1024} height={512} className="absolute -top-6 -left-20 w-[600px] opacity-50" />
        <img src={lanterns} alt="" aria-hidden width={500} height={500} className="absolute -bottom-8 -right-12 w-72 opacity-70" />
        <div className="relative mx-auto max-w-2xl px-5 md:px-8 py-20 text-center">
          <h2 className="display-mega text-3xl md:text-4xl">Still have questions?</h2>
          <a href="mailto:jagrit@zuup.dev" className="mt-4 inline-block text-sakura-deep font-bold text-2xl hover:underline">
            jagrit@zuup.dev
          </a>
        </div>
      </section>
    </div>
  );
}
