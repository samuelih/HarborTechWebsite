"use client";

import { useRef, useState, useEffect } from 'react';

interface CalendlyEmbedProps {
  /** Calendly scheduling page URL */
  url?: string;
  /** Whether to load the embed immediately or wait for intersection */
  autoLoad?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * CalendlyEmbed Component
 * 
 * Simple iframe-based Calendly embed that's static and unscrollable.
 * Optimized for reliability and mobile responsiveness.
 */
const CalendlyEmbed = ({ 
  url = "https://calendly.com/samuelih-umich/30min",
  autoLoad = true,
  className = ""
}: CalendlyEmbedProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (autoLoad) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoLoad]);

  return (
    <div 
      ref={containerRef}
      className={`calendly-embed-container ${className}`}
    >
      {/* Loading placeholder */}
      {!isVisible && (
        <div className="calendly-loading">
          <div className="animate-pulse bg-neutral-gull rounded-xl p-6 sm:p-8 min-h-[800px] sm:min-h-[900px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-primary-blue rounded-full animate-bounce flex items-center justify-center">
                <svg 
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </div>
              <p className="text-primary-navy font-cinzel text-base sm:text-lg">
                Loading scheduling calendar...
              </p>
              <p className="text-primary-navy/70 text-sm mt-2">
                This may take a few seconds
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Calendly iframe */}
      {isVisible && (
        <div className="calendly-iframe-container">
          <iframe
            src={url}
            width="100%"
            height="1000"
            frameBorder="0"
            scrolling="no"
            title="Schedule a consultation with Harbor Tech"
            className="calendly-iframe"
          />
        </div>
      )}

      {/* Custom styling */}
      <style jsx>{`
        .calendly-embed-container {
          width: 100%;
          margin: 0 auto;
          position: relative;
        }

        .calendly-iframe-container {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid #E6F4FF;
          box-shadow: 0 20px 25px -5px rgba(14, 42, 71, 0.1), 
                      0 10px 10px -5px rgba(14, 42, 71, 0.04);
          position: relative;
        }

        .calendly-iframe-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #1E5086, #4682B4, #3CAEA3);
          z-index: 1;
        }

        .calendly-iframe {
          width: 100% !important;
          height: 1000px !important;
          border: none !important;
          border-radius: inherit !important;
          display: block;
          overflow: hidden;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .calendly-iframe-container {
            border-radius: 0.75rem;
            margin: 0 -0.5rem;
          }
          
          .calendly-iframe {
            height: 900px !important;
          }
          
          .calendly-loading .animate-pulse {
            min-height: 850px;
            padding: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .calendly-iframe-container {
            border-radius: 0.5rem;
            margin: 0 -1rem;
          }
          
          .calendly-iframe {
            height: 850px !important;
          }
          
          .calendly-loading .animate-pulse {
            min-height: 800px;
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .calendly-iframe-container {
            border-radius: 0.25rem;
            margin: 0 -0.75rem;
          }
          
          .calendly-iframe {
            height: 800px !important;
          }
          
          .calendly-loading .animate-pulse {
            min-height: 750px;
          }
        }

        /* Loading state improvements */
        .calendly-loading {
          width: 100%;
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .calendly-iframe-container {
            transition: none;
          }
          
          .calendly-loading .animate-pulse {
            animation: none;
          }
          
          .calendly-loading .animate-bounce {
            animation: none;
          }
        }

        /* Focus states for better accessibility */
        .calendly-iframe:focus {
          outline: 2px solid #1E5086;
          outline-offset: 2px;
        }

        /* Hide any potential scrollbars */
        .calendly-iframe-container {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CalendlyEmbed; 