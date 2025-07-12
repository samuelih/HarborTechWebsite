import { Metadata } from 'next';
import SolutionsPageClient from './SolutionsPageClient';

export const metadata: Metadata = {
  title: 'Business Solutions | Harbor Tech - POS, Wi-Fi & More',
  description: 'Personalized tech solutions for Harbor Springs businesses. POS systems, secure Wi-Fi, inventory management, and more. Local installation and support.',
  alternates: {
    canonical: '/solutions',
  },
  openGraph: {
    title: 'Business Solutions | Harbor Tech - POS, Wi-Fi & More',
    description: 'Personalized tech solutions for Harbor Springs businesses. POS systems, secure Wi-Fi, inventory management, and more. Local installation and support.',
    url: 'https://harbortech.org/solutions',
  },
  twitter: {
    title: 'Business Solutions | Harbor Tech - POS, Wi-Fi & More',
    description: 'Personalized tech solutions for Harbor Springs businesses. POS systems, secure Wi-Fi, inventory management, and more. Local installation and support.',
  },
};

export default function SolutionsPage() {
  return <SolutionsPageClient />;
} 