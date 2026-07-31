import type { PortableTextBlock } from "@portabletext/types";

export type ProductAvailability = "available" | "sold" | "reserved";

export type ProductCategory =
  | "vase"
  | "sculpture"
  | "functional"
  | "ornament"
  | "other";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface Product {
  _id: string;
  title: string;
  slug: string;
  description?: PortableTextBlock[];
  price: number;
  images: SanityImage[];
  category: ProductCategory;
  dimensions?: string;
  materials?: string;
  availability: ProductAvailability;
  featured?: boolean;
  stripePriceId?: string;
  /** Fallback image URLs used when Sanity images aren't configured */
  placeholderImages?: string[];
}

export interface SiteSettings {
  siteTitle: string;
  tagline: string;
  aboutText?: PortableTextBlock[];
  contactEmail: string;
  instagram?: string;
  facebook?: string;
  heroImage?: SanityImage;
}

export interface CustomOrderInquiry {
  customerName: string;
  email: string;
  phone?: string;
  pieceDescription: string;
  dimensions?: string;
  colors?: string;
  budgetRange?: string;
  timeline?: string;
}
