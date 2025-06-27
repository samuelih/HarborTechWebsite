"use client";

import Link from 'next/link';
import SectionHeading from '../../components/common/SectionHeading';

export default function VideosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-nautical-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        {/* Video decoration */}
        <div className="absolute -top-8 -left-8 w-32 h-32 md:w-64 md:h-64 text-white/10">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-white font-display mb-6">
              <span className="block text-lg font-medium mb-2 text-accent-seafoam">VISUAL LEARNING</span>
              Video Tutorials
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-10 text-lg">
              Watch step-by-step video guides to help you master your Harbor Tech solutions.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Video Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <SectionHeading 
                title="POS System Tutorials" 
                className="text-primary-navy mb-0" 
              />
              <div className="flex gap-2">
                <button className="bg-accent-sand hover:bg-accent-gold/20 text-primary-navy p-2 rounded-full">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14C13,13.82 13,13.65 13.07,13.5L10.5,10.93L10,11C9.82,11 9.65,11 9.5,10.93L4.93,15.5C5,15.65 5,15.82 5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z" />
                  </svg>
                </button>
                <button className="bg-accent-sand hover:bg-accent-gold/20 text-primary-navy p-2 rounded-full">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Video 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
                <div className="aspect-video bg-primary-navy/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary-navy/80 rounded-full p-3">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-2">Getting Started with Your POS</h3>
                  <p className="text-primary-navy">Learn the basics of setting up and using your point-of-sale system.</p>
                  <div className="mt-4 flex items-center">
                    <span className="text-xs text-primary-navy/60">12:45</span>
                    <span className="inline-block bg-primary-sky/20 text-primary-blue font-medium px-3 py-1 rounded-full text-xs ml-auto">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Video 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
                <div className="aspect-video bg-primary-navy/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary-navy/80 rounded-full p-3">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-2">Processing Transactions</h3>
                  <p className="text-primary-navy">Step-by-step guide to processing different types of transactions.</p>
                  <div className="mt-4 flex items-center">
                    <span className="text-xs text-primary-navy/60">09:18</span>
                    <span className="inline-block bg-primary-sky/20 text-primary-blue font-medium px-3 py-1 rounded-full text-xs ml-auto">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-10">
              <SectionHeading 
                title="Inventory Management" 
                className="text-primary-navy mb-0" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
                <div className="aspect-video bg-primary-navy/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary-navy/80 rounded-full p-3">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-2">Advanced Inventory Management</h3>
                  <p className="text-primary-navy">Master inventory tracking, reporting, and optimization techniques.</p>
                  <div className="mt-4 flex items-center">
                    <span className="text-xs text-primary-navy/60">18:30</span>
                    <span className="inline-block bg-primary-sky/20 text-primary-blue font-medium px-3 py-1 rounded-full text-xs ml-auto">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Video 4 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
                <div className="aspect-video bg-primary-navy/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary-navy/80 rounded-full p-3">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-2">Seasonal Inventory Planning</h3>
                  <p className="text-primary-navy">Learn how to plan and manage seasonal inventory fluctuations.</p>
                  <div className="mt-4 flex items-center">
                    <span className="text-xs text-primary-navy/60">15:45</span>
                    <span className="inline-block bg-primary-sky/20 text-primary-blue font-medium px-3 py-1 rounded-full text-xs ml-auto">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 