/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem"
      },
      screens: {
        xs: "100%",
        sm: "640px",
        md: "768px", 
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // New Color Scheme (60/30/10 rule)
        neutral: {
          mist:  '#E6F4FF', // 60% - default page backgrounds
          gull:  '#F5F7FA', // subtle section & hover backgrounds
        },
        primary: {
          navy:  '#0E2A47', // headings, nav links, high-contrast text
          blue:  '#1E5086', // buttons, key icons
          sky:   '#4682B4', // hovers, secondary accents
        },
        accent: {
          sand:   '#F8EFD4', // call-out backgrounds
          gold:   '#F0B254', // highlights / badges
          sea:    '#3CAEA3', // success states
        },
        // System colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0E2A47 0%, #1E5086 50%, #4682B4 100%)',
        'nautical-gradient': 'linear-gradient(135deg, #0E2A47 0%, #1E5086 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #F0B254 0%, #3CAEA3 100%)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: [
          'var(--font-cinzel)',
          'Cinzel',
          'serif',
        ],
        sans: [
          'Times New Roman',
          'Times',
          'serif',
        ],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'html': '18px',
        'h1': '3rem',
        'h2': '2rem', 
        'h3': '1.5rem',
      },
      maxWidth: {
        'content': '1280px', // max-w-7xl equivalent
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-up": {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out",
      },
      backdropFilter: {
        'glass': 'blur(12px)',
      },
      screens: {
        'xs': '400px',
      },
      spacing: {
        'mobile-section': '3rem',
        'tablet-section': '4rem',
        'desktop-section': '5rem',
        '20': '5rem', // scroll-mt-20 utility
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
} 