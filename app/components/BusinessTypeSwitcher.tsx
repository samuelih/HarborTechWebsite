"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const businessTypes = {
  retail: {
    label: 'Retail Shops',
    icon: '/images/icons/general/shopping-cart.svg',
    gradient: 'from-accent-gold/10 to-accent-gold/5',
    accentColor: 'accent-gold',
    hoverGradient: 'from-accent-gold/20 to-accent-gold/10',
    activeGradient: 'from-accent-gold via-accent-gold/90 to-accent-gold/80',
    services: {
      featured: [
        { 
          name: 'POS Tune Up', 
          description: 'Fix slow check-outs, add tap to pay, tidy product library.',
          category: 'Sales'
        },
        { 
          name: 'Inventory Clean Up + auto Reorder Sheet', 
          description: 'One click counts, 4 week demand forecast in Google Sheets',
          category: 'Operations'
        },
        { 
          name: '"Click and Collect" Online Store', 
          description: 'Shopify site tied to instore stock, basic theme, 3 pages',
          category: 'Digital'
        },
        { 
          name: 'Sales and Stock Dashboard', 
          description: 'Daily KPIs piped from POS to a shareable Looker Studio',
          category: 'Analytics'
        }
      ],
      additional: {
        'Setup & Systems': [
          { name: 'POS Install', description: 'Choose system, order hardware, set up taxes and receipts' },
          { name: 'Cyber-Basics and Backup', description: 'Password manager, 2-factor logins, nightly cloud copy' },
          { name: 'In-Store Speaker / Display Systems', description: 'Audio and visual systems for your space' }
        ],
        'Marketing & Growth': [
          { name: 'Google Business Profile and SEO Optimization', description: 'Hours, photos, reviews' },
          { name: 'Website Refresh', description: 'Update copy, new hero image, shop map, etc.' },
          { name: 'Loyalty + email starter pack', description: 'Sign up QR code at till, mailchimp template, first campaign, etc' }
        ],
        'Staff & Operations': [
          { name: 'Payroll friendly Time Clock', description: 'Staff app, tip-pool reports, auto OT alert' },
          { name: 'FAQ (customer and staff) AI Chatbot', description: 'embed in site/POS, trains on policies' },
          { name: 'Staff Training + Cheat Sheets', description: 'On-site or Zoom, plus printable cheat sheets' }
        ]
      }
    }
  },
  restaurants: {
    label: 'Restaurants',
    icon: '/images/icons/general/chef-hat.svg',
    gradient: 'from-accent-sea/10 to-accent-sea/5',
    accentColor: 'accent-sea',
    hoverGradient: 'from-accent-sea/20 to-accent-sea/10',
    activeGradient: 'from-accent-sea via-accent-sea/90 to-accent-sea/80',
    services: {
      featured: [
        { 
          name: 'Table-side QR Ordering', 
          description: 'Print codes, configure mobile menu, push to kitchen printer',
          category: 'Ordering'
        },
        { 
          name: 'Kitchen Display System (KDS) Install', 
          description: 'Tablets, routing rules, expo screen',
          category: 'Kitchen'
        },
        { 
          name: 'Online Ordering + Curb-side', 
          description: 'Toast/Shopify Food app, hook to inventory and pickup texts',
          category: 'Delivery'
        },
        { 
          name: 'Reservations Sync', 
          description: 'Integrate OpenTable/ Resy with POS, real-time table status board',
          category: 'Management'
        }
      ],
      additional: {
        'Core Systems': [
          { name: 'POS Tune Up', description: 'Fix slow check-outs, add tap to pay, tidy product library.' },
          { name: 'Menu and Allergen Manager', description: 'Master menu in Google Sheets, pushes to QR, website, DoorDash' }
        ],
        'Marketing & Online': [
          { name: 'Google Business Profile and SEO Optimization', description: 'Hours, photos, reviews' },
          { name: 'Website Refresh', description: 'Update copy, new hero image, shop map, etc.' },
          { name: 'Loyalty + email starter pack', description: 'Sign up QR code at till, mailchimp template, first campaign, etc' }
        ],
        'Staff Management': [
          { name: 'Payroll friendly Time Clock', description: 'Staff app, tip-pool reports, auto OT alert' },
          { name: 'FAQ (customer and staff) AI Chatbot', description: 'embed in site/POS, trains on policies' }
        ]
      }
    }
  },
  service: {
    label: 'Services',
    icon: '/images/icons/general/hands-stars.svg',
    gradient: 'from-primary-blue/10 to-primary-blue/5',
    accentColor: 'primary-blue',
    hoverGradient: 'from-primary-blue/20 to-primary-blue/10',
    activeGradient: 'from-primary-blue via-primary-blue/90 to-primary-blue/80',
    services: {
      featured: [
        { 
          name: 'Online Booking and Smart Calendar', 
          description: 'Squarespace/ Square Appointments, sync to Google/Outlook, auto-reminders',
          category: 'Scheduling'
        },
        { 
          name: 'Job-Site Photo Uploader', 
          description: 'Simple phone form -> client gets time-stamped pics and notes',
          category: 'Documentation'
        },
        { 
          name: 'Quick-Quote Template Pack', 
          description: 'Branded PDF + auto-pricing spreadsheet for fast estimates',
          category: 'Sales'
        }
      ],
      additional: {
        'Business Operations': [
          { name: 'Website Refresh', description: 'Update copy, new hero image, shop map, etc.' },
          { name: 'POS Install', description: 'Choose system, order hardware, set up taxes and receipts' },
          { name: 'Inventory Clean Up + auto Reorder Sheet', description: 'One click counts, 4 week demand forecast in Google Sheets' }
        ],
        'Customer Engagement': [
          { name: 'Loyalty + email starter pack', description: 'Sign up QR code at till, mailchimp template, first campaign, etc' },
          { name: 'FAQ (customer and staff) AI Chatbot', description: 'embed in site/POS, trains on policies' }
        ]
      }
    }
  }
};

