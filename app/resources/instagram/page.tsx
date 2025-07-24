import type { Metadata } from 'next';
import SocialMediaClient from './SocialMediaClient';

export const metadata: Metadata = {
  title: 'Social Media | Harbor Technology Consulting',
  description: 'Connect with Harbor Technology Consulting on Instagram, LinkedIn, and TikTok for technology insights and business updates',
};

export default function SocialMediaPage() {
  return <SocialMediaClient />;
} 