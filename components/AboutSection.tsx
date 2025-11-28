
import React, { memo } from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="bg-gray-light py-20 px-6">
            <div className="max-w-[800px] mx-auto text-center">
                <div className="w-20 h-1 bg-primary-navy mx-auto mb-6"></div>
                <h2 className="text-[42px] leading-tight font-garamond font-bold text-primary-navy mb-6">International Trade and Customs Law</h2>
                <p className="text-[21px] text-text-secondary leading-relaxed mb-4">
                    Trembach Law Firm specializes in international trade and customs law, helping clients navigate tariffs, duties, and regulations affecting the movement of goods and technology across borders.
                </p>
                <p className="text-[21px] text-text-secondary leading-relaxed mb-4">
                    Our founder, Attorney Anatolii Trembach, worked as a detective at Ukraine's Security Service (SBU)—similar to the FBI in the USA—investigating international trade violations, before switching sides as a defense attorney representing businesses. This dual perspective gives clients a strategic advantage in compliance planning and enforcement defense.
                </p>
                <p className="text-[21px] text-text-secondary leading-relaxed mb-4">
                    Based in California, we provide direct, partner-level attention on every case. We serve clients nationwide, collaborate with counsel globally, and offer services in English, Ukrainian, and Russian.
                </p>
                <p className="text-[21px] text-text-secondary leading-relaxed mb-8">
                    Competitive fees with flexible arrangements.
                </p>
                <a 
                    href="#practice-areas"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = '#practice-areas';
                    }}
                    className="font-bold text-primary-darkBlue hover:text-secondary-teal transition-colors duration-200 text-[21px] scroll-smooth"
                >
                    See our scope of practice here &rarr;
                </a>
            </div>
        </section>
    );
};

export default memo(AboutSection);
