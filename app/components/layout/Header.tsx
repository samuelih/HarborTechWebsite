"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { 
  Anchor, 
  Globe, 
  BookOpen, 
  Ship, 
  Compass, 
  ChevronDown, 
  LifeBuoy
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle keyboard events for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Check if a link is active
  const isActive = (path: string) => {
    // Handle nested routes by checking if pathname starts with path
    if (path === '/' && pathname !== '/') return false;
    return pathname === path || (path !== '/' && pathname?.startsWith(path));
  };

  return (
    <header 
      role="banner" 
      className={`fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 transition-all duration-300 ease-in-out ${scrolled ? 'glass-nav-scrolled shadow-md' : 'glass-nav'}`}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-6">
        {/* Logo with animation */}
        <Link href="/" className="flex items-center group" aria-label="Harbor Technology Consulting - Home">
          <div className="relative overflow-hidden transition-transform duration-300 mr-2 group-hover:scale-110">
            <Image 
              src="/images/logos/blackandwhite.svg" 
              alt="Harbor Technology Consulting Logo" 
              width={36} 
              height={36}
              className="transition-transform duration-300"
              priority
            />
          </div>
          <span className="text-[#22548c] font-display font-bold text-base xs:text-lg md:text-xl hidden xs:inline-block group-hover:text-primary-700 transition-colors duration-300">
            Harbor Technology
          </span>
        </Link>

        {/* Desktop Navigation with enhanced hover effects */}
        <nav role="navigation" aria-label="Main navigation" className="hidden md:flex space-x-4 lg:space-x-8 items-center">
          <Link 
            href="/services" 
            className={`nav-link group ${isActive('/services') ? 'active-nav-link' : ''}`}
          >
            <Anchor 
              className="w-4 h-4 mr-1.5 text-nautical-azure group-hover:text-primary-700 transition-all duration-300 group-hover:scale-110" 
              strokeWidth={2} 
              aria-hidden="true" 
            />
            <span>Services</span>
            <span className="nav-indicator"></span>
          </Link>
          <Link 
            href="/pricing" 
            className={`nav-link group ${isActive('/pricing') ? 'active-nav-link' : ''}`}
          >
            <Globe 
              className="w-4 h-4 mr-1.5 text-nautical-deepBlue group-hover:text-primary-700 transition-all duration-300 group-hover:scale-110" 
              strokeWidth={2} 
              aria-hidden="true" 
            />
            <span>Pricing</span>
            <span className="nav-indicator"></span>
          </Link>
          <Link 
            href="/support" 
            className={`nav-link group ${isActive('/support') ? 'active-nav-link' : ''}`}
          >
            <LifeBuoy 
              className="w-4 h-4 mr-1.5 text-nautical-seafoam group-hover:text-primary-700 transition-all duration-300 group-hover:scale-110" 
              strokeWidth={2} 
              aria-hidden="true" 
            />
            <span>Support</span>
            <span className="nav-indicator"></span>
          </Link>
          <Link 
            href="/about" 
            className={`nav-link group ${isActive('/about') ? 'active-nav-link' : ''}`}
          >
            <Ship 
              className="w-4 h-4 mr-1.5 text-nautical-sunset group-hover:text-primary-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
              strokeWidth={2} 
              aria-hidden="true" 
            />
            <span>About</span>
            <span className="nav-indicator"></span>
          </Link>
          <Link 
            href="/contact" 
            className="btn-primary flex items-center group transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg py-2 px-4 lg:py-3 lg:px-6"
          >
            <Compass 
              className="w-4 h-4 mr-1.5 text-white transition-all duration-300 group-hover:rotate-45 group-hover:scale-110" 
              strokeWidth={2.5}
              aria-hidden="true" 
            />
            <span className="relative z-10">Get My Fixed-Cost Quote</span>
          </Link>
        </nav>

        {/* Mobile menu button with enhanced animation */}
        <button 
          className="md:hidden relative flex items-center p-2 overflow-hidden focus:outline-none group"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute w-6 h-0.5 bg-primary-700 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            <span className={`absolute w-6 h-0.5 bg-primary-700 transform transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute w-6 h-0.5 bg-primary-700 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu with improved animation */}
      <div 
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`md:hidden bg-white absolute top-16 inset-x-0 shadow-lg z-20 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 pointer-events-none'}`}
        style={{ overflowY: isMenuOpen ? 'auto' : 'hidden' }}
      >
        <div className="flex flex-col py-4 px-4 space-y-2">
          <Link 
            href="/services" 
            className={`text-[#22548c] hover:text-primary-700 transition-colors p-3 flex items-center rounded-lg ${isActive('/services') ? 'bg-primary-100' : 'hover:bg-neutral-gull/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Anchor 
              className="w-5 h-5 mr-2 text-nautical-azure transition-transform duration-300 hover:scale-110" 
              strokeWidth={2} 
              aria-hidden="true" 
            />
            Services
          </Link>
          <Link 
            href="/pricing" 
            className={`text-[#22548c] hover:text-primary-700 transition-colors p-3 flex items-center rounded-lg ${isActive('/pricing') ? 'bg-primary-100' : 'hover:bg-neutral-gull/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Globe 
              className="w-5 h-5 mr-2 text-nautical-deepBlue transition-transform duration-300 hover:scale-110" 
              strokeWidth={2} 
              aria-hidden="true" 
            />
            Pricing
          </Link>
          <Link 
            href="/support" 
            className={`text-[#22548c] hover:text-primary-700 transition-colors p-3 flex items-center rounded-lg ${isActive('/support') ? 'bg-primary-100' : 'hover:bg-neutral-gull/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <LifeBuoy 
              className="w-5 h-5 mr-2 text-nautical-seafoam transition-transform duration-300 hover:scale-110" 
              strokeWidth={2} 
              aria-hidden="true" 
            />
            Support
          </Link>
          <Link 
            href="/about" 
            className={`text-[#22548c] hover:text-primary-700 transition-colors p-3 flex items-center rounded-lg ${isActive('/about') ? 'bg-primary-100' : 'hover:bg-neutral-gull/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Ship 
              className="w-5 h-5 mr-2 text-nautical-sunset transition-transform duration-300 hover:scale-110" 
              strokeWidth={2} 
              aria-hidden="true" 
            />
            About
          </Link>
          <Link 
            href="/contact" 
            className="btn-primary text-center flex items-center justify-center mt-4 py-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <Compass 
              className="w-5 h-5 mr-2 text-white transition-transform duration-300 group-hover:rotate-45" 
              strokeWidth={2.5}
              aria-hidden="true" 
            />
            Get My Fixed-Cost Quote
          </Link>
        </div>
      </div>
      
      {/* Add CSS for new nav styles */}
      <style jsx global>{`
        .nav-link {
          position: relative;
          display: flex;
          align-items: center;
          color: var(--foreground);
          padding: 0.5rem 0;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }
        
        @media (min-width: 1024px) {
          .nav-link {
            font-size: 1rem;
          }
        }
        
        .nav-link span:first-of-type {
          color: #22548c;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover span:first-of-type,
        .active-nav-link span:first-of-type {
          color: var(--ocean-surface);
        }
        
        .nav-indicator {
          position: absolute;
          bottom: -2px;
          left: 0;
          height: 2px;
          width: 0;
          background: linear-gradient(to right, var(--ocean-surface), var(--seafoam));
          transition: width 0.3s ease;
        }
        
        .nav-link:hover .nav-indicator,
        .active-nav-link .nav-indicator {
          width: 100%;
        }
        
        .active-nav-link {
          font-weight: 500;
        }
        
        .glass-nav {
          backdrop-filter: blur(8px);
          background-color: rgba(230, 244, 255, 0.7);
          border-bottom: 1px solid rgba(230, 244, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .glass-nav-scrolled {
          backdrop-filter: blur(12px);
          background-color: rgba(230, 244, 255, 0.9);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </header>
  );
};

export default Header; 