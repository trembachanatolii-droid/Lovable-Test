import React, { useState, useEffect } from 'react';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';
import { SearchIcon } from './icons/SearchIcon';

const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onClick?: () => void) => {
    if (href.startsWith('#')) {
        e.preventDefault();
        window.location.hash = href;
    }
    if (onClick) onClick();
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isSecondary?: boolean;
  currentRoute: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isSecondary = false, currentRoute }) => {
  // Determine if this is the active page
  const isActive = href === '#' + currentRoute || (href === '#' && currentRoute === '');

  return (
    <a
      href={href}
      onClick={(e) => handleHashLinkClick(e, href)}
      aria-current={isActive ? 'page' : undefined}
      className={`nav-link ${isSecondary ? 'text-sm text-neutral-darkGray hover:text-primary-navy' : 'text-base text-neutral-darkGray hover:text-primary-navy'}`}
    >
      <span>{children}</span>
    </a>
  );
};

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  currentRoute: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick, currentRoute }) => {
  const isActive = href === '#' + currentRoute || (href === '#' && currentRoute === '');

  return (
    <a
      href={href}
      onClick={(e) => handleHashLinkClick(e, href, onClick)}
      aria-current={isActive ? 'page' : undefined}
      className="block py-4 text-2xl text-center text-white hover:text-secondary-teal transition-colors"
    >
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<string>('');

  const primaryNavLinks = [
    { href: '#about', label: 'About the Firm' },
    { href: '#attorney-profile', label: 'Attorney Profile' },
    { href: '#practice-areas', label: 'Practice Areas' },
    { href: '#resources', label: 'Resources' },
    { href: '#news', label: 'News' },
    { href: '#careers', label: 'Careers' },
    { href: '#contact', label: 'Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the # character
      setCurrentRoute(hash);
    };

    // Set initial route
    handleHashChange();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
  };

  const allMobileLinks = [...primaryNavLinks];

  return (
    <>
      <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Left: Logo */}
            <a href="#" onClick={handleLogoClick} className="logo">
              <span className="logo-title">
                Trembach Law Firm
              </span>
              <span className="logo-subtitle">
                International Trade & Customs Law
              </span>
            </a>

            {/* Center: Primary Navigation */}
            <nav aria-label="Main navigation" className="desktop-nav" style={{
              marginLeft: '3rem'
            }}>
              {primaryNavLinks.map(link => (
                <NavLink key={link.label} href={link.href} currentRoute={currentRoute}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: Search Icon & Phone Number */}
            <div className="desktop-search" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <button aria-label="Search" style={{
                padding: '0.5rem',
                color: 'var(--gray-dark)',
                transition: 'color 0.3s'
              }}>
                <SearchIcon style={{ height: '1.5rem', width: '1.5rem' }} />
              </button>
              <a
                href="tel:+16317468290"
                aria-label="Call us at 631-746-8290"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--navy-primary)',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  borderRadius: '2rem',
                  transition: 'background-color 0.3s',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--teal-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--navy-primary)'}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  style={{ width: '1rem', height: '1rem' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>631-746-8290</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-btn">
              <button onClick={toggleMenu} aria-label="Open menu" style={{
                padding: '0.5rem',
                color: 'var(--navy-primary)'
              }}>
                <MenuIcon style={{ height: '2rem', width: '2rem' }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(1, 33, 105, 0.95)',
        backdropFilter: 'blur(8px)',
        zIndex: 150,
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
        visibility: isMenuOpen ? 'visible' : 'hidden'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '1.25rem'
        }}>
          <button onClick={toggleMenu} aria-label="Close menu" style={{
            padding: '0.5rem',
            color: 'var(--white)'
          }}>
            <CloseIcon style={{ height: '2rem', width: '2rem' }} />
          </button>
        </div>
        <nav aria-label="Mobile navigation" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          marginTop: '-4rem'
        }}>
          {allMobileLinks.map(link => (
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
            href="tel:+16317468290"
            style={{
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
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2D8469'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--teal-primary)'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              style={{ width: '1.5rem', height: '1.5rem' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span>631-746-8290</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
