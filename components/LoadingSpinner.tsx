import React from 'react';

interface LoadingSpinnerProps {
  minHeight?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  minHeight = '400px',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-4',
    lg: 'w-16 h-16 border-4'
  };

  return (
    <div
      style={{ minHeight }}
      className="flex items-center justify-center bg-transparent"
      role="status"
      aria-label="Loading content"
    >
      <div className="animate-pulse flex flex-col items-center gap-3">
        <div
          className={`${sizeClasses[size]} border-primary-navy border-t-transparent rounded-full animate-spin`}
          aria-hidden="true"
        />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
