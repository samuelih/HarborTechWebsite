import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | Harbor Tech - Get Your Free Harbor Check',
  description: 'Contact Harbor Tech for your free consultation. Call Sam at (734) 834-8005 or Max at (231) 330-3682. Local IT support for Harbor Springs businesses.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Harbor Tech | Get Your Free Harbor Check',
    description: 'Contact Harbor Tech for your free consultation. Call Sam at (734) 834-8005 or Max at (231) 330-3682. Local IT support for Harbor Springs businesses.',
    url: 'https://harbortech.org/contact',
  },
  twitter: {
    title: 'Contact Harbor Tech | Get Your Free Harbor Check',
    description: 'Contact Harbor Tech for your free consultation. Call Sam at (734) 834-8005 or Max at (231) 330-3682. Local IT support for Harbor Springs businesses.',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
} 