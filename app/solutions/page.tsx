import { redirect } from 'next/navigation';

export default function SolutionsPage() {
  // 301 redirect to new pricing page for backward compatibility
  redirect('/pricing/business-upgrades');
} 