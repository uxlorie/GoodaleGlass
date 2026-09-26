import { Product, SiteSettings } from "./types";
import { PLACEHOLDER_GLASS_IMAGES } from "./placeholder-images";

export const fallbackProducts: Product[] = [
  {
    _id: "fallback-1",
    title: "Amber Horizon Vase",
    slug: "amber-horizon-vase",
    price: 45000,
    category: "vase",
    dimensions: '12" H × 6" W',
    materials: "Borosilicate glass",
    availability: "available",
    featured: true,
    images: [],
    placeholderImages: [...PLACEHOLDER_GLASS_IMAGES.amberVase],
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A sweeping amber gradient vase with organic curves, inspired by Gulf Coast sunsets over Pensacola Beach.",
          },
        ],
      },
    ],
  },
  {
    _id: "fallback-2",
    title: "Coastal Bloom Sculpture",
    slug: "coastal-bloom-sculpture",
    price: 68000,
    category: "sculpture",
    dimensions: '8" H × 10" W',
    materials: "Soft glass, silver fume",
    availability: "available",
    featured: true,
    images: [],
    placeholderImages: [...PLACEHOLDER_GLASS_IMAGES.coastalSculpture],
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "An ethereal floral sculpture with iridescent blue-green tones reminiscent of coastal waters.",
          },
        ],
      },
    ],
  },
  {
    _id: "fallback-3",
    title: "Molten Core Paperweight",
    slug: "molten-core-paperweight",
    price: 12000,
    category: "functional",
    dimensions: '3" diameter',
    materials: "Borosilicate glass, gold fume",
    availability: "available",
    featured: false,
    images: [],
    placeholderImages: [...PLACEHOLDER_GLASS_IMAGES.paperweight],
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A compact paperweight with a glowing molten center — a perfect desk accent.",
          },
        ],
      },
    ],
  },
  {
    _id: "fallback-4",
    title: "Gulf Glass Ornament",
    slug: "gulf-glass-ornament",
    price: 8500,
    category: "ornament",
    dimensions: '4" H',
    materials: "Borosilicate glass",
    availability: "sold",
    featured: false,
    images: [],
    placeholderImages: [...PLACEHOLDER_GLASS_IMAGES.ornament],
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A delicate hanging ornament with swirls of seafoam and sand.",
          },
        ],
      },
    ],
  },
];

export const fallbackSiteSettings: SiteSettings = {
  siteTitle: "Goodale Glassworks",
  tagline: "Handcrafted glass art from Pensacola, Florida",
  contactEmail: "cory@goodaleglass.com",
  instagram: "https://www.instagram.com/corytylergoodbeer/",
  facebook: "https://www.facebook.com/cory.goodale.3",
  aboutText: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Crafting one-of-a-kind hand-blown glass in Pensacola, Florida, Cory Goodale turns molten glass into lasting art. Working out of the First City Art Center, his designs draw deep inspiration from the warmth and coastal beauty of the Gulf Coast.",
        },
      ],
    },
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Cory's creative energy extends far past the studio. A dedicated daily yoga practitioner, flow artist, and music lover, he thrives on movement, community, and genuine human connection. Cory believes art is best shared—and whether through a custom piece or a conversation, he loves bringing people together.",
        },
      ],
    },
  ],
};
