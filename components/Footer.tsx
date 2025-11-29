
import React, { memo, useState } from 'react';

interface FooterLink {
    label: string;
    href: string;
    isAddress?: boolean;
}

// Static footer links defined outside component to prevent re-creation
const FOOTER_LINKS: Record<string, FooterLink[]> = {
    'Firm': [
        { label: 'About Us', href: '#about' },
        { label: 'Practice Areas', href: '#practice-areas' },
        { label: 'Careers', href: '#careers' },
    ],
    'Legal': [
        { label: 'Privacy Policy', href: '#privacy-policy' },
        { label: 'Terms of Use', href: '#terms' },
        { label: 'Disclaimers', href: '#disclaimers' },
        { label: 'Attorney Advertising', href: '#attorney-advertising' },
    ],
    'Connect': [
        { label: 'Contact Us', href: '#contact' },
        { label: '27001 Agoura Road', href: '#', isAddress: true },
        { label: 'Suite 350', href: '#', isAddress: true },
        { label: 'Calabasas, CA, 91301', href: '#', isAddress: true },
        { label: '(310) 744-1328', href: 'tel:+13107441328' },
        { label: 'Fax: (310) 744-1219', href: '#', isAddress: true },
        { label: 'infotrade@trembachlaw.com', href: 'mailto:infotrade@trembachlaw.com' },
    ],
};

const Footer: React.FC = () => {
    const [subscribed, setSubscribed] = useState(false);

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
        if (email) {
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#') && href !== '#') {
            e.preventDefault();
            window.location.hash = href;
        } else if (href === '#') {
            e.preventDefault();
        }
    };

    return (
        <footer
            role="contentinfo"
            className="bg-primary-navy border-t footer-stable"
            style={{
                borderTopColor: 'rgba(255, 255, 255, 0.2)',
                color: 'rgba(255, 255, 255, 0.85)'
            }}
        >
            <div className="max-w-[1376px] mx-auto px-5 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Firm Info & Newsletter */}
                    <div className="lg:col-span-2">
                        <div className="text-2xl font-bold font-garamond text-white mb-3">Trembach Law Firm</div>
                        <p className="mb-5 max-w-md text-sm leading-normal">Your partners in navigating the complexities of modern law. We are committed to delivering exceptional results with integrity and dedication.</p>

                        {/* Trust Signals */}
                        <div className="mb-5 pb-5 border-b border-white/20">
                            <div className="grid grid-cols-2 max-w-md text-xs gap-x-6">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-secondary-gold flex-shrink-0" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                    <span>CA State Bar Member</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-secondary-gold flex-shrink-0" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                    </svg>
                                    <span>USC Law LL.M.</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-secondary-gold flex-shrink-0" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>15+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-secondary-gold flex-shrink-0" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                    <span>English, Ukrainian, Russian</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-semibold text-white mb-3">Stay Informed</div>
                            <form onSubmit={handleNewsletterSubmit} className="flex flex-row gap-3 mb-4">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    aria-label="Email address for newsletter subscription"
                                    required
                                    className="bg-primary-darkBlue text-white placeholder-neutral-gray px-4 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-secondary-teal text-base"
                                />
                                <button
                                    type="submit"
                                    className="bg-transparent text-white px-7 py-3 font-roboto font-bold uppercase tracking-wider hover:bg-secondary-teal transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-teal text-sm border-2 border-white"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>
                            <div className="h-7" aria-live="polite">
                                <p className={`text-secondary-teal text-sm transition-opacity duration-200 ${subscribed ? 'opacity-100' : 'opacity-0'}`}>
                                    Thank you for subscribing!
                                </p>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-secondary-teal transition-colors duration-200 flex items-center justify-center p-2"
                                aria-label="LinkedIn"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-secondary-teal transition-colors duration-200 flex items-center justify-center p-2"
                                aria-label="Twitter"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 col-span-1 md:col-span-2 lg:col-span-2 footer-links-grid">
                        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                            <div key={title}>
                                <div className="font-bold text-white mb-4 uppercase tracking-wider text-sm">{title}</div>
                                <ul className="list-none flex flex-col gap-0.5">
                                    {links.map((link: FooterLink) => (
                                        <li key={link.label} className={link.isAddress ? 'leading-relaxed' : ''}>
                                            <a
                                                href={link.href}
                                                onClick={(e) => handleLinkClick(e, link.href)}
                                                className={`transition-colors duration-200 text-sm block ${
                                                    link.isAddress
                                                        ? 'cursor-default leading-relaxed pointer-events-none'
                                                        : 'hover:text-secondary-teal'
                                                }`}
                                                style={link.href.startsWith('mailto:') ? { wordBreak: 'break-word', overflowWrap: 'anywhere' } : undefined}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 text-center text-xs border-t border-white/20">
                    <p>&copy; 2025 Trembach Law Firm. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
