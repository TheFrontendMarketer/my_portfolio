/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "siteOrange": "#ef7360",
        "siteBgColor": "#131728"
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}