"use client";

import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  imageUrl: string;
}

const TestimonialCard = ({ quote, name, company, imageUrl }: TestimonialCardProps) => {
  return (
    <div className="card relative text-center flex flex-col items-center bg-white/80 backdrop-blur-sm">
      {/* Porthole frame effect */}
      <div className="rounded-full overflow-hidden w-20 h-20 mb-6 border-4 border-primary-500 relative">
        <Image 
          src={imageUrl} 
          alt={`${name}, ${company}`}
          fill
          className="object-cover"
        />
        {/* Glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30"></div>
      </div>
      
      <div className="text-secondary-navy mb-6">
        <svg 
          className="w-8 h-8 mx-auto mb-4 text-primary-700/30" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="italic">{quote}</p>
      </div>
      
      <div className="mt-auto">
        <p className="font-bold">{name}</p>
        <p className="text-sm text-secondary-navy/70">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard; 