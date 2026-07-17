# BEFORE..SALON & ACADEMY - Premium Luxury Website

A premium, world-class, responsive, and luxury single-page application built for **BEFORE..SALON & ACADEMY** located in City Center, Durgapur, West Bengal. This website is styled with Rose Gold, Champagne Gold, and Warm Ivory colors, and features smooth rounded layouts, custom trailing cursor pointer, dark/light themes, form validations, category filtering, auto-sliding carousels, and high-performance Framer Motion animation overlays.

---

## 💎 Features
- **Luxury Theme & Aesthetics**: Curved cards (`rounded-[2.5rem]`), soft glowing drop shadows, premium serif headers (`Cormorant Garamond`), and glassmorphism panel backdrops.
- **Translucent Sticky Header & Spy Nav**: Spies page scroll height and underlines active sections automatically.
- **Premium Loading Splash Screen**: Auto-fade preloader overlay indicating brand logo and loading bar.
- **Dynamic Scroll Progress Tracker**: High accuracy scroll depth display bar.
- **subtle Custom Cursor Pointer**: Delicate dot and lagging tracker circle following user pointer (auto-hides on mobile/touch screens).
- **Light / Dark Mode Switcher**: Glassmorphic theme switcher utilizing Tailwind class overlays and saving configurations inside local storage.
- **Categorized Offerings Menu**: Fully filterable cards layout featuring all 19 hair, skin, and bridal makeup services with responsive "Book Now" scroll triggers.
- **Filterable Work Gallery**: Tab-filterable portfolio layout containing zoom triggers and a custom-built responsive lightbox modal.
- **Auto-Sliding Review Carousel**: Framer-motion quote carousel displaying verified customer feedback, manual drag selectors, and page dots.
- **Validated Booking Reservations Form**: Form built on `react-hook-form` validating inputs, slots, dates, and showing success animations.
- **Interactive Google Map Frame**: Integrated location cards, hours indicators, and custom responsive map overlays.
- **Double Floating Utilities**: Bottom floating WhatsApp helpdesk support card and quick reservation trigger.
- **SEO & Search Indexing Rules**: Sitemap XML index, robots.txt directives, and integrated local business schema metadata.

---

## 🛠️ Technology Stack
- **Library**: [React](https://react.dev/) + [Vite](https://vite.dev/)
- **Utility Compiler**: [Tailwind CSS v4](https://tailwindcss.com/)
- **PostCSS Integrator**: [@tailwindcss/postcss](https://github.com/tailwindlabs/tailwindcss-postcss)
- **Transitions**: [Framer Motion](https://www.framer.com/motion/)
- **Icon Set**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)

---

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your system.

### Installation
1. Navigate to the project directory:
   ```bash
   cd C:/Downloads/BEFORE-SALON-ACADEMY
   ```
2. Install npm dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

### Running Locally
To launch the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the local site.

### Compiling Production Bundle
To create an optimized production build inside the `dist/` directory:
```bash
npm run build
```
To preview the compiled assets locally:
```bash
npm run preview
```

---

## 📂 Directory Architecture
```
BEFORE-SALON-ACADEMY/
├── public/                    # Root server assets
│   ├── favicon.svg            # Luxury monogram SVG tab icon
│   ├── sitemap.xml            # Search crawler sitemap
│   └── robots.txt             # Search crawler directives
├── src/
│   ├── assets/                # Graphic assets (Unsplash vectors)
│   ├── components/            # Reusable UI widgets
│   │   ├── CustomCursor.jsx   # Lagging outer pointer cursor
│   │   ├── DarkModeToggle.jsx # Theme switcher
│   │   ├── FloatingBookButton.jsx # Sticky calendar scroll trigger
│   │   ├── FloatingWhatsApp.jsx # Floating helpdesk panel
│   │   ├── Footer.jsx         # Contact, copyright, back-to-top layout
│   │   ├── Navbar.jsx         # Translucent spy navbar
│   │   ├── ScrollProgress.jsx # Top read depth progress line
│   │   ├── SEO.jsx            # Dynamic document title & schema wrapper
│   │   └── ServiceCard.jsx    # Price tag details card
│   ├── pages/                 # Full screen view templates
│   │   ├── Home.jsx           # Main aggregated section page
│   │   ├── PrivacyPolicy.jsx  # Privacy policy copy page
│   │   ├── TermsConditions.jsx # Booking conditions page
│   │   └── NotFound.jsx        # Premium custom 404 page
│   ├── sections/              # Home landing section blocks
│   │   ├── About.jsx          # Certified expert credentials
│   │   ├── Appointment.jsx    # Validation booking form
│   │   ├── Contact.jsx        # Google maps contact frame
│   │   ├── Gallery.jsx        # Filterable photo portfolio
│   │   ├── Hero.jsx           # Landing splash page
│   │   ├── Services.jsx       # Category service grid
│   │   ├── Statistics.jsx     # Accomplishment counters
│   │   ├── Testimonials.jsx   # Quote carousel
│   │   └── WhyChooseUs.jsx    # Certified value props
│   ├── App.css                # Empty container style
│   ├── App.jsx                # Router & loading layout wrapping
│   ├── index.css              # Custom font weights & scrollbars
│   └── main.jsx               # React bootstrap render
├── tailwind.config.js         # Theme overrides (Rose Gold, Champagne Gold, etc.)
├── postcss.config.js          # PostCSS processor loader
├── package.json               # Config dependencies list
└── README.md                  # Development manual
```

---

## 🎨 Color Palette & Typography Tokens
- **Font Family**: Headings: `'Cormorant Garamond', serif` | Body: `'Poppins', sans-serif`
- **Primary Color**: Rose Gold (`#B76E79` / `bg-roseGold` / `text-roseGold`)
- **Secondary Color**: Soft Blush Pink (`#FADADD` / `bg-blushPink` / `text-blushPink`)
- **Accent Color**: Champagne Gold (`#D4AF37` / `bg-champagneGold` / `text-champagneGold`)
- **Backgrounds**: Light: Warm Ivory (`#FFF9F5`) | Dark: Charcoal (`#1C1C1C`)
- **Gradients**: Rose Gold Gradient (`from-roseGold to-blushPink`) | Gold Hover (`from-champagneGold to-warmIvory`)
