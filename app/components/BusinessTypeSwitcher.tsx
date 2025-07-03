"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const businessTypes = {
  retail: {
    label: 'Retail Shops',
    icon: '/images/icons/general/shopping-cart.svg',
    accentColor: 'accent-gold',
    accentColorClasses: {
      bg: 'bg-accent-gold',
      text: 'text-accent-gold',
      border: 'border-accent-gold',
      bgWithOpacity: 'bg-accent-gold/5',
      bulletColor: 'bg-accent-gold'
    },
    description: 'From boutique stores to specialty shops, we create custom solutions for your unique retail needs.',
    highlights: [
      'Custom point-of-sale systems',
      'Inventory management that fits your workflow',
      'Customer engagement tools',
      'Sales analytics and reporting'
    ]
  },
  restaurants: {
    label: 'Restaurants & Cafes',
    icon: '/images/icons/general/chef-hat.svg',
    accentColor: 'accent-seafoam',
    accentColorClasses: {
      bg: 'bg-accent-seafoam',
      text: 'text-accent-seafoam',
      border: 'border-accent-seafoam',
      bgWithOpacity: 'bg-accent-seafoam/5',
      bulletColor: 'bg-accent-seafoam'
    },
    description: 'Every restaurant is different. We design technology solutions that match your service style.',
    highlights: [
      'Kitchen workflow optimization',
      'Custom ordering systems',
      'Table management solutions',
      'Staff coordination tools'
    ]
  },
  service: {
    label: 'Service Businesses',
    icon: '/images/icons/general/hands-stars.svg',
    accentColor: 'primary-blue',
    accentColorClasses: {
      bg: 'bg-primary-blue',
      text: 'text-primary-blue',
      border: 'border-primary-blue',
      bgWithOpacity: 'bg-primary-blue/5',
      bulletColor: 'bg-primary-blue'
    },
    description: 'Whether you\'re a salon, repair shop, or professional service, we build what works for you.',
    highlights: [
      'Appointment scheduling systems',
      'Client management tools',
      'Project tracking solutions',
      'Custom billing workflows'
    ]
  }
};

type BusinessType = keyof typeof businessTypes;

