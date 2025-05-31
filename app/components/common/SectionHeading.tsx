"use client";

import { CSSProperties } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  style?: CSSProperties;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false, 
  className = '',
  style
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 
        className={`text-3xl md:text-4xl font-display font-bold text-primary-navy mb-4 ${className}`}
        style={style}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#0D2545] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading; 