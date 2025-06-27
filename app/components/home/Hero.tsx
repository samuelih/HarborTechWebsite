"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder data for drone shots (photos and videos)
  const droneMedia = [
    { type: 'image', src: '/images/drone-shots/placeholder-1.jpg', alt: 'Aerial view of Harbor Springs marina' },
    { type: 'image', src: '/images/drone-shots/placeholder-2.jpg', alt: 'Downtown Harbor Springs from above' },
    { type: 'image', src: '/images/drone-shots/placeholder-3.jpg', alt: 'Harbor Springs waterfront businesses' },
    { type: 'image', src: '/images/drone-shots/placeholder-4.jpg', alt: 'Main Street Harbor Springs aerial' },
    { type: 'image', src: '/images/drone-shots/placeholder-5.jpg', alt: 'Harbor Springs bay overview' },
    { type: 'image', src: '/images/drone-shots/placeholder-6.jpg', alt: 'Seasonal Harbor Springs shops' },
    { type: 'image', src: '/images/drone-shots/placeholder-7.jpg', alt: 'Harbor Springs lighthouse aerial' },
    { type: 'image', src: '/images/drone-shots/placeholder-8.jpg', alt: 'Harbor Springs pier from above' },
    { type: 'image', src: '/images/drone-shots/placeholder-9.jpg', alt: 'Harbor Springs retail district' },
    { type: 'image', src: '/images/drone-shots/placeholder-10.jpg', alt: 'Harbor Springs waterfront panorama' },
    { type: 'image', src: '/images/drone-shots/placeholder-11.jpg', alt: 'Harbor Springs boat harbor aerial' },
    { type: 'image', src: '/images/drone-shots/placeholder-12.jpg', alt: 'Harbor Springs beach from above' },
    { type: 'image', src: '/images/drone-shots/placeholder-13.jpg', alt: 'Harbor Springs commercial district' },
    { type: 'image', src: '/images/drone-shots/placeholder-14.jpg', alt: 'Harbor Springs sunset aerial' },
    { type: 'image', src: '/images/drone-shots/placeholder-15.jpg', alt: 'Harbor Springs full town aerial' },
    { type: 'video', src: '/images/drone-shots/placeholder-video-1.mp4', alt: 'Harbor Springs aerial flyover' },
    { type: 'video', src: '/images/drone-shots/placeholder-video-2.mp4', alt: 'Harbor Springs marina approach' },
    { type: 'video', src: '/images/drone-shots/placeholder-video-3.mp4', alt: 'Harbor Springs Main Street flyby' },
    { type: 'video', src: '/images/drone-shots/placeholder-video-4.mp4', alt: 'Harbor Springs waterfront sweep' },
    { type: 'video', src: '/images/drone-shots/placeholder-video-5.mp4', alt: 'Harbor Springs business district overview' },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 pt-32">
        <div className="max-w-4xl">
          {/* Updated Headlines */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-h1 font-display font-bold text-white mb-6 leading-tight">
              We are <span className="text-accent-gold">Harbor Technology Consulting.</span>
            </h1>
            <div className="space-y-4 text-xl text-white/90 mb-8 leading-relaxed">
              <p>No-bullshit, affordable, and approachable technology upgrades.</p>
              <p>Modernize your point-of-sale, inventory, and back-office tools with transparent pricing and hometown support.</p>
              <p>No surprise add-ons, just solutions that save you time and money.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
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