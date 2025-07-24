"use client";

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import CalendlyEmbed from '../common/CalendlyEmbed';
import { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * CalendlySection Component
 * 
 * An enhanced, visually appealing section for the Calendly scheduling widget.
 * Features animations, nautical theming, and sophisticated visual effects.
 */
const CalendlySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [calendlyVisible, setCalendlyVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger the animations
          setTimeout(() => setCardsVisible(true), 600);
          setTimeout(() => setCalendlyVisible(true), 1200);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('book-a-call');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="book-a-call" 
      className="py-20 md:py-32 bg-gradient-to-br from-neutral-mist via-white to-accent-sand/20 relative overflow-hidden"
    >
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary-blue/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-accent-gold/15 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-accent-sea/15 to-transparent rounded-full blur-2xl animate-pulse-slowest"></div>
        
                 {/* Nautical decorative elements */}
        
        {/* Floating seagull */}
        <div className="absolute bottom-32 left-1/6 opacity-15">
          <div className="w-12 h-12 animate-gull-float">
            <svg viewBox="0 0 24 12" fill="currentColor" className="text-accent-gold w-full h-full">
              <path d="M0,6 Q6,0 12,6 Q18,12 24,6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </div>
        
        {/* Wave patterns */}
        <div className="absolute bottom-0 left-0 w-full h-20 opacity-10">
          <svg viewBox="0 0 1440 120" className="w-full h-full">
            <path d="M0,60 Q360,20 720,60 T1440,60 L1440,120 L0,120 Z" fill="currentColor" className="text-primary-blue/20"/>
          </svg>
        </div>
      </div>

      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            
            <SectionHeading 
              title="Book a Call" 
              subtitle="Ready to Chart Your Digital Course?"
              centered={true}
            />
            
            <p className="text-xl text-primary-navy/80 max-w-4xl mx-auto mt-8 leading-relaxed">
              Schedule a conversation with our Harbor Springs tech experts. We'll discuss your business needs and chart the perfect technology solutions for your success.
            </p>
            
            {/* Decorative divider */}
            <div className="flex justify-center items-center mt-8">
              <div className="w-3 h-3 bg-accent-gold rounded-full animate-twinkle"></div>
              <div className="w-32 h-1 bg-gradient-to-r from-accent-gold via-primary-blue to-accent-sea rounded-full mx-4"></div>
              <div className="w-3 h-3 bg-accent-sea rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          {/* Enhanced Information Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Free Consultation Card */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-gull/30 hover:border-primary-blue/30 overflow-hidden">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Accent border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-blue/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-navy rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-primary-navy mb-3 text-center group-hover:text-primary-blue transition-colors duration-300">Free Consultation</h3>
                <p className="text-primary-navy/70 text-center leading-relaxed">No cost, no commitment - just honest tech advice from your local Harbor Springs neighbors</p>
              </div>
            </div>
            
            {/* Custom Solutions Card */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-gull/30 hover:border-accent-sea/30 overflow-hidden">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-sea/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Accent border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-sea to-accent-sea/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-sea to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-primary-navy mb-3 text-center group-hover:text-accent-sea transition-colors duration-300">Custom Solutions</h3>
                <p className="text-primary-navy/70 text-center leading-relaxed">Tailored technology strategies designed specifically for your Harbor Springs business</p>
              </div>
            </div>
            
            {/* Local Support Card */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-gull/30 hover:border-accent-gold/30 overflow-hidden">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Accent border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold to-accent-gold/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-primary-navy mb-3 text-center group-hover:text-accent-gold transition-colors duration-300">Local Support</h3>
                <p className="text-primary-navy/70 text-center leading-relaxed">Ongoing support and maintenance from your trusted Harbor Springs technology partners</p>
              </div>
            </div>
          </div>

          {/* Enhanced Calendly Embed Container */}
          <div className={`transition-all duration-1000 ${calendlyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-5xl mx-auto overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-accent-gold/30 rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-accent-gold/30 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-accent-gold/30 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-accent-gold/30 rounded-br-3xl"></div>
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 via-transparent to-accent-gold/5 rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/images/logos/logo_transparent.svg"
                      alt="Harbor Tech Logo"
                      width={128}
                      height={128}
                      className="w-32 h-32 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary-navy mb-2">Schedule Your Free Consultation</h3>
                  <p className="text-primary-navy/70">Pick a time that works for you - we'll handle the rest</p>
                </div>
                
                                 {/* Calendly Embed with enhanced styling */}
                 <div className="relative">
                   <CalendlyEmbed 
                     className="w-full rounded-2xl overflow-hidden shadow-inner"
                     url="https://calendly.com/samuelih-umich/30min"
                   />
                 </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA with contact info */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-300 ${calendlyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-accent-sand/30 via-white/50 to-accent-sand/30 rounded-2xl p-8 border border-accent-gold/20 max-w-3xl mx-auto">
              <h4 className="font-display text-xl text-primary-navy mb-4">Prefer to call directly?</h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+17348348005" 
                  className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-navy transition-colors font-medium text-lg group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                  </svg>
                  Sam: (734) 834-8005
                </a>
                <div className="text-neutral-500">or</div>
                <a 
                  href="tel:+12313303682" 
                  className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-navy transition-colors font-medium text-lg group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                  </svg>
                  Max: (231) 330-3682
                </a>
              </div>
              <p className="text-sm text-primary-navy/60 mt-4">Available during regular business hours</p>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Nautical rope border at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x opacity-30" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23F0B254" stroke-width="2"/%3E%3C/svg%3E")',
        backgroundSize: '80px 8px'
      }}></div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes pulse-slowest {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
        
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gull-float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(20px); }
          50% { transform: translateY(-5px) translateX(40px); }
          75% { transform: translateY(-15px) translateX(20px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
        
        .animate-pulse-slowest {
          animation: pulse-slowest 8s ease-in-out infinite;
        }
        
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        
        .animate-gull-float {
          animation: gull-float 15s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CalendlySection; 