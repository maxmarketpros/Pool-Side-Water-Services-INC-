# LocalMark Template

A reusable, production-quality Next.js website template for local service businesses. Built to be cloned and customized per client — swap config files, colors, and images to create a new branded site.

## Tech Stack

- **Next.js 15** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4** (design tokens via `@theme`)
- **Plus Jakarta Sans** font
- **lucide-react** icons

## Quick Start

```bash
npm install
npm run dev     # Development server at localhost:3000
npm run build   # Static export to out/ directory
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Full hero, about preview, services grid, standards, process, testimonials, FAQ, CTA |
| About | `/about` | Company story, values, team, process, testimonials |
| Services Index | `/services` | Service card grid |
| Service Detail | `/services/[slug]` | Per-service page with benefits, features, FAQ |
| Contact | `/contact` | Contact form, business info, FAQ |
| 404 | Any invalid route | Custom not-found page |

## How to Create a New Client Site

### 1. Update Business Info

Edit `src/config/business.ts`:
- Phone, email, address
- Hours of operation
- Service areas
- Years of experience, projects completed

Edit `src/config/site.ts`:
- Business name, tagline, description
- Website URL
- Social media links

### 2. Update Colors

Edit `src/app/globals.css` — change the `--color-primary-*` values in the `@theme` block. The entire site adapts automatically. Only need to change the primary palette (50-900).

Also update the TS mirror in `src/config/theme.ts` to keep in sync.

### 3. Update Content

| File | What it controls |
|------|-----------------|
| `src/config/services.ts` | Service definitions (title, slug, descriptions, benefits, features) |
| `src/config/homepage.ts` | Homepage section content (hero, about preview, standards, CTA) |
| `src/config/about.ts` | About page content (story, values, team) |
| `src/config/testimonials.ts` | Client testimonials |
| `src/config/faqs.ts` | FAQ entries (global + per-service + contact) |
| `src/config/process.ts` | Process steps |
| `src/config/stats.ts` | Trust numbers (hero stats, about stats) |
| `src/config/navigation.ts` | Nav items and footer link groups |

### 4. Assign Images

All images are managed through `src/config/images.ts` — the image manifest.

**Steps:**
1. Add client images to `public/images/`
2. Update the manifest to point each slot to the correct file
3. Update alt text for each image

**Image slots include:**
- `hero-home` — Homepage hero background (1920x1080)
- `about-preview` — Homepage about section (800x1000)
- `standards-feature` — Homepage standards section (800x1000)
- `service-1`, `service-2`, `service-3` — Service cards (800x600)
- `service-N-hero` — Service page heroes (1920x600)
- `service-N-detail-1/2` — Service page detail images (800x600)
- `about-hero`, `about-story`, `about-team` — About page images
- `contact-hero` — Contact page hero
- `testimonial-1/2/3` — Client avatars (200x200)
- `logo`, `logo-white` — Brand logos (SVG)

**Focal point support:**
Each image can specify `focalPoint: { x: 0.5, y: 0.3 }` (0-1 range) to control which part of the image stays visible when cropped.

### 5. Replace Logo

Replace `public/images/logo.svg` and `public/images/logo-white.svg`, or update the Header/Footer to use your logo component.

### 6. Build and Deploy

```bash
npm run build   # Outputs to out/ directory
```

Deploy the `out/` directory to any static host: Netlify, Cloudflare Pages, Vercel, S3+CloudFront, etc.

## Image Placeholder System

Before real images are assigned, the site displays styled placeholder blocks showing the slot name and a camera icon. These placeholders:
- Use dark backgrounds for hero/overlay contexts
- Use light backgrounds for card and section contexts
- Keep the layout stable regardless of whether images exist

## Future Image Assignment Workflow

The architecture supports a workflow where you can:
1. Add 10-20 client images to `public/images/`
2. Ask Claude to analyze them and assign each to the best slot based on composition
3. Claude updates `src/config/images.ts` with the assignments

The slot-based manifest system makes this a config-only change — no component code needs editing.

## Architecture

```
src/
├── app/          # Pages and routes
├── components/
│   ├── layout/   # Header, Footer, InfoBar
│   ├── sections/ # Hero, SplitSection, ServiceGrid, etc.
│   └── ui/       # Button, ImageSlot, SectionHeading, etc.
├── config/       # All content and configuration
├── lib/          # Utilities, metadata helpers, structured data
└── types/        # TypeScript interfaces
```

## Design System

- **Font:** Plus Jakarta Sans
- **Colors:** Primary palette (steel blue default) + neutrals. Change the primary hue to rebrand.
- **Shadows:** `shadow-card` (subtle) and `shadow-card-hover` (elevated)
- **Radius:** `rounded-xl` for cards, `rounded-2xl` for larger elements, `rounded-lg` for buttons
- **Spacing:** `section-padding` utility for consistent vertical rhythm

## SEO

- One H1 per page
- `generateMetadata` on every page
- JSON-LD structured data: LocalBusiness (global), Service (per service page), BreadcrumbList
- Semantic HTML throughout
- Internal linking between all pages
- Trailing slash URLs for clean static hosting
