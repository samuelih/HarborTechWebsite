"use client";

import Link from 'next/link';
import SectionHeading from '../../components/common/SectionHeading';

export default function ManualsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-nautical-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        {/* Book decoration */}
        <div className="absolute -top-8 -left-8 w-32 h-32 md:w-64 md:h-64 text-white/10">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V6.5C10.55,5.4 8.45,5 6.5,5V5Z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="relative inline-block">
                Product Manuals
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
              </span>
              {" "}
              <span className="text-accent-gold">& Guides</span>
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-10 text-lg">
              Comprehensive documentation for all Harbor Tech solutions. Find setup guides, troubleshooting tips, and best practices.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Manuals Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="bg-accent-sand rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
                <div className="bg-primary-navy/10 rounded-full p-3 inline-block mb-4">
                  <svg className="w-6 h-6 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">POS Systems</h3>
                <p className="text-primary-navy mb-4">Complete documentation for setting up and operating your point-of-sale system.</p>
                <Link href="/support/manuals/pos" className="btn-primary bg-primary-navy hover:bg-primary-sky inline-block mt-2">
                  View Documentation
                </Link>
              </div>
              
              {/* Category 2 */}
              <div className="bg-accent-sand rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
                <div className="bg-primary-navy/10 rounded-full p-3 inline-block mb-4">
                  <svg className="w-6 h-6 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Inventory Management</h3>
                <p className="text-primary-navy mb-4">Learn how to efficiently track inventory, manage suppliers, and run reports.</p>
                <Link href="/support/manuals/inventory" className="btn-primary bg-primary-navy hover:bg-primary-sky inline-block mt-2">
                  View Documentation
                </Link>
              </div>
              
              {/* Category 3 */}
              <div className="bg-accent-sand rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-primary-sky/20">
                <div className="bg-primary-navy/10 rounded-full p-3 inline-block mb-4">
                  <svg className="w-6 h-6 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Website Management</h3>
                <p className="text-primary-navy mb-4">Learn how to update products, manage content, and optimize your online presence.</p>
                <Link href="/support/manuals/website" className="btn-primary bg-primary-navy hover:bg-primary-sky inline-block mt-2">
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 