type BusinessType = keyof typeof businessTypes;

const BusinessTypeSwitcher = () => {
  const [activeType, setActiveType] = useState<BusinessType | null>(null);
  const [showAllServices, setShowAllServices] = useState(false);

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-nautical-navy business-type-title">
          What's Your Business Type?
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Select your business type to see our tailored solutions designed specifically for your industry needs.
        </p>
      </div>

      {/* Enhanced Business Type Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
        {Object.entries(businessTypes).map(([key, business]) => (
          <button
            key={key}
            onClick={() => {
              setActiveType(key as BusinessType);
              setShowAllServices(false);
            }}
            className={`group relative overflow-hidden rounded-2xl p-6 text-center btn-glimmer transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeType === key 
                ? `bg-gradient-to-br ${business.activeGradient} ${key === 'retail' || key === 'service' ? 'text-white' : `text-${business.accentColor}`} border-2 border-${business.accentColor}/50 shadow-2xl focus:ring-${business.accentColor}` 
                : 'bg-white/90 backdrop-blur-sm text-nautical-navy hover:bg-white border-2 border-white/50 hover:border-neutral-gull/50 shadow-lg hover:shadow-2xl focus:ring-nautical-navy'
            }`}
            style={{
              boxShadow: activeType === key 
                ? `0 6px 16px rgba(13, 37, 69, 0.3)` 
                : undefined
            }}
            onMouseEnter={(e) => {
              if (activeType !== key) {
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(13, 37, 69, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeType !== key) {
                e.currentTarget.style.boxShadow = '';
              }
            }}
            aria-pressed={activeType === key}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', 
                backgroundSize: '24px 24px' 
              }}></div>
            </div>
            
            {/* Icon */}
            <div className="relative z-10 mb-4">
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                activeType === key 
                  ? 'bg-accent-gold/20' 
                  : 'bg-accent-gold/10 group-hover:bg-accent-gold/20'
              }`}>
                <Image
                  src={business.icon}
                  alt={business.label}
                  width={24}
                  height={24}
                  className={`transition-all duration-300 ${
                    activeType === key 
                      ? `filter ${business.accentColor === 'accent-gold' ? 'brightness-0 saturate-100' : business.accentColor === 'accent-sea' ? 'hue-rotate-180 saturate-150' : 'hue-rotate-180 brightness-75'} contrast-125` 
                      : 'group-hover:scale-110'
                  }`}
                />
              </div>
            </div>
            
            {/* Text */}
            <div className="relative z-10">
              <h3 className="font-display font-bold text-lg mb-1">
                {business.label}
              </h3>
            </div>
            
            {/* Glow effect for active state */}
            {activeType === key && (
              <div className={`absolute inset-0 rounded-2xl blur-xl opacity-30 bg-${business.accentColor}/30`}></div>
            )}
          </button>
        ))}
      </div>

      {/* Enhanced Panel Area */}
      {activeType && (
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.section
              key={activeType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="relative"
              aria-labelledby={`${activeType}-heading`}
            >
              {/* Background with subtle pattern */}
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl"></div>
              <div className="absolute inset-0 opacity-5" style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230D2545" fill-opacity="1"%3E%3Cpath d="M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                backgroundSize: '60px 60px'
              }}></div>
              
              <div className="relative z-10 p-8 md:p-12">
                {/* Header with enhanced styling */}
                <div className="mb-12 text-center">
                  <h3 
                    id={`${activeType}-heading`}
                    className="text-3xl md:text-4xl font-display font-bold text-nautical-navy mb-4"
                  >
                    <span className="relative inline-block">
                      {businessTypes[activeType].label} Solutions:
                      <span className={`absolute -bottom-1 left-0 w-full h-1 ${
                        businessTypes[activeType].accentColor === 'accent-gold' ? 'bg-accent-gold/70' :
                        businessTypes[activeType].accentColor === 'accent-sea' ? 'bg-accent-sea/70' :
                        'bg-primary-blue/70'
                      }`}></span>
                    </span>
                  </h3>
                </div>

                {/* Services Content */}
                {businessTypes[activeType].services.featured.length === 0 ? (
                  // Work in Progress for Professional Services
                  <div className="text-center py-16">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${businessTypes[activeType].hoverGradient} rounded-full mb-6`}>
                      <svg className={`w-8 h-8 text-${businessTypes[activeType].accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-display font-bold text-nautical-navy mb-3">Work in Progress</h4>
                    <p className="text-neutral-600 max-w-md mx-auto">
                      We're crafting specialized solutions for professional services. Contact us to discuss your specific needs.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Featured Services */}
                    <div className="mb-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {businessTypes[activeType].services.featured.map((service, index) => (
                          <Link 
                            key={index}
                            href="/contact" 
                            className="group block"
                          >
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/50 hover:border-neutral-gull/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                              <div className="text-center">
                                
                                {/* Category badge */}
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 text-white ${
                                  businessTypes[activeType].accentColor === 'accent-gold' ? 'bg-accent-gold' :
                                  businessTypes[activeType].accentColor === 'accent-sea' ? 'bg-accent-sea' :
                                  'bg-primary-blue'
                                }`}>
                                  {service.category}
                                </div>
                                
                                {/* Service name */}
                                <h5 className={`font-display font-bold text-xl text-nautical-navy mb-3 group-hover:text-${businessTypes[activeType].accentColor} transition-colors`}>
                                  {service.name}
                                </h5>
                                
                                {/* Description */}
                                <p className="text-neutral-600 leading-relaxed text-sm">
                                  {service.description}
                                </p>
                                
                                {/* Learn more indicator */}
                                <div className={`mt-4 text-${businessTypes[activeType].accentColor} text-sm font-semibold group-hover:underline`}>
                                  Learn More →
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Additional Services Toggle */}
                    <div className="text-center mb-8">
                      <button
                        onClick={() => setShowAllServices(!showAllServices)}
                        className="btn-secondary inline-flex items-center gap-2"
                      >
                        {showAllServices ? 'Show Less' : 'View All Solutions'}
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${showAllServices ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Additional Services (Organized by Category) */}
                    <AnimatePresence>
                      {showAllServices && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-8">
                            {Object.entries(businessTypes[activeType].services.additional).map(([category, services]) => (
                              <div key={category} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50">
                                <h5 className={`font-display font-bold text-lg text-nautical-navy mb-4 pb-2 border-b border-${businessTypes[activeType].accentColor}/20`}>
                                  {category}
                                </h5>
                                <div className="grid gap-3">
                                  {services.map((service, serviceIndex) => (
                                    <Link 
                                      key={serviceIndex}
                                      href="/contact" 
                                      className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-white/80 transition-all duration-200"
                                    >
                                      <div className={`w-8 h-8 bg-${businessTypes[activeType].accentColor}/20 rounded-full`}></div>
                                      <div className="flex-1 min-w-0">
                                        <h6 className={`font-semibold text-nautical-navy group-hover:text-${businessTypes[activeType].accentColor} transition-colors`}>
                                          {service.name}
                                        </h6>
                                        <p className="text-neutral-600 text-sm leading-relaxed">
                                          {service.description}
                                        </p>
                                      </div>
                                      <svg className={`w-4 h-4 text-neutral-400 group-hover:text-${businessTypes[activeType].accentColor} transition-all duration-300 group-hover:translate-x-1 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
                
                {/* Call to Action */}
                <div className="text-center mt-12 pt-8 border-t border-neutral-gull/20">
                  <Link 
                    href="/contact" 
                    className="btn-primary btn-large inline-flex items-center gap-2"
                  >
                    Get Your Free Consultation
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.section>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default BusinessTypeSwitcher; 