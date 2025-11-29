#!/bin/bash

# Script to push portfolio to GitHub and deploy to GitHub Pages

echo "🚀 Setting up GitHub repository for Nourhan Portfolio"
echo ""

# Check if remote already exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Remote 'origin' already exists"
    git remote -v
else
    echo "📝 Please provide your GitHub repository URL:"
    echo "   Example: https://github.com/YOUR_USERNAME/nourhan-portfolio.git"
    read -p "Repository URL: " repo_url
    
    if [ -z "$repo_url" ]; then
        echo "❌ No repository URL provided. Exiting."
        exit 1
    fi
    
    git remote add origin "$repo_url"
    echo "✅ Remote 'origin' added"
fi

echo ""
echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "📦 Next steps:"
    echo "1. Install deployment dependencies:"
    echo "   npm install --save-dev angular-cli-ghpages"
    echo ""
    echo "2. Deploy to GitHub Pages:"
    echo "   npm run deploy:gh-pages"
    echo ""
    echo "3. Configure GitHub Pages:"
    echo "   - Go to your repository on GitHub"
    echo "   - Settings → Pages"
    echo "   - Select 'gh-pages' branch as source"
    echo "   - Save"
    echo ""
    echo "🌐 Your site will be available at:"
    echo "   https://YOUR_USERNAME.github.io/nourhan-portfolio/"
else
    echo ""
    echo "❌ Failed to push to GitHub. Please check:"
    echo "   - Your GitHub credentials are set up"
    echo "   - The repository exists on GitHub"
    echo "   - You have push access to the repository"
fi

