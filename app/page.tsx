"use client";

import Hero from './components/home/Hero';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import ServicesSection from './components/home/ServicesSection';
import AboutSection from './components/home/AboutSection';
import PricingSection from './components/home/PricingSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import BlogSection from './components/home/BlogSection';
import CTASection from './components/home/CTASection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Problem Statement - Why Retail Tech is Hard */}
      <section id="problem-statement" className="py-16 bg-gradient-to-b from-neutral-mist to-primary-sky/10 relative overflow-hidden">
        {/* Decorative anchor icon */}
        <div className="absolute top-0 right-0 w-48 h-48 text-primary-navy/5 transform rotate-12 -translate-y-1/4 translate-x-1/4">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M8.5,9A6.5,6.5 0 0,0 2,15.5A6.5,6.5 0 0,0 8.5,22A6.5,6.5 0 0,0 15,15.5V13.5H19V10.5H15V8.5A6.5,6.5 0 0,0 8.5,2A6.5,6.5 0 0,0 2,8.5A6.5,6.5 0 0,0 8.5,15H11V15.5A3.5,3.5 0 0,1 7.5,19A3.5,3.5 0 0,1 4,15.5A3.5,3.5 0 0,1 7.5,12H8.5V9M8.5,5A3.5,3.5 0 0,1 12,8.5V9H8.5A3.5,3.5 0 0,1 5,5.5A3.5,3.5 0 0,1 8.5,2A3.5,3.5 0 0,1 12,5.5V8.5H11V5.5A2.5,2.5 0 0,0 8.5,3A2.5,2.5 0 0,0 6,5.5A2.5,2.5 0 0,0 8.5,8H11V12H8.5A2.5,2.5 0 0,0 6,14.5A2.5,2.5 0 0,0 8.5,17A2.5,2.5 0 0,0 11,14.5V12A5.5,5.5 0 0,1 8.5,13A5.5,5.5 0 0,1 3,7.5A5.5,5.5 0 0,1 8.5,2A5.5,5.5 0 0,1 14,7.5V10.5H15V13.5H14V15.5A5.5,5.5 0 0,1 8.5,21A5.5,5.5 0 0,1 3,15.5A5.5,5.5 0 0,1 8.5,10H11V7.5A5.5,5.5 0 0,1 8.5,3" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <span className="inline-block bg-accent-seafoam/20 text-primary-navy font-medium px-4 py-1.5 rounded-full mb-3">Local Business Challenges</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-2 text-primary-navy">
              Why Tech Is <span className="text-primary-blue">Hard</span> for Harbor Springs Retailers
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-primary-sky/20 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-start mb-4">
                  <div className="bg-primary-navy/10 rounded-full p-2 mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-navy mb-1">Tight Budgets</h4>
                    <p className="text-[#22548c]">Small family shops can't afford big-box tech budgets or ongoing monthly fees.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-navy/10 rounded-full p-2 mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-navy mb-1">Outdated Systems</h4>
                    <p className="text-[#22548c]">Old cash registers and scattered data across multiple platforms.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start mb-4">
                  <div className="bg-primary-navy/10 rounded-full p-2 mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-navy mb-1">Staff Challenges</h4>
                    <p className="text-[#22548c]">Seasonal workers need simple systems they can learn quickly.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-navy/10 rounded-full p-2 mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 8H17.19C16.74 7.22 16.12 6.55 15.37 6.04L17 4.41L15.59 3L13.42 5.17C12.96 5.06 12.5 5 12 5C11.5 5 11.04 5.06 10.59 5.17L8.41 3L7 4.41L8.62 6.04C7.88 6.55 7.26 7.22 6.81 8H4V10H6.09C6.04 10.33 6 10.66 6 11V12H4V14H6V15C6 15.34 6.04 15.67 6.09 16H4V18H6.81C7.85 19.79 9.78 21 12 21C14.22 21 16.15 19.79 17.19 18H20V16H17.91C17.96 15.67 18 15.34 18 15V14H20V12H18V11C18 10.66 17.96 10.33 17.91 10H20V8Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-navy mb-1">Online Competition</h4>
                    <p className="text-[#22548c]">Need to compete online without big-box store resources.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-primary-sky/20">
              <p className="text-center font-medium text-primary-blue">
                That's why we created transparent, fixed-cost solutions for Harbor Springs retailers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <PricingSection />

      {/* "Why Harbor Tech?" Ribbon */}
      <WhyChooseUsSection />

      {/* Core Services */}
      <ServicesSection />

      {/* About Harbor Tech */}
      <AboutSection />

      {/* Final CTA */}
      <CTASection />

      {/* Add sticky mobile CTA for better conversion */}
      <div className="fixed bottom-0 left-0 w-full md:hidden bg-white border-t border-gray-200 shadow-lg py-3 px-4 z-40 flex justify-center">
        <a 
          href="/contact" 
          className="btn-primary py-2 w-full max-w-xs flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
          </svg>
          Book Your Free Harbor Check
        </a>
      </div>
    </>
  );
} 