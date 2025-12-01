
import React, { useEffect, lazy, Suspense } from 'react';
import { useMeta } from '../hooks/useMeta';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/seo';
import { siteConfig } from '../config/siteConfig';



// Lazy load EvaluationForm (below-the-fold component)
const EvaluationForm = lazy(() => import('../components/EvaluationForm'));
const AboutPage: React.FC = () => {
  useMeta({
    title: 'About Us | California Trade & Customs Attorney',
    description: 'California trade attorney & customs lawyer. USC Law LL.M. CBP defense, customs audits, trade compliance. Boutique firm serving CA & USA.',
    canonical: 'about',
    ogType: 'website',
    ogImage: `${siteConfig.siteUrl}/og-image-about.jpg`,
    ogImageAlt: 'About Trembach Law Firm - California International Trade & Customs Law Practice',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    twitterImageAlt: 'About Trembach Law Firm - California International Trade & Customs Law Practice',
    schema: [
      generateWebPageSchema({
        title: 'About Trembach Law Firm',
        description: 'Trembach Law Firm, APC specializes in international trade and customs law, providing clients with highest quality legal representation.',
        url: `${siteConfig.siteUrl}/#about`,
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: `${siteConfig.siteUrl}/` },
        { name: 'About', url: `${siteConfig.siteUrl}/#about` }
      ])
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 font-montserrat text-neutral-darkGray bg-white">
      {/* Hero Section - H1 Text as LCP */}
      <section className="relative w-full py-32 px-6 text-center overflow-hidden flex flex-col justify-center min-h-[60vh]">
         {/* Background Image - LCP element, eager loaded */}
         <div className="absolute inset-0 z-0" aria-hidden="true">
           <img
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
             alt="California law office building representing Trembach Law Firm international trade and customs legal practice"
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

         {/* Hero Content - LCP Element (H1) */}
         <div className="relative z-10 max-w-4xl mx-auto">
           <h1 className="text-5xl md:text-7xl font-bold font-garamond mb-6 tracking-tight leading-tight" style={{color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'}}>
             About the Firm
           </h1>
           <p className="text-xl md:text-2xl font-medium tracking-wide mb-4" style={{color: '#ffffff', textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.5)'}}>
             International Trade and Customs Law Excellence
           </p>
           <div className="w-24 h-1 bg-secondary-teal mx-auto mt-6"></div>
         </div>
      </section>

      {/* Combined Content Section to reduce contrast sharpness */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* Introduction */}
          <div className="text-center md:text-left">
             <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-6">
               International Trade and Customs Law
             </h2>
             <p className="text-lg leading-relaxed text-text-secondary">
               Trembach Law Firm, APC specializes in international trade and customs law. Our practice focuses on helping clients navigate the complex world of tariffs, duties, and import fees, and also extends to helping clients navigate virtually any law or regulation affecting the movement of goods and technology into, or out of, most countries. Our mission is to provide clients with the highest quality, business-friendly legal representation.
             </p>
          </div>

          {/* Partner Approach */}
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start border-t border-neutral-100 pt-16">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-4">
                   Your Legal Partner
                </h2>
                <p className="text-xl text-secondary-teal font-semibold mb-6">
                   Personal Attention, Exceptional Legal Advice
                </p>
                <p className="text-lg leading-relaxed text-text-secondary mb-6">
                   In many large service providers, whether they be law or accounting firms, the business model is built around a relationship partner who hands off work to junior to mid-level attorneys and paralegals. A client's situation at these large organizations is often treated as just another case.
                </p>
                <p className="text-lg leading-relaxed text-text-secondary">
                   At Trembach Law Firm, APC, we reject this approach. Attorney Anatolii Trembach serves as both the relationship partner and the attorney who will personally work virtually all aspects of your case. This approach allows us to offer clients large law firm quality legal services and acumen in a boutique law firm setting.
                </p>
             </div>
          </div>

        </div>
      </section>

      {/* Intelligence Experience - Soft Background for Emphasis */}
      <section className="py-20 px-6 bg-gray-50">
         <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200">
               <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-6">
                 Government Intelligence Experience
               </h2>
               <p className="text-lg leading-relaxed text-text-secondary mb-6">
                 What sets Trembach Law Firm apart is Attorney Trembach's unique background investigating international trade law violations. Before his legal career in the United States, Attorney Trembach served as a criminal detective at the Security Service of Ukraine (SBU), Ukraine's premier intelligence agency similar to the FBI in the United States.
               </p>
               <p className="text-lg leading-relaxed text-text-secondary">
                 In this role, he investigated complex criminal cases involving violations of international trade law. Later, as a defense attorney, he represented the opposing side. This dual perspective—understanding both government enforcement tactics and defense strategies—gives our clients a significant strategic advantage.
               </p>
            </div>
         </div>
      </section>

      {/* Value & Reach - Grid Layout */}
      <section className="py-24 px-6 bg-white">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Competitive Fees */}
            <div>
               <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-6 pb-4 border-b border-neutral-200 inline-block pr-8">
                 Competitive Fees
               </h2>
               <p className="text-lg leading-relaxed text-text-secondary mb-6">
                 Our boutique law firm setting allows us to offer extremely competitive hourly rates and innovative fee arrangements. We pride ourselves on giving clients predictable legal budgets so that no one is surprised with any of our invoices.
               </p>
               <p className="text-lg leading-relaxed text-text-secondary">
                 For those clients who wish to move away from the billable hour, we offer fixed/project fee, retainer fee, and success fee alternatives tailored to your business needs.
               </p>
            </div>

            {/* Statewide Service */}
            <div>
               <h2 className="text-3xl font-bold font-garamond text-primary-navy mb-6 pb-4 border-b border-neutral-200 inline-block pr-8">
                 Statewide & Global Reach
               </h2>
               <p className="text-lg leading-relaxed text-text-secondary mb-6">
                 Trembach Law Firm serves clients throughout all 58 California counties and represents businesses before federal agencies and the U.S. Court of International Trade nationwide.
               </p>
               <p className="text-lg leading-relaxed text-text-secondary">
                 Our network includes counsel in China, Taiwan, Japan, Thailand, India, Australia, Mexico, Germany, and more. Services are available in English, Ukrainian, and Russian to support your global operations.
               </p>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary-navy text-white text-center">
         <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold font-garamond mb-6 text-white">
             Innovative Solutions for a Global Marketplace
           </h2>
           <p className="text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
             With customs and international trade issues now receiving C-Suite level attention, the scope of our practice matches current needs for innovative solutions.
           </p>
           <a 
             href="#practice-areas" 
             onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#practice-areas';
             }}
             className="inline-block bg-secondary-teal text-white font-bold py-4 px-10 rounded hover:bg-secondary-forestGreen transition-colors duration-300 shadow-lg transform hover:-translate-y-1"
           >
             Explore Our Practice Areas
           </a>
         </div>
      </section>

      {/* Evaluation Form */}
      <Suspense fallback={<div style={{ minHeight: '600px', background: 'transparent' }} aria-label="Loading form" />}>
        <EvaluationForm theme="light" />
      </Suspense>
    </div>
  );
};

export default AboutPage;
