import { Logo } from "@/components/Logo";
import { CookSession } from "@/components/CookSession";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Flame,
  Link as LinkIcon,
  Mic,
  Play,
} from "@/components/Icons";

const NAV = [
  { label: "Product", caret: true },
  { label: "Recipes", caret: true },
  { label: "Pricing", caret: false },
  { label: "Languages", caret: false },
  { label: "Help", caret: false },
];

const TRUSTED = [
  { name: "YouTube", sub: "Recipes" },
  { name: "Hebbar's Kitchen", sub: "Import" },
  { name: "Ranveer Brar", sub: "Channels" },
  { name: "Tarla Dalal", sub: "Archive" },
  { name: "Sanjeev Kapoor", sub: "Recipes" },
  { name: "Cookpad", sub: "Community" },
];

const FEATURES = [
  {
    n: "01 — Cook along",
    title: "A voice in the kitchen, not a video to rewind.",
    body: "RasoiMate reads each step aloud and waits while you chop, stir, and taste. No pausing, no scrubbing back ten seconds with a wet thumb — it paces the recipe to you, not the other way round.",
  },
  {
    n: "02 — Just ask",
    title: "'How much haldi?' — answered, mid-stir.",
    body: "Ask out loud about quantities, timings, techniques, or a substitute when you're out of something. RasoiMate answers from the recipe in plain Hindi or English, and switches the moment you do.",
  },
  {
    n: "03 — Never burn it",
    title: "Timers that watch the pan for you.",
    body: "Every step that needs timing gets a timer set automatically. Scale a recipe for four or fourteen, and RasoiMate nudges you before the tadka catches or the rice boils over.",
  },
];

const DETAIL_ITEMS = [
  {
    Icon: Mic,
    title: "Truly hands-free",
    body: "Wake-word and voice answers mean you never touch a greasy screen. Say repeat, pause, or skip — it just listens and keeps up with you.",
  },
  {
    Icon: Flame,
    title: "Understands Indian kitchens",
    body: "It knows a kadai from a pan, tempering from sautéing, and that 'salt to taste' needs a number. Hindi and English, switched mid-sentence.",
  },
  {
    Icon: LinkIcon,
    title: "From any recipe or video",
    body: "Paste a YouTube link or a blog and RasoiMate turns it into clean, spoken, step-by-step guidance — with the timers and quantities pulled out for you.",
  },
  {
    Icon: Clock,
    title: "Smart timers & substitutions",
    body: "Auto-sets a timer for every step, scales quantities to your servings, and suggests a substitute the moment you say you're out of something.",
  },
];

