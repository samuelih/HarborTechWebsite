"use client";

import Image from 'next/image';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { useState, useEffect } from 'react';

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('why-choose-us');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const benefits = [
    {
      icon: '/images/user/lighthouse.svg',
      title: 'No Surprises',
      description: 'One flat fee, no hidden costs',
      color: 'bg-accent-sand'
    },
    {
      icon: '/images/user/anchor.svg',
      title: 'Local Experts',
      description: 'Harbor Springs born & raised',
      color: 'bg-accent-gold'
    },
    {
      icon: '/images/user/sailboat.svg',
      title: 'Try Before You Buy',
      description: '30-day free trial',
      color: 'bg-accent-seafoam'
    },
    {
      icon: '/images/user/wheel.svg',
      title: 'Your Data, Your Way',
      description: 'No lock-in, full transparency',
      color: 'bg-primary-sky'
    }
  ];

  return (
    <section id="why-choose-us" className="py-12 bg-neutral-mist relative overflow-hidden">
      {/* Animated sandcastle background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-accent-sand/20 transform -skew-y-6"></div>
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-accent-sand/30 rounded-t-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent-sand/40 rounded-t-full transform translate-x-1/2"></div>
      </div>

      {/* Animated seagulls */}
      <div className="absolute top-10 left-0 w-full overflow-hidden">
        <div className="animate-gentle-float" style={{ animationDelay: '0s' }}>
          <Image src="/images/user/bird.svg" alt="" width={24} height={24} className="opacity-20" />
        </div>
        <div className="animate-gentle-float" style={{ animationDelay: '2s' }}>
          <Image src="/images/user/bird.svg" alt="" width={24} height={24} className="opacity-20" />
        </div>
      </div>

      <Container>
        <SectionHeading title="Why Choose Us?" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`${benefit.color} rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300 
                transform hover:translate-y-[-8px] relative overflow-hidden group cursor-pointer
                ${isVisible ? 'animate-fade-up' : 'opacity-0'}
                ${activeIndex === index ? 'ring-2 ring-primary-blue scale-105' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="mb-4 mx-auto relative w-16 h-16">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={64}
                  height={64}
                  className={`object-contain transition-all duration-300 
                    ${activeIndex === index ? 'scale-125 rotate-12' : 'group-hover:scale-110 group-hover:rotate-6'}`}
                />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-primary-navy group-hover:text-primary-blue transition-colors duration-300">{benefit.title}</h3>
              <p className="text-primary-navy/80 group-hover:text-primary-navy transition-colors duration-300">{benefit.description}</p>
              
              {/* Interactive sandcastle decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-sand/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection; 