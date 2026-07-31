# Goodale Glass

Premium e-commerce website for Cory Goodale — handcrafted glass art from Pensacola, Florida.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4** with glassmorphism design
- **Sanity CMS** for product and content management
- **Stripe Checkout** for online purchases
- **Framer Motion** for subtle animations

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.local.example .env.local
```

3. Configure services in `.env.local`:

- **Sanity**: Create a project at [sanity.io](https://www.sanity.io), add project ID and API token
- **Stripe**: Add test/live keys from [stripe.com](https://stripe.com)

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content Management

Sanity Studio is embedded at `/studio`. Cory can:

- Upload HD product photos
- Add/edit pieces and prices
- Mark items as sold
- Review custom order inquiries

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home with featured pieces |
| `/gallery` | Full product catalog with category filters |
| `/gallery/[slug]` | Product detail with buy button |
| `/custom-orders` | Custom commission inquiry form |
| `/about` | About Cory Goodale |
| `/contact` | Contact information |
| `/studio` | Sanity CMS admin |

## Stripe Webhooks (Local)

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET` in `.env.local`.

## Deploy

Deploy to [Vercel](https://vercel.com) and add all environment variables from `.env.local.example`.
