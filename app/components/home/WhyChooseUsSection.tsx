"use client";

import React from 'react';
import Image from 'next/image';
import { Check, X, Anchor, HelpCircle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFullComparison, setShowFullComparison] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Carousel reasons data (simplified for cards)
  const carouselReasons = [
    {
      title: "One price. No surprises.",
      icon: "/images/icons/general/money.svg",
      description: "Flat-rate pricing means you know exactly what you'll pay upfront.",
      htcBenefit: "One flat project price",
      rivalDownside: "Hourly meter + surprise fees",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "We know Harbor Springs.",
      icon: "/images/icons/general/home.svg", 
      description: "Born and raised here—we understand local businesses and seasonal needs.",
      htcBenefit: "Local Harbor Springs expertise",
      rivalDownside: "Generic corporate approach",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Go live in 2–4 weeks.",
      icon: "/images/icons/general/clock.svg",
      description: "Quick implementation gets you up and running fast.",
      htcBenefit: "2–4 weeks to launch",
      rivalDownside: "6–12+ weeks typical",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      title: "Training & support, no extra cost.",
      icon: "/images/icons/general/bouy.svg",
      description: "Complete training, cheat sheets, and ongoing support included.",
      htcBenefit: "Free training & unlimited support",
      rivalDownside: "Pay-per-call support",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      title: "We reinvest in Harbor Springs.",
      icon: "/images/icons/general/community.svg",
      description: "Local profits support youth sailing, robotics, and community events.",
      htcBenefit: "Community investment & sponsorship",
      rivalDownside: "Profits leave town immediately",
      gradient: "from-teal-400 to-teal-600"
    }
  ];

  // Full comparison data (original format for expanded view)
  const fullComparisonData = [
    {
      feature: "Flat-Rate Pricing",
      icon: "/images/icons/general/money.svg",
      htc: "One flat project price. Know exactly what you'll pay before we start",
      rival: "Hourly meter ($150–$200/hr) plus \"miscellaneous\" add‑ons that stack up fast.",
      tooltip: "No suprises or scope creep. 100% transparent billing.",
      highlight: "No surprise costs"
    },
    {
      feature: "Local Insight", 
      icon: "/images/icons/general/home.svg",
      htc: "Harbor‑Springs born & raised.",
      rival: "Made for large companies. Zero seasonal nuance. Lacks interpersonal communication skills.",
      tooltip: "We design around tourist swings and the neighbor‑helping‑neighbor mindset",
      highlight: "Hometown advantage"
    },
    {
      feature: "Timeline",
      icon: "/images/icons/general/clock.svg",
      htc: "2–4 weeks from kickoff to go‑live.", 
      rival: "6–12+ weeks.",
      tooltip: "Time is money.",
      highlight: "Fast implementation"
    },
    {
      feature: "Included Support",
      icon: "/images/icons/general/bouy.svg",
      htc: "For NO ADDITIONAL COST, we offer training resources, cheatsheets, 1 hour of phone calls per month, chatbots trained on manuals, and more.",
      rival: "Has entire concerts with their hold‑music, crummy remote call centers, and travel surcharges for on‑site help.", 
      tooltip: "Only pay for the support you need.",
      highlight: "Free training & support"
    },
    {
      feature: "Community Involvement", 
      icon: "/images/icons/general/community.svg",
      htc: "Plans to sponsor Harbor Springs Robotics, Youth Sailing, and Street Musique.",
      rival: "No local investment—your dollars leave town the moment you pay.",
      tooltip: "Profits stay on the bay",
      highlight: "Local investment"
    }
  ];

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (isAutoPlaying && !isDragging && !showFullComparison) {
        setCurrentSlide(prev => (prev + 1) % carouselReasons.length);
      }
    }, 4000);
  }, [isAutoPlaying, isDragging, showFullComparison, carouselReasons.length]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  }, []);

  // Navigation functions
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume auto-play after 8 seconds
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % carouselReasons.length);
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? carouselReasons.length - 1 : currentSlide - 1);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setIsDragging(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('comparison-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Auto-play management
  useEffect(() => {
    if (isVisible && !showFullComparison) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isVisible, showFullComparison, startAutoPlay, stopAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showFullComparison) return;
      
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, showFullComparison]);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="comparison-section" className="section-padding bg-gradient-to-b from-white to-neutral-mist/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-blue/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
      {/* Enhanced Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-primary-navy relative">
              Why Harbor Springs shops
              <br />
              <span className="text-accent-gold">choose us</span>
          {/* Wave underline */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-96 h-1 bg-repeat-x opacity-80" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'4\' viewBox=\'0 0 20 4\'%3E%3Cpath d=\'M0,2 Q5,0 10,2 T20,2\' stroke=\'%23EBBC60\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E")',
            backgroundSize: '20px 4px'
          }}></div>
        </h2>
            <p className="text-lg sm:text-xl font-cinzel text-primary-navy max-w-3xl mx-auto leading-relaxed opacity-90">
              Five reasons local businesses love working with us
            </p>
          </div>
        </div>

        {!showFullComparison ? (
          /* Carousel Mode */
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="relative max-w-6xl mx-auto"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
            >
              {/* Cards Container */}
              <div className="overflow-hidden rounded-3xl">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ 
                    transform: `translateX(-${currentSlide * (100 / carouselReasons.length)}%)`,
                    width: `${carouselReasons.length * 100}%`
                  }}
                >
                  {carouselReasons.map((reason, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 px-4"
                      style={{ width: `${100 / carouselReasons.length}%` }}
                    >
                      <div className={`relative group cursor-pointer transform transition-all duration-500 ${
                        index === currentSlide ? 'scale-105' : 'scale-95 opacity-75'
                      }`}>
                        {/* Main Card */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-200 group-hover:border-accent-gold/30 relative overflow-hidden">
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                          
                          {/* Content */}
                          <div className="relative z-10 text-center">
                            {/* Icon */}
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                              <Image
                                src={reason.icon}
                                alt={reason.title}
                                width={40}
                                height={40}
                                className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-navy mb-4 group-hover:text-primary-blue transition-colors duration-300">
                              {reason.title}
                            </h3>

                            {/* Description */}
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-md mx-auto">
                              {reason.description}
                            </p>

                            {/* Comparison Mini-Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                              {/* Us */}
                              <div className="bg-green-50 border border-green-200 rounded-xl p-4 group-hover:bg-green-100 transition-colors duration-300">
                                <div className="flex items-start gap-3">
                                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <div className="text-left">
                                    <h4 className="font-semibold text-primary-navy text-sm mb-1">Us</h4>
                                    <p className="text-sm text-neutral-700">{reason.htcBenefit}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Them */}
                              <div className="bg-red-50 border border-red-200 rounded-xl p-4 group-hover:bg-red-100 transition-colors duration-300">
                                <div className="flex items-start gap-3">
                                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                  <div className="text-left">
                                    <h4 className="font-semibold text-primary-navy text-sm mb-1">Them</h4>
                                    <p className="text-sm text-neutral-700">{reason.rivalDownside}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 flex items-center justify-center group z-10"
                aria-label="Previous reason"
              >
                <ChevronLeft className="w-6 h-6 text-primary-navy group-hover:text-primary-blue transition-colors" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 flex items-center justify-center group z-10"
                aria-label="Next reason"
              >
                <ChevronRight className="w-6 h-6 text-primary-navy group-hover:text-primary-blue transition-colors" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-8 gap-3">
              {carouselReasons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-accent-gold scale-125 shadow-lg' 
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to reason ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 text-sm text-neutral-500">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-neutral-400'} transition-colors`}></div>
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </div>
            </div>

            {/* View All Reasons Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => setShowFullComparison(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary-blue text-primary-blue rounded-xl hover:bg-primary-blue hover:text-white transition-all duration-300 font-semibold shadow-sm hover:shadow-lg"
              >
                View Full Comparison
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Full Comparison Mode */
          <div className="space-y-8">
            {/* Back Button */}
            <div className="text-center">
              <button
                onClick={() => setShowFullComparison(false)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-xl hover:bg-primary-navy transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                <ChevronUp className="w-4 h-4" />
                Back to Carousel
              </button>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4 max-w-2xl mx-auto">
              {fullComparisonData.map((item, index) => (
          <div key={index} className="bg-white rounded-xl border-2 border-neutral-200 overflow-hidden shadow-sm">
            <button
              onClick={() => toggleCard(index)}
              className="w-full p-6 text-left hover:bg-neutral-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={`${item.feature} icon`}
                      width={24}
                      height={24}
                      className="text-accent-gold"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-nautical-navy">
                      {item.feature}
                    </h3>
                    <p className="text-sm text-accent-gold font-semibold">
                      {item.highlight}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {expandedCard === index ? (
                    <ChevronUp className="w-5 h-5 text-neutral-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400" />
                  )}
                </div>
              </div>
            </button>
            
            {expandedCard === index && (
              <div className="px-6 pb-6 space-y-4 border-t border-neutral-100">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-nautical-navy text-sm mb-1">
                        Harbor Technology Consulting
                      </h4>
                      <p className="text-sm text-neutral-700">{item.htc}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-nautical-navy text-sm mb-1">
                        Typical IT Vendor
                      </h4>
                      <p className="text-sm text-neutral-700">{item.rival}</p>
                    </div>
                  </div>
                </div>
                
                {item.tooltip && (
                  <div className="bg-blue-50 border-l-4 border-primary-blue p-4 rounded-r-lg">
                    <div className="flex items-start space-x-3">
                      <HelpCircle className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-nautical-navy text-sm mb-1">
                          Why This Matters
                        </h4>
                        <p className="text-sm text-neutral-700">{item.tooltip}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Comparison Table */}
      <div className="hidden md:block">
        <div className={`comparison-table-wrapper ${isVisible ? 'animate-fade-in' : ''}`}>
          <div className="comparison-table" role="table" aria-label="Harbor Technology Consulting advantages">
            
            {/* Header Row */}
            <div className="header-row" role="row">
              <div className="header-cell htc-header" role="columnheader">
                <div className="header-content">
                  <span className="text-sm sm:text-base md:text-lg font-bold">Harbor Technology Consulting</span>
                </div>
              </div>
              <div className="header-cell rival-header" role="columnheader">
                <div className="header-content">
                  <span className="text-sm sm:text-base md:text-lg font-bold">Typical IT Vendor</span>
                </div>
              </div>
            </div>

            {/* Data Rows */}
                  {fullComparisonData.map((item, index) => (
              <div key={index} className="data-row group" role="row">
                <div className="data-cell htc-cell" role="cell">
                  <div className="cell-content">
                    <Check className="cell-icon htc-icon" size={16} aria-hidden="true" />
                    <div className="cell-text">
                      <span className="feature-highlight text-xs sm:text-sm font-semibold">{item.feature}:</span>
                      <span className="feature-detail text-xs sm:text-sm"> {item.htc}</span>
                    </div>
                  </div>
                  {/* Tooltip */}
                  <div className="tooltip text-xs sm:text-sm">{item.tooltip}</div>
                </div>
                <div className="data-cell rival-cell" role="cell">
                  <div className="cell-content">
                    <X className="cell-icon rival-icon" size={16} aria-hidden="true" />
                    <div className="cell-text">
                      <span className="feature-detail text-xs sm:text-sm">{item.rival}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 