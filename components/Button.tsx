
import React from 'react';

type ButtonProps = {
children: React.ReactNode;
variant?: 'solid' | 'outlined';
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
const baseClasses = 'inline-block px-8 py-3 font-roboto font-bold uppercase tracking-wider text-center transition-all duration-200 ease-in-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3';

const variantClasses = {
    solid: 'bg-secondary-forestGreen text-white hover:bg-secondary-teal focus-visible:outline-white',
    outlined: 'bg-transparent border-2 border-primary-navy text-primary-navy hover:bg-secondary-teal hover:text-white hover:border-secondary-teal focus-visible:outline-secondary-teal',
};

const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

if (href) {
    return (
        <a 
            href={href} 
            className={combinedClasses}
            onClick={(e) => {
                if (href.startsWith('#')) {
                    e.preventDefault();
                    window.location.hash = href;
                }
                if (props.onClick) props.onClick();
            }}
        >
            {children}
        </a>
    );
}

return (
    <button className={combinedClasses} {...props}>
        {children}
    </button>
);
};

export default Button;
