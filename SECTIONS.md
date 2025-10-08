# Portfolio Sections Guide

## Navigation Structure

Your portfolio website consists of the following sections, all accessible from the sticky navigation bar:

---

## 1. 🏠 Home / Hero Section
**URL**: `#` or `/`

### What it contains:
- Animated Lamp Effect background
- Your name with gradient text animation: **"Hi, I'm Ankan Roy"**
- Professional tagline: "Full Stack Developer | Cyber Security Student | WiFi Pentester"
- Two CTA buttons:
  - "Get In Touch" → Scrolls to Contact section
  - "View Projects" → Scrolls to Projects section

### Visual Features:
- Conic gradient lamp beams
- Smooth reveal animations
- Glowing cyan/blue effects
- Responsive typography

---

## 2. 👤 About Section
**URL**: `#about`

### What it contains:
- **Left Column**: "More about me"
  - Your professional bio (3 paragraphs)
  - Career philosophy
  - Collaboration mindset
  
- **Right Column**: "TOP EXPERTISE"
  - 10 skill tags:
    - JavaScript
    - TypeScript
    - React
    - MongoDB
    - Next.js 13
    - HTML/CSS
    - News API
    - MERN Stack
    - API Integration
    - Node.js

### Visual Features:
- Animated meteor shower background
- Skill tags with hover effects
- Staggered animation on scroll
- Responsive two-column layout (stacks on mobile)

---

## 3. 💼 Projects Section  
**URL**: `#projects`

### What it contains:
8 featured projects with interactive cards:

#### 1. **PillPal**
- Description: Medication management app
- Link: https://pillpal.ankanroy.in
- Features: Reminders, health tracking

#### 2. **Shop By Ankan Roy**
- Description: E-commerce with Next.js
- Link: https://shop.ankanroy.in
- Features: Razorpay, admin panel, metrics

#### 3. **Indian Recipe Finder**
- Description: 7000+ Indian recipes database
- Link: https://recipes.ankanroy.in
- Features: Cuisine & diet filtering

#### 4. **Resume Downloader**
- Description: Resume.io to PDF converter
- Link: https://resumeio.ankanroy.in
- Features: Free PDF download

#### 5. **Blog By Ankan Roy**
- Description: Next.js blogging platform
- Link: https://blog.ankanroy.in
- Features: Tags, responsive design

#### 6. **CloudNote Pro**
- Description: Secure note-taking app
- Link: https://notes.ankanroy.in
- Features: Encrypted passwords, cloud sync

#### 7. **News Wallah**
- Description: Modern React news app
- Link: https://news.ankanroy.in
- Features: Daily updates, categorized news

#### 8. **Textutils**
- Description: Text manipulation tool
- Link: https://ankanroy.in/textutils
- Features: Text formatting utilities

### Visual Features:
- 3D card hover effects
- Project images with smooth loading
- Animated border reveal
- Responsive 3-column grid (adapts to screen size)
- External link integration

---

## 4. 📧 Contact Section
**URL**: `#contact`

### What it contains:
- **Left Column**: Contact Form
  - Name input (min 2 chars)
  - Subject input (min 5 chars)
  - Email input (validated)
  - Message textarea (min 8 chars)
  - Submit button with gradient
  - FormCarry integration: `https://formcarry.com/s/Zc_v4xd08og`

- **Right Column**: Social Links
  - **Twitter**: @TechAnkan
  - **GitHub**: @Ankan-cyber
  - **Email**: contact@mail.ankanroy.in
  - **Phone**: +12053774989
  - **Buy Me a Coffee**: ankanroy2
  - TryHackMe badge (script)

### Visual Features:
- Animated gradient border on form
- Hover effects on social buttons
- Input field focus animations
- Responsive layout (stacks on mobile)

---

## 5. 🔝 Navigation Bar
**Position**: Fixed at top

