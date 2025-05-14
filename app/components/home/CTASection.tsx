"use client";

import Link from 'next/link';
import Container from '../common/Container';
import Button from '../common/Button';
import { useState, useEffect } from 'react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cta');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cta" className="py-16 bg-gradient-to-b from-primary-navy to-primary-blue relative overflow-hidden">
      {/* Animated compass background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/backgrounds/compass-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/50 to-primary-blue/50"></div>
      </div>

      {/* Animated compass */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-8 border-accent-gold/30 shadow-lg"></div>
        
        {/* Compass points */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent-gold/50 font-bold">N</div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-accent-gold/50 font-bold">S</div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent-gold/50 font-bold">W</div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-accent-gold/50 font-bold">E</div>
          </div>
        </div>

        {/* Rotating needle */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* Classic double-sided compass needle SVG with accent-gold/40 color */}
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
            <polygon points="90,25 105,90 90,155 75,90" fill="#FFD36A" fillOpacity="0.4" />
            <circle cx="90" cy="90" r="10" fill="#FFD36A" fillOpacity="0.4" />
          </svg>
        </div>

        {/* Center point */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-accent-gold/40 shadow-lg flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-accent-gold/60"></div>
          </div>
        </div>

        {/* Degree markers */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-4 bg-accent-gold/30"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-180px)`
              }}
            />
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <div className={`text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-white font-display font-bold text-3xl md:text-4xl mb-6 drop-shadow-lg">Ready to raise the sails?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto drop-shadow-md">
            Claim your free Harbor Check consultation and chart a course for retail technology success.
          </p>
          <Button 
            href="/contact" 
            className="bg-accent-gold text-primary-navy hover:bg-accent-sand flex items-center justify-center mx-auto max-w-xs group shadow-lg"
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:rotate-180 transition-transform duration-500" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12,2L4.5,20.29l0.71,0.71L12,18l6.79,3 0.71-0.71L12,2z" />
            </svg>
            Book Your Free Harbor Check
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTASection; 