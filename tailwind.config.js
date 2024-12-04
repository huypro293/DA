/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#ee4d2d",
        background_color: "#fef6f5"
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        }
      }
    },
  },
  plugins: [],
}
