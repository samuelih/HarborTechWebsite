"use client";

import Image from 'next/image';
import ServiceCard from '../cards/ServiceCard';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';
import { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: 'pos',
      nauticalIcon: '/images/user/lighthouse.svg',
      title: 'Smart POS',
      description: 'Cloud POS with real-time inventory and sales tracking',
      features: ['Automatic sales reports at close', 'Invoice from anywhere'],
      link: '/services/pos',
      color: 'bg-primary-blue'
    },
    {
      icon: 'cloud',
      nauticalIcon: '/images/user/bird.svg',
      title: 'Cloud Storage',
      description: 'Secure, searchable document system for receipts & invoices',
      features: ['One-click document retrieval', 'Daily auto-backup'],
      link: '/services/cloud',
      color: 'bg-primary-sky'
    },
    {
      icon: 'data',
      nauticalIcon: '/images/user/knot.svg',
      title: 'Data Dashboard',
      description: 'One simple screen showing today\'s sales, inventory, and cash flow',
      features: ['Morning email with yesterday\'s totals', 'Weekly trend reports'],
      link: '/services/data',
      color: 'bg-primary-navy'
    },
    {
      icon: 'training',
      nauticalIcon: '/images/user/sailboat.svg',
      title: 'Tech Training',
      description: 'We tune up and clean your computers so they run like new',
      features: ['90-min staff comfort class', 'We wipe and tune up to 5 devices'],
      link: '/services/devices',
      color: 'bg-accent-seafoam'
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-16 sm:py-20 bg-gradient-to-b from-primary-navy via-primary-blue to-primary-sky relative overflow-hidden"
    >
      {/* Enhanced animated ocean background with subtle waves */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/backgrounds/ocean-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/80 via-primary-blue/70 to-primary-sky/60"></div>
        
        {/* Animated wave patterns */}
        <div className="absolute bottom-0 left-0 w-full h-40 opacity-20">
          <div className="wave-line" style={{ animationDuration: '15s' }}></div>
          <div className="wave-line" style={{ animationDuration: '20s', animationDelay: '-5s', top: '30%' }}></div>
          <div className="wave-line" style={{ animationDuration: '25s', animationDelay: '-15s', top: '60%' }}></div>
        </div>
      </div>

      {/* Top transition blur from WhyChooseUs section */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary-navy to-transparent opacity-50"></div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated sailing boat */}
      <div 
          className="absolute top-1/4 right-10 md:right-20 w-20 h-20 md:w-32 md:h-32 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      >
        <Image
          src="/images/user/sailboat.svg"
          alt=""
          width={128}
          height={128}
          className="object-contain animate-gentle-float"
        />
      </div>

      {/* Animated clouds */}
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute opacity-30"
            style={{
              top: `${15 + i * 20}%`,
              left: `${5 + i * 30}%`,
              width: `${80 + i * 20}px`,
              height: `${40 + i * 10}px`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 5}s`,
            }}
          >
            <div 
              className="w-full h-full bg-white/20 rounded-full animate-gentle-float"
              style={{ animationDelay: `${i}s` }}
            ></div>
        </div>
        ))}

        {/* Small floating bubbles */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={`bubble-${i}`}
            className="absolute rounded-full bg-white/30 animate-float-up"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              bottom: '-10px',
              animationDuration: `${Math.random() * 8 + 8}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          ></div>
        ))}
      </div>
      
      <Container className="relative z-10">
        <SectionHeading 
          title="Core Services" 
          centered 
          className="text-white drop-shadow-lg mb-8 sm:mb-10 animate-fade-up"
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' 
          }}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="equal-height"
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease-out ${index * 0.1}s, transform 0.7s ease-out ${index * 0.1}s` 
              }}
            >
              <ServiceCard
                icon={service.icon as 'pos' | 'cloud' | 'training' | 'data'}
                nauticalIcon={service.nauticalIcon}
                title={service.title}
                description={service.description}
                features={service.features}
                link={service.link}
                color={service.color}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-400px) scale(0.5);
            opacity: 0;
          }
        }

        .wave-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          width: 200%;
          top: 0;
          animation: wave-move linear infinite;
        }

        @keyframes wave-move {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection; 