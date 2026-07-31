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
    "linear-gradient(135deg, #1a1520 0%, #3d2a1a 50%, #d4a574 100%)",
    "linear-gradient(135deg, #0f1419 0%, #1a3040 50%, #a8c8e8 100%)",
    "linear-gradient(135deg, #1a1010 0%, #4a2020 50%, #d47474 100%)",
    "linear-gradient(135deg, #101018 0%, #202040 50%, #8888cc 100%)",
  ];
  return gradients[index % gradients.length];
}
