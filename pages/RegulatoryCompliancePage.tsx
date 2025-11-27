
import React, { useEffect } from 'react';
import EvaluationForm from '../components/EvaluationForm';
import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';

const RegulatoryCompliancePage: React.FC = () => {
  useMeta({
    title: 'Trade Compliance CA & USA | Import Export Compliance Program',
    description: 'Trade compliance attorney for California & USA. Import compliance programs, export compliance programs, federal trade compliance, trade compliance audits, prior disclosure customs, voluntary self disclosure, customs record keeping, ruling requests & compliance for manufacturers. Call 631-746-8290.',
    canonical: 'regulatory-compliance-advisory',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-compliance.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Regulatory Compliance & Advisory - Trade Compliance California Attorney',
        description: 'Comprehensive trade compliance California legal services for import/export compliance programs, federal trade compliance, and proactive regulatory advisory.',
        url: `${siteConfig.siteUrl}/#regulatory-compliance-advisory`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Practice Areas', url: `${siteConfig.siteUrl}/#practice-areas` },
        { name: 'Regulatory Compliance & Advisory', url: `${siteConfig.siteUrl}/#regulatory-compliance-advisory` }
      ]),
      generateServiceSchema({
        name: 'California Trade Compliance & Regulatory Advisory Services',
        description: 'Proactive trade compliance California services including import compliance program design, export compliance program development, federal trade compliance advisory, trade compliance audits, prior disclosure customs filings, voluntary self disclosure export submissions, customs record keeping systems, customs ruling requests, and trade compliance for manufacturers across California.',
        serviceType: 'Regulatory Compliance & Advisory',
        url: `${siteConfig.siteUrl}/#regulatory-compliance-advisory`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden bg-primary-navy flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop"
            alt="Trade compliance documentation and regulatory advisory representing proactive compliance strategies"
            className="w-full h-full object-cover opacity-50"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/80 via-primary-navy/60 to-primary-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-[1376px] mx-auto px-6 w-full text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold font-garamond text-white mb-6 tracking-tight leading-none drop-shadow-lg">
              Trade Compliance California & USA | Import Export Compliance Programs
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-light mb-8 max-w-2xl leading-relaxed drop-shadow-md">
              Federal trade compliance attorney. Import compliance programs, export compliance programs, trade compliance audits, prior disclosure customs, voluntary self disclosure export, customs record keeping, customs ruling requests & trade compliance for manufacturers. Proactive protection for California & USA businesses.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button href="#contact" variant="solid">
                Free Compliance Consultation
              </Button>
              <Button href="tel:+16317468290" variant="outline">
                Call (631) 746-8290
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated Timestamp */}
      <div className="py-4 px-6 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-sm text-gray-500 text-center">
            <span className="font-semibold text-primary-navy">Last Updated:</span> <time dateTime="2025-11-25">November 25, 2025</time>
          </p>
        </div>
      </div>

      {/* Why Proactive Compliance Matters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              The Best Defense Is Prevention
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              CBP penalties under <strong>19 USC § 1592</strong> can reach 400% of the goods' value. Export violations under <strong>ITAR and EAR</strong> carry criminal penalties. The cost of compliance is a fraction of the cost of enforcement. Our trade compliance California practice helps you build systems that prevent government action before it starts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-t-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Risk Assessment</h3>
              <p className="text-text-secondary leading-relaxed">
                We audit your current import/export operations to identify <strong>CBP audit triggers</strong>, valuation vulnerabilities, classification errors, and recordkeeping gaps.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-t-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">System Design</h3>
              <p className="text-text-secondary leading-relaxed">
                We build <strong>compliance programs</strong> with written policies, internal controls, training materials, and automated screening tools tailored to your business model.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-t-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Ongoing Support</h3>
              <p className="text-text-secondary leading-relaxed">
                Regulations change constantly. We provide <strong>quarterly compliance reviews</strong>, regulatory updates, and transaction-specific advice to keep you compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Compliance California Services
          </h2>

          <div className="space-y-6">
            {/* Import Compliance Program California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Import Compliance Program California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP's <strong>Informed Compliance</strong> framework requires importers to exercise "reasonable care" in all customs transactions. We design import compliance programs that satisfy CBP's expectations and demonstrate good faith in Focused Assessments and penalty proceedings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Reasonable Care Checklist:</strong> Customized procedures for each import transaction</li>
                <li><strong>Supplier Due Diligence:</strong> Verification protocols for foreign manufacturers and vendors</li>
                <li><strong>Classification Controls:</strong> Internal review processes for HTS determinations</li>
                <li><strong>Valuation Procedures:</strong> Transfer pricing documentation and related-party analysis</li>
                <li><strong>Preferential Trade Program Controls:</strong> FTA eligibility verification and certification management</li>
                <li><strong>Customs Broker Management:</strong> Power of attorney controls and broker oversight policies</li>
                <li><strong>Import Recordkeeping System:</strong> Document retention for CBP's 5-year audit window</li>
                <li><strong>Internal Audit Program:</strong> Quarterly self-assessments to catch errors before CBP does</li>
              </ul>
            </div>

            {/* Export Compliance Program California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Compliance Program California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Exports from California face multi-agency regulation: <strong>DDTC (ITAR)</strong>, <strong>BIS (EAR)</strong>, <strong>OFAC (sanctions)</strong>, and <strong>CBP (AES filing)</strong>. We build export compliance programs California that screen every transaction against all regulatory requirements and maintain defensible records.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Export Screening Platform:</strong> Automated ECCN/USML classification and denied party checks</li>
                <li><strong>Technology Transfer Controls:</strong> Deemed export procedures for foreign nationals</li>
                <li><strong>License Application Protocols:</strong> BIS and DDTC license preparation and tracking</li>
                <li><strong>Encryption Controls:</strong> EAR 740.17(b) self-classification for software exports</li>
                <li><strong>Sanctions Compliance:</strong> OFAC 50% rule analysis and SDN screening</li>
                <li><strong>Export Documentation:</strong> Commercial invoice, AES filing, and destination control statements</li>
                <li><strong>Employee Training:</strong> Annual export controls training for engineers, sales, and logistics</li>
                <li><strong>Audit Trail:</strong> Export transaction logs for BIS/DDTC compliance reviews</li>
              </ul>
            </div>

            {/* Federal Trade Compliance California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Federal Trade Compliance California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Beyond CBP, California importers face federal trade compliance California obligations under <strong>FDA</strong> (food/drugs), <strong>CPSC</strong> (consumer products), <strong>DOT</strong> (vehicles), <strong>EPA</strong> (chemicals), and <strong>FCC</strong> (electronics). We coordinate compliance across all Partner Government Agencies (PGAs).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>FDA Prior Notice Filings:</strong> Food facility registration and bioterrorism compliance</li>
                <li><strong>CPSC Compliance:</strong> Children's Product Certificate (CPC) and testing requirements</li>
                <li><strong>EPA TSCA Certification:</strong> Toxic Substances Control Act statements for chemicals</li>
                <li><strong>FCC Equipment Authorization:</strong> Certification for RF devices and wireless products</li>
                <li><strong>DOT Safety Standards:</strong> FMVSS compliance for imported vehicles and parts</li>
                <li><strong>USDA/APHIS Permits:</strong> Agricultural product import permits and phytosanitary certificates</li>
                <li><strong>Lacey Act Compliance:</strong> Plant and wildlife product declaration (PPQ 505)</li>
                <li><strong>Energy Star Compliance:</strong> DOE energy conservation standards for appliances</li>
              </ul>
            </div>

            {/* Trade Compliance Audits California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Compliance Audits California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We conduct independent trade compliance audits California before CBP does. Our <strong>mock Focused Assessments</strong> replicate CBP's audit methodology to identify risks and give you time to file Prior Disclosures before CBP discovers errors.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Classification Audit:</strong> Statistical sampling of HTS determinations across all product lines</li>
                <li><strong>Valuation Audit:</strong> Related-party transaction review and assists verification</li>
                <li><strong>FTA Audit:</strong> USMCA/KORUS certification substantiation and origin documentation</li>
                <li><strong>Recordkeeping Audit:</strong> 19 CFR § 163 compliance for 5-year retention requirements</li>
                <li><strong>Section 301 Audit:</strong> China-origin verification and substantial transformation analysis</li>
                <li><strong>Drawback Audit:</strong> Substitution claims review and accelerated payment compliance</li>
                <li><strong>ISF Compliance Audit:</strong> 10+2 filing accuracy and timely submission verification</li>
                <li><strong>Broker Oversight Audit:</strong> Power of attorney scope and broker fee reasonableness review</li>
              </ul>
            </div>

            {/* Prior Disclosure Customs California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Prior Disclosure Customs California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When you discover customs violations (misclassification, undervaluation, false country of origin), <strong>19 USC § 1592(c)(4)</strong> allows you to cap penalties at the interest on lost duties by filing a <strong>Prior Disclosure</strong>. We prepare legally defensible disclosures that minimize financial exposure while satisfying CBP's technical requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Violation Assessment:</strong> Quantify scope of errors through entry-level analysis</li>
                <li><strong>Tender Calculation:</strong> Determine exact loss of duty, fees, and interest owed to CBP</li>
                <li><strong>Narrative Statement:</strong> Draft legally sufficient explanation of violations without admitting fraud</li>
                <li><strong>Timeliness Verification:</strong> Ensure disclosure filed before CBP commences investigation</li>
                <li><strong>Reasonable Care Argument:</strong> Document good faith efforts to mitigate negligence findings</li>
                <li><strong>CBP Coordination:</strong> Submit disclosure to appropriate port and Fines, Penalties, and Forfeitures Officer</li>
                <li><strong>Tender Payment:</strong> Calculate and remit interest on duties to close the disclosure</li>
                <li><strong>Forward-Looking Controls:</strong> Implement procedures to prevent recurrence</li>
              </ul>
            </div>

            {/* Voluntary Self Disclosure Export California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Voluntary Self Disclosure Export California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Export violations discovered internally can be reported to <strong>BIS</strong> (for EAR violations) or <strong>DDTC</strong> (for ITAR violations) through <strong>Voluntary Self Disclosure (VSD)</strong> submissions. VSDs qualify for reduced penalties and can prevent criminal prosecution. We prepare VSDs that protect your business while satisfying agency disclosure requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Violation Discovery:</strong> Internal investigation to determine scope and severity of export violations</li>
                <li><strong>Agency Determination:</strong> Identify whether BIS (EAR), DDTC (ITAR), or both have jurisdiction</li>
                <li><strong>VSD Narrative:</strong> Prepare detailed disclosure statement with violation timeline and remedial actions</li>
                <li><strong>Mitigating Factors:</strong> Document compliance program, self-detection, and corrective measures</li>
                <li><strong>Agency Submission:</strong> File VSD with Office of Export Enforcement (BIS) or DDTC as appropriate</li>
                <li><strong>Follow-Up Response:</strong> Respond to agency requests for additional information during investigation</li>
                <li><strong>Settlement Negotiation:</strong> Negotiate civil penalty amounts and compliance commitments</li>
                <li><strong>Consent Agreement:</strong> Finalize settlement agreement and implement enhanced compliance measures</li>
              </ul>
            </div>

            {/* Customs Record Keeping California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Record Keeping California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>19 CFR § 163</strong> requires importers to retain all records related to customs transactions for <strong>5 years</strong> from entry date. We design customs record keeping California systems that organize documents for rapid production during CBP audits (CF-28 requests) and create defensible audit trails.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>Document Identification:</strong> Catalog of all records subject to 5-year retention (19 CFR § 163.1)</li>
                <li><strong>Electronic Recordkeeping:</strong> Cloud-based document management systems with audit controls</li>
                <li><strong>Entry-Level Organization:</strong> File structure linking commercial invoices, packing lists, and entry summaries</li>
                <li><strong>Classification Records:</strong> Technical specifications, laboratory reports, and binding ruling requests</li>
                <li><strong>Valuation Records:</strong> Purchase orders, price lists, and related-party transaction documentation</li>
                <li><strong>FTA Records:</strong> USMCA certifications, supplier declarations, and origin worksheets</li>
                <li><strong>Rapid Production Protocols:</strong> Procedures to respond to CF-28 within 30 days</li>
                <li><strong>Retention Schedule:</strong> Automated purge dates to comply with 5-year requirement without over-retention</li>
              </ul>
            </div>

            {/* Customs Ruling Requests California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Ruling Requests California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP's <strong>binding ruling program</strong> allows importers to obtain advance written determinations on classification (HTS), country of origin, marking, and other issues. We prepare customs ruling requests California that lock in favorable treatment and provide audit protection for California businesses.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>NY Rulings (Classification):</strong> Binding tariff classification rulings from National Commodity Specialist Division</li>
                <li><strong>HQ Rulings (Complex Issues):</strong> Headquarters rulings for novel classification or valuation questions</li>
                <li><strong>Country of Origin Rulings:</strong> Substantial transformation analysis for marking and preferential trade programs</li>
                <li><strong>Marking Rulings:</strong> 19 USC § 1304 compliance determinations for country-of-origin marking</li>
                <li><strong>Drawback Rulings:</strong> Manufacturing drawback and substitution claims pre-approval</li>
                <li><strong>Scope Rulings (AD/CVD):</strong> Department of Commerce scope determinations for antidumping/countervailing duty orders</li>
                <li><strong>Prospective Rulings:</strong> Pre-importation rulings to reduce uncertainty and entry delays</li>
                <li><strong>Ruling Reconsideration:</strong> Challenge adverse CBP rulings through administrative review</li>
              </ul>
            </div>

            {/* Trade Compliance for Manufacturers California */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Trade Compliance for Manufacturers California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                California manufacturers face unique compliance challenges: <strong>first sale valuation</strong>, <strong>assists</strong> (molds/tools), <strong>drawback claims</strong>, <strong>USMCA Regional Value Content</strong>, and <strong>export controls on technical data</strong>. We design trade compliance for manufacturers California programs that optimize duty costs while maintaining regulatory compliance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li><strong>First Sale for Export:</strong> Two-tier transaction valuation to reduce customs duties on imported components</li>
                <li><strong>Assists Valuation:</strong> Proper apportionment of molds, tools, and engineering costs under 19 CFR § 152.103(d)</li>
                <li><strong>Manufacturing Drawback:</strong> 19 USC § 1313(a)/(b) claims for duty refunds on imported inputs</li>
                <li><strong>USMCA Qualification:</strong> Regional Value Content (RVC) calculations and Labor Value Content (LVC) documentation</li>
                <li><strong>Foreign Trade Zone (FTZ):</strong> Zone admission for duty deferral and inverted tariff savings</li>
                <li><strong>Deemed Export Controls:</strong> ITAR/EAR controls for foreign national access to technical data and source code</li>
                <li><strong>Transfer Pricing Customs Impact:</strong> Coordinate tax transfer pricing with customs valuation to avoid double taxation</li>
                <li><strong>Bill of Materials (BOM) Compliance:</strong> Origin tracking for USMCA certifications and Section 301 exclusions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why California Businesses Trust Our Compliance Practice
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry-Specific Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We've designed compliance programs for <strong>tech companies</strong> (EAR/encryption), <strong>manufacturers</strong> (drawback/FTZ), <strong>apparel importers</strong> (USMCA/Section 301), <strong>food importers</strong> (FDA/USDA), and <strong>defense contractors</strong> (ITAR). We understand your industry's unique regulatory landscape.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective Implementation</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>fixed-fee compliance program packages</strong> tailored to business size. Small importers pay less than multinational corporations. Every program includes written policies, training materials, and 12 months of regulatory update support.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology Integration</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We integrate compliance controls into your existing systems (<strong>ERP, TMS, WMS</strong>) to automate screening and create audit trails. No need to hire dedicated compliance staff—your existing team can manage compliance with our tools.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Audit Defense Included</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                If CBP audits you despite your compliance efforts, we defend you at <strong>no additional charge for the first 20 hours</strong>. Our programs are designed to withstand CBP scrutiny, and we stand behind our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-primary-navy text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold font-garamond text-secondary-teal mb-2">150+</div>
              <div className="text-lg opacity-90">Compliance Programs Built</div>
            </div>
            <div>
              <div className="text-5xl font-bold font-garamond text-secondary-teal mb-2">$45M+</div>
              <div className="text-lg opacity-90">Duties Saved Through Optimization</div>
            </div>
            <div>
              <div className="text-5xl font-bold font-garamond text-secondary-teal mb-2">98%</div>
              <div className="text-lg opacity-90">Audit Pass Rate for Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold font-garamond text-secondary-teal mb-2">24hr</div>
              <div className="text-lg opacity-90">Response for Prior Disclosures</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Services & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Related Services */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Related Practice Areas</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#customs-defense-litigation" className="text-secondary-teal hover:text-primary-navy font-medium flex items-center gap-2">
                    <span>→</span> Customs Defense & Litigation
                  </a>
                  <p className="text-sm text-text-secondary mt-1">When compliance fails, we defend you</p>
                </li>
                <li>
                  <a href="#export-controls-sanctions" className="text-secondary-teal hover:text-primary-navy font-medium flex items-center gap-2">
                    <span>→</span> Export Controls & Sanctions
                  </a>
                  <p className="text-sm text-text-secondary mt-1">ITAR/EAR/OFAC compliance programs</p>
                </li>
                <li>
                  <a href="#practice-areas" className="text-secondary-teal hover:text-primary-navy font-medium flex items-center gap-2">
                    <span>→</span> All Practice Areas
                  </a>
                  <p className="text-sm text-text-secondary mt-1">Full range of international trade services</p>
                </li>
              </ul>
            </div>

            {/* Location Pages */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Serving California Businesses</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#los-angeles-port-customs-attorney" className="text-secondary-teal hover:text-primary-navy font-medium flex items-center gap-2">
                    <span>→</span> Los Angeles & Long Beach Port
                  </a>
                  <p className="text-sm text-text-secondary mt-1">Compliance programs for LA/LB importers</p>
                </li>
                <li>
                  <a href="#bay-area-trade-law-attorney" className="text-secondary-teal hover:text-primary-navy font-medium flex items-center gap-2">
                    <span>→</span> San Francisco & Bay Area
                  </a>
                  <p className="text-sm text-text-secondary mt-1">Tech company compliance programs</p>
                </li>
              </ul>
            </div>

            {/* Industry Focus */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Compliance Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#technology-electronics-trade-attorney" className="text-secondary-teal hover:text-primary-navy font-medium flex items-center gap-2">
                    <span>→</span> Technology & Electronics
                  </a>
                  <p className="text-sm text-text-secondary mt-1">Export compliance for tech companies</p>
                </li>
                <li>
                  <a href="#apparel-textiles-trade-attorney" className="text-secondary-teal hover:text-primary-navy font-medium flex items-center gap-2">
                    <span>→</span> Apparel & Textiles
                  </a>
                  <p className="text-sm text-text-secondary mt-1">UFLPA supply chain compliance</p>
                </li>
                <li>
                  <a href="#food-agriculture-trade-attorney" className="text-secondary-teal hover:text-primary-navy font-medium flex items-center gap-2">
                    <span>→</span> Food & Agriculture
                  </a>
                  <p className="text-sm text-text-secondary mt-1">FDA/USDA import compliance</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Helpful Guides */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides & Resources</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <a href="#tariffs-classification-guide" className="block p-4 bg-neutral-50 rounded-lg hover:bg-secondary-teal/10 transition-colors">
                <h4 className="font-bold text-primary-navy mb-2">Tariff Classification Guide</h4>
                <p className="text-sm text-text-secondary">Master HTS classification best practices</p>
              </a>
              <a href="#section-301-tariffs-guide" className="block p-4 bg-neutral-50 rounded-lg hover:bg-secondary-teal/10 transition-colors">
                <h4 className="font-bold text-primary-navy mb-2">Section 301 Tariffs Guide</h4>
                <p className="text-sm text-text-secondary">Strategies for China tariff mitigation</p>
              </a>
              <a href="#uflpa-compliance-guide" className="block p-4 bg-neutral-50 rounded-lg hover:bg-secondary-teal/10 transition-colors">
                <h4 className="font-bold text-primary-navy mb-2">UFLPA Compliance Guide</h4>
                <p className="text-sm text-text-secondary">Build UFLPA-compliant supply chains</p>
              </a>
              <a href="#glossary" className="block p-4 bg-neutral-50 rounded-lg hover:bg-secondary-teal/10 transition-colors">
                <h4 className="font-bold text-primary-navy mb-2">Trade Law Glossary</h4>
                <p className="text-sm text-text-secondary">Definitions of key compliance terms</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
            Build Your Trade Compliance Program Today
          </h2>
          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Don't wait for a CBP audit to implement compliance controls. Contact our trade compliance California team for a free risk assessment and program design consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
              Schedule Free Consultation
            </Button>
            <Button href="tel:+16317468290" variant="outline">
              Call (631) 746-8290
            </Button>
          </div>
        </div>
      </section>

      {/* Evaluation Form */}
      <EvaluationForm theme="light" />
    </div>
  );
};

export default RegulatoryCompliancePage;
