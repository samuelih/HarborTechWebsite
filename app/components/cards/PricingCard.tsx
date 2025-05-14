"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  icon?: string;
}

const PricingCard = ({ title, subtitle, price, isPopular = false, features, icon }: PricingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden backdrop-blur-sm transition-all duration-500 rounded-2xl ${
        isPopular ? 'bg-white shadow-2xl border border-white' : 'bg-white/95 shadow-lg border border-white/80'
      }`}
      style={{ 
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)' 
          : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Colored border with gradient effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className={`absolute inset-0 transition-opacity duration-500 rounded-2xl ${
            isPopular 
              ? 'border-[3px] border-primary-700 opacity-100' 
              : 'border border-primary-500/50'
          }`}
          style={{ 
            opacity: isHovered && !isPopular ? 0.9 : 1,
            background: isPopular ? 'linear-gradient(to bottom right, rgba(255,255,255,0.5), rgba(255,255,255,0.2))' : 'none'
          }}
        ></div>
      </div>
      
      {/* Popular badge with improved design */}
      {isPopular && (
        <div className="absolute -top-1 -right-1 z-20">
          <div 
            className="bg-gradient-to-r from-primary-700 to-primary-500 text-white text-xs font-bold py-1.5 px-4 rounded-bl-lg shadow-md transform rotate-45 translate-x-[18px] translate-y-[-10px] w-32 text-center"
          >
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Card content with nice padding */}
      <div className="p-8 relative z-10">
        {/* Card header with icon */}
        <div className="text-center mb-8 relative">
          {icon && (
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <div 
                className={`absolute inset-0 rounded-full ${isPopular ? 'bg-primary-100' : 'bg-neutral-50'} transition-transform duration-500`}
                style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
              ></div>
              <Image
                src={icon}
                alt={title}
                width={40}
                height={40}
                className="absolute inset-0 m-auto transition-transform duration-500"
                style={{ transform: isHovered ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0)' }}
              />
            </div>
          )}
          
          <h3 className="font-display font-bold text-2xl mb-2 text-primary-navy">{title}</h3>
          <p className="text-secondary-navy/80 mb-4">{subtitle}</p>
          
          {/* Pricing with scaling effect on hover */}
          <div 
            className="relative inline-block transition-transform duration-300"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          >
            <div className="text-4xl font-display font-black bg-gradient-to-r from-primary-navy to-primary-700 bg-clip-text text-transparent">
              {price}
              <span className="text-base font-normal text-secondary-navy/70 ml-1">flat fee</span>
            </div>
            
            {/* Accent line under price */}
            <div 
              className={`h-1 w-0 bg-accent-gold rounded-full mx-auto transition-all duration-500 mt-1 ${isHovered ? 'w-3/4' : 'w-0'}`}
            ></div>
          </div>
        </div>
        
        {/* Features list with improved icons and animations */}
        <h4 className="font-semibold mb-4 text-primary-navy">Includes</h4>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start group"
              style={{ 
                transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                transition: `transform 0.3s ease-out ${0.1 + index * 0.05}s`
              }}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                isPopular ? 'bg-primary-100' : 'bg-neutral-100'
              } ${isHovered ? (isPopular ? 'bg-primary-200' : 'bg-neutral-200') : ''}`}>
                <svg 
                  className={`w-3 h-3 transition-colors duration-300 ${
                    isPopular ? 'text-primary-700' : 'text-primary-600'
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-secondary-navy/90 font-medium group-hover:text-primary-navy transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Button with improved hover effect */}
        <div className="relative">
          {/* Button background glow on hover */}
          {isHovered && (
            <div 
              className={`absolute inset-0 rounded-lg blur-md transition-opacity duration-500 ${
                isPopular ? 'bg-primary-700/50' : 'bg-primary-500/30'
              }`}
            ></div>
          )}
          
          <Link 
            href="/contact" 
            className={`w-full text-center py-3.5 px-6 rounded-lg font-semibold relative overflow-hidden flex items-center justify-center group transition-all duration-500 ${
              isPopular 
                ? 'bg-gradient-to-r from-primary-700 to-primary-500 text-white' 
                : 'border-2 border-primary-600 text-primary-700 hover:text-primary-500 bg-white'
            }`}
          >
            {/* Animating shimmer effect on hover */}
            <div 
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
            ></div>
            
            <span className="mr-2">Get Started</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard; 