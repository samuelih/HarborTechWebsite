"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { 
  Anchor, 
  Globe, 
  BookOpen, 
  Ship, 
  Compass, 
  ChevronDown, 
  LifeBuoy,
  ExternalLink,
  AlertTriangle
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const supportDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSupportDropdown = () => {
    setIsSupportDropdownOpen(!isSupportDropdownOpen);
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
    setIsSupportDropdownOpen(false);
  }, [pathname]);

  // Close mobile menu when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsSupportDropdownOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle keyboard events for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isSupportDropdownOpen) {
          setIsSupportDropdownOpen(false);
        } else if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen, isSupportDropdownOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (supportDropdownRef.current && !supportDropdownRef.current.contains(event.target as Node)) {
        setIsSupportDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check if a link is active
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  // Check if we're on a page with dark background
  const isDarkPage = ['/', '/solutions', '/support', '/about', '/contact'].some(path => 
    pathname === path || pathname.startsWith(path + '/')
  );

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (isDarkPage && !isScrolled) {
      return 'text-white hover:text-accent-gold';
    }
    return 'text-primary-navy hover:text-primary-blue';
  };

  // Determine active text color
  const getActiveTextColor = () => {
    if (isDarkPage && !isScrolled) {
      return 'text-accent-gold';
    }
    return 'text-primary-blue';
  };

  // Determine hamburger menu color
  const getHamburgerColor = () => {
    if (isDarkPage && !isScrolled) {
      return 'bg-white';
    }
    return 'bg-primary-navy';
  };

  // Determine logo filter based on page and scroll state
  const getLogoFilter = () => {
    if (isDarkPage && !isScrolled) {
      return 'brightness-0 invert';
    }
    return '';
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm backdrop-blur-md' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-23 sm:h-24 md:h-32 px-4 sm:px-6 lg:px-8">
        {/* Logo - Responsive sizing */}
        <Link href="/" className="flex items-center group" aria-label="Harbor Technology Consulting - Home">
          <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <Image 
              src="/images/logos/logo_transparent.svg" 
              alt="Harbor Technology Consulting Logo" 
              width={120} 
              height={120}
              className={`transition-transform duration-300 ${getLogoFilter()} sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]`}
              priority
              quality={100}
              loading="eager"
              sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav role="navigation" aria-label="Main navigation" className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          <Link 
            href="/solutions" 
            className={`text-xl lg:text-2xl transition-colors duration-300 font-cinzel ${
              isActive('/solutions') ? getActiveTextColor() : getTextColor()
            }`}
          >
            Solutions
          </Link>
          
          {/* Support Dropdown */}
          <div className="relative" ref={supportDropdownRef}>
            <button
              onClick={toggleSupportDropdown}
              className={`text-xl lg:text-2xl transition-colors duration-300 font-cinzel flex items-center gap-1 ${
                isActive('/support') ? getActiveTextColor() : getTextColor()
              }`}
              aria-expanded={isSupportDropdownOpen}
              aria-haspopup="true"
            >
              Support
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${
                  isSupportDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {/* Desktop Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                isSupportDropdownOpen 
                  ? 'opacity-100 visible transform translate-y-0' 
                  : 'opacity-0 invisible transform -translate-y-2'
              }`}
            >
              <div className="py-2">
                <Link
                  href="/support/options-pricing"
                  className="flex items-center gap-3 px-4 py-3 text-primary-navy hover:bg-neutral-mist hover:text-primary-blue transition-colors"
                  onClick={() => setIsSupportDropdownOpen(false)}
                >
                  <LifeBuoy className="w-5 h-5" />
                  Options and Pricing
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link
                  href="/support/emergency"
                  className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors font-semibold"
                  onClick={() => setIsSupportDropdownOpen(false)}
                >
                  <AlertTriangle className="w-5 h-5" />
                  EMERGENCY SUPPORT
                </Link>
              </div>
            </div>
          </div>
          
          <Link 
            href="/about" 
            className={`text-xl lg:text-2xl transition-colors duration-300 font-cinzel ${
              isActive('/about') ? getActiveTextColor() : getTextColor()
            }`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="btn-primary text-lg lg:text-2xl font-cinzel flex items-center px-4 lg:px-6 py-2 lg:py-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg 
              className="w-4 h-4 lg:w-5 lg:h-5 mr-2 transition-all duration-500" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              style={{ 
                transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                opacity: 0.9
              }}
            >
              <path d="M12,2L4.5,20.29l0.71,0.71L12,18l6.79,3 0.71-0.71L12,2z" />
            </svg>
            Let's Talk
          </Link>
        </nav>

        {/* Mobile navigation - flex container for let's talk button and hamburger */}
        <div className="md:hidden flex items-center justify-center space-x-3 h-full">
          {/* Let's Talk button - visible on mobile */}
          <Link 
            href="/contact" 
            className="btn-primary text-sm font-cinzel flex items-center justify-center px-3 py-2 h-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg 
              className="w-4 h-4 mr-1 transition-all duration-500" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              style={{ 
                transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                opacity: 0.9
              }}
            >
              <path d="M12,2L4.5,20.29l0.71,0.71L12,18l6.79,3 0.71-0.71L12,2z" />
            </svg>
            Let's Talk
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="relative flex items-center justify-center p-2 focus:outline-none group h-10 w-10"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className={`absolute w-6 h-0.5 ${getHamburgerColor()} transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
              <span className={`absolute w-6 h-0.5 ${getHamburgerColor()} transform transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute w-6 h-0.5 ${getHamburgerColor()} transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu - improved positioning */}
      <div 
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`md:hidden bg-white absolute inset-x-0 shadow-lg z-20 transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-[80vh] overflow-y-auto' : 'opacity-0 max-h-0 pointer-events-none overflow-hidden'}`}
        style={{ 
          top: '100%',
          maxHeight: isMenuOpen ? '80vh' : '0'
        }}
      >
        <div className="flex flex-col py-6 px-6 space-y-3 bg-gradient-to-b from-white to-neutral-50">
          {/* Enhanced Solutions Link */}
          <Link 
            href="/solutions" 
            className={`group flex items-center text-primary-navy hover:text-primary-blue transition-all duration-300 p-4 rounded-xl text-lg font-cinzel border-2 border-transparent hover:border-primary-blue/20 hover:bg-gradient-to-r hover:from-primary-blue/5 hover:to-transparent ${isActive('/solutions') ? 'bg-gradient-to-r from-primary-blue/10 to-transparent border-primary-blue/30 text-primary-blue' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Ship className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold">Solutions</span>
          </Link>
          
          {/* Enhanced Mobile Support Section */}
          <div className="space-y-2">
            <button
              onClick={toggleSupportDropdown}
              className={`group w-full text-left flex items-center justify-between text-primary-navy hover:text-primary-blue transition-all duration-300 p-4 rounded-xl text-lg font-cinzel border-2 border-transparent hover:border-primary-blue/20 hover:bg-gradient-to-r hover:from-primary-blue/5 hover:to-transparent ${isActive('/support') ? 'bg-gradient-to-r from-primary-blue/10 to-transparent border-primary-blue/30 text-primary-blue' : ''}`}
            >
              <div className="flex items-center">
                <LifeBuoy className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">Support</span>
              </div>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${
                  isSupportDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {/* Enhanced Mobile Support Submenu */}
            <div className={`pl-6 space-y-2 transition-all duration-300 ${
              isSupportDropdownOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              <Link
                href="/support/options-pricing"
                className="flex items-center gap-3 px-4 py-3 text-base text-primary-navy hover:text-primary-blue hover:bg-gradient-to-r hover:from-primary-blue/5 hover:to-transparent rounded-lg transition-all duration-300 border border-transparent hover:border-primary-blue/20"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSupportDropdownOpen(false);
                }}
              >
                <Compass className="w-4 h-4" />
                <span className="font-medium">Options and Pricing</span>
              </Link>
              <Link
                href="/support/emergency"
                className="flex items-center gap-3 px-4 py-3 text-base text-red-600 hover:text-red-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-transparent rounded-lg transition-all duration-300 border border-transparent hover:border-red-200 font-semibold"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSupportDropdownOpen(false);
                }}
              >
                <AlertTriangle className="w-4 h-4" />
                <span>EMERGENCY SUPPORT</span>
              </Link>
            </div>
          </div>
          
          {/* Enhanced About Link */}
          <Link 
            href="/about" 
            className={`group flex items-center text-primary-navy hover:text-primary-blue transition-all duration-300 p-4 rounded-xl text-lg font-cinzel border-2 border-transparent hover:border-primary-blue/20 hover:bg-gradient-to-r hover:from-primary-blue/5 hover:to-transparent ${isActive('/about') ? 'bg-gradient-to-r from-primary-blue/10 to-transparent border-primary-blue/30 text-primary-blue' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Anchor className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold">About</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 