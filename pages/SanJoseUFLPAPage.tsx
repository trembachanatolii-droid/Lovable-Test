
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import RelatedCityPages from '../components/RelatedCityPages';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanJoseUFLPAPage: React.FC = () => {
  useMeta({
    title: 'UFLPA Attorney San Jose CA | Forced Labor Compliance Lawyer | Trembach Law',
    description: 'UFLPA attorney San Jose CA. Expert forced labor compliance lawyer serving Silicon Valley businesses. UFLPA detention defense, supply chain compliance, Xinjiang import help. Free consultation.',
    keywords: 'UFLPA attorney san jose, forced labor compliance lawyer san jose, san jose UFLPA lawyer, silicon valley UFLPA attorney, UFLPA detention defense san jose, supply chain compliance attorney san jose, forced labor act lawyer san jose, tech company UFLPA san jose, xinjiang import attorney san jose',
    canonical: 'san-jose-uflpa',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-san-jose.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'UFLPA Attorney San Jose CA - Forced Labor Compliance Lawyer Silicon Valley',
        description: 'Expert UFLPA attorney serving San Jose and Silicon Valley businesses with forced labor compliance, detention defense, and supply chain solutions.',
        url: `${siteConfig.siteUrl}/san-jose-uflpa`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'UFLPA Attorney San Jose', url: `${siteConfig.siteUrl}/san-jose-uflpa` }
      ]),
      generateFAQSchema([
        {
          question: 'How does UFLPA affect San Jose tech companies?',
          answer: 'San Jose and Silicon Valley tech companies importing electronics, solar panels, and components face significant UFLPA scrutiny. Goods suspected of Xinjiang ties are detained and require evidence to rebut the forced labor presumption. Our San Jose UFLPA attorneys help businesses prepare detention responses and implement compliance programs.',
        },
        {
          question: 'What tech products face UFLPA scrutiny in San Jose?',
          answer: 'High-risk tech products include solar panels (polysilicon), semiconductors, electronics components, lithium batteries, printed circuit boards, and computer parts. Our UFLPA attorneys help San Jose importers assess risk and implement traceability systems.',
        },
        {
          question: 'Can you help release UFLPA-detained goods for San Jose companies?',
          answer: 'Yes. Our San Jose UFLPA attorneys respond within 24 hours to detained shipments. We prepare comprehensive evidence packages including supply chain documentation, audit reports, and traceability records to rebut the forced labor presumption and secure release.',
        },
      ]),
    ],
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-montserrat text-neutral-darkGray bg-white min-h-screen">
      <section className="hero" aria-label="UFLPA Attorney San Jose Hero">
        <picture className="hero-bg">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation" width="1920" height="1080" loading="eager" decoding="async" className="hero-bg-image" />
        </picture>
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="container">
          <h1>UFLPA Attorney<br />San Jose CA</h1>
          <p className="hero-subtitle">Expert UFLPA attorney serving San Jose and Silicon Valley. The Uyghur Forced Labor Prevention Act has detained billions in goods. Our forced labor compliance lawyers help San Jose businesses navigate supply chain requirements and defend against detentions.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="hero-cta">Free UFLPA Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">UFLPA Compliance for San Jose Importers</h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">San Jose is the heart of Silicon Valley's tech industry. Our <strong>UFLPA attorneys</strong> help Bay Area businesses understand forced labor compliance and defend against costly detentions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed">When tech imports are detained, time is critical. Our <strong>UFLPA attorneys</strong> respond within 24 hours to prepare evidence packages.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Supply Chain Mapping</h3>
              <p className="text-text-secondary leading-relaxed">We help San Jose businesses trace their supply chains to identify <strong>Xinjiang exposure</strong> and implement traceability systems.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Compliance Programs</h3>
              <p className="text-text-secondary leading-relaxed">Proactive compliance prevents detentions. Our <strong>forced labor compliance</strong> programs include supplier audits and due diligence protocols.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">UFLPA Services for San Jose Businesses</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">UFLPA Detention Response</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Our San Jose <strong>UFLPA detention attorneys</strong> prepare comprehensive evidence packages demonstrating your goods are not made with forced labor.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>24-hour emergency response</li>
                <li>Supply chain documentation</li>
                <li>"Clear and convincing" evidence</li>
                <li>CBP negotiations</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Supply Chain Due Diligence</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Understanding your supply chain is essential for <strong>UFLPA compliance</strong>. We help San Jose businesses map and document supplier relationships.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Multi-tier supplier mapping</li>
                <li>Xinjiang exposure assessment</li>
                <li>Factory audit coordination</li>
                <li>Documentation protocols</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Compliance Program Development</h3>
              <p className="text-text-secondary leading-relaxed mb-4">Prevent UFLPA detentions with a robust compliance program aligned with CBP guidance.</p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Supplier code of conduct</li>
                <li>Audit and monitoring programs</li>
                <li>Worker interview protocols</li>
                <li>Remediation procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">UFLPA Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/resources/uflpa-compliance-guide" className="service-link"><span className="service-link__title">UFLPA Compliance Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/supply-chain-esg-compliance-guide" className="service-link"><span className="service-link__title">Supply Chain ESG Guide</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">San Jose Locations</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/san-jose-trade-attorney" className="service-link"><span className="service-link__title">San Jose Trade Attorney</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/silicon-valley-trade-law" className="service-link"><span className="service-link__title">Silicon Valley Services</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Related Services</h3>
              <div className="space-y-0">
                <div className="service-link-item"><Link to="/customs-defense-litigation" className="service-link"><span className="service-link__title">Customs Defense</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
                <div className="service-link-item"><Link to="/trade-law-faq" className="service-link"><span className="service-link__title">UFLPA FAQ</span><div className="triangle-slide"><svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedCityPages currentCity="San Jose" region="bay-area" />

      <section className="py-20 px-6 bg-primary-navy text-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond mb-6 text-white">Protect Your Supply Chain from UFLPA Risk</h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">Don't wait for a detention notice. Our San Jose UFLPA attorneys help you assess risk and implement compliance programs.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact" variant="solid">Free UFLPA Consultation</Button>
            <Button href={siteConfig.phoneTel} variant="outline">Call {siteConfig.phoneDisplay}</Button>
          </div>
        </div>
      </section>

      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default SanJoseUFLPAPage;
