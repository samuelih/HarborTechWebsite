"use client";

import Image from 'next/image';
import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('why-choose-us');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const differentiators = [
    "Local Harbor Springs experts who understand seasonal businesses",
    "No contracts or hidden fees - transparent, fair pricing",
    "In-person support when you need it most",
    "Solutions designed specifically for small retail shops",
    "Quick response times during peak tourist season",
    "Neighbors helping neighbors succeed"
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-accent-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bulleted List */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-h2 font-display font-bold text-primary-navy mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-primary-sky mb-8">
              We're not just another tech company. We're your neighbors, and we understand what makes Harbor Springs businesses unique.
            </p>
            
            <ul className="space-y-4">
              {differentiators.map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-6 h-6 bg-accent-sea rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <span className="text-primary-navy text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Harbor Springs Storefront Photo */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/illustrations/houseonwater.svg" 
                  alt="Harbor Springs waterfront businesses - the community we serve" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-blue/20 rounded-full blur-sm"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-gold/20 rounded-full blur-sm"></div>
              
              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-primary-navy/70 text-sm italic">
                  Supporting Harbor Springs businesses since 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 