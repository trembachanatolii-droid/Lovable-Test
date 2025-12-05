import React, { useState, useEffect, useCallback, useRef, memo, useTransition, useMemo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';
import { SearchIcon } from './icons/SearchIcon';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isSecondary?: boolean;
  currentRoute: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isSecondary = false, currentRoute, isScrolled }) => {
  // Determine if this is the active page
  const isActive = href === currentRoute || (href === '/' && currentRoute === '/');

  const linkStyle: React.CSSProperties = {
    position: 'relative',
    fontWeight: 500,
    color: isScrolled ? 'var(--gray-dark)' : 'rgba(255,255,255,0.95)',
    padding: '0.35rem 0',
    transition: 'color 0.3s',
    whiteSpace: 'nowrap',
    fontSize: isSecondary ? '0.6125rem' : '0.66rem',
    textDecoration: 'none',
  };

  return (
    <Link
      to={href}
      aria-current={isActive ? 'page' : undefined}
      className="nav-link"
      style={linkStyle}
    >
      <span>{children}</span>
    </Link>
  );
};

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  currentRoute: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick, currentRoute }) => {
  const isActive = href === currentRoute || (href === '/' && currentRoute === '/');

  return (
    <Link
      to={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className="block py-4 text-2xl text-center text-white hover:text-secondary-teal transition-colors"
    >
      {children}
    </Link>
  );
};

// Static navigation links - moved outside component to prevent recreation
const PRIMARY_NAV_LINKS = [
  { href: '/about', label: 'About the Firm' },
  { href: '/attorney-profile', label: 'Attorney Profile' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/resources', label: 'Resources' },
  { href: '/news', label: 'News' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact Us' },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [_isPending, startTransition] = useTransition();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Update current route when location changes
  useEffect(() => {
    // Use startTransition for non-urgent route updates to prevent blocking
    startTransition(() => {
      setCurrentRoute(location.pathname);
    });
  }, [location.pathname, startTransition]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for scroll events to improve scrolling performance (FID optimization)
    // Passive listeners tell the browser we won't call preventDefault(), allowing better optimization
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
  }, [navigate]);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(prev => !prev);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/news?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery, navigate]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus trap: focus close button when menu opens
      closeButtonRef.current?.focus();
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isMenuOpen]);

  // Memoized style objects to prevent recreation on every render
  const desktopNavStyle = useMemo(() => ({
    marginLeft: '1.05rem'
  }), []);

  const searchLinkStyle = useMemo(() => ({
    padding: '0.35rem',
    color: isScrolled ? 'var(--gray-dark)' : 'rgba(255,255,255,0.9)',
    transition: 'color 0.3s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none'
  }), [isScrolled]);

  const searchIconStyle = useMemo(() => ({
    height: '1.05rem',
    width: '1.05rem'
  }), []);

  const searchBoxStyle = useMemo(() => ({
    position: 'absolute' as const,
    top: '100%',
    right: 0,
    marginTop: '0.5rem',
    width: isSearchOpen ? '250px' : '0',
    opacity: isSearchOpen ? 1 : 0,
    overflow: 'hidden',
    transition: 'width 0.3s ease, opacity 0.3s ease',
    backgroundColor: isScrolled ? 'var(--white)' : 'rgba(255,255,255,0.95)',
    borderRadius: '0.375rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    zIndex: 200
  }), [isSearchOpen, isScrolled]);

  const searchInputStyle = useMemo(() => ({
    width: '100%',
    padding: '0.5rem 0.75rem',
    border: '1px solid var(--border-subtle)',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    outline: 'none'
  }), []);

  const searchContainerStyle = useMemo(() => ({
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center'
  }), []);

  const desktopPhoneStyle = useMemo(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.26rem',
    padding: '0.26rem 0.53rem',
    backgroundColor: isScrolled ? 'var(--navy-primary)' : 'rgba(255,255,255,0.15)',
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.57rem',
    fontWeight: 500,
    borderRadius: '2rem',
    transition: 'background-color 0.3s',
    whiteSpace: 'nowrap',
    border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.3)'
  }), [isScrolled]);

  const desktopPhoneSvgStyle = useMemo(() => ({
    width: '0.7rem',
    height: '0.7rem'
  }), []);

  const desktopPhoneInnerDivStyle = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column' as const,
    lineHeight: 1.2
  }), []);

  const desktopPhoneLabelStyle = useMemo(() => ({
    fontSize: '0.53rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.03em'
  }), []);

  const desktopPhoneNumberStyle = useMemo(() => ({
    fontWeight: 600,
    fontSize: '0.57rem'
  }), []);

  const mobileMenuBtnStyle = useMemo(() => ({
    alignItems: 'center',
    gap: '0.75rem'
  }), []);

  const mobilePhoneCtaStyle = useMemo(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.625rem',
    backgroundColor: isScrolled ? 'var(--teal-primary)' : 'rgba(255,255,255,0.2)',
    color: 'white',
    borderRadius: '50%',
    width: '2.75rem',
    height: '2.75rem',
    minWidth: '44px',
    minHeight: '44px',
    boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
    border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.3)'
  }), [isScrolled]);

  const mobilePhoneCtaSvgStyle = useMemo(() => ({
    width: '1.25rem',
    height: '1.25rem'
  }), []);

  const mobileMenuButtonStyle = useMemo(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.625rem',
    backgroundColor: isScrolled ? 'var(--navy-primary)' : 'rgba(255,255,255,0.2)',
    color: 'white',
    borderRadius: '0.375rem',
    minWidth: '44px',
    minHeight: '44px',
    boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
    border: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.3)'
  }), [isScrolled]);

  const menuIconStyle = useMemo(() => ({
    height: '1.5rem',
    width: '1.5rem'
  }), []);

  const mobileMenuOverlayStyle = useMemo(() => ({
    position: 'fixed' as const,
    inset: 0,
    backgroundColor: 'rgba(1, 33, 105, 0.95)',
    backdropFilter: 'blur(8px)',
    zIndex: 150,
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    visibility: isMenuOpen ? 'visible' as const : 'hidden' as const
  }), [isMenuOpen]);

  const closeButtonContainerStyle = useMemo(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1.25rem',
    paddingTop: 'max(1.25rem, env(safe-area-inset-top))',
    paddingRight: 'max(1.25rem, env(safe-area-inset-right))'
  }), []);

  const closeButtonStyle = useMemo(() => ({
    padding: '0.75rem',
    color: 'var(--white)',
    minHeight: '44px',
    minWidth: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }), []);

  const closeIconStyle = useMemo(() => ({
    height: '1.75rem',
    width: '1.75rem'
  }), []);

  const mobileNavStyle = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginTop: '-4rem'
  }), []);

  const mobilePhoneLinkStyle = useMemo(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginTop: '2rem',
    padding: '1rem 2rem',
    backgroundColor: 'var(--teal-primary)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '0.5rem',
    fontSize: '1.25rem',
    fontWeight: 500,
    transition: 'background-color 0.3s'
  }), []);

  const mobilePhoneLinkSvgStyle = useMemo(() => ({
    width: '1.5rem',
    height: '1.5rem'
  }), []);

  const mobilePhoneLinkInnerDivStyle = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column' as const,
    lineHeight: 1.3
  }), []);

  const mobilePhoneLinkLabelStyle = useMemo(() => ({
    fontSize: '0.875rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em'
  }), []);

  const mobilePhoneLinkNumberStyle = useMemo(() => ({
    fontWeight: 600
  }), []);

  // Stable event handlers for hover effects
  const handleDesktopPhoneMouseEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = isScrolled ? 'var(--teal-primary)' : 'rgba(255,255,255,0.25)';
  }, [isScrolled]);

  const handleDesktopPhoneMouseLeave = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = isScrolled ? 'var(--navy-primary)' : 'rgba(255,255,255,0.15)';
  }, [isScrolled]);

  const handleMobilePhoneLinkMouseEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = 'var(--teal-forest)';
  }, []);

  const handleMobilePhoneLinkMouseLeave = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = 'var(--teal-primary)';
  }, []);

  // Header wrapper style with explicit background control
  const headerWrapperStyle = useMemo((): React.CSSProperties => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: isScrolled ? 'var(--white)' : 'transparent',
    boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
    transition: 'background-color 0.3s, box-shadow 0.3s',
  }), [isScrolled]);

  return (
    <>
      <header role="banner" style={headerWrapperStyle}>
        <div className="container">
          <div className="header-content">
            {/* Left: Logo */}
            <a href="#" onClick={handleLogoClick} className="logo" aria-label="Trembach Law Firm - Home">
              <span
                className="logo-title"
                style={{ color: isScrolled ? 'var(--navy-primary)' : '#FFFFFF' }}
              >
                Trembach Law Firm
              </span>
              <span
                className="logo-subtitle"
                style={{ color: isScrolled ? 'var(--gray-dark)' : 'rgba(255,255,255,0.85)' }}
              >
                International Trade & Customs Law
              </span>
            </a>

            {/* Center: Primary Navigation */}
            <nav aria-label="Main navigation" className="desktop-nav" style={desktopNavStyle}>
              {PRIMARY_NAV_LINKS.map(link => (
                <NavLink key={link.label} href={link.href} currentRoute={currentRoute} isScrolled={isScrolled}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: Search Icon & Phone Number */}
            <div className="desktop-search">
              <div style={searchContainerStyle}>
                <button
                  onClick={toggleSearch}
                  aria-label={isSearchOpen ? "Close search" : "Open search"}
                  style={searchLinkStyle}
                  type="button"
                >
                  <SearchIcon style={searchIconStyle} aria-hidden="true" />
                </button>
                <div style={searchBoxStyle}>
                  <form onSubmit={handleSearchSubmit} style={{ padding: '0.5rem' }}>
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={searchInputStyle}
                      aria-label="Search input"
                    />
                  </form>
                </div>
              </div>
              <a
                href="tel:+13107441328"
                aria-label="Call us at (310) 744-1328 for free consultation"
                style={desktopPhoneStyle}
                onMouseEnter={handleDesktopPhoneMouseEnter}
                onMouseLeave={handleDesktopPhoneMouseLeave}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  style={desktopPhoneSvgStyle}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div style={desktopPhoneInnerDivStyle}>
                  <span style={desktopPhoneLabelStyle}>Free Consultation</span>
                  <span style={desktopPhoneNumberStyle}>(310) 744-1328</span>
                </div>
              </a>
            </div>

            {/* Mobile Actions: Phone + Menu Button */}
            <div className="mobile-menu-btn" style={mobileMenuBtnStyle}>
              {/* Mobile Phone CTA */}
              <a
                href="tel:+13107441328"
                aria-label="Call us at (310) 744-1328"
                style={mobilePhoneCtaStyle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  style={mobilePhoneCtaSvgStyle}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
              {/* Mobile Menu Button */}
              <button
                ref={menuButtonRef}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                type="button"
                style={mobileMenuButtonStyle}
              >
                <MenuIcon style={menuIconStyle} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        style={mobileMenuOverlayStyle}
      >
        <div style={closeButtonContainerStyle}>
          <button
            ref={closeButtonRef}
            onClick={toggleMenu}
            aria-label="Close menu"
            type="button"
            style={closeButtonStyle}
          >
            <CloseIcon style={closeIconStyle} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" style={mobileNavStyle}>
          {PRIMARY_NAV_LINKS.map(link => (
            <MobileNavLink
              key={link.label}
              href={link.href}
              onClick={toggleMenu}
              currentRoute={currentRoute}
            >
              {link.label}
            </MobileNavLink>
          ))}
          <a
            href="tel:+13107441328"
            aria-label="Call us at (310) 744-1328 for free consultation"
            style={mobilePhoneLinkStyle}
            onMouseEnter={handleMobilePhoneLinkMouseEnter}
            onMouseLeave={handleMobilePhoneLinkMouseLeave}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              style={mobilePhoneLinkSvgStyle}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <div style={mobilePhoneLinkInnerDivStyle}>
              <span style={mobilePhoneLinkLabelStyle}>Free Consultation</span>
              <span style={mobilePhoneLinkNumberStyle}>(310) 744-1328</span>
            </div>
          </a>
        </nav>
      </div>
    </>
  );
};

export default memo(Header);