const BusinessTypeSwitcher = () => {
  const [activeType, setActiveType] = useState<BusinessType | null>(null);

  const toggleBusinessType = (type: BusinessType) => {
    setActiveType(activeType === type ? null : type);
  };

  const BusinessTypeDetails = ({ type }: { type: BusinessType }) => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="bg-white rounded-xl p-6 mt-4 border-2 border-neutral-100 shadow-lg">
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-12 h-12 ${businessTypes[type].accentColorClasses.bg} rounded-xl mb-3`}>
            <Image
              src={businessTypes[type].icon}
              alt={businessTypes[type].label}
              width={24}
              height={24}
              className="brightness-0 invert"
            />
          </div>
          <h3 className="text-xl font-display font-bold text-nautical-navy mb-2">
            {businessTypes[type].label}
          </h3>
          <p className="text-base text-neutral-600">
            {businessTypes[type].description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <div>
            <h4 className="font-bold text-nautical-navy mb-3">What We Customize For You:</h4>
            <ul className="space-y-2">
              {businessTypes[type].highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <div className={`w-2 h-2 ${businessTypes[type].accentColorClasses.bulletColor} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                  <span className="text-neutral-700 text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-50 rounded-lg p-4">
            <h4 className="font-bold text-nautical-navy mb-3">Our Approach:</h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <p>✓ We start by understanding your specific workflow</p>
              <p>✓ We recommend only what you actually need</p>
              <p>✓ We build solutions that grow with your business</p>
              <p>✓ We train your team to use everything confidently</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/contact" 
            className="btn-primary btn-large inline-flex items-center gap-2"
          >
            Get Your Custom Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-nautical-navy">
          <span className="relative inline-block">
            Custom Solutions
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
          </span>
          {" "}for Every Business
        </h2>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
          No cookie-cutter packages. No unnecessary features. Just technology that works the way <em>your</em> business works.
        </p>
        <div className="bg-gradient-to-r from-accent-gold/10 to-primary-blue/10 rounded-xl p-6 border-l-4 border-accent-gold max-w-2xl mx-auto">
          <p className="text-lg font-semibold text-nautical-navy">
            Every solution is tailored to your specific needs, budget, and goals.
          </p>
        </div>
      </div>

      {/* Business Type Selector */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {Object.entries(businessTypes).map(([key, business]) => (
            <button
              key={key}
              onClick={() => toggleBusinessType(key as BusinessType)}
              className={`group relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                activeType === key 
                  ? `${business.accentColorClasses.border} ${business.accentColorClasses.bgWithOpacity}`
                  : 'border-neutral-200 hover:border-neutral-300 bg-white hover:bg-neutral-50'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                  activeType === key 
                    ? business.accentColorClasses.bg
                    : 'bg-neutral-100 group-hover:bg-neutral-200'
                }`}>
                  <Image
                    src={business.icon}
                    alt={business.label}
                    width={24}
                    height={24}
                    className={`${
                      activeType === key 
                        ? 'brightness-0 invert' 
                        : 'opacity-60 group-hover:opacity-80'
                    }`}
                  />
                </div>
                <h3 className="font-display font-bold text-lg text-nautical-navy">
                  {business.label}
                </h3>
              </div>
              <p className="text-neutral-600 text-sm">
                Click to see how we customize solutions for your industry
              </p>
              <div className="mt-4 text-right">
                <span className={`text-sm font-medium ${
                  activeType === key ? business.accentColorClasses.text : 'text-neutral-400'
                }`}>
                  {activeType === key ? 'Hide details' : 'View details'}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Accordion Layout */}
        <div className="md:hidden space-y-4">
          {Object.entries(businessTypes).map(([key, business]) => (
            <div key={key} className="border border-neutral-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleBusinessType(key as BusinessType)}
                className={`w-full p-6 text-left transition-all duration-300 ${
                  activeType === key 
                    ? `${business.accentColorClasses.bgWithOpacity} ${business.accentColorClasses.border} border-2`
                    : 'bg-white hover:bg-neutral-50 border-0'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      activeType === key 
                        ? business.accentColorClasses.bg
                        : 'bg-neutral-100'
                    }`}>
                      <Image
                        src={business.icon}
                        alt={business.label}
                        width={24}
                        height={24}
                        className={`${
                          activeType === key 
                            ? 'brightness-0 invert' 
                            : 'opacity-60'
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-nautical-navy">
                        {business.label}
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        Tap to see custom solutions
                      </p>
                    </div>
                  </div>
                  <div className={`transition-transform duration-300 ${
                    activeType === key ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              <AnimatePresence>
                {activeType === key && (
                  <BusinessTypeDetails type={key as BusinessType} />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Business Type Details */}
      <div className="hidden md:block">
        <AnimatePresence mode="wait">
          {activeType && (
            <motion.div
              key={activeType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-neutral-100 shadow-lg">
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${businessTypes[activeType].accentColorClasses.bg} rounded-xl mb-4`}>
                    <Image
                      src={businessTypes[activeType].icon}
                      alt={businessTypes[activeType].label}
                      width={32}
                      height={32}
                      className="brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-nautical-navy mb-3">
                    {businessTypes[activeType].label}
                  </h3>
                  <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    {businessTypes[activeType].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-nautical-navy mb-4">What We Customize For You:</h4>
                    <ul className="space-y-3">
                      {businessTypes[activeType].highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <div className={`w-2 h-2 ${businessTypes[activeType].accentColorClasses.bulletColor} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-neutral-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <h4 className="font-bold text-nautical-navy mb-4">Our Approach:</h4>
                    <div className="space-y-3 text-sm text-neutral-600">
                      <p>✓ We start by understanding your specific workflow</p>
                      <p>✓ We recommend only what you actually need</p>
                      <p>✓ We build solutions that grow with your business</p>
                      <p>✓ We train your team to use everything confidently</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link 
                    href="/contact" 
                    className="btn-primary btn-large inline-flex items-center gap-2"
                  >
                    Get Your Custom Quote
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 pt-8 border-t border-neutral-200">
        <h3 className="text-xl font-display font-bold text-nautical-navy mb-4">
          Don't See Your Business Type?
        </h3>
        <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
          We work with all kinds of businesses. Every solution is custom-built, so we can adapt to any industry or workflow.
        </p>
        <Link 
          href="/contact" 
          className="btn-secondary btn-large inline-flex items-center gap-2"
        >
          Tell Us About Your Business
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BusinessTypeSwitcher; 