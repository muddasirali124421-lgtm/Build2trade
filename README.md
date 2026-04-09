# Build2Trade - Premium Construction Network Platform

A modern, high-converting landing page for Build2Trade - Australia's first digital networking platform for builders and tradies.

## Tech Stack

- **React 18** + **TypeScript** - Modern UI development
- **Vite** - Fast build tooling
- **Tailwind CSS** - Utility-first styling with custom brand colors
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

## Brand Guidelines

### Color Palette
- **Deep Black**: `#050505` - Primary background
- **Dark**: `#0A0A0A` - Secondary background
- **Card Dark**: `#1A1A1A` - Card backgrounds
- **Gold**: `#F4B400` - Primary accent/CTA
- **Gold Light**: `#FFD700` - Secondary accent
- **White**: `#FFFFFF` - Primary text
- **Gray**: `#A1A1A1` - Secondary text

### Typography
- **Font**: Inter (Google Fonts)
- **Style**: Professional, bold headings, clean body text

## Features

### Design
- Premium dark theme with gold accents
- Glassmorphism effects throughout
- Fully responsive (mobile-first)
- Professional construction-tech aesthetic
- Custom gold scrollbar and selection

### Sections
1. **Navbar** - Sticky navigation with gold highlights and mobile menu
2. **Hero** - Powerful headline with app mockup and floating cards
3. **Stats** - Animated counter statistics
4. **About** - Company story with mobile app showcase
5. **Features** - 9 core features in grid layout
6. **Benefits** - Why builders love the platform
7. **Testimonials** - Carousel with builder/tradie reviews
8. **CTA Banner** - Full-width conversion section
9. **Invite Form** - Invite preferred tradies
10. **Newsletter** - Email subscription
11. **Footer** - Professional footer with links and contact

### Animations (Framer Motion)
- Loading screen with rotating elements
- Fade-in on scroll for all sections
- Floating UI cards in hero
- Animated stat counters
- Hover effects on cards and buttons
- Smooth scroll navigation
- Mobile menu slide animation
- Testimonial carousel transitions

## Project Structure

```
build2trade/
├── public/
├── src/
│   ├── components/
│   │   ├── LoadingScreen.tsx   # Page loading animation
│   │   ├── Logo.tsx            # Build2Trade logo component
│   │   ├── Navbar.tsx          # Sticky navigation
│   │   └── SectionWrapper.tsx  # Reusable section container
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section with app mockup
│   │   ├── Stats.tsx           # Animated statistics
│   │   ├── About.tsx           # About section with QR code
│   │   ├── Features.tsx        # 9 feature cards grid
│   │   ├── Benefits.tsx        # 6 benefit cards
│   │   ├── Testimonials.tsx    # Review carousel
│   │   ├── CTABanner.tsx       # Conversion banner
│   │   ├── InviteForm.tsx      # Invite tradies form
│   │   ├── Newsletter.tsx      # Email subscription
│   │   └── Footer.tsx          # Footer with links
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles + Tailwind
│   └── vite-env.d.ts           # TypeScript types
├── index.html                  # SEO-optimized HTML
├── package.json                # Dependencies
├── tailwind.config.js          # Custom brand colors
├── postcss.config.js           # PostCSS config
├── tsconfig.json               # TypeScript config
└── README.md                   # Setup guide
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## Customization

### Brand Colors
Edit `tailwind.config.js` under `theme.extend.colors`:
```javascript
colors: {
  brand: {
    black: '#050505',
    gold: '#F4B400',
    // ... other colors
  }
}
```

### Content
Update section files in `src/sections/` with your specific:
- Company information
- Testimonials
- Statistics
- Contact details

### Images
Replace Unsplash image URLs in components with your own images.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Deploy `dist/` folder

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use for Build2Trade.

---

Built for Australia's construction industry.
