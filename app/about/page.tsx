"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AboutPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [crewVisible, setCrewVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    // Hero animation triggers immediately
    setHeroVisible(true);
    
    // Create intersection observers for other sections
    const observerOptions = { threshold: 0.1 };
    
    // Observer for mission section
    const missionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMissionVisible(true);
        }
      },
      observerOptions
    );

    // Observer for crew section
    const crewObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCrewVisible(true);
        }
      },
      observerOptions
    );

    // Observer for values section
    const valuesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesVisible(true);
        }
      },
      observerOptions
    );

    // Observer for CTA section
    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
        }
      },
      observerOptions
    );

    // Observe sections
    const missionSection = document.getElementById('mission-section');
    const crewSection = document.getElementById('crew-section');
    const valuesSection = document.getElementById('values-section');
    const ctaSection = document.getElementById('cta-section');

    if (missionSection) missionObserver.observe(missionSection);
    if (crewSection) crewObserver.observe(crewSection);
    if (valuesSection) valuesObserver.observe(valuesSection);
    if (ctaSection) ctaObserver.observe(ctaSection);

    return () => {
      missionObserver.disconnect();
      crewObserver.disconnect();
      valuesObserver.disconnect();
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
                Chart your course
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
              </span>
              {" "}
              <span className="text-accent-gold">with trusted guides</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Dedicated to helping Harbor Springs businesses thrive through technology. Local expertise, global solutions.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Mission Statement */}
      <section id="mission-section" className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-8 transition-all duration-1000 ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="section-heading justify-center mb-4">OUR MISSION</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Make modern tech as approachable as a friendly dockhand.
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-1000 delay-300 ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Galley Illustration - replace card and compass */}
            <div className="flex justify-center">
              <Image 
                src="/images/illustrations/galley.svg" 
                alt="Galley Ship Illustration" 
                width={550}
                height={550}
                className="object-contain"
                priority
              />
            </div>
            
            <div className="mission-content">
              <div className="inline-block bg-accent-sand px-4 py-2 rounded-lg text-primary-navy font-medium mb-6">Our North Star</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">Guiding Harbor Springs Retailers Through Digital Waters</h2>
              <p className="text-lg mb-6">
                Like a lighthouse guiding ships safely to shore, Harbor Tech illuminates the path to modern technology for local businesses. Our mission is to make modern technology accessible, affordable, and advantageous for the unique retail community of Harbor Springs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-accent-seafoam/20 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Local Expertise</h4>
                    <p className="text-neutral-700">Born and raised in Harbor Springs with intimate knowledge of local business needs</p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="bg-primary-navy/10 rounded-full p-2 mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H11V7H13V8H15V10H11V11H14A1,1 0 0,1 15,12V15A1,1 0 0,1 14,16H13V17H11Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Clear Communication</h4>
                    <p className="text-[#0D2545]">We explain everything in plain English, no tech jargon.</p>
                  </div>
                </div>
              </div>
              
              <div className="mission-quote">
                <p className="text-lg font-medium text-on-dark">
                  We serve the 50-plus retailers of Harbor Springs with simple, done-for-you upgrades that pay for themselves in months, not years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Crew */}
      <section id="crew-section" className="py-8 sm:py-12 md:py-16 bg-nautical-sand">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${crewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="section-heading justify-center mb-4">Meet Our Crew</h2>
            <p className="max-w-3xl mx-auto">Our team combines decades of technology expertise with deep local knowledge to provide the perfect balance of innovation and practicality.</p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${crewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image 
                  src="/images/about-harbor.svg" 
                  alt="Captain Alex" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-display font-bold text-xl">Captain Alex</h3>
                    <p className="text-white/90">Founder & Technology Navigator</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <p className="text-primary-navy mb-4">Former marketing director with deep retail roots to help local businesses navigate technology upgrades.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Cloud Architecture</span>
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Retail POS</span>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image 
                  src="/images/about-harbor.svg" 
                  alt="First Mate Sam" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-display font-bold text-xl">First Mate Sam</h3>
                    <p className="text-white/90">Client Success Director</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <p className="mb-4">Spent 15 years managing retail operations before joining Harbor Tech to help retailers implement practical tech solutions.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Inventory Systems</span>
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Staff Training</span>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image 
                  src="/images/about-harbor.svg" 
                  alt="Navigator Taylor" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-display font-bold text-xl">Navigator Taylor</h3>
                    <p className="text-white/90">Data & Analytics Specialist</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <p className="mb-4">Data scientist who translates complex analytics into actionable business insights for Harbor Springs retailers.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Retail Analytics</span>
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Custom Dashboards</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-500 ${crewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/contact" className="btn-primary inline-block">
              Join Our Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values-section" className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="section-heading justify-center mb-4">Our Guiding Principles</h2>
            <p className="max-w-3xl mx-auto">The values that steer our ship through every client engagement and technology solution.</p>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 delay-300 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Value 1 */}
            <div className="bg-accent-sand p-4 sm:p-6 rounded-xl h-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-6 h-6 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Steady Navigation</h3>
              <p className="text-neutral-700">We provide stable, reliable technology that creates a solid foundation for your business growth.</p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-accent-sand p-4 sm:p-6 rounded-xl h-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-6 h-6 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18,8H6V6H18M18,18H6V16H18M18,13H6V11H18M20,4H4V20H20" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Clear Communication</h3>
              <p className="text-neutral-700">We translate complex tech jargon into plain language that makes sense for your business needs.</p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-accent-sand p-4 sm:p-6 rounded-xl h-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-6 h-6 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Iron-Clad Security</h3>
              <p className="text-neutral-700">We protect your business data with the same vigilance as a captain guards their vessel.</p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-accent-sand p-4 sm:p-6 rounded-xl h-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-6 h-6 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M16,10V7L19,12L16,17V14H13V10H16M8,14V17L5,12L8,7V10H11V14H8Z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Local Commitment</h3>
              <p className="text-neutral-700">Born and raised in Harbor Springs, we're invested in our community's long-term prosperity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta-section" className="py-12 sm:py-16 bg-nautical-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className={`bg-primary-navy/50 backdrop-blur-sm rounded-lg py-8 px-4 sm:px-8 mx-auto max-w-3xl transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6">Ready to Navigate Together?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Let our crew help chart a technology course that's right for your retail business.
            </p>
            <Link href="/contact" className="btn-white">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative illustrations */}
        <div className={`absolute top-20 left-5 w-32 h-32 opacity-10 transition-all duration-1000 delay-300 ${ctaVisible ? 'opacity-10 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Image 
            src="/images/illustrations/houseonwater.svg" 
            alt="" 
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
        <div className={`absolute bottom-20 right-5 w-24 h-24 opacity-10 transition-all duration-1000 delay-500 ${ctaVisible ? 'opacity-10 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Image 
            src="/images/illustrations/seagull.svg" 
            alt="" 
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
        
        <div className="container mx-auto px-4">
          {/* Existing content */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 