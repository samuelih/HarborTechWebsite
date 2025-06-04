"use client";

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button',
  onMouseEnter,
  onMouseLeave
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold py-3 px-6 transition-all';
  
  const variantStyles = {
    primary: 'bg-primary-blue text-white hover:bg-primary-sky hover:translate-y-[-2px] hover:shadow-md',
    secondary: 'bg-neutral-mist text-primary-navy border-2 border-primary-blue hover:bg-neutral-gull',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10'
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link 
        href={href} 
        className={buttonClasses}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button; 