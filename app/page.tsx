"use client";

import Hero from './components/home/Hero';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import ServicesSection from './components/home/ServicesSection';
import AboutSection from './components/home/AboutSection';
import PricingSection from './components/home/PricingSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import BlogSection from './components/home/BlogSection';
import CTASection from './components/home/CTASection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* "Why Harbor Tech?" Ribbon */}
      <WhyChooseUsSection />

      {/* Core Services */}
      <ServicesSection />

      {/* About Harbor Tech */}
      <AboutSection />

      {/* Package Comparison */}
      <PricingSection />

      {/* Testimonials */}
      {/* Removed TestimonialsSection */}

      {/* Latest Tips & Resources */}
      {/* Removed BlogSection */}

      {/* Final CTA */}
      <CTASection />
    </>
  );
} 