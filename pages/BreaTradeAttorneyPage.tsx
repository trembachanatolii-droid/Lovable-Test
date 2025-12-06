
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const BreaTradeAttorneyPage: React.FC = () => {
  useMeta({
    title: 'Brea Trade Attorney | Orange County Import Export Lawyer CA',
    description: 'Brea trade attorney for manufacturers & distributors. Customs compliance, tariff classification, USMCA. North Orange County. (310) 744-1328.',
    canonical: 'brea-trade-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-brea.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Brea Trade Compliance Attorney - Import Export Lawyer',
        description: 'Serving Brea, CA with expert trade compliance, import/export law, and customs legal services for manufacturers and distributors in North Orange County.',
        url: `${siteConfig.siteUrl}/brea-trade-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Local Offices', url: `${siteConfig.siteUrl}/local-offices` },
        { name: 'Brea', url: `${siteConfig.siteUrl}/brea-trade-attorney` }
      ]),
      generateServiceSchema({
        name: 'Brea Trade Compliance Legal Services',
        description: 'Comprehensive trade compliance, customs law, and import/export legal representation for Brea manufacturers and distributors.',
        serviceType: 'International Trade Law',
        url: `${siteConfig.siteUrl}/brea-trade-attorney`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="Brea Trade Law Hero">
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
          <h1>Brea Trade Attorney<br />Import Export Compliance Lawyer</h1>
          <p className="hero-subtitle">
            Expert trade compliance counsel for Brea businesses. Customs law, import/export compliance, and supply chain solutions in North Orange County's commercial hub.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Trade Law for Brea's Business Community
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Brea businesses face complex <strong>import/export regulations</strong> that require specialized legal expertise. Whether you're importing components, exporting finished goods, or navigating <strong>customs compliance</strong>, our trade attorneys provide expert guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Trade Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                As your <strong>Brea trade attorney</strong>, we understand the local logistics corridors, port access routes, and regional supply chains in North Orange County. Strategic, practical counsel.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry-Specific Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We serve Brea's key industries with tariff classification, USMCA compliance, and Section 301 mitigation strategies tailored to your business needs.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proactive Compliance Solutions</h3>
              <p className="text-text-secondary leading-relaxed">
                From <strong>HTS classification audits</strong> to UFLPA forced labor due diligence, we design trade compliance programs that prevent costly violations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance Services for Brea Companies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Classification & Tariff Engineering</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Accurate <strong>HTS classification</strong> determines your duty rate, trade remedy exposure, and regulatory compliance requirements. We classify your products, obtain binding rulings, and engineer tariff strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS Classification for all product categories</li>
                <li>Binding Rulings for classification certainty</li>
                <li>Tariff Engineering to minimize Section 301 tariffs</li>
                <li>Post-Entry Amendments via protests</li>
                <li>Audit Defense during CBP Focused Assessments</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Origin Certifications</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you source from <strong>Mexico or Canada</strong>, USMCA preferential tariff treatment can eliminate duties. We prepare certifications, calculate RVC, and defend origin claims.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA origin certifications</li>
                <li>Regional value content calculations</li>
                <li>CBP origin verifications</li>
                <li>6-year recordkeeping compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs impose <strong>7.5%-25% additional duties</strong> on Chinese imports. We develop comprehensive mitigation strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 coverage analysis</li>
                <li>Substantial transformation planning</li>
                <li>First Sale for Export valuation</li>
                <li>Supply chain diversification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong>Uyghur Forced Labor Prevention Act</strong> creates presumptions that goods from Xinjiang are made with forced labor. We conduct due diligence and respond to detentions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supply chain mapping</li>
                <li>UFLPA detention response</li>
                <li>Supplier audit programs</li>
                <li>Alternative sourcing strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Enforcement Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP penalties can reach <strong>$10,000 per violation</strong>. We provide immediate legal representation for Pre-Penalty Notices and CBP inquiries.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Prior Disclosure filings</li>
                <li>Pre-Penalty Notice response</li>
                <li>CBP Focused Assessments</li>
                <li>Court of International Trade litigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Brea Businesses Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Regional Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand Brea's logistics corridors and regional supply chains. Local knowledge means faster issue resolution.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We serve Brea's key industries. We understand your products, margins, and regulatory pressures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer flat-fee packages for classifications, certifications, and rulings. No surprise billing.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proactive Planning</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We design proactive trade compliance programs that prevent issues before they arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Brea Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Automotive & Transportation</h3>
              <p className="text-sm text-text-secondary">USMCA origin, tariff classification</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Consumer Goods</h3>
              <p className="text-sm text-text-secondary">Section 301 tariffs, product safety</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Industrial Equipment</h3>
              <p className="text-sm text-text-secondary">HTS classification, duty optimization</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Electronics</h3>
              <p className="text-sm text-text-secondary">FCC compliance, Section 301</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Apparel & Textiles</h3>
              <p className="text-sm text-text-secondary">Country-of-origin, UFLPA</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Food & Beverage</h3>
              <p className="text-sm text-text-secondary">FDA Prior Notice, FSMA</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Medical Devices</h3>
              <p className="text-sm text-text-secondary">FDA/CBP coordination, HTS 9021</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-2">Furniture & Home Goods</h3>
              <p className="text-sm text-text-secondary">Wood products, Section 301</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6 text-center">
            Deep Brea Local Knowledge
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Our attorneys understand Brea's position in North Orange County, with excellent access to LA/Long Beach ports. We serve clients by appointment throughout the Brea area.
          </p>

          <div className="bg-neutral-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Contact Information</h3>
            <p className="text-text-secondary mb-4">
              <strong>Headquarters:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301<br />
              <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a>
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/practice-areas" className="text-secondary-teal hover:underline">Customs Compliance</Link>
                </li>
                <li>
                  <Link to="/practice-areas" className="text-secondary-teal hover:underline">Trade Remedies</Link>
                </li>
                <li>
                  <Link to="/customs-defense" className="text-secondary-teal hover:underline">CBP Enforcement Defense</Link>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Focus</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/automotive-trade-attorney" className="text-secondary-teal hover:underline">Automotive & Transportation</Link>
                </li>
                <li>
                  <Link to="/industries/technology-electronics" className="text-secondary-teal hover:underline">Electronics & Technology</Link>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other Locations</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/los-angeles-port-customs-attorney" className="text-secondary-teal hover:underline">Los Angeles & Long Beach Port</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-secondary-teal hover:underline">Calabasas HQ Office</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <Link to="/resources/uflpa-compliance-guide" className="text-center hover:text-secondary-teal">
                <h4 className="font-bold mb-2">UFLPA Guide</h4>
              </Link>
              <Link to="/resources/section-301-tariffs" className="text-center hover:text-secondary-teal">
                <h4 className="font-bold mb-2">Section 301</h4>
              </Link>
              <Link to="/resources/usmca-guide" className="text-center hover:text-secondary-teal">
                <h4 className="font-bold mb-2">USMCA Guide</h4>
              </Link>
              <Link to="/ecommerce-digital-trade-guide" className="text-center hover:text-secondary-teal">
                <h4 className="font-bold mb-2">E-commerce</h4>
              </Link>
              <Link to="/trade-law-faq" className="text-center hover:text-secondary-teal">
                <h4 className="font-bold mb-2">FAQ Center</h4>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Optimize Your Import/Export Strategy
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't let customs compliance issues slow your business. Contact our Brea trade attorney team for expert counsel.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
              Schedule Free Consultation
            </Button>
            <Button href="tel:+13107441328" variant="outline">
              Call (310) 744-1328
            </Button>
          </div>
        </div>
      </section>

      {/* Evaluation Form */}
      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default BreaTradeAttorneyPage;
