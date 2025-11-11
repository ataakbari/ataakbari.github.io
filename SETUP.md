# Website Setup Guide

## Quick Start

Your new GitHub-style website is ready! Here's how to customize it with your photo and content.

## Adding Your Profile Photo

1. **Prepare your photo:**

   - Use a square photo (recommended: 500x500px or larger)
   - Save it as `profile.jpg` or `profile.png`

2. **Add photo to website:**

   ```bash
   # Create an images folder
   mkdir images

   # Copy your photo
   cp /path/to/your/photo.jpg images/profile.jpg
   ```

3. **Update index.html:**
   - Open `index.html`
   - Find line with `<img src="https://via.placeholder.com/260"`
   - Replace with: `<img src="images/profile.jpg" alt="Ata Akbari Asanjan">`

## Writing Blog Posts in Markdown

Blog posts are now written in simple Markdown (.md files)!

### Creating a New Blog Post

1. **Create markdown file:**

   ```bash
   # Create a new .md file in posts folder
   touch posts/my-new-post.md
   ```

2. **Write your post** using Markdown syntax:

   ```markdown
   # My Blog Post Title

   **Date:** January 2025 | **Reading Time:** 10 min

   ## Introduction

   Your content here...

   ### Subsection

   More content...

   - Bullet point 1
   - Bullet point 2

   **Bold text** and _italic text_

   [Link text](https://example.com)

   \`\`\`python

   # Code block

   print("Hello World")
   \`\`\`
   ```

3. **Add to blog listing:**
   - Open `quantum-blog.html`
   - Copy an existing card
   - Update the link: `href="blog-post.html?post=my-new-post"`
   - Update title, description, and tags

### Markdown Features Supported

- **Headers:** `#`, `##`, `###`
- **Bold:** `**text**`
- **Italic:** `*text*`
- **Links:** `[text](url)`
- **Lists:** `* item` or `1. item`
- **Code:** `` `inline` `` or ` ```language ` for blocks
- **Math:** `$inline$` or `$$block$$` (using MathJax)
- **Blockquotes:** `> quote`
- **Images:** `![alt](url)`

## Customization

### Colors

The site uses GitHub's color palette. To customize, edit `styles/github-style.css`:

```css
:root {
  --color-accent-fg: #0969da; /* Change link color */
  --color-canvas-subtle: #f6f8fa; /* Change background */
}
```

### Content Updates

- **Experience:** Edit timeline in `index.html`
- **Projects:** Update cards in `index.html`
- **Skills:** Modify skills section in `index.html`
- **Publications:** Add entries in `publications.html`

## File Structure

```
website/
├── images/
│   └── profile.jpg          # Your profile photo
├── posts/
│   ├── quantum-vae-wildfire.md    # Blog posts in Markdown
│   └── your-new-post.md
├── styles/
│   └── github-style.css     # GitHub-inspired styling
├── scripts/
│   ├── main.js              # General scripts
│   └── markdown-renderer.js # Markdown parser
├── index.html               # Home page
├── publications.html        # Publications list
├── quantum-blog.html        # Blog listing
└── blog-post.html           # Blog post renderer
```

## Features

### GitHub-Inspired Design

- ✅ Clean black and white palette
- ✅ Familiar GitHub UI patterns
- ✅ Simple, professional look
- ✅ Responsive on all devices

### Markdown Blog

- ✅ Write posts in Markdown
- ✅ Math equations with MathJax
- ✅ Code syntax highlighting
- ✅ Easy to maintain

### Profile Integration

- ✅ Circular profile photo
- ✅ Professional bio section
- ✅ Contact information
- ✅ Social links

## Testing Locally

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Then visit: http://localhost:8000
```

## Deployment to GitHub Pages

1. **Initialize git:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub repo and push:**

   ```bash
   git remote add origin https://github.com/yourusername/your-repo.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**

   - Go to Settings → Pages
   - Source: GitHub Actions
   - Site will deploy automatically

4. **Access your site:**
   - `https://yourusername.github.io/your-repo`

## Tips

### Good Photo Guidelines

- Use good lighting
- Professional attire
- Neutral background
- Clear face visibility
- Square aspect ratio

### Writing Effective Blog Posts

- Start with a clear title
- Add reading time estimate
- Use headers for structure
- Include code examples
- Add relevant tags
- Keep paragraphs short

### SEO Optimization

- Update meta descriptions in HTML files
- Use descriptive page titles
- Add alt text to images
- Include keywords naturally

## Troubleshooting

**Photo not showing?**

- Check file path is correct
- Ensure image file exists
- Try clearing browser cache

**Markdown not rendering?**

- Check `.md` file exists in `posts/` folder
- Verify URL parameter matches filename
- Open browser console for errors

**Math not displaying?**

- Wait for MathJax to load
- Check internet connection (CDN)
- Use correct syntax: `$x^2$` or `$$x^2$$`

## Support

For issues or questions:

1. Check browser console for errors
2. Verify all files are in correct locations
3. Test with different browsers
4. Review DEPLOYMENT.md for GitHub Pages setup

---

**Your website is ready to launch! 🚀**

Remember to:

- [ ] Add your profile photo
- [ ] Update contact information
- [ ] Customize colors if desired
- [ ] Write your first blog post
- [ ] Deploy to GitHub Pages
