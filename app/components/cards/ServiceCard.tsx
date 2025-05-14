"use client";

import Link from 'next/link';
import Image from 'next/image';

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
  return (
    <div className={`${color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px] relative overflow-hidden group backdrop-blur-sm bg-opacity-95 ${className}`}>
      <div className="mb-4 relative">
        <Image
          src={nauticalIcon}
          alt={title}
          width={48}
          height={48}
          className="object-contain animate-gentle-float"
        />
      </div>
      <h3 className="font-display font-bold text-xl mb-2 text-white drop-shadow-md">{title}</h3>
      <p className="text-white/90 mb-4 drop-shadow-sm">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-white/90">
            <svg className="w-4 h-4 mr-2 text-accent-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9,16.17L4.83,12l-1.42,1.41L9,19L21,7l-1.41-1.41L9,16.17z" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link 
        href={link}
        className="inline-flex items-center text-accent-gold font-semibold group-hover:translate-x-2 transition-transform duration-300"
      >
        Learn more
        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard; 