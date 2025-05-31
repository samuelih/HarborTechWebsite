"use client";

import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="py-20 bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-h2 font-display font-bold mb-6">
            Ready to Chart Your Course?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's talk about how we can help your Harbor Springs business navigate the digital waters with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-blue hover:bg-accent-gold hover:text-primary-navy font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-blue font-semibold rounded-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm opacity-80">
              Local Harbor Springs support • No contracts • Free consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 