const TIERS = [
  {
    name: "Free",
    price: "₹0",
    per: "",
    desc: "For the occasional cook-along.",
    features: [
      "5 guided recipes a month",
      "Voice step-by-step",
      "Basic timers",
      "English",
    ],
    cta: "Start free",
    variant: "secondary" as const,
  },
  {
    name: "Plus",
    price: "₹149",
    per: "/ month",
    desc: "For everyday cooking.",
    features: [
      "Unlimited guided recipes",
      "Import from any video or blog",
      "Hindi + English",
      "Substitutions & serving scaling",
      "Smart multi-timers",
    ],
    cta: "Start 14-day trial",
    variant: "primary" as const,
    featured: true,
    pill: "Most loved",
  },
  {
    name: "Family",
    price: "₹299",
    per: "/ month",
    desc: "For the whole household.",
    features: [
      "Everything in Plus",
      "Up to 5 profiles & saved recipes",
      "Shared family cookbook",
      "Voice in 6 Indian languages",
      "Priority support",
    ],
    cta: "Go Family",
    variant: "dark" as const,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-bone text-fg2">
      {/* ═══ NAV ═══════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 border-b border-transparent bg-bone/85 backdrop-blur-md" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:px-10">
          <Logo size={32} />
          <div className="hidden items-center gap-6 md:flex">
            {NAV.map((l) => (
              <span
                key={l.label}
                className="flex cursor-pointer items-center gap-1 text-[14px] text-fg2 transition-colors hover:text-fg1"
              >
                {l.label}
                {l.caret && <ChevronDown size={13} />}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="focus-ring rounded-[6px] px-3 py-2 text-[14px] text-fg2 transition-colors hover:bg-slate-50 hover:text-fg1">
              Sign in
            </button>
            <button
              className="focus-ring rounded-[6px] px-4 py-2 text-[14px] font-medium text-bone transition-colors"
              style={{ background: "var(--slate-700)" }}
            >
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-columns" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-500)" }} />
              Voice-first cooking
            </div>
            <h1
              className="t-display text-[44px] md:text-[60px] lg:text-[72px]"
              style={{ textWrap: "balance" }}
            >
              Cook any recipe
              <br />
              with a <span className="t-mark">voice</span>
              <br />
              in the kitchen.
            </h1>
            <p className="mt-7 max-w-[540px] text-[17px] leading-[1.55] text-fg2 md:text-[18px]">
              RasoiMate reads any recipe aloud, sets your timers, and answers your questions
              mid-stir — completely hands-free, in Hindi or English, so you never scrub a video back
              with messy hands again.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                className="focus-ring inline-flex items-center gap-2 rounded-[8px] px-6 py-3.5 text-[15px] font-medium text-white transition-colors"
                style={{ background: "var(--accent-700)" }}
              >
                Start cooking free
                <ArrowRight size={16} />
              </button>
              <button
                className="focus-ring inline-flex items-center gap-2 rounded-[8px] border bg-white px-5 py-3.5 text-[15px] font-medium text-fg1 transition-colors hover:bg-slate-50"
                style={{ borderColor: "var(--border-strong)" }}
              >
                <Play size={12} />
                Hear it in action
                <ChevronRight size={14} />
              </button>
              <span className="text-[13px] text-fg3">Free to start · No card required</span>
            </div>
          </div>

          <div className="relative">
            <CookSession />
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY ═══════════════════════════════════════ */}
      <section className="border-y bg-bone-50" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1240px] px-6 py-10 md:px-10">
          <div className="text-center text-[12px] tracking-[-0.005em] text-fg3">
            Cooking alongside <span className="text-fg1 font-medium">4 lakh home cooks</span> — works with the recipes you already follow
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {TRUSTED.map((f) => (
              <div key={f.name} className="flex items-baseline gap-2 opacity-70">
                <span
                  className="text-[18px] tracking-[-0.01em] text-fg1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-fg3">
                  {f.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">What RasoiMate does</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Like having a patient cook{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg1)" }}>standing beside you.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            It reads the steps, answers the questions you&apos;d normally pause to look up, and keeps the
            timers — so your hands stay on the food and your eyes stay off the screen.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <article
              key={f.n}
              className="card-lift flex flex-col rounded-[14px] border bg-white p-7"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em]"
                style={{ color: "var(--teal-700)" }}
              >
                {f.n}
              </div>
              <h3
                className="mb-3 text-[20px] leading-[1.2] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                {f.title}
              </h3>
              <p className="mb-5 text-[14px] leading-[1.6] text-fg2">{f.body}</p>

              {/* Inline mini-visual per feature */}
              {i === 0 && (
                <div
                  className="mt-auto rounded-[10px] border p-4"
                  style={{ borderColor: "var(--border)", background: "var(--bone-50)" }}
                >
                  <div
                    className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: "var(--teal-700)" }}
                  >
                    ♨ RasoiMate · reads aloud
                  </div>
                  <div className="text-[13px] leading-[1.45] text-fg1">
                    &ldquo;Add the onions and cook till golden — I&apos;ll wait. Say{" "}
                    <span className="cite-chip">next</span> when you&apos;re ready.&rdquo;
                  </div>
                </div>
              )}
              {i === 1 && (
                <div
                  className="mt-auto rounded-[10px] border bg-white p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="text-[14px] leading-[1.55] text-fg1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    &ldquo;Out of cream? Use <span className="hl-yellow">¼ cup cashew paste</span>{" "}
                    instead — same richness.&rdquo;
                    <sup
                      className="ml-0.5 inline-block rounded-[3px] px-1.5 align-super text-[9px] font-semibold text-white"
                      style={{ background: "var(--accent-700)", fontFamily: "var(--font-sans)" }}
                    >
                      swap
                    </sup>
                  </div>
                </div>
              )}
              {i === 2 && (
                <div
                  className="mt-auto flex items-start gap-2.5 rounded-[10px] border p-4"
                  style={{
                    borderColor: "var(--accent-100)",
                    background: "var(--accent-50)",
                  }}
                >
                  <span
                    className="shrink-0"
                    style={{ color: "var(--accent-700)" }}
                  >
                    <Clock size={16} />
                  </span>
                  <div>
                    <div
                      className="mb-1 text-[12px] font-semibold leading-tight"
                      style={{ color: "var(--accent-700)" }}
                    >
                      Timer · 8:00 on the gravy
                    </div>
                    <div
                      className="text-[11px] leading-[1.5]"
                      style={{ color: "var(--accent-700)" }}
                    >
                      &ldquo;I&apos;ll tell you when to fold in the paneer.&rdquo;
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ═══ PRODUCT DETAIL — DARK ════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto grid max-w-[1240px] items-start gap-12 px-6 py-24 md:grid-cols-[1fr_1.05fr] md:gap-16 md:px-10 md:py-32">
          <div>
            <span
              className="text-[12px] font-medium uppercase tracking-[0.12em]"
              style={{ color: "var(--teal-300)" }}
            >
              In the kitchen
            </span>
            <h2
              className="mt-4 text-[34px] md:text-[44px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
            >
              One recipe, every{" "}
              <span style={{ fontStyle: "italic", color: "var(--teal-300)" }}>step,</span>{" "}
              spoken in time.
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.65]" style={{ color: "rgba(239,233,228,0.78)" }}>
              RasoiMate doesn&apos;t just dump a wall of instructions. It walks you through one step
              at a time, listens for when you&apos;re ready, and keeps the timers — the way a good
              cook would, standing right beside you.
            </p>

            <div className="mt-9 grid gap-5">
              {DETAIL_ITEMS.map((d) => (
                <div key={d.title} className="flex gap-4">
                  <div
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px]"
                    style={{ background: "rgba(70,92,136,0.28)", color: "var(--teal-300)" }}
                  >
                    <d.Icon size={18} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-[15px] font-semibold" style={{ color: "var(--fg-on-dark)" }}>
                      {d.title}
                    </h4>
                    <p className="text-[14px] leading-[1.55]" style={{ color: "rgba(239,233,228,0.72)" }}>
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product shot */}
          <div
            className="overflow-hidden rounded-[14px] border bg-white text-fg2"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="flex items-center gap-1.5 border-b px-4 py-2.5"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
            </div>
            <div className="p-6 md:p-7">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
                <span
                  className="text-[14px] leading-none"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent-700)", letterSpacing: 0, textTransform: "none" }}
                >
                  ♨
                </span>
                Cooking · Paneer Butter Masala
              </div>
              <h4
                className="mb-3 text-[18px] leading-[1.3] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                Step 6 of 9 · Simmer the gravy
              </h4>
              <p className="mb-4 text-[14px] leading-[1.6] text-fg2">
                RasoiMate is reading aloud and listening:{" "}
                <span className="hl-yellow">
                  &ldquo;Simmer on low for 8 minutes, stirring so it doesn&apos;t catch&rdquo;
                </span>{" "}
                — timer set, and it&apos;ll tell you when to fold in the paneer.
              </p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {["Hindi + English", "Serves 4", "Timer 8:00"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-bone px-2 py-0.5 text-[10px] text-fg3"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2 border-t pt-3" style={{ borderColor: "var(--border)" }}>
                {[
                  { n: "01", title: "Garam masala", badge: "1 tsp", color: "var(--teal-700)", bg: "var(--teal-50)", border: "rgba(70,92,136,0.25)" },
                  { n: "02", title: "Cream substitute", badge: "Cashew paste", color: "var(--accent-700)", bg: "var(--accent-50)", border: "rgba(184,72,15,0.3)" },
                ].map((r) => (
                  <div key={r.n} className="flex items-center gap-3 py-1.5">
                    <span
                      className="text-[10px] tracking-[0.05em] text-fg4"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.n}
                    </span>
                    <span
                      className="text-[14px] text-fg1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.title}
                    </span>
                    <span
                      className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        color: r.color,
                        background: r.bg,
                        borderColor: r.border,
                      }}
                    >
                      {r.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-[260px_1fr] md:gap-16">
          <div>
            <div
              className="mb-4 grid h-12 w-12 place-items-center rounded-full text-[14px] font-semibold text-white"
              style={{ background: "var(--slate-700)" }}
            >
              AD
            </div>
            <div className="text-[15px] font-semibold text-fg1">Anjali Deshpande</div>
            <div className="text-[13px] text-fg3">Home cook</div>
            <div className="text-[13px]" style={{ color: "var(--teal-700)" }}>
              Pune
            </div>
          </div>
          <p
            className="text-[24px] leading-[1.45] md:text-[28px]"
            style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", letterSpacing: "-0.005em", textWrap: "pretty" }}
          >
            I&apos;d start a recipe on YouTube and spend half of it scrubbing back with wet hands —
            &ldquo;wait, how much water?&rdquo;. With RasoiMate I just ask out loud and keep
            cooking. It reads the next step, sets the timer, and even switched to Hindi when my
            mother-in-law took over the kadai. Dinner stopped being stressful.
          </p>
        </div>
      </section>

      {/* ═══ PRICING ═══════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-[1240px] border-t px-6 py-24 md:px-10 md:py-32"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">Pricing</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Plans for everyone who cooks with their{" "}
            <span style={{ fontStyle: "italic" }}>hands full.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            Every plan is hands-free, works in Hindi and English, and keeps your kitchen data
            private and DPDP-aligned.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => {
            const featured = t.featured;
            return (
              <div
                key={t.name}
                className="card-lift relative flex flex-col rounded-[14px] border bg-white p-7 md:p-8"
                style={{
                  borderColor: featured ? "var(--slate-700)" : "var(--border)",
                  boxShadow: featured
                    ? "0 12px 32px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.05)"
                    : undefined,
                }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-[14px] font-semibold tracking-[-0.005em] text-fg1">
                    {t.name}
                  </span>
                  {t.pill && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em]"
                      style={{ background: "var(--accent-500)", color: "var(--slate-950)" }}
                    >
                      {t.pill}
                    </span>
                  )}
                </div>
                <div className="mb-3 flex items-baseline gap-2">
                  <span
                    className="text-[44px] tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", lineHeight: 1 }}
                  >
                    {t.price}
                  </span>
                  {t.per && (
                    <span className="text-[13px] text-fg3">{t.per}</span>
                  )}
                </div>
                <p className="mb-6 text-[14px] leading-[1.55] text-fg2">{t.desc}</p>
                <ul className="mb-7 space-y-2.5 text-[14px] text-fg2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span style={{ color: "var(--teal-700)" }} className="mt-1 shrink-0">
                        <Check size={14} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`focus-ring mt-auto rounded-[8px] px-5 py-3 text-[14px] font-medium transition-colors`}
                  style={
                    t.variant === "primary"
                      ? { background: "var(--accent-700)", color: "white" }
                      : t.variant === "dark"
                        ? { background: "var(--slate-700)", color: "var(--bone)" }
                        : {
                            background: "white",
                            color: "var(--fg1)",
                            border: "1px solid var(--border-strong)",
                          }
                  }
                >
                  {t.cta}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══════════════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2
            className="mx-auto max-w-[760px] text-[44px] md:text-[64px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.05, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Put the phone down.{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent-500)" }}>Keep cooking.</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.55]"
            style={{ color: "rgba(239,233,228,0.72)" }}
          >
            Free to start. No card required. Just say &ldquo;Hey RasoiMate&rdquo; and start your
            next recipe.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              className="focus-ring inline-flex items-center gap-2 rounded-[8px] px-7 py-4 text-[15px] font-medium text-white"
              style={{ background: "var(--accent-700)" }}
            >
              Start cooking free
              <ArrowRight size={16} />
            </button>
            <button
              className="focus-ring inline-flex items-center gap-2 rounded-[8px] border px-6 py-4 text-[15px] font-medium"
              style={{
                borderColor: "rgba(239,233,228,0.28)",
                color: "var(--fg-on-dark)",
              }}
            >
              Hear it in action
            </button>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ════════════════════════════════════════════ */}
      <footer
        className="border-t"
        style={{ background: "var(--slate-950)", color: "var(--fg-on-dark)", borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] md:px-10">
          <div>
            <Logo size={28} inverse />
            <p className="mt-4 max-w-[300px] text-[13px] leading-[1.6]" style={{ color: "rgba(239,233,228,0.6)" }}>
              A voice-activated cooking mate that guides you through any recipe — hands-free, in
              your language, step by step.
            </p>
          </div>
          {[
            { h: "Product", items: ["Voice guidance", "Recipe import", "Smart timers", "Substitutions", "Changelog"] },
            { h: "Recipes", items: ["Everyday Indian", "Regional", "Quick meals", "Festive", "Baking"] },
            { h: "Company", items: ["About", "Customers", "Careers", "Press", "Contact"] },
            { h: "Resources", items: ["Help center", "Supported sources", "Trust center", "DPDP Act", "Languages"] },
          ].map((col) => (
            <div key={col.h}>
              <div
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: "rgba(239,233,228,0.55)" }}
              >
                {col.h}
              </div>
              <ul className="space-y-2 text-[13px]">
                {col.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="transition-colors"
                      style={{ color: "rgba(239,233,228,0.8)" }}
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-3 px-6 py-5 text-[12px] md:flex-row md:items-center md:px-10" style={{ color: "rgba(239,233,228,0.55)" }}>
            <span>© {new Date().getFullYear()} RasoiMate, Inc. · Cook safely — keep an eye on open flames and hot oil.</span>
            <div className="flex gap-5">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">DPA</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
