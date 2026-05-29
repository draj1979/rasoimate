/**
 * Hero visual — a window-chromed mock of a RasoiMate cook-along,
 * showing voice-guided recipe steps and their status while the
 * assistant listens hands-free.
 */
export function CookSession() {
  return (
    <div
      className="relative overflow-hidden rounded-[14px] border bg-white"
      style={{
        borderColor: "var(--border)",
        boxShadow:
          "0 12px 32px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-1.5 border-b px-4 py-2.5"
        style={{ borderColor: "var(--border)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span
          className="ml-3 text-[11px] tracking-[-0.01em] text-fg3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          app.rasoimate.com/cook/paneer-butter-masala
        </span>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
          <span
            className="text-[14px] leading-none"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent-700)", letterSpacing: 0, textTransform: "none" }}
          >
            ♨
          </span>
          <span>RasoiMate</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>listening</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>step 6 of 9</span>
        </div>

        <h3
          className="mb-3 text-[19px] leading-[1.3] tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
        >
          &ldquo;How much cream?&rdquo; — answered, hands-free.
        </h3>

        <p className="mb-5 text-[14px] leading-[1.55] text-fg2">
          RasoiMate reads each step aloud, sets the timers, and answers questions like{" "}
          <span className="cite-chip">how much cream?</span> — so you never scrub a video back with
          messy hands.
        </p>

        {/* Step rows */}
        <div
          className="space-y-2 border-t pt-4"
          style={{ borderColor: "var(--border)" }}
        >
          <StepRow n="01" name="Bloom the spices" detail="done" status="done" />
          <StepRow n="02" name="Simmer the gravy" detail="8:00 left" status="now" />
          <StepRow n="03" name="Fold in paneer" detail="up next" status="next" />
        </div>
      </div>
    </div>
  );
}

function StepRow({
  n,
  name,
  detail,
  status,
}: {
  n: string;
  name: string;
  detail: string;
  status: "done" | "now" | "next";
}) {
  const badge = {
    done: {
      label: "Done",
      color: "#2F8F6F",
      bg: "#E6F2EC",
      border: "rgba(47,143,111,0.25)",
    },
    now: {
      label: "Now",
      color: "var(--accent-700)",
      bg: "var(--accent-50)",
      border: "rgba(184,72,15,0.3)",
    },
    next: {
      label: "Next",
      color: "var(--teal-700)",
      bg: "var(--teal-50)",
      border: "rgba(70,92,136,0.25)",
    },
  }[status];
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span
        className="text-[10px] tracking-[0.05em] text-fg4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {n}
      </span>
      <span
        className="text-[14px] tracking-[-0.005em] text-fg1"
        style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
      >
        {name}
      </span>
      <span
        className="text-[11px] text-fg3"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {detail}
      </span>
      <span
        className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
        style={{
          color: badge.color,
          background: badge.bg,
          borderColor: badge.border,
        }}
      >
        {badge.label}
      </span>
    </div>
  );
}
