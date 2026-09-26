import type { BorderGlowProps } from "@/components/ui/BorderGlow";

/** Brand-matched defaults for Goodale Glassworks */
export const goodaleBorderGlowDefaults = {
  edgeSensitivity: 30,
  glowColor: "100 39% 52%",
  backgroundColor: "#000000",
  borderRadius: 16,
  glowRadius: 40,
  glowIntensity: 1.0,
  coneSpread: 25,
  colors: ["#ffef62", "#78b553", "#ffef62"],
} satisfies Partial<BorderGlowProps>;
