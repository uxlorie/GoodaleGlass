import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { GlassButton } from "@/components/ui/GlassButton";

export const metadata: Metadata = {
  title: "Order Confirmed",
  robots: { index: false },
};

export default function SuccessPage() {
  return (
    <div className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-lg text-center">
        <FadeIn>
          <GlowPanel className="p-10" animated>
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <svg
                className="h-8 w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="font-display text-3xl font-light text-foreground mb-4">
              Thank You
            </h1>
            <p className="text-muted leading-relaxed mb-8">
              Your purchase is confirmed. Cory will reach out shortly to arrange
              shipping for your piece. A receipt has been sent to your email.
            </p>
            <GlassButton href="/gallery" variant="ghost">
              Continue Browsing
            </GlassButton>
          </GlowPanel>
        </FadeIn>
      </div>
    </div>
  );
}
