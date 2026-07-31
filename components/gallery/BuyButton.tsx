"use client";

import { useState } from "react";
import { GlassButton } from "@/components/ui/GlassButton";
import { isStripeClientConfigured } from "@/lib/stripe";

interface BuyButtonProps {
  productId: string;
  productTitle: string;
  availability: string;
}

export function BuyButton({
  productId,
  productTitle,
  availability,
}: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isAvailable = availability === "available";
  const stripeReady = isStripeClientConfigured();

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Checkout failed");
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  if (!isAvailable) {
    return (
      <GlassButton variant="outline" disabled size="lg" className="w-full sm:w-auto">
        {availability === "sold" ? "Sold" : "Reserved"}
      </GlassButton>
    );
  }

  if (!stripeReady) {
    return (
      <div className="space-y-2">
        <GlassButton variant="outline" disabled size="lg" className="w-full sm:w-auto">
          Checkout Coming Soon
        </GlassButton>
        <p className="text-xs text-muted">
          Contact Cory to purchase {productTitle}.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <GlassButton
        size="lg"
        className="w-full sm:w-auto"
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? "Redirecting..." : "Buy Now"}
      </GlassButton>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <p className="text-xs text-muted">
        Secure checkout via Stripe. Shipping arranged after purchase.
      </p>
    </div>
  );
}
