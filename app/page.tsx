import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { getFeaturedProducts } from "@/lib/sanity/queries";
import { ARTIST_NAME, LOCATION, SITE_TAGLINE, STUDIO_NAME } from "@/lib/constants";

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="font-subheading text-sm tracking-[0.2em] text-accent mb-6">
              {LOCATION}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.1]">
              Art in
              <br />
              <span className="text-accent">Molten Glass</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              {SITE_TAGLINE}. Each piece by {ARTIST_NAME} is a unique
              expression of light, color, and form.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton href="/gallery" size="lg">
                View Gallery
              </GlassButton>
              <GlassButton href="/custom-orders" variant="ghost" size="lg">
                Custom Orders
              </GlassButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-subheading text-sm tracking-[0.2em] text-muted mb-3">
                Featured Work
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-foreground">
                Selected Pieces
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.slice(0, 3).map((product, index) => (
              <FadeIn key={product._id} delay={index * 0.1}>
                <GlassCard product={product} index={index} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <GlassButton href="/gallery" variant="outline">
                View All Pieces
              </GlassButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <GlowPanel animated className="p-8 sm:p-12 lg:p-16" borderRadius={24}>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <FadeIn>
                <p className="font-subheading text-sm tracking-[0.2em] text-accent mb-4">
                  The Artist
                </p>
                <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight">
                  Crafted at {STUDIO_NAME}
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-muted leading-relaxed text-lg">
                  {ARTIST_NAME} transforms molten glass into one-of-a-kind
                  vessels, sculptures, and functional art at {STUDIO_NAME}
                  {" in Pensacola. Inspired by the Gulf Coast's light and color, "}
                  every piece is shaped at the torch with meticulous attention to
                  detail.
                </p>
                <Link
                  href="/about"
                  className="inline-block mt-6 text-accent hover:text-accent/80 transition-colors text-sm tracking-wide"
                >
                  Learn more about Cory &rarr;
                </Link>
              </FadeIn>
            </div>
          </GlowPanel>
        </div>
      </section>

      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-6">
              Have Something Unique in Mind?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Cory accepts custom commissions — from statement vases to
              personalized gifts. Share your vision and collaborate on a
              piece that&apos;s truly yours.
            </p>
            <GlassButton href="/custom-orders" size="lg">
              Start a Custom Order
            </GlassButton>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
