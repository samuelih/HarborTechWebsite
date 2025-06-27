"use client";

import Link from 'next/link';
import SectionHeading from '../../../components/common/SectionHeading';

export default function POSManualPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 pt-32 bg-nautical-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-2">
              <Link href="/support/manuals" className="text-accent-seafoam hover:text-white transition-colors flex items-center">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                </svg>
                Back to Manuals
              </Link>
            </div>
            <h1 className="text-white font-display mb-4">
              <span className="block text-lg font-medium mb-2 text-accent-seafoam">POS SYSTEM</span>
              Point of Sale Documentation
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-6 text-lg">
              Complete guides for setting up and operating your point-of-sale system.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Documentation Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar Navigation */}
              <div className="md:w-64 flex-shrink-0">
                <div className="bg-accent-sand rounded-xl p-6 shadow-sm sticky top-24">
                  <h3 className="font-display font-bold text-lg mb-4 text-primary-navy">On This Page</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#introduction" className="text-primary-blue hover:text-primary-navy font-medium">Introduction</a>
                    </li>
                    <li>
                      <a href="#getting-started" className="text-primary-blue hover:text-primary-navy font-medium">Getting Started</a>
                      <ul className="pl-4 mt-2 space-y-2">
                        <li>
                          <a href="#login" className="text-primary-blue/80 hover:text-primary-navy text-sm">Logging In</a>
                        </li>
                        <li>
                          <a href="#dashboard" className="text-primary-blue/80 hover:text-primary-navy text-sm">Dashboard Overview</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#processing-sales" className="text-primary-blue hover:text-primary-navy font-medium">Processing Sales</a>
                    </li>
                    <li>
                      <a href="#inventory" className="text-primary-blue hover:text-primary-navy font-medium">Inventory Management</a>
                    </li>
                    <li>
                      <a href="#reporting" className="text-primary-blue hover:text-primary-navy font-medium">Reporting</a>
                    </li>
                    <li>
                      <a href="#troubleshooting" className="text-primary-blue hover:text-primary-navy font-medium">Troubleshooting</a>
                    </li>
                  </ul>

                  <div className="mt-8 pt-6 border-t border-primary-sky/20">
                    <h3 className="font-display font-bold text-lg mb-4 text-primary-navy">Related Resources</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/support/videos" className="text-primary-blue hover:text-primary-navy font-medium flex items-center">
                          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                          </svg>
                          Video Tutorials
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-primary-blue hover:text-primary-navy font-medium flex items-center">
                          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                          </svg>
                          POS Hardware Guide
                        </Link>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => {
                          e.preventDefault();
                          // Code to open chatbot would go here
                        }} className="text-primary-blue hover:text-primary-navy font-medium flex items-center">
                          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M17,11H9V8H7V11H7V13H7V16H9V13H17V16H19V13H19V11H19V8H17V11Z" />
                          </svg>
                          Ask Support Bot
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1">
                <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary-navy prose-p:text-[#22548c] prose-a:text-primary-blue prose-a:no-underline hover:prose-a:text-primary-navy prose-a:transition-colors">
                  <section id="introduction">
                    <SectionHeading title="Introduction" className="text-primary-navy" />
                    <p>
                      Welcome to the Harbor Tech POS System documentation. This guide will help you understand and effectively use your point-of-sale system to streamline your retail operations.
                    </p>
                    <p>
                      Our POS solution is designed specifically for Harbor Springs retailers, with features tailored to your seasonal business needs, inventory management requirements, and customer engagement strategies.
                    </p>
                    <div className="bg-accent-sand p-6 rounded-xl my-8 border-l-4 border-accent-gold">
                      <h4 className="text-primary-navy font-display font-bold text-lg mt-0">Quick Start</h4>
                      <p className="mb-0">New to the Harbor Tech POS? We recommend starting with the <a href="#getting-started">Getting Started</a> section below, followed by watching our <Link href="/support/videos">video tutorials</Link> for a visual walkthrough of the system.</p>
                    </div>
                  </section>
                  
                  <section id="getting-started" className="mt-12">
                    <SectionHeading title="Getting Started" className="text-primary-navy" />
                    <p>
                      Before diving into specific features, let's get familiar with the basics of your POS system. This section covers initial setup, logging in, and navigating the dashboard.
                    </p>
                    
                    <h3 id="login" className="text-primary-navy font-display font-bold text-xl mt-8">Logging In</h3>
                    <p>
                      To access your POS system:
                    </p>
                    <ol>
                      <li>Open the POS application on your device</li>
                      <li>Enter your username and password</li>
                      <li>Select your role (Admin, Manager, or Cashier)</li>
                      <li>Click "Sign In"</li>
                    </ol>
                    <p>
                      For security reasons, the system will automatically log you out after 30 minutes of inactivity. You can adjust this setting in the system preferences.
                    </p>
                    
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-primary-sky/20 my-8">
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
                        <h4 className="font-display font-bold text-lg mb-2 mt-0">Video: Logging Into Your POS</h4>
                        <p className="text-primary-navy mb-0">Watch this short video for a visual guide to logging in and basic navigation.</p>
                      </div>
                    </div>
                    
                    <h3 id="dashboard" className="text-primary-navy font-display font-bold text-xl mt-8">Dashboard Overview</h3>
                    <p>
                      After logging in, you'll see the main dashboard with:
                    </p>
                    <ul>
                      <li><strong>Quick Actions Bar</strong>: Buttons for common tasks like New Sale, Returns, and End of Day</li>
                      <li><strong>Sales Summary</strong>: Real-time overview of daily sales, transaction count, and average sale value</li>
                      <li><strong>Inventory Alerts</strong>: Notifications for low stock items or incoming deliveries</li>
                      <li><strong>Recent Transactions</strong>: List of the most recent sales with search capability</li>
                    </ul>
                    <p>
                      You can customize your dashboard layout in the Settings menu to show the information most relevant to your role.
                    </p>
                  </section>
                  
                  <section id="processing-sales" className="mt-12">
                    <SectionHeading title="Processing Sales" className="text-primary-navy" />
                    <p>
                      The core function of your POS system is processing sales quickly and accurately. This section covers everything from basic transactions to complex scenarios.
                    </p>
                    <p>
                      Detailed documentation coming soon. In the meantime, please refer to our <Link href="/support/videos">video tutorials</Link> or contact support.
                    </p>
                  </section>
                  
                  <section id="inventory" className="mt-12">
                    <SectionHeading title="Inventory Management" className="text-primary-navy" />
                    <p>
                      Effective inventory management is critical for your retail business. Your POS system includes powerful tools for tracking stock levels, managing suppliers, and optimizing ordering.
                    </p>
                    <p>
                      Detailed documentation coming soon. In the meantime, please refer to our <Link href="/support/videos">video tutorials</Link> or contact support.
                    </p>
                  </section>
                  
                  <section id="reporting" className="mt-12">
                    <SectionHeading title="Reporting" className="text-primary-navy" />
                    <p>
                      Your POS system generates comprehensive reports to help you understand your business performance and make data-driven decisions.
                    </p>
                    <p>
                      Detailed documentation coming soon. In the meantime, please refer to our <Link href="/support/videos">video tutorials</Link> or contact support.
                    </p>
                  </section>
                  
                  <section id="troubleshooting" className="mt-12">
                    <SectionHeading title="Troubleshooting" className="text-primary-navy" />
                    <p>
                      Encountering issues with your POS system? This section provides solutions to common problems and guidance on when to contact technical support.
                    </p>
                    <p>
                      Detailed documentation coming soon. In the meantime, please refer to our <Link href="/support/videos">video tutorials</Link> or contact support.
                    </p>
                  </section>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chat Support CTA */}
      <section className="py-12 bg-primary-sky/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-primary-navy/10 rounded-full p-3 mb-4">
              <svg className="w-8 h-8 text-primary-blue" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.53,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M17,11H9V8H7V11H7V13H7V16H9V13H17V16H19V13H19V11H19V8H17V11Z" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-2xl mb-4 text-primary-navy">
              Need Additional Help?
            </h2>
            <p className="text-[#22548c] mb-6">
              Our AI-powered support assistant is available 24/7 to answer your questions and provide step-by-step guidance.
            </p>
            <button className="btn-primary bg-primary-navy hover:bg-primary-sky inline-flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />
              </svg>
              Start Chat Support
            </button>
          </div>
        </div>
      </section>

      {/* Add sticky mobile CTA for better conversion */}
      <div className="fixed bottom-0 left-0 w-full md:hidden bg-white border-t border-gray-200 shadow-lg py-3 px-4 z-40 flex justify-center">
        <a 
          href="#" 
          className="btn-primary py-2 w-full max-w-xs flex items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            // Code to open chatbot would go here
          }}
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />
          </svg>
          Chat with Support
        </a>
      </div>
    </>
  );
} 