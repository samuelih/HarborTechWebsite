import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-navy to-primary-blue">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-display font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-display text-white mb-4">Page Not Found</h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 drop-shadow-lg max-w-md mx-auto">
            Don't worry! Let's navigate you back to safe waters. Check out our services or head back home.
          </p>
        </div>
        
        <div className="space-y-3 max-w-xs mx-auto">
          <Link href="/" className="flex items-center justify-center btn-primary w-full">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
            Back to Home Port
          </Link>
          <Link href="/contact" className="text-white hover:text-accent-sand underline">
            Or explore our solutions →
          </Link>
        </div>
      </div>
    </div>
  );
} 