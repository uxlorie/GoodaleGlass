import Link from "next/link";
import Image from "next/image";
import BorderGlow from "./BorderGlow";
import { formatPrice } from "@/lib/format";
import { goodaleBorderGlowDefaults } from "@/lib/border-glow-defaults";
import { getPrimaryProductImageUrl, getPlaceholderGradient } from "@/lib/sanity/image";
import { Product } from "@/lib/sanity/types";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  product: Product;
  index?: number;
  className?: string;
}

export function GlassCard({ product, index = 0, className }: GlassCardProps) {
  const imageUrl = getPrimaryProductImageUrl(product, 600, 750);

  const isSold = product.availability === "sold";

  return (
    <Link href={`/gallery/${product.slug}`} className={cn("group block", className)}>
      <BorderGlow
        {...goodaleBorderGlowDefaults}
        className="h-full transition-transform duration-500 group-hover:scale-[1.01]"
      >
        <div className="overflow-hidden">
          <div className="relative aspect-[4/5] overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{ background: getPlaceholderGradient(index) }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {isSold && (
            <div className="absolute top-4 right-4 rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 text-xs tracking-widest uppercase text-muted border border-white/10">
              Sold
            </div>
          )}
        </div>
        <div className="p-5">
          <p className="text-xs uppercase tracking-widest text-muted mb-1">
            {product.category}
          </p>
          <h3 className="font-display text-xl font-light text-foreground group-hover:text-accent transition-colors">
            {product.title}
          </h3>
          <p className="mt-2 text-sm text-accent">{formatPrice(product.price)}</p>
        </div>
        </div>
      </BorderGlow>
    </Link>
  );
}
