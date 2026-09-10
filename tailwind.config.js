/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0C0C0C",
        textLight: "#D7E2EA",
        accentPurple: "#7621B0",
        accentPink: "#B600A8",
        accentBlue: "#3B82F6",
        accentCyan: "#06B6D4",
        gradientStart: "#18011F",
        gradientEnd: "#BE4C00",
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
