import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useMeta } from '../hooks/useMeta';
import { siteConfig } from '../config/siteConfig';
import { generateWebPageSchema, generateBreadcrumbSchema } from '../utils/seo';

// API endpoint for form submission
const SUBMIT_API_ENDPOINT = '/.netlify/functions/submit-consultation';

const practiceAreaOptions = {
    'Customs & Import Compliance': [
        'Customs Audits (Focused Assessments, Quick Response Audits, Surveys) & Audit Defense',
        'CF-28 & CF-29 Notices (Requests for Information & Notices of Action)',
        'Classification (Tariff Classification Disputes)',
        'Customs Valuation (including assists, royalties & transfer pricing)',
        'Country of Origin, Labeling, Marking & Origin Disputes',
        'Liquidated Damages',
        'Prior Disclosures',
        'Seizures & Detentions',
        'Forced Labor / Withhold Release Orders (WROs)',
        'Duty Drawback Recovery',
        'USMCA, Free Trade Agreements & Duty Preference Programs (including GSP)',
        'M&A Customs & Trade Due Diligence',
    ],
    'Trade Remedies, Tariffs & Investigations': [
        'AD/CVD (Antidumping & Countervailing Duty) Issues',
        'Administrative Reviews',
        'Scope Rulings & Scope Issues',
        'EAPA Investigations Defense (Enforce and Protect Act)',
        'Safeguard Tariff Issues',
        'Section 301 Duties & Exclusion Requests',
        'Section 232 Tariffs on Steel & Aluminum Products',
        'S301 & 232 Exclusions',
        'Tariffs & Penalties (advice, protests & litigation)',
    ],
    'Export Controls & Sanctions': [
        'Export Controls Compliance (BIS / OFAC Administered Export Controls)',
        'Export Process, Licensing & Export Agreements',
        'Commodity Jurisdiction & Export Classification Issues',
        'Deemed Export Issues',
        'Sanctions, Embargoes & Denied Parties / Restricted Party Screening',
        'Anti-boycott Compliance',
        'Voluntary Self-Disclosures of Export Violations',
        'Export Penalty Defense',
    ],
    'Trade & Maritime Litigation / Disputes': [
        'Trade Litigation (tariffs, penalties, AD/CVD, customs & export matters)',
        'Admiralty & Maritime Claims',
        'Customs Brokerage Liability (claims & defenses)',
        'Cargo Claims',
        'Contract & International Trade Disputes',
        'FMC Complaints & Disputes',
        'Marine Insurance Coverage Claims',
        'False Claims Act Defense (customs & trade related)',
    ],
    'Compliance Programs, Enforcement & Training': [
        'Trade Compliance Programs (design, implementation & audits)',
        'Trade Compliance Assessment and Maturity Framework',
        'Enforcement Actions (customs, trade, export & sanctions)',
        'Supply Chain Security',
        'Seminars & Training (customs, trade, export controls & sanctions)',
    ],
};

const timezones = [
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
    { value: 'America/Denver', label: 'Mountain Time (MT)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Anchorage', label: 'Alaska Time (AKT)' },
    { value: 'Pacific/Honolulu', label: 'Hawaii Time (HT)' },
    { value: 'Europe/London', label: 'GMT/BST (London)' },
    { value: 'Europe/Paris', label: 'CET (Paris)' },
    { value: 'Asia/Tokyo', label: 'JST (Tokyo)' },
    { value: 'Asia/Shanghai', label: 'CST (Shanghai)' },
    { value: 'Asia/Hong_Kong', label: 'HKT (Hong Kong)' },
];

const consultationTypes = [
    { value: 'phone', label: 'Phone Call' },
    { value: 'video', label: 'Video Conference (Zoom/Teams)' },
    { value: 'in-person', label: 'In-Person Meeting' },
];

const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
];

interface FormFieldProps {
    id: string;
    label: string;
    type?: string;
    required?: boolean;
    isTextArea?: boolean;
    placeholder?: string;
    autoComplete?: string;
}

