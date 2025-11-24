import React, { useEffect } from 'react';
import { useMeta } from '../hooks/useMeta';
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
          We couldn't find the page you're looking for. It may have been moved, deleted, or the URL may be incorrect.
        </p>
        <p className="text-base text-text-secondary mb-8">
          Don't worry - we can help you find what you need. Explore our most popular pages below or contact us directly for assistance with your international trade law matter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#"
            className="inline-block bg-secondary-teal text-white px-8 py-3 rounded-md font-semibold hover:bg-secondary-forestGreen transition-colors duration-300"
          >
            Return to Homepage
          </a>
          <a
            href="#contact"
            className="inline-block bg-white text-primary-navy border-2 border-primary-navy px-8 py-3 rounded-md font-semibold hover:bg-primary-navy hover:text-white transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>

        <div className="bg-gray-light rounded-2xl p-8 text-left mb-8">
          <h3 className="text-xl font-bold font-garamond text-primary-navy mb-4">
            Practice Areas
          </h3>
          <ul className="space-y-2 mb-6">
            <li>
              <a href="#customs-defense" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Customs Defense &amp; Litigation - CBP penalty defense and enforcement actions
              </a>
            </li>
            <li>
              <a href="#regulatory-compliance" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Regulatory Compliance &amp; Advisory - Import/export compliance programs
              </a>
            </li>
            <li>
              <a href="#export-controls" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Export Controls &amp; Sanctions - ITAR, EAR, and OFAC compliance
              </a>
            </li>
            <li>
              <a href="#tariff-classification" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Tariff Classification - HTS classification and duty optimization
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-bold font-garamond text-primary-navy mb-4 mt-6">
            Industries We Serve
          </h3>
          <ul className="space-y-2 mb-6">
            <li>
              <a href="#technology-electronics" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Technology &amp; Electronics - Export controls and semiconductor compliance
              </a>
            </li>
            <li>
              <a href="#apparel-textiles" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Apparel &amp; Textiles - UFLPA and Section 301 strategies
              </a>
            </li>
            <li>
              <a href="#food-agriculture" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Food &amp; Agriculture - FDA and USDA import compliance
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-bold font-garamond text-primary-navy mb-4 mt-6">
            California Trade Law Resources
          </h3>
          <ul className="space-y-2 mb-6">
            <li>
              <a href="#los-angeles-port" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Los Angeles Port - Port of LA/LB customs expertise
              </a>
            </li>
            <li>
              <a href="#bay-area-trade-law" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Bay Area Trade Law - San Francisco and Silicon Valley
              </a>
            </li>
            <li>
              <a href="#resources-hub" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Resource Hub - Comprehensive trade law guides
              </a>
            </li>
            <li>
              <a href="#faq-center" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                FAQ Center - Common questions answered
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-bold font-garamond text-primary-navy mb-4 mt-6">
            About Our Firm
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#attorney-profile" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Attorney Profile - Anatolii Trembach
              </a>
            </li>
            <li>
              <a href="#about" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                About Trembach Law Firm
              </a>
            </li>
            <li>
              <a href="#news" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                News &amp; Insights - Latest trade law developments
              </a>
            </li>
            <li>
              <a href="#success-stories" className="text-secondary-teal hover:text-primary-navy font-medium transition-colors">
                Success Stories - Client results and case studies
              </a>
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
