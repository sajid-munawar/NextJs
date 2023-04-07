/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto:["'Roboto', sans-serif;"],
        crete:["'Crete Round', serif;"],
        poppins:["'Poppins', sans-serif;"],
      }, //end of fontFamily
      backgroundImage: {
        'hero-bg': "url('/bghero.png')",
      }
    },
  },
  plugins: [],
}