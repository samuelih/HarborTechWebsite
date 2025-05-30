import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-navy to-primary-blue">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-display font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-display text-white mb-4">Page Not Found</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Looks like you've sailed into uncharted waters. Let's get you back on course.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/" 
            className="btn-primary bg-white text-primary-navy hover:bg-accent-sand inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
            Return Home
          </Link>
          
          <div className="text-white/60 text-sm">
            Or try these popular pages:
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="text-white hover:text-accent-sand underline">
              Services
            </Link>
            <Link href="/pricing" className="text-white hover:text-accent-sand underline">
              Pricing
            </Link>
            <Link href="/contact" className="text-white hover:text-accent-sand underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 