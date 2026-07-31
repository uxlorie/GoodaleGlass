import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { GlassButton } from "@/components/ui/GlassButton";
import { getSiteSettings } from "@/lib/sanity/queries";
import { ARTIST_NAME, LOCATION, STUDIO_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${ARTIST_NAME} for inquiries, custom orders, or general questions.`,
};

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <div className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted mb-3">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-light text-foreground">
              Contact
            </h1>
            <p className="mt-4 text-muted">
              Questions about a piece, shipping, or a custom commission? Reach
              out — Cory would love to hear from you.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GlowPanel className="p-8 sm:p-12 space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted mb-2">
                Email
              </h3>
              <a
                href={`mailto:${settings.contactEmail}`}
                className="text-xl text-accent hover:text-accent/80 transition-colors"
              >
                {settings.contactEmail}
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted mb-2">
                Location
              </h3>
              <p className="text-foreground">
                {ARTIST_NAME}
                <br />
                {STUDIO_NAME}
                <br />
                {LOCATION}
              </p>
            </div>

            {(settings.instagram || settings.facebook) && (
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted mb-2">
                  Social
                </h3>
                <div className="flex gap-4">
                  {settings.instagram && (
                    <a
                      href={settings.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      Instagram
                    </a>
                  )}
                  {settings.facebook && (
                    <a
                      href={settings.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      Facebook
                    </a>
                  )}
                </div>
              </div>
            )}
          </GlowPanel>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-center mt-12 space-y-4">
            <p className="text-muted text-sm">
              Interested in a custom piece?
            </p>
            <GlassButton href="/custom-orders" variant="ghost">
              Submit a Custom Order Inquiry
            </GlassButton>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
