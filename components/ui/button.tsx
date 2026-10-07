import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "white";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "btn-shine bg-accent text-ink shadow-[0_0_0_1px_rgba(52,198,247,0.35),0_10px_30px_-10px_rgba(52,198,247,0.7)] hover:-translate-y-0.5 hover:bg-accent-deep hover:shadow-[0_0_0_1px_rgba(52,198,247,0.5),0_16px_40px_-10px_rgba(52,198,247,0.8)]",
  secondary:
    "border border-white/12 bg-white/[0.04] text-white backdrop-blur-md hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]",
  ghost: "text-body-soft hover:bg-white/[0.06] hover:text-white",
  white:
    "bg-white text-ink shadow-[0_10px_30px_-12px_rgba(255,255,255,0.45)] hover:-translate-y-0.5 hover:bg-white/90",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-[52px] px-8 text-base",
};

type Common = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: "right" | "up" | false;
  className?: string;
  children: React.ReactNode;
};

function Arrow({ kind }: { kind: "right" | "up" }) {
  const Icon = kind === "up" ? ArrowUpRight : ArrowRight;
  return (
    <Icon
      aria-hidden
      className={cn(
        "h-4 w-4 shrink-0 transition-transform duration-300",
        kind === "up"
          ? "group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
          : "group-hover/btn:translate-x-1"
      )}
    />
  );
}

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  ...rest
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {arrow && <Arrow kind={arrow} />}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  external,
}: Common & { href: string; external?: boolean }) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {arrow && <Arrow kind={arrow} />}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {arrow && <Arrow kind={arrow} />}
    </Link>
  );
}
