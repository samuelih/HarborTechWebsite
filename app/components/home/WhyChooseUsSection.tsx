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
      color: 'from-accent-sand to-accent-sand/70',
      iconBg: 'bg-accent-gold/20'
    },
    {
      icon: '/images/user/anchor.svg',
      title: 'Local Experts',
      description: 'Harbor Springs born & raised',
      color: 'from-accent-gold to-accent-gold/70',
      iconBg: 'bg-accent-gold/20'
    },
    {
      icon: '/images/user/sailboat.svg',
      title: 'Try Before You Buy',
      description: '30-day free trial',
      color: 'from-accent-seafoam to-accent-seafoam/70',
      iconBg: 'bg-accent-seafoam/20'
    },
    {
      icon: '/images/user/wheel.svg',
      title: 'Your Data, Your Way',
      description: 'No lock-in, full transparency',
      color: 'from-primary-sky to-primary-sky/70',
      iconBg: 'bg-primary-sky/20'
    }
  ];

  return (
    <section 
      id="why-choose-us" 
      ref={sectionRef}
      className="py-16 bg-neutral-mist relative overflow-hidden"
    >
      {/* Enhanced background pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/images/backgrounds/dot-pattern.svg')] bg-repeat opacity-5"
          style={{ backgroundSize: '30px 30px' }}
        ></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-gull/30 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-gull/30 to-transparent"></div>
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
          <div className="absolute bottom-0 left-10 md:left-40 w-40 h-20 bg-accent-sand/10 rounded-t-full transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-5 md:right-60 w-28 h-16 bg-accent-sand/15 rounded-t-full transform translate-x-1/2"></div>
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
    </section>
  );
};

export default WhyChooseUsSection; 