/**
 * Markdown to HTML renderer using markdown-it
 * Supports math rendering via markdown-it-texmath
 */

// Load and render markdown file
async function loadMarkdownPost(mdFile) {
    try {
        const response = await fetch(mdFile);
        if (!response.ok) {
            throw new Error(`Failed to load ${mdFile}`);
        }
        const markdown = await response.text();
        return renderMarkdown(markdown);
    } catch (error) {
        console.error('Error loading markdown:', error);
        return `<p>Error loading blog post. Please try again later.</p>`;
    }
}

// Render markdown content
function renderMarkdown(markdown) {
    // Check if markdown-it is available
    if (typeof window.markdownit !== 'undefined') {
        const md = window.markdownit({
            html: true,
            linkify: true,
            typographer: true,
            breaks: true
        });
        
        // Use texmath plugin if available
        if (window.texmath) {
            md.use(window.texmath, {
                engine: {
                    renderToString: (tex) => tex // Let MathJax handle rendering
                },
                delimiters: 'dollars',
                katex: false
            });
        }
        
        return md.render(markdown);
    } else if (typeof marked !== 'undefined') {
        // Fallback to marked.js if markdown-it is not loaded
        return marked.parse(markdown);
    } else {
        return `<p>Error: Markdown parser not loaded.</p><pre>${markdown}</pre>`;
    }
}

// Initialize markdown rendering on page load
document.addEventListener('DOMContentLoaded', async function() {
    const markdownContainer = document.getElementById('markdown-content');
    
    if (markdownContainer) {
        const mdFile = markdownContainer.dataset.mdFile;
        if (mdFile) {
            const loadingMsg = '<p class="text-muted"><i class="fas fa-spinner fa-spin"></i> Loading...</p>';
            markdownContainer.innerHTML = loadingMsg;
            
            const html = await loadMarkdownPost(mdFile);
            markdownContainer.innerHTML = html;
            markdownContainer.classList.add('markdown-body');
            
            // Render math if MathJax is available
            if (window.MathJax) {
                MathJax.typesetPromise([markdownContainer]).catch((err) => console.error(err));
            }
        }
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadMarkdownPost, renderMarkdown };
}
