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
              <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg border border-white/20 mb-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-navy">
                  The Harbor Tech <span className="text-accent-gold">Advantage</span>
                </h2>
              </div>
              <p className="text-xl text-primary-navy/80 max-w-3xl mx-auto">
                Unlike other consulting companies, we believe in empowering your team with knowledge and tools, not creating dependency.
              </p>
            </div>
            
            {/* Main content card with enhanced design */}
            <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl mb-12 border border-white/20 transition-all duration-1000 delay-300 ${harborAIVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center max-w-4xl mx-auto">
                {/* Simplified Content */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-3xl font-display font-bold text-primary-navy mb-6">
                      <span className="relative inline-block">
                        No Hidden Costs, Maximum Value
                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
                      </span>
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-neutral-700 leading-relaxed text-center">
                      Unlike other Technology Consulting Companies, we set you up with training, cheatsheets, and a custom made chatbot trained on over <strong className="text-primary-navy">3000 pages of IT support, POS manuals, and the top 150 most asked support questions</strong>...
                    </p>
                    
                    <div className="bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 rounded-xl p-6 border-l-4 border-accent-gold max-w-2xl mx-auto">
                      <p className="text-xl font-bold text-accent-gold mb-2 text-center">ALL FOR NO ADDITIONAL COST!</p>
                      <p className="text-neutral-700 text-center">While others charge extra for training and support materials, we include everything upfront.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Features Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${harborAIVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                    <path d="M1.984 14c0-5.523 4.478-10 10-10h.57a3 3 0 0 1 2.785 1.886l2.466 6.165a4 4 0 0 1-.886 4.314l-3.076 3.077c-.493.493-.701 1.21-.499 1.878a20.05 20.05 0 0 0 13.32 13.32c.668.203 1.385-.005 1.879-.498l3.076-3.077a4 4 0 0 1 4.314-.885l6.166 2.466a3 3 0 0 1 1.885 2.785V36c0 5.523-4.477 10-10 10h-.5C16.374 46 2.45 32.358 1.996 15.358a.02.02 0 0 0-.006-.013a.02.02 0 0 1-.006-.013zM43.5 11h-7.273a.727.727 0 0 1-.547-1.206l6.614-7.56a.688.688 0 0 1 1.206.454zm0 0h2m-2 0v3"/>
                    <path d="M31.5 14h-8v-1.705a3 3 0 0 1 1.797-2.748l4.452-1.948A2.922 2.922 0 0 0 28.578 2H26.5a3 3 0 0 0-2.83 2"/>
                  </svg>
                </div>
                                 <h4 className="text-xl font-bold text-primary-navy mb-3">24/7 Support</h4>
                 <p className="text-neutral-600 leading-relaxed">Get instant answers anytime with our comprehensive support system that's always available when you need it.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 512 512" fill="currentColor" fillRule="evenodd">
                    <path d="M384 319.997V85.331H149.333c-11.782 0-21.333 9.551-21.333 21.333v216.975a63.9 63.9 0 0 1 21.333-3.642zM85.333 106.664v298.667c0 35.346 28.654 64 64 64h277.334v-85.334h-21.334v42.667h-256c-11.782 0-21.333-9.551-21.333-21.333v-21.334c0-11.782 9.551-21.333 21.333-21.333h277.334v-320H149.333c-35.346 0-64 28.654-64 64m149.334 170.667v-85.334h42.666v85.334zM256 170.664c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.334-21.333-21.334s-21.333 9.552-21.333 21.334s9.551 21.333 21.333 21.333M149.333 383.997H384v21.334H149.333z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-primary-navy mb-3">Visual Step-by-Step Guides</h4>
                <p className="text-neutral-600 leading-relaxed">Beautiful, easy-to-follow cheat sheets that turn complex procedures into simple steps your team can master.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-seafoam to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M10.386 9.836a2.5 2.5 0 1 1 3.611.667C15.212 11.173 16 12.46 16 14v1.5a.5.5 0 1 1-1 0V14c0-1.724-1.276-3-3-3c-.91 0-1.298-.02-1.805-.122c-1.25-.254-2.333-1-3.585-2.566a.5.5 0 1 1 .78-.624c.9 1.124 1.653 1.74 2.434 2.043c.155.052.345.083.562.105m1.785.128q.125.015.251.034L12.5 10a1.5 1.5 0 1 0-.33-.036M9.78 11.97a.5.5 0 0 1 .5.5a1 1 0 0 1-.05.231c-.179.38-.23.774-.23 1.302v1.5a.5.5 0 1 1-1 0v-1.5c0-.657.072-1.186.307-1.696a.5.5 0 0 1 .473-.337M5.958 5.772a.5.5 0 0 1-.78.625L3.11 3.812a.5.5 0 1 1 .78-.624zM1 11h5.5a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5V.5A.5.5 0 0 1 .5 0h12a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0V1H1z"/>
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