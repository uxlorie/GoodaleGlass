export const SITE_NAME = "Goodale Glassworks";
export const SITE_TAGLINE = "Handcrafted glass art from Pensacola, Florida";
export const ARTIST_NAME = "Cory Goodale";
export const LOCATION = "Pensacola, Florida";
export const STUDIO_NAME = "First City Art Center";
export const STUDIO_DESCRIPTION =
  "Cory blows glass at First City Art Center in Pensacola, Florida — a community arts hub where molten glass meets Gulf Coast creativity.";

export const NAV_LINKS = [
  { href: "/gallery", label: "Gallery" },
  { href: "/custom-orders", label: "Custom Orders" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const PRODUCT_CATEGORIES = [
  { value: "all", label: "All Pieces" },
  { value: "vase", label: "Vases" },
  { value: "sculpture", label: "Sculptures" },
  { value: "functional", label: "Functional" },
  { value: "ornament", label: "Ornaments" },
  { value: "other", label: "Other" },
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]["value"];
