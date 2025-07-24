"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Free Support Banner Component
const FreeSupportBanner = ({ visible }: { visible: boolean }) => {
  const [isInteracting, setIsInteracting] = useState(false);

  const handleInteraction = () => {
    setIsInteracting(!isInteracting);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleInteraction();
    }
  };

  return (
    <section 
      className="py-20 sm:py-24 md:py-28 bg-nautical-gradient relative overflow-hidden"
      aria-label="Free Support Offer"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', 
            backgroundSize: '24px 24px' 
          }}
        />
      </div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent-gold/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Interactive Banner */}
          <div 
            className="relative group cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-accent-gold focus-visible:outline-offset-4 rounded-lg"
            onClick={handleInteraction}
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-expanded={isInteracting}
            aria-label={`Free support banner. ${isInteracting ? 'Showing' : 'Hover or press to show'} details about our 100% free support offering`}
          >
            {/* Main Headline */}
            <h2 
              className="font-display font-black text-white leading-none mb-6 transition-all duration-500 group-hover:scale-[1.02] group-focus:scale-[1.02]"
              style={{
                fontSize: 'clamp(2.5rem, 10vw, 8rem)',
                textShadow: isInteracting 
                  ? '0 0 60px rgba(235, 188, 96, 0.8), 0 0 30px rgba(235, 188, 96, 0.6), 0 4px 15px rgba(0, 0, 0, 0.4)' 
                  : '0 0 30px rgba(235, 188, 96, 0.5), 0 4px 15px rgba(0, 0, 0, 0.3)',
                background: 'linear-gradient(135deg, #EBBC60, #ffffff, #EBBC60)',
                backgroundSize: isInteracting ? '200% 200%' : '100% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              100% FREE
              <br />
              <span className="text-white block" style={{ WebkitTextFillColor: 'white' }}>
                SUPPORT
              </span>
            </h2>

            {/* Interactive Content - Revealed on Interaction */}
            <div 
              className={`transition-all duration-300 ease-out ${
                isInteracting 
                  ? 'opacity-100 scale-100 translate-y-0 max-h-96' 
                  : 'opacity-0 scale-95 translate-y-4 max-h-0 overflow-hidden'
              }`}
              aria-hidden={!isInteracting}
            >
              {/* Confirmation Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent-gold/20 backdrop-blur-sm rounded-full mb-6 border-2 border-accent-gold/60">
                <svg 
                  className="w-7 h-7 text-accent-gold" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                </svg>
              </div>

              {/* Benefit Tags */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 max-w-4xl mx-auto">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/40 flex items-center min-h-[56px] w-full sm:w-auto">
                  <div className="flex items-center gap-3 justify-center w-full">
                    <svg className="w-4 h-4 text-accent-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span className="text-white font-semibold text-base sm:text-lg whitespace-nowrap">No hidden fees</span>
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/40 flex items-center min-h-[56px] w-full sm:w-auto">
                  <div className="flex items-center gap-3 justify-center w-full">
                    <svg className="w-4 h-4 text-accent-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span className="text-white font-semibold text-base sm:text-lg whitespace-nowrap">No hourly charges</span>
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/40 flex items-center min-h-[56px] w-full sm:w-auto">
                  <div className="flex items-center gap-3 justify-center w-full">
                    <svg className="w-4 h-4 text-accent-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span className="text-white font-semibold text-base sm:text-lg whitespace-nowrap">No subscription required</span>
                  </div>
                </div>
              </div>

              {/* Call-to-Action Button */}
              <div className="flex justify-center">
                <Link 
                  href="#support-benefits"
                  className="group relative bg-accent-gold hover:bg-accent-gold/90 text-primary-navy font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 focus:scale-105 shadow-lg flex items-center gap-3 text-base sm:text-lg focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  aria-label="Learn more about our free support services"
                >
                  <span>Learn More About Free Support</span>
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Interaction Hint */}
            <p 
              className={`text-white/90 text-sm mt-4 transition-all duration-300 ${
                isInteracting ? 'opacity-0' : 'opacity-100'
              }`}
              aria-live="polite"
            >
              {isInteracting ? '' : 'Hover, click, or tap to reveal details'}
            </p>
          </div>

        </div>
      </div>
      
      {/* Nautical rope border */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
        backgroundSize: '80px 8px'
      }}></div>
    </section>
  );
};

