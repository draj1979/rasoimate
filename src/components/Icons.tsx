/**
 * Inline SVG icons in the Lucide visual style — 24×24 default,
 * stroke 1.5, rounded line caps, currentColor inheritance.
 * Matches the RasoiMate design-system spec without adding the
 * lucide-react dependency.
 */
type Props = { size?: number; className?: string; strokeWidth?: number };

const base = (size: number, sw: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
});

export function ArrowRight({ size = 16, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function ChevronRight({ size = 14, className, strokeWidth = 1.75 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function ChevronDown({ size = 13, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Check({ size = 14, className, strokeWidth = 2 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Book({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M2 4v17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4M2 4a3 3 0 0 1 3-3h15v18H5a3 3 0 0 0-3 3M2 4a3 3 0 0 0 3 3h13" />
    </svg>
  );
}

export function Filter({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M3 6h18M6 12h12M10 18h4" />
    </svg>
  );
}

export function Settings({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function Briefcase({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

export function Shield({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8z" />
    </svg>
  );
}

export function FileText({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

export function Sparkles({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="m12 3-1.9 5.8L4.3 10.6l5.8 1.9L12 18l1.9-5.5 5.8-1.9-5.8-1.8z" />
      <path d="M19 3v4M21 5h-4" />
    </svg>
  );
}

export function X({ size = 16, className, strokeWidth = 1.75 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function Play({ size = 14, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)} fill="currentColor">
      <path d="M6 4v16l13-8z" />
    </svg>
  );
}

export function Mic({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
      <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" />
    </svg>
  );
}

export function Clock({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Flame({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

export function Link({ size = 18, className, strokeWidth = 1.5 }: Props) {
  return (
    <svg {...base(size, strokeWidth, className)}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
