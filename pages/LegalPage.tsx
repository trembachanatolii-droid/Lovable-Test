
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMeta } from '../hooks/useMeta';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/seo';

interface LegalPageProps {
  title: string;
}

const LegalPage: React.FC<LegalPageProps> = ({ title }) => {
  const navigate = useNavigate();

  const getMetaForTitle = (pageTitle: string) => {
    switch(pageTitle) {
      case "Disclaimers":
        return {
          title: 'Legal Disclaimers - Trembach Law Firm',
          description: 'Legal disclaimers and important notices regarding the use of Trembach Law Firm website and information provided.',
          canonical: 'disclaimers',
        };
      default:
        return {
          title: `${pageTitle} - Trembach Law Firm`,
          description: `${pageTitle} for Trembach Law Firm, APC. Legal information and policies governing the use of our California international trade and customs law services website.`,
          canonical: pageTitle.toLowerCase().replace(/\s+/g, '-'),
        };
    }
  };

  const meta = getMetaForTitle(title);

  useMeta({
    title: meta.title,
    description: meta.description,
    canonical: meta.canonical,
    robots: 'noindex, nofollow',
    ogImage: 'https://trembach.law/og-image-default.jpg',
    ogImageAlt: `${title} - Trembach Law Firm Legal Information`,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    schema: [
      generateWebPageSchema({
        title: title,
        description: meta.description,
        url: meta.canonical,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '' },
        { name: title, url: meta.canonical },
      ]),
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  const getContent = () => {
    switch(title) {
      case "Terms of Use":
        return (
          <div className="space-y-8 text-left">
            <section>
              <h2 className="text-2xl font-garamond font-bold text-primary-navy mb-4">1. Agreement to Terms</h2>
              <p className="text-lg leading-relaxed">
                By accessing and using the Trembach Law Firm website (the "Site"), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use the Site. We reserve the right to modify these terms at any time, and your continued use of the Site constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-garamond font-bold text-primary-navy mb-4">2. No Legal Advice or Attorney-Client Relationship</h2>
              <p className="text-lg leading-relaxed">
                The materials available on this Site are for informational purposes only and not for the purpose of providing legal advice. You should not contact us through the Site with confidential information until you have spoken with one of our attorneys and received authorization to send that information to us. Use of and access to this Site or any of the email links contained within the Site do not create an attorney-client relationship between Trembach Law Firm and the user or browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-garamond font-bold text-primary-navy mb-4">3. Intellectual Property</h2>
              <p className="text-lg leading-relaxed">
                All content, design, graphics, and other materials on this Site are the proprietary intellectual property of Trembach Law Firm or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may view, download, and print pages from the Site for your own personal, non-commercial use, provided that you do not modify the materials or remove any copyright or other proprietary notices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-garamond font-bold text-primary-navy mb-4">4. Limitation of Liability</h2>
              <p className="text-lg leading-relaxed">
                Trembach Law Firm assumes no liability for the use or interpretation of information contained herein. This Site is provided "AS IS" and "AS AVAILABLE" with any faults and without warranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </section>
          </div>
        );
      
      case "Disclaimers":
        return (
          <div className="space-y-8 text-left">
            <section>
              <h2 className="text-2xl font-garamond font-bold text-primary-navy mb-4">No Guarantee of Results</h2>
              <p className="text-lg leading-relaxed">
                The practice summaries and individual attorney biographies on this Site describe results obtained in matters handled for other clients. These descriptions are intended only to provide information about the activities and experience of our attorneys. They should not be construed as a guarantee or assurance that the same or similar results can be obtained in every matter undertaken by our attorneys. The outcome of a particular matter depends on a variety of factors—including the specific facts and circumstances of the case, the applicable law, and opposing counsel—that are beyond the control of any attorney.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-garamond font-bold text-primary-navy mb-4">Website Content</h2>
              <p className="text-lg leading-relaxed">
                The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-garamond font-bold text-primary-navy mb-4">Third-Party Links</h2>
              <p className="text-lg leading-relaxed">
                This Site may contain links to third-party websites. These links are provided solely for convenience and do not imply endorsement, sponsorship, or recommendation by Trembach Law Firm. We are not responsible for the content, privacy practices, or accuracy of information on third-party sites.
              </p>
            </section>
          </div>
        );

      case "Attorney Advertising":
        return (
          <div className="space-y-8 text-left">
            <section>
              <h2 className="text-2xl font-garamond font-bold text-primary-navy mb-4">Notice</h2>
              <p className="text-lg leading-relaxed">
                This website may constitute "attorney advertising" under the rules of professional conduct in some jurisdictions. The hiring of a lawyer is an important decision that should not be based solely upon advertisements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-garamond font-bold text-primary-navy mb-4">Prior Results</h2>
              <p className="text-lg leading-relaxed">
                Prior results do not guarantee a similar outcome. Each legal matter is unique and subject to varying results depending on the specific facts and law applicable to the case.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-garamond font-bold text-primary-navy mb-4">Responsible Attorney</h2>
              <p className="text-lg leading-relaxed">
                To the extent the State Bar rules require us to designate a principal office and/or single attorney responsible for this site, Trembach Law Firm designates Anatolii Trembach, Esq., as the attorney responsible for this site, located at 27001 Agoura Road, Suite 350, Calabasas, California 91301.
              </p>
            </section>
          </div>
        );

      default:
        return (
          <div className="text-center">
             <p className="text-xl mb-8">
              For specific legal inquiries regarding {title}, please contact our firm directly.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-32 px-6 text-center overflow-hidden flex flex-col justify-center min-h-[60vh]">
        {/* Background Image - LCP element */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
            alt="Professional businessperson representing legal terms and website policies"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width="2071"
            height="1380"
          />
          {/* Overlay with 55% opacity for better text visibility */}
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(1, 33, 105, 0.55)'}}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-garamond mb-6 tracking-tight leading-tight" style={{color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'}}>
            {title}
          </h1>
          <div className="w-24 h-1 bg-secondary-teal mx-auto mt-6"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto font-montserrat text-neutral-darkGray pb-20 px-6 pt-16">
        <div className="prose prose-lg max-w-none">
          {getContent()}
          
          <div className="mt-16 pt-8 border-t border-neutral-200 text-center">
             <p className="mb-6 text-text-secondary">
               If you have any questions about these policies, please contact us.
             </p>
             <button
              onClick={() => navigate('/contact')}
              className="inline-block px-8 py-3 bg-primary-navy text-white font-bold uppercase tracking-wider rounded hover:bg-primary-darkBlue transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;