export interface Solution {
  id: string;
  name: string;
  price: number;
  summary: string;
  category: string;
  icon: string;
  popular?: boolean;
  timeSavedPerMonth: number; // hours saved per month
}

export const solutions: Solution[] = [
  // POS & Payment Solutions
  {
    id: 'inventory-ai',
    name: 'Inventory AI',
    price: 99,
    summary: 'Predict stockouts in real-time',
    category: 'POS & Payments',
    icon: '/images/icons/general/clipboard.svg',
    timeSavedPerMonth: 6
  },
  {
    id: 'chatbot-pro',
    name: 'Chatbot Pro',
    price: 149,
    summary: '24/7 customer support bot',
    category: 'Customer Service',
    icon: '/images/icons/general/talk.svg',
    popular: true,
    timeSavedPerMonth: 12
  },
  {
    id: 'pos-sync',
    name: 'POS Sync',
    price: 199,
    summary: 'Seamless inventory synchronization',
    category: 'POS & Payments',
    icon: '/images/icons/general/wrench.svg',
    timeSavedPerMonth: 8
  },
  {
    id: 'smart-analytics',
    name: 'Smart Analytics',
    price: 79,
    summary: 'Business intelligence dashboard',
    category: 'Analytics',
    icon: '/images/icons/general/discovery.svg',
    timeSavedPerMonth: 4
  },
  {
    id: 'loyalty-system',
    name: 'Loyalty System',
    price: 129,
    summary: 'Customer rewards and retention',
    category: 'Customer Service',
    icon: '/images/icons/general/crown-star.svg',
    timeSavedPerMonth: 3
  },
  
  // E-commerce Solutions
  {
    id: 'online-store',
    name: 'Online Store Builder',
    price: 299,
    summary: 'Professional e-commerce platform',
    category: 'E-commerce',
    icon: '/images/icons/general/shopping-cart.svg',
    timeSavedPerMonth: 10
  },
  {
    id: 'click-collect',
    name: 'Click & Collect',
    price: 89,
    summary: 'Buy online, pickup in-store',
    category: 'E-commerce',
    icon: '/images/icons/general/home.svg',
    timeSavedPerMonth: 5
  },
  {
    id: 'mobile-checkout',
    name: 'Mobile Checkout',
    price: 159,
    summary: 'Contactless payment processing',
    category: 'POS & Payments',
    icon: '/images/icons/general/bluetooth.svg',
    timeSavedPerMonth: 4
  },
  
  // Marketing & SEO
  {
    id: 'seo-optimizer',
    name: 'SEO Optimizer',
    price: 199,
    summary: 'Boost your search rankings',
    category: 'Marketing',
    icon: '/images/icons/general/light-bulb.svg',
    timeSavedPerMonth: 6
  },
  {
    id: 'email-automation',
    name: 'Email Automation',
    price: 119,
    summary: 'Automated customer campaigns',
    category: 'Marketing',
    icon: '/images/icons/general/unread-letter.svg',
    timeSavedPerMonth: 8
  },
  {
    id: 'social-manager',
    name: 'Social Media Manager',
    price: 89,
    summary: 'Automated social posting',
    category: 'Marketing',
    icon: '/images/icons/general/community.svg',
    timeSavedPerMonth: 10
  },
  
  // Operations & Management
  {
    id: 'staff-scheduler',
    name: 'Staff Scheduler',
    price: 69,
    summary: 'Smart employee scheduling',
    category: 'Operations',
    icon: '/images/icons/general/calendar-add.svg',
    timeSavedPerMonth: 5
  },
  {
    id: 'time-tracker',
    name: 'Time Tracker',
    price: 59,
    summary: 'Payroll-friendly time clock',
    category: 'Operations',
    icon: '/images/icons/general/clock.svg',
    timeSavedPerMonth: 3
  },
  {
    id: 'backup-vault',
    name: 'Backup Vault',
    price: 39,
    summary: 'Secure cloud storage',
    category: 'Security',
    icon: '/images/icons/general/lock.svg',
    timeSavedPerMonth: 1
  },
  {
    id: 'cyber-shield',
    name: 'Cyber Shield',
    price: 169,
    summary: 'Complete security suite',
    category: 'Security',
    icon: '/images/icons/general/wrench.svg',
    popular: true,
    timeSavedPerMonth: 2
  },
  
  // Restaurant Specific
  {
    id: 'kitchen-display',
    name: 'Kitchen Display System',
    price: 249,
    summary: 'Digital order management',
    category: 'Restaurant',
    icon: '/images/icons/general/chef-hat.svg',
    timeSavedPerMonth: 15
  },
  {
    id: 'table-ordering',
    name: 'Table-side Ordering',
    price: 189,
    summary: 'QR code menu ordering',
    category: 'Restaurant',
    icon: '/images/icons/general/bar-chair.svg',
    timeSavedPerMonth: 8
  },
  {
    id: 'reservation-system',
    name: 'Reservation System',
    price: 129,
    summary: 'Smart table management',
    category: 'Restaurant',
    icon: '/images/icons/general/calendar-add.svg',
    timeSavedPerMonth: 4
  },
  
  // Service Business Tools
  {
    id: 'appointment-booking',
    name: 'Appointment Booking',
    price: 109,
    summary: 'Online scheduling system',
    category: 'Service Business',
    icon: '/images/icons/general/calendar-add.svg',
    timeSavedPerMonth: 6
  },
  {
    id: 'job-tracker',
    name: 'Job Tracker',
    price: 89,
    summary: 'Project management tool',
    category: 'Service Business',
    icon: '/images/icons/general/clipboard.svg',
    timeSavedPerMonth: 5
  },
  {
    id: 'quote-generator',
    name: 'Quote Generator',
    price: 79,
    summary: 'Instant professional quotes',
    category: 'Service Business',
    icon: '/images/icons/general/money.svg',
    timeSavedPerMonth: 4
  },
  
  // Additional Solutions
  {
    id: 'website-refresh',
    name: 'Website Refresh',
    price: 399,
    summary: 'Modern responsive website',
    category: 'Web Services',
    icon: '/images/icons/general/discovery.svg',
    timeSavedPerMonth: 2
  },
  {
    id: 'training-portal',
    name: 'Training Portal',
    price: 159,
    summary: 'Staff education platform',
    category: 'Operations',
    icon: '/images/icons/general/hands-stars.svg',
    timeSavedPerMonth: 3
  },
  {
    id: 'support-helpdesk',
    name: 'Support Helpdesk',
    price: 199,
    summary: 'Customer support system',
    category: 'Customer Service',
    icon: '/images/icons/general/support-call.svg',
    timeSavedPerMonth: 7
  }
];

export const categories = [
  'All Solutions',
  'POS & Payments',
  'E-commerce', 
  'Customer Service',
  'Marketing',
  'Operations',
  'Security',
  'Restaurant',
  'Service Business',
  'Web Services',
  'Analytics'
]; 