"use client";

import Image from 'next/image';
import { useState } from 'react';
import { BusinessBundle } from '../../../data/businessBundles';

interface BundleCardProps {
  bundle: BusinessBundle;
  className?: string;
}

const BundleCard = ({ bundle, className = '' }: BundleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatTimeSaved = (hours: number) => {
    if (hours === 1) return '1 hour';
    return `${hours} hours`;
  };

  const getAccentColorClasses = (color: string) => {
    switch (color) {
      case 'accent-gold':
        return {
          border: 'border-accent-gold',
          bg: 'bg-accent-gold',
          text: 'text-accent-gold',
          bgWithOpacity: 'bg-accent-gold/5',
          ring: 'ring-accent-gold/50',
          buttonBg: 'bg-accent-gold',
          buttonText: 'text-primary-navy',
          buttonHover: 'hover:bg-accent-gold/90'
        };
      case 'primary-navy':
        return {
          border: 'border-primary-navy',
          bg: 'bg-primary-navy',
          text: 'text-primary-navy',
          bgWithOpacity: 'bg-primary-navy/5',
          ring: 'ring-primary-navy/50',
          buttonBg: 'bg-primary-navy',
          buttonText: 'text-white',
          buttonHover: 'hover:bg-primary-blue'
        };
      case 'primary-blue':
        return {
          border: 'border-primary-blue',
          bg: 'bg-primary-blue',
          text: 'text-primary-blue',
          bgWithOpacity: 'bg-primary-blue/5',
          ring: 'ring-primary-blue/50',
          buttonBg: 'bg-primary-blue',
          buttonText: 'text-white',
          buttonHover: 'hover:bg-primary-sky'
        };
      case 'accent-sea':
        return {
          border: 'border-accent-sea',
          bg: 'bg-accent-sea',
          text: 'text-accent-sea',
          bgWithOpacity: 'bg-accent-sea/5',
          ring: 'ring-accent-sea/50',
          buttonBg: 'bg-accent-sea',
          buttonText: 'text-white',
          buttonHover: 'hover:bg-accent-sea/90'
        };
      default:
        return {
          border: 'border-primary-blue',
          bg: 'bg-primary-blue',
          text: 'text-primary-blue',
          bgWithOpacity: 'bg-primary-blue/5',
          ring: 'ring-primary-blue/50',
          buttonBg: 'bg-primary-blue',
          buttonText: 'text-white',
          buttonHover: 'hover:bg-primary-sky'
        };
    }
  };

  const colorClasses = getAccentColorClasses(bundle.accentColor);

  // Get the proper hover border class based on accent color
  const getHoverBorderClass = (color: string) => {
    switch (color) {
      case 'accent-gold':
        return 'hover:border-accent-gold';
      case 'primary-navy':
        return 'hover:border-primary-navy';
      case 'primary-blue':
        return 'hover:border-primary-blue';
      case 'accent-sea':
        return 'hover:border-accent-sea';
      default:
        return 'hover:border-primary-blue';
    }
  };

  return (
    <div 
      className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 bg-white border-2 border-neutral-gull/30 ${getHoverBorderClass(bundle.accentColor)} hover:-translate-y-2 hover:shadow-xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bgWithOpacity} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

      {/* Card content */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-neutral-gull ${colorClasses.bg.replace('bg-', 'group-hover:bg-')} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          <Image
            src={bundle.icon}
            alt={bundle.name}
            width={32}
            height={32}
            className="opacity-60 group-hover:brightness-0 transition-all duration-300"
          />
        </div>

        {/* Bundle Name */}
        <h3 className="text-xl font-display font-bold text-primary-navy mb-2 group-hover:text-primary-blue transition-colors duration-300">
          {bundle.name}
        </h3>

        {/* Blurb */}
        <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
          {bundle.blurb}
        </p>

        {/* Price and Time Savings */}
        <div className="mb-6">
          <div className="flex items-baseline justify-between mb-2">
            <div className="flex items-baseline">
              <span className={`text-3xl font-bold ${colorClasses.text}`}>
                {formatPrice(bundle.price)}
              </span>
              <span className="text-neutral-500 text-sm ml-1">/mo</span>
            </div>
          </div>
          
          {/* Time Savings Badge */}
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${colorClasses.bg} text-white`}>
            <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Saves {formatTimeSaved(bundle.timeSavedPerMonth)}/month
          </div>
        </div>

        {/* Features */}
        <div className="mb-8 flex-grow">
          <h4 className="text-sm font-semibold text-primary-navy mb-3 uppercase tracking-wide">
            What's Included:
          </h4>
          <ul className="space-y-2">
            {bundle.includes.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className={`w-2 h-2 ${colorClasses.bg} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                <span className="text-neutral-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${colorClasses.buttonBg} ${colorClasses.buttonText} ${colorClasses.buttonHover} hover:translate-y-[-2px] shadow-md hover:shadow-lg`}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BundleCard; 