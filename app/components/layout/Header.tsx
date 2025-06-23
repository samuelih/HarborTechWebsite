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
  const isDarkPage = ['/solutions', '/support', '/about', '/contact'].some(path => 
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
      <div className="max-w-7xl mx-auto flex justify-between items-center h-32 px-6 lg:px-8">
        {/* Logo - 4x larger, transparent, no text */}
        <Link href="/" className="flex items-center group" aria-label="Harbor Technology Consulting - Home">
          <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <Image 
              src="/images/logos/logo_transparent.svg" 
              alt="Harbor Technology Consulting Logo" 
              width={240} 
              height={240}
              className={`transition-transform duration-300 ${getLogoFilter()}`}
              priority
              quality={100}
              loading="eager"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav role="navigation" aria-label="Main navigation" className="hidden md:flex space-x-8 items-center">
          <Link 
            href="/solutions" 
            className={`text-2xl transition-colors duration-300 font-cinzel ${
              isActive('/solutions') ? getActiveTextColor() : getTextColor()
            }`}
          >
            Solutions
          </Link>
          
          {/* Support Dropdown */}
          <div className="relative" ref={supportDropdownRef}>
            <button
              onClick={toggleSupportDropdown}
              className={`text-2xl transition-colors duration-300 font-cinzel flex items-center gap-1 ${
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
                <Link
                  href="/support/knowledge-base"
                  className="flex items-center gap-3 px-4 py-3 text-primary-navy hover:bg-neutral-mist hover:text-primary-blue transition-colors"
                  onClick={() => setIsSupportDropdownOpen(false)}
                >
                  <BookOpen className="w-5 h-5" />
                  Knowledge Base
                </Link>
                <a
                  href="https://harbor-ai-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-primary-navy hover:bg-neutral-mist hover:text-primary-blue transition-colors"
                  onClick={() => setIsSupportDropdownOpen(false)}
                >
                  <Globe className="w-5 h-5" />
                  HarborAI
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
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
            className={`text-2xl transition-colors duration-300 font-cinzel ${
              isActive('/about') ? getActiveTextColor() : getTextColor()
            }`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="btn-primary text-2xl font-cinzel flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg 
              className="w-5 h-5 mr-2 transition-all duration-500" 
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

        {/* Mobile menu button */}
        <button 
          className="md:hidden relative flex items-center p-2 focus:outline-none group"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute w-6 h-0.5 ${getHamburgerColor()} transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            <span className={`absolute w-6 h-0.5 ${getHamburgerColor()} transform transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute w-6 h-0.5 ${getHamburgerColor()} transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu - adjusted top position */}
      <div 
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`md:hidden bg-white absolute top-32 inset-x-0 shadow-lg z-20 transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-[600px]' : 'opacity-0 max-h-0 pointer-events-none'}`}
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
          
          {/* Mobile Support Section */}
          <div className="space-y-1">
            <button
              onClick={toggleSupportDropdown}
              className={`w-full text-left flex items-center justify-between text-primary-navy hover:text-primary-blue transition-colors p-3 rounded-lg ${isActive('/support') ? 'bg-neutral-gull text-primary-blue' : 'hover:bg-neutral-gull/50'}`}
            >
              Support
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${
                  isSupportDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {/* Mobile Support Submenu */}
            <div className={`pl-4 space-y-1 transition-all duration-200 ${
              isSupportDropdownOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              <Link
                href="/support/options-pricing"
                className="flex items-center gap-3 px-3 py-2 text-sm text-primary-navy hover:text-primary-blue hover:bg-neutral-gull/30 rounded-lg transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSupportDropdownOpen(false);
                }}
              >
                <LifeBuoy className="w-4 h-4" />
                Options and Pricing
              </Link>
              <Link
                href="/support/knowledge-base"
                className="flex items-center gap-3 px-3 py-2 text-sm text-primary-navy hover:text-primary-blue hover:bg-neutral-gull/30 rounded-lg transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSupportDropdownOpen(false);
                }}
              >
                <BookOpen className="w-4 h-4" />
                Knowledge Base
              </Link>
              <a
                href="https://harborai.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 text-sm text-primary-navy hover:text-primary-blue hover:bg-neutral-gull/30 rounded-lg transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSupportDropdownOpen(false);
                }}
              >
                <Globe className="w-4 h-4" />
                HarborAI
                <ExternalLink className="w-3 h-3 ml-auto" />
              </a>
              <Link
                href="/support/emergency"
                className="flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors font-semibold"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSupportDropdownOpen(false);
                }}
              >
                <AlertTriangle className="w-4 h-4" />
                EMERGENCY SUPPORT
              </Link>
            </div>
          </div>
          
          <Link 
            href="/about" 
            className={`text-primary-navy hover:text-primary-blue transition-colors p-3 rounded-lg ${isActive('/about') ? 'bg-neutral-gull text-primary-blue' : 'hover:bg-neutral-gull/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="btn-primary btn-full text-2xl font-cinzel flex items-center"
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg 
              className="w-5 h-5 mr-2 transition-all duration-500" 
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
        </div>
      </div>
    </header>
  );
};

export default Header; 