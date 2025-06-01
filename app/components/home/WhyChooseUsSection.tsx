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
      feature: "Pricing Model",
      htc: "Flat project quote—know the exact cost up-front",
      rival: "Hourly billing ($150 – $200 /hr)",
      tooltip: "No surprise bills or scope creep—you know exactly what you'll pay before we start"
    },
    {
      feature: "Local Expertise", 
      htc: "Runs 60+ Harbor Springs storefront audits each year",
      rival: "Regional/general focus, little Main-Street insight",
      tooltip: "We understand the unique challenges of seasonal tourism businesses"
    },
    {
      feature: "Project Timeline",
      htc: "2–4 weeks from kickoff to launch", 
      rival: "6–12 weeks average",
      tooltip: "Fast turnaround means you're selling online before peak season"
    },
    {
      feature: "Support Style",
      htc: "Same-day visits within Emmet Co.",
      rival: "Remote call-center, travel fees", 
      tooltip: "Real person, real help, right when you need it most"
    },
    {
      feature: "Community Investment", 
      htc: "Sponsors Harbor Springs robotics & youth sailing",
      rival: "No local investment",
      tooltip: "We're neighbors first, vendors second—invested in our community's success"
    }
  ];

  return (
    <section id="comparison-section" className="comparison-section py-20 px-4 md:px-0">
      {/* Enhanced Section Header */}
      <div className="section-header">
        <h2 className="section-title">Why Local Shops Pick Us</h2>
        <p className="section-promise">Compare at a glance—decide in 30 seconds</p>
      </div>

      {/* Comparison Table with Enhanced Styling */}
      <div className={`comparison-table-wrapper ${isVisible ? 'animate-fade-in' : ''}`}>
        <div className="comparison-table" role="table" aria-label="Harbor Technology Consulting advantages">
          
          {/* Header Row */}
          <div className="header-row" role="row">
            <div className="header-cell htc-header" role="columnheader">
              <div className="header-content">
                <Anchor className="header-icon" size={28} />
                <span>Harbor Technology Consulting</span>
              </div>
            </div>
            <div className="header-cell rival-header" role="columnheader">
              <div className="header-content">
                <HelpCircle className="header-icon" size={28} />
                <span>Typical IT Vendor</span>
              </div>
            </div>
          </div>

          {/* Data Rows */}
          {comparisonData.map((item, index) => (
            <div key={index} className="data-row group" role="row">
              <div className="data-cell htc-cell" role="cell">
                <div className="cell-content">
                  <Check className="cell-icon htc-icon" size={20} aria-hidden="true" />
                  <div className="cell-text">
                    <span className="feature-highlight">{item.feature}:</span>
                    <span className="feature-detail"> {item.htc}</span>
                  </div>
                  {/* Better Ribbon for Mobile */}
                  <div className="better-ribbon">✓ Better</div>
                </div>
                {/* Tooltip */}
                <div className="tooltip">{item.tooltip}</div>
              </div>
              <div className="data-cell rival-cell" role="cell">
                <div className="cell-content">
                  <X className="cell-icon rival-icon" size={20} aria-hidden="true" />
                  <div className="cell-text">
                    <span className="feature-detail">{item.rival}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Banner */}
      <div className="cta-banner">
        <div className="cta-content">
          <h3 className="cta-headline">Ready to skip the hourly guessing game?</h3>
          <p className="cta-subtext">Let's map out your project in one free 20-min call.</p>
          <button className="btn-accent btn-large">
            Schedule My Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 