import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * ScrollToTop component manages scroll behavior on navigation
 * - Scrolls to top on new page navigation (clicking links)
 * - Preserves scroll position on back/forward button navigation
 * This provides better UX by respecting browser history navigation patterns
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on PUSH navigation (new page)
    // Don't scroll on POP (back/forward buttons)
    if (navigationType === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
