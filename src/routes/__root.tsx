import { Outlet, Link, createRootRoute, HeadContent, Scripts, ScriptOnce } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SakuraPetals } from "@/components/SakuraPetals";

import appCss from "../styles.css?url";
import heroFujiUrl from "@/assets/hero-fuji.webp?url";

const SITE_URL = "https://faraway.zuup.dev";
const OG_IMAGE = `${SITE_URL}/og-image.webp`;

const consoleScript = `
(function(){
  try{
    var s='color:#c84a6a;font:bold 18px "Shippori Mincho",serif;text-shadow:0 1px 0 #fff;';
    var t='color:#7a5a64;font:13px "Inter",sans-serif;';
    console.log('%c🌸 FAR AWAY 2026 — Hackathon for ages 15–25','%c'+s,'');
    console.log('%cFocus on the hackathon, not our bugs. (jk… kinda) 🤝','%c'+t,'');
    console.log('%cTop 5 teams fly to Japan — fully sponsored. Build something worth flying for.', '%c'+t,'');
    console.log('%cregister → unstop · contact → jagrit@zuup.dev','%c'+t,'');
  }catch(e){}
})();
`;

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-paper grid place-items-center px-4 relative overflow-hidden">
      <div className="text-center max-w-md relative z-10">
        <div className="font-display text-[160px] leading-none font-extrabold text-sakura-deep">404</div>
        <h2 className="mt-2 font-display text-2xl font-bold">Page lost in the blossoms</h2>
        <p className="mt-3 text-muted-foreground">
          Looks like a petal carried this page far, far away.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sakura-deep to-vermilion text-primary-foreground font-semibold"
        >
          ← Return home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#f9d6dc" },
      { title: "FAR AWAY 2026 — India's International Youth Hackathon | Win a Trip to Japan" },
      {
        name: "description",
        content:
          "FAR AWAY is India's biggest international youth hackathon for ages 15–25. Top 5 teams fly to Japan — flights, hotel and meals fully sponsored. Registration is always free. Organized by Zuup.",
      },
      {
        name: "keywords",
        content:
          "FAR AWAY hackathon, FAR AWAY 2026, Zuup, Zylon Labs, India hackathon, international hackathon, youth hackathon India, student hackathon, hackathon Japan, hackathon for teens, ages 15-25 hackathon, free hackathon India, Delhi hackathon, Tokyo hackathon, win trip to Japan, sponsored hackathon, Indian student coding competition, Unstop hackathon",
      },
      { name: "author", content: "Zuup by Zylon Labs" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow" },

      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "FAR AWAY 2026" },
      { property: "og:locale", content: "en_IN" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@zuup_empower" },
      { name: "twitter:creator", content: "@zuup_empower" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "dns-prefetch", href: "https://unstop.com" },
      { rel: "dns-prefetch", href: "https://d8it4huxumps7.cloudfront.net" },
      // Preload hero — first paint image, big LCP win
      { rel: "preload", as: "image", href: heroFujiUrl, fetchpriority: "high" } as never,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "FAR AWAY 2026 — International Youth Hackathon",
          description:
            "India's biggest international youth hackathon for ages 15–25. Top 5 teams fly to Japan, fully sponsored.",
          startDate: "2026-06-01",
          endDate: "2026-07-31",
          eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: [
            { "@type": "VirtualLocation", url: SITE_URL },
            { "@type": "Place", name: "New Delhi, India", address: "New Delhi, India" },
            { "@type": "Place", name: "Tokyo, Japan", address: "Tokyo, Japan" },
          ],
          image: [OG_IMAGE],
          organizer: {
            "@type": "Organization",
            name: "Zuup",
            url: "https://zuup.dev",
            sameAs: ["https://instagram.com/zuup.empower"],
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            validThrough: "2026-07-31",
            url: "https://unstop.com",
          },
          audience: {
            "@type": "Audience",
            audienceType: "Students aged 15 to 25",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ScriptOnce>{consoleScript}</ScriptOnce>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <SakuraPetals count={20} zIndex={1} />
      <Header />
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
