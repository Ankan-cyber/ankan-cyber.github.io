#!/bin/bash

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "Static files are in the 'out' directory"
    echo ""
    echo "To deploy to GitHub Pages:"
    echo "1. Push the changes to your repository"
    echo "2. The GitHub Actions workflow will automatically deploy the site"
    echo ""
    echo "Or manually deploy the 'out' directory to your hosting provider"
else
    echo "Build failed. Please check the errors above."
    exit 1
fi
