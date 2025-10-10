# Specific Fixes for Critical Lighthouse Issues

## 🔴 PRIORITY 1: Fix Speed Index (17.0s → <3.0s)

### Immediate Action Items

#### 1. Convert Images to WebP Format
```bash
# Run your existing optimization script
cd /home/arya/Documents/ankan-cyber.github.io
node scripts/optimize-images.js

# Or manually convert using sharp
npm install -g sharp-cli
sharp -i public/images/*.jpg -o public/images/ -f webp
```

#### 2. Update All Image Components

**Replace in:** `src/components/Hero.tsx`, `Projects.tsx`, `About.tsx`

```tsx
import Image from 'next/image'

// Critical above-fold image (Hero)
<Image
  src="/images/ankan.jpg"
  alt="Ankan Roy"
  width={600}
  height={600}
  priority
  quality={85}
/>

// Below-fold images (Projects)
<Image
  src="/images/project.jpg"
  alt="Project"
  width={400}
  height={300}
  loading="lazy"
  quality={80}
/>
```

---

## 🟡 PRIORITY 2: Fix Console Errors

### Remove Failing Cloudflare Script

**Check these files:**
- `src/app/layout.tsx`
- `public/index.html` (if exists)
- Any template files

**Remove or fix:**
```html
<!-- REMOVE THIS if causing errors: -->
<script src="https://static.cloudflareinsights.com/beacon.min.js"></script>

<!-- OR replace with proper Next.js Script: -->
```

```tsx
import Script from 'next/script'

<Script
  src="https://static.cloudflareinsights.com/beacon.min.js"
  strategy="lazyOnload"
  onError={() => console.warn('Analytics failed')}
/>
```

---

## 🎯 PRIORITY 3: Update next.config.js

**Replace entire file:**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
  },
  
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp)',
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

## ✅ Quick Test Checklist

After making changes:

1. **Build locally:**
   ```bash
   npm run build
   npm run start
   ```

2. **Test performance:**
   ```bash
   lighthouse http://localhost:3000 --view
   ```

3. **Expected improvements:**
   - Speed Index: Should drop to 5-7s immediately
   - Performance Score: Should improve to 80+
   - No console errors

---

## 🚀 Deploy After Fixes

```bash
# Test build
npm run build

# Deploy
./deploy.sh

# Or if using custom deployment
git add .
git commit -m "perf: optimize images and fix console errors"
git push origin main
```

---

## 📊 Measure Results

**Before optimization:**
- Performance: 74
- Speed Index: 17.0s
- LCP: 2.5s

**Expected after fixes:**
- Performance: 85+
- Speed Index: 3-5s
- LCP: 1.5-2.0s

**Run new Lighthouse audit after deployment to verify!**
