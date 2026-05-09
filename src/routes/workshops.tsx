import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/Section";
import branch from "@/assets/branch.webp";
import { Zap, Users, BookOpen, ArrowRight, CalendarDays } from "lucide-react";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops & Community — FAR AWAY 2026" },
      {
        name: "description",
        content:
          "Join the FAR AWAY prep workshops and our Slack community. We teach you everything you need — PCB design, AI prototyping, and more — a full month before the hackathon starts.",
      },
      { property: "og:title", content: "Workshops & Community — FAR AWAY 2026" },
      {
        property: "og:description",
        content: "Free prep workshops + 400+ builder Slack community. Build before you build.",
      },
      { property: "og:image", content: "https://faraway.zuup.dev/og-image.webp" },
      { property: "og:url", content: "https://faraway.zuup.dev/workshops" },
    ],
    links: [{ rel: "canonical", href: "https://faraway.zuup.dev/workshops" }],
  }),
  component: WorkshopsPage,
});

function WorkshopsPage() {
  return (
    <div className="relative">
      <img
        src={branch}
        alt=""
        aria-hidden
        width={1024}
        height={512}
        className="pointer-events-none absolute top-0 right-0 w-[500px] opacity-30 -rotate-12"
      />

      {/* HERO */}
      <section className="relative mx-auto max-w-5xl px-5 md:px-8 pt-20 md:pt-28 pb-12 text-center">
        <span className="ink-stamp">学 · Learn Before You Build</span>
        <h1 className="display-mega text-5xl md:text-7xl mt-5 leading-[0.95]">
          Prep Workshops &<br />
          <em className="display-script not-italic text-sakura-deep">Community</em>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          We don't just run a hackathon — we make sure you're ready for it. Free workshops, real mentors, and a
          community of 400+ builders to learn alongside.
        </p>
      </section>

      {/* SLACK CTA — prominent, real-time updates here */}
      <section className="relative mx-auto max-w-5xl px-5 md:px-8 py-6">
        <div className="paper-card p-8 md:p-10 bg-gradient-to-br from-foreground to-foreground/90 text-paper rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sakura-deep rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-vermilion rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/3" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sakura-deep to-vermilion flex items-center justify-center flex-none shadow-lg">
                <Users size={30} className="text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-paper/50 mb-1">Real-Time Updates</div>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-paper">Join the Slack Community</h2>
                <p className="text-paper/70 mt-2 text-sm max-w-md">
                  400+ builders. Workshop announcements, round updates, team matchmaking, and mentor AMAs — all live in
                  Slack. Our WhatsApp group filled up instantly; this is the place to be.
                </p>
              </div>
            </div>
            <a
              href="https://join.slack.com/t/zuupgroup/shared_invite/zt-3x4ni7dch-pZrIMWrngGrv_3I6nlkGdQ"
              target="_blank"
              rel="noopener noreferrer"
              id="slack-join-btn"
              className="flex-none inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-white font-bold text-sm shadow-[0_0_30px_rgba(200,74,106,0.4)] hover:scale-105 transition whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
              </svg>
              Join on Slack
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE'RE TEACHING */}
      <section className="relative mx-auto max-w-5xl px-5 md:px-8 py-16">
        <SectionHeader
          eyebrow="Preparation"
          title={<>Building <span className="text-sakura-deep">Before</span> The Build</>}
          subtitle="We train everyone a full month before the hackathon starts. No prior experience needed."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <BookOpen size={28} />,
              title: "PCB Design",
              body: "From schematic to layout. Learn KiCad, understand design rules, and get comfortable making a custom board instead of a breadboard mess.",
            },
            {
              icon: <Zap size={28} />,
              title: "AI Prototyping",
              body: "Build faster with AI-assisted workflows. Learn how to use LLMs, Cursor, and code agents so your team ships in hours, not days.",
            },
            {
              icon: <CalendarDays size={28} />,
              title: "More Coming Soon",
              body: "We're adding more workshops across hardware, software, and product building every week. Check back or join Slack for announcements.",
            },
          ].map((item) => (
            <div key={item.title} className="paper-card p-8 hover:-translate-y-1 transition duration-300">
              <div className="text-sakura-deep mb-5 bg-sakura-light/50 w-14 h-14 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LUMA EMBED */}
      <section className="relative mx-auto max-w-5xl px-5 md:px-8 py-10 mb-20">
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-sakura-deep mb-2">Workshop #1</div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold">FAR AWAY Prep: PCB Panic to Prototype ⚡</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Our inaugural workshop. Whether you've never opened KiCad or just want to finally understand how PCBs actually
            work — this is built for you. Register below to get reminders and the event link.
          </p>
          <a
            href="https://lu.ma/event/evt-EUFWIG5Z25SMHZT"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-primary-foreground font-semibold text-sm hover:scale-105 transition shadow-[var(--shadow-bloom)]"
          >
            Register on Luma <ArrowRight size={14} />
          </a>
        </div>

        <div className="paper-card overflow-hidden bg-gradient-to-br from-paper to-sakura-light/10">
          <iframe
            src="https://luma.com/embed/event/evt-EUFWIG5Z25SMHZT/simple"
            width="100%"
            height="520"
            frameBorder="0"
            style={{ border: "none", display: "block" }}
            allow="fullscreen; payment"
            aria-hidden="false"
            tabIndex={0}
            title="FAR AWAY Prep: PCB Panic to Prototype"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
