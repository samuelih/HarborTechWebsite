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
    <section className="relative min-h-[70vh] flex items-center bg-neutral-mist overflow-hidden pt-24">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-h1 font-display font-bold text-primary-navy mb-6 leading-tight">
              Navigate technology with a trusted Harbor partner
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-blue hover:bg-primary-sky text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule a free consultation
              </Link>
              <Link 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-navy font-semibold rounded-lg transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right Column: Large Lighthouse Illustration */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative max-w-2xl mx-auto">
              <Image 
                src="/images/illustrations/lighthouse.svg" 
                alt="Harbor Tech Lighthouse - Guiding your business through technology" 
                width={1200} 
                height={1360}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 