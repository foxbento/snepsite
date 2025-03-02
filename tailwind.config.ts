import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'himalaya': {
          ice: '#f4f7f9',      // Light background
          mist: '#d9e0e6',     // Sidebar background
          stone: '#b3c1cd',    // UI elements
          shadow: '#7d8a95',   // Secondary text
          peak: '#4a5159',     // Primary text
          accent: '#c0d2e4',   // Highlights
          deep: '#435163'      // Important elements
        }
      },
      fontFamily: {
        serif: ['var(--font-libre-baskerville)', 'serif'],
        sans: ['var(--font-work-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config