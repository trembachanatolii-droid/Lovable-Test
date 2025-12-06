import React, { useState } from 'react';
import Button from './Button';
import { triggerHaptic } from '../utils/haptics';

// API endpoint for form submission
const SUBMIT_API_ENDPOINT = '/.netlify/functions/submit-evaluation';


type InputModeType = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

interface FormFieldProps {
    id: string;
    label: string;
    type?: string;
    required?: boolean;
    isTextArea?: boolean;
    placeholder?: string;
    autoComplete?: string;
    inputMode?: InputModeType;
    error?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
    id,
    label,
    type = 'text',
    required = false,
    isTextArea = false,
    placeholder,
    autoComplete,
    inputMode,
    error,
    onBlur
}) => {
    const commonProps = {
        id,
        name: id,
        required,
        placeholder,
        autoComplete,
        inputMode,
        onBlur,
        'aria-required': required,
        'aria-invalid': !!error,
        'aria-describedby': error ? `${id}-error` : undefined,
    };

    return (
        <div className="group">
            <label 
                htmlFor={id} 
                className="block text-[11px] font-medium tracking-[0.08em] uppercase text-white/70 mb-2 transition-colors duration-300 group-focus-within:text-white"
            >
                {label} {required && <span className="text-cyan-400" aria-label="required">*</span>}
            </label>
            {isTextArea ? (
                <textarea 
                    {...commonProps} 
                    rows={4} 
                    className="w-full px-0 py-3 text-[15px] bg-transparent border-0 border-b border-white/20 text-white placeholder-white/30 resize-none leading-relaxed transition-all duration-300 focus:outline-none focus:border-white/60 focus:ring-0"
                    aria-label={label}
                />
            ) : (
                <input 
                    type={type} 
                    {...commonProps} 
                    className="w-full px-0 py-3 text-[15px] bg-transparent border-0 border-b border-white/20 text-white placeholder-white/30 transition-all duration-300 focus:outline-none focus:border-white/60 focus:ring-0"
                    aria-label={label} 
                />
            )}
            {error && (
                <span id={`${id}-error`} className="text-red-400 text-xs mt-2 block font-medium" role="alert">
                    {error}
                </span>
            )}
        </div>
    );
};

interface EvaluationFormProps {
    theme?: 'navy' | 'teal' | 'light';
}

