import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | Harbor Tech - Local IT Experts',
  description: 'Meet Sam Harrell and Max Bassett, Harbor Springs natives providing local tech solutions. University of Michigan students with deep hometown knowledge.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Harbor Tech | Local IT Experts',
    description: 'Meet Sam Harrell and Max Bassett, Harbor Springs natives providing local tech solutions. University of Michigan students with deep hometown knowledge.',
    url: 'https://harbortech.org/about',
  },
  twitter: {
    title: 'About Harbor Tech | Local IT Experts',
    description: 'Meet Sam Harrell and Max Bassett, Harbor Springs natives providing local tech solutions. University of Michigan students with deep hometown knowledge.',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
} 