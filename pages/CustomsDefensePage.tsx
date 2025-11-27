
import React, { useEffect } from 'react';
import EvaluationForm from '../components/EvaluationForm';
import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateServiceSchema } from '../utils/seo';

const CustomsDefensePage: React.FC = () => {
  useMeta({
    title: 'Customs Defense Attorney CA & USA | CBP Investigation Defense',
    description: 'Expert customs defense attorney for California & USA. CBP investigation defense, customs audits, penalty mitigation, seizures, import detention release, customs litigation, fraud defense, False Claims Act, whistleblower cases & export violations defense. Call 631-746-8290.',
    canonical: 'customs-defense-litigation',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-customs-defense.jpg`,
    schema: [
      generateWebPageSchema({
        title: 'Customs Defense & Litigation Attorney California - CBP Investigation Defense',
        description: 'Aggressive customs defense representation for California businesses facing CBP investigations, audits, penalties, seizures, and trade litigation.',
        url: `${siteConfig.siteUrl}/#customs-defense-litigation`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Practice Areas', url: `${siteConfig.siteUrl}/#practice-areas` },
        { name: 'Customs Defense & Litigation', url: `${siteConfig.siteUrl}/#customs-defense-litigation` }
      ]),
      generateServiceSchema({
        name: 'California Customs Defense & CBP Investigation Legal Services',
        description: 'Comprehensive customs defense attorney California services including CBP investigation defense, customs audits defense, CBP penalty mitigation, customs seizures defense, import detention release, California customs litigation, customs fraud defense, False Claims Act defense, whistleblower trade cases defense, and export violations defense for California importers and exporters.',
        serviceType: 'Customs Defense & Litigation',
        url: `${siteConfig.siteUrl}/#customs-defense-litigation`,
      }),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-montserrat text-neutral-darkGray bg-white">

      {/* Hero Section */}
      <section className="hero" aria-label="Customs Defense Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Customs Defense Attorney California<br />& USA | CBP Investigation Defense</h1>
          <p className="hero-subtitle">
            Expert customs audits defense, CBP penalty mitigation, customs seizures, import detention release & customs litigation. Aggressive defense against False Claims Act, whistleblower trade cases & export violations. Protecting California & USA businesses when stakes are highest.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#schedule-consultation" className="hero-cta">Free Defense Consultation</a>
            <a href="tel:+16317468290" className="hero-cta-outline">Call (631) 746-8290</a>
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

      {/* When You Need a Customs Defense Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              When CBP Targets Your Business
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              U.S. Customs and Border Protection has <strong>immense enforcement power</strong>. They can seize your cargo, freeze your customs bond, assess penalties exceeding the value of your goods, and even pursue criminal charges. When CBP comes after you, you need a customs defense attorney California who knows how to fight back.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-primary-navy mb-6 font-garamond">The Government's Arsenal</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold text-2xl mr-3">•</span>
                  <div>
                    <strong className="text-primary-navy">19 USC § 1592 Penalties:</strong> Up to 4x the loss of duty or the domestic value of the goods for fraud
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold text-2xl mr-3">•</span>
                  <div>
                    <strong className="text-primary-navy">Seizures & Forfeitures:</strong> CBP can confiscate cargo worth millions based on suspicion alone
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold text-2xl mr-3">•</span>
                  <div>
                    <strong className="text-primary-navy">Bond Insufficiency:</strong> Your customs bond can be revoked, halting all import operations
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold text-2xl mr-3">•</span>
                  <div>
                    <strong className="text-primary-navy">Criminal Prosecution:</strong> Smuggling, false statements, and export violations carry prison time
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary-navy mb-6 font-garamond">Our Defense Strategy</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold text-2xl mr-3">✓</span>
                  <div>
                    <strong className="text-primary-navy">Immediate Response:</strong> We file Prior Disclosures to cap liability before CBP finds violations
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold text-2xl mr-3">✓</span>
                  <div>
                    <strong className="text-primary-navy">Penalty Mitigation:</strong> We negotiate settlements reducing six-figure penalties to nominal amounts
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold text-2xl mr-3">✓</span>
                  <div>
                    <strong className="text-primary-navy">Seizure Release:</strong> We file petitions and post bonds to recover detained cargo quickly
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-teal font-bold text-2xl mr-3">✓</span>
                  <div>
                    <strong className="text-primary-navy">Trade Litigation:</strong> We sue CBP in the Court of International Trade when they violate the law
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Defense Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Customs Defense Services
          </h2>

          <div className="space-y-6">
            {/* Customs Audits Defense */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Audits California - Focused Assessment Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP's Regulatory Audit Division conducts <strong><a href="#article/cbp-focused-assessments" className="text-secondary-teal hover:text-primary-navy font-semibold">Focused Assessments (FA)</a>, Quick Response Audits (QRA), and Compliance Surveys</strong> to stress-test your internal controls. If they find high error rates or systemic failures, you face expanded audits, mandatory Compliance Improvement Plans (CIPs), and potential penalties. As your customs audits California defense attorney, we manage the audit process from <a href="#article/cbp-focused-assessment-survival-guide-california" className="text-secondary-teal hover:text-primary-navy font-semibold">PAS through final report</a>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary pl-4">
                <li><strong>Pre-Assessment Survey (PAS) Management:</strong> Control data production to limit scope</li>
                <li><strong><a href="#article/reasonable-care-standard-california-importers" className="text-secondary-teal hover:text-primary-navy">Reasonable Care Defense</a>:</strong> Prove your internal controls meet the legal standard</li>
                <li><strong>Shadow Audits:</strong> We audit your entries before CBP does to identify and fix errors</li>
                <li><strong><a href="#article/prior-disclosure-timing-strategies-california" className="text-secondary-teal hover:text-primary-navy">Prior Disclosure Filings</a>:</strong> Cap liability at interest-only if violations are found</li>
                <li><strong>Acceptable Risk Advocacy:</strong> Negotiate final audit reports to avoid "Unacceptable Risk" findings</li>
              </ul>
            </div>

            {/* CBP Investigation Defense */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Investigation Defense California - Criminal & Civil Enforcement</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP's Office of Field Operations (OFO) or Homeland Security Investigations (HSI) opens a <strong>criminal or civil investigation</strong>, your business and personal freedom are at risk. Investigations often involve search warrants, subpoenas, witness interviews, and grand juries. We provide CBP investigation defense California services to protect your rights and build a defense strategy.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary pl-4">
                <li><strong>Search Warrant Response:</strong> Protect privileged documents and limit scope of government searches</li>
                <li><strong>Subpoena Defense:</strong> Challenge overbroad document requests and protect trade secrets</li>
                <li><strong>Target Letter Response:</strong> Negotiate with prosecutors to avoid indictment</li>
                <li><strong>Parallel Proceedings:</strong> Coordinate civil penalty defense with criminal defense strategies</li>
                <li><strong>Sentencing Advocacy:</strong> Seek downward departures and alternatives to incarceration</li>
              </ul>
            </div>

            {/* CBP Penalty Mitigation */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Penalty Mitigation California - 19 USC § 1592 Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP assesses <a href="#article/customs-penalties-1592" className="text-secondary-teal hover:text-primary-navy font-semibold">civil penalties under 19 USC § 1592</a> for material false statements or omissions. Penalties range from 20% of the value (negligence) to 100% of domestic value (fraud). We provide <strong><a href="#article/section-1592-penalties-california-defense" className="text-secondary-teal hover:text-primary-navy">CBP penalty mitigation California</a></strong> services to challenge CBP's legal theories, reduce culpability findings, and negotiate settlements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary pl-4">
                <li><strong>Culpability Challenges:</strong> Downgrade Fraud to Gross Negligence or Negligence</li>
                <li><strong>Reasonable Care Affirmative Defense:</strong> Prove you exercised reasonable care</li>
                <li><strong>Petitions for Mitigation:</strong> File under 19 CFR Part 171 for leniency factors</li>
                <li><strong>Offers in Compromise:</strong> Settle for pennies on the dollar based on inability to pay</li>
                <li><strong>Administrative Appeals:</strong> Appeal penalty assessments to CBP headquarters</li>
              </ul>
            </div>

            {/* Customs Seizures & Import Detention Release */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Seizures California & Import Detention Release</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP seizes goods for intellectual property violations, <a href="#article/forced-labor-compliance" className="text-secondary-teal hover:text-primary-navy font-semibold">forced labor concerns (UFLPA)</a>, agricultural non-compliance, or suspected smuggling. Seized cargo is <strong>presumed forfeited</strong> unless you file a claim and prove admissibility within strict deadlines. We handle <strong><a href="#article/cbp-seizure-forfeiture-defense-california" className="text-secondary-teal hover:text-primary-navy">customs seizures California</a></strong> and <strong>import detention release California</strong> cases daily.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary pl-4">
                <li><strong><a href="#article/uflpa-detention-response-california-apparel" className="text-secondary-teal hover:text-primary-navy">UFLPA Detention Defense</a>:</strong> Overcome "rebuttable presumption" for Xinjiang goods</li>
                <li><strong>Trademark/Copyright Defense:</strong> Prove goods are genuine or licensed</li>
                <li><strong><a href="#article/customs-bond-requirements-california-importers" className="text-secondary-teal hover:text-primary-navy">Redelivery Bond Posting</a>:</strong> Secure conditional release while case is pending</li>
                <li><strong>Administrative Forfeiture Challenges:</strong> File claims to contest forfeiture</li>
                <li><strong>Judicial Forfeiture Litigation:</strong> Sue in federal court to recover high-value cargo</li>
              </ul>
            </div>

            {/* California Customs Litigation */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">California Customs Litigation - Court of International Trade</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP denies your protest, refuses to release seized goods, or issues an unlawful ruling, <strong>litigation is the only remedy</strong>. We litigate <strong>California customs litigation</strong> cases in the <a href="#article/us-cit-litigation" className="text-secondary-teal hover:text-primary-navy font-semibold">U.S. Court of International Trade (CIT)</a> in New York, the specialized federal court with exclusive jurisdiction over customs disputes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary pl-4">
                <li><strong>19 USC § 1514 Protests:</strong> Challenge <a href="#article/tariff-classification" className="text-secondary-teal hover:text-primary-navy">CBP liquidations and classifications</a></li>
                <li><strong><a href="#article/antidumping-cvd" className="text-secondary-teal hover:text-primary-navy">AD/CVD Litigation</a>:</strong> Appeal dumping margin determinations</li>
                <li><strong>Refund Suits:</strong> Recover overpaid duties going back 5 years</li>
                <li><strong>Injunctive Relief:</strong> Stop unlawful CBP actions before they cause irreparable harm</li>
                <li><strong>Appellate Practice:</strong> Appeal CIT decisions to the Federal Circuit</li>
              </ul>
            </div>

            {/* Customs Fraud Defense */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Fraud Defense California - Federal Criminal Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP refers serious cases to the U.S. Attorney for <strong>criminal prosecution under 18 USC § 542 (smuggling), § 1001 (false statements), and § 545 (import violations)</strong>. Convictions carry prison time, fines, and permanent exclusion from importing. We provide <strong>customs fraud defense California</strong> services with an emphasis on early resolution and avoiding indictment.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary pl-4">
                <li><strong>Grand Jury Defense:</strong> Prepare witnesses and assert privileges</li>
                <li><strong>Proffer Sessions:</strong> Negotiate cooperation agreements with prosecutors</li>
                <li><strong>Trial Defense:</strong> Challenge government evidence and expert testimony</li>
                <li><strong>Sentencing Advocacy:</strong> Seek probation and home confinement</li>
                <li><strong>Parallel Civil Defense:</strong> Coordinate criminal and civil strategies</li>
              </ul>
            </div>

            {/* False Claims Act & Whistleblower Cases */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">False Claims Act Customs California & Whistleblower Trade Cases</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The <strong><a href="#article/false-claims-act-whistleblower-defense-california" className="text-secondary-teal hover:text-primary-navy font-semibold">False Claims Act (FCA)</a></strong> allows whistleblowers (relators) to sue importers on behalf of the U.S. government for <strong>underpayment of duties</strong>. FCA cases are filed under seal, and you may not know you're under investigation until the DOJ intervenes. Damages include treble damages plus penalties of $11,000+ per false claim. We defend <strong>False Claims Act customs California</strong> and <strong>whistleblower trade cases California</strong>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary pl-4">
                <li><strong>Seal Period Strategy:</strong> Conduct internal investigation before government decides to intervene</li>
                <li><strong>Intervention Opposition:</strong> Persuade DOJ to decline the case</li>
                <li><strong>Motion to Dismiss:</strong> Challenge relator's legal theories and factual allegations</li>
                <li><strong>Settlement Negotiations:</strong> Resolve cases for less than the cost of litigation</li>
                <li><strong>Trial Defense:</strong> Prove reasonable care and lack of scienter</li>
              </ul>
            </div>

            {/* Export Violations Defense */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Export Violations Defense California - BIS & DDTC Enforcement</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Exporting controlled goods or technology without proper authorization violates the <strong><a href="#article/ear-compliance" className="text-secondary-teal hover:text-primary-navy font-semibold">Export Administration Regulations (EAR)</a></strong> and <strong><a href="#article/itar-compliance" className="text-secondary-teal hover:text-primary-navy font-semibold">International Traffic in Arms Regulations (ITAR)</a></strong>. BIS and DDTC can impose <strong>$300,000+ fines per violation, denial of export privileges, and criminal prosecution</strong>. We provide <strong>export violations defense California</strong> services. Learn more about our <a href="#export-controls-sanctions" className="text-secondary-teal hover:text-primary-navy font-semibold">Export Controls & Sanctions practice</a>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary pl-4">
                <li><strong><a href="#article/voluntary-self-disclosure-export-violations-california" className="text-secondary-teal hover:text-primary-navy">Voluntary Self-Disclosure (VSD)</a>:</strong> Come forward before BIS discovers the violation</li>
                <li><strong>Charging Letter Response:</strong> Challenge BIS's legal theories and penalty calculations</li>
                <li><strong>Settlement Negotiations:</strong> Reduce penalties and avoid Denied Persons List</li>
                <li><strong>DDTC Consent Agreements:</strong> Resolve ITAR violations with State Department</li>
                <li><strong>Criminal Export Defense:</strong> Defend against smuggling and export control charges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Businesses Trust Our Customs Defense Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary-teal mb-4">$15M+</div>
              <h3 className="text-xl font-bold text-primary-navy mb-3">Penalties Mitigated</h3>
              <p className="text-text-secondary">We've saved clients millions in penalties through aggressive defense and strategic negotiations.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-secondary-teal mb-4">95%</div>
              <h3 className="text-xl font-bold text-primary-navy mb-3">Seizure Release Rate</h3>
              <p className="text-text-secondary">We successfully release detained cargo in 95% of cases through admissibility packages and redelivery bonds.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-secondary-teal mb-4">24hr</div>
              <h3 className="text-xl font-bold text-primary-navy mb-3">Emergency Response</h3>
              <p className="text-text-secondary">We respond to customs emergencies within 24 hours to protect your cargo and business operations.</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Related Practice Areas</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <a href="#regulatory-compliance-advisory" className="service-link">
                      <span className="service-link__title">Trade Compliance Programs</span>
                      <p className="service-link__description">Prevent issues before they become enforcement actions</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#export-controls-sanctions" className="service-link">
                      <span className="service-link__title">Export Controls & Sanctions</span>
                      <p className="service-link__description">ITAR/EAR compliance and BIS enforcement defense</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#practice-areas" className="service-link">
                      <span className="service-link__title">All Practice Areas</span>
                      <p className="service-link__description">Full range of international trade services</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Location Pages */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Serving California Ports</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <a href="#los-angeles-port-customs-attorney" className="service-link">
                      <span className="service-link__title">Los Angeles & Long Beach Port</span>
                      <p className="service-link__description">CBP defense for LA/LB port importers</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#bay-area-trade-law-attorney" className="service-link">
                      <span className="service-link__title">San Francisco & Bay Area</span>
                      <p className="service-link__description">Oakland port and tech company defense</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Industry Focus */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Industry Expertise</h3>
              <ul className="space-y-3">
                <li>
                  <div className="service-link-item">
                    <a href="#technology-electronics-trade-attorney" className="service-link">
                      <span className="service-link__title">Technology & Electronics</span>
                      <p className="service-link__description">Section 301 and classification disputes</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#apparel-textiles-trade-attorney" className="service-link">
                      <span className="service-link__title">Apparel & Textiles</span>
                      <p className="service-link__description">UFLPA and forced labor defense</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="service-link-item">
                    <a href="#food-agriculture-trade-attorney" className="service-link">
                      <span className="service-link__title">Food & Agriculture</span>
                      <p className="service-link__description">FDA/USDA detention release</p>
                      <div className="triangle-slide">
                        <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Helpful Guides */}
          <div className="bg-white p-8 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 font-garamond text-center">Helpful Guides & Resources</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <a href="#article/cbp-focused-assessment-survival-guide-california" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">CBP Audit Survival Guide</h4>
                <p className="text-sm text-text-secondary">How to prepare for and survive a Focused Assessment</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#resources/section-301-tariffs-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">Section 301 Tariffs Guide</h4>
                <p className="text-sm text-text-secondary">Navigate China tariffs and exclusion strategies</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#resources/uflpa-compliance-guide" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">UFLPA Compliance Guide</h4>
                <p className="text-sm text-text-secondary">Forced labor detention defense strategies</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
              <a href="#trade-law-faq" className="card-link">
                <h4 className="font-bold text-primary-navy mb-2">FAQ Center</h4>
                <p className="text-sm text-text-secondary">Answers to common customs defense questions</p>
                <div className="triangle-slide">
                  <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6">
            Don't Face CBP Alone
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            When CBP targets your business with investigations, audits, penalties, or seizures, you need a customs defense attorney California who knows how to fight back. Contact us for aggressive representation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="#schedule-consultation" variant="solid">
              Schedule Free Defense Consultation
            </Button>
            <Button href="tel:+16317468290" variant="outline">
              Call (631) 746-8290
            </Button>
          </div>
        </div>
      </section>

      {/* Evaluation Form */}
      <EvaluationForm theme="light" />
    </main>
  );
};

export default CustomsDefensePage;
