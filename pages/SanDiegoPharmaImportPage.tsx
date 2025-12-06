
import React, { lazy, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';


// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));

const SanDiegoPharmaImportPage: React.FC = () => {
  useMeta({
    title: 'Pharmaceutical Import Attorney San Diego | Drug Import Lawyer',
    description: 'San Diego pharmaceutical import attorney & drug import lawyer. Expert FDA compliance, drug importation, medical device customs. Biotech trade law. (310) 744-1328.',
    keywords: 'pharmaceutical import attorney san diego, drug import lawyer san diego, fda compliance attorney, medical device import lawyer, biotech trade attorney san diego, pharma customs lawyer california',
    canonical: 'san-diego-pharmaceutical-import-attorney',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-pharma-sd.jpg`,
    schema: [
      generateLocalBusinessSchema(),
      generateWebPageSchema({
        title: 'San Diego Pharmaceutical Import Attorney - Drug & Medical Device Import Lawyer',
        description: 'San Diego pharmaceutical import attorney specializing in drug importation, FDA compliance, medical device customs, and biotech trade law.',
        url: `${siteConfig.siteUrl}/san-diego-pharmaceutical-import-attorney`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'California Service Areas', url: `${siteConfig.siteUrl}/california-offices` },
        { name: 'San Diego Pharmaceutical Import Attorney', url: `${siteConfig.siteUrl}/san-diego-pharmaceutical-import-attorney` }
      ]),
      generateFAQSchema([
        {
          question: 'What FDA requirements apply to pharmaceutical imports?',
          answer: 'Pharmaceutical imports must comply with strict FDA requirements including: (1) FDA establishment registration for drug manufacturers and repackagers, (2) drug listing for all marketed drugs, (3) prior notice for imported drugs and devices, (4) compliance with Current Good Manufacturing Practice (CGMP) requirements, (5) FDA import entry review and may-detain holds, (6) labeling compliance (21 CFR Part 201), and (7) New Drug Application (NDA) or Abbreviated New Drug Application (ANDA) approval for prescription drugs.',
        },
        {
          question: 'Can I import prescription drugs from other countries for resale in the U.S.?',
          answer: 'Generally, no. With limited exceptions, importing prescription drugs from foreign countries for commercial distribution is prohibited without FDA approval. Drugs must be manufactured in FDA-registered facilities under CGMP and have approved NDAs/ANDAs. Unauthorized drug importation can result in FDA detention, seizure, injunction, and criminal prosecution. Recent FDA guidance allows limited importation from Canada under specific state programs, but this remains highly restricted.',
        },
        {
          question: 'What is an FDA detention and how do I resolve it?',
          answer: 'FDA detains pharmaceutical and medical device shipments that "appear" to violate the Federal Food, Drug, and Cosmetic Act. Common detention reasons include: unapproved drugs, misbranding, adulteration, CGMP violations, or lack of establishment registration. To resolve, you must submit evidence to FDA demonstrating compliance (Detention & Hearing Package). If unsuccessful, FDA may refuse entry and require re-export or destruction. We help pharma importers prepare strong responses and negotiate with FDA.',
        },
        {
          question: 'How do medical device imports differ from drug imports?',
          answer: 'Medical devices have different FDA regulatory pathways: Class I (general controls), Class II (510(k) premarket notification), and Class III (PMA - premarket approval). Device manufacturers must register with FDA and list devices. Imports require compliance with labeling, Quality System Regulation (QSR), and device-specific requirements. While somewhat less restrictive than drugs, device imports still face FDA detention for non-compliance. We help device importers navigate FDA classification and import procedures.',
        },
        {
          question: 'What are CBP\'s duties on pharmaceutical imports?',
          answer: 'Most finished pharmaceutical products (prescription drugs) enter duty-free under HTS 3004. Active pharmaceutical ingredients (APIs) and certain other pharma products may face duties. However, proper HTS classification is still critical for: (1) FDA jurisdiction determination, (2) Section 301 tariff applicability, (3) antidumping/countervailing duty coverage (especially APIs from China/India), and (4) free trade agreement qualification. We ensure proper classification and duty treatment.',
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
      <section className="hero" aria-label="San Diego Pharmaceutical Import Attorney Hero">
        <picture className="hero-bg">
          <img
            src="/images/hero-port-background-2.jpg"
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
          <h1>San Diego Pharmaceutical Import Attorney<br />Drug & Medical Device Lawyer</h1>
          <p className="hero-subtitle">
            Expert pharmaceutical import attorney serving San Diego biotech and life sciences companies. Specialized FDA compliance, drug importation, medical device customs, and pharmaceutical trade law.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact#schedule-consultation" className="hero-cta">Free Consultation</Link>
            <a href="tel:+13107441328" className="hero-cta-outline">Call (310) 744-1328</a>
          </div>
        </div>
      </section>

      {/* Why Choose Pharma Import Attorney */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-6">
              Life Sciences Trade Law Expertise
            </h2>
            <div className="w-24 h-1 bg-secondary-teal mx-auto mb-6"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              San Diego is a <strong>global biotech and life sciences hub</strong> with over 1,300 life sciences companies. Our pharmaceutical import attorneys understand the complex FDA and customs requirements facing pharma and medical device importers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Pharma Specialization</h3>
              <p className="text-text-secondary leading-relaxed">
                We focus on <strong>pharmaceutical and medical device</strong> trade law. Deep expertise in FDA regulations, drug importation, CGMP compliance, and pharma-specific customs issues.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FDA Detention Defense</h3>
              <p className="text-text-secondary leading-relaxed">
                Experienced defending <strong>FDA detentions and refusals</strong> of pharmaceutical imports. We prepare strong Detention & Hearing Packages to secure cargo release.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-teal">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Biotech Hub Knowledge</h3>
              <p className="text-text-secondary leading-relaxed">
                We understand <strong>San Diego's biotech ecosystem</strong> and the unique import challenges facing pharma manufacturers, contract research organizations, and medical device companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmaceutical Import Services */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Pharmaceutical Import Services
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Compliance & Registration</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Pharmaceutical imports require <strong>extensive FDA compliance</strong>. We help pharma companies navigate establishment registration, drug listing, and import entry procedures.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA establishment registration (drugs and devices)</li>
                <li>Drug listing and National Drug Code (NDC) assignment</li>
                <li>Prior notice requirements for FDA-regulated products</li>
                <li>FDA import entry review and admissibility</li>
                <li>CGMP (Current Good Manufacturing Practice) compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Drug Importation & NDA/ANDA Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Commercial drug imports require <strong>FDA approval</strong> through New Drug Applications (NDAs) or Abbreviated New Drug Applications (ANDAs). Unauthorized imports face detention and seizure.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>NDA/ANDA approval verification for drug imports</li>
                <li>API (Active Pharmaceutical Ingredient) importation</li>
                <li>Excipient and inactive ingredient imports</li>
                <li>Biosimilar and biologic drug imports</li>
                <li>Foreign drug manufacturer qualification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Medical Device Import Compliance</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Medical devices face <strong>class-based FDA regulations</strong>. We help device importers navigate 510(k) clearance, PMA approval, and Quality System Regulation (QSR) requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Device classification (Class I, II, III)</li>
                <li>510(k) premarket notification compliance</li>
                <li>PMA (Premarket Approval) for Class III devices</li>
                <li>Quality System Regulation (21 CFR Part 820) compliance</li>
                <li>Medical Device Reporting (MDR) obligations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">FDA Detention & Refusal Defense</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                FDA detains pharmaceutical shipments that <strong>appear to violate</strong> the FD&C Act. We prepare comprehensive responses to secure cargo release and prevent future detentions.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>FDA Notice of Detention response</li>
                <li>Detention & Hearing Package preparation</li>
                <li>Refusal of Entry (FDA Form 766) appeals</li>
                <li>Import Alert compliance and removal strategies</li>
                <li>Reconditioning and relabeling for FDA compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Pharmaceutical HTS Classification & Duties</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Proper pharmaceutical classification affects <strong>duty rates, FDA jurisdiction</strong>, and trade agreement qualification. We ensure accurate classification for pharma products.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Finished dosage form classification (HTS 3004 - often duty-free)</li>
                <li>Active pharmaceutical ingredient (API) classification</li>
                <li>Medical device and diagnostic classification</li>
                <li>Pharmaceutical raw materials and excipients</li>
                <li>Free trade agreement qualification (USMCA for Canadian/Mexican drugs)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary-navy mb-3 font-garamond">Clinical Trial Materials & Research Imports</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Clinical trial materials and research samples have <strong>special import procedures</strong>. We help biotech and CROs import investigational drugs and devices compliantly.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Investigational New Drug (IND) import compliance</li>
                <li>Investigational Device Exemption (IDE) imports</li>
                <li>Laboratory research samples and reagents</li>
                <li>Biological specimens and human tissue</li>
                <li>Temporary importation under bond (TIB) for clinical materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Life Sciences Sectors */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Life Sciences Sectors We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Pharmaceuticals</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Prescription Drugs (Brand & Generic)</li>
                <li>• Over-the-Counter (OTC) Drugs</li>
                <li>• Biologics & Biosimilars</li>
                <li>• Active Pharmaceutical Ingredients (APIs)</li>
                <li>• Pharmaceutical Excipients</li>
                <li>• Contract Manufacturing Organizations</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Medical Devices</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Diagnostic Devices & Test Kits</li>
                <li>• Surgical Instruments & Implants</li>
                <li>• Class II & III Medical Devices</li>
                <li>• In Vitro Diagnostics (IVDs)</li>
                <li>• Wearable Medical Devices</li>
                <li>• Combination Products (Drug/Device)</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Biotech & Research</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Biotechnology Companies</li>
                <li>• Contract Research Organizations (CROs)</li>
                <li>• Clinical Trial Materials</li>
                <li>• Laboratory Reagents & Supplies</li>
                <li>• Cell & Gene Therapy Products</li>
                <li>• Research Institutions & Universities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* San Diego Biotech Hub */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Serving San Diego Life Sciences Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">San Diego Biotech Clusters</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We serve <strong>San Diego's thriving biotech industry</strong>:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Torrey Pines Mesa (Scripps Research, biotech hub)</li>
                <li>• Sorrento Valley (pharma and device companies)</li>
                <li>• University City & UTC</li>
                <li>• La Jolla (UCSD, research institutions)</li>
                <li>• Downtown San Diego biotech</li>
                <li>• Carlsbad & North County biotech corridor</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Greater San Diego Area</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Life sciences companies throughout San Diego County:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Carlsbad & Oceanside</li>
                <li>• Vista & San Marcos</li>
                <li>• Escondido & Rancho Bernardo</li>
                <li>• Poway & Scripps Ranch</li>
                <li>• Chula Vista & South Bay</li>
                <li>• El Cajon & East County</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-navy text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-garamond text-white text-center">San Diego: Global Biotech Leader</h3>
            <p className="text-center text-neutral-200 mb-4">
              San Diego is the <strong>3rd largest biotech cluster in the U.S.</strong>, home to over 1,300 life sciences companies employing 65,000+ people. Our pharmaceutical import attorneys serve this innovative community with expert FDA and customs compliance counsel.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Why Life Sciences Companies Choose Trembach Law
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Pharmaceutical Trade Specialization</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Unlike general trade lawyers, we have <strong>deep expertise in pharma and medical device</strong> imports. We understand FDA regulations, CGMP requirements, and the unique customs challenges facing life sciences importers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">FDA Detention Success Rate</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We have a <strong>strong track record</strong> securing release of detained pharmaceutical and medical device shipments through well-prepared Detention & Hearing Packages and FDA negotiations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Clinical Trial & Research Expertise</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We regularly assist <strong>biotech companies and CROs</strong> with importing investigational drugs, clinical trial materials, and research samples under IND/IDE protocols.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-navy mb-4 font-garamond">Startup to Big Pharma</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                We represent <strong>biotech startups through major pharmaceutical companies</strong>. Whether you're importing research materials or commercial drug products, we provide expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-8 text-center">
            Serving San Diego Life Sciences
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-primary-navy mb-4">Trembach Law Firm</h3>
              <address className="not-italic text-text-secondary leading-relaxed mb-4">
                <strong>27001 Agoura Road, Suite 350</strong><br />
                Calabasas, CA 91301<br />
                (Serving San Diego Biotech & Life Sciences)<br /><br />
                <strong>Phone:</strong> <a href="tel:+13107441328" className="text-secondary-teal hover:underline">(310) 744-1328</a><br />
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
              </address>
              <p className="text-text-secondary text-sm mb-4">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM<br />
                <strong>Service:</strong> Statewide California representation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-primary-navy mb-3">Port & FDA Access</h4>
              <ul className="text-sm text-text-secondary space-y-2">
                <li><strong>Port of San Diego:</strong> Pharmaceutical cargo entry support</li>
                <li><strong>FDA Pacific Region:</strong> Coordination with FDA-ORA offices</li>
                <li><strong>LAX/SAN Air Cargo:</strong> Air freight pharma shipments</li>
                <li><strong>Clinical Materials:</strong> Special procedures for IND/IDE imports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-garamond text-primary-navy mb-12 text-center">
            Related Life Sciences Trade Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">FDA Compliance</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/practice-areas" className="service-link">
                    <span className="service-link__title">FDA Compliance Programs</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">CBP Defense</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/customs-defense" className="service-link">
                    <span className="service-link__title">Customs Defense & Litigation</span>
                    <div className="triangle-slide">
                      <svg className="triangle-slide__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-xl font-bold text-primary-navy mb-4 font-garamond">Tariff Services</h3>
              <div className="space-y-0">
                <div className="service-link-item">
                  <Link to="/resources/tariffs-duties-classification" className="service-link">
                    <span className="service-link__title">HTS Classification</span>
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
            Schedule Your Free Pharmaceutical Import Consultation
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed text-white">
            Contact our San Diego pharmaceutical import attorneys today. We'll review your FDA compliance, assess import procedures, and provide expert guidance for drug and medical device imports.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/contact#schedule-consultation" variant="solid">
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

export default SanDiegoPharmaImportPage;
