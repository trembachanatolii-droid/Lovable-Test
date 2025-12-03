
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const ModestoFarmEquipmentPage: React.FC = () => {
  useMeta({
    title: 'Farm Equipment Tariff Attorney Modesto | Ag Machinery Lawyer',
    description: 'Modesto farm equipment tariff attorney & agricultural machinery lawyer. Expert tractor imports, farm machinery classification, ag equipment tariffs. (310) 744-1328.',
    keywords: 'farm equipment tariff attorney modesto, agricultural machinery lawyer modesto, tractor import attorney, farm machinery tariff lawyer, ag equipment import attorney california',
    canonical: 'modesto-farm-equipment-tariff-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-farm-modesto.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Modesto Farm Equipment Tariff Attorney - Agricultural Machinery Import Lawyer',
        description: 'Modesto farm equipment tariff attorney specializing in agricultural machinery imports, tractor classification, farm equipment tariffs, and ag trade law.',
        url: `${siteConfig.siteUrl}/modesto-farm-equipment-tariff-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Modesto Farm Equipment Tariff Attorney', url: `${siteConfig.siteUrl}/modesto-farm-equipment-tariff-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What are tariff rates on farm equipment and tractors?',
          answer: 'Farm equipment tariff rates vary by machine type and origin. Agricultural tractors often enter duty-free or at very low rates (0-1.9%) under HTS 8701. Harvesting machinery and implements typically face 0-2.5% duties. However, Section 301 tariffs add 7.5-25% on Chinese farm equipment. Proper HTS classification is critical - the difference between "tractor," "harvester," or "parts" significantly impacts duty rates.',
        },
        {
          question: 'Does Section 301 affect farm equipment imports from China?',
          answer: 'Yes, significantly. Section 301 Lists cover most Chinese farm machinery and equipment, adding 7.5-25% additional duties. This includes tractors, harvesters, sprayers, tillage equipment, and parts. Many farm equipment dealers have shifted sourcing to India, Vietnam, or Taiwan, but must ensure proper country of origin documentation. We help ag equipment importers navigate Section 301 and develop sourcing alternatives.',
        },
        {
          question: 'How do I classify farm equipment parts vs. complete machines?',
          answer: 'This distinction dramatically affects tariff rates. Complete, functional machines are classified under specific machinery codes (e.g., 8701 for tractors, 8433 for harvesters). Parts are classified under general "parts" provisions, often at different duty rates. CBP applies the "principal use" test and functional completeness analysis. We help farm equipment dealers structure imports and document classification to achieve optimal duty treatment.',
        },
        {
          question: 'Can USMCA help reduce duties on farm equipment from Mexico or Canada?',
          answer: 'Yes. USMCA (replacing NAFTA) provides duty-free treatment for qualifying farm equipment from Canada and Mexico. To qualify, equipment must meet USMCA origin requirements (Regional Value Content or tariff shift rules). Many farm equipment manufacturers have operations in Mexico - we help dealers obtain proper USMCA certificates of origin to eliminate duties.',
        },
        {
          question: 'Do you handle used farm equipment imports?',
          answer: 'Yes. Used farm equipment imports have unique challenges: (1) valuation (determining transaction value for used machinery), (2) EPA/CARB compliance for diesel engines, (3) safety standards verification, and (4) proper classification as "used" equipment. We help ag dealers import used tractors, harvesters, and implements compliantly.',
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
      <section className="hero" aria-label="Modesto Farm Equipment Tariff Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Modesto Farm Equipment Tariff Attorney<br />Agricultural Machinery Lawyer</h1>
          <p className="hero-subtitle">
            Expert farm equipment tariff attorney serving Modesto and Stanislaus County. Specialized agricultural machinery imports, tractor classification, farm equipment tariffs, and ag trade compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Farm Equipment Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Central Valley Farm Equipment Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Stanislaus County is a <strong>major agricultural producing region</strong>, creating strong demand for farm equipment and machinery. Our farm equipment attorneys understand tariff classifications and import compliance for ag dealers and farmers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Equipment Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus on <strong>farm equipment and agricultural machinery</strong> trade law. Deep expertise in tractor, harvester, and implement tariff classifications.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost Savings</h3>
              <p className="text-text-secondary leading-relaxed">
                Proven strategies to <strong>reduce equipment import costs</strong> through precise classification, USMCA qualification, and Section 301 mitigation.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Dealer & Farmer Service</h3>
              <p className="text-text-secondary leading-relaxed">
                We represent <strong>farm equipment dealers and farmers</strong> importing tractors, harvesters, and specialized ag machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Equipment Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Farm Equipment Tariff Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tractor & Self-Propelled Equipment Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Tractors are classified under <strong>HTS 8701</strong>, often duty-free or at low rates. Proper subheading selection affects Section 301 tariffs and USMCA qualification.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Agricultural tractors (road and off-road) classification</li>
                <li>Wheeled vs. track-type tractor distinctions</li>
                <li>Tractor power output classifications (kW ratings)</li>
                <li>Self-propelled harvesting machinery</li>
                <li>Specialty agricultural vehicles</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Harvesting & Processing Equipment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Harvesting machinery (combines, pickers, balers) faces <strong>varying tariff rates</strong> based on specific machine function and classification.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Combine harvesters and threshing machinery</li>
                <li>Hay balers and forage equipment</li>
                <li>Fruit and nut harvesting equipment</li>
                <li>Processing and sorting machinery</li>
                <li>Harvester parts vs. complete machine classification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Farm Implements & Tillage Equipment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Implements and tillage equipment have <strong>specialized HTS codes</strong> under Chapter 84, with duty rates varying by equipment type.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Plows, harrows, and cultivators</li>
                <li>Planters and seeding machinery</li>
                <li>Sprayers and fertilizer applicators</li>
                <li>Irrigation equipment and pumps</li>
                <li>Tillage implement parts classification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariffs on Chinese Farm Equipment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 adds <strong>significant costs</strong> to Chinese farm equipment. We develop sourcing alternatives and mitigation strategies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 coverage analysis for farm machinery</li>
                <li>Alternative sourcing from India, Taiwan, Vietnam</li>
                <li>Substantial transformation analysis</li>
                <li>Parts importation strategies to avoid Section 301</li>
                <li>Exclusion request assistance (when available)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Origin Qualification for North American Equipment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Farm equipment from Canada/Mexico can qualify for <strong>duty-free treatment</strong> under USMCA with proper origin documentation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA certificate of origin for farm equipment</li>
                <li>Regional Value Content (RVC) calculations</li>
                <li>Product-specific rules of origin for machinery</li>
                <li>Mexican tractor and implement imports</li>
                <li>Canadian equipment USMCA qualification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Used Farm Equipment Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Used equipment imports require <strong>special valuation and regulatory compliance</strong>, particularly for diesel-powered machinery.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Used equipment valuation methodologies</li>
                <li>EPA diesel engine compliance</li>
                <li>CARB (California Air Resources Board) requirements</li>
                <li>Safety standards verification</li>
                <li>Age restrictions and importability analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Farm Equipment We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tractors & Power Units</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Agricultural Tractors (All Sizes)</li>
                <li>• Compact & Utility Tractors</li>
                <li>• Row Crop Tractors</li>
                <li>• Specialty Tractors (Orchard, Vineyard)</li>
                <li>• Track-Type Tractors</li>
                <li>• Tractor Attachments & Loaders</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Harvesting Equipment</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Combine Harvesters</li>
                <li>• Forage Harvesters</li>
                <li>• Cotton Pickers</li>
                <li>• Hay Balers & Equipment</li>
                <li>• Nut & Fruit Harvesters</li>
                <li>• Grape & Vineyard Equipment</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Implements & Machinery</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Planting & Seeding Equipment</li>
                <li>• Tillage & Cultivation Tools</li>
                <li>• Sprayers & Applicators</li>
                <li>• Irrigation Systems & Pumps</li>
                <li>• Grain Handling Equipment</li>
                <li>• Precision Agriculture Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving Modesto & Central Valley Ag Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Stanislaus County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve <strong>farm equipment dealers and agricultural operations</strong>:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Modesto & Riverbank</li>
                <li>• Turlock & Denair</li>
                <li>• Ceres & Keyes</li>
                <li>• Patterson & Newman</li>
                <li>• Oakdale & Waterford</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Agricultural Region</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ag equipment importers throughout the San Joaquin Valley:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Merced & Atwater</li>
                <li>• Fresno & Madera</li>
                <li>• Stockton & Manteca</li>
                <li>• Visalia & Tulare</li>
                <li>• Sacramento Valley</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Central Valley Agriculture</h3>
            <p className="text-center text-neutral-200 mb-4">
              Stanislaus County generates <strong>over $4 billion in agricultural production annually</strong>, with extensive dairy, nut, fruit, and row crop operations requiring modern farm equipment. We serve the dealers and farmers powering this agricultural economy.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Farm Equipment Dealers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Farm Equipment Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep expertise in farm equipment</strong> tariff classification - tractors, harvesters, implements, and ag machinery HTS codes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Equipment Duty Savings</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our farm equipment clients achieve <strong>significant duty savings</strong> through precise classification, USMCA qualification, and strategic sourcing away from Section 301 tariffs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Section 301 Mitigation Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We help equipment dealers <strong>navigate Section 301 tariffs</strong> on Chinese machinery through alternative sourcing strategies and proper country of origin documentation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Dealer & Farmer Understanding</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>agricultural economics</strong> and the importance of controlling equipment costs. Our strategies help dealers remain competitive and farmers access affordable machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Central Valley Farm Equipment Industry
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Modesto & Central Valley Ag Equipment)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service:</strong> Statewide farm equipment representation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Import Resources</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Port of Oakland:</strong> Primary Northern CA gateway for farm equipment</li>
                <li><strong>Port of Stockton:</strong> Inland port for bulk ag equipment</li>
                <li><strong>EPA:</strong> Diesel engine compliance for equipment</li>
                <li><strong>CARB:</strong> California emissions standards</li>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#stockton-agricultural-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Ag Tariff Lawyer</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#fresno-agricultural-export-compliance" className="service-link">
                    <span className="service-link__title">Ag Export Compliance</span>
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
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">HTS Classification Guide</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#anaheim-manufacturing-trade-attorney" className="service-link">
                    <span className="service-link__title">Manufacturing Trade</span>
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
            Schedule Your Free Farm Equipment Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Modesto farm equipment tariff attorneys today. We'll analyze your machinery imports, assess tariff exposure, and develop cost-saving classification strategies for your ag equipment business.
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

export default ModestoFarmEquipmentPage;
