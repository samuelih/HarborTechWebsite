"use client";

import Link from 'next/link';
import Image from 'next/image';
import PricingCard from '../cards/PricingCard';
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

  const packages = [
    {
      icon: '/images/user/sailboat.svg',
      title: 'Starter "Skiff"',
      subtitle: 'Perfect for one-register shops & galleries',
      price: '$4,800',
      features: [
        'POS install (1 register)',
        'Basic inventory sync',
        'Cloud doc vault (10 GB)',
        '2-hr training',
        '$0 first month'
      ]
    },
    {
      icon: '/images/user/lighthouse.svg',
      title: 'Voyager "Cutter"',
      subtitle: 'Growing boutiques with online + in-store stock',
      price: '$9,800',
      isPopular: true,
      features: [
        'Everything in Skiff, plus',
        'POS for 3 registers',
        'Advanced analytics',
        'Device refresh (up to 5 PCs/tablets)',
        '1-day staff workshop'
      ]
    },
    {
      icon: '/images/user/wheel.svg',
      title: 'Flagship "Clipper"',
      subtitle: 'Multi-location or high-volume retailers',
      price: '$18,500',
      features: [
        'Everything in Cutter, plus',
        'POS unlimited',
        'Custom AI chatbot for customer FAQs',
        'Central data warehouse',
        'Dedicated success manager'
      ]
    }
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
            alt=""
            width={80}
            height={80}
            className="rotate-12"
          />
        </div>
        <div className="absolute bottom-20 left-10 opacity-20">
          <Image
            src="/images/user/wheel.svg"
            alt=""
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
            title="Choose Your Perfect Package" 
            centered 
            className="mb-4 text-primary-navy drop-shadow-sm"
          />
          <p className="text-center max-w-2xl mx-auto mb-6 text-primary-navy/90 drop-shadow-sm">
          Transparent, fixed-cost technology packages to fit any retail operation size.
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
              <span className="text-sm text-primary-navy font-medium">Transparent pricing</span>
            </div>
          </div>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s'
          }}
        >
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="relative"
              style={{
                transform: pkg.isPopular ? 'translateY(-10px)' : 'translateY(0)'
              }}
            >
              {/* Add a glow effect behind the cards for better visibility */}
              <div className="absolute inset-0 rounded-xl bg-white/30 blur-xl -m-2"></div>
              <div className="relative">
                <PricingCard
                  title={pkg.title}
                  subtitle={pkg.subtitle}
                  price={pkg.price}
                  isPopular={pkg.isPopular}
                  features={pkg.features}
                  icon={pkg.icon}
                />
              </div>
            </div>
          ))}
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
            <h3 className="font-display font-bold text-lg text-primary-navy">Need a custom solution?</h3>
          </div>
          <p className="text-secondary-navy/90 mb-3 text-sm">
            We'll work with you to build a custom package tailored to your specific retail needs.
          </p>
          <Link 
            href="/contact" 
            className="text-primary-blue hover:text-primary-sky font-semibold inline-flex items-center group transition-colors duration-300"
          >
            <span>Build Your Own Custom Voyage</span>
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