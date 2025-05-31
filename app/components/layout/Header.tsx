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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm backdrop-blur-md' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center group" aria-label="Harbor Technology Consulting - Home">
          <div className="relative overflow-hidden transition-transform duration-300 mr-3 group-hover:scale-110">
            <Image 
              src="/images/logos/logo_baw.svg" 
              alt="Harbor Technology Consulting Logo" 
              width={40} 
              height={40}
              className="transition-transform duration-300"
              priority
            />
          </div>
          <span className="text-primary-navy font-display font-bold text-lg hidden sm:inline-block group-hover:text-primary-blue transition-colors duration-300">
            Harbor Technology
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav role="navigation" aria-label="Main navigation" className="hidden md:flex space-x-8 items-center">
          <Link 
            href="/solutions" 
            className={`text-primary-navy hover:text-primary-blue transition-colors duration-300 font-medium ${isActive('/solutions') ? 'text-primary-blue' : ''}`}
          >
            Solutions
          </Link>
          <Link 
            href="/support" 
            className={`text-primary-navy hover:text-primary-blue transition-colors duration-300 font-medium ${isActive('/support') ? 'text-primary-blue' : ''}`}
          >
            Support
          </Link>
          <Link 
            href="/about" 
            className={`text-primary-navy hover:text-primary-blue transition-colors duration-300 font-medium ${isActive('/about') ? 'text-primary-blue' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="bg-primary-blue hover:bg-primary-sky text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Let's Talk
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden relative flex items-center p-2 focus:outline-none group"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute w-6 h-0.5 bg-primary-navy transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            <span className={`absolute w-6 h-0.5 bg-primary-navy transform transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute w-6 h-0.5 bg-primary-navy transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`md:hidden bg-white absolute top-16 inset-x-0 shadow-lg z-20 transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-[400px]' : 'opacity-0 max-h-0 pointer-events-none'}`}
        style={{ overflow: isMenuOpen ? 'visible' : 'hidden' }}
      >
        <div className="flex flex-col py-4 px-6 space-y-2">
          <Link 
            href="/solutions" 
            className={`text-primary-navy hover:text-primary-blue transition-colors p-3 rounded-lg ${isActive('/solutions') ? 'bg-neutral-gull text-primary-blue' : 'hover:bg-neutral-gull/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link 
            href="/support" 
            className={`text-primary-navy hover:text-primary-blue transition-colors p-3 rounded-lg ${isActive('/support') ? 'bg-neutral-gull text-primary-blue' : 'hover:bg-neutral-gull/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Support
          </Link>
          <Link 
            href="/about" 
            className={`text-primary-navy hover:text-primary-blue transition-colors p-3 rounded-lg ${isActive('/about') ? 'bg-neutral-gull text-primary-blue' : 'hover:bg-neutral-gull/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="bg-primary-blue hover:bg-primary-sky text-white font-semibold text-center py-3 px-6 rounded-lg transition-all duration-300 mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 