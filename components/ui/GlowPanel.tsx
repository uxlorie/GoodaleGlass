"use client";

import BorderGlow from "@/components/ui/BorderGlow";
import { goodaleBorderGlowDefaults } from "@/lib/border-glow-defaults";
import { cn } from "@/lib/utils";

interface GlowPanelProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  borderRadius?: number;
}

export function GlowPanel({
  children,
  className,
  animated = false,
  borderRadius,
}: GlowPanelProps) {
  return (
    <BorderGlow
      {...goodaleBorderGlowDefaults}
      animated={animated}
      borderRadius={borderRadius ?? goodaleBorderGlowDefaults.borderRadius}
      className={cn(className)}
    >
      {children}
    </BorderGlow>
  );
}
