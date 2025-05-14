"use client";

import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-nautical-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        {/* Anchor decoration */}
        <div className="absolute -top-8 -left-8 w-32 h-32 md:w-64 md:h-64 text-white/10">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,9.5A2.5,2.5 0 0,0 9.5,12A2.5,2.5 0 0,0 12,14.5A2.5,2.5 0 0,0 14.5,12A2.5,2.5 0 0,0 12,9.5Z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden border-8 border-white shadow-xl">
              <Image 
                src="/images/about-harbor.svg" 
                alt="Harbor Technology Consulting Team" 
                fill
                className="object-cover"
              />
              
              {/* Compass overlay */}
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 w-16 h-16 flex items-center justify-center">
                <svg className="w-10 h-10 text-nautical-deepBlue" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,8L17,10L12,12L7,10Z" />
                </svg>
              </div>
            </div>
            
            <div>
              <div className="inline-block bg-accent-sand px-4 py-2 rounded-lg text-primary-navy font-medium mb-6">Our North Star</div>
              <h2 className="font-display text-3xl font-bold mb-6">Guiding Harbor Springs Retailers Through Digital Waters</h2>
              <p className="text-lg mb-6">
                Like a lighthouse guiding ships safely to shore, Harbor Tech illuminates the path to digital transformation for local businesses. Our mission is to make modern technology accessible, affordable, and advantageous for the unique retail community of Harbor Springs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
            </div>
          </div>
        </div>
      </section>

      {/* Our Crew */}
      <section className="py-16 bg-nautical-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading justify-center mb-4">Meet Our Crew</h2>
            <p className="max-w-3xl mx-auto">Our team combines decades of technology expertise with deep local knowledge to provide the perfect balance of innovation and practicality.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image 
                  src="/images/about-harbor.svg" 
                  alt="Captain Alex" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-display font-bold text-xl">Captain Alex</h3>
                    <p className="text-white/80">Founder & Technology Navigator</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">Former Silicon Valley engineer who returned to his Harbor Springs roots to help local businesses navigate digital transformation.</p>
                <div className="flex space-x-2">
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Cloud Architecture</span>
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Retail POS</span>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image 
                  src="/images/about-harbor.svg" 
                  alt="First Mate Sam" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-display font-bold text-xl">First Mate Sam</h3>
                    <p className="text-white/80">Client Success Director</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">Spent 15 years managing retail operations before joining Harbor Tech to help retailers implement practical tech solutions.</p>
                <div className="flex space-x-2">
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Inventory Systems</span>
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Staff Training</span>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image 
                  src="/images/about-harbor.svg" 
                  alt="Navigator Taylor" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-display font-bold text-xl">Navigator Taylor</h3>
                    <p className="text-white/80">Data & Analytics Specialist</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">Data scientist who translates complex analytics into actionable business insights for Harbor Springs retailers.</p>
                <div className="flex space-x-2">
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Retail Analytics</span>
                  <span className="bg-nautical-azure/20 text-nautical-deepBlue text-sm py-1 px-3 rounded-full">Custom Dashboards</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary inline-block">
              Join Our Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading justify-center mb-4">Our Guiding Principles</h2>
            <p className="max-w-3xl mx-auto">The values that steer our ship through every client engagement and technology solution.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-accent-sand p-6 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-6 h-6 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Steady Navigation</h3>
              <p className="text-neutral-700">We provide stable, reliable technology that creates a solid foundation for your business growth.</p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-accent-sand p-6 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-6 h-6 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18,8H6V6H18M18,18H6V16H18M18,13H6V11H18M20,4H4V20H20" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Clear Communication</h3>
              <p className="text-neutral-700">We translate complex tech jargon into plain language that makes sense for your business needs.</p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-accent-sand p-6 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-6 h-6 text-primary-navy" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Iron-Clad Security</h3>
              <p className="text-neutral-700">We protect your business data with the same vigilance as a captain guards their vessel.</p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-accent-sand p-6 rounded-xl">
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
      <section className="py-16 bg-nautical-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">Ready to Navigate Together?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Let our crew help chart a technology course that's right for your retail business.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-navy hover:bg-accent-sand">
            Meet Our Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 