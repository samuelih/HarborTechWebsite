"use client";

import { useState } from 'react';
import Link from 'next/link';

// Solution data with small-town friendly language
const solutions = [
  {
    title: "Quick Checkout",
    tagline: "Take any payment in seconds.",
    iconClass: "checkout",
    offerings: [
      "Tap, chip, or swipe cards",
      "Apple Pay & Google Pay",
      "Split bills and tips",
      "Keeps working if Wi-Fi drops"
    ]
  },
  {
    title: "Track Your Stock",
    tagline: "Know what's on the shelf.",
    iconClass: "inventory",
    offerings: [
      "Automatic stock counts",
      "Low-stock text alerts",
      "Print barcode labels",
      "One-click reorder list"
    ]
  },
  {
    title: "Keep Customers Coming Back",
    tagline: "Simple rewards they'll love.",
    iconClass: "loyalty",
    offerings: [
      "Loyalty points program",
      "Digital gift cards",
      "Easy coupons & sales",
      "Birthday offers"
    ]
  },
  {
    title: "Sell Online & Pick-Up",
    tagline: "Reach shoppers everywhere.",
    iconClass: "omnichannel",
    offerings: [
      "Sync with your website",
      "Curb-side or in-store pickup",
      "Local delivery labels",
      "Hassle-free returns"
    ]
  },
  {
    title: "Clear Reports",
    tagline: "See today's numbers tonight.",
    iconClass: "reports",
    offerings: [
      "Daily sales email",
      "Best-seller list",
      "Easy CSV exports"
    ]
  },
  {
    title: "Team & Support",
    tagline: "Run the shop—stress-free.",
    iconClass: "operations",
    offerings: [
      "Staff clock-in/out",
      "Simple permission levels",
      "Automatic software updates",
      "Friendly help chat"
    ]
  }
];

// Simple, friendly icons
const IconComponents = {
  'checkout': () => (
    <svg className="solution-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h2l2 11h12l2-7H8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  ),
  'inventory': () => (
    <svg className="solution-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 17H7m4-4H7m4-4H7m8 0h-2m2 4h-2m2 4h-2" />
    </svg>
  ),
  'loyalty': () => (
    <svg className="solution-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  'omnichannel': () => (
    <svg className="solution-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  'reports': () => (
    <svg className="solution-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 21H3V3m4 12l4-8 4 4 4-8" />
    </svg>
  ),
  'operations': () => (
    <svg className="solution-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-4-4 4 4 0 0 1 4-4 10 10 0 0 0-10-2" />
    </svg>
  )
};

const SolutionsPage = () => {
  const [touchedCard, setTouchedCard] = useState<number | null>(null);

  const handleTouchStart = (index: number) => {
    setTouchedCard(index);
  };

  const handleTouchEnd = () => {
    setTouchedCard(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-nautical-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="relative inline-block">
                How We Can Help Your Shop
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
              </span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Choose only what you need—easy, local, done right.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-16 sm:py-20 md:py-24 bg-neutral-mist">
        <div className="container mx-auto px-4">
          <div className="card-grid">
            {solutions.map((solution, index) => {
              const Icon = IconComponents[solution.iconClass as keyof typeof IconComponents];
              return (
                <article 
                  key={solution.title}
                  className="solution-card"
                  onTouchStart={() => handleTouchStart(index)}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className={`solution-card-inner ${touchedCard === index ? 'transform-gpu rotate-y-180' : ''}`}>
                    <div className="solution-card-front">
                      <Icon />
                      <h3 className="solution-card-title">{solution.title}</h3>
                      <p className="solution-card-tagline">{solution.tagline}</p>
                    </div>
                    <div className="solution-card-back">
                      <h3 className="solution-card-title mb-6">{solution.title}</h3>
                      <ul className="solution-card-offerings">
                        {solution.offerings.map((offering, i) => (
                          <li key={i}>{offering}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Anything catch your eye?
          </h2>
          <p className="text-lg sm:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            Let's chat about how we can help your shop grow—no tech jargon, just straight talk.
          </p>
          <Link 
            href="/lets-talk" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Let's Talk
            <svg 
              className="w-5 h-5" 
              viewBox="0 0 20 20" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path 
                d="M4 10h12m0 0l-4-4m4 4l-4 4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage; 