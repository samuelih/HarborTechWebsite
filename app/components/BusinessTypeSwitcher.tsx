"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const businessTypes = {
  retail: {
    label: 'Retail Shops',
    subtitle: 'clothing, gifts, hardware',
    services: [
      { name: 'POS Tune Up', description: 'Fix slow check-outs, add tap to pay, tidy product library.' },
      { name: 'POS Install', description: 'Choose system, order hardware, set up taxes and receipts' },
      { name: 'Inventory Clean Up + auto Reorder Sheet', description: 'One click counts, 4 week demand forecast in Google Sheets' },
      { name: '"Click and Collect" Online Store', description: 'Shopify site tied to instore stock, basic theme, 3 pages' },
      { name: 'Google Business Profile and SEO Optimization', description: 'Hours, photos, reviews' },
      { name: 'Website Refresh', description: 'Update copy, new hero image, shop map, etc.' },
      { name: 'Loyalty + email starter pack', description: 'Sign up QR code at till, mailchimp template, first campaign, etc' },
      { name: 'FAQ (customer and staff) AI Chatbot', description: 'embed in site/POS, trains on policies' },
      { name: 'Sales and Stock Dashboard', description: 'Daily KPIs piped from POS to a shareable Looker Studio' },
      { name: 'Cyber-Basics and Backup', description: 'Password manager, 2-factor logins, nightly cloud copy' },
      { name: 'Payroll friendly Time Clock', description: 'Staff app, tip-pool reports, auto OT alert' },
      { name: 'In-Store Speaker / Display Systems', description: '' },
      { name: 'Staff Training + Cheat Sheets', description: 'On-site or Zoom, plus printable cheat sheets' }
    ]
  },
  restaurants: {
    label: 'Restaurants',
    subtitle: '',
    services: [
      { name: 'POS Tune Up', description: 'Fix slow check-outs, add tap to pay, tidy product library.' },
      { name: 'Table-side QR Ordering', description: 'Print codes, configure mobile menu, push to kitchen printer' },
      { name: 'Online Ordering + Curb-side', description: 'Toast/Shopify Food app, hook to inventory and pickup texts' },
      { name: 'Google Business Profile and SEO Optimization', description: 'Hours, photos, reviews' },
      { name: 'Reservations Sync', description: 'Integrate OpenTable/ Resy with POS, real-time table status board' },
      { name: 'Kitchen Display System (KDS) Install', description: 'Tablets, routing rules, expo screen' },
      { name: 'Menu and Allergen Manager', description: 'Master menu in Google Sheets, pushes to QR, website, DoorDash' },
      { name: 'Payroll friendly Time Clock', description: 'Staff app, tip-pool reports, auto OT alert' },
      { name: 'Website Refresh', description: 'Update copy, new hero image, shop map, etc.' },
      { name: 'Loyalty + email starter pack', description: 'Sign up QR code at till, mailchimp template, first campaign, etc' },
      { name: 'FAQ (customer and staff) AI Chatbot', description: 'embed in site/POS, trains on policies' }
    ]
  },
  service: {
    label: 'Services',
    subtitle: '',
    services: [
      { name: 'Online Booking and Smart Calendar', description: 'Squarespace/ Square Appointments, sync to Google/Outlook, auto-reminders' },
      { name: 'Website Refresh', description: 'Update copy, new hero image, shop map, etc.' },
      { name: 'POS Install', description: 'Choose system, order hardware, set up taxes and receipts' },
      { name: 'Inventory Clean Up + auto Reorder Sheet', description: 'One click counts, 4 week demand forecast in Google Sheets' },
      { name: 'Job-Site Photo Uploader', description: 'Simple phone form -> client gets time-stamped pics and notes' },
      { name: 'Quick-Quote Template Pack', description: 'Branded PDF + auto-pricing spreadsheet for fast estimates' },
      { name: 'Loyalty + email starter pack', description: 'Sign up QR code at till, mailchimp template, first campaign, etc' },
      { name: 'FAQ (customer and staff) AI Chatbot', description: 'embed in site/POS, trains on policies' }
    ]
  },
  professional: {
    label: 'Professional Services',
    subtitle: 'Insurance, Law Firms, Banks, Healthcare',
    services: [
      { name: 'WORK IN PROGRESS', description: '' }
    ]
  }
};

type BusinessType = keyof typeof businessTypes;

const BusinessTypeSwitcher = () => {
  const [activeType, setActiveType] = useState<BusinessType>('retail');

  return (
    <div className="space-y-8">
      {/* Button Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.entries(businessTypes).map(([key, business]) => (
          <button
            key={key}
            onClick={() => setActiveType(key as BusinessType)}
            className={`
              rounded-full px-6 py-3 font-semibold text-center transition-all duration-150 ease-out shadow-md hover:-translate-y-0.5
              ${activeType === key 
                ? 'bg-[#0D2545] text-white' 
                : 'bg-[#F6E9CF] text-[#0D2545] hover:bg-[#0D2545] hover:text-white'
              }
            `}
            aria-pressed={activeType === key}
          >
            {business.label}
          </button>
        ))}
      </div>

      {/* Panel Area */}
      <div className="max-w-screen-lg mx-auto">
        <AnimatePresence mode="wait">
          <motion.section
            key={activeType}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-[#F6E9CF]/40 rounded-2xl p-6 overflow-hidden"
            aria-labelledby={`${activeType}-heading`}
          >
            <div className="mb-6">
              <h3 
                id={`${activeType}-heading`}
                className="text-2xl font-bold text-[#0D2545] mb-2"
              >
                {businessTypes[activeType].label}
              </h3>
              {businessTypes[activeType].subtitle && (
                <p className="text-lg text-gray-600 italic">
                  {businessTypes[activeType].subtitle}
                </p>
              )}
            </div>

            {/* Services Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#0D2545]/20">
                    <th className="text-left py-3 px-2 font-semibold text-[#0D2545] w-1/3">Service</th>
                    <th className="text-left py-3 px-2 font-semibold text-[#0D2545] w-2/3">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {businessTypes[activeType].services.map((service, index) => (
                    service.name === 'WORK IN PROGRESS' ? (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-3 px-2 text-center text-xl font-bold text-[#0D2545] col-span-2">
                          <span className="block">{service.name}</span>
                        </td>
                      </tr>
                    ) : (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="p-0" colSpan={2}>
                          <Link 
                            href="/contact" 
                            className="flex w-full hover:bg-white/80 transition-colors cursor-pointer"
                          >
                            <div className="py-3 px-2 font-medium text-[#0D2545] w-1/3">
                              {service.name}
                            </div>
                            <div className="py-3 px-2 text-gray-700 leading-relaxed w-2/3">
                              {service.description}
                            </div>
                          </Link>
                        </td>
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BusinessTypeSwitcher; 