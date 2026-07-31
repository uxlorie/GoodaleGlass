import { NextRequest, NextResponse } from "next/server";
import { createCustomOrderInquiry } from "@/lib/sanity/queries";
import { isSanityConfigured } from "@/lib/sanity/client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      customerName,
      email,
      phone,
      pieceDescription,
      dimensions,
      colors,
      budgetRange,
      timeline,
    } = body;

    if (!customerName || !email || !pieceDescription) {
      return NextResponse.json(
        { error: "Name, email, and piece description are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (isSanityConfigured) {
      const id = await createCustomOrderInquiry({
        customerName,
        email,
        phone,
        pieceDescription,
        dimensions,
        colors,
        budgetRange,
        timeline,
      });

      if (!id) {
        return NextResponse.json(
          { error: "Failed to save inquiry. Check Sanity API token." },
          { status: 500 }
        );
      }
    } else {
      console.log("Custom order inquiry (Sanity not configured):", body);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Custom order error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