const FormField: React.FC<FormFieldProps> = ({
    id,
    label,
    type = 'text',
    required = false,
    isTextArea = false,
    placeholder,
    autoComplete,
}) => {
    const commonProps = {
        id,
        name: id,
        required,
        placeholder,
        autoComplete,
        'aria-required': required,
        className: 'w-full px-5 py-4 text-base rounded transition-all bg-white text-primary-navy placeholder-text-secondary border border-border-subtle focus:border-secondary-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-secondary-teal focus-visible:outline-offset-2',
    };

    return (
        <div>
            <label htmlFor={id} className="block text-base font-semibold mb-3 text-primary-navy">
                {label} {required && <span className="text-secondary-teal" aria-label="required">*</span>}
            </label>
            {isTextArea ? (
                <textarea {...commonProps} rows={5} className={`${commonProps.className} resize-none leading-relaxed`} aria-label={label}></textarea>
            ) : (
                <input type={type} {...commonProps} aria-label={label} />
            )}
        </div>
    );
};

const ConsultationBookingPage: React.FC = () => {
    const [formData, setFormData] = useState({
        consultationType: '',
        timezone: 'America/Los_Angeles',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const showNotification = (message: string, type: 'success' | 'error') => {
        const colors = {
            success: 'bg-secondary-teal',
            error: 'bg-red-600'
        };
        const notification = document.createElement('div');
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'polite');
        notification.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-fadeIn max-w-md`;
        notification.innerHTML = `<p class="font-semibold">${message}</p>`;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 6000);
    };

    useMeta({
        title: 'Schedule Free Consultation | California Trade Attorney',
        description: 'Book a free consultation with our California international trade attorney. Schedule a phone call, video conference, or in-person meeting to discuss your customs, import/export, or trade compliance matter.',
        canonical: 'schedule-consultation',
        ogType: 'website',
        ogImage: `${siteConfig.siteUrl}/og-image-consultation.jpg`,
        schema: [
            generateWebPageSchema({
                title: 'Schedule Free Consultation - Trembach Law Firm',
                description: 'Book a free consultation with our California international trade attorney.',
                url: `${siteConfig.siteUrl}/#schedule-consultation`,
            }),
            generateBreadcrumbSchema([
                { name: 'Home', url: `${siteConfig.siteUrl}/` },
                { name: 'Schedule Consultation', url: `${siteConfig.siteUrl}/#schedule-consultation` }
            ]),
        ],
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formDataObj = new FormData(form);

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch(SUBMIT_API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formDataObj.get('firstName'),
                    lastName: formDataObj.get('lastName'),
                    company: formDataObj.get('company'),
                    jobTitle: formDataObj.get('jobTitle'),
                    email: formDataObj.get('email'),
                    phone: formDataObj.get('phone'),
                    practiceArea: formDataObj.get('practiceArea'),
                    caseDescription: formDataObj.get('caseDescription'),
                    consultationType: formDataObj.get('consultationType'),
                    timezone: formDataObj.get('timezone'),
                    preferredDate: formDataObj.get('preferredDate'),
                    preferredTime: formDataObj.get('preferredTime'),
                    alternateDate: formDataObj.get('alternateDate'),
                    alternateTime: formDataObj.get('alternateTime'),
                    referralSource: formDataObj.get('referralSource'),
                    additionalNotes: formDataObj.get('additionalNotes'),
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus('success');
                showNotification('Thank you for scheduling a consultation! We have received your request and will confirm your appointment within 24 hours via email and text message.', 'success');
                form.reset();
                setFormData({ consultationType: '', timezone: 'America/Los_Angeles' });
            } else {
                throw new Error(result.error || 'Submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
            showNotification('We apologize, but there was an error submitting your request. Please try again or call us directly at (310) 744-1328.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Get minimum date (tomorrow)
    const getMinDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    };

    // Get maximum date (3 months from now)
    const getMaxDate = () => {
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 3);
        return maxDate.toISOString().split('T')[0];
    };

    return (
        <div className="pt-20 font-montserrat text-neutral-darkGray bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full py-16 overflow-hidden" style={{ backgroundColor: '#012169' }}>
                <div className="relative z-10 max-w-[1376px] mx-auto px-6 w-full">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-garamond mb-6 tracking-tight leading-tight text-white">
                            Schedule Your Free Consultation
                        </h1>
                        <p className="text-lg md:text-xl font-light mb-4 leading-relaxed text-white">
                            Book a consultation with our international trade and customs law experts. Select your preferred date, time, and meeting format below.
                        </p>
                        <p className="text-base font-light mb-4 leading-relaxed text-white">
                            Your free 30-60 minute consultation includes a direct conversation with our trade law attorneys—not junior staff. We'll review your situation, assess your options, and provide an honest evaluation of your case.
                        </p>
                        <div className="w-24 h-1 bg-secondary-teal mx-auto"></div>
                    </div>
                </div>
            </section>

            {/* Main Booking Form Section */}
            <section className="py-16 px-6 bg-neutral-lightGray">
                <div className="max-w-4xl mx-auto">
                    {/* Why Schedule Section */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border-l-4 border-secondary-teal">
                        <h2 className="text-xl font-bold text-primary-navy mb-3 font-garamond">Why Schedule a Consultation?</h2>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
                            <div>
                                <p className="mb-2"><strong className="text-primary-navy">Time-Sensitive Matters:</strong> CBP deadlines are often 30-60 days. Early legal guidance prevents costly mistakes and preserves your options.</p>
                                <p><strong className="text-primary-navy">No-Obligation Assessment:</strong> Our initial consultation is completely free. You'll leave with a clear understanding of your legal position and recommended next steps.</p>
                            </div>
                            <div>
                                <p className="mb-2"><strong className="text-primary-navy">Expert Analysis:</strong> Our experienced trade attorneys provide actionable insights and strategic guidance for your customs and trade compliance matters.</p>
                                <p><strong className="text-primary-navy">Same-Day Scheduling:</strong> For urgent matters involving seizures, detentions, or imminent deadlines, we offer expedited scheduling and 24-hour emergency response.</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 md:p-12" aria-label="Consultation booking form" noValidate>

                        {/* Section 1: Contact Information */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-primary-navy mb-6 font-garamond border-b border-border-subtle pb-3">
                                Contact Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField id="firstName" label="First Name" required placeholder="John" autoComplete="given-name" />
                                <FormField id="lastName" label="Last Name" required placeholder="Smith" autoComplete="family-name" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <FormField id="company" label="Company Name" required placeholder="ABC Import Co." autoComplete="organization" />
                                <FormField id="jobTitle" label="Job Title" placeholder="Import Manager" autoComplete="organization-title" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <FormField id="email" label="Email Address" type="email" required placeholder="john@company.com" autoComplete="email" />
                                <FormField id="phone" label="Phone Number" type="tel" required placeholder="(555) 123-4567" autoComplete="tel" />
                            </div>
                        </div>

                        {/* Section 2: Area of Practice */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-primary-navy mb-6 font-garamond border-b border-border-subtle pb-3">
                                Area of Practice
                            </h2>
                            <div>
                                <label htmlFor="practiceArea" className="block text-base font-semibold mb-3 text-primary-navy">
                                    What area do you need help with? <span className="text-secondary-teal" aria-label="required">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="practiceArea"
                                        name="practiceArea"
                                        required
                                        aria-required="true"
                                        aria-label="Select area of practice"
                                        className="w-full px-5 py-4 text-base rounded transition-all appearance-none pr-10 bg-white text-primary-navy placeholder-text-secondary border border-border-subtle focus:border-secondary-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-secondary-teal focus-visible:outline-offset-2"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select an area of practice</option>
                                        {Object.entries(practiceAreaOptions).map(([group, options]) => (
                                            <optgroup label={group} key={group} className="font-bold text-base py-1 text-primary-navy">
                                                {options.map(option => (
                                                    <option key={option} value={option} className="text-sm font-normal text-text-primary">{option}</option>
                                                ))}
                                            </optgroup>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary-navy" aria-hidden="true">
                                        <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <FormField
                                    id="caseDescription"
                                    label="Brief Description of Your Matter"
                                    isTextArea
                                    required
                                    placeholder="Please describe your situation briefly (e.g., receiving a CF-28 notice, facing a CBP audit, need help with classification dispute, etc.)"
                                />
                            </div>
                        </div>

                        {/* Section 3: Consultation Preferences */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-primary-navy mb-6 font-garamond border-b border-border-subtle pb-3">
                                Consultation Preferences
                            </h2>

                            {/* Consultation Type */}
                            <div className="mb-6">
                                <label htmlFor="consultationType" className="block text-base font-semibold mb-3 text-primary-navy">
                                    Preferred Consultation Type <span className="text-secondary-teal" aria-label="required">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="consultationType"
                                        name="consultationType"
                                        required
                                        aria-required="true"
                                        aria-label="Select consultation type"
                                        value={formData.consultationType}
                                        onChange={(e) => setFormData({...formData, consultationType: e.target.value})}
                                        className="w-full px-5 py-4 text-base rounded transition-all appearance-none pr-10 bg-white text-primary-navy placeholder-text-secondary border border-border-subtle focus:border-secondary-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-secondary-teal focus-visible:outline-offset-2"
                                    >
                                        <option value="" disabled>Select consultation type</option>
                                        {consultationTypes.map(type => (
                                            <option key={type.value} value={type.value}>{type.label}</option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary-navy" aria-hidden="true">
                                        <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Timezone */}
                            <div className="mb-6">
                                <label htmlFor="timezone" className="block text-base font-semibold mb-3 text-primary-navy">
                                    Your Timezone <span className="text-secondary-teal" aria-label="required">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="timezone"
                                        name="timezone"
                                        required
                                        aria-required="true"
                                        aria-label="Select your timezone"
                                        value={formData.timezone}
                                        onChange={(e) => setFormData({...formData, timezone: e.target.value})}
                                        className="w-full px-5 py-4 text-base rounded transition-all appearance-none pr-10 bg-white text-primary-navy placeholder-text-secondary border border-border-subtle focus:border-secondary-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-secondary-teal focus-visible:outline-offset-2"
                                    >
                                        {timezones.map(tz => (
                                            <option key={tz.value} value={tz.value}>{tz.label}</option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary-navy" aria-hidden="true">
                                        <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Schedule Appointment */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-primary-navy mb-6 font-garamond border-b border-border-subtle pb-3">
                                Schedule Appointment
                            </h2>

                            {/* Primary Date/Time */}
                            <div className="bg-soft-teal p-6 rounded-lg mb-6">
                                <h3 className="text-lg font-semibold text-primary-navy mb-4">Preferred Date & Time</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="preferredDate" className="block text-base font-semibold mb-3 text-primary-navy">
                                            Preferred Date <span className="text-secondary-teal" aria-label="required">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            id="preferredDate"
                                            name="preferredDate"
                                            required
                                            min={getMinDate()}
                                            max={getMaxDate()}
                                            className="w-full px-5 py-4 text-base rounded transition-all bg-white text-primary-navy border border-border-subtle focus:border-secondary-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-secondary-teal focus-visible:outline-offset-2"
                                            aria-label="Select preferred date"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="preferredTime" className="block text-base font-semibold mb-3 text-primary-navy">
                                            Preferred Time <span className="text-secondary-teal" aria-label="required">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="preferredTime"
                                                name="preferredTime"
                                                required
                                                aria-required="true"
                                                aria-label="Select preferred time"
                                                className="w-full px-5 py-4 text-base rounded transition-all appearance-none pr-10 bg-white text-primary-navy border border-border-subtle focus:border-secondary-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-secondary-teal focus-visible:outline-offset-2"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select a time</option>
                                                {timeSlots.map(time => (
                                                    <option key={time} value={time}>{time}</option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary-navy" aria-hidden="true">
                                                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Alternate Date/Time */}
                            <div className="bg-neutral-lightGray p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-primary-navy mb-4">Alternate Date & Time (Optional)</h3>
                                <p className="text-sm text-text-secondary mb-4">Providing an alternate option helps us schedule your consultation faster.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="alternateDate" className="block text-base font-semibold mb-3 text-primary-navy">
                                            Alternate Date
                                        </label>
                                        <input
                                            type="date"
                                            id="alternateDate"
                                            name="alternateDate"
                                            min={getMinDate()}
                                            max={getMaxDate()}
                                            className="w-full px-5 py-4 text-base rounded transition-all bg-white text-primary-navy border border-border-subtle focus:border-secondary-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-secondary-teal focus-visible:outline-offset-2"
                                            aria-label="Select alternate date"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="alternateTime" className="block text-base font-semibold mb-3 text-primary-navy">
                                            Alternate Time
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="alternateTime"
                                                name="alternateTime"
                                                aria-label="Select alternate time"
                                                className="w-full px-5 py-4 text-base rounded transition-all appearance-none pr-10 bg-white text-primary-navy border border-border-subtle focus:border-secondary-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-secondary-teal focus-visible:outline-offset-2"
                                                defaultValue=""
                                            >
                                                <option value="">Select a time (optional)</option>
                                                {timeSlots.map(time => (
                                                    <option key={time} value={time}>{time}</option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary-navy" aria-hidden="true">
                                                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 5: Additional Information */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-primary-navy mb-6 font-garamond border-b border-border-subtle pb-3">
                                Additional Information
                            </h2>
                            <div className="mb-6">
                                <label htmlFor="referralSource" className="block text-base font-semibold mb-3 text-primary-navy">
                                    How did you hear about us?
                                </label>
                                <div className="relative">
                                    <select
                                        id="referralSource"
                                        name="referralSource"
                                        aria-label="How did you hear about us"
                                        className="w-full px-5 py-4 text-base rounded transition-all appearance-none pr-10 bg-white text-primary-navy placeholder-text-secondary border border-border-subtle focus:border-secondary-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-secondary-teal focus-visible:outline-offset-2"
                                        defaultValue=""
                                    >
                                        <option value="">Select an option (optional)</option>
                                        <option value="google">Google Search</option>
                                        <option value="linkedin">LinkedIn</option>
                                        <option value="referral">Referral from colleague/friend</option>
                                        <option value="industry-event">Industry Event/Conference</option>
                                        <option value="customs-broker">Customs Broker Recommendation</option>
                                        <option value="trade-association">Trade Association</option>
                                        <option value="article">Article/Publication</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary-navy" aria-hidden="true">
                                        <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <FormField
                                    id="additionalNotes"
                                    label="Additional Notes"
                                    isTextArea
                                    placeholder="Any other information you'd like us to know before the consultation..."
                                />
                            </div>
                        </div>

                        {/* Privacy Notice */}
                        <div className="bg-neutral-lightGray p-4 rounded-lg mb-8">
                            <p className="text-sm text-text-secondary mb-2">
                                By submitting this form, you agree that we may contact you at the email address and phone number provided.
                                All information submitted is confidential and protected by attorney-client privilege upon engagement.
                                This consultation request does not establish an attorney-client relationship.
                            </p>
                            <p className="text-sm text-text-secondary">
                                <strong>What happens next:</strong> You'll receive a confirmation email within 24 hours with your appointment details. If your preferred time is unavailable, we'll propose alternative options. For urgent matters, call us directly at (310) 744-1328.
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <Button
                                type="submit"
                                variant="solid"
                                className={`bg-secondary-forestGreen text-white hover:bg-secondary-teal transform transition-transform duration-200 hover:scale-[1.03] px-16 py-5 text-base font-bold ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                aria-label="Submit consultation booking request"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'SUBMITTING...' : 'REQUEST CONSULTATION'}
                            </Button>
                        </div>
                    </form>

                    {/* Contact Alternative */}
                    <div className="mt-12 text-center">
                        <p className="text-lg text-text-secondary mb-4">
                            Need immediate assistance? Call us directly:
                        </p>
                        <a
                            href="tel:+13107441328"
                            className="inline-flex items-center gap-3 text-2xl font-bold text-primary-navy hover:text-secondary-teal transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            (310) 744-1328
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConsultationBookingPage;
