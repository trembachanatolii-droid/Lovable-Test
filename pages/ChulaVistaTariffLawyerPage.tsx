
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const ChulaVistaTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Chula Vista Tariff Lawyer | Border Trade Attorney CA',
    description: 'Chula Vista tariff lawyer specializing in border trade & customs. Expert CBP defense near San Diego/Tijuana border. Cross-border import/export compliance. (310) 744-1328.',
    keywords: 'tariff lawyer chula vista, customs attorney chula vista, border trade lawyer, san diego customs attorney, tijuana border lawyer, international trade attorney chula vista, cross-border trade compliance, otay mesa customs lawyer',
    canonical: 'chula-vista-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-chula-vista.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Chula Vista Tariff Lawyer & Border Trade Attorney - California Customs Law',
        description: 'Chula Vista tariff lawyer specializing in cross-border trade between US and Mexico. Expert CBP defense, tariff classification, and border customs compliance near Otay Mesa and San Ysidro.',
        url: `${siteConfig.siteUrl}/chula-vista-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Chula Vista Tariff Lawyer', url: `${siteConfig.siteUrl}/chula-vista-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'Why choose a Chula Vista tariff lawyer for border trade?',
          answer: 'Chula Vista\'s location adjacent to the Tijuana/San Diego border makes it ideal for cross-border trade legal services. Our firm understands the unique challenges of US-Mexico trade including USMCA compliance, maquiladora operations, country of origin issues, and rapid CBP response at Otay Mesa and San Ysidro ports of entry. We serve businesses importing through the world\'s busiest land border crossing.',
        },
        {
          question: 'What border trade services do you offer in Chula Vista?',
          answer: 'We provide comprehensive border trade services including: USMCA/NAFTA country of origin determinations, maquiladora compliance, CBP detention defense at Otay Mesa, tariff classification for cross-border goods, Section 321 de minimis entries, Mexico manufacturing compliance, substantial transformation analysis, and border crossing customs issues.',
        },
        {
          question: 'How quickly can you respond to CBP issues at Otay Mesa or San Ysidro?',
          answer: 'Our Chula Vista location provides immediate access to Otay Mesa and San Ysidro ports of entry - the primary commercial crossing points for US-Mexico trade. We can respond to CBP detentions, seizures, or inspections within hours. For border emergencies, call (310) 744-1328.',
        },
        {
          question: 'Do you handle USMCA qualification and Mexico trade issues?',
          answer: 'Yes, USMCA (formerly NAFTA) qualification is a core service for our Chula Vista clients. We analyze regional value content, tariff shift requirements, and country of origin rules. We also advise on Mexico manufacturing operations, maquiladora compliance, and cross-border supply chain restructuring to maximize duty savings under USMCA.',
        },
        {
          question: 'What industries do you serve in Chula Vista and South Bay?',
          answer: 'We represent importers and manufacturers across all industries with a focus on cross-border operations: automotive parts, electronics/tech manufacturing, medical devices, textiles/apparel, food/agriculture, aerospace components, and consumer goods. Our South Bay location is ideal for businesses with Mexico manufacturing or distribution operations.',
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
      <section className="hero" aria-label="Chula Vista Tariff Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background.jpg"
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
          <h1>Chula Vista Tariff Lawyer<br />Border Trade Attorney California</h1>
          <p className="hero-subtitle">
            Expert Chula Vista tariff lawyer specializing in cross-border US-Mexico trade. Strategic border location for rapid CBP response at Otay Mesa and San Ysidro ports of entry.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose a Chula Vista Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Border Trade Legal Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Chula Vista sits at the heart of <strong>US-Mexico cross-border trade</strong>, just minutes from the Tijuana border and Otay Mesa commercial crossing. Our firm provides specialized tariff and customs legal services for businesses engaged in bilateral trade, maquiladora operations, and border commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Border Proximity</h3>
              <p className="text-text-secondary leading-relaxed">
                Located <strong>minutes from Otay Mesa and San Ysidro</strong>, the world's busiest land border crossing. Immediate access to CBP operations and cross-border trade facilities.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">USMCA Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep knowledge of <strong>USMCA qualification rules</strong>, country of origin requirements, and Mexico manufacturing compliance for cross-border supply chains.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Rapid Response</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Same-day response</strong> to CBP detentions at border crossings. We understand the time-sensitive nature of cross-border cargo and customs issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Border Trade & Customs Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">USMCA Country of Origin & Qualification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                USMCA (formerly NAFTA) offers <strong>duty-free or reduced rates</strong> for qualifying goods from Mexico and Canada. Our Chula Vista tariff lawyer analyzes regional value content, tariff shift rules, and substantial transformation to maximize your duty savings on cross-border trade.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>USMCA regional value content analysis (RVC)</li>
                <li>Country of origin determinations for Mexico production</li>
                <li>Tariff shift and substantial transformation opinions</li>
                <li>USMCA certification preparation and defense</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Maquiladora & Mexico Manufacturing Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Many Chula Vista businesses operate <strong>maquiladora facilities in Tijuana and Baja California</strong>. We advise on temporary import bonds, IMMEX program compliance, cross-border transfers, and ensuring proper duty treatment when goods return to the US.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>IMMEX/maquiladora program compliance</li>
                <li>Temporary importation bonds and procedures</li>
                <li>Duty deferral and foreign trade zone strategies</li>
                <li>Cross-border assembly and processing compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Otay Mesa & San Ysidro CBP Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP conducts intensive inspections at the <strong>San Diego border crossings</strong>. Our proximity to Otay Mesa allows us to respond immediately to cargo detentions, exams, and holds that delay your cross-border shipments.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>CBP detention and exam response at Otay Mesa</li>
                <li>Border crossing seizure defense</li>
                <li>Admissibility package preparation</li>
                <li>Express consignment and Section 321 compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Tariff Classification for Cross-Border Goods</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper tariff classification is critical for USMCA qualification and duty minimization. Our Chula Vista customs attorney ensures your <strong>Mexican-origin goods</strong> receive optimal HTS classification and USMCA treatment.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>HTS classification for Mexico imports</li>
                <li>Binding Ruling requests for USMCA goods</li>
                <li>Tariff engineering for cross-border supply chains</li>
                <li>Classification consistency across border facilities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Section 301 & China Trade Diversion</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Many companies shifted production from China to Mexico to avoid Section 301 tariffs. We ensure your <strong>Mexico-origin products properly qualify</strong> for USMCA treatment and aren't subject to anti-evasion scrutiny.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Section 301 avoidance through Mexico sourcing</li>
                <li>EAPA investigation defense (evasion allegations)</li>
                <li>Substantial transformation for third-country parts</li>
                <li>Supply chain documentation and audit preparation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits <strong>cross-border traders</strong> for USMCA compliance, valuation issues, and country of origin. Our Chula Vista office defends clients through Focused Assessments and penalty proceedings.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment defense for border traders</li>
                <li>USMCA verification response and documentation</li>
                <li>Prior Disclosure filings for border entry errors</li>
                <li>19 USC § 1592 penalty mitigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas from Chula Vista */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Service Areas from Our Chula Vista Office
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center">
            {/* South Bay San Diego */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">South Bay San Diego</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve the entire South Bay business community:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Chula Vista', 'National City', 'Imperial Beach', 'Bonita',
                  'Eastlake', 'Otay Ranch', 'San Ysidro', 'Palm City',
                  'Nestor', 'San Diego Downtown', 'Coronado', 'La Mesa',
                  'El Cajon', 'Lemon Grove', 'Spring Valley', 'La Presa'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Greater San Diego & Border Region */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater San Diego & Border Region</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Serving businesses throughout San Diego County and the border region:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'San Diego', 'Carlsbad', 'Oceanside', 'Vista',
                  'Escondido', 'Encinitas', 'San Marcos', 'Poway',
                  'Del Mar', 'Solana Beach', 'Santee', 'Ramona',
                  'Tijuana (MX)', 'Tecate (MX)', 'Rosarito (MX)', 'Mexicali (MX)'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Statewide & Border Ports */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Border Ports & Nationwide Representation</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">San Diego Border Crossings</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Otay Mesa (Commercial)</li>
                  <li>San Ysidro (Passenger)</li>
                  <li>Tecate</li>
                  <li>Port of San Diego (Maritime)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Federal Courts</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>U.S. Court of International Trade</li>
                  <li>U.S. Court of Appeals (Federal Circuit)</li>
                  <li>CBP Administrative Proceedings</li>
                  <li>Commerce Department Reviews</li>
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
            </div>
          </div>
        </div>
      </section>

      {/* Why Chula Vista Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Chula Vista Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Border Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general customs attorneys, we <strong>specialize in US-Mexico cross-border trade</strong>. This focus gives us deep expertise in USMCA, maquiladora operations, border CBP procedures, and the unique challenges of bilateral trade.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Immediate Border Access</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our Chula Vista location provides <strong>direct access to Otay Mesa and San Ysidro</strong>, enabling same-day response to CBP detentions, inspections, and cargo holds. When minutes matter, local presence makes the difference.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Bilingual Support</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand that many cross-border businesses operate in both <strong>English and Spanish</strong>. Our team can communicate with your Mexico counterparts and handle documentation in both languages.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Flat-Fee Pricing Available</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>transparent flat-fee pricing</strong> for USMCA certifications, binding rulings, protests, and prior disclosures. Your free consultation includes a clear cost estimate for your matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Chula Vista & South Bay San Diego
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>Serving Chula Vista from our California offices</strong><br />
                Headquarters: 27001 Agoura Road, Suite 350<br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Emergency Border Matters:</strong> Available 24/7 for urgent CBP issues
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Border Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>To Otay Mesa:</strong> 10-15 minutes via I-805 South</li>
                <li><strong>To San Ysidro:</strong> 15-20 minutes via I-5 South</li>
                <li><strong>To Downtown San Diego:</strong> 15 minutes via I-5 North</li>
                <li><strong>Port of San Diego:</strong> 20 minutes via I-5 to Harbor Drive</li>
              </ul>
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
                  <Link to="/customs-defense-litigation" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <p className="service-link__description">CBP audits, seizures, penalty defense</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">USMCA Compliance</span>
                    <p className="service-link__description">Mexico trade qualification</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">Export Controls & Sanctions</span>
                    <p className="service-link__description">Mexico export compliance</p>
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
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Other California Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/san-diego-border-attorney" className="service-link">
                    <span className="service-link__title">San Diego Trade Attorney</span>
                    <p className="service-link__description">Border customs expertise</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/los-angeles-port-customs-attorney" className="service-link">
                    <span className="service-link__title">Los Angeles Port Attorney</span>
                    <p className="service-link__description">Port of LA/Long Beach</p>
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
                  <Link to="/resources/usmca-qualification-guide" className="service-link">
                    <span className="service-link__title">USMCA Qualification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/maquiladora-compliance" className="service-link">
                    <span className="service-link__title">Maquiladora Compliance</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">Tariff Classification Guide</span>
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
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our Chula Vista tariff lawyer and border trade attorney team today. We'll assess your cross-border trade needs and provide clear guidance.
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

export default ChulaVistaTariffLawyerPage;
