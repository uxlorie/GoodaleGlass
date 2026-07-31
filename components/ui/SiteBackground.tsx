"use client";

import DarkVeil from "@/components/ui/DarkVeil";

export function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <DarkVeil
        hueShift={210}
        speed={0.35}
        warpAmount={0.2}
        noiseIntensity={0.025}
      />
      <div className="site-background-overlay" />
    </div>
  );
}
