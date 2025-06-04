"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BookOpen, Download, Video, HelpCircle, Search } from 'lucide-react';

const KnowledgeBasePage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [knowledgeBaseVisible, setKnowledgeBaseVisible] = useState(false);
  const [ctaSectionVisible, setCtaSectionVisible] = useState(false);

  useEffect(() => {
    // Hero animation triggers immediately
    setHeroVisible(true);
    
    // Create intersection observers for other sections
    const observerOptions = { threshold: 0.1 };
    
    // Observer for knowledge base section
    const knowledgeBaseObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setKnowledgeBaseVisible(true);
        }
      },
      observerOptions
    );

    // Observer for CTA section
    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaSectionVisible(true);
        }
      },
      observerOptions
    );

    // Observe sections
    const knowledgeBaseSection = document.getElementById('knowledge-base-section');
    const ctaSection = document.getElementById('cta-section');

    if (knowledgeBaseSection) knowledgeBaseObserver.observe(knowledgeBaseSection);
    if (ctaSection) ctaObserver.observe(ctaSection);

    return () => {
      knowledgeBaseObserver.disconnect();
      ctaObserver.disconnect();
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

      {/* Knowledge Base Section */}
      <section id="knowledge-base-section" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative illustrations */}
        <div className={`absolute top-20 right-5 w-32 h-32 opacity-10 transition-all duration-1000 delay-300 ${knowledgeBaseVisible ? 'opacity-10 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Image 
            src="/images/illustrations/galley.svg" 
            alt="" 
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
        <div className={`absolute bottom-20 left-5 w-24 h-24 opacity-10 transition-all duration-1000 delay-500 ${knowledgeBaseVisible ? 'opacity-10 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Image 
            src="/images/illustrations/rowboat2.svg" 
            alt="" 
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-1000 ${knowledgeBaseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
                Get the Answers You Need
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
                Access tutorials, manuals, troubleshooting guides, and more to get the most out of your technology.
              </p>
            </div>

            {/* Resource Categories */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${knowledgeBaseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Software Guides */}
              <div className="bg-neutral-mist rounded-lg p-8 h-full border-2 border-transparent hover:border-accent-gold transition-colors">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-nautical-navy rounded-full mb-6 mx-auto">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-center mb-3 text-nautical-navy">
                    Software Guides
                  </h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Point of Sale Setup</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Inventory Management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Customer Management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Reporting & Analytics</span>
                  </li>
                </ul>
                <div className="text-center space-y-3">
                  <Link href="/support/manuals" className="btn-secondary block">
                    <BookOpen className="w-5 h-5 mr-2" />
                    View Guides
                  </Link>
                </div>
              </div>

              {/* Video Tutorials */}
              <div className="bg-neutral-mist rounded-lg p-8 h-full border-2 border-transparent hover:border-accent-gold transition-colors">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-nautical-navy rounded-full mb-6 mx-auto">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-center mb-3 text-nautical-navy">
                    Video Tutorials
                  </h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Getting Started Videos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Feature Walkthroughs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Best Practices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Troubleshooting Tips</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/support/videos" className="btn-secondary block">
                    <Video className="w-5 h-5 mr-2" />
                    Watch Videos
                  </Link>
                </div>
              </div>

              {/* Hardware Resources */}
              <div className="bg-neutral-mist rounded-lg p-8 h-full border-2 border-transparent hover:border-accent-gold transition-colors">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-nautical-navy rounded-full mb-6 mx-auto">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-center mb-3 text-nautical-navy">
                    Hardware Resources
                  </h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Equipment Manuals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Installation Guides</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Driver Downloads</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-gold/20 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Warranty Information</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/support/downloads" className="btn-secondary block">
                    <Download className="w-5 h-5 mr-2" />
                    View Resources
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className={`bg-accent-gold/10 rounded-lg p-8 mb-16 border-2 border-accent-gold/20 transition-all duration-1000 delay-500 ${knowledgeBaseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-8">
                <div className="flex items-center justify-center w-16 h-16 bg-nautical-navy rounded-full mb-6 mx-auto">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold text-center mb-3 text-nautical-navy">
                  Frequently Asked Questions
                </h3>
                <p className="text-neutral-700">
                  Get quick answers to the most common questions about our services and solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-nautical-navy mb-3">How long does installation take?</h4>
                  <p className="text-neutral-700">Most installations are completed within 1-2 business days, depending on the complexity of your setup.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-nautical-navy mb-3">Do you provide training?</h4>
                  <p className="text-neutral-700">Yes! We provide comprehensive training for your staff to ensure everyone is comfortable with the new systems.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-nautical-navy mb-3">What if something breaks?</h4>
                  <p className="text-neutral-700">We offer multiple support options including remote help, onsite repairs, and retainer packages for ongoing peace of mind.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-nautical-navy mb-3">Can you help with existing systems?</h4>
                  <p className="text-neutral-700">Absolutely! We can assess and improve your current setup, or help you transition to new solutions.</p>
                </div>
              </div>
            </div>

            {/* Search Section */}
            <div className={`text-center transition-all duration-1000 delay-700 ${knowledgeBaseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-display font-bold text-center mb-6 text-nautical-navy">
                Can't find what you're looking for?
              </h3>
              <div className="max-w-lg mx-auto mb-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search knowledge base..." 
                    className="w-full px-4 py-3 pr-12 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                </div>
              </div>
              <p className="text-neutral-600 mb-6">
                Still need help? Our team is always ready to assist you.
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta-section" className="py-16 sm:py-20 bg-neutral-mist">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${ctaSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Seagull illustration */}
            <div className={`flex justify-center items-center transition-all duration-1000 delay-300 ${ctaSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Image 
                src="/images/illustrations/seagull.svg" 
                alt="Seagull illustration" 
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            
            {/* Text and button */}
            <div className={`text-center md:text-left transition-all duration-1000 delay-500 ${ctaSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Ready to set sail?
              </h2>
              <p className="text-lg sm:text-xl text-neutral-700 mb-8 max-w-xl">
                Let us help you navigate your technology needs and find the perfect solution for your marine business.
              </p>
              <Link 
                href="/contact" 
                className="btn-primary inline-flex items-center gap-2"
              >
                Get Started Today
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBasePage; 