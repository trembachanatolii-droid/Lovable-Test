
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const FresnoAgriculturalTradePage: React.FC = () => {
  useMeta({
    title: 'Agricultural Trade Compliance Attorney Fresno | Farm Export Lawyer CA',
    description: 'Fresno agricultural trade compliance attorney. Expert farm exports, food imports, USDA/FDA compliance, agricultural tariffs, and Central Valley ag trade. (310) 744-1328.',
    keywords: 'agricultural trade attorney fresno, farm export lawyer fresno, food import compliance fresno, usda compliance attorney california, agricultural tariff lawyer fresno, central valley trade attorney',
    canonical: 'fresno-agricultural-trade',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-agriculture.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Fresno Agricultural Trade Compliance Attorney - Farm Export & Food Import Lawyer',
        description: 'Expert Fresno agricultural trade compliance attorney providing farm export, food import, USDA/FDA compliance, and agricultural tariff services for Central Valley agribusiness.',
        url: `${siteConfig.siteUrl}/fresno-agricultural-trade`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Fresno Agricultural Trade', url: `${siteConfig.siteUrl}/fresno-agricultural-trade` }
      ]),
      generateFAQSchema([
        {
          question: 'What agencies regulate agricultural imports and exports?',
          answer: 'Agricultural trade involves multiple federal agencies: USDA (Animal and Plant Health Inspection Service - APHIS) regulates plants, plant products, and animal products to prevent pests and diseases; FDA regulates food safety and labeling under the Food Safety Modernization Act (FSMA); CBP enforces tariffs and trade regulations; and USITC administers trade remedy cases. Our Fresno agricultural trade attorney helps Central Valley agribusinesses navigate this complex regulatory landscape.',
        },
        {
          question: 'Do I need permits to export California agricultural products?',
          answer: 'Yes, most agricultural exports require permits or certificates. USDA APHIS issues phytosanitary certificates for plant products, veterinary certificates for animal products, and export certificates demonstrating compliance with importing country requirements. Specific crops may require additional permits. Our Fresno farm export lawyer helps obtain necessary permits and ensures compliance with destination country requirements.',
        },
        {
          question: 'What tariffs apply to imported agricultural products?',
          answer: 'Agricultural imports face varying tariff rates under the Harmonized Tariff Schedule. Fresh fruits and vegetables, nuts, wine, and dairy products have specific HTS classifications and duty rates. Tariff Rate Quotas (TRQs) apply to certain agricultural goods, with lower duties for in-quota quantities. Seasonal duties may apply. Free Trade Agreements (USMCA, etc.) can reduce or eliminate duties. Our Fresno agricultural tariff attorney optimizes your classification and trade agreement utilization.',
        },
        {
          question: 'How does FSMA affect food imports to the Central Valley?',
          answer: 'The FDA Food Safety Modernization Act imposes strict import requirements including: Foreign Supplier Verification Programs (FSVP) requiring importers to verify foreign suppliers\' food safety controls, Prior Notice requirements for food shipments, and Preventive Controls for Human Food regulations. Violations can result in FDA import refusals, product detention, and warning letters. Our Fresno food import compliance attorney implements FSMA compliance programs.',
        },
        {
          question: 'Can I get duty refunds on agricultural exports?',
          answer: 'Yes, through duty drawback programs. If you import agricultural products (or components like packaging materials) and export finished agricultural products, you can recover 99% of paid duties. This is particularly valuable for value-added agricultural exports like processed foods, packaged nuts, or wine. Our Fresno attorney prepares drawback claims and maximizes duty recovery.',
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
      <section className="hero" aria-label="Fresno Agricultural Trade Hero">
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
          <h1>Fresno Agricultural Trade Compliance Attorney<br />Central Valley Farm Export Lawyer</h1>
          <p className="hero-subtitle">
            Expert agricultural trade compliance for Central Valley agribusiness. Farm exports, food imports, USDA/FDA compliance, and agricultural tariff optimization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Ag Trade Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Fresno Agricultural Trade Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Central Valley Agricultural Trade Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Fresno County and the Central Valley produce <strong>over $8 billion in agricultural products annually</strong>, making it one of America's most productive agricultural regions. From almonds and grapes to dairy and produce, Central Valley agribusinesses face complex trade regulations involving CBP, USDA, FDA, and international requirements. Our Fresno agricultural trade compliance attorney provides specialized legal services for the ag industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Industry Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Exclusive focus on <strong>agricultural trade compliance</strong> - fresh produce, nuts, wine, dairy, processed foods, and agricultural inputs.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>Central Valley agriculture</strong>, seasonal trade flows, and regional agribusiness challenges.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Multi-Agency Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Experience with <strong>CBP, USDA APHIS, FDA, and state agricultural agencies</strong> regulating farm imports and exports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Trade Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Agricultural Trade Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Export Compliance & Permits</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Exporting California agricultural products requires <strong>USDA permits, phytosanitary certificates, and compliance with destination country requirements</strong>. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA APHIS phytosanitary certificate applications</li>
                <li>Export certificates for plant products (fruits, vegetables, nuts)</li>
                <li>Veterinary certificates for animal products and dairy</li>
                <li>Wine and alcohol export compliance (TTB permits)</li>
                <li>Organic product export certification (NOP compliance)</li>
                <li>Destination country import requirement research</li>
                <li>Export labeling and documentation requirements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Food Import Compliance & FDA Regulations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Food Safety Modernization Act (FSMA) imposes <strong>strict food import requirements</strong>. Our Fresno food import attorney provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Foreign Supplier Verification Programs (FSVP) development</li>
                <li>FDA Prior Notice filing for food shipments</li>
                <li>Food facility registration (FDA registration)</li>
                <li>Preventive Controls for Human Food compliance</li>
                <li>FDA import refusal response and admissibility packages</li>
                <li>Food labeling compliance (nutrition facts, allergens, country of origin)</li>
                <li>HACCP and food safety plan implementation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Tariff Classification & Optimization</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural products have <strong>complex HTS classifications and seasonal duty rates</strong>. We optimize your tariff treatment through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Fresh produce HTS classification (Chapter 7 and 8)</li>
                <li>Nuts and dried fruits classification (Chapter 8)</li>
                <li>Wine and beverages classification (Chapter 22)</li>
                <li>Processed and prepared foods (Chapters 16-21)</li>
                <li>Tariff Rate Quota (TRQ) utilization for quota products</li>
                <li>Seasonal tariff analysis and planning</li>
                <li>Free Trade Agreement qualification (USMCA for Mexico/Canada)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USDA APHIS Import Permits & Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USDA regulates <strong>plant and animal product imports to prevent pests and diseases</strong>. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USDA APHIS import permit applications</li>
                <li>Plant Protection and Quarantine (PPQ) compliance</li>
                <li>Veterinary Services (VS) import requirements</li>
                <li>Phytosanitary certificate verification</li>
                <li>USDA inspection and release coordination</li>
                <li>Treatment requirements (fumigation, irradiation, cold treatment)</li>
                <li>USDA hold and refusal response</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Wine & Alcohol Import/Export Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Wine and alcohol trade involves <strong>TTB, CBP, and state regulations</strong>. Central Valley wine producers need:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>TTB permit applications (Basic Permit, COLA approvals)</li>
                <li>Wine export compliance and documentation</li>
                <li>Alcohol import permits and label approvals</li>
                <li>Certificate of Label Approval (COLA) applications</li>
                <li>Federal excise tax compliance</li>
                <li>State alcohol licensing and distribution agreements</li>
                <li>Trade agreement utilization for wine exports (EU, Australia, etc.)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Agricultural Duty Drawback & Refunds</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Agricultural exporters can <strong>recover 99% of paid duties</strong> through drawback programs. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing drawback for value-added agricultural exports</li>
                <li>Unused merchandise drawback for re-exported agricultural products</li>
                <li>Packaging materials and input drawback claims</li>
                <li>Agricultural processing drawback (dried fruits, nuts, wine)</li>
                <li>Drawback ruling requests for agricultural operations</li>
                <li>Annual drawback claim preparation and filing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Central Valley Agricultural Products */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Central Valley Agricultural Products We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Tree Nuts & Dried Fruits', items: ['Almonds', 'Pistachios', 'Walnuts', 'Raisins and dried fruits'] },
              { title: 'Fresh Produce', items: ['Grapes (table and wine)', 'Citrus fruits', 'Stone fruits', 'Vegetables'] },
              { title: 'Dairy Products', items: ['Milk and cream', 'Cheese exports', 'Butter and dairy ingredients', 'Whey products'] },
              { title: 'Wine & Beverages', items: ['Wine exports', 'Grape juice', 'Fruit juices', 'Beverage concentrates'] },
              { title: 'Processed Foods', items: ['Canned fruits and vegetables', 'Frozen foods', 'Dried and prepared foods', 'Food ingredients'] },
              { title: 'Agricultural Inputs', items: ['Fertilizers', 'Pesticides and chemicals', 'Farm equipment', 'Packaging materials'] },
            ].map((category) => (
              <div key={category.title} className="bg-neutral-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">{category.title}</h3>
                <ul className="space-y-1 text-text-secondary text-sm">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-secondary-teal mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agricultural Trade Statistics */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Fresno County Agricultural Trade
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg text-center border-t-4 border-secondary-teal">
              <div className="text-5xl font-bold text-primary-navy mb-3">$8B+</div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">Annual Ag Production</h3>
              <p className="text-text-secondary text-sm">Fresno County produces over $8 billion in agricultural products annually</p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center border-t-4 border-secondary-teal">
              <div className="text-5xl font-bold text-primary-navy mb-3">#1</div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">Top Ag County</h3>
              <p className="text-text-secondary text-sm">Fresno County is consistently ranked #1 in U.S. agricultural production value</p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center border-t-4 border-secondary-teal">
              <div className="text-5xl font-bold text-primary-navy mb-3">250+</div>
              <h3 className="text-xl font-bold text-primary-navy mb-2">Commodity Varieties</h3>
              <p className="text-text-secondary text-sm">Over 250 different agricultural commodities produced in the region</p>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Top Fresno County Agricultural Exports</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">Almonds</h4>
                <p className="text-sm text-neutral-200">Leading tree nut export</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">Grapes</h4>
                <p className="text-sm text-neutral-200">Table and wine grapes</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">Dairy</h4>
                <p className="text-sm text-neutral-200">Milk, cheese, whey</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">Pistachios</h4>
                <p className="text-sm text-neutral-200">Major nut crop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Fresno Agricultural Trade Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our Agricultural Trade Attorneys
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Agricultural Industry Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We focus on <strong>agricultural trade compliance</strong> - not general import/export law. We understand farm economics, seasonal cycles, and agribusiness challenges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Multi-Agency Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Agricultural trade involves <strong>CBP, USDA APHIS, FDA, TTB, and state agencies</strong>. We navigate all of them, providing comprehensive regulatory guidance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Valley Understanding</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>Fresno County agriculture</strong> - from almond export markets to dairy trade regulations to wine compliance requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Practical Farm Business Approach</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We provide <strong>practical, cost-effective solutions</strong> that work for farming operations and agribusinesses, not just legal theory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Fresno & Central Valley Agribusiness
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Fresno & Central Valley)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Consultations:</strong> Virtual and phone for Central Valley clients
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary-navy mb-3">Central Valley Service Area</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Fresno:</strong> 3.5 hours via Highway 99</li>
                <li><strong>Central Valley:</strong> Madera, Tulare, Kings Counties</li>
                <li><strong>Virtual Services:</strong> Full ag trade compliance remotely</li>
                <li><strong>Farm Visits:</strong> Available for major agribusiness clients</li>
                <li><strong>Statewide:</strong> California agricultural exporters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Agricultural Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Ag Trade Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/fsma-compliance" className="service-link">
                    <span className="service-link__title">FSMA Compliance Programs</span>
                    <p className="service-link__description">FDA food safety compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/usda-permits" className="service-link">
                    <span className="service-link__title">USDA Export Permits</span>
                    <p className="service-link__description">Phytosanitary certificates</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/agricultural-drawback" className="service-link">
                    <span className="service-link__title">Agricultural Duty Drawback</span>
                    <p className="service-link__description">Export duty refunds</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other Ag Regions</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/salinas-agricultural-trade" className="service-link">
                    <span className="service-link__title">Salinas Valley Ag Trade</span>
                    <p className="service-link__description">Monterey produce compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/napa-wine-compliance" className="service-link">
                    <span className="service-link__title">Napa Wine Trade Compliance</span>
                    <p className="service-link__description">Wine export specialists</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Ag Trade Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/usda-export-guide" className="service-link">
                    <span className="service-link__title">USDA Export Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/fda-fsma-compliance" className="service-link">
                    <span className="service-link__title">FDA FSMA Compliance</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/agricultural-tariffs" className="service-link">
                    <span className="service-link__title">Agricultural Tariff Guide</span>
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
            Grow Your Ag Export Business with Confidence
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Central Valley agribusinesses need specialized agricultural trade compliance expertise. Our Fresno agricultural trade attorney helps you navigate CBP, USDA, FDA, and international requirements. Free consultation.
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

export default FresnoAgriculturalTradePage;
