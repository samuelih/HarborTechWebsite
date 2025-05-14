"use client";

import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';
import Button from '../common/Button';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="pt-5 pb-10 bg-neutral-mist relative overflow-hidden">
      {/* Animated lighthouse background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-96">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-64 bg-primary-navy/10 rounded-t-full"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-primary-navy/20 rounded-full"></div>
          <div 
            className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-accent-gold/20 rounded-full animate-pulse"
            style={{ 
              transform: `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              boxShadow: '0 0 20px 10px rgba(255, 181, 90, 0.2)'
            }}
          ></div>
        </div>
      </div>

      {/* Animated rocks */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-primary-navy/10 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-24 h-24 bg-primary-navy/15 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-primary-navy/10 rounded-full transform translate-x-1/2"></div>
      </div>
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className={`relative flex items-center justify-center h-[435px] md:h-[580px] lg:h-[725px] ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="relative w-full h-full">
              <Image 
                src="/images/logos/semicolor.svg" 
                alt="Harbor Technology Consulting Logo" 
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-contain"
              />
            </div>
          </div>
          <div className={`relative bg-primary-navy text-white p-8 rounded-xl shadow-lg ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <SectionHeading title="Our Mission" className="text-neutral-mist" />
            <p className="text-2xl font-display font-bold text-neutral-mist mb-4 relative">
              "Make modern tech as approachable as a friendly dockhand."
            </p>
            <p className="mb-6 text-white/90">
              We serve the 60-plus retailers of Harbor Springs with affordable, done-for-you 
              upgrades that pay for themselves in weeks—not years.
            </p>
            <Button href="/about" variant="primary" className="bg-neutral-mist text-primary-navy hover:bg-accent-sand">
              <span>Meet Our Crew</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection; 