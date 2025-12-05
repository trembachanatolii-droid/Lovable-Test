import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SouthSanFranciscoTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'South San Francisco Trade Attorney',
    description: 'Biotech Manufacturing Export Controls CA',
    canonical: 'south-san-francisco-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-south-san-francisco-trade-attorney.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'FULL_TITLE',
        description: 'FULL_DESCRIPTION',
        url: `${siteConfig.siteUrl}/south-san-francisco-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Locations', url: `${siteConfig.siteUrl}/california-locations` },
        { name: 'South San Francisco', url: `${siteConfig.siteUrl}/south-san-francisco-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'South San Francisco Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance and import/export legal services for South San Francisco biotech corridor, industrial parks, SFO proximity. Expert trade attorney services including export controls, customs compliance, and tariff optimization.',
        serviceType: 'Biotechnology FOCUS Life Sciences Manufacturing Trade Law',
        url: `${siteConfig.siteUrl}/south-san-francisco-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="South San Francisco Trade Law Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background-2.jpg"
            alt=""
            role="presentation"
            width="1920"
            height="1080"
            loading="eager"
            style={{ aspectRatio: '16 / 9' }}
            decoding="async"
            className="hero-bg-image"
          />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>South San Francisco Trade Attorney<br />Biotechnology FOCUS Life Sciences Manufacturing</h1>
          <p className="hero-subtitle">
            Expert trade law for South San Francisco businesses. Import compliance, export controls, and global trade strategy for the region's growing economy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for South San Francisco
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              South San Francisco is a key hub for biotech corridor, industrial parks, SFO proximity. Companies here require expert trade compliance for international operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Import/Export Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your South San Francisco trade attorney, we provide comprehensive trade compliance services for local businesses.
              </p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Customs Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                We handle HTS classification, tariff engineering, and customs clearance for South San Francisco importers and exporters.
              </p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Coverage</h3>
              <p className="text-text-secondary leading-relaxed">
                Serving South San Francisco and the surrounding region with expert trade law services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance Services
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Controls & Sanctions</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We manage EAR/ITAR compliance, OFAC sanctions screening, and export license applications for South San Francisco companies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ECCN classification and license applications</li>
                <li>OFAC restricted party screening programs</li>
                <li>Export compliance program design</li>
                <li>Deemed export compliance</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs & Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We handle HTS classification, customs valuation, and import entry procedures for optimal duty rates.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS tariff classification</li>
                <li>First Sale for Export valuation</li>
                <li>Section 301 tariff mitigation</li>
                <li>USMCA certificate of origin</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We design scalable trade compliance programs tailored to your business size and import/export patterns.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Written compliance policies and procedures</li>
                <li>Employee training programs</li>
                <li>Internal audits and risk assessments</li>
                <li>Recordkeeping systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why South San Francisco Companies Trust Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand South San Francisco's unique business environment and provide tailored trade compliance solutions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Transparent pricing with no surprise bills. Flexible payment terms for businesses of all sizes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fast Turnaround</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We prioritize your timelines with quick responses and efficient service delivery.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Comprehensive Support</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                From classification to compliance programs, we provide end-to-end trade law services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Ready to Optimize Your Trade Operations?
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our South San Francisco trade attorney team for expert import/export compliance services.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">Schedule Free Consultation</Button>
            <Button href="tel:+13107441328" variant="outline">Call (310) 744-1328</Button>
          </div>
        </div>
      </section>

      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default SouthSanFranciscoTradeAttorneyPage;
