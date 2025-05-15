"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface ServiceCardProps {
  icon: 'pos' | 'cloud' | 'training' | 'data';
  nauticalIcon: string;
  title: string;
  description: string;
  features: string[];
  link: string;
  color?: string;
  className?: string;
}

const iconMap = {
  pos: '/images/icons/pos-icon.svg',
  cloud: '/images/icons/cloud-icon.svg',
  training: '/images/icons/training-icon.svg',
  data: '/images/icons/data-icon.svg'
};

const ServiceCard = ({ 
  icon, 
  nauticalIcon, 
  title, 
  description, 
  features, 
  link,
  color = 'bg-neutral-mist',
  className = ''
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine if this is a dark card to adjust text colors accordingly
  const isDarkCard = ['bg-primary-navy', 'bg-primary-blue'].includes(color);

  return (
    <div 
      className={`${color} rounded-xl shadow-lg transition-all duration-500 transform relative overflow-hidden group flex flex-col min-h-[360px] ${className}`}
      style={{ 
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card mesh gradient background with animated effect */}
      <div className="absolute inset-0 w-full h-full opacity-50 mix-blend-overlay">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent transition-opacity duration-500"
          style={{ opacity: isHovered ? 0.8 : 0.4 }}
        ></div>
      </div>
      
      {/* Shimmer effect on hover */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"
      ></div>
      
      {/* Card content */}
      <div className="relative z-10 p-4 sm:p-6 flex flex-col flex-grow">
        <div className="mb-4 relative">
          <div className="p-2 rounded-lg inline-block" style={{ background: 'rgba(255, 255, 255, 0.15)' }}>
            <Image
              src={nauticalIcon}
              alt={title}
              width={48}
              height={48}
              className="object-contain transition-all duration-500"
              style={{ 
                transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
              }}
            />
          </div>
        </div>

        <h3 className="font-display font-bold text-xl sm:text-2xl mb-3 text-white drop-shadow-md group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
        <p className="text-white/90 mb-5 drop-shadow-sm text-sm sm:text-base">{description}</p>
        
        <div className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center text-white/90 transition-transform duration-300 text-sm sm:text-base"
              style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)', transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <svg className={`w-3 h-3 ${isDarkCard ? 'text-accent-gold' : 'text-accent-seafoam'}`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9,16.17L4.83,12l-1.42,1.41L9,19L21,7l-1.41-1.41L9,16.17z" />
                </svg>
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-auto">
          <Link 
            href={link}
            className={`inline-flex items-center ${isDarkCard ? 'text-accent-gold' : 'text-primary-blue'} font-semibold transition-all duration-300 relative`}
            style={{ 
              transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
            }}
          >
            <span>Learn more</span>
            <svg 
              className="w-5 h-5 ml-1.5 transition-transform duration-300" 
              style={{ transform: isHovered ? 'translateX(3px)' : 'translateX(0)' }}
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${isDarkCard ? 'bg-accent-gold/40' : 'bg-primary-blue/40'} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 