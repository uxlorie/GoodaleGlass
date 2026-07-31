import { GlassCard } from "@/components/ui/GlassCard";
import { Product } from "@/lib/sanity/types";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted text-lg">No pieces found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <GlassCard key={product._id} product={product} index={index} />
      ))}
    </div>
  );
}
