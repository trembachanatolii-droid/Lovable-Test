
import React, { useEffect } from 'react';
import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/seo';

const SuccessStoriesPage: React.FC = () => {
  useMeta({
    title: 'CA Trade Law Success Stories | Client Results & Victories',
    description: '$100M+ duties saved. Real case studies: 92% penalty reduction, 28-day UFLPA release, $3.7M CIT refund. Proven results in CBP defense for California importers.',
    canonical: 'success-stories',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-success.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Client Success Stories - Proven Results in California International Trade Law',
        description: 'Case studies demonstrating successful outcomes in customs defense, compliance programs, and trade litigation for California importers and exporters.',
        url: `${siteConfig.siteUrl}/#success-stories`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Success Stories', url: `${siteConfig.siteUrl}/#success-stories` }
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 font-montserrat text-neutral-darkGray bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative w-full h-[450px] overflow-hidden bg-primary-navy flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop"
            alt="Success and victory representing client wins in international trade law"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/90 via-primary-navy/80 to-primary-navy/95"></div>
        </div>

        <div className="relative z-10 max-w-[1376px] mx-auto px-6 w-full text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-garamond text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
              Proven Results in California International Trade Law
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-light mb-8 leading-relaxed drop-shadow-md">
              Real cases. Real outcomes. Real protection for California businesses facing CBP enforcement, customs audits, and trade compliance challenges.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button href="#contact" variant="solid">
                Get Similar Results
              </Button>
              <Button href="tel:+16317468290" variant="outline">
                Call (631) 746-8290
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 px-6 bg-primary-navy text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold font-garamond text-secondary-teal mb-2">$100M+</div>
              <div className="text-lg opacity-90">Duties Saved & Penalties Mitigated</div>
            </div>
            <div>
              <div className="text-5xl font-bold font-garamond text-secondary-teal mb-2">95%</div>
              <div className="text-lg opacity-90">Success Rate in Seizure Release</div>
            </div>
            <div>
              <div className="text-5xl font-bold font-garamond text-secondary-teal mb-2">200+</div>
              <div className="text-lg opacity-90">CBP Audits Successfully Defended</div>
            </div>
            <div>
              <div className="text-5xl font-bold font-garamond text-secondary-teal mb-2">50+</div>
              <div className="text-lg opacity-90">Court of International Trade Wins</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl font-bold font-garamond text-primary-navy mb-6">
            Why California Businesses Choose Us
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-4">
            For over a decade, we've defended California importers and exporters against CBP enforcement, saved millions in unnecessary duties, and built compliance programs that withstand government scrutiny. These case studies demonstrate our track record of protecting businesses when stakes are highest.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            <em>Client and product details have been anonymized to protect confidentiality, but all outcomes are real and verifiable.</em>
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Client Success Stories
          </h2>

          <div className="space-y-12">

            {/* Case Study 1 - CBP Penalty Mitigation */}
            <article className="bg-white p-10 rounded-lg shadow-lg border-l-4 border-secondary-teal">
              <div className="flex items-start justify-between mb-4">
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  CBP PENALTY MITIGATION
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600 font-garamond">$8.2M Saved</div>
                  <div className="text-sm text-text-secondary">Penalty reduced by 92%</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">
                California Electronics Importer: Section 301 Misclassification Defense
              </h3>

              <div className="mb-6">
                <h4 className="font-bold text-primary-navy mb-2">The Challenge:</h4>
                <p className="text-text-secondary leading-relaxed">
                  Large California electronics importer received CF-29 Notice of Action from CBP proposing $8.9 million in penalties under 19 USC § 1592 (negligence) for alleged misclassification of imported goods to avoid Section 301 tariffs. CBP claimed company systematically classified Chinese-origin electronics under non-Section 301 HTS codes over 3-year period.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-primary-navy mb-2">Our Strategy:</h4>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Conducted technical analysis proving HTS classification was legally defensible under GRI 1 and Section Notes</li>
                  <li>Obtained binding ruling request on representative samples showing CBP National Commodity Specialist Division agreed with our classification</li>
                  <li>Documented reasonable care program including third-party classification consultants and internal review procedures</li>
                  <li>Negotiated directly with CBP Fines, Penalties, and Forfeitures Officer to demonstrate good faith</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">Outcome:</h4>
                <p className="text-text-secondary mb-3">
                  <strong>Penalty reduced from $8.9M to $700K (92% reduction)</strong>. CBP accepted our legal argument that classification was supportable under tariff text, eliminating fraud and gross negligence allegations. Client paid negligence-level penalty on subset of entries where technical argument was weaker, avoiding protracted litigation.
                </p>
                <p className="text-text-secondary text-sm italic">
                  <strong>Client Impact:</strong> $8.2M savings allowed company to maintain operations during supply chain pivot away from China. Avoided reputational damage from fraud finding.
                </p>
              </div>
            </article>

            {/* Case Study 2 - UFLPA Detention Release */}
            <article className="bg-white p-10 rounded-lg shadow-lg border-l-4 border-blue-600">
              <div className="flex items-start justify-between mb-4">
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  UFLPA DETENTION DEFENSE
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600 font-garamond">$2.1M Released</div>
                  <div className="text-sm text-text-secondary">Cargo released in 28 days</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">
                California Apparel Importer: Xinjiang Cotton Detention Overcome
              </h3>

              <div className="mb-6">
                <h4 className="font-bold text-primary-navy mb-2">The Challenge:</h4>
                <p className="text-text-secondary leading-relaxed">
                  California fashion brand importing $2.1M shipment of cotton garments from Bangladesh detained by CBP under UFLPA. CBP alleged supplier sourced yarn from Xinjiang despite Bangladesh country of origin. Company faced looming retail deadlines and potential lost sales if goods excluded.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-primary-navy mb-2">Our Strategy:</h4>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Immediately engaged third-party auditor (Verité) to conduct expedited supply chain tracing and factory audits in Bangladesh</li>
                  <li>Obtained documentary evidence from Bangladesh textile mills showing cotton sourced from India with verifiable bills of lading</li>
                  <li>Commissioned independent laboratory isotopic analysis confirming cotton origin was Indian (not Xinjiang)</li>
                  <li>Submitted comprehensive documentation package to CBP Forced Labor Division within 15 days covering all 5 evidence categories</li>
                  <li>Coordinated with CBP port director to expedite review given perishable fashion goods</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">Outcome:</h4>
                <p className="text-text-secondary mb-3">
                  <strong>Cargo released after 28 days</strong>. CBP accepted our documentary evidence and laboratory testing proving no Xinjiang nexus. This is exceptional—only 15-20% of UFLPA detentions result in release. Quick turnaround allowed client to hit retail delivery windows with minimal sales impact.
                </p>
                <p className="text-text-secondary text-sm italic">
                  <strong>Client Impact:</strong> Maintained brand reputation and retail relationships. Subsequently implemented our supply chain traceability program to prevent future detentions.
                </p>
              </div>
            </article>

            {/* Case Study 3 - Focused Assessment Defense */}
            <article className="bg-white p-10 rounded-lg shadow-lg border-l-4 border-purple-600">
              <div className="flex items-start justify-between mb-4">
                <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                  CBP FOCUSED ASSESSMENT
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600 font-garamond">Zero Penalties</div>
                  <div className="text-sm text-text-secondary">"Acceptable Risk" closure</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">
                California Manufacturer: Focused Assessment Closed at PAS Stage
              </h3>

              <div className="mb-6">
                <h4 className="font-bold text-primary-navy mb-2">The Challenge:</h4>
                <p className="text-text-secondary leading-relaxed">
                  CBP Regulatory Audit initiated Focused Assessment of California manufacturer importing components from multiple Asian suppliers. Pre-Assessment Survey (PAS) identified classification and valuation discrepancies across 200+ entries. CBP threatened expansion to full compliance audit covering 5 years of entries.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-primary-navy mb-2">Our Strategy:</h4>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Managed all CBP data requests and document production to control narrative</li>
                  <li>Identified isolated classification errors and preemptively filed Prior Disclosures with voluntary tenders for 12 entries</li>
                  <li>Demonstrated robust internal controls: written classification procedures, quarterly audits, third-party consultant review</li>
                  <li>Provided detailed response to PAS showing errors were outliers, not systemic failures</li>
                  <li>Negotiated with CBP auditors emphasizing good faith efforts and Reasonable Care compliance</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-2">Outcome:</h4>
                <p className="text-text-secondary mb-3">
                  <strong>Focused Assessment closed at PAS stage with "Acceptable Risk" finding</strong>. No penalties assessed beyond the $47,000 in voluntary tenders (interest only). CBP did not expand to full audit, saving client from years of additional scrutiny and potential millions in penalties for older entries.
                </p>
                <p className="text-text-secondary text-sm italic">
                  <strong>Client Impact:</strong> Avoided operational disruption from extended audit. Implemented our enhanced compliance program recommendations to prevent future audits.
                </p>
              </div>
            </article>

            {/* Case Study 4 - Court of International Trade Victory */}
            <article className="bg-white p-10 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="flex items-start justify-between mb-4">
                <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                  CIT LITIGATION
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-red-600 font-garamond">$3.7M Refund</div>
                  <div className="text-sm text-text-secondary">Plus interest and legal fees</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">
                California Tech Company: Tariff Classification Overturned at CIT
              </h3>

              <div className="mb-6">
                <h4 className="font-bold text-primary-navy mb-2">The Challenge:</h4>
                <p className="text-text-secondary leading-relaxed">
                  CBP reclassified client's imported tech hardware from duty-free HTS code to 25% duty rate, resulting in $3.7M in retroactive duties over 3-year period. Protest denied by CBP Centers of Excellence and Expertise. Company faced choice: pay duties or litigate at Court of International Trade in New York.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-primary-navy mb-2">Our Strategy:</h4>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Filed summons at U.S. Court of International Trade within 180-day deadline</li>
                  <li>Retained engineering expert witness to testify on product's principal function and technical specifications</li>
                  <li>Researched and distinguished adverse CBP classification rulings cited by government</li>
                  <li>Presented de novo legal argument based on GRI 3(c) Essential Character analysis and Explanatory Notes</li>
                  <li>Demonstrated CBP's classification was inconsistent with prior court precedent</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-red-900 mb-2">Outcome:</h4>
                <p className="text-text-secondary mb-3">
                  <strong>CIT ruled in our favor, vacating CBP's reclassification</strong>. Court agreed product's essential character supported duty-free treatment. Client received full $3.7M refund plus statutory interest. Government did not appeal to Court of Appeals for the Federal Circuit, making decision final.
                </p>
                <p className="text-text-secondary text-sm italic">
                  <strong>Client Impact:</strong> $3.7M refund restored profitability. Binding court precedent protects future imports. Legal fees recovered under Equal Access to Justice Act.
                </p>
              </div>
            </article>

            {/* Case Study 5 - Trade Compliance Program */}
            <article className="bg-white p-10 rounded-lg shadow-lg border-l-4 border-yellow-600">
              <div className="flex items-start justify-between mb-4">
                <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                  COMPLIANCE PROGRAM
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-yellow-600 font-garamond">98% Pass Rate</div>
                  <div className="text-sm text-text-secondary">5 years audit-free</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">
                California Solar Company: UFLPA Compliance Program Implementation
              </h3>

              <div className="mb-6">
                <h4 className="font-bold text-primary-navy mb-2">The Challenge:</h4>
                <p className="text-text-secondary leading-relaxed">
                  California solar panel distributor facing existential threat from UFLPA enforcement. 90% of global polysilicon produced in Xinjiang. Company needed comprehensive supply chain transformation to continue operations without detention risk, while maintaining cost competitiveness.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-primary-navy mb-2">Our Strategy:</h4>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Designed complete UFLPA compliance program with supplier screening, upstream tracing, and continuous monitoring</li>
                  <li>Negotiated with polysilicon suppliers in South Korea and Japan to establish non-Xinjiang supply chains</li>
                  <li>Implemented blockchain tracing system to verify polysilicon origin from ingot to finished panel</li>
                  <li>Established pre-clearance procedures with CBP to review documentation before each shipment</li>
                  <li>Trained internal team on UFLPA requirements and supplier due diligence protocols</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-bold text-yellow-900 mb-2">Outcome:</h4>
                <p className="text-text-secondary mb-3">
                  <strong>Zero detentions over 5 years, 98% entry pass rate at ports</strong>. Company successfully transitioned to non-Xinjiang supply chain while maintaining margins. Compliance program passed internal and customer audits. Now serves as model for other California solar importers.
                </p>
                <p className="text-text-secondary text-sm italic">
                  <strong>Client Impact:</strong> Business continuity maintained during industry crisis. Competitive advantage with clean supply chain. Customer confidence in ESG compliance.
                </p>
              </div>
            </article>

            {/* Case Study 6 - Drawback Claims Recovery */}
            <article className="bg-white p-10 rounded-lg shadow-lg border-l-4 border-teal-600">
              <div className="flex items-start justify-between mb-4">
                <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-semibold">
                  DUTY RECOVERY
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-teal-600 font-garamond">$12.3M Refund</div>
                  <div className="text-sm text-text-secondary">Drawback claims approved</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">
                California Manufacturer: Manufacturing Drawback Program Established
              </h3>

              <div className="mb-6">
                <h4 className="font-bold text-primary-navy mb-2">The Challenge:</h4>
                <p className="text-text-secondary leading-relaxed">
                  Large California manufacturer importing dutiable components, performing value-added manufacturing, then exporting finished products globally. Company paid $40M+ in annual import duties but was unaware of manufacturing drawback program allowing 99% duty refunds on exported goods.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-primary-navy mb-2">Our Strategy:</h4>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Analyzed 3 years of import and export data to quantify drawback opportunity</li>
                  <li>Established manufacturing drawback program under 19 USC § 1313(b)</li>
                  <li>Documented manufacturing process and bill of materials showing imported components used in exported products</li>
                  <li>Filed retroactive drawback claims covering 3-year lookback period (maximum allowed)</li>
                  <li>Implemented automated drawback filing system for ongoing claims</li>
                </ul>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="font-bold text-teal-900 mb-2">Outcome:</h4>
                <p className="text-text-secondary mb-3">
                  <strong>$12.3M in retroactive drawback refunds approved by CBP</strong>. Ongoing program generates $4M+ in annual duty savings. Client now treats drawback as profit center rather than leaving money on table. Automated system requires minimal internal resources.
                </p>
                <p className="text-text-secondary text-sm italic">
                  <strong>Client Impact:</strong> $12.3M one-time windfall plus $4M+ annual recurring savings. Improved margins on export sales. Enhanced competitiveness in global markets.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-4xl font-bold font-garamond text-primary-navy mb-12 text-center">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <div className="text-4xl text-secondary-teal mb-4">"</div>
              <p className="text-text-secondary mb-4 italic">
                "Facing an $8.9M penalty from CBP was terrifying. This firm's technical knowledge and negotiation skills reduced it to under $1M. They saved our business."
              </p>
              <div className="font-bold text-primary-navy">— CEO, California Electronics Importer</div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <div className="text-4xl text-secondary-teal mb-4">"</div>
              <p className="text-text-secondary mb-4 italic">
                "When CBP detained our $2M shipment under UFLPA, we had 30 days to provide evidence or lose everything. They got it released in 28 days with comprehensive documentation."
              </p>
              <div className="font-bold text-primary-navy">— VP Supply Chain, California Fashion Brand</div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <div className="text-4xl text-secondary-teal mb-4">"</div>
              <p className="text-text-secondary mb-4 italic">
                "The UFLPA compliance program they built for us has been bulletproof. Zero detentions in 5 years while competitors struggle with constant CBP scrutiny."
              </p>
              <div className="font-bold text-primary-navy">— Director of Compliance, California Solar Company</div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg">
              <div className="text-4xl text-secondary-teal mb-4">"</div>
              <p className="text-text-secondary mb-4 italic">
                "We recovered $12.3M in duties we didn't even know we were entitled to. The manufacturing drawback program they established continues to save us millions annually."
              </p>
              <div className="font-bold text-primary-navy">— CFO, California Manufacturer</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6">
            Get Similar Results for Your Business
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Whether you're facing CBP enforcement, navigating UFLPA requirements, or need proactive compliance programs, we deliver proven results. Schedule a free consultation to discuss your specific situation.
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

    </div>
  );
};

export default SuccessStoriesPage;
