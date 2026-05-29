/**
 * RasoiMate wordmark — a charcoal rounded square holding a bone
 * lidded cooking pot with an orange corner-tab, paired with the
 * wordmark "RasoiMate" (italic "Mate") in display serif.
 */
export function Logo({ size = 32, inverse = false }: { size?: number; inverse?: boolean }) {
  const slate = inverse ? "var(--bone)" : "var(--slate-700)";
  const bone = inverse ? "var(--slate-700)" : "var(--bone)";
  const accent = "var(--accent-500)";
  const text = inverse ? "var(--bone)" : "var(--slate-700)";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 56 56"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="4" y="4" width="48" height="48" rx="8" fill={slate} />
        <Pot fill={bone} />
        <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill={accent} />
      </svg>
      <span
        className="text-[24px] tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-display)", color: text }}
      >
        Rasoi
        <em style={{ fontStyle: "italic" }}>Mate</em>
      </span>
    </div>
  );
}

/** Just the rounded mark — used as favicon-style accent. */
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden="true">
      <rect x="4" y="4" width="48" height="48" rx="8" fill="var(--slate-700)" />
      <Pot fill="var(--bone)" />
      <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill="var(--accent-500)" />
    </svg>
  );
}

/** A lidded pot — domed lid with a knob, tapered body, side handles. */
function Pot({ fill }: { fill: string }) {
  return (
    <g fill={fill}>
      {/* domed lid */}
      <path d="M16 29Q28 21 40 29Z" />
      {/* lid knob */}
      <circle cx="28" cy="21.4" r="1.7" />
      {/* body */}
      <path d="M18.5 30H37.5L35 41.5Q34.7 43 33 43H23Q21.3 43 21 41.5Z" />
      {/* handles */}
      <rect x="13" y="30.4" width="4" height="2.4" rx="1.2" />
      <rect x="39" y="30.4" width="4" height="2.4" rx="1.2" />
    </g>
  );
}
