
import React, { useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateBreadcrumbSchema } from '../utils/seo';

// Lazy load EvaluationForm (below-the-fold component)
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
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full py-32 px-6 text-center overflow-hidden flex flex-col justify-center min-h-[60vh]">
         {/* Background Image - LCP element */}
         <div className="absolute inset-0 z-0" aria-hidden="true">
           <picture>
             <source type="image/webp" srcSet="/images/hero-contact.webp" />
             <img
               src="/images/hero-contact.jpg"
               alt="California international trade attorney office - Contact Trembach Law Firm for customs and import law consultations"
               className="w-full h-full object-cover object-center"
               loading="eager"
            style={{ aspectRatio: '16 / 9' }}
               decoding="async"
               fetchPriority="high"
               width="1920"
               height="1080"
             />
           </picture>
           {/* Overlay with 55% opacity for better text visibility */}
           <div className="absolute inset-0" style={{backgroundColor: 'rgba(1, 33, 105, 0.55)'}}></div>
         </div>

         {/* Hero Content */}
         <div className="relative z-10 max-w-4xl mx-auto">
           <h1 className="text-5xl md:text-7xl font-bold font-garamond mb-6 tracking-tight leading-tight" style={{color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'}}>
             Contact Us
           </h1>
           <p className="text-xl md:text-2xl font-medium tracking-wide mb-4" style={{color: '#ffffff', textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.5)'}}>
             Reach out to our team for expert legal counsel on international trade and customs matters.
           </p>
           <div className="w-24 h-1 bg-secondary-teal mx-auto mt-6"></div>
         </div>
      </section>

      {/* Offices Info */}
      <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                      <h3 className="text-2xl font-bold text-primary-navy mb-6">Our Office</h3>
                      <p className="text-lg text-neutral-darkGray mb-2"><strong>Trembach Law Firm, APC</strong></p>
                      <p className="text-lg text-neutral-darkGray mb-2">27001 Agoura Road, Suite 350</p>
                      <p className="text-lg text-neutral-darkGray mb-6">Calabasas, California 91301</p>
                      <p className="text-lg text-neutral-darkGray mb-2">
                          <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:text-secondary-forestGreen transition-colors" style={{cursor: 'pointer'}}>(310) 744-1328</a>
                      </p>
                      <p className="text-lg text-neutral-darkGray mb-2"><strong>Fax:</strong> (310) 744-1219</p>
                      <p className="text-lg text-neutral-darkGray mb-6">
                          <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:text-secondary-forestGreen transition-colors" style={{cursor: 'pointer'}}>infotrade@trembachlaw.com</a>
                      </p>
                      <div className="mt-6 pt-6 border-t border-gray-200">
                          <h4 className="font-bold text-primary-navy mb-3">Service Areas</h4>
                          <p className="text-gray-700">
                              Serving California importers and exporters statewide with focused representation at Los Angeles/Long Beach ports, Oakland port, and San Diego customs facilities. We handle federal matters nationwide including Court of International Trade litigation, BIS export license applications, and CBP focused assessments across all U.S. ports.
                          </p>
                      </div>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                       <h3 className="text-2xl font-bold text-primary-navy mb-6">Availability</h3>
                       <p className="text-lg text-neutral-darkGray mb-4">
                           International trade emergencies don't wait for business hours. When CBP detains your shipment, issues an investigation notice, or seizes cargo, immediate action is critical.
                       </p>
                       <p className="text-lg text-neutral-darkGray font-semibold mb-6">
                           Available: 24 hours a day, 7 days a week
                       </p>
                       <p className="text-lg text-neutral-darkGray mb-6">
                           <strong>Languages:</strong> English, Ukrainian, Russian
                       </p>
                       <div className="mt-6 pt-6 border-t border-gray-200">
                           <h4 className="font-bold text-primary-navy mb-3">Multilingual Support</h4>
                           <p className="text-gray-700">
                               Our multilingual capabilities serve California's diverse international business community. We communicate directly with foreign suppliers, coordinate with overseas counsel, and provide culturally informed legal strategies for global supply chains.
                           </p>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Why Contact Us */}
      <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">When to Contact Our Firm</h2>
              <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-secondary-teal mb-3">Urgent CBP Matters</h3>
                      <p className="text-gray-700">
                          Your shipment has been detained, seized, or flagged by U.S. Customs. You received a CBP investigation notice, penalty letter, or focused assessment notification. Our 24/7 emergency response team provides immediate strategic guidance to protect your goods and minimize penalties.
                      </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-secondary-teal mb-3">UFLPA Detention Defense</h3>
                      <p className="text-gray-700">
                          CBP has detained your apparel, solar, or electronics shipment under the Uyghur Forced Labor Prevention Act. Time is critical—our UFLPA release strategies are designed to maximize your chance of cargo release. Contact us immediately upon receiving detention notice to begin cargo release process.
                      </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-secondary-teal mb-3">Proactive Compliance Programs</h3>
                      <p className="text-gray-700">
                          You're planning major imports, launching new products, or restructuring your supply chain. We develop comprehensive import compliance programs, conduct classification reviews, secure binding rulings, and implement FSVP/UFLPA due diligence systems before CBP audits occur.
                      </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-secondary-teal mb-3">Export Controls & Sanctions</h3>
                      <p className="text-gray-700">
                          You need export license guidance for controlled technology, encryption products, or defense articles. Your foreign customers may be on Entity Lists or OFAC sanctions. We provide ITAR, EAR, and OFAC compliance counsel plus voluntary self-disclosure representation.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">What to Expect from Your Consultation</h2>
              <div className="space-y-6">
                  <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary-gold rounded-full flex items-center justify-center text-primary-navy font-bold text-lg">1</div>
                      <div>
                          <h3 className="text-xl font-bold text-primary-navy mb-2">Initial Case Assessment (Free)</h3>
                          <p className="text-gray-700">
                              We listen to your situation, review relevant documents, and provide honest assessment of your options. For urgent CBP matters, we offer same-day consultations and can coordinate emergency response within hours.
                          </p>
                      </div>
                  </div>
                  <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary-gold rounded-full flex items-center justify-center text-primary-navy font-bold text-lg">2</div>
                      <div>
                          <h3 className="text-xl font-bold text-primary-navy mb-2">Strategic Recommendation</h3>
                          <p className="text-gray-700">
                              Based on our experience with CBP audits, focused assessments, and investigations, we outline specific strategies tailored to your circumstances. You receive clear explanation of timing, process, expected outcomes, and potential risks.
                          </p>
                      </div>
                  </div>
                  <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary-gold rounded-full flex items-center justify-center text-primary-navy font-bold text-lg">3</div>
                      <div>
                          <h3 className="text-xl font-bold text-primary-navy mb-2">Transparent Fee Structure</h3>
                          <p className="text-gray-700">
                              We provide detailed fee proposals with fixed-fee options for defined projects (binding rulings, prior disclosures, compliance programs) and transparent hourly arrangements for complex litigation. No surprises—you know costs upfront.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Directions & Access */}
      <section className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">Office Location & Directions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                  <div>
                      <h3 className="text-xl font-bold text-primary-navy mb-3">Driving Directions</h3>
                      <div className="space-y-3 text-gray-700">
                          <div>
                              <strong className="text-primary-navy">From Los Angeles (via US-101):</strong>
                              <p className="text-sm">Take US-101 North to Exit 29 for Agoura Road. Turn right onto Agoura Road. Office is on the right at 27001 Agoura Road.</p>
                          </div>
                          <div>
                              <strong className="text-primary-navy">From San Fernando Valley:</strong>
                              <p className="text-sm">Take US-101 West toward Ventura. Exit at Agoura Road (Exit 29). Office building is immediately visible from the freeway.</p>
                          </div>
                          <div>
                              <strong className="text-primary-navy">From Ventura County:</strong>
                              <p className="text-sm">Take US-101 South, exit at Agoura Road. Turn left and cross over freeway. Office is on the left.</p>
                          </div>
                      </div>
                  </div>
                  <div>
                      <h3 className="text-xl font-bold text-primary-navy mb-3">Parking & Access</h3>
                      <ul className="space-y-2 text-gray-700 list-none">
                          <li><strong>Parking:</strong> Free visitor parking available in building structure</li>
                          <li><strong>Accessibility:</strong> ADA-compliant elevator access to Suite 350</li>
                          <li><strong>Nearby Landmarks:</strong> The Commons at Calabasas shopping center</li>
                          <li><strong>Public Transit:</strong> Metro Bus Line 161 stops on Agoura Road</li>
                      </ul>
                      <div className="mt-6 bg-gray-light p-4 rounded">
                          <p className="text-sm text-gray-700">
                              <strong className="text-primary-navy">Virtual Meetings Available:</strong> For clients unable to visit in person, we offer secure video consultations via Zoom, phone conferences, and encrypted document sharing.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* What to Bring Section */}
      <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">Prepare for Your Consultation</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary-navy mb-4">Documents to Bring</h3>
                  <p className="text-gray-700 mb-4">To maximize the value of your consultation, please gather relevant documents:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                      <div>
                          <h4 className="font-bold text-secondary-teal mb-2">CBP Matters:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                              <li>CF-28 Request for Information</li>
                              <li>CF-29 Notice of Action</li>
                              <li>Entry documents and commercial invoices</li>
                              <li>Detention or seizure notices</li>
                              <li>Prior CBP correspondence</li>
                          </ul>
                      </div>
                      <div>
                          <h4 className="font-bold text-secondary-teal mb-2">Compliance Programs:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                              <li>Product specifications and technical data</li>
                              <li>Supply chain documentation</li>
                              <li>Current import/export procedures</li>
                              <li>Questions about specific regulations</li>
                          </ul>
                      </div>
                  </div>
                  <div className="mt-6 bg-primary-navy/5 p-4 rounded border-l-4 border-secondary-teal">
                      <p className="text-sm text-gray-700">
                          <strong>Confidentiality:</strong> All consultations are protected by attorney-client privilege. We securely handle all sensitive business and trade information.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Use Light theme for visual separation from footer and white section above */}
      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading contact form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default ContactPage;
