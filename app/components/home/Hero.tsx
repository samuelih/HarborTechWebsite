"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-b from-primary-navy via-primary-blue to-primary-sky">
      {/* Gradient background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary-navy/95 via-primary-blue/90 to-primary-sky/80"></div>

      {/* Static starry background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-stars"></div>

      {/* Night sky with moon */}
      <div className="absolute inset-0 w-full h-full">
        {/* Moon */}
        <div className="absolute top-[15%] right-[15%] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-neutral-mist/90 shadow-[0_0_15px_5px_rgba(255,255,255,0.4)]" style={{ transform: `translate3d(${mousePosition.x * -10}px, ${mousePosition.y * -10}px, 0)` }}>
          {/* Moon crater details */}
          <div className="absolute top-[20%] left-[30%] w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-neutral-mist/40"></div>
          <div className="absolute top-[50%] left-[60%] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neutral-mist/30"></div>
          <div className="absolute top-[70%] left-[40%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-neutral-mist/20"></div>
        </div>
      </div>

      {/* Harbor Technology Waves */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg
          width="100%"
          height="320"
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="harbor-waves"
          aria-hidden="true"
        >
          <defs>
            {/* Using new color scheme */}
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0E2A47" />
              <stop offset="100%" stopColor="#4682B4" />
            </linearGradient>

            {/* Single wave crest – duplicated & shifted for infinite scroll. */}
            <path
              id="gentle-wave"
              d="M0 160 C 60 145 180 128 300 140 C 420 152 540 200 660 213 C 780 226 900 203 1020 176 C 1140 149 1260 117 1380 128 C 1440 133 1500 160 1620 190 V 320 H 0 Z"
            />
          </defs>

          {/* Three parallax layers */}
          <g className="parallax-layer layer1">
            <use href="#gentle-wave" fill="url(#waveGradient)" x="0"/>
            <use href="#gentle-wave" fill="url(#waveGradient)" x="1440"/>
          </g>
          <g className="parallax-layer layer2" opacity="0.6">
            <use href="#gentle-wave" fill="url(#waveGradient)" x="0" y="30"/>
            <use href="#gentle-wave" fill="url(#waveGradient)" x="1440" y="30"/>
          </g>
          <g className="parallax-layer layer3" opacity="0.3">
            <use href="#gentle-wave" fill="url(#waveGradient)" x="0" y="60"/>
            <use href="#gentle-wave" fill="url(#waveGradient)" x="1440" y="60"/>
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-0 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
          <span className="block">Fixed-cost tech upgrades for Harbor Springs retailers</span>
          <span className="text-neutral-mist">— no monthly fees, just results.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white opacity-90 mb-6 sm:mb-10 drop-shadow-md max-w-2xl">
          We modernize your POS, website, and data in weeks, then step aside until you need help.
        </p>
        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
          <Link 
            href="/contact" 
            className="btn-primary relative overflow-hidden group text-center py-2.5 sm:py-3"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
              Book Your Free Harbor Check
            </span>
            <div className="absolute inset-0 w-full h-full bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
          <Link 
            href="#packages" 
            className="btn-secondary bg-white/20 border-white text-white hover:bg-white/30 flex items-center justify-center text-center py-2.5 sm:py-3"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
            </svg>
            Get My Fixed-Cost Quote
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .bg-stars {
          background-image: 
            radial-gradient(1px 1px at 10% 20%, #ffffff 100%, transparent),
            radial-gradient(1.5px 1.5px at 15% 15%, #ffffff 100%, transparent),
            radial-gradient(1px 1px at 25% 25%, #ffffff 100%, transparent),
            radial-gradient(2px 2px at 35% 5%, #ffffff 100%, transparent),
            radial-gradient(1.5px 1.5px at 45% 30%, #ffffff 100%, transparent),
            radial-gradient(1px 1px at 55% 8%, #ffffff 100%, transparent),
            radial-gradient(2px 2px at 65% 22%, #ffffff 100%, transparent),
            radial-gradient(1px 1px at 75% 28%, #ffffff 100%, transparent),
            radial-gradient(1.5px 1.5px at 85% 12%, #ffffff 100%, transparent),
            radial-gradient(1px 1px at 95% 18%, #ffffff 100%, transparent),
            radial-gradient(2px 2px at 5% 60%, #ffffff 100%, transparent),
            radial-gradient(1px 1px at 15% 75%, #ffffff 100%, transparent),
            radial-gradient(1.5px 1.5px at 25% 45%, #ffffff 100%, transparent),
            radial-gradient(1px 1px at 35% 65%, #ffffff 100%, transparent),
            radial-gradient(2px 2px at 45% 50%, #ffffff 100%, transparent),
            radial-gradient(1px 1px at 55% 70%, #ffffff 100%, transparent),
            radial-gradient(1.5px 1.5px at 65% 55%, #ffffff 100%, transparent),
            radial-gradient(1px 1px at 75% 80%, #ffffff 100%, transparent),
            radial-gradient(2px 2px at 85% 40%, #ffffff 100%, transparent),
            radial-gradient(1.5px 1.5px at 95% 60%, #ffffff 100%, transparent);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-position: center;
          opacity: 0.5;
        }

        /* Wave animation styles - optimized for performance */
        @media (prefers-reduced-motion: no-preference) {
          .harbor-waves .layer1 { animation: waveMove 10s linear infinite; }
          .harbor-waves .layer2 { animation: waveMove 15s linear infinite; }
          .harbor-waves .layer3 { animation: waveMove 20s linear infinite; }
          
          @keyframes waveMove {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-1440px); }
          }
        }
        
        /* Mobile adjustments */
        @media (max-width: 640px) {
          .harbor-waves {
            height: 200px;
            will-change: transform;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 