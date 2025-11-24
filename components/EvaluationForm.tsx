import React from 'react';
import Button from './Button';

const subjectOptions = {
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

interface FormFieldProps {
    id: string;
    label: string;
    type?: string;
    required?: boolean;
    isTextArea?: boolean;
    placeholder?: string;
    autoComplete?: string;
    inputClassName?: string;
    labelColor?: string;
}

const FormField: React.FC<FormFieldProps> = ({
    id,
    label,
    type = 'text',
    required = false,
    isTextArea = false,
    placeholder,
    autoComplete,
    inputClassName,
    labelColor = 'text-white'
}) => {
    const commonProps = {
        id,
        name: id,
        required,
        placeholder,
        autoComplete,
        'aria-required': required,
        className: `w-full px-5 py-4 text-base rounded transition-all focus-visible:outline focus-visible:outline-3 focus-visible:outline-secondary-teal focus-visible:outline-offset-2 ${inputClassName}`,
    };

    return (
        <div>
            <label htmlFor={id} className={`block text-base font-semibold mb-3 ${labelColor}`}>
                {label} {required && <span className="text-secondary-teal" aria-label="required">*</span>}
            </label>
            {isTextArea ? (
                <textarea {...commonProps} rows={7} className={`${commonProps.className} resize-none leading-relaxed`} aria-label={label}></textarea>
            ) : (
                <input type={type} {...commonProps} aria-label={label} />
            )}
        </div>
    );
};

interface EvaluationFormProps {
    theme?: 'navy' | 'teal' | 'light';
}

const EvaluationForm: React.FC<EvaluationFormProps> = ({ theme = 'navy' }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Thank you for your submission. We will get back to you shortly.');
        event.currentTarget.reset();
    };

    const getThemeStyles = () => {
        switch (theme) {
            case 'light':
                return {
                    sectionBg: 'bg-neutral-lightGray',
                    textColor: 'text-neutral-darkGray',
                    headingColor: 'text-primary-navy',
                    subTextColor: 'text-text-secondary',
                    strongTextColor: 'text-primary-navy',
                    labelColor: 'text-primary-navy',
                    inputBg: 'bg-white text-primary-navy placeholder-text-secondary border border-border-subtle focus:border-secondary-teal',
                    selectArrowColor: 'text-primary-navy'
                };
            case 'teal':
                return {
                    sectionBg: 'bg-soft-teal',
                    textColor: 'text-primary-navy',
                    headingColor: 'text-primary-navy',
                    subTextColor: 'text-primary-navy/80',
                    strongTextColor: 'text-primary-navy',
                    labelColor: 'text-primary-navy',
                    inputBg: 'bg-white text-primary-navy placeholder-text-secondary border border-transparent focus:border-secondary-teal',
                    selectArrowColor: 'text-primary-navy'
                };
            case 'navy':
            default:
                return {
                    sectionBg: 'bg-primary-navy',
                    textColor: 'text-neutral-lightGray',
                    headingColor: 'text-white',
                    subTextColor: 'text-neutral-gray',
                    strongTextColor: 'text-white',
                    labelColor: 'text-white',
                    inputBg: 'bg-primary-darkBlue text-white placeholder-neutral-gray',
                    selectArrowColor: 'text-neutral-gray'
                };
        }
    };

    const styles = getThemeStyles();

    return (
        <section id="evaluation-form" aria-labelledby="evaluation-heading" className={`${styles.sectionBg} py-20 px-6 ${styles.textColor}`}>
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-12">
                    <h2 id="evaluation-heading" className={`font-garamond text-5xl font-bold ${styles.headingColor} mb-4`}>
                        Free Case Evaluation
                    </h2>
                    <p className={`text-lg ${styles.subTextColor} max-w-3xl mx-auto`}>
                        Tell us about your case and our team of experts will get back to you promptly. All information submitted is confidential.
                    </p>
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="lg:pr-8">
                        <h3 className={`font-garamond text-[30px] font-bold ${styles.headingColor} mb-6 leading-tight`}>Your Strategic Partner in Trade Law</h3>
                        <p className={`${styles.subTextColor} mb-6 text-[15px]`} style={{ lineHeight: '1.7' }}>
                            Submitting your case details allows our experienced attorneys to conduct a thorough preliminary review. We analyze the specifics of your situation against current trade laws and regulations to provide you with a clear, initial assessment of your options.
                        </p>
                        <ul className={`space-y-4 ${styles.subTextColor} text-[15px]`}>
                            <li className="flex items-start">
                                <span className="text-gold-primary text-lg mr-3 flex-shrink-0">✓</span>
                                <p style={{ lineHeight: '1.6' }}>
                                    <strong className={`${styles.strongTextColor} font-bold`}>Confidential Review:</strong> Your submission is confidential.
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gold-primary text-lg mr-3 flex-shrink-0">✓</span>
                                <p style={{ lineHeight: '1.6' }}>
                                    <strong className={`${styles.strongTextColor} font-bold`}>Expert Analysis:</strong> Direct evaluation by a partner-level attorney with a unique background in both enforcement and defense.
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-gold-primary text-lg mr-3 flex-shrink-0">✓</span>
                                <p style={{ lineHeight: '1.6' }}>
                                    <strong className={`${styles.strongTextColor} font-bold`}>No Obligation:</strong> This initial consultation is completely free and does not commit you to our services.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Case evaluation request form" noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField id="fullName" label="First Name" required placeholder="" autoComplete="given-name" inputClassName={styles.inputBg} labelColor={styles.labelColor} />
                            <FormField id="lastName" label="Last Name" required placeholder="" autoComplete="family-name" inputClassName={styles.inputBg} labelColor={styles.labelColor} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField id="company" label="Company Name" required placeholder="" autoComplete="organization" inputClassName={styles.inputBg} labelColor={styles.labelColor} />
                            <FormField id="email" label="Email Address" type="email" required placeholder="" autoComplete="email" inputClassName={styles.inputBg} labelColor={styles.labelColor} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField id="phone" label="Phone Number" required placeholder="" autoComplete="tel" inputClassName={styles.inputBg} labelColor={styles.labelColor} />
                            <div>
                                <label htmlFor="subject" className={`block text-base font-semibold mb-3 ${styles.labelColor}`}>
                                    Subject <span className="text-secondary-teal" aria-label="required">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        aria-required="true"
                                        aria-label="Subject area of practice"
                                        className={`w-full px-5 py-4 text-base rounded transition-all appearance-none pr-10 focus-visible:outline focus-visible:outline-3 focus-visible:outline-secondary-teal focus-visible:outline-offset-2 ${styles.inputBg}`}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select an area of interest</option>
                                        {Object.entries(subjectOptions).map(([group, options]) => (
                                            <optgroup label={group} key={group} className="font-bold text-base py-1 text-primary-navy">
                                                {options.map(option => (
                                                    <option key={option} value={option} className="text-sm font-normal text-text-primary">{option}</option>
                                                ))}
                                            </optgroup>
                                        ))}
                                    </select>
                                    <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 ${styles.selectArrowColor}`} aria-hidden="true">
                                        <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <FormField id="message" label="Tell us about your case" isTextArea required placeholder="" inputClassName={styles.inputBg} labelColor={styles.labelColor} />
                        </div>
                        <div className="text-center pt-4">
                            <Button type="submit" variant="solid" className="bg-secondary-forestGreen text-white hover:bg-secondary-teal transform transition-transform duration-200 hover:scale-[1.03] px-16 py-5 text-base font-bold" aria-label="Submit case evaluation request">
                                SUBMIT FOR REVIEW
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EvaluationForm;
