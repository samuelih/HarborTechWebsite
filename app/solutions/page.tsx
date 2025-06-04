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
  const [ctaSectionVisible, setCtaSectionVisible] = useState(false);

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

    // Observer for CTA section
    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaSectionVisible(true);
        }
      },
      observerOptions
    );

    // Observe sections
    const workSection = document.getElementById('work-section');
    const solutionsSection = document.getElementById('solutions');
    const ctaSection = document.getElementById('cta-section');

    if (workSection) workObserver.observe(workSection);
    if (solutionsSection) solutionsObserver.observe(solutionsSection);
    if (ctaSection) ctaObserver.observe(ctaSection);

    return () => {
      workObserver.disconnect();
      solutionsObserver.disconnect();
      ctaObserver.disconnect();
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
                How We Can Help Your Shop
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
                  <div className="flex items-center justify-center w-12 h-12 bg-nautical-navy rounded-full mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-center mb-3 text-nautical-navy">
                    We talk.
                  </h3>
                  <p className="text-neutral-600 text-center text-sm leading-relaxed">
                    We take time to get to know you and understand how you operate your business. We look for pain points and where we can save you time.
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
                  <div className="flex items-center justify-center w-12 h-12 bg-nautical-navy rounded-full mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-center mb-3 text-nautical-navy">
                    The Tech Audit.
                  </h3>
                  <p className="text-neutral-600 text-center text-sm leading-relaxed">
                    We personally come into your shop and ask questions to understand 8 business related areas. After, we give you a{' '}
                    <span className="text-accent-gold font-bold text-base bg-accent-gold/10 px-2 py-1 rounded">
                      no bullshit, personalized, fixed quote
                    </span>
                    . We account for install, training, support and manufacturer fees all in one affordable price.
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
                  <div className="flex items-center justify-center w-12 h-12 bg-nautical-navy rounded-full mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-center mb-3 text-nautical-navy">
                    Post Audit Proposal
                  </h3>
                  <p className="text-neutral-600 text-center text-sm leading-relaxed">
                    You will receive a Post Audit Proposal that briefs: what we heard, recommended solutions, timeline, our scope and assumptions, and estimated flat rate-price (amount of hours to install typically varies)
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
                  <div className="flex items-center justify-center w-12 h-12 bg-nautical-navy rounded-full mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-center mb-3 text-nautical-navy">
                    We install at your convenience
                  </h3>
                  <p className="text-neutral-600 text-center text-sm leading-relaxed">
                    We will work whenever works best for you. We ensure your systems stay fully operational until employees are trained, everything is fully set-up, and we are confident your business is ready.
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
                  <div className="flex items-center justify-center w-12 h-12 bg-nautical-navy rounded-full mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-center mb-3 text-nautical-navy">
                    Payment
                  </h3>
                  <p className="text-neutral-600 text-center text-sm leading-relaxed">
                    Pay upfront or in monthly installs for up to 2 years; OUR PRICE DOESN'T CHANGE. We will work out what is best for you.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Business Type Switcher */}
      <section id="solutions" className="py-16 sm:py-20 md:py-24 bg-neutral-mist">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${solutionsSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <BusinessTypeSwitcher />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta-section" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${ctaSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Seagull illustration */}
            <div className={`flex justify-center items-center transition-all duration-1000 delay-300 ${ctaSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Image 
                src="/images/illustrations/seagull.svg" 
                alt="Seagull illustration" 
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            
            {/* Text and button */}
            <div className={`text-center md:text-left transition-all duration-1000 delay-500 ${ctaSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Anything catch your eye?
              </h2>
              <p className="text-lg sm:text-xl text-neutral-700 mb-8 max-w-xl">
                Let's chat about how we can help your shop grow—no tech jargon, just straight talk.
              </p>
              <Link 
                href="/contact" 
                className="btn-primary inline-flex items-center gap-2"
              >
                Let's Talk
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path 
                    d="M4 10h12m0 0l-4-4m4 4l-4 4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage; 