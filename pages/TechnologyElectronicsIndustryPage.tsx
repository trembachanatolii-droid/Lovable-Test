import React from 'react';
import { useMeta } from '../hooks/useMeta';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';

const TechnologyElectronicsIndustryPage: React.FC = () => {
  useMeta({
    title: 'Tech Industry Trade Attorney CA | Electronics Import Lawyer',
    description: 'California electronics import attorney & tech industry customs lawyer. HTS classification, Section 301 tariffs, encryption export controls, semiconductor trade compliance & technology supply chain law. Call 631-746-8290.',
    canonical: 'technology-electronics-trade-attorney',
    schema: [
      generateWebPageSchema({
        title: 'Technology & Electronics Industry Trade Law Services',
        description: 'Specialized international trade law services for California technology and electronics companies. Expert guidance on import compliance, export controls, tariff strategies, and supply chain optimization.',
        url: 'technology-electronics-trade-attorney',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: 'Industries', url: 'technology-electronics-trade-attorney' },
        { name: 'Technology & Electronics', url: 'technology-electronics-trade-attorney' },
      ]),
      generateServiceSchema({
        name: 'Technology & Electronics Trade Law Services',
        description: 'Comprehensive trade law services for technology and electronics companies including customs compliance, export controls, tariff optimization, and supply chain strategies.',
        serviceType: 'Legal Services',
      }),
    ],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-navy via-primary-navy to-secondary-teal py-16 px-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-secondary-gold text-primary-navy px-4 py-2 rounded-full text-sm font-bold mb-4">
              INDUSTRY FOCUS: TECHNOLOGY & ELECTRONICS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              California Trade Law Attorney for Technology & Electronics Companies
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Specialized international trade compliance for semiconductor manufacturers, electronics importers, software companies, and technology supply chains
            </p>
            <a
              href="#contact"
              className="inline-block bg-secondary-gold hover:bg-yellow-500 text-primary-navy font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
            >
              Schedule Strategic Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary-teal mb-2">$45M+</div>
              <div className="text-gray-600">Duty Savings for Tech Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary-teal mb-2">500+</div>
              <div className="text-gray-600">Export Licenses Secured</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary-teal mb-2">200+</div>
              <div className="text-gray-600">Tech Companies Represented</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary-teal mb-2">15+</div>
              <div className="text-gray-600">Years Tech Industry Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-16 px-4">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Unique Trade Compliance Challenges for Technology Companies
            </h2>
            <p className="text-xl text-gray-600">
              The technology sector faces complex regulatory requirements across multiple jurisdictions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Classification Complexity</h3>
              <p className="text-gray-700">
                Technology products often have ambiguous HTS classifications affecting duty rates. Smartphones, tablets, and IoT devices may fall into multiple tariff categories. Incorrect classification can result in significant overpayment or CBP penalties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Section 301 Tariff Exposure</h3>
              <p className="text-gray-700">
                Most electronics imported from China face 25% Section 301 additional duties. California tech companies must develop tariff mitigation strategies including classification optimization, supply chain restructuring, and exclusion requests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Export Control Compliance</h3>
              <p className="text-gray-700">
                Technology products containing encryption or advanced computing capabilities require EAR classification and potential export licenses. Deemed exports to foreign national employees add complexity. Violations carry severe penalties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Semiconductor Supply Chain Risks</h3>
              <p className="text-gray-700">
                Semiconductor shortages and geopolitical tensions require supply chain agility. Companies must navigate Entity List restrictions, understand de minimis rules for products containing U.S. content, and comply with CHIPS Act requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Rapid Product Cycles</h3>
              <p className="text-gray-700">
                Technology companies release new products constantly, each requiring customs classification, export control analysis, and compliance documentation. Manual processes cannot keep pace with innovation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-primary-navy mb-3">Cross-Border Data Transfer</h3>
              <p className="text-gray-700">
                Cloud services and software companies must navigate international data privacy laws, data localization requirements, and export controls on technology. GDPR, CCPA, and Chinese data laws create compliance complexity.
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
              Specialized Services for Technology & Electronics Companies
            </h2>
            <p className="text-xl text-gray-600">
              Strategic trade law guidance tailored to the technology industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary-navy mb-4">HTS Classification Strategy</h3>
              <ul className="space-y-2 text-gray-700 list-none">
                <li>Electronics classification analysis (smartphones, tablets, computers)</li>
                <li>Binding ruling requests to CBP</li>
                <li>First sale valuation strategies</li>
                <li>Section 301 tariff mitigation</li>
                <li>Product-specific duty optimization</li>
              </ul>
              <a href="#contact" className="inline-block mt-6 text-secondary-teal hover:text-primary-navy font-semibold">
                Learn More →
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">

              <h3 className="text-xl font-bold text-primary-navy mb-4">Export Control Compliance</h3>
              <ul className="space-y-2 text-gray-700 list-none">
                <li>ECCN classification for technology products</li>
                <li>Encryption registration and reporting (BIS)</li>
                <li>Export license applications (EAR)</li>
                <li>Entity List screening and compliance</li>
                <li>Deemed export programs for R&D teams</li>
                <li>Technology Control Plans (TCP)</li>
              </ul>
              <a href="#export-controls-sanctions" className="inline-block mt-6 text-secondary-teal hover:text-primary-navy font-semibold">
                Explore Export Controls →
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">

              <h3 className="text-xl font-bold text-primary-navy mb-4">Semiconductor Supply Chain</h3>
              <ul className="space-y-2 text-gray-700 list-none">
                <li>Entity List impact analysis</li>
                <li>De minimis rule calculations</li>
                <li>Supply chain restructuring strategies</li>
                <li>CHIPS Act compliance and incentives</li>
                <li>Country of origin determinations</li>
                <li>Alternative sourcing analysis</li>
              </ul>
              <a href="#contact" className="inline-block mt-6 text-secondary-teal hover:text-primary-navy font-semibold">
                Discuss Your Supply Chain →
              </a>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">

              <h3 className="text-xl font-bold text-primary-navy mb-4">Import Compliance Programs</h3>
              <ul className="space-y-2 text-gray-700 list-none">
                <li>Automated classification systems</li>
                <li>Scalable compliance for high-volume imports</li>
                <li>Integration with ERP systems (SAP, Oracle)</li>
                <li>Audit defense preparation</li>
                <li>Prior disclosure strategy</li>
              </ul>
              <a href="#regulatory-compliance-advisory" className="inline-block mt-6 text-secondary-teal hover:text-primary-navy font-semibold">
                Build Your Program →
              </a>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">

              <h3 className="text-xl font-bold text-primary-navy mb-4">CBP Defense & Litigation</h3>
              <ul className="space-y-2 text-gray-700 list-none">
                <li>Focused assessment defense</li>
                <li>Classification disputes (CIT litigation)</li>
                <li>Section 301 exclusion appeals</li>
                <li>Penalty mitigation for tech companies</li>
                <li>Seizure release (counterfeit concerns)</li>
              </ul>
              <a href="#customs-defense-litigation" className="inline-block mt-6 text-secondary-teal hover:text-primary-navy font-semibold">
                Protect Your Business →
              </a>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">

              <h3 className="text-xl font-bold text-primary-navy mb-4">Duty Savings Strategies</h3>
              <ul className="space-y-2 text-gray-700 list-none">
                <li>Foreign Trade Zone utilization</li>
                <li>Drawback claims for returned products</li>
                <li>First sale valuation programs</li>
                <li>FTA qualification (USMCA, KORUS)</li>
                <li>Section 9817 temporary imports</li>
              </ul>
              <a href="#contact" className="inline-block mt-6 text-secondary-teal hover:text-primary-navy font-semibold">
                Maximize Savings →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology-Specific Issues */}
      <section className="py-16 px-4">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold text-primary-navy mb-8 text-center">
            Product-Specific Trade Compliance Guidance
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">�Smartphones & Tablets</h3>
              <p className="text-gray-700 mb-3">
                <strong>Classification Challenges:</strong> May be classified as telephones (8517), computing machines (8471), or other devices depending on principal function. Classification affects duty rates (often free vs. 2.5%) and Section 301 applicability.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Export Controls:</strong> Devices with encryption require ECCN classification (typically 5A992 or 5A002). Must file Semi-Annual Self-Classification Reports to BIS. Strong encryption may require export licenses to certain countries.
              </p>
              <p className="text-gray-700">
                <strong>Our Approach:</strong> Obtain binding rulings for new product lines. Classify encryption capabilities. Establish automated screening for Entity List concerns.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">💻 Computers & Servers</h3>
              <p className="text-gray-700 mb-3">
                <strong>Classification Challenges:</strong> Desktop computers, laptops, and servers typically classify under HTS 8471 (duty-free). However, gaming systems, thin clients, and specialized computing devices may have different treatment.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Export Controls:</strong> High-performance computers face export restrictions to certain countries. Advanced processors (AI/ML accelerators) may require ECCN 3A001 or 4A003 classification and licenses.
              </p>
              <p className="text-gray-700">
                <strong>Our Approach:</strong> Analyze computing specifications against EAR Composite Theoretical Performance (CTP) thresholds. Structure supply chains to minimize controlled content.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">�Semiconductors & Components</h3>
              <p className="text-gray-700 mb-3">
                <strong>Classification Challenges:</strong> Semiconductor devices (diodes, transistors, ICs) fall under Chapter 85 with varying duty rates. Origin determinations are complex for multi-country manufacturing.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Export Controls:</strong> Advanced semiconductor manufacturing equipment and certain chips face strict export controls to China and other countries. Entity List includes major Chinese semiconductor companies.
              </p>
              <p className="text-gray-700">
                <strong>Our Approach:</strong> Navigate Entity List restrictions. Calculate de minimis thresholds for products containing U.S. semiconductors. Advise on CHIPS Act incentive eligibility.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">☁�Software & Cloud Services</h3>
              <p className="text-gray-700 mb-3">
                <strong>Classification Challenges:</strong> Software on physical media is dutiable. Downloaded/cloud software generally not subject to customs duties but may face other trade barriers.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Export Controls:</strong> Encryption software, cybersecurity tools, and network penetration software face EAR controls. Open-source releases require specific exception compliance. Technical data for controlled software requires licenses.
              </p>
              <p className="text-gray-700">
                <strong>Our Approach:</strong> Classify software under EAR (typically 5D002 or 5D992). File encryption self-classification reports. Structure cloud services to comply with data localization laws while meeting export control requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-4 bg-gradient-to-br from-secondary-teal/10 to-primary-navy/10">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-8">
            <div className="inline-block bg-secondary-gold text-primary-navy px-4 py-2 rounded-full text-sm font-bold mb-4">
              SUCCESS STORY
            </div>
            <h2 className="text-3xl font-bold text-primary-navy mb-4">
              Silicon Valley Tech Company: $4.2M Annual Duty Savings
            </h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-teal mb-2">$4.2M</div>
                <div className="text-gray-600">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-teal mb-2">3 Months</div>
                <div className="text-gray-600">Implementation Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-teal mb-2">Zero</div>
                <div className="text-gray-600">CBP Challenges</div>
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold text-primary-navy mb-2">Challenge:</h3>
                <p>
                  California-based networking equipment manufacturer importing $150M annually from Chinese contract manufacturers. Products classified under HTS 8517 at 2.5% duty rate plus 25% Section 301 tariffs = 27.5% effective rate. Company facing $41M+ annual duty burden.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary-navy mb-2">Strategy:</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Conducted comprehensive classification analysis of 200+ product SKUs</li>
                  <li>Identified 40% of products eligible for alternative classifications (8471, 8473) with duty-free treatment</li>
                  <li>Restructured supply chain to source 30% of components from Vietnam and Malaysia (Section 301 exempt)</li>
                  <li>Implemented first sale valuation program reducing dutiable value by 15%</li>
                  <li>Obtained binding rulings from CBP for all new classifications</li>
                  <li>Established Foreign Trade Zone for final assembly operations</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-primary-navy mb-2">Outcome:</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>$4.2M annual duty savings (10.3% reduction in total duty burden)</li>
                  <li>All binding rulings approved by CBP within 120 days</li>
                  <li>No focused assessments or audits during 4-year period</li>
                  <li>Scalable compliance program accommodating 50+ new products annually</li>
                  <li>Enhanced export control compliance for EAR-controlled products</li>
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
            Why Technology Companies Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">�Technology Industry Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of technology products, manufacturing processes, and business models. We speak your language and understand the fast-paced nature of the tech sector.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">�Silicon Valley & California Focus</h3>
              <p className="text-gray-700">
                Based in California with extensive experience representing Silicon Valley companies, Southern California tech firms, and San Diego innovators at Los Angeles and San Francisco ports.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">�Rapid Response for Product Launches</h3>
              <p className="text-gray-700">
                Fast turnaround on classification analysis, export control reviews, and compliance documentation to support your product launch timelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-3">�Integration with Your Systems</h3>
              <p className="text-gray-700">
                Experience integrating compliance processes with ERP systems (SAP, Oracle), PLM systems, and e-commerce platforms for scalable automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-bold text-primary-navy mb-8 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Legal Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#export-controls-sanctions" className="text-secondary-teal hover:text-primary-navy font-medium">
                    → Export Controls & Sanctions
                  </a>
                  <p className="text-sm text-gray-600 mt-1">ITAR/EAR compliance for tech</p>
                </li>
                <li>
                  <a href="#customs-defense-litigation" className="text-secondary-teal hover:text-primary-navy font-medium">
                    → Customs Defense & Litigation
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Section 301 disputes defense</p>
                </li>
                <li>
                  <a href="#regulatory-compliance-advisory" className="text-secondary-teal hover:text-primary-navy font-medium">
                    → Trade Compliance Programs
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Compliance program design</p>
                </li>
                <li>
                  <a href="#practice-areas" className="text-secondary-teal hover:text-primary-navy font-medium">
                    → All Practice Areas
                  </a>
                </li>
              </ul>
            </div>

            {/* California Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Serving Tech Hubs</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#bay-area-trade-law-attorney" className="text-secondary-teal hover:text-primary-navy font-medium">
                    → San Francisco & Bay Area
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Silicon Valley tech expertise</p>
                </li>
                <li>
                  <a href="#los-angeles-port-customs-attorney" className="text-secondary-teal hover:text-primary-navy font-medium">
                    → Los Angeles & Long Beach Port
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Hardware imports through LA/LB</p>
                </li>
              </ul>
            </div>

            {/* Other Industries */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Other Industries</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#apparel-textiles-trade-attorney" className="text-secondary-teal hover:text-primary-navy font-medium">
                    → Apparel & Textiles
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Wearable tech compliance</p>
                </li>
                <li>
                  <a href="#food-agriculture-trade-attorney" className="text-secondary-teal hover:text-primary-navy font-medium">
                    → Food & Agriculture
                  </a>
                  <p className="text-sm text-gray-600 mt-1">AgTech trade compliance</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Helpful Guides */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-primary-navy mb-4 text-center">Helpful Guides for Tech Companies</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <a href="#section-301-tariffs-guide" className="block p-4 bg-gray-50 rounded-lg hover:bg-secondary-teal/10 transition-colors text-center">
                <h4 className="font-bold text-primary-navy mb-1">Section 301 Guide</h4>
                <p className="text-xs text-gray-600">China tariff strategies</p>
              </a>
              <a href="#article/ear-compliance" className="block p-4 bg-gray-50 rounded-lg hover:bg-secondary-teal/10 transition-colors text-center">
                <h4 className="font-bold text-primary-navy mb-1">EAR Compliance</h4>
                <p className="text-xs text-gray-600">Export control basics</p>
              </a>
              <a href="#tariffs-classification-guide" className="block p-4 bg-gray-50 rounded-lg hover:bg-secondary-teal/10 transition-colors text-center">
                <h4 className="font-bold text-primary-navy mb-1">HTS Classification</h4>
                <p className="text-xs text-gray-600">Tech classification tips</p>
              </a>
              <a href="#faq-center" className="block p-4 bg-gray-50 rounded-lg hover:bg-secondary-teal/10 transition-colors text-center">
                <h4 className="font-bold text-primary-navy mb-1">FAQ Center</h4>
                <p className="text-xs text-gray-600">Tech trade questions</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary-navy to-secondary-teal">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Technology Trade Compliance?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Schedule a consultation with California's leading trade law attorney for technology and electronics companies.
          </p>
          <a
            href="#contact"
            className="inline-block bg-secondary-gold hover:bg-yellow-500 text-primary-navy font-bold py-4 px-8 rounded-lg transition-colors shadow-lg text-lg"
          >
            Schedule Strategic Consultation
          </a>
          <p className="text-gray-300 mt-6">
            Serving Silicon Valley, Los Angeles, San Diego, and California technology companies nationwide
          </p>
        </div>
      </section>
    </div>
  );
};

export default TechnologyElectronicsIndustryPage;
