"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BookOpen, Download, Video, HelpCircle, Search } from 'lucide-react';

const KnowledgeBasePage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [wipSectionVisible, setWipSectionVisible] = useState(false);

  useEffect(() => {
    // Hero animation triggers immediately
    setHeroVisible(true);
    
    // Create intersection observers for other sections
    const observerOptions = { threshold: 0.1 };
    
    // Observer for work in progress section
    const wipObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWipSectionVisible(true);
        }
      },
      observerOptions
    );

    // Observe sections
    const wipSection = document.getElementById('wip-section');

    if (wipSection) wipObserver.observe(wipSection);

    return () => {
      wipObserver.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-nautical-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="relative inline-block">
                Knowledge
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
              </span>
              {" "}
              <span className="text-accent-gold">Base</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Everything you need to know about your marine technology solutions.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Work In Progress Section */}
      <section id="wip-section" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${wipSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Work in Progress Icon */}
              <div className="flex items-center justify-center w-24 h-24 bg-accent-gold/20 rounded-full mb-8 mx-auto">
                <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-nautical-navy">
                Work in Progress
              </h2>
              
              <div className="bg-accent-gold/10 rounded-lg p-8 border-2 border-accent-gold/20 max-w-2xl mx-auto">
                <h3 className="text-xl font-display font-bold text-nautical-navy mb-4">
                  Coming Soon Features:
                </h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-gold mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    Hardware manuals and documentation
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-gold mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    Step-by-step video tutorials
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-gold mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    Comprehensive software guides
                  </li>
                  <li className="flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-gold mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    Troubleshooting resources
                  </li>
                </ul>
              </div>
              

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default KnowledgeBasePage; 