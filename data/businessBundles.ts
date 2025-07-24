export interface BusinessBundle {
  id: string;
  name: string;
  price: number;
  blurb: string;
  includes: string[];
  popular?: boolean;
  icon: string;
  accentColor: string;
  timeSavedPerMonth: number; // hours saved per month
}

export const bundles: BusinessBundle[] = [
  {
    id: 'starter',
    name: 'Starter Bundle',
    price: 299,
    blurb: 'Great for first-time automators',
    includes: ['POS Sync', 'Basic Chatbot'],
    icon: '/images/icons/general/light-bulb.svg',
    accentColor: 'accent-gold',
    timeSavedPerMonth: 8
  },
  {
    id: 'essentials',
    name: 'Essentials Bundle', 
    price: 599,
    blurb: 'Perfect for growing businesses',
    includes: ['POS Install', 'Inventory Sync', 'Basic Website'],
    icon: '/images/icons/general/wrench.svg',
    accentColor: 'primary-navy',
    timeSavedPerMonth: 15
  },
  {
    id: 'professional',
    name: 'Professional Bundle',
    price: 899,
    blurb: 'Complete business transformation',
    includes: ['Smart POS', 'Online Store', 'Customer Analytics', 'AI Chatbot'],
    icon: '/images/icons/general/crown-star.svg',
    accentColor: 'accent-sea',
    timeSavedPerMonth: 25
  },
  {
    id: 'enterprise',
    name: 'Enterprise Bundle',
    price: 1299,
    blurb: 'Everything you need to scale',
    includes: ['Full POS Suite', 'E-commerce Platform', 'Advanced Analytics', 'Custom Integrations', '24/7 Support'],
    icon: '/images/icons/general/crown.svg',
    accentColor: 'accent-gold',
    timeSavedPerMonth: 40
  },
  {
    id: 'hospitality',
    name: 'Hospitality Bundle',
    price: 799,
    blurb: 'Tailored for restaurants & cafes',
    includes: ['Table-side Ordering', 'Kitchen Display', 'Reservation System', 'Menu Manager'],
    icon: '/images/icons/general/chef-hat.svg',
    accentColor: 'primary-navy',
    timeSavedPerMonth: 20
  },
  {
    id: 'retail-plus',
    name: 'Retail Plus Bundle',
    price: 949,
    blurb: 'Advanced retail management',
    includes: ['Smart Inventory', 'Click & Collect', 'Loyalty Program', 'Staff Training', 'Sales Dashboard'],
    icon: '/images/icons/general/shopping-cart.svg',
    accentColor: 'accent-sea',
    timeSavedPerMonth: 30
  }
]; 