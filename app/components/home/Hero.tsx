"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-neutral-mist overflow-hidden">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-h1 font-display font-bold text-primary-navy mb-6 leading-tight">
              Navigate technology with a trusted Harbor partner
            </h1>
            <p className="text-xl text-primary-sky mb-8 max-w-xl">
              We modernize your tech so you can focus on running the shop you love. No jargon, no surprise bills — just neighbors helping neighbors thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-blue hover:bg-primary-sky text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule a free consultation
              </Link>
              <Link 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right Column: Lighthouse Illustration */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              {/* Lighthouse SVG */}
              <div className="relative">
                <Image 
                  src="/images/illustrations/lighthouse.svg" 
                  alt="Harbor Tech Lighthouse - Guiding your business through technology" 
                  width={500} 
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                
                {/* Signal lines emanating from lighthouse */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none">
                  {/* Signal Line 1 */}
                  <div className="absolute top-0 left-1/2 w-32 h-1 bg-gradient-to-r from-primary-blue to-transparent transform -translate-x-1/2 rotate-12 opacity-60 animate-pulse"></div>
                  
                  {/* Signal Line 2 */}
                  <div className="absolute top-4 left-1/2 w-40 h-1 bg-gradient-to-r from-primary-sky to-transparent transform -translate-x-1/2 -rotate-12 opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  
                  {/* Signal Line 3 */}
                  <div className="absolute top-8 left-1/2 w-36 h-1 bg-gradient-to-r from-accent-sea to-transparent transform -translate-x-1/2 rotate-6 opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-gold/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary-sky/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 