"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BuyButton } from "@/components/gallery/BuyButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { PortableTextContent } from "@/components/ui/PortableTextContent";
import { formatPrice } from "@/lib/format";
import { getPlaceholderGradient, getProductImageUrls } from "@/lib/sanity/image";
import { Product } from "@/lib/sanity/types";

interface ProductDetailClientProps {
  product: Product;
  productIndex: number;
}

export function ProductDetailClient({
  product,
  productIndex,
}: ProductDetailClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const imageUrls = getProductImageUrls(product, 1600, 2000).map((src) => ({
    src,
    alt: product.title,
  }));

  const hasImages = imageUrls.length > 0;

  return (
    <div className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <Link
            href="/gallery"
            className="inline-flex items-center text-sm text-muted hover:text-accent transition-colors mb-8"
          >
            &larr; Back to Gallery
          </Link>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="space-y-4">
              {hasImages ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setLightboxIndex(0);
                      setLightboxOpen(true);
                    }}
                    className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl cursor-zoom-in"
                  >
                    <Image
                      src={imageUrls[0].src}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </button>
                  {imageUrls.length > 1 && (
                    <div className="grid grid-cols-4 gap-3">
                      {imageUrls.slice(1).map((img, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setLightboxIndex(i + 1);
                            setLightboxOpen(true);
                          }}
                          className="relative aspect-square overflow-hidden rounded-xl cursor-zoom-in"
                        >
                          <Image
                            src={img.src}
                            alt={`${product.title} ${i + 2}`}
                            fill
                            className="object-cover"
                            sizes="150px"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div
                  className="aspect-[4/5] w-full rounded-2xl"
                  style={{ background: getPlaceholderGradient(productIndex) }}
                />
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted mb-2">
                {product.category}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-light text-foreground">
                {product.title}
              </h1>
              <p className="mt-4 text-2xl text-accent">
                {formatPrice(product.price)}
              </p>

              {product.description && (
                <div className="mt-8">
                  <PortableTextContent value={product.description} />
                </div>
              )}

              <GlowPanel className="mt-8 p-6 space-y-3">
                {product.dimensions && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Dimensions</span>
                    <span className="text-foreground">{product.dimensions}</span>
                  </div>
                )}
                {product.materials && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Materials</span>
                    <span className="text-foreground">{product.materials}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Availability</span>
                  <span className="text-foreground capitalize">
                    {product.availability}
                  </span>
                </div>
              </GlowPanel>

              <div className="mt-8">
                <BuyButton
                  productId={product._id}
                  productTitle={product.title}
                  availability={product.availability}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {hasImages && (
        <ImageLightbox
          images={imageUrls}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
