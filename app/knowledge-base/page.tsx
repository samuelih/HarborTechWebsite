import { Metadata } from 'next';
import KnowledgeBaseClient from './KnowledgeBaseClient';

export const metadata: Metadata = {
  title: 'Knowledge Base | Harbor Tech - Manuals & Resources',
  description: 'Search our comprehensive collection of manuals and helpful links to keep your business technology running smoothly. Find guides, dashboards, and support resources.',
  alternates: {
    canonical: '/knowledge-base',
  },
  openGraph: {
    title: 'Knowledge Base | Harbor Tech - Manuals & Resources',
    description: 'Search our comprehensive collection of manuals and helpful links to keep your business technology running smoothly. Find guides, dashboards, and support resources.',
    url: 'https://harbortech.org/knowledge-base',
  },
  twitter: {
    title: 'Knowledge Base | Harbor Tech - Manuals & Resources',
    description: 'Search our comprehensive collection of manuals and helpful links to keep your business technology running smoothly. Find guides, dashboards, and support resources.',
  },
};

export default function KnowledgeBasePage() {
  return <KnowledgeBaseClient />;
} 