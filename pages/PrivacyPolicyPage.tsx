
import React, { useEffect } from 'react';
import { useMeta } from '../hooks/useMeta';
import { generateBreadcrumbSchema } from '../utils/seo';

const PrivacyPolicyPage: React.FC = () => {
  useMeta({
    title: 'Privacy Policy - Trembach Law Firm',
    description: 'Trembach Law Firm\'s Privacy Policy explains how we collect, use, and protect personal information collected through our website.',
    robots: 'noindex, nofollow',
    ogImage: 'https://trembach.law/og-image-default.jpg',
    ogImageAlt: 'Privacy Policy - Trembach Law Firm Legal Information',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: 'Privacy Policy', url: 'privacy-policy' },
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen font-montserrat text-neutral-darkGray">
      {/* Hero Section */}
      <section className="relative w-full py-32 px-6 text-center overflow-hidden flex flex-col justify-center min-h-[60vh]">
        {/* Background Image - LCP element */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
            alt="Security and privacy documentation representing website privacy policy and data protection"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width="2070"
            height="1380"
          />
          {/* Overlay with 55% opacity for better text visibility */}
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(1, 33, 105, 0.55)'}}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-5xl md:text-7xl font-bold font-garamond mb-6 tracking-tight leading-tight" style={{color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'}}>
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-secondary-teal mx-auto mt-6"></div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto pb-20 px-6 pt-16">

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
              Phone: (310) 744-1328<br />
              Email: <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>
            </p>
          </section>

          <section id="introduction" aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">1. INTRODUCTION</h2>
            <p className="mb-4">
              This Privacy Policy ("Policy") explains how Trembach Law Firm, APC ("Trembach Law," "we," "our," or "us") collects, uses, shares, and otherwise processes personal information we collect through our website at www.trembachlaw.com and via associated content, such as our blogs, newsletters, and practice-specific resources (the "Site").
            </p>
            <p className="mb-4">
              By using our Site and providing your personal information to us, you give us permission to process your personal information as described in this Policy.
            </p>
            <p className="mb-4">
              This Policy does not apply to personal information that Trembach Law Firm collects in other contexts, such as through direct client engagements, attorney-client communications, in-person consultations, or court proceedings. Those relationships are governed by separate engagement agreements and attorney-client privilege protections.
            </p>
            <p className="mb-4">
              California residents may obtain additional information about our privacy practices and their rights in our California Privacy Notice section below.
            </p>
          </section>

          <section id="information-collection" aria-labelledby="collection-heading">
            <h2 id="collection-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">2. INFORMATION WE COLLECT</h2>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3">2.1 Information You Provide Directly</h3>
            <p className="mb-4">
              When you use our Site, you may choose to provide certain personal information, which is information that can be used to identify you individually, including:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Name and contact details (email address, phone number, mailing address)</li>
              <li>Professional information (employer, job title, company name)</li>
              <li>Case inquiry details and legal questions</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide when contacting us</li>
            </ul>
            <p className="mb-4">
              For example, Trembach Law Firm collects your personal information when you:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Subscribe to receive our alerts, newsletters, and communications</li>
              <li>Submit an inquiry through our contact form</li>
              <li>Schedule a consultation</li>
              <li>Register for one of our webinars or events</li>
              <li>Contact us with questions via email or phone</li>
            </ul>
            <p className="mb-4">
              If you submit personal information on behalf of someone else, you represent that you have that individual's permission to submit their personal information to us.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">2.2 Information Collected Automatically</h3>
            <p className="mb-4">
              Trembach Law Firm, and the vendors we work with, automatically collect certain personal information about you when you access or use our Site employing various tools and technologies, including cookies, web server logs, and other tracking technologies.
            </p>
            <p className="mb-4">Automatically collected information may include:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>IP addresses and geolocation data</li>
              <li>Device identifiers and device characteristics</li>
              <li>Browser type and characteristics</li>
              <li>Operating system details</li>
              <li>Referring URLs (the website you visited before coming to our Site)</li>
              <li>Pages or content viewed on our Site</li>
              <li>Date and time of your visit</li>
              <li>Search terms used to find our Site</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">2.3 Technologies We Use</h3>
            <p className="mb-4">
              <strong>COOKIES:</strong> Cookies are small data files that your web browser stores on your computer. Cookies may allow a website to recognize a user's device, record user preferences, track the pages a user visits on the website, and identify the referral website. We use both session ID cookies (which expire when you close your browser) and persistent tracking cookies (which remain on your device to help us understand how you use the Site and enhance your user experience).
            </p>
            <p className="mb-4">
              <strong>LOG INFORMATION:</strong> Log files automatically record data about your use of our Site, such as IP address, browser type, internet service provider, referring/exit pages, operating system, date/time stamps, and related data.
            </p>
            <p className="mb-4">
              <strong>OTHER TRACKING TECHNOLOGIES:</strong> We may use web beacons (tracking pixels, internet tags, or clear gifs), which are small graphic images embedded in web pages and email messages that can be used to count visitors, see how users interact with pages, or count how frequently certain content is viewed. We may also use embedded scripts, which use programming code to collect information about your interactions with the Site.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">2.4 Do Not Track Signals</h3>
            <p className="mb-4">
              Your web browser may have settings that allow you to transmit a "Do Not Track" signal when you visit various websites or use online services. Like many websites, our Site is not designed to respond to "Do Not Track" signals received from browsers. To learn more about "Do Not Track" signals, visit <a href="https://www.allaboutdnt.com" target="_blank" rel="noopener noreferrer" className="text-secondary-teal hover:underline">www.allaboutdnt.com</a>.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">2.5 Managing Cookies</h3>
            <p className="mb-4">
              Most web browsers accept cookies by default, but you may be able to adjust your browser settings to remove or reject cookies. Please note that blocking cookies on our Site may affect the availability and functionality of the Site and other websites. Also, disabling cookies may invalidate opt-outs that use cookies to recognize devices that have opted out.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">2.6 Analytics Services</h3>
            <p className="mb-4">
              We use third-party analytics services, including Google Analytics, to help us understand and analyze how visitors use the Site. We have implemented Google Analytics features such as interest-based advertising, behavioral reporting, demographics and interests reporting, user segment analysis, and device reporting.
            </p>
            <p className="mb-4">
              We and our vendors may use first-party cookies or other first-party identifiers as well as third-party cookies or other third-party identifiers to deliver advertisements, create a profile of you, measure your interests, detect your demographics and location, identify your device, and personalize content.
            </p>
            <p className="mb-4">
              For more information about how Google Analytics uses data collected through the Site, visit <a href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener noreferrer" className="text-secondary-teal hover:underline">www.google.com/policies/privacy/partners/</a>. To opt out of Google Analytics cookies, visit: <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-secondary-teal hover:underline">www.google.com/settings/ads</a> and <a href="https://tools.google.com/dlpage/gaoptout/" target="_blank" rel="noopener noreferrer" className="text-secondary-teal hover:underline">https://tools.google.com/dlpage/gaoptout/</a>.
            </p>
            <p className="mb-4">
              Trembach Law Firm is not responsible for the privacy policies or practices of any third parties, including our vendors providing analytics and other tracking technologies associated with our Site. We encourage you to familiarize yourself with their privacy policies.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">2.7 Information We Collect From Other Sources</h3>
            <p className="mb-4">
              We may combine information that we collect about you on our Site, including information collected automatically, with information we obtain from other sources, such as:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Business colleagues who provide us with your contact information</li>
              <li>Service providers and vendors</li>
              <li>Internet service providers</li>
              <li>Third-party data suppliers and data analytics providers</li>
              <li>Other parties in connection with legal matters we handle</li>
            </ul>
            <p className="mb-4">
              To the extent we combine information that we collect automatically or that we obtain from others with personal information you provide to us, we will treat the combined information as personal information in accordance with this Policy.
            </p>
          </section>

          <section id="how-we-use" aria-labelledby="use-heading">
            <h2 id="use-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">3. HOW WE USE PERSONAL INFORMATION</h2>
            <p className="mb-4">We may use personal information we collect through the Site for various purposes including:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Communicating with you, including responding to your requests, inquiries, and case consultations</li>
              <li>Providing information about our international trade law and customs law services</li>
              <li>Evaluating potential cases and legal matters</li>
              <li>Marketing and advertising our legal services and expertise</li>
              <li>Sending newsletters, alerts, and updates about legal developments</li>
              <li>Scheduling consultations and managing appointments</li>
              <li>Monitoring and analyzing trends, usage, and activities of Site visitors</li>
              <li>Improving our Site and our visitors' online experience, including tailoring our content</li>
              <li>Preventing, investigating, identifying, or taking any other action regarding any suspected or actual fraudulent or illegal activity or other activity that violates our policies</li>
              <li>Complying with applicable laws, rules, regulations, and legal processes as well as our company policies</li>
              <li>Establishing, exercising, or defending legal claims</li>
              <li>Any other purposes, as allowed by law or with your consent</li>
            </ul>
          </section>

          <section id="information-sharing" aria-labelledby="sharing-heading">
            <h2 id="sharing-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">4. INFORMATION WE SHARE WITH OTHERS</h2>
            <p className="mb-4">
              We may share your personal information with our business partners, service providers, and vendors who provide services on our behalf, including:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>IT service providers and web hosting companies</li>
              <li>Email marketing and communication platforms</li>
              <li>Analytics providers</li>
              <li>Payment processing vendors</li>
              <li>Customer relationship management (CRM) systems</li>
              <li>Legal research and document management providers</li>
            </ul>
            <p className="mb-4">We may also share your personal information as follows:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>To comply with the law, law enforcement, other legal process, or in response to a government request</li>
              <li>To prevent or detect fraud and other violations of the law and our policies</li>
              <li>To protect rights, property, life, health, security, and safety</li>
              <li>In connection with any proposed or actual business transaction</li>
              <li>With your consent or at your direction</li>
              <li>For any purpose disclosed at the time you provide your information</li>
              <li>For any other purpose consistent with our statements in this Policy or otherwise allowed by applicable law</li>
            </ul>
            <p className="mb-4 font-semibold">
              WE DO NOT SELL YOUR PERSONAL INFORMATION TO THIRD PARTIES.
            </p>
          </section>

          <section id="third-party-links" aria-labelledby="links-heading">
            <h2 id="links-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">5. LINKS TO OTHER WEBSITES</h2>
            <p className="mb-4">
              Our Site includes links to websites operated by other companies, including legal resources, government agencies, and industry organizations. When you follow these links, you may be subject to the cookies and other tracking technologies used by those companies, which may independently collect information about you.
            </p>
            <p className="mb-4">
              This Policy does not apply to other companies' websites, which may have their own privacy policies or notices. Trembach Law Firm is not responsible for the content or privacy practices of any linked websites that it does not control.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">5.1 Social Media</h3>
            <p className="mb-4">
              Certain features of our Site may permit you to initiate interactions between Trembach Law Firm and other platforms like social networks operated by unaffiliated companies. If you choose to "like" or share content or other information on a social media platform, that information may be publicly displayed, and the company operating the other platform may receive information about you and your use of our Site.
            </p>
            <p className="mb-4">
              You should review the terms, policies, and settings of any social media platforms you use to learn more about their data practices and/or adjust your privacy settings.
            </p>
          </section>

          <section id="data-security" aria-labelledby="security-heading">
            <h2 id="security-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">6. DATA SECURITY</h2>
            <p className="mb-4">
              Trembach Law Firm takes reasonable measures to protect the personal information we collect from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We implement appropriate technical and organizational security measures, including:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Encryption of data in transit using SSL/TLS technology</li>
              <li>Secure storage systems with access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection</li>
              <li>Confidentiality agreements with service providers</li>
            </ul>
            <p className="mb-4">
              Nevertheless, transmission via the internet and other online interactions are not completely secure, and Trembach Law Firm cannot guarantee the absolute security of your personal information collected through our Site. You provide information at your own risk.
            </p>
          </section>

          <section id="email-communications" aria-labelledby="email-heading">
            <h2 id="email-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">7. EMAIL COMMUNICATIONS</h2>
            <p className="mb-4">
              You can opt out of receiving marketing email communications from Trembach Law Firm at any time by following the instructions provided in emails to click on the unsubscribe link, or by contacting us at <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>.
            </p>
            <p className="mb-4">
              Please note that your opt-out is limited to the email address used and will not affect subsequent subscriptions. If you opt out of only certain communications, other subscription communications may continue.
            </p>
            <p className="mb-4">Even if you opt out of receiving marketing communications, Trembach Law Firm may continue to send you non-marketing communications, such as:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Responses to your inquiries</li>
              <li>Information about consultations you have scheduled</li>
              <li>Information you explicitly request</li>
              <li>Communications related to ongoing legal matters</li>
              <li>Important updates to our policies or services</li>
            </ul>
          </section>

          <section id="data-retention" aria-labelledby="retention-heading">
            <h2 id="retention-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">8. DATA RETENTION</h2>
            <p className="mb-4">
              We retain personal information for as long as necessary to fulfill the purposes described in this Policy, unless a longer retention period is required or permitted by law. The criteria we use to determine our retention periods include:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>The length of time we have an ongoing relationship with you</li>
              <li>Whether there is a legal obligation to which we are subject</li>
              <li>Whether retention is advisable in light of our legal position (such as applicable statutes of limitations, litigation, or regulatory investigations)</li>
            </ul>
          </section>

          <section id="international-visitors" aria-labelledby="international-heading">
            <h2 id="international-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">9. INFORMATION FOR VISITORS FROM OUTSIDE THE UNITED STATES</h2>
            <p className="mb-4">
              Trembach Law Firm is based in California, United States, and governed by U.S. law. If you are accessing our Site from outside of the United States, please be aware that personal information collected through the Site will be processed and stored in the United States.
            </p>
            <p className="mb-4">
              Data protection laws in the United States may differ from those of your country of residence. By submitting your personal information through our Site, you acknowledge that your personal information will be processed in the United States in accordance with this Policy.
            </p>
            <p className="mb-4">
              Visitors residing outside the United States may contact us at <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a> for more information about our data practices.
            </p>
          </section>

          <section id="california-privacy" aria-labelledby="california-heading">
            <h2 id="california-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">10. CALIFORNIA PRIVACY NOTICE</h2>
            <p className="mb-4 font-semibold">EFFECTIVE DATE: November 18, 2025</p>
            <p className="mb-4">
              Trembach Law Firm, APC provides this California Privacy Notice ("Notice") pursuant to the California Consumer Privacy Act (the "CCPA"), as amended by the California Privacy Rights Act (CPRA). This Notice supplements our Privacy Policy and describes how we process Personal Information about California residents.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">10.1 Collection and Use of Personal Information</h3>
            <p className="mb-4">
              As used in this Notice, the term "Personal Information" means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with you or your household. Personal Information does not include information that is publicly available, de-identified, or aggregated.
            </p>
            <p className="mb-4">
              We collect and have collected within the past 12 months the following categories of Personal Information about California residents:
            </p>
            <div className="mb-6">
              <p className="font-semibold mb-2">CATEGORY: Identifiers and Personal Records</p>
              <p className="mb-2">Including real name, alias, postal address, telephone number, email address, IP address, unique personal identifier, online identifier, signature, or other similar identifiers</p>
              <p className="mb-2 font-semibold">PURPOSES:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Providing legal services and case evaluations</li>
                <li>Communicating with you</li>
                <li>Marketing our services</li>
                <li>Improving our Site and services</li>
                <li>Meeting legal and compliance requirements</li>
              </ul>

              <p className="font-semibold mb-2 mt-4">CATEGORY: Commercial Information</p>
              <p className="mb-2">Including records of services obtained or considered</p>
              <p className="mb-2 font-semibold">PURPOSES:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Providing and managing legal services</li>
                <li>Processing payments</li>
                <li>Marketing our services</li>
              </ul>

              <p className="font-semibold mb-2 mt-4">CATEGORY: Professional or Employment Information</p>
              <p className="mb-2 font-semibold">PURPOSES:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Understanding your legal needs</li>
                <li>Providing relevant legal services</li>
                <li>Marketing targeted services</li>
              </ul>

              <p className="font-semibold mb-2 mt-4">CATEGORY: Internet or Network Activity</p>
              <p className="mb-2">Including browsing history, search history, and information about interaction with our Site</p>
              <p className="mb-2 font-semibold">PURPOSES:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Operating and improving our Site</li>
                <li>Understanding user behavior</li>
                <li>Marketing and analytics</li>
                <li>Security and fraud prevention</li>
              </ul>

              <p className="font-semibold mb-2 mt-4">CATEGORY: Geolocation Data</p>
              <p className="mb-2">Based on your IP address</p>
              <p className="mb-2 font-semibold">PURPOSES:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Tailoring content and services</li>
                <li>Analytics</li>
                <li>Compliance with location-specific laws</li>
              </ul>

              <p className="font-semibold mb-2 mt-4">CATEGORY: Audio, Electronic, or Visual Information</p>
              <p className="mb-2">Including call recordings for quality assurance</p>
              <p className="mb-2 font-semibold">PURPOSES:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Providing legal services</li>
                <li>Quality assurance</li>
                <li>Training</li>
                <li>Compliance</li>
              </ul>

              <p className="font-semibold mb-2 mt-4">CATEGORY: Inferences</p>
              <p className="mb-2">Reflecting preferences, characteristics, or behavior</p>
              <p className="mb-2 font-semibold">PURPOSES:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Personalizing services</li>
                <li>Marketing</li>
                <li>Analytics</li>
                <li>Improving services</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">10.2 Sources of Personal Information</h3>
            <p className="mb-4">We collect the categories of Personal Information described above from the following categories of sources:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Directly from you (e.g., when you visit our Site, complete forms, communicate with us, or use our services)</li>
              <li>From our service providers (e.g., IT vendors, analytics providers)</li>
              <li>Automatically (e.g., through cookies and other tracking technologies when you use our Site)</li>
              <li>From other sources (e.g., business colleagues, third-party data providers, other parties in connection with legal matters)</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">10.3 Disclosures of Personal Information</h3>
            <p className="mb-4">
              We may disclose each of the categories of Personal Information we collect to our service providers and contractors for the following business purposes:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Performing services on our behalf related to the operation of our firm and the legal services we provide</li>
              <li>Ensuring security and integrity of Personal Information</li>
              <li>Debugging to identify and repair errors</li>
              <li>Providing advertising or marketing services</li>
              <li>Undertaking internal research for technological development</li>
              <li>Undertaking activities to verify or maintain the quality or safety of our services</li>
              <li>Complying with applicable laws and regulations</li>
              <li>Ensuring safety and security</li>
              <li>Detecting, protecting against, or addressing malicious, deceptive, fraudulent, or illegal activity</li>
            </ul>
            <p className="mb-4 font-semibold">
              WE DO NOT SELL PERSONAL INFORMATION OR SHARE IT FOR CROSS-CONTEXT BEHAVIORAL ADVERTISING.
            </p>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">10.4 How Long We Keep Personal Information</h3>
            <p className="mb-4">
              We keep the categories of Personal Information described above for as long as necessary for the purposes described in this Notice or otherwise authorized by law. This generally means holding the information for as long as one of the following apply:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Your Personal Information is reasonably necessary to manage our operations, to manage your relationship with us, or to satisfy another purpose for which we collected the information</li>
              <li>Your Personal Information is reasonably necessary to carry out a disclosed purpose that is reasonably compatible with the context in which the Personal Information was collected</li>
              <li>The Personal Information is reasonably required to protect or defend our rights or property</li>
              <li>We are otherwise required or permitted to keep Personal Information by applicable laws or regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">10.5 Your California Privacy Rights</h3>
            <p className="mb-4">If you are a California resident, you have the following rights under the CCPA:</p>

            <div className="mb-6">
              <p className="font-semibold mb-2">RIGHT TO KNOW:</p>
              <p className="mb-2">You have the right to request that we disclose to you:</p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>The categories of Personal Information we have collected about you</li>
                <li>The categories of sources from which the Personal Information was collected</li>
                <li>Our business or commercial purposes for collecting Personal Information</li>
                <li>The categories of third parties with whom we share Personal Information</li>
                <li>The specific pieces of Personal Information we have collected about you</li>
              </ul>

              <p className="font-semibold mb-2 mt-4">RIGHT TO DELETE:</p>
              <p className="mb-2">
                You have the right to request deletion of Personal Information we collected from you, subject to certain exceptions. Where we use de-identification to satisfy a deletion request, we commit to maintaining and using the information in de-identified form and will not attempt to re-identify the information.
              </p>

              <p className="font-semibold mb-2 mt-4">RIGHT TO CORRECT:</p>
              <p className="mb-2">
                If you believe that Personal Information we maintain about you is inaccurate, you may submit a request for us to correct that information. Upon receipt of a verifiable request, we will use commercially reasonable efforts to correct the information as you direct.
              </p>

              <p className="font-semibold mb-2 mt-4">RIGHT TO LIMIT USE OF SENSITIVE PERSONAL INFORMATION:</p>
              <p className="mb-2">
                You have the right to limit the use and disclosure of your Sensitive Personal Information. However, we do not use or disclose Sensitive Personal Information for purposes to which this right applies.
              </p>

              <p className="font-semibold mb-2 mt-4">RIGHT TO OPT-OUT OF SALE OR SHARING:</p>
              <p className="mb-2">
                You have the right to opt out of the sale or sharing of your Personal Information. However, we do not sell or share Personal Information for cross-context behavioral advertising.
              </p>

              <p className="font-semibold mb-2 mt-4">RIGHT TO NON-DISCRIMINATION:</p>
              <p className="mb-2">
                You have the right not to receive discriminatory treatment by us for exercising any of your CCPA rights.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-primary-darkBlue mb-3 mt-6">10.6 How to Submit Requests</h3>
            <p className="mb-2">To exercise any of these rights, please submit a request by:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>EMAIL: <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a></li>
              <li>PHONE: (310) 744-1328 (available 24 hours a day, 7 days a week)</li>
              <li>MAIL: Trembach Law Firm, APC, Attention: Privacy Request, 27001 Agoura Road, Suite 350, Calabasas, California 91301</li>
            </ul>
            <p className="mb-4">
              When you submit a request, you will be asked to provide 2-3 pieces of Personal Information that we will match against our records to verify your identity. You may designate an authorized agent to make a request on your behalf; however, you will still need to verify your identity directly with us before your request can be processed.
            </p>
            <p className="mb-4">
              We will respond to verifiable requests within 45 days of receipt, or notify you if we require additional time (up to 90 days total).
            </p>
          </section>

          <section id="nevada-privacy" aria-labelledby="nevada-heading">
            <h2 id="nevada-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">11. NEVADA PRIVACY RIGHTS</h2>
            <p className="mb-4">
              Although we do not "sell" "covered information" of Nevada "consumers" as those terms are defined by Chapter 603A of the Nevada Revised Statutes, you may contact us at <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a> and register an email address, so that we can provide you notice and the opportunity to opt out in the event we should do so in the future. It is your responsibility to keep your email contact information current.
            </p>
          </section>

          <section id="childrens-privacy" aria-labelledby="childrens-heading">
            <h2 id="childrens-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">12. CHILDREN'S PRIVACY</h2>
            <p className="mb-4">
              Our Site is not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have received personal information from someone under the age of 13, we will delete such information in accordance with applicable law.
            </p>
            <p className="mb-4">
              If you believe we might have information from or about a child under 13, please contact us at <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a>.
            </p>
          </section>

          <section id="policy-changes" aria-labelledby="changes-heading">
            <h2 id="changes-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">13. CHANGES TO THIS POLICY</h2>
            <p className="mb-4">
              This Policy is subject to change at our discretion. We will indicate changes to this Policy by updating the "Effective Date" and "Last Updated" dates at the beginning of the Policy. Your continued use of this Site after any update to this Policy will constitute your acceptance of our changes.
            </p>
            <p className="mb-4">
              We encourage you to review this Policy periodically to stay informed about our privacy practices. For material changes that significantly affect your rights, we may provide additional notice such as adding a statement to our homepage or sending you an email notification.
            </p>
          </section>

          <section id="contact-info" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4">14. CONTACT TREMBACH LAW FIRM</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, your personal information, or how to exercise your privacy rights, please contact us:
            </p>
            <address className="not-italic mb-4 font-semibold">
              Trembach Law Firm, APC<br />
              Attention: Privacy Inquiry<br />
              <br />
              Phone: (310) 744-1328 (available 24 hours a day, 7 days a week)<br />
              Email: <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a><br />
              <br />
              Mailing Address:<br />
              27001 Agoura Road, Suite 350<br />
              Calabasas, California 91301<br />
              United States
            </address>
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

export default PrivacyPolicyPage;
