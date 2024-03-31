/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", './public/*.html'],
  theme: {
    extend: {
      colors:{
      } 
    },
  },
  plugins: [require("daisyui")],


    daisyui: {
      themes: [       
        { mytheme: {
          "primary": "#ff0000",
          "secondary": "#cc0000",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },},
      ],
    },
  }