
import React, { useEffect } from 'react';
import { useMeta } from '../hooks/useMeta';
import { generateBreadcrumbSchema } from '../utils/seo';

const AttorneyAdvertisingPage: React.FC = () => {
  useMeta({
    title: 'Attorney Advertising - Trembach Law Firm',
    description: 'Attorney advertising disclosures and compliance information for Trembach Law Firm\'s website.',
    robots: 'noindex, nofollow',
    ogImage: 'https://trembach.law/og-image-default.jpg',
    ogImageAlt: 'Attorney Advertising - Trembach Law Firm Legal Information',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: 'Attorney Advertising', url: 'attorney-advertising' },
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-32 px-6 text-center overflow-hidden flex flex-col justify-center min-h-[50vh]">
        {/* Background Image - LCP element */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
            alt="Professional legal workplace representing attorney advertising disclosures and legal notices"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width="2069"
            height="1380"
          />
          {/* Overlay with 55% opacity for better text visibility */}
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(1, 33, 105, 0.55)'}}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-5xl md:text-7xl font-bold font-garamond mb-6 tracking-tight leading-tight" style={{color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'}}>
            Attorney Advertising
          </h1>
          <div className="w-24 h-1 bg-secondary-teal mx-auto mt-6"></div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto font-montserrat text-neutral-darkGray pb-20 px-6 pt-16">

        <div className="space-y-8 leading-relaxed">
          <section aria-labelledby="effective-date">
            <p className="font-semibold mb-4">
              Effective Date: November 18, 2025
            </p>
            <p className="mb-4">
              <strong>RESPONSIBLE ATTORNEY:</strong><br />
              Anatolii Trembach, State Bar of California No. 349304<br />
              Trembach Law Firm, APC<br />
              27001 Agoura Road, Suite 350<br />
              Calabasas, California 91301<br />
              Phone: 631-746-8290<br />
              Email: <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
            </p>
          </section>

          <section className="bg-yellow-50 border-l-4 border-gold-primary p-6 my-8">
            <p className="font-semibold text-lg">
              <strong>ATTORNEY ADVERTISING:</strong> This website constitutes attorney advertising. Prior results do not guarantee a similar outcome. The information on this website is for general informational purposes only and does not constitute legal advice.
            </p>
          </section>

          <section id="nature" aria-labelledby="nature-heading">
            <h2 id="nature-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">1. NATURE OF THIS WEBSITE</h2>
            <p className="mb-4">
              This website, <a href="https://www.trembachlaw.com" className="text-secondary-teal hover:underline">www.trembachlaw.com</a>, is maintained by Trembach Law Firm, APC and is considered attorney advertising under the California Rules of Professional Conduct, specifically Rules 7.1, 7.2, and 7.3, and applicable provisions of the California Business and Professions Code (Sections 6157-6159.2).
            </p>
            <p className="mb-4 font-semibold">
              WHAT THIS MEANS: The content on this website is designed, in part, to provide information about our legal services and to attract potential clients who may need assistance with international trade law and customs law matters.
            </p>
          </section>

          <section id="responsible-attorney" aria-labelledby="responsible-heading">
            <h2 id="responsible-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">2. RESPONSIBLE ATTORNEY</h2>
            <p className="mb-4 font-semibold">ATTORNEY RESPONSIBLE FOR CONTENT:</p>
            <address className="not-italic mb-4">
              Anatolii Trembach<br />
              State Bar of California No. 349304<br />
              Trembach Law Firm, APC<br />
              27001 Agoura Road, Suite 350<br />
              Calabasas, California 91301<br />
              Phone: 631-746-8290<br />
              Email: <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
            </address>
          </section>

          <section id="past-results" aria-labelledby="results-heading" className="bg-gray-light border-l-4 border-primary-navy p-6 my-8">
            <h2 id="results-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">3. IMPORTANT NOTICE REGARDING PAST RESULTS</h2>
            <p className="mb-4 font-semibold text-lg">PRIOR RESULTS DO NOT GUARANTEE A SIMILAR OUTCOME</p>
            <p className="mb-4">This is one of the most important notices for potential clients to understand:</p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">3.1 About Case Results and Testimonials</h3>
            <p className="mb-2">This website may contain:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>References to past case outcomes</li>
              <li>Settlement amounts or verdicts obtained</li>
              <li>Client testimonials and reviews</li>
              <li>Case studies and examples</li>
              <li>Success stories</li>
              <li>Awards and recognitions</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">3.2 Critical Understanding</h3>
            <p className="mb-4 font-semibold">
              EVERY CASE IS UNIQUE: Each legal matter depends on its own specific facts, applicable laws, jurisdiction, timing, parties involved, and numerous other factors. What happened in one case does not predict what will happen in another case, even if the cases appear similar.
            </p>
            <p className="mb-2 font-semibold">PAST RESULTS ARE NOT PREDICTIVE:</p>
            <p className="mb-2">Any case results, verdicts, settlements, or outcomes described on this website:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Were obtained based on the unique facts and circumstances of those particular cases</li>
              <li>Do not constitute a guarantee, warranty, or prediction that similar results can be obtained in other cases</li>
              <li>Do not mean that we will achieve the same or similar results in your case</li>
              <li>Should not be used as the sole basis for selecting legal representation</li>
              <li>Are not representative of all cases we have handled</li>
            </ul>
            <p className="mb-4 font-semibold">
              NO GUARANTEES: We cannot and do not guarantee any specific outcome in any legal matter. Your case may result in a more favorable outcome, a less favorable outcome, or a completely different outcome than cases described on this website.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">3.3 Individual Results Vary</h3>
            <p className="mb-2">Legal results depend on many factors including but not limited to:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>The specific facts of your case</li>
              <li>The applicable law at the time of your case</li>
              <li>The jurisdiction where your case is handled</li>
              <li>The quality and availability of evidence</li>
              <li>The credibility and cooperation of witnesses</li>
              <li>The judge or jury assigned to your case</li>
              <li>The competence and strategy of opposing counsel</li>
              <li>Changes in law or regulations</li>
              <li>Factors beyond anyone's control</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">3.4 About Client Testimonials</h3>
            <p className="mb-2">Any client testimonials, reviews, or endorsements featured on this website:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Represent the personal experiences and opinions of individual clients</li>
              <li>Are not necessarily representative of the experience of all clients</li>
              <li>Do not guarantee that you will have the same experience</li>
              <li>Do not predict the outcome of your legal matter</li>
              <li>Should not be the sole basis for selecting legal representation</li>
            </ul>
          </section>

          <section id="selecting-attorney" aria-labelledby="selecting-heading">
            <h2 id="selecting-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">4. SELECTING AN ATTORNEY</h2>
            <p className="mb-4 font-semibold">
              IMPORTANT DECISION: The decision to hire an attorney or law firm is an important decision that should not be based solely upon advertisements, website content, or prior results.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">4.1 Before You Decide</h3>
            <p className="mb-4">Before you decide to hire Trembach Law Firm or any attorney, you should:</p>

            <div className="mb-6">
              <p className="font-semibold mb-2">1. REQUEST INFORMATION:</p>
              <p className="mb-2">Ask us to send you free written information about our qualifications and experience. We are happy to provide you with:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Attorney biographical information</li>
                <li>Educational background</li>
                <li>Professional experience</li>
                <li>Areas of practice</li>
                <li>Bar admissions and certifications</li>
                <li>Professional memberships and associations</li>
              </ul>

              <p className="font-semibold mb-2 mt-4">2. SCHEDULE A CONSULTATION:</p>
              <p className="mb-4">Meet with us (in person, by phone, or by video conference) to discuss your specific legal needs and determine if we are a good fit</p>

              <p className="font-semibold mb-2 mt-4">3. ASK QUESTIONS:</p>
              <p className="mb-2">Don't hesitate to ask questions about:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Our experience with cases similar to yours</li>
                <li>Our approach to handling your type of matter</li>
                <li>Expected costs and fee structures</li>
                <li>Potential challenges in your case</li>
                <li>Realistic expectations for outcomes</li>
                <li>Timeline and process</li>
              </ul>

              <p className="font-semibold mb-2 mt-4">4. CONSIDER MULTIPLE OPTIONS:</p>
              <p className="mb-4">Consider speaking with multiple attorneys before making your decision</p>

              <p className="font-semibold mb-2 mt-4">5. REVIEW ENGAGEMENT TERMS CAREFULLY:</p>
              <p className="mb-4">Before signing any engagement agreement, carefully review all terms, fees, and conditions</p>
            </div>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">4.2 To Request Information or Schedule a Consultation</h3>
            <p className="mb-2">
              Phone: 631-746-8290 (available 24 hours a day, 7 days a week)<br />
              Email: <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
            </p>
          </section>

          <section id="qualifications" aria-labelledby="qualifications-heading">
            <h2 id="qualifications-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">5. LAWYER QUALIFICATIONS AND CERTIFICATIONS</h2>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">5.1 Attorney Information</h3>
            <p className="mb-4 font-semibold">ANATOLII TREMBACH</p>

            <div className="mb-6">
              <p className="font-semibold mb-2">BAR ADMISSION:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>State Bar of California, License No. 349304</li>
                <li>Admitted to practice in California state courts (all 58 counties)</li>
                <li>Admitted to practice in federal courts throughout the United States</li>
              </ul>

              <p className="font-semibold mb-2">EDUCATION:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>USC Gould School of Law</li>
              </ul>

              <p className="font-semibold mb-2">AREAS OF PRACTICE:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>International Trade Law</li>
                <li>Customs Law</li>
                <li>Federal Trade Compliance</li>
                <li>Import/Export Regulations</li>
              </ul>

              <p className="font-semibold mb-2">LANGUAGES:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>English</li>
                <li>Ukrainian</li>
                <li>Russian</li>
              </ul>

              <p className="font-semibold mb-2">PROFESSIONAL RECOGNITION:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>2026 Rising Star Recipient</li>
              </ul>

              <p className="font-semibold mb-2">PREVIOUS EXPERIENCE:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Former Ukraine Security Service (SBU) Detective</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">5.2 Certification Statement</h3>
            <p className="mb-4">
              Unless otherwise stated, the attorneys at Trembach Law Firm are not certified by the California Board of Legal Specialization in any area of law. California does not recognize specialties in international trade law or customs law.
            </p>
            <p className="mb-2">The California Board of Legal Specialization certifies attorneys as specialists in the following areas:</p>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>Admiralty and Maritime Law</li>
              <li>Appellate Law</li>
              <li>Bankruptcy Law</li>
              <li>Criminal Law</li>
              <li>Estate Planning, Trust and Probate Law</li>
              <li>Family Law</li>
              <li>Franchise and Distribution Law</li>
              <li>Immigration and Nationality Law</li>
              <li>Legal Malpractice Law</li>
              <li>Taxation Law</li>
              <li>Workers' Compensation Law</li>
            </ul>
            <p className="mb-4">Anatolii Trembach is not certified as a specialist in any of these areas.</p>
          </section>

          <section id="scope" aria-labelledby="scope-heading">
            <h2 id="scope-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">6. SCOPE OF PRACTICE AND JURISDICTION</h2>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">6.1 Where We Practice</h3>
            <p className="mb-2 font-semibold">TREMBACH LAW FIRM, APC IS AUTHORIZED TO PRACTICE LAW IN:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>California State Courts: All 58 California counties</li>
              <li>Federal Courts: Nationwide</li>
              <li>International Trade Law: Federal law throughout the United States</li>
              <li>Customs Law: Federal law throughout the United States</li>
            </ul>
            <p className="mb-4">
              <strong>PRINCIPAL OFFICE LOCATION:</strong><br />
              27001 Agoura Road, Suite 350<br />
              Calabasas, California 91301
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">6.2 Jurisdictional Limitations</h3>
            <p className="mb-4">
              We are not licensed to practice law in any state other than California, except as it pertains to federal international trade and customs law matters. If your legal issue involves state law matters outside of California, we can help you find appropriate counsel or may be able to work with local counsel in your jurisdiction.
            </p>
          </section>

          <section id="fees" aria-labelledby="fees-heading">
            <h2 id="fees-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">7. FEES AND COSTS</h2>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">7.1 Fee Information</h3>
            <p className="mb-4">
              Legal fees and costs vary depending on the nature and complexity of your legal matter. Before engaging our services, we will provide you with clear information about:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Our fee structure (hourly, flat fee, contingency, or other arrangement)</li>
              <li>Estimated costs for your matter</li>
              <li>Billing practices and payment terms</li>
              <li>Any retainer requirements</li>
              <li>Additional costs you may incur (filing fees, expert fees, etc.)</li>
            </ul>
            <p className="mb-4 font-semibold">
              FEE ARRANGEMENTS VARY: The fee structure for your matter will be determined based on its specific nature and will be clearly outlined in your engagement agreement. We will not charge you any fees until we have a signed engagement agreement in place.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">7.2 Cost Disclosure for Contingency Matters</h3>
            <p className="mb-2">If we represent you on a contingency fee basis:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Our fee is contingent upon recovery in your case</li>
              <li>If there is no recovery, you typically do not owe attorney's fees</li>
              <li>You may be responsible for certain costs and expenses regardless of outcome</li>
              <li>The specific terms will be detailed in your engagement agreement</li>
              <li>All contingency fee arrangements will comply with California Rules of Professional Conduct and applicable laws</li>
            </ul>
          </section>

          <section id="compliance" aria-labelledby="compliance-heading">
            <h2 id="compliance-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">8. COMPLIANCE WITH CALIFORNIA ADVERTISING RULES</h2>
            <p className="mb-4">This website and all advertising materials for Trembach Law Firm comply with:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>California Rules of Professional Conduct, Rules 7.1, 7.2, 7.3, and 7.4</li>
              <li>California Business and Professions Code Sections 6157-6159.2</li>
              <li>State Bar of California advertising guidelines</li>
              <li>All applicable federal advertising regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">8.1 Truthful and Non-Misleading Communications</h3>
            <p className="mb-4">
              In accordance with California Rule of Professional Conduct 7.1, we strive to ensure that all communications about our services are truthful and not misleading. We do not make false or misleading statements about:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Our qualifications or experience</li>
              <li>The nature of our services</li>
              <li>Past results or outcomes</li>
              <li>Fees or costs</li>
              <li>Our ability to achieve specific results</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">8.2 Required Disclosures Under Business and Professions Code Section 6158.3</h3>
            <p className="mb-4">
              In addition to any disclosure required by Section 6157.2, Section 6157.3, and the Rules of Professional Conduct, California Business and Professions Code Section 6158.3 provides that when advertising by electronic media conveys a message portraying a result in a particular case or cases, the advertisement must state, in either an oral or printed communication, either of the following disclosures:
            </p>
            <p className="mb-2">(1) The advertisement must adequately disclose the factual and legal circumstances that justify the result portrayed in the message, including the basis for liability and the nature of injury or damage sustained, or</p>
            <p className="mb-4">(2) The advertisement must state that the result portrayed in the advertisement was dependent on the facts of that case, and that the results will differ if based on different facts.</p>
            <p className="mb-4">Use of disclosure alone may not rebut any presumption created in Section 6158.1.</p>
          </section>

          <section id="no-solicitation" aria-labelledby="solicitation-heading">
            <h2 id="solicitation-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">9. NO SOLICITATION</h2>
            <p className="mb-4">
              This website is a general advertisement and not a direct solicitation. We do not engage in improper solicitation of clients.
            </p>
            <p className="mb-4">
              If you contact us through this website or by phone, we will not pressure you to retain our services. Any decision to hire us should be made freely and after careful consideration.
            </p>
          </section>

          <section id="record-retention" aria-labelledby="records-heading">
            <h2 id="records-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">10. RECORD RETENTION</h2>
            <p className="mb-4">
              In compliance with California advertising rules, Trembach Law Firm maintains copies of all advertising materials, including this website content, for the period required by law.
            </p>
          </section>

          <section id="complaints" aria-labelledby="complaints-heading">
            <h2 id="complaints-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">11. CONTACT INFORMATION FOR COMPLAINTS</h2>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">11.1 Questions or Concerns About Advertising</h3>
            <p className="mb-4">If you have questions or concerns about this website or our advertising practices, please contact:</p>
            <address className="not-italic mb-4">
              Trembach Law Firm, APC<br />
              Attention: Advertising Compliance<br />
              27001 Agoura Road, Suite 350<br />
              Calabasas, California 91301<br />
              Phone: 631-746-8290<br />
              Email: <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
            </address>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">11.2 State Bar Complaints</h3>
            <p className="mb-4">If you believe this website or our advertising materials violate California attorney advertising rules, you may file a complaint with:</p>
            <address className="not-italic mb-4">
              State Bar of California<br />
              Office of Chief Trial Counsel<br />
              845 S. Figueroa Street<br />
              Los Angeles, CA 90017<br />
              Phone: (213) 765-1000<br />
              Website: <a href="https://www.calbar.ca.gov" target="_blank" rel="noopener noreferrer" className="text-secondary-teal hover:underline">www.calbar.ca.gov</a>
            </address>
          </section>

          <section id="international" aria-labelledby="international-heading">
            <h2 id="international-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">12. INTERNATIONAL CLIENTS</h2>
            <p className="mb-2">If you are located outside the United States and are viewing this website:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Advertising laws and attorney regulations in your country may differ from those in the United States and California</li>
              <li>Our advertising and this website comply with U.S. and California law</li>
              <li>We practice U.S. federal international trade and customs law</li>
              <li>We can assist with U.S. import/export matters from any location</li>
              <li>Communications with us may be subject to U.S. laws and regulations</li>
            </ul>
          </section>

          <section id="changes" aria-labelledby="changes-heading">
            <h2 id="changes-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">13. CHANGES TO ADVERTISING MATERIALS</h2>
            <p className="mb-4">
              We may modify, update, or change the content of this website and our advertising materials at any time without notice. The effective date at the top of this page indicates when this notice was last updated.
            </p>
          </section>

          <section id="additional-disclaimers" aria-labelledby="additional-heading">
            <h2 id="additional-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">14. ADDITIONAL DISCLAIMERS</h2>
            <p className="mb-2">For additional important information about using this website and contacting our firm, please review:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li><a href="#privacy-policy" className="text-secondary-teal hover:underline">Privacy Policy</a>: Information about how we collect and use personal information</li>
              <li><a href="#terms" className="text-secondary-teal hover:underline">Terms of Use</a>: Legal terms governing use of this website</li>
              <li><a href="#disclaimers" className="text-secondary-teal hover:underline">Disclaimers</a>: Important limitations and notices about website content</li>
            </ul>
          </section>

          <section id="acknowledgment" aria-labelledby="acknowledgment-heading" className="bg-gray-light border-l-4 border-secondary-teal p-6 my-8">
            <h2 id="acknowledgment-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">15. ACKNOWLEDGMENT</h2>
            <p className="mb-2 font-semibold">BY USING THIS WEBSITE, YOU ACKNOWLEDGE THAT:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>You understand this website constitutes attorney advertising</li>
              <li>You understand that prior results do not guarantee similar outcomes</li>
              <li>You understand that the decision to hire an attorney should not be based solely on advertising</li>
              <li>You have read and understood the information in this Attorney Advertising notice</li>
              <li>You agree to the terms and conditions set forth on this website</li>
            </ul>
          </section>

          <section id="contact-firm" aria-labelledby="contact-firm-heading" className="bg-primary-navy text-white p-8 my-8 rounded-lg">
            <h2 id="contact-firm-heading" className="text-2xl md:text-3xl font-bold font-garamond mb-4 text-white">CONTACT TREMBACH LAW FIRM</h2>
            <p className="mb-4 text-white">
              If you would like to discuss a potential legal matter or request information about our qualifications and experience, please contact us:
            </p>
            <address className="not-italic mb-4">
              <strong className="text-soft-teal text-xl block mb-2">Trembach Law Firm, APC</strong>
              <p className="text-soft-teal mb-4">International Trade Law & Customs Law</p>
              <p className="mb-2 text-white">
                <strong>Phone:</strong> 631-746-8290<br />
                <span className="text-sm">Available 24 hours a day, 7 days a week</span>
              </p>
              <p className="mb-2 text-white">
                <strong>Email:</strong> <a href="mailto:infotrade@trembachlaw.com" className="text-soft-teal hover:underline">infotrade@trembachlaw.com</a>
              </p>
              <p className="mb-4 text-white">
                <strong>Mailing Address:</strong><br />
                27001 Agoura Road, Suite 350<br />
                Calabasas, California 91301<br />
                United States
              </p>
              <p className="mb-2 text-white">
                <strong>Serving:</strong> All 58 California counties and federal courts nationwide
              </p>
              <p className="text-white">
                <strong>Languages:</strong> English, Ukrainian, Russian
              </p>
            </address>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
            <p className="mb-2">&copy; 2025 Trembach Law Firm, APC. All rights reserved.</p>
            <p className="mb-2">Attorney Anatolii Trembach, State Bar of California No. 349304</p>
            <p className="font-semibold">This is an advertisement. Prior results do not guarantee a similar outcome.</p>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default AttorneyAdvertisingPage;
