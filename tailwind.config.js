/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customPurple: '#A486F9',
        customWhite: '#FAF4F4',
        headingColor: '#310062',
        subColor: '#5704C1',

      },
      backgroundImage:{
        'hero-pattern': "url('/src/assets/backgroundimage.jpg')",
      },
      fontFamily:{
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}