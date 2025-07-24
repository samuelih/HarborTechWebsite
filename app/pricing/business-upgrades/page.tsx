import { Metadata } from 'next';
import BusinessUpgradesClient from './BusinessUpgradesClient';

export const metadata: Metadata = {
  title: 'Business Upgrades Pricing | Harbor Tech - Bundles & À La Carte Solutions',
  description: 'Explore our pre-packaged business upgrade bundles or build your custom solution à la carte. Transparent pricing for POS, inventory, e-commerce, and more.',
  alternates: {
    canonical: '/pricing/business-upgrades',
  },
  openGraph: {
    title: 'Business Upgrades Pricing | Harbor Tech - Bundles & À La Carte Solutions',
    description: 'Explore our pre-packaged business upgrade bundles or build your custom solution à la carte. Transparent pricing for POS, inventory, e-commerce, and more.',
    url: 'https://harbortech.org/pricing/business-upgrades',
  },
  twitter: {
    title: 'Business Upgrades Pricing | Harbor Tech - Bundles & À La Carte Solutions',
    description: 'Explore our pre-packaged business upgrade bundles or build your custom solution à la carte. Transparent pricing for POS, inventory, e-commerce, and more.',
  },
};

export default function BusinessUpgradesPage() {
  return <BusinessUpgradesClient />;
} 