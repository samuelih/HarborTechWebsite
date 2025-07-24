"use client";

import { useState } from 'react';

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
    service: 'business-upgrades'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.business) {
      setError('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
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
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      business: '',
      message: '',
      service: 'business-upgrades'
    });
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-neutral-gull/50 overflow-hidden ${className}`}>
      <div className="bg-gradient-to-r from-primary-navy to-primary-blue px-8 py-6">
        <h2 className="text-white font-display text-2xl md:text-3xl font-bold text-center">
          Tell Us More
        </h2>
        <p className="text-white/90 text-center mt-2">
          Ready to upgrade your business? Let's start the conversation.
        </p>
      </div>
      
      <div className="p-8">
        {isSubmitted ? (
          <div className="text-center py-8" role="status" aria-live="polite">
            <div className="inline-block bg-accent-sea/20 rounded-full p-4 mb-6">
              <svg className="w-12 h-12 text-accent-sea" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold mb-4 text-primary-navy">
              Message Successfully Sent!
            </h3>
            <p className="mb-6 text-neutral-600 leading-relaxed">
              Thank you for your interest! Our team will review your requirements and respond within 24 hours 
              with a personalized proposal.
            </p>
            <button
              onClick={resetForm}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <>
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary-navy mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-gull focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-gull focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary-navy mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-gull focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                    placeholder="(231) 555-0123"
                  />
                </div>
                
                {/* Business Name Field */}
                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-primary-navy mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-gull focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                    placeholder="Your business name"
                  />
                </div>
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary-navy mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-gull focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="What business challenges are you facing? Which solutions interest you most? Any specific timeline or budget considerations?"
                ></textarea>
              </div>
              
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-accent btn-large relative"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm; 