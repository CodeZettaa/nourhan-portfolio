# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Node.js and npm installed
3. `angular-cli-ghpages` package (will be installed automatically)

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `nourhan-portfolio` (or your preferred name)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/nourhan-portfolio.git`)

## Step 2: Connect Local Repository to GitHub

Run these commands in the project directory:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/nourhan-portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 3: Install Deployment Dependencies

```bash
npm install --save-dev angular-cli-ghpages
```

## Step 4: Deploy to GitHub Pages

```bash
npm run deploy:gh-pages
```

This will:
1. Build the project for production with the correct base href
2. Deploy to the `gh-pages` branch
3. Make your site available at: `https://YOUR_USERNAME.github.io/nourhan-portfolio/`

## Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

Your site will be live in a few minutes at:
`https://YOUR_USERNAME.github.io/nourhan-portfolio/`

## Updating Your Site

Whenever you make changes:

```bash
# Make your changes, then:
git add .
git commit -m "Your commit message"
git push origin main

# Deploy the updated site:
npm run deploy:gh-pages
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in `src/assets/` with your domain name
2. Update the `deploy:gh-pages` script in `package.json` to include `--cname=yourdomain.com`
3. Configure DNS settings with your domain provider

## Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (should be v20.19+ or v22.12+)

### Deployment Errors
- Make sure `angular-cli-ghpages` is installed: `npm install --save-dev angular-cli-ghpages`
- Check that you have push access to the repository
- Verify the repository URL is correct

### 404 Errors on GitHub Pages
- Make sure the base href in `build:gh-pages` matches your repository name
- Check that the `gh-pages` branch exists and contains the built files
- Wait a few minutes for GitHub to process the deployment

