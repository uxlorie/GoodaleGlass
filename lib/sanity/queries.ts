import { sanityClient, isSanityConfigured } from "./client";
import { fallbackProducts, fallbackSiteSettings } from "./fallback-data";
import { Product, SiteSettings } from "./types";

const productFields = `
  _id,
  title,
  "slug": slug.current,
  description,
  price,
  images,
  category,
  dimensions,
  materials,
  availability,
  featured,
  stripePriceId
`;

function enrichWithPlaceholderImages(products: Product[]): Product[] {
  return products.map((product) => {
    if (product.images.length > 0 || product.placeholderImages?.length) {
      return product;
    }
    const fallback = fallbackProducts.find((p) => p.slug === product.slug);
    if (fallback?.placeholderImages) {
      return { ...product, placeholderImages: fallback.placeholderImages };
    }
    return product;
  });
}

export async function getProducts(): Promise<Product[]> {
  if (!isSanityConfigured || !sanityClient) {
    return fallbackProducts;
  }

  try {
    const products = await sanityClient.fetch<Product[]>(
      `*[_type == "product"] | order(_createdAt desc) { ${productFields} }`
    );
    const result = products.length > 0 ? products : fallbackProducts;
    return enrichWithPlaceholderImages(result);
  } catch {
    return fallbackProducts;
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getProducts();
  const featured = products.filter((p) => p.featured);
  return featured.length > 0 ? featured : products.slice(0, 3);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!isSanityConfigured || !sanityClient) {
    return fallbackProducts.find((p) => p.slug === slug) ?? null;
  }

  try {
    const product = await sanityClient.fetch<Product | null>(
      `*[_type == "product" && slug.current == $slug][0] { ${productFields} }`,
      { slug }
    );
    if (product) {
      return enrichWithPlaceholderImages([product])[0];
    }
    return fallbackProducts.find((p) => p.slug === slug) ?? null;
  } catch {
    return fallbackProducts.find((p) => p.slug === slug) ?? null;
  }
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const products = await getProducts();
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured || !sanityClient) {
    return fallbackSiteSettings;
  }

  try {
    const settings = await sanityClient.fetch<SiteSettings>(
      `*[_type == "siteSettings"][0] {
        siteTitle,
        tagline,
        aboutText,
        contactEmail,
        instagram,
        facebook,
        heroImage
      }`
    );
    return settings ?? fallbackSiteSettings;
  } catch {
    return fallbackSiteSettings;
  }
}

export async function markProductSold(productId: string): Promise<void> {
  const { createWriteClient } = await import("./client");
  const writeClient = createWriteClient();
  if (!writeClient) return;

  await writeClient
    .patch(productId)
    .set({ availability: "sold" })
    .commit();
}

export async function createCustomOrderInquiry(data: {
  customerName: string;
  email: string;
  phone?: string;
  pieceDescription: string;
  dimensions?: string;
  colors?: string;
  budgetRange?: string;
  timeline?: string;
}): Promise<string | null> {
  const { createWriteClient } = await import("./client");
  const writeClient = createWriteClient();
  if (!writeClient) return null;

  const doc = await writeClient.create({
    _type: "customOrderInquiry",
    ...data,
    status: "new",
    submittedAt: new Date().toISOString(),
  });

  return doc._id;
}
