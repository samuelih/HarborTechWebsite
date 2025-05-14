"use client";

interface SectionHeadingProps {
  title: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ title, centered = false, className = '' }: SectionHeadingProps) => {
  return (
    <h2 className={`section-heading text-2xl md:text-3xl mb-6 ${centered ? 'text-center' : ''} ${className}`}>
      {title}
    </h2>
  );
};

export default SectionHeading; 