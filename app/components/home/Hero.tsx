"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder data for drone shots (photos and videos)
  const droneMedia = [
    { type: 'image', src: '/images/drone-shots/drone1.JPG', alt: 'Aerial view of Harbor Springs marina' },
    { type: 'image', src: '/images/drone-shots/drone2.JPG', alt: 'Downtown Harbor Springs from above' },
    { type: 'image', src: '/images/drone-shots/drone3.JPG', alt: 'Harbor Springs waterfront businesses' },
    { type: 'image', src: '/images/drone-shots/drone4.JPG', alt: 'Main Street Harbor Springs aerial' },
    { type: 'image', src: '/images/drone-shots/drone5.JPG', alt: 'Harbor Springs bay overview' },
    { type: 'image', src: '/images/drone-shots/drone6.JPG', alt: 'Harbor Springs bay overview' },
  ];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-advance carousel every 6 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % droneMedia.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [droneMedia.length]);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Drone Shot Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        {droneMedia.map((media, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {media.type === 'image' ? (
              <Image
                src={media.src}
                alt={media.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            ) : (
              <video
                src={media.src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                aria-label={media.alt}
              />
            )}
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="w-full relative z-10 pt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Updated Headlines */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                          <div className="bg-black/25 backdrop-blur-sm rounded-xl p-6 mx-auto max-w-4xl mb-6">
                <h1 className="text-h1 font-display font-bold text-accent-gold leading-tight text-center">
                  We are <span className="text-white relative inline-block font-bold">
                    Harbor Technology Consulting
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
                  </span>
                </h1>
              </div>
            <div className="mx-auto mb-8">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 mx-auto max-w-3xl">
                                  <div className="text-center space-y-4">
                    <p className="text-xl text-white leading-relaxed"><span className="font-bold relative inline-block">No-bullshit, affordable, and approachable<span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span></span> technology upgrades.</p>
                    <p className="text-xl text-white leading-relaxed">Modernize your point-of-sale, inventory, and back-office tools with <span className="font-bold relative inline-block">transparent pricing and hometown support.</span></p>
                    <p className="text-xl text-white leading-relaxed"><span className="font-bold relative inline-block">No surprise add-ons<span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span></span>, just solutions that <span className="font-bold text-accent-gold">save you time and money.</span></p>
                  </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary btn-large inline-flex items-center justify-center"
              >
                Schedule a free consultation
              </Link>
              <Link 
                href="#services" 
                className="btn-secondary btn-large inline-flex items-center justify-center hover:bg-gradient-to-r hover:from-[#F0B254] hover:to-[#D97706] hover:text-white hover:border-transparent"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {droneMedia.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent-gold scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 