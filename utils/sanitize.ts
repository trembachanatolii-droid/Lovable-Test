/**
 * Sanitize HTML to prevent XSS attacks
 * Allows only safe tags and attributes commonly used in article content
 */
export function sanitizeHTML(html: string): string {
  // Use DOMParser for safer HTML parsing (avoids innerHTML execution)
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const temp = doc.body;

  // Define allowed tags
  const allowedTags = new Set([
    'p', 'br', 'strong', 'b', 'em', 'i', 'u', 'a',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li', 'blockquote', 'code', 'pre',
    'table', 'thead', 'tbody', 'tr', 'th', 'td',
    'span', 'div', 'hr'
  ]);

  // Define allowed attributes per tag
  const allowedAttrs: Record<string, Set<string>> = {
    'a': new Set(['href', 'title', 'target', 'rel']),
    '*': new Set(['class', 'id'])
  };

  function sanitizeNode(node: Node): void {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as Element;
      const tagName = el.tagName.toLowerCase();

      // Remove disallowed tags but keep their content
      if (!allowedTags.has(tagName)) {
        const parent = el.parentNode;
        while (el.firstChild) {
          parent?.insertBefore(el.firstChild, el);
        }
        parent?.removeChild(el);
        return;
      }

      // Remove disallowed attributes
      const attrs = Array.from(el.attributes);
      const allowedForTag = allowedAttrs[tagName] || new Set();
      const globalAllowed = allowedAttrs['*'] || new Set();

      for (const attr of attrs) {
        if (!allowedForTag.has(attr.name) && !globalAllowed.has(attr.name)) {
          el.removeAttribute(attr.name);
        }
        // Remove javascript: URLs
        if (attr.name === 'href' && attr.value.toLowerCase().startsWith('javascript:')) {
          el.removeAttribute(attr.name);
        }
      }

      // Ensure external links have safe attributes
      if (tagName === 'a') {
        const href = el.getAttribute('href');
        if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener noreferrer');
        }
      }
    }

    // Recursively sanitize children
    Array.from(node.childNodes).forEach(sanitizeNode);
  }

  sanitizeNode(temp);
  return temp.innerHTML;
}
