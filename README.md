# Ankan Roy - Modern Portfolio Website

A state-of-the-art, modern portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion, featuring beautiful UI components inspired by Aceternity UI.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.0-purple?style=for-the-badge)

## 🚀 Features

- ✨ **Modern UI/UX** - Beautiful Aceternity-inspired components with smooth animations
- 🎨 **Lamp Effect Hero** - Eye-catching gradient lamp animation on hero section
- ☄️ **Meteor Shower** - Animated meteor background in about section
- 🃏 **3D Card Effects** - Interactive hover effects on project cards
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Static Site Generation** - Fast loading with Next.js SSG
- 🎯 **SEO Optimized** - Best practices for search engine visibility
- 🔄 **Auto Deployment** - GitHub Actions workflow for seamless deployment
- 🎭 **Dark Theme** - Professional dark mode design
- 🌊 **Smooth Animations** - Powered by Framer Motion

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: Inspired by [Aceternity UI](https://ui.aceternity.com/)
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Ankan-cyber/ankan-cyber.github.io.git

# Navigate to directory
cd ankan-cyber.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build static site
npm run build

# Preview production build
npm start

# Output will be in the 'out' directory
```

## 📂 Project Structure

```
├── src/
│   ├── app/              # Next.js app router
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── Hero.tsx      # Lamp effect hero section
│   │   ├── About.tsx     # About with meteor animation
│   │   ├── Projects.tsx  # Project showcase
│   │   ├── Contact.tsx   # Contact form
│   │   ├── Navbar.tsx    # Navigation
│   │   ├── Footer.tsx    # Footer
│   │   └── ui/           # Reusable UI components
│   └── lib/              # Utility functions
├── public/               # Static assets
├── .github/workflows/    # GitHub Actions
└── Documentation files
```

## � Components

### Hero Section
- Stunning lamp effect with gradient animations
- Animated text reveals
- CTA buttons with smooth transitions

### About Section
- Meteor shower background animation
- Responsive two-column layout
- Animated skill tags

### Projects Section  
- 3D hover effect cards
- All 8 projects showcased:
  - PillPal - Medication management app
  - Shop - E-commerce with admin panel
  - Recipe Finder - 7000+ Indian recipes
  - Resume Downloader - Resume.io to PDF
  - Blog - Next.js blogging platform
  - CloudNote Pro - Secure note-taking
  - News Wallah - Modern news app
  - Textutils - Text manipulation tool

### Contact Section
- Working contact form with FormCarry
- Animated gradient borders
- Social media links

## 🚢 Deployment

### Automatic Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow that automatically builds and deploys your site.

1. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Source: Select "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git push origin main
   ```

3. **Site will be live at**: `https://ankanroy.in`

### Manual Deployment

```bash
npm run build
# Deploy the 'out' directory to your hosting provider
```

## 🎯 Customization

### Update Personal Information

1. **Hero** (`src/components/Hero.tsx`):
   - Change name and tagline

2. **About** (`src/components/About.tsx`):
   - Update bio and skills array

3. **Projects** (`src/components/Projects.tsx`):
   - Modify projects array with your projects

4. **Contact** (`src/components/Contact.tsx`):
   - Update FormCarry URL and social links

5. **SEO** (`src/app/layout.tsx`):
   - Customize metadata

### Color Scheme

Edit `tailwind.config.js` to change the color palette. Current theme:
- Primary: Cyan-500 to Blue-500 gradient
- Background: Slate-950
- Text: Slate-300/400

## 📊 Performance

- **Build Size**: ~159 KB First Load JS
- **Static Export**: Fully optimized
- **Lighthouse Scores**: 95+ across all metrics
- **SEO**: Fully optimized

## 🔗 Links

- **Live Site**: [https://ankanroy.in](https://ankanroy.in)
- **GitHub**: [@Ankan-cyber](https://github.com/Ankan-cyber)
- **Twitter**: [@TechAnkan](https://twitter.com/TechAnkan)
- **Email**: contact@mail.ankanroy.in

## 📚 Documentation

- [Quick Start Guide](QUICKSTART.md) - Get started immediately
- [Feature Documentation](FEATURES.md) - Complete feature list
- [Deployment Guide](DEPLOYMENT.md) - Deployment instructions
- [Project Summary](SUMMARY.md) - Transformation overview

## 🤝 Contributing

While this is a personal portfolio, feel free to:
- Fork the repository
- Use it as a template
- Submit issues or suggestions

## 📝 License
Access-Control-Allow-Origin
MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Ankan Roy**
- Full Stack Developer
- Cyber Security Student
- WiFi Pentester

### Connect
- Twitter: [@TechAnkan](https://twitter.com/TechAnkan)
- GitHub: [@Ankan-cyber](https://github.com/Ankan-cyber)
- Email: contact@mail.ankanroy.in
- Buy Me a Coffee: [ankanroy2](https://buymeacoffee.com/ankanroy2)

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion

