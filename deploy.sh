#!/bin/bash

echo "🚀 Starting deployment..."

# Check if there are changes
if [[ -z $(git status --porcelain) ]]; then
    echo "✅ No changes to deploy"
    exit 0
fi

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the project
echo "🏗️ Building project..."
npm run build

# Add all changes
echo "📝 Adding changes to git..."
git add .

# Commit with timestamp
echo "💾 Committing changes..."
git commit -m "Auto-deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to main branch
echo "🚀 Pushing to main branch..."
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Your changes are now live on Replit!"
