Aubrenne — Maison de Haute Joaillerie

A luxury e-commerce home page for a fictional fine jewelry brand, built as part of a frontend UI/UX assignment.

🔗 Live Demo: aubrenne.netlify.app


Tech Stack

Technology       Purpose
React 19         UI framework
TypeScript       Type safety
Tailwind CSS v4  Styling & responsiveness
ViteBuild        tool & dev server
Lucide           eactIcons
Supabase         Database & backend


Features

Responsive design — mobile, tablet, and desktop layouts
Animated hero section — crossfading background images with overlay
Mega menu navbar — hover dropdown with image previews (desktop), hamburger accordion (mobile)
Carousel — 5-card fan layout on desktop, 3-card on tablet, single card on mobile
Luxury banners — alternating image/text layout sections
Category grid — flex-centered responsive grid (2 → 3 → 5 columns)
Reviews — live from database — users can submit reviews via a modal form; all reviews are stored and fetched from Supabase in real time
Newsletter signup — live — email subscriptions are saved to Supabase; duplicate emails handled gracefully
Full responsive footer — social links, footer nav, newsletter



Sections

Navbar with mega menu
Hero — animated background crossfade
Latest Collections — interactive carousel
Luxury Banners — Fine Jewelry / Wedding / Signature
Shop by Category
Client Reviews — live from Supabase with submit form
Footer with live newsletter signup



Getting Started

# Clone the repository
git clone https://github.com/your-username/ecommerce-jewelry.git
cd ecommerce-jewelry

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build


Environment Variables

Create a .env file in the project root:

envVITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

Get these values from your Supabase dashboard under Settings → API.


.env is excluded from the repository via .gitignore for security.




Database Setup (Supabase)

Run the following SQL in your Supabase SQL editor:

sqlcreate table subscribers (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamp with time zone default now()
);

create table reviews (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  review text not null,
  stars integer default 5,
  created_at timestamp with time zone default now()
);

alter table subscribers enable row level security;
alter table reviews enable row level security;

create policy "Allow public insert" on subscribers for insert with check (true);
create policy "Allow public insert" on reviews for insert with check (true);
create policy "Allow public read" on reviews for select using (true);


Project Structure

src/
├── components/
│   ├── Navbar.tsx              # Responsive navbar with mega menu & mobile drawer
│   ├── Hero.tsx                # Animated hero with crossfading background
│   ├── Latest_Collections.tsx  # Responsive carousel
│   ├── Banners.tsx             # Alternating luxury banner sections
│   ├── Categories.tsx          # Shop by category grid
│   ├── Reviews.tsx             # Live reviews from Supabase + submit modal
│   └── Footer.tsx              # Newsletter signup + footer links
├── lib/
│   └── supabase.ts             # Supabase client initialisation
├── App.tsx
├── main.tsx
└── index.css                   # Tailwind imports + custom keyframe animations


Design Decisions


Font pairing: Cormorant Garamond (headings) + Montserrat (UI text) — chosen for a high-end editorial feel
Color palette: Near-black backgrounds (#0a0a0a) with warm cream text (#e8e2d9) and muted gold tones (#b0aaa3)
Supabase used as a zero-backend database — no server required, works directly from React
Images hosted on Cloudinary for fast delivery

