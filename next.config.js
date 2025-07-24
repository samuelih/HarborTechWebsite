/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure images from external sources work
  images: {
    domains: ['localhost'],
    unoptimized: false
  },
  
  // Security headers and redirects
  async redirects() {
    return [
      // Redirect old solutions page to new pricing structure
      {
        source: '/solutions',
        destination: '/pricing/business-upgrades',
        permanent: true,
      },
      // Handle solutions with hash fragments
      {
        source: '/solutions/:path*',
        destination: '/pricing/business-upgrades',
        permanent: true,
      },
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.harbortech.org',
          },
        ],
        destination: 'https://harbortech.org/:path*',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 