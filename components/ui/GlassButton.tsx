import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  href?: string;
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-accent/90 text-background hover:bg-accent shadow-[0_0_30px_rgba(212,165,116,0.25)] hover:shadow-[0_0_40px_rgba(212,165,116,0.35)]",
  ghost:
    "bg-white/5 text-foreground hover:bg-white/10 border border-white/10 backdrop-blur-xl",
  outline:
    "bg-transparent text-foreground border border-white/20 hover:border-accent/50 hover:text-accent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function GlassButton({
  className,
  variant = "primary",
  size = "md",
  href,
  children,
  disabled,
  ...props
}: GlassButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
