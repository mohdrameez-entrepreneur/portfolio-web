/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#ffffff',
        apple: {
          bg: '#fbfbfd',
          subtle: '#f5f5f7',
          card: '#ffffff',
          border: 'rgba(0, 0, 0, 0.08)',
          borderLight: 'rgba(0, 0, 0, 0.04)',
          text: '#1d1d1f',
          secondary: '#424245',
          muted: '#86868b',
        },
        brand: {
          blue: '#0071e3',
          blueHover: '#0058b0',
          blueSoft: '#f0f7ff',
          gold: '#b48a28',
          goldLight: '#d4af37',
          goldSoft: '#fcf8ec',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
      }
    }
  },
  plugins: []
};