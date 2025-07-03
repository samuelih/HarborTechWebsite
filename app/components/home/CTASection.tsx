"use client";

import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container';
import Button from '../common/Button';
import { useState, useEffect, useRef } from 'react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
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
      
      // Handle the shortest path for rotation to avoid 360° flips
      if (diff > 180) {
        currentRotation += (diff - 360) * 0.08;
      } else if (diff < -180) {
        currentRotation += (diff + 360) * 0.08;
      } else {
        currentRotation += diff * 0.08;
      }
      
      // Keep rotation within 0-360 range
      if (currentRotation >= 360) {
        currentRotation -= 360;
      } else if (currentRotation < 0) {
        currentRotation += 360;
      }
      
      setRotation(currentRotation);
      animationId = requestAnimationFrame(animate);
    };

    // Start animation loop
    animationId = requestAnimationFrame(animate);

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
      
      // Normalize angle to 0-360 range
      targetRotation = angle < 0 ? angle + 360 : angle;
    };

    // Add event listeners
    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section 
      id="cta" 
      ref={sectionRef}
      className="py-24 bg-primary-blue relative overflow-hidden"
    >
      {/* Removed background gradients and patterns for a solid wave color */}

      {/* Fixed position compass with only needle rotation */}
      <div 
        ref={compassRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 transition-opacity duration-700"
        style={{
          opacity: isVisible ? 0.8 : 0
        }}
      >
        {/* Outer ring with enhanced glow effect */}
        <div className="absolute inset-0 rounded-full border-8 border-accent-gold/40 backdrop-blur-sm shadow-[0_0_50px_rgba(240,178,84,0.2)]"></div>
        <div className="absolute inset-0 rounded-full border-2 border-accent-gold/20 backdrop-blur-sm" style={{
          transform: 'scale(1.05)'
        }}></div>
        
        {/* Compass rose pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <path d="M100,20 L100,180 M20,100 L180,100 M35,35 L165,165 M35,165 L165,35" 
                 stroke="#F0B254" strokeWidth="2" opacity="0.7" />
          </svg>
        </div>
        
        {/* Compass directional labels - simplified to just N/S/E/W */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-accent-gold font-bold text-xl drop-shadow-md">N</div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-accent-gold font-bold text-xl drop-shadow-md">S</div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent-gold font-bold text-xl drop-shadow-md">W</div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-accent-gold font-bold text-xl drop-shadow-md">E</div>
          </div>
        </div>

        {/* Improved compass needle */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40">
            <defs>
              <filter id="needle-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="northGradient" x1="110" y1="30" x2="110" y2="110" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F0B254" />
                <stop offset="100%" stopColor="#E09830" />
              </linearGradient>
              <linearGradient id="southGradient" x1="110" y1="110" x2="110" y2="190" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#4682B4" />
                <stop offset="100%" stopColor="#1E5086" />
              </linearGradient>
            </defs>
            
            {/* South needle */}
            <polygon points="110,110 125,110 110,190 95,110" fill="url(#southGradient)" fillOpacity="0.9" filter="url(#needle-glow)" />
            <polygon points="110,110 125,110 110,190 95,110" stroke="#4682B4" strokeWidth="1" strokeOpacity="0.9" />
            
            {/* North needle */}
            <polygon points="110,30 125,110 110,110 95,110" fill="url(#northGradient)" fillOpacity="0.9" filter="url(#needle-glow)" />
            <polygon points="110,30 125,110 110,110 95,110" stroke="#F0B254" strokeWidth="1" strokeOpacity="0.9" />
            
            {/* Center joint */}
            <circle cx="110" cy="110" r="12" fill="#F0B254" fillOpacity="0.8" />
            <circle cx="110" cy="110" r="8" fill="#E09830" fillOpacity="1" />
          </svg>
        </div>

        {/* Center point */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-accent-gold/20 backdrop-blur-md shadow-lg flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-accent-gold/40 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-accent-gold/70 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Degree markers */}
        <div className="absolute inset-0">
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${i % 3 === 0 ? 'bg-accent-gold/50 w-1.5 h-6' : 'bg-accent-gold/30 w-1 h-4'}`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 10}deg) translateY(-156px)`
              }}
            />
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        <div 
          className="text-center pointer-events-none"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <h2 className="text-white font-display font-bold text-3xl md:text-5xl mb-6 drop-shadow-lg">
            <span className="relative inline-block">
              Ready to chart 
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
            </span>
            {" "}
            <span className="text-accent-gold">your course?</span>
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
            Let's have a friendly chat about your tech needs. No pressure, just solutions.
          </p>
          
          <div
            className="relative mx-auto max-w-xs pointer-events-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glowing background effect */}
            <div 
              className="absolute inset-0 rounded-lg transition-opacity duration-500 blur-xl"
              style={{ 
                background: 'radial-gradient(circle, rgba(240,178,84,0.6) 0%, rgba(240,178,84,0) 70%)',
                opacity: isHovered ? 0.9 : 0.4
              }}
            ></div>
            
          <Button 
            href="/contact" 
              className="btn-accent btn-large flex items-center justify-center mx-auto"
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
            Let's Talk
          </Button>
          </div>
          

        </div>
      </Container>
    </section>
  );
};

export default CTASection; 