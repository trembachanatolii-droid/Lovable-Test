
import React, { useEffect } from 'react';
import { useMeta } from '../hooks/useMeta';
import { generateBreadcrumbSchema } from '../utils/seo';

const TermsOfUsePage: React.FC = () => {
  useMeta({
    title: 'Terms of Use - Trembach Law Firm',
    description: 'Website Terms of Use for Trembach Law. No attorney-client relationship, legal disclaimers, intellectual property rights for California trade law site visitors.',
    robots: 'noindex, nofollow',
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: 'Terms of Use', url: 'terms' },
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
        {/* Background Image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
            width="2070"
            height="1380"
          />
          {/* Overlay with 55% opacity for better text visibility */}
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(1, 33, 105, 0.55)'}}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-5xl md:text-7xl font-bold font-garamond mb-6 tracking-tight leading-tight" style={{color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'}}>
            Terms of Use
          </h1>
          <div className="w-24 h-1 bg-secondary-teal mx-auto mt-6"></div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto font-montserrat text-neutral-darkGray pb-20 px-6 pt-16">

        <div className="space-y-8 leading-relaxed">
          <section aria-labelledby="effective-date">
            <p className="font-semibold mb-4">
              Effective Date: November 18, 2025<br />
              Last Updated: November 18, 2025
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

          <section className="bg-gray-light border-l-4 border-secondary-teal p-6 my-8">
            <p className="font-semibold text-lg">
              <strong>IMPORTANT:</strong> Please read these Terms of Use carefully before using this website. By accessing or using <a href="http://www.trembachlaw.com" className="text-secondary-teal hover:underline">www.trembachlaw.com</a>, you agree to be bound by these Terms of Use and our <a href="#privacy-policy" className="text-secondary-teal hover:underline">Privacy Policy</a>. If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          <section id="acceptance" aria-labelledby="acceptance-heading">
            <h2 id="acceptance-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p className="mb-4">
              Welcome to the website of Trembach Law Firm, APC ("Trembach Law," "we," "our," or "us"). These Terms of Use ("Terms") govern your access to and use of our website located at <a href="http://www.trembachlaw.com" className="text-secondary-teal hover:underline">www.trembachlaw.com</a> (the "Site"), including all content, functionality, and services offered on or through the Site.
            </p>
            <p className="mb-4">
              By accessing or using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated by reference into these Terms. If you do not agree to these Terms, you must not access or use the Site.
            </p>
          </section>

          <section id="about-firm" aria-labelledby="about-heading">
            <h2 id="about-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">2. ABOUT TREMBACH LAW FIRM</h2>
            <p className="mb-4">
              Trembach Law Firm, APC is a California law firm specializing in international trade law and customs law. We practice in California state courts and federal courts throughout the United States.
            </p>
            <p className="mb-4">
              <strong>Principal Office:</strong><br />
              27001 Agoura Road, Suite 350<br />
              Calabasas, California 91301
            </p>
            <p className="mb-4">
              Phone: 631-746-8290 (available 24 hours a day, 7 days a week)<br />
              Email: <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
            </p>
            <p className="mb-4">
              <strong>Lead Attorney:</strong> Anatolii Trembach<br />
              State Bar of California No.: 349304<br />
              Admitted to Practice: California state courts (all 58 counties) and federal courts nationwide
            </p>
          </section>

          <section id="no-attorney-client" aria-labelledby="no-relationship-heading" className="bg-yellow-50 border-l-4 border-gold-primary p-6 my-8">
            <h2 id="no-relationship-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">3. NO ATTORNEY-CLIENT RELATIONSHIP</h2>
            <p className="mb-4 font-semibold text-lg">
              USE OF THIS WEBSITE DOES NOT CREATE AN ATTORNEY-CLIENT RELATIONSHIP.
            </p>
            <p className="mb-4">
              This is one of the most important provisions of these Terms. Please read it carefully:
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">3.1 No Relationship Created</h3>
            <p className="mb-4">
              Your use of this Site, including viewing content, downloading materials, submitting contact forms, sending emails, or making phone calls, does not create an attorney-client relationship between you and Trembach Law Firm or any of our attorneys.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">3.2 No Confidentiality</h3>
            <p className="mb-4">
              Information you submit to us through this Site or via email is NOT confidential or privileged unless and until we have agreed to represent you and have confirmed that agreement in writing. Do not send us confidential information until you speak with one of our attorneys and receive authorization to send such information.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">3.3 How Relationships Are Formed</h3>
            <p className="mb-2">An attorney-client relationship with Trembach Law Firm is only formed when:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>We have conducted a conflicts check</li>
              <li>We have agreed to represent you</li>
              <li>You have signed a written engagement agreement</li>
              <li>We have provided you with a signed copy of that engagement agreement</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">3.4 No Legal Advice</h3>
            <p className="mb-4">
              Nothing on this Site constitutes legal advice. The information provided is for general informational purposes only and should not be construed as legal advice or a substitute for competent legal counsel.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">3.5 No Reliance</h3>
            <p className="mb-4">
              You should not act or refrain from acting based on any information from this Site without seeking legal advice from qualified counsel in your jurisdiction.
            </p>
          </section>

          <section id="informational" aria-labelledby="informational-heading">
            <h2 id="informational-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">4. INFORMATIONAL PURPOSES ONLY</h2>
            <p className="mb-4">
              All content on this Site, including but not limited to text, graphics, images, information, articles, blog posts, case studies, and other materials (collectively, "Content"), is provided for general informational purposes only.
            </p>
            <p className="mb-2">This Content:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Is not intended to be, and does not constitute, legal advice</li>
              <li>May not reflect the most current legal developments</li>
              <li>May not apply to your specific situation</li>
              <li>Should not be used as a substitute for consultation with qualified legal counsel</li>
              <li>May become outdated without notice</li>
            </ul>
            <p className="mb-4">
              Legal matters can be complex and fact-specific. The information on this Site is general in nature and may not address all aspects of your particular legal matter or adequately represent all sides of legal issues. Only your attorney can provide you with legal advice and counsel regarding your specific situation.
            </p>
          </section>

          <section id="limitations" aria-labelledby="limitations-heading">
            <h2 id="limitations-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">5. LIMITATIONS ON PRACTICE</h2>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">5.1 Geographic Scope</h3>
            <p className="mb-4">
              Trembach Law Firm practices international trade law and customs law in California state courts (all 58 counties) and federal courts throughout the United States. Laws vary significantly by jurisdiction. Information on this Site may not be applicable or appropriate for use in all jurisdictions or circumstances.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">5.2 Practice Areas</h3>
            <p className="mb-4">
              Our firm focuses on international trade law and customs law. We do not practice in all areas of law. If your legal matter falls outside our practice areas, we may not be able to assist you, but we can help direct you to appropriate resources.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">5.3 Case-by-Case Basis</h3>
            <p className="mb-4">
              We evaluate all potential representations on a case-by-case basis. Contacting us does not guarantee that we will agree to represent you or that we have the availability to take your case.
            </p>
          </section>

          <section id="warranties" aria-labelledby="warranties-heading">
            <h2 id="warranties-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">6. NO GUARANTEES OR WARRANTIES</h2>
            <p className="mb-4">We make no representations, warranties, or guarantees regarding:</p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">6.1 Outcomes</h3>
            <p className="mb-4">
              We cannot and do not guarantee any specific legal outcome or result. Every case is different, and past results do not guarantee future outcomes. The fact that we achieved a certain result in one case does not mean we can achieve the same or similar result in your case.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">6.2 Accuracy of Information</h3>
            <p className="mb-4">
              While we strive to provide accurate and up-to-date information, we make no warranties about the accuracy, reliability, completeness, or timeliness of the Content on this Site.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">6.3 Fitness for Purpose</h3>
            <p className="mb-4">
              The Site and Content are provided "as is" without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">6.4 Error-Free Operation</h3>
            <p className="mb-4">
              We do not warrant that this Site will operate error-free, that defects will be corrected, or that the Site or the server that makes it available are free of viruses or other harmful components.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">6.5 Availability</h3>
            <p className="mb-4">
              We do not guarantee that the Site will be available at all times or that access will be uninterrupted.
            </p>
          </section>

          <section id="external-links" aria-labelledby="links-heading">
            <h2 id="links-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">7. EXTERNAL LINKS</h2>
            <p className="mb-4">
              This Site may contain links to third-party websites, resources, or references to other organizations or entities (collectively, "External Links"). These External Links are provided for your convenience and informational purposes only.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">7.1 No Endorsement</h3>
            <p className="mb-4">
              The inclusion of any External Link does not imply our endorsement, sponsorship, or recommendation of the third party, their website, or any information, products, or services they offer. We do not control External Links and are not responsible for their content, privacy practices, or terms of use.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">7.2 Your Responsibility</h3>
            <p className="mb-4">
              When you access External Links, you do so at your own risk. You should review the terms and privacy policies of any third-party websites you visit. We are not liable for any harm or damages related to your use of External Links.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">7.3 Government and Legal Resources</h3>
            <p className="mb-4">
              Links to government agencies, courts, or legal resources are provided for reference purposes only and do not constitute an endorsement or representation regarding the accuracy or currency of information on those sites.
            </p>
          </section>

          <section id="intellectual-property" aria-labelledby="ip-heading">
            <h2 id="ip-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">8. INTELLECTUAL PROPERTY RIGHTS</h2>
            <p className="mb-4">
              All Content on this Site, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, software, and the compilation thereof (collectively, "Our Content"), is the property of Trembach Law Firm, APC or its content suppliers and is protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">8.1 Limited License</h3>
            <p className="mb-2">Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Access and use the Site for your personal, non-commercial purposes</li>
              <li>View and download Content from the Site solely for your own informational and non-commercial purposes</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">8.2 Restrictions</h3>
            <p className="mb-2">You may not, without our prior written consent:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Modify, copy, distribute, transmit, display, reproduce, publish, license, create derivative works from, transfer, or sell any Content obtained from this Site</li>
              <li>Use any Content for commercial purposes</li>
              <li>Remove any copyright, trademark, or other proprietary notices from Content</li>
              <li>Use any robots, scrapers, or automated data-gathering tools to access or collect information from the Site</li>
              <li>Reverse engineer, decompile, or disassemble any software or other products or processes accessible through the Site</li>
              <li>Frame or mirror any part of the Site without our prior written authorization</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">8.3 Trademarks</h3>
            <p className="mb-4">
              "Trembach Law Firm," our logo, and other marks used on this Site are trademarks or registered trademarks of Trembach Law Firm, APC. You may not use our trademarks without our prior written permission.
            </p>
          </section>

          <section id="user-submissions" aria-labelledby="submissions-heading">
            <h2 id="submissions-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">9. USER SUBMISSIONS</h2>
            <p className="mb-4">
              The Site may allow you to submit or transmit information, questions, comments, suggestions, ideas, or other materials to us through contact forms, email, or other means ("Submissions").
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">9.1 License Grant</h3>
            <p className="mb-4">
              By making any Submission, you grant Trembach Law Firm a non-exclusive, worldwide, irrevocable, perpetual, transferable, royalty-free, sublicensable right and license to use, copy, reproduce, distribute, display, publicly perform, transmit, publish, broadcast, translate, make derivative works of, and otherwise use and exploit in any manner whatsoever, all or any portion of your Submission for any purpose consistent with applicable law, except for:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Information that becomes part of an established attorney-client relationship</li>
              <li>Non-public, attorney-client communications (e.g., secure client portal communications)</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">9.2 Your Consent</h3>
            <p className="mb-4">
              As permitted by applicable law, you irrevocably consent to our use and association of your name in connection with your Submissions and derivatives thereof.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">9.3 No Compensation</h3>
            <p className="mb-4">
              You acknowledge and agree that you will not receive any compensation or credit for your Submissions.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">9.4 Representations</h3>
            <p className="mb-2">You represent and warrant that:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>You own or have the necessary rights to submit the Submission</li>
              <li>Your Submission does not violate any third-party rights</li>
              <li>Your Submission does not contain any confidential information that you wish to protect</li>
              <li>Your Submission is accurate and not misleading</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">9.5 Ethical Obligations</h3>
            <p className="mb-4">
              These terms do not change or diminish our ethical obligations under California Rules of Professional Conduct or the terms of our engagement with our clients as their legal counsel, including regarding non-public, attorney-client communications.
            </p>
          </section>

          <section id="prohibited-uses" aria-labelledby="prohibited-heading">
            <h2 id="prohibited-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">10. PROHIBITED USES</h2>
            <p className="mb-2">You agree not to use the Site:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
              <li>To impersonate or attempt to impersonate Trembach Law Firm, an attorney, another user, or any other person or entity</li>
              <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
              <li>To use any automated system to access the Site in a manner that sends more request messages to our servers than a human can reasonably produce in the same period of time</li>
              <li>To introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
              <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Site, the server on which the Site is stored, or any server, computer, or database connected to the Site</li>
              <li>To attack the Site via a denial-of-service attack or a distributed denial-of-service attack</li>
              <li>Otherwise attempt to interfere with the proper working of the Site</li>
            </ul>
          </section>

          <section id="disclaimers-liability" aria-labelledby="disclaimers-heading" className="bg-gray-light border-l-4 border-primary-navy p-6 my-8">
            <h2 id="disclaimers-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">11. DISCLAIMERS AND LIMITATION OF LIABILITY</h2>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">11.1 Disclaimers</h3>
            <p className="mb-2 font-semibold">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>THE SITE AND ALL CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED</li>
              <li>WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT</li>
              <li>WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE</li>
              <li>WE DO NOT WARRANT THAT THE RESULTS THAT MAY BE OBTAINED FROM USE OF THE SITE WILL BE ACCURATE OR RELIABLE</li>
              <li>WE DO NOT WARRANT THAT THE QUALITY OF ANY CONTENT OR SERVICES OBTAINED THROUGH THE SITE WILL MEET YOUR EXPECTATIONS</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">11.2 Limitation of Liability</h3>
            <p className="mb-4 font-semibold">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL TREMBACH LAW FIRM, APC, ITS ATTORNEYS, EMPLOYEES, AGENTS, PARTNERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SITE</li>
              <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SITE</li>
              <li>ANY CONTENT OBTAINED FROM THE SITE</li>
              <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
            </ul>
            <p className="mb-4">
              WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
            </p>
            <p className="mb-4">
              IN JURISDICTIONS THAT DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, OUR LIABILITY IS LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.
            </p>
          </section>

          <section id="indemnification" aria-labelledby="indemnification-heading">
            <h2 id="indemnification-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">12. INDEMNIFICATION</h2>
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless Trembach Law Firm, APC, its attorneys, employees, agents, partners, affiliates, and licensors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Your violation of these Terms</li>
              <li>Your use of the Site</li>
              <li>Your Submissions</li>
              <li>Your violation of any third-party right, including without limitation any intellectual property right, publicity, confidentiality, property, or privacy right</li>
              <li>Any claim that your Submission caused damage to a third party</li>
            </ul>
            <p className="mb-4">
              This defense and indemnification obligation will survive these Terms and your use of the Site.
            </p>
          </section>

          <section id="governing-law" aria-labelledby="law-heading">
            <h2 id="law-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">13. GOVERNING LAW AND JURISDICTION</h2>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">13.1 Governing Law</h3>
            <p className="mb-4">
              These Terms and your use of the Site shall be governed by and construed in accordance with the laws of the State of California and the federal laws of the United States applicable therein, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">13.2 Jurisdiction and Venue</h3>
            <p className="mb-4">
              You agree that any legal action or proceeding arising out of or relating to these Terms or the Site shall be brought exclusively in the federal or state courts located in Los Angeles County, California. You hereby irrevocably consent to the personal jurisdiction and venue of such courts and waive any objection to such jurisdiction or venue.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">13.3 Waiver of Jury Trial</h3>
            <p className="mb-4">
              TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU WAIVE YOUR RIGHT TO A JURY TRIAL IN ANY PROCEEDING ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SITE.
            </p>
          </section>

          <section id="modifications" aria-labelledby="modifications-heading">
            <h2 id="modifications-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">14. MODIFICATIONS TO TERMS</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time in our sole discretion. We will indicate changes by updating the "Last Updated" date at the top of these Terms. Material changes will also be noted with a prominent notice on the Site.
            </p>
            <p className="mb-4">
              Your continued use of the Site after any changes to these Terms constitutes your acceptance of the modified Terms. If you do not agree to the modified Terms, you must stop using the Site immediately.
            </p>
            <p className="mb-4">
              It is your responsibility to check these Terms periodically for changes. We recommend that you review these Terms whenever you access the Site.
            </p>
          </section>

          <section id="severability" aria-labelledby="severability-heading">
            <h2 id="severability-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">15. SEVERABILITY</h2>
            <p className="mb-4">
              If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable, or if such modification is not possible, the provision shall be severed from these Terms. The validity, legality, and enforceability of the remaining provisions shall not be affected or impaired in any way.
            </p>
          </section>

          <section id="waiver" aria-labelledby="waiver-heading">
            <h2 id="waiver-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">16. WAIVER</h2>
            <p className="mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights or provisions. Any waiver of any provision of these Terms will be effective only if in writing and signed by our authorized representative.
            </p>
          </section>

          <section id="entire-agreement" aria-labelledby="agreement-heading">
            <h2 id="agreement-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">17. ENTIRE AGREEMENT</h2>
            <p className="mb-4">
              These Terms, together with our Privacy Policy and any other legal notices or agreements published by us on the Site, constitute the entire agreement between you and Trembach Law Firm regarding your use of the Site and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Site.
            </p>
          </section>

          <section id="assignment" aria-labelledby="assignment-heading">
            <h2 id="assignment-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">18. ASSIGNMENT</h2>
            <p className="mb-4">
              You may not assign or transfer these Terms or your rights and obligations under these Terms, by operation of law or otherwise, without our prior written consent. We may assign these Terms at any time without notice to you. Any attempted assignment or transfer in violation of this section shall be null and void.
            </p>
          </section>

          <section id="contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">19. CONTACT INFORMATION</h2>
            <p className="mb-4">If you have any questions about these Terms of Use, please contact us:</p>
            <address className="not-italic mb-4 font-semibold">
              Trembach Law Firm, APC<br />
              Attention: Website Terms Inquiry<br />
              <br />
              Phone: 631-746-8290 (available 24 hours a day, 7 days a week)<br />
              Email: <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a><br />
              <br />
              Mailing Address:<br />
              27001 Agoura Road, Suite 350<br />
              Calabasas, California 91301<br />
              United States
            </address>
          </section>

          <section id="california-users" aria-labelledby="california-heading">
            <h2 id="california-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">20. SPECIAL PROVISIONS FOR CALIFORNIA USERS</h2>
            <p className="mb-4">
              If you are a California resident, you may have additional rights under California law, including under the California Consumer Privacy Act (CCPA). Please see our <a href="#privacy-policy" className="text-secondary-teal hover:underline">Privacy Policy</a> for more information about your privacy rights.
            </p>
            <p className="mb-4">
              Under California Civil Code Section 1789.3, California users are entitled to the following specific consumer rights notice: If you have a question or complaint regarding the Site, please send an email to <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>. You may also contact us by writing to the address listed above or by calling 631-746-8290. California residents may reach the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by mail at 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.
            </p>
          </section>

          <section id="acknowledgment" aria-labelledby="acknowledgment-heading" className="bg-gray-light border-l-4 border-secondary-teal p-6 my-8">
            <h2 id="acknowledgment-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">21. ACKNOWLEDGMENT</h2>
            <p className="mb-4 font-semibold text-lg">
              BY USING THIS SITE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT USE THIS SITE.
            </p>
          </section>

          <footer className="mt-12 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
            <p>&copy; 2025 Trembach Law Firm, APC. All rights reserved.</p>
            <p className="mt-2">Attorney Anatolii Trembach, State Bar of California No. 349304</p>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default TermsOfUsePage;
