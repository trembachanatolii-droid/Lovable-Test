
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SacramentoWineExportPage: React.FC = () => {
  useMeta({
    title: 'Wine Export Attorney Sacramento | Alcohol Export Lawyer CA',
    description: 'Sacramento wine export attorney & alcohol export lawyer. Expert TTB compliance, wine export documentation, international wine trade. California wine country. (310) 744-1328.',
    keywords: 'wine export attorney sacramento, alcohol export lawyer sacramento, wine trade attorney california, ttb compliance lawyer, wine export documentation attorney, california wine export lawyer',
    canonical: 'sacramento-wine-export-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-wine-sac.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Sacramento Wine Export Attorney - Wine & Alcohol Export Compliance Lawyer',
        description: 'Sacramento wine export attorney specializing in TTB compliance, wine export documentation, international wine trade regulations, and alcohol export law.',
        url: `${siteConfig.siteUrl}/sacramento-wine-export-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Sacramento Wine Export Attorney', url: `${siteConfig.siteUrl}/sacramento-wine-export-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What export documentation do I need to export wine from California?',
          answer: 'Wine exports from California require: (1) TTB Certificate of Label Approval (COLA) for the domestic market or export certificate, (2) Commercial invoice with detailed wine description, (3) TTB Form 5100.1 if exporting spirits/distilled products, (4) Certificate of Origin (for FTA qualification), (5) Export certificate from TTB (for some countries), and (6) destination country import permits and certificates (e.g., EU VI-1 forms, China AQSIQ registration). We help wineries compile complete export documentation.',
        },
        {
          question: 'Do I need TTB approval to export wine internationally?',
          answer: 'Generally, TTB regulates alcohol production and domestic distribution, but has limited jurisdiction over exports. However, some destination countries require TTB export certificates verifying the wine was legally produced in the U.S. Additionally, all wine producers must maintain TTB basic permits and comply with production regulations. We help wineries navigate TTB requirements for export activities.',
        },
        {
          question: 'What are the main export markets for California wine?',
          answer: 'Top export markets for California wine include: Canada (largest market), European Union (UK, Germany, Netherlands, France), Japan, China/Hong Kong, South Korea, Mexico, and Southeast Asia. Each market has unique requirements - EU requires VI-1 certificates and oenological practice compliance, China requires AQSIQ registration, Canada has provincial liquor board approvals. We help wineries enter new export markets compliantly.',
        },
        {
          question: 'How do tariffs affect wine exports?',
          answer: 'Wine faces varying tariff rates globally. The EU has imposed retaliatory tariffs on U.S. wine (since suspended). China imposed anti-dumping duties on Australian wine, increasing opportunities for California. Free trade agreements like USMCA provide preferential access to Canada/Mexico. We help wineries: (1) analyze tariff exposure in target markets, (2) qualify for FTA benefits, (3) structure pricing to account for duties, and (4) navigate tariff disputes.',
        },
        {
          question: 'Can you help with wine import compliance for bringing foreign wine into the U.S.?',
          answer: 'Yes. We assist wine importers with: TTB Certificate of Label Approval (COLA) applications, Federal Alcohol Administration Act compliance, customs entry and classification (HTS 2204), valuation and related-party pricing, TTB import tax bond requirements, and FDA food safety compliance. Many Sacramento-area wine distributors import European, South American, and Australian wines - we provide full import compliance services.',
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
      <section className="hero" aria-label="Sacramento Wine Export Attorney Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background.jpg"
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
          <h1>Sacramento Wine Export Attorney<br />California Wine Trade Lawyer</h1>
          <p className="hero-subtitle">
            Expert wine export attorney serving Sacramento and California wine country. Specialized TTB compliance, export documentation, international wine trade regulations, and alcohol beverage law.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Wine Export Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              California Wine Export Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              California produces <strong>90% of U.S. wine</strong> and exports to over 100 countries. Our wine export attorneys understand TTB regulations, international wine trade requirements, and the unique challenges facing California wineries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus on <strong>wine and alcohol beverage</strong> trade law. Deep expertise in TTB regulations, wine export compliance, and international alcohol trade.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Global Market Access</h3>
              <p className="text-text-secondary leading-relaxed">
                We help wineries <strong>enter new export markets</strong> by navigating country-specific import requirements, certifications, and trade agreements.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">TTB & FDA Compliance</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert navigation of <strong>TTB and FDA requirements</strong> for wine production, labeling, export certificates, and international compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Export Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Wine Export Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">TTB Compliance & Export Certificates</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Wine exports require <strong>TTB compliance and documentation</strong>. We help wineries obtain necessary certificates and maintain federal alcohol beverage compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TTB basic permit compliance for wineries</li>
                <li>TTB export certificates and documentation</li>
                <li>Certificate of Label Approval (COLA) for domestic sales</li>
                <li>TTB formula approval for specialty wines</li>
                <li>Federal Alcohol Administration Act compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">International Wine Export Documentation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Each destination country requires <strong>specific wine import documentation</strong>. Missing or incorrect paperwork results in shipment rejections and delays.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Commercial invoices with wine descriptions and alcohol content</li>
                <li>Certificates of origin (generic and FTA-specific)</li>
                <li>Health/sanitary certificates (when required)</li>
                <li>Packing lists and shipping documentation</li>
                <li>Country-specific import permits and pre-approvals</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">European Union Wine Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The EU is a major market for California wine but requires <strong>strict compliance</strong> with EU wine regulations and oenological practices.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>EU VI-1 certificates (wine export certification)</li>
                <li>EU oenological practice compliance</li>
                <li>Additive and processing aid approval verification</li>
                <li>EU labeling requirements and translations</li>
                <li>Country-specific requirements (UK, Germany, Netherlands, etc.)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Asian Market Wine Export (China, Japan, Korea)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Asian markets offer <strong>tremendous growth potential</strong> but have complex registration and certification requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>China AQSIQ facility registration and product registration</li>
                <li>Japan MHLW (Ministry of Health) compliance</li>
                <li>South Korea MFDS import notification</li>
                <li>Asian market labeling (back labels, translations)</li>
                <li>Regional distributor and importer coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine Tariffs & Free Trade Agreements</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Wine faces varying <strong>tariff rates globally</strong>. FTAs provide preferential access. We help wineries minimize tariff exposure and qualify for FTA benefits.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA certification for Canadian/Mexican wine exports</li>
                <li>U.S.-Australia, U.S.-Chile wine trade agreement qualification</li>
                <li>Tariff analysis for target export markets</li>
                <li>EU wine tariff strategies (following Airbus dispute resolution)</li>
                <li>Retaliatory tariff monitoring and mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine Import Compliance (Foreign Wine to U.S.)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We also assist <strong>wine importers</strong> bringing European, South American, and other foreign wines into the U.S. market.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TTB Certificate of Label Approval (COLA) applications</li>
                <li>Wine HTS classification (Chapter 2204)</li>
                <li>Customs valuation for wine imports</li>
                <li>TTB importer's basic permit</li>
                <li>FDA food facility registration and prior notice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Regions Served */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            California Wine Regions We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Sacramento Region</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Lodi AVA (Zinfandel capital)</li>
                <li>• Clarksburg AVA</li>
                <li>• Sacramento County wineries</li>
                <li>• Fair Play & El Dorado County</li>
                <li>• Amador County (Shenandoah Valley)</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Napa & Sonoma</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Napa Valley AVA</li>
                <li>• Sonoma County AVAs</li>
                <li>• Mendocino County</li>
                <li>• Lake County</li>
                <li>• Premium wine estates</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Central & Southern California</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Central Coast (Paso Robles, SLO)</li>
                <li>• Santa Barbara County</li>
                <li>• Monterey & Santa Cruz</li>
                <li>• Central Valley bulk wine</li>
                <li>• Temecula Valley</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sacramento Service */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving Sacramento Wine Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Sacramento & Lodi Wine Country</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve <strong>Sacramento-area wineries and distributors</strong>:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Lodi (California's Zinfandel capital)</li>
                <li>• Clarksburg & Delta region</li>
                <li>• Fair Play & Placerville</li>
                <li>• Sacramento urban wineries</li>
                <li>• Amador County (Plymouth, Sutter Creek)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine Industry Services</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Full-service wine trade law for California wine industry:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Wineries & Wine Estates</li>
                <li>• Wine Importers & Distributors</li>
                <li>• Custom Crush Facilities</li>
                <li>• Wine Industry Suppliers</li>
                <li>• Alcohol Beverage Brands</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">California Wine Exports</h3>
            <p className="text-center text-neutral-200 mb-4">
              California wine exports exceed <strong>$1.5 billion annually</strong>, with Lodi producing 20% of California's wine grapes. Our wine export attorneys help California wineries access global markets and navigate complex international trade regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Wineries Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Wine Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep expertise in wine and alcohol beverage</strong> trade law - TTB regulations, wine export requirements, and international wine trade compliance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Global Wine Market Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We track <strong>wine import requirements globally</strong> - EU oenological practices, Asian market registrations, and country-specific certifications - helping wineries enter new markets.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">TTB & FDA Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Comprehensive knowledge of <strong>federal alcohol beverage regulations</strong> - TTB permits, label approvals, export certificates, and FDA food safety requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Boutique to Large Producers</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We represent <strong>boutique wineries through major wine producers</strong>. Whether you're exporting your first container or managing global distribution, we provide expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving California Wine Industry
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Sacramento & California Wine Country)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service:</strong> Statewide California wine trade representation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Wine Export Resources</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>TTB:</strong> Export certificates and federal compliance</li>
                <li><strong>Port of Oakland:</strong> Wine container exports to Asia</li>
                <li><strong>Port of LA/LB:</strong> International wine shipments</li>
                <li><strong>Wine Institute:</strong> California wine industry advocacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Wine & Alcohol Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Export Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Export Compliance</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/fresno-agricultural-export-compliance" className="service-link">
                    <span className="service-link__title">Agricultural Export Compliance</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Port Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/oakland-port-operations-attorney" className="service-link">
                    <span className="service-link__title">Oakland Port Operations</span>
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
            Schedule Your Free Wine Export Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Sacramento wine export attorneys today. We'll review your export markets, assess documentation requirements, and develop a comprehensive international wine trade strategy.
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

export default SacramentoWineExportPage;
