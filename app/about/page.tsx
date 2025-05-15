"use client";

import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 bg-nautical-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        {/* Anchor decoration */}
        <div className="absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64 text-white/10">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,9.5A2.5,2.5 0 0,0 9.5,12A2.5,2.5 0 0,0 12,14.5A2.5,2.5 0 0,0 14.5,12A2.5,2.5 0 0,0 12,9.5Z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center bg-primary-navy/30 backdrop-blur-sm py-6 px-4 rounded-lg">
            <h1 className="text-white font-display mb-6">
              <span className="block text-lg font-medium mb-2 text-accent-seafoam">OUR STORY</span>
              Meet The Crew Behind Harbor Tech
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-10 text-lg">
              Founded by local tech enthusiasts with deep roots in Harbor Springs, we're a team of seasoned navigators committed to guiding retailers through digital waters.
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
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="section-heading justify-center mb-4">OUR MISSION</h2>
            <p className="max-w-3xl mx-auto text-lg">
              Make modern tech as approachable as a friendly dockhand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-square w-full max-w-md mx-auto md:max-w-full rounded-xl overflow-hidden border-8 border-white shadow-xl">
              <Image 
                src="/images/about-harbor.svg" 
                alt="Harbor Technology Consulting Team" 
                fill
                className="object-cover"
                priority
              />
              
              {/* Compass overlay */}
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-nautical-deepBlue" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,8L17,10L12,12L7,10Z" />
                </svg>
              </div>
            </div>
            
            <div className="mission-content">
              <div className="inline-block bg-accent-sand px-4 py-2 rounded-lg text-primary-navy font-medium mb-6">Our North Star</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">Guiding Harbor Springs Retailers Through Digital Waters</h2>
              <p className="text-lg mb-6">
                Like a lighthouse guiding ships safely to shore, Harbor Tech illuminates the path to digital transformation for local businesses. Our mission is to make modern technology accessible, affordable, and advantageous for the unique retail community of Harbor Springs.
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
                <div className="flex items-start">
                  <div className="bg-accent-seafoam/20 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-5 h-5 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Fixed Pricing</h4>
                    <p className="text-neutral-700">Transparent costs with no hidden fees or surprise expenses</p>
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
      <section className="py-8 sm:py-12 md:py-16 bg-nautical-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 bg-white/70 backdrop-blur-sm py-4 px-6 rounded-lg inline-block mx-auto">
            <h2 className="section-heading justify-center mb-4">Meet Our Crew</h2>
            <p className="max-w-3xl mx-auto">Our team combines decades of technology expertise with deep local knowledge to provide the perfect balance of innovation and practicality.</p>
          </div>
          
          <div className="responsive-grid">
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
                <p className="mb-4">Former Silicon Valley engineer who returned to his Harbor Springs roots to help local businesses navigate digital transformation.</p>
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
          
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/contact" className="btn-primary inline-block">
              Join Our Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-heading justify-center mb-4">Our Guiding Principles</h2>
            <p className="max-w-3xl mx-auto">The values that steer our ship through every client engagement and technology solution.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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

      {/* Lighthouse Section - Completely Redesigned */}
      <section className="bg-primary-navy text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to bottom, rgba(0,20,40,0.95) 0%, rgba(0,20,40,0.8) 100%)', 
          backgroundSize: 'cover' 
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 max-w-3xl mx-auto text-center">
            <h3 className="text-accent-seafoam font-display text-xl sm:text-2xl mb-6 uppercase tracking-widest">Our Mission</h3>
            
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-accent-seafoam/10 rounded-full p-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-accent-sand" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.5,2C9,2 6,5 6,8.5C6,13.1 12.5,22 12.5,22C12.5,22 19,13.1 19,8.5C19,5 16,2 12.5,2M12.5,9A1.5,1.5 0 0,1 11,7.5A1.5,1.5 0 0,1 12.5,6A1.5,1.5 0 0,1 14,7.5A1.5,1.5 0 0,1 12.5,9Z" />
                </svg>
              </div>
            </div>
            
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">
              "Make modern tech as approachable as a friendly dockhand."
            </blockquote>
            
            <p className="text-white/80 md:text-lg">
              We serve the 50-plus retailers of Harbor Springs with simple, done-for-you upgrades 
              that pay for themselves in months, not years.
            </p>
          </div>
        </div>

        {/* Star background */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i}
              className="absolute animate-twinkle bg-white rounded-full"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-6 opacity-25">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current text-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current text-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current text-white"></path>
          </svg>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-nautical-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-primary-navy/50 backdrop-blur-sm rounded-lg py-8 px-4 sm:px-8 mx-auto max-w-3xl">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6">Ready to Navigate Together?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Let our crew help chart a technology course that's right for your retail business.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-primary-navy hover:bg-accent-sand">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 