
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const OrangeCountyTariffLawyerPage: React.FC = () => {
  useMeta({
    title: 'Orange County Tariff Lawyer | Customs Attorney Irvine, Anaheim, Santa Ana',
    description: 'Orange County tariff lawyer serving Irvine, Anaheim, Santa Ana, Newport Beach. Medical device, aerospace, apparel trade compliance. CBP defense. (310) 744-1328.',
    keywords: 'orange county tariff lawyer, irvine customs attorney, anaheim trade lawyer, santa ana customs lawyer, oc tariff attorney, newport beach trade attorney, orange county medical device import, oc aerospace customs',
    canonical: 'orange-county-tariff-lawyer',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-orange-county.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'Orange County Tariff Lawyer & Customs Attorney - OC Trade Law Firm',
        description: 'Orange County tariff lawyer and customs attorney serving Irvine, Anaheim, Santa Ana, Newport Beach. Expert medical device, aerospace, and apparel trade compliance for OC businesses.',
        url: `${siteConfig.siteUrl}/orange-county-tariff-lawyer`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'Orange County Tariff Lawyer', url: `${siteConfig.siteUrl}/orange-county-tariff-lawyer` }
      ]),
      generateFAQSchema([
        {
          question: 'What areas does an Orange County tariff lawyer serve?',
          answer: 'Our Orange County tariff lawyers serve all OC cities including Anaheim, Santa Ana, Irvine, Huntington Beach, Garden Grove, Orange, Fullerton, Costa Mesa, Mission Viejo, Westminster, Newport Beach, Buena Park, Lake Forest, Tustin, Yorba Linda, San Clemente, Laguna Niguel, and all surrounding Orange County communities.',
        },
        {
          question: 'Why choose an Orange County customs attorney?',
          answer: 'Orange County is home to major medical device manufacturers, aerospace companies, apparel brands, and technology firms. Our OC customs attorney team has specialized expertise in medical device FDA/CBP compliance, aerospace/defense ITAR regulations, apparel Section 301 tariffs, and technology product classification critical to Orange County industries.',
        },
        {
          question: 'What industries do you serve in Orange County?',
          answer: 'We serve Orange County\'s key industries including: medical devices and healthcare products, aerospace and defense contractors, apparel and fashion brands, technology and electronics, automotive aftermarket, consumer goods, and professional services. We understand OC\'s diverse business landscape and regulatory requirements.',
        },
        {
          question: 'How do you handle medical device import compliance in Orange County?',
          answer: 'Orange County is a medical device hub. We provide specialized FDA/CBP compliance for medical devices including: 510(k) clearance verification, FDA establishment registration and device listing, medical device tariff classification (HTS Chapter 90), USMCA/KORUS qualification for medical imports, and CBP medical device detention defense.',
        },
        {
          question: 'Can you assist with Port of LA/Long Beach cargo for Orange County companies?',
          answer: 'Yes, we provide comprehensive Port of LA and Port of Long Beach services for Orange County importers including: rapid response to CBP cargo detentions, seizure defense, cargo release strategies, and port examination support. Orange County is minutes from these major ports, and we prioritize urgent port matters.',
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
      <section className="hero" aria-label="Orange County Tariff Lawyer Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1920&auto=format&fit=crop"
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
          <h1>Orange County Tariff Lawyer<br />Medical Device & Aerospace Trade Attorney</h1>
          <p className="hero-subtitle">
            Expert Orange County tariff lawyer and customs attorney serving Irvine, Anaheim, Santa Ana. Specialized medical device, aerospace, and apparel trade compliance for OC's diverse business community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Orange County Tariff Lawyer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Orange County's Specialized Trade Law Firm
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Serving Orange County's thriving business community from Anaheim to Newport Beach. We provide expert tariff and customs legal services tailored to OC's key industries: <strong>medical devices, aerospace/defense, apparel, technology, and consumer goods</strong>. Convenient access to Port of LA and Port of Long Beach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                <strong>Deep expertise</strong> in Orange County's core industries including medical device FDA/CBP compliance, aerospace ITAR regulations, apparel tariff strategies, and technology product classification.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">OC Accessibility</h3>
              <p className="text-text-secondary leading-relaxed">
                Convenient location for <strong>all Orange County businesses</strong> with easy access via I-5, I-405, and SR-73. In-person meetings available throughout Irvine, Anaheim, Santa Ana, and Newport Beach.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Port Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Direct access to <strong>Port of LA and Port of Long Beach</strong>. Rapid response to CBP cargo detentions, medical device holds, and aerospace/defense shipment issues affecting OC importers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff & Customs Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Tariff & Customs Services for Orange County Businesses
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Medical Device Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Orange County is a <strong>medical device manufacturing hub</strong>. As your OC customs attorney, we provide specialized FDA and CBP compliance for medical devices including surgical instruments, diagnostic equipment, implants, and healthcare technology. We handle tariff classification, FDA clearance verification, and detention defense.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Medical device HTS classification (Chapter 90) and tariff optimization</li>
                <li>FDA 510(k) compliance, establishment registration, and device listing verification</li>
                <li>CBP medical device detention defense and admissibility packages</li>
                <li>USMCA/KORUS free trade agreement qualification for medical devices</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Aerospace & Defense Trade Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Orange County hosts major aerospace and defense contractors. We provide <strong>ITAR, EAR, and customs compliance</strong> for aerospace components, defense articles, and dual-use technology. Our expertise covers export licensing, tariff classification, and CBP compliance for sensitive technologies.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>ITAR (International Traffic in Arms Regulations) compliance and licensing</li>
                <li>EAR (Export Administration Regulations) and dual-use technology controls</li>
                <li>Aerospace component tariff classification and duty drawback</li>
                <li>Defense contractor import/export compliance programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Apparel & Fashion Tariff Strategies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Orange County apparel brands face <strong>complex tariff structures and Section 301 China tariffs</strong>. We optimize HTS classification, implement country of origin strategies, and defend against CBP textile/apparel compliance issues. Critical for OC fashion and apparel importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Apparel and textile HTS classification (Chapters 61-63) optimization</li>
                <li>Section 301 tariff mitigation for China-sourced apparel</li>
                <li>Country of origin compliance and textile visa requirements</li>
                <li>USMCA/CAFTA qualification for apparel imports from Mexico/Central America</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Technology & Electronics Classification</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Orange County technology companies import semiconductors, electronics, and computer equipment. Proper <strong>tariff classification determines duty rates from 0% to 25%+</strong>. We file binding rulings and defend against CBP reclassifications for technology products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Technology product HTS classification (Chapter 85, 84) and optimization</li>
                <li>Information Technology Agreement (ITA) duty-free eligibility</li>
                <li>Section 301 tariff strategies for technology imports from China</li>
                <li>Semiconductor and electronics component classification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">CBP Audit Defense & Penalty Mitigation</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                CBP actively audits Orange County importers across all industries. Our customs attorney team defends you through <strong>Focused Assessments, Quick Response Audits, and penalty proceedings</strong>. We've helped OC clients reduce penalties by 75%+ through strategic prior disclosures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Focused Assessment (FA) defense for major OC importers</li>
                <li>Prior Disclosure filings to cap penalties at interest-only</li>
                <li>CF-28/CF-29 Notice of Action response and negotiation</li>
                <li>19 USC § 1592 penalty mitigation for valuation, classification, and marking violations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Automotive Aftermarket & Parts Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Orange County automotive aftermarket businesses face complex <strong>tariff classification, Section 232 aluminum/steel tariffs, and safety compliance</strong>. We handle HTS classification for auto parts, tariff engineering, and CBP compliance for aftermarket importers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Automotive parts HTS classification (Chapter 87) and duty optimization</li>
                <li>Section 232 aluminum/steel tariff strategies for auto components</li>
                <li>DOT/NHTSA safety compliance and import certifications</li>
                <li>USMCA qualification for automotive parts from Mexico/Canada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Across Orange County */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Comprehensive Orange County Coverage
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* North Orange County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">North Orange County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Anaheim, Fullerton, and northern OC cities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Anaheim', 'Fullerton', 'Orange', 'Placentia',
                  'Yorba Linda', 'Brea', 'La Habra', 'Buena Park',
                  'Cypress', 'Stanton', 'La Palma', 'Los Alamitos'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Central Orange County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Central Orange County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Santa Ana, Irvine, and central OC business hubs:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Santa Ana', 'Irvine', 'Tustin', 'Costa Mesa',
                  'Garden Grove', 'Westminster', 'Fountain Valley', 'Lake Forest',
                  'Foothill Ranch', 'Portola Hills', 'Rancho Santa Margarita', 'El Toro'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* South Orange County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">South Orange County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Mission Viejo, Laguna, and south OC communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Mission Viejo', 'Laguna Niguel', 'San Clemente', 'Dana Point',
                  'Aliso Viejo', 'Laguna Hills', 'Laguna Woods', 'San Juan Capistrano',
                  'Ladera Ranch', 'Coto de Caza', 'Rancho Mission Viejo', 'Talega'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* Coastal Orange County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Coastal Orange County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Newport Beach, Huntington Beach, and OC coast:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Newport Beach', 'Huntington Beach', 'Laguna Beach', 'Seal Beach',
                  'Corona del Mar', 'Balboa Island', 'Newport Coast', 'Crystal Cove',
                  'Laguna Niguel', 'Dana Point', 'San Clemente', 'Sunset Beach'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* East Orange County */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">East Orange County</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                East OC and Foothill communities:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Yorba Linda', 'Villa Park', 'Orange Park Acres', 'Anaheim Hills',
                  'North Tustin', 'Cowan Heights', 'East Irvine', 'Portola Hills'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>

            {/* OC Business Districts */}
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Major Business Districts</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Key OC employment and industrial centers:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Irvine Spectrum', 'Irvine Business Complex', 'John Wayne Airport Area', 'Costa Mesa Business District',
                  'Anaheim Resort', 'Santa Ana Civic Center', 'Newport Center', 'Fashion Island Area'
                ].map((city) => (
                  <div key={city} className="text-sm text-text-secondary py-1">{city}</div>
                ))}
              </div>
            </div>
          </div>

          {/* OC Industries & Ports */}
          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">Orange County Industries & Port Access</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Port Access</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Port of Long Beach (20-30 min)</li>
                  <li>Port of Los Angeles (30-40 min)</li>
                  <li>John Wayne Airport (SNA)</li>
                  <li>ONT International Airport</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Key OC Industries</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>Medical Devices & Healthcare</li>
                  <li>Aerospace & Defense</li>
                  <li>Apparel & Fashion</li>
                  <li>Technology & Electronics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-3">Trade Compliance Focus</h4>
                <ul className="space-y-2 text-neutral-200 text-sm list-none">
                  <li>FDA Medical Device Compliance</li>
                  <li>ITAR/EAR Export Controls</li>
                  <li>Apparel Section 301 Tariffs</li>
                  <li>Technology Classification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Orange County Businesses Choose Us */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Orange County Businesses Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Industry-Specific Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                As your Orange County tariff lawyer, we understand the unique compliance challenges facing OC's key industries. Our team has deep expertise in <strong>medical device FDA/CBP regulations, aerospace ITAR compliance, apparel tariff strategies, and technology product classification</strong>. We speak your industry's language and understand OC business needs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Responsive Communication</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike large downtown LA firms, we provide <strong>direct attorney access</strong> and rapid response times. You'll work directly with experienced trade attorneys who understand your business. Same-day response to urgent CBP issues, cargo detentions, and compliance emergencies affecting OC operations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">National Practice Capabilities</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We combine Orange County accessibility with nationwide practice before federal agencies and courts. We appear before the <strong>Court of International Trade, Commerce Department, FDA, CBP</strong>, and all federal trade agencies. Local service with Washington D.C. regulatory expertise.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Transparent OC Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We offer <strong>flat-fee pricing</strong> for many services including protests, binding ruling requests, prior disclosures, and FDA compliance reviews. Competitive hourly rates for complex matters. Your free consultation includes a detailed fee estimate. No surprise bills for Orange County clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving Orange County from Our California Office
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
                <strong>Consultations:</strong> In-person, phone, and video available
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Access from Orange County</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>From Irvine/Newport Beach:</strong> I-405 North to 101 West, Las Virgenes exit (45-60 min)</li>
                <li><strong>From Anaheim/Fullerton:</strong> SR-91 West to 405 North to 101 West (60 min)</li>
                <li><strong>From South OC (Mission Viejo):</strong> I-5 North to 405 North to 101 West (60-75 min)</li>
                <li><strong>From Huntington Beach:</strong> I-405 North to 101 West (45-60 min)</li>
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
                  <a href="#medical-device-compliance" className="service-link">
                    <span className="service-link__title">Medical Device Compliance</span>
                    <p className="service-link__description">FDA/CBP medical device imports</p>
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
                    <p className="service-link__description">Defense trade controls</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#apparel-tariff-strategies" className="service-link">
                    <span className="service-link__title">Apparel Tariff Strategies</span>
                    <p className="service-link__description">Fashion industry compliance</p>
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
                  <a href="#southern-california-tariff-lawyer" className="service-link">
                    <span className="service-link__title">Southern California</span>
                    <p className="service-link__description">Regional SoCal coverage</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#inland-empire-customs-attorney" className="service-link">
                    <span className="service-link__title">Inland Empire</span>
                    <p className="service-link__description">IE logistics & warehousing</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Helpful Guides */}
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Helpful Guides</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#medical-device-import-guide" className="service-link">
                    <span className="service-link__title">Medical Device Import Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#itar-compliance-guide" className="service-link">
                    <span className="service-link__title">ITAR Compliance Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#apparel-classification-guide" className="service-link">
                    <span className="service-link__title">Apparel Classification Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#trade-law-faq" className="service-link">
                    <span className="service-link__title">FAQ Center</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
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
            Contact our Orange County tariff lawyer and customs attorney team today. We'll assess your industry-specific compliance needs and provide expert guidance for your OC business.
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
      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default OrangeCountyTariffLawyerPage;
