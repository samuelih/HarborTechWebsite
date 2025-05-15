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
        // Neutral Background Colors (60%)
        neutral: {
          mist: "#E6F4FF", // Light blue background
          gull: "#F5F7FA", // Even lighter accents
        },
        // Brand Colors (30%)
        primary: {
          navy: "#0E2A47", // Deep navy blue - darkest shade
          blue: "#1E5086", // Mid-tone blue - main brand color
          sky: "#4682B4", // Steel blue - lighter accent
        },
        // Accent Colors (10%)
        accent: {
          sand: "#F8EFD4", // Soft cream/sand
          gold: "#F0B254", // Warm golden accent
          seafoam: "#3CAEA3", // Teal accent
        },
        // Legacy colors for backward compatibility
        nautical: {
          deepBlue: "#0E2A47", // Using primary navy
          azure: "#4682B4", // Using primary sky
          seafoam: "#3CAEA3", // Using accent seafoam
          sand: "#F8EFD4", // Using accent sand
          sunset: "#F0B254", // Using accent gold
          rope: "#F0B254", // Using accent gold
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
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
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
        "wave": {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        "gentle-float": {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        "slow-spin": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        "shimmer": {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0.9 },
        },
        "bubble-rise": {
          '0%': { transform: 'translateY(0) scale(1)', opacity: 0.6 },
          '50%': { opacity: 0.8 },
          '100%': { transform: 'translateY(-40px) scale(0.5)', opacity: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wave": "wave 4s linear infinite",
        "gentle-float": "gentle-float 6s ease-in-out infinite",
        "slow-spin": "slow-spin 20s linear infinite",
        "shimmer": "shimmer 8s ease-in-out infinite",
        "bubble-rise": "bubble-rise 3s ease-in-out infinite",
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
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 