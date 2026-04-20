#!/bin/bash
# MIRASUIT Website Deploy Script
# Run from: website/mirasuit-nextjs/

set -e

echo "=== MIRASUIT Deploy ==="

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if logged in
echo "Checking Vercel auth..."
vercel tokens list &>/dev/null || {
    echo "Not authenticated. Run: vercel login"
    exit 1
}

# Build
echo "Building..."
npm run build

# Deploy
echo "Deploying to production..."
vercel --prod

echo "=== Done ==="
