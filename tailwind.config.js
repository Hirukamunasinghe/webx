/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors:{
        customPurple: '#A486F9',
        customWhite: '#FAF4F4',
        headingColor: '#310062',
        subColor: '#5704C1',
        sectionBg: '#EAE6F5'
      },
      backgroundImage:{
        'hero-pattern': "url('/src/assets/backgroundimagetwo.png')",
        'hero-contact': "url('/src/assets/contactuss.jpg')"
      },
      fontFamily:{
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}