"use client";

import Topography from "@/components/ui/Topography";

export function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <Topography
        lowColor="#78b553"
        midColor="#ffef62"
        highColor="#ffffff"
        speed={0.15}
        morphAmount={3.0}
        morphSpeed={0.05}
        bands={2.0}
        thickness={0.01}
        scale={1.0}
        pixelSize={1.0}
        glow={0.45}
        colorMode="elevation"
        contrast={2.8}
        brightness={0.85}
        fillBands={false}
        opacity={0.7}
        grain={true}
        grainIntensity={0.04}
        mouseInteraction={false}
      />
      <div className="site-background-overlay site-background-overlay--topography" />
    </div>
  );
}
