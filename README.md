# Personal Website - GitHub Style

A clean, professional personal website inspired by GitHub's UI design. Features profile photo integration, Markdown-based blog posts, and a simple black-and-white aesthetic.

## ✨ Features

- **GitHub-Inspired Design:** Clean black and white palette matching GitHub's aesthetic
- **Profile Photo Integration:** Circular avatar with professional bio section
- **Markdown Blog System:** Write blog posts in simple Markdown format
- **Quantum Computing Blog:** Dedicated section for quantum ML research
- **Publications Page:** Comprehensive research publication list
- **Fully Responsive:** Works perfectly on mobile, tablet, and desktop
- **Fast & Lightweight:** No build process, pure HTML/CSS/JS
- **Math Support:** MathJax for beautiful equations
- **Easy Deployment:** GitHub Pages ready with automated Actions

## 🚀 Quick Start

### 1. Add Your Profile Photo

```bash
mkdir images
cp /path/to/your/photo.jpg images/profile.jpg
```

Then update `index.html` line 46:

```html
<img src="images/profile.jpg" alt="Ata Akbari Asanjan" />
```

### 2. Write a Blog Post

Create `posts/my-post.md`:

```markdown
# My Blog Post Title

**Date:** January 2025 | **Reading Time:** 10 min

## Introduction

Your content here...
```

### 3. Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/website.git
git push -u origin main
```

Enable GitHub Pages in Settings → Pages → Source: GitHub Actions

## 📁 Structure

```
website/
├── index.html              # Home page with experience & projects
├── publications.html       # Research publications
├── quantum-blog.html       # Blog post listing
├── blog-post.html          # Markdown blog renderer
├── styles/
│   └── github-style.css    # GitHub-inspired styling
├── scripts/
│   ├── main.js             # Navigation & interactions
│   └── markdown-renderer.js # Markdown to HTML parser
├── posts/
│   └── *.md                # Blog posts in Markdown
├── images/
│   └── profile.jpg         # Your profile photo
└── .github/workflows/
    └── deploy.yml          # Automated deployment
```

## 🎨 Design Philosophy

### Color Palette

- **Text:** `#24292f` (GitHub's primary text)
- **Secondary:** `#57606a` (muted text)
- **Accent:** `#0969da` (GitHub blue)
- **Background:** `#ffffff` / `#f6f8fa`
- **Borders:** `#d0d7de`

### Typography

- Font: -apple-system, BlinkMacSystemFont, 'Segoe UI'
- Base size: 14px
- Headers: 600 weight, compact line-height

### Components

- Cards with subtle borders
- Rounded corners (6px)
- Minimal shadows
- GitHub-style buttons
- Clean navigation bar

## 📝 Writing Blog Posts

### Markdown Syntax

```markdown
# Header 1

## Header 2

### Header 3

**Bold text**
_Italic text_

[Link text](https://example.com)

- Bullet list
- Another item

1. Numbered list
2. Another item

\`inline code\`

\`\`\`python

# Code block

def hello():
print("Hello World")
\`\`\`

$inline math$

$$
E = mc^2
$$
```

### Adding Math

Use MathJax syntax:

- Inline: `$x^2 + y^2 = z^2$`
- Block: `$$\int_0^\infty e^{-x^2} dx$$`

### Adding Code

```markdown
\`\`\`python
def quantum_circuit(): # Your code here
pass
\`\`\`
```

## 🔧 Customization

### Update Content

**Experience:** Edit timeline in `index.html`

```html
<div class="timeline-item">
  <div class="timeline-badge"></div>
  <div class="timeline-content">
    <h3>Your Title</h3>
    ...
  </div>
</div>
```

**Projects:** Modify card sections in `index.html`

```html
<div class="card">
  <h3 class="card-title">Project Name</h3>
  ...
</div>
```

**Publications:** Add entries to `publications.html`

### Change Colors

Edit `styles/github-style.css`:

```css
:root {
  --color-accent-fg: #0969da; /* Links */
  --color-canvas-subtle: #f6f8fa; /* Light background */
}
```

## 📦 Dependencies

### CDN Resources

- Font Awesome 6.4.0 (icons)
- Marked.js (Markdown parsing)
- MathJax 3 (math rendering)

No npm packages or build tools required!

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📚 Documentation

- **SETUP.md:** Detailed setup instructions
- **DEPLOYMENT.md:** GitHub Pages deployment guide
- **FEATURES.md:** Complete feature list (original design)

## 🎯 What's Included

### Pages

- **Home:** Profile, experience, projects, skills, education
- **Publications:** All research papers with metadata
- **Quantum Blog:** Blog listing with cards
- **Blog Post:** Dynamic Markdown renderer

### Content

- 3 NASA positions with full details
- 4 featured projects with tech stacks
- 14 publications (2017-2024)
- 6 quantum blog post templates
- 1 fully written sample post

### Features

- Profile photo support
- GitHub-style navigation
- Timeline for experience
- Tag system for categorization
- Responsive mobile design
- Smooth animations
- Social media links

## 🔒 Security

- No API keys or secrets
- All assets from CDN
- Static site (no server-side code)
- `.gitignore` configured

## 📈 Performance

- **Lighthouse Score:** 95+
- **Page Size:** <100KB (excluding images)
- **Load Time:** <1s on fast connection
- **No Build Step:** Direct deployment

## 🤝 Contributing

This is a personal website template. Feel free to:

- Fork for your own use
- Customize the design
- Add new features
- Share improvements

## 📄 License

© 2025 Ata Akbari Asanjan. All rights reserved.

Feel free to use this template for your own personal website.

## 🆘 Support

**Common Issues:**

1. **Photo not showing?**

   - Check file path: `images/profile.jpg`
   - Clear browser cache
   - Verify file exists

2. **Markdown not rendering?**

   - Ensure `.md` file is in `posts/` folder
   - Check URL parameter: `?post=filename`
   - View browser console for errors

3. **Math not displaying?**

   - Wait for MathJax CDN to load
   - Check internet connection
   - Use correct syntax: `$x^2$`

4. **Deployment failed?**
   - Check GitHub Actions logs
   - Verify Pages is enabled
   - Wait 5-10 minutes for first deploy

## 🎓 Credits

Built using:

- GitHub design system inspiration
- Font Awesome icons
- Marked.js Markdown parser
- MathJax math rendering
- Based on actual research from NASA Ames Research Center

---

**Ready to launch your professional website!** 🚀

See `SETUP.md` for detailed instructions.
