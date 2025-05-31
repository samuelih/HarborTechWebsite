"use client";

import SupportChatbot from '../components/common/SupportChatbot';
import SupportPageClient from './SupportPageClient';

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-neutral-mist">
      <SupportPageClient />
      <SupportChatbot />
    </main>
  );
} 