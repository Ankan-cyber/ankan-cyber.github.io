# Portfolio Website - Feature List & Guide

## 🎨 Design Features

### Modern UI Components (Aceternity-inspired)
- **Lamp Effect Hero Section** - Stunning animated gradient lamp effect as the hero
- **Meteors Animation** - Animated meteor shower background in About section
- **Background Gradient Cards** - Animated gradient borders on contact form
- **Card Hover Effect** - Interactive project cards with hover animations
- **Responsive Navigation** - Mobile-friendly navbar with smooth transitions

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet optimized
- ✅ Desktop optimized
- ✅ All breakpoints covered (sm, md, lg, xl)

### Animations & Interactions
- Framer Motion animations throughout
- Smooth scroll behavior
- Hover effects on all interactive elements
- Page transitions
- Animated skill tags
- Social media hover effects

## 🚀 Technical Stack

### Core Technologies
- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Build**: Static Site Generation (SSG)

### Performance Optimizations
- Static export for fastest loading
- Code splitting
- CSS optimization
- Image optimization ready
- Minimal bundle size

## 📂 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Global styles
│   │   └── not-found.tsx    # 404 page
│   ├── components/
│   │   ├── Hero.tsx         # Hero section with lamp effect
│   │   ├── About.tsx        # About section with meteors
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer component
│   │   └── ui/              # Reusable UI components
│   │       ├── lamp.tsx
│   │       ├── meteors.tsx
│   │       ├── background-gradient.tsx
│   │       └── card-hover-effect.tsx
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/
│   ├── old-site/           # Original site assets
│   └── .nojekyll          # GitHub Pages config
├── .github/
│   └── workflows/
│       └── deploy.yml     # Auto-deployment workflow
└── Configuration files...
```

## 🎯 Sections Overview

### 1. Hero Section
- Animated lamp effect background
- Gradient text animation
- Call-to-action buttons
- Smooth scroll to sections

### 2. About Section
- Animated meteor background
- Two-column responsive layout
- Skills showcase with animated tags
- Professional description

### 3. Projects Section
- 8 featured projects
- Interactive hover cards
- Project images
- Direct links to live projects
- Responsive grid layout

### 4. Contact Section
- Functional contact form (FormCarry integration)
- Gradient animated border
- Social media links with icons
- Professional layout

### 5. Footer
- Copyright information
- Social links
- Clean and minimal design

## 🛠️ Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   ```typescript
   // Update name and title
   Hi, I'm Ankan Roy
   Full Stack Developer | Cyber Security Student
   ```

2. **About Section** (`src/components/About.tsx`):
   ```typescript
   // Update bio and skills
   skills = [...your skills]
   ```

3. **Projects** (`src/components/Projects.tsx`):
   ```typescript
   // Update projects array
   projects = [{ title, description, link, image }]
   ```

4. **Contact Form** (`src/components/Contact.tsx`):
   ```typescript
   // Update form action URL
   action="your-formcarry-url"
   ```

5. **Metadata** (`src/app/layout.tsx`):
   ```typescript
   // Update SEO metadata
   title, description, keywords
   ```

### Color Scheme

Current colors (in `tailwind.config.js`):
- Primary: Cyan-500 to Blue-500 gradient
- Background: Slate-950 (dark)
- Text: Slate-300/400
- Accent: Cyan-400

To change:
1. Edit `tailwind.config.js`
2. Update color values in components
3. Rebuild: `npm run build`

### Adding New Sections

1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components are fully responsive!

## 🚢 Deployment

### Quick Deploy
```bash
# Build the site
npm run build

# Test locally
npm start

# Deploy via GitHub Actions (automatic on push)
git push origin main
```

### Manual Deploy
```bash
# Build static files
npm run build

# Files will be in 'out' directory
# Upload to any static hosting
```

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 📊 Performance Metrics

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## 🎨 UI Components Library

All UI components are customizable and reusable:

1. **Lamp Effect** - `src/components/ui/lamp.tsx`
2. **Meteors** - `src/components/ui/meteors.tsx`
3. **Background Gradient** - `src/components/ui/background-gradient.tsx`
4. **Card Hover Effect** - `src/components/ui/card-hover-effect.tsx`

## 🔗 Important Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Aceternity UI](https://ui.aceternity.com/)

## 📝 Notes

- All animations are GPU-accelerated
- Optimized for modern browsers
- Supports dark mode by default
- SEO optimized
- Mobile-first responsive
- Static export for GitHub Pages

## ✨ Features to Add (Future)

- [ ] Blog section
- [ ] Dark/Light mode toggle
- [ ] Testimonials section
- [ ] Resume download
- [ ] Project filtering
- [ ] Contact form with Turnstile (Cloudflare)
- [ ] Analytics integration
- [ ] More Aceternity components

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
