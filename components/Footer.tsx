
import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
    const footerLinks = {
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
            { label: '631-746-8290', href: 'tel:+16317468290' },
            { label: 'infotrade@trembachlaw.com', href: 'mailto:infotrade@trembachlaw.com' },
        ],
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
        <footer className="bg-primary-navy text-neutral-gray border-t" style={{ borderTopColor: 'rgba(255, 255, 255, 0.2)' }}>
            <div className="max-w-[1376px] mx-auto px-5 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Firm Info & Newsletter */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold font-garamond text-white mb-3">Trembach Law Firm</h2>
                        <p className="mb-5 max-w-md text-sm leading-normal">Your partners in navigating the complexities of modern law. We are committed to delivering exceptional results with integrity and dedication.</p>
                        <h3 className="text-lg font-semibold text-white mb-3">Stay Informed</h3>
                        <form className="flex flex-row gap-3 mb-4" style={{ minHeight: '48px' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Email address for newsletter subscription"
                                className="bg-primary-darkBlue text-white placeholder-neutral-gray px-4 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-secondary-teal text-sm"
                                style={{ minHeight: '48px' }}
                            />
                            <button
                                type="submit"
                                className="bg-transparent text-white px-7 py-3 font-roboto font-bold uppercase tracking-wider hover:bg-secondary-teal transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-teal text-xs"
                                style={{
                                    minHeight: '48px',
                                    minWidth: '135px',
                                    border: '2px solid #FFFFFF'
                                }}
                            >
                                SUBSCRIBE
                            </button>
                        </form>

                        {/* Social Media Icons */}
                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-secondary-teal transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-secondary-teal transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-3 gap-8 col-span-1 md:col-span-2 lg:col-span-2">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">{title}</h4>
                                <ul className="space-y-2.5 list-none">
                                    {links.map((link: any, index: number) => (
                                        <li
                                            key={link.label}
                                            className={link.isAddress ? 'leading-relaxed' : ''}
                                            style={title === 'Connect' && link.isAddress && index === 1 ? { marginTop: '40px' } : {}}
                                        >
                                            <a
                                                href={link.href}
                                                onClick={(e) => handleLinkClick(e, link.href)}
                                                className={`transition-colors duration-200 text-sm block ${
                                                    link.isAddress
                                                        ? 'cursor-default text-neutral-gray leading-relaxed'
                                                        : 'hover:text-white'
                                                }`}
                                                style={link.isAddress ? { pointerEvents: 'none' } : {}}
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

                <div className="mt-12 pt-8 text-center text-xs" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
                    <p>&copy; 2025 Trembach Law Firm. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;