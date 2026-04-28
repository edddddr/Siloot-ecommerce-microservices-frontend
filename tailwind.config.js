/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { // Move colors inside extend
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      colors: {
        brand: {
          white: "#FFFFFF",
          dark: "#363738",
          light: "#F5F5F5",
          cream: "#FEFAF1",
          accent: "#DB4444",
        },
        content: {
          light: "#EEEEEE",
          muted: "#7D8184",
          dark: "#000000",
        },
        btn: {
          black: "#000000",
          success: "#00FF66",
          danger: "#DB4444",
          hoverRed: "#E07575",
          hoverBlue: "#A0BCE0",
        },
      },
    },
  },
  plugins: [],
}
