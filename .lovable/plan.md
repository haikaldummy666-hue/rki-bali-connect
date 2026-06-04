## Stack adaptation

Project runs on **TanStack Start (React 19 + Vite + Tailwind v4 + shadcn/ui)** — same UX as your Next.js spec, only routing differs. Routes live in `src/routes/` (flat dot-separated), not `app/`. All design, content, and features are preserved.

## Design system

Add to `src/styles.css` (oklch tokens mapped from your palette):
- `--primary` deep green `#0A5C36`
- `--accent` gold `#C5A26F`
- `--background` soft cream `#FAF7F0`
- `--card` white
- Warm typography (Inter + Plus Jakarta Sans), generous whitespace, soft shadows, rounded-2xl cards
- Framer Motion for section fade-ups, hover lifts, footer preview spring animations

## Routes (TanStack file-based)

```
src/routes/
  __root.tsx            sticky Navbar + Outlet + Footer + WhatsAppButton
  index.tsx             Homepage (all sections below)
  tentang-kami.tsx      History, RKI 1/2/3 story, legal under Yayasan DAI
  program.tsx           TPQ Anak, Majelis Ibu, Majelis Bapak schedules
  transparansi.tsx      Monthly financials, donor list, fund usage
  galeri.tsx            Tabbed gallery (TPQ / Ibu / Bapak / Events)
  donasi.tsx            Tiers, bank info, donation form
```

Each route gets its own `head()` with unique title/description/og tags.

## Components

```
src/components/
  layout/
    Navbar.tsx                sticky, logo + 5 links + Donasi CTA, mobile sheet
    Footer.tsx                with HoverPreviewCard for each nav link
  home/
    Hero.tsx                  headline + "Jadi Donatur Tetap" CTA + hero image
    ImpactStats.tsx           150+ Santri · 3 Cabang · 120+ Jamaah · Since 2014
    WhyWeExist.tsx            short story block
    ProgramsSection.tsx       3 program cards
    TransparencyPreview.tsx   income/expense/deficit cards w/ progress bar
    GalleryPreview.tsx        6-image masonry → link to /galeri
    DonationTiers.tsx         5 tier cards
    FinalCTA.tsx              closing donor CTA
  shared/
    HoverPreviewCard.tsx      Radix HoverCard + Framer Motion, image + desc + "Baca Selengkapnya"
    WhatsAppButton.tsx        floating, links wa.me/6288268317901
    DonationCard.tsx          reusable tier card
    SectionHeading.tsx
  ui/                         shadcn primitives (button, card, hover-card, tabs, sheet, input, textarea, dialog)
```

## Content constants (`src/lib/constants.ts`)

Donation tiers, bank account (Mandiri 1450013372913 a.n Mery Lusiana / Ledy Yuliawati), financials (income 7.45M / expense 13M / deficit 5.55M), history milestones, programs, gallery categories, WhatsApp number `+62 882-6831-7901`.

## Footer hover preview

Each footer link wrapped in shadcn `HoverCard`:
- 280px card, soft shadow, gold accent border
- Small AI-generated image (top), 2–3 sentence description, "Baca Selengkapnya" button → route
- Framer Motion `scale + fade` spring on open
- Falls back to tap on mobile

## Donation form

Simple form on `/donasi`: name, email, amount, message. On submit → opens WhatsApp with pre-filled message to `+62 882-6831-7901` (no backend needed; keeps it zero-config and trustworthy). Zod validation, sonner toast confirmation.

## Imagery (AI-generated, saved to `src/assets/`)

Generated with `imagegen` (no people's faces, respectful Islamic-themed scenes):
1. `hero.jpg` — warm interior of TPQ classroom, children's hands on Qur'an, soft morning light, Bali wood architecture
2. `program-tpq.jpg`, `program-ibu.jpg`, `program-bapak.jpg` — three program cards
3. `gallery-1..8.jpg` — assorted activity scenes (study circles, taklim, events)
4. `preview-tentang.jpg`, `preview-program.jpg`, `preview-transparansi.jpg`, `preview-galeri.jpg`, `preview-donasi.jpg` — small square images for footer hover previews
5. `og-cover.jpg` — 16:9 social share

All generated in parallel via `imagegen--generate_image` (fast tier, jpg).

## SEO

Indonesian-language metadata per route, single H1, semantic sections, lazy `<img loading="lazy">`, `JSON-LD` Organization schema on homepage (NGO type with address Denpasar Bali, foundingDate 2014).

## Technical notes

- Tailwind v4: tokens in `src/styles.css` `@theme` block, no `tailwind.config.ts`
- Install: `framer-motion`, plus shadcn additions (`hover-card`, `tabs`, `sheet`, `sonner`) via the existing components.json
- `Link` from `@tanstack/react-router`, never `react-router-dom`
- No backend / Lovable Cloud needed (donation routes to WhatsApp)
- Mobile-first; navbar collapses to Sheet under md
- Floating WhatsApp button: fixed bottom-right, green circle, opens `https://wa.me/6288268317901?text=...`

## Build order

1. Tokens + base layout (Navbar, Footer skeleton, root)
2. Constants + shared components (HoverPreviewCard, WhatsAppButton)
3. Generate all images in parallel
4. Homepage sections
5. Subpages (tentang-kami, program, transparansi, galeri, donasi)
6. Footer hover previews wired with generated preview images
7. SEO heads + JSON-LD + final polish pass
