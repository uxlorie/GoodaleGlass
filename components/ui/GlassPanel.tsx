import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong";
}

export function GlassPanel({
  className,
  variant = "default",
  children,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-2xl shadow-lg",
        variant === "default" && "glass-panel",
        variant === "strong" &&
          "bg-white/10 backdrop-blur-2xl border border-white/15",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
