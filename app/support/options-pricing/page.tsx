"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const OptionsPricingPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [supportOptionsVisible, setSupportOptionsVisible] = useState(false);
  const [harborAIVisible, setHarborAIVisible] = useState(false);

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

    // Observe sections
    const supportOptionsSection = document.getElementById('support-options-section');
    const harborAISection = document.getElementById('harborai-section');

    if (supportOptionsSection) supportOptionsObserver.observe(supportOptionsSection);
    if (harborAISection) harborAIObserver.observe(harborAISection);

    return () => {
      supportOptionsObserver.disconnect();
      harborAIObserver.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-nautical-gradient overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="relative inline-block">
                Fully refundable and personalized.
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
              </span>
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
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-blue rounded-full mb-6 mx-auto">
                    <Image
                      src="/images/icons/general/crown.svg"
                      alt="Crown"
                      width={32}
                      height={32}
                      className="filter brightness-0 invert"
                    />
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
                    <span className="text-neutral-700"><strong>1 hour/month</strong> support phone calls</span>
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
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent-gold rounded-full mb-6 mx-auto">
                    <Image
                      src="/images/icons/general/crown-star.svg"
                      alt="Crown with Star"
                      width={32}
                      height={32}
                      className="filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-center mb-3 text-primary-navy">Premium Package</h3>
                  <p className="text-5xl font-bold text-primary-navy mb-2">$250+$25/hr</p>
                  <p className="text-neutral-600 text-center">For those who needadditional support</p>
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

      {/* Enhanced Harbor Tech Advantage Section */}
      <section id="harborai-section" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-accent-sand to-primary-sky relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-repeat-x opacity-30" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%230E2A47" stroke-width="1"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-accent-gold/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-primary-blue/10 rounded-full animate-pulse-slower"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 ${harborAIVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block bg-accent-gold/20 px-6 py-3 rounded-full text-primary-navy font-medium mb-8 shadow-sm">
                <svg className="w-5 h-5 inline-block mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
                </svg>
                What Makes Us Different
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-8 text-primary-navy">
                The Harbor Tech <span className="text-accent-gold">Advantage</span>
              </h2>
              <p className="text-xl text-primary-navy/80 max-w-3xl mx-auto">
                Unlike other consulting companies, we believe in empowering your team with knowledge and tools, not creating dependency.
              </p>
            </div>
            
            {/* Main content card with enhanced design */}
            <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl mb-12 border border-white/20 transition-all duration-1000 delay-300 ${harborAIVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Enhanced Content */}
                <div>
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9,11H15L13,9L15,7H9V9H11L9,11M7,9V7L9,5V7H15V5L17,7V9L15,11V13H17V15L15,17V15H9V17L7,15V13L9,11V9H7Z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-display font-bold text-primary-navy">No Hidden Costs, Maximum Value</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-neutral-700 leading-relaxed">
                      Unlike other Technology Consulting Companies, we set you up with training, cheatsheets, and a custom made chatbot trained on over <strong className="text-primary-navy">3000 pages of IT support, POS manuals, and the top 150 most asked support questions</strong>...
                    </p>
                    
                    <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 rounded-xl p-6 border-l-4 border-accent-gold">
                      <p className="text-xl font-bold text-accent-gold mb-2">ALL FOR NO ADDITIONAL COST!</p>
                      <p className="text-neutral-700">While others charge extra for training and support materials, we include everything upfront.</p>
                    </div>
                    
                    <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                      <div className="flex items-start">
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" viewBox="0 0 24 24">
                           <path fill="currentColor" fill-rule="evenodd" d="M7.25 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 2.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m2.775 9.763A14.5 14.5 0 0 0 12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369c2.868 0 4.81-.254 6.12-.741c1.179-.44 1.877-1.082 2.25-1.892a4.748 4.748 0 0 0 .989-7.476A4.74 4.74 0 0 0 18 11.25c-1.245 0-2.378.48-3.225 1.263M6.71 14.972c-1.34.753-1.96 1.677-1.96 2.528c0 1.308.04 2.044.723 2.6c.37.302.99.597 2.05.811c1.057.214 2.502.339 4.476.339c2.578 0 4.24-.213 5.311-.55a4.74 4.74 0 0 1-2.67-1.341A4.74 4.74 0 0 1 13.251 16c0-.768.181-1.493.505-2.135A13 13 0 0 0 12 13.75c-2.105 0-3.973.482-5.289 1.222M14.751 16a3.25 3.25 0 0 1 4.955-2.767l-4.473 4.473A3.23 3.23 0 0 1 14.75 16m1.543 2.767l4.473-4.473a3.25 3.25 0 0 1-4.473 4.473" clip-rule="evenodd"/>
                         </svg>
                        <div>
                          <p className="text-neutral-700 font-medium">
                            <strong>Warning:</strong> Companies like <strong>Common Angle</strong> poorly set up your technology systems to intentionally make you waste time and potentially thousands of dollars on "emergency" support calls.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Visual Element */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-accent-gold/20 via-primary-blue/10 to-accent-seafoam/20 rounded-3xl flex items-center justify-center shadow-2xl">
                      <div className="w-64 h-64 bg-gradient-to-br from-primary-navy/10 to-accent-gold/10 rounded-2xl flex items-center justify-center">
                        <svg className="w-32 h-32 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                        </svg>
                      </div>
                    </div>
                    {/* Floating elements */}
                    
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Features Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${harborAIVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.63,7 15.07,7.79 16,9C15.07,10.21 13.63,11 12,11C10.37,11 8.93,10.21 8,9C8.93,7.79 10.37,7 12,7Z" />
                  </svg>
                </div>
                                 <h4 className="text-xl font-bold text-primary-navy mb-3">24/7 Support</h4>
                 <p className="text-neutral-600 leading-relaxed">Get instant answers anytime with our comprehensive support system that's always available when you need it.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-primary-navy mb-3">Visual Step-by-Step Guides</h4>
                <p className="text-neutral-600 leading-relaxed">Beautiful, easy-to-follow cheat sheets that turn complex procedures into simple steps your team can master.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-seafoam to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16,4C18.11,4 19.85,5.74 19.85,7.85C19.85,9.96 18.11,11.7 16,11.7C13.89,11.7 12.15,9.96 12.15,7.85C12.15,5.74 13.89,4 16,4M16,13.7C18.67,13.7 24,15.04 24,17.7V20H8V17.7C8,15.04 13.33,13.7 16,13.7Z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-primary-navy mb-3">Complete Team Training</h4>
                <p className="text-neutral-600 leading-relaxed">Empower your entire staff with comprehensive training that builds confidence and reduces downtime.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>


    </div>
  );
};

export default OptionsPricingPage; 