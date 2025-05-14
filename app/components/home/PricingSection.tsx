"use client";

import Link from 'next/link';
import Image from 'next/image';
import PricingCard from '../cards/PricingCard';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';

const PricingSection = () => {
  const packages = [
    {
      icon: '/images/user/sailboat.svg',
      title: 'Starter "Skiff"',
      subtitle: 'Perfect for one-register shops & galleries',
      price: '$4,800',
      features: [
        'POS install (1 register)',
        'Basic inventory sync',
        'Cloud doc vault (10 GB)',
        '2-hr training',
        '$0 first month'
      ]
    },
    {
      icon: '/images/user/lighthouse.svg',
      title: 'Voyager "Cutter"',
      subtitle: 'Growing boutiques with online + in-store stock',
      price: '$9,800',
      isPopular: true,
      features: [
        'Everything in Skiff, plus',
        'POS for 3 registers',
        'Advanced analytics',
        'Device refresh (up to 5 PCs/tablets)',
        '1-day staff workshop'
      ]
    },
    {
      icon: '/images/user/wheel.svg',
      title: 'Flagship "Clipper"',
      subtitle: 'Multi-location or high-volume retailers',
      price: '$18,500',
      features: [
        'Everything in Cutter, plus',
        'POS unlimited',
        'Custom AI chatbot for customer FAQs',
        'Central data warehouse',
        'Dedicated success manager'
      ]
    }
  ];

  return (
    <section className="py-20 bg-accent-sand relative overflow-hidden" id="packages">
      {/* Removed repeating wave backgrounds */}
      <Container className="relative z-10">
        <SectionHeading title="Choose Your Perfect Package" centered />
        <p className="text-center max-w-2xl mx-auto mb-12">
          Transparent, fixed-cost technology packages to fit any retail operation size.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard
              key={index}
              title={pkg.title}
              subtitle={pkg.subtitle}
              price={pkg.price}
              isPopular={pkg.isPopular}
              features={pkg.features}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/contact" className="text-primary-700 hover:text-primary-500 font-semibold inline-flex items-center group">
            <span>Need something custom? Build Your Own Voyage</span>
          </Link>
        </div>
      </Container>
      
      {/* Bottom wave pattern */}
    </section>
  );
};

export default PricingSection; 