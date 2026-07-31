import type { BorderGlowProps } from "@/components/ui/BorderGlow";

/** Brand-matched defaults for Goodale Glass molten glass aesthetic */
export const goodaleBorderGlowDefaults = {
  edgeSensitivity: 30,
  glowColor: "35 55 65",
  backgroundColor: "#0a0a0f",
  borderRadius: 16,
  glowRadius: 40,
  glowIntensity: 1.0,
  coneSpread: 25,
  colors: ["#d4a574", "#a8c8e8", "#38bdf8"],
} satisfies Partial<BorderGlowProps>;
