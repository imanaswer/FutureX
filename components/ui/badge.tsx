import { cn } from "@/lib/utils";

/* Eyebrow pill used above headings. `dot` adds a live indicator. */
export function Badge({
  children,
  icon,
  dot = false,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  dot?: boolean;
  tone?: "default" | "accent" | "solid";
  className?: string;
}) {
  const tones = {
    default: "border-white/10 bg-white/[0.04] text-body-soft",
    accent: "border-accent/25 bg-accent/10 text-accent",
    solid: "border-transparent bg-accent text-ink",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.8rem] font-medium leading-none backdrop-blur-md",
        tones[tone],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      {icon && <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">{icon}</span>}
      {children}
    </span>
  );
}

/* Small mono chip for data (course codes, levels). */
export function Chip({
  children,
  active = false,
  className,
}: {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-1 font-mono text-[0.68rem] font-semibold tracking-wide",
        active
          ? "border-accent/40 bg-accent/15 text-accent"
          : "border-white/10 bg-white/[0.04] text-body-soft",
        className
      )}
    >
      {children}
    </span>
  );
}
