import { createClient, type SanityClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const isSanityConfigured = Boolean(projectId && dataset);

export function createSanityClient(): SanityClient | null {
  if (!isSanityConfigured) return null;

  return createClient({
    projectId: projectId!,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN,
  });
}

export const sanityClient = createSanityClient();

export function createWriteClient(): SanityClient | null {
  if (!isSanityConfigured || !process.env.SANITY_API_TOKEN) return null;

  return createClient({
    projectId: projectId!,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  });
}