const EvaluationForm: React.FC<EvaluationFormProps> = () => {
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [_submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateField = (name: string, value: string) => {
        let error = '';

        // Required field validation
        if (!value.trim()) {
            const fieldLabels: Record<string, string> = {
                fullName: 'First Name',
                lastName: 'Last Name',
                company: 'Company Name',
                email: 'Email Address',
                phone: 'Phone Number',
                message: 'Tell us about your case'
            };
            error = `${fieldLabels[name] || name} is required`;
        } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = 'Please enter a valid email address';
        } else if (name === 'phone' && !/^[\d\s\-\(\)\+]+$/.test(value)) {
            error = 'Please enter a valid phone number';
        }

        setFieldErrors(prev => {
            const newErrors = { ...prev };
            if (error) {
                newErrors[name] = error;
            } else {
                delete newErrors[name];
            }
            return newErrors;
        });
    };

    const showNotification = (message: string, type: 'success' | 'error') => {
        const colors = {
            success: 'bg-secondary-teal',
            error: 'bg-red-600'
        };
        const notification = document.createElement('div');
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'polite');
        notification.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-fadeIn max-w-md`;

        // Create paragraph element safely using textContent to prevent XSS
        const p = document.createElement('p');
        p.className = 'font-semibold';
        p.textContent = message;
        notification.appendChild(p);

        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 6000);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        // Validate all fields before submission
        const requiredFields = ['fullName', 'lastName', 'company', 'email', 'phone', 'message'];
        let hasErrors = false;

        requiredFields.forEach(field => {
            const value = formData.get(field) as string || '';
            validateField(field, value);
            if (!value.trim()) hasErrors = true;
        });

        if (hasErrors || Object.keys(fieldErrors).length > 0) {
            triggerHaptic('error');
            showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch(SUBMIT_API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.get('fullName'),
                    lastName: formData.get('lastName'),
                    company: formData.get('company'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    message: formData.get('message'),
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                triggerHaptic('success');
                setSubmitStatus('success');
                showNotification('Thank you for your submission! We have received your case evaluation request and will contact you shortly. A confirmation has been sent to your email and phone.', 'success');
                form.reset();
                setFieldErrors({});
            } else {
                throw new Error(result.error || 'Submission failed');
            }
        } catch (error) {
            if (import.meta.env.DEV) {
                console.error('Form submission error:', error);
            }
            triggerHaptic('error');
            setSubmitStatus('error');
            showNotification('We apologize, but there was an error submitting your request. Please try again or call us directly at (310) 744-1328.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section 
            id="schedule-consultation" 
            aria-labelledby="evaluation-heading" 
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: 'url(/images/form-background-scales.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
            
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column - Text Content */}
                    <div className="text-white">
                        <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/60 mb-4">
                            Complimentary Consultation
                        </p>
                        <h2 
                            id="evaluation-heading" 
                            className="font-garamond text-4xl md:text-5xl lg:text-[56px] font-light text-white mb-6 leading-[1.1] tracking-[-0.02em]"
                        >
                            Free Case<br />Evaluation
                        </h2>
                        <p className="text-[17px] text-white/70 leading-[1.6] mb-10 max-w-md font-light">
                            Our experienced attorneys will conduct a thorough preliminary review of your case against current trade laws and regulations.
                        </p>
                        
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[15px] text-white font-medium mb-0.5">Confidential Review</p>
                                    <p className="text-[13px] text-white/50 font-light">Your submission is completely private</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[15px] text-white font-medium mb-0.5">Partner-Level Analysis</p>
                                    <p className="text-[13px] text-white/50 font-light">Direct evaluation by senior attorneys</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[15px] text-white font-medium mb-0.5">No Obligation</p>
                                    <p className="text-[13px] text-white/50 font-light">Free with no commitment required</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="relative">
                        {/* Glass card effect */}
                        <div className="backdrop-blur-xl bg-white/[0.08] rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Case evaluation request form" noValidate>
                                <div className="grid grid-cols-2 gap-6">
                                    <FormField
                                        id="fullName"
                                        label="First Name"
                                        required
                                        placeholder=""
                                        autoComplete="given-name"
                                        error={fieldErrors.fullName}
                                        onBlur={(e) => validateField('fullName', e.target.value)}
                                    />
                                    <FormField
                                        id="lastName"
                                        label="Last Name"
                                        required
                                        placeholder=""
                                        autoComplete="family-name"
                                        error={fieldErrors.lastName}
                                        onBlur={(e) => validateField('lastName', e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <FormField
                                        id="company"
                                        label="Company"
                                        required
                                        placeholder=""
                                        autoComplete="organization"
                                        error={fieldErrors.company}
                                        onBlur={(e) => validateField('company', e.target.value)}
                                    />
                                    <FormField
                                        id="email"
                                        label="Email"
                                        type="email"
                                        required
                                        placeholder=""
                                        autoComplete="email"
                                        inputMode="email"
                                        error={fieldErrors.email}
                                        onBlur={(e) => validateField('email', e.target.value)}
                                    />
                                </div>
                                <FormField
                                    id="phone"
                                    label="Phone Number"
                                    type="tel"
                                    required
                                    placeholder=""
                                    autoComplete="tel"
                                    inputMode="tel"
                                    error={fieldErrors.phone}
                                    onBlur={(e) => validateField('phone', e.target.value)}
                                />
                                <FormField
                                    id="message"
                                    label="Brief Description of Your Case"
                                    isTextArea
                                    required
                                    placeholder=""
                                    error={fieldErrors.message}
                                    onBlur={(e) => validateField('message', e.target.value)}
                                />
                                
                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        variant="solid"
                                        className={`w-full bg-white text-slate-900 hover:bg-white/90 rounded-full py-4 text-[15px] font-medium tracking-wide transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] hover:shadow-lg hover:shadow-white/20'}`}
                                        aria-label="Submit case evaluation request"
                                        disabled={isSubmitting}
                                        aria-disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit for Review'}
                                    </Button>
                                </div>
                                
                                <p className="text-[11px] text-white/40 text-center pt-2 font-light">
                                    All information submitted is confidential and protected.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EvaluationForm;