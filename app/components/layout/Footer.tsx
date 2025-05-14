"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the actual newsletter subscription logic
    setSubscribed(true);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1F314F"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,176C672,181,768,235,864,229.3C960,224,1056,160,1152,149.3C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="pt-24 pb-12 bg-gradient-to-b from-primary-100 to-neutral-mist relative z-10">
        {/* Upper footer with quick links */}
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Company Links */}
            <div className="group">
              <h3 className="font-display font-bold text-xl mb-5 text-primary-navy relative inline-block">
                Company
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-2 transition-all duration-300 group-hover/link:w-2.5"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-2 transition-all duration-300 group-hover/link:w-2.5"></span>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-2 transition-all duration-300 group-hover/link:w-2.5"></span>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-2 transition-all duration-300 group-hover/link:w-2.5"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions Links */}
            <div className="group">
              <h3 className="font-display font-bold text-xl mb-5 text-primary-navy relative inline-block">
                Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-sky transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/solutions/retail-pos" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-sky mr-2 transition-all duration-300 group-hover/link:w-2.5"></span>
                    All-in-One POS
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/cloud-migration" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-sky mr-2 transition-all duration-300 group-hover/link:w-2.5"></span>
                    Cloud Migration
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/staff-training" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-sky mr-2 transition-all duration-300 group-hover/link:w-2.5"></span>
                    Staff Upskilling
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/custom" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-sky mr-2 transition-all duration-300 group-hover/link:w-2.5"></span>
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="group">
              <h3 className="font-display font-bold text-xl mb-5 text-primary-navy relative inline-block">
                Resources
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-seafoam transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/blog" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-seafoam mr-2 transition-all duration-300 group-hover/link:w-2.5"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources/case-studies" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-seafoam mr-2 transition-all duration-300 group-hover/link:w-2.5"></span>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/resources/guides" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-seafoam mr-2 transition-all duration-300 group-hover/link:w-2.5"></span>
                    Tech Guides
                  </Link>
                </li>
                <li>
                  <Link href="/resources/faq" className="text-secondary-navy hover:text-primary-700 transition-colors flex items-center group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-seafoam mr-2 transition-all duration-300 group-hover/link:w-2.5"></span>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="md:pl-4 relative before:absolute before:left-0 before:top-0 before:h-0 md:before:h-full before:w-px before:bg-primary-sky/20 before:hidden md:before:block">
              <div className="flex items-center mb-5">
                <div className="relative w-8 h-8 mr-3 flex-shrink-0">
                  <Image 
                    src="/images/ui-elements/buoy-icon.svg" 
                    alt="Newsletter" 
                    width={32} 
                    height={32}
                    className="animate-pulse-slow"
                  />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-gold rounded-full"></span>
                </div>
                <h3 className="font-display font-bold text-xl text-primary-navy">Stay Updated</h3>
              </div>
              <p className="text-sm mb-5 text-secondary-navy/80">Get monthly tech tips for your retail business</p>
              
              {subscribed ? (
                <div className="bg-gradient-to-r from-success-seafoam/20 to-accent-seafoam/10 p-5 rounded-lg border border-accent-seafoam/30">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-accent-seafoam mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-sm text-secondary-navy font-medium">Thanks for subscribing!</p>
                  </div>
                  <p className="text-xs text-secondary-navy/70 mt-1">We'll send you our next newsletter soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setInputFocused(true)}
                      onBlur={() => setInputFocused(false)}
                      required
                      className={`w-full pl-4 pr-10 py-3 bg-white rounded-lg border transition-all duration-300 
                        ${inputFocused ? 'border-primary-sky ring-2 ring-primary-sky/20' : 'border-primary-sky/30'}
                        focus:outline-none focus:border-primary-sky`}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-primary-sky" viewBox="0 0 24 24" fill="none">
                        <path d="M22 12L16 6M22 12L16 18M22 12H8M2 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full btn-primary flex justify-center items-center transition-all duration-300 group"
                  >
                    <span className="mr-2">Subscribe</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Lower footer with logo and copyright */}
        <div className="border-t border-primary-blue/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="relative group">
                  <Image 
                    src="/images/logos/logo-white.svg" 
                    alt="Harbor Technology Consulting" 
                    width={32} 
                    height={32} 
                    className="mr-2 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>
                <span className="text-secondary-navy text-sm">© {currentYear} Harbor Technology Consulting</span>
              </div>
              
              <div className="flex space-x-6">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter"
                  className="social-link"
                >
                  <svg className="w-5 h-5 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.03 10.03 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="social-link"
                >
                  <svg className="w-5 h-5 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="social-link"
                >
                  <svg className="w-5 h-5 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .social-link {
          color: var(--deep-sea);
          transition: all 0.3s ease;
          position: relative;
        }

        .social-link:hover {
          color: var(--ocean-surface);
        }

        .social-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--ocean-surface);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .social-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 