"use client";

import Link from 'next/link';
import Image from 'next/image';

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-nautical-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="relative inline-block">
                Navigate your
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent-gold/70"></span>
              </span>
              {" "}
              <span className="text-accent-gold">digital journey</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Fixed-cost technology solutions for Harbor Springs retailers. No monthly fees, just results.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Main Services */}
      <section className="py-8 sm:py-12 md:py-16 bg-white relative overflow-hidden">
        {/* Decorative illustrations */}
        <div className="absolute top-20 left-5 w-32 h-32 opacity-10">
          <Image 
            src="/images/illustrations/sextant.svg" 
            alt="" 
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-20 right-5 w-24 h-24 opacity-10">
          <Image 
            src="/images/illustrations/rowboat1.svg" 
            alt="" 
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="responsive-grid">
            {/* Service Card 1 */}
            <div className="card service-card relative overflow-hidden border-t-4 border-t-nautical-azure">
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 text-nautical-azure/10">
                <svg viewBox="0 0 800 800" fill="currentColor" className="w-full h-full">
                  <path d="M400 80C225.9 80 80 225.9 80 400C80 574.1 225.9 720 400 720C574.1 720 720 574.1 720 400C720 225.9 574.1 80 400 80ZM400.1 190C455.3 190 500 234.7 500 289.9C500 345.1 455.3 389.8 400.1 389.8C344.9 389.8 300.2 345.1 300.2 289.9C300.2 234.7 344.9 190 400.1 190ZM179.8 510.2L274.2 416.8C287.5 442.8 311.1 462.4 339.9 470.1L339.9 589.7C269.7 582.6 211.5 553.5 179.8 510.2ZM460.1 589.7L460.1 470.1C488.9 462.4 512.5 442.8 525.8 416.8L620.2 510.2C588.5 553.6 530.3 582.6 460.1 589.7ZM654.4 461.6L560.4 368.6C567.4 347.1 567.4 324 560.4 302.5L654.4 209.4C681.3 264.1 693.2 329.2 679.6 396C671 437.8 651.6 476.5 620.2 510.2C620.2 510.2 622.2 491.3 654.4 461.6ZM239.6 368.6L145.6 461.6C118.7 406.9 106.8 341.8 120.4 275C129 233.2 148.4 194.5 179.8 160.8C179.8 160.8 177.8 179.7 145.6 209.4L239.6 302.4C232.6 324 232.6 347 239.6 368.6ZM339.9 210.3L339.9 329.9C311.1 337.6 287.5 357.2 274.2 383.2L179.8 289.8C211.5 246.5 269.7 217.4 339.9 210.3ZM525.8 383.2C512.5 357.2 488.9 337.6 460.1 329.9L460.1 210.3C530.3 217.4 588.5 246.4 620.2 289.8L525.8 383.2Z"/>
                </svg>
              </div>
              
              <div className="service-card-content">
                <h3 className="font-display text-xl sm:text-2xl mb-4 font-bold">Smart POS System</h3>
                <p className="text-neutral-700 mb-4">
                  Modern point-of-sale that syncs with your inventory and provides real-time sales analytics.
                </p>
                <p className="text-primary-blue font-bold text-lg mb-6">Starting at $1,950</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nautical-azure mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span>Cloud-based system</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nautical-azure mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span>Real-time inventory sync</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nautical-azure mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span>Staff training included</span>
                  </li>
                </ul>
              </div>
              
              <div className="service-card-footer">
                <Link href="/pricing#pos" className="btn-primary w-full text-center">
                  View POS Details
                </Link>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="card service-card relative overflow-hidden border-t-4 border-t-nautical-deepBlue">
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 text-nautical-deepBlue/10">
                <svg viewBox="0 0 800 800" fill="currentColor" className="w-full h-full">
                  <path d="M400 100C355.82 100 320 135.82 320 180C320 217.73 345.97 249.1 380 258.6V690C350 680 320 665 290 650V580H330C335.52 580 340 575.52 340 570V530C340 524.48 335.52 520 330 520H230C224.48 520 220 524.48 220 530V570C220 575.52 224.48 580 230 580H270V630C250 620 230 610 210 600C160 570 130 560 100 560V620C137.14 620 168.28 631.27 202.2 646.8C251.08 669.37 306.05 695 400 695C493.95 695 548.92 669.37 597.8 646.8C631.72 631.27 662.86 620 700 620V560C670 560 640 570 590 600C570 610 550 620 530 630V580H570C575.52 580 580 575.52 580 570V530C580 524.48 575.52 520 570 520H470C464.48 520 460 524.48 460 530V570C460 575.52 464.48 580 470 580H510V650C480 665 450 680 420 690V258.6C454.03 249.1 480 217.73 480 180C480 135.82 444.18 100 400 100ZM400 220C377.94 220 360 202.06 360 180C360 157.94 377.94 140 400 140C422.06 140 440 157.94 440 180C440 202.06 422.06 220 400 220Z"/>
                </svg>
              </div>
              
              <div className="service-card-content">
                <h3 className="font-display text-xl sm:text-2xl mb-4 font-bold">Online Store Setup</h3>
                <p className="text-neutral-700 mb-4">
                  Professional e-commerce site with inventory sync, secure checkout, and mobile optimization.
                </p>
                <p className="text-primary-blue font-bold text-lg mb-6">Starting at $2,450</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nautical-deepBlue mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span>Mobile-friendly design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nautical-deepBlue mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span>Secure payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nautical-deepBlue mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span>SEO optimized</span>
                  </li>
                </ul>
              </div>
              
              <div className="service-card-footer">
                <Link href="/pricing#store" className="btn-primary w-full text-center">
                  View Store Details
                </Link>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="card service-card relative overflow-hidden border-t-4 border-t-nautical-seafoam">
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 text-nautical-seafoam/10">
                <svg viewBox="0 0 800 800" fill="currentColor" className="w-full h-full">
                  <path d="M755 400C730 350 705 325 680 325C642.5 325 605 400 555 400C505 400 467.5 325 430 325C392.5 325 355 400 305 400C255 400 217.5 325 180 325C142.5 325 105 400 55 400C42.5 400 30 394.5 20 387L20 450C30 457.5 42.5 462.5 55 462.5C105 462.5 142.5 387.5 180 387.5C217.5 387.5 255 462.5 305 462.5C355 462.5 392.5 387.5 430 387.5C467.5 387.5 505 462.5 555 462.5C605 462.5 642.5 387.5 680 387.5C705 387.5 730 412.5 755 462.5L755 400Z"/>
                </svg>
              </div>
              
              <div className="service-card-content">
                <h3 className="font-display text-xl sm:text-2xl mb-4 font-bold">Data Dashboard</h3>
                <p className="text-neutral-700 mb-4">
                  Custom analytics dashboard showing sales trends, inventory levels, and customer insights.
                </p>
                <p className="text-primary-blue font-bold text-lg mb-6">Starting at $1,200</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nautical-seafoam mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span>Real-time reporting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nautical-seafoam mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span>Mobile access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-nautical-seafoam mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                    <span>Customizable KPIs</span>
                  </li>
                </ul>
              </div>
              
              <div className="service-card-footer">
                <Link href="/pricing#dashboard" className="btn-primary w-full text-center">
                  View Dashboard Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-8 sm:py-12 md:py-16 bg-nautical-sand">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-8 sm:mb-16">Your Technology Journey</h2>
          
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-nautical-rope hidden md:block"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-gull">
                <h3 className="font-display font-bold text-lg mb-2">Chat</h3>
                <p className="text-neutral-700 text-sm">Quick discussion about your needs</p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-gull">
                <h3 className="font-display font-bold text-lg mb-2">Plan</h3>
                <p className="text-neutral-700 text-sm">We create a custom solution plan</p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-gull">
                <h3 className="font-display font-bold text-lg mb-2">Review</h3>
                <p className="text-neutral-700 text-sm">Go over the plan together</p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-gull">
                <h3 className="font-display font-bold text-lg mb-2">Launch</h3>
                <p className="text-neutral-700 text-sm">Implement your custom solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-nautical-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Choose the services you need. Pay once. Get results that last.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-navy hover:bg-accent-sand">
            Get My Fixed-Cost Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 