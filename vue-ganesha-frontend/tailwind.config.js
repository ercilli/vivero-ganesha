/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ganesha': {
          green: {
            50: '#f0f9f0',
            100: '#dcf2dc',
            500: '#16a34a',
            600: '#15803d',
            700: '#166534',
            800: '#14532d',
            900: '#052e16'
          },
          amber: {
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706'
          }
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      animation: {
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}
