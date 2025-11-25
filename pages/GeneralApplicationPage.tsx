
import React, { useState, useEffect } from 'react';
import ApplicationForm from '../components/ApplicationForm';
import { useMeta } from '../hooks/useMeta';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/seo';
import { siteConfig } from '../config/siteConfig';

type Category = 'attorney' | 'compliance' | 'paralegal' | 'students';

const GeneralApplicationPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('attorney');

    useMeta({
        title: 'Apply Now - CA Trade Law Careers | Trembach Law Firm',
        description: 'Apply for attorney, paralegal, or compliance specialist positions at Trembach Law Firm. Submit your application to join our California international trade law team working on CBP investigations, UFLPA cases, and Court of International Trade litigation.',
        canonical: 'careers/apply',
        ogType: 'website',
        ogImage: `${siteConfig.siteUrl}/og-image-careers.jpg`,
        schema: [
            generateWebPageSchema({
                title: 'Career Application - Trembach Law Firm',
                description: 'Apply for positions at Trembach Law Firm - California international trade and customs law attorneys.',
                url: 'careers/apply',
            }),
            generateBreadcrumbSchema([
                { name: 'Home', url: '' },
                { name: 'Careers', url: 'careers' },
                { name: 'Apply', url: 'careers/apply' },
            ]),
        ],
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Extract category from hash query string (e.g. #careers/apply?category=compliance)
        const hash = window.location.hash;
        const queryPart = hash.split('?')[1];
        if (queryPart) {
            const params = new URLSearchParams(queryPart);
            const categoryParam = params.get('category');
            if (categoryParam && ['attorney', 'compliance', 'paralegal', 'students'].includes(categoryParam)) {
                setActiveCategory(categoryParam as Category);
            }
        }
    }, []);

    const handleTabClick = (category: Category) => {
        setActiveCategory(category);
        // Update URL without reloading to reflect state
        const newHash = `#careers/apply?category=${category}`;
        window.history.replaceState(null, '', newHash);
    };

    return (
        <div className="pt-20 bg-gray-50 min-h-screen font-montserrat text-neutral-darkGray pb-20">
             <div className="bg-primary-navy text-white py-12 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-garamond mb-4">General Application</h1>
                <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                    Please select the appropriate category for your application below. All submissions are kept strictly confidential.
                </p>
            </div>

            {/* Application Process Overview */}
            <section className="max-w-[1000px] mx-auto px-6 py-12">
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold font-garamond text-primary-navy mb-6">Application Process & Requirements</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-primary-navy mb-3">What to Include</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-secondary-teal mr-2">•</span>
                                    <span><strong>Resume or CV:</strong> Current and complete work history</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary-teal mr-2">•</span>
                                    <span><strong>Cover Letter:</strong> Explain your interest in international trade law and this specific position</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary-teal mr-2">•</span>
                                    <span><strong>Writing Sample:</strong> For attorney positions - 5-10 page legal analysis (redacted for confidentiality)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary-teal mr-2">•</span>
                                    <span><strong>References:</strong> Three professional references with current contact information</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary-teal mr-2">•</span>
                                    <span><strong>Transcripts:</strong> Law school transcripts for attorney/clerk positions (unofficial acceptable initially)</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary-navy mb-3">What to Expect</h3>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <p className="font-semibold text-primary-navy">1. Application Review (1-2 weeks)</p>
                                    <p className="text-sm">We carefully review all applications. You'll receive confirmation email upon submission.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary-navy">2. Initial Interview (30-60 minutes)</p>
                                    <p className="text-sm">Phone or video screening to discuss your background and interest in trade law.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary-navy">3. Final Interview (If Selected)</p>
                                    <p className="text-sm">In-person or extended video interview with Attorney Trembach. Office tour for local candidates.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary-navy">4. Decision (Within 1 week)</p>
                                    <p className="text-sm">We notify all interviewed candidates of our decision promptly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Privacy & Equal Opportunity */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-bold text-primary-navy mb-3">Application Privacy</h3>
                        <p className="text-gray-700 text-sm mb-3">
                            Your application is confidential and reviewed only by hiring partners. We retain applications for 12 months for future openings.
                        </p>
                        <p className="text-gray-700 text-sm">
                            <strong>California Privacy Rights:</strong> Under CCPA, you may request deletion of your application data at any time by contacting us at infotrade@trembachlaw.com.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-bold text-primary-navy mb-3">Equal Opportunity Employer</h3>
                        <p className="text-gray-700 text-sm">
                            Trembach Law Firm is committed to creating a diverse and inclusive workplace. We consider all qualified applicants without regard to race, color, religion, sex, gender identity, sexual orientation, national origin, age, disability, genetic information, veteran status, or any other protected status.
                        </p>
                    </div>
                </div>

                {/* Questions Contact */}
                <div className="bg-primary-navy/5 rounded-lg p-6 border-l-4 border-secondary-teal mb-8">
                    <h3 className="text-lg font-bold text-primary-navy mb-2">Questions About Your Application?</h3>
                    <p className="text-gray-700 mb-3">
                        If you have questions about the application process, position requirements, or need assistance with your submission:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm">
                        <div>
                            <strong className="text-primary-navy">Email:</strong>{' '}
                            <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">
                                infotrade@trembachlaw.com
                            </a>
                        </div>
                        <div>
                            <strong className="text-primary-navy">Phone:</strong>{' '}
                            <a href="tel:631-746-8290" className="text-secondary-teal hover:underline">
                                631-746-8290
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[1000px] mx-auto px-6 -mt-8">
                <div className="bg-white rounded-xl shadow-lg border border-border-subtle overflow-hidden">

                    {/* Tabs */}
                    <div className="flex flex-wrap border-b border-neutral-lightGray">
                        {[
                            { id: 'attorney', label: 'Attorney Trial Positions' },
                            { id: 'compliance', label: 'Customs & Trade Compliance' },
                            { id: 'paralegal', label: 'Paralegal / Legal Analyst' },
                            { id: 'students', label: 'Law Student / Clerk' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(tab.id as Category)}
                                className={`flex-1 py-4 px-4 text-sm md:text-base font-bold text-center transition-colors duration-200 border-b-4 ${
                                    activeCategory === tab.id 
                                    ? 'border-secondary-teal text-primary-navy bg-white' 
                                    : 'border-transparent text-text-secondary bg-gray-50 hover:bg-white hover:text-primary-navy'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Application Note */}
                    <div className="bg-blue-50 p-4 text-sm text-primary-navy text-center border-b border-blue-100">
                        <p><strong>Confidentiality Notice:</strong> Applications are reviewed only by our hiring partners. Do not attach documents containing privileged or unredacted client-identifying information.</p>
                    </div>

                    {/* Form Container */}
                    <div className="p-6 md:p-10">
                        <ApplicationForm category={activeCategory} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GeneralApplicationPage;
