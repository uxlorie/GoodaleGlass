"use client";

import { useState } from "react";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { GlassButton } from "@/components/ui/GlassButton";

export function CustomOrderForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      customerName: formData.get("customerName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      pieceDescription: formData.get("pieceDescription") as string,
      dimensions: (formData.get("dimensions") as string) || undefined,
      colors: (formData.get("colors") as string) || undefined,
      budgetRange: (formData.get("budgetRange") as string) || undefined,
      timeline: (formData.get("timeline") as string) || undefined,
    };

    try {
      const res = await fetch("/api/custom-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <GlowPanel className="p-8 text-center">
        <h3 className="font-display text-2xl text-accent mb-3">Inquiry Received</h3>
        <p className="text-muted leading-relaxed">
          Thank you for your interest. Cory will review your custom order request
          and reach out within 2–3 business days.
        </p>
        <GlassButton
          variant="ghost"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Submit Another Inquiry
        </GlassButton>
      </GlowPanel>
    );
  }

  const inputClass =
    "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors";

  return (
    <GlowPanel className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="customerName" className="block text-sm text-muted mb-2">
              Name *
            </label>
            <input
              id="customerName"
              name="customerName"
              type="text"
              required
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-muted mb-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-muted mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="pieceDescription" className="block text-sm text-muted mb-2">
            Describe Your Piece *
          </label>
          <textarea
            id="pieceDescription"
            name="pieceDescription"
            required
            rows={4}
            className={inputClass}
            placeholder="Tell Cory about the piece you envision — shape, purpose, inspiration..."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="dimensions" className="block text-sm text-muted mb-2">
              Desired Dimensions
            </label>
            <input
              id="dimensions"
              name="dimensions"
              type="text"
              className={inputClass}
              placeholder='e.g. 10" tall, 5" wide'
            />
          </div>
          <div>
            <label htmlFor="colors" className="block text-sm text-muted mb-2">
              Colors / Style
            </label>
            <input
              id="colors"
              name="colors"
              type="text"
              className={inputClass}
              placeholder="e.g. amber and blue, iridescent"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="budgetRange" className="block text-sm text-muted mb-2">
              Budget Range
            </label>
            <input
              id="budgetRange"
              name="budgetRange"
              type="text"
              className={inputClass}
              placeholder="e.g. $200–$500"
            />
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm text-muted mb-2">
              Desired Timeline
            </label>
            <input
              id="timeline"
              name="timeline"
              type="text"
              className={inputClass}
              placeholder="e.g. 4–6 weeks"
            />
          </div>
        </div>

        {status === "error" && (
          <p className="text-sm text-red-400">{errorMessage}</p>
        )}

        <GlassButton
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="w-full sm:w-auto"
        >
          {status === "loading" ? "Submitting..." : "Submit Custom Order Inquiry"}
        </GlassButton>
      </form>
    </GlowPanel>
  );
}
