"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const OptionsPricingPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [supportOptionsVisible, setSupportOptionsVisible] = useState(false);
  const [harborAIVisible, setHarborAIVisible] = useState(false);
  const [ctaSectionVisible, setCtaSectionVisible] = useState(false);

  useEffect(() => {
    // Hero animation triggers immediately
    setHeroVisible(true);
    
    // Create intersection observers for other sections
    const observerOptions = { threshold: 0.1 };
    
    // Observer for support options section
    const supportOptionsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSupportOptionsVisible(true);
        }
      },
      observerOptions
    );

    // Observer for HarborAI section
    const harborAIObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHarborAIVisible(true);
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
    const supportOptionsSection = document.getElementById('support-options-section');
    const harborAISection = document.getElementById('harborai-section');
    const ctaSection = document.getElementById('cta-section');

    if (supportOptionsSection) supportOptionsObserver.observe(supportOptionsSection);
    if (harborAISection) harborAIObserver.observe(harborAISection);
    if (ctaSection) ctaObserver.observe(ctaSection);

    return () => {
      supportOptionsObserver.disconnect();
      harborAIObserver.disconnect();
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
                Support Options
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
              </span>
              {" "}
              <span className="text-accent-gold">& Pricing</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Choose the support level that works best for your business. No contracts required.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Support Options Section */}
      <section id="support-options-section" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative illustrations */}
        <div className={`absolute top-20 right-5 w-32 h-32 opacity-10 transition-all duration-1000 delay-300 ${supportOptionsVisible ? 'opacity-10 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Image 
            src="/images/illustrations/galley.svg" 
            alt="" 
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-1000 ${supportOptionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
                Two Tiers, One Goal
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
                Comprehensive support packages designed to keep your business technology running smoothly.
              </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${supportOptionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Free Package */}
              <div className="bg-primary-blue/5 rounded-xl p-8 h-full border-2 border-primary-blue/20 relative overflow-hidden hover:border-primary-blue/40 transition-all duration-300">
                <div className="absolute top-4 right-4 bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-bold">
                  Always Included
                </div>
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-blue rounded-full mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,6H13V9H16V11H13V14H11V11H8V9H11V6Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-center mb-3 text-primary-navy">Foundation Package</h3>
                  <p className="text-5xl font-bold text-primary-navy mb-2">$0</p>
                  <p className="text-neutral-600 text-center">Included whenever you work with us</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-primary-blue/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700"><strong>HarborAI Access</strong> - Custom chatbot support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-blue/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700"><strong>30 minutes/month</strong> support phone calls</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-blue/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700"><strong>2 in-person check-ins</strong> per year</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-blue/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700"><strong>Training & cheat sheets</strong> for your team</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/contact" className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-navy transition-colors inline-block">
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Premium Package */}
              <div className="bg-accent-gold/10 rounded-xl p-8 h-full border-2 border-accent-gold/30 relative overflow-hidden hover:border-accent-gold/50 transition-all duration-300">
                <div className="absolute top-4 right-4 bg-accent-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent-gold rounded-full mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5,16L3,5H1V3H4L6,14H18.5L20,6H8V4H21A1,1 0 0,1 22,5A1,1 0 0,1 21,6L19.5,15H6.5L5.5,18H19V20H5C4.5,20 4,19.5 4,19A1,1 0 0,1 5,18L5.5,16H5Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-center mb-3 text-primary-navy">Premium Package</h3>
                  <p className="text-5xl font-bold text-primary-navy mb-2">$250</p>
                  <p className="text-neutral-600 text-center">+ $25/hr for additional support</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700"><strong>Everything in Foundation</strong> plus...</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700"><strong>Remote access</strong> for instant support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700"><strong>4 in-person check-ins</strong> per year</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700"><strong>Unlimited support</strong> phone calls</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/contact" className="bg-accent-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-gold/90 transition-colors inline-block">
                    Upgrade to Premium
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HarborAI Section */}
      <section id="harborai-section" className="py-16 sm:py-20 md:py-24 bg-accent-sand relative overflow-hidden">
        {/* Decorative waves */}
        <div className="absolute top-0 left-0 w-full h-2 bg-repeat-x opacity-30" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%230E2A47" stroke-width="1"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-1000 ${harborAIVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block bg-accent-gold/20 px-4 py-2 rounded-lg text-primary-navy font-medium mb-6">
                What Makes Us Different
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-primary-navy">
                The HarborAI Advantage
              </h2>
            </div>
            
            <div className={`bg-white rounded-xl p-8 md:p-12 shadow-lg transition-all duration-1000 delay-300 ${harborAIVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                 {/* Content */}
                 <div>
                   <div className="mb-6">
                     <h3 className="text-2xl font-display font-bold text-primary-navy">No Additional Cost!</h3>
                   </div>
                  
                  <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                    Unlike other Technology Consulting Companies, we set you up with training, cheatsheets, and a custom made chatbot trained on over <strong>3000 pages of IT support, POS manuals, and the top 150 most asked support questions</strong>... 
                    <span className="text-accent-gold font-semibold">ALL FOR NO ADDITIONAL COST!</span>
                  </p>
                  
                                     <div className="bg-primary-navy/5 rounded-lg p-6 border-l-4 border-accent-gold">
                     <p className="text-neutral-700 font-medium">
                       Companies like <strong>Common Angle</strong> poorly set up your technology systems to intentionally make you waste an afternoon and potentially thousands of dollars.
                     </p>
                   </div>
                </div>
                
                                 {/* Illustration */}
                 <div className="flex justify-center">
                   <div className="w-64 h-64 bg-gradient-to-br from-accent-gold/20 to-primary-blue/20 rounded-full flex items-center justify-center">
                     <Image 
                       src="/images/illustrations/sextant.svg" 
                       alt="Nautical Navigation Tool" 
                       width={180}
                       height={180}
                       className="object-contain"
                     />
                   </div>
                 </div>
              </div>
              
                             {/* Features grid */}
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                 <div className="text-center">
                   <h4 className="font-bold text-primary-navy mb-2">24/7 AI Support</h4>
                   <p className="text-sm text-neutral-600">Get instant answers anytime</p>
                 </div>
                 <div className="text-center">
                   <h4 className="font-bold text-primary-navy mb-2">Visual Guides</h4>
                   <p className="text-sm text-neutral-600">Step-by-step cheat sheets</p>
                 </div>
                 <div className="text-center">
                   <h4 className="font-bold text-primary-navy mb-2">Team Training</h4>
                   <p className="text-sm text-neutral-600">Empower your entire staff</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta-section" className="py-16 sm:py-20 bg-neutral-mist">
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
                Need help choosing?
              </h2>
              <p className="text-lg sm:text-xl text-neutral-700 mb-8 max-w-xl">
                Let's chat about your specific needs and find the perfect support option for your business.
              </p>
              <Link 
                href="/contact" 
                className="bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-navy transition-colors inline-flex items-center gap-2"
              >
                Get Personalized Recommendation
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

export default OptionsPricingPage; 