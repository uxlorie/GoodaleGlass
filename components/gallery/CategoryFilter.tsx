"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CategoryFilter() {
  const searchParams = useSearchParams();
  const current = searchParams.get("category") || "all";

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {PRODUCT_CATEGORIES.map((cat) => (
        <Link
          key={cat.value}
          href={cat.value === "all" ? "/gallery" : `/gallery?category=${cat.value}`}
          className={cn(
            "rounded-full px-5 py-2 text-sm transition-all duration-300 border",
            current === cat.value
              ? "bg-accent/20 border-accent/40 text-accent"
              : "bg-white/5 border-white/10 text-muted hover:border-white/20 hover:text-foreground"
          )}
        >
          {cat.label}
        </Link>
      ))}
    </div>
  );
}
