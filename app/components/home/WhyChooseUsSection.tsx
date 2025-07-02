"use client";

import React from 'react';
import Image from 'next/image';
import { Check, X, Anchor, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      htc: "One flat project price.",
      rival: "Hourly meter ($150–$200/hr) plus \"miscellaneous\" add‑ons that stack up fast.",
      tooltip: "Transparent billing with no surprises or scope creep—you know exactly what you'll pay before we start"
    },
    {
      feature: "Local Insight", 
      htc: "Harbor‑Springs born & raised.",
      rival: "Fly‑in technicians who treat Main Street like any strip mall—zero seasonal nuance.",
      tooltip: "We design around tourist swings and the neighbor‑helping‑neighbor mindset"
    },
    {
      feature: "Timeline",
      htc: "2–4 weeks from kickoff to go‑live.", 
      rival: "6–12+ weeks.",
      tooltip: "We will work with you to know when is best to implement"
    },
    {
      feature: "Included Support",
      htc: "For NO ADDITIONAL COST, we offer training resources, cheatsheets, 1 hour of phone calls per month, chatbots trained on manuals, and more.",
      rival: "Has entire concerts with their hold‑music, crummy remote call centers, and travel surcharges for on‑site help.", 
      tooltip: "The paid support package includes remote support, 24/7 response, and unlimited phone calls."
    },
    {
      feature: "Community Involvement", 
      htc: "Plans to sponsor Harbor Springs Robotics, Youth Sailing, and Street Musique.",
      rival: "No local investment—your dollars leave town the moment you pay.",
      tooltip: "Profits stay on the bay"
    }
  ];

  return (
    <section id="comparison-section" className="comparison-section section-padding container-padding">
      {/* Enhanced Section Header */}
      <div className="section-header text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="mb-4 sm:mb-6 relative">
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

      {/* Comparison Table with Enhanced Mobile Styling */}
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
                <span className="text-sm sm:text-base md:text-lg font-bold">"Common" Competitors</span>
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
    </section>
  );
};

export default WhyChooseUsSection; 