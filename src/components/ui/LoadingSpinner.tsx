import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md',
  color = 'primary-600'
}) => {
  const sizeClass = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex justify-center items-center p-8 w-full">
      <div className={`animate-spin rounded-full border-t-2 border-b-2 border-${color} ${sizeClass[size]}`}></div>
    </div>
  );
};

export default LoadingSpinner;