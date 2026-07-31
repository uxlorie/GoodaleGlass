import { Suspense } from "react";
import type { Metadata } from "next";
import { CategoryFilter } from "@/components/gallery/CategoryFilter";
import { ProductGrid } from "@/components/gallery/ProductGrid";
import { FadeIn } from "@/components/ui/FadeIn";
import { getProductsByCategory } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse one-of-a-kind handcrafted glass art by Cory Goodale. Vases, sculptures, functional pieces, and more.",
};

interface GalleryPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const { category = "all" } = await searchParams;
  const products = await getProductsByCategory(category);

  return (
    <div className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted mb-3">
              Collection
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-light text-foreground">
              Gallery
            </h1>
            <p className="mt-4 text-muted max-w-xl mx-auto">
              Each piece is unique and available until sold.
            </p>
          </div>
        </FadeIn>

        <Suspense fallback={<div className="h-12 glass-shimmer rounded-full mb-12" />}>
          <CategoryFilter />
        </Suspense>

        <FadeIn delay={0.1}>
          <ProductGrid products={products} />
        </FadeIn>
      </div>
    </div>
  );
}
