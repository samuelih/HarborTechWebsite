import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources | Harbor Technology Consulting',
  description: 'Helpful resources and tools for business technology optimization',
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-blue to-secondary-lightblue">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-cinzel">
            Resources
          </h1>
          <p className="text-xl text-white/90 mb-12">
            Stay connected with Harbor Technology Consulting and explore our resources.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/resources/social-media" 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 max-w-md"
            >
              <h2 className="text-xl font-semibold text-white mb-3">Social Media</h2>
              <p className="text-white/80">
                Connect with us on Instagram, LinkedIn, and TikTok for technology insights, business tips, and behind-the-scenes content.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="text-white/60 text-sm bg-white/10 px-2 py-1 rounded">Instagram</span>
                <span className="text-white/60 text-sm bg-white/10 px-2 py-1 rounded">LinkedIn</span>
                <span className="text-white/60 text-sm bg-white/10 px-2 py-1 rounded">TikTok</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 