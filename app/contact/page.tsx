"use client";

import { useState } from 'react';
import Link from 'next/link';

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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-nautical-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '24px 24px' }}></div>
        </div>
        
        {/* Signal flags decoration */}
        <div className="absolute -top-8 -right-8 w-32 h-32 md:w-64 md:h-64 text-white/10">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3Z" />
          </svg>
        </div>
        
        {/* Anchor decoration */}
        <div className="absolute -top-8 -left-8 w-32 h-32 md:w-64 md:h-64 text-white/10">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12,21A9,9 0 0,1 3,12H5A7,7 0 0,0 12,19A7,7 0 0,0 19,12H21A9,9 0 0,1 12,21M12,5A3,3 0 0,1 15,8H9A3,3 0 0,1 12,5M12,1A1,1 0 0,1 13,2A1,1 0 0,1 12,3A1,1 0 0,1 11,2A1,1 0 0,1 12,1Z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-white font-display mb-6">
              <span className="block text-lg font-medium mb-2 text-accent-seafoam">DROP ANCHOR</span>
              Send a Message in a Bottle
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-10 text-lg">
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
      <section className="py-16 bg-accent-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent-sand rounded-xl p-8 md:p-12 shadow-md relative overflow-hidden">
              {/* Compass rose background decoration */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 text-accent-gold/10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6.5A5.5,5.5 0 0,0 6.5,12A5.5,5.5 0 0,0 12,17.5A5.5,5.5 0 0,0 17.5,12A5.5,5.5 0 0,0 12,6.5M12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5Z" />
                </svg>
              </div>
              
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
                    <h2 className="font-display text-2xl font-bold mb-8 text-center">Request Your Free Harbor Check</h2>
                    
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
                          className="btn-primary bg-primary-navy hover:bg-primary-sky px-8"
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
      <section className="py-16 bg-accent-sand">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Contact Method 1 */}
            <div className="bg-accent-sand rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block bg-primary-sky/20 rounded-full p-3 mb-4">
                <svg className="w-6 h-6 text-primary-navy" fill="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-accent-sand rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block bg-primary-sky/20 rounded-full p-3 mb-4">
                <svg className="w-6 h-6 text-primary-navy" fill="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-accent-sand rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block bg-primary-sky/20 rounded-full p-3 mb-4">
                <svg className="w-6 h-6 text-primary-navy" fill="currentColor" viewBox="0 0 24 24">
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

      {/* Call to Action */}
      <section className="py-16 bg-nautical-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-6">Need Immediate Assistance?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            For urgent technical support, our lighthouse is always on. Call our direct line.
          </p>
          <a href="tel:2315559876" className="btn-primary bg-white text-nautical-deepBlue hover:bg-nautical-sand">
            Call Our Support Crew
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 