
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Button from './Button';

type Category = 'attorney' | 'compliance' | 'paralegal' | 'students';

interface TrialCase {
    name: string;
    court: string;
    caseNumber: string;
    year: string;
    role: string;
    subject: string;
    outcome: string;
}

interface ApplicationFormProps {
    category: Category;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ category }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Initial State for Trial Cases
    const emptyTrialCase = { name: '', court: '', caseNumber: '', year: '', role: '', subject: '', outcome: '' };
    const initialTrialCases = Array(10).fill(null).map(() => ({ ...emptyTrialCase }));

    const [formData, setFormData] = useState({
        // App Info
        office: '',
        department: 'International Trade & Customs',
        position: '',
        
        // Personal
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        barAdmissions: '',
        
        // Education
        lawSchool: '',
        gradYear: '',
        undergrad: '',
        undergradDegree: '',
        undergradYear: '',
        
        // General Experience
        yearsPractice: '',
        areasFocus: [] as string[],
        federalCourtExp: '',
        
        // Trial Experience (Attorney Only)
        trialCases: initialTrialCases as TrialCase[],
        trialConfirmation: false,
        
        // Other Experience (Non-Attorney)
        workHistory: '',
        skills: '',
        
        // Additional
        whyTrembach: '',
        challengingScenario: '',
        salary: '',
        startDate: '',
        verifyAuth: false
    });

    // Reset form when category changes
    useEffect(() => {
        setCurrentStep(0);
        setIsSuccess(false);
        // Reset specific fields based on category logic if needed
    }, [category]);

    const steps = [
        'Application',
        'Personal Information',
        'Education',
        'Experience',
        'Attachments',
        'Additional Information'
    ];

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleTrialCaseChange = (index: number, field: keyof TrialCase, value: string) => {
        const updatedCases = [...formData.trialCases];
        updatedCases[index] = { ...updatedCases[index], [field]: value };
        setFormData(prev => ({ ...prev, trialCases: updatedCases }));
    };

    const handleCheckboxGroupChange = (value: string, checked: boolean) => {
        setFormData(prev => {
            const newAreas = checked 
                ? [...prev.areasFocus, value]
                : prev.areasFocus.filter(a => a !== value);
            return { ...prev, areasFocus: newAreas };
        });
    };

    const validateStep = (step: number): boolean => {
        // Basic validation simulation
        if (step === 0) return !!formData.office && !!formData.position;
        if (step === 1) return !!formData.firstName && !!formData.lastName && !!formData.email;
        // Step 3: Experience validation
        if (step === 3 && category === 'attorney') {
            // Validate ALL 10 cases are filled
            const allCasesFilled = formData.trialCases.every(c => 
                c.name && c.court && c.year && c.role
            );
            return allCasesFilled && formData.trialConfirmation;
        }
        return true;
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
            window.scrollTo(0, 0);
        } else {
            alert('Please fill in all required fields for this step.');
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 0));
        window.scrollTo(0, 0);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!formData.verifyAuth) {
            alert('You must authorize verification of credentials to submit.');
            return;
        }
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            window.scrollTo(0, 0);
        }, 1500);
    };

    // --- Render Helpers ---

    if (isSuccess) {
        return (
            <div className="text-center py-20">
                <div className="w-20 h-20 bg-secondary-teal text-white rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                <h2 className="text-3xl font-garamond font-bold text-primary-navy mb-4">Application Submitted Successfully</h2>
                <p className="text-lg text-text-secondary max-w-lg mx-auto mb-8">
                    Thank you for applying to Trembach Law Firm. Your application has been received and is being reviewed by our partners. We will contact you directly if your qualifications match our current needs.
                </p>
                <Button href="#" onClick={() => window.location.reload()} variant="outlined">Return to Home</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full" role="form" aria-label="Job application form">

            {/* Progress Bar */}
            <nav aria-label="Application progress" className="flex justify-between mb-8 overflow-x-auto pb-2">
                {steps.map((step, idx) => (
                    <div key={step} className={`flex flex-col items-center min-w-[80px] ${idx <= currentStep ? 'text-primary-navy' : 'text-neutral-400'}`}
                         aria-current={idx === currentStep ? 'step' : undefined}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-2 transition-colors duration-300 ${
                            idx === currentStep ? 'bg-secondary-teal text-white ring-4 ring-secondary-teal/20' :
                            idx < currentStep ? 'bg-primary-navy text-white' : 'bg-neutral-200 text-neutral-500'
                        }`}
                             aria-label={`Step ${idx + 1}: ${step}${idx === currentStep ? ' (current)' : idx < currentStep ? ' (completed)' : ''}`}>
                            {idx + 1}
                        </div>
                        <span className="text-xs font-bold hidden md:block whitespace-nowrap">{step}</span>
                    </div>
                ))}
            </nav>

            {/* Step 1: Application */}
            {currentStep === 0 && (
                <div className="animate-fadeIn space-y-6">
                    <h2 className="text-2xl font-garamond font-bold text-primary-navy border-b pb-2 mb-6">
                        {category === 'attorney' ? 'Application – Trial Attorney' : 'Application Details'}
                    </h2>
                    
                    <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 mb-6">
                         <p className="text-sm text-text-secondary mb-4">
                            Please complete the form below and attach your resume and writing sample. All inquiries are kept strictly confidential.
                        </p>
                        <p className="text-sm font-bold text-primary-darkBlue mb-4">
                            NOTE TO SEARCH FIRMS: Trembach Law Firm does not accept applications from search firms through this portal. Recruiters must contact the firm directly.
                        </p>
                        <p className="text-xs text-neutral-500">
                            Trembach Law Firm is an Equal Opportunity Employer. We offer comprehensive benefits including health insurance, 401(k) retirement plan, paid time off, and professional development support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="office">Office <span className="text-red-500" aria-hidden="true">*</span></label>
                            <select
                                id="office"
                                name="office"
                                value={formData.office}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-neutral-300 rounded focus:border-primary-navy focus:ring-1 focus:ring-primary-navy bg-white"
                                required
                                aria-required="true"
                                aria-label="Office location"
                            >
                                <option value="">Select Office...</option>
                                <option value="Los Angeles">Los Angeles (Primary Office)</option>
                                <option value="Remote">Remote - U.S. Federal Practice</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="department">Department <span className="text-red-500" aria-hidden="true">*</span></label>
                            <input
                                type="text"
                                id="department"
                                name="department"
                                value={formData.department}
                                readOnly
                                aria-readonly="true"
                                className="w-full p-3 border border-neutral-300 rounded bg-neutral-100 text-neutral-600"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="position">Position <span className="text-red-500" aria-hidden="true">*</span></label>
                            <select
                                id="position"
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-neutral-300 rounded focus:border-primary-navy focus:ring-1 focus:ring-primary-navy bg-white"
                                required
                                aria-required="true"
                                aria-label="Position applying for"
                            >
                                <option value="">Select Position...</option>
                                {category === 'attorney' && <option value="Trial Attorney – Customs/Trade Remedies">Trial Attorney – Customs/Trade Remedies</option>}
                                {category === 'attorney' && <option value="Trial Attorney – Sanctions & Export Controls">Trial Attorney – Sanctions & Export Controls</option>}
                                {category === 'compliance' && <option value="Trade Compliance Manager">Trade Compliance Manager</option>}
                                {category === 'compliance' && <option value="Import/Export Specialist">Import/Export Specialist</option>}
                                {category === 'paralegal' && <option value="International Trade Paralegal">International Trade Paralegal</option>}
                                {category === 'students' && <option value="Summer Associate">Summer Associate</option>}
                                {category === 'students' && <option value="Law Clerk (Part-Time)">Law Clerk (Part-Time)</option>}
                            </select>
                        </div>
                    </div>
                </div>
            )}

            {/* Step 2: Personal Info */}
            {currentStep === 1 && (
                <div className="animate-fadeIn space-y-6">
                    <h2 className="text-2xl font-garamond font-bold text-primary-navy border-b pb-2 mb-6">Personal Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                         <div>
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="firstName">First Name <span className="text-red-500">*</span></label>
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="lastName">Last Name <span className="text-red-500">*</span></label>
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" required />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="address">Mailing Address</label>
                            <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" />
                        </div>
                        {category === 'attorney' && (
                             <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="barAdmissions">Bar Admissions & Jurisdictions</label>
                                <textarea 
                                    id="barAdmissions" 
                                    name="barAdmissions" 
                                    value={formData.barAdmissions} 
                                    onChange={handleInputChange} 
                                    rows={3}
                                    className="w-full p-3 border border-neutral-300 rounded"
                                    placeholder="e.g. California (2018), CIT (2019), CAFC (2020)"
                                />
                                <div className="mt-2 flex items-center">
                                    <input type="checkbox" id="goodStanding" className="mr-2" />
                                    <label htmlFor="goodStanding" className="text-sm text-text-secondary">I confirm I am a member in good standing of the bars listed above.</label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Step 3: Education */}
            {currentStep === 2 && (
                <div className="animate-fadeIn space-y-6">
                    <h2 className="text-2xl font-garamond font-bold text-primary-navy border-b pb-2 mb-6">Education</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {(category === 'attorney' || category === 'students') && (
                            <>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="lawSchool">Law School</label>
                                    <input type="text" id="lawSchool" name="lawSchool" value={formData.lawSchool} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="gradYear">Graduation Year (or Expected)</label>
                                    <input type="text" id="gradYear" name="gradYear" value={formData.gradYear} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" />
                                </div>
                            </>
                        )}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="undergrad">Undergraduate Institution</label>
                            <input type="text" id="undergrad" name="undergrad" value={formData.undergrad} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" />
                        </div>
                        <div>
                             <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="undergradDegree">Degree / Major</label>
                             <input type="text" id="undergradDegree" name="undergradDegree" value={formData.undergradDegree} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" />
                        </div>
                        <div>
                             <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="undergradYear">Graduation Year</label>
                             <input type="text" id="undergradYear" name="undergradYear" value={formData.undergradYear} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" />
                        </div>
                    </div>
                </div>
            )}

            {/* Step 4: Experience (Complex Logic) */}
            {currentStep === 3 && (
                <div className="animate-fadeIn space-y-8">
                    <h2 className="text-2xl font-garamond font-bold text-primary-navy border-b pb-2 mb-6">Professional Experience</h2>
                    
                    {/* General Experience Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                         <div>
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="yearsPractice">Total Years of Experience</label>
                            <input type="number" id="yearsPractice" name="yearsPractice" value={formData.yearsPractice} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-text-primary mb-2">Primary Areas of Focus</label>
                            <div className="flex flex-wrap gap-3">
                                {['Customs', 'Trade Remedies', 'Sanctions', 'Export Controls', 'Litigation'].map(area => (
                                    <label key={area} className="flex items-center space-x-2 bg-neutral-100 px-3 py-2 rounded cursor-pointer hover:bg-neutral-200">
                                        <input 
                                            type="checkbox" 
                                            checked={formData.areasFocus.includes(area)}
                                            onChange={(e) => handleCheckboxGroupChange(area, e.target.checked)}
                                            className="rounded text-primary-navy"
                                        />
                                        <span className="text-sm">{area}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Attorney Specific Trial Requirements */}
                    {category === 'attorney' ? (
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8 mt-8">
                            <h3 className="text-xl font-bold text-primary-navy mb-4">Required Trial Experience</h3>
                            <p className="text-sm text-text-secondary mb-6">
                                Candidates for Trial Attorney positions must list <strong>10 trial cases</strong> in which they significantly participated. Applications without 10 completed case entries will not be processed.
                            </p>
                            
                            <div className="space-y-8">
                                {formData.trialCases.map((trial, index) => (
                                    <fieldset key={index} className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
                                        <legend className="text-sm font-bold text-secondary-teal uppercase tracking-widest mb-4 px-2">Trial Case {index + 1}</legend>
                                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                                            <div className="md:col-span-2">
                                                <label className="block text-xs font-bold text-neutral-500 mb-1" htmlFor={`trial_case_${index}_name`}>Case Name / Caption</label>
                                                <input 
                                                    type="text" 
                                                    id={`trial_case_${index}_name`}
                                                    value={trial.name}
                                                    onChange={(e) => handleTrialCaseChange(index, 'name', e.target.value)}
                                                    className="w-full p-2 border border-neutral-300 rounded text-sm"
                                                    placeholder="e.g. United States v. ABC Corp"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-neutral-500 mb-1" htmlFor={`trial_case_${index}_court`}>Court</label>
                                                <input 
                                                    type="text" 
                                                    id={`trial_case_${index}_court`}
                                                    value={trial.court}
                                                    onChange={(e) => handleTrialCaseChange(index, 'court', e.target.value)}
                                                    className="w-full p-2 border border-neutral-300 rounded text-sm"
                                                    placeholder="e.g. CIT, SDNY"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-4 gap-4 mb-4">
                                            <div>
                                                 <label className="block text-xs font-bold text-neutral-500 mb-1" htmlFor={`trial_case_${index}_number`}>Case No.</label>
                                                 <input type="text" id={`trial_case_${index}_number`} value={trial.caseNumber} onChange={(e) => handleTrialCaseChange(index, 'caseNumber', e.target.value)} className="w-full p-2 border border-neutral-300 rounded text-sm" required />
                                            </div>
                                            <div>
                                                 <label className="block text-xs font-bold text-neutral-500 mb-1" htmlFor={`trial_case_${index}_year`}>Year</label>
                                                 <input type="text" id={`trial_case_${index}_year`} value={trial.year} onChange={(e) => handleTrialCaseChange(index, 'year', e.target.value)} className="w-full p-2 border border-neutral-300 rounded text-sm" placeholder="YYYY" required />
                                            </div>
                                            <div className="md:col-span-2">
                                                 <label className="block text-xs font-bold text-neutral-500 mb-1" htmlFor={`trial_case_${index}_role`}>Role</label>
                                                 <select id={`trial_case_${index}_role`} value={trial.role} onChange={(e) => handleTrialCaseChange(index, 'role', e.target.value)} className="w-full p-2 border border-neutral-300 rounded text-sm bg-white" required>
                                                    <option value="">Select Role...</option>
                                                    <option value="First Chair">First Chair</option>
                                                    <option value="Second Chair">Second Chair</option>
                                                    <option value="Team Member">Team Member</option>
                                                 </select>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-xs font-bold text-neutral-500 mb-1" htmlFor={`trial_case_${index}_subject`}>Subject Matter</label>
                                            <input type="text" id={`trial_case_${index}_subject`} value={trial.subject} onChange={(e) => handleTrialCaseChange(index, 'subject', e.target.value)} className="w-full p-2 border border-neutral-300 rounded text-sm" placeholder="Brief description of issues..." required />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-neutral-500 mb-1" htmlFor={`trial_case_${index}_outcome`}>Outcome</label>
                                            <input type="text" id={`trial_case_${index}_outcome`} value={trial.outcome} onChange={(e) => handleTrialCaseChange(index, 'outcome', e.target.value)} className="w-full p-2 border border-neutral-300 rounded text-sm" placeholder="Verdict, Judgment, Settlement..." required />
                                        </div>
                                    </fieldset>
                                ))}
                            </div>
                            
                            <div className="mt-8 flex items-center bg-white p-4 rounded border border-neutral-200">
                                <input 
                                    type="checkbox" 
                                    id="trialConfirmation" 
                                    checked={formData.trialConfirmation}
                                    onChange={(e) => setFormData(prev => ({ ...prev, trialConfirmation: e.target.checked }))}
                                    className="w-5 h-5 text-secondary-teal mr-3 cursor-pointer"
                                />
                                <label htmlFor="trialConfirmation" className="text-sm font-semibold cursor-pointer">
                                    I confirm that I have participated in at least ten trials as described above and that these descriptions are accurate to the best of my knowledge.
                                </label>
                            </div>
                        </div>
                    ) : (
                        /* Simple Experience for Non-Attorneys */
                        <div className="space-y-6 mt-6">
                            <div>
                                <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="workHistory">Relevant Work History</label>
                                <textarea 
                                    id="workHistory" 
                                    name="workHistory" 
                                    value={formData.workHistory} 
                                    onChange={handleInputChange} 
                                    rows={6} 
                                    className="w-full p-3 border border-neutral-300 rounded"
                                    placeholder={
                                        category === 'compliance' ? 'Describe your experience with customs operations, internal controls, and audits...' :
                                        category === 'paralegal' ? 'Describe your experience with legal research, drafting, and case management...' :
                                        'Describe your law school coursework, clinics, or relevant internships...'
                                    }
                                />
                            </div>
                             <div>
                                <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="skills">Key Skills & Languages</label>
                                <textarea id="skills" name="skills" value={formData.skills} onChange={handleInputChange} rows={3} className="w-full p-3 border border-neutral-300 rounded" placeholder="List relevant skills, software proficiency, and foreign languages..." />
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Step 5: Attachments */}
            {currentStep === 4 && (
                <div className="animate-fadeIn space-y-6">
                    <h2 className="text-2xl font-garamond font-bold text-primary-navy border-b pb-2 mb-6">Attachments</h2>
                    
                    <div className="bg-neutral-50 p-6 border-dashed border-2 border-neutral-300 rounded-lg text-center">
                        <label className="block text-lg font-bold mb-2">Resume / CV <span className="text-red-500">*</span></label>
                        <input type="file" accept=".pdf,.doc,.docx" className="block w-full text-sm text-neutral-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-navy/10 file:text-primary-navy hover:file:bg-primary-navy/20 mb-2" required />
                        <span className="text-xs text-neutral-400">PDF, DOCX up to 5MB</span>
                    </div>

                    <div className="bg-neutral-50 p-6 border-dashed border-2 border-neutral-300 rounded-lg text-center">
                        <label className="block text-lg font-bold mb-2">Cover Letter</label>
                        <input type="file" accept=".pdf,.doc,.docx" className="block w-full text-sm text-neutral-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-navy/10 file:text-primary-navy hover:file:bg-primary-navy/20 mb-2" />
                         <span className="text-xs text-neutral-400">Optional but recommended</span>
                    </div>

                    {(category === 'attorney' || category === 'students') && (
                        <div className="bg-neutral-50 p-6 border-dashed border-2 border-neutral-300 rounded-lg text-center">
                            <label className="block text-lg font-bold mb-2">Writing Sample</label>
                            <input type="file" accept=".pdf" className="block w-full text-sm text-neutral-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-navy/10 file:text-primary-navy hover:file:bg-primary-navy/20 mb-2" />
                             <span className="text-xs text-neutral-400">Please redact all client-identifying information. PDF only.</span>
                        </div>
                    )}
                </div>
            )}

            {/* Step 6: Additional Info */}
            {currentStep === 5 && (
                <div className="animate-fadeIn space-y-6">
                     <h2 className="text-2xl font-garamond font-bold text-primary-navy border-b pb-2 mb-6">Additional Information</h2>
                     
                     <div>
                        <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="whyTrembach">Why are you interested in Trembach Law Firm’s international trade practice?</label>
                        <textarea id="whyTrembach" name="whyTrembach" value={formData.whyTrembach} onChange={handleInputChange} rows={4} className="w-full p-3 border border-neutral-300 rounded" required />
                     </div>
                     
                     {category === 'attorney' && (
                         <div>
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="challengingScenario">Describe a challenging trial or hearing and your specific contribution.</label>
                            <textarea id="challengingScenario" name="challengingScenario" value={formData.challengingScenario} onChange={handleInputChange} rows={4} className="w-full p-3 border border-neutral-300 rounded" />
                         </div>
                     )}

                     <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="salary">Salary Expectations</label>
                            <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" placeholder="Optional" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-text-primary mb-2" htmlFor="startDate">Earliest Start Date</label>
                            <input type="text" id="startDate" name="startDate" value={formData.startDate} onChange={handleInputChange} className="w-full p-3 border border-neutral-300 rounded" placeholder="MM/DD/YYYY" />
                        </div>
                     </div>

                     <div className="mt-8 p-6 bg-neutral-100 rounded border border-neutral-200">
                        <div className="flex items-start">
                             <input 
                                type="checkbox" 
                                id="verifyAuth" 
                                name="verifyAuth" 
                                checked={formData.verifyAuth}
                                onChange={(e) => setFormData(prev => ({ ...prev, verifyAuth: e.target.checked }))}
                                className="mt-1 w-5 h-5 text-secondary-teal mr-3 cursor-pointer"
                            />
                            <label htmlFor="verifyAuth" className="text-sm leading-relaxed cursor-pointer">
                                I certify that the information provided in this application is true and correct to the best of my knowledge. I authorize Trembach Law Firm to verify my credentials, contact references, and conduct a background check as part of the hiring process.
                            </label>
                        </div>
                     </div>
                </div>
            )}

            {/* Navigation Actions */}
            <div className="mt-12 flex justify-between border-t pt-8">
                {currentStep > 0 ? (
                    <button type="button" onClick={prevStep} className="px-8 py-3 text-neutral-600 font-bold hover:text-primary-navy transition-colors">
                        ← Back
                    </button>
                ) : <div></div>}
                
                <div className="flex gap-4">
                    <button type="button" className="px-6 py-3 text-primary-navy font-bold hover:bg-neutral-100 rounded transition-colors">
                        Save Draft
                    </button>
                    
                    {currentStep < steps.length - 1 ? (
                        <button type="button" onClick={nextStep} className="px-8 py-3 bg-primary-navy text-white font-bold rounded hover:bg-primary-darkBlue transition-colors shadow-lg">
                            Next Step →
                        </button>
                    ) : (
                        <button 
                            type="submit" 
                            disabled={isSubmitting} 
                            className={`px-10 py-3 bg-secondary-teal text-white font-bold rounded hover:bg-secondary-forestGreen transition-all shadow-lg transform hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                    )}
                </div>
            </div>

        </form>
    );
};

export default ApplicationForm;
