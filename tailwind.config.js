/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Sen":["Sen"],
        "Outfit":["Outfit"]
      },
      colors:{
        "primary":"#3F9142",
        "secondary":"#EEF6EF",
        "text-color":"#1B281B",
        "bg-white":"#FBFDFC"
      }
    },
  },
  plugins: [],
}