### What it contains:
- Logo/Name: "Ankan Roy" (gradient text)
- Navigation Links:
  - Home → `#`
  - About → `#about`
  - Projects → `#projects`
  - Contact → `#contact`
- Mobile hamburger menu (< 768px)
- Scroll-based backdrop blur

### Visual Features:
- Transparent background (becomes translucent on scroll)
- Smooth transitions
- Mobile-responsive menu
- Active link highlighting

---

## 6. 📄 Footer Section
**Position**: Bottom of page

### What it contains:
- Copyright: "© 2025 Ankan Roy. All rights reserved."
- Quick social links:
  - Twitter
  - GitHub  
  - Email
- Attribution: "Built with Next.js, TypeScript, and Tailwind CSS"

### Visual Features:
- Clean minimal design
- Border-top separator
- Responsive flex layout
- Hover effects on links

---

## 🎨 Color Scheme

### Primary Colors
- **Cyan-500**: `#06b6d4`
- **Blue-500**: `#3b82f6`
- **Gradient**: Cyan to Blue

### Background Colors
- **Main BG**: Slate-950 `#020617`
- **Section BG**: Slate-900 `#0f172a`
- **Card BG**: Black/Slate-800

### Text Colors
- **Primary**: White `#ffffff`
- **Secondary**: Slate-300 `#cbd5e1`
- **Muted**: Slate-400 `#94a3b8`

### Accent Colors
- **Hover**: Cyan-400 `#22d3ee`
- **Border**: Slate-800/700

---

## 📱 Responsive Breakpoints

### Mobile (< 768px)
- Single column layout
- Stacked sections
- Hamburger menu
- Touch-optimized buttons
- Larger tap targets

### Tablet (768px - 1024px)
- Two-column where appropriate
- Adjusted spacing
- Optimized grid layouts
- Better use of screen space

### Desktop (> 1024px)
- Full multi-column layouts
- Maximum content width: 1280px (7xl)
- Enhanced hover effects
- Optimal reading width

---

## 🔗 Internal Navigation

All sections use smooth scroll behavior:
```html
<a href="#about">About</a>      → Smooth scrolls to About
<a href="#projects">Projects</a> → Smooth scrolls to Projects
<a href="#contact">Contact</a>   → Smooth scrolls to Contact
<a href="#">Home</a>            → Smooth scrolls to top
```

---

## 🎭 Animation Timings

### Page Load
- Navbar: 0s delay
- Hero: 0.3s delay
- Content: 0.5s+ staggered

### On Scroll
- Section reveal: 0.5s duration
- Card animations: 0.3s duration
- Text reveals: 0.8s duration

### Hover Effects
- Instant (<0.1s)
- Color transitions: 0.3s
- Scale transforms: 0.2s

---

## 🚀 Performance

Each section is optimized:
- Lazy-loaded images
- Code-split components  
- Minimal bundle size
- GPU-accelerated animations
- Static generation

---

## 📝 Content Management

### To Update Content:

1. **Hero Text**: `src/components/Hero.tsx` (lines 14-30)
2. **About Bio**: `src/components/About.tsx` (lines 30-50)
3. **Skills**: `src/components/About.tsx` (lines 10-21)
4. **Projects**: `src/components/Projects.tsx` (lines 6-70)
5. **Social Links**: `src/components/Contact.tsx` (lines 85-140)
6. **Metadata**: `src/app/layout.tsx` (lines 8-20)

---

## ✨ Special Effects

### Lamp Effect (Hero)
- Two conic gradients
- Rotating animation
- Blur layers
- Gradient overlays

### Meteor Shower (About)
- 30 animated meteors
- Random positions
- Staggered timing
- Diagonal trajectory

### Card Hover (Projects)
- Background reveal
- Scale transform
- Border glow
- Smooth transitions

### Gradient Border (Contact)
- Animated background position
- 5s loop duration
- Multiple gradient stops
- Blur effect

---

**Your portfolio is a complete, modern web application ready to impress! 🌟**
