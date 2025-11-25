
import React, { useEffect } from 'react';

const NewsArticlePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-montserrat">
      {/* Article Content */}
      <article className="max-w-[800px] mx-auto px-6 pt-32 pb-20">

        {/* Back to News Link */}
        <a
          href="#news"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = 'news';
          }}
          className="inline-flex items-center gap-2 mb-8 transition-colors"
          style={{
            color: '#CCCCCC',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            style={{ width: '16px', height: '16px' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to News
        </a>

        {/* Category and Read Time */}
        <div className="mb-6" style={{
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: '#3FBB94'
        }}>
          <span>CUSTOMS LITIGATION</span>
          <span style={{ margin: '0 8px', color: '#CCCCCC' }}>•</span>
          <span style={{ color: '#CCCCCC', fontWeight: 400 }}>25 MIN READ</span>
        </div>

        {/* Title */}
        <h1 className="font-garamond font-bold mb-8" style={{
          fontSize: '48px',
          lineHeight: '1.15',
          color: '#012169'
        }}>
          Tariff Classification Disputes: How to Challenge CBP's HTS Determination
        </h1>

        {/* Published and Author */}
        <div className="mb-12" style={{
          fontSize: '14px',
          color: '#666666'
        }}>
          <div className="mb-1">
            <span style={{ color: '#AAAAAA', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em', fontWeight: 600 }}>PUBLISHED</span>
          </div>
          <div className="mb-4" style={{ fontWeight: 600, color: '#012169' }}>
            November 17, 2025
          </div>
          <div className="mb-1">
            <span style={{ color: '#AAAAAA', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em', fontWeight: 600 }}>AUTHOR</span>
          </div>
          <div style={{ fontWeight: 600, color: '#012169' }}>
            Anatolii Trembach
          </div>
        </div>

        <div className="space-y-6">
          <section id="introduction" aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="font-garamond font-bold mb-6" style={{
              fontSize: '32px',
              lineHeight: '1.3',
              color: '#012169'
            }}>Introduction</h2>
        <p className="mb-6" style={{
          fontSize: '16px',
          lineHeight: '1.75',
          color: '#333333'
        }}>
          Tariff classification under the Harmonized Tariff Schedule (HTS) determines the duty rate applied to imported merchandise. With over 17,000 tariff classifications and duty rates ranging from zero to over 30%, correct classification significantly impacts import costs. Classification disputes between importers and U.S. Customs and Border Protection (CBP) are among the most common customs controversies, often involving substantial financial stakes.
        </p>
        <p className="mb-6" style={{
          fontSize: '16px',
          lineHeight: '1.75',
          color: '#333333'
        }}>
          This comprehensive guide examines tariff classification from multiple perspectives: the legal framework governing classification, methodology for determining correct classifications, procedures for obtaining binding rulings, protesting CBP classification decisions, litigating classifications in the Court of International Trade, and best practices for classification compliance. Whether you are facing a classification dispute, seeking to reduce duty costs through reclassification, or building classification programs to prevent disputes, this article provides essential guidance.
        </p>

          </section>

          <section id="hts-structure" aria-labelledby="hts-heading">
            <h2 id="hts-heading" className="font-garamond font-bold mb-6" style={{
              fontSize: '32px',
              lineHeight: '1.3',
              color: '#012169'
            }}>HTS Structure and Legal Framework</h2>

            <h3 className="font-garamond font-bold mb-4" style={{
              fontSize: '24px',
              lineHeight: '1.3',
              color: '#012169'
            }}>Harmonized System Foundation</h3>
        <p className="mb-6" style={{
          fontSize: '16px',
          lineHeight: '1.75',
          color: '#333333'
        }}>
          The Harmonized Tariff Schedule is based on the international Harmonized Commodity Description and Coding System (HS) maintained by the World Customs Organization. The HS provides six-digit classifications used by over 200 countries, with individual countries adding additional digits for national purposes. The U.S. HTS extends to eight or ten digits, with the first six digits conforming to international HS standards.
        </p>
        <p className="mb-6" style={{
          fontSize: '16px',
          lineHeight: '1.75',
          color: '#333333'
        }}>
          The HTS is organized into 99 chapters covering different product categories from live animals to art to miscellaneous products. Each chapter divides into headings (four-digit level), subheadings (six-digit level), and tariff items (eight or ten digits). Understanding this hierarchical structure is essential for classification analysis.
        </p>

            <h3 className="font-garamond font-bold mb-4 mt-8" style={{
              fontSize: '24px',
              lineHeight: '1.3',
              color: '#012169'
            }}>General Rules of Interpretation</h3>
        <p className="mb-6" style={{
          fontSize: '16px',
          lineHeight: '1.75',
          color: '#333333'
        }}>
          Classification methodology is governed by the General Rules of Interpretation (GRIs), which provide the framework for analyzing products and determining their proper classification. The GRIs must be applied in order, and classification should be determined by reference to the terms of the headings and any relevant Section or Chapter Notes.</p>

          </section>

        </div>
      </article>

      {/* Evaluation Form Call-to-Action */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-garamond font-bold mb-4" style={{
            fontSize: '32px',
            lineHeight: '1.3',
            color: '#012169'
          }}>Need Help With Classification Disputes?</h2>
          <p className="mb-6" style={{
            fontSize: '16px',
            lineHeight: '1.75',
            color: '#666666'
          }}>
            Contact Trembach Law Firm for expert representation in tariff classification matters.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 font-bold text-white transition-colors hover:bg-opacity-90"
            style={{
              backgroundColor: '#012169',
              fontSize: '14px',
              letterSpacing: '0.05em'
            }}
          >
            CONTACT US
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsArticlePage;
