
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema, generateJobPostingSchema } from '../utils/seo';

interface JobCategoryProps {
    title: string;
    description: string;
    qualifications: string[];
    applyLink: string;
    isOpen: boolean;
    onToggle: () => void;
}

const JobCategoryAccordion: React.FC<JobCategoryProps> = ({ title, description, qualifications, applyLink, isOpen, onToggle }) => {
    return (
        <div className="border-b border-neutral-lightGray">
            <button
                onClick={onToggle}
                className="w-full py-2 flex justify-between items-center text-left group focus:outline-none"
                aria-expanded={isOpen}
            >
                <h3 className={`text-xl font-garamond font-bold transition-colors duration-300 ${isOpen ? 'text-secondary-teal' : 'text-primary-navy group-hover:text-primary-midBlue'}`}>
                    {title}
                </h3>
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-secondary-teal rotate-45' : 'border-neutral-gray group-hover:border-primary-navy'}`}>
                    <span className={`text-2xl leading-none ${isOpen ? 'text-secondary-teal' : 'text-neutral-darkGray'}`}>+</span>
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-base text-text-secondary mb-3 leading-relaxed">
                    {description}
                </p>
                <h4 className="text-sm font-bold uppercase tracking-wider text-primary-navy mb-2">Key Qualifications</h4>
                <ul className="list-disc list-inside space-y-1 mb-4 text-text-secondary text-sm">
                    {qualifications.map((qual, idx) => (
                        <li key={idx}>{qual}</li>
                    ))}
                </ul>
                <Button href={applyLink} variant="solid">
                    Submit Application
                </Button>
            </div>
        </div>
    );
};

