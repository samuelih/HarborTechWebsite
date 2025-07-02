"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  className?: string;
  style?: React.CSSProperties;
  accentColor: string;
}

const SolutionCard = ({ icon, title, description, link, className = '', style, accentColor }: SolutionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={link}
      className={`group block p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 relative overflow-hidden border border-neutral-gull/30 ${
        accentColor === 'accent-gold' ? 'hover:border-accent-gold/30' :
        accentColor === 'accent-sea' ? 'hover:border-accent-sea/30' :
        accentColor === 'primary-blue' ? 'hover:border-primary-blue/30' : ''
      } ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        accentColor === 'accent-gold' ? 'from-accent-gold/5' :
        accentColor === 'accent-sea' ? 'from-accent-sea/5' :
        accentColor === 'primary-blue' ? 'from-primary-blue/5' : ''
      } to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
      
      {/* Accent border line */}
      <div className={`absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r ${
        accentColor === 'accent-gold' ? 'from-accent-gold to-accent-gold/30' :
        accentColor === 'accent-sea' ? 'from-accent-sea to-accent-sea/30' :
        accentColor === 'primary-blue' ? 'from-primary-blue to-primary-blue/30' : ''
      } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
      
      <div className="relative z-10">
        {/* Icon container with background */}
        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 rounded-lg sm:rounded-xl bg-gradient-to-br ${
          accentColor === 'accent-gold' ? 'from-accent-gold/10 to-accent-gold/5 group-hover:from-accent-gold/20 group-hover:to-accent-gold/10' :
          accentColor === 'accent-sea' ? 'from-accent-sea/10 to-accent-sea/5 group-hover:from-accent-sea/20 group-hover:to-accent-sea/10' :
          accentColor === 'primary-blue' ? 'from-primary-blue/10 to-primary-blue/5 group-hover:from-primary-blue/20 group-hover:to-primary-blue/10' : ''
        } transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          <div className={
            accentColor === 'accent-gold' ? 'text-accent-gold' :
            accentColor === 'accent-sea' ? 'text-accent-sea' :
            accentColor === 'primary-blue' ? 'text-primary-blue' : ''
          + ' group-hover:scale-110 transition-transform duration-500'}>
            {icon}
          </div>
        </div>
        
        <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-primary-navy group-hover:text-primary-blue transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">{description}</p>
        
        {/* Enhanced CTA */}
        <div className="flex items-center justify-between">
          <span className={
            (accentColor === 'accent-gold' ? 'text-accent-gold' :
            accentColor === 'accent-sea' ? 'text-accent-sea' :
            accentColor === 'primary-blue' ? 'text-primary-blue' : '') +
            ' group-hover:text-primary-blue font-semibold transition-colors duration-300 text-sm sm:text-base'}>
            Learn more
          </span>
          <div className={
            (accentColor === 'accent-gold' ? 'bg-accent-gold/10 group-hover:bg-accent-gold/20' :
            accentColor === 'accent-sea' ? 'bg-accent-sea/10 group-hover:bg-accent-sea/20' :
            accentColor === 'primary-blue' ? 'bg-primary-blue/10 group-hover:bg-primary-blue/20' : '') +
            ' w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1'}>
            <svg className={
              (accentColor === 'accent-gold' ? 'text-accent-gold' :
              accentColor === 'accent-sea' ? 'text-accent-sea' :
              accentColor === 'primary-blue' ? 'text-primary-blue' : '') +
              ' w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Floating accent dots */}
      <div className={
        (accentColor === 'accent-gold' ? 'bg-accent-gold/30' :
        accentColor === 'accent-sea' ? 'bg-accent-sea/30' :
        accentColor === 'primary-blue' ? 'bg-primary-blue/30' : '') +
        ' absolute top-3 right-3 sm:top-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150'}></div>
      <div className={
        (accentColor === 'accent-gold' ? 'bg-accent-gold/20' :
        accentColor === 'accent-sea' ? 'bg-accent-sea/20' :
        accentColor === 'primary-blue' ? 'bg-primary-blue/20' : '') +
        ' absolute bottom-5 right-6 sm:bottom-6 sm:right-8 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100'}></div>
    </Link>
  );
};

const SolutionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      title: 'Retail Shops',
      description: 'Boutiques, gift shops, and specialty stores that want seamless inventory and sales tracking.',
      icon: <Image src="/images/icons/general/shopping-cart.svg" alt="Shopping Cart" width={28} height={28} />,
      link: '/solutions#work-section',
      accentColor: 'accent-gold'
    },
    {
      title: 'Restaurants & Cafes',
      description: 'Local dining spots that need efficient ordering, payment processing, and customer management.',
      icon: <Image src="/images/icons/general/chef-hat.svg" alt="Chef Hat" width={28} height={28} />,
      link: '/solutions#work-section',
      accentColor: 'accent-sea'
    },
    {
      title: 'Service Businesses',
      description: 'Salons, repair shops, and local services that want to streamline appointments and billing.',
      icon: <Image src="/images/icons/general/hands-stars.svg" alt="Hands with Stars" width={28} height={28} />,
      link: '/solutions#work-section',
      accentColor: 'primary-blue'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-neutral-mist/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-sea/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="mb-4 sm:mb-6">
              <span className="relative inline-block">
                Tech tools that help
                <span className="absolute -bottom-1 left-0 w-full h-0.5 sm:h-1 bg-accent-gold/70"></span>
              </span>
              {" "}
              <span className="text-accent-gold">run your business.</span>
            </h2>
            <p className="text-lg sm:text-xl font-cinzel text-primary-navy max-w-3xl mx-auto leading-relaxed mb-2">
              Local expertise. Modern solutions. All the essentials for smooth sailing—right here in Harbor Springs.
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-sea mx-auto mt-4 sm:mt-6 rounded-full"></div>
          </div>
        </div>
        
        <div className={`mobile-grid transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              link={solution.link}
              accentColor={solution.accentColor}
              className={`animate-fade-up`}
              style={{ animationDelay: `${index * 150}ms` } as React.CSSProperties}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className={`flex flex-col items-center mt-12 sm:mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link 
            href="/contact" 
            className="btn-accent btn-large mobile-full-width sm:w-auto inline-flex items-center justify-center"
          >
            Let's Talk About Your Needs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection; 