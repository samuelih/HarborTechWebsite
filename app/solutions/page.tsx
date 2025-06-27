"use client";

import Link from 'next/link';
import Image from 'next/image';
import BusinessTypeSwitcher from '../components/BusinessTypeSwitcher';
import { useEffect, useState } from 'react';

const SolutionsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [workSectionVisible, setWorkSectionVisible] = useState(false);
  const [solutionsSectionVisible, setSolutionsSectionVisible] = useState(false);


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
    const solutionsSection = document.getElementById('solutions');

    if (workSection) workObserver.observe(workSection);
    if (solutionsSection) solutionsObserver.observe(solutionsSection);

    return () => {
      workObserver.disconnect();
      solutionsObserver.disconnect();
    };
  }, []);

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
                Fully refundable and personalized solutions.
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
              </span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Choose only what you need—easy, local, done right.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* How We Work Section */}
      <section id="work-section" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${workSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Here's how we work
            </h2>
          </div>
          
          {/* Flowchart */}
          <div className="max-w-6xl mx-auto">
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 transition-all duration-1000 delay-300 ${workSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Step 1: We talk */}
              <div className="relative">
                <div className="bg-neutral-mist rounded-lg p-6 h-full border-2 border-transparent hover:border-accent-gold transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 mx-auto shadow-md border-2 border-nautical-navy">
                    <span className="text-nautical-navy font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-center mb-3 text-nautical-navy">
                    Let's Talk Shop
                  </h3>
                  <p className="text-neutral-600 text-center text-sm leading-relaxed">
                    Over coffee at Johan's or right on your sales floor…
                  </p>
                </div>
                {/* Arrow for larger screens */}
                <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Step 2: The Tech Audit */}
              <div className="relative">
                <div className="bg-neutral-mist rounded-lg p-6 h-full border-2 border-transparent hover:border-accent-gold transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 mx-auto shadow-md border-2 border-nautical-navy">
                    <span className="text-nautical-navy font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-center mb-3 text-nautical-navy">
                    Shop Walk-through
                  </h3>
                  <p className="text-neutral-600 text-center text-sm leading-relaxed">
                    We swing by in person and cover eight key areas—POS, inventory, customer data, and more…
                  </p>
                </div>
                {/* Arrow for larger screens */}
                <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Step 3: Post Audit Proposal */}
              <div className="relative">
                <div className="bg-neutral-mist rounded-lg p-6 h-full border-2 border-transparent hover:border-accent-gold transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 mx-auto shadow-md border-2 border-nautical-navy">
                    <span className="text-nautical-navy font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-center mb-3 text-nautical-navy">
                    Your Harbor Plan
                  </h3>
                  <p className="text-neutral-600 text-center text-sm leading-relaxed">
                    You get a clear one-pager: what we heard, the upgrades and workflows we recommend…
                  </p>
                </div>
                {/* Arrow for larger screens */}
                <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Step 4: We install at your convenience */}
              <div className="relative">
                <div className="bg-neutral-mist rounded-lg p-6 h-full border-2 border-transparent hover:border-accent-gold transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 mx-auto shadow-md border-2 border-nautical-navy">
                    <span className="text-nautical-navy font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-center mb-3 text-nautical-navy">
                    Install & Training
                  </h3>
                  <p className="text-neutral-600 text-center text-sm leading-relaxed">
                    We work around your hours—before open, after close, whenever. Keep your systems running while we train your crew and get your upgrade fully implemented.
                  </p>
                </div>
                {/* Arrow for larger screens */}
                <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Step 5: Payment */}
              <div className="relative">
                <div className="bg-neutral-mist rounded-lg p-6 h-full border-2 border-transparent hover:border-accent-gold transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 mx-auto shadow-md border-2 border-nautical-navy">
                    <span className="text-nautical-navy font-bold text-lg">5</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-center mb-3 text-nautical-navy">
                    Payment
                  </h3>
                  <p className="text-neutral-600 text-center text-sm leading-relaxed">
                    Pay all at once or spread it over 24 months; either way, the number we quote is the number you pay. No surprise add-ons, ever.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Business Type Switcher */}
      <section id="solutions" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-neutral-mist via-white to-neutral-mist overflow-hidden">
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`transition-all duration-1000 ${solutionsSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <BusinessTypeSwitcher />
          </div>
          
          {/* FAQ Section */}
          <div className={`transition-all duration-1000 delay-300 ${solutionsSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-4xl mx-auto mt-16">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-center mb-8 text-nautical-navy">
                Frequently Asked Questions
              </h3>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-neutral-gull/30">
                <div className="space-y-6">
                  {/* First FAQ */}
                  <div className="border-b border-neutral-gull/30 pb-6">
                    <h4 className="text-lg font-bold text-nautical-navy mb-3">
                      What's the refund policy?
                    </h4>
                    <p className="text-neutral-600 leading-relaxed">
                      Every project is 100% refundable until installation begins—no risk, no fine print.
                    </p>
                  </div>
                  
                  {/* Placeholder for future FAQs */}
                  <div className="text-center py-4">
                    <p className="text-neutral-500 italic">
                      More frequently asked questions will be added here based on customer feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

export default SolutionsPage; 