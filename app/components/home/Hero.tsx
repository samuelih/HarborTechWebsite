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
    <section className="relative min-h-[80vh] flex items-center bg-neutral-mist overflow-hidden pt-36 sm:pt-32 md:pt-24">
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
                className="btn-primary btn-large inline-flex items-center justify-center"
              >
                Schedule a free consultation
              </Link>
              <Link 
                href="#services" 
                className="btn-secondary btn-large inline-flex items-center justify-center"
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