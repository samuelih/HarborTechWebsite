"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContactPage = () => {
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log(formData);
    setIsSubmitted(true);
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
              <span className="text-accent-gold">and connect</span>
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
                            Which Voyage Are You Interested In?*
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
                            <option value="skiff">Starter "Skiff" Package</option>
                            <option value="cutter">Voyager "Cutter" Package</option>
                            <option value="clipper">Flagship "Clipper" Package</option>
                            <option value="custom">Custom Solution</option>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Contact Method 1 */}
            <div className="bg-white/70 backdrop-blur-lg border-l-4 border-accent-gold rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block bg-accent-gold/10 rounded-full p-3 mb-4">
                <svg className="w-6 h-6 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Email</h3>
              <p className="text-primary-navy mb-4">For non-urgent inquiries</p>
              <a href="mailto:hello@harbortechconsulting.com" className="text-primary-sky font-medium hover:underline">
                hello@harbortechconsulting.com
              </a>
            </div>
            
            {/* Contact Method 2 */}
            <div className="bg-white/70 backdrop-blur-lg border-l-4 border-accent-gold rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block bg-accent-gold/10 rounded-full p-3 mb-4">
                <svg className="w-6 h-6 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Phone</h3>
              <p className="text-primary-navy mb-4">Mon-Fri, 9am-5pm ET</p>
              <a href="tel:2315559876" className="text-primary-sky font-medium hover:underline">
                (231) 555-9876
              </a>
            </div>
            
            {/* Contact Method 3 */}
            <div className="bg-white/70 backdrop-blur-lg border-l-4 border-accent-gold rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-block bg-accent-gold/10 rounded-full p-3 mb-4">
                <svg className="w-6 h-6 text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Visit Our Dock</h3>
              <p className="text-primary-navy mb-4">Our Harbor Springs outpost</p>
              <address className="not-italic text-primary-sky font-medium">
                123 Main Street<br />
                Harbor Springs, MI 49740
              </address>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage; 