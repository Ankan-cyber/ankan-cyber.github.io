# Component Architecture

## 📐 Component Hierarchy

```
App (layout.tsx)
│
├── RootLayout
│   ├── Metadata (SEO)
│   ├── Fonts (Inter)
│   └── Dark Mode Class
│
└── Home Page (page.tsx)
    │
    ├── Navbar (/components/Navbar.tsx)
    │   ├── Logo/Brand
    │   ├── Desktop Menu
    │   │   ├── Home Link
    │   │   ├── About Link
    │   │   ├── Projects Link
    │   │   └── Contact Link
    │   └── Mobile Menu (hamburger)
    │       └── AnimatePresence
    │           └── Motion.div
    │
    ├── Hero (/components/Hero.tsx)
    │   └── LampContainer (/components/ui/lamp.tsx)
    │       ├── Motion Divs (gradient beams)
    │       ├── Blur Layers
    │       └── Content
    │           ├── H1 (gradient text)
    │           ├── P (tagline)
    │           └── CTA Buttons
    │
    ├── About (/components/About.tsx)
    │   ├── Meteors (/components/ui/meteors.tsx)
    │   │   └── Span elements (animated)
    │   ├── Motion.h2 (title)
    │   └── Grid Layout
    │       ├── Left Column
    │       │   ├── H3 (More about me)
    │       │   └── P tags (bio)
    │       └── Right Column
    │           ├── H3 (TOP EXPERTISE)
    │           ├── P (description)
    │           └── Skills Grid
    │               └── Motion.span (each skill)
    │
    ├── Projects (/components/Projects.tsx)
    │   ├── H2 (section title)
    │   └── HoverEffect (/components/ui/card-hover-effect.tsx)
    │       └── Grid of Cards
    │           └── For each project:
    │               ├── Link (external)
    │               ├── AnimatePresence
    │               │   └── Motion.span (hover bg)
    │               └── Card
    │                   ├── Image
    │                   ├── CardTitle
    │                   └── CardDescription
    │
    ├── Contact (/components/Contact.tsx)
    │   ├── Motion.h2 (title)
    │   └── Grid Layout
    │       ├── Left Column
    │       │   └── BackgroundGradient (/components/ui/background-gradient.tsx)
    │       │       └── Motion.div (animated gradient)
    │       │           └── Form
    │       │               ├── Name Input
    │       │               ├── Subject Input
    │       │               ├── Email Input
    │       │               ├── Message Textarea
    │       │               └── Submit Button
    │       └── Right Column
    │           ├── H3 (Connect Through Socials)
    │           └── Social Links
    │               ├── Twitter
    │               ├── GitHub
    │               ├── Email
    │               ├── Phone
    │               └── Buy Me a Coffee
    │
    └── Footer (/components/Footer.tsx)
        ├── Copyright Info
        ├── Social Links
        └── Built With Info
```

## 🧩 UI Component Details

### Reusable UI Components (`/components/ui/`)

#### 1. LampContainer (`lamp.tsx`)
```typescript
Props:
- children: React.ReactNode
- className?: string

Features:
- Conic gradient beams
- Multiple motion layers
- Blur effects
- Responsive scaling
```

#### 2. Meteors (`meteors.tsx`)
```typescript
Props:
- number?: number (default: 20)

Features:
- Randomized positions
- Staggered animations
- Rotating trajectory
- Variable speeds
```

#### 3. BackgroundGradient (`background-gradient.tsx`)
```typescript
Props:
- children?: React.ReactNode
- className?: string
- containerClassName?: string
- animate?: boolean (default: true)

Features:
- Radial gradients
- Animated background position
- 5s loop
- Blur effects
```

#### 4. HoverEffect (`card-hover-effect.tsx`)
```typescript
Props:
- items: Array<{
    title: string
    description: string
    link: string
    image?: string
  }>
- className?: string

Components:
- Card
- CardTitle
- CardDescription

Features:
- Hover state tracking
- AnimatePresence
- Layout animations
```

## 🎨 Styling Architecture

### Tailwind Configuration (`tailwind.config.js`)

