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
    <section id="comparison-section" className="comparison-section py-20 px-4 md:px-0">
      {/* Enhanced Section Header */}
      <div className="section-header">
        <h2 className="section-title">Why Harbor Springs shops choose us</h2>
        <p className="section-promise">Compare at a glance—decide in 30 seconds</p>
      </div>

      {/* Comparison Table with Enhanced Styling */}
      <div className={`comparison-table-wrapper ${isVisible ? 'animate-fade-in' : ''}`}>
        <div className="comparison-table" role="table" aria-label="Harbor Technology Consulting advantages">
          
          {/* Header Row */}
          <div className="header-row" role="row">
            <div className="header-cell htc-header" role="columnheader">
              <div className="header-content">
                <span>Harbor Technology Consulting</span>
              </div>
            </div>
            <div className="header-cell rival-header" role="columnheader">
              <div className="header-content">
                <span>"Common" Competitors</span>
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
    </section>
  );
};

export default WhyChooseUsSection; 