const CareersPage: React.FC = () => {
    useMeta({
      title: 'Careers - International Trade Attorney Jobs California | Customs Law Positions',
      description: 'International trade attorney jobs in California. Work on CBP investigations, CIT litigation, UFLPA cases. Competitive pay, mentorship, complex federal work.',
      keywords: 'international trade attorney jobs California, customs lawyer careers California, trade compliance jobs California, customs attorney positions California, international trade law firm jobs, boutique law firm California careers, customs paralegal jobs, trade law clerk positions California, CBP litigation attorney jobs, import export lawyer careers California, ITAR compliance jobs California, customs broker attorney positions, trade remedies lawyer jobs, Calabasas law firm careers, Los Angeles trade attorney jobs',
      canonical: 'careers',
      ogType: 'website',
      ogImage: `${siteConfig.siteUrl}/og-image-careers.jpg`,
      schema: [
        generateWebPageSchema({
          title: 'Careers at Trembach Law Firm - International Trade Attorney Jobs California',
          description: 'Join California\'s premier international trade and customs law firm. Attorney, compliance, and paralegal positions available.',
          url: `${siteConfig.siteUrl}/#careers`,
        }),
        generateBreadcrumbSchema([
          { name: 'Home', url: `${siteConfig.siteUrl}/` },
          { name: 'Careers', url: `${siteConfig.siteUrl}/#careers` }
        ]),
        // JobPosting Schemas for Google for Jobs
        generateJobPostingSchema({
          title: 'International Trade Attorney - California',
          description: 'Trembach Law Firm seeks high-caliber attorneys with demonstrated experience in international trade law litigation, antidumping/countervailing duty proceedings, and complex customs disputes. Candidates should be prepared to handle high-stakes matters before the Court of International Trade and advocate effectively for clients facing federal investigations. Requirements: J.D. or L.L.M. from accredited law school, active bar membership, 3+ years customs or trade remedies law experience, proven trial or appellate litigation experience, must have served as lead counsel in at least 10 trials.',
          employmentType: 'FULL_TIME',
          baseSalaryMin: 120000,
          baseSalaryMax: 250000,
        }),
        generateJobPostingSchema({
          title: 'Customs & Trade Compliance Professional - California',
          description: 'Join our compliance team working directly with importers to build robust internal control programs. This role involves conducting mock audits, classification reviews, and developing supply chain security profiles for C-TPAT validation. Requirements: Licensed Customs Broker (LCB) preferred, experience with HTS classification, valuation, and free trade agreements, familiarity with ACE reporting and data analytics, strong project management skills for audit defense preparation.',
          employmentType: 'FULL_TIME',
          baseSalaryMin: 80000,
          baseSalaryMax: 150000,
        }),
        generateJobPostingSchema({
          title: 'Paralegal & Legal Analyst - International Trade Law',
          description: 'Paralegals at Trembach Law Firm are integral to our case strategy. You will conduct factual research, manage case filings, analyze import data sets, and assist with document production in federal litigation. Requirements: Bachelor\'s degree or paralegal certificate, proficiency with legal research tools (Westlaw/Lexis) and docketing, high attention to detail and organizational skills, experience with e-discovery platforms is a plus.',
          employmentType: 'FULL_TIME',
          baseSalaryMin: 55000,
          baseSalaryMax: 90000,
        }),
        generateJobPostingSchema({
          title: 'Law Student Clerk - International Trade & Customs Law',
          description: 'We offer a mentorship-focused clerkship program for law students interested in international trade. Clerks assist partners with legal research, brief writing, and client alerts, gaining real-world insight into the practice of customs law. Requirements: Current enrollment in an accredited J.D. program, strong academic record (top 30% preferred), demonstrated interest in international law or administrative law, excellent legal writing and research skills.',
          employmentType: 'PART_TIME',
        }),
      ],
    });

    const [openCategory, setOpenCategory] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    const jobCategories = [
        {
            id: 'attorney',
            title: 'International Trade Attorney Positions',
            description: 'We seek high-caliber attorneys with demonstrated experience in international trade law litigation, antidumping/countervailing duty proceedings, and complex customs disputes. Candidates should be prepared to handle high-stakes matters before the Court of International Trade and advocate effectively for clients facing federal investigations.',
            qualifications: [
                'J.D. or L.L.M. from an accredited law school and active bar membership.',
                '3+ years of experience in customs or trade remedies law.',
                'Proven trial or appellate litigation experience (writing sample required).',
                'Must have served as lead counsel in at least 10 trials (required).',
                'Ability to manage complex discovery and expert witness preparation.'
            ],
            applyLink: '#careers/apply?category=attorney'
        },
        {
            id: 'compliance',
            title: 'Customs & Trade Compliance Professionals',
            description: 'Our compliance team works directly with importers to build robust internal control programs. This role involves conducting mock audits, classification reviews, and developing supply chain security profiles for C-TPAT validation.',
            qualifications: [
                'Licensed Customs Broker (LCB) preferred.',
                'Experience with HTS classification, valuation, and free trade agreements.',
                'Familiarity with ACE reporting and data analytics.',
                'Strong project management skills for audit defense preparation.'
            ],
            applyLink: '#careers/apply?category=compliance'
        },
        {
            id: 'paralegal',
            title: 'Paralegal & Legal Analyst Positions',
            description: 'Paralegals at Trembach Law Firm are integral to our case strategy. You will conduct factual research, manage case filings, analyze import data sets, and assist with document production in federal litigation.',
            qualifications: [
                'Bachelor’s degree or paralegal certificate.',
                'Proficiency with legal research tools (Westlaw/Lexis) and docketing.',
                'High attention to detail and organizational skills.',
                'Experience with e-discovery platforms is a plus.'
            ],
            applyLink: '#careers/apply?category=paralegal'
        },
        {
            id: 'students',
            title: 'Law Student & Clerk Opportunities',
            description: 'We offer a mentorship-focused clerkship program for law students interested in international trade. Clerks assist partners with legal research, brief writing, and client alerts, gaining real-world insight into the practice of customs law.',
            qualifications: [
                'Current enrollment in an accredited J.D. program.',
                'Strong academic record (top 30% preferred).',
                'Demonstrated interest in international law or administrative law.',
                'Excellent legal writing and research skills.'
            ],
            applyLink: '#careers/apply?category=students'
        }
    ];

    return (
        <div className="pt-20 font-montserrat text-neutral-darkGray bg-white">
            {/* Hero Section */}
            <section className="relative w-full py-32 px-6 text-center overflow-hidden flex flex-col justify-center min-h-[60vh]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <img
                        src="/images/hero-careers.jpg"
                        alt=""
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                        width="1920"
                        height="1080"
                    />
                    {/* Dark overlay with 55% opacity for text visibility */}
                    <div className="absolute inset-0" style={{backgroundColor: 'rgba(1, 33, 105, 0.55)'}}></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold font-garamond mb-6 tracking-tight leading-tight" style={{color: '#ffffff', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6), 0 0 40px rgba(1, 33, 105, 0.5)'}}>
                        Careers at Trembach Law Firm
                    </h1>
                    <p className="text-xl md:text-2xl font-medium tracking-wide mb-4" style={{color: '#ffffff', textShadow: '0 2px 6px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.5)'}}>
                        Join a boutique firm dedicated to excellence in U.S. international trade and customs law.
                    </p>
                    <div className="w-24 h-1 bg-secondary-teal mx-auto mt-6"></div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="py-16 px-6 bg-neutral-50">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-8">
                        Why Join Trembach Law Firm
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg border-l-4 border-secondary-teal">
                            <h3 className="text-xl font-bold text-primary-navy mb-3">Specialized Practice</h3>
                            <p className="text-text-secondary">
                                Focus exclusively on international trade and customs law. Develop deep expertise in CBP enforcement, export controls, trade remedies, and compliance advisory. Become a recognized specialist in one of law's most dynamic practice areas.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-l-4 border-secondary-teal">
                            <h3 className="text-xl font-bold text-primary-navy mb-3">Direct Client Responsibility</h3>
                            <p className="text-text-secondary">
                                From day one, associates have direct client contact. Take depositions, argue motions, negotiate with CBP, and manage compliance advisory clients. No years of document review - immediate substantive work.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-l-4 border-secondary-teal">
                            <h3 className="text-xl font-bold text-primary-navy mb-3">High-Stakes Matters</h3>
                            <p className="text-secondary">
                                Work on cases involving millions in CBP penalties, critical inventory seizures, export license denials, and antidumping duty orders. The work is consequential, intellectually challenging, and directly impacts client business operations.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-l-4 border-secondary-teal">
                            <h3 className="text-xl font-bold text-primary-navy mb-3">Cutting-Edge Issues</h3>
                            <p className="text-text-secondary">
                                Handle emerging trade law matters: UFLPA forced labor investigations, Section 301 exclusions, semiconductor export controls, CHIPS Act compliance, and carbon border adjustments. Stay at the forefront of trade policy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-8">
                        Comprehensive Benefits Package
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-lg font-bold text-primary-navy mb-3">Health &amp; Wellness</h3>
                            <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                                <li>Medical, dental, vision insurance</li>
                                <li>Life and disability coverage</li>
                                <li>Mental health support</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary-navy mb-3">Financial</h3>
                            <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                                <li>Competitive salary</li>
                                <li>401(k) with firm matching</li>
                                <li>Performance bonuses</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary-navy mb-3">Professional Development</h3>
                            <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                                <li>CLE budget and bar dues</li>
                                <li>Conference attendance</li>
                                <li>Publication opportunities</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 bg-gray-light p-6 rounded-lg">
                        <p className="text-text-secondary">
                            <strong className="text-primary-navy">Work-Life Balance:</strong> We're committed to sustainable practice. While trade law can be demanding, especially during CBP emergencies, we respect personal time and offer flexible work arrangements including hybrid remote options.
                        </p>
                    </div>
                </div>
            </section>

            {/* Application Process Section */}
            <section className="py-16 px-6 bg-neutral-50">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-8">
                        How to Apply
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-lg font-bold text-primary-navy mb-3">Required Materials</h3>
                            <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                                <li>Cover letter explaining your interest in trade law</li>
                                <li>Resume or CV</li>
                                <li>Writing sample (5-10 pages, legal analysis preferred)</li>
                                <li>Three professional references</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary-navy mb-3">Application Timeline</h3>
                            <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                                <li>Application review: 1-2 weeks</li>
                                <li>Initial interview: 30-60 minutes</li>
                                <li>Final interview: Meet team, office tour</li>
                                <li>Decision notification within 1 week</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary-navy mb-3">Contact for Questions</h3>
                            <p className="text-text-secondary text-sm mb-2">Email: <a href="mailto:infotrade@trembachlaw.com" className="text-secondary-teal hover:underline">infotrade@trembachlaw.com</a></p>
                            <p className="text-text-secondary text-sm">Phone: <a href="tel:631-746-8290" className="text-secondary-teal hover:underline">631-746-8290</a></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Opportunities Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-garamond text-primary-navy mb-2 text-center">
                        Job Opportunities
                    </h2>
                    <p className="text-lg text-text-secondary mb-6 text-center">
                        We welcome applications from talented professionals passionate about trade law.
                    </p>

                    <div className="flex flex-col border-t border-neutral-lightGray">
                        {jobCategories.map((job) => (
                            <JobCategoryAccordion
                                key={job.id}
                                {...job}
                                isOpen={openCategory === job.id}
                                onToggle={() => toggleCategory(job.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* EEO Statement */}
            <section className="py-16 px-6 bg-neutral-50 border-t border-neutral-lightGray">
                <div className="max-w-[800px] mx-auto text-center">
                    <h3 className="text-sm font-bold text-primary-navy uppercase tracking-widest mb-4">Equal Opportunity Employer</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                        Trembach Law Firm is committed to creating a diverse and inclusive workplace. We consider all qualified applicants without regard to race, color, religion, sex (including pregnancy, childbirth, or related conditions), gender identity or expression, sexual orientation, national origin, age, disability, genetic information, veteran status, or any other status protected by applicable law.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
