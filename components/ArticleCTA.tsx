import React from 'react';
import Button from './Button';

interface ArticleCTAProps {
  topic?: string;
  variant?: 'default' | 'urgent' | 'compliance';
}

const ArticleCTA: React.FC<ArticleCTAProps> = ({ topic = 'this matter', variant = 'default' }) => {
  const getContent = () => {
    switch (variant) {
      case 'urgent':
        return {
          badge: 'Time-Sensitive Matter',
          badgeColor: 'bg-red-100 text-red-800',
          headline: 'Act Fast to Protect Your Business',
          description: 'CBP matters require immediate action. Delays can result in increased penalties, cargo forfeiture, or loss of import privileges. Our 24/7 emergency response team is standing by.',
          phoneLabel: 'Emergency Response',
        };
      case 'compliance':
        return {
          badge: 'Proactive Compliance',
          badgeColor: 'bg-blue-100 text-blue-800',
          headline: 'Get Ahead of CBP Audits',
          description: 'The best defense is prevention. We help businesses implement comprehensive compliance programs before CBP comes knocking. Protect your operations with expert guidance.',
          phoneLabel: 'Compliance Consultation',
        };
      default:
        return {
          badge: 'Expert Legal Counsel',
          badgeColor: 'bg-secondary-teal/10 text-secondary-teal',
          headline: `Need Help with ${topic}?`,
          description: 'Our experienced international trade attorneys provide strategic guidance tailored to your specific situation. Schedule a free consultation to discuss your options.',
          phoneLabel: 'Free Consultation',
        };
    }
  };

  const content = getContent();

  return (
    <div className="my-16 border-l-4 border-secondary-teal bg-gray-50 rounded-r-lg overflow-hidden shadow-md">
      <div className="p-8 md:p-10">
        {/* Badge */}
        <div className="mb-6">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${content.badgeColor}`}>
            {content.badge}
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-2xl md:text-3xl font-bold font-garamond text-primary-navy mb-4 leading-tight">
          {content.headline}
        </h3>

        {/* Description */}
        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
          {content.description}
        </p>

        {/* Trust Signals */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-secondary-gold/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-secondary-gold" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-primary-navy text-sm">Free Consultation</div>
              <div className="text-xs text-text-secondary">No obligation assessment</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-secondary-gold/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-secondary-gold" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-primary-navy text-sm">Confidential</div>
              <div className="text-xs text-text-secondary">Your submission is confidential</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-secondary-gold/20 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-secondary-gold" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-primary-navy text-sm">24-Hour Response</div>
              <div className="text-xs text-text-secondary">Emergency available</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Button href="/contact#schedule-consultation" variant="solid" className="w-full md:w-auto">
            Schedule Free Consultation
          </Button>

          <a
            href="tel:+13107441328"
            className="group flex items-center justify-center gap-3 w-full md:w-auto px-6 py-3 border-2 border-primary-navy text-primary-navy rounded hover:bg-primary-navy hover:text-white transition-all duration-200 font-bold"
            aria-label={`Call for ${content.phoneLabel}: (310) 744-1328`}
            style={{ cursor: 'pointer' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider opacity-75">{content.phoneLabel}</div>
              <div className="font-bold">(310) 744-1328</div>
            </div>
          </a>
        </div>

        {/* Additional Trust Signal */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-text-secondary text-center md:text-left">
            <strong className="text-primary-navy">Experienced Representation:</strong> CBP audits • Seizure defense • Penalty mitigation • Trade compliance
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCTA;
