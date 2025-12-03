
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanFernandoValleyTariffPage: React.FC = () => {
  useMeta({
    title: 'San Fernando Valley Tariff Attorney | Customs Lawyer Calabasas, Burbank, Glendale',
    description: 'San Fernando Valley tariff attorney serving Calabasas, Burbank, Glendale, Van Nuys. Entertainment, aerospace, manufacturing trade compliance. Expert CBP defense. (310) 744-1328.',
    keywords: 'san fernando valley tariff attorney, calabasas customs lawyer, burbank trade attorney, glendale tariff lawyer, van nuys customs attorney, sfv trade compliance, valley import lawyer',
    canonical: 'san-fernando-valley-tariff',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-fernando-valley.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Fernando Valley Tariff Attorney - Entertainment & Aerospace Trade Law',
        description: 'San Fernando Valley tariff attorney and customs lawyer serving Calabasas, Burbank, Glendale, Van Nuys. Expert entertainment industry, aerospace, and manufacturing trade compliance for Valley businesses.',
        url: `${siteConfig.siteUrl}/san-fernando-valley-tariff`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Fernando Valley', url: `${siteConfig.siteUrl}/san-fernando-valley-tariff` }
      ]),
      generateFAQSchema([
        {
          question: 'What areas does a San Fernando Valley tariff attorney serve?',
          answer: 'Our San Fernando Valley tariff attorneys serve the entire Valley including Calabasas, Woodland Hills, Burbank, Glendale, Pasadena, Van Nuys, North Hollywood, Sherman Oaks, Encino, Tarzana, Northridge, Granada Hills, Chatsworth, Canoga Park, and all surrounding Valley communities from our Calabasas headquarters.',
        },
        {
          question: 'Why choose a San Fernando Valley-based customs attorney?',
          answer: 'The San Fernando Valley offers convenient access without downtown LA traffic, free parking, and personalized boutique service. Our Calabasas office at 27001 Agoura Road provides the same expertise as downtown firms with easier accessibility for Valley businesses. We serve entertainment, aerospace, manufacturing, and all Valley industries.',
        },
        {
          question: 'What industries do you serve in the San Fernando Valley?',
          answer: 'We serve San Fernando Valley\'s diverse industries including: entertainment/media production (Burbank studios), aerospace and defense contractors (Northridge, Chatsworth), manufacturing, automotive aftermarket, consumer goods, apparel, technology, and professional services. Our Valley expertise covers all major SFV business sectors.',
        },
        {
          question: 'How do you handle entertainment industry trade compliance?',
          answer: 'The San Fernando Valley is the entertainment capital (Warner Bros, Disney, Universal). We provide specialized trade compliance for entertainment including: production equipment imports, prop and costume imports, film/TV cargo carnets, international co-production compliance, and entertainment industry tariff classification.',
        },
        {
          question: 'Can you help with Port of LA/Long Beach cargo for Valley businesses?',
          answer: 'Yes, we provide comprehensive Port of LA and Port of Long Beach services for San Fernando Valley importers. Our Calabasas location offers quick access to both ports via 101/405/710 freeways. We handle CBP cargo detentions, seizure defense, and rapid cargo release for Valley businesses.',
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
      <section className="hero" aria-label="San Fernando Valley Tariff Attorney Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1920&auto=format&fit=crop"
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
          <h1>San Fernando Valley Tariff Attorney<br />Entertainment & Aerospace Customs Lawyer</h1>
          <p className="hero-subtitle">
            Expert San Fernando Valley tariff attorney and customs lawyer serving Calabasas, Burbank, Glendale, Van Nuys. Specialized entertainment industry, aerospace, and manufacturing trade compliance for Valley businesses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose San Fernando Valley Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Your Local San Fernando Valley Trade Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Headquartered in the heart of the San Fernando Valley at <strong>27001 Agoura Road, Calabasas</strong>. We provide expert tariff and customs legal services to Valley businesses from entertainment studios to aerospace contractors. Convenient access, free parking, and boutique attention without downtown LA hassles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Valley Accessibility</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Convenient local access</strong> for all San Fernando Valley businesses. Free parking, easy freeway access via 101/405, and no downtown LA traffic. In-person meetings at our Calabasas office or your Valley location.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep knowledge of <strong>Valley industries</strong> including entertainment/media (Burbank studios), aerospace/defense (Northridge, Chatsworth), manufacturing, and consumer goods unique to SFV business community.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Access</h3>
              <p className="text-text-secondary leading-relaxed">
                Strategic location with direct access to <strong>Port of LA and Port of Long Beach</strong> via 101/405/710. Rapid response to CBP cargo detentions and port compliance issues for Valley importers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services for San Fernando Valley
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Entertainment Industry Trade Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The San Fernando Valley is <strong>home to major entertainment studios</strong> (Warner Bros, Disney, Universal, NBC Universal). We provide specialized trade compliance for production equipment imports, props/costumes, film/TV cargo carnets, and international co-production arrangements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Production equipment and camera gear temporary imports (ATA Carnets)</li>
                <li>Props, costumes, and set decoration import compliance</li>
                <li>Film/TV cargo international shipping and customs clearance</li>
                <li>International co-production customs coordination and tax incentive compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Aerospace & Defense Contractor Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Fernando Valley hosts major <strong>aerospace and defense contractors</strong> (Northridge, Chatsworth). We provide ITAR/EAR compliance, defense article import/export licensing, and aerospace component tariff classification for Valley aerospace companies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ITAR (International Traffic in Arms Regulations) compliance and licensing</li>
                <li>EAR (Export Administration Regulations) for dual-use aerospace technology</li>
                <li>Aerospace component and parts HTS classification</li>
                <li>Defense contractor supply chain compliance and TAA/BAA requirements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Manufacturing & Industrial Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Fernando Valley manufacturers face <strong>complex tariff structures and Section 301/232 tariffs</strong>. We optimize HTS classification, implement duty minimization strategies, and defend against CBP classification disputes for Valley manufacturers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Manufacturing component and finished goods HTS classification</li>
                <li>Section 232 aluminum/steel tariff compliance and exclusion requests</li>
                <li>Section 301 China tariff mitigation for manufactured goods</li>
                <li>First sale for export valuation and duty minimization strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Automotive Aftermarket & Parts Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Fernando Valley is home to <strong>automotive aftermarket distributors and parts importers</strong>. We handle automotive parts classification, Section 232 tariff strategies, DOT/NHTSA compliance, and USMCA qualification for Mexican auto parts.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Automotive parts and accessories HTS classification (Chapter 87)</li>
                <li>Section 232 aluminum/steel tariff compliance for auto components</li>
                <li>USMCA qualification and certification for Mexican automotive imports</li>
                <li>DOT/NHTSA safety compliance and import certifications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP audits San Fernando Valley importers across all industries through <strong>Focused Assessments and Quick Response Audits</strong>. We defend Valley businesses through CBP compliance reviews, respond to penalty notices, and minimize exposure through strategic prior disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for major Valley importers</li>
                <li>Prior Disclosure filings to cap penalties at interest-only (19 USC § 1592)</li>
                <li>CF-28/CF-29 Notice of Action response and penalty negotiation</li>
                <li>Trade compliance program development and internal audit support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Consumer Goods & Apparel Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                San Fernando Valley consumer goods and apparel businesses face <strong>product safety compliance and Section 301 tariff exposure</strong>. We handle CPSC safety compliance, textile/apparel classification, and tariff strategies for Valley consumer goods importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Consumer product safety compliance (CPSC, FDA, EPA)</li>
                <li>Apparel and textile HTS classification (Chapters 61-63)</li>
                <li>Section 301 tariff mitigation for consumer goods from China</li>
                <li>E-commerce import compliance for Valley online retailers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Across San Fernando Valley */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive San Fernando Valley Coverage
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* West Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">West San Fernando Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Western Valley and Ventura County border:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Calabasas', 'Woodland Hills', 'Tarzana', 'Encino',
                  'West Hills', 'Canoga Park', 'Winnetka', 'Reseda',
                  'Agoura Hills', 'Oak Park', 'Hidden Hills', 'Topanga'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Central Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central San Fernando Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Central Valley business corridor:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Van Nuys', 'Sherman Oaks', 'Studio City', 'North Hollywood',
                  'Valley Village', 'Valley Glen', 'Panorama City', 'Arleta',
                  'Sun Valley', 'Lake Balboa', 'Toluca Lake', 'Universal City'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* North Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">North San Fernando Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                North Valley and Foothill communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Northridge', 'Granada Hills', 'Porter Ranch', 'Chatsworth',
                  'Mission Hills', 'Sylmar', 'San Fernando', 'Pacoima',
                  'North Hills', 'Sepulveda', 'Lake View Terrace', 'Shadow Hills'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* East Valley - Burbank */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Burbank & East Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Entertainment district and east Valley:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Burbank', 'Glendale', 'La Crescenta', 'Montrose',
                  'Sunland', 'Tujunga', 'La Canada Flintridge', 'Verdugo City'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Pasadena Area */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Pasadena & Foothill Cities</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Foothill communities and Pasadena area:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Pasadena', 'Altadena', 'Sierra Madre', 'Arcadia',
                  'Monrovia', 'Duarte', 'Bradbury', 'San Marino'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Santa Clarita Valley */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Santa Clarita Valley</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                North of San Fernando Valley:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Santa Clarita', 'Valencia', 'Newhall', 'Canyon Country',
                  'Stevenson Ranch', 'Castaic', 'Saugus', 'Agua Dulce'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Valley Industries */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">San Fernando Valley Industries & Port Access</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Port Access</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Los Angeles (via 101/405/710)</li>
                  <li>Port of Long Beach (via 101/405/710)</li>
                  <li>Burbank Airport (BUR)</li>
                  <li>Van Nuys Airport (VNY)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Key Valley Industries</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Entertainment & Media Production</li>
                  <li>Aerospace & Defense</li>
                  <li>Manufacturing & Industrial</li>
                  <li>Automotive Aftermarket</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Trade Compliance Focus</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Entertainment Carnets & Production Gear</li>
                  <li>ITAR/EAR Aerospace Compliance</li>
                  <li>Manufacturing Tariff Strategies</li>
                  <li>Consumer Goods Section 301</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why San Fernando Valley Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why San Fernando Valley Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Local Valley Headquarters</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike downtown LA firms, we're <strong>headquartered in your neighborhood</strong> at 27001 Agoura Road, Calabasas. Easy access for all Valley businesses, free parking, convenient meeting locations, and no downtown traffic. We understand the San Fernando Valley business community and its unique needs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry-Specific Valley Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We understand <strong>Valley industries</strong> including entertainment/media (Burbank studios), aerospace/defense (Northridge, Chatsworth), manufacturing, automotive, and consumer goods. Our team has deep knowledge of trade compliance challenges facing San Fernando Valley businesses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Boutique Service, National Practice</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We combine <strong>personalized boutique attention</strong> with nationwide customs practice capabilities. You work directly with experienced attorneys (not paralegals). We appear before CBP, Court of International Trade, and federal agencies nationwide while maintaining Valley accessibility.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent Valley Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services including protests, binding rulings, prior disclosures, and carnet applications. Competitive hourly rates for complex matters. Your free consultation includes a detailed fee estimate. No surprise bills for Valley clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Visit Our San Fernando Valley Office
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Parking:</strong> Free on-site parking available
              </p>
              <p className="text-text-secondary text-sm">
                <strong>Landmark:</strong> Near The Commons at Calabasas shopping center
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Directions from Valley Areas</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Burbank/Glendale:</strong> 134 West to 101 West, Las Virgenes exit (20-30 min)</li>
                <li><strong>From Van Nuys/Sherman Oaks:</strong> 101 West to Las Virgenes exit (15-25 min)</li>
                <li><strong>From Northridge/Chatsworth:</strong> 118 East to 101 West, Las Virgenes exit (20-30 min)</li>
                <li><strong>From Pasadena:</strong> 134 West to 101 West, Las Virgenes exit (30-40 min)</li>
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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Legal Services */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Legal Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#entertainment-trade-compliance" className="service-link">
                    <span className="service-link__title">Entertainment Trade Compliance</span>
                    <p className="service-link__description">Production gear & carnets</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#aerospace-itar-compliance" className="service-link">
                    <span className="service-link__title">Aerospace ITAR/EAR</span>
                    <p className="service-link__description">Defense contractor compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#manufacturing-tariff-strategies" className="service-link">
                    <span className="service-link__title">Manufacturing Tariff Strategies</span>
                    <p className="service-link__description">Section 301/232 compliance</p>
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
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Regional Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/southern-california-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Southern California</span>
                    <p className="service-link__description">Regional SoCal coverage</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="service-link-item">
                  <Link to="/calabasas-customs-attorney" className="service-link">
                    <span className="service-link__title">Calabasas</span>
                    <p className="service-link__description">Our headquarters location</p>
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
                  <a href="#ata-carnet-guide" className="service-link">
                    <span className="service-link__title">ATA Carnet Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="/export-controls" className="service-link">
                    <span className="service-link__title">ITAR Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#section-301-tariffs-guide" className="service-link">
                    <span className="service-link__title">Section 301 Tariffs Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
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
            Contact our San Fernando Valley tariff attorney and customs lawyer team today. Visit our Calabasas office or schedule a consultation at your Valley location. Expert trade law services for all Valley businesses.
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

export default SanFernandoValleyTariffPage;
