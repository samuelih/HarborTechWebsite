"use client";

import Hero from './components/home/Hero';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import SolutionsSection from './components/home/SolutionsSection';
import AboutSection from './components/home/AboutSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import BlogSection from './components/home/BlogSection';
import CTASection from './components/home/CTASection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Section Divider */}
      <div className="border-t border-neutral-gull/60"></div>

      {/* Our Services */}
      <SolutionsSection />

      {/* Enhanced Nautical Section Divider */}
      <div className="relative py-8 bg-gradient-to-r from-neutral-mist via-white to-neutral-mist overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 left-10 w-16 h-16 bg-accent-gold rounded-full blur-2xl"></div>
          <div className="absolute bottom-2 right-20 w-20 h-20 bg-primary-blue rounded-full blur-3xl"></div>
        </div>
        
        {/* Main nautical rope divider */}
        <div className="relative z-10">
          {/* Top rope pattern */}
          <div className="w-full h-2 bg-repeat-x opacity-70 mb-4" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23F0B254" stroke-width="2"/%3E%3C/svg%3E")',
            backgroundSize: '80px 8px'
          }}></div>
          
          {/* Center anchor icon */}
          <div className="flex justify-center items-center">
            <div className="bg-white rounded-full p-4 shadow-lg border-2 border-accent-gold/20">
              <svg className="w-8 h-8 text-primary-navy" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M21,9V7L15,1H9V3H13.5L19,8.5V9A6,6 0 0,1 13,15H11V12A2,2 0 0,0 9,10H8V8A2,2 0 0,0 6,6H4A2,2 0 0,0 2,8V16A2,2 0 0,0 4,18H6A2,2 0 0,0 8,16V14H9A2,2 0 0,0 11,12V15H13A6,6 0 0,1 19,9H21M6,16H4V8H6V16Z" />
              </svg>
            </div>
          </div>
          
          {/* Bottom rope pattern */}
          <div className="w-full h-2 bg-repeat-x opacity-70 mt-4" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23F0B254" stroke-width="2"/%3E%3C/svg%3E")',
            backgroundSize: '80px 8px'
          }}></div>
        </div>
        
        {/* Subtle wave pattern overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-repeat-x opacity-30" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'4\' viewBox=\'0 0 40 4\'%3E%3Cpath d=\'M0,2 Q10,0 20,2 T40,2\' stroke=\'%23205d96\' stroke-width=\'1\' fill=\'none\'/%3E%3C/svg%3E")',
          backgroundSize: '40px 4px'
        }}></div>
      </div>

      {/* Why Choose Us? */}
      <WhyChooseUsSection />

      {/* Section Divider */}
      <div className="border-t border-neutral-gull/60"></div>

      {/* Our Mission */}
      <AboutSection />

      {/* Ready to Chart Your Course? */}
      <CTASection />
    </>
  );
} 