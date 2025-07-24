"use client";

import Hero from './components/home/Hero';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import SolutionsSection from './components/home/SolutionsSection';
import AboutSection from './components/home/AboutSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import BlogSection from './components/home/BlogSection';

import CTASection from './components/home/CTASection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Section Divider */}
      <div className="border-t border-neutral-gull/60"></div>

      {/* Our Services */}
      <SolutionsSection />

      {/* Section Divider */}
      <div className="border-t border-neutral-gull/60"></div>

      {/* Why Choose Us? */}
      <WhyChooseUsSection />

      {/* Section Divider */}
      <div className="border-t border-neutral-gull/60"></div>

      {/* Our Mission */}
      <AboutSection />

      {/* Ready to Chart Your Course? */}
      <CTASection />
    </>
  );
} 