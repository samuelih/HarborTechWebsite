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
      description: 'Modern cloud POS that syncs inventory instantly',
      features: ['Auto inventory sync', 'Daily dashboards'],
      link: '/services/pos',
      color: 'bg-primary-blue'
    },
    {
      icon: 'cloud',
      nauticalIcon: '/images/user/bird.svg',
      title: 'Cloud Storage',
      description: 'Secure, searchable document vault',
      features: ['Encrypted storage', 'Ransomware backup'],
      link: '/services/cloud',
      color: 'bg-primary-sky'
    },
    {
      icon: 'data',
      nauticalIcon: '/images/user/knot.svg',
      title: 'Data Platform',
      description: 'Unified dashboard for all your data',
      features: ['KPI email digest', 'Data workshop'],
      link: '/services/data',
      color: 'bg-primary-navy'
    },
    {
      icon: 'training',
      nauticalIcon: '/images/user/sailboat.svg',
      title: 'Tech Training',
      description: 'Hands-on workshops for your team',
      features: ['90-min comfort class', 'Device refresh'],
      link: '/services/devices',
      color: 'bg-accent-seafoam'
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-primary-navy via-primary-blue to-primary-sky relative overflow-hidden"
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
          className="text-white drop-shadow-lg mb-10 animate-fade-up"
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' 
          }}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex h-full"
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
                className="h-full flex flex-col"
              />
            </div>
          ))}
        </div>
      </Container>

      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16" style={{ transform: 'rotate(180deg)' }}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#0A2035" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#0A2035" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#0A2035" />
        </svg>
      </div>

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