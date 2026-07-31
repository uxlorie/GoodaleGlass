import type { Metadata } from "next";
import { CustomOrderForm } from "@/components/forms/CustomOrderForm";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Custom Orders",
  description:
    "Commission a one-of-a-kind glass piece from Cory Goodale. Share your vision for a custom vase, sculpture, or functional art.",
};

export default function CustomOrdersPage() {
  return (
    <div className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted mb-3">
              Commissions
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-light text-foreground">
              Custom Orders
            </h1>
            <p className="mt-4 text-muted leading-relaxed max-w-xl mx-auto">
              Have a specific vision? Cory collaborates with clients to create
              bespoke glass pieces. Fill out the form below and he&apos;ll
              reach out to discuss your project.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <CustomOrderForm />
        </FadeIn>
      </div>
    </div>
  );
}
