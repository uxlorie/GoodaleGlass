"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-muted leading-relaxed mb-4">{children}</p>
    ),
  },
};

interface PortableTextContentProps {
  value: PortableTextBlock[];
}

export function PortableTextContent({ value }: PortableTextContentProps) {
  if (!value || value.length === 0) return null;
  return <PortableText value={value} components={components} />;
}
