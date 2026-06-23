# Aubrenne — Maison de Haute Joaillerie

A luxury e-commerce home page for a fictional fine jewelry brand, built as part of a frontend UI/UX assignment.

🔗 **Live Demo:** [aubrenne.netlify.app](https://aubrenne.netlify.app)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling & responsiveness |
| Vite | Build tool & dev server |
| Lucide React | Icons |

---

## Features

- **Responsive design** — mobile, tablet, and desktop layouts
- **Animated hero section** — crossfading background images with overlay
- **Mega menu navbar** — hover dropdown with image previews (desktop), hamburger accordion (mobile)
- **Carousel** — 5-card fan layout on desktop, 3-card on tablet, single card on mobile
- **Luxury banners** — alternating image/text layout sections
- **Category grid** — flex-centered responsive grid (2 → 3 → 5 columns)
- **Reviews slider** — paginated testimonials with progress indicators
- **Newsletter & footer** — full responsive footer with social links

---

## Sections

1. Navbar with mega menu
2. Hero — animated background crossfade
3. Latest Collections — interactive carousel
4. Luxury Banners — Fine Jewelry / Wedding / Signature
5. Shop by Category
6. Client Reviews
7. Footer with newsletter signup

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/ecommerce-jewelry.git
cd ecommerce-jewelry

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Responsive navbar with mega menu & mobile drawer
│   ├── Hero.tsx            # Animated hero with crossfading background
│   ├── Latest_Collections.tsx  # Responsive carousel
│   ├── Banners.tsx         # Alternating luxury banner sections
│   ├── Categories.tsx      # Shop by category grid
│   ├── Reviews.tsx         # Client testimonials slider
│   └── Footer.tsx          # Newsletter + footer links
├── App.tsx
├── main.tsx
└── index.css               # Tailwind imports + custom keyframe animations
```

---

## Design Decisions

- **Font pairing:** Cormorant Garamond (headings) + Montserrat (UI text) — chosen for a high-end editorial feel
- **Color palette:** Near-black backgrounds (`#0a0a0a`) with warm cream text (`#e8e2d9`) and muted gold tones (`#b0aaa3`)
- **No database or backend** — all content is static as per assignment requirements
- **Images** hosted on Cloudinary for fast delivery

---


```
