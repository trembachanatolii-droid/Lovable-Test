
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanDiegoEcommerceTariffPage: React.FC = () => {
  useMeta({
    title: 'Ecommerce Tariff Attorney San Diego | Online Seller Customs Lawyer',
    description: 'San Diego ecommerce tariff attorney & online seller customs lawyer. Expert Section 321 de minimis, Amazon FBA imports, dropshipping compliance. (310) 744-1328.',
    keywords: 'ecommerce tariff attorney san diego, online seller customs lawyer, amazon fba import attorney, dropshipping compliance lawyer, section 321 de minimis attorney, ecommerce import lawyer california',
    canonical: 'san-diego-ecommerce-tariff-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-ecommerce-sd.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Diego Ecommerce Tariff Attorney - Online Seller & FBA Import Lawyer',
        description: 'San Diego ecommerce tariff attorney specializing in online seller compliance, Amazon FBA imports, Section 321 de minimis, and dropshipping customs law.',
        url: `${siteConfig.siteUrl}/san-diego-ecommerce-tariff-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Diego Ecommerce Tariff Attorney', url: `${siteConfig.siteUrl}/san-diego-ecommerce-tariff-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is Section 321 de minimis and how does it help ecommerce sellers?',
          answer: 'Section 321 allows duty-free entry of shipments valued at $800 or less (per person, per day). This is crucial for ecommerce: direct-to-consumer shipments under $800 from China, Canada, or anywhere else enter duty-free with simplified entry. Many online sellers use Section 321 for dropshipping and small parcel fulfillment. However, CBP has strict compliance requirements - improper use can result in penalties and loss of Section 321 privileges.',
        },
        {
          question: 'How do tariffs affect my Amazon FBA business?',
          answer: 'Amazon FBA sellers importing inventory face full customs duties and compliance requirements. Common issues: (1) Section 301 tariffs (7.5-25%) on Chinese products, (2) HTS classification complexity for diverse product catalogs, (3) Undervaluation penalties if declared value is too low, (4) FDA/CPSC compliance for regulated products, (5) Intellectual property risks (counterfeit concerns). We help FBA sellers classify products correctly, minimize tariffs, and maintain CBP compliance.',
        },
        {
          question: 'Is dropshipping from China legal and how do I stay compliant?',
          answer: 'Dropshipping is legal but requires compliance: (1) Section 321 can be used for shipments under $800 to end consumers, (2) Accurate product descriptions and values required, (3) Country of origin must be disclosed to customers (FTC Made in USA rules), (4) Intellectual property compliance - no counterfeits, (5) Product safety standards (CPSC, FDA). CBP is cracking down on Section 321 abuse - we help dropshippers establish compliant operations.',
        },
        {
          question: 'What are common CBP issues for ecommerce businesses?',
          answer: 'Ecommerce sellers face unique CBP issues: (1) Section 321 abuse penalties (shipment splitting, undervaluation), (2) Intellectual property seizures (counterfeit products), (3) Product safety violations (consumer products, FDA), (4) Misclassification of diverse product lines, (5) Related-party valuation for owned brands, (6) Section 301 tariff compliance. Many ecommerce sellers are unprepared for CBP enforcement - we provide proactive compliance counsel.',
        },
        {
          question: 'Do I need a customs broker for my ecommerce business?',
          answer: 'It depends on your business model: Section 321 shipments (under $800 direct to consumer) typically don\'t require formal entry or broker. However, brokers are required for: (1) Amazon FBA or bulk inventory shipments over $800, (2) Formal entry (commercial importations), (3) Regulated products requiring special permits. We help ecommerce sellers determine when broker services are needed and select appropriate customs solutions.',
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
      <section className="hero" aria-label="San Diego Ecommerce Tariff Attorney Hero">
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
          <h1>San Diego Ecommerce Tariff Attorney<br />Online Seller Customs Lawyer</h1>
          <p className="hero-subtitle">
            Expert ecommerce tariff attorney serving San Diego online sellers. Specialized Section 321 de minimis, Amazon FBA imports, dropshipping compliance, and ecommerce customs law.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Ecommerce Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Ecommerce Customs Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Ecommerce has <strong>transformed retail</strong> but created new customs compliance challenges. San Diego online sellers need expert guidance on Section 321, FBA imports, product safety, and tariff compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Ecommerce Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus on <strong>ecommerce customs law</strong>. Deep expertise in Section 321, Amazon FBA, dropshipping, and online marketplace compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Online Seller Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We understand <strong>ecommerce business models</strong> - FBA, dropshipping, DTC brands - and provide practical compliance solutions for online sellers.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tariff Cost Reduction</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic tariff planning helps <strong>ecommerce sellers compete</strong>. We minimize duty costs through proper classification and Section 321 optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecommerce Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Ecommerce Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 321 De Minimis Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 321 allows <strong>duty-free shipments under $800</strong>. Critical for dropshipping and small parcel ecommerce, but requires strict compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 321 eligibility and compliance requirements</li>
                <li>Type 86 entry procedures and data elements</li>
                <li>Prohibited practices (shipment splitting, undervaluation)</li>
                <li>Section 321 CBP audits and enforcement response</li>
                <li>Ecommerce platform integration with Section 321</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Amazon FBA Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Amazon FBA requires <strong>formal customs entry</strong> for inventory shipments. We help FBA sellers navigate classification, valuation, and compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FBA inventory import entry procedures</li>
                <li>Product catalog HTS classification</li>
                <li>Section 301 tariff strategies for Chinese products</li>
                <li>Customs valuation and related-party pricing</li>
                <li>Amazon FBA fulfillment center coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Dropshipping Customs Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Dropshipping from China/overseas requires <strong>customs compliance</strong> and understanding of Section 321 rules for direct-to-consumer shipments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Dropshipping business model compliance structures</li>
                <li>Section 321 optimization for dropshipped orders</li>
                <li>Supplier coordination and customs documentation</li>
                <li>Product safety and labeling compliance</li>
                <li>Intellectual property risk management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Ecommerce Product Classification & Tariffs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Online sellers offer <strong>diverse product catalogs</strong> requiring proper HTS classification. Errors can result in duty underpayment penalties.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Multi-product catalog HTS classification</li>
                <li>Consumer goods classification (apparel, electronics, home goods)</li>
                <li>Section 301 tariff coverage analysis</li>
                <li>Classification database development for SKU management</li>
                <li>Automated classification integration with ecommerce platforms</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Ecommerce Product Safety & Regulatory Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Online sellers must comply with <strong>product safety regulations</strong> - CPSC, FDA, FTC - in addition to customs requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CPSC consumer product safety compliance</li>
                <li>FDA food, drug, and cosmetic import requirements</li>
                <li>FTC Made in USA and country of origin disclosure</li>
                <li>Product testing and certification (toys, electronics)</li>
                <li>Labeling and packaging compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Intellectual Property & Counterfeit Avoidance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP seizes <strong>counterfeit goods</strong> at ports. Ecommerce sellers must ensure supplier legitimacy and avoid IP violations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supplier vetting for intellectual property compliance</li>
                <li>Trademark and copyright clearance procedures</li>
                <li>CBP IPR seizure defense</li>
                <li>Authorized distributor verification</li>
                <li>Brand protection strategies for ecommerce sellers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ecommerce Models */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Ecommerce Business Models We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Online Marketplaces</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Amazon FBA Sellers</li>
                <li>• Amazon FBM (Merchant Fulfilled)</li>
                <li>• eBay Sellers</li>
                <li>• Walmart Marketplace</li>
                <li>• Etsy Sellers (Handmade/Vintage)</li>
                <li>• Multi-Channel Sellers</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Direct-to-Consumer</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Shopify Stores</li>
                <li>• WooCommerce/WordPress</li>
                <li>• BigCommerce</li>
                <li>• Custom Ecommerce Platforms</li>
                <li>• Dropshipping Stores</li>
                <li>• Subscription Box Services</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Hybrid & Wholesale</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Private Label Brands</li>
                <li>• White Label Products</li>
                <li>• B2B Ecommerce</li>
                <li>• Wholesale + DTC</li>
                <li>• Crowdfunding/Kickstarter Fulfillment</li>
                <li>• Social Commerce (Instagram, TikTok)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving San Diego Ecommerce Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Diego County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve <strong>San Diego online sellers and ecommerce businesses</strong>:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Downtown San Diego tech startups</li>
                <li>• La Jolla & UTC ecommerce companies</li>
                <li>• Carlsbad & North County sellers</li>
                <li>• Chula Vista & South Bay</li>
                <li>• San Diego County online entrepreneurs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">California Ecommerce Sellers</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Online seller services throughout California:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Los Angeles ecommerce businesses</li>
                <li>• San Francisco Bay Area online sellers</li>
                <li>• Orange County DTC brands</li>
                <li>• Sacramento online retailers</li>
                <li>• Statewide Amazon FBA sellers</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">San Diego Ecommerce Hub</h3>
            <p className="text-center text-neutral-200 mb-4">
              San Diego has a <strong>thriving ecommerce and tech startup ecosystem</strong>. Our ecommerce tariff attorneys help San Diego online sellers navigate customs compliance while scaling their businesses globally.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Ecommerce Sellers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Ecommerce Customs Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep expertise in ecommerce</strong> customs - Section 321, FBA, dropshipping, and online marketplace compliance unique to digital commerce.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Online Seller Understanding</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>ecommerce business realities</strong> - thin margins, fast product cycles, global sourcing - and provide practical, cost-effective compliance solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Tariff Cost Minimization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We help ecommerce sellers <strong>minimize tariff costs</strong> through proper Section 321 use, strategic classification, and supply chain optimization.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Startup to Scale-Up Support</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We represent <strong>solo entrepreneurs through multi-million dollar ecommerce brands</strong>. Whether you're launching or scaling, we provide expert customs guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            San Diego Ecommerce Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving San Diego Ecommerce Sellers)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service:</strong> Remote ecommerce compliance counsel
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Ecommerce Resources</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>CBP Section 321:</strong> De minimis entry procedures</li>
                <li><strong>CPSC:</strong> Consumer product safety compliance</li>
                <li><strong>FDA:</strong> Food, drug, cosmetic import regulations</li>
                <li><strong>FTC:</strong> Made in USA and marketing compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Ecommerce Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Compliance Programs</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">HTS Classification</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Fashion & Retail</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/los-angeles-fashion-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Fashion Tariff Lawyer</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
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
            Schedule Your Free Ecommerce Tariff Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our San Diego ecommerce tariff attorneys today. We'll review your online business model, assess customs compliance, and develop strategies to minimize tariff costs while maintaining CBP compliance.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">
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

export default SanDiegoEcommerceTariffPage;
