import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const Trump2025TariffAttorneyPage: React.FC = () => {
  useMeta({
    title: '2025 Trump Tariff Attorney California | Reciprocal Tariff Lawyer | Trembach Law',
    description: '2025 Trump tariff attorney California - Expert reciprocal tariff lawyer helping businesses navigate new tariffs on China, Mexico, Canada. IEEPA tariff defense, tariff exclusion requests. Free consultation (310) 744-1328.',
    keywords: 'trump tariff attorney 2025, reciprocal tariff lawyer, 2025 tariff attorney california, china tariff lawyer 2025, mexico tariff attorney, canada tariff lawyer, IEEPA tariff attorney, liberation day tariff lawyer, trump tariffs 2025, tariff increase attorney, emergency tariff lawyer, tariff exemption attorney 2025, tariff mitigation lawyer, trade war attorney california, tariff defense lawyer 2025, california tariff attorney trump, section 301 tariff attorney 2025, reciprocal duty lawyer, new tariff attorney, tariff relief lawyer california',
    canonical: 'trump-2025-tariff-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-2025-tariffs.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: '2025 Trump Tariff Attorney California - Reciprocal Tariff Defense',
        description: 'Expert California tariff attorney helping businesses navigate 2025 Trump tariffs including reciprocal tariffs, IEEPA emergency tariffs, and new duties on China, Mexico, and Canada.',
        url: `${siteConfig.siteUrl}/trump-2025-tariff-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Resources', url: `${siteConfig.siteUrl}/resources` },
        { name: '2025 Trump Tariff Attorney', url: `${siteConfig.siteUrl}/trump-2025-tariff-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What are the 2025 Trump tariffs affecting California businesses?',
          answer: 'The 2025 Trump administration has implemented reciprocal tariffs ranging from 10% to 50%+ on imports from major trading partners. California importers face new tariffs on Chinese goods (60%+), Mexican products (25%), Canadian imports (25%), and goods from other countries under IEEPA emergency powers. Our 2025 tariff attorneys help businesses navigate these new duties through tariff engineering, exclusion requests, and compliance strategies.',
        },
        {
          question: 'How can a 2025 tariff attorney help my California business?',
          answer: 'A 2025 tariff attorney can: (1) Analyze your supply chain for tariff exposure, (2) File tariff exclusion requests where available, (3) Restructure sourcing to minimize duties, (4) Implement tariff engineering strategies, (5) Defend against CBP audits, (6) Challenge incorrect tariff classifications, (7) File protests and refund claims, and (8) Advise on USMCA qualification to avoid Mexico/Canada tariffs.',
        },
        {
          question: 'What is the IEEPA and how does it affect tariffs in 2025?',
          answer: 'The International Emergency Economic Powers Act (IEEPA) allows the President to declare economic emergencies and impose tariffs without Congressional approval. In 2025, IEEPA has been used to implement emergency tariffs on various goods. Our IEEPA tariff attorneys help businesses understand their exposure and develop mitigation strategies including supply chain restructuring and tariff engineering.',
        },
        {
          question: 'Can I get an exclusion from 2025 Trump tariffs?',
          answer: 'Depending on the tariff program, exclusion requests may be available. For Section 301 tariffs on China, USTR has periodically opened exclusion processes. Our tariff exclusion attorneys help California businesses prepare compelling exclusion requests documenting why specific products should be exempted from additional duties.',
        },
        {
          question: 'What are reciprocal tariffs and how do they work?',
          answer: 'Reciprocal tariffs are designed to match the tariff rates that other countries impose on U.S. exports. Under the 2025 reciprocal tariff policy, the U.S. imposes tariffs equal to or higher than what trading partners charge. Our reciprocal tariff lawyers help importers understand their exposure and develop strategies to minimize duty payments.',
        },
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="hero" aria-label="2025 Trump Tariff Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1920&auto=format&fit=crop"
            alt=""
            role="presentation"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            className="hero-bg-image"
          />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="container">
          <h1>2025 Trump Tariff Attorney California<br />Reciprocal Tariff Lawyer</h1>
          <p className="hero-subtitle">
            California businesses face unprecedented tariff challenges in 2025. As your expert Trump tariff attorney, we help navigate reciprocal tariffs, IEEPA emergency duties, and new tariffs on China, Mexico, and Canada. Protect your supply chain with strategic tariff mitigation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Tariff Analysis</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* 2025 Tariff Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Understanding 2025 Trump Tariffs
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              The 2025 tariff landscape represents the most significant trade policy shift in decades. Our <strong>Trump tariff attorneys</strong> help California importers understand their exposure and develop strategies to minimize duty payments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">China Tariffs</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">60%+</p>
              <p className="text-text-secondary text-sm">
                Additional tariffs on Chinese imports under Section 301 and IEEPA authority. Cumulative rates can exceed 100% for some products.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">Mexico Tariffs</h3>
              <p className="text-3xl font-bold text-orange-600 mb-2">25%</p>
              <p className="text-text-secondary text-sm">
                New tariffs on Mexican goods not qualifying for USMCA. USMCA certification critical for duty-free treatment.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">Canada Tariffs</h3>
              <p className="text-3xl font-bold text-yellow-600 mb-2">25%</p>
              <p className="text-text-secondary text-sm">
                Tariffs on Canadian imports outside USMCA coverage. Proper origin documentation essential.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-garamond">Reciprocal Tariffs</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">10-50%</p>
              <p className="text-text-secondary text-sm">
                Universal baseline tariffs on all imports, with higher rates matching what partners charge U.S. exports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for 2025 Tariffs */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            2025 Tariff Attorney Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Impact Assessment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our <strong>2025 tariff attorneys</strong> conduct comprehensive analysis of your import portfolio to identify tariff exposure. We calculate the financial impact of new duties and prioritize mitigation strategies by potential savings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Complete tariff exposure analysis by HTS code</li>
                <li>Financial impact modeling for 2025 tariffs</li>
                <li>Country-by-country duty rate comparison</li>
                <li>Priority ranking of mitigation opportunities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Exclusion Requests</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When exclusion processes are available, our <strong>tariff exclusion attorneys</strong> prepare compelling requests demonstrating why your products should be exempted from additional duties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 exclusion request preparation</li>
                <li>Economic harm documentation</li>
                <li>Domestic sourcing analysis</li>
                <li>Exclusion renewal applications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supply Chain Restructuring</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our <strong>trade attorneys</strong> help California businesses restructure supply chains to minimize tariff exposure through sourcing changes, manufacturing shifts, and strategic partnerships.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Alternative sourcing country analysis</li>
                <li>Vietnam, India, Southeast Asia sourcing compliance</li>
                <li>Substantial transformation opinions</li>
                <li>First sale valuation opportunities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Qualification & Certification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Avoid 25% tariffs on Mexican and Canadian goods by properly qualifying under USMCA. Our <strong>USMCA attorneys</strong> ensure your products meet rules of origin requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA rules of origin analysis</li>
                <li>Regional value content calculations</li>
                <li>Certificate of origin preparation</li>
                <li>Supplier documentation requirements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Engineering & Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Legally minimize duties through proper tariff classification and product modifications. Our <strong>tariff classification attorneys</strong> identify opportunities for lower duty rates.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification optimization</li>
                <li>Product modification for duty reduction</li>
                <li>Binding ruling requests</li>
                <li>Classification dispute defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Affected */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Industries Most Affected by 2025 Tariffs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Electronics & Technology</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Semiconductors, computers, smartphones, and tech components face cumulative tariffs exceeding 50% from China. Our <strong>tech tariff attorneys</strong> help Silicon Valley and California tech companies navigate these duties.
              </p>
              <a href="#san-jose-tech-export-controls" className="text-secondary-teal hover:underline font-medium">
                Tech Industry Tariff Solutions →
              </a>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Automotive & Parts</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Auto parts from Mexico face 25% tariffs unless USMCA-qualified. Electric vehicle batteries and components from China face even higher rates. Our <strong>automotive tariff lawyers</strong> ensure compliance.
              </p>
              <a href="#los-angeles-tariff-lawyer" className="text-secondary-teal hover:underline font-medium">
                Automotive Tariff Help →
              </a>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Consumer Goods & Retail</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Apparel, footwear, furniture, and household goods from China face substantial tariff increases. E-commerce sellers and retailers need strategic sourcing advice from our <strong>consumer goods tariff attorneys</strong>.
              </p>
              <a href="#los-angeles-fashion-tariff" className="text-secondary-teal hover:underline font-medium">
                Consumer Goods Solutions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related California Locations */}
      <RelatedCityPages currentCity="California" region="los-angeles" />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Get Your Free 2025 Tariff Analysis
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our 2025 Trump tariff attorneys today for a complimentary analysis of your tariff exposure. We'll identify savings opportunities and develop a strategic mitigation plan.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
              Free Tariff Consultation
            </Button>
            <Button href={siteConfig.phoneTel} variant="outline">
              Call {siteConfig.phoneDisplay}
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

export default Trump2025TariffAttorneyPage;
