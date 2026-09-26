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
            <p className="font-subheading text-sm tracking-[0.2em] text-muted mb-3">
              The Artist
            </p>
            <h1 className="font-display text-4xl sm:text-6xl text-foreground">
              About {ARTIST_NAME}
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center mb-12">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/images/cory-goodale-at-torch.jpg"
                alt={`${ARTIST_NAME} shaping glass at the torch in his studio at ${STUDIO_NAME}`}
                fill
                className="object-cover object-center"
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
                      Crafting one-of-a-kind hand-blown glass in Pensacola,
                      Florida, Cory Goodale turns molten glass into lasting art.
                      Working out of the First City Art Center, his designs draw
                      deep inspiration from the warmth and coastal beauty of the
                      Gulf Coast.
                    </p>
                    <p className="text-muted leading-relaxed text-lg">
                      Cory&apos;s creative energy extends far past the studio. A
                      dedicated daily yoga practitioner, flow artist, and music
                      lover, he thrives on movement, community, and genuine human
                      connection. Cory believes art is best shared—and whether
                      through a custom piece or a conversation, he loves bringing
                      people together.
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
