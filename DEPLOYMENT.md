# Deployment Guide

## Quick Start

Your website is ready to deploy to GitHub Pages! Follow these steps:

### Step 1: Initialize Git Repository

```bash
cd /Users/ataakbari/Ata/Projects/Github/website
git init
git add .
git commit -m "Initial commit: Personal website with quantum blog"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `ataakbariasanjan.github.io` or `website`)
3. Don't initialize with README (you already have one)

### Step 3: Push to GitHub

```bash
# Replace with your repository URL
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. The workflow will automatically run and deploy your site

### Step 5: Access Your Site

Your site will be available at:

- If named `username.github.io`: https://username.github.io
- If named differently: https://username.github.io/repository-name

## Updating Your Site

After making changes, simply push to the main branch:

```bash
git add .
git commit -m "Update content"
git push
```

The GitHub Actions workflow will automatically rebuild and deploy your site.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the root with your domain name
2. Configure DNS settings with your domain provider
3. In GitHub: Settings → Pages → Custom domain

## Troubleshooting

### Site Not Loading?

1. Check Actions tab in GitHub for deployment status
2. Ensure Pages is enabled in Settings
3. Wait 5-10 minutes for initial deployment
4. Check that index.html is in the root directory

### Links Not Working?

- Make sure all relative links use correct paths
- Check that file names match exactly (case-sensitive)
- Verify JavaScript files are loading (check browser console)

### Styling Issues?

- Check that CSS file path is correct
- Verify Font Awesome CDN is accessible
- Clear browser cache

## Local Testing

Before pushing, test locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit http://localhost:8000 in your browser.

## Performance Tips

1. **Optimize Images**: Compress images before adding to the site
2. **CDN Usage**: Font Awesome and MathJax load from CDN
3. **Caching**: GitHub Pages automatically caches static assets
4. **Minification**: Consider minifying CSS/JS for production (optional)

## Security

- No sensitive data should be in the repository
- Don't commit API keys or credentials
- `.gitignore` is configured to exclude sensitive files

## Monitoring

Monitor your site's performance:

- Google PageSpeed Insights
- Lighthouse (Chrome DevTools)
- GitHub Actions logs for deployment status

## Support

For issues:

1. Check GitHub Actions logs
2. Review browser console for errors
3. Test locally before pushing
4. Refer to GitHub Pages documentation

---

**Your site is now ready to go live! 🚀**
