# Deployment Guide

This guide will help you deploy your Next.js portfolio to GitHub Pages.

## Prerequisites

- Node.js 18+ installed
- Git configured
- GitHub repository set up

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Building for Production

```bash
# Build the static site
npm run build

# The static files will be in the 'out' directory
```

## Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow that automatically builds and deploys your site when you push to the main branch.

1. **Enable GitHub Pages in your repository**:
   - Go to Settings > Pages
   - Source: Select "GitHub Actions"

2. **Push your code**:
   ```bash
   git add .
   git commit -m "Deploy Next.js portfolio"
   git push origin main
   ```

3. **Wait for the deployment**:
   - Go to the "Actions" tab in your repository
   - Watch the workflow run and deploy your site
   - Once complete, your site will be live at `https://yourusername.github.io/`

### Option 2: Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. The static files will be in the `out` directory

3. Deploy the `out` directory to your hosting provider

## Custom Domain

If you're using a custom domain (like the CNAME file suggests):

1. Create a CNAME record in your DNS settings pointing to `yourusername.github.io`
2. Add your custom domain in GitHub Pages settings
3. The CNAME file in the public directory will be preserved during build

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Delete `node_modules` and `.next` folders, then run `npm install` again
- Check for TypeScript errors: `npm run build`

### Images Not Loading
- Ensure images are in the `public` directory
- Use correct paths (e.g., `/images/photo.jpg` not `./images/photo.jpg`)

### 404 on Page Refresh
- This is expected with static export
- GitHub Pages handles this automatically
- For other hosts, configure your server to serve `404.html`

## Environment Variables

If you need environment variables:

1. Create `.env.local` for local development
2. Add production variables in your hosting platform
3. Remember: Only `NEXT_PUBLIC_` prefixed variables are exposed to the browser

## Performance Optimization

The build is already optimized with:
- Static site generation (SSG)
- Code splitting
- Image optimization disabled (required for static export)
- Minified CSS and JavaScript

## Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- GitHub Issues: Create an issue in your repository
