"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const OptionsPricingPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [supportOptionsVisible, setSupportOptionsVisible] = useState(false);
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
    const ctaSection = document.getElementById('cta-section');

    if (supportOptionsSection) supportOptionsObserver.observe(supportOptionsSection);
    if (ctaSection) ctaObserver.observe(ctaSection);

    return () => {
      supportOptionsObserver.disconnect();
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
        <div className={`absolute bottom-20 left-5 w-24 h-24 opacity-10 transition-all duration-1000 delay-500 ${supportOptionsVisible ? 'opacity-10 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Image 
            src="/images/illustrations/rowboat2.svg" 
            alt="" 
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-1000 ${supportOptionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
                Support Options for Every Need
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
                From quick remote help to comprehensive retainer packages, we've got you covered.
              </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${supportOptionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Option 1 */}
              <div className="bg-neutral-mist rounded-lg p-8 h-full border-2 border-transparent hover:border-accent-gold transition-colors">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-nautical-navy rounded-full mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-center mb-3 text-nautical-navy">Remote Help</h3>
                  <p className="text-4xl font-bold text-nautical-navy mb-2">$95/hr</p>
                  <p className="text-neutral-600 text-center">(15-min blocks)</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Phone & screen share support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Pay only when needed</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Quick fixes & guidance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Available during business hours</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/contact" className="btn-secondary inline-block">
                    Get Remote Help
                  </Link>
                </div>
              </div>

              {/* Option 2 */}
              <div className="bg-neutral-mist rounded-lg p-8 h-full border-2 border-transparent hover:border-accent-gold transition-colors">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-nautical-navy rounded-full mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,2H5A2,2 0 0,0 3,4V18A2,2 0 0,0 5,20H9L12,23L15,20H19A2,2 0 0,0 21,18V4A2,2 0 0,0 19,2M5,4H19V18H14.17L12,20.17L9.83,18H5V4M12,5.5A1.5,1.5 0 0,0 10.5,7A1.5,1.5 0 0,0 12,8.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 12,5.5M12,10C9.79,10 8,11.79 8,14H10C10,12.9 10.9,12 12,12C13.1,12 14,12.9 14,14C14,14.72 13.37,15.26 12.74,15.79C12.09,16.34 11.44,17 11.44,18H12.56C12.56,17.42 13.05,17.02 13.6,16.56C14.25,16 15,15.38 15,14C15,11.79 13.21,10 12,10Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-center mb-3 text-nautical-navy">Onsite Dispatch</h3>
                  <p className="text-4xl font-bold text-nautical-navy mb-2">$125 + $95/hr</p>
                  <p className="text-neutral-600 text-center">Service call + hourly</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">In-person assistance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Hardware repairs & replacements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Complex troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Staff training & setup</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/contact" className="btn-secondary inline-block">
                    Schedule Visit
                  </Link>
                </div>
              </div>

              {/* Option 3 */}
              <div className="bg-accent-gold/10 rounded-lg p-8 h-full border-2 border-accent-gold/30 relative overflow-hidden">
                {/* Popular badge */}
                <div className="absolute top-4 right-4 bg-accent-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-nautical-navy rounded-full mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-center mb-3 text-nautical-navy">Mini-Retainer</h3>
                  <p className="text-4xl font-bold text-nautical-navy mb-2">$650/mo</p>
                  <p className="text-neutral-600 text-center">10 hrs (rolls over 30 days)</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Priority response</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Hours roll over</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Cancel anytime</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Remote & onsite included</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/contact" className="btn-primary inline-block">
                    Start Retainer
                  </Link>
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
                className="btn-primary inline-flex items-center gap-2"
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