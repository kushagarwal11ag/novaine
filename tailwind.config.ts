import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        novaine: {
          purple: '#8e147e',
          'purple-dark': '#720e64',
          'purple-light': '#fdf2f8',
          yellow: '#f4b400',
          'yellow-hover': '#dfa400',
          'yellow-light': '#fef9c3',
        },
        brand: {
          dark: '#111827',
          surface: '#1f2937',
          border: '#e5e7eb',
          muted: '#6b7280',
          light: '#f9fafb'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 10px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 28px rgba(142, 20, 126, 0.12)',
      }
    },
  },
  plugins: [],
};

export default config;
