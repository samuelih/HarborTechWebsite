"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SocialMediaClient() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialPlatforms = [
    {
      name: 'Instagram',
      handle: '@harbortechnologyconsulting',
      url: 'https://www.instagram.com/harbortechnologyconsulting/',
      description: 'Behind-the-scenes content, technology tips, and client success stories',
      gradient: 'from-purple-500 via-pink-500 to-orange-400',
      hoverGradient: 'from-purple-600 via-pink-600 to-orange-500',
      accentColor: 'accent-gold',
      stats: '500+ Followers',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      handle: 'Harbor Technology Consulting',
      url: 'https://www.linkedin.com/company/harbor-technology-consulting/',
      description: 'Professional insights, industry news, and business networking',
      gradient: 'from-blue-600 to-blue-800',
      hoverGradient: 'from-blue-700 to-blue-900',
      accentColor: 'primary-blue',
      stats: 'Professional Network',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      handle: '@harbortechconsulting',
      url: 'https://www.tiktok.com/@harbortechconsulting',
      description: 'Quick tech tips, trending technology insights, and fun content',
      gradient: 'from-pink-500 via-red-500 to-yellow-400',
      hoverGradient: 'from-pink-600 via-red-600 to-yellow-500',
      accentColor: 'accent-sea',
      stats: 'Tech Tips Daily',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04 0z"/>
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section - Matching Other Pages */}
      <section className="relative min-h-[70vh] flex items-center bg-nautical-gradient overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="relative inline-block">
                Join Our
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold"></span>
              </span>
              {" "}
              <span className="text-accent-gold">Digital Harbor</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Navigate the waters of technology with Harbor Technology Consulting across all platforms.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Social Media Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-neutral-mist via-white to-neutral-mist">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-sea/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Social Media Cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {socialPlatforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Link
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                  onMouseEnter={() => setHoveredCard(platform.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`
                    relative h-full bg-white rounded-3xl p-8 
                    border border-neutral-gull/30 transition-all duration-500 
                    hover:bg-neutral-mist/50 hover:scale-105 hover:rotate-1
                    ${hoveredCard === platform.name ? 'shadow-2xl shadow-primary-blue/20' : 'shadow-lg'}
                    overflow-hidden
                  `}>
                    {/* Animated gradient background */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 
                      group-hover:opacity-10 transition-all duration-500 rounded-3xl
                    `}></div>

                    {/* Accent border that animates */}
                    <div className={`
                      absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${platform.gradient} 
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left
                    `}></div>

                    {/* Platform Icon & Name */}
                    <div className="relative z-10 flex items-center gap-6 mb-6">
                      <div className={`
                        w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.gradient} 
                        flex items-center justify-center text-white
                        transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6
                        shadow-lg
                      `}>
                        {platform.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-primary-navy mb-1 group-hover:text-accent-gold transition-colors duration-300">
                          {platform.name}
                        </h3>
                        <p className="text-primary-navy/70 text-sm font-medium">{platform.handle}</p>
                        <div className="mt-2">
                          <span className="inline-block bg-neutral-mist text-primary-navy/90 text-xs px-3 py-1 rounded-full">
                            {platform.stats}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-primary-navy/80 mb-8 leading-relaxed relative z-10">
                      {platform.description}
                    </p>

                    {/* Enhanced Follow Button */}
                    <div className="relative z-10">
                      <div className={`
                        bg-gradient-to-r ${platform.gradient} text-white px-6 py-4 rounded-xl 
                        font-semibold text-center transition-all duration-300
                        group-hover:shadow-lg transform group-hover:scale-105
                        flex items-center justify-center gap-3
                      `}>
                        <span>Follow on {platform.name}</span>
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>


                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 