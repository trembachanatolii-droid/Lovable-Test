import React, { useEffect } from 'react';
import { useMeta } from '../hooks/useMeta';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO Meta Tags
  useMeta({
    title: '404 - Page Not Found',
    description: 'The page you are looking for could not be found. Return to Trembach Law Firm homepage or contact us for assistance with international trade and customs law matters.',
    canonical: '',
    robots: 'noindex, nofollow',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-default.jpg`,
  });

  return (
    <main className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-bold font-garamond text-primary-navy mb-6">404</h1>
        <div className="w-24 h-1 bg-secondary-teal mx-auto mb-8"></div>
        <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-text-secondary mb-4 leading-relaxed">
          We couldn't find the page you're looking for. It may have been moved, deleted, or the URL may be incorrect. As California's dedicated international trade law firm, we're committed to helping you navigate not just complex customs matters, but also our website.
        </p>
        <p className="text-base text-text-secondary mb-4">
          Whether you're facing a CBP audit, dealing with a seized shipment, or need guidance on Section 301 tariffs, our legal team provides experienced representation in CBP enforcement actions. We understand the urgency of trade compliance issues for California importers.
        </p>
        <p className="text-base text-text-secondary mb-8">
          Explore our practice areas below to find the resources you need, or contact us directly for a free consultation. Our 24-hour emergency response team handles time-sensitive matters at the Ports of Los Angeles, Long Beach, and Oakland.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-block bg-secondary-teal text-white px-8 py-3 rounded-md font-semibold hover:bg-secondary-forestGreen transition-colors duration-300"
          >
            Return to Homepage
          </Link>
          <Link to="/contact"
            className="inline-block bg-white text-primary-navy border-2 border-primary-navy px-8 py-3 rounded-md font-semibold hover:bg-primary-navy hover:text-white transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div className="bg-gray-light rounded-2xl p-8 text-left mb-8">
          <p className="text-sm text-text-secondary mb-6 italic">
            Browse our comprehensive trade law services below. From customs audits and penalty defense to export controls and tariff classification, we provide strategic legal counsel tailored to your business needs.
          </p>
          <h3 className="text-xl font-bold font-garamond text-primary-navy mb-4">
            Practice Areas
          </h3>
          <ul className="space-y-2 mb-6">
            <li>
              <Link to="/customs-defense-litigation" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Customs Defense &amp; Litigation - CBP penalty defense and enforcement actions
              </Link>
            </li>
            <li>
              <Link to="/practice-areas" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Regulatory Compliance &amp; Advisory - Import/export compliance programs
              </Link>
            </li>
            <li>
              <Link to="/practice-areas" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Export Controls &amp; Sanctions - ITAR, EAR, and OFAC compliance
              </Link>
            </li>
            <li>
              <Link to="/resources/tariffs-duties-classification" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Tariff Classification - HTS classification and duty optimization
              </Link>
            </li>
          </ul>

          <h3 className="text-xl font-bold font-garamond text-primary-navy mb-4 mt-6">
            Industries We Serve
          </h3>
          <ul className="space-y-2 mb-6">
            <li>
              <Link to="/technology-electronics-trade-attorney" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Technology &amp; Electronics - Export controls and semiconductor compliance
              </Link>
            </li>
            <li>
              <Link to="/apparel-textiles-trade-attorney" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Apparel &amp; Textiles - UFLPA and Section 301 strategies
              </Link>
            </li>
            <li>
              <Link to="/food-agriculture-trade-attorney" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Food &amp; Agriculture - FDA and USDA import compliance
              </Link>
            </li>
          </ul>

          <h3 className="text-xl font-bold font-garamond text-primary-navy mb-4 mt-6">
            California Trade Law Resources
          </h3>
          <ul className="space-y-2 mb-6">
            <li>
              <Link to="/los-angeles-port-customs-attorney" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Los Angeles Port - Port of LA/LB customs expertise
              </Link>
            </li>
            <li>
              <Link to="/bay-area-trade-law-attorney" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Bay Area Trade Law - San Francisco and Silicon Valley
              </Link>
            </li>
            <li>
              <Link to="/resources" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Resource Hub - Comprehensive trade law guides
              </Link>
            </li>
            <li>
              <Link to="/trade-law-faq" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                FAQ Center - Common questions answered
              </Link>
            </li>
          </ul>

          <h3 className="text-xl font-bold font-garamond text-primary-navy mb-4 mt-6">
            About Our Firm
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/attorney-profile" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Attorney Profile - Anatolii Trembach
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                About Trembach Law Firm
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                News &amp; Insights - Latest trade law developments
              </Link>
            </li>
            <li>
              <Link to="/practice-areas" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Practice Areas - Comprehensive trade law services
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-text-secondary">
          <p>Need immediate assistance?</p>
          <p className="text-xl font-bold text-primary-navy mt-2">
            Call <a href={`tel:${siteConfig.phone}`} className="text-secondary-teal hover:underline">{siteConfig.phone.replace('+1-', '(').replace('-', ') ')}</a>
          </p>
          <p className="mt-2">
            Email: <a href={`mailto:${siteConfig.email}`} className="text-secondary-teal hover:underline">{siteConfig.email}</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
