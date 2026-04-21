// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
        // Branding & Backgrounds
        brand: {
          white: "#FFFFFF",      // Primary / BG
          dark: "#363738",       // Primary1
          light: "#F5F5F5",      // Secondary
          cream: "#FEFAF1",      // Secondary1
          accent: "#DB4444",     // Secondary 2
        },
        // Text specific tokens
        content: {
          light: "#EEEEEE",      // Text
          muted: "#7D8184",      // Text1
          dark: "#000000",       // Text2
        },
        // Button specific tokens
        btn: {
          black: "#000000",      // Button
          success: "#00FF66",    // Button1
          danger: "#DB4444",     // Button2
          hoverRed: "#E07575",   // Hover Button 1
          hoverBlue: "#A0BCE0",  // Hover Button 2
        },
      },
  },
  plugins: [],
}

