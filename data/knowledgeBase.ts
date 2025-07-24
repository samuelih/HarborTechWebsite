export interface KnowledgeResource {
  id: string;
  title: string;
  type: 'manual' | 'link';
  category: string;
  description: string;
  url: string;
  fileSizeMB?: number;
  lastUpdated: string;
  isPopular: boolean;
  icon?: string;
}

export const knowledgeResources: KnowledgeResource[] = [
  // Popular Manuals
  {
    id: 'pos-setup-guide',
    title: 'POS System Setup Guide',
    type: 'manual',
    category: 'Point of Sale',
    description: 'Complete walkthrough for setting up your new POS system with payment processing.',
    url: '/manuals/pos-setup-guide.pdf',
    fileSizeMB: 2.4,
    lastUpdated: '2024-12-15',
    isPopular: true,
    icon: '/images/icons/tech/pos-icon.svg'
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management Best Practices',
    type: 'manual',
    category: 'Inventory',
    description: 'Strategies for tracking stock, managing seasonal inventory, and reducing waste.',
    url: '/manuals/inventory-management.pdf',
    fileSizeMB: 1.8,
    lastUpdated: '2024-11-28',
    isPopular: true,
    icon: '/images/icons/general/clipboard.svg'
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance Checklist',
    type: 'manual',
    category: 'Website',
    description: 'Monthly and quarterly tasks to keep your business website running smoothly.',
    url: '/manuals/website-maintenance.pdf',
    fileSizeMB: 1.2,
    lastUpdated: '2024-12-01',
    isPopular: true,
    icon: '/images/icons/general/wrench.svg'
  },
  {
    id: 'payment-processing',
    title: 'Payment Processing Security',
    type: 'manual',
    category: 'Payment Systems',
    description: 'Essential security practices for handling customer payment information safely.',
    url: '/manuals/payment-security.pdf',
    fileSizeMB: 3.1,
    lastUpdated: '2024-10-15',
    isPopular: false,
    icon: '/images/icons/general/lock.svg'
  },
  {
    id: 'cloud-backup',
    title: 'Cloud Backup Setup',
    type: 'manual',
    category: 'Data Management',
    description: 'Step-by-step instructions for setting up automated cloud backups.',
    url: '/manuals/cloud-backup.pdf',
    fileSizeMB: 2.0,
    lastUpdated: '2024-11-10',
    isPopular: false,
    icon: '/images/icons/tech/cloud-icon.svg'
  },

  // Popular Links
  {
    id: 'shopify-admin',
    title: 'Shopify Admin Dashboard',
    type: 'link',
    category: 'E-commerce',
    description: 'Direct access to your Shopify store management dashboard.',
    url: 'https://admin.shopify.com',
    lastUpdated: '2024-12-15',
    isPopular: true,
    icon: '/images/logos/shopify-logo.svg'
  },
  {
    id: 'ubiquiti-console',
    title: 'Ubiquiti Network Console',
    type: 'link',
    category: 'Networking',
    description: 'Manage your business network settings and monitor connectivity.',
    url: 'https://unifi.ui.com',
    lastUpdated: '2024-12-10',
    isPopular: true,
    icon: '/images/logos/ubiquiti-logo.svg'
  },
  {
    id: 'google-analytics',
    title: 'Google Analytics Dashboard',
    type: 'link',
    category: 'Analytics',
    description: 'Track your website traffic and customer behavior insights.',
    url: 'https://analytics.google.com',
    lastUpdated: '2024-12-12',
    isPopular: true,
    icon: '/images/icons/general/discovery.svg'
  },
  {
    id: 'payment-processor',
    title: 'Payment Processor Portal',
    type: 'link',
    category: 'Payment Systems',
    description: 'Access your payment processing account and transaction history.',
    url: 'https://dashboard.stripe.com',
    lastUpdated: '2024-12-08',
    isPopular: false,
    icon: '/images/icons/general/money.svg'
  },
  {
    id: 'support-portal',
    title: 'Harbor Tech Support Portal',
    type: 'link',
    category: 'Support',
    description: 'Submit support tickets and track ongoing technical issues.',
    url: '/support',
    lastUpdated: '2024-12-15',
    isPopular: false,
    icon: '/images/icons/general/support-call.svg'
  },
  {
    id: 'security-checklist',
    title: 'Business Security Checklist',
    type: 'link',
    category: 'Security',
    description: 'Online tool to assess your business cybersecurity readiness.',
    url: 'https://cybersecurity.cisa.gov/assessments',
    lastUpdated: '2024-11-20',
    isPopular: false,
    icon: '/images/icons/general/lock.svg'
  }
];

export const categories = [
  'All',
  'Point of Sale',
  'Inventory', 
  'Website',
  'E-commerce',
  'Payment Systems',
  'Networking',
  'Analytics',
  'Data Management',
  'Security',
  'Support'
];

export const filterOptions = ['All', 'Manuals', 'Links']; 