
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const LongBeachDutyDrawbackPage: React.FC = () => {
  useMeta({
    title: 'Duty Drawback Lawyer Long Beach | Tariff Refund Attorney CA',
    description: 'Long Beach duty drawback lawyer & tariff refund attorney. Recover 99% of paid import duties through manufacturing, unused, and rejected merchandise drawback. Port of Long Beach expertise. (310) 744-1328.',
    keywords: 'duty drawback lawyer long beach, tariff refund attorney long beach, drawback claims long beach, customs duty refund lawyer california, duty recovery attorney long beach, export drawback long beach',
    canonical: 'long-beach-duty-drawback',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-drawback.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Long Beach Duty Drawback Lawyer - Tariff Refund & Customs Duty Recovery Attorney',
        description: 'Expert Long Beach duty drawback lawyer helping California importers and exporters recover millions in paid customs duties through manufacturing, unused, and rejected merchandise drawback programs.',
        url: `${siteConfig.siteUrl}/long-beach-duty-drawback`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Long Beach Duty Drawback', url: `${siteConfig.siteUrl}/long-beach-duty-drawback` }
      ]),
      generateFAQSchema([
        {
          question: 'What is duty drawback and how much can I recover?',
          answer: 'Duty drawback is a refund of up to 99% of customs duties, taxes, and certain fees paid on imported merchandise that is subsequently exported or destroyed. Under 19 USC § 1313, eligible companies can recover duties on manufacturing drawback (imported materials used in exported products), unused merchandise drawback (imported goods exported in same condition), and rejected merchandise drawback (defective imports). Our Long Beach duty drawback lawyers have recovered millions in tariff refunds for California exporters.',
        },
        {
          question: 'How long does it take to receive a duty drawback refund?',
          answer: 'CBP typically processes accelerated drawback claims (claims under $1 million filed with ACE) within 60-90 days. Non-accelerated claims can take 6-12 months. Complex manufacturing drawback claims requiring ruling requests may take longer. Our Long Beach duty drawback attorneys expedite the process through complete, accurate claim submissions and proactive follow-up with CBP.',
        },
        {
          question: 'Is duty drawback worth it for small exporters?',
          answer: 'Yes! Even if you export relatively small volumes, duty drawback can be highly profitable. If you paid $50,000 in duties and export those goods or similar goods, you can recover $49,500 (99%). The filing process can be streamlined through ACE, and our Long Beach duty drawback lawyer offers cost-effective flat-fee pricing that makes drawback accessible even for smaller exporters.',
        },
        {
          question: 'Do I need to export the exact same goods I imported?',
          answer: 'Not always. Under substitution unused merchandise drawback (19 USC § 1313(j)(2)), you can import dutiable goods and export commercially interchangeable merchandise, even if you didn\'t import it. For manufacturing drawback with substitution, you can use imported AND domestically sourced materials in your exported products and still claim drawback on the imported materials.',
        },
        {
          question: 'Why choose a Long Beach duty drawback lawyer?',
          answer: 'Port of Long Beach is the second-busiest container port in the United States, handling billions in imports and exports annually. Our Long Beach location provides direct access to port facilities, CBP\'s Port of Long Beach office, and expertise with the unique supply chains and industries operating through this critical trade gateway. We understand local logistics, common commodity flows, and have established relationships with CBP drawback specialists.',
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
      <section className="hero" aria-label="Long Beach Duty Drawback Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Long Beach Duty Drawback Lawyer<br />Tariff Refund Attorney</h1>
          <p className="hero-subtitle">
            Recover 99% of paid customs duties through expert duty drawback claims. Port of Long Beach tariff refund specialists helping California exporters maximize duty recovery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Drawback Analysis</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Long Beach Duty Drawback Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Maximize Your Duty Recovery at Port of Long Beach
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Port of Long Beach handles over <strong>$200 billion in trade annually</strong>, making it a critical gateway for U.S. imports and exports. If you're paying customs duties on imports and exporting goods, you could be leaving millions on the table. Our Long Beach duty drawback lawyers help you recover up to 99% of those duties.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Long Beach Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                As the <strong>second-busiest container port in the U.S.</strong>, Long Beach processes millions of TEUs annually. Our local expertise and CBP relationships ensure efficient drawback claim processing.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Millions Recovered</h3>
              <p className="text-text-secondary leading-relaxed">
                We've recovered <strong>over $50 million in duty refunds</strong> for California exporters through manufacturing drawback, unused merchandise drawback, and rejected merchandise claims.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing</h3>
              <p className="text-text-secondary leading-relaxed">
                Transparent <strong>contingency or flat-fee pricing</strong> makes duty drawback accessible. You only pay when you get your refund, or opt for predictable fixed fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Duty Drawback Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Duty Drawback Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Manufacturing Drawback (19 USC § 1313(a) & (b))</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you manufacture or produce articles for export using imported materials, you can recover <strong>99% of the duties paid on those materials</strong>. Manufacturing drawback is the most valuable drawback program and includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Direct Identification Manufacturing Drawback:</strong> Track specific imported materials to exported products</li>
                <li><strong>Substitution Manufacturing Drawback:</strong> Use imported AND domestic materials in exported products, recover duties on imports</li>
                <li><strong>Petroleum Manufacturing Drawback:</strong> Specialized drawback for petroleum refineries and petrochemical manufacturers</li>
                <li>Manufacturing ruling requests to establish drawback eligibility</li>
                <li>Bill of materials analysis and documentation</li>
                <li>Production process mapping for CBP approval</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Unused Merchandise Drawback (19 USC § 1313(j))</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Import goods, export them <strong>in the same condition</strong> (or destroy them under CBP supervision), and recover 99% of duties. This is the simplest drawback type and ideal for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Direct Identification Unused Drawback:</strong> Export the exact same goods you imported</li>
                <li><strong>Substitution Unused Drawback:</strong> Export commercially interchangeable merchandise within 5 years</li>
                <li>Excess inventory exports and liquidation sales</li>
                <li>Defective merchandise exports</li>
                <li>Sample goods and trade show merchandise</li>
                <li>Unsold or obsolete inventory disposal</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Rejected Merchandise Drawback (19 USC § 1313(c))</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                If imported merchandise is <strong>defective or doesn't conform to specifications</strong>, you can export or destroy it and recover 99% of duties paid. Rejected merchandise drawback covers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Defective products failing quality control inspection</li>
                <li>Non-conforming goods that don't match purchase order specifications</li>
                <li>Goods shipped in error or damaged in transit</li>
                <li>Products with material defects discovered post-importation</li>
                <li>Documentary proof of non-conformance or defect</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Drawback Compliance & Ruling Requests</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Before filing drawback claims, many companies need <strong>CBP approval of their drawback program</strong>. Our Long Beach duty drawback lawyers prepare and submit:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing drawback ruling applications</li>
                <li>Substitution drawback eligibility rulings</li>
                <li>General manufacturing drawback rulings under 19 CFR § 190.8</li>
                <li>Specific manufacturing drawback rulings under 19 CFR § 190.9</li>
                <li>Commercial interchangeability determinations</li>
                <li>Production process documentation for CBP review</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Accelerated Drawback Claims (ACE)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP's Automated Commercial Environment (ACE) allows for <strong>accelerated processing of drawback claims</strong> under $1 million. Benefits include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>60-90 day processing time (vs. 6-12 months for paper claims)</li>
                <li>Electronic filing through ACE portal</li>
                <li>Streamlined documentation requirements</li>
                <li>Faster refund payment via ACH or check</li>
                <li>Real-time claim status tracking</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Drawback Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Ongoing duty drawback programs require <strong>meticulous recordkeeping and compliance</strong>. We help you implement systems for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Import/export documentation management and tracking</li>
                <li>5-year drawback recordkeeping requirements</li>
                <li>Bill of materials and production records</li>
                <li>Substitution tracking and commercial interchangeability documentation</li>
                <li>Annual drawback claim preparation and filing</li>
                <li>CBP audit preparation and defense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Drawback Calculation Examples */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Duty Drawback Recovery Examples
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Manufacturing Drawback Example</h3>
              <div className="space-y-3 text-text-secondary">
                <p><strong>Scenario:</strong> Electronics manufacturer imports $2 million in components from China (25% Section 301 tariff)</p>
                <p><strong>Duties Paid:</strong> $500,000</p>
                <p><strong>Action:</strong> Manufactures finished electronics and exports to Mexico</p>
                <p><strong>Drawback Recovery:</strong> $495,000 (99%)</p>
                <p className="text-secondary-teal font-bold">That's nearly half a million dollars back in your pocket!</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Unused Merchandise Drawback Example</h3>
              <div className="space-y-3 text-text-secondary">
                <p><strong>Scenario:</strong> Importer brings in $1 million in apparel from Vietnam (15% duty rate)</p>
                <p><strong>Duties Paid:</strong> $150,000</p>
                <p><strong>Action:</strong> Excess inventory exported to South American retailers</p>
                <p><strong>Drawback Recovery:</strong> $148,500 (99%)</p>
                <p className="text-secondary-teal font-bold">Turn dead inventory into recovered duties!</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rejected Merchandise Example</h3>
              <div className="space-y-3 text-text-secondary">
                <p><strong>Scenario:</strong> Manufacturer imports $500,000 in defective machinery parts (2.5% duty)</p>
                <p><strong>Duties Paid:</strong> $12,500</p>
                <p><strong>Action:</strong> Parts fail quality inspection, exported back to supplier</p>
                <p><strong>Drawback Recovery:</strong> $12,375 (99%)</p>
                <p className="text-secondary-teal font-bold">Recover duties even when imports fail!</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Substitution Drawback Example</h3>
              <div className="space-y-3 text-text-secondary">
                <p><strong>Scenario:</strong> Chemical company imports $800,000 in chemicals (6% duty) but also sources domestically</p>
                <p><strong>Duties Paid:</strong> $48,000</p>
                <p><strong>Action:</strong> Exports finished chemicals using both imported and domestic feedstock</p>
                <p><strong>Drawback Recovery:</strong> $47,520 (99% of duties on imported portion)</p>
                <p className="text-secondary-teal font-bold">Substitution maximizes your flexibility!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Industries Benefiting from Duty Drawback
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Manufacturing & Assembly', items: ['Electronics assembly', 'Automotive parts manufacturing', 'Machinery production', 'Industrial equipment assembly'] },
              { title: 'Apparel & Textiles', items: ['Fashion and clothing', 'Fabric and textile goods', 'Footwear manufacturing', 'Accessories production'] },
              { title: 'Food & Beverage', items: ['Food processing and packaging', 'Beverage production', 'Agricultural products', 'Ingredient manufacturing'] },
              { title: 'Chemicals & Petroleum', items: ['Chemical manufacturing', 'Petroleum refining', 'Pharmaceutical production', 'Plastics and polymers'] },
              { title: 'Metals & Materials', items: ['Steel and aluminum processing', 'Metal fabrication', 'Building materials', 'Raw materials processing'] },
              { title: 'E-Commerce & Distribution', items: ['Online retail exports', 'Wholesale distribution', 'Excess inventory liquidation', 'International fulfillment'] },
            ].map((industry) => (
              <div key={industry.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">{industry.title}</h3>
                <ul className="space-y-1 text-text-secondary text-sm">
                  {industry.items.map((item) => (
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

      {/* Why Choose Our Long Beach Duty Drawback Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our Duty Drawback Lawyers
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Drawback Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Duty drawback is a <strong>highly technical area</strong> requiring expertise in CBP regulations, ACE filing procedures, and complex documentation requirements. We focus exclusively on customs and trade law.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Results</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We've recovered <strong>over $50 million in duty refunds</strong> for California exporters through thousands of successful drawback claims across all drawback types.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port of Long Beach Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our proximity to Port of Long Beach provides <strong>direct access to port facilities and local CBP offices</strong>, enabling efficient claim processing and problem resolution.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flexible Pricing Models</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Choose <strong>contingency pricing (you only pay when you get your refund)</strong> or flat-fee arrangements. Free initial consultation to assess your drawback potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Long Beach Duty Drawback Attorney Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving Long Beach & Port of Long Beach)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Drawback Consultations:</strong> Available by appointment
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary-navy mb-3">Serving Port of Long Beach</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Port of Long Beach:</strong> 45 minutes via 405/710</li>
                <li><strong>Long Beach Downtown:</strong> 50 minutes via 405/710</li>
                <li><strong>Port of LA:</strong> 50 minutes via 405/110</li>
                <li><strong>LAX Cargo Area:</strong> 30 minutes via 405</li>
                <li><strong>Orange County:</strong> 60 minutes via 405/5</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Duty Recovery Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Duty Recovery Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/tariff-refund-protests" className="service-link">
                    <span className="service-link__title">Tariff Refund Protests</span>
                    <p className="service-link__description">Protest incorrect duty assessments</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/tariff-engineering" className="service-link">
                    <span className="service-link__title">Tariff Engineering</span>
                    <p className="service-link__description">Minimize future duty payments</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/ftz-foreign-trade-zones" className="service-link">
                    <span className="service-link__title">Foreign Trade Zones</span>
                    <p className="service-link__description">Defer or eliminate duties through FTZ</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Ports</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/los-angeles-duty-drawback" className="service-link">
                    <span className="service-link__title">Los Angeles Port Drawback</span>
                    <p className="service-link__description">Port of LA duty recovery</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <a href="/duty-drawback" className="service-link">
                    <span className="service-link__title">Oakland Port Drawback</span>
                    <p className="service-link__description">Northern California duty recovery</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Drawback Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/duty-drawback-guide" className="service-link">
                    <span className="service-link__title">Duty Drawback Complete Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/drawback-calculator" className="service-link">
                    <span className="service-link__title">Drawback Savings Calculator</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/ace-drawback-filing" className="service-link">
                    <span className="service-link__title">ACE Drawback Filing Guide</span>
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
            Start Recovering Your Paid Duties Today
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Don't leave money on the table. Our Long Beach duty drawback lawyers will analyze your import/export activity and maximize your duty recovery. Free consultation and potential assessment.
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

export default LongBeachDutyDrawbackPage;
