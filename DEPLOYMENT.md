# 🚀 Easy Deployment Guide

## **One-Click Deploy (Recommended)**

### **Option 1: Use the script**
```bash
./deploy.sh
```

### **Option 2: Use npm scripts**
```bash
npm run deploy        # Full deployment with linting and building
npm run quick-deploy  # Quick deploy without linting
npm run fix-deploy    # Force deploy (use when Replit is stuck)
npm run sync          # Just sync with remote
```

## **What Each Command Does:**

- **`./deploy.sh`** - Full automated deployment (lint → build → commit → push)
- **`npm run deploy`** - Same as above, but through npm
- **`npm run quick-deploy`** - Skip linting, just commit and push
- **`npm run fix-deploy`** - Force push when Replit is stuck with old code
- **`npm run sync`** - Pull latest changes and push your changes

## **When to Use Each:**

- **Normal deployment**: `./deploy.sh` or `npm run deploy`
- **Quick fix**: `npm run quick-deploy`
- **Replit stuck**: `npm run fix-deploy`
- **Just syncing**: `npm run sync`

## **Pro Tips:**

1. **Always use `./deploy.sh`** for normal work
2. **Use `npm run fix-deploy`** when Replit deployment fails
3. **The script automatically** checks for changes, lints, builds, and pushes
4. **No more manual git commands!** 🎉

## **Troubleshooting:**

If deployment fails:
1. Run `npm run fix-deploy`
2. Check Replit console for errors
3. Switch to `deploy-fixes` branch if needed
