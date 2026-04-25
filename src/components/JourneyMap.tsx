import branchImg from "@/assets/branch.webp";
import sunImg from "@/assets/sun.webp";

/**
 * Editorial dynamic journey map — SVG arc from India to Japan with an
 * airliner that flies along the path on loop, and three stop markers
 * (Online, Delhi, Tokyo) anchored to real points.
 */
export function JourneyMap() {
  return (
    <div className="relative w-full">
      <div className="relative paper-card overflow-hidden bg-gradient-to-br from-paper via-sakura-light/40 to-sakura/15">
        {/* Decorative sun behind Tokyo */}
        <img
          src={sunImg}
          alt=""
          aria-hidden
          width={512}
          height={512}
          className="pointer-events-none absolute -top-10 right-6 w-44 opacity-40 animate-float"
        />
        {/* Cherry branch top-left */}
        <img
          src={branchImg}
          alt=""
          aria-hidden
          width={1024}
          height={512}
          className="pointer-events-none absolute -top-6 -left-12 w-[420px] opacity-60 -rotate-6"
        />

        <svg
          viewBox="0 0 1000 420"
          className="relative block w-full h-auto"
          role="img"
          aria-label="Journey map: India online round, Delhi, then Tokyo, Japan"
        >
          <defs>
            <linearGradient id="pathGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="oklch(0.65 0.155 15)" />
              <stop offset="100%" stopColor="oklch(0.62 0.21 30)" />
            </linearGradient>
            <linearGradient id="trailGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="oklch(0.62 0.21 30)" stopOpacity="0" />
              <stop offset="100%" stopColor="oklch(0.62 0.21 30)" stopOpacity="0.55" />
            </linearGradient>
            <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.6" />
            </filter>
          </defs>

          {/* dotted reference grid */}
          <g opacity="0.15" stroke="oklch(0.45 0.03 280)" strokeWidth="0.5">
            {Array.from({ length: 11 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 100} y1={0} x2={i * 100} y2={420} />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={`h${i}`} x1={0} y1={i * 100} x2={1000} y2={i * 100} />
            ))}
          </g>

          {/* Land sketches — India side */}
          <g opacity="0.55" fill="oklch(0.86 0.04 60)" stroke="oklch(0.55 0.05 25)" strokeWidth="1">
            <path d="M40,260 Q90,210 150,230 Q200,245 220,290 Q210,330 160,340 Q100,335 60,310 Z" />
            <text x="80" y="370" fontFamily="Shippori Mincho, serif" fontSize="14" fill="oklch(0.45 0.05 280)" letterSpacing="3">INDIA</text>
          </g>

          {/* Land sketches — Japan side */}
          <g opacity="0.55" fill="oklch(0.86 0.04 60)" stroke="oklch(0.55 0.05 25)" strokeWidth="1">
            <path d="M820,170 Q860,150 880,180 Q900,220 870,250 Q830,260 810,230 Z" />
            <path d="M870,290 Q900,280 910,310 Q905,340 875,345 Q855,330 860,305 Z" />
            <text x="830" y="385" fontFamily="Shippori Mincho, serif" fontSize="14" fill="oklch(0.45 0.05 280)" letterSpacing="3">JAPAN</text>
          </g>

          {/* Hokusai-style mini wave between */}
          <g opacity="0.35" fill="none" stroke="oklch(0.36 0.085 265)" strokeWidth="1.2">
            <path d="M380,330 q15,-12 30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0" />
            <path d="M400,355 q15,-10 30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0" />
          </g>

          {/* The journey path: an arc from India (online) → Delhi → Tokyo */}
          <path
            id="flightPath"
            d="M 130,270 C 230,90 380,40 510,110 C 620,170 740,240 880,170"
            stroke="url(#pathGrad)"
            strokeWidth="2.2"
            strokeDasharray="2 7"
            strokeLinecap="round"
            fill="none"
            filter="url(#soft)"
          >
            <animate attributeName="stroke-dashoffset" values="0;-90" dur="6s" repeatCount="indefinite" />
          </path>

          {/* Stop markers */}
          {[
            { cx: 130, cy: 270, label: "01 · Online", sub: "From your screen", anchor: "start", lx: 130, ly: 305 },
            { cx: 380, cy: 95,  label: "02 · Delhi",  sub: "In-person round", anchor: "middle", lx: 380, ly: 70 },
            { cx: 880, cy: 170, label: "03 · Tokyo",  sub: "Grand finale",    anchor: "end", lx: 880, ly: 205 },
          ].map((m) => (
            <g key={m.label}>
              <circle cx={m.cx} cy={m.cy} r="14" fill="oklch(1 0 0)" stroke="oklch(0.62 0.21 30)" strokeWidth="2">
                <animate attributeName="r" values="14;17;14" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx={m.cx} cy={m.cy} r="5" fill="oklch(0.62 0.21 30)" />
              <text
                x={m.lx}
                y={m.ly}
                textAnchor={m.anchor as "start" | "middle" | "end"}
                fontFamily="Shippori Mincho, serif"
                fontSize="15"
                fontWeight="700"
                fill="oklch(0.22 0.025 280)"
              >
                {m.label}
              </text>
              <text
                x={m.lx}
                y={m.ly + 16}
                textAnchor={m.anchor as "start" | "middle" | "end"}
                fontFamily="Inter, sans-serif"
                fontSize="11"
                fill="oklch(0.45 0.03 280)"
              >
                {m.sub}
              </text>
            </g>
          ))}

          {/* Animated airliner — top-down view, nose pointing +X (rotate="auto" aligns to path) */}
          <g>
            <g>
              {/* Drop shadow under the plane */}
              <ellipse cx="2" cy="14" rx="22" ry="3" fill="oklch(0.22 0.025 280)" opacity="0.18" />

              {/* Main wings (swept back) */}
              <path d="M 2,-3 L -18,-22 L -10,-22 L 8,-4 Z" fill="oklch(0.93 0.015 60)" stroke="oklch(0.22 0.025 280)" strokeWidth="1.1" strokeLinejoin="round" />
              <path d="M 2,3 L -18,22 L -10,22 L 8,4 Z" fill="oklch(0.88 0.02 60)" stroke="oklch(0.22 0.025 280)" strokeWidth="1.1" strokeLinejoin="round" />

              {/* Tail horizontal stabilizers */}
              <path d="M -20,-2 L -28,-9 L -22,-9 L -16,-2 Z" fill="oklch(0.93 0.015 60)" stroke="oklch(0.22 0.025 280)" strokeWidth="1" strokeLinejoin="round" />
              <path d="M -20,2 L -28,9 L -22,9 L -16,2 Z" fill="oklch(0.88 0.02 60)" stroke="oklch(0.22 0.025 280)" strokeWidth="1" strokeLinejoin="round" />

              {/* Fuselage — long capsule with pointed nose at +X */}
              <path
                d="M -28,0 C -28,-3 -22,-4.5 -14,-4.5 L 12,-4.5 C 18,-4.5 22,-3 24,-1.5 L 28,0 L 24,1.5 C 22,3 18,4.5 12,4.5 L -14,4.5 C -22,4.5 -28,3 -28,0 Z"
                fill="oklch(0.99 0.005 60)"
                stroke="oklch(0.22 0.025 280)"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />

              {/* Vermilion belly stripe */}
              <path d="M -22,0 L 22,0" stroke="oklch(0.62 0.21 30)" strokeWidth="1.4" opacity="0.85" strokeLinecap="round" />

              {/* Cockpit windows (front, near the nose at +X) */}
              <path d="M 14,-2 L 22,-0.4 L 22,0.4 L 14,2 Z" fill="oklch(0.36 0.085 265)" opacity="0.9" />

              {/* Engine pods under wings */}
              <ellipse cx="-4" cy="-12" rx="3" ry="1.6" fill="oklch(0.55 0.04 280)" stroke="oklch(0.22 0.025 280)" strokeWidth="0.8" />
              <ellipse cx="-4" cy="12" rx="3" ry="1.6" fill="oklch(0.55 0.04 280)" stroke="oklch(0.22 0.025 280)" strokeWidth="0.8" />
            </g>
            <animateMotion
              dur="11s"
              repeatCount="indefinite"
              rotate="auto"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath xlinkHref="#flightPath" />
            </animateMotion>
          </g>

          {/* Tiny floating petals along the journey */}
          {[
            { cx: 250, cy: 180, r: 3 },
            { cx: 460, cy: 70,  r: 2.5 },
            { cx: 600, cy: 130, r: 3.5 },
            { cx: 720, cy: 205, r: 2.5 },
            { cx: 800, cy: 165, r: 3 },
          ].map((p, i) => (
            <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="oklch(0.82 0.105 12)" opacity="0.7">
              <animate attributeName="cy" values={`${p.cy};${p.cy + 14};${p.cy}`} dur={`${5 + i}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>

        {/* Footer ribbon */}
        <div className="px-6 md:px-10 py-5 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 bg-paper/70 backdrop-blur">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span>遠く · A 6,000 km arc</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-block h-2 w-2 rounded-full bg-vermilion animate-pulse" />
            <span className="text-foreground/70">Live: registration is open on Unstop</span>
          </div>
        </div>
      </div>
    </div>
  );
}
