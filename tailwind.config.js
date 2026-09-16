/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#000000",
        surfaceDark: "#111113",
        textLight: "#F5F5F7",
        appleBlack: "#000000",
        appleDark: "#0A0A0A",
        appleGraphite: "#161618",
        appleCharcoal: "#1C1C1E",
        appleSurface: "#242426",
        appleGray: "#2C2C2E",
        appleText: "#F5F5F7",
        appleSecondary: "#A1A1A6",
        appleMuted: "#6E6E73",
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Inter"', 'sans-serif'],
        apple: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Inter"', 'sans-serif'],
        berkshire: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Inter"', 'sans-serif'],
        bellota: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"Inter"', 'sans-serif'],
        romantic: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"Inter"', 'sans-serif'],
        kanit: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Inter"', 'sans-serif'],
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
