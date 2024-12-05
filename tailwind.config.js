/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#C543AA",
        serviesBg1:"#FFDB95",
        serviesBg2:"#9DEDC6",serviesBg3:"#FFBC9F",
        bodyBg:'#F3F4F6',
        green : '#3B82F6',
        titleBlue:'#1E3A8A',
        desGray:'#4B5563'
        
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
    screens: {
      'sm': '640px', // Small screens
      'md': '768px', // Medium screens (tablet)
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra large screens
      '2xl': '1536px', // Double extra large screens
    },
  },
  plugins: [],
};
