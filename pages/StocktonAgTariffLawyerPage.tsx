
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const StocktonAgTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Agricultural Tariff Lawyer Stockton | Farm Tariff Attorney CA',
    description: 'Stockton agricultural tariff lawyer & farm tariff attorney. Expert ag product classification, farm equipment imports, crop tariffs. San Joaquin Valley. (310) 744-1328.',
    keywords: 'agricultural tariff lawyer stockton, farm tariff attorney stockton, agricultural import lawyer san joaquin valley, farm product tariff attorney, ag trade lawyer california',
    canonical: 'stockton-agricultural-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-ag-stockton.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Stockton Agricultural Tariff Lawyer - Farm Product Tariff Attorney',
        description: 'Stockton agricultural tariff lawyer specializing in farm product classification, agricultural equipment imports, and crop tariff compliance.',
        url: `${siteConfig.siteUrl}/stockton-agricultural-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Stockton Agricultural Tariff Lawyer', url: `${siteConfig.siteUrl}/stockton-agricultural-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'What are the tariff rates on agricultural products and farm equipment?',
          answer: 'Agricultural tariff rates vary widely. Fresh produce often enters duty-free or at low rates (0-10%), while processed foods face higher duties. Farm equipment and machinery typically face 0-2.5% duties. However, Section 301 tariffs add 7.5-25% on Chinese ag equipment. Proper HTS classification is critical - the difference between "fresh" and "frozen" vegetables, or "harvester" versus "parts," can significantly impact duty rates.',
        },
        {
          question: 'How can an agricultural tariff lawyer reduce my farm equipment import costs?',
          answer: 'Our Stockton agricultural tariff lawyers reduce costs through: (1) precise HTS classification to find the lowest legal duty rate for farm equipment and parts, (2) Section 301 tariff strategies for Chinese equipment, (3) USMCA origin qualification for Mexican/Canadian ag equipment, (4) duty drawback for re-exported equipment, and (5) tariff engineering to modify equipment specifications for lower classifications.',
        },
        {
          question: 'What customs issues affect San Joaquin Valley agricultural importers?',
          answer: 'San Joaquin Valley ag importers frequently face: agricultural product HTS classification disputes, Section 301 tariffs on Chinese farm equipment, USDA/FDA holds on imported agricultural products, country of origin verification for produce, pesticide residue compliance on imported fruits/vegetables, and customs valuation audits on farm equipment. We help ag businesses navigate these challenges at Port of Oakland and other entry points.',
        },
        {
          question: 'Do I need import permits for agricultural products?',
          answer: 'Yes, many agricultural imports require permits or certifications. USDA-APHIS requires phytosanitary certificates for plant products to prevent pest introduction. FDA regulates food safety for imported produce and processed foods. Some products require specific import permits (e.g., meat, dairy, certain seeds). We help agricultural importers obtain necessary permits and comply with agency requirements.',
        },
        {
          question: 'How do free trade agreements affect agricultural imports?',
          answer: 'Free trade agreements like USMCA (replacing NAFTA) provide preferential tariff treatment for qualifying agricultural products from Canada and Mexico. Many fresh fruits, vegetables, and farm products enter duty-free under USMCA if they meet origin requirements. We help ag importers qualify for FTA benefits through proper origin documentation and compliance.',
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
      <section className="hero" aria-label="Stockton Agricultural Tariff Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Stockton Agricultural Tariff Lawyer<br />Farm Product Tariff Attorney</h1>
          <p className="hero-subtitle">
            Expert agricultural tariff lawyer serving Stockton and San Joaquin Valley. Specialized farm product classification, agricultural equipment imports, crop tariffs, and ag trade compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Agricultural Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              San Joaquin Valley Agricultural Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              San Joaquin County is a <strong>major agricultural producer</strong>, generating billions in farm products annually. Our agricultural tariff lawyers understand the import/export challenges facing Stockton-area farms, processors, and ag equipment dealers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                We specialize in <strong>agricultural trade law</strong> - farm products, equipment, and ag inputs. Deep understanding of agricultural HTS codes and ag-specific compliance.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Farm Equipment Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Specialized knowledge of <strong>farm equipment and machinery</strong> tariff classification, including tractors, harvesters, irrigation equipment, and ag technology.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Oakland Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Port of Oakland</strong>, the primary Northern California gateway for ag equipment and product imports serving the Central Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Tariff Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Agricultural Tariff Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Farm Equipment & Machinery Tariff Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Farm equipment classification is complex. Is it a <strong>"tractor," "harvesting machine," or "parts"?</strong> Proper classification determines duty rates and Section 301 applicability. We ensure accurate, cost-effective classification.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Agricultural tractors and self-propelled machinery (HTS 8701)</li>
                <li>Harvesting and threshing machinery classification</li>
                <li>Irrigation equipment and pumps</li>
                <li>Farm machinery parts vs. complete machines</li>
                <li>Precision agriculture technology and sensors</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Product HTS Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Fresh produce, grains, and processed foods have <strong>highly specific HTS codes</strong>. Small classification differences can change duty rates from 0% to 15%+.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Fresh fruit and vegetable classification (HTS Chapters 7-8)</li>
                <li>Grain, seed, and feed classification</li>
                <li>Processed food and beverage products</li>
                <li>Organic vs. conventional product classifications</li>
                <li>Agricultural raw materials and inputs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariffs on Agricultural Equipment</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Section 301 tariffs add <strong>7.5% to 25%</strong> on Chinese farm equipment and machinery. We help ag equipment dealers navigate Section 301 and develop sourcing alternatives.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 coverage analysis for farm equipment</li>
                <li>Tariff exclusion strategies (when available)</li>
                <li>Alternative sourcing compliance (Vietnam, India, Mexico)</li>
                <li>Substantial transformation for non-Chinese origin</li>
                <li>Section 301 refund protests</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA/FDA Agricultural Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural imports face <strong>USDA and FDA oversight</strong>. Plant products require phytosanitary certificates. Food products must meet FDA food safety requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA-APHIS phytosanitary requirements</li>
                <li>FDA food safety and FSMA compliance</li>
                <li>Pesticide residue and Maximum Residue Limits (MRLs)</li>
                <li>Country-specific import restrictions</li>
                <li>Agricultural import permit applications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA & Free Trade Agreements for Agriculture</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA provides <strong>duty-free or reduced-rate access</strong> for qualifying agricultural products from Canada and Mexico. Proper origin documentation is essential.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA certificate of origin for ag products</li>
                <li>Regional Value Content (RVC) calculations</li>
                <li>Agricultural product-specific rules of origin</li>
                <li>Other FTA qualification (Chile, Peru, etc.)</li>
                <li>Generalized System of Preferences (GSP) for developing countries</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Ag Equipment Valuation & CBP Audits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits agricultural equipment importers for <strong>valuation accuracy</strong>. Related-party transactions, discounts, and assists all affect customs value.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Farm equipment transaction value analysis</li>
                <li>Related-party transfer pricing for ag equipment</li>
                <li>Dealer discount and rebate treatment</li>
                <li>Used equipment valuation</li>
                <li>CBP Focused Assessment defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Products & Equipment */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Agricultural Sectors We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Farm Equipment & Machinery</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Tractors & Self-Propelled Equipment</li>
                <li>• Harvesters & Combines</li>
                <li>• Irrigation Equipment & Pumps</li>
                <li>• Planting & Seeding Machinery</li>
                <li>• Sprayers & Application Equipment</li>
                <li>• Precision Agriculture Technology</li>
                <li>• Farm Implement Parts</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Products</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Fresh Fruits & Vegetables</li>
                <li>• Grains, Seeds & Feed</li>
                <li>• Wine & Grapes</li>
                <li>• Nuts (Almonds, Walnuts)</li>
                <li>• Dairy Products</li>
                <li>• Processed Foods</li>
                <li>• Agricultural Raw Materials</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Ag Inputs & Supplies</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Fertilizers & Soil Amendments</li>
                <li>• Agricultural Chemicals</li>
                <li>• Seeds & Planting Materials</li>
                <li>• Farm Supplies & Tools</li>
                <li>• Greenhouse Equipment</li>
                <li>• Animal Feed & Supplements</li>
                <li>• Packaging Materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stockton Service Area */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving Stockton & San Joaquin Valley
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Joaquin County Agriculture</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve agricultural businesses throughout <strong>San Joaquin County</strong>:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Stockton & Lodi</li>
                <li>• Manteca & Tracy</li>
                <li>• Escalon & Ripon</li>
                <li>• Lathrop & Mountain House</li>
                <li>• Thornton & Woodbridge</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Agricultural Region</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural importers throughout Northern & Central California:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Modesto & Stanislaus County</li>
                <li>• Fresno & Madera</li>
                <li>• Sacramento Valley</li>
                <li>• Merced & Turlock</li>
                <li>• Yuba-Sutter region</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">California Agricultural Hub</h3>
            <p className="text-center text-neutral-200 mb-4">
              San Joaquin County produces <strong>over $2 billion in agricultural products annually</strong>, including wine grapes, almonds, walnuts, cherries, asparagus, and dairy. Our agricultural tariff lawyers serve this vital farming community.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Agricultural Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep expertise in agricultural imports</strong> - farm equipment, crops, processed foods, and ag inputs. We understand ag-specific HTS codes and compliance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Equipment Cost Savings</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our farm equipment classification expertise has saved ag dealers <strong>significant duty costs</strong> through precise HTS classification and tariff engineering strategies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USDA/FDA Compliance Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We navigate <strong>USDA-APHIS and FDA</strong> requirements for agricultural imports, including phytosanitary certificates, pesticide residue compliance, and food safety regulations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Family Farm to Agribusiness</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We represent <strong>family farms through large agribusiness</strong> operations. Whether you're importing a single piece of equipment or managing complex ag supply chains, we provide expert counsel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Stockton Agricultural Community
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Stockton & San Joaquin Valley Agriculture)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service:</strong> Statewide California agricultural representation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Port & Agency Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Port of Oakland:</strong> Primary gateway for Northern California ag imports</li>
                <li><strong>Port of Stockton:</strong> Inland port for bulk ag commodities</li>
                <li><strong>USDA-APHIS:</strong> Phytosanitary and agricultural compliance</li>
                <li><strong>FDA:</strong> Food safety and import regulations</li>
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
                  <a href="#fresno-agricultural-export-compliance" className="service-link">
                    <span className="service-link__title">Ag Export Compliance</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
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

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Trade Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#tariffs-duties-classification-guide" className="service-link">
                    <span className="service-link__title">HTS Classification</span>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Food & Wine</h3>
              <div className="space-y-0">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">
            Schedule Your Free Agricultural Tariff Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Stockton agricultural tariff lawyers today. We'll review your farm equipment imports, assess tariff exposure, and develop cost-saving classification strategies.
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

export default StocktonAgTariffLawyerPage;
