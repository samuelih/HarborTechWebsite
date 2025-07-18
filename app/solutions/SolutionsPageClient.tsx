"use client";

import Link from 'next/link';
import Image from 'next/image';
import BusinessTypeSwitcher from '../components/BusinessTypeSwitcher';
import { useEffect, useState } from 'react';

const SolutionsPageClient = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [workSectionVisible, setWorkSectionVisible] = useState(false);
  const [solutionsSectionVisible, setSolutionsSectionVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    // Hero animation triggers immediately
    setHeroVisible(true);
    
    // Create intersection observers for other sections
    const observerOptions = { threshold: 0.1 };
    
    // Observer for work section
    const workObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWorkSectionVisible(true);
          // Trigger step-by-step animation
          const steps = [0, 1, 2, 3, 4];
          steps.forEach((step, index) => {
            setTimeout(() => {
              setActiveStep(step);
            }, index * 400);
          });
        }
      },
      observerOptions
    );

    // Observer for solutions section
    const solutionsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSolutionsSectionVisible(true);
        }
      },
      observerOptions
    );

    // Observe sections
    const workSection = document.getElementById('work-section');
    const businessTypesSection = document.getElementById('business-types');

    if (workSection) workObserver.observe(workSection);
    if (businessTypesSection) solutionsObserver.observe(businessTypesSection);

    return () => {
      workObserver.disconnect();
      solutionsObserver.disconnect();
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "The Harbor Tech Check",
      description: " Over coffee at Johan's or right on your sales floor, we ask 15 questions to learn how your store operates and pinpoint your daily headaches.",
      icon: <Image src="/images/icons/general/talk.svg" alt="Talk" width={28} height={28} />,
      accentColor: "accent-gold",
      delay: 0
    },
    {
      number: 2,
      title: "Your Harbor Plan",
      description: "You get a clear <span className='text-accent-gold font-semibold'>transparent</span> plan: what we heard, the upgrades and workflows we recommend, an estimated cost, and a timeline that works around your schedule.",
      icon: <Image src="/images/icons/general/clipboard.svg" alt="Clipboard" width={28} height={28} />,
      accentColor: "seafoam",
      delay: 800
    },
    {
      number: 3,
      title: "Install & Training",
      description: "<span className='text-accent-gold font-semibold'>We work around your hours</span>—before open, after close, whenever. Keep your systems running while we train your crew and get your upgrade fully implemented.",
      icon: <Image src="/images/icons/general/wrench.svg" alt="Wrench" width={28} height={28} />,
      accentColor: "accent-gold",
      delay: 1200
    },
    {
      number: 4,
      title: "Payment",
      description: "Pay all at once or spread it over 24 months; either way, the number we quote is the number you pay. No surprise add-ons, ever. <span className='text-accent-gold font-semibold'>Fully refundable for up to 14 days.</span>",
      icon: <Image src="/images/icons/general/money.svg" alt="Money" width={28} height={28} />,
      accentColor: "primary-blue",
      delay: 1600
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-nautical-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="relative inline-block">
                Personalized tech
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold"></span>
              </span>
              {" "}
              <span className="text-accent-gold">solutions.</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Any tech upgrade you need—easy, local, done right.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* How We Work Section - Enhanced */}
      <section id="work-section" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-neutral-mist/20 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-seafoam/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${workSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Here's how we work:
            </h2>
            <p className="text-xl text-nautical-navy/80 max-w-2xl mx-auto mb-6">
              Five simple steps to modernize your business technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-primary-blue mx-auto rounded-full"></div>
          </div>
          
          {/* Enhanced Flowchart */}
          <div className="max-w-7xl mx-auto">
            {/* Desktop/Tablet Flow Chart */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Progress Line Background */}
                <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-neutral-gull/30 via-neutral-gull/30 to-neutral-gull/30 rounded-full mx-24"></div>
                
                {/* Animated Progress Line */}
                <div 
                  className="absolute top-20 left-0 h-1 bg-gradient-to-r from-accent-gold via-primary-blue to-seafoam rounded-full transition-all duration-2000 ease-out mx-24"
                  style={{ 
                    width: workSectionVisible ? `${((activeStep + 1) / 4) * 100}%` : '0%',
                    maxWidth: 'calc(100% - 12rem)'
                  }}
                ></div>

                <div className="grid grid-cols-4 gap-6 lg:gap-12">
                  {steps.map((step, index) => (
                    <div 
                      key={index}
                      className={`relative transition-all duration-800 ${
                        workSectionVisible && activeStep >= index 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${step.delay}ms` }}
                      onMouseEnter={() => setHoveredStep(index)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      {/* Step Card */}
                      <div className={`bg-white rounded-2xl p-6 h-full border-2 transition-all duration-300 relative overflow-hidden group cursor-pointer will-change-transform ${
                        hoveredStep === index 
                          ? 'border-accent-gold shadow-2xl transform scale-105 -translate-y-2' 
                          : 'border-neutral-gull/30 shadow-lg hover:shadow-xl hover:border-accent-gold/50'
                      }`}>
                        
                        {/* Gradient overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-accent-gold/5 via-transparent to-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        
                        {/* Step Number with enhanced styling */}
                        <div className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-full mb-6 mx-auto transition-all duration-500 ${
                          hoveredStep === index
                            ? 'bg-gradient-to-br from-accent-gold to-accent-gold/80 scale-110 rotate-12'
                            : 'bg-gradient-to-br from-primary-blue to-primary-blue/80 group-hover:scale-110'
                        } shadow-lg`}>
                          <div className="text-white font-bold text-lg">{step.number}</div>
                          
                          {/* Animated ring */}
                          <div className={`absolute inset-0 rounded-full border-2 border-accent-gold/50 ${
                            hoveredStep === index ? 'animate-pulse' : ''
                          }`}></div>
                        </div>

                        {/* Icon */}
                        <div className="flex justify-center items-center mb-4">
                          <div className={`transition-all duration-500 ${
                            hoveredStep === index ? 'scale-125 filter drop-shadow-lg' : 'group-hover:scale-110'
                          }`}>
                            {step.icon}
                          </div>
                        </div>
                        
                        <h3 className={`text-xl font-display font-bold text-center mb-4 transition-colors duration-300 ${
                          hoveredStep === index ? 'text-primary-blue' : 'text-nautical-navy group-hover:text-primary-blue'
                        }`}>
                          {step.title}
                        </h3>
                        
                        <p className="text-neutral-600 text-center text-sm leading-relaxed relative z-10" dangerouslySetInnerHTML={{ __html: step.description }}></p>

                        {/* Floating accent elements */}
                        <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-accent-gold/40 opacity-0 group-hover:opacity-100 transition-all duration-700 ${
                          hoveredStep === index ? 'scale-150' : ''
                        }`}></div>
                        <div className={`absolute bottom-6 right-8 w-1.5 h-1.5 rounded-full bg-primary-blue/30 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100`}></div>
                      </div>

                      {/* Connection Arrow (not on last step) */}
                      {index < steps.length - 1 && (
                        <div className="absolute top-8 -right-2 lg:-right-4 z-20">
                          <div className={`transition-all duration-800 delay-300 ${
                            workSectionVisible && activeStep > index 
                              ? 'opacity-100 scale-100' 
                              : 'opacity-0 scale-0'
                          }`}>
                            <svg className="w-6 h-6 lg:w-8 lg:h-8 text-accent-gold animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Flow Chart */}
            <div className="md:hidden space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative transition-all duration-800 ${
                    workSectionVisible && activeStep >= index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${step.delay}ms` }}
                >
                  {/* Connection Line (not on last step) */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-7 top-24 w-0.5 h-16 bg-gradient-to-b from-accent-gold to-primary-blue opacity-50"></div>
                  )}

                  <div className="flex items-start space-x-4">
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-neutral-gull/30">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="flex items-center justify-center">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-display font-bold text-nautical-navy">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-neutral-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: step.description }}></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Business Type Switcher Section */}
      <section id="business-types" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-neutral-mist via-white to-neutral-mist min-h-[600px] flex flex-col">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-nautical-navy rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-seafoam rounded-full blur-2xl"></div>
        </div>
        
        {/* Nautical rope pattern */}
        <div className="absolute top-0 left-0 w-full h-2 bg-repeat-x opacity-30" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10 flex-1">
          <div className={`transition-all duration-1000 ${solutionsSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} h-full`}>
            <BusinessTypeSwitcher />
          </div>
        </div>
        
        {/* Bottom nautical rope pattern */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-repeat-x opacity-30" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

    </div>
  );
};

export default SolutionsPageClient; 