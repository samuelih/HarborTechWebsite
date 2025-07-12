"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AboutPageClient = () => {
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
              <span className="text-accent-gold">with trusted guides.</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Dedicated to helping Harbor Springs businesses bridge the gap between technology and their business. Made by neighbors, for neighbors.
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
                Every summer job and after-school shift scooping ice cream on Main Street, caddying at the club, delivering groceries from the IGA, showed us how much local businesses mean to this town. When we heard that an outside tech firm was upselling complicated systems and locking neighbors into contracts designed to fail, we decided Harbor Springs deserved better.
              </p>
              <p className="text-lg mb-6">
                Thus Harbor Tech Consulting was born with a simple goal: make modern technology approachable, affordable, and easy. We recommend only what a shop truly needs and stand behind transparent, no-surprise pricing.
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
                    <p className="text-neutral-700">Studying robotics, computer science, business, data analytics, and policy at the University of Michigan</p>
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
                  Because we're studying robotics, computer science, business, data analytics, and policy at the University of Michigan, we have the technical depth to install rock-solid networks, secure point-of-sale systems, and future-proof cloud backups. Supplementary to high education, we have deep local insight to tailor those tools to a clothing store on East Main just as readily as to a Restaurant on State street.
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
                    <h3 className="font-display font-bold text-xl text-white">Sam Harrell</h3>
                    <p className="text-white/90">Co-Founder & Technology Specialist</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <p className="text-primary-navy mb-4">University of Michigan student studying robotics and computer science, bringing technical expertise, innovative solutions, and interpersonal communication to Harbor Springs businesses.</p>
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
                    <h3 className="font-display font-bold text-xl text-white">Max Bassett</h3>
                    <p className="text-white/90">Co-Founder & Data Analytics Specialist</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <p className="mb-4">University of Michigan student studying data analytics, policy, and business, translating data into actionable business insights for local retailers.</p>
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
                  <path d="m13 16.923l3.039-3.154q.217-.217.331-.506q.114-.288.114-.636q0-.639-.453-1.114q-.454-.475-1.096-.475q-.489 0-.964.256T13 12.2q-.52-.661-.982-.911t-.953-.25q-.642 0-1.096.475q-.453.475-.453 1.113q0 .348.114.637q.114.288.331.505zm7.516-2.77l-6.362 6.363q-.245.242-.551.363t-.61.121t-.605-.121t-.546-.363L3.48 12.17q-.237-.217-.358-.518q-.121-.3-.121-.632V4.634q0-.674.472-1.154T4.635 3h6.386q.324 0 .629.131t.527.354l8.339 8.344q.25.245.364.551t.114.617t-.114.61t-.364.547m-7.075 5.654l6.361-6.362q.192-.192.192-.452t-.192-.452L11.266 4.02H4.635q-.27 0-.452.173Q4 4.366 4 4.635v6.38q0 .116.039.231q.038.116.134.212l8.364 8.35q.192.192.451.192q.26 0 .453-.192M6.55 7.558q.421 0 .714-.292t.294-.708q0-.425-.292-.722t-.708-.298q-.425 0-.722.295t-.297.717t.295.714t.716.294m5.489 4.48" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Hometown Loyalty</h3>
              <p className="text-neutral-700">We measure success by the longevity of local businesses, not by the size of a one-time invoice.</p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-accent-sand p-4 sm:p-6 rounded-xl h-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-6 h-6 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m10.2 13.2l-1.05-1.05q.2-.275.275-.562T9.5 11t-.075-.587t-.275-.538L10.2 8.8q.4.475.6 1.05T11 11t-.2 1.138t-.6 1.062m2.125 2.15l-1.075-1.075q.625-.7.938-1.55T12.5 11t-.312-1.712t-.938-1.538l1.075-1.075q.85.925 1.263 2.038T14 11t-.413 2.3t-1.262 2.05M5 12q-.825 0-1.412-.587T3 10t.588-1.412T5 8t1.413.588T7 10t-.587 1.413T5 12m-4 4v-.575q0-.6.325-1.1t.9-.75q.65-.275 1.338-.425T5 13t1.438.15t1.337.425q.575.25.9.75t.325 1.1V16zm18-4q-.825 0-1.412-.587T17 10t.588-1.412T19 8t1.413.588T21 10t-.587 1.413T19 12m-4 4v-.575q0-.6.325-1.1t.9-.75q.65-.275 1.337-.425T19 13t1.437.15t1.338.425q.575.25.9.75t.325 1.1V16z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Clear Communication</h3>
              <p className="text-neutral-700">Whether you're upgrading Wi-Fi, adding inventory software, or tightening cybersecurity, you'll know exactly what's happening and why.</p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-accent-sand p-4 sm:p-6 rounded-xl h-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-6 h-6 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 17q.86 0 1.45.6t.58 1.4L14 22l-7-2v-9h1.95l7.27 2.69q.78.31.78 1.12q0 .47-.34.82t-.86.37H13l-1.75-.67l-.33.94L13 17zM16 3.23Q17.06 2 18.7 2q1.36 0 2.3 1t1 2.3q0 1.03-1 2.46t-1.97 2.39T16 13q-2.08-1.89-3.06-2.85t-1.97-2.39T10 5.3q0-1.36.97-2.3t2.34-1q1.6 0 2.69 1.23M.984 11H5v11H.984z" />
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

export default AboutPageClient; 