import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { GlassButton } from "@/components/ui/GlassButton";
import { PortableTextContent } from "@/components/ui/PortableTextContent";
import { getSiteSettings } from "@/lib/sanity/queries";
import { ARTIST_NAME, LOCATION, STUDIO_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${ARTIST_NAME}, glass artist at ${STUDIO_NAME} in ${LOCATION}.`,
};

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <div className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted mb-3">
              The Artist
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-light text-foreground">
              About {ARTIST_NAME}
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center mb-12">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/images/cory-goodale.jpg"
                alt={`${ARTIST_NAME} in his glassblowing studio at ${STUDIO_NAME}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <GlowPanel className="p-8 sm:p-10 h-full">
              <div className="prose prose-invert max-w-none">
                {settings.aboutText ? (
                  <PortableTextContent value={settings.aboutText} />
                ) : (
                  <>
                    <p className="text-muted leading-relaxed text-lg mb-6">
                      {ARTIST_NAME} is a glass artist based in {LOCATION}. He
                      creates one-of-a-kind vessels, sculptures, and functional
                      art at the torch — each piece shaped by hand with
                      meticulous attention to color, form, and light.
                    </p>
                    <p className="text-muted leading-relaxed text-lg">
                      Cory blows glass at{" "}
                      <span className="text-foreground">{STUDIO_NAME}</span>, a
                      community arts center in Pensacola where artists gather to
                      work, teach, and share their craft. The Gulf Coast&apos;s
                      golden light and shifting blues inspire every piece he
                      creates.
                    </p>
                  </>
                )}
              </div>
            </GlowPanel>
          </div>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "The Process",
              description:
                "Every piece begins at the torch. Cory gathers molten glass, shapes it with tools and breath, and anneals each creation for lasting durability.",
            },
            {
              title: "One of a Kind",
              description:
                "No two pieces are identical. Color reactions, timing, and hand movements ensure each creation is truly unique.",
            },
            {
              title: "First City Art Center",
              description:
                "Cory blows glass at First City Art Center in Pensacola — a vibrant community arts hub supporting local makers and celebrating the craft of glassblowing on the Gulf Coast.",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={0.15 + i * 0.1}>
              <GlowPanel className="p-6 h-full">
                <h3 className="font-display text-xl text-accent mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </GlowPanel>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-16">
            <GlassButton href="/gallery" size="lg">
              Explore the Gallery
            </GlassButton>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
