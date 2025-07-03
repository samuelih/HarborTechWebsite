"use client";

import React from 'react';
import Image from 'next/image';
import { Check, X, Anchor, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

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

  const comparisonData = [
    {
      feature: "Flat-Rate Pricing",
      icon: "💰",
      htc: "One flat project price.",
      rival: "Hourly meter ($150–$200/hr) plus \"miscellaneous\" add‑ons that stack up fast.",
      tooltip: "Transparent billing with no surprises or scope creep—you know exactly what you'll pay before we start",
      highlight: "No surprise costs"
    },
    {
      feature: "Local Insight", 
      icon: "🏠",
      htc: "Harbor‑Springs born & raised.",
      rival: "Fly‑in technicians who treat Main Street like any strip mall—zero seasonal nuance.",
      tooltip: "We design around tourist swings and the neighbor‑helping‑neighbor mindset",
      highlight: "Hometown advantage"
    },
    {
      feature: "Timeline",
      icon: "⚡",
      htc: "2–4 weeks from kickoff to go‑live.", 
      rival: "6–12+ weeks.",
      tooltip: "We will work with you to know when is best to implement",
      highlight: "Fast implementation"
    },
    {
      feature: "Included Support",
      icon: "🤝",
      htc: "For NO ADDITIONAL COST, we offer training resources, cheatsheets, 1 hour of phone calls per month, chatbots trained on manuals, and more.",
      rival: "Has entire concerts with their hold‑music, crummy remote call centers, and travel surcharges for on‑site help.", 
      tooltip: "The paid support package includes remote support, 24/7 response, and unlimited phone calls.",
      highlight: "Free training & support"
    },
    {
      feature: "Community Involvement", 
      icon: "❤️",
      htc: "Plans to sponsor Harbor Springs Robotics, Youth Sailing, and Street Musique.",
      rival: "No local investment—your dollars leave town the moment you pay.",
      tooltip: "Profits stay on the bay",
      highlight: "Local investment"
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="comparison-section" className="section-padding container-padding">
      {/* Enhanced Section Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-nautical-navy relative">
          Why Harbor Springs shops choose us
          {/* Wave underline */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-96 h-1 bg-repeat-x opacity-80" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'4\' viewBox=\'0 0 20 4\'%3E%3Cpath d=\'M0,2 Q5,0 10,2 T20,2\' stroke=\'%23205d96\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E")',
            backgroundSize: '20px 4px'
          }}></div>
        </h2>
        <p className="text-lg sm:text-xl font-cinzel text-primary-navy max-w-3xl mx-auto leading-relaxed mb-2 opacity-90">
          Compare at a glance—decide in 30 seconds
        </p>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4 max-w-2xl mx-auto">
        {comparisonData.map((item, index) => (
          <div key={index} className="bg-white rounded-xl border-2 border-neutral-200 overflow-hidden shadow-sm">
            <button
              onClick={() => toggleCard(index)}
              className="w-full p-6 text-left hover:bg-neutral-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{item.icon}</div>
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
                <div className="bg-green-50 border-l-4 border-accent-gold p-4 rounded-r-lg">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
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
            {comparisonData.map((item, index) => (
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

      {/* Bottom CTA */}
      <div className="text-center mt-12 pt-8 border-t border-neutral-200">
        <div className="bg-gradient-to-r from-accent-gold/10 to-primary-blue/10 rounded-xl p-6 border-l-4 border-accent-gold max-w-2xl mx-auto">
          <h3 className="text-xl font-display font-bold text-nautical-navy mb-2">
            Ready to experience the difference?
          </h3>
          <p className="text-neutral-600 mb-4">
            Let's discuss how we can modernize your business with transparent pricing and local expertise.
          </p>
          <a 
            href="/contact" 
            className="btn-primary btn-large inline-flex items-center gap-2"
          >
            Get Your Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 