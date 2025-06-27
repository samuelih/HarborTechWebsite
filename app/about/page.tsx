"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AboutPage = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [crewVisible, setCrewVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);

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

    // Observe sections
    const missionSection = document.getElementById('mission-section');
    const crewSection = document.getElementById('crew-section');
    const valuesSection = document.getElementById('values-section');

    if (missionSection) missionObserver.observe(missionSection);
    if (crewSection) crewObserver.observe(crewSection);
    if (valuesSection) valuesObserver.observe(valuesSection);

    return () => {
      missionObserver.disconnect();
      crewObserver.disconnect();
      valuesObserver.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-nautical-gradient overflow-hidden pt-32">
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
            <h2 className="section-heading justify-center mb-4">ABOUT US</h2>
            <p className="max-w-3xl mx-auto text-lg">
              We were born and raised in Harbor Springs, graduated together from Harbor Springs High School, and now split our time between Ann Arbor classrooms at the University of Michigan and the docks and storefronts we've known since childhood.
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
              <div className="inline-block bg-accent-sand px-4 py-2 rounded-lg text-primary-navy font-medium mb-6">Our Story</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">From Harbor Springs to Harbor Tech</h2>
              <p className="text-lg mb-6">
                Every summer job and after-school shift scooping ice cream on Main Street, caddying at the club, delivering groceries from the IGA, showed us how much local businesses mean to this town and how quickly technology can make or break them. When we heard that an outside tech firm was upselling complicated systems and locking neighbors into contracts designed to fail, we decided Harbor Springs deserved better.
              </p>
              <p className="text-lg mb-6">
                That frustration became Harbor Tech Consulting. Our goal is simple: make modern technology as approachable as a friendly deckhand. We translate tech jargon into plain English, recommend only what a shop truly needs, and stand behind transparent, no-surprise pricing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-accent-seafoam/20 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Technical Depth</h4>
                    <p className="text-neutral-700">Studying robotics, business, data analytics, and policy at Michigan</p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="bg-primary-navy/10 rounded-full p-2 mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H11V7H13V8H15V10H11V11H14A1,1 0 0,1 15,12V15A1,1 0 0,1 14,16H13V17H11Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Local Insight</h4>
                    <p className="text-[#0D2545]">Harbor Springs natives with intimate knowledge of local business needs</p>
                  </div>
                </div>
              </div>
              
              <div className="mission-quote">
                <p className="text-lg font-medium text-on-dark">
                  Because we're studying robotics, business, data analytics, and policy at Michigan, we have the technical depth to install rock-solid networks, secure point-of-sale systems, and future-proof cloud backups. Because we're Harbor Springs natives, we have the local insight to tailor those tools to a clothing store on East Main just as readily as to a Restaurant on State street.
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
            <p className="max-w-3xl mx-auto">Two Harbor Springs natives combining University of Michigan education with deep local knowledge to serve our community.</p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${crewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Sam Harrell */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image 
                  src="/images/headshots/Sam.jpg" 
                  alt="Sam Harrell" 
                  fill
                  className="object-cover"
                  style={{ objectPosition: '50% 25%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-display font-bold text-xl">Sam Harrell</h3>
                    <p className="text-white/90">Co-Founder & Technology Specialist</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <p className="text-primary-navy mb-4">University of Michigan student studying robotics, bringing technical expertise and innovative solutions to Harbor Springs businesses.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Robotics</span>
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Business</span>
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Network Security</span>
                </div>
              </div>
            </div>
            
            {/* Max Bassett */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image 
                  src="/images/headshots/Max.jpg" 
                  alt="Max Bassett" 
                  fill
                  className="object-cover"
                  style={{ objectPosition: '50% 25%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-display font-bold text-xl">Max Bassett</h3>
                    <p className="text-white/90">Co-Founder & Data Analytics Specialist</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <p className="mb-4">University of Michigan student focusing on data analytics and policy, translating complex data into actionable business insights for local retailers.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Data Analytics</span>
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Policy</span>
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Cloud Solutions</span>
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
            <h2 className="section-heading justify-center mb-4">Our Three Promises</h2>
            <p className="max-w-3xl mx-auto">Everything we do is guided by these three core principles that keep us true to our mission and our community.</p>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 delay-300 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Value 1 */}
            <div className="bg-accent-sand p-4 sm:p-6 rounded-xl h-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-6 h-6 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Hometown Loyalty</h3>
              <p className="text-neutral-700">We measure success by the longevity of local businesses, not by the size of a one-time invoice.</p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-accent-sand p-4 sm:p-6 rounded-xl h-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-6 h-6 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18,8H6V6H18M18,18H6V16H18M18,13H6V11H18M20,4H4V20H20" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Clear Communication</h3>
              <p className="text-neutral-700">Whether you're upgrading Wi-Fi, adding inventory software, or tightening cybersecurity, you'll know exactly what's happening and why.</p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-accent-sand p-4 sm:p-6 rounded-xl h-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-6 h-6 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Iron-Clad Ethics</h3>
              <p className="text-neutral-700">We recommend only solutions we'd buy for our own families, and we reinvest our time and profits into community projects whenever we can.</p>
            </div>
          </div>
        </div>
      </section>




    </div>
  );
};

export default AboutPage; 