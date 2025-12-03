
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanDiegoTradeLitigationPage: React.FC = () => {
  useMeta({
    title: 'San Diego Trade Litigation Attorney | Court of International Trade',
    description: 'San Diego trade litigation attorney. Expert representation in Court of International Trade, CBP litigation, tariff disputes & AD/CVD cases. Port of San Diego access. (310) 744-1328.',
    keywords: 'trade litigation attorney san diego, court of international trade attorney san diego, customs litigation attorney san diego, tariff dispute attorney san diego, international trade lawyer san diego, cbp litigation attorney',
    canonical: 'san-diego-trade-litigation-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-sd-litigation.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Diego Trade Litigation Attorney - Court of International Trade Expert',
        description: 'San Diego trade litigation attorney providing expert representation in Court of International Trade, tariff classification disputes, AD/CVD litigation, and customs enforcement actions.',
        url: `${siteConfig.siteUrl}/san-diego-trade-litigation-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Diego Trade Litigation Attorney', url: `${siteConfig.siteUrl}/san-diego-trade-litigation-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What is the U.S. Court of International Trade?',
          answer: 'The U.S. Court of International Trade (CIT) is a federal court with exclusive jurisdiction over civil actions arising from import transactions and federal trade laws. The CIT hears cases involving customs duty disputes, tariff classification challenges, AD/CVD determinations, customs penalties, and agency actions by CBP, Commerce, and USTR. Located in New York City, the CIT is the primary forum for challenging adverse CBP decisions including protests denials, penalty assessments, and classification rulings. Our San Diego trade litigation attorneys represent clients nationwide in CIT proceedings.',
        },
        {
          question: 'When should I file a case in the Court of International Trade?',
          answer: 'You should consider CIT litigation when: (1) CBP denies your protest of classification, valuation, or penalty decisions, (2) Commerce issues unfavorable AD/CVD or scope rulings, (3) substantial duties are at stake making litigation economically viable, (4) you need judicial review of agency determinations, or (5) administrative remedies have been exhausted without success. CIT cases typically involve duty refunds exceeding $100,000, recurring classification issues affecting ongoing imports, or precedent-setting legal interpretations. Our San Diego attorneys evaluate whether litigation is cost-effective for your situation.',
        },
        {
          question: 'How long does Court of International Trade litigation take?',
          answer: 'CIT litigation typically takes 18-36 months from filing to final judgment. The timeline includes: summons filing (within statutory deadlines), complaint and answer (2-3 months), discovery and expert reports (6-12 months), summary judgment briefing (3-6 months), and trial or decision (6-12 months). Complex cases involving technical classification issues or Commerce determinations may take longer. Appeals to the Court of Appeals for the Federal Circuit add another 12-24 months. Our San Diego trade litigation team manages cases efficiently to minimize delays and costs.',
        },
        {
          question: 'What are the costs of trade litigation in federal court?',
          answer: 'Trade litigation costs vary based on case complexity but typically range from $75,000 to $300,000+ for full CIT proceedings. Costs include attorney fees, expert witness fees (technical experts, economists), filing fees, deposition expenses, and trial preparation. Simple classification cases may cost $75,000-$150,000, while complex AD/CVD or scope litigation can exceed $500,000. However, successful CIT litigation can recover millions in duties paid under protest, making it economically viable for high-value disputes. Our San Diego attorneys provide transparent fee estimates and cost-benefit analysis.',
        },
        {
          question: 'Can I recover attorney fees if I win my CIT case?',
          answer: 'Under the Equal Access to Justice Act (EAJA), prevailing parties in CIT cases can recover attorney fees from the government if: (1) the government\'s position was not substantially justified, and (2) the party meets small business size standards. EAJA fee awards are capped at $125/hour (adjusted for inflation to ~$200/hour) and require separate motion within 30 days of final judgment. Additionally, some customs statutes allow fee recovery for government bad faith. Our San Diego trade litigation attorneys pursue EAJA fees when applicable to offset client litigation costs.',
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
      <section className="hero" aria-label="San Diego Trade Litigation Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&auto=format&fit=crop"
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
          <h1>San Diego Trade Litigation Attorney<br />Court of International Trade Expert</h1>
          <p className="hero-subtitle">
            Expert trade litigation attorney serving San Diego importers and exporters. Court of International Trade representation, tariff classification disputes, AD/CVD litigation, and customs enforcement defense.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Trade Litigation */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Federal Court Litigation for Trade Disputes
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              When administrative remedies fail or significant duties are at stake, <strong>Court of International Trade litigation</strong> provides judicial review of agency decisions. Our San Diego trade litigation attorneys have recovered millions in duty refunds for clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Recover Duties Paid</h3>
              <p className="text-text-secondary leading-relaxed">
                Successful CIT litigation can recover <strong>millions in duties paid under protest</strong> when CBP denies your administrative protest. We handle classification, valuation, and penalty disputes.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Precedent for Future Imports</h3>
              <p className="text-text-secondary leading-relaxed">
                CIT judgments establish <strong>binding precedent</strong> for your ongoing imports, ensuring consistent treatment and predictable duty rates for years to come.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Independent Review</h3>
              <p className="text-text-secondary leading-relaxed">
                Federal judges provide <strong>independent, impartial review</strong> of agency decisions, applying de novo standard for classification and valuation disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Litigation Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Trade Litigation Services in San Diego
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Court of International Trade Litigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our San Diego trade litigation attorneys represent clients in the U.S. Court of International Trade for <strong>classification disputes, valuation challenges, penalty actions, and regulatory interpretations</strong>. We handle all phases from summons filing through trial and appellate review.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Tariff classification litigation (HTS disputes)</li>
                <li>Customs valuation challenges</li>
                <li>Penalty and forfeiture actions</li>
                <li>Country of origin determinations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Antidumping & Countervailing Duty Litigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                AD/CVD litigation involves complex economic and legal issues. Our San Diego team litigates <strong>Commerce Department determinations, scope rulings, and EAPA evasion cases</strong> in CIT and represents clients in administrative reviews.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>AD/CVD order scope litigation</li>
                <li>EAPA evasion investigation defense</li>
                <li>Administrative review challenges</li>
                <li>Circumvention inquiry litigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Customs Protest Litigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                When CBP denies your 19 USC § 1514 protest, you have <strong>180 days to file a CIT summons</strong>. Our San Diego attorneys litigate protest denials to recover duties paid and establish favorable precedent for future imports.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Classification protest litigation</li>
                <li>Valuation and duty rate challenges</li>
                <li>Country of origin protests</li>
                <li>Section 301/AD/CVD applicability</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 1581(i) Residual Jurisdiction</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                For trade matters not covered by other CIT jurisdictional sections, <strong>§ 1581(i) residual jurisdiction</strong> allows challenges to agency actions. Our San Diego team litigates USTR tariff determinations, regulatory interpretations, and novel trade issues.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 tariff challenges</li>
                <li>Section 232 national security tariffs</li>
                <li>USTR exclusion denials</li>
                <li>Regulatory interpretation disputes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Federal Circuit Appeals</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Appeals from CIT decisions go to the U.S. Court of Appeals for the Federal Circuit. Our San Diego trade litigation attorneys handle <strong>appellate briefing, oral argument, and Supreme Court petitions</strong> for precedent-setting cases.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Federal Circuit appellate practice</li>
                <li>Appellate brief drafting</li>
                <li>Oral argument preparation</li>
                <li>Certiorari petitions to Supreme Court</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Expert Witness Coordination</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Trade litigation often requires <strong>technical experts, industry witnesses, and economic experts</strong>. Our San Diego team coordinates expert reports, depositions, and trial testimony to support classification and valuation arguments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Technical expert identification and retention</li>
                <li>Expert report preparation and review</li>
                <li>Expert deposition defense</li>
                <li>Trial testimony preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from San Diego */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving San Diego & Southern California Importers
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* San Diego County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Diego County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve importers throughout San Diego County:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Diego', 'Chula Vista', 'Oceanside', 'Escondido',
                  'Carlsbad', 'El Cajon', 'Vista', 'San Marcos',
                  'Encinitas', 'National City', 'La Mesa', 'Santee',
                  'Poway', 'Del Mar', 'Solana Beach', 'Imperial Beach'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Southern California */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Southern California</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Representing importers across Southern California:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Los Angeles', 'Long Beach', 'Orange County', 'Riverside',
                  'San Bernardino', 'Irvine', 'Anaheim', 'Santa Ana',
                  'Ontario', 'Corona', 'Murrieta', 'Temecula',
                  'Palm Springs', 'Palm Desert', 'Indio', 'El Centro'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Nationwide */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Nationwide Trade Litigation Practice</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade (NY)</li>
                  <li>Court of Appeals (Federal Circuit)</li>
                  <li>U.S. Supreme Court</li>
                  <li>Federal District Courts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">California Ports</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of San Diego</li>
                  <li>Port of Los Angeles</li>
                  <li>Port of Long Beach</li>
                  <li>Port of Oakland</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Agencies</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Customs & Border Protection</li>
                  <li>Commerce Department (ITA)</li>
                  <li>USTR (Trade Representative)</li>
                  <li>International Trade Commission</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Trade Litigation */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why San Diego Importers Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">CIT Trial Experience</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We have <strong>extensive Court of International Trade experience</strong> including trials, summary judgment briefing, and oral arguments. Our attorneys understand CIT procedures, evidentiary standards, and judicial preferences.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Proven Results</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our San Diego clients have <strong>recovered millions in duty refunds</strong> through successful CIT litigation. We've won classification disputes, valuation challenges, and penalty reversals.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Cost-Effective Strategy</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We provide <strong>realistic cost-benefit analysis</strong> before filing CIT cases. Many cases settle during litigation at favorable terms. We pursue EAJA fee recovery when applicable to offset costs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technical Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Trade litigation requires deep understanding of <strong>tariff classification, customs valuation, AD/CVD law, and statutory interpretation</strong>. Our exclusive focus on trade law provides superior expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CIT Litigation Process */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Court of International Trade Litigation Process
          </h2>
          <div className="space-y-6">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3">1. Case Evaluation & Strategy</h3>
              <p className="text-text-secondary leading-relaxed">
                We evaluate your protest denial or agency determination, assess legal merits, estimate litigation costs ($75K-$300K+), and analyze potential duty recovery. We recommend litigation only when economically viable.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3">2. Summons Filing (Jurisdictional Deadline)</h3>
              <p className="text-text-secondary leading-relaxed">
                CIT summons must be filed within 180 days of protest denial (or other statutory deadlines). We file timely summons to preserve jurisdiction and commence the case.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3">3. Complaint & Government Answer</h3>
              <p className="text-text-secondary leading-relaxed">
                We file a detailed complaint stating claims and requested relief. The government (DOJ) files an answer and the administrative record. Early settlement discussions often occur.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3">4. Discovery & Expert Reports</h3>
              <p className="text-text-secondary leading-relaxed">
                Both parties exchange documents, take depositions, and file expert reports on classification, valuation, or economic issues. This phase typically takes 6-12 months.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3">5. Summary Judgment or Trial</h3>
              <p className="text-text-secondary leading-relaxed">
                Many CIT cases are decided on summary judgment based on the administrative record and briefs. Complex cases proceed to bench trial with witness testimony.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-3">6. Judgment & Appeals</h3>
              <p className="text-text-secondary leading-relaxed">
                After judgment, losing parties can appeal to the Federal Circuit. We handle appellate briefing and oral argument. Final judgments result in duty refunds or remand to CBP/Commerce.
              </p>
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

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#customs-protest-filing" className="service-link">
                    <span className="service-link__title">Customs Protest Filing</span>
                    <p className="service-link__description">19 USC § 1514 protests</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <Link to="/tariff-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification</span>
                    <p className="service-link__description">HTS analysis & rulings</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <a href="#antidumping-cvd-defense" className="service-link">
                    <span className="service-link__title">AD/CVD Defense</span>
                    <p className="service-link__description">Scope & EAPA matters</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/los-angeles-customs-attorney" className="service-link">
                    <span className="service-link__title">Los Angeles Port</span>
                    <p className="service-link__description">Port of LA/Long Beach</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/san-francisco-customs-attorney" className="service-link">
                    <span className="service-link__title">San Francisco Bay Area</span>
                    <p className="service-link__description">Bay Area trade law</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/cit-litigation-guide" className="service-link">
                    <span className="service-link__title">CIT Litigation Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/customs-protest-guide" className="service-link">
                    <span className="service-link__title">Customs Protest Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/adcvd-litigation" className="service-link">
                    <span className="service-link__title">AD/CVD Litigation</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
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
            Schedule Your Free Trade Litigation Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            If CBP has denied your protest or significant duties are at stake, contact our San Diego trade litigation attorneys to evaluate whether Court of International Trade litigation is right for your case.
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

export default SanDiegoTradeLitigationPage;
