"use client";

import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';
import { useState, useEffect, useRef } from 'react';

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    { name: 'Smart POS Install', price: '$1,950' },
    { name: 'Online Store + Inventory Sync', price: '$2,450' },
    { name: 'Secure Wi-Fi Mesh', price: '$900' },
    { name: 'Cloud Backup & Doc Vault', price: '$650' },
    { name: 'AI Chatbot for Customer FAQs', price: '$1,850' },
    { name: 'Data Dashboard', price: '$1,200' },
    { name: 'Device Tune-up & Staff Training', price: '$600' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden" 
      id="packages"
      style={{
        background: 'linear-gradient(to bottom, #1E5086 0%, #4682B4 30%, #F8EFD4 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top wave pattern - Changed fill color to match with above section */}
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
          <svg
            className="absolute -top-10 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ transform: 'rotate(180deg)' }}
          >
            <path
              fill="#1E5086"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        
        {/* Add a soft gradient overlay for better blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent-sand/40"></div>
        
        {/* Add a subtle noise texture for better blending */}
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            mixBlendMode: 'overlay'
          }}
        ></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-primary-navy/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-60 h-60 rounded-full bg-primary-navy/5 blur-3xl"></div>
        
        {/* Nautical design elements */}
        <div className="absolute top-20 right-10 opacity-20">
          <Image
            src="/images/user/anchor.svg"
            alt="Nautical anchor decoration"
            width={80}
            height={80}
            className="rotate-12"
          />
        </div>
        <div className="absolute bottom-20 left-10 opacity-20">
          <Image
            src="/images/user/wheel.svg"
            alt="Ship wheel decoration"
            width={60}
            height={60}
            className="-rotate-12"
          />
        </div>
      </div>

      <Container className="relative z-10">
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <SectionHeading 
            title="Build Your Own Upgrade" 
            centered 
            className="mb-4 text-white drop-shadow-sm"
          />
          <p className="text-center max-w-2xl mx-auto mb-6 text-white drop-shadow-sm">
            Mix and match only the features you need. Pay one clean price per feature. Never owe ongoing fees unless you later want support.
          </p>
        
          {/* Trust badges above pricing cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-primary-blue/20 shadow-sm">
              <svg className="w-4 h-4 text-primary-blue mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />
              </svg>
              <span className="text-sm text-primary-navy font-medium">Money-back guarantee</span>
            </div>
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-primary-blue/20 shadow-sm">
              <svg className="w-4 h-4 text-primary-blue mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,12.5A1.5,1.5 0 0,1 10.5,11A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 13.5,11A1.5,1.5 0 0,1 12,12.5M12,7.2C9.9,7.2 8.2,8.9 8.2,11C8.2,14 12,17.5 12,17.5C12,17.5 15.8,14 15.8,11C15.8,8.9 14.1,7.2 12,7.2Z" />
              </svg>
              <span className="text-sm text-primary-navy font-medium">Local Harbor Springs experts</span>
            </div>
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-primary-blue/20 shadow-sm">
              <svg className="w-4 h-4 text-primary-blue mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13,9H11V7H13V9M13,17H11V11H13V17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              <span className="text-sm text-primary-navy font-medium">Fixed-cost pricing</span>
            </div>
          </div>
        </div>
        
        <div 
          className="max-w-4xl mx-auto relative z-10 mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
          }}
        >
          {/* Add a glow effect behind the pricing table */}
          <div className="absolute inset-0 rounded-xl bg-white/30 blur-xl -m-2"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-white/70 shadow-lg">
            <h3 className="text-2xl font-display font-bold text-center mb-6 text-primary-navy">
              Feature Menu & Fixed Prices
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 bg-white/60 rounded-lg border border-primary-sky/20 hover:bg-white/80 transition-colors duration-300"
                >
                  <span className="font-medium text-primary-navy">{feature.name}</span>
                  <span className="font-bold text-primary-blue text-lg">{feature.price}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-primary-sky/20 text-center">
              <p className="text-primary-navy/80 text-sm mb-4">
                All prices are one-time fees. No monthly charges. Mix and match any features you need.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-primary-blue to-primary-sky text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                </svg>
                Get My Fixed-Cost Quote
              </Link>
            </div>
          </div>
        </div>
        
        <div 
          className="text-center mt-8 bg-white/80 backdrop-blur-sm mx-auto max-w-lg rounded-xl p-6 border border-white/70 shadow-lg"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
          }}
        >
          <div className="flex items-center justify-center mb-2">
            <svg className="w-5 h-5 text-primary-blue mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21Z" />
            </svg>
            <h3 className="font-display font-bold text-lg text-primary-navy">Need something custom?</h3>
          </div>
          <p className="text-secondary-navy/90 mb-3 text-sm">
            We'll work with you to build a custom solution tailored to your specific retail needs.
          </p>
          <Link 
            href="/contact" 
            className="text-primary-blue hover:text-primary-sky font-semibold inline-flex items-center group transition-colors duration-300"
          >
            <span>Build Your Custom Solution</span>
            <svg 
              className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection; 