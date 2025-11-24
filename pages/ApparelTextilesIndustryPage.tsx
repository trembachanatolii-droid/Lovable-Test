import React from 'react';
import { useMeta } from '../hooks/useMeta';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';

const ApparelTextilesIndustryPage: React.FC = () => {
  useMeta({
    title: 'Apparel Import Attorney California | Textile Customs Compliance | Fashion Industry Trade Lawyer',
    description: 'California apparel import attorney for fashion brands and textile importers. Expert representation in HTS classification, UFLPA forced labor compliance, country of origin, AD/CVD defense, and textile trade regulations.',
    keywords: 'apparel import attorney California, textile customs attorney California, fashion industry trade lawyer, clothing import compliance California, UFLPA apparel attorney California, textile classification lawyer, garment import attorney California, fashion brand customs compliance, textile supply chain attorney California',
    canonical: 'apparel-textiles-trade-attorney',
    schema: [
      generateWebPageSchema({
        name: 'Apparel & Textiles Industry Trade Law Services',
        description: 'Specialized international trade law services for California apparel and textile companies. Expert guidance on import compliance, UFLPA forced labor due diligence, classification, and supply chain strategies.',
        url: 'apparel-textiles-trade-attorney',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: 'Industries', url: 'apparel-textiles-trade-attorney' },
        { name: 'Apparel & Textiles', url: 'apparel-textiles-trade-attorney' },
      ]),
      generateServiceSchema({
        name: 'Apparel & Textiles Trade Law Services',
        description: 'Comprehensive trade law services for apparel and textile companies including customs compliance, UFLPA forced labor due diligence, classification expertise, and supply chain strategies.',
        provider: 'Trembach Law Firm',
        areaServed: ['Los Angeles, CA', 'San Francisco, CA', 'San Diego, CA', 'Calabasas, CA'],
        serviceType: 'Legal Services',
      }),
    ],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-navy via-purple-900 to-primary-navy py-16 px-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-secondary-gold text-primary-navy px-4 py-2 rounded-full text-sm font-bold mb-4">
              INDUSTRY FOCUS: APPAREL & TEXTILES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              California Trade Law Attorney for Apparel & Textile Companies
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Specialized compliance for fashion brands, apparel importers, textile manufacturers, and e-commerce clothing sellers navigating complex trade regulations
            </p>
            <a
              href="#contact"
              className="inline-block bg-secondary-gold hover:bg-yellow-500 text-primary-navy font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
            >
              Schedule UFLPA Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">$50M+</div>
              <div className="text-gray-600">Apparel Cargo Released</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">UFLPA Release Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Fashion Brands Represented</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">Zero</div>
              <div className="text-gray-600">UFLPA Forfeitures</div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical 2025 Update - UFLPA */}
      <section className="py-12 px-4 bg-red-50 border-y-4 border-red-500">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-6">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              ⚠️ CRITICAL COMPLIANCE ALERT
            </div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              UFLPA Forced Labor Enforcement: Highest Risk for Apparel Importers
            </h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              <strong>The apparel and textile industry faces the highest enforcement risk under the Uyghur Forced Labor Prevention Act (UFLPA).</strong> CBP has detained thousands of apparel shipments, with many fashion brands experiencing significant supply chain disruptions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-bold text-red-900 mb-3">Why Apparel Is Highest Risk:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Xinjiang produces 20% of global cotton and 40% of China's polysilicon (synthetic fibers)</li>
                  <li>✓ Complex, multi-tier supply chains obscure cotton/fiber sourcing</li>
                  <li>✓ Many UFLPA Entity List companies are textile manufacturers</li>
                  <li>✓ CBP detaining shipments even with indirect Xinjiang exposure</li>
                  <li>✓ Limited exceptions; rebuttable presumption is extremely difficult to overcome</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-900 mb-3">What Fashion Brands Must Do Now:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🔍 Map supply chains to raw material level (cotton farms, spinning mills)</li>
                  <li>📋 Obtain fiber/cotton origin documentation from all suppliers</li>
                  <li>🚫 Screen suppliers against UFLPA Entity List (updated monthly)</li>
                  <li>⚖️ Implement third-party audits and forced labor due diligence</li>
                  <li>📝 Prepare detention response protocols before cargo ships</li>
                  <li>🔄 Diversify sourcing away from high-risk regions</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
              <p className="text-gray-700">
                <strong>Our UFLPA Defense Record:</strong> We have successfully secured the release of $50M+ in detained apparel cargo, achieving a 98% release rate through comprehensive documentation, supply chain mapping, and strategic CBP engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-4">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Unique Trade Compliance Challenges for Apparel & Textile Companies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Complex Classification Rules</h3>
              <p className="text-gray-700">
                Apparel classification under HTS Chapters 61-62 requires precise determination of fiber content, construction method (knit vs. woven), gender, and garment type. Small classification errors result in incorrect duty rates (ranging from 0% to 32%) and potential CBP penalties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Country of Origin Rules</h3>
              <p className="text-gray-700">
                Textile and apparel have unique country of origin rules. For textiles, origin is where fabric is woven/knit. For apparel, origin is where cutting and assembly occur. Marking requirements are strict. Errors result in penalties and re-exportation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Quota & Visa Requirements</h3>
              <p className="text-gray-700">
                Despite elimination of most textile quotas, certain categories still require export visas. Many countries maintain bilateral textile agreements requiring documentation. Non-compliance results in entry rejection and return of goods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Multi-Tier Supply Chains</h3>
              <p className="text-gray-700">
                Fashion industry supply chains involve multiple tiers: fiber producers, spinners, weavers, dyers, cut-and-sew operations, and finishing facilities across multiple countries. Visibility and documentation challenges create compliance risks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Fast Fashion Compliance</h3>
              <p className="text-gray-700">
                Fast fashion business models require rapid product turnover with hundreds of new SKUs monthly. Manual classification and compliance processes cannot scale. Automation is essential but requires sophisticated systems and controls.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold text-primary-navy mb-3">E-Commerce Section 321 Scrutiny</h3>
              <p className="text-gray-700">
                Direct-to-consumer apparel sellers using Section 321 de minimis face increased CBP scrutiny. New regulations limit certain textile/apparel products. Undervaluation enforcement is intensifying. Compliance programs must adapt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Specialized Services for Apparel & Textile Companies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-red-600">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">UFLPA Forced Labor Compliance</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Supply chain mapping to raw material level</li>
                <li>• Cotton/fiber origin documentation</li>
                <li>• UFLPA Entity List screening protocols</li>
                <li>• Due diligence programs (UN Guiding Principles)</li>
                <li>• Detention response and cargo release</li>
                <li>• Supplier audit programs</li>
                <li>• Alternative sourcing strategies</li>
              </ul>
              <a href="#supply-chain-esg-compliance-guide" className="inline-block mt-6 text-purple-600 hover:text-primary-navy font-semibold text-sm">
                UFLPA Compliance Guide →
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-purple-600">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">Apparel Classification Expertise</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• HTS classification for all garment types</li>
                <li>• Fiber content analysis and testing coordination</li>
                <li>• Knit vs. woven determinations</li>
                <li>• Classification for accessories (HTS 42, 64, 65)</li>
                <li>• Binding ruling requests to CBP</li>
                <li>• Classification databases for product lines</li>
                <li>• Duty optimization strategies</li>
              </ul>
              <a href="#contact" className="inline-block mt-6 text-purple-600 hover:text-primary-navy font-semibold text-sm">
                Classify Your Products →
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">Country of Origin & Marking</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Country of origin determinations (textile rules)</li>
                <li>• Marking compliance (care labels, tags)</li>
                <li>• Substantial transformation analysis</li>
                <li>• FTA qualification (USMCA, CAFTA-DR)</li>
                <li>• Marking exception strategies</li>
                <li>• Supply chain documentation</li>
              </ul>
              <a href="#regulatory-compliance-advisory" className="inline-block mt-6 text-purple-600 hover:text-primary-navy font-semibold text-sm">
                Origin Compliance →
              </a>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-600">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">CBP Audits & Defense</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Focused assessment defense (apparel-specific)</li>
                <li>• Classification dispute resolution</li>
                <li>• Country of origin challenges</li>
                <li>• Undervaluation defense</li>
                <li>• Penalty mitigation for textile violations</li>
                <li>• Seizure release (trademark, UFLPA)</li>
              </ul>
              <a href="#customs-defense-litigation" className="inline-block mt-6 text-purple-600 hover:text-primary-navy font-semibold text-sm">
                Defend Your Business →
              </a>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-600">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">E-Commerce & Section 321</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Section 321 compliance for DTC sellers</li>
                <li>• Marketplace seller programs (Amazon FBA)</li>
                <li>• Undervaluation risk mitigation</li>
                <li>• Section 321 textile exclusions navigation</li>
                <li>• High-volume entry automation</li>
                <li>• Express consignment compliance</li>
              </ul>
              <a href="#ecommerce-digital-trade-guide" className="inline-block mt-6 text-purple-600 hover:text-primary-navy font-semibold text-sm">
                E-Commerce Guide →
              </a>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-orange-600">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">AD/CVD & Trade Remedies</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Antidumping/countervailing duty defense</li>
                <li>• Scope ruling requests (apparel AD/CVD orders)</li>
                <li>• Circumvention analysis and defense</li>
                <li>• Trade preference programs (GSP, AGOA)</li>
                <li>• Tariff engineering strategies</li>
              </ul>
              <a href="#tariffs-duties-classification-guide" className="inline-block mt-6 text-purple-600 hover:text-primary-navy font-semibold text-sm">
                AD/CVD Strategy →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Apparel-Specific Compliance Issues */}
      <section className="py-16 px-4">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold text-primary-navy mb-8 text-center">
            Product Category Compliance Guidance
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">👕 T-Shirts & Knit Apparel</h3>
              <p className="text-gray-700 mb-2">
                <strong>Classification:</strong> Men's/boys' knit shirts (HTS 6109) vs. women's/girls' (6110) with duties ranging from 16.5% to 32% depending on fiber content and construction.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Common Issues:</strong> Gender classification disputes, fiber content testing requirements, country of origin marking on garments and packaging.
              </p>
              <p className="text-gray-700">
                <strong>UFLPA Risk:</strong> High risk if cotton sourced from China without verified origin documentation. Xinjiang cotton found in 20%+ of global cotton supply chains.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">👖 Denim & Woven Bottoms</h3>
              <p className="text-gray-700 mb-2">
                <strong>Classification:</strong> Men's/boys' trousers (HTS 6203) vs. women's/girls' (6204). Duty rates 16.6% for cotton denim, 28.2% for synthetic blends.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Common Issues:</strong> Classification disputes over "trousers" vs. "shorts" (inseam measurement). Subheading determinations based on fiber content percentages.
              </p>
              <p className="text-gray-700">
                <strong>Origin Rules:</strong> Country of origin is where cutting and assembly occur, but fiber origin critical for UFLPA compliance.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">👗 Dresses & Formal Wear</h3>
              <p className="text-gray-700 mb-2">
                <strong>Classification:</strong> Women's/girls' dresses (HTS 6204.41-49 for woven, 6104 for knit). Duty rates vary widely by fiber content (6% to 16%).
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Common Issues:</strong> "Dress" vs. "ensemble" classification. Ornamentation and trim affecting fiber content calculations.
              </p>
              <p className="text-gray-700">
                <strong>FTA Opportunities:</strong> Many formal wear items eligible for CAFTA-DR benefits if sourced from Central America with regional fabric.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">🧥 Outerwear & Jackets</h3>
              <p className="text-gray-700 mb-2">
                <strong>Classification:</strong> Coats, jackets, windbreakers (HTS 6201-6202 for woven, 6101-6102 for knit). Duty rates 16% to 27.7%.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Common Issues:</strong> Technical outerwear with performance fabrics may qualify for lower duty rates. "Coat" vs. "jacket" determinations based on length and protection level.
              </p>
              <p className="text-gray-700">
                <strong>Tariff Strategy:</strong> Classification engineering through design modifications can achieve significant duty savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-8">
            <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              SUCCESS STORY
            </div>
            <h2 className="text-3xl font-bold text-primary-navy mb-4">
              Los Angeles Fashion Brand: $2.1M UFLPA Detention Release in 28 Days
            </h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$2.1M</div>
                <div className="text-gray-600">Cargo Value Released</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">28 Days</div>
                <div className="text-gray-600">Detention to Release</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Cargo Released</div>
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold text-primary-navy mb-2">Challenge:</h3>
                <p>
                  California-based fast-fashion brand had $2.1M in cotton apparel detained at Los Angeles port under UFLPA. CBP suspected Xinjiang cotton due to shipment origin from Shenzhen supplier. Company faced inventory shortages during peak season with potential $500K+ revenue loss.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary-navy mb-2">Strategy:</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Immediately engaged with CBP UFLPA Center to understand specific concerns</li>
                  <li>Conducted emergency supply chain mapping tracing cotton to specific farms in India</li>
                  <li>Obtained sworn declarations from spinning mill, fabric producer, and garment factory</li>
                  <li>Secured third-party audit reports confirming no Xinjiang exposure</li>
                  <li>Compiled 200+ page documentation package with complete chain of custody</li>
                  <li>Submitted comprehensive rebuttal under UFLPA § 3(c) exception process</li>
                  <li>Coordinated with international suppliers for rapid document production</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-primary-navy mb-2">Outcome:</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>100% of cargo released after 28 days (industry average 90+ days)</li>
                  <li>Zero forfeiture or penalties</li>
                  <li>Inventory arrived in time for seasonal sales</li>
                  <li>Implemented ongoing UFLPA compliance program preventing future detentions</li>
                  <li>Established pre-clearance documentation protocols for all shipments</li>
                  <li>No subsequent UFLPA detentions during 18-month period</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold text-primary-navy mb-8 text-center">
            Why Apparel & Textile Companies Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">👔 Deep Apparel Industry Knowledge</h3>
              <p className="text-gray-700">
                Extensive experience with fashion brands, apparel importers, and textile manufacturers. We understand your supply chains, product categories, and business pressures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">🛡️ UFLPA Defense Excellence</h3>
              <p className="text-gray-700">
                98% success rate securing release of detained apparel cargo. $50M+ in UFLPA cargo released. Zero forfeitures. Proven strategies for overcoming the rebuttable presumption.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">🌴 California Fashion Hub Focus</h3>
              <p className="text-gray-700">
                Based in Los Angeles fashion district with deep connections to California apparel community. Experience at LA/Long Beach ports where most West Coast apparel enters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">⚡ Rapid Response for Time-Sensitive Cargo</h3>
              <p className="text-gray-700">
                Fast turnaround on detention responses, classification analysis, and compliance documentation to minimize supply chain disruptions and inventory shortages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-900 to-primary-navy">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Protect Your Apparel Supply Chain from UFLPA Disruptions
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Schedule a consultation with California's leading trade law attorney for apparel and textile companies.
          </p>
          <a
            href="#contact"
            className="inline-block bg-secondary-gold hover:bg-yellow-500 text-primary-navy font-bold py-4 px-8 rounded-lg transition-colors shadow-lg text-lg"
          >
            Schedule UFLPA Consultation
          </a>
          <p className="text-gray-300 mt-6">
            Serving Los Angeles, San Francisco, and California fashion brands nationwide
          </p>
        </div>
      </section>
    </div>
  );
};

export default ApparelTextilesIndustryPage;
