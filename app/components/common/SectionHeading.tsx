"use client";

import { CSSProperties } from 'react';

interface SectionHeadingProps {
  title: string;
  centered?: boolean;
  className?: string;
  style?: CSSProperties;
}

const SectionHeading = ({ 
  title, 
  centered = false, 
  className = '',
  style
}: SectionHeadingProps) => {
  return (
    <h2 
      className={`section-heading text-2xl md:text-3xl mb-6 ${centered ? 'text-center' : ''} ${className}`}
      style={style}
    >
      {title}
    </h2>
  );
};

export default SectionHeading; 