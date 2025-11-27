
import React, { useEffect } from 'react';
import EvaluationForm from '../components/EvaluationForm';
import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generatePortServiceSchema } from '../utils/seo';

const LosAngelesPortPage: React.FC = () => {
  useMeta({
    title: 'Los Angeles Customs Attorney | Long Beach Port Lawyer CA',
    description: 'Los Angeles customs attorney & Long Beach port trade lawyer. California port customs lawyer for LA/Long Beach port complex. Serving Carson, Wilmington, San Pedro, Torrance, Compton, Vernon, Commerce. CBP defense, customs audits, trade compliance. Call (631) 746-8290.',
    canonical: 'los-angeles-port-customs-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-la-port.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Los Angeles & Long Beach Port Customs Attorney - California Port Trade Lawyer',
        description: 'Serving the LA/Long Beach port complex with expert customs defense, trade compliance, and import/export legal services.',
        url: `${siteConfig.siteUrl}/#los-angeles-port-customs-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/#california-offices` },
        { name: 'Los Angeles & Long Beach Port', url: `${siteConfig.siteUrl}/#los-angeles-port-customs-attorney` }
      ]),
      generatePortServiceSchema({
        portName: 'Port of Los Angeles & Port of Long Beach',
        cityName: 'Los Angeles',
        description: 'Comprehensive customs defense, trade compliance, and import/export legal representation for businesses operating through the Port of Los Angeles and Port of Long Beach. Expert Los Angeles customs attorney and Long Beach port trade lawyer services including CBP audits defense, customs seizures, tariff classification, USMCA compliance, and trade litigation.',
        url: `${siteConfig.siteUrl}/#los-angeles-port-customs-attorney`,
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
            src="https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=1920&auto=format&fit=crop"
            alt="Port of Los Angeles and Long Beach shipping containers and cranes at sunset"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/70 via-primary-navy/50 to-primary-navy/90"></div>
        </div>

        <div className="relative z-10 max-w-[1376px] mx-auto px-6 w-full text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold font-garamond text-white mb-6 tracking-tight leading-none drop-shadow-lg">
              Los Angeles & Long Beach Port Customs Attorney
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-light mb-8 max-w-2xl leading-relaxed drop-shadow-md">
              Expert California port customs lawyer serving the LA/Long Beach port complex - the nation's busiest gateway for international trade.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button href="#contact" variant="solid">
                Free Port Customs Consultation
              </Button>
              <Button href="tel:+16317468290" variant="outline">
                Call (631) 746-8290
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why LA/Long Beach Port Businesses Need Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              The Port Complex That Never Stops
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              The LA/Long Beach port complex handles <strong>40% of all U.S. container imports</strong>. This volume attracts intense CBP scrutiny. When your cargo is detained, every day costs money. You need a Los Angeles customs attorney who knows the ports, the CBP officers, and the law.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port-Specific Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                We handle CBP actions at <strong>Port of Los Angeles</strong> (POLA) and <strong>Port of Long Beach</strong> (POLB) daily. We know the local Centers of Excellence and Expertise (CEE), the exam sites, and the liquidation patterns.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response to Detentions</h3>
              <p className="text-text-secondary leading-relaxed">
                Cargo holds at LA/LB ports cost importers <strong>$200-$1,000+ per day</strong> in demurrage and storage. We file admissibility packages and Redelivery Bond requests immediately to get your goods released.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Trade Litigation Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                As a California port customs lawyer, we've litigated classification disputes, AD/CVD scope rulings, and penalty cases through the U.S. Court of International Trade with proven results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Port Businesses */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Services for LA/Long Beach Port Importers & Exporters
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Audits & CBP Investigations</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP's Regulatory Audit Division frequently targets high-volume LA/LB importers for Focused Assessments and Quick Response Audits. We defend you through the PAS (Pre-Assessment Survey), manage data production, and negotiate acceptable risk findings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense</li>
                <li>CF-28 Request for Information responses</li>
                <li>Prior Disclosure filings to cap penalties</li>
                <li>Penalty mitigation under 19 USC § 1592</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Import Detention & Seizure Release</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Containers detained at LA/LB for intellectual property violations, forced labor concerns (UFLPA), or missing documentation require immediate legal action. As your Long Beach port trade lawyer, we file admissibility packages within 30 days to overcome CBP presumptions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>UFLPA detention defense (Xinjiang goods)</li>
                <li>FDA/USDA import hold resolution</li>
                <li>Trademark/copyright infringement defense</li>
                <li>Redelivery Bond negotiation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification & HTS Disputes</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                LA/LB CBP officers liquidate millions of entries monthly. If they reclassify your goods at a higher duty rate, you have <strong>180 days to protest</strong>. We file legally defensible protests and litigate at the Court of International Trade when necessary.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Binding Ruling requests (NY/HQ rulings)</li>
                <li>19 USC § 1514 Protest preparation</li>
                <li>Post-Summary Corrections (PSC)</li>
                <li>Court of International Trade litigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Antidumping & Countervailing Duty (AD/CVD)</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                LA/LB is the primary entry point for goods subject to China AD/CVD orders. Cash deposit rates can exceed <strong>200%</strong>. We file Scope Rulings to exempt your products and defend against EAPA (evasion) investigations.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Scope Ruling requests to Department of Commerce</li>
                <li>EAPA defense (Enforce and Protect Act)</li>
                <li>Administrative Review representation</li>
                <li>Substantial transformation analysis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 Tariff Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Over <strong>60% of LA/LB imports</strong> come from China and face Section 301 tariffs (7.5%-25%). We help you engineer around these tariffs through legal classification strategies, supply chain restructuring, and exclusion requests.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tariff engineering for duty avoidance</li>
                <li>Substantial transformation opinions</li>
                <li>Section 301 exclusion petitions</li>
                <li>Third-country sourcing compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA & Free Trade Agreements</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Many LA/LB importers claim USMCA preference for Mexican goods or utilize other FTAs (KORUS, CAFTA-DR). CBP audits these claims aggressively. We conduct origin analyses, draft certifications, and defend verification requests (CF-28).
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA certification preparation</li>
                <li>Regional Value Content (RVC) calculations</li>
                <li>Verification defense (CF-28 responses)</li>
                <li>Free Trade Agreement qualification audits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Port Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Los Angeles Customs Attorney with National Reach</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                While we serve the LA/Long Beach port complex daily, our practice extends nationwide. We handle customs matters at every U.S. port and represent clients before federal agencies in Washington, D.C., and the Court of International Trade in New York.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry-Specific Knowledge</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We represent importers across every major industry flowing through LA/LB ports: <strong>electronics, apparel, automotive, furniture, chemicals, and consumer goods</strong>. We understand your supply chain, your margins, and your compliance challenges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response for Time-Sensitive Matters</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Port detentions and CBP holds require <strong>immediate action</strong>. We prioritize urgent matters and maintain direct communication with CBP officers, port directors, and filers' representatives to resolve issues quickly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective Representation</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services (protests, ruling requests, prior disclosures) and transparent hourly rates for litigation. No surprise bills. Free initial consultation to assess your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LA/Long Beach Local Area Knowledge - Truck Routes & Industrial Areas */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Deep Local Knowledge: LA/Long Beach Port Area
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              We know the <strong>Southern California logistics corridor</strong> inside and out. From truck routes to warehousing districts, our local expertise helps resolve customs issues faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Truck Routes & Corridors */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Major Truck Routes & Corridors</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Understanding the logistics network helps us coordinate with freight forwarders and expedite cargo releases:
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-secondary-teal font-bold">I-710</span>
                  <span>Long Beach Freeway - Primary port access, connects POLB/POLA to Inland Empire distribution centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-teal font-bold">I-110</span>
                  <span>Harbor Freeway - Connects San Pedro terminals to downtown LA and beyond</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-teal font-bold">SR-47</span>
                  <span>Terminal Island access route - Vincent Thomas Bridge to container terminals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-teal font-bold">I-405</span>
                  <span>San Diego Freeway - Alternative route connecting South Bay to OC warehousing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-teal font-bold">SR-91</span>
                  <span>Artesia Freeway - East-west corridor to Inland Empire (Ontario, Riverside)</span>
                </li>
              </ul>
            </div>

            {/* Industrial Areas & Warehousing */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industrial Areas & Warehousing Districts</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve importers and warehouses throughout Southern California's industrial zones:
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-secondary-teal font-bold">Carson/Rancho Dominguez</span>
                  <span>Major distribution hub - Watson Industrial Park, Dominguez Technology Center</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-teal font-bold">Vernon/Commerce</span>
                  <span>Food processing & consumer goods - 1,800+ businesses, bonded warehouses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-teal font-bold">Wilmington/San Pedro</span>
                  <span>Port-adjacent warehousing - CFS stations, transload facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-teal font-bold">Compton/Paramount</span>
                  <span>Light manufacturing & distribution - proximity to I-710/I-105 interchange</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-teal font-bold">Inland Empire</span>
                  <span>Ontario, Fontana, Riverside - massive fulfillment centers, FTZ operations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CBP Examination Sites & Breakdown Hotspots */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond">CBP Examination Sites & Common Breakdown Points</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">CBP Exam Facilities</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>SSA Terminal - Pier A, Long Beach</li>
                  <li>LBCT (Long Beach Container Terminal)</li>
                  <li>TraPac Terminal - Port of LA</li>
                  <li>APM Terminals - Pier 400</li>
                  <li>Everport Terminal Services</li>
                  <li>ITS (International Transportation Service)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Common Detention Points</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>X-ray inspection queues (24-72hr delays)</li>
                  <li>VACIS exam holds (radiation scanning)</li>
                  <li>Intensive exams (full devanning)</li>
                  <li>Agriculture inspections (USDA holds)</li>
                  <li>FDA detention (food/drug/cosmetics)</li>
                  <li>IPR seizures (trademark/copyright)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Demurrage Cost Zones</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Terminal storage: $150-$400/day after free time</li>
                  <li>Chassis rental: $75-$125/day</li>
                  <li>Per diem penalties escalate daily</li>
                  <li>Weekend/holiday surcharges apply</li>
                  <li>Long-dwell penalties after 5 days</li>
                  <li>We negotiate fee waivers where possible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities We Serve - Local SEO */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving All California Cities by Appointment
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'Los Angeles', 'Long Beach', 'Carson', 'Torrance', 'Wilmington', 'San Pedro',
              'Compton', 'Paramount', 'Vernon', 'Commerce', 'Huntington Beach', 'Irvine',
              'Ontario', 'Riverside', 'Fontana', 'San Bernardino', 'Anaheim', 'Santa Ana',
              'Costa Mesa', 'Newport Beach', 'Calabasas', 'Woodland Hills', 'Van Nuys', 'Burbank'
            ].map((city) => (
              <div key={city} className="bg-neutral-50 py-3 px-4 rounded-lg text-sm font-medium text-primary-navy hover:bg-secondary-teal hover:text-white transition-colors cursor-default">
                {city}
              </div>
            ))}
          </div>
          <p className="text-center text-text-secondary mt-6">
            <strong>Office:</strong> 27001 Agoura Road, Suite 350, Calabasas, CA 91301 | <strong>Phone:</strong> <a href={siteConfig.phoneTel} className="text-secondary-teal hover:underline">{siteConfig.phoneDisplay}</a>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6">
            Protect Your LA/Long Beach Port Operations
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Don't let CBP audits, detentions, or penalties disrupt your business. Contact our Los Angeles customs attorney and Long Beach port trade lawyer team for a free consultation.
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
      <EvaluationForm theme="light" />
    </div>
  );
};

export default LosAngelesPortPage;
