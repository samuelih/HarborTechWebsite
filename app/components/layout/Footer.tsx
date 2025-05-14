"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the actual newsletter subscription logic
    setSubscribed(true);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-100 pt-12">
      {/* Upper footer with quick links */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-secondary-navy hover:text-primary-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-secondary-navy hover:text-primary-700 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-secondary-navy hover:text-primary-700 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-navy hover:text-primary-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/retail-pos" className="text-secondary-navy hover:text-primary-700 transition-colors">
                  All-in-One POS
                </Link>
              </li>
              <li>
                <Link href="/solutions/cloud-migration" className="text-secondary-navy hover:text-primary-700 transition-colors">
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link href="/solutions/staff-training" className="text-secondary-navy hover:text-primary-700 transition-colors">
                  Staff Upskilling
                </Link>
              </li>
              <li>
                <Link href="/solutions/custom" className="text-secondary-navy hover:text-primary-700 transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/blog" className="text-secondary-navy hover:text-primary-700 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-secondary-navy hover:text-primary-700 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/guides" className="text-secondary-navy hover:text-primary-700 transition-colors">
                  Tech Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="text-secondary-navy hover:text-primary-700 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/images/ui-elements/buoy-icon.svg" 
                alt="Newsletter" 
                width={24} 
                height={24} 
                className="mr-2"
              />
              <h3 className="font-display font-bold text-lg">Stay Updated</h3>
            </div>
            <p className="text-sm mb-4">Get monthly tech tips for your retail business</p>
            
            {subscribed ? (
              <div className="bg-success-seafoam/20 p-4 rounded-lg">
                <p className="text-sm text-secondary-navy">Thanks for subscribing! We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-white rounded-lg border border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-700"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full btn-primary flex justify-center items-center"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Lower footer with logo and copyright */}
      <div className="bg-secondary-navy py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image 
                src="/images/logos/logo-white.svg" 
                alt="Harbor Technology Consulting" 
                width={32} 
                height={32} 
                className="mr-2"
              />
              <span className="text-white text-sm">© {currentYear} Harbor Technology Consulting</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="w-5 h-5 text-white hover:text-primary-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.03 10.03 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-5 h-5 text-white hover:text-primary-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-5 h-5 text-white hover:text-primary-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 