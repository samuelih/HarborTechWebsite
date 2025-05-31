import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support Plans | Harbor Technology Consulting',
  description: 'Get the tech support you need, when you need it. Local expertise for Harbor Springs retailers.',
  openGraph: {
    title: 'Support Plans | Harbor Technology Consulting',
    description: 'Get the tech support you need, when you need it. Local expertise for Harbor Springs retailers.',
  }
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 