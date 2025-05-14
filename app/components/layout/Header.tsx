"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

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

  // Check if a link is active
  const isActive = (path: string) => {
    // Handle nested routes by checking if pathname starts with path
    if (path === '/' && pathname !== '/') return false;
    return pathname === path || (path !== '/' && pathname?.startsWith(path));
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ease-in-out ${scrolled ? 'glass-nav-scrolled shadow-md' : 'glass-nav'}`}>
      <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-6">
        {/* Logo with animation */}
        <Link href="/" className="flex items-center group">
          <div className="relative overflow-hidden transition-transform duration-300 mr-2 group-hover:scale-110">
            <Image 
              src="/images/logos/blackandwhite.svg" 
              alt="Harbor Technology Consulting" 
              width={40} 
              height={40}
              className="transition-transform duration-300"
            />
          </div>
          <span className="text-secondary-navy font-display font-bold text-xl hidden md:inline-block group-hover:text-primary-700 transition-colors duration-300">
            Harbor Technology Consulting
          </span>
        </Link>

        {/* Desktop Navigation with enhanced hover effects */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link 
            href="/services" 
            className={`nav-link group ${isActive('/services') ? 'active-nav-link' : ''}`}
          >
            <svg className="w-4 h-4 mr-1.5 text-nautical-azure group-hover:text-primary-700 transition-colors duration-300" viewBox="0 0 800 800" fill="currentColor">
              <path d="M755 400C730 350 705 325 680 325C642.5 325 605 400 555 400C505 400 467.5 325 430 325C392.5 325 355 400 305 400C255 400 217.5 325 180 325C142.5 325 105 400 55 400C42.5 400 30 394.5 20 387L20 450C30 457.5 42.5 462.5 55 462.5C105 462.5 142.5 387.5 180 387.5C217.5 387.5 255 462.5 305 462.5C355 462.5 392.5 387.5 430 387.5C467.5 387.5 505 462.5 555 462.5C605 462.5 642.5 387.5 680 387.5C705 387.5 730 412.5 755 462.5L755 400Z"/>
            </svg>
            <span>Services</span>
            <span className="nav-indicator"></span>
          </Link>
          <Link 
            href="/solutions" 
            className={`nav-link group ${isActive('/solutions') ? 'active-nav-link' : ''}`}
          >
            <svg className="w-4 h-4 mr-1.5 text-nautical-deepBlue group-hover:text-primary-700 transition-colors duration-300" viewBox="0 0 800 800" fill="currentColor">
              <path d="M400 80C225.9 80 80 225.9 80 400C80 574.1 225.9 720 400 720C574.1 720 720 574.1 720 400C720 225.9 574.1 80 400 80ZM400.1 190C455.3 190 500 234.7 500 289.9C500 345.1 455.3 389.8 400.1 389.8C344.9 389.8 300.2 345.1 300.2 289.9C300.2 234.7 344.9 190 400.1 190ZM179.8 510.2L274.2 416.8C287.5 442.8 311.1 462.4 339.9 470.1L339.9 589.7C269.7 582.6 211.5 553.5 179.8 510.2ZM460.1 589.7L460.1 470.1C488.9 462.4 512.5 442.8 525.8 416.8L620.2 510.2C588.5 553.6 530.3 582.6 460.1 589.7ZM654.4 461.6L560.4 368.6C567.4 347.1 567.4 324 560.4 302.5L654.4 209.4C681.3 264.1 693.2 329.2 679.6 396C671 437.8 651.6 476.5 620.2 510.2C620.2 510.2 622.2 491.3 654.4 461.6ZM239.6 368.6L145.6 461.6C118.7 406.9 106.8 341.8 120.4 275C129 233.2 148.4 194.5 179.8 160.8C179.8 160.8 177.8 179.7 145.6 209.4L239.6 302.4C232.6 324 232.6 347 239.6 368.6ZM339.9 210.3L339.9 329.9C311.1 337.6 287.5 357.2 274.2 383.2L179.8 289.8C211.5 246.5 269.7 217.4 339.9 210.3ZM525.8 383.2C512.5 357.2 488.9 337.6 460.1 329.9L460.1 210.3C530.3 217.4 588.5 246.4 620.2 289.8L525.8 383.2Z"/>
            </svg>
            <span>Solutions</span>
            <span className="nav-indicator"></span>
          </Link>
          <Link 
            href="/resources" 
            className={`nav-link group ${isActive('/resources') ? 'active-nav-link' : ''}`}
          >
            <svg className="w-4 h-4 mr-1.5 text-nautical-seafoam group-hover:text-primary-700 transition-colors duration-300" viewBox="0 0 800 800" fill="currentColor">
              <path d="M400 80L325 130V155H475V130L400 80ZM350 180V630H250L200 680H600L550 630H450V180H400H350ZM375 205H425V255H375V205ZM375 280H425V330H375V280ZM375 355H425V405H375V355ZM375 430H425V480H375V430ZM375 505H425V555H375V505ZM375 580H425V630H375V580ZM300 130L200 80L225 130H300ZM500 130H575L600 80L500 130Z"/>
            </svg>
            <span>Resources</span>
            <span className="nav-indicator"></span>
          </Link>
          <Link 
            href="/about" 
            className={`nav-link group ${isActive('/about') ? 'active-nav-link' : ''}`}
          >
            <svg className="w-4 h-4 mr-1.5 text-nautical-sunset group-hover:text-primary-700 transition-colors duration-300" viewBox="0 0 800 800" fill="currentColor">
              <path d="M400 100C355.82 100 320 135.82 320 180C320 217.73 345.97 249.1 380 258.6V690C350 680 320 665 290 650V580H330C335.52 580 340 575.52 340 570V530C340 524.48 335.52 520 330 520H230C224.48 520 220 524.48 220 530V570C220 575.52 224.48 580 230 580H270V630C250 620 230 610 210 600C160 570 130 560 100 560V620C137.14 620 168.28 631.27 202.2 646.8C251.08 669.37 306.05 695 400 695C493.95 695 548.92 669.37 597.8 646.8C631.72 631.27 662.86 620 700 620V560C670 560 640 570 590 600C570 610 550 620 530 630V580H570C575.52 580 580 575.52 580 570V530C580 524.48 575.52 520 570 520H470C464.48 520 460 524.48 460 530V570C460 575.52 464.48 580 470 580H510V650C480 665 450 680 420 690V258.6C454.03 249.1 480 217.73 480 180C480 135.82 444.18 100 400 100ZM400 220C377.94 220 360 202.06 360 180C360 157.94 377.94 140 400 140C422.06 140 440 157.94 440 180C440 202.06 422.06 220 400 220Z"/>
            </svg>
            <span>About</span>
            <span className="nav-indicator"></span>
          </Link>
          <Link 
            href="/contact" 
            className="btn-primary flex items-center group transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
          >
            <svg className="w-4 h-4 mr-1.5 text-white transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 800 800" fill="currentColor">
              <path d="M400 150L250 400H400V150ZM400 150L550 400H400V150ZM180 450L180 500H620L620 450L180 450ZM400 500L250 700H550L400 500Z"/>
            </svg>
            <span className="relative z-10">Book a Harbor Check</span>
          </Link>
        </nav>

        {/* Mobile menu button with enhanced animation */}
        <button 
          className="md:hidden relative flex items-center p-2 overflow-hidden focus:outline-none group"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute w-6 h-0.5 bg-primary-700 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            <span className={`absolute w-6 h-0.5 bg-primary-700 transform transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute w-6 h-0.5 bg-primary-700 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu with improved animation */}
      <div className={`md:hidden bg-white absolute top-16 inset-x-0 shadow-lg z-20 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 pointer-events-none'}`}>
        <div className="flex flex-col py-4 px-4 space-y-2">
          <Link 
            href="/services" 
            className={`text-secondary-navy hover:text-primary-700 transition-colors p-3 flex items-center rounded-lg ${isActive('/services') ? 'bg-primary-100' : 'hover:bg-neutral-gull/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5 mr-2 text-nautical-azure" viewBox="0 0 800 800" fill="currentColor">
              <path d="M755 400C730 350 705 325 680 325C642.5 325 605 400 555 400C505 400 467.5 325 430 325C392.5 325 355 400 305 400C255 400 217.5 325 180 325C142.5 325 105 400 55 400C42.5 400 30 394.5 20 387L20 450C30 457.5 42.5 462.5 55 462.5C105 462.5 142.5 387.5 180 387.5C217.5 387.5 255 462.5 305 462.5C355 462.5 392.5 387.5 430 387.5C467.5 387.5 505 462.5 555 462.5C605 462.5 642.5 387.5 680 387.5C705 387.5 730 412.5 755 462.5L755 400Z"/>
            </svg>
            Services
          </Link>
          <Link 
            href="/solutions" 
            className={`text-secondary-navy hover:text-primary-700 transition-colors p-3 flex items-center rounded-lg ${isActive('/solutions') ? 'bg-primary-100' : 'hover:bg-neutral-gull/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5 mr-2 text-nautical-deepBlue" viewBox="0 0 800 800" fill="currentColor">
              <path d="M400 80C225.9 80 80 225.9 80 400C80 574.1 225.9 720 400 720C574.1 720 720 574.1 720 400C720 225.9 574.1 80 400 80ZM400.1 190C455.3 190 500 234.7 500 289.9C500 345.1 455.3 389.8 400.1 389.8C344.9 389.8 300.2 345.1 300.2 289.9C300.2 234.7 344.9 190 400.1 190ZM179.8 510.2L274.2 416.8C287.5 442.8 311.1 462.4 339.9 470.1L339.9 589.7C269.7 582.6 211.5 553.5 179.8 510.2ZM460.1 589.7L460.1 470.1C488.9 462.4 512.5 442.8 525.8 416.8L620.2 510.2C588.5 553.6 530.3 582.6 460.1 589.7ZM654.4 461.6L560.4 368.6C567.4 347.1 567.4 324 560.4 302.5L654.4 209.4C681.3 264.1 693.2 329.2 679.6 396C671 437.8 651.6 476.5 620.2 510.2C620.2 510.2 622.2 491.3 654.4 461.6ZM239.6 368.6L145.6 461.6C118.7 406.9 106.8 341.8 120.4 275C129 233.2 148.4 194.5 179.8 160.8C179.8 160.8 177.8 179.7 145.6 209.4L239.6 302.4C232.6 324 232.6 347 239.6 368.6ZM339.9 210.3L339.9 329.9C311.1 337.6 287.5 357.2 274.2 383.2L179.8 289.8C211.5 246.5 269.7 217.4 339.9 210.3ZM525.8 383.2C512.5 357.2 488.9 337.6 460.1 329.9L460.1 210.3C530.3 217.4 588.5 246.4 620.2 289.8L525.8 383.2Z"/>
            </svg>
            Solutions
          </Link>
          <Link 
            href="/resources" 
            className={`text-secondary-navy hover:text-primary-700 transition-colors p-3 flex items-center rounded-lg ${isActive('/resources') ? 'bg-primary-100' : 'hover:bg-neutral-gull/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5 mr-2 text-nautical-seafoam" viewBox="0 0 800 800" fill="currentColor">
              <path d="M400 80L325 130V155H475V130L400 80ZM350 180V630H250L200 680H600L550 630H450V180H400H350ZM375 205H425V255H375V205ZM375 280H425V330H375V280ZM375 355H425V405H375V355ZM375 430H425V480H375V430ZM375 505H425V555H375V505ZM375 580H425V630H375V580ZM300 130L200 80L225 130H300ZM500 130H575L600 80L500 130Z"/>
            </svg>
            Resources
          </Link>
          <Link 
            href="/about" 
            className={`text-secondary-navy hover:text-primary-700 transition-colors p-3 flex items-center rounded-lg ${isActive('/about') ? 'bg-primary-100' : 'hover:bg-neutral-gull/50'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5 mr-2 text-nautical-sunset" viewBox="0 0 800 800" fill="currentColor">
              <path d="M400 100C355.82 100 320 135.82 320 180C320 217.73 345.97 249.1 380 258.6V690C350 680 320 665 290 650V580H330C335.52 580 340 575.52 340 570V530C340 524.48 335.52 520 330 520H230C224.48 520 220 524.48 220 530V570C220 575.52 224.48 580 230 580H270V630C250 620 230 610 210 600C160 570 130 560 100 560V620C137.14 620 168.28 631.27 202.2 646.8C251.08 669.37 306.05 695 400 695C493.95 695 548.92 669.37 597.8 646.8C631.72 631.27 662.86 620 700 620V560C670 560 640 570 590 600C570 610 550 620 530 630V580H570C575.52 580 580 575.52 580 570V530C580 524.48 575.52 520 570 520H470C464.48 520 460 524.48 460 530V570C460 575.52 464.48 580 470 580H510V650C480 665 450 680 420 690V258.6C454.03 249.1 480 217.73 480 180C480 135.82 444.18 100 400 100ZM400 220C377.94 220 360 202.06 360 180C360 157.94 377.94 140 400 140C422.06 140 440 157.94 440 180C440 202.06 422.06 220 400 220Z"/>
            </svg>
            About
          </Link>
          <Link 
            href="/contact" 
            className="btn-primary text-center flex items-center justify-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5 mr-2 text-white" viewBox="0 0 800 800" fill="currentColor">
              <path d="M400 150L250 400H400V150ZM400 150L550 400H400V150ZM180 450L180 500H620L620 450L180 450ZM400 500L250 700H550L400 500Z"/>
            </svg>
            Book a Harbor Check
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
        }
        
        .nav-link span:first-of-type {
          color: var(--deep-sea);
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
          border-bottom: 1px solid rgba(245, 247, 250, 0.3);
          transition: all 0.3s ease;
        }
        
        .glass-nav-scrolled {
          backdrop-filter: blur(12px);
          background-color: rgba(230, 244, 255, 0.9);
          border-bottom: 1px solid rgba(245, 247, 250, 0.5);
        }
      `}</style>
    </header>
  );
};

export default Header; 