import createImageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "./client";
import { Product, SanityImage } from "./types";

const builder =
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset })
    : null;

export function urlFor(source: SanityImage) {
  if (!builder) {
    throw new Error("Sanity image builder not configured");
  }
  return builder.image(source);
}

export function getProductImageUrl(
  source: SanityImage | undefined,
  width = 800,
  height = 1000
): string | null {
  if (!source || !builder) return null;
  return builder.image(source).width(width).height(height).fit("crop").url();
}

export function getProductImageUrls(
  product: Product,
  width = 800,
  height = 1000
): string[] {
  if (product.images.length > 0 && builder) {
    return product.images
      .map((img) => getProductImageUrl(img, width, height))
      .filter((url): url is string => Boolean(url));
  }

  return product.placeholderImages ?? [];
}

export function getPrimaryProductImageUrl(
  product: Product,
  width = 800,
  height = 1000
): string | null {
  const urls = getProductImageUrls(product, width, height);
  return urls[0] ?? null;
}

export function getPlaceholderGradient(index: number): string {
  const gradients = [
    "linear-gradient(135deg, #000000 0%, #241f1f 50%, #78b553 100%)",
    "linear-gradient(135deg, #241f1f 0%, #3a4a2a 50%, #ffef62 100%)",
    "linear-gradient(135deg, #000000 0%, #2a3520 50%, #78b553 100%)",
    "linear-gradient(135deg, #241f1f 0%, #4a5a30 50%, #ffef62 100%)",
  ];
  return gradients[index % gradients.length];
}
