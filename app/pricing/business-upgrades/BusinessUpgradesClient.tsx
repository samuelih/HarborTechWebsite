"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BundleCard from '../../components/pricing/BundleCard';
import SolutionAccordion from '../../components/pricing/SolutionAccordion';
import QuotePanel from '../../components/pricing/QuotePanel';
import { QuoteProvider } from '../../lib/hooks/useQuote';
import { bundles } from '../../../data/businessBundles';
import Link from 'next/link';

const BusinessUpgradesClient = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [bundlesVisible, setBundlesVisible] = useState(false);
  const [solutionsVisible, setSolutionsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations in sequence
    const timers = [
      setTimeout(() => setHeroVisible(true), 100),
      setTimeout(() => setBundlesVisible(true), 800),
      setTimeout(() => setSolutionsVisible(true), 1600),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <QuoteProvider>
      <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-nautical-gradient overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', 
            backgroundSize: '24px 24px' 
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="relative inline-block">
                Business Upgrades
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold"></span>
              </span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Pick a bundle or build à la carte. Transparent pricing, local support, no surprises.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-accent-gold text-2xl font-bold group-hover:scale-110 transition-transform duration-300">6</div>
                <div className="text-white/90 text-sm font-medium">Ready Packages</div>
              </div>
              <div className="text-center group">
                <div className="text-accent-gold text-2xl font-bold group-hover:scale-110 transition-transform duration-300">24+</div>
                <div className="text-white/90 text-sm font-medium">Solutions Available</div>
              </div>
              <div className="text-center group">
                <div className="text-accent-gold text-2xl font-bold group-hover:scale-110 transition-transform duration-300">2-4</div>
                <div className="text-white/90 text-sm font-medium">Weeks to Launch</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Bundles Section - Enhanced */}
      <section id="bundles-section" className="section-padding bg-gradient-to-b from-white via-neutral-mist/20 to-white relative overflow-hidden">
        {/* Enhanced floating background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 w-96 h-96 bg-gradient-to-br from-accent-gold/10 to-transparent rounded-full blur-3xl animate-gentle-float"></div>
          <div className="absolute top-32 right-10 w-64 h-64 bg-gradient-to-bl from-primary-blue/8 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-accent-sea/6 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
          <div className="absolute bottom-40 right-32 w-48 h-48 bg-gradient-to-tl from-accent-gold/8 to-transparent rounded-full blur-2xl animate-pulse-slowest"></div>
          
          {/* Floating nautical elements */}
          <div className="absolute bottom-32 left-1/3 opacity-5">
            <div className="w-8 h-8 animate-gull-float">
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-accent-gold">
                <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-2 16h4v6h-4v-6zm8-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced header with animations */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: bundlesVisible ? 1 : 0, y: bundlesVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-primary-navy"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: bundlesVisible ? 1 : 0, scale: bundlesVisible ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="relative inline-block">
                Pre-Packaged
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: bundlesVisible ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.span>
              </span>
              {" "}
              <span className="bg-gradient-to-r from-accent-gold via-primary-blue to-accent-sea bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-neutral-600 max-w-4xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: bundlesVisible ? 1 : 0, y: bundlesVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get everything you need to modernize your business in one comprehensive package.
              <span className="text-primary-blue font-medium"> Transparent pricing, local support, no surprises.</span>
            </motion.p>
            
                        <motion.div 
              className="flex justify-center items-center space-x-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: bundlesVisible ? 1 : 0, scale: bundlesVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-3 h-3 bg-accent-gold rounded-full animate-twinkle"></div>
              <div className="w-32 h-1 bg-gradient-to-r from-accent-gold via-primary-blue to-accent-sea rounded-full"></div>
              <div className="w-3 h-3 bg-accent-sea rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Bundles Grid with staggered animations */}
                     <motion.div 
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: bundlesVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {bundles.map((bundle, index) => {
              // Create a more dynamic grid layout
              const isLarge = index === 1; // Make the popular one larger
              const colSpan = isLarge ? 'md:col-span-2 lg:col-span-1' : '';
              
              return (
                <motion.div
                  key={bundle.id}
                  className={`${colSpan} ${isLarge ? 'md:mx-auto lg:mx-0' : ''}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ 
                    opacity: bundlesVisible ? 1 : 0, 
                    y: bundlesVisible ? 0 : 50, 
                    scale: bundlesVisible ? 1 : 0.9 
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.2 + (index * 0.15),
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <BundleCard 
                    bundle={bundle} 
                    className={`${isLarge ? 'transform lg:scale-105' : ''} h-full`}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call-to-action footer */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: bundlesVisible ? 1 : 0, y: bundlesVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Can't find the perfect fit? Mix and match any solutions in our 
              <span className="text-primary-blue font-semibold"> À La Carte section below</span> 
              or contact us for a custom package.
            </p>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="btn-secondary inline-flex items-center">
                  Need Help Choosing?
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </motion.div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions-section" className="section-padding bg-white relative">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${solutionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-primary-navy">
              <span className="relative inline-block">
                À La Carte
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold"></span>
              </span>
              {" "}
              <span className="text-accent-gold">Solutions</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
              Build your perfect solution by choosing exactly what your business needs.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-primary-blue mx-auto rounded-full"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: solutionsVisible ? 1 : 0, y: solutionsVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <SolutionAccordion />
          </motion.div>

          {/* Book a Call CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: solutionsVisible ? 1 : 0, y: solutionsVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-neutral-mist via-white to-accent-sand/20 rounded-2xl p-8 md:p-12 border border-accent-gold/20 shadow-lg max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy mb-4">
                  <span className="relative inline-block">
                    Ready to Get Started?
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold"></span>
                  </span>
                </h3>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-6">
                  Let's discuss your specific needs and create a custom proposal that fits your business perfectly.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact#book-a-call"
                  className="btn-primary btn-large inline-flex items-center gap-2 group"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a2 2 0 012 2v1l-3 3H6l-3-3V9a2 2 0 012-2h3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                  Book a Free Consultation
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                
                <div className="text-center sm:text-left">
                  <p className="text-sm text-neutral-500 mb-1">Or call us directly</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href="tel:+17348348005" 
                      className="text-primary-blue hover:text-primary-sky transition-colors font-medium text-sm"
                    >
                      Sam: (734) 834-8005
                    </a>
                    <a 
                      href="tel:+12313303682" 
                      className="text-primary-blue hover:text-primary-sky transition-colors font-medium text-sm"
                    >
                      Max: (231) 330-3682
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-neutral-gull/40">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free consultation
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No commitment
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Local Harbor Springs team
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Panel */}
      <QuotePanel />
    </div>
    </QuoteProvider>
  );
};

export default BusinessUpgradesClient; 