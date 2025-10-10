# Quick Start Guide

Welcome to your new modern portfolio website! 🎉

## What's Been Done

Your portfolio has been completely rebuilt with:
- ✅ Next.js 15 with TypeScript
- ✅ Modern Tailwind CSS styling
- ✅ Beautiful Aceternity UI components
- ✅ Smooth Framer Motion animations
- ✅ Fully responsive design
- ✅ Static site generation for fast loading
- ✅ GitHub Actions auto-deployment

## View Your Site

The development server is running at: **http://localhost:3000**

## What's Different?

### Old Site → New Site

| Feature | Old | New |
|---------|-----|-----|
| Framework | Plain HTML/CSS/JS | Next.js + TypeScript |
| Styling | Custom CSS | Tailwind CSS |
| Animations | Basic JS | Framer Motion |
| UI Components | Custom | Aceternity-inspired |
| Build | Manual | Automated |
| Deployment | Manual | GitHub Actions |
| Performance | Good | Excellent |
| Mobile | Basic | Fully optimized |

## Your Sections

1. **Hero Section** - Eye-catching lamp effect with your name
2. **About Section** - Your bio with animated meteor background
3. **Projects Section** - Interactive cards for all 8 projects
4. **Contact Section** - Working form with social links
5. **Footer** - Clean professional footer

## Next Steps

### 1. Test the Site
- Check each section
- Test on mobile (resize browser)
- Test all project links
- Try the contact form

### 2. Customize Content
See `FEATURES.md` for detailed customization guide

Quick edits:
- `src/components/Hero.tsx` - Update your intro
- `src/components/About.tsx` - Update bio and skills
- `src/components/Projects.tsx` - Update project details

### 3. Deploy to GitHub

```bash
# Add all files
git add .

# Commit changes
git commit -m "Upgrade to modern Next.js portfolio"

# Push to GitHub
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build your site
2. Deploy to GitHub Pages
3. Make it live at your domain

### 4. Configure GitHub Pages

1. Go to your repo settings
2. Click "Pages" in the sidebar
3. Source: Select "GitHub Actions"
4. Save

Your site will be live at: `https://ankanroy.in`

## Important Files

- **`src/app/page.tsx`** - Main page structure
- **`src/app/layout.tsx`** - SEO & metadata
- **`src/components/`** - All section components
- **`tailwind.config.js`** - Design system config
- **`next.config.js`** - Next.js settings

## Common Tasks

### Add a New Project
Edit `src/components/Projects.tsx`:
```typescript
{
  title: "Project Name",
  description: "Description here",
  link: "https://project-url.com",
  image: "/path/to/image.jpg",
}
```

### Update Skills
Edit `src/components/About.tsx`:
```typescript
const skills = [
  "Your", "Skills", "Here"
];
```

### Change Colors
Edit `tailwind.config.js` theme section

### Add New Page
1. Create `src/app/newpage/page.tsx`
2. Add link in `src/components/Navbar.tsx`

## Build & Deploy

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build static site
npm start           # Preview build locally

# Deploy
git push            # Auto-deploy via GitHub Actions
```

## Troubleshooting

### Build Fails
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Dev Server Won't Start
```bash
# Kill any process on port 3000
killall node
npm run dev
```

### Images Not Showing
- Check image paths in `public/` folder
- Use `/` prefix: `/images/photo.jpg`

## Support & Documentation

- **Full Features Guide**: `FEATURES.md`
- **Deployment Guide**: `DEPLOYMENT.md`
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

## What to Do Now

1. ✅ Review the site at http://localhost:3000
2. ✅ Customize your content
3. ✅ Test responsiveness
4. ✅ Push to GitHub
5. ✅ Enable GitHub Pages
6. ✅ Share your amazing new portfolio! 🚀

---

**Need help?** Check the documentation files or create an issue on GitHub.

**Happy coding!** 💙
