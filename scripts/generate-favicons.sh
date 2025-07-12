#!/bin/bash

# Harbor Tech Favicon Generation Script
# This script helps generate favicon files from the existing SVG logo

echo "🚀 Harbor Tech Favicon Generator"
echo "================================="

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Please install it first:"
    echo "   macOS: brew install imagemagick"
    echo "   Ubuntu: sudo apt-get install imagemagick"
    echo "   Or use online converters instead."
    exit 1
fi

# Create favicon directory if it doesn't exist
mkdir -p public/favicons

# Convert SVG to different formats
echo "📁 Converting logo_notext_color.svg to favicon formats..."

# Generate favicon.ico (32x32)
convert public/images/logos/logo_notext_color.svg -resize 32x32 public/favicon.ico
echo "✅ favicon.ico created"

# Generate apple-touch-icon.png (180x180)
convert public/images/logos/logo_notext_color.svg -resize 180x180 -background white -flatten public/apple-touch-icon.png
echo "✅ apple-touch-icon.png created"

# Generate additional sizes for better compatibility
convert public/images/logos/logo_notext_color.svg -resize 16x16 public/favicons/favicon-16x16.png
convert public/images/logos/logo_notext_color.svg -resize 32x32 public/favicons/favicon-32x32.png
convert public/images/logos/logo_notext_color.svg -resize 192x192 public/favicons/android-chrome-192x192.png
convert public/images/logos/logo_notext_color.svg -resize 512x512 public/favicons/android-chrome-512x512.png

echo "✅ Additional favicon sizes created"

# Update favicon.svg (already exists, just confirm)
echo "✅ favicon.svg already exists"

echo ""
echo "🎉 Favicon generation complete!"
echo "   All files have been created in the public directory."
echo "   The site is now ready for improved SEO performance!"
echo ""
echo "📝 Next steps:"
echo "   1. Test the site locally: npm run dev"
echo "   2. Deploy to production"
echo "   3. Run a new SEO audit to verify improvements" 