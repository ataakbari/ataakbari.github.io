/**
 * Simple Markdown to HTML renderer
 * Using marked.js library for parsing
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
    // Using marked.js from CDN
    if (typeof marked !== 'undefined') {
        marked.setOptions({
            highlight: function(code, lang) {
                return code; // Can integrate with highlight.js if needed
            },
            breaks: true,
            gfm: true
        });
        return marked.parse(markdown);
    } else {
        // Fallback to simple markdown parsing
        return simpleMarkdownParse(markdown);
    }
}

// Simple fallback markdown parser
function simpleMarkdownParse(markdown) {
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Lists
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Paragraphs
    html = html.split('\n\n').map(para => {
        if (!para.startsWith('<')) {
            return `<p>${para}</p>`;
        }
        return para;
    }).join('\n');
    
    return html;
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

