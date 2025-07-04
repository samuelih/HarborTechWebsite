"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding bg-neutral-gull">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Left: Quick Links & Contact */}
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-primary-navy mb-3 sm:mb-4 text-lg">Quick Links</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Link href="/solutions" className="text-primary-sky hover:text-primary-blue transition-colors text-sm sm:text-base">
                      Our Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/support/options-pricing" className="text-primary-sky hover:text-primary-blue transition-colors text-sm sm:text-base">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-primary-sky hover:text-primary-blue transition-colors text-sm sm:text-base">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-primary-sky hover:text-primary-blue transition-colors text-sm sm:text-base">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-primary-navy mb-3 sm:mb-4 text-lg">Contact</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-primary-sky text-sm mb-1">Sam Harrell</p>
                    <a href="tel:+17348348005" className="text-primary-navy hover:text-primary-blue transition-colors font-medium text-sm sm:text-base block">
                      (734) 834-8005
                    </a>
                    <a href="mailto:sam@harbortech.org" className="text-primary-navy hover:text-primary-blue transition-colors font-medium text-sm sm:text-base break-all">
                      sam@harbortech.org
                    </a>
                  </div>
                  <div>
                    <p className="text-primary-sky text-sm mb-1">Max Bassett</p>
                    <a href="tel:+12313303682" className="text-primary-navy hover:text-primary-blue transition-colors font-medium text-sm sm:text-base block">
                      (231) 330-3682
                    </a>
                    <a href="mailto:max@harbortech.org" className="text-primary-navy hover:text-primary-blue transition-colors font-medium text-sm sm:text-base break-all">
                      max@harbortech.org
                    </a>
                  </div>
                  <div>
                    <p className="text-primary-sky text-sm">Location</p>
                    <p className="text-primary-navy text-sm sm:text-base">Harbor Springs, MI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Logo & Tagline */}
          <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
            <div className="mb-4 sm:mb-6">
              <Image 
                src="/images/logos/logo_baw.svg" 
                alt="Harbor Technology Consulting Logo" 
                width={60} 
                height={60}
                className="mx-auto lg:ml-auto lg:mr-0 sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px]"
                sizes="(max-width: 640px) 60px, (max-width: 768px) 70px, 80px"
              />
            </div>
            <div className="max-w-xs">
              <h4 className="font-display font-bold text-primary-navy mb-2 text-base sm:text-lg">
                Harbor Technology Consulting
              </h4>
              <p className="text-primary-sky text-xs sm:text-sm leading-relaxed">
                Your trusted local partner for simple, effective technology solutions in Harbor Springs.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-neutral-gull/60 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8">
          <p className="text-center text-primary-navy/70 text-xs sm:text-sm">
            © {currentYear} Harbor Technology Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 