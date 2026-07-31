import { NextRequest, NextResponse } from "next/server";
import { getProducts } from "@/lib/sanity/queries";
import { getStripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured" },
        { status: 503 }
      );
    }

    const { productId } = await request.json();
    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const products = await getProducts();
    const product = products.find((p) => p._id === productId);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    if (product.availability !== "available") {
      return NextResponse.json(
        { error: "This piece is no longer available" },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: product.stripePriceId
        ? [{ price: product.stripePriceId, quantity: 1 }]
        : [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: product.title,
                  description: `${product.category} — handcrafted glass art by Cory Goodale`,
                },
                unit_amount: product.price,
              },
              quantity: 1,
            },
          ],
      metadata: {
        productId: product._id,
        productSlug: product.slug,
      },
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
