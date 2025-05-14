"use client";

import Image from 'next/image';
import ServiceCard from '../cards/ServiceCard';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';
import { useState, useEffect } from 'react';

const ServicesSection = () => {
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

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
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
    <section id="services" className="py-20 bg-gradient-to-b from-primary-navy to-primary-blue relative overflow-hidden">
      {/* Animated ocean background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/backgrounds/ocean-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/50 to-primary-blue/50"></div>
      </div>

      {/* Animated sailing boat */}
      <div 
        className="absolute top-1/4 right-10 w-32 h-32 transition-transform duration-300"
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
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="animate-gentle-float" style={{ animationDelay: '0s' }}>
          <div className="w-32 h-16 bg-white/10 rounded-full"></div>
        </div>
        <div className="animate-gentle-float" style={{ animationDelay: '2s' }}>
          <div className="w-24 h-12 bg-white/10 rounded-full"></div>
        </div>
      </div>
      
      <Container className="relative z-10">
        <SectionHeading title="Core Services" centered className="text-white drop-shadow-lg" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex h-full ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
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
    </section>
  );
};

export default ServicesSection; 