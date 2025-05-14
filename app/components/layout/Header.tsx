"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 h-16 glass-nav">
      <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logos/blackandwhite.svg" 
            alt="Harbor Technology Consulting" 
            width={40} 
            height={40} 
            className="mr-2"
          />
          <span className="text-secondary-navy font-display font-bold text-xl hidden md:inline-block">
            Harbor Technology Consulting
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/services" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-nautical-azure" viewBox="0 0 800 800" fill="currentColor">
              <path d="M755 400C730 350 705 325 680 325C642.5 325 605 400 555 400C505 400 467.5 325 430 325C392.5 325 355 400 305 400C255 400 217.5 325 180 325C142.5 325 105 400 55 400C42.5 400 30 394.5 20 387L20 450C30 457.5 42.5 462.5 55 462.5C105 462.5 142.5 387.5 180 387.5C217.5 387.5 255 462.5 305 462.5C355 462.5 392.5 387.5 430 387.5C467.5 387.5 505 462.5 555 462.5C605 462.5 642.5 387.5 680 387.5C705 387.5 730 412.5 755 462.5L755 400Z"/>
            </svg>
            Services
          </Link>
          <Link href="/solutions" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-nautical-deepBlue" viewBox="0 0 800 800" fill="currentColor">
              <path d="M400 80C225.9 80 80 225.9 80 400C80 574.1 225.9 720 400 720C574.1 720 720 574.1 720 400C720 225.9 574.1 80 400 80ZM400.1 190C455.3 190 500 234.7 500 289.9C500 345.1 455.3 389.8 400.1 389.8C344.9 389.8 300.2 345.1 300.2 289.9C300.2 234.7 344.9 190 400.1 190ZM179.8 510.2L274.2 416.8C287.5 442.8 311.1 462.4 339.9 470.1L339.9 589.7C269.7 582.6 211.5 553.5 179.8 510.2ZM460.1 589.7L460.1 470.1C488.9 462.4 512.5 442.8 525.8 416.8L620.2 510.2C588.5 553.6 530.3 582.6 460.1 589.7ZM654.4 461.6L560.4 368.6C567.4 347.1 567.4 324 560.4 302.5L654.4 209.4C681.3 264.1 693.2 329.2 679.6 396C671 437.8 651.6 476.5 620.2 510.2C620.2 510.2 622.2 491.3 654.4 461.6ZM239.6 368.6L145.6 461.6C118.7 406.9 106.8 341.8 120.4 275C129 233.2 148.4 194.5 179.8 160.8C179.8 160.8 177.8 179.7 145.6 209.4L239.6 302.4C232.6 324 232.6 347 239.6 368.6ZM339.9 210.3L339.9 329.9C311.1 337.6 287.5 357.2 274.2 383.2L179.8 289.8C211.5 246.5 269.7 217.4 339.9 210.3ZM525.8 383.2C512.5 357.2 488.9 337.6 460.1 329.9L460.1 210.3C530.3 217.4 588.5 246.4 620.2 289.8L525.8 383.2Z"/>
            </svg>
            Solutions
          </Link>
          <Link href="/resources" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-nautical-seafoam" viewBox="0 0 800 800" fill="currentColor">
              <path d="M400 80L325 130V155H475V130L400 80ZM350 180V630H250L200 680H600L550 630H450V180H400H350ZM375 205H425V255H375V205ZM375 280H425V330H375V280ZM375 355H425V405H375V355ZM375 430H425V480H375V430ZM375 505H425V555H375V505ZM375 580H425V630H375V580ZM300 130L200 80L225 130H300ZM500 130H575L600 80L500 130Z"/>
            </svg>
            Resources
          </Link>
          <Link href="/about" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-nautical-sunset" viewBox="0 0 800 800" fill="currentColor">
              <path d="M400 100C355.82 100 320 135.82 320 180C320 217.73 345.97 249.1 380 258.6V690C350 680 320 665 290 650V580H330C335.52 580 340 575.52 340 570V530C340 524.48 335.52 520 330 520H230C224.48 520 220 524.48 220 530V570C220 575.52 224.48 580 230 580H270V630C250 620 230 610 210 600C160 570 130 560 100 560V620C137.14 620 168.28 631.27 202.2 646.8C251.08 669.37 306.05 695 400 695C493.95 695 548.92 669.37 597.8 646.8C631.72 631.27 662.86 620 700 620V560C670 560 640 570 590 600C570 610 550 620 530 630V580H570C575.52 580 580 575.52 580 570V530C580 524.48 575.52 520 570 520H470C464.48 520 460 524.48 460 530V570C460 575.52 464.48 580 470 580H510V650C480 665 450 680 420 690V258.6C454.03 249.1 480 217.73 480 180C480 135.82 444.18 100 400 100ZM400 220C377.94 220 360 202.06 360 180C360 157.94 377.94 140 400 140C422.06 140 440 157.94 440 180C440 202.06 422.06 220 400 220Z"/>
            </svg>
            About
          </Link>
          <Link href="/contact" className="btn-primary flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-white" viewBox="0 0 800 800" fill="currentColor">
              <path d="M400 150L250 400H400V150ZM400 150L550 400H400V150ZM180 450L180 500H620L620 450L180 450ZM400 500L250 700H550L400 500Z"/>
            </svg>
            Book a Harbor Check
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 text-primary-700" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 inset-x-0 shadow-lg animate-fade-up">
          <div className="flex flex-col py-4 px-4 space-y-4">
            <Link 
              href="/services" 
              className="text-secondary-navy hover:text-primary-700 transition-colors p-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-1.5 text-nautical-azure" viewBox="0 0 800 800" fill="currentColor">
                <path d="M755 400C730 350 705 325 680 325C642.5 325 605 400 555 400C505 400 467.5 325 430 325C392.5 325 355 400 305 400C255 400 217.5 325 180 325C142.5 325 105 400 55 400C42.5 400 30 394.5 20 387L20 450C30 457.5 42.5 462.5 55 462.5C105 462.5 142.5 387.5 180 387.5C217.5 387.5 255 462.5 305 462.5C355 462.5 392.5 387.5 430 387.5C467.5 387.5 505 462.5 555 462.5C605 462.5 642.5 387.5 680 387.5C705 387.5 730 412.5 755 462.5L755 400Z"/>
              </svg>
              Services
            </Link>
            <Link 
              href="/solutions" 
              className="text-secondary-navy hover:text-primary-700 transition-colors p-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-1.5 text-nautical-deepBlue" viewBox="0 0 800 800" fill="currentColor">
                <path d="M400 80C225.9 80 80 225.9 80 400C80 574.1 225.9 720 400 720C574.1 720 720 574.1 720 400C720 225.9 574.1 80 400 80ZM400.1 190C455.3 190 500 234.7 500 289.9C500 345.1 455.3 389.8 400.1 389.8C344.9 389.8 300.2 345.1 300.2 289.9C300.2 234.7 344.9 190 400.1 190ZM179.8 510.2L274.2 416.8C287.5 442.8 311.1 462.4 339.9 470.1L339.9 589.7C269.7 582.6 211.5 553.5 179.8 510.2ZM460.1 589.7L460.1 470.1C488.9 462.4 512.5 442.8 525.8 416.8L620.2 510.2C588.5 553.6 530.3 582.6 460.1 589.7ZM654.4 461.6L560.4 368.6C567.4 347.1 567.4 324 560.4 302.5L654.4 209.4C681.3 264.1 693.2 329.2 679.6 396C671 437.8 651.6 476.5 620.2 510.2C620.2 510.2 622.2 491.3 654.4 461.6ZM239.6 368.6L145.6 461.6C118.7 406.9 106.8 341.8 120.4 275C129 233.2 148.4 194.5 179.8 160.8C179.8 160.8 177.8 179.7 145.6 209.4L239.6 302.4C232.6 324 232.6 347 239.6 368.6ZM339.9 210.3L339.9 329.9C311.1 337.6 287.5 357.2 274.2 383.2L179.8 289.8C211.5 246.5 269.7 217.4 339.9 210.3ZM525.8 383.2C512.5 357.2 488.9 337.6 460.1 329.9L460.1 210.3C530.3 217.4 588.5 246.4 620.2 289.8L525.8 383.2Z"/>
              </svg>
              Solutions
            </Link>
            <Link 
              href="/resources" 
              className="text-secondary-navy hover:text-primary-700 transition-colors p-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-1.5 text-nautical-seafoam" viewBox="0 0 800 800" fill="currentColor">
                <path d="M400 80L325 130V155H475V130L400 80ZM350 180V630H250L200 680H600L550 630H450V180H400H350ZM375 205H425V255H375V205ZM375 280H425V330H375V280ZM375 355H425V405H375V355ZM375 430H425V480H375V430ZM375 505H425V555H375V505ZM375 580H425V630H375V580ZM300 130L200 80L225 130H300ZM500 130H575L600 80L500 130Z"/>
              </svg>
              Resources
            </Link>
            <Link 
              href="/about" 
              className="text-secondary-navy hover:text-primary-700 transition-colors p-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-1.5 text-nautical-sunset" viewBox="0 0 800 800" fill="currentColor">
                <path d="M400 100C355.82 100 320 135.82 320 180C320 217.73 345.97 249.1 380 258.6V690C350 680 320 665 290 650V580H330C335.52 580 340 575.52 340 570V530C340 524.48 335.52 520 330 520H230C224.48 520 220 524.48 220 530V570C220 575.52 224.48 580 230 580H270V630C250 620 230 610 210 600C160 570 130 560 100 560V620C137.14 620 168.28 631.27 202.2 646.8C251.08 669.37 306.05 695 400 695C493.95 695 548.92 669.37 597.8 646.8C631.72 631.27 662.86 620 700 620V560C670 560 640 570 590 600C570 610 550 620 530 630V580H570C575.52 580 580 575.52 580 570V530C580 524.48 575.52 520 570 520H470C464.48 520 460 524.48 460 530V570C460 575.52 464.48 580 470 580H510V650C480 665 450 680 420 690V258.6C454.03 249.1 480 217.73 480 180C480 135.82 444.18 100 400 100ZM400 220C377.94 220 360 202.06 360 180C360 157.94 377.94 140 400 140C422.06 140 440 157.94 440 180C440 202.06 422.06 220 400 220Z"/>
              </svg>
              About
            </Link>
            <Link 
              href="/contact" 
              className="btn-primary text-center flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-4 h-4 mr-1.5 text-white" viewBox="0 0 800 800" fill="currentColor">
                <path d="M400 150L250 400H400V150ZM400 150L550 400H400V150ZM180 450L180 500H620L620 450L180 450ZM400 500L250 700H550L400 500Z"/>
              </svg>
              Book a Harbor Check
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 