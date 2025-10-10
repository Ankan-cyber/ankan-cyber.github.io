# Performance Optimization Implementation Guide

## 🚀 Quick Wins (Implement These First)

### 1. Update next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable SWC minification
  swcMinify: true,
  
  // Headers for caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

---

### 2. Optimize Images - Convert All <img> to Next.js Image

#### Before (Current Code):
```tsx
<img src="/images/ankan.jpg" alt="Ankan Roy" />
```

#### After (Optimized):
```tsx
import Image from 'next/image'

<Image
  src="/images/ankan.jpg"
  alt="Ankan Roy"
  width={500}
  height={500}
  priority // Only for above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Optional
  quality={85} // 75-90 is recommended
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

#### For Hero Section:
```tsx
// In Hero.tsx
import Image from 'next/image'

<Image
  src="/images/ankan.jpg"
  alt="Ankan Roy - Cybersecurity Professional"
  width={600}
  height={600}
  priority // This is above the fold
  className="rounded-full"
  quality={90}
/>
```

#### For Projects:
```tsx
// In Projects.tsx
import Image from 'next/image'

<Image
  src="/images/cloudnotepro.jpg"
  alt="CloudNote Pro Project"
  width={400}
  height={300}
  loading="lazy" // Lazy load below-fold images
  quality={80}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

### 3. Fix Third-Party Scripts

#### Remove or Fix Cloudflare Beacon

**Option A: Remove (Recommended if not needed)**
```bash
# Check if you have this in your HTML
# Remove any Cloudflare analytics scripts that are failing
```

**Option B: Use Next.js Script Component**
```tsx
// In layout.tsx or _app.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        
        {/* Load analytics after page is interactive */}
        <Script
          src="https://your-analytics-url.com/script.js"
          strategy="lazyOnload" // Loads after everything else
          onLoad={() => {
            console.log('Analytics loaded')
          }}
        />
      </body>
    </html>
  )
}
```

---

### 4. Optimize Fonts

#### Update to Use Next.js Font Optimization

```tsx
// In layout.tsx or _app.tsx
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Prevents invisible text while loading
  variable: '--font-inter',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  )
}
```

#### Update Tailwind Config:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

---

### 5. Add Resource Hints

```tsx
// In layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for other domains */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

### 6. Optimize CSS Delivery

#### Critical CSS Approach:
```tsx
// In layout.tsx
export const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#000000',
}

// Use Tailwind's JIT mode for smaller CSS
// Already enabled in your tailwind.config.js
```

---

### 7. Implement Code Splitting

#### Dynamic Imports for Heavy Components:
```tsx
// For components not needed immediately
import dynamic from 'next/dynamic'

// Load TryHackMe badge dynamically
const TryHackMeBadge = dynamic(() => import('./TryHackMeBadge'), {
  loading: () => <div className="animate-pulse h-20 bg-gray-200" />,
  ssr: false, // Don't render on server if not needed
})

// Load contact form dynamically
const ContactForm = dynamic(() => import('./Contact'), {
  loading: () => <div>Loading contact form...</div>,
})
```

---

### 8. Optimize Background Gradient

#### Current Implementation Might Be Heavy:
```tsx
// In background-gradient.tsx
// Consider using CSS-only approach instead of canvas/animation

// Simpler, performant version:
export function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
  )
}

// Or use will-change for GPU acceleration if keeping animations:
<div className="will-change-transform" />
```

---

## 🧪 Testing & Validation

### Run Lighthouse After Each Change:
```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun --config=lighthouserc.json
```

### Create lighthouserc.json:
```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 1}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

---

## 📦 Bundle Analysis

### Analyze What's Making Your Bundle Large:
```bash
# Install analyzer
npm install -D @next/bundle-analyzer

# Update next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

---

## 🔄 Deployment Optimization

### Update deploy.sh:
```bash
#!/bin/bash

echo "🚀 Building optimized production bundle..."

# Clean previous builds
rm -rf .next out

# Build with production optimizations
NODE_ENV=production npm run build

# Optional: Run Lighthouse audit
# npx lighthouse https://ankanroy.in --view

echo "✅ Build complete!"
```

---

## 📊 Monitoring

### Add Performance Monitoring:
```tsx
// In layout.tsx or _app.tsx
import { useEffect } from 'react'

export default function RootLayout({ children }) {
  useEffect(() => {
    // Report Web Vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log)
      getFID(console.log)
      getFCP(console.log)
      getLCP(console.log)
      getTTFB(console.log)
    })
  }, [])

  return <>{children}</>
}
```

---

## ✅ Implementation Checklist

### Phase 1: Critical (Today)
- [ ] Update `next.config.js` with optimization settings
- [ ] Convert hero image to Next.js Image component
- [ ] Fix/remove failing Cloudflare script
- [ ] Add font-display: swap to fonts

### Phase 2: High Priority (This Week)
- [ ] Convert all images to Next.js Image components
- [ ] Implement lazy loading for below-fold images
- [ ] Add resource hints (preconnect, dns-prefetch)
- [ ] Optimize font loading with next/font

### Phase 3: Medium Priority (Next Week)
- [ ] Implement dynamic imports for heavy components
- [ ] Add bundle analyzer and optimize large dependencies
- [ ] Set up Lighthouse CI for continuous monitoring
- [ ] Add Web Vitals tracking

### Phase 4: Polish (Ongoing)
- [ ] Progressive image loading with blur placeholders
- [ ] Service worker for offline support
- [ ] Advanced caching strategies
- [ ] CDN integration

---

## 🎯 Expected Results

After completing Phase 1-2:
- **Speed Index:** 17s → 5-7s (60% improvement)
- **Performance Score:** 74 → 85+
- **LCP:** 2.5s → 1.8s

After completing all phases:
- **Speed Index:** < 3s
- **Performance Score:** 90+
- **LCP:** < 1.5s
- **Perfect mobile experience**

---

## 🆘 Troubleshooting

### If images don't load:
```javascript
// Add to next.config.js
images: {
  domains: ['ankanroy.in'], // Add your domain
  unoptimized: false, // Keep optimization enabled
}
```

### If build fails:
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### If performance doesn't improve:
1. Check Network tab in DevTools
2. Look for large files (>500KB)
3. Check for render-blocking resources
4. Verify compression is enabled
5. Test on real device/network

---

**Good luck with optimization! 🚀**
