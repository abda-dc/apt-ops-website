import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  showArrow = false,
  ...props 
}) => {
  const baseClasses = 'btn';
  const variantClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
        {showArrow && <ArrowRight className="w-5 h-5" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
      {showArrow && <ArrowRight className="w-5 h-5" />}
    </button>
  );
};