// Support Benefits Component
const SupportBenefits = ({ visible }: { visible: boolean }) => (
  <section id="support-benefits" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-neutral-mist via-white to-neutral-mist relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-sea/30 rounded-full blur-2xl"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-primary-navy">
          <span className="relative inline-block">
            Support Benefits
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold"></span>
          </span>
        </h2>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
          Comprehensive support that empowers your team and keeps your business running smoothly.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-primary-blue mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* 24/7 Support Card */}
        <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-neutral-gull/30 h-full ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-navy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-display font-bold text-primary-navy mb-4 text-center">24/7 Support</h3>
          <p className="text-neutral-600 leading-relaxed text-center">
            Get instant answers anytime with our comprehensive support system that's always available when you need it.
          </p>
        </div>

        {/* Visual Step-by-Step Guides Card */}
        <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-neutral-gull/30 h-full ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-display font-bold text-primary-navy mb-4 text-center">Visual Step-by-Step Guides</h3>
          <p className="text-neutral-600 leading-relaxed text-center">
            Beautiful, easy-to-follow cheat sheets that turn complex procedures into simple steps your team can master.
          </p>
        </div>

        {/* Complete Team Training Card */}
        <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-neutral-gull/30 h-full ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-accent-sea to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4V6C15 7.1 14.1 8 13 8S11 7.1 11 6V4L5 7V9C5 10.1 5.9 11 7 11S9 10.1 9 9V7.5L10.5 8.2C11.1 8.8 11.4 9.6 11.4 10.4V22H12.6V10.4C12.6 9.6 12.9 8.8 13.5 8.2L15 7.5V9C15 10.1 15.9 11 17 11S19 10.1 19 9Z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-display font-bold text-primary-navy mb-4 text-center">Complete Team Training</h3>
          <p className="text-neutral-600 leading-relaxed text-center">
            Empower your entire staff with comprehensive training that builds confidence and reduces downtime.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// CTA Section Component
const CTASection = ({ visible }: { visible: boolean }) => (
  <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-navy to-primary-blue relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', 
        backgroundSize: '24px 24px' 
      }}></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className={`text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-gold/20 rounded-full mb-8">
          <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        
        <h2 className="text-white font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
          Ready for{" "}
          <span className="relative inline-block">
            stress-free tech?
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold"></span>
          </span>
        </h2>
        
        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
          Experience unlimited support with no hidden costs or hourly charges.
        </p>
        
        <Link 
          href="/contact#book-a-call"
          className="btn-primary btn-large inline-flex items-center gap-3 bg-accent-gold hover:bg-accent-gold/90 text-primary-navy font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a2 2 0 012 2v1l-3 3H6l-3-3V9a2 2 0 012-2h3z" />
          </svg>
          Book a Call
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

const OptionsPricingPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [freeSupportVisible, setFreeSupportVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    // Trigger animations in sequence
    const timers = [
      setTimeout(() => setHeroVisible(true), 100),
      setTimeout(() => setFreeSupportVisible(true), 600),
      setTimeout(() => setBenefitsVisible(true), 1200),
      setTimeout(() => setCtaVisible(true), 1800),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div>
      {/* Hero Section - Preserved exactly as-is */}
      <section className="relative min-h-[70vh] flex items-center bg-nautical-gradient overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="relative inline-block">
                 Transparent tech
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
              </span>
              {" "}
              <span className="text-accent-gold">support.</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Tech-savvy or not, we've got you covered. Pick a plan, get support, and get back to business.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Free Support Banner */}
      <FreeSupportBanner visible={freeSupportVisible} />

      {/* Support Benefits */}
      <SupportBenefits visible={benefitsVisible} />

      {/* CTA Section */}
      <CTASection visible={ctaVisible} />
    </div>
  );
};

export default OptionsPricingPage; 