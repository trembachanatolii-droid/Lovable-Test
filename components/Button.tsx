
import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
children: React.ReactNode;
variant?: 'solid' | 'outlined' | 'outline' | 'hero-outline';
href?: string;
className?: string;
type?: 'button' | 'submit' | 'reset';
onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
children,
variant = 'solid',
href,
className = '',
...props
}) => {
const baseClasses = 'inline-flex items-center justify-center px-8 py-3 font-roboto font-bold uppercase tracking-wider text-center transition-all duration-200 ease-in-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3';

const variantClasses = {
    solid: 'bg-secondary-forestGreen text-white hover:bg-secondary-teal focus-visible:outline-white',
    outlined: 'bg-transparent border-2 border-primary-navy text-primary-navy hover:bg-secondary-teal hover:text-white hover:border-secondary-teal focus-visible:outline-secondary-teal',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-secondary-teal hover:border-secondary-teal focus-visible:outline-white',
    'hero-outline': 'bg-transparent border-2 border-white text-white hover:bg-secondary-teal hover:border-secondary-teal focus-visible:outline-white',
};

const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
const buttonStyle = { minHeight: '44px', cursor: 'pointer' };

if (href) {
    // Use Link for internal hash routes, anchor for external links
    if (href.startsWith('#')) {
        return (
            <Link
                to={href.substring(1)} // Remove # and keep /
                className={combinedClasses}
                style={buttonStyle}
                onClick={props.onClick}
            >
                {children}
            </Link>
        );
    }

    return (
        <a
            href={href}
            className={combinedClasses}
            style={buttonStyle}
            onClick={props.onClick}
        >
            {children}
        </a>
    );
}

return (
    <button className={combinedClasses} style={buttonStyle} {...props}>
        {children}
    </button>
);
};

export default Button;
