
import React, { useEffect, lazy, Suspense } from 'react';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateBreadcrumbSchema } from '../utils/seo';

// Lazy load EvaluationForm
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const ContactPage: React.FC = () => {
  useMeta({
    title: 'Contact Us | Free Trade Law Consultation',
    description: 'Contact California customs attorney for free consultation. 24/7 CBP defense. Serving LA, Oakland, San Diego ports. Call (310) 744-1328.',
    canonical: 'contact',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-contact.jpg`,
    ogImageAlt: 'Contact Trembach Law Firm - California International Trade Attorney',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterImageAlt: 'Contact Trembach Law Firm - California International Trade Attorney',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Trembach Law Firm',
        description: 'Reach out to our team for expert legal counsel on international trade and customs matters.',
        url: `${siteConfig.siteUrl}/contact`,
        mainEntity: {
          '@type': 'Organization',
          '@id': 'https://trembach.law/organization',
        },
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'Contact', url: `${siteConfig.siteUrl}/contact` }
      ])
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    // Handle hash navigation to form
    if (window.location.hash === '#schedule-consultation') {
      setTimeout(() => {
        const formElement = document.getElementById('schedule-consultation');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="pt-20">
      {/* Compact Hero Section */}
      <section className="relative w-full py-16 md:py-20 px-6 text-center overflow-hidden flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="/images/hero-contact.webp" />
            <img
              src="/images/hero-contact.jpg"
              alt="California international trade attorney office"
              className="w-full h-full object-cover object-center"
              loading="eager"
              style={{ aspectRatio: '16 / 9' }}
              decoding="async"
              fetchPriority="high"
              width="1920"
              height="1080"
            />
          </picture>
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(1, 33, 105, 0.65)'}}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-garamond mb-4 tracking-tight leading-tight" style={{color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'}}>
            Contact Us
          </h1>
          <p className="text-lg md:text-xl font-medium tracking-wide" style={{color: '#ffffff', textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)'}}>
            Free consultation with California's international trade law experts
          </p>
        </div>
      </section>

      {/* Main Contact Section - Form + Info Side by Side */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left Column - Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Office Info Card */}
              <div className="bg-primary-navy text-white p-6 rounded-lg">
                <h2 className="text-xl font-bold font-garamond mb-4">Our Office</h2>
                <div className="space-y-3 text-sm">
                  <p><strong>Trembach Law Firm, APC</strong></p>
                  <p>27001 Agoura Road, Suite 350<br />Calabasas, California 91301</p>
                  <div className="pt-2 border-t border-white/20">
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+13107441328" className="hover:text-secondary-teal transition-colors">(310) 744-1328</a>
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:infotrade@trembachlaw.com" className="hover:text-secondary-teal transition-colors break-all">infotrade@trembachlaw.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-secondary-teal text-white p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">24/7 Availability</h3>
                <p className="text-sm opacity-95">
                  Trade emergencies don't wait. CBP detentions, seizures, and investigations require immediate action.
                </p>
                <p className="mt-3 font-semibold">Available around the clock</p>
                <p className="text-sm mt-2 opacity-90">Languages: English, Ukrainian, Russian</p>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-primary-navy mb-3">When to Contact Us</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-teal font-bold">-</span>
                    <span>Shipment detained or seized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-teal font-bold">-</span>
                    <span>CBP audit or penalty notice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-teal font-bold">-</span>
                    <span>UFLPA detention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-teal font-bold">-</span>
                    <span>Tariff classification questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary-teal font-bold">-</span>
                    <span>Export license guidance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Consultation Form */}
            <div className="lg:col-span-2">
              <Suspense fallback={<div style={{ minHeight: '500px', background: '#f5f5f5', borderRadius: '8px' }} aria-label="Loading contact form" />}>
                <EvaluationForm theme="light" />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect - Compact */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-garamond text-primary-navy mb-8 text-center">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary-gold rounded-full flex items-center justify-center text-primary-navy font-bold mx-auto mb-3">1</div>
              <h3 className="font-bold text-primary-navy mb-2">Free Assessment</h3>
              <p className="text-sm text-gray-700">We review your situation and provide honest assessment of options. Same-day consultations for urgent matters.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary-gold rounded-full flex items-center justify-center text-primary-navy font-bold mx-auto mb-3">2</div>
              <h3 className="font-bold text-primary-navy mb-2">Strategic Plan</h3>
              <p className="text-sm text-gray-700">Clear explanation of strategies, timing, expected outcomes, and potential risks tailored to your case.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-secondary-gold rounded-full flex items-center justify-center text-primary-navy font-bold mx-auto mb-3">3</div>
              <h3 className="font-bold text-primary-navy mb-2">Transparent Fees</h3>
              <p className="text-sm text-gray-700">Fixed-fee options for defined projects. Transparent hourly rates for complex matters. No surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions - Compact */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-garamond text-primary-navy mb-6 text-center">Office Location</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-primary-navy mb-3">Directions</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>From LA (US-101):</strong> Take Exit 29 (Agoura Road). Turn right. Office at 27001 Agoura Road.</p>
                <p><strong>From Valley:</strong> US-101 West to Exit 29. Building visible from freeway.</p>
                <p><strong>From Ventura:</strong> US-101 South, exit Agoura Road. Turn left over freeway.</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-primary-navy mb-3">Parking & Access</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Free visitor parking in building structure</li>
                <li>ADA-compliant elevator to Suite 350</li>
                <li>Near The Commons at Calabasas</li>
              </ul>
              <div className="mt-4 bg-gray-50 p-3 rounded text-sm">
                <strong className="text-primary-navy">Virtual Meetings:</strong> Secure video consultations available via Zoom.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prepare for Consultation - Compact */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-garamond text-primary-navy mb-6 text-center">Prepare for Your Consultation</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4 text-sm">Gather relevant documents to maximize your consultation:</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">CBP Matters:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>CF-28/CF-29 notices</li>
                  <li>Entry documents, invoices</li>
                  <li>Detention/seizure notices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-teal mb-2">Compliance:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Product specifications</li>
                  <li>Supply chain documentation</li>
                  <li>Current procedures</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-primary-navy/5 p-3 rounded border-l-4 border-secondary-teal text-sm">
              <strong>Confidentiality:</strong> All consultations protected by attorney-client privilege.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
