"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContactPageClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
    service: 'harbor-check'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Failed to send message');
        // You might want to show an error message to the user
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // You might want to show an error message to the user
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-nautical-gradient overflow-hidden pt-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="relative inline-block">
                Drop anchor
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold/70"></span>
              </span>
              {" "}
              <span className="text-accent-gold">and connect.</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Ready to navigate to smoother technological waters? Let us know how we can help chart your course to retail success.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[url('/images/backgrounds/compass-pattern.svg')] bg-no-repeat bg-center bg-cover relative overflow-hidden">
        {/* Animated compass background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg className="w-96 h-96 opacity-10 animate-spin-slow" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="95" stroke="#F0B254" strokeWidth="4" opacity="0.2" />
            <path d="M100,20 L100,180 M20,100 L180,100 M35,35 L165,165 M35,165 L165,35" stroke="#F0B254" strokeWidth="2" opacity="0.3" />
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-lg border-2 border-accent-gold rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden z-10">
              <div className="relative z-10">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-block bg-accent-seafoam/20 rounded-full p-3 mb-6">
                        <svg className="w-12 h-12 text-primary-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="font-display text-2xl font-bold mb-4">Message Successfully Sent!</h2>
                      <p className="mb-6 text-lg">Thank you for reaching out! Our crew will respond to your message within 24 hours.</p>
                      <Link href="/" className="btn-primary inline-block">
                        Return to Ship's Deck
                      </Link>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-primary-navy">Let's Talk – Request Your Free Harbor Check</h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Name Field */}
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-primary-navy mb-1">
                              Captain's Name*
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-neutral-gull focus:ring-2 focus:ring-primary-sky focus:border-transparent"
                              placeholder="Your name"
                            />
                          </div>
                          
                          {/* Email Field */}
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-primary-navy mb-1">
                              Communication Coordinates*
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-neutral-gull focus:ring-2 focus:ring-primary-sky focus:border-transparent"
                              placeholder="Your email"
                            />
                          </div>
                          
                          {/* Phone Field */}
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-primary-navy mb-1">
                              Signal Flag Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-neutral-gull focus:ring-2 focus:ring-primary-sky focus:border-transparent"
                              placeholder="Your phone number"
                            />
                          </div>
                          
                          {/* Business Name Field */}
                          <div>
                            <label htmlFor="business" className="block text-sm font-medium text-primary-navy mb-1">
                              Vessel Name*
                            </label>
                            <input
                              type="text"
                              id="business"
                              name="business"
                              required
                              value={formData.business}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-neutral-gull focus:ring-2 focus:ring-primary-sky focus:border-transparent"
                              placeholder="Your business name"
                            />
                          </div>
                        </div>
                        
                        {/* Service Interest */}
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-primary-navy mb-1">
                            What can we help you with?
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-gull focus:ring-2 focus:ring-primary-sky focus:border-transparent"
                          >
                            <option value="harbor-check">Free Harbor Check Consultation</option>
                            <option value="general">General Question</option>
                            <option value="support">Support Inquiry</option>
                            <option value="custom">Custom Solutions</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        {/* Message Field */}
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-primary-navy mb-1">
                            Your Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-gull focus:ring-2 focus:ring-primary-sky focus:border-transparent"
                            placeholder="Tell us about your business and current technology needs..."
                          ></textarea>
                        </div>
                        
                        <div className="text-center pt-4">
                          <button 
                            type="submit" 
                            className="btn-accent btn-large"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Method 1 - Sam */}
            <div className="bg-white/70 backdrop-blur-lg border-l-4 border-accent-gold rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block bg-accent-gold/10 rounded-full p-3 mb-4">
                <svg className="w-6 h-6 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Sam Harrell</h3>
              <p className="text-primary-navy mb-4">Co-Founder & Technology Specialist</p>
              <div className="space-y-2">
                <a href="tel:7348348005" className="text-primary-sky font-medium hover:underline block">
                  (734) 834-8005
                </a>
                <a href="mailto:sam@harbortech.org" className="text-primary-sky font-medium hover:underline block">
                  sam@harbortech.org
                </a>
              </div>
            </div>
            
            {/* Contact Method 2 - Max */}
            <div className="bg-white/70 backdrop-blur-lg border-l-4 border-accent-gold rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block bg-accent-gold/10 rounded-full p-3 mb-4">
                <svg className="w-6 h-6 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Max Bassett</h3>
              <p className="text-primary-navy mb-4">Co-Founder & Data Analytics Specialist</p>
              <div className="space-y-2">
                <a href="tel:2313303682" className="text-primary-sky font-medium hover:underline block">
                  (231) 330-3682
                </a>
                <a href="mailto:max@harbortech.org" className="text-primary-sky font-medium hover:underline block">
                  max@harbortech.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPageClient; 