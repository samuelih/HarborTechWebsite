"use client";

import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container';
import Button from '../common/Button';
import { useState, useEffect, useRef } from 'react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const compassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let animationId: number;
    let targetRotation = rotation;
    let currentRotation = rotation;
    
    const animate = () => {
      // Smoothly interpolate towards target rotation
      const diff = targetRotation - currentRotation;
      currentRotation += diff * 0.1;
      
      if (Math.abs(diff) > 0.01) {
        setRotation(currentRotation);
        animationId = requestAnimationFrame(animate);
      }
    };

    // Start with slow spin
    const interval = setInterval(() => {
      targetRotation += 0.5;
    }, 50);

    // When mouse moves over the section, make compass point to mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (!compassRef.current || !sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate angle
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      
      targetRotation = angle;
      
      // Update mouse position for parallax effects
      setMousePosition({
        x: (e.clientX - centerX) / 50,
        y: (e.clientY - centerY) / 50
      });
    };

    // Add event listeners
    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }
    
    // Start animation loop
    animationId = requestAnimationFrame(animate);

    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      clearInterval(interval);
      cancelAnimationFrame(animationId);
    };
  }, [rotation]);

  // Generate wave bubbles for the background
  const bubbles = Array(12).fill(0).map((_, i) => ({
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${Math.random() * 10 + 15}s`,
    opacity: Math.random() * 0.2 + 0.1
  }));

  return (
    <section 
      id="cta" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-primary-navy to-primary-blue relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/backgrounds/compass-pattern.svg')] opacity-10 bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/50 to-primary-blue/50"></div>
        
        {/* Ocean depth background with bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {bubbles.map((bubble, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white/10 animate-float-up"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.x}%`,
                bottom: '-50px',
                animationDelay: bubble.animationDelay,
                animationDuration: bubble.animationDuration,
                opacity: bubble.opacity,
              }}
            ></div>
          ))}
        </div>
        
        {/* Light beams effect */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-20 left-1/4 w-40 h-[500px] bg-accent-gold/30 rotate-[30deg] blur-3xl"></div>
          <div className="absolute -top-20 right-1/4 w-40 h-[500px] bg-accent-gold/20 -rotate-[30deg] blur-3xl"></div>
        </div>
      </div>

      {/* Enhanced interactive compass */}
      <div 
        ref={compassRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 transition-all duration-700"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`,
          opacity: isVisible ? 0.8 : 0
        }}
      >
        {/* Outer ring with glow effect */}
        <div className="absolute inset-0 rounded-full border-8 border-accent-gold/40 backdrop-blur-sm shadow-[0_0_30px_rgba(255,211,106,0.3)]"></div>
        
        {/* Compass directional labels with enhanced styling */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-accent-gold/80 font-bold text-xl">N</div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-accent-gold/80 font-bold text-xl">S</div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent-gold/80 font-bold text-xl">W</div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-accent-gold/80 font-bold text-xl">E</div>
            <div className="absolute top-[15%] right-[15%] text-accent-gold/60 font-bold">NE</div>
            <div className="absolute top-[15%] left-[15%] text-accent-gold/60 font-bold">NW</div>
            <div className="absolute bottom-[15%] right-[15%] text-accent-gold/60 font-bold">SE</div>
            <div className="absolute bottom-[15%] left-[15%] text-accent-gold/60 font-bold">SW</div>
          </div>
        </div>

        {/* Enhanced rotating needle with animation */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-transform"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* Enhanced compass needle with better styling */}
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40">
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <polygon points="110,30 125,110 110,190 95,110" fill="#FFD36A" fillOpacity="0.7" filter="url(#glow)" />
            <polygon points="110,30 125,110 110,190 95,110" stroke="#FFD36A" strokeWidth="1.5" strokeOpacity="0.8" />
            <circle cx="110" cy="110" r="12" fill="#FFD36A" fillOpacity="0.8" />
            <circle cx="110" cy="110" r="8" fill="#FFB55A" fillOpacity="0.9" />
          </svg>
        </div>

        {/* Center point with enhanced detail */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-accent-gold/30 backdrop-blur-md shadow-lg flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-accent-gold/60 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-accent-gold/90"></div>
            </div>
          </div>
        </div>

        {/* Enhanced degree markers */}
        <div className="absolute inset-0">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-accent-gold/40 ${i % 2 === 0 ? 'w-1.5 h-6' : 'w-1 h-4'}`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 15}deg) translateY(-156px)`
              }}
            />
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <div 
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <h2 className="text-white font-display font-bold text-3xl md:text-5xl mb-6 drop-shadow-lg">
            <span className="relative inline-block">
              Ready to chart 
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-gold/70"></span>
            </span>
            {" "}
            <span className="text-accent-gold">your course?</span>
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
            Claim your free Harbor Check consultation and set sail toward retail technology success.
          </p>
          
          <div
            className="relative mx-auto max-w-xs"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glowing background effect */}
            <div 
              className="absolute inset-0 rounded-lg transition-opacity duration-500 blur-xl"
              style={{ 
                background: 'radial-gradient(circle, rgba(255,211,106,0.6) 0%, rgba(255,211,106,0) 70%)',
                opacity: isHovered ? 0.9 : 0.4
              }}
            ></div>
            
            <Button 
              href="/contact" 
              className="relative bg-gradient-to-r from-accent-gold to-accent-sand text-primary-navy hover:shadow-[0_5px_30px_rgba(255,211,106,0.5)] transition-all duration-500 flex items-center justify-center mx-auto shadow-lg group z-10"
            >
              <svg 
                className="w-5 h-5 mr-2 transition-all duration-500 text-primary-navy" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                style={{ 
                  transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                  opacity: 0.9
                }}
              >
                <path d="M12,2L4.5,20.29l0.71,0.71L12,18l6.79,3 0.71-0.71L12,2z" />
              </svg>
              Book Your Free Harbor Check
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div 
            className="flex flex-wrap justify-center items-center gap-4 mt-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s'
            }}
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <svg className="w-4 h-4 text-accent-gold mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H11V7H13V8H15V10H11V11H14A1,1 0 0,1 15,12V15A1,1 0 0,1 14,16H13V17H11Z" />
              </svg>
              <span className="text-white text-sm">No payment required</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <svg className="w-4 h-4 text-accent-gold mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
              </svg>
              <span className="text-white text-sm">30-minute session</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <svg className="w-4 h-4 text-accent-gold mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              <span className="text-white text-sm">Expert advice</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection; 