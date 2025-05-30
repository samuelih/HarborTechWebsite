"use client";

import Link from 'next/link';
import SectionHeading from '../components/common/SectionHeading';
import SupportChatbot from '../components/common/SupportChatbot';

export default function SupportPortal() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-nautical-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        {/* Anchor decoration */}
        <div className="absolute -top-8 -left-8 w-32 h-32 md:w-64 md:h-64 text-white/10">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12,21A9,9 0 0,1 3,12H5A7,7 0 0,0 12,19A7,7 0 0,0 19,12H21A9,9 0 0,1 12,21M12,5A3,3 0 0,1 15,8H9A3,3 0 0,1 12,5M12,1A1,1 0 0,1 13,2A1,1 0 0,1 12,3A1,1 0 0,1 11,2A1,1 0 0,1 12,1Z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-white font-display mb-6">
              Customer Support (Optional Add-On)
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-10 text-lg">
              All Harbor Tech projects include a 30-day workmanship warranty. If you need help after that, choose from our flexible support options.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Support Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <SectionHeading 
                title="Support Options & Pricing" 
                centered={true}
                className="text-primary-navy" 
              />
              <p className="text-[#22548c] max-w-2xl mx-auto">
                Choose the support level that works best for your business. No contracts required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Option 1 */}
              <div className="bg-neutral-mist rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
                <div className="text-center mb-6">
                  <div className="inline-block bg-primary-navy/10 rounded-full p-3 mb-4">
                    <svg className="w-8 h-8 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">Remote Help</h3>
                  <p className="text-3xl font-bold text-primary-navy mb-1">$95/hr</p>
                  <p className="text-sm text-[#22548c]">(15-min blocks)</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span className="text-[#22548c]">Phone & screen share</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span className="text-[#22548c]">Pay only when needed</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span className="text-[#22548c]">Quick fixes & guidance</span>
                  </li>
                </ul>
              </div>

              {/* Option 2 */}
              <div className="bg-neutral-mist rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
                <div className="text-center mb-6">
                  <div className="inline-block bg-primary-navy/10 rounded-full p-3 mb-4">
                    <svg className="w-8 h-8 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,2H5A2,2 0 0,0 3,4V18A2,2 0 0,0 5,20H9L12,23L15,20H19A2,2 0 0,0 21,18V4A2,2 0 0,0 19,2M5,4H19V18H14.17L12,20.17L9.83,18H5V4M12,5.5A1.5,1.5 0 0,0 10.5,7A1.5,1.5 0 0,0 12,8.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 12,5.5M12,10C9.79,10 8,11.79 8,14H10C10,12.9 10.9,12 12,12C13.1,12 14,12.9 14,14C14,14.72 13.37,15.26 12.74,15.79C12.09,16.34 11.44,17 11.44,18H12.56C12.56,17.42 13.05,17.02 13.6,16.56C14.25,16 15,15.38 15,14C15,11.79 13.21,10 12,10Z" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">Onsite Dispatch</h3>
                  <p className="text-3xl font-bold text-primary-navy mb-1">$125 + $95/hr</p>
                  <p className="text-sm text-[#22548c]">Service call + hourly</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span className="text-[#22548c]">In-person assistance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span className="text-[#22548c]">Hardware repairs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span className="text-[#22548c]">Complex troubleshooting</span>
                  </li>
                </ul>
              </div>

              {/* Option 3 */}
              <div className="bg-neutral-mist rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
                <div className="text-center mb-6">
                  <div className="inline-block bg-primary-navy/10 rounded-full p-3 mb-4">
                    <svg className="w-8 h-8 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">Mini-Retainer</h3>
                  <p className="text-3xl font-bold text-primary-navy mb-1">$650/mo</p>
                  <p className="text-sm text-[#22548c]">10 hrs (rolls over 30 days)</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span className="text-[#22548c]">Priority response</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span className="text-[#22548c]">Hours roll over</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span className="text-[#22548c]">Cancel anytime</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section className="py-16 bg-gradient-to-b from-neutral-mist to-primary-sky/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-accent-seafoam/20 text-primary-navy font-medium px-4 py-1.5 rounded-full mb-3">
              Self-Service Resources
            </div>
            <SectionHeading 
              title="Knowledge Base" 
              centered={true}
              className="text-primary-navy" 
            />
            <p className="text-[#22548c] max-w-2xl mx-auto">
              Browse our comprehensive collection of guides, tutorials, and FAQs to help you get the most out of your technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Knowledge Base Category 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
              <div className="inline-block bg-primary-navy/10 rounded-full p-3 mb-4">
                <svg className="w-6 h-6 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">POS Systems</h3>
              <p className="text-primary-navy mb-4">Setup guides, troubleshooting, and best practices for your point-of-sale system.</p>
              <Link href="/support/manuals/pos" className="text-primary-sky font-medium hover:underline flex items-center">
                View guides
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
            </div>
            
            {/* Knowledge Base Category 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
              <div className="inline-block bg-primary-navy/10 rounded-full p-3 mb-4">
                <svg className="w-6 h-6 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Inventory Management</h3>
              <p className="text-primary-navy mb-4">Learn how to track inventory, manage suppliers, and generate reports.</p>
              <Link href="/support/manuals/inventory" className="text-primary-sky font-medium hover:underline flex items-center">
                View guides
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
            </div>
            
            {/* Knowledge Base Category 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
              <div className="inline-block bg-primary-navy/10 rounded-full p-3 mb-4">
                <svg className="w-6 h-6 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Website Management</h3>
              <p className="text-primary-navy mb-4">Update your product listings, manage content, and optimize for search engines.</p>
              <Link href="/support/manuals/website" className="text-primary-sky font-medium hover:underline flex items-center">
                View guides
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-accent-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-md border border-primary-sky/20">
            <div className="text-center mb-8">
              <div className="inline-block bg-accent-seafoam/20 text-primary-navy font-medium px-4 py-1.5 rounded-full mb-3">
                Get Support
              </div>
              <SectionHeading 
                title="Contact Information" 
                centered={true}
                className="text-primary-navy" 
              />
              <p className="text-[#22548c] max-w-2xl mx-auto">
                Available during warranty period or with active support plan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
              {/* Support Option 1 */}
              <div className="text-center p-4">
                <div className="inline-block bg-primary-navy/10 rounded-full p-3 mb-4">
                  <svg className="w-6 h-6 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Email Support</h3>
                <p className="text-primary-navy mb-4">Send us an email and we'll respond within 24 hours.</p>
                <a href="mailto:help@harbortechconsulting.com" className="text-primary-sky font-medium hover:underline">
                  help@harbortechconsulting.com
                </a>
              </div>
              
              {/* Support Option 2 */}
              <div className="text-center p-4">
                <div className="inline-block bg-primary-navy/10 rounded-full p-3 mb-4">
                  <svg className="w-6 h-6 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Phone Support</h3>
                <p className="text-primary-navy mb-4">Call us during business hours (9am-5pm ET).</p>
                <a href="tel:+12318651234" className="text-primary-sky font-medium hover:underline">
                  (231) 865-1234
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add the chatbot component */}
      <SupportChatbot />

      {/* Add sticky mobile CTA for better conversion */}
      <div className="fixed bottom-0 left-0 w-full md:hidden bg-white border-t border-gray-200 shadow-lg py-3 px-4 z-40 flex justify-center">
        <button 
          className="btn-primary py-2 w-full max-w-xs flex items-center justify-center"
          onClick={() => {
            const chatButton = document.querySelector('.fixed.bottom-24 button') as HTMLButtonElement;
            if (chatButton) chatButton.click();
          }}
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />
          </svg>
          Chat with Support
        </button>
      </div>
    </>
  );
} 