import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { GlassButton } from "@/components/ui/GlassButton";

export const metadata: Metadata = {
  title: "Checkout Cancelled",
  robots: { index: false },
};

export default function CancelPage() {
  return (
    <div className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-lg text-center">
        <FadeIn>
          <GlowPanel className="p-10">
            <h1 className="font-display text-3xl font-light text-foreground mb-4">
              Checkout Cancelled
            </h1>
            <p className="text-muted leading-relaxed mb-8">
              No worries — your piece is still available. Feel free to continue
              browsing or reach out if you have any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton href="/gallery">Back to Gallery</GlassButton>
              <GlassButton href="/contact" variant="ghost">
                Contact Cory
              </GlassButton>
            </div>
          </GlowPanel>
        </FadeIn>
      </div>
    </div>
  );
}
