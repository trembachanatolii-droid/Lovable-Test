
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FresnoAgExportCompliancePage: React.FC = () => {
  useMeta({
    title: 'Agricultural Export Compliance Fresno | Farm Export Attorney',
    description: 'Fresno agricultural export compliance attorney. Expert farm product exports, USDA/FDA compliance, phytosanitary certificates. Central Valley. (310) 744-1328.',
    keywords: 'agricultural export compliance fresno, farm export attorney fresno, agricultural trade lawyer central valley, usda export compliance attorney, farm product export lawyer california',
    canonical: 'fresno-agricultural-export-compliance',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-ag-fresno.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Fresno Agricultural Export Compliance Attorney - Farm Product Export Lawyer',
        description: 'Fresno agricultural export compliance attorney specializing in farm product exports, USDA/FDA regulations, phytosanitary certificates, and ag trade compliance.',
        url: `${siteConfig.siteUrl}/#fresno-agricultural-export-compliance`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Fresno Agricultural Export Compliance', url: `${siteConfig.siteUrl}/#fresno-agricultural-export-compliance` }
      ]),
      generateFAQSchema([
        {
          question: 'What export documentation do I need for agricultural products from Fresno?',
          answer: 'Agricultural exports from Fresno typically require: (1) phytosanitary certificates from USDA-APHIS certifying products are pest-free, (2) export certificates of origin, (3) commercial invoices with proper product descriptions, (4) packing lists, (5) fumigation certificates (if required by destination country), and (6) import permits from the destination country. Many countries also require specific pesticide residue testing and certifications.',
        },
        {
          question: 'How do USDA and FDA regulations affect Central Valley agricultural exports?',
          answer: 'USDA regulates plant and animal product exports through APHIS (phytosanitary requirements) and FSIS (meat/poultry). FDA regulates food safety, requiring FSMA compliance for many exporters. Central Valley farms exporting fresh produce must comply with Produce Safety Rule requirements. Both agencies can inspect facilities, require certifications, and have authority to block non-compliant exports.',
        },
        {
          question: 'What countries are the main markets for Fresno agricultural exports?',
          answer: 'Central Valley agricultural products are exported worldwide. Top markets include: China (nuts, dried fruit), Mexico (dairy, processed foods), Canada (fresh produce, wine), Japan (citrus, nuts), South Korea (fresh fruit, nuts), European Union (wine, nuts, dried fruit), and Southeast Asia (almonds, pistachios, raisins). Each market has unique phytosanitary and regulatory requirements.',
        },
        {
          question: 'Can you help with agricultural tariff classifications for exports?',
          answer: 'Yes. While U.S. exporters generally don\'t pay export duties, proper HTS classification is still critical for: (1) destination country duty calculations (your buyer needs this), (2) free trade agreement qualification (USMCA, etc.), (3) export license determinations, and (4) sanctions screening. We help ag exporters classify products correctly and obtain necessary certificates of origin.',
        },
        {
          question: 'What happens if my agricultural shipment is rejected at the foreign port?',
          answer: 'Agricultural rejections are costly - the shipment may be destroyed, fumigated, or returned. Common rejection reasons include: pest detection, excessive pesticide residues, missing phytosanitary certificates, or labeling violations. We help agricultural exporters: (1) prevent rejections through proper documentation and compliance, (2) negotiate with foreign authorities for re-export or treatment, and (3) file insurance claims for losses.',
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
      <section className="hero" aria-label="Fresno Agricultural Export Compliance Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Fresno Agricultural Export Compliance<br />Farm Product Export Attorney</h1>
          <p className="hero-subtitle">
            Expert agricultural export compliance attorney serving Fresno and Central Valley. Specialized USDA/FDA compliance, phytosanitary certificates, export documentation, and trade compliance for California agriculture.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Agricultural Export Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Central Valley Agricultural Trade Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              California's Central Valley produces <strong>over 8% of U.S. agricultural output</strong> and is a major global exporter. Our agricultural export attorneys understand the unique regulatory challenges facing Fresno-area farms, packers, and exporters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus exclusively on <strong>agricultural trade law</strong>. Deep understanding of USDA-APHIS, FDA-FSMA, phytosanitary requirements, and ag-specific export regulations.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                We understand <strong>Fresno's agricultural economy</strong> - almonds, pistachios, grapes, citrus, dairy, poultry - and the export compliance challenges specific to each commodity.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Export Documentation</h3>
              <p className="text-text-secondary leading-relaxed">
                Expert preparation and review of <strong>phytosanitary certificates, export permits</strong>, and regulatory compliance documentation for global agricultural markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Export Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Agricultural Export Compliance Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA-APHIS Phytosanitary Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Phytosanitary certificates are <strong>required by most countries</strong> for fresh produce, nuts, and plant products. We help Central Valley exporters navigate USDA-APHIS requirements and foreign phytosanitary regulations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Phytosanitary certificate applications and compliance</li>
                <li>Pest-free certification and inspection coordination</li>
                <li>Fumigation and treatment requirement navigation</li>
                <li>Country-specific import permit assistance</li>
                <li>APHIS PPQ 587 export certification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Food Safety Modernization Act (FSMA)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                FSMA imposes <strong>stringent food safety requirements</strong> on farms and food facilities. Exporters must comply with Produce Safety Rule, Foreign Supplier Verification, and other FSMA provisions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Produce Safety Rule compliance programs</li>
                <li>Food facility registration and renewal (FDA Form 3537)</li>
                <li>Preventive Controls Qualified Individual (PCQI) guidance</li>
                <li>Hazard Analysis and Risk-Based Preventive Controls (HARPC)</li>
                <li>FDA export certificates for foreign buyers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Documentation & Certificates of Origin</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper export documentation is critical for <strong>customs clearance abroad</strong>. Missing or incorrect documentation can result in shipment delays, rejections, or destruction.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Commercial invoices and packing lists</li>
                <li>USMCA certificates of origin for North American exports</li>
                <li>Free trade agreement (FTA) certification</li>
                <li>Export licenses (when required)</li>
                <li>Veterinary health certificates (dairy, meat, poultry)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Country-Specific Agricultural Import Requirements</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every destination country has unique import requirements for agricultural products. <strong>Non-compliance results in rejection</strong>. We track regulations for all major markets.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>China AQSIQ registration and compliance</li>
                <li>EU phytosanitary and pesticide residue requirements</li>
                <li>Japan plant quarantine and MOH regulations</li>
                <li>Mexico SENASICA import permits</li>
                <li>South Korea phytosanitary and labeling requirements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Pesticide Residue & Testing Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Foreign countries impose <strong>strict maximum residue limits (MRLs)</strong> for pesticides. Exceeding MRLs results in shipment rejection and potential market bans.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>MRL compliance strategies for export markets</li>
                <li>Pesticide application record keeping</li>
                <li>Pre-export testing and certification</li>
                <li>Codex Alimentarius MRL analysis</li>
                <li>Rejection response and mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Tariff Classification & Trade Agreements</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper HTS classification helps your foreign buyers calculate duties and qualify for <strong>preferential tariff treatment</strong> under free trade agreements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Fresh produce and fruit HTS classification</li>
                <li>Nut and dried fruit classification (almonds, pistachios, raisins)</li>
                <li>Dairy product classification and export compliance</li>
                <li>USMCA origin qualification for Mexican/Canadian exports</li>
                <li>GSP and other preferential tariff programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Products */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Central Valley Agricultural Products We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tree Nuts & Dried Fruit</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Almonds (leading CA export)</li>
                <li>• Pistachios</li>
                <li>• Walnuts</li>
                <li>• Raisins & Dried Grapes</li>
                <li>• Dried Plums (Prunes)</li>
                <li>• Dried Apricots & Figs</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Fresh Produce</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Table Grapes & Wine Grapes</li>
                <li>• Citrus (Oranges, Lemons, Mandarins)</li>
                <li>• Stone Fruit (Peaches, Nectarines, Plums)</li>
                <li>• Tomatoes & Vegetables</li>
                <li>• Melons & Berries</li>
                <li>• Fresh Garlic & Onions</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Dairy, Poultry & Processed</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Dairy Products (Milk, Cheese, Butter)</li>
                <li>• Poultry & Eggs</li>
                <li>• Wine & Grape Products</li>
                <li>• Processed Foods & Sauces</li>
                <li>• Cotton (Raw & Processed)</li>
                <li>• Animal Feed & Hay</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Central Valley Service Areas */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving Central Valley Agricultural Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Fresno County & Surrounding Areas</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve agricultural exporters throughout the <strong>Central Valley</strong>:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Fresno & Clovis</li>
                <li>• Sanger & Reedley</li>
                <li>• Selma & Kingsburg</li>
                <li>• Kerman & Firebaugh</li>
                <li>• Fowler & Parlier</li>
                <li>• Coalinga & Huron</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Agricultural Belt</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural exporters throughout the San Joaquin Valley:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Madera & Chowchilla</li>
                <li>• Merced & Atwater</li>
                <li>• Modesto & Turlock</li>
                <li>• Visalia & Tulare</li>
                <li>• Hanford & Lemoore</li>
                <li>• Bakersfield & Kern County</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">California Agricultural Powerhouse</h3>
            <p className="text-center text-neutral-200 mb-4">
              California produces <strong>over $50 billion in agricultural exports annually</strong>, with the Central Valley accounting for the majority. Our agricultural export attorneys help Fresno-area farms and packers access global markets compliantly and profitably.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Agricultural Exporters Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep expertise in agricultural exports</strong>. We understand USDA-APHIS, FDA-FSMA, phytosanitary requirements, and the unique challenges facing California ag exporters.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Prevent Costly Rejections</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Agricultural rejections are devastating - shipments destroyed, markets lost, relationships damaged. Our <strong>compliance-first approach</strong> prevents rejections through proper documentation and regulatory adherence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Global Market Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We track <strong>phytosanitary and regulatory requirements</strong> for all major agricultural export markets - China, EU, Japan, Korea, Mexico, and beyond. We help you enter new markets compliantly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Family Farm to Large Exporter</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We represent <strong>family farms through major packers and exporters</strong>. Whether you're a small organic farm or a large commodity exporter, we provide expert agricultural trade counsel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Fresno & Central Valley
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Fresno & Central Valley Agricultural Exporters)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service:</strong> Statewide agricultural export representation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Agricultural Export Resources</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>USDA-APHIS:</strong> Phytosanitary certificates and export compliance</li>
                <li><strong>FDA:</strong> Food facility registration and FSMA compliance</li>
                <li><strong>Port Access:</strong> Oakland, LA/Long Beach for containerized ag exports</li>
                <li><strong>Air Cargo:</strong> LAX, SFO, Ontario for fresh produce air freight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Agricultural Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Export Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#export-controls-sanctions" className="service-link">
                    <span className="service-link__title">Export Compliance</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#sacramento-wine-export-attorney" className="service-link">
                    <span className="service-link__title">Wine Export Attorney</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#regulatory-compliance-advisory" className="service-link">
                    <span className="service-link__title">Trade Compliance Programs</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Equipment & Machinery</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#modesto-farm-equipment-tariff-attorney" className="service-link">
                    <span className="service-link__title">Farm Equipment Tariffs</span>
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
            Schedule Your Free Agricultural Export Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Fresno agricultural export attorneys today. We'll review your export compliance, identify regulatory requirements for your target markets, and develop a comprehensive export strategy.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
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

export default FresnoAgExportCompliancePage;
