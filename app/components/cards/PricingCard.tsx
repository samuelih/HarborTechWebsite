"use client";

import Link from 'next/link';
import Image from 'next/image';

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  icon?: string;
}

const PricingCard = ({ title, subtitle, price, isPopular = false, features, icon }: PricingCardProps) => {
  return (
    <div className={`card ${isPopular ? 'border-4 border-primary-500 relative' : 'border border-primary-100'}`}>
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary-700 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
            MOST POPULAR
          </div>
        </div>
      )}
      
      <div className="text-center mb-6 relative">
        <h3 className="font-display font-bold text-2xl mb-1">{title}</h3>
        <p className="text-secondary-navy/70 mb-4">{subtitle}</p>
        <div className="text-4xl font-display font-black text-primary-700">
          {price}
          <span className="text-base font-normal text-secondary-navy/60"> flat fee</span>
        </div>
      </div>
      
      <h4 className="font-semibold mb-3">Includes</h4>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg 
              className="w-5 h-5 text-primary-700 mr-2 flex-shrink-0 mt-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        href="/contact" 
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold ${
          isPopular 
            ? 'bg-primary-700 text-white hover:bg-primary-500' 
            : 'border-2 border-primary-500 text-primary-700 bg-white hover:bg-primary-100'
        } transition-all block`}
      >
        Get Started
      </Link>
    </div>
  );
};

export default PricingCard; 