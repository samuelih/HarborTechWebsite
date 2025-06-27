"use client";

import Image from 'next/image';
import TestimonialCard from '../cards/TestimonialCard';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: '"Sales rose 17% in six weeks and my staff stopped dreading inventory day."',
      name: 'Molly',
      company: 'The Book Nook',
      imageUrl: '/images/placeholders/testimonial-placeholder.svg'
    },
    {
      quote: '"The fixed fee let us budget with zero guesswork. Worth every penny."',
      name: 'Dave',
      company: 'Harbor Outfitters',
      imageUrl: '/images/placeholders/testimonial-placeholder.svg'
    }
  ];

  return (
    <section className="py-20 bg-primary-100 relative overflow-hidden">
      {/* Decorative nautical elements */}
      <div className="absolute top-10 right-10 w-28 h-28 opacity-10" aria-hidden="true">
        <Image 
          src="/images/user/lighthouse.svg" 
          alt="Decorative lighthouse illustration" 
          width={112}
          height={112}
          className="object-contain"
        />
      </div>
      
      <div className="absolute bottom-5 left-5 w-20 h-20 opacity-10" aria-hidden="true">
        <Image 
          src="/images/user/anchor.svg" 
          alt="Decorative nautical anchor" 
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      
      <Container className="relative z-10">
        <div className="flex items-center justify-center mb-8">
          <div className="w-10 h-10 mr-4" aria-hidden="true">
            <Image 
              src="/images/user/wheel.svg" 
              alt="Decorative nautical ship wheel" 
              width={40}
              height={40}
              className="object-contain animate-slow-spin"
            />
          </div>
          <SectionHeading title="What Our Clients Say" centered />
          <div className="w-10 h-10 ml-4" aria-hidden="true">
            <Image 
              src="/images/user/wheel.svg" 
              alt="Decorative nautical ship wheel" 
              width={40}
              height={40}
              className="object-contain animate-slow-spin"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              company={testimonial.company}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
        
        {/* Add decorative wave below testimonials */}
        <div className="mt-16 relative h-12 opacity-20" aria-hidden="true">
          <Image 
            src="/images/user/wave.svg" 
            alt="Decorative wave pattern" 
            fill
            className="object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection; 