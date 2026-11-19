/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          DEFAULT: "#F5EBD0",
          50: "#FAF6EC",
          100: "#F5EBD0",
          200: "#EEDDB5",
          300: "#E2CA96",
          400: "#D4B473",
          500: "#BFA059",
        },
        wine: {
          DEFAULT: "#7F011F",
          50: "#FDF2F4",
          100: "#FCE7EB",
          200: "#F8C5CD",
          300: "#F195A4",
          400: "#DF526D",
          500: "#BF1A3E",
          600: "#A30528",
          700: "#7F011F",
          800: "#630018",
          900: "#4A0012",
        },
        darkBg: "#F5EBD0",
        surfaceDark: "#EEDDB5",
        textLight: "#7F011F",
        appleBlack: "#F5EBD0",
        appleDark: "#FAF6EC",
        appleGraphite: "#EEDDB5",
        appleCharcoal: "#E8D5A7",
        appleSurface: "#E2CA96",
        appleGray: "#DCC188",
        appleText: "#7F011F",
        appleSecondary: "#9A3E4E",
        appleMuted: "#B86675",
      },
      fontFamily: {
        sans: ['"Great Sailor"', 'Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Great Sailor"', 'Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"Great Sailor"', 'Cinzel', 'ui-monospace', 'monospace'],
        display: ['"Great Sailor"', 'Cinzel', '"Cormorant Garamond"', 'serif'],
        apple: ['"Great Sailor"', 'Cinzel', '"Cormorant Garamond"', 'Georgia', 'serif'],
        berkshire: ['"Great Sailor"', 'Cinzel Decorative', 'serif'],
        bellota: ['"Great Sailor"', 'Cinzel', 'serif'],
        romantic: ['"Great Sailor"', 'Cinzel Decorative', 'serif'],
        kanit: ['"Great Sailor"', 'Cinzel', 'serif'],
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
