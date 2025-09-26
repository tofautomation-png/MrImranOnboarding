import { motion } from "framer-motion";

// Brand colors
const BRAND_A = "#00FF85"; // neon green
const BRAND_B = "#00FFC5"; // aqua green

// Motion helpers (snappy but light)
const enter = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { type: "spring", stiffness: 130, damping: 18, mass: 0.8 }
};

export default function OnboardingImranButt() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f14] text-white selection:bg-[#00FFC5]/30 selection:text-white overflow-x-hidden">
      {/* SINGLE, SOFT, STATIC BRAND GRADIENT BACKGROUND (no animations) */}
      <div
        className="fixed inset-0 -z-20 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(60rem 60rem at 15% 20%, ${BRAND_A}22 0%, transparent 60%),
            radial-gradient(70rem 70rem at 85% 30%, ${BRAND_B}1F 0%, transparent 60%),
            radial-gradient(80rem 80rem at 50% 85%, ${BRAND_A}14 0%, transparent 65%)
          `,
          filter: "blur(80px)",
        }}
      />

      {/* Faint vignette for depth (static) */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(120rem_60rem_at_50%_120%,rgba(0,0,0,0.6),transparent_60%)]" />

      <main className="mx-auto max-w-6xl px-5 py-10 sm:py-14 md:py-16">
        {/* Header */}
        <motion.div {...enter} className="mb-8 flex items-center gap-4 will-change-transform">
          <img
            src="https://framerusercontent.com/images/0Wv5hQVMLzh3f9CWZ4UtLjPjZU.png?scale-down-to=512"
            alt="Targetime logo"
            className="h-10 w-10 sm:h-12 sm:w-12"
            loading="eager"
            decoding="sync"
          />
          <div className="text-sm uppercase tracking-widest text-white/70">Targetime • AI Content Automation</div>
        </motion.div>

        {/* Welcome strip — keep frosted, no gradient animation */}
        <motion.div
          {...enter}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 will-change-transform"
          style={{ backdropFilter: "blur(12px)" }}
        >
          {/* Static soft highlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(1000px_220px_at_10%_0%, rgba(255,255,255,0.08), transparent)",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl">
                Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-a)] via-[var(--brand-b)] to-[var(--brand-a)]">Mr Imran Butt</span>
              </h1>
              <p className="mt-2 max-w-3xl text-white/80 text-sm sm:text-base">
                Your onboarding journey: avatar creation → scripts → videos → automated posting for a month. Please share details via <span className="text-white/90">info@targetime.com</span> or WhatsApp.
              </p>
            </div>
            <div className="mt-1 text-xs sm:text-sm text-white/70">Project Window: <span className="text-white/90">7 working days</span></div>
          </div>
        </motion.div>

        {/* Sections — NO gradient animation inside cards */}
        <div className="mt-10 grid gap-6 md:gap-8">
          <StaticCard title="01 · Custom Avatar — Recording Requirements" titleColor="text-[rgba(0,255,197,0.9)]">
            <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed">
              Record <span className="font-medium text-white">2–5 minutes</span> in <span className="font-medium">1080p or 4K</span>, in a <span className="font-medium">well‑lit, quiet</span> space. Look at the camera, speak naturally, <span className="font-medium">pause with your mouth closed</span> between sentences, and keep gestures below chest level.
            </p>
            <p className="mt-4 text-white/70 text-sm">
              Live Consent: Please be available for a <span className="font-medium text-white">10‑minute</span> call during avatar creation.
            </p>
          </StaticCard>

          <StaticCard title="02 · Audience Profile (7 Key Inputs)" titleColor="text-[rgba(0,255,133,0.9)]">
            <ol className="mt-4 grid gap-3 text-white/80 text-sm sm:text-base list-decimal pl-6">
              <li><span className="text-white">Primary Audience Segment</span> — first‑time buyers, investors, sellers, renters.</li>
              <li><span className="text-white">Location & Market Tier</span> — areas/communities and price range.</li>
              <li><span className="text-white">Buyer Pain Points</span> — top 3 challenges (financing, paperwork, confusion, time).</li>
              <li><span className="text-white">Desired Outcomes</span> — fast closings, ROI, hassle‑free, exclusive deals.</li>
              <li><span className="text-white">Tone & Persona</span> — energetic, expert, concierge, mentor; language (EN/AR/UR).</li>
              <li><span className="text-white">Content Themes</span> — tips, spotlights, investment math, listings, lifestyle.</li>
              <li><span className="text-white">Visual Direction</span> — minimal vs dynamic, text density, b‑roll preferences.</li>
            </ol>
            <p className="mt-4 text-white/70 text-sm">Send to <span className="text-white/90">info@targetime.com</span> or WhatsApp.</p>
          </StaticCard>

          <StaticCard title="03 · Third‑Party Access (Meta, Instagram, TikTok)" titleColor="text-[rgba(180,225,255,0.95)]">
            <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed">We need publishing access for automated posting. Choose:</p>
            <ul className="mt-4 grid gap-2 text-white/80 text-sm sm:text-base list-disc pl-6">
              <li>Option A: We send official step‑by‑step docs.</li>
              <li>Option B: Quick 15‑minute screen‑share to set it up live.</li>
            </ul>
          </StaticCard>

          <StaticCard title="04 · Timeline (7 Working Days)" titleColor="text-[rgba(204,179,255,0.95)]">
            <div className="mt-6 grid gap-4">
              {[
                { day: "Day 1", title: "Kickoff & Inputs", items: ["Confirm 7 audience inputs", "Language/tone selection", "Content themes & visual direction", "Choose access method (docs or live)"] },
                { day: "Day 2", title: "Avatar Capture", items: ["Record 2–5 min (1080p/4K)", "10‑min live consent call", "Begin avatar training"] },
                { day: "Day 3", title: "Scripting", items: ["Draft short‑form scripts by audience & themes", "Tone calibration", "Light compliance/accuracy pass"] },
                { day: "Day 4", title: "Avatar Assembly & Tests", items: ["Assemble avatar + initial renders", "Check voice/lip‑sync/pacing", "Minor adjustments"] },
                { day: "Day 5", title: "Batch Video Production", items: ["Render monthly batch", "Add captions/overlays", "Export final assets"] },
                { day: "Day 6", title: "Access & Automation Setup", items: ["Confirm Meta/IG/TikTok permissions", "Connect scheduler & cadence", "QA posting previews"] },
                { day: "Day 7", title: "Scheduling & Final QA", items: ["Schedule full month", "Final QA", "Handover summary (plan + asset index)"] },
              ].map((b, i) => (
                <motion.div
                  key={b.day}
                  {...enter}
                  className="relative rounded-xl border border-white/10 bg-white/5 p-5 md:p-6"
                  style={{ backdropFilter: "blur(8px)" }}
                >
                  {/* STATIC soft brand highlight (no movement) */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-xl"
                    style={{
                      backgroundImage: `radial-gradient(60rem_20rem_at_10%_0%, ${BRAND_B}1a, transparent 60%)`,
                      filter: "blur(60px)",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="mb-1 text-xs uppercase tracking-widest text-white/60">{b.day}</div>
                    <div className="mb-2 text-base sm:text-lg font-semibold">{b.title}</div>
                    <ul className="grid gap-2 text-white/80 text-sm sm:text-base list-disc pl-5">
                      {b.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaticCard>

          <StaticCard title="05 · How to Share Your Inputs" titleColor="text-[rgba(255,230,180,0.95)]">
            <div className="mt-3 text-white/80 text-sm sm:text-base">
              Please send:
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Avatar source video (2–5 mins, 1080p/4K)</li>
                <li>Audience profile (7 inputs)</li>
                <li>Access preference (documents vs live walk‑through)</li>
              </ul>
              <div className="mt-4 text-white/70">
                Email: <span className="text-white/90">info@targetime.com</span> · WhatsApp: share via your usual chat with our team.
              </div>
            </div>
          </StaticCard>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Targetime. All rights reserved.
        </div>
      </main>

      {/* CSS variables for brand gradient text */}
      <style>{`:root{--brand-a:${BRAND_A};--brand-b:${BRAND_B};}`}</style>
    </div>
  );
}

function StaticCard({ title, titleColor, children }) {
  return (
    <motion.section
      initial={enter.initial}
      whileInView={enter.withinView || enter.whileInView}
      viewport={enter.viewport}
      transition={enter.transition}
      className="relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 will-change-transform"
      style={{ backdropFilter: "blur(10px)" }}
    >
      {/* Single soft static brand gradient (no animation, no hard edges) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          backgroundImage: `radial-gradient(80rem_30rem_at_0%_0%, ${BRAND_A}14, transparent 60%)`,
          filter: "blur(70px)",
        }}
      />
      <div className="relative z-10">
        <h2 className={`text-lg sm:text-xl font-semibold ${titleColor}`}>{title}</h2>
        {children}
      </div>
    </motion.section>
  );
}
