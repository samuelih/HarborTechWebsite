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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Neutral Background Colors (60%)
        neutral: {
          mist: "#E6F4FF", // Main page background, large cards, hero sections
          gull: "#F5F7FA", // Alt rows, subtle separators, form fields
        },
        // Brand Colors (30%)
        primary: {
          blue: "#2B6CB0", // Primary buttons, links, focus rings
          sky: "#4A90E2", // Secondary buttons, hovers, small badges
          navy: "#1F314F", // Headlines, nav bar text, body copy on light BG
        },
        // Accent Colors (10%)
        accent: {
          sand: "#F7F1E3", // Banner scrolls, highlight boxes, cards behind illustrations
          gold: "#FFB55A", // Call-to-action icons, success states, subtle gradients
          seafoam: "#3FB8C4", // Info chips, hover accents, secondary icons
        },
        // Legacy colors for backward compatibility
        nautical: {
          deepBlue: "#1F314F", // Using primary navy
          azure: "#4A90E2", // Using primary sky
          seafoam: "#3FB8C4", // Using accent seafoam
          sand: "#F7F1E3", // Using accent sand
          sunset: "#FFB55A", // Using accent gold
          rope: "#FFB55A", // Using accent gold
        },
        // System colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #E6F4FF 0%, #2B6CB0 100%)',
        'nautical-gradient': 'linear-gradient(135deg, #1F314F 0%, #4A90E2 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #FFB55A 0%, #3FB8C4 100%)',
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} 