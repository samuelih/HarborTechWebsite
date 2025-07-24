"use client";

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'white';
  size?: 'small' | 'normal' | 'large';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
}

const Button = ({ 
  children, 
  href, 
  variant = 'primary',
  size = 'normal',
  className = '',
  onClick,
  type = 'button',
  onMouseEnter,
  onMouseLeave,
  disabled = false
}: ButtonProps) => {
  // Use the standardized button classes from global.css
  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary', 
    accent: 'btn-accent',
    white: 'btn-white'
  };

  const sizeStyles = {
    small: 'btn-small',
    normal: '',
    large: 'btn-large'
  };
  
  const buttonClasses = `${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`.trim();
  
  if (href && !disabled) {
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
      onClick={disabled ? undefined : onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 