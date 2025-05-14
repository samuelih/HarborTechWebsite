"use client";

import Image from 'next/image';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { useState, useEffect, useRef } from 'react';

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Auto-rotate through benefits
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      icon: '/images/user/lighthouse.svg',
      title: 'No Surprises',
      description: 'One flat fee, no hidden costs',
      color: 'from-accent-seafoam to-accent-seafoam/80',
      iconBg: 'bg-accent-seafoam/30'
    },
    {
      icon: '/images/user/anchor.svg',
      title: 'Local Experts',
      description: 'Harbor Springs born & raised',
      color: 'from-primary-blue to-primary-blue/80',
      iconBg: 'bg-primary-blue/30'
    },
    {
      icon: '/images/user/sailboat.svg',
      title: 'Try Before You Buy',
      description: '30-day free trial',
      color: 'from-primary-navy to-primary-navy/80',
      iconBg: 'bg-primary-navy/30'
    },
    {
      icon: '/images/user/wheel.svg',
      title: 'Your Data, Your Way',
      description: 'No lock-in, full transparency',
      color: 'from-accent-gold to-accent-gold/80',
      iconBg: 'bg-accent-gold/30'
    }
  ];

  return (
    <section 
      id="why-choose-us" 
      ref={sectionRef}
      className="py-16 bg-accent-sand relative overflow-hidden"
    >
      {/* Enhanced background pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/images/backgrounds/dot-pattern.svg')] bg-repeat opacity-5"
          style={{ backgroundSize: '30px 30px' }}
        ></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-accent-sand/70 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent-sand/70 to-transparent"></div>
      </div>

      {/* Animated sea elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated seagulls */}
        {[...Array(3)].map((_, i) => (
          <div 
            key={i} 
            className="absolute"
            style={{
              top: `${10 + i * 15}%`,
              left: `${20 + i * 20}%`,
              transform: `scale(${0.6 + i * 0.2})`,
              zIndex: 1,
              opacity: 0.2 + i * 0.1
            }}
          >
            <div className="animate-gentle-float" style={{ animationDelay: `${i * 1.5}s`, animationDuration: `${6 + i * 2}s` }}>
              <Image src="/images/user/bird.svg" alt="" width={28} height={28} />
            </div>
        </div>
        ))}
        
        {/* Animated beach elements */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="absolute bottom-0 left-10 md:left-40 w-40 h-20 bg-accent-sand/30 rounded-t-full transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-5 md:right-60 w-28 h-16 bg-accent-sand/40 rounded-t-full transform translate-x-1/2"></div>
        </div>
      </div>

      <Container className="relative z-10">
        <SectionHeading 
          title="Why Choose Us?" 
          centered 
          className="mb-8 text-primary-navy"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
          }}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.7s ease-out ${0.2 + index * 0.1}s, transform 0.7s ease-out ${0.2 + index * 0.1}s`
              }}
            >
              <div
                className={`relative overflow-hidden rounded-xl h-full bg-gradient-to-br ${benefit.color} transition-all duration-500 cursor-pointer`}
                style={{
                  boxShadow: activeIndex === index 
                    ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                  transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)'
                }}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 -ml-10 -mb-10 bg-white/5 rounded-full"></div>
                
                {/* Shimmer effect */}
                <div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"
                ></div>
                
                <div className="p-6 relative">
                  <div className={`mb-5 mx-auto relative w-16 h-16 ${benefit.iconBg} rounded-full flex items-center justify-center`}>
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                      width={40}
                      height={40}
                      className="object-contain transition-all duration-500"
                      style={{ 
                        transform: activeIndex === index ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0)'
                      }}
                    />
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-center mb-3 text-white drop-shadow-sm transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-center text-white/90 transition-colors duration-300">
                    {benefit.description}
                  </p>
                  
                  {/* Active indicator */}
                  <div 
                    className={`absolute bottom-0 left-0 w-full h-1 transition-transform duration-500 ease-out ${activeIndex === index ? 'scale-x-100' : 'scale-x-0'}`}
                    style={{ 
                      background: 'linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.7), rgba(255,255,255,0.3))' 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Wave transition to Services section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#0E2A47" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#0E2A47" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#0E2A47" />
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 