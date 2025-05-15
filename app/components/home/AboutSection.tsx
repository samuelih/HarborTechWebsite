"use client";

import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';
import Button from '../common/Button';
import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBeamActive, setIsBeamActive] = useState(false);
  const fogRef = useRef<HTMLDivElement>(null);
  
  // Create stars data
  const stars = Array.from({ length: 50 }, () => ({
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3
  }));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsBeamActive(true), 500);
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

  const handleFogMouseEnter = () => {
    setIsBeamActive(true);
  };

  const handleFogMouseLeave = () => {
    setIsBeamActive(false);
  };

  return (
    <section 
      id="about" 
      className="relative overflow-hidden py-16 flex flex-col md:flex-row items-center min-h-[600px]"
      style={{
        background: '#0A2035',
      }}
    >
      {/* Top transition from Services section */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-primary-sky to-transparent opacity-40"></div>
      
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <div 
            key={i}
            className={`absolute rounded-full transition-all duration-700 ${isBeamActive ? 'opacity-100' : 'opacity-0'}`}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: 'white',
              left: `${star.x}%`,
              top: `${star.y}%`,
              boxShadow: `0 0 ${star.size}px rgba(255, 255, 255, 0.8)`,
              transitionDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* LEFT: Logo + Mission */}
      <div className="flex flex-col gap-8 md:items-center justify-center w-full md:w-1/2 z-20 px-8">
        <div className="flex flex-col md:flex-row w-full max-w-4xl relative gap-6 items-center">
          <div 
            className={`relative bg-opacity-80 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full ${isVisible ? 'animate-fade-up' : 'opacity-0'} transition-all duration-700`} 
            style={{ 
              animationDelay: '0.2s',
              background: isBeamActive ? 'rgba(14, 42, 71, 0.75)' : 'rgba(10, 32, 53, 0.8)',
              boxShadow: isBeamActive ? '0 0 80px rgba(240, 178, 84, 0.6)' : 'none',
              transform: isBeamActive ? 'translateY(0)' : 'translateY(10px)',
              opacity: isBeamActive ? 1 : 0.6,
              zIndex: 20
            }}
          >
            <h2 className="text-xl font-extrabold tracking-wide mb-4 text-white opacity-0 transition-opacity duration-700" style={{ opacity: isBeamActive ? 1 : 0 }}>OUR MISSION</h2>
            <p className="text-lg font-semibold italic text-white mb-4 opacity-0 transition-opacity duration-700" style={{ opacity: isBeamActive ? 1 : 0, transitionDelay: '100ms' }}>
              "Make modern tech as approachable as a friendly dockhand."
            </p>
            <p className="mt-4 leading-relaxed text-white/90 opacity-0 transition-opacity duration-700" style={{ opacity: isBeamActive ? 1 : 0, transitionDelay: '200ms' }}>
              We serve the 60-plus retailers of Harbor Springs with affordable, done-for-you 
              upgrades that pay for themselves in weeks—not years.
            </p>
            <Button 
              href="/about" 
              variant="primary" 
              className={`mt-6 bg-primary-sky text-white hover:bg-primary-blue transition-opacity duration-700 ${isBeamActive ? 'opacity-100 delay-300' : 'opacity-0'}`}
            >
              <span>Meet Our Crew</span>
            </Button>
          </div>
          
          {/* Light cone illumination effect on the text */}
          <div 
            className={`absolute -right-[200px] top-1/2 w-[500px] h-[600px] transition-opacity duration-700 ${isBeamActive ? 'opacity-30' : 'opacity-0'}`} 
            style={{
              background: 'conic-gradient(from -30deg at 0% 50%, rgba(240, 178, 84, 0.8) 0deg, transparent 40deg)',
              filter: 'blur(30px)',
              transform: 'rotate(200deg) translateY(-50%)',
              transformOrigin: 'left center',
              zIndex: -1
            }}
          ></div>
        </div>
      </div>

      {/* RIGHT: Lighthouse (DIV-based) */}
      <div className="relative flex items-center justify-center md:w-1/2 h-full">
        <div className="canvas relative w-40 md:w-44 h-[440px] flex justify-center items-center">
          {/* Primary Light beam - adjusted direction and intensity */}
          <div 
            className={`absolute z-10 transition-all duration-700 ${isBeamActive ? 'opacity-90' : 'opacity-0'}`}
            style={{
              position: "absolute",
              top: "-96px",
              right: "60px",
              width: "0",
              height: "100px",
              borderTop: "180px solid transparent",
              borderLeft: "500px solid rgba(240, 178, 84, 0.6)",
              borderBottom: "180px solid transparent",
              filter: isBeamActive ? 'blur(15px) drop-shadow(0 0 40px rgba(240, 178, 84, 0.9))' : 'none',
              transform: "rotate(-10deg)",
              zIndex: 15
            }}
          />
          
          {/* Secondary wider beam */}
          <div 
            className={`absolute z-9 transition-all duration-700 ${isBeamActive ? 'opacity-60' : 'opacity-0'}`}
            style={{
              position: "absolute",
              top: "-96px",
              right: "60px",
              width: "0",
              height: "100px",
              borderTop: "220px solid transparent",
              borderLeft: "600px solid rgba(240, 178, 84, 0.3)",
              borderBottom: "220px solid transparent",
              filter: isBeamActive ? 'blur(20px)' : 'none',
              transform: "rotate(-10deg)",
              zIndex: 14
            }}
          />
          
          {/* Ambient light glow */}
          <div 
            className={`absolute rounded-full transition-all duration-700 ${isBeamActive ? 'opacity-80' : 'opacity-0'}`}
            style={{
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(240,178,84,0.9) 0%, rgba(240,178,84,0) 70%)",
              top: "40px",
              right: "-100px",
              filter: "blur(30px)",
              zIndex: 12
            }}
          />
          
          {/* Island/Land Base */}
          <div className="island absolute" style={{
            width: "240px",
            height: "40px",
            bottom: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
            background: "linear-gradient(to bottom, #3d6b3d, #2c4c2c)",
            boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
            zIndex: 4
          }}>
            {/* Beach area */}
            <div className="beach absolute" style={{
              width: "200px",
              height: "15px",
              bottom: "25px",
              left: "20px",
              borderRadius: "50%",
              background: "#F8EFD4",
              zIndex: 4
            }}></div>
            
            {/* Water ripples */}
            <div className="ripple absolute" style={{
              width: "260px",
              height: "10px",
              bottom: "-5px",
              left: "-10px",
              borderRadius: "50%",
              background: "rgba(30, 80, 134, 0.5)",
              zIndex: 3
            }}></div>
            <div className="ripple2 absolute" style={{
              width: "300px",
              height: "10px",
              bottom: "-10px",
              left: "-30px",
              borderRadius: "50%",
              background: "rgba(30, 80, 134, 0.3)",
              zIndex: 2
            }}></div>
          </div>
          
          {/* Roof - triangle */}
          <div className="roof absolute" style={{
            width: "0",
            height: "0",
            bottom: "400px",
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderBottom: "30px solid #cc0000",
            zIndex: 5
          }}></div>
          
          {/* Light housing */}
          <div className="light absolute" style={{
            width: "40px",
            height: "20px",
            background: isBeamActive ? "#FFF5D4" : "#F0B254",
            bottom: "380px",
            boxShadow: isBeamActive ? "0 0 30px 10px rgba(240, 178, 84, 0.9)" : "none",
            transition: "all 0.5s ease-in-out",
            zIndex: 5
          }}>
            {/* Pillars */}
            <div className="pillar1 absolute" style={{
              width: "8px",
              height: "20px",
              background: "#0E2A47",
              top: "0px"
            }}></div>
            <div className="pillar2 absolute" style={{
              width: "8px",
              height: "20px",
              background: "#0E2A47",
              right: "0px",
              top: "0px"
            }}></div>
          </div>
          
          {/* Balcony */}
          <div className="balcony absolute" style={{
            width: "40px",
            height: "15px",
            background: "#e8dfc9",
            bottom: "365px",
            zIndex: 5
          }}></div>
          
          {/* Shapes stacked - red and white stripes */}
          <div className="shape1 absolute" style={{
            bottom: "315px",
            borderBottom: "50px solid #cc2b2b",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            height: "0",
            width: "50px",
            zIndex: 5
          }}>
            <div className="window1 absolute" style={{
              width: "8px",
              height: "8px",
              background: isBeamActive ? "#F0B254" : "#000",
              left: "10px",
              top: "10px",
              boxShadow: isBeamActive ? "0 0 10px 2px rgba(240, 178, 84, 0.7)" : "none",
              transition: "all 0.5s ease-in-out"
            }}></div>
          </div>
          
          <div className="shape2 absolute" style={{
            bottom: "265px",
            borderBottom: "50px solid white",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            height: "0",
            width: "62px",
            zIndex: 5
          }}></div>
          
          <div className="shape3 absolute" style={{
            bottom: "215px",
            borderBottom: "50px solid #cc2b2b",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            height: "0",
            width: "74px",
            zIndex: 5
          }}>
            <div className="window2 absolute" style={{
              width: "8px",
              height: "8px",
              background: isBeamActive ? "#F0B254" : "#000",
              right: "10px",
              top: "10px",
              boxShadow: isBeamActive ? "0 0 10px 2px rgba(240, 178, 84, 0.7)" : "none",
              transition: "all 0.5s ease-in-out"
            }}></div>
          </div>
          
          <div className="shape4 absolute" style={{
            bottom: "165px",
            borderBottom: "50px solid white",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            height: "0",
            width: "86px",
            zIndex: 5
          }}></div>
          
          <div className="shape5 absolute" style={{
            bottom: "115px",
            borderBottom: "50px solid #cc2b2b",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            height: "0",
            width: "98px",
            zIndex: 5
          }}>
            <div className="window3 absolute" style={{
              width: "8px",
              height: "8px",
              background: isBeamActive ? "#F0B254" : "#000",
              left: "10px",
              top: "10px",
              boxShadow: isBeamActive ? "0 0 10px 2px rgba(240, 178, 84, 0.7)" : "none",
              transition: "all 0.5s ease-in-out"
            }}></div>
          </div>
          
          <div className="shape6 absolute" style={{
            bottom: "65px",
            borderBottom: "50px solid white",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            height: "0",
            width: "110px",
            zIndex: 5
          }}></div>
          
          <div className="shape7 absolute" style={{
            bottom: "15px",
            borderBottom: "50px solid #cc2b2b",
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            height: "0",
            width: "122px",
            zIndex: 5
          }}>
            <div className="window4 absolute" style={{
              width: "8px",
              height: "8px",
              background: isBeamActive ? "#F0B254" : "#000",
              right: "10px",
              top: "10px",
              boxShadow: isBeamActive ? "0 0 10px 2px rgba(240, 178, 84, 0.7)" : "none",
              transition: "all 0.5s ease-in-out"
            }}></div>
          </div>
          
          {/* Base/Building */}
          <div className="building absolute" style={{
            width: "130px",
            height: "15px",
            background: "#0E2A47",
            bottom: "0px",
            zIndex: 5
          }}></div>
          
          {/* Seagull */}
          <div className="absolute top-10 left-[-80px] z-5 animate-gull-float" aria-hidden="true">
            <svg width="24" height="12" viewBox="0 0 24 12">
              <path d="M0,6 Q6,0 12,6 Q18,12 24,6" fill="none" stroke="#aaa" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Ocean water at the bottom of the section */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] z-3 overflow-hidden" style={{
        background: '#1E5086'
      }}>
        {/* Subtle rippling water effect */}
        <div className="absolute inset-0 opacity-10" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%, transparent 100%)',
          backgroundSize: '300px 150px',
          animation: 'water-ripple-1 15s infinite linear',
          transform: 'translateZ(0)'
        }}></div>
        
        {/* Very minimal particles */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60 + 10}px`,
              opacity: Math.random() * 0.15 + 0.05,
              animation: `shimmer ${Math.random() * 5 + 8}s ease-in-out infinite`
            }}
          ></div>
        ))}
      </div>

      {/* Night fog overlay */}
      <div 
        ref={fogRef}
        onMouseEnter={handleFogMouseEnter}
        onMouseLeave={handleFogMouseLeave}
        className="absolute inset-0 transition-opacity duration-1000 z-20 pointer-events-auto"
        style={{
          backdropFilter: 'blur(2px)',
          backgroundImage: 'linear-gradient(180deg, rgba(14, 42, 71, 0.8) 0%, rgba(30, 80, 134, 0.7) 100%)',
          opacity: isBeamActive ? 0.2 : 0.75,
        }}
      />

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-gull-float {
            animation: none !important;
          }
        }
        
        @keyframes water-ripple-1 {
          0% { background-position: 0 0; }
          100% { background-position: 300px 0; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;