```javascript
{
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "spotlight": "spotlight 2s ease .75s 1 forwards",
        "shimmer": "shimmer 2s linear infinite"
      },
      keyframes: {
        meteor: { /* ... */ },
        spotlight: { /* ... */ },
        shimmer: { /* ... */ }
      }
    }
  }
}
```

### Global Styles (`globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: system-font-stack;
}
```

## 🔄 Data Flow

### Project Data
```typescript
// Located in: src/components/Projects.tsx
const projects = [
  {
    title: string,
    description: string,
    link: string,
    image: string
  },
  // ... 8 projects total
]
```

### Skills Data
```typescript
// Located in: src/components/About.tsx
const skills = [
  "JavaScript",
  "TypeScript",
  // ... 10 skills total
]
```

### Navigation Items
```typescript
// Located in: src/components/Navbar.tsx
const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
]
```

## 🎭 Animation Flow

### On Page Load
```
1. Navbar fades in (y: -100 → 0)
2. Hero lamp effect animates (width: 15rem → 30rem)
3. Hero text reveals (y: 100 → 0, opacity: 0 → 1)
4. CTA buttons appear (staggered delay)
```

### On Scroll
```
1. Elements detect viewport entry
2. whileInView triggers
3. Motion animations execute
4. Elements fade/slide in
```

### On Hover
```
Projects:
1. Mouse enters card
2. hoveredIndex state updates
3. Background overlay animates in
4. Border color changes
```

## 📦 Bundle Structure

### Main Chunks
```
chunks/
├── 255-a7ba4d37dca2f1fa.js (45.9 KB) - React/React-DOM
├── 4bd1b696-c023c6e3521b1417.js (54.2 KB) - Core dependencies
├── webpack-724bb23752810918.js - Webpack runtime
├── main-app-b1a015143440a247.js - App code
├── 619-ba102abea3e3d0e4.js - Framer Motion
├── 761-18a8cd9f3650b23a.js - Page components
└── app/page-8f222b7cd7bc66f9.js (53.3 KB) - Page specific
```

### Static Assets
```
_next/static/
├── css/
│   └── b803a17f4b15c963.css - Tailwind compiled
├── chunks/ - JavaScript modules
└── media/
    └── e4af272ccee01ff0-s.p.woff2 - Inter font
```

## 🔌 External Integrations

### FormCarry (Contact Form)
```html
<form action="https://formcarry.com/s/Zc_v4xd08og">
  <!-- Form fields -->
</form>
```

### Social Media
```typescript
Links to:
- Twitter: https://twitter.com/TechAnkan
- GitHub: https://github.com/Ankan-cyber
- Email: mailto:contact@mail.ankanroy.in
- Phone: tel:+12053774989
- Coffee: https://buymeacoffee.com/ankanroy2
```

### TryHackMe Badge
```html
<script src="https://tryhackme.com/badge/2529018"></script>
```

## 🚀 Build Process

### Development
```bash
npm run dev
↓
Next.js Dev Server
↓
Hot Module Replacement
↓
Fast Refresh
```

### Production
```bash
npm run build
↓
TypeScript Compilation
↓
Next.js Build
↓
Static Export
↓
Output to /out
```

## 📊 Component Dependencies

```
Navbar → AnimatePresence, motion
Hero → LampContainer, motion
About → Meteors, motion
Projects → HoverEffect, AnimatePresence, motion
Contact → BackgroundGradient, motion
Footer → motion

LampContainer → motion, cn
Meteors → (no deps)
BackgroundGradient → motion, cn
HoverEffect → motion, AnimatePresence, Card, Link

All UI components → cn (from lib/utils.ts)
```

## 🎯 State Management

### Local Component State
```typescript
// Navbar
const [scrolled, setScrolled] = useState(false)
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

// HoverEffect
const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
```

No global state management needed - all state is local!

## 🔍 Import Paths

Using TypeScript path aliases:
```typescript
import { cn } from "@/lib/utils"
import { Hero } from "@/components/Hero"
import { LampContainer } from "@/components/ui/lamp"
```

Configured in `tsconfig.json`:
```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

---

**This architecture ensures:**
- ✅ Clean separation of concerns
- ✅ Reusable components
- ✅ Type safety
- ✅ Optimal performance
- ✅ Easy maintenance
