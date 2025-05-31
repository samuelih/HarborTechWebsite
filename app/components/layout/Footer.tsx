"use client";

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-neutral-gull">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Quick Links & Contact */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-primary-navy mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/solutions" className="text-primary-sky hover:text-primary-blue transition-colors">
                      Our Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" className="text-primary-sky hover:text-primary-blue transition-colors">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-primary-sky hover:text-primary-blue transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-primary-sky hover:text-primary-blue transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-primary-navy mb-4">Contact</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-primary-sky">Phone</p>
                    <a href="tel:+1234567890" className="text-primary-navy hover:text-primary-blue transition-colors font-medium">
                      (555) 123-4567
                    </a>
                  </div>
                  <div>
                    <p className="text-primary-sky">Email</p>
                    <a href="mailto:hello@harbortechconsulting.com" className="text-primary-navy hover:text-primary-blue transition-colors font-medium">
                      hello@harbortechconsulting.com
                    </a>
                  </div>
                  <div>
                    <p className="text-primary-sky">Location</p>
                    <p className="text-primary-navy">Harbor Springs, MI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Logo & Tagline */}
          <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
            <div className="mb-6">
              <Image 
                src="/images/logos/logo_baw.svg" 
                alt="Harbor Technology Consulting Logo" 
                width={80} 
                height={80}
                className="mx-auto lg:ml-auto lg:mr-0"
              />
            </div>
            <div className="max-w-xs">
              <h4 className="font-display font-bold text-primary-navy mb-2">
                Harbor Technology Consulting
              </h4>
              <p className="text-primary-sky text-sm leading-relaxed">
                Your trusted local partner for simple, effective technology solutions in Harbor Springs.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-neutral-gull/60 mt-12 pt-8">
          <p className="text-center text-primary-navy/70 text-sm">
            © {currentYear} Harbor Technology Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 