/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1E63B5',
          'blue-dark': '#0F2D52',
          'blue-light': '#3B8ED0',
          gold: '#F4B223',
          'gold-light': '#FFD54F',
          'gold-dark': '#C99000',
          white: '#FFFFFF',
          'gray-light': '#F8FAFC',
          'gray': '#64748B',
          'gray-dark': '#334155',
          navy: '#0F2D52',
        }
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #1E63B5 0%, #3B8ED0 50%, #1E63B5 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F4B223 0%, #FFD54F 50%, #F4B223 100%)',
        'gradient-hero': 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F0F7FF 100%)',
        'gradient-card': 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #1E63B5, 0 0 10px #1E63B5' },
          '100%': { boxShadow: '0 0 20px #1E63B5, 0 0 40px #F4B223' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'blue': '0 0 20px rgba(30, 99, 181, 0.3)',
        'gold': '0 0 20px rgba(244, 178, 35, 0.3)',
        'card': '0 4px 20px rgba(15, 45, 82, 0.08)',
        'card-hover': '0 8px 30px rgba(30, 99, 181, 0.15)',
        'glass': '0 8px 32px 0 rgba(30, 99, 181, 0.1)',
      },
    },
  },
  plugins: [],
}
