
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LosAngelesFashionTariffPage: React.FC = () => {
  useMeta({
    title: 'Fashion Tariff Lawyer Los Angeles | Apparel Import Attorney',
    description: 'Los Angeles fashion tariff lawyer & apparel import attorney. Expert HTS classification, Section 301 fashion tariffs, textile compliance. Port of LA access. (310) 744-1328.',
    keywords: 'fashion tariff lawyer los angeles, apparel import attorney los angeles, textile tariff attorney, fashion import compliance lawyer, clothing tariff lawyer la, garment import attorney california, fashion trade lawyer los angeles',
    canonical: 'los-angeles-fashion-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-fashion-la.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Los Angeles Fashion Tariff Lawyer - Apparel & Textile Import Attorney',
        description: 'Los Angeles fashion tariff lawyer specializing in apparel imports, textile HTS classification, Section 301 fashion tariffs, and clothing trade compliance.',
        url: `${siteConfig.siteUrl}/los-angeles-fashion-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Los Angeles Fashion Tariff Lawyer', url: `${siteConfig.siteUrl}/los-angeles-fashion-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'What are the current tariff rates for fashion and apparel imports?',
          answer: 'Fashion and apparel tariffs vary widely based on fabric composition, construction method, and country of origin. Basic cotton t-shirts may face 16.5% duties, while wool suits can be 17.5-19.5%. Section 301 tariffs add an additional 7.5-25% on Chinese-made apparel. Proper HTS classification is critical - a misclassification can mean the difference between 5% and 32% duty rates.',
        },
        {
          question: 'How can a fashion tariff lawyer help reduce my apparel import costs?',
          answer: 'Our Los Angeles fashion tariff lawyers reduce your costs through: (1) precise HTS classification to find the lowest legal duty rate, (2) Section 301 tariff strategies including country of origin analysis, (3) duty drawback programs to recover paid duties on re-exported goods, (4) free trade agreement qualification (USMCA, CAFTA-DR), and (5) tariff engineering to modify product specs for lower duty classifications.',
        },
        {
          question: 'What are common CBP issues for fashion importers in Los Angeles?',
          answer: 'Los Angeles fashion importers frequently face: textile transshipment investigations (false country of origin claims), forced labor detentions under UFLPA (especially cotton from Xinjiang), undervaluation audits, trademark/counterfeit seizures, Section 301 tariff compliance, and textile visa/quota violations. Our LA office has extensive experience defending fashion brands at Port of LA and Port of Long Beach.',
        },
        {
          question: 'Does my fashion brand need to worry about forced labor compliance?',
          answer: 'Absolutely. The Uyghur Forced Labor Prevention Act (UFLPA) presumes all cotton and apparel from Xinjiang, China is made with forced labor. CBP has detained over $2 billion in goods under UFLPA. Fashion brands must map their entire supply chain, conduct due diligence on cotton sources, and maintain clear documentation. We help fashion companies implement robust compliance programs and defend against UFLPA detentions.',
        },
        {
          question: 'What is the Special Regime for textiles and why does it matter?',
          answer: 'The Special Regime for textiles requires extremely specific HTS classification - you must identify exact fiber content percentages, fabric construction (woven vs. knit), and garment type. Small variations can change the duty rate significantly. For example, "knit cotton t-shirts" are classified differently than "woven cotton shirts." Our fashion tariff lawyers ensure your classifications are precise and defensible.',
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
      <section className="hero" aria-label="Los Angeles Fashion Tariff Lawyer Hero">
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
          <h1>Los Angeles Fashion Tariff Lawyer<br />Apparel Import Attorney</h1>
          <p className="hero-subtitle">
            Expert fashion and apparel tariff lawyer serving Los Angeles importers. Specialized HTS classification, Section 301 strategies, textile compliance, and CBP defense for the fashion industry.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Fashion Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Fashion Industry Tariff Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              As the <strong>fashion capital of the West Coast</strong>, Los Angeles handles billions in apparel imports annually. Our specialized fashion tariff lawyers understand the unique challenges facing apparel brands, from fast fashion to luxury goods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fashion Industry Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We exclusively represent <strong>fashion and apparel importers</strong>. We understand textile HTS codes, fabric classifications, and the complexities of Section 301 tariffs on clothing imports.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of LA Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Port of Los Angeles and Long Beach</strong> where most West Coast fashion imports clear customs. Rapid response to detentions, audits, and seizures.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost Reduction Strategies</h3>
              <p className="text-text-secondary leading-relaxed">
                Proven tariff engineering and classification strategies that have saved fashion brands <strong>millions in duty costs</strong> while maintaining full CBP compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fashion Tariff Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Fashion & Apparel Tariff Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Apparel HTS Classification & Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fashion HTS classification is extraordinarily complex. A women's jacket can be classified under <strong>dozens of different tariff codes</strong> depending on fiber content, construction, and features. We analyze your products to find the lowest legal classification.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Textile fiber content analysis for HTS purposes</li>
                <li>Woven vs. knit classification strategies</li>
                <li>Men's vs. women's garment distinctions</li>
                <li>Special purpose clothing classifications (athletic, workwear)</li>
                <li>Binding Ruling requests for fashion products</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Strategies for Fashion</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs add <strong>7.5% to 25%</strong> on Chinese-made apparel and accessories. Our Los Angeles fashion tariff lawyers help you navigate exclusions, country of origin shifts, and supply chain restructuring.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 List coverage analysis for fashion products</li>
                <li>Tariff exclusion strategies and applications</li>
                <li>Substantial transformation opinions for third-country production</li>
                <li>Vietnam, Bangladesh, and alternative sourcing compliance</li>
                <li>Section 301 refund protests and drawback</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Forced Labor Compliance for Apparel</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Cotton apparel is a <strong>high-risk category</strong> for UFLPA detention. CBP has detained billions in cotton products suspected of Xinjiang forced labor. We help fashion brands implement supply chain due diligence and respond to detentions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Cotton supply chain mapping and tracing</li>
                <li>UFLPA detention defense for fashion products</li>
                <li>Forced labor compliance programs for apparel brands</li>
                <li>Alternative cotton sourcing strategies (Pima, Egyptian, organic)</li>
                <li>Third-party audit coordination and documentation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Textile Transshipment Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively investigates textile transshipment - falsely claiming products are made in one country when they're actually from China or other high-tariff origins. Penalties can be <strong>severe</strong>. We defend against EAPA investigations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>EAPA (Enforce and Protect Act) investigation defense</li>
                <li>Country of origin verification and documentation</li>
                <li>Substantial transformation analysis for textile processing</li>
                <li>Factory verification and audit support</li>
                <li>Prior disclosure filings for country of origin errors</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Fashion Brand Valuation & Transfer Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP frequently audits fashion importers for undervaluation - claiming you didn't pay duties on the <strong>full transaction value</strong>. Related-party transactions, royalties, and assists all affect customs value.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Related-party transaction value analysis</li>
                <li>Royalty and license fee dutiability reviews</li>
                <li>Assist value calculations (design costs, samples)</li>
                <li>First sale for export strategies</li>
                <li>CBP valuation audit defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trademark & IP Seizure Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP seizes suspected counterfeit goods at ports. Even <strong>legitimate gray market goods</strong> can be seized. We defend fashion brands and importers against trademark seizure actions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Counterfeit merchandise seizure defense</li>
                <li>Gray market goods (parallel imports) legal analysis</li>
                <li>Trademark recordation strategies for brand protection</li>
                <li>Petition for release of detained fashion goods</li>
                <li>Administrative forfeiture proceedings defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fashion Industries Served */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Fashion Sectors We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Apparel Categories</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Fast Fashion & Contemporary</li>
                <li>• Luxury & Designer Fashion</li>
                <li>• Activewear & Athleisure</li>
                <li>• Streetwear & Urban Fashion</li>
                <li>• Denim & Casual Wear</li>
                <li>• Children's & Baby Clothing</li>
                <li>• Swimwear & Resort Wear</li>
                <li>• Outerwear & Coats</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Accessories & Footwear</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Handbags & Leather Goods</li>
                <li>• Footwear (All Categories)</li>
                <li>• Jewelry & Watches</li>
                <li>• Belts & Small Leather Goods</li>
                <li>• Sunglasses & Eyewear</li>
                <li>• Scarves & Fashion Accessories</li>
                <li>• Hats & Headwear</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Business Models</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Direct-to-Consumer Brands</li>
                <li>• E-commerce Fashion Retailers</li>
                <li>• Fashion Wholesalers</li>
                <li>• Private Label Importers</li>
                <li>• Fashion Marketplaces</li>
                <li>• Brand Licensees</li>
                <li>• Boutique Retailers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Los Angeles Fashion District */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving Los Angeles Fashion Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fashion District & DTLA</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve the <strong>Los Angeles Fashion District</strong>, the heart of West Coast apparel trade:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Santee Alley & Fashion District showrooms</li>
                <li>• Downtown LA apparel manufacturers</li>
                <li>• Garment District wholesalers</li>
                <li>• LA Mart & California Market Center tenants</li>
                <li>• Vernon/Commerce industrial fashion facilities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater LA Fashion Hubs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fashion brands and retailers throughout Los Angeles County:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Beverly Hills & West Hollywood luxury brands</li>
                <li>• Culver City & Playa Vista e-commerce HQs</li>
                <li>• South Bay fashion importers (Torrance, Carson)</li>
                <li>• San Gabriel Valley apparel distributors</li>
                <li>• Orange County fashion retailers (Irvine, Costa Mesa)</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Port of LA/Long Beach Access</h3>
            <p className="text-center text-neutral-200 mb-4">
              The Port of Los Angeles and Port of Long Beach handle <strong>over 40% of U.S. containerized imports</strong>, including the majority of West Coast fashion shipments. Our Los Angeles office provides immediate access for CBP meetings, cargo inspections, and detention responses.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Fashion Brands Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fashion Industry Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep expertise in fashion and apparel</strong> tariff law. We understand textile classifications, the Special Regime for textiles, and the unique compliance challenges facing fashion importers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Cost Savings</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our tariff engineering and classification strategies have saved fashion clients <strong>6-figure and 7-figure annual duty costs</strong>. Proper HTS classification alone can reduce duty rates by 10-20 percentage points.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response to Detentions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Fashion is time-sensitive. When CBP detains your shipment, <strong>every day counts</strong>. We prioritize fashion industry emergencies and can respond to Port of LA/Long Beach detentions within hours.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">E-Commerce & DTC Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We represent numerous <strong>direct-to-consumer fashion brands</strong> and understand Section 321 de minimis, dropshipping compliance, and e-commerce platform integration with customs requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Los Angeles Office Location
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Los Angeles County & Fashion District)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Access:</strong> Easy access to Fashion District, Port of LA/Long Beach
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Port & Fashion District Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>To Fashion District:</strong> 101 East to Downtown LA, 25-30 minutes</li>
                <li><strong>To Port of LA:</strong> 101 to 110 to 710, approximately 50 minutes</li>
                <li><strong>To Port of Long Beach:</strong> 101 to 405 to 710, approximately 55 minutes</li>
                <li><strong>To LAX Air Cargo:</strong> 101 to 405 South, approximately 30 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Fashion Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tariff Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">HTS Classification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Compliance Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/uflpa-compliance-guide" className="service-link">
                    <span className="service-link__title">UFLPA Compliance</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">CBP Audit Defense</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="/long-beach-maritime-tariff" className="service-link">
                    <span className="service-link__title">Long Beach Port Services</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Fashion Tariff Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Los Angeles fashion tariff lawyers today. We'll analyze your product classifications, identify cost-saving opportunities, and develop a comprehensive tariff strategy for your fashion brand.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact#schedule-consultation" variant="solid">
              Schedule Free Consultation
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

export default LosAngelesFashionTariffPage;
