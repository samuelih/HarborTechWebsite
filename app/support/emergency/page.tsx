"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Phone, Clock, AlertTriangle, Wrench, Wifi } from 'lucide-react';

const EmergencySupportPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [emergencyOptionsVisible, setEmergencyOptionsVisible] = useState(false);
  const [ctaSectionVisible, setCtaSectionVisible] = useState(false);

  useEffect(() => {
    // Hero animation triggers immediately
    setHeroVisible(true);
    
    // Create intersection observers for other sections
    const observerOptions = { threshold: 0.1 };
    
    // Observer for emergency options section
    const emergencyOptionsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEmergencyOptionsVisible(true);
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
    const emergencyOptionsSection = document.getElementById('emergency-options-section');
    const ctaSection = document.getElementById('cta-section');

    if (emergencyOptionsSection) emergencyOptionsObserver.observe(emergencyOptionsSection);
    if (ctaSection) ctaObserver.observe(ctaSection);

    return () => {
      emergencyOptionsObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Hero Section - Red Emergency Theme */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-red-600 via-red-700 to-red-800 overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 rounded-full p-4 animate-pulse">
                <AlertTriangle className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="relative inline-block">
                EMERGENCY
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
              </span>
              {" "}
              <span className="text-accent-gold">SUPPORT</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              System down? Critical issue? We're here to get you back up and running immediately.
            </p>
            
            {/* Emergency Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-lg mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white mr-3" />
                <span className="text-2xl font-bold text-white">24/7 Emergency Line</span>
              </div>
              <a href="tel:+17348348005" className="text-3xl font-bold text-white hover:text-red-200 transition-colors">
                (734) 834-8005
              </a>
            </div>
          </div>
        </div>
        
        {/* Emergency border pattern */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0L20 8L40 0" fill="%23ffffff" fill-opacity="0.3"/%3E%3C/svg%3E")',
          backgroundSize: '40px 8px'
        }}></div>
      </section>

      {/* Emergency Support Options */}
      <section id="emergency-options-section" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-1000 ${emergencyOptionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-red-700">
                We're Standing By
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
                When your business can't wait, neither can we. Get immediate assistance for critical issues.
              </p>
            </div>

            {/* Emergency Response Types */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${emergencyOptionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* System Down */}
              <div className="bg-red-50 rounded-lg p-8 h-full border-2 border-red-200 hover:border-red-400 transition-colors">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6 mx-auto">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-center mb-3 text-red-700">
                    System Down
                  </h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-red-200 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Complete POS system failure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-200 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Cannot process transactions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-200 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Critical business operations affected</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-red-700 font-bold">Response Time: IMMEDIATE</span>
                </div>
              </div>

              {/* Network/Internet Down */}
              <div className="bg-red-50 rounded-lg p-8 h-full border-2 border-red-200 hover:border-red-400 transition-colors">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6 mx-auto">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-center mb-3 text-red-700">
                    Network Crisis
                  </h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-red-200 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">No internet connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-200 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Network equipment failure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-200 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Cloud services unreachable</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-red-700 font-bold">Response Time: &lt; 30 MIN</span>
                </div>
              </div>

              {/* Hardware Failure */}
              <div className="bg-red-50 rounded-lg p-8 h-full border-2 border-red-200 hover:border-red-400 transition-colors">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6 mx-auto">
                    <Wrench className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-center mb-3 text-red-700">
                    Hardware Emergency
                  </h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-red-200 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Terminal/computer failure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-200 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Server/router emergency</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-200 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">Critical equipment replacement needed</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-red-700 font-bold">Response Time: &lt; 1 HOUR</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact Options */}
            <div className={`bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-white transition-all duration-1000 delay-500 ${emergencyOptionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-display font-bold mb-4">
                  Multiple Ways to Reach Us
                </h3>
                <p className="text-red-100 text-lg">
                  Don't waste time - contact us immediately using any method below
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Phone */}
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Call Now</h4>
                  <a href="tel:+17348348005" className="text-xl font-bold hover:text-red-200 transition-colors">
                    (734) 834-8005
                  </a>
                  <p className="text-red-100 text-sm mt-2">24/7 Emergency Hotline</p>
                </div>

                {/* Text */}
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9V7H18V9H6M14,11V13H6V11H14M16,15V17H6V15H16Z" />
                  </svg>
                  <h4 className="text-xl font-bold mb-2">Text Emergency</h4>
                  <a href="sms:+17348348005" className="text-xl font-bold hover:text-red-200 transition-colors">
                    (734) 834-8005
                  </a>
                  <p className="text-red-100 text-sm mt-2">Quick problem description</p>
                </div>

                {/* Email */}
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                  </svg>
                  <h4 className="text-xl font-bold mb-2">Emergency Email</h4>
                  <a href="mailto:sam@harbortech.org" className="text-lg font-bold hover:text-red-200 transition-colors">
                    sam@harbortech.org
                  </a>
                  <p className="text-red-100 text-sm mt-2">Monitored continuously</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${emergencyOptionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-8 text-red-700">
              What to Expect
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-700 mb-3">Immediate Response</h3>
                <p className="text-neutral-700">
                  We acknowledge your emergency within 5 minutes and begin troubleshooting immediately.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Wrench className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-700 mb-3">Expert Technicians</h3>
                <p className="text-neutral-700">
                  Our most experienced technicians handle all emergency calls with full authority to resolve issues.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-red-50 rounded-lg p-8 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-700 mb-4">Emergency Service Guarantee</h3>
              <p className="text-lg text-neutral-700 mb-4">
                If we can't resolve your critical issue within 4 hours, your emergency service call is FREE.
              </p>
              <p className="text-sm text-neutral-600">
                *Applies to issues within our service scope. Hardware replacement costs may apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta-section" className="py-16 sm:py-20 bg-red-700">
        <div className="container mx-auto px-4">
          <div className={`text-center transition-all duration-1000 ${ctaSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 rounded-full p-4 animate-pulse">
                <Phone className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-white">
              Don't Wait - Call Now
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Every minute counts when your business is down. Get immediate help from our emergency response team.
            </p>
                          <a 
                href="tel:+17348348005" 
                className="inline-flex items-center gap-3 bg-white text-red-700 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-red-50 transition-colors"
              >
                <Phone className="w-8 h-8" />
                (734) 834-8005
              </a>
            <p className="text-red-200 text-sm mt-4">Available 24/7/365 - No Exceptions</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencySupportPage; 