
import React, { lazy, Suspense, useEffect } from 'react';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanJoseTechExportControlsPage: React.FC = () => {
  useMeta({
    title: 'Tech Export Controls Attorney San Jose | Silicon Valley ITAR EAR Lawyer',
    description: 'San Jose tech export controls attorney for Silicon Valley. Expert semiconductor, software, AI/ML export controls. ITAR, EAR, deemed exports, BIS licensing. (310) 744-1328.',
    keywords: 'tech export controls attorney san jose, silicon valley export lawyer, semiconductor export controls san jose, software export attorney california, ai ml export controls, deemed export lawyer san jose',
    canonical: 'san-jose-tech-export-controls',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-tech-export.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Jose Tech Export Controls Attorney - Silicon Valley Technology Export Compliance',
        description: 'Expert San Jose tech export controls attorney specializing in Silicon Valley semiconductor, software, AI/ML, and emerging technology export controls, ITAR, EAR, and deemed export compliance.',
        url: `${siteConfig.siteUrl}/san-jose-tech-export-controls`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Jose Tech Export Controls', url: `${siteConfig.siteUrl}/san-jose-tech-export-controls` }
      ]),
      generateFAQSchema([
        {
          question: 'What export controls apply to semiconductor technology in Silicon Valley?',
          answer: 'Semiconductor technology faces extensive export controls under the Export Administration Regulations (EAR). Advanced semiconductors, integrated circuits, and semiconductor manufacturing equipment are controlled under various ECCNs (3A001, 3B001, 3D001, 3E001). Recent China semiconductor restrictions (October 2022 and October 2023 rules) impose strict licensing requirements for exports to China of advanced computing chips, semiconductor manufacturing equipment, and related technology. Our San Jose tech export controls attorney helps Silicon Valley semiconductor companies navigate these complex regulations.',
        },
        {
          question: 'Do software and source code exports require licenses?',
          answer: 'Yes, software and source code can require export licenses depending on classification. Encryption software (ECCN 5D002) requires CCATS filing or self-classification. Cybersecurity tools, intrusion software, and AI/ML algorithms may be controlled. "Deemed exports" of controlled software source code to foreign national employees require Technology Control Plans and potentially licenses. Our San Jose attorney provides software classification, CCATS filing, and deemed export compliance for Silicon Valley tech companies.',
        },
        {
          question: 'How do China technology export restrictions affect Silicon Valley companies?',
          answer: 'Recent U.S. export controls targeting China\'s technology sector significantly impact Silicon Valley. The October 2022 and 2023 semiconductor rules restrict exports of advanced computing chips, GPU/AI chips, and semiconductor equipment to China. Entity List additions include hundreds of Chinese tech companies. Foreign Direct Product Rules (FDPR) capture products made abroad using U.S. technology. Our San Jose tech export controls attorney helps you navigate these evolving China restrictions.',
        },
        {
          question: 'What are deemed exports and why do they matter for tech companies with diverse workforces?',
          answer: 'A "deemed export" occurs when controlled technology or source code is shared with foreign nationals in the United States. Silicon Valley tech companies with international engineering teams face significant deemed export compliance obligations. Sharing controlled semiconductor designs, AI algorithms, or software source code with foreign national employees requires Technology Control Plans, screening procedures, and potentially licenses. Violations carry penalties up to $330,000 per violation and criminal prosecution.',
        },
        {
          question: 'How do I classify my AI/ML technology under export controls?',
          answer: 'AI/ML technology classification is complex and evolving. Neural networks, machine learning models, and AI algorithms may be controlled under various ECCNs (4A090, 4D090, 4E001) depending on application. The 2023 Interim Final Rule on AI Diffusion established new reporting requirements for advanced AI models. Our San Jose tech export controls attorney provides AI/ML classification analysis, license determination, and compliance program implementation for Silicon Valley AI companies.',
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
      <section className="hero" aria-label="San Jose Tech Export Controls Hero">
        <picture className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
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
          <h1>San Jose Tech Export Controls Attorney<br />Silicon Valley Technology Export Lawyer</h1>
          <p className="hero-subtitle">
            Expert export controls for Silicon Valley technology companies. Semiconductor, software, AI/ML export compliance. ITAR, EAR, deemed exports, and China restrictions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#schedule-consultation" className="hero-cta">Free Tech Export Consultation</a>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose San Jose Tech Export Controls Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Silicon Valley Technology Export Controls Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              San Jose is the <strong>heart of Silicon Valley</strong>, home to the world's leading semiconductor, software, and AI technology companies. These cutting-edge technologies face increasingly strict U.S. export controls, particularly for China exports. Our San Jose tech export controls attorney specializes in helping technology companies navigate ITAR, EAR, deemed exports, and emerging technology restrictions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology Industry Focus</h3>
              <p className="text-text-secondary leading-relaxed">
                Exclusive focus on <strong>high-tech export controls</strong>: semiconductors, software, AI/ML, cybersecurity, telecommunications, and emerging technologies.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep understanding of <strong>Silicon Valley business models</strong>, technology development cycles, and unique export compliance challenges.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">China Restrictions Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Current expertise on <strong>evolving China semiconductor and AI restrictions</strong>, Entity List additions, and Foreign Direct Product Rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Export Controls Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Technology Export Controls Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Semiconductor Export Controls & China Restrictions</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The U.S. government has imposed <strong>sweeping semiconductor export controls</strong> targeting China's technology sector. Our San Jose tech export controls attorney provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Advanced computing chip classification (October 2022/2023 rules)</li>
                <li>Semiconductor manufacturing equipment licensing (ECCN 3B001)</li>
                <li>China semiconductor restrictions compliance</li>
                <li>Entity List screening (Huawei, SMIC, hundreds of Chinese tech entities)</li>
                <li>Foreign Direct Product Rule (FDPR) analysis</li>
                <li>"Notified Advanced Computing" item licensing</li>
                <li>BIS license applications for China semiconductor exports</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Software & Source Code Export Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Software and source code exports require <strong>careful classification and compliance</strong>. Silicon Valley software companies face:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Encryption software classification (ECCN 5D002) and CCATS filing</li>
                <li>Encryption self-classification reports to BIS</li>
                <li>Cybersecurity tools and intrusion software controls</li>
                <li>Open source software vs. proprietary software analysis</li>
                <li>Cloud-based software export compliance</li>
                <li>Software-as-a-Service (SaaS) export requirements</li>
                <li>Source code deemed export controls for foreign developers</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">AI & Machine Learning Export Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                AI and ML technology face <strong>rapidly evolving export controls</strong>. Our San Jose attorney helps Silicon Valley AI companies navigate:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>AI/ML algorithm and model classification</li>
                <li>2023 AI Diffusion Interim Final Rule compliance</li>
                <li>Advanced AI model reporting requirements</li>
                <li>Neural network and deep learning export controls</li>
                <li>Facial recognition technology controls</li>
                <li>Autonomous systems and AI-enabled hardware</li>
                <li>China AI export restrictions and licensing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Deemed Export Compliance for Tech Workforces</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Silicon Valley's <strong>diverse international workforce</strong> creates significant deemed export compliance obligations. We help with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Technology Control Plans (TCPs) for controlled technology</li>
                <li>Foreign national employee screening and nationality verification</li>
                <li>Controlled technology access restrictions and facility segregation</li>
                <li>Deemed export license applications (Technology License, TAA)</li>
                <li>Foreign national hiring compliance procedures</li>
                <li>Contractor and visitor access controls</li>
                <li>Training programs for engineers, HR, and management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Emerging Technology Export Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The U.S. government is actively developing export controls for <strong>emerging and foundational technologies</strong>. We monitor and advise on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Quantum computing export controls (ECCN 3A090, 4A090)</li>
                <li>Advanced materials and nanomaterials</li>
                <li>Biotechnology and synthetic biology</li>
                <li>Additive manufacturing (3D printing) technology</li>
                <li>Advanced robotics and autonomous systems</li>
                <li>Advanced surveillance technology</li>
                <li>Brain-computer interface technology</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">BIS Enforcement Defense & Voluntary Self-Disclosure</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                BIS aggressively enforces export controls, particularly for <strong>China-related violations</strong>. Our defense services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>BIS Office of Export Enforcement investigation defense</li>
                <li>Administrative subpoena response</li>
                <li>Voluntary Self-Disclosure (VSD) preparation and filing</li>
                <li>Entity List and Denied Persons List defense</li>
                <li>Civil penalty mitigation and settlement negotiation</li>
                <li>Export privilege denial defense</li>
                <li>Coordination with DOJ for criminal matters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Silicon Valley Technology Sectors */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Silicon Valley Technology Sectors We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Semiconductors & Chips', items: ['Advanced computing chips', 'GPU and AI accelerators', 'Integrated circuits', 'Semiconductor manufacturing equipment'] },
              { title: 'Software & Cloud', items: ['Encryption software', 'Cybersecurity tools', 'SaaS platforms', 'Enterprise software'] },
              { title: 'AI & Machine Learning', items: ['AI/ML algorithms', 'Neural networks', 'Computer vision', 'Natural language processing'] },
              { title: 'Telecommunications', items: ['5G technology', 'Network equipment', 'Telecom infrastructure', 'Wireless technology'] },
              { title: 'Quantum & Emerging Tech', items: ['Quantum computing', 'Quantum cryptography', 'Advanced robotics', 'Nanotechnology'] },
              { title: 'Defense & Aerospace Tech', items: ['Defense electronics', 'Avionics systems', 'Satellite technology', 'Drone/UAV technology'] },
            ].map((sector) => (
              <div key={sector.title} className="bg-neutral-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary-navy mb-3 font-garamond">{sector.title}</h3>
                <ul className="space-y-1 text-text-secondary text-sm">
                  {sector.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-secondary-teal mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* China Export Restrictions Overview */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Understanding China Technology Export Restrictions
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Recent China Semiconductor Rules</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              The U.S. government has imposed unprecedented export controls targeting China's semiconductor and AI sectors:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-secondary-teal pl-4">
                <h4 className="font-bold text-primary-navy mb-2">October 2022 Semiconductor Rules</h4>
                <p className="text-text-secondary text-sm">Restrictions on advanced computing chips, semiconductor manufacturing equipment, and related technology exports to China. Introduced "notified advanced computing" items requiring licenses.</p>
              </div>
              <div className="border-l-4 border-secondary-teal pl-4">
                <h4 className="font-bold text-primary-navy mb-2">October 2023 Updates</h4>
                <p className="text-text-secondary text-sm">Expanded restrictions on AI chips, GPU/AI accelerators, and semiconductor manufacturing equipment. Closed loopholes and strengthened controls.</p>
              </div>
              <div className="border-l-4 border-secondary-teal pl-4">
                <h4 className="font-bold text-primary-navy mb-2">Entity List Additions</h4>
                <p className="text-text-secondary text-sm">Hundreds of Chinese technology companies added to Entity List, including major chip manufacturers, AI companies, and research institutions.</p>
              </div>
              <div className="border-l-4 border-secondary-teal pl-4">
                <h4 className="font-bold text-primary-navy mb-2">Foreign Direct Product Rules</h4>
                <p className="text-text-secondary text-sm">Expanded FDPR coverage capturing products made abroad using U.S. technology, affecting global supply chains.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our San Jose Tech Export Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Choose Our Tech Export Controls Attorneys
          </h2>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Technology-Specific Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We specialize in <strong>high-tech export controls</strong> - semiconductors, software, AI/ML, and emerging technologies. Not general export controls, but tech-specific expertise.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Silicon Valley Understanding</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Deep knowledge of <strong>Silicon Valley business models</strong>, technology development, and startup-to-enterprise export compliance needs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Current with Regulations</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We monitor <strong>rapidly evolving export controls</strong> targeting China, AI, semiconductors, and emerging technologies. You get current, actionable advice.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Business-Focused Solutions</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We balance compliance with <strong>business growth</strong>, helping you export compliantly while enabling innovation and market expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving San Jose & Silicon Valley
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving San Jose & Silicon Valley)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Virtual Consultations:</strong> Preferred for Silicon Valley clients
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-primary-navy mb-3">Silicon Valley Coverage</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>San Jose:</strong> Downtown, North San Jose, Alviso</li>
                <li><strong>Silicon Valley:</strong> Santa Clara, Sunnyvale, Milpitas</li>
                <li><strong>Peninsula:</strong> Palo Alto, Mountain View, Menlo Park</li>
                <li><strong>South Bay:</strong> Cupertino, Campbell, Los Gatos</li>
                <li><strong>Virtual Services:</strong> Full export controls compliance remotely</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Tech Export Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center">
            {/* Legal Services */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Export Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#encryption-ccats" className="service-link">
                    <span className="service-link__title">Encryption CCATS Filing</span>
                    <p className="service-link__description">Software encryption classification</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#china-export-licensing" className="service-link">
                    <span className="service-link__title">China Export Licensing</span>
                    <p className="service-link__description">BIS license applications</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#tcp-deemed-exports" className="service-link">
                    <span className="service-link__title">Technology Control Plans</span>
                    <p className="service-link__description">Deemed export compliance</p>
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
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Bay Area Tech Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#san-francisco-export-controls" className="service-link">
                    <span className="service-link__title">San Francisco Export Controls</span>
                    <p className="service-link__description">Bay Area tech compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#palo-alto-tech-export" className="service-link">
                    <span className="service-link__title">Palo Alto Tech Export</span>
                    <p className="service-link__description">Stanford area compliance</p>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tech Export Resources</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <a href="#resources/semiconductor-export-controls" className="service-link">
                    <span className="service-link__title">Semiconductor Export Guide</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/software-export-classification" className="service-link">
                    <span className="service-link__title">Software Export Classification</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="service-link-item">
                  <a href="#resources/china-tech-restrictions" className="service-link">
                    <span className="service-link__title">China Tech Restrictions</span>
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
            Navigate Tech Export Controls with Confidence
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Silicon Valley technology companies face complex and rapidly evolving export controls. Our San Jose tech export controls attorneys provide specialized expertise for semiconductors, software, AI, and emerging technologies. Free consultation.
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

export default SanJoseTechExportControlsPage;
