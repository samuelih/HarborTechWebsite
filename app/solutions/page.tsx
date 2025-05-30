"use client";

import Link from 'next/link';
import Image from 'next/image';

const SolutionsPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-sunset-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        {/* Sailing boat decoration */}
        <div className="absolute -top-8 -right-8 w-32 h-32 md:w-64 md:h-64 text-white/10">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M3,13.5L2,13L5,8L6,8.5L3,13.5M4,3H5V7H4V3M22,3L19,9L18,10L16,12L14,13.5L12,14L9,15L7,15.5L2,16L3,13.5L4,12L5,11L7,10L9,9.5L12,9L15,8.5L17,7.5L18,6.5L19,4.5L22,3M20.5,5.25L17,9L15,10L12.5,10.75L11,11L9,12L7,13.5L6,15H9L12,14L16,12.5L20.5,5.25Z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-white font-display mb-6">
              <span className="block text-lg font-medium mb-2 text-accent-sand">HARBOR TECH CONSULTING</span>
              Complete Solution Voyages
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-10 text-lg">
              Choose your ideal technology journey with our all-inclusive packages designed to help your retail business navigate the digital seas with confidence.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Solution Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading justify-center mb-4">Select Your Vessel</h2>
            <p className="max-w-3xl mx-auto">Choose the perfect technology package that will navigate your business to success, from nimble skiffs to full-featured flagships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="card relative overflow-hidden border border-accent-gold">
              <div className="absolute top-0 right-0 w-12 h-12 text-primary-navy">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M20,11.2V10H4V11.2L12,17L20,11.2M18.2,8L22,10V13L20,14V22H18V14.5L12,19L4,14V22H2V14L0,13V10L3.8,8H18.2Z" />
                </svg>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="font-display font-bold text-2xl mb-1">Starter "Skiff"</h3>
                <p className="text-neutral-700/70 mb-4">Perfect for one-register shops & galleries</p>
                <div className="text-4xl font-display font-black text-primary-navy">
                  $4,800
                  <span className="text-base font-normal text-neutral-700/60"> flat fee</span>
                </div>
              </div>
              
              <h4 className="font-semibold mb-3">Your Voyage Includes</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>POS installation (1 register)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>Basic inventory synchronization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>Cloud document vault (10 GB)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>2-hour crew training</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>$0 first month</span>
                </li>
              </ul>
              
              <Link href="/contact" className="btn-secondary border-primary-navy text-primary-navy hover:bg-primary-navy/10 w-full text-center block">
                Choose Skiff
              </Link>
            </div>
            
            {/* Mid-tier Package */}
            <div className="card relative overflow-hidden border-4 border-primary-navy shadow-lg transform scale-105 z-10">
              <div className="absolute top-0 right-0">
                <div className="bg-primary-navy text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                  MOST POPULAR
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-12 h-12 text-primary-navy opacity-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M3,13.5L2,13L5,8L6,8.5L3,13.5M4,3H5V7H4V3M22,3L19,9L18,10L16,12L14,13.5L12,14L9,15L7,15.5L2,16L3,13.5L4,12L5,11L7,10L9,9.5L12,9L15,8.5L17,7.5L18,6.5L19,4.5L22,3M20.5,5.25L17,9L15,10L12.5,10.75L11,11L9,12L7,13.5L6,15H9L12,14L16,12.5L20.5,5.25Z" />
                </svg>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="font-display font-bold text-2xl mb-1">Voyager "Cutter"</h3>
                <p className="text-neutral-700/70 mb-4">Growing boutiques with online + in-store stock</p>
                <div className="text-4xl font-display font-black text-primary-navy">
                  $9,800
                  <span className="text-base font-normal text-neutral-700/60"> flat fee</span>
                </div>
              </div>
              
              <h4 className="font-semibold mb-3">Your Voyage Includes</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>Everything in Skiff package, plus:</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>POS for 3 registers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>Clear, easy-to-read sales insights</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>Device refresh (up to 5 PCs/tablets)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>1-day crew workshop</span>
                </li>
              </ul>
              
              <Link href="/contact" className="btn-primary bg-primary-sky hover:bg-primary-navy w-full text-center block">
                Choose Cutter
              </Link>
            </div>
            
            {/* Premium Package */}
            <div className="card relative overflow-hidden border border-accent-gold">
              <div className="absolute top-0 right-0 w-12 h-12 text-primary-navy">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M4.27 1L4 2.27v16.92c0 .45.37.91.82.91.2 0 .41-.08.62-.23L12 15.82l6.59 4.05c.2.15.41.23.62.23.45 0 .82-.46.82-.91V2.27L19.73 1h-15.5M5 3.09H19v15.09l-6-3.82l-6 3.82V3.09z" />
                </svg>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="font-display font-bold text-2xl mb-1">Flagship "Clipper"</h3>
                <p className="text-neutral-700/70 mb-4">Multi-location or high-volume retailers</p>
                <div className="text-4xl font-display font-black text-primary-navy">
                  $18,500
                  <span className="text-base font-normal text-neutral-700/60"> flat fee</span>
                </div>
              </div>
              
              <h4 className="font-semibold mb-3">Your Voyage Includes</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>Everything in Cutter package, plus:</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>POS unlimited</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>Custom AI chatbot for customer FAQs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>Central data warehouse</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-navy mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <span>Friendly local point-of-contact</span>
                </li>
              </ul>
              
              <Link href="/contact" className="btn-primary bg-primary-sky hover:bg-primary-navy w-full text-center block">
                Choose Clipper
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/contact" className="text-primary-navy hover:text-primary-sky font-semibold inline-flex items-center">
              Need a custom voyage? Build Your Own Fleet →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Chart */}
      <section className="py-16 bg-accent-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading justify-center mb-4">Vessel Comparison Chart</h2>
            <p className="max-w-3xl mx-auto">Compare our technology packages to find the perfect fit for your retail business needs.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-primary-navy text-white">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4 text-center">Starter "Skiff"</th>
                  <th className="p-4 text-center bg-primary-sky">Voyager "Cutter"</th>
                  <th className="p-4 text-center">Flagship "Clipper"</th>
                </tr>
              </thead>
              <tbody>
                {/* POS Terminals */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">POS Terminals</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center bg-primary-sky/5">3</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                
                {/* Cloud Storage */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Cloud Storage</td>
                  <td className="p-4 text-center">10 GB</td>
                  <td className="p-4 text-center bg-primary-sky/5">50 GB</td>
                  <td className="p-4 text-center">250 GB</td>
                </tr>
                
                {/* Analytics */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Analytics Dashboard</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-primary-sky/5">Advanced</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
                
                {/* Staff Training */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Staff Training</td>
                  <td className="p-4 text-center">2 Hours</td>
                  <td className="p-4 text-center bg-primary-sky/5">Full Day</td>
                  <td className="p-4 text-center">Multiple Sessions</td>
                </tr>
                
                {/* Inventory Sync */}
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Inventory Sync</td>
                  <td className="p-4 text-center">Manual</td>
                  <td className="p-4 text-center bg-primary-sky/5">Automatic (Daily)</td>
                  <td className="p-4 text-center">Real-time</td>
                </tr>
                
                {/* Support Response */}
                <tr>
                  <td className="p-4 font-medium">Support Response</td>
                  <td className="p-4 text-center">24 Hours</td>
                  <td className="p-4 text-center bg-primary-sky/5">12 Hours</td>
                  <td className="p-4 text-center">4 Hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading justify-center mb-4">Fellow Voyagers</h2>
            <p className="max-w-3xl mx-auto">Hear from Harbor Springs retailers who have already set sail with our technology solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card relative text-center flex flex-col items-center bg-primary-sky/5 backdrop-blur-sm border-0">
              {/* Porthole frame effect */}
              <div className="rounded-full overflow-hidden w-20 h-20 mb-6 border-4 border-accent-gold relative">
                <Image 
                  src="/images/testimonials/placeholder.svg" 
                  alt="Molly, The Book Nook" 
                  fill
                  className="object-cover"
                />
                {/* Glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30"></div>
              </div>
              
              <div className="text-neutral-700 mb-6">
                <svg 
                  className="w-8 h-8 mx-auto mb-4 text-accent-gold" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="italic">"Sales rose 17% in six weeks and my staff stopped dreading inventory day. Our retail ship now sails smoothly!"</p>
              </div>
              
              <div className="mt-auto">
                <p className="font-bold">Molly</p>
                <p className="text-sm text-neutral-700/70">The Book Nook</p>
              </div>
            </div>

            <div className="card relative text-center flex flex-col items-center bg-primary-sky/5 backdrop-blur-sm border-0">
              {/* Porthole frame effect */}
              <div className="rounded-full overflow-hidden w-20 h-20 mb-6 border-4 border-accent-gold relative">
                <Image 
                  src="/images/testimonials/placeholder.svg" 
                  alt="Dave, Harbor Outfitters" 
                  fill
                  className="object-cover"
                />
                {/* Glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30"></div>
              </div>
              
              <div className="text-neutral-700 mb-6">
                <svg 
                  className="w-8 h-8 mx-auto mb-4 text-accent-gold" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="italic">"The fixed fee let us budget with zero guesswork. It's like having a seasoned navigator at the helm of our business."</p>
              </div>
              
              <div className="mt-auto">
                <p className="font-bold">Dave</p>
                <p className="text-sm text-neutral-700/70">Harbor Outfitters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">Ready to Chart Your Course?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Start your technology voyage today and navigate toward retail success with our expert crew by your side.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-navy hover:bg-accent-sand">
            Book Your Free Harbor Check
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage; 