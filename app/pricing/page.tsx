"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const PricingPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const features = [
    { 
      id: 'pos',
      name: 'Smart POS Install (1 register)', 
      price: '$1,950',
      details: {
        includes: ['Hardware setup & config', 'Inventory database import', '2-hour staff training'],
        roi: 'Average ROI: 15% faster checkout times'
      }
    },
    { 
      id: 'store',
      name: 'Online Store + Inventory Sync', 
      price: '$2,450',
      details: {
        includes: ['Mobile-friendly design', 'Secure checkout', 'SEO optimized', 'Daily inventory sync'],
        roi: 'Average ROI: 35% increase in off-season sales'
      }
    },
    { 
      id: 'wifi',
      name: 'Secure Wi-Fi Mesh (3 APs)', 
      price: '$900',
      details: {
        includes: ['3 access points installed', 'Guest network setup', 'Security configuration'],
        roi: 'Average ROI: Zero downtime during peak season'
      }
    },
    { 
      id: 'backup',
      name: 'Cloud Backup & Doc Vault', 
      price: '$650',
      details: {
        includes: ['Automatic daily backups', '10GB secure storage', 'Document organization'],
        roi: 'Average ROI: 100% data recovery guarantee'
      }
    },
    { 
      id: 'chatbot',
      name: 'AI FAQ Chatbot (100 intents)', 
      price: '$1,850',
      details: {
        includes: ['Custom FAQ responses', 'Hours & directions', 'Product inquiries', 'Email capture'],
        roi: 'Average ROI: 40% fewer phone interruptions'
      }
    },
    { 
      id: 'dashboard',
      name: 'Retail Data Dashboard', 
      price: '$1,200',
      details: {
        includes: ['Sales analytics', 'Inventory reports', 'Customer insights', 'Mobile access'],
        roi: 'Average ROI: 25% better purchasing decisions'
      }
    },
    { 
      id: 'training',
      name: 'Device Tune-up & Staff Training', 
      price: '$600',
      details: {
        includes: ['PC/tablet optimization', 'Software updates', 'Half-day training session'],
        roi: 'Average ROI: 50% fewer tech support calls'
      }
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-navy to-primary-blue overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-white font-display mb-6">
              Build Your Upgrade Menu
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-10 text-lg">
              Select only the features you need. One price per feature. No recurring fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-neutral-mist rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-display font-bold text-center mb-8 text-primary-navy">
                Feature Menu & Fixed Prices
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full" aria-label="Feature pricing table">
                  <thead>
                    <tr className="border-b-2 border-primary-sky">
                      <th className="text-left py-3 px-4 font-semibold text-primary-navy">Feature</th>
                      <th className="text-right py-3 px-4 font-semibold text-primary-navy">One-time Price</th>
                      <th className="text-center py-3 px-4 font-semibold text-primary-navy">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature) => (
                      <tr key={feature.id} className="border-b border-gray-200 hover:bg-primary-sky/5 transition-colors">
                        <td className="py-4 px-4 font-medium text-[#22548c]">{feature.name}</td>
                        <td className="py-4 px-4 text-right font-bold text-primary-blue text-lg">{feature.price}</td>
                        <td className="py-4 px-4 text-center">
                          <button 
                            onClick={() => toggleAccordion(feature.id)}
                            className="text-primary-blue hover:text-primary-sky font-medium transition-colors"
                            aria-expanded={openAccordion === feature.id}
                            aria-controls={`details-${feature.id}`}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-[#22548c] mb-6">
                  All prices are one-time fees. No monthly charges. Mix and match any features you need.
                </p>
                <Link 
                  href="/contact" 
                  className="btn-primary inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                  </svg>
                  Get My Fixed-Cost Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details Accordions */}
      <section className="py-16 bg-accent-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-center mb-12 text-primary-navy">
              Feature Details
            </h2>
            
            <div className="space-y-4">
              {features.map((feature) => (
                <div 
                  key={feature.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(feature.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary-sky/5 transition-colors"
                    aria-expanded={openAccordion === feature.id}
                    aria-controls={`details-content-${feature.id}`}
                  >
                    <div>
                      <h3 className="font-semibold text-primary-navy">{feature.name}</h3>
                      <p className="text-primary-blue font-bold">{feature.price}</p>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-primary-navy transition-transform ${openAccordion === feature.id ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </button>
                  
                  {openAccordion === feature.id && (
                    <div 
                      id={`details-content-${feature.id}`}
                      className="px-6 pb-6 border-t border-gray-200"
                    >
                      <div className="pt-4">
                        <h4 className="font-semibold mb-3 text-primary-navy">What's Included</h4>
                        <ul className="space-y-2 mb-4">
                          {feature.details.includes.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                              </svg>
                              <span className="text-[#22548c]">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-primary-blue font-medium">{feature.details.roi}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-primary-sky/10 rounded-xl p-8 border border-primary-sky/20">
              <h2 className="text-2xl font-display font-bold mb-4 text-primary-navy">
                Need Something Custom?
              </h2>
              <p className="text-[#22548c] mb-6">
                We'll work with you to build a custom solution tailored to your specific retail needs. 
                Get the exact features you need at a fair, fixed price.
              </p>
              <Link 
                href="/contact" 
                className="btn-secondary inline-flex items-center"
              >
                Build Your Custom Solution
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-primary-blue to-primary-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Choose only what you need. Pay once. Get results that last.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-navy hover:bg-accent-sand">
            Get My Fixed-Cost Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage; 